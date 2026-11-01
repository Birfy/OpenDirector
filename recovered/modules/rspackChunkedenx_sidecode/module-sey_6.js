import n from "./module-WG_2_6.js";
import o from "./module-O9_6.js";
import a from "./module-aq_6.js";
import i from "./module-yM_7.js";
import s from "./module-NF_6.js";
import c from "./module-wz_7.js";
import u from "./module-NK_6.js";
import f from "./module-Qn_7.js";
import l from "./module-C_7.js";
import h from "./module-He_6.js";
import p from "./module-YR_6.js";
import v from "./module-lN_6.js";
import d from "./module-xsY_6.js";
import _g from "./module-xY_7.js";
const _g_toArray = _g.toArray;
const y = v("asyncIterator");
const m = o(h("Array").values);
const b = o(m([]).next);
const A = function () {
  return new w(this);
};
var w = function (t) {
  this.iterator = m(t);
};
w.prototype.next = function () {
  return b(this.iterator);
};
export default function (t) {
  const r = this;
  const arguments_length = arguments.length;
  let o = arguments_length > 1 ? arguments[1] : undefined;
  const h = arguments_length > 2 ? arguments[2] : undefined;
  return new (p("Promise"))(function (e) {
    const p = a(t);
    if (o !== undefined) {
      o = n(o, h);
    }
    const v = l(p, y);
    const m = v ? undefined : f(p) || A;
    const b = i(r) ? new r() : [];
    e(_g_toArray(v ? s(p, v) : new d(u(c(p, m))), o, b));
  });
}
