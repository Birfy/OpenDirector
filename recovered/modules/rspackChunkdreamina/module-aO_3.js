if (require.j == "wl4") {
  var a;
  var o;
  var i = require("./module-Dm.js");
}
if (require.j == "wl4") var n = require("./module-A7.js");
a = o || (o = {});
a[(a.Unlocked = 0)] = "Unlocked";
a[(a.Locked = 1)] = "Locked";
export class nS {
  get status() {
    return this._status;
  }
  acquire() {
    i.X3(this._status === 0);
    this._status = 1;
  }
  release() {
    i.X3(this._status === 1);
    this._status = 0;
    this._onUnlocked.fire();
  }
  constructor() {
    this._onUnlocked = new n.v();
    this._status = 0;
    this.onUnlocked = this._onUnlocked.event;
  }
}
export class US {
  get status() {
    return this._status;
  }
  get counter() {
    return this._counter;
  }
  acquire() {
    if (this._status === 0) {
      this._status = 1;
    }
    this._counter++;
  }
  release() {
    i.X3(this._counter > 0);
    this._counter--;
    if (this._counter === 0) {
      this._status = 0;
      this._onUnlocked.fire();
    }
  }
  constructor() {
    this._onUnlocked = new n.v();
    this._status = 0;
    this._counter = 0;
    this.onUnlocked = this._onUnlocked.event;
  }
}
export { o as J4 };
