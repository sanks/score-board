const { ValidationError, MatchExistsError, MatchNotFoundError } = require("../src/Errors")

describe("Custom Error Classes", () => {

    it("ValidationError should be instantiated correctly", () => {
        const errorMessage = "Validation error occurred"
        const error = new ValidationError(errorMessage)
        
        expect(error).toBeInstanceOf(ValidationError)
        expect(error).toBeInstanceOf(Error)
        expect(error.message).toBe(errorMessage)
        expect(error.name).toBe("ValidationError")
    })

    it("MatchExistsError should be instantiated correctly", () => {
        const errorMessage = "Match already exists"
        const error = new MatchExistsError(errorMessage)
        
        expect(error).toBeInstanceOf(MatchExistsError)
        expect(error).toBeInstanceOf(Error)
        expect(error.message).toBe(errorMessage)
        expect(error.name).toBe("MatchExistsError")
    })

    it("MatchNotFoundError should be instantiated correctly", () => {
        const errorMessage = "Match not found"
        const error = new MatchNotFoundError(errorMessage)
        
        expect(error).toBeInstanceOf(MatchNotFoundError)
        expect(error).toBeInstanceOf(Error)
        expect(error.message).toBe(errorMessage)
        expect(error.name).toBe("MatchNotFoundError")
    })
    
})