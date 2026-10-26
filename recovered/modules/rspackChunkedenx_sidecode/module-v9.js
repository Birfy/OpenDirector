import $ from "./module-ULy.js";
import tt from "./module-yC_3.js";
import { Buffer } from "./module-s6_2_2.js";
const tr = [1518500249, 1859775393, -1894007588, -899497514];
const tn = Array(80);
function ti() {
  this.init();
  this._w = tn;
  tt.call(this, 64, 56);
}
$(ti, tt);
ti.prototype.init = function () {
  this._a = 1732584193;
  this._b = 4023233417;
  this._c = 2562383102;
  this._d = 271733878;
  this._e = 3285377520;
  return this;
};
ti.prototype._update = function (J) {
  const Z = this._w;
  let Q = 0 | this._a;
  let $ = 0 | this._b;
  let tt = 0 | this._c;
  let te = 0 | this._d;
  let tn = 0 | this._e;
  for (var ti = 0; ti < 16; ++ti) {
    Z[ti] = J.readInt32BE(4 * ti);
  }
  for (; ti < 80; ++ti) {
    Z[ti] =
      ((ta = Z[ti - 3] ^ Z[ti - 8] ^ Z[ti - 14] ^ Z[ti - 16]) << 1) |
      (ta >>> 31);
  }
  for (let to = 0; to < 80; ++to) {
    var ta;
    let ts;
    let tf;
    let tu;
    let tc;
    let th;
    const td = ~~(to / 20);
    const tl =
      ((((ts = Q) << 5) | (ts >>> 27)) +
        ((tf = $),
        (tu = tt),
        (tc = te),
        td === 0
          ? (tf & tu) | (~tf & tc)
          : td === 2
            ? (tf & tu) | (tf & tc) | (tu & tc)
            : tf ^ tu ^ tc) +
        tn +
        Z[to] +
        tr[td]) |
      0;
    tn = te;
    te = tt;
    tt = ((th = $) << 30) | (th >>> 2);
    $ = Q;
    Q = tl;
  }
  this._a = (Q + this._a) | 0;
  this._b = ($ + this._b) | 0;
  this._c = (tt + this._c) | 0;
  this._d = (te + this._d) | 0;
  this._e = (tn + this._e) | 0;
};
ti.prototype._hash = function () {
  const J = Buffer.allocUnsafe(20);
  J.writeInt32BE(0 | this._a, 0);
  J.writeInt32BE(0 | this._b, 4);
  J.writeInt32BE(0 | this._c, 8);
  J.writeInt32BE(0 | this._d, 12);
  J.writeInt32BE(0 | this._e, 16);
  return J;
};
export default ti;
