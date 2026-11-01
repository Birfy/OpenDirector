import { Buffer } from "wS";
import ee from "Hs";
import et from "pd";
const er = Array(16);
const en = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15,
  3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11,
  5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7,
  12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13,
];
const ei = [
  5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5,
  10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0,
  4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1,
  5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11,
];
const ea = [
  11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7,
  15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5,
  12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5,
  11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6,
];
const eo = [
  8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8,
  9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14,
  13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5,
  12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11,
];
function es() {
  et.call(this, 64);
  this._a = 1732584193;
  this._b = 4023233417;
  this._c = 2562383102;
  this._d = 271733878;
  this._e = 3285377520;
}
function ef(Z, Q) {
  return (Z << Q) | (Z >>> (32 - Q));
}
ee(es, et);
es.prototype._update = function () {
  let Z;
  let Q;
  let X;
  let $;
  let ee;
  let et;
  let es;
  let eu;
  let ec;
  let eh;
  let el;
  let ed;
  let ep;
  let eb;
  let eg;
  let ey;
  let ev;
  let e_;
  let ew;
  let em;
  let ex;
  let eS;
  let eE;
  let ek;
  let eT;
  let eR;
  let eA;
  let ej;
  let eC;
  let eI;
  let eM;
  let eO;
  let eP;
  let eB;
  let eL;
  let eN;
  let eD;
  let eU;
  let eq;
  let eF;
  let eK;
  let eW;
  let eH;
  let eV;
  let ez;
  let eG;
  let eY;
  let eJ;
  let eZ;
  let eQ;
  let eX;
  let e$;
  for (let e0 = 0; e0 < 16; ++e0) {
    er[e0] = this._block.readInt32LE(4 * e0);
  }
  let e1 = 0 | this._a;
  let e2 = 0 | this._b;
  let e4 = 0 | this._c;
  let e6 = 0 | this._d;
  let e3 = 0 | this._e;
  let e8 = 0 | this._a;
  let e5 = 0 | this._b;
  let e7 = 0 | this._c;
  let e9 = 0 | this._d;
  let te = 0 | this._e;
  for (let tt = 0; tt < 80; tt += 1) {
    if (tt < 16) {
      Z = e1;
      Q = e2;
      X = e4;
      $ = e6;
      ee = e3;
      eX = (ef((Z + (Q ^ X ^ $) + er[en[tt]] + 0) | 0, ea[tt]) + ee) | 0;
      et = e8;
      es = e5;
      eu = e7;
      ec = e9;
      eh = te;
      e$ =
        (ef((et + (es ^ (eu | ~ec)) + er[ei[tt]] + 1352829926) | 0, eo[tt]) +
          eh) |
        0;
    } else if (tt < 32) {
      el = e1;
      ed = e2;
      ep = e4;
      eb = e6;
      eg = e3;
      eX =
        (ef(
          (el + ((ed & ep) | (~ed & eb)) + er[en[tt]] + 1518500249) | 0,
          ea[tt],
        ) +
          eg) |
        0;
      ey = e8;
      ev = e5;
      e_ = e7;
      ew = e9;
      em = te;
      e$ =
        (ef(
          (ey + ((ev & ew) | (e_ & ~ew)) + er[ei[tt]] + 1548603684) | 0,
          eo[tt],
        ) +
          em) |
        0;
    } else if (tt < 48) {
      ex = e1;
      eS = e2;
      eE = e4;
      ek = e6;
      eT = e3;
      eX =
        (ef((ex + ((eS | ~eE) ^ ek) + er[en[tt]] + 1859775393) | 0, ea[tt]) +
          eT) |
        0;
      eR = e8;
      eA = e5;
      ej = e7;
      eC = e9;
      eI = te;
      e$ =
        (ef((eR + ((eA | ~ej) ^ eC) + er[ei[tt]] + 1836072691) | 0, eo[tt]) +
          eI) |
        0;
    } else if (tt < 64) {
      eM = e1;
      eO = e2;
      eP = e4;
      eB = e6;
      eL = e3;
      eX =
        (ef(
          (eM + ((eO & eB) | (eP & ~eB)) + er[en[tt]] + 2400959708) | 0,
          ea[tt],
        ) +
          eL) |
        0;
      eN = e8;
      eD = e5;
      eU = e7;
      eq = e9;
      eF = te;
      e$ =
        (ef(
          (eN + ((eD & eU) | (~eD & eq)) + er[ei[tt]] + 2053994217) | 0,
          eo[tt],
        ) +
          eF) |
        0;
    } else {
      eK = e1;
      eW = e2;
      eH = e4;
      eV = e6;
      ez = e3;
      eX =
        (ef((eK + (eW ^ (eH | ~eV)) + er[en[tt]] + 2840853838) | 0, ea[tt]) +
          ez) |
        0;
      eG = e8;
      eY = e5;
      eJ = e7;
      eZ = e9;
      eQ = te;
      e$ = (ef((eG + (eY ^ eJ ^ eZ) + er[ei[tt]] + 0) | 0, eo[tt]) + eQ) | 0;
    }
    e1 = e3;
    e3 = e6;
    e6 = ef(e4, 10);
    e4 = e2;
    e2 = eX;
    e8 = te;
    te = e9;
    e9 = ef(e7, 10);
    e7 = e5;
    e5 = e$;
  }
  const tr = (this._b + e4 + e9) | 0;
  this._b = (this._c + e6 + te) | 0;
  this._c = (this._d + e3 + e8) | 0;
  this._d = (this._e + e1 + e5) | 0;
  this._e = (this._a + e2 + e7) | 0;
  this._a = tr;
};
es.prototype._digest = function () {
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
  const Z = Buffer.alloc ? Buffer.alloc(20) : new Buffer(20);
  Z.writeInt32LE(this._a, 0);
  Z.writeInt32LE(this._b, 4);
  Z.writeInt32LE(this._c, 8);
  Z.writeInt32LE(this._d, 12);
  Z.writeInt32LE(this._e, 16);
  return Z;
};
export default es;
