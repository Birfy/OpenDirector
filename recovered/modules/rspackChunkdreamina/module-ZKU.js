export default class extends Error {
  constructor(e) {
    super("validation failed");
    this.errors = e;
    this.ajv = this.validation = true;
  }
}
