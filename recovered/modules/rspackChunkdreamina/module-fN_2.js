import tx from "NY";
import { Buffer } from "wS";
let $;
let ee;
let et;
let er;
let en;
let ei;
let ea;
let eo;
let es;
let ef;
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
let e0;
let e1;
let e2;
let e4;
let e6;
let e3;
let e8;
let e5;
let e7;
let e9;
let te;
let tt;
let tr;
let tn;
let ti;
let ta;
let to;
let ts;
let tf;
let tu;
let tc;
let th;
let tl;
let td;
let tp;
let tb;
let tg;
let ty;
let tv;
let t_;
let tw;
let tm;
const tR = new Uint8Array([
  0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5,
  5, 5, 0, 0, 0, 0,
]);
const tA = new Uint8Array([
  0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11,
  11, 12, 12, 13, 13, 0, 0,
]);
const tj = new Uint8Array([
  16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
]);
const tC = (Z, Q) => {
  const b = new Uint16Array(31);
  for (var $ = 0; $ < 31; ++$) {
    b[$] = Q += 1 << Z[$ - 1];
  }
  const r = new Int32Array(b[30]);
  for (var $ = 1; $ < 30; ++$) {
    for (let et = b[$]; et < b[$ + 1]; ++et) {
      r[et] = ((et - b[$]) << 5) | $;
    }
  }
  return {
    b,
    r,
  };
};
const tI = tC(tR, 2);
const tM = tI.b;
const tO = tI.r;
tM[28] = 258;
tO[258] = 28;
const tP = tC(tA, 0).b;
const tB = new Uint16Array(32768);
for (var tL = 0; tL < 32768; ++tL) {
  let tN = ((43690 & tL) >> 1) | ((21845 & tL) << 1);
  tN =
    ((61680 & (tN = ((52428 & tN) >> 2) | ((13107 & tN) << 2))) >> 4) |
    ((3855 & tN) << 4);
  tB[tL] = (((65280 & tN) >> 8) | ((255 & tN) << 8)) >> 1;
}
const tD = (Z, Q, X) => {
  let $;
  for (var ee = Z.length, et = 0, er = new Uint16Array(Q); et < ee; ++et) {
    if (Z[et]) {
      ++er[Z[et] - 1];
    }
  }
  const en = new Uint16Array(Q);
  for (et = 1; et < Q; ++et) {
    en[et] = (en[et - 1] + er[et - 1]) << 1;
  }
  if (X) {
    $ = new Uint16Array(1 << Q);
    const ei = 15 - Q;
    for (et = 0; et < ee; ++et) {
      if (Z[et]) {
        const ea = (et << 4) | Z[et];
        const eo = Q - Z[et];
        for (
          let es = en[Z[et] - 1]++ << eo, ef = es | ((1 << eo) - 1);
          es <= ef;
          ++es
        ) {
          $[tB[es] >> ei] = ea;
        }
      }
    }
  } else {
    $ = new Uint16Array(ee);
    for (et = 0; et < ee; ++et) {
      if (Z[et]) {
        $[et] = tB[en[Z[et] - 1]++] >> (15 - Z[et]);
      }
    }
  }
  return $;
};
const tU = new Uint8Array(288);
for (var tL = 0; tL < 144; ++tL) {
  tU[tL] = 8;
}
for (var tL = 144; tL < 256; ++tL) {
  tU[tL] = 9;
}
for (var tL = 256; tL < 280; ++tL) {
  tU[tL] = 7;
}
for (var tL = 280; tL < 288; ++tL) {
  tU[tL] = 8;
}
const tq = new Uint8Array(32);
for (var tL = 0; tL < 32; ++tL) {
  tq[tL] = 5;
}
const tF = tD(tU, 9, 1);
const tK = tD(tq, 5, 1);
const tW = (Z) => {
  let Q = Z[0];
  for (let X = 1; X < Z.length; ++X) {
    if (Z[X] > Q) {
      Q = Z[X];
    }
  }
  return Q;
};
const tH = (Z, Q, X) => {
  const $ = (Q / 8) | 0;
  return ((Z[$] | (Z[$ + 1] << 8)) >> (7 & Q)) & X;
};
const tV = (Z, Q) => {
  const X = (Q / 8) | 0;
  return (Z[X] | (Z[X + 1] << 8) | (Z[X + 2] << 16)) >> (7 & Q);
};
const tz = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data",
];
const tG = function (Z, Q, X) {
  const $ = Error(Q || tz[Z]);
  $.code = Z;
  if (Error.captureStackTrace) {
    Error.captureStackTrace($, tG);
  }
  if (!X) {
    throw $;
  }
  return $;
};
const tY = (Z, Q, X, $) => {
  let ee;
  let et;
  const Z_length = Z.length;
  if (!Z_length || (Q.f && !Q.l)) {
    return X || new Uint8Array(0);
  }
  const en = !X;
  const ei = en || Q.i != 2;
  const ea = Q.i;
  if (en) {
    X = new Uint8Array(3 * Z_length);
  }
  const eo = (Z) => {
    const X_length = X.length;
    if (Z > X_length) {
      const $ = new Uint8Array(Math.max(2 * X_length, Z));
      $.set(X);
      X = $;
    }
  };
  let es = Q.f || 0;
  let ef = Q.p || 0;
  let eu = Q.b || 0;
  let ec = Q.l;
  let eh = Q.d;
  let el = Q.m;
  let ed = Q.n;
  const ep = 8 * Z_length;
  do {
    if (!ec) {
      es = tH(Z, ef, 1);
      const eb = tH(Z, ef + 1, 3);
      ef += 3;
      if (eb) {
        if (eb == 1) {
          ec = tF;
          eh = tK;
          el = 9;
          ed = 5;
        } else if (eb == 2) {
          const eg = tH(Z, ef, 31) + 257;
          const ey = tH(Z, ef + 10, 15) + 4;
          const ev = eg + tH(Z, ef + 5, 31) + 1;
          ef += 14;
          const e_ = new Uint8Array(ev);
          const ew = new Uint8Array(19);
          for (var em = 0; em < ey; ++em) {
            ew[tj[em]] = tH(Z, ef + 3 * em, 7);
          }
          ef += 3 * ey;
          const ex = tW(ew);
          const eS = (1 << ex) - 1;
          const eE = tD(ew, ex, 1);
          for (var em = 0; em < ev;) {
            const ek = eE[tH(Z, ef, eS)];
            ef += 15 & ek;
            var eT = ek >> 4;
            if (eT < 16) {
              e_[em++] = eT;
            } else {
              var eR = 0;
              let eA = 0;
              for (
                eT == 16
                  ? ((eA = 3 + tH(Z, ef, 3)), (ef += 2), (eR = e_[em - 1]))
                  : eT == 17
                    ? ((eA = 3 + tH(Z, ef, 7)), (ef += 3))
                    : eT == 18 && ((eA = 11 + tH(Z, ef, 127)), (ef += 7));
                eA--;
              ) {
                e_[em++] = eR;
              }
            }
          }
          const ej = e_.subarray(0, eg);
          var eC = e_.subarray(eg);
          el = tW(ej);
          ed = tW(eC);
          ec = tD(ej, el, 1);
          eh = tD(eC, ed, 1);
        } else {
          tG(1);
        }
      } else {
        var eT = (((ef + 7) / 8) | 0) + 4;
        const eI = Z[eT - 4] | (Z[eT - 3] << 8);
        const eM = eT + eI;
        if (eM > Z_length) {
          if (ea) {
            tG(0);
          }
          break;
        }
        if (ei) {
          eo(eu + eI);
        }
        X.set(Z.subarray(eT, eM), eu);
        Q.b = eu += eI;
        Q.p = ef = 8 * eM;
        Q.f = es;
        continue;
      }
      if (ef > ep) {
        if (ea) {
          tG(0);
        }
        break;
      }
    }
    if (ei) {
      eo(eu + 131072);
    }
    const eO = (1 << el) - 1;
    const eP = (1 << ed) - 1;
    let eB = ef;
    for (; ; eB = ef) {
      var eR = ec[tV(Z, ef) & eO];
      const eL = eR >> 4;
      if ((ef += 15 & eR) > ep) {
        if (ea) {
          tG(0);
        }
        break;
      }
      if (!eR) {
        tG(2);
      }
      if (eL < 256) {
        X[eu++] = eL;
      } else if (eL == 256) {
        eB = ef;
        ec = null;
        break;
      } else {
        let eN = eL - 254;
        if (eL > 264) {
          var em = eL - 257;
          var eD = tR[em];
          eN = tH(Z, ef, (1 << eD) - 1) + tM[em];
          ef += eD;
        }
        const eU = eh[tV(Z, ef) & eP];
        const eq = eU >> 4;
        if (!eU) {
          tG(3);
        }
        ef += 15 & eU;
        var eC = tP[eq];
        if (eq > 3) {
          var eD = tA[eq];
          eC += tV(Z, ef) & ((1 << eD) - 1);
          ef += eD;
        }
        if (ef > ep) {
          if (ea) {
            tG(0);
          }
          break;
        }
        if (ei) {
          eo(eu + 131072);
        }
        const eF = eu + eN;
        if (eu < eC) {
          const eK = 0 - eC;
          const eW = Math.min(eC, eF);
          for (eK + eu < 0 && tG(3); eu < eW; ++eu) {
            X[eu] = $[eK + eu];
          }
        }
        for (; eu < eF; ++eu) {
          X[eu] = X[eu - eC];
        }
      }
    }
    Q.l = ec;
    Q.p = eB;
    Q.b = eu;
    Q.f = es;
    if (ec) {
      es = 1;
      Q.m = el;
      Q.d = eh;
      Q.n = ed;
    }
  } while (!es);
  if (eu != X.length && en) {
    ee = X;
    if ((et = eu) == null || et > ee.length) {
      et = ee.length;
    }
    return new Uint8Array(ee.subarray(0, et));
  }
  return X.subarray(0, eu);
};
const tJ = new Uint8Array(0);
const tZ = typeof TextDecoder !== "undefined" && new TextDecoder();
try {
  tZ.decode(tJ, {
    stream: true,
  });
} catch (Z) {}
let tQ;
let tX;
const t$ =
  typeof globalThis !== "undefined"
    ? globalThis
    : typeof window !== "undefined"
      ? window
      : typeof global !== "undefined"
        ? global
        : typeof self !== "undefined"
          ? self
          : {};
const t0 = {};
function t1() {
  if (tX) {
    return tQ;
  }
  tX = 1;
  const Z = (Z) => Z && Z.Math === Math && Z;
  return (tQ =
    Z(typeof globalThis === "object" && globalThis) ||
    Z(typeof window === "object" && window) ||
    Z(typeof self === "object" && self) ||
    Z(typeof t$ === "object" && t$) ||
    (function () {
      return this;
    })() ||
    tQ ||
    Function("return this")());
}
let t2;
let t4;
const t6 = {};
function t3() {
  if (!t4) {
    t4 = 1;
    t2 = function (Z) {
      try {
        return !!Z();
      } catch (Z) {
        return true;
      }
    };
  }
  return t2;
}
function t8() {
  if (re) {
    return t9;
  }
  re = 1;
  return (t9 = !t3()(function () {
    return (
      Object.defineProperty({}, 1, {
        get: function () {
          return 7;
        },
      })[1] !== 7
    );
  }));
}
function t5() {
  if (rr) {
    return rt;
  }
  rr = 1;
  return (rt = !t3()(function () {
    const Z = function () {}.bind();
    return typeof Z !== "function" || Z.hasOwnProperty("prototype");
  }));
}
function t7() {
  if (ri) {
    return rn;
  }
  ri = 1;
  const Z = t5();
  const call = Function.prototype.call;
  return (rn = Z
    ? call.bind(call)
    : function () {
        return call.apply(call, arguments);
      });
}
var t9;
var re;
var rt;
var rr;
var rn;
var ri;
let ra;
const ro = {};
function rs() {
  if (!rk) {
    rk = 1;
    rE = function (Z, value) {
      return {
        enumerable: !(1 & Z),
        configurable: !(2 & Z),
        writable: !(4 & Z),
        value,
      };
    };
  }
  return rE;
}
function rf() {
  if (rR) {
    return rT;
  }
  rR = 1;
  const Z = t5();
  const Function_prototype = Function.prototype;
  const Q_call = Function_prototype.call;
  const $ = Z && Function_prototype.bind.bind(Q_call, Q_call);
  return (rT = Z
    ? $
    : function (Z) {
        return function () {
          return Q_call.apply(Z, arguments);
        };
      });
}
function ru() {
  if (rj) {
    return rA;
  }
  rj = 1;
  const Z = rf();
  const Q = Z({}.toString);
  const X = Z("".slice);
  return (rA = function (Z) {
    return X(Q(Z), 8, -1);
  });
}
function rc() {
  if (!rO) {
    rO = 1;
    rM = function (Z) {
      return Z == null;
    };
  }
  return rM;
}
function rh() {
  if (rB) {
    return rP;
  }
  rB = 1;
  const Z = rc();
  const Q = TypeError;
  return (rP = function (X) {
    if (Z(X)) {
      throw Q("Can't call method on " + X);
    }
    return X;
  });
}
function rl() {
  if (rN) {
    return rL;
  }
  rN = 1;
  const Z = (() => {
    if (rI) {
      return rC;
    }
    rI = 1;
    const Z = rf();
    const Q = t3();
    const X = ru();
    const $ = Object;
    const ee = Z("".split);
    return (rC = Q(function () {
      return !$("z").propertyIsEnumerable(0);
    })
      ? function (Z) {
          if (X(Z) === "String") {
            return ee(Z, "");
          }
          return $(Z);
        }
      : $);
  })();
  const Q = rh();
  return (rL = function (X) {
    return Z(Q(X));
  });
}
function rd() {
  if (rU) {
    return rD;
  }
  rU = 1;
  const all = typeof document === "object" && document.all;
  return (rD = {
    all,
    IS_HTMLDDA: typeof all === "undefined" && all !== undefined,
  });
}
function rp() {
  if (rF) {
    return rq;
  }
  rF = 1;
  const Z = rd();
  const Z_all = Z.all;
  return (rq = Z.IS_HTMLDDA
    ? function (Z) {
        return typeof Z === "function" || Z === Z_all;
      }
    : function (Z) {
        return typeof Z === "function";
      });
}
function rb() {
  if (rW) {
    return rK;
  }
  rW = 1;
  const Z = rp();
  const Q = rd();
  const Q_all = Q.all;
  return (rK = Q.IS_HTMLDDA
    ? function (Q) {
        if (typeof Q === "object") {
          return Q !== null;
        }
        return Z(Q) || Q === Q_all;
      }
    : function (Q) {
        if (typeof Q === "object") {
          return Q !== null;
        }
        return Z(Q);
      });
}
function rg() {
  if (rV) {
    return rH;
  }
  rV = 1;
  const Z = t1();
  const Q = rp();
  return (rH = function (X, $) {
    let ee;
    if (arguments.length < 2) {
      if (Q((ee = Z[X]))) {
        return ee;
      }
      return undefined;
    }
    return Z[X] && Z[X][$];
  });
}
function ry() {
  if (rG) {
    return rz;
  }
  rG = 1;
  return (rz = rf()({}.isPrototypeOf));
}
function rv() {
  if (r$) {
    return rX;
  }
  r$ = 1;
  const Z = (() => {
    if (rQ) {
      return rZ;
    }
    rQ = 1;
    let Z;
    let Q;
    const X = t1();
    if (!rJ) {
      rJ = 1;
      rY =
        (typeof navigator !== "undefined" && String(navigator.userAgent)) || "";
    }
    const $ = rY;
    const X_process = X.process;
    const X_Deno = X.Deno;
    const er = (X_process && X_process.versions) || (X_Deno && X_Deno.version);
    const en = er && er.v8;
    if (en) {
      Q = (Z = en.split("."))[0] > 0 && Z[0] < 4 ? 1 : +(Z[0] + Z[1]);
    }
    if (
      !Q &&
      $ &&
      (!(Z = $.match(/Edge\/(\d+)/)) || Z[1] >= 74) &&
      (Z = $.match(/Chrome\/(\d+)/))
    ) {
      Q = +Z[1];
    }
    return (rZ = Q);
  })();
  const Q = t3();
  const String_1 = t1().String;
  return (rX =
    !!Object.getOwnPropertySymbols &&
    !Q(function () {
      const Q = Symbol("symbol detection");
      return (
        !String_1(Q) ||
        !(Object(Q) instanceof Symbol) ||
        (!Symbol.sham && Z && Z < 41)
      );
    }));
}
function r_() {
  if (r1) {
    return r0;
  }
  r1 = 1;
  return (r0 = rv() && !Symbol.sham && typeof Symbol.iterator === "symbol");
}
function rw() {
  if (r4) {
    return r2;
  }
  r4 = 1;
  const Z = rg();
  const Q = rp();
  const X = ry();
  const $ = r_();
  const ee = Object;
  return (r2 = $
    ? function (Z) {
        return typeof Z === "symbol";
      }
    : function ($) {
        const et = Z("Symbol");
        return Q(et) && X(et.prototype, ee($));
      });
}
function rm() {
  if (r3) {
    return r6;
  }
  r3 = 1;
  const Z = String;
  return (r6 = function (Q) {
    try {
      return Z(Q);
    } catch (Z) {
      return "Object";
    }
  });
}
function rx() {
  if (r5) {
    return r8;
  }
  r5 = 1;
  const Z = rp();
  const Q = rm();
  const X = TypeError;
  return (r8 = function ($) {
    if (Z($)) {
      return $;
    }
    throw X(Q($) + " is not a function");
  });
}
function rS() {
  if (r9) {
    return r7;
  }
  r9 = 1;
  const Z = rx();
  const Q = rc();
  return (r7 = function (X, $) {
    const ee = X[$];
    if (Q(ee)) {
      return undefined;
    }
    return Z(ee);
  });
}
var rE;
var rk;
var rT;
var rR;
var rA;
var rj;
var rC;
var rI;
var rM;
var rO;
var rP;
var rB;
var rL;
var rN;
var rD;
var rU;
var rq;
var rF;
var rK;
var rW;
var rH;
var rV;
var rz;
var rG;
var rY;
var rJ;
var rZ;
var rQ;
var rX;
var r$;
var r0;
var r1;
var r2;
var r4;
var r6;
var r3;
var r8;
var r5;
var r7;
var r9;
let ne;
let nt;
let nr;
let nn;
const ni = {
  exports: {},
};
function na() {
  if (ny) {
    return ng;
  }
  ny = 1;
  const Z = t1();
  const Object_defineProperty = Object.defineProperty;
  return (ng = function (X, $) {
    try {
      Object_defineProperty(Z, X, {
        value: $,
        configurable: true,
        writable: true,
      });
    } catch (Q) {
      Z[X] = $;
    }
    return $;
  });
}
function no() {
  if (n_) {
    return nv;
  }
  n_ = 1;
  const Z = t1();
  const Q = na();
  const X = "__core-js_shared__";
  return (nv = Z[X] || Q(X, {}));
}
function ns() {
  if (nw) {
    return ni.exports;
  }
  nw = 1;
  if (!nn) {
    nn = 1;
    nr = false;
  }
  const Z = nr;
  const Q = no();
  (ni.exports = function (Z, X) {
    return Q[Z] || (Q[Z] = X !== undefined ? X : {});
  })("versions", []).push({
    version: "3.32.2",
    mode: Z ? "pure" : "global",
    copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.32.2/LICENSE",
    source: "https://github.com/zloirock/core-js",
  });
  return ni.exports;
}
function nf() {
  if (nx) {
    return nm;
  }
  nx = 1;
  const Z = rh();
  const Q = Object;
  return (nm = function (X) {
    return Q(Z(X));
  });
}
function nu() {
  if (nE) {
    return nS;
  }
  nE = 1;
  const Z = rf();
  const Q = nf();
  const X = Z({}.hasOwnProperty);
  return (nS =
    Object.hasOwn ||
    function (Z, $) {
      return X(Q(Z), $);
    });
}
function nc() {
  if (nT) {
    return nk;
  }
  nT = 1;
  const Z = rf();
  let Q = 0;
  const X = Math.random();
  const $ = Z((1).toString);
  return (nk = function (Z) {
    return "Symbol(" + (Z === undefined ? "" : Z) + ")_" + $(++Q + X, 36);
  });
}
function nh() {
  if (nA) {
    return nR;
  }
  nA = 1;
  const Z = t1();
  const Q = ns();
  const X = nu();
  const $ = nc();
  const ee = rv();
  const et = r_();
  const Z_Symbol = Z.Symbol;
  const en = Q("wks");
  const ei = et
    ? Z_Symbol.for || Z_Symbol
    : (Z_Symbol && Z_Symbol.withoutSetter) || $;
  return (nR = function (Z) {
    if (!X(en, Z)) {
      en[Z] = ee && X(Z_Symbol, Z) ? Z_Symbol[Z] : ei("Symbol." + Z);
    }
    return en[Z];
  });
}
function nl() {
  if (nC) {
    return nj;
  }
  nC = 1;
  const Z = t7();
  const Q = rb();
  const X = rw();
  const $ = rS();
  const ee = (() => {
    if (nt) {
      return ne;
    }
    nt = 1;
    const Z = t7();
    const Q = rp();
    const X = rb();
    const $ = TypeError;
    return (ne = function (ee, et) {
      let er;
      let en;
      if (
        (et === "string" && Q((er = ee.toString)) && !X((en = Z(er, ee)))) ||
        (Q((er = ee.valueOf)) && !X((en = Z(er, ee)))) ||
        (et !== "string" && Q((er = ee.toString)) && !X((en = Z(er, ee))))
      ) {
        return en;
      }
      throw $("Can't convert object to primitive value");
    });
  })();
  const et = nh();
  const er = TypeError;
  const en = et("toPrimitive");
  return (nj = function (et, ei) {
    if (!Q(et) || X(et)) {
      return et;
    }
    let ea;
    const eo = $(et, en);
    if (eo) {
      if (ei === undefined) {
        ei = "default";
      }
      if (!Q((ea = Z(eo, et, ei))) || X(ea)) {
        return ea;
      }
      throw er("Can't convert object to primitive value");
    }
    if (ei === undefined) {
      ei = "number";
    }
    return ee(et, ei);
  });
}
function nd() {
  if (nM) {
    return nI;
  }
  nM = 1;
  const Z = nl();
  const Q = rw();
  return (nI = function (X) {
    const $ = Z(X, "string");
    if (Q($)) {
      return $;
    }
    return $ + "";
  });
}
function np() {
  if (nL) {
    return nB;
  }
  nL = 1;
  const Z = t8();
  const Q = t3();
  const X = (() => {
    if (nP) {
      return nO;
    }
    nP = 1;
    const Z = t1();
    const Q = rb();
    const Z_document = Z.document;
    const $ = Q(Z_document) && Q(Z_document.createElement);
    return (nO = function (Z) {
      if ($) {
        return Z_document.createElement(Z);
      }
      return {};
    });
  })();
  return (nB =
    !Z &&
    !Q(function () {
      return (
        Object.defineProperty(X("div"), "a", {
          get: function () {
            return 7;
          },
        }).a !== 7
      );
    }));
}
function nb() {
  if (nN) {
    return t6;
  }
  nN = 1;
  const Z = t8();
  const Q = t7();
  const X = (() => {
    if (ra) {
      return ro;
    }
    ra = 1;
    const propertyIsEnumerable = {}.propertyIsEnumerable;
    const Object_getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    ro.f =
      Object_getOwnPropertyDescriptor &&
      !propertyIsEnumerable.call(
        {
          1: 2,
        },
        1,
      )
        ? function (Z) {
            const X = Object_getOwnPropertyDescriptor(this, Z);
            return !!X && X.enumerable;
          }
        : propertyIsEnumerable;
    return ro;
  })();
  const $ = rs();
  const ee = rl();
  const et = nd();
  const er = nu();
  const en = np();
  const Object_getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  t6.f = Z
    ? Object_getOwnPropertyDescriptor
    : function (Z, ea) {
        Z = ee(Z);
        ea = et(ea);
        if (en) {
          try {
            return Object_getOwnPropertyDescriptor(Z, ea);
          } catch (Z) {}
        }
        if (er(Z, ea)) {
          return $(!Q(X.f, Z, ea), Z[ea]);
        }
      };
  return t6;
}
var ng;
var ny;
var nv;
var n_;
var nw;
var nm;
var nx;
var nS;
var nE;
var nk;
var nT;
var nR;
var nA;
var nj;
var nC;
var nI;
var nM;
var nO;
var nP;
var nB;
var nL;
var nN;
let nD;
let nU;
const nq = {};
function nF() {
  if (nV) {
    return nH;
  }
  nV = 1;
  const Z = rb();
  const Q = String;
  const X = TypeError;
  return (nH = function ($) {
    if (Z($)) {
      return $;
    }
    throw X(Q($) + " is not an object");
  });
}
function nK() {
  if (nz) {
    return nq;
  }
  nz = 1;
  const Z = t8();
  const Q = np();
  const X = (() => {
    if (nU) {
      return nD;
    }
    nU = 1;
    const Z = t8();
    const Q = t3();
    return (nD =
      Z &&
      Q(function () {
        return (
          Object.defineProperty(function () {}, "prototype", {
            value: 42,
            writable: false,
          }).prototype !== 42
        );
      }));
  })();
  const $ = nF();
  const ee = nd();
  const et = TypeError;
  const Object_defineProperty = Object.defineProperty;
  const Object_getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  const ei = "enumerable";
  const ea = "configurable";
  const eo = "writable";
  nq.f = Z
    ? X
      ? function (Z, Q, X) {
          $(Z);
          Q = ee(Q);
          $(X);
          if (
            typeof Z === "function" &&
            Q === "prototype" &&
            "value" in X &&
            eo in X &&
            !X[eo]
          ) {
            const et = Object_getOwnPropertyDescriptor(Z, Q);
            if (et && et[eo]) {
              Z[Q] = X.value;
              X = {
                configurable: ea in X ? X[ea] : et[ea],
                enumerable: ei in X ? X[ei] : et[ei],
                writable: false,
              };
            }
          }
          return Object_defineProperty(Z, Q, X);
        }
      : Object_defineProperty
    : function (Z, X, en) {
        $(Z);
        X = ee(X);
        $(en);
        if (Q) {
          try {
            return Object_defineProperty(Z, X, en);
          } catch (Z) {}
        }
        if ("get" in en || "set" in en) {
          throw et("Accessors not supported");
        }
        if ("value" in en) {
          Z[X] = en.value;
        }
        return Z;
      };
  return nq;
}
function nW() {
  if (nY) {
    return nG;
  }
  nY = 1;
  const Z = t8();
  const Q = nK();
  const X = rs();
  return (nG = Z
    ? function (Z, $, ee) {
        return Q.f(Z, $, X(1, ee));
      }
    : function (Z, Q, X) {
        Z[Q] = X;
        return Z;
      });
}
var nH;
var nV;
var nz;
var nG;
var nY;
let nJ;
let nZ;
const nQ = {
  exports: {},
};
function nX() {
  if (n3) {
    return n6;
  }
  n3 = 1;
  const Z = rf();
  const Q = rp();
  const X = no();
  const $ = Z(Function.toString);
  if (!Q(X.inspectSource)) {
    X.inspectSource = function (Z) {
      return $(Z);
    };
  }
  return (n6 = X.inspectSource);
}
function n$() {
  if (n9) {
    return n7;
  }
  n9 = 1;
  const Z = ns();
  const Q = nc();
  const X = Z("keys");
  return (n7 = function (Z) {
    return X[Z] || (X[Z] = Q(Z));
  });
}
function n0() {
  if (!it) {
    it = 1;
    ie = {};
  }
  return ie;
}
function n1() {
  if (ii) {
    return ir;
  }
  ii = 1;
  let Z;
  let Q;
  let has;
  const $ = (() => {
    if (n5) {
      return n8;
    }
    n5 = 1;
    const Z = t1();
    const Q = rp();
    const Z_WeakMap = Z.WeakMap;
    return (n8 = Q(Z_WeakMap) && /native code/.test(String(Z_WeakMap)));
  })();
  const ee = t1();
  const et = rb();
  const er = nW();
  const en = nu();
  const ei = no();
  const ea = n$();
  const eo = n0();
  const es = "Object already initialized";
  const ee_TypeError = ee.TypeError;
  const ee_WeakMap = ee.WeakMap;
  if ($ || ei.state) {
    const ec = ei.state || (ei.state = new ee_WeakMap());
    ec.get = ec.get;
    ec.has = ec.has;
    ec.set = ec.set;
    Z = function (Z, Q) {
      if (ec.has(Z)) {
        throw ee_TypeError(es);
      }
      Q.facade = Z;
      ec.set(Z, Q);
      return Q;
    };
    Q = function (Z) {
      return ec.get(Z) || {};
    };
    has = function (Z) {
      return ec.has(Z);
    };
  } else {
    const eh = ea("state");
    eo[eh] = true;
    Z = function (Z, Q) {
      if (en(Z, eh)) {
        throw ee_TypeError(es);
      }
      Q.facade = Z;
      er(Z, eh, Q);
      return Q;
    };
    Q = function (Z) {
      if (en(Z, eh)) {
        return Z[eh];
      }
      return {};
    };
    has = function (Z) {
      return en(Z, eh);
    };
  }
  return (ir = {
    set: Z,
    get: Q,
    has,
    enforce: function ($) {
      if (has($)) {
        return Q($);
      }
      return Z($, {});
    },
    getterFor: function (Z) {
      return function (X) {
        let $;
        if (!et(X) || ($ = Q(X)).type !== Z) {
          throw ee_TypeError("Incompatible receiver, " + Z + " required");
        }
        return $;
      };
    },
  });
}
function n2() {
  if (ia) {
    return nQ.exports;
  }
  ia = 1;
  const Z = rf();
  const Q = t3();
  const X = rp();
  const $ = nu();
  const ee = t8();
  const CONFIGURABLE = (() => {
    if (nZ) {
      return nJ;
    }
    nZ = 1;
    const Z = t8();
    const Q = nu();
    const Function_prototype = Function.prototype;
    const $ = Z && Object.getOwnPropertyDescriptor;
    const EXISTS = Q(Function_prototype, "name");
    const CONFIGURABLE_1 =
      EXISTS && (!Z || (Z && $(Function_prototype, "name").configurable));
    return (nJ = {
      EXISTS,
      PROPER: EXISTS && function () {}.name === "something",
      CONFIGURABLE: CONFIGURABLE_1,
    });
  })().CONFIGURABLE;
  const er = nX();
  const en = n1();
  const en_enforce = en.enforce;
  const en_get = en.get;
  const eo = String;
  const Object_defineProperty = Object.defineProperty;
  const ef = Z("".slice);
  const eu = Z("".replace);
  const ec = Z([].join);
  const eh =
    ee &&
    !Q(function () {
      return (
        Object_defineProperty(function () {}, "length", {
          value: 8,
        }).length !== 8
      );
    });
  const el = String(String).split("String");
  const ed = (nQ.exports = function (Z, Q, X) {
    if (ef(eo(Q), 0, 7) === "Symbol(") {
      Q = "[" + eu(eo(Q), /^Symbol\(([^)]*)\)/, "$1") + "]";
    }
    if (X && X.getter) {
      Q = "get " + Q;
    }
    if (X && X.setter) {
      Q = "set " + Q;
    }
    if (!$(Z, "name") || (CONFIGURABLE && Z.name !== Q)) {
      if (ee) {
        Object_defineProperty(Z, "name", {
          value: Q,
          configurable: true,
        });
      } else {
        Z.name = Q;
      }
    }
    if (eh && X && $(X, "arity") && Z.length !== X.arity) {
      Object_defineProperty(Z, "length", {
        value: X.arity,
      });
    }
    try {
      if (X && $(X, "constructor") && X.constructor) {
        if (ee) {
          Object_defineProperty(Z, "prototype", {
            writable: false,
          });
        }
      } else if (Z.prototype) {
        Z.prototype = undefined;
      }
    } catch (Z) {}
    const er = en_enforce(Z);
    if (!$(er, "source")) {
      er.source = ec(el, typeof Q === "string" ? Q : "");
    }
    return Z;
  });
  Function.prototype.toString = ed(function () {
    return (X(this) && en_get(this).source) || er(this);
  }, "toString");
  return nQ.exports;
}
function n4() {
  if (is) {
    return io;
  }
  is = 1;
  const Z = rp();
  const Q = nK();
  const X = n2();
  const $ = na();
  return (io = function (ee, et, er, en) {
    if (!en) {
      en = {};
    }
    let en_enumerable = en.enumerable;
    const ea = en.name !== undefined ? en.name : et;
    if (Z(er)) {
      X(er, ea, en);
    }
    if (en.global) {
      if (en_enumerable) {
        ee[et] = er;
      } else {
        $(et, er);
      }
    } else {
      try {
        if (en.unsafe) {
          if (ee[et]) {
            en_enumerable = true;
          }
        } else {
          delete ee[et];
        }
      } catch (Z) {}
      if (en_enumerable) {
        ee[et] = er;
      } else {
        Q.f(ee, et, {
          value: er,
          enumerable: false,
          configurable: !en.nonConfigurable,
          writable: !en.nonWritable,
        });
      }
    }
    return ee;
  });
}
var n6;
var n3;
var n8;
var n5;
var n7;
var n9;
var ie;
var it;
var ir;
var ii;
var ia;
var io;
var is;
let iu;
let ic;
const ih = {};
function il() {
  if (ib) {
    return ip;
  }
  ib = 1;
  const Z = (() => {
    if (ic) {
      return iu;
    }
    ic = 1;
    const Math_ceil = Math.ceil;
    const Math_floor = Math.floor;
    return (iu =
      Math.trunc ||
      function (X) {
        const $ = +X;
        return ($ > 0 ? Math_floor : Math_ceil)($);
      });
  })();
  return (ip = function (Q) {
    const X = +Q;
    if (X != X || X === 0) {
      return 0;
    }
    return Z(X);
  });
}
function id() {
  if (im) {
    return iw;
  }
  im = 1;
  const Z = (() => {
    if (i_) {
      return iv;
    }
    i_ = 1;
    const Z = il();
    const Math_min = Math.min;
    return (iv = function (X) {
      if (X > 0) {
        return Math_min(Z(X), 9007199254740991);
      }
      return 0;
    });
  })();
  return (iw = function (Q) {
    return Z(Q.length);
  });
}
var ip;
var ib;
let ig;
let iy;
var iv;
var i_;
var iw;
var im;
let ix;
let iS;
let iE;
let ik;
let iT;
let iR;
let iA;
let ij;
const iC = {};
function iI() {
  if (es) {
    return t0;
  }
  es = 1;
  const Z = (() => {
    if (eo) {
      return ea;
    }
    eo = 1;
    const Z = t1();
    const Q = nb().f;
    const X = nW();
    const es = n4();
    const ef = na();
    const eu = (() => {
      if (er) {
        return et;
      }
      er = 1;
      const Z = nu();
      const Q = (() => {
        if (ee) {
          return $;
        }
        ee = 1;
        const Z = rg();
        const Q = rf();
        const X = (() => {
          if (iA) {
            return ih;
          }
          iA = 1;
          const Z = (() => {
            if (ik) {
              return iE;
            }
            ik = 1;
            const Z = rf();
            const Q = nu();
            const X = rl();
            const indexOf = (() => {
              if (iS) {
                return ix;
              }
              iS = 1;
              const Z = rl();
              const Q = (() => {
                if (iy) {
                  return ig;
                }
                iy = 1;
                const Z = il();
                const Math_max = Math.max;
                const Math_min = Math.min;
                return (ig = function ($, ee) {
                  const et = Z($);
                  if (et < 0) {
                    return Math_max(et + ee, 0);
                  }
                  return Math_min(et, ee);
                });
              })();
              const X = id();
              const $ = ($) =>
                function (ee, et, er) {
                  let en;
                  const ei = Z(ee);
                  const ea = X(ei);
                  let eo = Q(er, ea);
                  if ($ && et != et) {
                    while (ea > eo) {
                      if ((en = ei[eo++]) != en) {
                        return true;
                      }
                    }
                  } else {
                    for (; ea > eo; eo++) {
                      if (($ || eo in ei) && ei[eo] === et) {
                        return $ || eo || 0;
                      }
                    }
                  }
                  return !$ && -1;
                };
              return (ix = {
                includes: $(true),
                indexOf: $(false),
              });
            })().indexOf;
            const ee = n0();
            const et = Z([].push);
            return (iE = function (Z, er) {
              let en;
              const ei = X(Z);
              let ea = 0;
              const eo = [];
              for (en in ei) {
                if (!Q(ee, en) && Q(ei, en)) {
                  et(eo, en);
                }
              }
              while (er.length > ea) {
                if (Q(ei, (en = er[ea++]))) {
                  if (!~indexOf(eo, en)) {
                    et(eo, en);
                  }
                }
              }
              return eo;
            });
          })();
          const Q = (iR ||
            ((iR = 1),
            (iT = [
              "constructor",
              "hasOwnProperty",
              "isPrototypeOf",
              "propertyIsEnumerable",
              "toLocaleString",
              "toString",
              "valueOf",
            ])),
          iT).concat("length", "prototype");
          ih.f =
            Object.getOwnPropertyNames ||
            function (X) {
              return Z(X, Q);
            };
          return ih;
        })();
        if (!ij) {
          ij = 1;
          iC.f = Object.getOwnPropertySymbols;
        }
        const et = iC;
        const er = nF();
        const en = Q([].concat);
        return ($ =
          Z("Reflect", "ownKeys") ||
          function (Z) {
            const Q = X.f(er(Z));
            const $ = et.f;
            if ($) {
              return en(Q, $(Z));
            }
            return Q;
          });
      })();
      const X = nb();
      const en = nK();
      return (et = function ($, ee, et) {
        for (
          let er = Q(ee), ei = en.f, ea = X.f, eo = 0;
          eo < er.length;
          eo++
        ) {
          const es = er[eo];
          if (!(Z($, es) || (et && Z(et, es)))) {
            ei($, es, ea(ee, es));
          }
        }
      });
    })();
    const ec = (() => {
      if (ei) {
        return en;
      }
      ei = 1;
      const Z = t3();
      const Q = rp();
      const X = /#|\.prototype\./;
      const $ = function (X, $) {
        const en = et[ee(X)];
        return en === ea || (en !== er && (Q($) ? Z($) : !!$));
      };
      var ee = ($.normalize = function (Z) {
        return String(Z).replace(X, ".").toLowerCase();
      });
      var et = ($.data = {});
      var er = ($.NATIVE = "N");
      var ea = ($.POLYFILL = "P");
      return (en = $);
    })();
    return (ea = function ($, ee) {
      let et;
      let er;
      let en;
      let ei;
      let ea;
      const $_target = $.target;
      const $_global = $.global;
      const $_stat = $.stat;
      if (
        (et = $_global
          ? Z
          : $_stat
            ? Z[$_target] || ef($_target, {})
            : (Z[$_target] || {}).prototype)
      ) {
        for (er in ee) {
          ei = ee[er];
          en = $.dontCallGetSet ? (ea = Q(et, er)) && ea.value : et[er];
          if (
            !ec(
              $_global ? er : $_target + ($_stat ? "." : "#") + er,
              $.forced,
            ) &&
            en !== undefined
          ) {
            if (typeof ei == typeof en) {
              continue;
            }
            eu(ei, en);
          }
          if ($.sham || (en && en.sham)) {
            X(ei, "sham", true);
          }
          es(et, er, ei, $);
        }
      }
    });
  })();
  const globalThis = t1();
  Z(
    {
      global: true,
      forced: globalThis.globalThis !== globalThis,
    },
    {
      globalThis,
    },
  );
  return t0;
}
function iM() {
  if (eT) {
    return ek;
  }
  eT = 1;
  const Z = (() => {
    if (eE) {
      return eS;
    }
    eE = 1;
    const Z = nh()("toStringTag");
    const Q = {};
    Q[Z] = "z";
    return (eS = String(Q) === "[object z]");
  })();
  const Q = rp();
  const X = ru();
  const $ = nh()("toStringTag");
  const ee = Object;
  const et =
    X(
      (function () {
        return arguments;
      })(),
    ) === "Arguments";
  const er = (Z, Q) => {
    try {
      return Z[Q];
    } catch (Z) {}
  };
  return (ek = Z
    ? X
    : function (Z) {
        let en;
        let ei;
        let ea;
        if (Z === undefined) {
          return "Undefined";
        }
        if (Z === null) {
          return "Null";
        }
        if (typeof (ei = er((en = ee(Z)), $)) === "string") {
          return ei;
        }
        if (et) {
          return X(en);
        }
        if ((ea = X(en)) === "Object" && Q(en.callee)) {
          return "Arguments";
        }
        return ea;
      });
}
function iO() {
  if (eq) {
    return eU;
  }
  eq = 1;
  let Z;
  let Q;
  let X;
  if (!ex) {
    ex = 1;
    em = typeof ArrayBuffer !== "undefined" && typeof DataView !== "undefined";
  }
  const $ = em;
  const ee = t8();
  const et = t1();
  const er = rp();
  const en = rb();
  const ei = nu();
  const ea = iM();
  const eo = rm();
  const es = nW();
  const ef = n4();
  const eu = (() => {
    if (eA) {
      return eR;
    }
    eA = 1;
    const Z = n2();
    const Q = nK();
    return (eR = function (X, $, ee) {
      if (ee.get) {
        Z(ee.get, $, {
          getter: true,
        });
      }
      if (ee.set) {
        Z(ee.set, $, {
          setter: true,
        });
      }
      return Q.f(X, $, ee);
    });
  })();
  const ec = ry();
  const eh = (() => {
    if (eM) {
      return eI;
    }
    eM = 1;
    const Z = nu();
    const Q = rp();
    const X = nf();
    const $ = n$();
    const ee = eC
      ? ej
      : ((eC = 1),
        (ej = !t3()(function () {
          function Z() {}
          Z.prototype.constructor = null;
          return Object.getPrototypeOf(new Z()) !== Z.prototype;
        })));
    const et = $("IE_PROTO");
    const er = Object;
    const er_prototype = er.prototype;
    return (eI = ee
      ? er.getPrototypeOf
      : function ($) {
          const ee = X($);
          if (Z(ee, et)) {
            return ee[et];
          }
          const ee_constructor = ee.constructor;
          if (Q(ee_constructor) && ee instanceof ee_constructor) {
            return ee_constructor.prototype;
          }
          if (ee instanceof er) {
            return er_prototype;
          }
          return null;
        });
  })();
  const el = (() => {
    if (eD) {
      return eN;
    }
    eD = 1;
    const Z = (() => {
      if (eP) {
        return eO;
      }
      eP = 1;
      const Z = rf();
      const Q = rx();
      return (eO = function (X, $, ee) {
        try {
          return Z(Q(Object.getOwnPropertyDescriptor(X, $)[ee]));
        } catch (Z) {}
      });
    })();
    const Q = nF();
    const X = (() => {
      if (eL) {
        return eB;
      }
      eL = 1;
      const Z = rp();
      const Q = String;
      const X = TypeError;
      return (eB = function ($) {
        if (typeof $ === "object" || Z($)) {
          return $;
        }
        throw X("Can't set " + Q($) + " as a prototype");
      });
    })();
    return (eN =
      Object.setPrototypeOf ||
      ("__proto__" in {}
        ? (() => {
            let $;
            let ee = false;
            const et = {};
            try {
              ($ = Z(Object.prototype, "__proto__", "set"))(et, []);
              ee = et instanceof Array;
            } catch (Z) {}
            return function (Z, et) {
              Q(Z);
              X(et);
              if (ee) {
                $(Z, et);
              } else {
                Z.__proto__ = et;
              }
              return Z;
            };
          })()
        : undefined));
  })();
  const ed = nh();
  const ep = nc();
  const eb = n1();
  const eb_enforce = eb.enforce;
  const eb_get = eb.get;
  const et_Int8Array = et.Int8Array;
  const e_ = et_Int8Array && et_Int8Array.prototype;
  const et_Uint8ClampedArray = et.Uint8ClampedArray;
  const eS = et_Uint8ClampedArray && et_Uint8ClampedArray.prototype;
  let TypedArray = et_Int8Array && eh(et_Int8Array);
  let TypedArrayPrototype = e_ && eh(e_);
  const Object_prototype = Object.prototype;
  const et_TypeError = et.TypeError;
  const eK = ed("toStringTag");
  const eW = ep("TYPED_ARRAY_TAG");
  const eH = "TypedArrayConstructor";
  let NATIVE_ARRAY_BUFFER_VIEWS = $ && !!el && ea(et.opera) !== "Opera";
  let ez = false;
  const eG = {
    Int8Array: 1,
    Uint8Array: 1,
    Uint8ClampedArray: 1,
    Int16Array: 2,
    Uint16Array: 2,
    Int32Array: 4,
    Uint32Array: 4,
    Float32Array: 4,
    Float64Array: 8,
  };
  const eY = {
    BigInt64Array: 8,
    BigUint64Array: 8,
  };
  const getTypedArrayConstructor = function (Z) {
    const Q = eh(Z);
    if (en(Q)) {
      const X = eb_get(Q);
      if (X && ei(X, eH)) {
        return X[eH];
      }
      return getTypedArrayConstructor(Q);
    }
  };
  const isTypedArray = function (Z) {
    if (!en(Z)) {
      return false;
    }
    const Q = ea(Z);
    return ei(eG, Q) || ei(eY, Q);
  };
  for (Z in eG) {
    if ((X = (Q = et[Z]) && Q.prototype)) {
      eb_enforce(X)[eH] = Q;
    } else {
      NATIVE_ARRAY_BUFFER_VIEWS = false;
    }
  }
  for (Z in eY) {
    if ((X = (Q = et[Z]) && Q.prototype)) {
      eb_enforce(X)[eH] = Q;
    }
  }
  if (
    (!NATIVE_ARRAY_BUFFER_VIEWS ||
      !er(TypedArray) ||
      TypedArray === Function.prototype) &&
    ((TypedArray = function () {
      throw et_TypeError("Incorrect invocation");
    }),
    NATIVE_ARRAY_BUFFER_VIEWS)
  ) {
    for (Z in eG) {
      if (et[Z]) {
        el(et[Z], TypedArray);
      }
    }
  }
  if (
    (!NATIVE_ARRAY_BUFFER_VIEWS ||
      !TypedArrayPrototype ||
      TypedArrayPrototype === Object_prototype) &&
    ((TypedArrayPrototype = TypedArray.prototype), NATIVE_ARRAY_BUFFER_VIEWS)
  ) {
    for (Z in eG) {
      if (et[Z]) {
        el(et[Z].prototype, TypedArrayPrototype);
      }
    }
  }
  if (NATIVE_ARRAY_BUFFER_VIEWS && eh(eS) !== TypedArrayPrototype) {
    el(eS, TypedArrayPrototype);
  }
  if (ee && !ei(TypedArrayPrototype, eK)) {
    ez = true;
    eu(TypedArrayPrototype, eK, {
      configurable: true,
      get: function () {
        if (en(this)) {
          return this[eW];
        }
      },
    });
    for (Z in eG) {
      if (et[Z]) {
        es(et[Z], eW, Z);
      }
    }
  }
  return (eU = {
    NATIVE_ARRAY_BUFFER_VIEWS,
    TYPED_ARRAY_TAG: ez && eW,
    aTypedArray: function (Z) {
      if (isTypedArray(Z)) {
        return Z;
      }
      throw et_TypeError("Target is not a typed array");
    },
    aTypedArrayConstructor: function (Z) {
      if (er(Z) && (!el || ec(TypedArray, Z))) {
        return Z;
      }
      throw et_TypeError(eo(Z) + " is not a typed array constructor");
    },
    exportTypedArrayMethod: function (Z, Q, X, $) {
      if (ee) {
        if (X) {
          for (const er in eG) {
            const en = et[er];
            if (en && ei(en.prototype, Z)) {
              try {
                delete en.prototype[Z];
              } catch (X) {
                try {
                  en.prototype[Z] = Q;
                } catch (Z) {}
              }
            }
          }
        }
        if (!TypedArrayPrototype[Z] || X) {
          ef(
            TypedArrayPrototype,
            Z,
            X ? Q : (NATIVE_ARRAY_BUFFER_VIEWS && e_[Z]) || Q,
            $,
          );
        }
      }
    },
    exportTypedArrayStaticMethod: function (Z, Q, X) {
      let $;
      let er;
      if (ee) {
        if (el) {
          if (X) {
            for ($ in eG) {
              if ((er = et[$]) && ei(er, Z)) {
                try {
                  delete er[Z];
                } catch (Z) {}
              }
            }
          }
          if (TypedArray[Z] && !X) {
            return;
          }
          try {
            return ef(
              TypedArray,
              Z,
              X ? Q : (NATIVE_ARRAY_BUFFER_VIEWS && TypedArray[Z]) || Q,
            );
          } catch (Z) {}
        }
        for ($ in eG) {
          if ((er = et[$]) && (!er[Z] || X)) {
            ef(er, Z, Q);
          }
        }
      }
    },
    getTypedArrayConstructor,
    isView: function (Z) {
      if (!en(Z)) {
        return false;
      }
      const Q = ea(Z);
      return Q === "DataView" || ei(eG, Q) || ei(eY, Q);
    },
    isTypedArray,
    TypedArray,
    TypedArrayPrototype,
  });
}
function iP() {
  if (!eX) {
    eX = 1;
    eQ = {};
  }
  return eQ;
}
function iB() {
  if (e0) {
    return e$;
  }
  e0 = 1;
  const Z = iM();
  const Q = rS();
  const X = rc();
  const $ = iP();
  const ee = nh()("iterator");
  return (e$ = function (et) {
    if (!X(et)) {
      return Q(et, ee) || Q(et, "@@iterator") || $[Z(et)];
    }
  });
}
if (!ey) {
  ey = 1;
  if (!eg) {
    eg = 1;
    if (!ef) {
      ef = 1;
      iI();
    }
    eb = ep
      ? ed
      : ((ep = 1),
        (ed = el
          ? eh
          : ((el = 1), ec || ((ec = 1), iI(), (eu = t1())), (eh = eu))));
  }
}
if (!tu) {
  tu = 1;
  if (!tf) {
    tf = 1;
    ts = to
      ? ta
      : ((to = 1),
        (ta = ti
          ? tn
          : ((ti = 1),
            tr ||
              ((tr = 1),
              (() => {
                if (!tt) {
                  tt = 1;
                  const Z = (() => {
                    if (eK) {
                      return eF;
                    }
                    eK = 1;
                    const Z = t1();
                    const Q = t3();
                    const X = (() => {
                      if (e_) {
                        return ev;
                      }
                      e_ = 1;
                      const Z = nh()("iterator");
                      let Q = false;
                      try {
                        let X = 0;
                        const $ = {
                          next: function () {
                            return {
                              done: !!X++,
                            };
                          },
                          return: function () {
                            Q = true;
                          },
                        };
                        $[Z] = function () {
                          return this;
                        };
                        Array.from($, function () {
                          throw 2;
                        });
                      } catch (Z) {}
                      return (ev = function (X, $) {
                        try {
                          if (!$ && !Q) {
                            return false;
                          }
                        } catch (Z) {
                          return false;
                        }
                        let ee = false;
                        try {
                          const et = {};
                          et[Z] = function () {
                            return {
                              next: function () {
                                return {
                                  done: (ee = true),
                                };
                              },
                            };
                          };
                          X(et);
                        } catch (Z) {}
                        return ee;
                      });
                    })();
                    const NATIVE_ARRAY_BUFFER_VIEWS =
                      iO().NATIVE_ARRAY_BUFFER_VIEWS;
                    const Z_ArrayBuffer = Z.ArrayBuffer;
                    const Z_Int8Array = Z.Int8Array;
                    return (eF =
                      !NATIVE_ARRAY_BUFFER_VIEWS ||
                      !Q(function () {
                        Z_Int8Array(1);
                      }) ||
                      !Q(function () {
                        new Z_Int8Array(-1);
                      }) ||
                      !X(function (Z) {
                        new Z_Int8Array();
                        new Z_Int8Array(null);
                        new Z_Int8Array(1.5);
                        new Z_Int8Array(Z);
                      }, true) ||
                      Q(function () {
                        return (
                          new Z_Int8Array(new Z_ArrayBuffer(2), 1, undefined)
                            .length !== 1
                        );
                      }));
                  })();
                  iO().exportTypedArrayStaticMethod(
                    "from",
                    (() => {
                      if (te) {
                        return e9;
                      }
                      te = 1;
                      const Z = (() => {
                        if (ez) {
                          return eV;
                        }
                        ez = 1;
                        const Z = (() => {
                          if (eH) {
                            return eW;
                          }
                          eH = 1;
                          const Z = ru();
                          const Q = rf();
                          return (eW = function (X) {
                            if (Z(X) === "Function") {
                              return Q(X);
                            }
                          });
                        })();
                        const Q = rx();
                        const X = t5();
                        const $ = Z(Z.bind);
                        return (eV = function (Z, ee) {
                          Q(Z);
                          if (ee === undefined) {
                            return Z;
                          }
                          if (X) {
                            return $(Z, ee);
                          }
                          return function () {
                            return Z.apply(ee, arguments);
                          };
                        });
                      })();
                      const Q = t7();
                      const X = (() => {
                        if (eZ) {
                          return eJ;
                        }
                        eZ = 1;
                        const Z = (() => {
                          if (eY) {
                            return eG;
                          }
                          eY = 1;
                          const Z = rf();
                          const Q = t3();
                          const X = rp();
                          const $ = iM();
                          const ee = rg();
                          const et = nX();
                          const er = function () {};
                          const en = [];
                          const ei = ee("Reflect", "construct");
                          const ea = /^\s*(?:class|function)\b/;
                          const eo = Z(ea.exec);
                          const es = !ea.exec(er);
                          const ef = function (Z) {
                            if (!X(Z)) {
                              return false;
                            }
                            try {
                              ei(er, en, Z);
                              return true;
                            } catch (Z) {
                              return false;
                            }
                          };
                          const eu = function (Z) {
                            if (!X(Z)) {
                              return false;
                            }
                            switch ($(Z)) {
                              case "AsyncFunction":
                              case "GeneratorFunction":
                              case "AsyncGeneratorFunction":
                                return false;
                            }
                            try {
                              return es || !!eo(ea, et(Z));
                            } catch (Z) {
                              return true;
                            }
                          };
                          eu.sham = true;
                          return (eG =
                            !ei ||
                            Q(function () {
                              let Z;
                              return (
                                ef(ef.call) ||
                                !ef(Object) ||
                                !ef(function () {
                                  Z = true;
                                }) ||
                                Z
                              );
                            })
                              ? eu
                              : ef);
                        })();
                        const Q = rm();
                        const X = TypeError;
                        return (eJ = function ($) {
                          if (Z($)) {
                            return $;
                          }
                          throw X(Q($) + " is not a constructor");
                        });
                      })();
                      const $ = nf();
                      const ee = id();
                      const et = (() => {
                        if (e2) {
                          return e1;
                        }
                        e2 = 1;
                        const Z = t7();
                        const Q = rx();
                        const X = nF();
                        const $ = rm();
                        const ee = iB();
                        const et = TypeError;
                        return (e1 = function (er, en) {
                          const ei = arguments.length < 2 ? ee(er) : en;
                          if (Q(ei)) {
                            return X(Z(ei, er));
                          }
                          throw et($(er) + " is not iterable");
                        });
                      })();
                      const er = iB();
                      const en = (() => {
                        if (e6) {
                          return e4;
                        }
                        e6 = 1;
                        const Z = nh();
                        const Q = iP();
                        const X = Z("iterator");
                        const Array_prototype = Array.prototype;
                        return (e4 = function (Z) {
                          return (
                            Z !== undefined &&
                            (Q.Array === Z || Array_prototype[X] === Z)
                          );
                        });
                      })();
                      const ei = (() => {
                        if (e8) {
                          return e3;
                        }
                        e8 = 1;
                        const Z = iM();
                        return (e3 = function (Q) {
                          const X = Z(Q);
                          return (
                            X === "BigInt64Array" || X === "BigUint64Array"
                          );
                        });
                      })();
                      const aTypedArrayConstructor =
                        iO().aTypedArrayConstructor;
                      const eo = (() => {
                        if (e7) {
                          return e5;
                        }
                        e7 = 1;
                        const Z = nl();
                        const Q = TypeError;
                        return (e5 = function (X) {
                          const $ = Z(X, "number");
                          if (typeof $ === "number") {
                            throw Q("Can't convert number to bigint");
                          }
                          return BigInt($);
                        });
                      })();
                      return (e9 = function (es) {
                        let ef;
                        let eu;
                        let ec;
                        let eh;
                        let el;
                        let ed;
                        let ep;
                        let eb;
                        const eg = X(this);
                        let ey = $(es);
                        const arguments_length = arguments.length;
                        let e_ =
                          arguments_length > 1 ? arguments[1] : undefined;
                        const ew = e_ !== undefined;
                        const em = er(ey);
                        if (em && !en(em)) {
                          eb = (ep = et(ey, em)).next;
                          for (ey = []; !(ed = Q(eb, ep)).done;) {
                            ey.push(ed.value);
                          }
                        }
                        if (ew && arguments_length > 2) {
                          e_ = Z(e_, arguments[2]);
                        }
                        eu = ee(ey);
                        eh = ei((ec = new (aTypedArrayConstructor(eg))(eu)));
                        for (ef = 0; eu > ef; ef++) {
                          el = ew ? e_(ey[ef], ef) : ey[ef];
                          ec[ef] = eh ? eo(el) : +el;
                        }
                        return ec;
                      });
                    })(),
                    Z,
                  );
                }
              })()),
            (tn = {}))));
  }
}
const iL = [];
const iN = [];
const iD = new Map();
const iU = new Map();
function iq(Z, Q, X, $) {
  if (!iL.length) {
    ((Z) => {
      const Q = ((Z) => {
        const Q = atob(Z);
        let X = 0;
        for (let $ = 4; $ < 8; ++$) {
          X += Q.charCodeAt($);
        }
        return {
          d: tY(
            Uint8Array.from(Q.slice(8), iK, X % 256),
            {
              i: 2,
            },
            undefined,
            undefined,
          ),
          i: 0,
        };
      })(Z);
      iL.length = 0;
      iN.length = 0;
      iD.clear();
      for (var X = iF(Q), $ = 0; $ < X; ++$) {
        iL.push(
          ((Z) => {
            let Q = -1;
            const X = [];
            while (true) {
              const $ = Z.d[Z.i++];
              if ($ >= 128 && $ < 192) {
                Q = (Q << 6) + (63 & $);
              } else {
                if (Q >= 0) {
                  X.push(Q);
                }
                if ($ < 128) {
                  Q = $;
                } else if ($ < 224) {
                  Q = 31 & $;
                } else if ($ < 240) {
                  Q = 15 & $;
                } else {
                  if (!($ < 248)) {
                    break;
                  }
                  Q = 7 & $;
                }
              }
            }
            return String.fromCodePoint.apply(null, X);
          })(Q),
        );
      }
      const ee = iF(Q);
      for ($ = 0; $ < ee; ++$) {
        const et = iF(Q);
        const er = !!iF(Q);
        const en = [];
        for (let ei = iF(Q), ea = 0; ea < ei; ++ea) {
          en.push([iF(Q), iF(Q), iF(Q), iF(Q)]);
        }
        const eo = [];
        for (let es = iF(Q), ef = 0; ef < es; ++ef) {
          eo.push(iF(Q));
        }
        iN.push([eo, et, er, en]);
      }
    })(
      "UEsCALabDb2OdkRf7WhR+l7eRTNtP67i5jPqchocEeDLLHTTRDCD69Fv26RixeLEUWXCTVcyAvaNqQdbIefHG1XTjr29R1Cnpu9nYkNUlf2q/R3fFvkAy6b9HgaoW1xjngSwaOS7m4kYXLIxISpkj8hsb/8JuCh/BwvStsSSUS4ExoA6PSCFZQK1B79DkPij4wcMmVIllj7lxv70xNBaMiwX5WCwnSKHglumr+qhV7VGdhdHG3WAmz2Whc7cmflJ/Nvp8EjcY7FY7aTxCs9Ni0amzq8CwnoRzIy+6U9hAPxRlfmkQjlMgQXNY2oicrPXt7kN8HSzQRSq3UaK/M3zEyDWXh9yl55NNPnoHu1P6dWcomTkjXG2nEj/h7y9+bZ72UFYGL2UC6zsL4bJBNZlEuOZMu+ENlNUKJa6Cbyw8rIcokoYKYMeBew9FIwPAtz/CvcVUzE6k3+lYu6pPM1jB7Y8CXECUZQHfa+/7qSQQuEZSXNhwUqEu2rmilzwd/TiilJSx5we4fpseSw5h40988KJYZeV9K9LF3lzVWgGq3lRXyy2Xq9x2IIUUORHf4riLLetU7al9KXJlHRzyUB5lLv9tjygJo/29asvRcymrRWGwJcErY0Pbw6YGkCgSJhpW8c9SH39iHLqaPpa+sewKqJcg969/Sl8mx4Lua5edrZKuN0scYp/oUkIZ0cDa2xetjVEw9EgaQnjFB/RTRsXlgh+cBL38Kse/ISDryrG2ruxLxzBGMiJE/livg8SI2/M6sop5vxo0GwJZHOhlfbYEzkB2DA/83SGG63YJhxmZ3HHsXyF9xHDFuZ7TIaCS+ggLj+00HMriirxzbCtcq6pTJRl5LVvhdF+huHymg89z6x0mo6i6r+pBM5PuGFXK+bGoAftgw64gFwU+jtFX1fn+ot7osTssqV0v2bVtR8dn+R0+jPZJR96APvtigpYgZtSp9pDkjHLotTQtspXbUc+eONQmDybk0VlSf3JawDcPm77sdN/GeofNq98kSPSzKZIkmgd1J2L0SH7fhEPJyusP1yhzSoNA1VeTiAiybO4ftKlXuTQCcTjNOgoENKwHjQHtawQnm4OAiSE4X5XHLPR0auZhek1o/6Xvpmw1i7evCQsAAsYyHNk/NAv3YWTE2SX1H3ys9dsUEVX/DMiCAWZrbpzpCe4qwA+Ui4BVCXLMFRoebNKTkxNPx7R6pWQGdeWZcBQxPZH8Vq5+sUiZHyV3d1uqTDGUw8/G6rIKL7CrnFP4nsxBo3x7vMi2zzkO5542hy6+s3rW9HbyX9Vt1z9a2V7wOJDJPK3VM8mTgLQKtm61gZoAuZYfKWmu2n191KOeU1heFS1gIu1mX4QzXnr+KTzCQRpNKdel66DoUV4yN0ZHOzP38ooycogAybD257wgfGcZQUIrUI3wfRAo50CwLJWFkXxbsf8Qt4SmAQvd2+zKC9mtYTUMJC2kHzdFSVE21Kzhw+v579U",
    );
  }
  return (function Z(Q, X, $, ee) {
    let et;
    let er;
    let en;
    let ei;
    let ea;
    let eo;
    let es;
    let ef;
    let eu = -1;
    const ec = [];
    const eh = [];
    el(Q, X, $, ee);
    do {
      try {
        (() => {
          while (true) {
            const Q = et[eo++];
            if (Q < 38) {
              if (Q < 19) {
                if (Q < 9) {
                  if (Q < 4) {
                    if (Q < 2) {
                      if (Q === 0) {
                        var X = ec[eu--];
                        ec[eu] /= X;
                      } else {
                        var $ = ec[eu--];
                        ec[eu] = ec[eu] < $;
                      }
                    } else if (Q === 2) {
                      for (var ee = et[eo++], ed = [undefined]; ee > 0;) {
                        ed[ee--] = ec[eu--];
                      }
                      const ep = ec[eu--];
                      var eb = new (Function.bind.apply(ep, ed))();
                      ec[++eu] = eb;
                    } else {
                      var eg = et[eo++];
                      const ey = iL[eg];
                      if (!globalThis[ey]) {
                        globalThis[ey] = undefined;
                      }
                    }
                  } else if (Q < 6) {
                    if (Q === 4) {
                      X = ec[eu--];
                      ec[eu] *= X;
                    } else {
                      ec[++eu] = true;
                    }
                  } else if (Q < 7) {
                    X = ec[eu--];
                    ec[eu] -= X;
                  } else if (Q === 7) {
                    ec[eu] = -ec[eu];
                  } else {
                    const ev = iL[(eg = et[eo++])];
                    X = typeof globalThis[ev];
                    ec[++eu] = X;
                  }
                } else if (Q < 14) {
                  if (Q < 11) {
                    if (Q === 9) {
                      $ = ec[eu--];
                      ec[eu] = ec[eu] | $;
                    } else {
                      eg = et[eo++];
                      const e_ = ec[eu--];
                      const ew = ec[eu--];
                      var em = ei[eg];
                      var ex;
                      do {
                        ex = em[0].shift();
                      } while (ex !== undefined && !(ex in em[1]));
                      if (ex !== undefined) {
                        ew[e_] = ex;
                        ec[++eu] = true;
                      } else {
                        ec[++eu] = false;
                      }
                    }
                  } else {
                    if (Q < 12) {
                      ec[++eu] = ea;
                    } else if (Q === 12) {
                      ec[eu] = typeof ec[eu];
                    } else {
                      $ = ec[eu--];
                      ec[eu] = ec[eu] ^ $;
                    }
                  }
                } else if (Q < 16) {
                  if (Q === 14) {
                    $ = ec[eu--];
                    ec[eu] = ec[eu] <= $;
                  } else {
                    ec[++eu] = undefined;
                  }
                } else if (Q < 17) {
                  var eS = et[eo++];
                  eo += eS;
                } else {
                  ec[eu] = Q === 17 ? undefined : +ec[eu];
                }
              } else if (Q < 28) {
                if (Q < 23) {
                  if (Q < 21) {
                    if (Q === 19) {
                      const eE = ec[eu--];
                      X = ++(eq = ec[eu--])[eE];
                      ec[++eu] = X;
                    } else {
                      eS = et[eo++];
                      if (ec[eu]) {
                        --eu;
                      } else {
                        eo += eS;
                      }
                    }
                  } else if (Q === 21) {
                    const ek = iL[(eg = et[eo++])];
                    X = ((Z, Q) => {
                      const X = Object.create(null);
                      Object.defineProperty(X, Z, {
                        get: function () {
                          if (globalThis[Z]) {
                            return globalThis[Z];
                          }
                          throw ReferenceError(Z + " is not defined");
                        },
                        set: function (X) {
                          if (Q && !globalThis[Z]) {
                            throw ReferenceError(Z + " is not defined");
                          }
                          globalThis[Z] = X;
                        },
                      });
                      return X;
                    })(ek, er);
                    ec[++eu] = X;
                    ec[++eu] = ek;
                  } else {
                    $ = ec[eu--];
                    ec[eu] = ec[eu] >> $;
                  }
                } else if (Q < 25) {
                  if (Q === 23) {
                    ec[++eu] = {};
                  } else {
                    $ = ec[eu--];
                    ec[eu] = ec[eu] >>> $;
                  }
                } else if (Q < 26) {
                  $ = ec[eu--];
                  ec[eu] = ec[eu] === $;
                } else {
                  if (Q === 26) {
                    eS = et[eo++];
                    es = 1;
                    return void (ef = eo + eS);
                  }
                  $ = ec[eu--];
                  ec[eu] = ec[eu] >= $;
                }
              } else if (Q < 33) {
                if (Q < 30) {
                  if (Q === 28) {
                    var eT = et[eo++];
                    eg = et[eo++];
                    for (eS = ei; eT > 0;) {
                      eS = eS[0];
                      --eT;
                    }
                    eS[eg] = ec[eu--];
                  } else {
                    eg = et[eo++];
                    ec[eu] = ec[eu][iL[eg]];
                  }
                } else if (Q < 31) {
                  if (es !== 0) {
                    return;
                  }
                } else if (Q === 31) {
                  eg = et[eo++];
                  const get = ec[eu--];
                  Object.defineProperty(ec[eu], iL[eg], {
                    get,
                    enumerable: true,
                    configurable: true,
                  });
                } else {
                  eT = et[eo++];
                  eg = et[eo++];
                  for (eS = ei; eT > 0;) {
                    eS = eS[0];
                    --eT;
                  }
                  ec[++eu] = eS;
                  ec[++eu] = eg;
                }
              } else if (Q < 35) {
                if (Q === 33) {
                  es = 2;
                  return void (ef = ec[eu--]);
                }
                ec[eu] = !ec[eu];
              } else if (Q < 36) {
                ec[++eu] = 0 / 0;
              } else {
                if (Q !== 36) {
                  es = 3;
                  return void (ef = ec[eu--]);
                }
                const eA = ec[eu--];
                X = delete (eq = ec[eu--])[eA];
                ec[++eu] = X;
              }
            } else if (Q < 57) {
              if (Q < 47) {
                if (Q < 42) {
                  if (Q < 40) {
                    if (Q === 38) {
                      const ej = ec[eu--];
                      ec[eu] = ec[eu][ej];
                    } else {
                      X = ec[eu--];
                      ec[eu] %= X;
                    }
                  } else if (Q === 40) {
                    const eC = ec[eu--];
                    X = (eq = ec[eu--])[eC]++;
                    ec[++eu] = X;
                  } else {
                    $ = ec[eu--];
                    ec[eu] = ec[eu] > $;
                  }
                } else {
                  if (Q < 44) {
                    if (Q === 42) {
                      eg = et[eo++];
                      X = ec[eu--];
                      Object.defineProperty(ec[eu], iL[eg], {
                        value: X,
                        writable: true,
                        configurable: true,
                        enumerable: true,
                      });
                    } else {
                      X = ec[eu--];
                      ec[eu] += X;
                    }
                  } else if (Q < 45) {
                    ec[eu] = ~ec[eu];
                  } else if (Q === 45) {
                    $ = ec[eu--];
                    ec[eu] = ec[eu] & $;
                  } else {
                    ec[++eu] = null;
                  }
                }
              } else if (Q < 52) {
                if (Q < 49) {
                  if (Q === 47) {
                    const eI = iL[(eg = et[eo++])];
                    if (!globalThis[eI]) {
                      es = 3;
                      return void (ef = ReferenceError(eI + " is not defined"));
                    }
                    X = globalThis[eI];
                    ec[++eu] = X;
                  } else {
                    eg = et[eo++];
                    ec[++eu] = iL[eg];
                  }
                } else {
                  if (Q < 50) {
                    eS = et[eo++];
                    if (ec[eu]) {
                      eo += eS;
                    } else {
                      --eu;
                    }
                  } else if (Q === 50) {
                    $ = ec[eu--];
                    ec[eu] = ec[eu] != $;
                  } else {
                    ec[++eu] = Infinity;
                  }
                }
              } else if (Q < 54) {
                if (Q === 52) {
                  eS = et[eo++];
                  if (ec[eu--]) {
                    eo += eS;
                  }
                } else {
                  ee = et[eo++];
                  eu -= ee;
                  const eM = ec.slice(eu + 1, eu + ee + 1);
                  const eO = ec[eu--];
                  const eP = ec[eu--];
                  if (typeof eO !== "function") {
                    es = 3;
                    return void (ef = TypeError(
                      `${typeof eO} is not a function`,
                    ));
                  }
                  const eB = iD.get(eO);
                  if (eB) {
                    eh.push([et, er, en, ei, ea, eo, es, ef]);
                    el(eB[0], eP, eM, eB[1]);
                  } else {
                    eb = eO.apply(eP, eM);
                    ec[++eu] = eb;
                  }
                }
              } else if (Q < 55) {
                ec[++eu] = false;
              } else if (Q === 55) {
                const eL = ec[eu--];
                eq = ec[eu--];
                eq[eL] = ec[eu];
              } else {
                X = ((Q, X) => {
                  const $ = iN[Q];
                  if (iU.has(Q)) {
                    iD.delete(iU.get(Q));
                  }
                  const ee = function () {
                    return Z($, this, arguments, X);
                  };
                  iU.set(Q, ee);
                  iD.set(ee, [$, X]);
                  return ee;
                })(et[eo++], ei);
                ec[++eu] = X;
              }
            } else if (Q < 67) {
              if (Q < 62) {
                if (Q < 59) {
                  if (Q === 57) {
                    const eN = ec[eu--];
                    X = --(eq = ec[eu--])[eN];
                    ec[++eu] = X;
                  } else {
                    eg = et[eo++];
                    const set = ec[eu--];
                    Object.defineProperty(ec[eu], iL[eg], {
                      set,
                      enumerable: true,
                      configurable: true,
                    });
                  }
                } else {
                  if (Q < 60) {
                    $ = ec[eu--];
                    ec[eu] = ec[eu] == $;
                  } else if (Q === 60) {
                    ec[++eu] = et[eo++];
                  } else {
                    $ = ec[eu--];
                    ec[eu] = ec[eu] !== $;
                  }
                }
              } else if (Q < 64) {
                if (Q === 62) {
                  const eU = ec[eu--];
                  X = (eq = ec[eu--])[eU]--;
                  ec[++eu] = X;
                } else {
                  eg = et[eo++];
                  ec[++eu] = +iL[eg];
                }
              } else if (Q < 65) {
                eg = et[eo++];
                var eq = ec[eu--];
                em = [];
                for (var ex in eq) {
                  em.push(ex);
                }
                ei[eg] = [em, eq];
              } else if (Q === 65) {
                eq = ec[eu--];
                ec[eu] = ec[eu] in eq;
              } else {
                eg = et[eo++];
                X = ec[eu--];
                const eF = iL[eg];
                if (er && !globalThis[eF]) {
                  es = 3;
                  return void (ef = ReferenceError(eF + " is not defined"));
                }
                globalThis[eF] = X;
              }
            } else if (Q < 72) {
              if (Q < 69) {
                if (Q === 67) {
                  X = ec[eu--];
                  const eK = ec[eu--];
                  eq = ec[eu--];
                  eq[eK] = X;
                } else {
                  eq = ec[eu--];
                  ec[eu] = ec[eu] instanceof eq;
                }
              } else if (Q < 70) {
                const eW = et[eo++];
                ec[(eu = eu - eW + 1)] = ec.slice(eu, eu + eW);
              } else {
                if (Q === 70) {
                  eg = et[eo++];
                  X = ec[eu--];
                  eq = ec[eu--];
                  eq[iL[eg]] = X;
                } else {
                  X = ec[eu];
                  ec[++eu] = X;
                }
              }
            } else if (Q < 74) {
              if (Q === 72) {
                $ = ec[eu--];
                ec[eu] = ec[eu] << $;
              } else {
                eS = et[eo++];
                X = ec[eu--];
                if (ec[eu] === X) {
                  --eu;
                  eo += eS;
                }
              }
            } else if (Q < 75) {
              eT = et[eo++];
              eg = et[eo++];
              for (eS = ei; eT > 0;) {
                eS = eS[0];
                --eT;
              }
              X = eS[eg];
              ec[++eu] = X;
            } else {
              if (Q === 75) {
                --eu;
              } else {
                eS = et[eo++];
                if (!ec[eu--]) {
                  eo += eS;
                }
              }
            }
          }
        })();
      } catch (error) {
        es = 3;
        ef = error;
      }
    } while (
      (function Z() {
        let Q;
        let X;
        const $ = eo;
        const ee = en;
        if (es === 1) {
          for (var el = ee.length - 1; el >= 0; --el) {
            if ((Q = ee[el])[0] < $ && $ <= Q[3]) {
              if ($ <= Q[2] && Q[2] !== Q[3]) {
                eo = Q[2];
              } else {
                eo = ef;
                es = 0;
                ef = undefined;
              }
              return true;
            }
          }
          throw SyntaxError("Illegal statement");
        }
        if (es === 2) {
          for (el = ee.length - 1; el >= 0; --el) {
            if ((Q = ee[el])[0] < $ && $ <= Q[2] && Q[2] !== Q[3]) {
              eo = Q[2];
              return true;
            }
          }
          return (
            !!(X = eh.pop()) &&
            ((ec[++eu] = ef),
            (et = X[0]),
            (er = X[1]),
            (en = X[2]),
            (ei = X[3]),
            (ea = X[4]),
            (eo = X[5]),
            (es = X[6]),
            (ef = X[7]),
            true)
          );
        }
        if (es === 3) {
          for (el = ee.length - 1; el >= 0; --el) {
            if ((Q = ee[el])[0] < $) {
              if ($ <= Q[1] && Q[1] !== Q[2]) {
                eo = Q[1];
                ec[++eu] = ef;
                es = 0;
                ef = undefined;
                return true;
              }
              if ($ <= Q[2] && Q[2] !== Q[3]) {
                eo = Q[2];
                return true;
              }
            }
          }
          if ((X = eh.pop())) {
            et = X[0];
            er = X[1];
            en = X[2];
            ei = X[3];
            ea = X[4];
            eo = X[5];
            return Z();
          }
          throw ef;
        }
        return true;
      })()
    );
    return ef;
    function el(Z, Q, X, $) {
      const ee = Math.min(X.length, Z[1]);
      const eu = {};
      Object.defineProperty(eu, "length", {
        value: X.length,
        writable: true,
        enumerable: false,
        configurable: true,
      });
      et = Z[0];
      er = Z[2];
      en = Z[3];
      ei = [$, eu];
      for (var ec = 0; ec < ee; ++ec) {
        ei.push(X[ec]);
      }
      if (er) {
        ea = Q;
        for (ec = 0; ec < X.length; ++ec) {
          eu[ec] = X[ec];
        }
      } else {
        ea = Q == null ? globalThis : Object(Q);
        const eh = (Z) => {
          if (Z < ee) {
            Object.defineProperty(eu, Z, {
              get: function () {
                return ei[Z + 2];
              },
              set: function (Q) {
                ei[Z + 2] = Q;
              },
              enumerable: true,
              configurable: true,
            });
          } else {
            eu[Z] = X[Z];
          }
        };
        for (ec = 0; ec < X.length; ++ec) {
          eh(ec);
        }
      }
      eo = 0;
      es = 0;
      ef = undefined;
    }
  })(iN[Z], Q, X, $);
}
function iF(Z) {
  let Q = 0;
  let X = 0;
  while (true) {
    const $ = Z.d[Z.i++];
    Q |= (127 & $) << X;
    X += 7;
    if (!(128 & $)) {
      if (X < 32 && 64 & $) {
        return Q | (-1 << X);
      }
      return Q;
    }
  }
}
function iK(Z, Q) {
  return (Z.charCodeAt(0) ^ ((this + (this % 10) * Q) % 256)) >>> 0;
}
iq(18, undefined, [], {
  get 0() {
    return tc;
  },
  set 0(Z) {
    tc = Z;
  },
  get 1() {
    return th;
  },
  set 1(Z) {
    th = Z;
  },
  get 2() {
    return tl;
  },
  set 2(Z) {
    tl = Z;
  },
});
class iW {
  getEncryptedBuffer(Z) {
    return Buffer.from(Z, this._options.encoding.encrypted);
  }
  getEncryptedString(Z) {
    return Buffer.from(Z).toString(this._options.encoding.encrypted);
  }
  getDecryptedBuffer(Z) {
    return Buffer.from(Z, this._options.encoding.decrypted);
  }
  getDecryptedString(Z) {
    return Buffer.from(Z).toString(this._options.encoding.decrypted);
  }
  getKeyBuffer(Z) {
    return Buffer.from(Z, this._options.encoding.key);
  }
  getIVBuffer(Z) {
    return Buffer.from(Z, this._options.encoding.iv);
  }
  getDefaultIvBuffer(Z) {
    return this.getKeyBuffer(Z).slice(0, 16);
  }
  constructor(Z) {
    this._options = Z;
    this._algorithm = Z.algorithm;
    this._length = Z.length;
  }
}
class iH extends iW {
  encrypt2string(Z, Q, X) {
    return tx
      ._(function* () {
        let $;
        const ee = this.getDecryptedBuffer(Z);
        if (typeof Q === "string") {
          const et = this.getKeyBuffer(Q);
          $ = yield this.importKey(et, "encrypt");
        } else {
          $ = Q;
        }
        const er = typeof X === "string" ? this.getIVBuffer(X) : X;
        const en = yield this.encrypt(ee, $, er);
        return this.getEncryptedString(en);
      })
      .call(this);
  }
  decrypt2string(Z, Q, X) {
    return tx
      ._(function* () {
        let $;
        const ee = this.getEncryptedBuffer(Z);
        if (typeof Q === "string") {
          const et = this.getKeyBuffer(Q);
          $ = yield this.importKey(et, "decrypt");
        } else {
          $ = Q;
        }
        const er = typeof X === "string" ? this.getIVBuffer(X) : X;
        const en = yield this.decrypt(ee, $, er);
        return this.getDecryptedString(en);
      })
      .call(this);
  }
}
function iV() {
  let globalThis_crypto = globalThis.crypto;
  if (!globalThis_crypto) {
    globalThis_crypto = require("QD");
  }
  return globalThis_crypto;
}
class iz extends iH {
  importKey(Z, Q) {
    return iV().subtle.importKey(
      "raw",
      Z,
      {
        name: this._algorithm,
        length: this._length,
      },
      false,
      [Q],
    );
  }
  encrypt(Z, Q, X) {
    return tx
      ._(function* () {
        return yield iV().subtle.encrypt(
          {
            name: this._algorithm,
            length: this._length,
            iv: X,
          },
          Q,
          Z,
        );
      })
      .call(this);
  }
  decrypt(Z, Q, X) {
    return tx
      ._(function* () {
        return yield iV().subtle.decrypt(
          {
            name: this._algorithm,
            length: this._length,
            iv: X,
          },
          Q,
          Z,
        );
      })
      .call(this);
  }
}
function iG() {
  return iq(10, undefined, arguments, {
    get 5() {
      return iz;
    },
  });
}
export class h8 {
  static decrypt(Z, Q) {
    return tx
      ._(function* () {
        if (!Z || Z.startsWith("https://")) {
          return Z;
        }
        try {
          const X = yield this._webCryptoForUrl.decrypt2string(
            Z,
            yield this._cryptoKeyPromise,
            Q,
          );
          if (!X.startsWith("https://")) {
            console.warn(
              "decrypted result is still encrypted, maybe has been encrypted multiple times",
            );
          }
          return X;
        } catch (error) {
          console.error(error);
          return Z;
        }
      })
      .call(this);
  }
  static decryptIV(Z, Q) {
    return tx
      ._(function* () {
        if (!Z || !Q) {
          return "";
        }
        try {
          return yield this._webCryptoForIv.decrypt2string(
            Z,
            yield this._cryptoKeyPromise,
            (function (Z) {
              return iq(12, undefined, arguments, {});
            })(Q),
          );
        } catch (error) {
          console.error(error);
          return "";
        }
      })
      .call(this);
  }
}
h8._webCryptoForIv = iG();
h8._webCryptoForUrl = (function () {
  return iq(11, undefined, arguments, {
    get 5() {
      return iz;
    },
  });
})();
h8._cryptoKeyPromise = (ew = iG()).importKey(ew.getKeyBuffer(tl), "decrypt");
const iZ = [];
function iQ(Z, Q) {
  for (const X of Z.split(";")) {
    const [$, ee] = X.split("=");
    if ($.trim() === Q) {
      return ee;
    }
  }
  return "";
}
function iX(Z) {
  if (typeof document === "undefined") {
    return "";
  }
  return iQ(document.cookie, Z);
}
function i$(Z, Q) {
  return iQ(Z.headers.get("cookie") || "", Q);
}
function i0(Z) {
  if (typeof document !== "undefined") {
    document.cookie = "".concat(
      Z,
      "=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;",
    );
  }
}
iq(13, undefined, iZ, {
  get 0() {
    return td;
  },
  set 0(Z) {
    td = Z;
  },
  get 1() {
    return tp;
  },
  set 1(Z) {
    tp = Z;
  },
  get 2() {
    return tb;
  },
  set 2(Z) {
    tb = Z;
  },
  get 3() {
    return tg;
  },
  set 3(Z) {
    tg = Z;
  },
  get 4() {
    return ty;
  },
  set 4(Z) {
    ty = Z;
  },
});
iq(14, undefined, iZ, {
  get 0() {
    return tc;
  },
  get 1() {
    return iz;
  },
  get 2() {
    return tv;
  },
  set 2(Z) {
    tv = Z;
  },
  get 3() {
    return t_;
  },
  set 3(Z) {
    t_ = Z;
  },
  get 4() {
    return tw;
  },
  set 4(Z) {
    tw = Z;
  },
});
let i1 = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];
function i2(Z, Q) {
  let X = Z[0];
  let $ = Z[1];
  let ee = Z[2];
  let et = Z[3];
  X += ((($ & ee) | (~$ & et)) + Q[0] - 680876936) | 0;
  et +=
    ((((X = (((X << 7) | (X >>> 25)) + $) | 0) & $) | (~X & ee)) +
      Q[1] -
      389564586) |
    0;
  ee +=
    ((((et = (((et << 12) | (et >>> 20)) + X) | 0) & X) | (~et & $)) +
      Q[2] +
      606105819) |
    0;
  $ +=
    ((((ee = (((ee << 17) | (ee >>> 15)) + et) | 0) & et) | (~ee & X)) +
      Q[3] -
      1044525330) |
    0;
  X +=
    (((($ = ((($ << 22) | ($ >>> 10)) + ee) | 0) & ee) | (~$ & et)) +
      Q[4] -
      176418897) |
    0;
  et +=
    ((((X = (((X << 7) | (X >>> 25)) + $) | 0) & $) | (~X & ee)) +
      Q[5] +
      1200080426) |
    0;
  ee +=
    ((((et = (((et << 12) | (et >>> 20)) + X) | 0) & X) | (~et & $)) +
      Q[6] -
      1473231341) |
    0;
  $ +=
    ((((ee = (((ee << 17) | (ee >>> 15)) + et) | 0) & et) | (~ee & X)) +
      Q[7] -
      45705983) |
    0;
  X +=
    (((($ = ((($ << 22) | ($ >>> 10)) + ee) | 0) & ee) | (~$ & et)) +
      Q[8] +
      1770035416) |
    0;
  et +=
    ((((X = (((X << 7) | (X >>> 25)) + $) | 0) & $) | (~X & ee)) +
      Q[9] -
      1958414417) |
    0;
  ee +=
    ((((et = (((et << 12) | (et >>> 20)) + X) | 0) & X) | (~et & $)) +
      Q[10] -
      42063) |
    0;
  $ +=
    ((((ee = (((ee << 17) | (ee >>> 15)) + et) | 0) & et) | (~ee & X)) +
      Q[11] -
      1990404162) |
    0;
  X +=
    (((($ = ((($ << 22) | ($ >>> 10)) + ee) | 0) & ee) | (~$ & et)) +
      Q[12] +
      1804603682) |
    0;
  et +=
    ((((X = (((X << 7) | (X >>> 25)) + $) | 0) & $) | (~X & ee)) +
      Q[13] -
      40341101) |
    0;
  ee +=
    ((((et = (((et << 12) | (et >>> 20)) + X) | 0) & X) | (~et & $)) +
      Q[14] -
      1502002290) |
    0;
  $ +=
    ((((ee = (((ee << 17) | (ee >>> 15)) + et) | 0) & et) | (~ee & X)) +
      Q[15] +
      1236535329) |
    0;
  X +=
    (((($ = ((($ << 22) | ($ >>> 10)) + ee) | 0) & et) | (ee & ~et)) +
      Q[1] -
      165796510) |
    0;
  et +=
    ((((X = (((X << 5) | (X >>> 27)) + $) | 0) & ee) | ($ & ~ee)) +
      Q[6] -
      1069501632) |
    0;
  ee +=
    ((((et = (((et << 9) | (et >>> 23)) + X) | 0) & $) | (X & ~$)) +
      Q[11] +
      643717713) |
    0;
  $ +=
    ((((ee = (((ee << 14) | (ee >>> 18)) + et) | 0) & X) | (et & ~X)) +
      Q[0] -
      373897302) |
    0;
  X +=
    (((($ = ((($ << 20) | ($ >>> 12)) + ee) | 0) & et) | (ee & ~et)) +
      Q[5] -
      701558691) |
    0;
  et +=
    ((((X = (((X << 5) | (X >>> 27)) + $) | 0) & ee) | ($ & ~ee)) +
      Q[10] +
      38016083) |
    0;
  ee +=
    ((((et = (((et << 9) | (et >>> 23)) + X) | 0) & $) | (X & ~$)) +
      Q[15] -
      660478335) |
    0;
  $ +=
    ((((ee = (((ee << 14) | (ee >>> 18)) + et) | 0) & X) | (et & ~X)) +
      Q[4] -
      405537848) |
    0;
  X +=
    (((($ = ((($ << 20) | ($ >>> 12)) + ee) | 0) & et) | (ee & ~et)) +
      Q[9] +
      568446438) |
    0;
  et +=
    ((((X = (((X << 5) | (X >>> 27)) + $) | 0) & ee) | ($ & ~ee)) +
      Q[14] -
      1019803690) |
    0;
  ee +=
    ((((et = (((et << 9) | (et >>> 23)) + X) | 0) & $) | (X & ~$)) +
      Q[3] -
      187363961) |
    0;
  $ +=
    ((((ee = (((ee << 14) | (ee >>> 18)) + et) | 0) & X) | (et & ~X)) +
      Q[8] +
      1163531501) |
    0;
  X +=
    (((($ = ((($ << 20) | ($ >>> 12)) + ee) | 0) & et) | (ee & ~et)) +
      Q[13] -
      1444681467) |
    0;
  et +=
    ((((X = (((X << 5) | (X >>> 27)) + $) | 0) & ee) | ($ & ~ee)) +
      Q[2] -
      51403784) |
    0;
  ee +=
    ((((et = (((et << 9) | (et >>> 23)) + X) | 0) & $) | (X & ~$)) +
      Q[7] +
      1735328473) |
    0;
  $ +=
    ((((ee = (((ee << 14) | (ee >>> 18)) + et) | 0) & X) | (et & ~X)) +
      Q[12] -
      1926607734) |
    0;
  X +=
    ((($ = ((($ << 20) | ($ >>> 12)) + ee) | 0) ^ ee ^ et) + Q[5] - 378558) | 0;
  et +=
    (((X = (((X << 4) | (X >>> 28)) + $) | 0) ^ $ ^ ee) + Q[8] - 2022574463) |
    0;
  ee +=
    (((et = (((et << 11) | (et >>> 21)) + X) | 0) ^ X ^ $) +
      Q[11] +
      1839030562) |
    0;
  $ +=
    (((ee = (((ee << 16) | (ee >>> 16)) + et) | 0) ^ et ^ X) +
      Q[14] -
      35309556) |
    0;
  X +=
    ((($ = ((($ << 23) | ($ >>> 9)) + ee) | 0) ^ ee ^ et) + Q[1] - 1530992060) |
    0;
  et +=
    (((X = (((X << 4) | (X >>> 28)) + $) | 0) ^ $ ^ ee) + Q[4] + 1272893353) |
    0;
  ee +=
    (((et = (((et << 11) | (et >>> 21)) + X) | 0) ^ X ^ $) + Q[7] - 155497632) |
    0;
  $ +=
    (((ee = (((ee << 16) | (ee >>> 16)) + et) | 0) ^ et ^ X) +
      Q[10] -
      1094730640) |
    0;
  X +=
    ((($ = ((($ << 23) | ($ >>> 9)) + ee) | 0) ^ ee ^ et) + Q[13] + 681279174) |
    0;
  et +=
    (((X = (((X << 4) | (X >>> 28)) + $) | 0) ^ $ ^ ee) + Q[0] - 358537222) | 0;
  ee +=
    (((et = (((et << 11) | (et >>> 21)) + X) | 0) ^ X ^ $) + Q[3] - 722521979) |
    0;
  $ +=
    (((ee = (((ee << 16) | (ee >>> 16)) + et) | 0) ^ et ^ X) +
      Q[6] +
      76029189) |
    0;
  X +=
    ((($ = ((($ << 23) | ($ >>> 9)) + ee) | 0) ^ ee ^ et) + Q[9] - 640364487) |
    0;
  et +=
    (((X = (((X << 4) | (X >>> 28)) + $) | 0) ^ $ ^ ee) + Q[12] - 421815835) |
    0;
  ee +=
    (((et = (((et << 11) | (et >>> 21)) + X) | 0) ^ X ^ $) +
      Q[15] +
      530742520) |
    0;
  $ +=
    (((ee = (((ee << 16) | (ee >>> 16)) + et) | 0) ^ et ^ X) +
      Q[2] -
      995338651) |
    0;
  $ = ((($ << 23) | ($ >>> 9)) + ee) | 0;
  X += ((ee ^ ($ | ~et)) + Q[0] - 198630844) | 0;
  X = (((X << 6) | (X >>> 26)) + $) | 0;
  et += (($ ^ (X | ~ee)) + Q[7] + 1126891415) | 0;
  et = (((et << 10) | (et >>> 22)) + X) | 0;
  ee += ((X ^ (et | ~$)) + Q[14] - 1416354905) | 0;
  ee = (((ee << 15) | (ee >>> 17)) + et) | 0;
  $ += ((et ^ (ee | ~X)) + Q[5] - 57434055) | 0;
  $ = ((($ << 21) | ($ >>> 11)) + ee) | 0;
  X += ((ee ^ ($ | ~et)) + Q[12] + 1700485571) | 0;
  X = (((X << 6) | (X >>> 26)) + $) | 0;
  et += (($ ^ (X | ~ee)) + Q[3] - 1894986606) | 0;
  et = (((et << 10) | (et >>> 22)) + X) | 0;
  ee += ((X ^ (et | ~$)) + Q[10] - 1051523) | 0;
  ee = (((ee << 15) | (ee >>> 17)) + et) | 0;
  $ += ((et ^ (ee | ~X)) + Q[1] - 2054922799) | 0;
  $ = ((($ << 21) | ($ >>> 11)) + ee) | 0;
  X += ((ee ^ ($ | ~et)) + Q[8] + 1873313359) | 0;
  X = (((X << 6) | (X >>> 26)) + $) | 0;
  et += (($ ^ (X | ~ee)) + Q[15] - 30611744) | 0;
  et = (((et << 10) | (et >>> 22)) + X) | 0;
  ee += ((X ^ (et | ~$)) + Q[6] - 1560198380) | 0;
  ee = (((ee << 15) | (ee >>> 17)) + et) | 0;
  $ += ((et ^ (ee | ~X)) + Q[13] + 1309151649) | 0;
  $ = ((($ << 21) | ($ >>> 11)) + ee) | 0;
  X += ((ee ^ ($ | ~et)) + Q[4] - 145523070) | 0;
  X = (((X << 6) | (X >>> 26)) + $) | 0;
  et += (($ ^ (X | ~ee)) + Q[11] - 1120210379) | 0;
  et = (((et << 10) | (et >>> 22)) + X) | 0;
  ee += ((X ^ (et | ~$)) + Q[2] + 718787259) | 0;
  ee = (((ee << 15) | (ee >>> 17)) + et) | 0;
  $ += ((et ^ (ee | ~X)) + Q[9] - 343485551) | 0;
  $ = ((($ << 21) | ($ >>> 11)) + ee) | 0;
  Z[0] = (X + Z[0]) | 0;
  Z[1] = ($ + Z[1]) | 0;
  Z[2] = (ee + Z[2]) | 0;
  Z[3] = (et + Z[3]) | 0;
}
function i4(Z) {
  let Q;
  const X = [];
  for (Q = 0; Q < 64; Q += 4) {
    X[Q >> 2] =
      Z.charCodeAt(Q) +
      (Z.charCodeAt(Q + 1) << 8) +
      (Z.charCodeAt(Q + 2) << 16) +
      (Z.charCodeAt(Q + 3) << 24);
  }
  return X;
}
function i6(Z) {
  let Q;
  const X = [];
  for (Q = 0; Q < 64; Q += 4) {
    X[Q >> 2] = Z[Q] + (Z[Q + 1] << 8) + (Z[Q + 2] << 16) + (Z[Q + 3] << 24);
  }
  return X;
}
function i3(Z) {
  let Q;
  let X;
  let $;
  let ee;
  let et;
  let er;
  const Z_length = Z.length;
  const ei = [1732584193, -271733879, -1732584194, 271733878];
  for (Q = 64; Q <= Z_length; Q += 64) {
    i2(ei, i4(Z.substring(Q - 64, Q)));
  }
  X = (Z = Z.substring(Q - 64)).length;
  $ = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (Q = 0; Q < X; Q += 1) {
    $[Q >> 2] |= Z.charCodeAt(Q) << ((Q % 4) << 3);
  }
  $[Q >> 2] |= 128 << ((Q % 4) << 3);
  if (Q > 55) {
    i2(ei, $);
    for (Q = 0; Q < 16; Q += 1) {
      $[Q] = 0;
    }
  }
  et = parseInt(
    (ee = (ee = 8 * Z_length).toString(16).match(/(.*?)(.{0,8})$/))[2],
    16,
  );
  er = parseInt(ee[1], 16) || 0;
  $[14] = et;
  $[15] = er;
  i2(ei, $);
  return ei;
}
function i8(Z) {
  let Q;
  for (Q = 0; Q < Z.length; Q += 1) {
    Z[Q] = ((Z) => {
      let Q;
      let X = "";
      for (Q = 0; Q < 4; Q += 1) {
        X += i1[(Z >> (8 * Q + 4)) & 15] + i1[(Z >> (8 * Q)) & 15];
      }
      return X;
    })(Z[Q]);
  }
  return Z.join("");
}
function i5(Z) {
  if (/[\u0080-\uFFFF]/.test(Z)) {
    Z = unescape(encodeURIComponent(Z));
  }
  return Z;
}
function i7(Z) {
  let Q;
  const X = [];
  const Z_length = Z.length;
  for (Q = 0; Q < Z_length - 1; Q += 2) {
    X.push(parseInt(Z.substr(Q, 2), 16));
  }
  return String.fromCharCode.apply(String, X);
}
class i9 {
  constructor() {
    this.reset();
  }
  append(Z) {
    this.appendBinary(i5(Z));
    return this;
  }
  appendBinary(Z) {
    this._buff += Z;
    this._length += Z.length;
    let Q;
    const length = this._buff.length;
    for (Q = 64; Q <= length; Q += 64) {
      i2(this._hash, i4(this._buff.substring(Q - 64, Q)));
    }
    this._buff = this._buff.substring(Q - 64);
    return this;
  }
  end(Z) {
    let Q;
    let X;
    const _buff = this._buff;
    const $_length = _buff.length;
    const et = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (Q = 0; Q < $_length; Q += 1) {
      et[Q >> 2] |= _buff.charCodeAt(Q) << ((Q % 4) << 3);
    }
    this._finish(et, $_length);
    X = i8(this._hash);
    if (Z) {
      X = i7(X);
    }
    this.reset();
    return X;
  }
  reset() {
    this._buff = "";
    this._length = 0;
    this._hash = [1732584193, -271733879, -1732584194, 271733878];
    return this;
  }
  getState() {
    return {
      buff: this._buff,
      length: this._length,
      hash: this._hash.slice(),
    };
  }
  setState(Z) {
    this._buff = Z.buff;
    this._length = Z.length;
    this._hash = Z.hash;
    return this;
  }
  destroy() {
    delete this._hash;
    delete this._buff;
    delete this._length;
  }
  _finish(Z, Q) {
    let X;
    let $;
    let ee;
    let et = Q;
    Z[et >> 2] |= 128 << ((et % 4) << 3);
    if (et > 55) {
      i2(this._hash, Z);
      for (et = 0; et < 16; et += 1) {
        Z[et] = 0;
      }
    }
    $ = parseInt(
      (X = (X = 8 * this._length).toString(16).match(/(.*?)(.{0,8})$/))[2],
      16,
    );
    ee = parseInt(X[1], 16) || 0;
    Z[14] = $;
    Z[15] = ee;
    i2(this._hash, Z);
  }
  static hash(Z, Q) {
    return i9.hashBinary(i5(Z), Q);
  }
  static hashBinary(Z, Q) {
    const X = i8(i3(Z));
    if (Q) {
      return i7(X);
    }
    return X;
  }
  static ArrayBuffer() {
    this.reset();
  }
}
i8(i3("hello"));
if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
  (() => {
    function Z(Z, byteLength) {
      if ((Z = 0 | Z || 0) < 0) {
        return Math.max(Z + byteLength, 0);
      }
      return Math.min(Z, byteLength);
    }
    ArrayBuffer.prototype.slice = function (Q, X) {
      let $;
      let ee;
      let et;
      let er;
      const byteLength = this.byteLength;
      const ei = Z(Q, byteLength);
      let ea = byteLength;
      if (X !== undefined) {
        ea = Z(X, byteLength);
      }
      if (ei > ea) {
        return new ArrayBuffer(0);
      }
      et = new Uint8Array((ee = new ArrayBuffer(($ = ea - ei))));
      er = new Uint8Array(this, ei, $);
      et.set(er);
      return ee;
    };
  })();
}
i9.ArrayBuffer.prototype.append = function (Z) {
  let Q;
  let X;
  let $;
  Q = this._buff.buffer;
  (X = new Uint8Array(Q.byteLength + Z.byteLength)).set(new Uint8Array(Q));
  X.set(new Uint8Array(Z), Q.byteLength);
  const ee = X;
  const ee_length = ee.length;
  this._length += Z.byteLength;
  for ($ = 64; $ <= ee_length; $ += 64) {
    i2(this._hash, i6(ee.subarray($ - 64, $)));
  }
  this._buff = new Uint8Array($ - 64 < ee_length ? ee.buffer.slice($ - 64) : 0);
  return this;
};
i9.ArrayBuffer.prototype.end = function (Z) {
  let Q;
  let X;
  const _buff = this._buff;
  const $_length = _buff.length;
  const et = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (Q = 0; Q < $_length; Q += 1) {
    et[Q >> 2] |= _buff[Q] << ((Q % 4) << 3);
  }
  this._finish(et, $_length);
  X = i8(this._hash);
  if (Z) {
    X = i7(X);
  }
  this.reset();
  return X;
};
i9.ArrayBuffer.prototype.reset = function () {
  this._buff = new Uint8Array(0);
  this._length = 0;
  this._hash = [1732584193, -271733879, -1732584194, 271733878];
  return this;
};
i9.ArrayBuffer.prototype.getState = function () {
  let Z;
  const Q = i9.prototype.getState.call(this);
  Z = Q.buff;
  Q.buff = String.fromCharCode.apply(null, new Uint8Array(Z));
  return Q;
};
i9.ArrayBuffer.prototype.setState = function (Z) {
  Z.buff = ((Z, Q) => {
    let X;
    const Z_length = Z.length;
    const ee = new ArrayBuffer(Z_length);
    const et = new Uint8Array(ee);
    for (X = 0; X < Z_length; X += 1) {
      et[X] = Z.charCodeAt(X);
    }
    if (Q) {
      return et;
    }
    return ee;
  })(Z.buff, true);
  return i9.prototype.setState.call(this, Z);
};
i9.ArrayBuffer.prototype.destroy = i9.prototype.destroy;
i9.ArrayBuffer.prototype._finish = i9.prototype._finish;
i9.ArrayBuffer.hash = function (Z, Q) {
  const X = i8(
    ((Z) => {
      let Q;
      let X;
      let $;
      let ee;
      let et;
      let er;
      const Z_length = Z.length;
      const ei = [1732584193, -271733879, -1732584194, 271733878];
      for (Q = 64; Q <= Z_length; Q += 64) {
        i2(ei, i6(Z.subarray(Q - 64, Q)));
      }
      X = (Z = Q - 64 < Z_length ? Z.subarray(Q - 64) : new Uint8Array(0))
        .length;
      $ = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      for (Q = 0; Q < X; Q += 1) {
        $[Q >> 2] |= Z[Q] << ((Q % 4) << 3);
      }
      $[Q >> 2] |= 128 << ((Q % 4) << 3);
      if (Q > 55) {
        i2(ei, $);
        for (Q = 0; Q < 16; Q += 1) {
          $[Q] = 0;
        }
      }
      et = parseInt(
        (ee = (ee = 8 * Z_length).toString(16).match(/(.*?)(.{0,8})$/))[2],
        16,
      );
      er = parseInt(ee[1], 16) || 0;
      $[14] = et;
      $[15] = er;
      i2(ei, $);
      return ei;
    })(new Uint8Array(Z)),
  );
  if (Q) {
    return i7(X);
  }
  return X;
};
iq(19, undefined, [], {
  get 0() {
    return tm;
  },
  set 0(Z) {
    tm = Z;
  },
});
const ae = tv();
function at(Z) {
  return i9.hash(Z);
}
function ar(Z, Q) {
  return iq(0, undefined, arguments, {
    get 0() {
      return at;
    },
    get 24() {
      return th;
    },
  });
}
function getWebIdMd5(Z, Q) {
  return iq(5, undefined, arguments, {
    get 0() {
      return at;
    },
    get 19() {
      return tg;
    },
    get 20() {
      return iX;
    },
    get 21() {
      return i$;
    },
    get 23() {
      return tm;
    },
  });
}
function getUserIdMd5(Z, Q) {
  return iq(6, undefined, arguments, {
    get 0() {
      return at;
    },
    get 18() {
      return ty;
    },
    get 20() {
      return iX;
    },
    get 21() {
      return i$;
    },
  });
}
function getFidMd5(Z) {
  return tx._(function* () {
    const Q = (function (Z) {
      return iq(7, undefined, arguments, {
        get 15() {
          return td;
        },
        get 20() {
          return iX;
        },
        get 21() {
          return i$;
        },
      });
    })(Z);
    if (Q) {
      return at(yield tw(ae, Q));
    }
    return "";
  })();
}
export var Pz = {
  resetCookie: function () {
    i0(tb);
    i0(tp);
    i0(ty);
  },
  sign: function (Z, Q) {
    return iq(8, undefined, arguments, {
      get 1() {
        return ar;
      },
    });
  },
  getSignOptions: function () {
    return tx
      ._(function* () {
        const Z =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {};
        const Z_cookie = Z.cookie;
        const X = Z_cookie === undefined ? "" : Z_cookie;
        const Z_userId = Z.userId;
        const Z_webId = Z.webId;
        const tk = iQ(X, tp) || iX(tp);
        const tkTemp = iQ(X, tb) || iX(tb);
        let fidMd5 = "";
        try {
          fidMd5 = yield getFidMd5();
        } catch (error) {
          console.warn("get fidMd5 failed", error);
        }
        return {
          webIdMd5: getWebIdMd5(Z_webId),
          userIdMd5: getUserIdMd5(Z_userId),
          fidMd5,
          tk,
          tkTemp,
        };
      })
      .apply(this, arguments);
  },
  getSignedUifid: function (Z, Q) {
    return iq(1, undefined, arguments, {
      get 1() {
        return ar;
      },
      get 16() {
        return tp;
      },
      get 20() {
        return iX;
      },
    });
  },
  getSignedUifidTemp: function (Z, Q) {
    return iq(2, undefined, arguments, {
      get 1() {
        return ar;
      },
      get 17() {
        return tb;
      },
      get 20() {
        return iX;
      },
    });
  },
  getFidMd5,
  getWebIdMd5,
  getUserIdMd5,
  getUifidTempFromReq: function (Z) {
    return iq(3, undefined, arguments, {
      get 17() {
        return tb;
      },
      get 21() {
        return i$;
      },
    });
  },
  getUifidFromReq: function (Z) {
    return iq(4, undefined, arguments, {
      get 16() {
        return tp;
      },
      get 21() {
        return i$;
      },
    });
  },
};
export const $A = class Z {
  static getOrCreateInstance() {
    if (!Z._instance) {
      Z._instance = new Z();
    }
    return Z._instance;
  }
  static encryptVisitorId(Q) {
    return t_(Z.webCrypto, Q);
  }
  static decryptVisitorId(Q) {
    return tw(Z.webCrypto, Q);
  }
  _init() {
    return tx
      ._(function* () {
        this._visitorId = yield this._readVisitorIdFromCookie();
        if (!this._visitorId) {
          const Z = yield (yield require
            .e("7l8")
            .then(require.bind(require, "tiJ"))).load();
          const { visitorId } = yield Z.get();
          this._visitorId = visitorId;
          yield this._writeVisitorIdToCookie(this._visitorId);
        }
      })
      .call(this);
  }
  _readVisitorIdFromCookie() {
    const Q = iX(td);
    if (Q) {
      return Z.decryptVisitorId(Q);
    }
    return "";
  }
  _writeVisitorIdToCookie(Q) {
    return tx._(function* () {
      let X;
      const $ = yield Z.encryptVisitorId(Q);
      X = td;
      if (typeof document !== "undefined") {
        document.cookie = ""
          .concat(X, "=")
          .concat($, "; path=/; max-age=")
          .concat(31536000, ";");
      }
    })();
  }
  constructor() {
    this._visitorId = "";
    this._initPromise = this._init();
  }
};
$A.webCrypto = tv();
