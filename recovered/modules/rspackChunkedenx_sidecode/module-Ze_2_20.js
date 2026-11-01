import n from "./module-X_21.js";
import o from "./module-Y_21.js";
const i = /#|\.prototype\./;
const a = function (t, r) {
  const e = c[s(t)];
  return e === f || (e !== u && (o(r) ? n(r) : !!r));
};
var s = (a.normalize = function (t) {
  return String(t).replace(i, ".").toLowerCase();
});
var c = (a.data = {});
var u = (a.NATIVE = "N");
var f = (a.POLYFILL = "P");
export default a;
