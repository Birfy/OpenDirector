import {
  inherits,
  rotr64_hi,
  rotr64_lo,
  shr64_hi,
  shr64_lo,
  split32,
  sum64,
  sum64_4_hi,
  sum64_4_lo,
  sum64_5_hi,
  sum64_5_lo,
  sum64_hi,
  sum64_lo,
  toHex32,
} from "./module-ial.js";
import { BlockHash } from "./module-kZ.js";
import n from "TnJ";
const rotr64_hi_1 = rotr64_hi;
const rotr64_lo_1 = rotr64_lo;
const shr64_hi_1 = shr64_hi;
const shr64_lo_1 = shr64_lo;
const d = sum64;
const sum64_hi_1 = sum64_hi;
const sum64_lo_1 = sum64_lo;
const sum64_4_hi_1 = sum64_4_hi;
const sum64_4_lo_1 = sum64_4_lo;
const sum64_5_hi_1 = sum64_5_hi;
const sum64_5_lo_1 = sum64_5_lo;
const BlockHash_1 = BlockHash;
const g = [
  1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
  3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
  2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394,
  310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994,
  1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317,
  3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139,
  264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901,
  1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837,
  2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879,
  3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901,
  113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912,
  1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700,
  2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037,
  344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800,
  3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804,
  1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734,
  3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877,
  3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063,
  2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815,
  1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474,
  593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298,
  3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606,
  3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421,
  2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836,
  852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676,
  1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468,
  1816402316, 1246189591,
];
function y() {
  if (!(this instanceof y)) {
    return new y();
  }
  BlockHash_1.call(this);
  this.h = [
    1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723,
    2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199,
    528734635, 4215389547, 1541459225, 327033209,
  ];
  this.k = g;
  this.W = Array(160);
}
inherits(y, BlockHash_1);
export default y;
y.blockSize = 1024;
y.outSize = 512;
y.hmacStrength = 192;
y.padLength = 128;
y.prototype._prepareBlock = function (t, e) {
  const r = this.W;
  for (var i = 0; i < 32; i++) {
    r[i] = t[e + i];
  }
  for (; i < r.length; i += 2) {
    const f = ((t, e) => {
      let r =
        rotr64_hi_1(t, e, 19) ^ rotr64_hi_1(e, t, 29) ^ shr64_hi_1(t, e, 6);
      if (r < 0) {
        r += 4294967296;
      }
      return r;
    })(r[i - 4], r[i - 3]);
    const n = ((t, e) => {
      let r =
        rotr64_lo_1(t, e, 19) ^ rotr64_lo_1(e, t, 29) ^ shr64_lo_1(t, e, 6);
      if (r < 0) {
        r += 4294967296;
      }
      return r;
    })(r[i - 4], r[i - 3]);
    const d = r[i - 14];
    const c = r[i - 13];
    const u = ((t, e) => {
      let r = rotr64_hi_1(t, e, 1) ^ rotr64_hi_1(t, e, 8) ^ shr64_hi_1(t, e, 7);
      if (r < 0) {
        r += 4294967296;
      }
      return r;
    })(r[i - 30], r[i - 29]);
    const p = ((t, e) => {
      let r = rotr64_lo_1(t, e, 1) ^ rotr64_lo_1(t, e, 8) ^ shr64_lo_1(t, e, 7);
      if (r < 0) {
        r += 4294967296;
      }
      return r;
    })(r[i - 30], r[i - 29]);
    const m = r[i - 32];
    const v = r[i - 31];
    r[i] = sum64_4_hi_1(f, n, d, c, u, p, m, v);
    r[i + 1] = sum64_4_lo_1(f, n, d, c, u, p, m, v);
  }
};
y.prototype._update = function (t, e) {
  this._prepareBlock(t, e);
  const r = this.W;
  let i = this.h[0];
  let f = this.h[1];
  let o = this.h[2];
  let h = this.h[3];
  let l = this.h[4];
  let b = this.h[5];
  let v = this.h[6];
  let g = this.h[7];
  let y = this.h[8];
  let M = this.h[9];
  let w = this.h[10];
  let _ = this.h[11];
  let x = this.h[12];
  let S = this.h[13];
  let A = this.h[14];
  let k = this.h[15];
  n(this.k.length === r.length);
  for (let B = 0; B < r.length; B += 2) {
    let E = A;
    let I = k;
    let R = ((t, e) => {
      let r =
        rotr64_hi_1(t, e, 14) ^ rotr64_hi_1(t, e, 18) ^ rotr64_hi_1(e, t, 9);
      if (r < 0) {
        r += 4294967296;
      }
      return r;
    })(y, M);
    let z = ((t, e) => {
      let r =
        rotr64_lo_1(t, e, 14) ^ rotr64_lo_1(t, e, 18) ^ rotr64_lo_1(e, t, 9);
      if (r < 0) {
        r += 4294967296;
      }
      return r;
    })(y, M);
    const q = ((t, e, r) => {
      let i = (t & e) ^ (~t & r);
      if (i < 0) {
        i += 4294967296;
      }
      return i;
    })(y, w, x);
    const L = ((t, e, r) => {
      let i = (t & e) ^ (~t & r);
      if (i < 0) {
        i += 4294967296;
      }
      return i;
    })(M, _, S);
    const C = this.k[B];
    const P = this.k[B + 1];
    const N = r[B];
    const j = r[B + 1];
    const O = sum64_5_hi_1(E, I, R, z, q, L, C, P, N, j);
    const T = sum64_5_lo_1(E, I, R, z, q, L, C, P, N, j);
    E = ((t, e) => {
      let r =
        rotr64_hi_1(t, e, 28) ^ rotr64_hi_1(e, t, 2) ^ rotr64_hi_1(e, t, 7);
      if (r < 0) {
        r += 4294967296;
      }
      return r;
    })(i, f);
    I = ((t, e) => {
      let r =
        rotr64_lo_1(t, e, 28) ^ rotr64_lo_1(e, t, 2) ^ rotr64_lo_1(e, t, 7);
      if (r < 0) {
        r += 4294967296;
      }
      return r;
    })(i, f);
    const U = sum64_hi_1(
      E,
      I,
      (R = ((t, e, r) => {
        let i = (t & e) ^ (t & r) ^ (e & r);
        if (i < 0) {
          i += 4294967296;
        }
        return i;
      })(i, o, l)),
      (z = ((t, e, r) => {
        let i = (t & e) ^ (t & r) ^ (e & r);
        if (i < 0) {
          i += 4294967296;
        }
        return i;
      })(f, h, b)),
    );
    const D = sum64_lo_1(E, I, R, z);
    A = x;
    k = S;
    x = w;
    S = _;
    w = y;
    _ = M;
    y = sum64_hi_1(v, g, O, T);
    M = sum64_lo_1(g, g, O, T);
    v = l;
    g = b;
    l = o;
    b = h;
    o = i;
    h = f;
    i = sum64_hi_1(O, T, U, D);
    f = sum64_lo_1(O, T, U, D);
  }
  d(this.h, 0, i, f);
  d(this.h, 2, o, h);
  d(this.h, 4, l, b);
  d(this.h, 6, v, g);
  d(this.h, 8, y, M);
  d(this.h, 10, w, _);
  d(this.h, 12, x, S);
  d(this.h, 14, A, k);
};
y.prototype._digest = function (t) {
  if (t === "hex") {
    return toHex32(this.h, "big");
  }
  return split32(this.h, "big");
};
