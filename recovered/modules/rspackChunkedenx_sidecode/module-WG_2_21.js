import n from "./module-Yj_21.js";
import i from "./module-vo_21.js";
import o from "./module-m_22.js";
const s = n(n.bind);
export default function (t, r) {
  i(t);
  if (r === undefined) {
    return t;
  }
  if (o) {
    return s(t, r);
  }
  return function () {
    return t.apply(r, arguments);
  };
}
