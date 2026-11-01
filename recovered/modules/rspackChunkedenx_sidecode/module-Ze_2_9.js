import n from "./module-X_10.js";
import o from "./module-Y_10.js";
const i = /#|\.prototype\./;
const a = function (t, e) {
  const r = u[s(t)];
  return r === f || (r !== c && (o(e) ? n(e) : !!e));
};
var s = (a.normalize = function (t) {
  return String(t).replace(i, ".").toLowerCase();
});
var u = (a.data = {});
var c = (a.NATIVE = "N");
var f = (a.POLYFILL = "P");
export default a;
