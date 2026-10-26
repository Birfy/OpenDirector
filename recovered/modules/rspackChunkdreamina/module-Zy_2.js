import {
  rotl32,
  split32,
  sum32,
  sum32_3,
  sum32_4,
  toHex32,
} from "./module-ial.js";
import { BlockHash } from "./module-kZ.js";
const rotl32_1 = rotl32;
const a = sum32;
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
  _update(t, e) {
    let r = this.h[0];
    let i = this.h[1];
    let f = this.h[2];
    let h = this.h[3];
    let d = this.h[4];
    let m = r;
    let v = i;
    let g = f;
    let y = h;
    let M = d;
    for (let w = 0; w < 80; w++) {
      let _;
      let x;
      var S = a(
        rotl32_1(
          sum32_4_1(
            r,
            c(w, i, f, h),
            t[u[w] + e],
            (_ = w) <= 15
              ? 0
              : _ <= 31
                ? 1518500249
                : _ <= 47
                  ? 1859775393
                  : _ <= 63
                    ? 2400959708
                    : 2840853838,
          ),
          b[w],
        ),
        d,
      );
      r = d;
      d = h;
      h = rotl32_1(f, 10);
      f = i;
      i = S;
      S = a(
        rotl32_1(
          sum32_4_1(
            m,
            c(79 - w, v, g, y),
            t[l[w] + e],
            (x = w) <= 15
              ? 1352829926
              : x <= 31
                ? 1548603684
                : x <= 47
                  ? 1836072691
                  : 2053994217 * !!(x <= 63),
          ),
          p[w],
        ),
        M,
      );
      m = M;
      M = y;
      y = rotl32_1(g, 10);
      g = v;
      v = S;
    }
    S = sum32_3_1(this.h[1], f, y);
    this.h[1] = sum32_3_1(this.h[2], h, M);
    this.h[2] = sum32_3_1(this.h[3], d, m);
    this.h[3] = sum32_3_1(this.h[4], r, v);
    this.h[4] = sum32_3_1(this.h[0], i, g);
    this.h[0] = S;
  }
  _digest(t) {
    if (t === "hex") {
      return toHex32(this.h, "little");
    }
    return split32(this.h, "little");
  }
}
function c(t, e, r, i) {
  if (t <= 15) {
    return e ^ r ^ i;
  }
  if (t <= 31) {
    return (e & r) | (~e & i);
  }
  if (t <= 47) {
    return (e | ~r) ^ i;
  }
  if (t <= 63) {
    return (e & i) | (r & ~i);
  }
  return e ^ (r | ~i);
}
ripemd160.blockSize = 512;
ripemd160.outSize = 160;
ripemd160.hmacStrength = 192;
ripemd160.padLength = 64;
var u = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15,
  3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11,
  5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7,
  12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13,
];
var l = [
  5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5,
  10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0,
  4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1,
  5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11,
];
var b = [
  11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7,
  15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5,
  12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5,
  11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6,
];
var p = [
  8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8,
  9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14,
  13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5,
  12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11,
];
