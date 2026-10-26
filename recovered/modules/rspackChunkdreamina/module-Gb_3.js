import n from "./module-B.js";
import o from "./module-IF_2.js";
import i from "./module-p3.js";
import a from "./module-Ok_2.js";
import s from "./module-ju_2.js";
const u = "Invalid size";
const p = function (e, t, r, n) {
  this.set = e;
  this.size = t;
  this.has = r;
  this.keys = n;
};
p.prototype = {
  getIterator: function () {
    return s(o(i(this.keys, this.set)));
  },
  includes: function (e) {
    return i(this.has, this.set, e);
  },
};
export default function (e) {
  o(e);
  const t = +e.size;
  if (t != t) {
    throw TypeError(u);
  }
  const r = a(t);
  if (r < 0) {
    throw RangeError(u);
  }
  return new p(e, Math.max(r, 0), n(e.has), n(e.keys));
}
