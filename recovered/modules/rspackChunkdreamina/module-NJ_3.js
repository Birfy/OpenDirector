import n from "./module-fM_3.js";
import o from "./module-o.js";
import i from "./module-O_2.js";
import a from "./module-c2.js";
import s from "./module-cw_3.js";
import u from "./module-jn_2.js";
import c from "./module-ju_2.js";
import f from "./module-UZ_3.js";
import l from "./module-T_2.js";
import p from "./module-x5_2.js";
import h from "./module-Y.js";
import v from "./module-Nt_3.js";
import d from "./module-zs_2.js";
import _g from "./module-kf_3.js";
const _g_toArray = _g.toArray;
const y = v("asyncIterator");
const m = o(p("Array").values);
const x = o(m([]).next);
const b = function () {
  return new w(this);
};
var w = function (e) {
  this.iterator = m(e);
};
w.prototype.next = function () {
  return x(this.iterator);
};
export default function (e) {
  const t = this;
  const arguments_length = arguments.length;
  let o = arguments_length > 1 ? arguments[1] : undefined;
  const p = arguments_length > 2 ? arguments[2] : undefined;
  return new (h("Promise"))(function (r) {
    const h = i(e);
    if (o !== undefined) {
      o = n(o, p);
    }
    const v = l(h, y);
    const m = v ? undefined : f(h) || b;
    const x = a(t) ? new t() : [];
    r(_g_toArray(v ? s(h, v) : new d(c(u(h, m))), o, x));
  });
}
