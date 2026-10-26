import {
  inherits,
  split32,
  sum32,
  sum32_4,
  sum32_5,
  toHex32,
} from "./module-IMF.js";
import { BlockHash } from "./module-LVY.js";
import { ch32, g0_256, g1_256, maj32, s0_256, s1_256 } from "./module-Pe2.js";
import tr from "./module-fn_2.js";
const tn = sum32;
const sum32_4_1 = sum32_4;
const sum32_5_1 = sum32_5;
const ta = ch32;
const ts = maj32;
const s0_256_1 = s0_256;
const s1_256_1 = s1_256;
const g0_256_1 = g0_256;
const g1_256_1 = g1_256;
const BlockHash_1 = BlockHash;
const tl = [
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
function tp() {
  if (!(this instanceof tp)) {
    return new tp();
  }
  BlockHash_1.call(this);
  this.h = [
    1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924,
    528734635, 1541459225,
  ];
  this.k = tl;
  this.W = Array(64);
}
inherits(tp, BlockHash_1);
export default tp;
tp.blockSize = 512;
tp.outSize = 256;
tp.hmacStrength = 192;
tp.padLength = 64;
tp.prototype._update = function (J, Z) {
  const Q = this.W;
  for (var $ = 0; $ < 16; $++) {
    Q[$] = J[Z + $];
  }
  for (; $ < Q.length; $++) {
    Q[$] = sum32_4_1(
      g1_256_1(Q[$ - 2]),
      Q[$ - 7],
      g0_256_1(Q[$ - 15]),
      Q[$ - 16],
    );
  }
  let tt = this.h[0];
  let te = this.h[1];
  let td = this.h[2];
  let tl = this.h[3];
  let tp = this.h[4];
  let tb = this.h[5];
  let tv = this.h[6];
  let tg = this.h[7];
  tr(this.k.length === Q.length);
  for ($ = 0; $ < Q.length; $++) {
    const ty = sum32_5_1(tg, s1_256_1(tp), ta(tp, tb, tv), this.k[$], Q[$]);
    const tm = tn(s0_256_1(tt), ts(tt, te, td));
    tg = tv;
    tv = tb;
    tb = tp;
    tp = tn(tl, ty);
    tl = td;
    td = te;
    te = tt;
    tt = tn(ty, tm);
  }
  this.h[0] = tn(this.h[0], tt);
  this.h[1] = tn(this.h[1], te);
  this.h[2] = tn(this.h[2], td);
  this.h[3] = tn(this.h[3], tl);
  this.h[4] = tn(this.h[4], tp);
  this.h[5] = tn(this.h[5], tb);
  this.h[6] = tn(this.h[6], tv);
  this.h[7] = tn(this.h[7], tg);
};
tp.prototype._digest = function (J) {
  if (J === "hex") {
    return toHex32(this.h, "big");
  }
  return split32(this.h, "big");
};
