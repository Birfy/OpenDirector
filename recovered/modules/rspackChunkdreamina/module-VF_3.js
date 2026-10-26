if (require.j == "wl4") var a = require("./module-Dm.js");
export class Y {
  getCallback() {
    return this._callback;
  }
  setCallback(e) {
    a.X3(this._callback === undefined, "cant overlay callback.");
    this._callback = e;
  }
  clearCallback() {
    this._callback = undefined;
  }
  getStartTime() {
    return this._startTime;
  }
  setStartTime(e) {
    this._startTime = e;
  }
  getExpirationTime() {
    return this._expirationTime;
  }
  setExpirationTime(e) {
    this._expirationTime = e;
  }
  setSortIndex(e) {
    this._sortIndex = e;
  }
  getSortIndex() {
    return this._sortIndex;
  }
  constructor(e, t, r) {
    this._startTime = t;
    this._expirationTime = r;
    this._sortIndex = -1;
    this._callback = e;
  }
}
