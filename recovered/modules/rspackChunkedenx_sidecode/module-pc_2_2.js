import $ from "./module-fn_2.js";
import tt from "./module-ULy.js";
const te = {};
function tr(J) {
  $.equal(J.length, 8, "Invalid IV length");
  this.iv = Array(8);
  for (let Z = 0; Z < this.iv.length; Z++) {
    this.iv[Z] = J[Z];
  }
}
export const instantiate = function (J) {
  function Z(Z) {
    J.call(this, Z);
    this._cbcInit();
  }
  tt(Z, J);
  for (let Q = Object.keys(te), $ = 0; $ < Q.length; $++) {
    const tr = Q[$];
    Z.prototype[tr] = te[tr];
  }
  Z.create = function (J) {
    return new Z(J);
  };
  return Z;
};
te._cbcInit = function () {
  const J = new tr(this.options.iv);
  this._cbcState = J;
};
te._update = function (J, Z, Q, $) {
  const _cbcState = this._cbcState;
  const prototype = this.constructor.super_.prototype;
  const tr = _cbcState.iv;
  if (this.type === "encrypt") {
    for (var tn = 0; tn < this.blockSize; tn++) {
      tr[tn] ^= J[Z + tn];
    }
    prototype._update.call(this, tr, 0, Q, $);
    for (var tn = 0; tn < this.blockSize; tn++) {
      tr[tn] = Q[$ + tn];
    }
  } else {
    prototype._update.call(this, J, Z, Q, $);
    for (var tn = 0; tn < this.blockSize; tn++) {
      Q[$ + tn] ^= tr[tn];
    }
    for (var tn = 0; tn < this.blockSize; tn++) {
      tr[tn] = J[Z + tn];
    }
  }
};
