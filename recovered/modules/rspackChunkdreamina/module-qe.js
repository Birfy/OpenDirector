import i from "TnJ";
import f from "./module-Hs_2.js";
import n from "./module-X9.js";
import a from "./module-Hm_2.js";
function s(t, e) {
  i.equal(e.length, 24, "Invalid key length");
  const r = e.slice(0, 8);
  const f = e.slice(8, 16);
  const n = e.slice(16, 24);
  if (t === "encrypt") {
    this.ciphers = [
      a.create({
        type: "encrypt",
        key: r,
      }),
      a.create({
        type: "decrypt",
        key: f,
      }),
      a.create({
        type: "encrypt",
        key: n,
      }),
    ];
  } else {
    this.ciphers = [
      a.create({
        type: "decrypt",
        key: n,
      }),
      a.create({
        type: "encrypt",
        key: f,
      }),
      a.create({
        type: "decrypt",
        key: r,
      }),
    ];
  }
}
function o(t) {
  n.call(this, t);
  const e = new s(this.type, this.options.key);
  this._edeState = e;
}
f(o, n);
export default o;
o.create = function (t) {
  return new o(t);
};
o.prototype._update = function (t, e, r, i) {
  const _edeState = this._edeState;
  _edeState.ciphers[0]._update(t, e, r, i);
  _edeState.ciphers[1]._update(r, i, r, i);
  _edeState.ciphers[2]._update(r, i, r, i);
};
o.prototype._pad = a.prototype._pad;
o.prototype._unpad = a.prototype._unpad;
