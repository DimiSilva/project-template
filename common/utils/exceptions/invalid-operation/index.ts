class InvalidOperation extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'InvalidOperation'
        this.status = 400
    }
}

export default InvalidOperation
