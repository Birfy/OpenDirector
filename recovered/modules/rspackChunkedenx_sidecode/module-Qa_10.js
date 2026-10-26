import n from "./module-vo_9.js";
const i = function (t) {
  let e;
  let r;
  this.promise = new t(function (t, n) {
    if (e !== undefined || r !== undefined) {
      throw TypeError("Bad Promise constructor");
    }
    e = t;
    r = n;
  });
  this.resolve = n(e);
  this.reject = n(r);
};
export const f = function (t) {
  return new i(t);
};
