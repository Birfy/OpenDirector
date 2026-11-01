import $ from "./module-r9_12.js";
import tt from "./module-J_13.js";
import te from "./module-O9_12.js";
import tr from "./module-Ze_2_12.js";
import tn from "./module-JD_13.js";
import ti from "./module-h_13.js";
import { f } from "./module-vV_2_2.js";
import ta from "./module-e_12.js";
import ts from "./module-Su_12.js";
import tf from "./module-ng_13.js";
import tu from "./module-TK_13.js";
import tc from "./module-Tc_12.js";
import th from "./module-T_2_12.js";
import td from "./module-vE_12.js";
import tl from "./module-X_13.js";
import tp from "./module-D_2_12.js";
import _tb from "./module-b_12.js";
import tv from "./module-FG_12.js";
import tg from "./module-lN_12.js";
import ty from "./module-e0_12.js";
import tm from "./module-yZ_12.js";
const _tb_enforce = _tb.enforce;
const tw = tg("match");
const tt_RegExp = tt.RegExp;
const tx_prototype = tt_RegExp.prototype;
const tt_SyntaxError = tt.SyntaxError;
const tS = te(tx_prototype.exec);
const tA = te("".charAt);
const tE = te("".replace);
const tk = te("".indexOf);
const tR = te("".slice);
const tI = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
const tO = /a/g;
const tT = /a/g;
const tB = new tt_RegExp(tO) !== tO;
const tc_MISSED_STICKY = tc.MISSED_STICKY;
const tc_UNSUPPORTED_Y = tc.UNSUPPORTED_Y;
const tP =
  $ &&
  (!tB ||
    tc_MISSED_STICKY ||
    ty ||
    tm ||
    tl(function () {
      tT[tw] = false;
      return (
        tt_RegExp(tO) !== tO ||
        tt_RegExp(tT) === tT ||
        String(tt_RegExp(tO, "i")) !== "/a/i"
      );
    }));
const tL = (J) => {
  let Z;
  for (var Q = J.length, $ = 0, tt = "", te = false; $ <= Q; $++) {
    if ((Z = tA(J, $)) === "\\") {
      tt += Z + tA(J, ++$);
      continue;
    }
    if (te || Z !== ".") {
      if (Z === "[") {
        te = true;
      } else if (Z === "]") {
        te = false;
      }
      tt += Z;
    } else {
      tt += "[\\s\\S]";
    }
  }
  return tt;
};
const tN = (J) => {
  let Z;
  for (
    var Q = J.length,
      $ = 0,
      tt = "",
      te = [],
      tr = {},
      tn = false,
      ti = false,
      to = 0,
      ta = "";
    $ <= Q;
    $++
  ) {
    if ((Z = tA(J, $)) === "\\") {
      Z += tA(J, ++$);
    } else if (Z === "]") {
      tn = false;
    } else if (!tn) {
      switch (true) {
        case Z === "[":
          tn = true;
          break;
        case Z === "(":
          if (tS(tI, tR(J, $ + 1))) {
            $ += 2;
            ti = true;
          }
          tt += Z;
          to++;
          continue;
        case Z === ">" && ti:
          if (ta === "" || tp(tr, ta)) {
            throw new tt_SyntaxError("Invalid capture group name");
          }
          tr[ta] = true;
          te[te.length] = [ta, to];
          ti = false;
          ta = "";
          continue;
      }
    }
    if (ti) {
      ta += Z;
    } else {
      tt += Z;
    }
  }
  return [tt, te];
};
if (tr("RegExp", tP)) {
  const tU = function (J, Z) {
    let Q;
    let $;
    let tt;
    let te;
    let tr;
    let to;
    const tc = ta(tx_prototype, this);
    const th = ts(J);
    const td = Z === undefined;
    let tl = [];
    let tp = J;
    if (!tc && th && td && J.constructor === tU) {
      return J;
    }
    if (th || ta(tx_prototype, J)) {
      J = J.source;
      if (td) {
        Z = tu(tp);
      }
    }
    J = J === undefined ? "" : tf(J);
    Z = Z === undefined ? "" : tf(Z);
    tp = J;
    if (ty && "dotAll" in tO && ($ = !!Z && tk(Z, "s") > -1)) {
      Z = tE(Z, /s/g, "");
    }
    Q = Z;
    if (
      tc_MISSED_STICKY &&
      "sticky" in tO &&
      (tt = !!Z && tk(Z, "y") > -1) &&
      tc_UNSUPPORTED_Y
    ) {
      Z = tE(Z, /y/g, "");
    }
    if (tm) {
      J = (te = tN(J))[0];
      tl = te[1];
    }
    tr = tn(tt_RegExp(J, Z), tc ? this : tx_prototype, tU);
    if ($ || tt || tl.length) {
      to = _tb_enforce(tr);
      if ($) {
        to.dotAll = true;
        to.raw = tU(tL(J), Q);
      }
      if (tt) {
        to.sticky = true;
      }
      if (tl.length) {
        to.groups = tl;
      }
    }
    if (J !== tp) {
      try {
        ti(tr, "source", tp === "" ? "(?:)" : tp);
      } catch (J) {}
    }
    return tr;
  };
  for (let tD = f(tt_RegExp), tF = 0; tD.length > tF;) {
    th(tU, tt_RegExp, tD[tF++]);
  }
  tx_prototype.constructor = tU;
  tU.prototype = tx_prototype;
  td(tt, "RegExp", tU, {
    constructor: true,
  });
}
tv("RegExp");
