import n from "./module-O9_11.js";
import o from "./module-dV_11.js";
import i from "./module-ng_12.js";
import a from "./module-KM_11.js";
import s from "./module-vj_12.js";
const u = n(a);
const c = n("".slice);
const h = (r) =>
  function (t, e, n) {
    let a;
    let h;
    const l = i(s(t));
    const v = o(e);
    const l_length = l.length;
    const d = n === undefined ? " " : i(n);
    if (v <= l_length || d === "") {
      return l;
    }
    if ((h = u(d, Math.ceil((a = v - l_length) / d.length))).length > a) {
      h = c(h, 0, a);
    }
    if (r) {
      return l + h;
    }
    return h + l;
  };
export default {
  start: h(false),
  end: h(true),
};
