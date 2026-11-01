import n from "./module-vo_7.js";
const i = function (r) {
  let t;
  let e;
  this.promise = new r(function (r, n) {
    if (t !== undefined || e !== undefined) {
      throw TypeError("Bad Promise constructor");
    }
    t = r;
    e = n;
  });
  this.resolve = n(t);
  this.reject = n(e);
};
export const f = function (r) {
  return new i(r);
};
