import {
  inherits,
  split32,
  sum32,
  sum32_4,
  sum32_5,
  toHex32,
} from "./module-ial.js";
import { BlockHash } from "./module-kZ.js";
import { ch32, g0_256, g1_256, maj32, s0_256, s1_256 } from "./module-XbI.js";
import a from "TnJ";
const s = sum32;
const sum32_4_1 = sum32_4;
const sum32_5_1 = sum32_5;
const d = ch32;
const c = maj32;
const s0_256_1 = s0_256;
const s1_256_1 = s1_256;
const g0_256_1 = g0_256;
const g1_256_1 = g1_256;
const BlockHash_1 = BlockHash;
const v = [
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
function g() {
  if (!(this instanceof g)) {
    return new g();
  }
  BlockHash_1.call(this);
  this.h = [
    1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924,
    528734635, 1541459225,
  ];
  this.k = v;
  this.W = Array(64);
}
inherits(g, BlockHash_1);
export default g;
g.blockSize = 512;
g.outSize = 256;
g.hmacStrength = 192;
g.padLength = 64;
g.prototype._update = function (t, e) {
  const r = this.W;
  for (var i = 0; i < 16; i++) {
    r[i] = t[e + i];
  }
  for (; i < r.length; i++) {
    r[i] = sum32_4_1(
      g1_256_1(r[i - 2]),
      r[i - 7],
      g0_256_1(r[i - 15]),
      r[i - 16],
    );
  }
  let f = this.h[0];
  let n = this.h[1];
  let m = this.h[2];
  let v = this.h[3];
  let g = this.h[4];
  let y = this.h[5];
  let M = this.h[6];
  let w = this.h[7];
  a(this.k.length === r.length);
  for (i = 0; i < r.length; i++) {
    const _ = sum32_5_1(w, s1_256_1(g), d(g, y, M), this.k[i], r[i]);
    const x = s(s0_256_1(f), c(f, n, m));
    w = M;
    M = y;
    y = g;
    g = s(v, _);
    v = m;
    m = n;
    n = f;
    f = s(_, x);
  }
  this.h[0] = s(this.h[0], f);
  this.h[1] = s(this.h[1], n);
  this.h[2] = s(this.h[2], m);
  this.h[3] = s(this.h[3], v);
  this.h[4] = s(this.h[4], g);
  this.h[5] = s(this.h[5], y);
  this.h[6] = s(this.h[6], M);
  this.h[7] = s(this.h[7], w);
};
g.prototype._digest = function (t) {
  if (t === "hex") {
    return toHex32(this.h, "big");
  }
  return split32(this.h, "big");
};
