class NotFound extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'NotFound'
        this.status = 404
    }
}

export default NotFound
