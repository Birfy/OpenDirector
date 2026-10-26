import n from "./module-O9_6.js";
import o from "./module-dV_6.js";
import a from "./module-ng_7.js";
import i from "./module-KM_6.js";
import s from "./module-vj_7.js";
const c = n(i);
const u = n("".slice);
const l = (t) =>
  function (r, e, n) {
    let i;
    let l;
    const h = a(s(r));
    const p = o(e);
    const h_length = h.length;
    const d = n === undefined ? " " : a(n);
    if (p <= h_length || d === "") {
      return h;
    }
    if ((l = c(d, Math.ceil((i = p - h_length) / d.length))).length > i) {
      l = u(l, 0, i);
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
