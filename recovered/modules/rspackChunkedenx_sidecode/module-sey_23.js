import n from "./module-WG_2_23.js";
import o from "./module-O9_23.js";
import i from "./module-aq_23.js";
import a from "./module-yM_24.js";
import s from "./module-NF_23.js";
import c from "./module-wz_24.js";
import u from "./module-NK_23.js";
import f from "./module-Qn_24.js";
import l from "./module-C_24.js";
import h from "./module-He_23.js";
import v from "./module-YR_23.js";
import p from "./module-lN_23.js";
import d from "./module-xsY_23.js";
import _g from "./module-xY_24.js";
const _g_toArray = _g.toArray;
const y = p("asyncIterator");
const b = o(h("Array").values);
const m = o(b([]).next);
const A = function () {
  return new x(this);
};
var x = function (t) {
  this.iterator = b(t);
};
x.prototype.next = function () {
  return m(this.iterator);
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
    const b = p ? undefined : f(v) || A;
    const m = a(r) ? new r() : [];
    e(_g_toArray(p ? s(v, p) : new d(u(c(v, b))), o, m));
  });
}
