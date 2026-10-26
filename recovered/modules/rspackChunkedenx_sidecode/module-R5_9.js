import n from "./module-vo_9.js";
import o from "./module-d_10.js";
import i from "./module-M_2_9.js";
import a from "./module-V6_10.js";
import s from "./module-NK_9.js";
const u = "Invalid size";
const h = function (t, e, r, n) {
  this.set = t;
  this.size = e;
  this.has = r;
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
  const e = +t.size;
  if (e != e) {
    throw TypeError(u);
  }
  const r = a(e);
  if (r < 0) {
    throw RangeError(u);
  }
  return new h(t, Math.max(r, 0), n(t.has), n(t.keys));
}
