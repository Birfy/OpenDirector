import n from "./module-vo_19.js";
import o from "./module-d_20.js";
import i from "./module-M_2_19.js";
import a from "./module-V6_20.js";
import s from "./module-NK_19.js";
const u = "Invalid size";
const h = function (r, t, e, n) {
  this.set = r;
  this.size = t;
  this.has = e;
  this.keys = n;
};
h.prototype = {
  getIterator: function () {
    return s(o(i(this.keys, this.set)));
  },
  includes: function (r) {
    return i(this.has, this.set, r);
  },
};
export default function (r) {
  o(r);
  const t = +r.size;
  if (t != t) {
    throw TypeError(u);
  }
  const e = a(t);
  if (e < 0) {
    throw RangeError(u);
  }
  return new h(r, Math.max(e, 0), n(r.has), n(r.keys));
}
