import n from "./module-vo_6.js";
const a = function (t) {
  let r;
  let e;
  this.promise = new t(function (t, n) {
    if (r !== undefined || e !== undefined) {
      throw TypeError("Bad Promise constructor");
    }
    r = t;
    e = n;
  });
  this.resolve = n(r);
  this.reject = n(e);
};
export const f = function (t) {
  return new a(t);
};
