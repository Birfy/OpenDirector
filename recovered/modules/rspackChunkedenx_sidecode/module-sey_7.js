import n from "./module-WG_2_7.js";
import o from "./module-O9_7.js";
import i from "./module-aq_7.js";
import a from "./module-yM_8.js";
import s from "./module-NF_7.js";
import u from "./module-wz_8.js";
import c from "./module-NK_7.js";
import f from "./module-Qn_8.js";
import l from "./module-C_8.js";
import h from "./module-He_7.js";
import v from "./module-YR_7.js";
import p from "./module-lN_7.js";
import d from "./module-xsY_7.js";
import _g from "./module-xY_8.js";
const _g_toArray = _g.toArray;
const y = p("asyncIterator");
const m = o(h("Array").values);
const b = o(m([]).next);
const A = function () {
  return new w(this);
};
var w = function (r) {
  this.iterator = m(r);
};
w.prototype.next = function () {
  return b(this.iterator);
};
export default function (r) {
  const t = this;
  const arguments_length = arguments.length;
  let o = arguments_length > 1 ? arguments[1] : undefined;
  const h = arguments_length > 2 ? arguments[2] : undefined;
  return new (v("Promise"))(function (e) {
    const v = i(r);
    if (o !== undefined) {
      o = n(o, h);
    }
    const p = l(v, y);
    const m = p ? undefined : f(v) || A;
    const b = a(t) ? new t() : [];
    e(_g_toArray(p ? s(v, p) : new d(c(u(v, m))), o, b));
  });
}
