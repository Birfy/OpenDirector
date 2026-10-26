import { AES } from "./module-rD_12.js";
import { Buffer } from "./module-s6_2_2.js";
import te from "./module-vWC.js";
function tr(J, Z, Q, tr) {
  te.call(this);
  this._cipher = new AES(Z);
  this._prev = Buffer.from(Q);
  this._cache = Buffer.allocUnsafe(0);
  this._secCache = Buffer.allocUnsafe(0);
  this._decrypt = tr;
  this._mode = J;
}
require("./module-ULy.js")(tr, te);
tr.prototype._update = function (J) {
  return this._mode.encrypt(this, J, this._decrypt);
};
tr.prototype._final = function () {
  this._cipher.scrub();
};
export default tr;
