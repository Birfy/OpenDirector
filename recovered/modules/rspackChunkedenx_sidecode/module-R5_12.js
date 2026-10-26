import $ from "./module-vo_12.js";
import tt from "./module-d_13.js";
import te from "./module-M_2_12.js";
import tr from "./module-V6_13.js";
import tn from "./module-NK_2_2.js";
const ti = "Invalid size";
const tf = function (J, Z, Q, $) {
  this.set = J;
  this.size = Z;
  this.has = Q;
  this.keys = $;
};
tf.prototype = {
  getIterator: function () {
    return tn(tt(te(this.keys, this.set)));
  },
  includes: function (J) {
    return te(this.has, this.set, J);
  },
};
export default function (J) {
  tt(J);
  const Z = +J.size;
  if (Z != Z) {
    throw TypeError(ti);
  }
  const Q = tr(Z);
  if (Q < 0) {
    throw RangeError(ti);
  }
  return new tf(J, Math.max(Q, 0), $(J.has), $(J.keys));
}
