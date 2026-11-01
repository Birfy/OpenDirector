import $ from "./module-X_13.js";
import tt from "./module-Y_13.js";
const te = /#|\.prototype\./;
const tr = function (J, Z) {
  const Q = ti[tn(J)];
  return Q === ta || (Q !== to && (tt(Z) ? $(Z) : !!Z));
};
var tn = (tr.normalize = function (J) {
  return String(J).replace(te, ".").toLowerCase();
});
var ti = (tr.data = {});
var to = (tr.NATIVE = "N");
var ta = (tr.POLYFILL = "P");
export default tr;
