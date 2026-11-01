import $ from "./module-ULy.js";
import tt from "./module-Rz.js";
import te from "./module-yC_3.js";
import { Buffer } from "./module-s6_2_2.js";
const tn = Array(160);
function ti() {
  this.init();
  this._w = tn;
  te.call(this, 128, 112);
}
$(ti, tt);
ti.prototype.init = function () {
  this._ah = 3418070365;
  this._bh = 1654270250;
  this._ch = 2438529370;
  this._dh = 355462360;
  this._eh = 1731405415;
  this._fh = 2394180231;
  this._gh = 3675008525;
  this._hh = 1203062813;
  this._al = 3238371032;
  this._bl = 914150663;
  this._cl = 812702999;
  this._dl = 4144912697;
  this._el = 4290775857;
  this._fl = 1750603025;
  this._gl = 1694076839;
  this._hl = 3204075428;
  return this;
};
ti.prototype._hash = function () {
  const J = Buffer.allocUnsafe(48);
  function Z(Z, Q, $) {
    J.writeInt32BE(Z, $);
    J.writeInt32BE(Q, $ + 4);
  }
  Z(this._ah, this._al, 0);
  Z(this._bh, this._bl, 8);
  Z(this._ch, this._cl, 16);
  Z(this._dh, this._dl, 24);
  Z(this._eh, this._el, 32);
  Z(this._fh, this._fl, 40);
  return J;
};
export default ti;
