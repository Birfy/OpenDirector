class n {
  constructor(e) {
    this.stage = e;
  }
}
export class h0 extends n {
  execute(e) {
    this.preprocess(e);
  }
  constructor() {
    super("preprocess");
  }
}
export class aR extends n {
  execute(e) {
    this.validate(e);
  }
  constructor() {
    super("validate");
  }
}
export class Yc extends n {
  execute(e) {
    this.executeFormat(e);
  }
  constructor() {
    super("format");
  }
}
