import n from "./module-vo_17.js";
import o from "./module-d_18.js";
import i from "./module-M_2_17.js";
import a from "./module-V6_18.js";
import s from "./module-NK_17.js";
const u = "Invalid size";
const l = function (r, t, e, n) {
  this.set = r;
  this.size = t;
  this.has = e;
  this.keys = n;
};
l.prototype = {
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
  return new l(r, Math.max(e, 0), n(r.has), n(r.keys));
}
