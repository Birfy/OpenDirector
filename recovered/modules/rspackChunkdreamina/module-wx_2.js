if (require.j == "wl4") var a = require("./module-Dm.js");
export class y {
  get deadline() {
    return this._deadline;
  }
  setFrameRate(e) {
    a.X3(e > 0 && e <= 125);
    this._yieldInterval = Math.floor(1000 / e);
  }
  resetFrameRate() {
    this._yieldInterval = 16;
  }
  requestHostTimeout(e, t) {
    a.X3(this._timeoutId === -1, "has request host timeout.");
    clearTimeout(this._timeoutId);
    this._timeoutId = setTimeout(() => {
      this._timeoutId = -1;
      e();
    }, t);
  }
  cancelHostTimeout() {
    clearTimeout(this._timeoutId);
    this._timeoutId = -1;
  }
  constructor() {
    this._timeoutId = -1;
    this._deadline = 0;
    this._yieldInterval = 16;
  }
}
