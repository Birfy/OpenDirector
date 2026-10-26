import n from "./module-A_23.js";
import i from "./module-J_23.js";
import o from "./module-YR_22.js";
import s from "./module-w_23.js";
import { f as f_1 } from "./module-t_23.js";
import u from "./module-D_2_22.js";
import c from "./module-A2_23.js";
import f from "./module-JD_23.js";
import h from "./module-Yw_22.js";
import l from "./module-rr_22.js";
import v from "./module-VQ_23.js";
import p from "./module-r9_22.js";
import d from "./module-N_22.js";
const g = "DOMException";
const y = o("Error");
const b = o(g);
const m = function () {
  c(this, A);
  const arguments_length = arguments.length;
  const r = h(arguments_length < 1 ? undefined : arguments[0]);
  const e = h(arguments_length < 2 ? undefined : arguments[1], "Error");
  const n = new b(r, e);
  const i = y(r);
  i.name = g;
  f_1(n, "stack", s(1, v(i.stack, 1)));
  f(n, this, m);
  return n;
};
var A = (m.prototype = b.prototype);
const x = "stack" in y(g);
const w = "stack" in new b(1, 2);
const S = b && p && Object.getOwnPropertyDescriptor(i, g);
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
const R = o(g);
const R_prototype = R.prototype;
if (R_prototype.constructor !== R) {
  if (!d) {
    f_1(R_prototype, "constructor", s(1, R));
  }
  for (const I in l) {
    if (u(l, I)) {
      const k = l[I];
      const T = k.s;
      if (!u(R, T)) {
        f_1(R, T, s(6, k.c));
      }
    }
  }
}
