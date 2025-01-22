const { MatchExistsError, MatchNotFoundError } = require("./Errors")
const Match = require("./Match")

class ScoreBoard {
    #matches = new Map()

    /**
     * Creates a new ScoreBoard instance.
     */
    constructor() {}

    /**
     * Starts a new match between the specified home and away teams.
     * @param {string} homeTeam - The name of the home team.
     * @param {string} awayTeam - The name of the away team.
     * @returns {Match} The newly created Match instance.
     * @throws {MatchExistsError} If a match with the specified teams already exists.
     * @throws {ValidationError} If the team names are invalid.
     */
    startMatch(homeTeam, awayTeam) {
        const match = new Match(homeTeam, awayTeam)

        if (this.#matches.get(match.id)) {
            throw new MatchExistsError(`Match with teams "${homeTeam}" and "${awayTeam}" already exists`)
        }

        this.#matches.set(match.id, match)
        return match
    }

    /**
     * Retrieves an existing match between the specified home and away teams.
     * @param {string} homeTeam - The name of the home team.
     * @param {string} awayTeam - The name of the away team.
     * @returns {Match|null} The Match instance if found, otherwise null.
     * @throws {ValidationError} If the team names are invalid.
     */
    getMatch(homeTeam, awayTeam) {
        Match.validateTeams({
            homeTeam, 
            awayTeam, 
            errorText: "Failed to get match: please pass strings as homeTeam and awayTeam"
        })
        const matchId = Match.getId(homeTeam, awayTeam)
        return this.#matches.get(matchId) || null
    }

    /**
     * Retrieves all matches, sorted by total score in descending order and by creation date in descending order if scores are equal.
     * @returns {Array<Match>} An array of Match instances.
     */
    getMatches() {
        const matches = [...this.#matches.values()]
        // sort matches by total score and creation date desc
        return matches.sort((a, b) => {
            if (a.totalScore !== b.totalScore) {
                return b.totalScore - a.totalScore
            }
            return matches.indexOf(b) - matches.indexOf(a)
        })
    }

    /**
     * Finishes and removes the match between the specified home and away teams.
     * @param {string} homeTeam - The name of the home team.
     * @param {string} awayTeam - The name of the away team.
     * @throws {ValidationError} If the team names are invalid.
     * @throws {MatchNotFoundError} If the match is not found.
     */
    finishMatch(homeTeam, awayTeam) {
        Match.validateTeams({
            homeTeam, 
            awayTeam, 
            errorText: "Failed to finish match: please pass strings as homeTeam and awayTeam"
        })
        const matchId = Match.getId(homeTeam, awayTeam)
        const isDeleted = this.#matches.delete(matchId)
        if (!isDeleted) {
            throw new MatchNotFoundError("Failed to delete match: match not found")
        }
    }

}

module.exports = ScoreBoard