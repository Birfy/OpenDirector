import n from "./module-A_7.js";
import o from "./module-J_7.js";
import a from "./module-YR_6.js";
import i from "./module-w_7.js";
import { f as f_1 } from "./module-t_7.js";
import c from "./module-D_2_6.js";
import u from "./module-A2_7.js";
import f from "./module-JD_7.js";
import l from "./module-Yw_6.js";
import h from "./module-rr_6.js";
import p from "./module-VQ_7.js";
import v from "./module-r9_6.js";
import d from "./module-N_6.js";
const g = "DOMException";
const y = a("Error");
const m = a(g);
const b = function () {
  u(this, A);
  const arguments_length = arguments.length;
  const r = l(arguments_length < 1 ? undefined : arguments[0]);
  const e = l(arguments_length < 2 ? undefined : arguments[1], "Error");
  const n = new m(r, e);
  const o = y(r);
  o.name = g;
  f_1(n, "stack", i(1, p(o.stack, 1)));
  f(n, this, b);
  return n;
};
var A = (b.prototype = m.prototype);
const w = "stack" in y(g);
const x = "stack" in new m(1, 2);
const E = m && v && Object.getOwnPropertyDescriptor(o, g);
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
const R = a(g);
const R_prototype = R.prototype;
if (R_prototype.constructor !== R) {
  if (!d) {
    f_1(R_prototype, "constructor", i(1, R));
  }
  for (const I in h) {
    if (c(h, I)) {
      const k = h[I];
      const T = k.s;
      if (!c(R, T)) {
        f_1(R, T, i(6, k.c));
      }
    }
  }
}
