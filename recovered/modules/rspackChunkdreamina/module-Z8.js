if (require.j == "wl4") var a = require("./module-A7.js");
export class j {
  notify() {
    this._onActive.fire();
  }
  constructor() {
    this._onActive = new a.v();
    this.onActive = this._onActive.event;
  }
}
