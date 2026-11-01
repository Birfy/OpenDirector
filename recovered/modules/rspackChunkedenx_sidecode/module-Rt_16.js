import n from "./module-A_17.js";
import o from "./module-J_17.js";
import i from "./module-YR_16.js";
import a from "./module-w_17.js";
import { f as f_1 } from "./module-t_17.js";
import u from "./module-D_2_16.js";
import c from "./module-A2_17.js";
import f from "./module-JD_17.js";
import l from "./module-Yw_16.js";
import h from "./module-rr_16.js";
import v from "./module-VQ_17.js";
import p from "./module-r9_16.js";
import d from "./module-N_16.js";
const g = "DOMException";
const y = i("Error");
const m = i(g);
const b = function () {
  c(this, A);
  const arguments_length = arguments.length;
  const r = l(arguments_length < 1 ? undefined : arguments[0]);
  const e = l(arguments_length < 2 ? undefined : arguments[1], "Error");
  const n = new m(r, e);
  const o = y(r);
  o.name = g;
  f_1(n, "stack", a(1, v(o.stack, 1)));
  f(n, this, b);
  return n;
};
var A = (b.prototype = m.prototype);
const x = "stack" in y(g);
const w = "stack" in new m(1, 2);
const S = m && p && Object.getOwnPropertyDescriptor(o, g);
const E = !!S && !(S.writable && S.configurable);
const O = x && !E && !w;
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
