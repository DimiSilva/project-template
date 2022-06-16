class Internal extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'Internal'
        this.status = 500
    }
}

export default Internal
