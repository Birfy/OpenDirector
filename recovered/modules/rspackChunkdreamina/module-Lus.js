import n from "g";
import i from "u";
import a from "Y";
import o from "M";
import { f as f_1 } from "R";
import A from "h";
import c from "i9";
import u from "U";
import l from "Gq";
import h from "LP";
import f from "pv";
import g from "F";
import d from "K";
const p = "DOMException";
const m = a("Error");
const y = a(p);
const b = function () {
  c(this, v);
  const arguments_length = arguments.length;
  const e = l(arguments_length < 1 ? undefined : arguments[0]);
  const r = l(arguments_length < 2 ? undefined : arguments[1], "Error");
  const n = new y(e, r);
  const i = m(e);
  i.name = p;
  f_1(n, "stack", o(1, f(i.stack, 1)));
  u(n, this, b);
  return n;
};
var v = (b.prototype = y.prototype);
const I = "stack" in m(p);
const w = "stack" in new y(1, 2);
const C = y && g && Object.getOwnPropertyDescriptor(i, p);
const B = !!C && !(C.writable && C.configurable);
const S = I && !B && !w;
n(
  {
    global: true,
    constructor: true,
    forced: d || S,
  },
  {
    DOMException: S ? b : y,
  },
);
const E = a(p);
const E_prototype = E.prototype;
if (E_prototype.constructor !== E) {
  if (!d) {
    f_1(E_prototype, "constructor", o(1, E));
  }
  for (const D in h) {
    if (A(h, D)) {
      const x = h[D];
      const F = x.s;
      if (!A(E, F)) {
        f_1(E, F, o(6, x.c));
      }
    }
  }
}
