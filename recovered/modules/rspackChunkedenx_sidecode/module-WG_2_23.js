import n from "./module-Yj_23.js";
import o from "./module-vo_23.js";
import i from "./module-m_24.js";
const a = n(n.bind);
export default function (t, r) {
  o(t);
  if (r === undefined) {
    return t;
  }
  if (i) {
    return a(t, r);
  }
  return function () {
    return t.apply(r, arguments);
  };
}
