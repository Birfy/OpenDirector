import $ from "Hs";
import ee from "./module-n7.js";
import { Buffer } from "./module-b58.js";
const er = [1518500249, 1859775393, -1894007588, -899497514];
const en = Array(80);
function ei() {
  this.init();
  this._w = en;
  ee.call(this, 64, 56);
}
$(ei, ee);
ei.prototype.init = function () {
  this._a = 1732584193;
  this._b = 4023233417;
  this._c = 2562383102;
  this._d = 271733878;
  this._e = 3285377520;
  return this;
};
ei.prototype._update = function (Z) {
  const Q = this._w;
  let X = 0 | this._a;
  let $ = 0 | this._b;
  let ee = 0 | this._c;
  let et = 0 | this._d;
  let en = 0 | this._e;
  for (var ei = 0; ei < 16; ++ei) {
    Q[ei] = Z.readInt32BE(4 * ei);
  }
  for (; ei < 80; ++ei) {
    Q[ei] =
      ((eo = Q[ei - 3] ^ Q[ei - 8] ^ Q[ei - 14] ^ Q[ei - 16]) << 1) |
      (eo >>> 31);
  }
  for (let ea = 0; ea < 80; ++ea) {
    var eo;
    let es;
    let ef;
    let eu;
    let ec;
    let eh;
    const el = ~~(ea / 20);
    const ed =
      ((((es = X) << 5) | (es >>> 27)) +
        ((ef = $),
        (eu = ee),
        (ec = et),
        el === 0
          ? (ef & eu) | (~ef & ec)
          : el === 2
            ? (ef & eu) | (ef & ec) | (eu & ec)
            : ef ^ eu ^ ec) +
        en +
        Q[ea] +
        er[el]) |
      0;
    en = et;
    et = ee;
    ee = ((eh = $) << 30) | (eh >>> 2);
    $ = X;
    X = ed;
  }
  this._a = (X + this._a) | 0;
  this._b = ($ + this._b) | 0;
  this._c = (ee + this._c) | 0;
  this._d = (et + this._d) | 0;
  this._e = (en + this._e) | 0;
};
ei.prototype._hash = function () {
  const Z = Buffer.allocUnsafe(20);
  Z.writeInt32BE(0 | this._a, 0);
  Z.writeInt32BE(0 | this._b, 4);
  Z.writeInt32BE(0 | this._c, 8);
  Z.writeInt32BE(0 | this._d, 12);
  Z.writeInt32BE(0 | this._e, 16);
  return Z;
};
export default ei;
