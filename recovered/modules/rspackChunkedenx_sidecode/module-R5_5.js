import n from "./module-vo_5.js";
import i from "./module-d_6.js";
import o from "./module-M_2_5.js";
import s from "./module-V6_6.js";
import a from "./module-NK_5.js";
const u = "Invalid size";
const l = function (t, r, e, n) {
  this.set = t;
  this.size = r;
  this.has = e;
  this.keys = n;
};
l.prototype = {
  getIterator: function () {
    return a(i(o(this.keys, this.set)));
  },
  includes: function (t) {
    return o(this.has, this.set, t);
  },
};
export default function (t) {
  i(t);
  const r = +t.size;
  if (r != r) {
    throw TypeError(u);
  }
  const e = s(r);
  if (e < 0) {
    throw RangeError(u);
  }
  return new l(t, Math.max(e, 0), n(t.has), n(t.keys));
}
