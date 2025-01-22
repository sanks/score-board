const Match = require("./Match")

class ScoreBoard {
    #matches = new Map()

    startMatch(homeTeam, awayTeam) {
        const match = new Match(homeTeam, awayTeam)

        if (this.#matches.get(match.id)) {
            throw new Error(`Match with teams "${homeTeam}" and "${awayTeam}" already exists`)
        }

        this.#matches.set(match.id, match)
        return match
    }

    getMatch(homeTeam, awayTeam) {
        const matchId = Match.getId(homeTeam, awayTeam)
        return this.#matches.get(matchId) || null
    }

    getMatches() {
        // sort matches by total score and creation date desc
        const matches = [...this.#matches.values()]
        const matchesIdToIndexMap = new Map(matches.map((m, mIndex) => ([m.id, mIndex])))
        return matches.sort((a, b) => {
            if (a.totalScore !== b.totalScore) {
                return b.totalScore - a.totalScore
            }
            return matchesIdToIndexMap.get(b.id) - matchesIdToIndexMap.get(a.id)
        })
    }

    finishMatch(homeTeam, awayTeam) {
        const matchId = Match.getId(homeTeam, awayTeam)
        const isDeleted = this.#matches.delete(matchId)
        if (!isDeleted) {
            throw new Error("Failed to delete match: match not found")
        }
    }

}

module.exports = ScoreBoard