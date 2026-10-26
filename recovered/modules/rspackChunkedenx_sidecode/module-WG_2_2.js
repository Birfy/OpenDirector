import n from "./module-Yj_2.js";
import i from "./module-vo_2.js";
import o from "./module-m_3.js";
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
