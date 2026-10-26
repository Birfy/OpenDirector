import n from "./module-X_23.js";
import i from "./module-Y_23.js";
const o = /#|\.prototype\./;
const s = function (t, r) {
  const e = u[a(t)];
  return e === f || (e !== c && (i(r) ? n(r) : !!r));
};
var a = (s.normalize = function (t) {
  return String(t).replace(o, ".").toLowerCase();
});
var u = (s.data = {});
var c = (s.NATIVE = "N");
var f = (s.POLYFILL = "P");
export default s;
