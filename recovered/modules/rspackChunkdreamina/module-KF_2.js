if (require.j == "wl4") var a = require("./module-A7.js");
export class J {
  get enable() {
    return this._enable;
  }
  get ready() {
    return true;
  }
  constructor() {
    this._onEnableChange = new a.v();
    this.onEnableChange = this._onEnableChange.event;
    this._onReady = new a.v();
    this.onReady = this._onReady.event;
    this._enable = true;
  }
}
