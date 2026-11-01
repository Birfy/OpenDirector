import $ from "./module-A_13.js";
import tt from "./module-M_2_12.js";
import te from "./module-Yj_12.js";
import tr from "./module-L7_12.js";
import tn from "./module-V3_12.js";
import ti from "./module-vj_13.js";
import to from "./module-dV_12.js";
import ta from "./module-ng_13.js";
import ts from "./module-d_13.js";
import tf from "./module-Mi_12.js";
import tu from "./module-Md_12.js";
import tc from "./module-Su_12.js";
import th from "./module-TK_13.js";
import td from "./module-C_13.js";
import tl from "./module-vE_12.js";
import tp from "./module-X_13.js";
import tb from "./module-lN_12.js";
import tv from "./module-V0_12.js";
import tg from "./module-Gl_12.js";
import ty from "./module-uc_12.js";
import tm from "./module-b_12.js";
import tw from "./module-N_12.js";
const tx = tb("matchAll");
const t_ = "RegExp String";
const tM = t_ + " Iterator";
const tm_set = tm.set;
const tA = tm.getterFor(tM);
const tR = te("".indexOf);
const tI = te("".matchAll);
const forced =
  !!tI &&
  !tp(function () {
    tI("a", /./);
  });
const tT = tr(
  function (regexp, string, global, unicode) {
    tm_set(this, {
      type: tM,
      regexp,
      string,
      global,
      unicode,
      done: false,
    });
  },
  t_,
  function () {
    const J = tA(this);
    if (J.done) {
      return tn(undefined, true);
    }
    const J_regexp = J.regexp;
    const J_string = J.string;
    const $ = ty(J_regexp, J_string);
    if ($ === null) {
      J.done = true;
      return tn(undefined, true);
    }
    if (J.global) {
      if (ta($[0]) === "") {
        J_regexp.lastIndex = tg(J_string, to(J_regexp.lastIndex), J.unicode);
      }
    } else {
      J.done = true;
    }
    return tn($, false);
  },
);
const tB = function (J) {
  let Z;
  let Q;
  let $;
  const tt = ts(this);
  const te = ta(J);
  const tr = tv(tt, RegExp);
  const tn = ta(th(tt));
  Z = new tr(tr === RegExp ? tt.source : tt, tn);
  Q = !!~tR(tn, "g");
  $ = !!~tR(tn, "u");
  Z.lastIndex = to(tt.lastIndex);
  return new tT(Z, te, Q, $);
};
$(
  {
    target: "String",
    proto: true,
    forced,
  },
  {
    matchAll: function (J) {
      let Z;
      let Q;
      let $;
      const te = ti(this);
      if (tf(J)) {
        if (forced) {
          return tI(te, J);
        }
      } else {
        if (tc(J) && !~tR(ta(ti(th(J))), "g")) {
          throw TypeError("`.matchAll` does not allow non-global regexes");
        }
        if (forced) {
          return tI(te, J);
        }
        if ((Q = td(J, tx)) === undefined && tw && tu(J) === "RegExp") {
          Q = tB;
        }
        if (Q) {
          return tt(Q, J, te);
        }
      }
      Z = ta(te);
      $ = RegExp(J, "g");
      if (tw) {
        return tt(tB, $, Z);
      }
      return $[tx](Z);
    },
  },
);
if (!(tw || tx in RegExp.prototype)) {
  tl(RegExp.prototype, tx, tB);
}
