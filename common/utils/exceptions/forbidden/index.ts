class Forbidden extends Error {
  constructor(message: string) {
    super(message);
    this.name = "Forbidden";
    this.status = 403;
  }
}

export default Forbidden;
