import n from "./module-Yj_6.js";
import o from "./module-vo_6.js";
import a from "./module-m_7.js";
const i = n(n.bind);
export default function (t, r) {
  o(t);
  if (r === undefined) {
    return t;
  }
  if (a) {
    return i(t, r);
  }
  return function () {
    return t.apply(r, arguments);
  };
}
