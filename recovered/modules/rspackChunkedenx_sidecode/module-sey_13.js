import n from "./module-WG_2_13.js";
import o from "./module-O9_13.js";
import i from "./module-aq_13.js";
import a from "./module-yM_14.js";
import s from "./module-NF_13.js";
import u from "./module-wz_14.js";
import c from "./module-NK_13.js";
import f from "./module-Qn_14.js";
import h from "./module-C_14.js";
import l from "./module-He_13.js";
import v from "./module-YR_13.js";
import p from "./module-lN_13.js";
import d from "./module-xsY_13.js";
import _g from "./module-xY_14.js";
const _g_toArray = _g.toArray;
const y = p("asyncIterator");
const b = o(l("Array").values);
const m = o(b([]).next);
const A = function () {
  return new x(this);
};
var x = function (r) {
  this.iterator = b(r);
};
x.prototype.next = function () {
  return m(this.iterator);
};
export default function (r) {
  const t = this;
  const arguments_length = arguments.length;
  let o = arguments_length > 1 ? arguments[1] : undefined;
  const l = arguments_length > 2 ? arguments[2] : undefined;
  return new (v("Promise"))(function (e) {
    const v = i(r);
    if (o !== undefined) {
      o = n(o, l);
    }
    const p = h(v, y);
    const b = p ? undefined : f(v) || A;
    const m = a(t) ? new t() : [];
    e(_g_toArray(p ? s(v, p) : new d(c(u(v, b))), o, m));
  });
}
