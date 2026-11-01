import n from "./module-vo_6.js";
import o from "./module-d_7.js";
import a from "./module-M_2_6.js";
import i from "./module-V6_7.js";
import s from "./module-NK_6.js";
const c = "Invalid size";
const h = function (t, r, e, n) {
  this.set = t;
  this.size = r;
  this.has = e;
  this.keys = n;
};
h.prototype = {
  getIterator: function () {
    return s(o(a(this.keys, this.set)));
  },
  includes: function (t) {
    return a(this.has, this.set, t);
  },
};
export default function (t) {
  o(t);
  const r = +t.size;
  if (r != r) {
    throw TypeError(c);
  }
  const e = i(r);
  if (e < 0) {
    throw RangeError(c);
  }
  return new h(t, Math.max(e, 0), n(t.has), n(t.keys));
}
