import n from "./module-A.js";
import o from "./module-J.js";
import i from "./module-YR.js";
import a from "./module-w.js";
import { f as f_1 } from "./module-t.js";
import u from "./module-D_2.js";
import c from "./module-A2.js";
import f from "./module-JD.js";
import h from "./module-Yw.js";
import l from "./module-rr.js";
import v from "./module-VQ.js";
import p from "./module-r9.js";
import d from "./module-N.js";
const g = "DOMException";
const y = i("Error");
const b = i(g);
const m = function () {
  c(this, A);
  const arguments_length = arguments.length;
  const r = h(arguments_length < 1 ? undefined : arguments[0]);
  const e = h(arguments_length < 2 ? undefined : arguments[1], "Error");
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
  for (const I in l) {
    if (u(l, I)) {
      const k = l[I];
      const T = k.s;
      if (!u(R, T)) {
        f_1(R, T, a(6, k.c));
      }
    }
  }
}
