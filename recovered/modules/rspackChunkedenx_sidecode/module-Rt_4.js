import n from "./module-A_5.js";
import i from "./module-J_5.js";
import o from "./module-YR_4.js";
import s from "./module-w_5.js";
import { f as f_1 } from "./module-t_5.js";
import u from "./module-D_2_4.js";
import c from "./module-A2_5.js";
import f from "./module-JD_5.js";
import h from "./module-Yw_4.js";
import l from "./module-rr_4.js";
import v from "./module-VQ_5.js";
import p from "./module-r9_4.js";
import d from "./module-N_4.js";
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
