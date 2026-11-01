import $ from "Hs";
import ee from "./module-P4.js";
import et from "./module-n7.js";
import { Buffer } from "./module-b58.js";
const en = Array(160);
function ei() {
  this.init();
  this._w = en;
  et.call(this, 128, 112);
}
$(ei, ee);
ei.prototype.init = function () {
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
ei.prototype._hash = function () {
  const Z = Buffer.allocUnsafe(48);
  function Q(Q, X, $) {
    Z.writeInt32BE(Q, $);
    Z.writeInt32BE(X, $ + 4);
  }
  Q(this._ah, this._al, 0);
  Q(this._bh, this._bl, 8);
  Q(this._ch, this._cl, 16);
  Q(this._dh, this._dl, 24);
  Q(this._eh, this._el, 32);
  Q(this._fh, this._fl, 40);
  return Z;
};
export default ei;
