import n from "./module-WG_2_20.js";
import o from "./module-O9_20.js";
import i from "./module-aq_20.js";
import a from "./module-yM_21.js";
import s from "./module-NF_20.js";
import c from "./module-wz_21.js";
import u from "./module-NK_20.js";
import f from "./module-Qn_21.js";
import l from "./module-C_21.js";
import h from "./module-He_20.js";
import v from "./module-YR_20.js";
import p from "./module-lN_20.js";
import d from "./module-xsY_20.js";
import _g from "./module-xY_21.js";
const _g_toArray = _g.toArray;
const y = p("asyncIterator");
const m = o(h("Array").values);
const b = o(m([]).next);
const w = function () {
  return new A(this);
};
var A = function (t) {
  this.iterator = m(t);
};
A.prototype.next = function () {
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
    const m = p ? undefined : f(v) || w;
    const b = a(r) ? new r() : [];
    e(_g_toArray(p ? s(v, p) : new d(u(c(v, m))), o, b));
  });
}
