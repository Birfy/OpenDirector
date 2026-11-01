import n from "./module-Yj_16.js";
import o from "./module-vo_16.js";
import i from "./module-m_17.js";
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
