import $ from "Hs";
import ee from "./module-n7.js";
import { Buffer } from "./module-b58.js";
const er = [
  1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
  2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
  1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
  264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
  2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
  113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
  1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
  3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
  430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063,
  1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
  2756734187, 3204031479, 3329325298,
];
const en = Array(64);
function ei() {
  this.init();
  this._w = en;
  ee.call(this, 64, 56);
}
$(ei, ee);
ei.prototype.init = function () {
  this._a = 1779033703;
  this._b = 3144134277;
  this._c = 1013904242;
  this._d = 2773480762;
  this._e = 1359893119;
  this._f = 2600822924;
  this._g = 528734635;
  this._h = 1541459225;
  return this;
};
ei.prototype._update = function (Z) {
  const Q = this._w;
  let X = 0 | this._a;
  let $ = 0 | this._b;
  let ee = 0 | this._c;
  let et = 0 | this._d;
  let en = 0 | this._e;
  let ei = 0 | this._f;
  let ea = 0 | this._g;
  let eo = 0 | this._h;
  for (var es = 0; es < 16; ++es) {
    Q[es] = Z.readInt32BE(4 * es);
  }
  for (; es < 64; ++es) {
    Q[es] =
      (((((eu = Q[es - 2]) >>> 17) | (eu << 15)) ^
        ((eu >>> 19) | (eu << 13)) ^
        (eu >>> 10)) +
        Q[es - 7] +
        ((((ec = Q[es - 15]) >>> 7) | (ec << 25)) ^
          ((ec >>> 18) | (ec << 14)) ^
          (ec >>> 3)) +
        Q[es - 16]) |
      0;
  }
  for (let ef = 0; ef < 64; ++ef) {
    var eu;
    var ec;
    let eh;
    let el;
    let ed;
    let ep;
    let eb;
    let eg;
    let ey;
    const ev =
      (eo +
        ((((eh = en) >>> 6) | (eh << 26)) ^
          ((eh >>> 11) | (eh << 21)) ^
          ((eh >>> 25) | (eh << 7))) +
        ((el = en), (ed = ei), (ep = ea) ^ (el & (ed ^ ep))) +
        er[ef] +
        Q[ef]) |
      0;
    const e_ =
      (((((eb = X) >>> 2) | (eb << 30)) ^
        ((eb >>> 13) | (eb << 19)) ^
        ((eb >>> 22) | (eb << 10))) +
        (((eg = X) & (ey = $)) | (ee & (eg | ey)))) |
      0;
    eo = ea;
    ea = ei;
    ei = en;
    en = (et + ev) | 0;
    et = ee;
    ee = $;
    $ = X;
    X = (ev + e_) | 0;
  }
  this._a = (X + this._a) | 0;
  this._b = ($ + this._b) | 0;
  this._c = (ee + this._c) | 0;
  this._d = (et + this._d) | 0;
  this._e = (en + this._e) | 0;
  this._f = (ei + this._f) | 0;
  this._g = (ea + this._g) | 0;
  this._h = (eo + this._h) | 0;
};
ei.prototype._hash = function () {
  const Z = Buffer.allocUnsafe(32);
  Z.writeInt32BE(this._a, 0);
  Z.writeInt32BE(this._b, 4);
  Z.writeInt32BE(this._c, 8);
  Z.writeInt32BE(this._d, 12);
  Z.writeInt32BE(this._e, 16);
  Z.writeInt32BE(this._f, 20);
  Z.writeInt32BE(this._g, 24);
  Z.writeInt32BE(this._h, 28);
  return Z;
};
export default ei;
