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
} from "./module-IMF.js";
import { BlockHash } from "./module-LVY.js";
import te from "./module-fn_2.js";
const rotr64_hi_1 = rotr64_hi;
const rotr64_lo_1 = rotr64_lo;
const shr64_hi_1 = shr64_hi;
const shr64_lo_1 = shr64_lo;
const ta = sum64;
const sum64_hi_1 = sum64_hi;
const sum64_lo_1 = sum64_lo;
const sum64_4_hi_1 = sum64_4_hi;
const sum64_4_lo_1 = sum64_4_lo;
const sum64_5_hi_1 = sum64_5_hi;
const sum64_5_lo_1 = sum64_5_lo;
const BlockHash_1 = BlockHash;
const tp = [
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
function tb() {
  if (!(this instanceof tb)) {
    return new tb();
  }
  BlockHash_1.call(this);
  this.h = [
    1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723,
    2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199,
    528734635, 4215389547, 1541459225, 327033209,
  ];
  this.k = tp;
  this.W = Array(160);
}
inherits(tb, BlockHash_1);
export default tb;
tb.blockSize = 1024;
tb.outSize = 512;
tb.hmacStrength = 192;
tb.padLength = 128;
tb.prototype._prepareBlock = function (J, Z) {
  const Q = this.W;
  for (var $ = 0; $ < 32; $++) {
    Q[$] = J[Z + $];
  }
  for (; $ < Q.length; $ += 2) {
    const tt = ((J, Z) => {
      let Q =
        rotr64_hi_1(J, Z, 19) ^ rotr64_hi_1(Z, J, 29) ^ shr64_hi_1(J, Z, 6);
      if (Q < 0) {
        Q += 4294967296;
      }
      return Q;
    })(Q[$ - 4], Q[$ - 3]);
    const te = ((J, Z) => {
      let Q =
        rotr64_lo_1(J, Z, 19) ^ rotr64_lo_1(Z, J, 29) ^ shr64_lo_1(J, Z, 6);
      if (Q < 0) {
        Q += 4294967296;
      }
      return Q;
    })(Q[$ - 4], Q[$ - 3]);
    const ta = Q[$ - 14];
    const ts = Q[$ - 13];
    const tf = ((J, Z) => {
      let Q = rotr64_hi_1(J, Z, 1) ^ rotr64_hi_1(J, Z, 8) ^ shr64_hi_1(J, Z, 7);
      if (Q < 0) {
        Q += 4294967296;
      }
      return Q;
    })(Q[$ - 30], Q[$ - 29]);
    const th = ((J, Z) => {
      let Q = rotr64_lo_1(J, Z, 1) ^ rotr64_lo_1(J, Z, 8) ^ shr64_lo_1(J, Z, 7);
      if (Q < 0) {
        Q += 4294967296;
      }
      return Q;
    })(Q[$ - 30], Q[$ - 29]);
    const td = Q[$ - 32];
    const tl = Q[$ - 31];
    Q[$] = sum64_4_hi_1(tt, te, ta, ts, tf, th, td, tl);
    Q[$ + 1] = sum64_4_lo_1(tt, te, ta, ts, tf, th, td, tl);
  }
};
tb.prototype._update = function (J, Z) {
  this._prepareBlock(J, Z);
  const Q = this.W;
  let $ = this.h[0];
  let tt = this.h[1];
  let ti = this.h[2];
  let to = this.h[3];
  let tu = this.h[4];
  let tc = this.h[5];
  let tl = this.h[6];
  let tp = this.h[7];
  let tb = this.h[8];
  let tv = this.h[9];
  let tg = this.h[10];
  let ty = this.h[11];
  let tm = this.h[12];
  let tw = this.h[13];
  let tx = this.h[14];
  let t_ = this.h[15];
  te(this.k.length === Q.length);
  for (let tM = 0; tM < Q.length; tM += 2) {
    let tS = tx;
    let tA = t_;
    let tE = ((J, Z) => {
      let Q =
        rotr64_hi_1(J, Z, 14) ^ rotr64_hi_1(J, Z, 18) ^ rotr64_hi_1(Z, J, 9);
      if (Q < 0) {
        Q += 4294967296;
      }
      return Q;
    })(tb, tv);
    let tk = ((J, Z) => {
      let Q =
        rotr64_lo_1(J, Z, 14) ^ rotr64_lo_1(J, Z, 18) ^ rotr64_lo_1(Z, J, 9);
      if (Q < 0) {
        Q += 4294967296;
      }
      return Q;
    })(tb, tv);
    const tR = ((J, Z, Q) => {
      let $ = (J & Z) ^ (~J & Q);
      if ($ < 0) {
        $ += 4294967296;
      }
      return $;
    })(tb, tg, tm);
    const tI = ((J, Z, Q) => {
      let $ = (J & Z) ^ (~J & Q);
      if ($ < 0) {
        $ += 4294967296;
      }
      return $;
    })(tv, ty, tw);
    const tO = this.k[tM];
    const tT = this.k[tM + 1];
    const tB = Q[tM];
    const tj = Q[tM + 1];
    const tC = sum64_5_hi_1(tS, tA, tE, tk, tR, tI, tO, tT, tB, tj);
    const tP = sum64_5_lo_1(tS, tA, tE, tk, tR, tI, tO, tT, tB, tj);
    tS = ((J, Z) => {
      let Q =
        rotr64_hi_1(J, Z, 28) ^ rotr64_hi_1(Z, J, 2) ^ rotr64_hi_1(Z, J, 7);
      if (Q < 0) {
        Q += 4294967296;
      }
      return Q;
    })($, tt);
    tA = ((J, Z) => {
      let Q =
        rotr64_lo_1(J, Z, 28) ^ rotr64_lo_1(Z, J, 2) ^ rotr64_lo_1(Z, J, 7);
      if (Q < 0) {
        Q += 4294967296;
      }
      return Q;
    })($, tt);
    const tL = sum64_hi_1(
      tS,
      tA,
      (tE = ((J, Z, Q) => {
        let $ = (J & Z) ^ (J & Q) ^ (Z & Q);
        if ($ < 0) {
          $ += 4294967296;
        }
        return $;
      })($, ti, tu)),
      (tk = ((J, Z, Q) => {
        let $ = (J & Z) ^ (J & Q) ^ (Z & Q);
        if ($ < 0) {
          $ += 4294967296;
        }
        return $;
      })(tt, to, tc)),
    );
    const tN = sum64_lo_1(tS, tA, tE, tk);
    tx = tm;
    t_ = tw;
    tm = tg;
    tw = ty;
    tg = tb;
    ty = tv;
    tb = sum64_hi_1(tl, tp, tC, tP);
    tv = sum64_lo_1(tp, tp, tC, tP);
    tl = tu;
    tp = tc;
    tu = ti;
    tc = to;
    ti = $;
    to = tt;
    $ = sum64_hi_1(tC, tP, tL, tN);
    tt = sum64_lo_1(tC, tP, tL, tN);
  }
  ta(this.h, 0, $, tt);
  ta(this.h, 2, ti, to);
  ta(this.h, 4, tu, tc);
  ta(this.h, 6, tl, tp);
  ta(this.h, 8, tb, tv);
  ta(this.h, 10, tg, ty);
  ta(this.h, 12, tm, tw);
  ta(this.h, 14, tx, t_);
};
tb.prototype._digest = function (J) {
  if (J === "hex") {
    return toHex32(this.h, "big");
  }
  return split32(this.h, "big");
};
