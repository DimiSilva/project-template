class Conflict extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'Conflict'
        this.status = 409
    }
}

export default Conflict
