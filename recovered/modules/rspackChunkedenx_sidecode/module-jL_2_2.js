import $ from "./module-ULy.js";
import tt from "./module-Fo.js";
import te from "./module-vWC.js";
import { Buffer } from "./module-s6_2_2.js";
import tn from "./module-Ul_2_2.js";
import ti from "./module-mu_2_2.js";
import to from "./module-ux.js";
const ta = Buffer.alloc(128);
function ts(J, Z) {
  te.call(this, "digest");
  if (typeof Z === "string") {
    Z = Buffer.from(Z);
  }
  const Q = J === "sha512" || J === "sha384" ? 128 : 64;
  this._alg = J;
  this._key = Z;
  if (Z.length > Q) {
    Z = (J === "rmd160" ? new ti() : to(J)).update(Z).digest();
  } else if (Z.length < Q) {
    Z = Buffer.concat([Z, ta], Q);
  }
  const $ = (this._ipad = Buffer.allocUnsafe(Q));
  const tt = (this._opad = Buffer.allocUnsafe(Q));
  for (let tn = 0; tn < Q; tn++) {
    $[tn] = 54 ^ Z[tn];
    tt[tn] = 92 ^ Z[tn];
  }
  this._hash = J === "rmd160" ? new ti() : to(J);
  this._hash.update($);
}
$(ts, te);
ts.prototype._update = function (J) {
  this._hash.update(J);
};
ts.prototype._final = function () {
  const J = this._hash.digest();
  return (this._alg === "rmd160" ? new ti() : to(this._alg))
    .update(this._opad)
    .update(J)
    .digest();
};
export default function (J, Z) {
  if ((J = J.toLowerCase()) === "rmd160" || J === "ripemd160") {
    return new ts("rmd160", Z);
  }
  if (J === "md5") {
    return new tt(tn, Z);
  }
  return new ts(J, Z);
}
