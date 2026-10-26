import {
  rotl32,
  split32,
  sum32,
  sum32_3,
  sum32_4,
  toHex32,
} from "./module-IMF.js";
import { BlockHash } from "./module-LVY.js";
const rotl32_1 = rotl32;
const tr = sum32;
const sum32_3_1 = sum32_3;
const sum32_4_1 = sum32_4;
const BlockHash_1 = BlockHash;
export class ripemd160 extends BlockHash_1 {
  constructor() {
    if (!(this instanceof ripemd160)) {
      return new ripemd160();
    }
    super();
    this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    this.endian = "little";
  }
  _update(J, Z) {
    let Q = this.h[0];
    let $ = this.h[1];
    let tt = this.h[2];
    let to = this.h[3];
    let ta = this.h[4];
    let td = Q;
    let tl = $;
    let tp = tt;
    let tb = to;
    let tv = ta;
    for (let tg = 0; tg < 80; tg++) {
      let ty;
      let tm;
      var tw = tr(
        rotl32_1(
          sum32_4_1(
            Q,
            ts(tg, $, tt, to),
            J[tf[tg] + Z],
            (ty = tg) <= 15
              ? 0
              : ty <= 31
                ? 1518500249
                : ty <= 47
                  ? 1859775393
                  : ty <= 63
                    ? 2400959708
                    : 2840853838,
          ),
          tc[tg],
        ),
        ta,
      );
      Q = ta;
      ta = to;
      to = rotl32_1(tt, 10);
      tt = $;
      $ = tw;
      tw = tr(
        rotl32_1(
          sum32_4_1(
            td,
            ts(79 - tg, tl, tp, tb),
            J[tu[tg] + Z],
            (tm = tg) <= 15
              ? 1352829926
              : tm <= 31
                ? 1548603684
                : tm <= 47
                  ? 1836072691
                  : 2053994217 * !!(tm <= 63),
          ),
          th[tg],
        ),
        tv,
      );
      td = tv;
      tv = tb;
      tb = rotl32_1(tp, 10);
      tp = tl;
      tl = tw;
    }
    tw = sum32_3_1(this.h[1], tt, tb);
    this.h[1] = sum32_3_1(this.h[2], to, tv);
    this.h[2] = sum32_3_1(this.h[3], ta, td);
    this.h[3] = sum32_3_1(this.h[4], Q, tl);
    this.h[4] = sum32_3_1(this.h[0], $, tp);
    this.h[0] = tw;
  }
  _digest(J) {
    if (J === "hex") {
      return toHex32(this.h, "little");
    }
    return split32(this.h, "little");
  }
}
function ts(J, Z, Q, $) {
  if (J <= 15) {
    return Z ^ Q ^ $;
  }
  if (J <= 31) {
    return (Z & Q) | (~Z & $);
  }
  if (J <= 47) {
    return (Z | ~Q) ^ $;
  }
  if (J <= 63) {
    return (Z & $) | (Q & ~$);
  }
  return Z ^ (Q | ~$);
}
ripemd160.blockSize = 512;
ripemd160.outSize = 160;
ripemd160.hmacStrength = 192;
ripemd160.padLength = 64;
var tf = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15,
  3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11,
  5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7,
  12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13,
];
var tu = [
  5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5,
  10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0,
  4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1,
  5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11,
];
var tc = [
  11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7,
  15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5,
  12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5,
  11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6,
];
var th = [
  8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8,
  9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14,
  13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5,
  12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11,
];
