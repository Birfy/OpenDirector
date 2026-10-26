import { AES } from "./module-SL1.js";
import { Buffer } from "b58";
import n from "./module-wYy.js";
function a(t, e, r, a) {
  n.call(this);
  this._cipher = new AES(e);
  this._prev = Buffer.from(r);
  this._cache = Buffer.allocUnsafe(0);
  this._secCache = Buffer.allocUnsafe(0);
  this._decrypt = a;
  this._mode = t;
}
require("./module-Hs_2.js")(a, n);
a.prototype._update = function (t) {
  return this._mode.encrypt(this, t, this._decrypt);
};
a.prototype._final = function () {
  this._cipher.scrub();
};
export default a;
