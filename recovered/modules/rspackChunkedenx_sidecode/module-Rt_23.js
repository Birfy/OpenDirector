import n from "./module-A_24.js";
import o from "./module-J_24.js";
import i from "./module-YR_23.js";
import a from "./module-w_24.js";
import { f as f_1 } from "./module-t_24.js";
import c from "./module-D_2_23.js";
import u from "./module-A2_24.js";
import f from "./module-JD_24.js";
import l from "./module-Yw_23.js";
import h from "./module-rr_23.js";
import v from "./module-VQ_24.js";
import p from "./module-r9_23.js";
import d from "./module-N_23.js";
const g = "DOMException";
const y = i("Error");
const b = i(g);
const m = function () {
  u(this, A);
  const arguments_length = arguments.length;
  const r = l(arguments_length < 1 ? undefined : arguments[0]);
  const e = l(arguments_length < 2 ? undefined : arguments[1], "Error");
  const n = new b(r, e);
  const o = y(r);
  o.name = g;
  f_1(n, "stack", a(1, v(o.stack, 1)));
  f(n, this, m);
  return n;
};
var A = (m.prototype = b.prototype);
const x = "stack" in y(g);
const w = "stack" in new b(1, 2);
const S = b && p && Object.getOwnPropertyDescriptor(o, g);
const E = !!S && !(S.writable && S.configurable);
const O = x && !E && !w;
n(
  {
    global: true,
    constructor: true,
    forced: d || O,
  },
  {
    DOMException: O ? m : b,
  },
);
const R = i(g);
const R_prototype = R.prototype;
if (R_prototype.constructor !== R) {
  if (!d) {
    f_1(R_prototype, "constructor", a(1, R));
  }
  for (const I in h) {
    if (c(h, I)) {
      const k = h[I];
      const j = k.s;
      if (!c(R, j)) {
        f_1(R, j, a(6, k.c));
      }
    }
  }
}
