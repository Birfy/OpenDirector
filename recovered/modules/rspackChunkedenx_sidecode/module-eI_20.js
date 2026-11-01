import n from "./module-O9_19.js";
import o from "./module-dV_19.js";
import i from "./module-ng_20.js";
import a from "./module-KM_19.js";
import s from "./module-vj_20.js";
const u = n(a);
const c = n("".slice);
const l = (r) =>
  function (t, e, n) {
    let a;
    let l;
    const h = i(s(t));
    const v = o(e);
    const h_length = h.length;
    const d = n === undefined ? " " : i(n);
    if (v <= h_length || d === "") {
      return h;
    }
    if ((l = u(d, Math.ceil((a = v - h_length) / d.length))).length > a) {
      l = c(l, 0, a);
    }
    if (r) {
      return h + l;
    }
    return l + h;
  };
export default {
  start: l(false),
  end: l(true),
};
