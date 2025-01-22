const { ValidationError } = require("../src/Errors")
const Match = require("../src/Match")

describe('Match', () => {

    let match
    beforeEach(() => {
        match = new Match("HomeTeam", "AwayTeam")
    })

    it("should have ID", () => {
        expect(match.id).toEqual("HomeTeamAwayTeam")
    })

    it("should be created with valid team names", () => {
        expect(match.homeTeam).toEqual("HomeTeam")
        expect(match.awayTeam).toEqual("AwayTeam")
    })
    
    it("should throw an error when team names are invalid", () => {
        expect(() => new Match()).toThrow(ValidationError)
        expect(() => new Match("Team")).toThrow(ValidationError)
        expect(() => new Match("Team", 1)).toThrow(ValidationError)
        expect(() => new Match(1, "Team")).toThrow(ValidationError)
        expect(() => new Match("Team", "")).toThrow(ValidationError)
    })

    it("should have score 0-0 by default", () => {
        expect(match.homeTeamScore).toEqual(0)
        expect(match.awayTeamScore).toEqual(0)
    })

    it("should update score", () => {
        match.setScore(1, 2)
        expect(match.homeTeamScore).toEqual(1)
        expect(match.awayTeamScore).toEqual(2)

        match.setScore(0, 0)
        expect(match.homeTeamScore).toEqual(0)
        expect(match.awayTeamScore).toEqual(0)
    })

    it("should throw an error when updating with invalid score", () => {
        expect(() => match.setScore()).toThrow(ValidationError)
        expect(() => match.setScore(1)).toThrow(ValidationError)
        expect(() => match.setScore(1.2, 1)).toThrow(ValidationError)
        expect(() => match.setScore(1, 0.5)).toThrow(ValidationError)
        expect(() => match.setScore(NaN, 0)).toThrow(ValidationError)
        expect(() => match.setScore(-1, 0)).toThrow(ValidationError)
        expect(() => match.setScore("0", 0)).toThrow(ValidationError)
        expect(() => match.setScore(0, "1")).toThrow(ValidationError)
    })

    it("should calculate total score", () => {
        expect(match.totalScore).toEqual(0)

        match.setScore(1, 2)
        expect(match.totalScore).toEqual(3)

        match.setScore(300, 200)
        expect(match.totalScore).toEqual(500)
    })

})