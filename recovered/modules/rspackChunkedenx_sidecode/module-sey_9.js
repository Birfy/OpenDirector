import n from "./module-WG_2_9.js";
import o from "./module-O9_9.js";
import i from "./module-aq_9.js";
import a from "./module-yM_10.js";
import s from "./module-NF_9.js";
import u from "./module-wz_10.js";
import c from "./module-NK_9.js";
import f from "./module-Qn_10.js";
import l from "./module-C_10.js";
import h from "./module-He_9.js";
import v from "./module-YR_9.js";
import d from "./module-lN_9.js";
import p from "./module-xsY_9.js";
import _g from "./module-xY_10.js";
const _g_toArray = _g.toArray;
const y = d("asyncIterator");
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
  const e = this;
  const arguments_length = arguments.length;
  let o = arguments_length > 1 ? arguments[1] : undefined;
  const h = arguments_length > 2 ? arguments[2] : undefined;
  return new (v("Promise"))(function (r) {
    const v = i(t);
    if (o !== undefined) {
      o = n(o, h);
    }
    const d = l(v, y);
    const m = d ? undefined : f(v) || w;
    const b = a(e) ? new e() : [];
    r(_g_toArray(d ? s(v, d) : new p(c(u(v, m))), o, b));
  });
}
