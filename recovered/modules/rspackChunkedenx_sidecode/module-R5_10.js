import n from "./module-vo_10.js";
import o from "./module-d_11.js";
import i from "./module-M_2_10.js";
import a from "./module-V6_11.js";
import s from "./module-NK_10.js";
const u = "Invalid size";
const h = function (t, r, e, n) {
  this.set = t;
  this.size = r;
  this.has = e;
  this.keys = n;
};
h.prototype = {
  getIterator: function () {
    return s(o(i(this.keys, this.set)));
  },
  includes: function (t) {
    return i(this.has, this.set, t);
  },
};
export default function (t) {
  o(t);
  const r = +t.size;
  if (r != r) {
    throw TypeError(u);
  }
  const e = a(r);
  if (e < 0) {
    throw RangeError(u);
  }
  return new h(t, Math.max(e, 0), n(t.has), n(t.keys));
}
