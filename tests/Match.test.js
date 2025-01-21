const Match = require("../src/Match")

describe('Match', () => {

    let match
    beforeEach(() => {
        match = new Match("HomeTeam", "AwayTeam")
    })

    it("should have creation date", () => {
        expect(match.created).toBeInstanceOf(Date)
    })

    it("should be created with valid team names", () => {
        expect(match.homeTeamName).toEqual("HomeTeam")
        expect(match.awayTeamName).toEqual("AwayTeam")
    })
    
    it("should throw an error when team names are invalid", () => {
        expect(new Match()).toThrow()
        expect(new Match("Team")).toThrow()
        expect(new Match("Team", 1)).toThrow()
        expect(new Match(1, "Team")).toThrow()
        expect(new Match("Team", "")).toThrow()
    })

    it("should have score 0-0 by default", () => {
        expect(match.homeTeamScore).toEqual(0)
        expect(match.awayTeamScore).toEqual(0)
    })

    it("should update score", () => {
        match.setScore(1, 2)
        expect(match.homeTeamScore).toEqual(1)
        expect(match.awayTeamName).toEqual(2)

        match.setScore(0, 0)
        expect(match.homeTeamScore).toEqual(0)
        expect(match.awayTeamName).toEqual(0)
    })

    it("should throw an error when updating with invalid score", () => {
        expect(match.setScore()).toThrow()
        expect(match.setScore(1)).toThrow()
        expect(match.setScore(-1, 0)).toThrow()
        expect(match.setScore("0", 0)).toThrow()
        expect(match.setScore(0, "1")).toThrow()
    })

    it("should calculate total score", () => {
        expect(match.totalScore).toEqual(0)

        match.setScore(1, 2)
        expect(match.totalScore).toEqual(3)

        match.setScore(300, 200)
        expect(match.totalScore).toEqual(500)
    })

})