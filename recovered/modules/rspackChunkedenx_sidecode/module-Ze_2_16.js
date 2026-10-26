import n from "./module-X_17.js";
import o from "./module-Y_17.js";
const i = /#|\.prototype\./;
const a = function (t, r) {
  const e = u[s(t)];
  return e === f || (e !== c && (o(r) ? n(r) : !!r));
};
var s = (a.normalize = function (t) {
  return String(t).replace(i, ".").toLowerCase();
});
var u = (a.data = {});
var c = (a.NATIVE = "N");
var f = (a.POLYFILL = "P");
export default a;
