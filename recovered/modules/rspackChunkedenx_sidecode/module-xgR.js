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
    Z[ti] = Z[ti - 3] ^ Z[ti - 8] ^ Z[ti - 14] ^ Z[ti - 16];
  }
  for (let to = 0; to < 80; ++to) {
    let ta;
    let ts;
    let tf;
    let tu;
    let tc;
    const th = ~~(to / 20);
    const td =
      ((((ta = Q) << 5) | (ta >>> 27)) +
        ((ts = $),
        (tf = tt),
        (tu = te),
        th === 0
          ? (ts & tf) | (~ts & tu)
          : th === 2
            ? (ts & tf) | (ts & tu) | (tf & tu)
            : ts ^ tf ^ tu) +
        tn +
        Z[to] +
        tr[th]) |
      0;
    tn = te;
    te = tt;
    tt = ((tc = $) << 30) | (tc >>> 2);
    $ = Q;
    Q = td;
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
