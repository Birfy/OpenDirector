import n from "./module-vo.js";
import o from "./module-d.js";
import i from "./module-M_2.js";
import a from "./module-V6.js";
import s from "./module-NK.js";
const u = "Invalid size";
const l = function (t, r, e, n) {
  this.set = t;
  this.size = r;
  this.has = e;
  this.keys = n;
};
l.prototype = {
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
  return new l(t, Math.max(e, 0), n(t.has), n(t.keys));
}
