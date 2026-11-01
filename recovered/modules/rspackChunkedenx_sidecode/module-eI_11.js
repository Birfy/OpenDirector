import n from "./module-O9_10.js";
import o from "./module-dV_10.js";
import i from "./module-ng_11.js";
import a from "./module-KM_10.js";
import s from "./module-vj_11.js";
const u = n(a);
const c = n("".slice);
const l = (t) =>
  function (r, e, n) {
    let a;
    let l;
    const h = i(s(r));
    const v = o(e);
    const h_length = h.length;
    const d = n === undefined ? " " : i(n);
    if (v <= h_length || d === "") {
      return h;
    }
    if ((l = u(d, Math.ceil((a = v - h_length) / d.length))).length > a) {
      l = c(l, 0, a);
    }
    if (t) {
      return h + l;
    }
    return l + h;
  };
export default {
  start: l(false),
  end: l(true),
};
