import $ from "./module-ULy.js";
import tt from "./module-yC_3.js";
import { Buffer } from "./module-s6_2_2.js";
const tr = [
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
const tn = Array(64);
function ti() {
  this.init();
  this._w = tn;
  tt.call(this, 64, 56);
}
$(ti, tt);
ti.prototype.init = function () {
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
ti.prototype._update = function (J) {
  const Z = this._w;
  let Q = 0 | this._a;
  let $ = 0 | this._b;
  let tt = 0 | this._c;
  let te = 0 | this._d;
  let tn = 0 | this._e;
  let ti = 0 | this._f;
  let to = 0 | this._g;
  let ta = 0 | this._h;
  for (var ts = 0; ts < 16; ++ts) {
    Z[ts] = J.readInt32BE(4 * ts);
  }
  for (; ts < 64; ++ts) {
    Z[ts] =
      (((((tu = Z[ts - 2]) >>> 17) | (tu << 15)) ^
        ((tu >>> 19) | (tu << 13)) ^
        (tu >>> 10)) +
        Z[ts - 7] +
        ((((tc = Z[ts - 15]) >>> 7) | (tc << 25)) ^
          ((tc >>> 18) | (tc << 14)) ^
          (tc >>> 3)) +
        Z[ts - 16]) |
      0;
  }
  for (let tf = 0; tf < 64; ++tf) {
    var tu;
    var tc;
    let th;
    let td;
    let tl;
    let tp;
    let tb;
    let tv;
    let tg;
    const ty =
      (ta +
        ((((th = tn) >>> 6) | (th << 26)) ^
          ((th >>> 11) | (th << 21)) ^
          ((th >>> 25) | (th << 7))) +
        ((td = tn), (tl = ti), (tp = to) ^ (td & (tl ^ tp))) +
        tr[tf] +
        Z[tf]) |
      0;
    const tm =
      (((((tb = Q) >>> 2) | (tb << 30)) ^
        ((tb >>> 13) | (tb << 19)) ^
        ((tb >>> 22) | (tb << 10))) +
        (((tv = Q) & (tg = $)) | (tt & (tv | tg)))) |
      0;
    ta = to;
    to = ti;
    ti = tn;
    tn = (te + ty) | 0;
    te = tt;
    tt = $;
    $ = Q;
    Q = (ty + tm) | 0;
  }
  this._a = (Q + this._a) | 0;
  this._b = ($ + this._b) | 0;
  this._c = (tt + this._c) | 0;
  this._d = (te + this._d) | 0;
  this._e = (tn + this._e) | 0;
  this._f = (ti + this._f) | 0;
  this._g = (to + this._g) | 0;
  this._h = (ta + this._h) | 0;
};
ti.prototype._hash = function () {
  const J = Buffer.allocUnsafe(32);
  J.writeInt32BE(this._a, 0);
  J.writeInt32BE(this._b, 4);
  J.writeInt32BE(this._c, 8);
  J.writeInt32BE(this._d, 12);
  J.writeInt32BE(this._e, 16);
  J.writeInt32BE(this._f, 20);
  J.writeInt32BE(this._g, 24);
  J.writeInt32BE(this._h, 28);
  return J;
};
export default ti;
