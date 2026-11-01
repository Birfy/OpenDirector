import $ from "./module-A_13.js";
import tt from "./module-M_2_12.js";
import te from "./module-O9_12.js";
import tr from "./module-vj_13.js";
import tn from "./module-Y_13.js";
import ti from "./module-Mi_12.js";
import to from "./module-Su_12.js";
import ta from "./module-ng_13.js";
import ts from "./module-C_13.js";
import tf from "./module-TK_13.js";
import tu from "./module-S5_12.js";
import tc from "./module-lN_12.js";
import th from "./module-N_12.js";
const td = tc("replace");
const tp = te("".indexOf);
const tb = te("".replace);
const tv = te("".slice);
const ty = (J, Z, Q) => {
  if (Q > J.length) {
    return -1;
  }
  if (Z === "") {
    return Q;
  }
  return tp(J, Z, Q);
};
$(
  {
    target: "String",
    proto: true,
  },
  {
    replaceAll: function (J, Z) {
      let Q;
      let $;
      let te;
      let tc;
      let tm;
      let tw;
      let tx;
      let t_;
      const tM = tr(this);
      let tS = 0;
      let tA = 0;
      let tE = "";
      if (!ti(J)) {
        if ((Q = to(J)) && !~tp(ta(tr(tf(J))), "g")) {
          throw TypeError("`.replaceAll` does not allow non-global regexes");
        }
        if (($ = ts(J, td))) {
          return tt($, J, tM, Z);
        }
        if (th && Q) {
          return tb(ta(tM), J, Z);
        }
      }
      te = ta(tM);
      tc = ta(J);
      if (!(tm = tn(Z))) {
        Z = ta(Z);
      }
      tx = Math.max(1, (tw = tc.length));
      for (tS = ty(te, tc, 0); tS !== -1;) {
        t_ = tm ? ta(Z(tc, tS, te)) : tu(tc, te, tS, [], undefined, Z);
        tE += tv(te, tA, tS) + t_;
        tA = tS + tw;
        tS = ty(te, tc, tS + tx);
      }
      if (tA < te.length) {
        tE += tv(te, tA);
      }
      return tE;
    },
  },
);
