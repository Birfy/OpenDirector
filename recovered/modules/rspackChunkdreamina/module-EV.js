import i from "./module-Hs_2.js";
import { Buffer } from "b58";
import n from "./module-wYy.js";
const a = Buffer.alloc(128);
function s(t, e) {
  n.call(this, "digest");
  if (typeof e === "string") {
    e = Buffer.from(e);
  }
  this._alg = t;
  this._key = e;
  if (e.length > 64) {
    e = t(e);
  } else if (e.length < 64) {
    e = Buffer.concat([e, a], 64);
  }
  const r = (this._ipad = Buffer.allocUnsafe(64));
  const i = (this._opad = Buffer.allocUnsafe(64));
  for (let s = 0; s < 64; s++) {
    r[s] = 54 ^ e[s];
    i[s] = 92 ^ e[s];
  }
  this._hash = [r];
}
i(s, n);
s.prototype._update = function (t) {
  this._hash.push(t);
};
s.prototype._final = function () {
  const t = this._alg(Buffer.concat(this._hash));
  return this._alg(Buffer.concat([this._opad, t]));
};
export default s;
