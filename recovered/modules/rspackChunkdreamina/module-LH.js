export class DADraftVerifyResult {
  constructor() {
    this.errors = [];
  }
  succeed() {
    return this.errors.length === 0;
  }
  appendError(e) {
    this.errors.push(e);
  }
  printErrorMsg() {
    let e = "";
    this.errors.forEach((t) => {
      e += t + "\n";
    });
    return e;
  }
}
