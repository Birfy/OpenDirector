import $ from "./module-ULy.js";
import { Buffer } from "./module-s6_2_2.js";
import te from "./module-vWC.js";
const tr = Buffer.alloc(128);
function tn(J, Z) {
  te.call(this, "digest");
  if (typeof Z === "string") {
    Z = Buffer.from(Z);
  }
  this._alg = J;
  this._key = Z;
  if (Z.length > 64) {
    Z = J(Z);
  } else if (Z.length < 64) {
    Z = Buffer.concat([Z, tr], 64);
  }
  const Q = (this._ipad = Buffer.allocUnsafe(64));
  const $ = (this._opad = Buffer.allocUnsafe(64));
  for (let tn = 0; tn < 64; tn++) {
    Q[tn] = 54 ^ Z[tn];
    $[tn] = 92 ^ Z[tn];
  }
  this._hash = [Q];
}
$(tn, te);
tn.prototype._update = function (J) {
  this._hash.push(J);
};
tn.prototype._final = function () {
  const J = this._alg(Buffer.concat(this._hash));
  return this._alg(Buffer.concat([this._opad, J]));
};
export default tn;
