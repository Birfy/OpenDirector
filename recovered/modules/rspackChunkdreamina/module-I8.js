import n from "./module-VV_4.js";
import o from "./module-r.js";
const i = /#|\.prototype\./;
const a = function (e, t) {
  const r = u[s(e)];
  return r === f || (r !== c && (o(t) ? n(t) : !!t));
};
var s = (a.normalize = function (e) {
  return String(e).replace(i, ".").toLowerCase();
});
var u = (a.data = {});
var c = (a.NATIVE = "N");
var f = (a.POLYFILL = "P");
export default a;
