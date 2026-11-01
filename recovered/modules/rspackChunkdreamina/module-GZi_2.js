import i from "TnJ";
import f from "./module-Hs_2.js";
const n = {};
function a(t) {
  i.equal(t.length, 8, "Invalid IV length");
  this.iv = Array(8);
  for (let e = 0; e < this.iv.length; e++) {
    this.iv[e] = t[e];
  }
}
export const instantiate = function (t) {
  function e(e) {
    t.call(this, e);
    this._cbcInit();
  }
  f(e, t);
  for (let r = Object.keys(n), i = 0; i < r.length; i++) {
    const a = r[i];
    e.prototype[a] = n[a];
  }
  e.create = function (t) {
    return new e(t);
  };
  return e;
};
n._cbcInit = function () {
  const t = new a(this.options.iv);
  this._cbcState = t;
};
n._update = function (t, e, r, i) {
  const _cbcState = this._cbcState;
  const prototype = this.constructor.super_.prototype;
  const a = _cbcState.iv;
  if (this.type === "encrypt") {
    for (var s = 0; s < this.blockSize; s++) {
      a[s] ^= t[e + s];
    }
    prototype._update.call(this, a, 0, r, i);
    for (var s = 0; s < this.blockSize; s++) {
      a[s] = r[i + s];
    }
  } else {
    prototype._update.call(this, t, e, r, i);
    for (var s = 0; s < this.blockSize; s++) {
      r[i + s] ^= a[s];
    }
    for (var s = 0; s < this.blockSize; s++) {
      a[s] = t[e + s];
    }
  }
};
