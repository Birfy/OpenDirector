import n from "./module-A_8.js";
import o from "./module-J_8.js";
import i from "./module-YR_7.js";
import a from "./module-w_8.js";
import { f as f_1 } from "./module-t_8.js";
import u from "./module-D_2_7.js";
import c from "./module-A2_8.js";
import f from "./module-JD_8.js";
import l from "./module-Yw_7.js";
import h from "./module-rr_7.js";
import v from "./module-VQ_8.js";
import p from "./module-r9_7.js";
import d from "./module-N_7.js";
const g = "DOMException";
const y = i("Error");
const m = i(g);
const b = function () {
  c(this, A);
  const arguments_length = arguments.length;
  const t = l(arguments_length < 1 ? undefined : arguments[0]);
  const e = l(arguments_length < 2 ? undefined : arguments[1], "Error");
  const n = new m(t, e);
  const o = y(t);
  o.name = g;
  f_1(n, "stack", a(1, v(o.stack, 1)));
  f(n, this, b);
  return n;
};
var A = (b.prototype = m.prototype);
const w = "stack" in y(g);
const x = "stack" in new m(1, 2);
const E = m && p && Object.getOwnPropertyDescriptor(o, g);
const S = !!E && !(E.writable && E.configurable);
const O = w && !S && !x;
n(
  {
    global: true,
    constructor: true,
    forced: d || O,
  },
  {
    DOMException: O ? b : m,
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
