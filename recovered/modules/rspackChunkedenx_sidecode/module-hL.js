import $ from "./module-fn_2.js";
import tt from "./module-ULy.js";
import {
  expand,
  ip,
  pc1,
  pc2,
  permute,
  r28shl,
  readUInt32BE,
  rip,
  substitute,
  writeUInt32BE,
} from "./module-ir.js";
import tr from "./module-XU_2_2.js";
function tn() {
  this.tmp = [, ,];
  this.keys = null;
}
function ti(J) {
  tr.call(this, J);
  const Z = new tn();
  this._desState = Z;
  this.deriveKeys(Z, J.key);
}
tt(ti, tr);
export default ti;
ti.create = function (J) {
  return new ti(J);
};
const to = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
ti.prototype.deriveKeys = function (J, Z) {
  J.keys = Array(32);
  $.equal(Z.length, this.blockSize, "Invalid key length");
  let Q = readUInt32BE(Z, 0);
  let tt = readUInt32BE(Z, 4);
  pc1(Q, tt, J.tmp, 0);
  Q = J.tmp[0];
  tt = J.tmp[1];
  for (let tr = 0; tr < J.keys.length; tr += 2) {
    const tn = to[tr >>> 1];
    Q = r28shl(Q, tn);
    tt = r28shl(tt, tn);
    pc2(Q, tt, J.keys, tr);
  }
};
ti.prototype._update = function (J, Z, Q, $) {
  const _desState = this._desState;
  let tr = readUInt32BE(J, Z);
  let tn = readUInt32BE(J, Z + 4);
  ip(tr, tn, _desState.tmp, 0);
  tr = _desState.tmp[0];
  tn = _desState.tmp[1];
  if (this.type === "encrypt") {
    this._encrypt(_desState, tr, tn, _desState.tmp, 0);
  } else {
    this._decrypt(_desState, tr, tn, _desState.tmp, 0);
  }
  tr = _desState.tmp[0];
  tn = _desState.tmp[1];
  writeUInt32BE(Q, tr, $);
  writeUInt32BE(Q, tn, $ + 4);
};
ti.prototype._pad = function (J, Z) {
  if (this.padding === false) {
    return false;
  }
  const Q = J.length - Z;
  for (let $ = Z; $ < J.length; $++) {
    J[$] = Q;
  }
  return true;
};
ti.prototype._unpad = function (J) {
  if (this.padding === false) {
    return J;
  }
  const Z = J[J.length - 1];
  for (let Q = J.length - Z; Q < J.length; Q++) {
    $.equal(J[Q], Z);
  }
  return J.slice(0, J.length - Z);
};
ti.prototype._encrypt = function (J, Z, Q, $, tt) {
  let tr = Z;
  let tn = Q;
  for (let ti = 0; ti < J.keys.length; ti += 2) {
    let to = J.keys[ti];
    let ta = J.keys[ti + 1];
    expand(tn, J.tmp, 0);
    to ^= J.tmp[0];
    ta ^= J.tmp[1];
    const ts = substitute(to, ta);
    const tf = permute(ts);
    const tu = tn;
    tn = (tr ^ tf) >>> 0;
    tr = tu;
  }
  rip(tn, tr, $, tt);
};
ti.prototype._decrypt = function (J, Z, Q, $, tt) {
  let tr = Q;
  let tn = Z;
  for (let ti = J.keys.length - 2; ti >= 0; ti -= 2) {
    let to = J.keys[ti];
    let ta = J.keys[ti + 1];
    expand(tr, J.tmp, 0);
    to ^= J.tmp[0];
    ta ^= J.tmp[1];
    const ts = substitute(to, ta);
    const tf = permute(ts);
    const tu = tr;
    tr = (tn ^ tf) >>> 0;
    tn = tu;
  }
  rip(tr, tn, $, tt);
};
