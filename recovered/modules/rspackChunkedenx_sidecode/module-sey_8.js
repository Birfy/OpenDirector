import n from "./module-WG_2_8.js";
import i from "./module-O9_8.js";
import o from "./module-aq_8.js";
import s from "./module-yM_9.js";
import a from "./module-NF_8.js";
import u from "./module-wz_9.js";
import c from "./module-NK_8.js";
import f from "./module-Qn_9.js";
import h from "./module-C_9.js";
import l from "./module-He_8.js";
import v from "./module-YR_8.js";
import p from "./module-lN_8.js";
import d from "./module-xsY_8.js";
import _g from "./module-xY_9.js";
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
