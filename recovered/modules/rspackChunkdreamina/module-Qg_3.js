import n from "./module-o.js";
import o from "./module-L_2.js";
import i from "./module-BC_2.js";
import a from "./module-AU_3.js";
import s from "./module-H_2.js";
const u = n(a);
const c = n("".slice);
const l = (e) =>
  function (t, r, n) {
    let a;
    let l;
    const p = i(s(t));
    const h = o(r);
    const p_length = p.length;
    const d = n === undefined ? " " : i(n);
    if (h <= p_length || d === "") {
      return p;
    }
    if ((l = u(d, Math.ceil((a = h - p_length) / d.length))).length > a) {
      l = c(l, 0, a);
    }
    if (e) {
      return p + l;
    }
    return l + p;
  };
export default {
  start: l(false),
  end: l(true),
};
