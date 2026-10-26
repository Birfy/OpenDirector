import n from "./module-WG_2_16.js";
import o from "./module-O9_16.js";
import i from "./module-aq_16.js";
import a from "./module-yM_17.js";
import s from "./module-NF_16.js";
import u from "./module-wz_17.js";
import c from "./module-NK_16.js";
import f from "./module-Qn_17.js";
import l from "./module-C_17.js";
import h from "./module-He_16.js";
import v from "./module-YR_16.js";
import p from "./module-lN_16.js";
import d from "./module-xsY_16.js";
import _g from "./module-xY_17.js";
const _g_toArray = _g.toArray;
const y = p("asyncIterator");
const m = o(h("Array").values);
const b = o(m([]).next);
const A = function () {
  return new x(this);
};
var x = function (t) {
  this.iterator = m(t);
};
x.prototype.next = function () {
  return b(this.iterator);
};
export default function (t) {
  const r = this;
  const arguments_length = arguments.length;
  let o = arguments_length > 1 ? arguments[1] : undefined;
  const h = arguments_length > 2 ? arguments[2] : undefined;
  return new (v("Promise"))(function (e) {
    const v = i(t);
    if (o !== undefined) {
      o = n(o, h);
    }
    const p = l(v, y);
    const m = p ? undefined : f(v) || A;
    const b = a(r) ? new r() : [];
    e(_g_toArray(p ? s(v, p) : new d(c(u(v, m))), o, b));
  });
}
