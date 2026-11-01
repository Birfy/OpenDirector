import n from "./module-A_21.js";
import o from "./module-J_21.js";
import i from "./module-YR_20.js";
import a from "./module-w_21.js";
import { f as f_1 } from "./module-t_21.js";
import c from "./module-D_2_20.js";
import u from "./module-A2_21.js";
import f from "./module-JD_21.js";
import l from "./module-Yw_20.js";
import h from "./module-rr_20.js";
import v from "./module-VQ_21.js";
import p from "./module-r9_20.js";
import d from "./module-N_20.js";
const g = "DOMException";
const y = i("Error");
const m = i(g);
const b = function () {
  u(this, w);
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
var w = (b.prototype = m.prototype);
const A = "stack" in y(g);
const x = "stack" in new m(1, 2);
const S = m && p && Object.getOwnPropertyDescriptor(o, g);
const E = !!S && !(S.writable && S.configurable);
const O = A && !E && !x;
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
    if (c(h, I)) {
      const _ = h[I];
      const k = _.s;
      if (!c(R, k)) {
        f_1(R, k, a(6, _.c));
      }
    }
  }
}
