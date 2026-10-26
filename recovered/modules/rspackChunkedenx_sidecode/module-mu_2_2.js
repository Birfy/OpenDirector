import { Buffer } from "./module-pH.js";
import tt from "./module-ULy.js";
import te from "./module-FVT.js";
const tr = Array(16);
const tn = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15,
  3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11,
  5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7,
  12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13,
];
const ti = [
  5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5,
  10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0,
  4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1,
  5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11,
];
const to = [
  11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7,
  15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5,
  12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5,
  11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6,
];
const ta = [
  8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8,
  9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14,
  13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5,
  12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11,
];
function ts() {
  te.call(this, 64);
  this._a = 1732584193;
  this._b = 4023233417;
  this._c = 2562383102;
  this._d = 271733878;
  this._e = 3285377520;
}
function tf(J, Z) {
  return (J << Z) | (J >>> (32 - Z));
}
tt(ts, te);
ts.prototype._update = function () {
  let J;
  let Z;
  let Q;
  let $;
  let tt;
  let te;
  let ts;
  let tu;
  let tc;
  let th;
  let td;
  let tl;
  let tp;
  let tb;
  let tv;
  let tg;
  let ty;
  let tm;
  let tw;
  let tx;
  let t_;
  let tM;
  let tS;
  let tA;
  let tE;
  let tk;
  let tR;
  let tI;
  let tO;
  let tT;
  let tB;
  let tj;
  let tC;
  let tP;
  let tL;
  let tN;
  let tU;
  let tD;
  let tF;
  let tq;
  let tz;
  let tH;
  let tV;
  let tW;
  let tK;
  let tY;
  let tX;
  let tG;
  let tJ;
  let tZ;
  let tQ;
  let t$;
  for (let t0 = 0; t0 < 16; ++t0) {
    tr[t0] = this._block.readInt32LE(4 * t0);
  }
  let t1 = 0 | this._a;
  let t2 = 0 | this._b;
  let t6 = 0 | this._c;
  let t3 = 0 | this._d;
  let t4 = 0 | this._e;
  let t8 = 0 | this._a;
  let t5 = 0 | this._b;
  let t9 = 0 | this._c;
  let t7 = 0 | this._d;
  let et = 0 | this._e;
  for (let ee = 0; ee < 80; ee += 1) {
    if (ee < 16) {
      J = t1;
      Z = t2;
      Q = t6;
      $ = t3;
      tt = t4;
      tQ = (tf((J + (Z ^ Q ^ $) + tr[tn[ee]] + 0) | 0, to[ee]) + tt) | 0;
      te = t8;
      ts = t5;
      tu = t9;
      tc = t7;
      th = et;
      t$ =
        (tf((te + (ts ^ (tu | ~tc)) + tr[ti[ee]] + 1352829926) | 0, ta[ee]) +
          th) |
        0;
    } else if (ee < 32) {
      td = t1;
      tl = t2;
      tp = t6;
      tb = t3;
      tv = t4;
      tQ =
        (tf(
          (td + ((tl & tp) | (~tl & tb)) + tr[tn[ee]] + 1518500249) | 0,
          to[ee],
        ) +
          tv) |
        0;
      tg = t8;
      ty = t5;
      tm = t9;
      tw = t7;
      tx = et;
      t$ =
        (tf(
          (tg + ((ty & tw) | (tm & ~tw)) + tr[ti[ee]] + 1548603684) | 0,
          ta[ee],
        ) +
          tx) |
        0;
    } else if (ee < 48) {
      t_ = t1;
      tM = t2;
      tS = t6;
      tA = t3;
      tE = t4;
      tQ =
        (tf((t_ + ((tM | ~tS) ^ tA) + tr[tn[ee]] + 1859775393) | 0, to[ee]) +
          tE) |
        0;
      tk = t8;
      tR = t5;
      tI = t9;
      tO = t7;
      tT = et;
      t$ =
        (tf((tk + ((tR | ~tI) ^ tO) + tr[ti[ee]] + 1836072691) | 0, ta[ee]) +
          tT) |
        0;
    } else if (ee < 64) {
      tB = t1;
      tj = t2;
      tC = t6;
      tP = t3;
      tL = t4;
      tQ =
        (tf(
          (tB + ((tj & tP) | (tC & ~tP)) + tr[tn[ee]] + 2400959708) | 0,
          to[ee],
        ) +
          tL) |
        0;
      tN = t8;
      tU = t5;
      tD = t9;
      tF = t7;
      tq = et;
      t$ =
        (tf(
          (tN + ((tU & tD) | (~tU & tF)) + tr[ti[ee]] + 2053994217) | 0,
          ta[ee],
        ) +
          tq) |
        0;
    } else {
      tz = t1;
      tH = t2;
      tV = t6;
      tW = t3;
      tK = t4;
      tQ =
        (tf((tz + (tH ^ (tV | ~tW)) + tr[tn[ee]] + 2840853838) | 0, to[ee]) +
          tK) |
        0;
      tY = t8;
      tX = t5;
      tG = t9;
      tJ = t7;
      tZ = et;
      t$ = (tf((tY + (tX ^ tG ^ tJ) + tr[ti[ee]] + 0) | 0, ta[ee]) + tZ) | 0;
    }
    t1 = t4;
    t4 = t3;
    t3 = tf(t6, 10);
    t6 = t2;
    t2 = tQ;
    t8 = et;
    et = t7;
    t7 = tf(t9, 10);
    t9 = t5;
    t5 = t$;
  }
  const er = (this._b + t6 + t7) | 0;
  this._b = (this._c + t3 + et) | 0;
  this._c = (this._d + t4 + t8) | 0;
  this._d = (this._e + t1 + t5) | 0;
  this._e = (this._a + t2 + t9) | 0;
  this._a = er;
};
ts.prototype._digest = function () {
  this._block[this._blockOffset++] = 128;
  if (this._blockOffset > 56) {
    this._block.fill(0, this._blockOffset, 64);
    this._update();
    this._blockOffset = 0;
  }
  this._block.fill(0, this._blockOffset, 56);
  this._block.writeUInt32LE(this._length[0], 56);
  this._block.writeUInt32LE(this._length[1], 60);
  this._update();
  const J = Buffer.alloc ? Buffer.alloc(20) : new Buffer(20);
  J.writeInt32LE(this._a, 0);
  J.writeInt32LE(this._b, 4);
  J.writeInt32LE(this._c, 8);
  J.writeInt32LE(this._d, 12);
  J.writeInt32LE(this._e, 16);
  return J;
};
export default ts;
