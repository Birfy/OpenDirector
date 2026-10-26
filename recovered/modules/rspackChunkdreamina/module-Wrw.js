export class v extends Function {
  get isStop() {
    return this._isStop;
  }
  run(...e) {
    let t;
    this._rawArguments = e;
    for (this.index = -1; this.hasNext() && !this._isStop;) {
      t = this.getNext()();
    }
    return t;
  }
  hasNext() {
    return this.index < this.middlewares.length - 1;
  }
  getNext(e = false) {
    let t = () => {};
    if (this.hasNext()) {
      this.index += 1;
      let e = this.middlewares[this.index];
      t = () =>
        e({
          stop: () => {
            this._isStop = true;
          },
          uiConfig: this._uiConfig,
          actionInfo: this.point,
          triggerArgs: this._rawArguments,
        });
    }
    return t;
  }
  constructor(e, t, r) {
    super();
    this.middlewares = e;
    this.point = t;
    this._uiConfig = r;
    this._isStop = false;
    this.index = 0;
    let a = (...e) => a.run(...e);
    a.middlewares = e;
    a.point =
      t != null
        ? t
        : {
            name: "",
            from: "",
            trigger: "",
            path: [],
          };
    a._uiConfig = r;
    return Object.setPrototypeOf(a, new.target.prototype);
  }
}
