import $ from "./module-A_13.js";
import tt from "./module-O9_12.js";
import te from "./module-vo_12.js";
import tr from "./module-aq_12.js";
import tn from "./module-F4_13.js";
import ti from "./module-bp_12.js";
import to from "./module-ng_13.js";
import ta from "./module-X_13.js";
import ts from "./module-ze_13.js";
import tf from "./module-bYn_12.js";
import tu from "./module-Ct_12.js";
import tc from "./module-yv_2_2.js";
import th from "./module-G_2_12.js";
import td from "./module-sb_14.js";
const tl = [];
const tp = tt(tl.sort);
const tb = tt(tl.push);
const tv = ta(function () {
  tl.sort(undefined);
});
const tg = ta(function () {
  tl.sort(null);
});
const ty = tf("sort");
const tm = !ta(function () {
  if (th) {
    return th < 70;
  }
  if (!tu || !(tu > 3)) {
    if (tc) {
      return true;
    }
    if (td) {
      return td < 603;
    }
    let J;
    let Z;
    let v;
    let $;
    let tt = "";
    for (J = 65; J < 76; J++) {
      Z = String.fromCharCode(J);
      switch (J) {
        case 66:
        case 69:
        case 70:
        case 72:
          v = 3;
          break;
        case 68:
        case 71:
          v = 4;
          break;
        default:
          v = 2;
      }
      for ($ = 0; $ < 47; $++) {
        tl.push({
          k: Z + $,
          v,
        });
      }
    }
    tl.sort((J, Z) => Z.v - J.v);
    for ($ = 0; $ < tl.length; $++) {
      Z = tl[$].k.charAt(0);
      if (tt.charAt(tt.length - 1) !== Z) {
        tt += Z;
      }
    }
    return tt !== "DGBEFHACIJK";
  }
});
$(
  {
    target: "Array",
    proto: true,
    forced: tv || !tg || !ty || !tm,
  },
  {
    sort: function (J) {
      if (J !== undefined) {
        te(J);
      }
      let Z;
      let Q;
      const $ = tr(this);
      if (tm) {
        if (J === undefined) {
          return tp($);
        }
        return tp($, J);
      }
      const tt = [];
      const ta = tn($);
      for (Q = 0; Q < ta; Q++) {
        if (Q in $) {
          tb(tt, $[Q]);
        }
      }
      ts(tt, function (Z, Q) {
        if (Q === undefined) {
          return -1;
        }
        if (Z === undefined) {
          return 1;
        }
        if (J !== undefined) {
          return +J(Z, Q) || 0;
        }
        if (to(Z) > to(Q)) {
          return 1;
        }
        return -1;
      });
      Z = tn(tt);
      for (Q = 0; Q < Z;) {
        $[Q] = tt[Q++];
      }
      while (Q < ta) {
        ti($, Q++);
      }
      return $;
    },
  },
);
