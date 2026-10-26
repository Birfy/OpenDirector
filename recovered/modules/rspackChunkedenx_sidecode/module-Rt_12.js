import $ from "./module-A_13.js";
import tt from "./module-J_13.js";
import te from "./module-YR_12.js";
import tr from "./module-w_13.js";
import { f } from "./module-t_13.js";
import ti from "./module-D_2_12.js";
import to from "./module-A2_13.js";
import ta from "./module-JD_13.js";
import ts from "./module-Yw_12.js";
import tf from "./module-rr_12.js";
import tu from "./module-VQ_13.js";
import tc from "./module-r9_12.js";
import th from "./module-N_12.js";
const td = "DOMException";
const tl = te("Error");
const tp = te(td);
const tb = function () {
  to(this, tv);
  const arguments_length = arguments.length;
  const Z = ts(arguments_length < 1 ? undefined : arguments[0]);
  const Q = ts(arguments_length < 2 ? undefined : arguments[1], "Error");
  const $ = new tp(Z, Q);
  const tt = tl(Z);
  tt.name = td;
  f($, "stack", tr(1, tu(tt.stack, 1)));
  ta($, this, tb);
  return $;
};
var tv = (tb.prototype = tp.prototype);
const tg = "stack" in tl(td);
const ty = "stack" in new tp(1, 2);
const tm = tp && tc && Object.getOwnPropertyDescriptor(tt, td);
const tw = !!tm && !(tm.writable && tm.configurable);
const tx = tg && !tw && !ty;
$(
  {
    global: true,
    constructor: true,
    forced: th || tx,
  },
  {
    DOMException: tx ? tb : tp,
  },
);
const t_ = te(td);
const t__prototype = t_.prototype;
if (t__prototype.constructor !== t_) {
  if (!th) {
    f(t__prototype, "constructor", tr(1, t_));
  }
  for (const tS in tf) {
    if (ti(tf, tS)) {
      const tA = tf[tS];
      const tE = tA.s;
      if (!ti(t_, tE)) {
        f(t_, tE, tr(6, tA.c));
      }
    }
  }
}
