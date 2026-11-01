import n from "./module-B.js";
const i = function (e) {
  let t;
  let r;
  this.promise = new e(function (e, n) {
    if (t !== undefined || r !== undefined) {
      throw TypeError("Bad Promise constructor");
    }
    t = e;
    r = n;
  });
  this.resolve = n(t);
  this.reject = n(r);
};
export const f = function (e) {
  return new i(e);
};
