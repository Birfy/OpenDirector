import n from "./module-A_10.js";
import o from "./module-J_10.js";
import i from "./module-YR_9.js";
import a from "./module-w_10.js";
import { f as f_1 } from "./module-t_10.js";
import u from "./module-D_2_9.js";
import c from "./module-A2_10.js";
import f from "./module-JD_10.js";
import l from "./module-Yw_9.js";
import h from "./module-rr_9.js";
import v from "./module-VQ_10.js";
import d from "./module-r9_9.js";
import p from "./module-N_9.js";
const g = "DOMException";
const y = i("Error");
const m = i(g);
const b = function () {
  c(this, w);
  const arguments_length = arguments.length;
  const e = l(arguments_length < 1 ? undefined : arguments[0]);
  const r = l(arguments_length < 2 ? undefined : arguments[1], "Error");
  const n = new m(e, r);
  const o = y(e);
  o.name = g;
  f_1(n, "stack", a(1, v(o.stack, 1)));
  f(n, this, b);
  return n;
};
var w = (b.prototype = m.prototype);
const A = "stack" in y(g);
const x = "stack" in new m(1, 2);
const E = m && d && Object.getOwnPropertyDescriptor(o, g);
const S = !!E && !(E.writable && E.configurable);
const O = A && !S && !x;
n(
  {
    global: true,
    constructor: true,
    forced: p || O,
  },
  {
    DOMException: O ? b : m,
  },
);
const _ = i(g);
const __prototype = _.prototype;
if (__prototype.constructor !== _) {
  if (!p) {
    f_1(__prototype, "constructor", a(1, _));
  }
  for (const M in h) {
    if (u(h, M)) {
      const I = h[M];
      const T = I.s;
      if (!u(_, T)) {
        f_1(_, T, a(6, I.c));
      }
    }
  }
}
