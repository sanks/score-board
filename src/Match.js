class Match {
    homeTeamScore = 0
    awayTeamScore = 0

    constructor(homeTeam, awayTeam) {
        if (
            !homeTeam 
            || !awayTeam 
            || typeof homeTeam !== "string" 
            || typeof awayTeam !== "string"
        ) {
            throw new Error("Failed to create a match: please pass strings as homeTeam and awayTeam")
        }

        this.homeTeam = homeTeam
        this.awayTeam = awayTeam
    }

    static getId(homeTeam, awayTeam) {
        if (
            !homeTeam 
            || !awayTeam 
            || typeof homeTeam !== "string" 
            || typeof awayTeam !== "string"
        ) {
            throw new Error("Failed to get match ID: please pass strings as homeTeam and awayTeam")
        }
        
        return homeTeam + awayTeam
    }

    setScore(homeTeamScore, awayTeamScore) {
        if (
            typeof homeTeamScore !== "number"
            || typeof awayTeamScore !== "number"
            || homeTeamScore < 0
            || awayTeamScore < 0
            || !Number.isInteger(homeTeamScore)
            || !Number.isInteger(awayTeamScore)
        ) {
            throw new Error("Failed to set score: please pass positive integers for homeTeamScore and awayTeamScore")
        }

        this.homeTeamScore = homeTeamScore
        this.awayTeamScore = awayTeamScore
    }

    get id() {
        return Match.getId(this.homeTeam, this.awayTeam)
    }

    get totalScore() {
        return this.homeTeamScore + this.awayTeamScore
    }
}

module.exports = Match