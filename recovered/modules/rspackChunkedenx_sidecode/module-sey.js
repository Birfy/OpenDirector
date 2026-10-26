import n from "./module-WG_2.js";
import o from "./module-O9.js";
import i from "./module-aq.js";
import a from "./module-yM.js";
import s from "./module-NF.js";
import u from "./module-wz.js";
import c from "./module-NK.js";
import f from "./module-Qn.js";
import h from "./module-C.js";
import l from "./module-He.js";
import v from "./module-YR.js";
import p from "./module-lN.js";
import d from "./module-xsY.js";
import _g from "./module-xY.js";
const _g_toArray = _g.toArray;
const y = p("asyncIterator");
const b = o(l("Array").values);
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
  const l = arguments_length > 2 ? arguments[2] : undefined;
  return new (v("Promise"))(function (e) {
    const v = i(t);
    if (o !== undefined) {
      o = n(o, l);
    }
    const p = h(v, y);
    const b = p ? undefined : f(v) || A;
    const m = a(r) ? new r() : [];
    e(_g_toArray(p ? s(v, p) : new d(c(u(v, b))), o, m));
  });
}
