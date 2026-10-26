import $ from "./module-fn_2.js";
import tt from "./module-ULy.js";
import te from "./module-XU_2_2.js";
import tr from "./module-hL.js";
function tn(J, Z) {
  $.equal(Z.length, 24, "Invalid key length");
  const Q = Z.slice(0, 8);
  const tt = Z.slice(8, 16);
  const te = Z.slice(16, 24);
  if (J === "encrypt") {
    this.ciphers = [
      tr.create({
        type: "encrypt",
        key: Q,
      }),
      tr.create({
        type: "decrypt",
        key: tt,
      }),
      tr.create({
        type: "encrypt",
        key: te,
      }),
    ];
  } else {
    this.ciphers = [
      tr.create({
        type: "decrypt",
        key: te,
      }),
      tr.create({
        type: "encrypt",
        key: tt,
      }),
      tr.create({
        type: "decrypt",
        key: Q,
      }),
    ];
  }
}
function ti(J) {
  te.call(this, J);
  const Z = new tn(this.type, this.options.key);
  this._edeState = Z;
}
tt(ti, te);
export default ti;
ti.create = function (J) {
  return new ti(J);
};
ti.prototype._update = function (J, Z, Q, $) {
  const _edeState = this._edeState;
  _edeState.ciphers[0]._update(J, Z, Q, $);
  _edeState.ciphers[1]._update(Q, $, Q, $);
  _edeState.ciphers[2]._update(Q, $, Q, $);
};
ti.prototype._pad = tr.prototype._pad;
ti.prototype._unpad = tr.prototype._unpad;
