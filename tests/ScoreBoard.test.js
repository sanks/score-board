const ScoreBoard = require("../src/ScoreBoard")
const Match = require("../src/Match")

describe('ScoreBoard', () => {

    let sb
    beforeEach(() => {
        sb = new ScoreBoard()
    })

    it("should start multiple matches", () => {
        sb.startMatch("Home1", "Away1")
        sb.startMatch("Home2", "Away2")
        expect(sb.getMatches()).toHaveLength(2)
    })

    it("should return match after creation", () => {
        const match = sb.startMatch("Home", "Away")
        expect(match).toBeInstanceOf(Match)
    })

    it("should throw an error if trying to start already existing match", () => {
        sb.startMatch("Home", "Away")
        expect(() => sb.startMatch("Home", "Away")).toThrow()
    })

    it("should throw an error if trying to start match with invalid params", () => {
        expect(() => sb.startMatch()).toThrow()
        expect(() => sb.startMatch("Team")).toThrow()
        expect(() => sb.startMatch("Team", 1)).toThrow()
        expect(() => sb.startMatch(1, "Team")).toThrow()
        expect(() => sb.startMatch("Team", "")).toThrow()
    })

    it("should finish match", () => {
        sb.startMatch("Home", "Away")
        expect(sb.getMatches()).toHaveLength(1)
        sb.finishMatch("Home", "Away")
        expect(sb.getMatches()).toHaveLength(0)
    })

    it("should throw an error if trying to finish non existing match", () => {
        expect(() => sb.finishMatch("A", "B")).toThrow()
    })

    it("should throw an error if trying to finish match with invalid params", () => {
        expect(() => sb.finishMatch()).toThrow()
        expect(() => sb.finishMatch("Team")).toThrow()
        expect(() => sb.finishMatch("Team", 1)).toThrow()
        expect(() => sb.finishMatch(1, "Team")).toThrow()
        expect(() => sb.finishMatch("Team", "")).toThrow()
    })

    it ("should return match by team names", () => {
        const match = sb.startMatch("Home", "Away")
        expect(sb.getMatch("Home", "Away")).toBe(match)
    })

    it ("should return null if match not found", () => {
        expect(sb.getMatch("Home", "Away")).toEqual(null)
    })

    it ("should throw an error if trying to get match with invalid params", () => {
        expect(() => sb.getMatch()).toThrow()
        expect(() => sb.getMatch("Team")).toThrow()
        expect(() => sb.getMatch("Team", 1)).toThrow()
        expect(() => sb.getMatch(1, "Team")).toThrow()
        expect(() => sb.getMatch("Team", "")).toThrow()
    })

    it("should return list of matches ordered by total score and creation date desc", () => {
        const match1 = sb.startMatch("Mexico", "Canada")
        match1.setScore(0, 5)
        const match2 = sb.startMatch("Spain", "Brazil")
        match2.setScore(10, 2)
        const match3 = sb.startMatch("Germany", "France")
        match3.setScore(2, 2)
        const match4 = sb.startMatch("Uruguay", "Italy")
        match4.setScore(6, 6)
        const match5 = sb.startMatch("Argentina", "Australia")
        match5.setScore(3, 1)

        expect(sb.getMatches()).toEqual([
            match4,
            match2,
            match1,
            match5,
            match3,
        ])
    })

})