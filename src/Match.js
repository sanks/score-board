const { ValidationError } = require("./Errors")

class Match {
    homeTeamScore = 0
    awayTeamScore = 0

    /**
     * Creates a new Match instance.
     * @param {string} homeTeam - The name of the home team.
     * @param {string} awayTeam - The name of the away team.
     * @throws {ValidationError} If the team names are invalid.
     */
    constructor(homeTeam, awayTeam) {
        Match.validateTeams({
            homeTeam, 
            awayTeam, 
            errorText: "Failed to create a match: please pass strings as homeTeam and awayTeam"
        })
        this.homeTeam = homeTeam
        this.awayTeam = awayTeam
    }

    /**
     * Sets the score for the match.
     * @param {number} homeTeamScore - The score of the home team.
     * @param {number} awayTeamScore - The score of the away team.
     * @throws {ValidationError} If the scores are not positive integers.
     */
    setScore(homeTeamScore, awayTeamScore) {
        if (
            typeof homeTeamScore !== "number"
            || typeof awayTeamScore !== "number"
            || homeTeamScore < 0
            || awayTeamScore < 0
            || !Number.isInteger(homeTeamScore)
            || !Number.isInteger(awayTeamScore)
        ) {
            throw new ValidationError("Failed to set score: please pass positive integers for homeTeamScore and awayTeamScore")
        }

        this.homeTeamScore = homeTeamScore
        this.awayTeamScore = awayTeamScore
    }

    /**
     * Gets the unique ID for the match.
     * @returns {string} The unique ID for the match.
     */
    get id() {
        return Match.getId(this.homeTeam, this.awayTeam)
    }

    /**
     * Gets the total score for the match.
     * @returns {number} The total score for the match.
     */
    get totalScore() {
        return this.homeTeamScore + this.awayTeamScore
    }

    /**
     * Generates a unique ID for the match based on the team names.
     * @param {string} homeTeam - The name of the home team.
     * @param {string} awayTeam - The name of the away team.
     * @returns {string} The unique ID for the match.
     * @throws {ValidationError} If the team names are invalid.
     */
    static getId(homeTeam, awayTeam) {
        Match.validateTeams({ 
            homeTeam, 
            awayTeam, 
            errorText: "Failed to get match ID: please pass strings as homeTeam and awayTeam"
        })
        return `${homeTeam}${awayTeam}`
    }

    /**
     * Validates the team names.
     * @param {string} homeTeam - The name of the home team.
     * @param {string} awayTeam - The name of the away team.
     * @throws {ValidationError} If the team names are invalid.
     */
    static validateTeams({ homeTeam, awayTeam, errorText } = {}) {
        if (
            !homeTeam 
            || !awayTeam 
            || typeof homeTeam !== "string" 
            || typeof awayTeam !== "string"
        ) {
            throw new ValidationError(errorText)
        }
    }
}

module.exports = Match