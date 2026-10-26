import n from "./module-O9.js";
import o from "./module-dV.js";
import i from "./module-ng.js";
import a from "./module-KM.js";
import s from "./module-vj.js";
const u = n(a);
const c = n("".slice);
const h = (t) =>
  function (r, e, n) {
    let a;
    let h;
    const l = i(s(r));
    const v = o(e);
    const l_length = l.length;
    const d = n === undefined ? " " : i(n);
    if (v <= l_length || d === "") {
      return l;
    }
    if ((h = u(d, Math.ceil((a = v - l_length) / d.length))).length > a) {
      h = c(h, 0, a);
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
