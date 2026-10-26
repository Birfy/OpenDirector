import n from "./module-Yj_11.js";
import o from "./module-vo_11.js";
import i from "./module-m_12.js";
const a = n(n.bind);
export default function (r, t) {
  o(r);
  if (t === undefined) {
    return r;
  }
  if (i) {
    return a(r, t);
  }
  return function () {
    return r.apply(t, arguments);
  };
}
