import $ from "./module-YR_12.js";
import tt from "./module-D_2_12.js";
import te from "./module-h_13.js";
import tr from "./module-e_12.js";
import tn from "./module-d4_12.js";
import ti from "./module-bE_13.js";
import to from "./module-T_2_12.js";
import ta from "./module-JD_13.js";
import ts from "./module-Yw_12.js";
import tf from "./module-je_12.js";
import tu from "./module-LV_12.js";
import tc from "./module-r9_12.js";
import th from "./module-N_12.js";
export default function (J, Z, Q, td) {
  const tl = "stackTraceLimit";
  const tp = td ? 2 : 1;
  const tb = J.split(".");
  const tv = tb[tb.length - 1];
  const tg = $.apply(null, tb);
  if (tg) {
    const ty = tg.prototype;
    if (!th && tt(ty, "cause")) {
      delete ty.cause;
    }
    if (!Q) {
      return tg;
    }
    const tm = $("Error");
    var tw = Z(function (J, Z) {
      const Q = ts(td ? Z : J, undefined);
      const $ = td ? new tg(J) : new tg();
      if (Q !== undefined) {
        te($, "message", Q);
      }
      tu($, tw, $.stack, 2);
      if (this && tr(ty, this)) {
        ta($, this, tw);
      }
      if (arguments.length > tp) {
        tf($, arguments[tp]);
      }
      return $;
    });
    tw.prototype = ty;
    if (tv !== "Error") {
      if (tn) {
        tn(tw, tm);
      } else {
        ti(tw, tm, {
          name: true,
        });
      }
    } else if (tc && tl in tg) {
      to(tw, tg, tl);
      to(tw, tg, "prepareStackTrace");
    }
    ti(tw, tg);
    if (!th) {
      try {
        if (ty.name !== tv) {
          te(ty, "name", tv);
        }
        ty.constructor = tw;
      } catch (J) {}
    }
    return tw;
  }
}
