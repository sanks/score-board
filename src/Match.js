class Match {

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
        this.homeTeamScore = 0
        this.awayTeamScore = 0
        this.created = new Date()
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

    get totalScore() {
        return this.homeTeamScore + this.awayTeamScore
    }

}

module.exports = Match