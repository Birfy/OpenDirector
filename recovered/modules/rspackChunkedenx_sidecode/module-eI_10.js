import n from "./module-O9_9.js";
import o from "./module-dV_9.js";
import i from "./module-ng_10.js";
import a from "./module-KM_9.js";
import s from "./module-vj_10.js";
const u = n(a);
const c = n("".slice);
const l = (t) =>
  function (e, r, n) {
    let a;
    let l;
    const h = i(s(e));
    const v = o(r);
    const h_length = h.length;
    const p = n === undefined ? " " : i(n);
    if (v <= h_length || p === "") {
      return h;
    }
    if ((l = u(p, Math.ceil((a = v - h_length) / p.length))).length > a) {
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
