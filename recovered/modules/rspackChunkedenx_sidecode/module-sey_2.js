import n from "./module-WG_2_2.js";
import i from "./module-O9_2.js";
import o from "./module-aq_2.js";
import s from "./module-yM_3.js";
import a from "./module-NF_2.js";
import u from "./module-wz_3.js";
import c from "./module-NK_2.js";
import f from "./module-Qn_3.js";
import h from "./module-C_3.js";
import l from "./module-He_2.js";
import v from "./module-YR_2.js";
import p from "./module-lN_2.js";
import d from "./module-xsY_2.js";
import _g from "./module-xY_3.js";
const _g_toArray = _g.toArray;
const y = p("asyncIterator");
const b = i(l("Array").values);
const m = i(b([]).next);
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
  let i = arguments_length > 1 ? arguments[1] : undefined;
  const l = arguments_length > 2 ? arguments[2] : undefined;
  return new (v("Promise"))(function (e) {
    const v = o(t);
    if (i !== undefined) {
      i = n(i, l);
    }
    const p = h(v, y);
    const b = p ? undefined : f(v) || A;
    const m = s(r) ? new r() : [];
    e(_g_toArray(p ? a(v, p) : new d(c(u(v, b))), i, m));
  });
}
