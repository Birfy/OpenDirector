import n from "./module-vo_23.js";
import o from "./module-d_24.js";
import i from "./module-M_2_23.js";
import a from "./module-V6_24.js";
import s from "./module-NK_23.js";
const c = "Invalid size";
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
    throw TypeError(c);
  }
  const e = a(r);
  if (e < 0) {
    throw RangeError(c);
  }
  return new h(t, Math.max(e, 0), n(t.has), n(t.keys));
}
