import n from "./module-X_14.js";
import o from "./module-Y_14.js";
const i = /#|\.prototype\./;
const a = function (r, t) {
  const e = u[s(r)];
  return e === f || (e !== c && (o(t) ? n(t) : !!t));
};
var s = (a.normalize = function (r) {
  return String(r).replace(i, ".").toLowerCase();
});
var u = (a.data = {});
var c = (a.NATIVE = "N");
var f = (a.POLYFILL = "P");
export default a;
