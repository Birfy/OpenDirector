import $ from "./module-vo_12.js";
const te = function (J) {
  let Z;
  let Q;
  this.promise = new J(function (J, $) {
    if (Z !== undefined || Q !== undefined) {
      throw TypeError("Bad Promise constructor");
    }
    Z = J;
    Q = $;
  });
  this.resolve = $(Z);
  this.reject = $(Q);
};
export const f = function (J) {
  return new te(J);
};
