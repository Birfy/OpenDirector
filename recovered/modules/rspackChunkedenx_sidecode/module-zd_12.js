import $ from "./module-WG_2_12.js";
import tt from "./module-M_2_12.js";
import te from "./module-aq_12.js";
import tr from "./module-Gz_12.js";
import tn from "./module-se_13.js";
import ti from "./module-yM_13.js";
import to from "./module-F4_13.js";
import ta from "./module-er_12.js";
import ts from "./module-wz_13.js";
import tf from "./module-Qn_13.js";
export default function (J) {
  let Z;
  let Q;
  let tc;
  let th;
  let td;
  let tl;
  const tp = te(J);
  const tb = ti(this);
  const arguments_length = arguments.length;
  let tg = arguments_length > 1 ? arguments[1] : undefined;
  const ty = tg !== undefined;
  if (ty) {
    tg = $(tg, arguments_length > 2 ? arguments[2] : undefined);
  }
  const tm = tf(tp);
  let tw = 0;
  if (tm && !(this === Array && tn(tm))) {
    td = (th = ts(tp, tm)).next;
    for (Q = tb ? new this() : []; !(tc = tt(td, th)).done; tw++) {
      tl = ty ? tr(th, tg, [tc.value, tw], true) : tc.value;
      ta(Q, tw, tl);
    }
  } else {
    Z = to(tp);
    for (Q = tb ? new this(Z) : Array(Z); Z > tw; tw++) {
      tl = ty ? tg(tp[tw], tw) : tp[tw];
      ta(Q, tw, tl);
    }
  }
  Q.length = tw;
  return Q;
}
