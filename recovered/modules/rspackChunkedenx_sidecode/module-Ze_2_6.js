import n from "./module-X_7.js";
import o from "./module-Y_7.js";
const a = /#|\.prototype\./;
const i = function (t, r) {
  const e = c[s(t)];
  return e === f || (e !== u && (o(r) ? n(r) : !!r));
};
var s = (i.normalize = function (t) {
  return String(t).replace(a, ".").toLowerCase();
});
var c = (i.data = {});
var u = (i.NATIVE = "N");
var f = (i.POLYFILL = "P");
export default i;
