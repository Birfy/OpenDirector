import $ from "Hs";
import ee from "./module-ai.js";
import et from "./module-n7.js";
import { Buffer } from "./module-b58.js";
const en = Array(64);
function ei() {
  this.init();
  this._w = en;
  et.call(this, 64, 56);
}
$(ei, ee);
ei.prototype.init = function () {
  this._a = 3238371032;
  this._b = 914150663;
  this._c = 812702999;
  this._d = 4144912697;
  this._e = 4290775857;
  this._f = 1750603025;
  this._g = 1694076839;
  this._h = 3204075428;
  return this;
};
ei.prototype._hash = function () {
  const Z = Buffer.allocUnsafe(28);
  Z.writeInt32BE(this._a, 0);
  Z.writeInt32BE(this._b, 4);
  Z.writeInt32BE(this._c, 8);
  Z.writeInt32BE(this._d, 12);
  Z.writeInt32BE(this._e, 16);
  Z.writeInt32BE(this._f, 20);
  Z.writeInt32BE(this._g, 24);
  return Z;
};
export default ei;
