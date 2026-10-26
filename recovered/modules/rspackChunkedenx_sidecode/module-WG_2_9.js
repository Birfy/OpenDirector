import n from "./module-Yj_9.js";
import o from "./module-vo_9.js";
import i from "./module-m_10.js";
const a = n(n.bind);
export default function (t, e) {
  o(t);
  if (e === undefined) {
    return t;
  }
  if (i) {
    return a(t, e);
  }
  return function () {
    return t.apply(e, arguments);
  };
}
