import n from "./module-A_20.js";
import o from "./module-J_20.js";
import i from "./module-YR_19.js";
import a from "./module-w_20.js";
import { f as f_1 } from "./module-t_20.js";
import u from "./module-D_2_19.js";
import c from "./module-A2_20.js";
import f from "./module-JD_20.js";
import l from "./module-Yw_19.js";
import h from "./module-rr_19.js";
import v from "./module-VQ_20.js";
import p from "./module-r9_19.js";
import d from "./module-N_19.js";
const g = "DOMException";
const y = i("Error");
const b = i(g);
const m = function () {
  c(this, A);
  const arguments_length = arguments.length;
  const t = l(arguments_length < 1 ? undefined : arguments[0]);
  const e = l(arguments_length < 2 ? undefined : arguments[1], "Error");
  const n = new b(t, e);
  const o = y(t);
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
    if (u(h, I)) {
      const k = h[I];
      const T = k.s;
      if (!u(R, T)) {
        f_1(R, T, a(6, k.c));
      }
    }
  }
}
