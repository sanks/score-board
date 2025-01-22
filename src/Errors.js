class ValidationError extends Error {
    constructor(message) {
        super(message)
        this.name = "ValidationError"
    }
}

class MatchExistsError extends Error {
    constructor(message) {
        super(message)
        this.name = "MatchExistsError"
    }
}

class MatchNotFoundError extends Error {
    constructor(message) {
        super(message)
        this.name = "MatchNotFoundError"
    }
}

module.exports = {
    ValidationError,
    MatchExistsError,
    MatchNotFoundError
}