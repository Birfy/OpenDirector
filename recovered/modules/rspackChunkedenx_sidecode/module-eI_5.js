import n from "./module-O9_4.js";
import i from "./module-dV_4.js";
import o from "./module-ng_5.js";
import s from "./module-KM_4.js";
import a from "./module-vj_5.js";
const u = n(s);
const c = n("".slice);
const h = (t) =>
  function (r, e, n) {
    let s;
    let h;
    const l = o(a(r));
    const v = i(e);
    const l_length = l.length;
    const d = n === undefined ? " " : o(n);
    if (v <= l_length || d === "") {
      return l;
    }
    if ((h = u(d, Math.ceil((s = v - l_length) / d.length))).length > s) {
      h = c(h, 0, s);
    }
    if (t) {
      return l + h;
    }
    return h + l;
  };
export default {
  start: h(false),
  end: h(true),
};
