import n from "./module-Yj_7.js";
import o from "./module-vo_7.js";
import i from "./module-m_8.js";
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
