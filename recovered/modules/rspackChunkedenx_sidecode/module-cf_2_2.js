import $ from "./module-ULy.js";
import tt from "./module-mBh.js";
import te from "./module-yC_3.js";
import { Buffer } from "./module-s6_2_2.js";
const tn = Array(64);
function ti() {
  this.init();
  this._w = tn;
  te.call(this, 64, 56);
}
$(ti, tt);
ti.prototype.init = function () {
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
ti.prototype._hash = function () {
  const J = Buffer.allocUnsafe(28);
  J.writeInt32BE(this._a, 0);
  J.writeInt32BE(this._b, 4);
  J.writeInt32BE(this._c, 8);
  J.writeInt32BE(this._d, 12);
  J.writeInt32BE(this._e, 16);
  J.writeInt32BE(this._f, 20);
  J.writeInt32BE(this._g, 24);
  return J;
};
export default ti;
