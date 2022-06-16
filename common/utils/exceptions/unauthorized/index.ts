class Unauthorized extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'Unauthorized'
        this.status = 401
    }
}

export default Unauthorized
