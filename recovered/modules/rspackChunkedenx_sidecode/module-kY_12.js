import $ from "./module-eP_12.js";
import tt from "./module-A_13.js";
import te from "./module-K_13.js";
import tr from "./module-YR_12.js";
import tn from "./module-nX_12.js";
import ti from "./module-O9_12.js";
import to from "./module-Xy_3_2.js";
import ta from "./module-d_13.js";
import ts from "./module-aq_12.js";
import tf from "./module-Y_13.js";
import tu from "./module-F4_13.js";
import { f } from "./module-t_13.js";
import th from "./module-wL_12.js";
import td from "./module-MA_2_12.js";
import tl from "./module-r6_12.js";
import tp from "./module-ri_13.js";
const tb = te("GlobalDedentRegistry", new (tr("WeakMap"))());
tb.has = tb.has;
tb.get = tb.get;
tb.set = tb.set;
const ty = Object.freeze || Object;
const tx = ti("".charAt);
const t_ = ti("".slice);
const tM = ti("".split);
const tS = ti(/./.exec);
const tA = /([\n\u2028\u2029]|\r\n?)/g;
const tE = RegExp("^[" + tp + "]*");
const tk = RegExp("[^" + tp + "]");
const tR = "Invalid tag";
const tI = (J) => {
  const J_raw = J.raw;
  if ($ && !Object.isFrozen(J_raw)) {
    throw TypeError("Raw template should be frozen");
  }
  if (tb.has(J_raw)) {
    return tb.get(J_raw);
  }
  const Q = tO(J_raw);
  const tt = tB(Q);
  f(tt, "raw", {
    value: ty(Q),
  });
  ty(tt);
  tb.set(J_raw, tt);
  return tt;
};
var tO = (J) => {
  let Z;
  let Q;
  let $;
  let tt;
  const te = ts(J);
  const tr = tu(te);
  const tn = Array(tr);
  const ti = Array(tr);
  let to = 0;
  if (!tr) {
    throw TypeError(tR);
  }
  for (; to < tr; to++) {
    const ta = te[to];
    if (typeof ta === "string") {
      tn[to] = tM(ta, tA);
    } else {
      throw TypeError(tR);
    }
  }
  for (to = 0; to < tr; to++) {
    const tf = to + 1 === tr;
    Z = tn[to];
    if (to === 0) {
      if (Z.length === 1 || Z[0].length > 0) {
        throw TypeError("Invalid opening line");
      }
      Z[1] = "";
    }
    if (tf) {
      if (Z.length === 1 || tS(tk, Z[Z.length - 1])) {
        throw TypeError("Invalid closing line");
      }
      Z[Z.length - 2] = "";
      Z[Z.length - 1] = "";
    }
    for (let tc = 2; tc < Z.length; tc += 2) {
      const th = Z[tc];
      const td = tc + 1 === Z.length && !tf;
      const tl = tS(tE, th)[0];
      if (!td && tl.length === th.length) {
        Z[tc] = "";
        continue;
      }
      Q = tT(tl, Q);
    }
  }
  const tp = Q ? Q.length : 0;
  for (to = 0; to < tr; to++) {
    $ = (Z = tn[to])[0];
    for (tt = 1; tt < Z.length; tt += 2) {
      $ += Z[tt] + t_(Z[tt + 1], tp);
    }
    ti[to] = $;
  }
  return ti;
};
var tT = (J, Z) => {
  if (Z === undefined || J === Z) {
    return J;
  }
  for (
    var Q = 0, $ = Math.min(J.length, Z.length);
    Q < $ && tx(J, Q) === tx(Z, Q);
    Q++
  );
  return t_(J, 0, Q);
};
var tB = (J) => {
  for (var Z = 0, Q = J.length, $ = Array(Q); Z < Q; Z++) {
    $[Z] = tl(J[Z]);
  }
  return $;
};
const tj = (J) =>
  tn(function (Z) {
    const Q = th(arguments);
    Q[0] = tI(ta(Z));
    return to(J, this, Q);
  }, "");
const tC = tj(td);
tt(
  {
    target: "String",
    stat: true,
    forced: true,
  },
  {
    dedent: function (J) {
      ta(J);
      if (tf(J)) {
        return tj(J);
      }
      return to(tC, this, arguments);
    },
  },
);
