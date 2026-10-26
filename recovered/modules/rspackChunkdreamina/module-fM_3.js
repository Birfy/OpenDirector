import n from "./module-Kp.js";
import o from "./module-B.js";
import i from "./module-f_2.js";
const a = n(n.bind);
export default function (e, t) {
  o(e);
  if (t === undefined) {
    return e;
  }
  if (i) {
    return a(e, t);
  }
  return function () {
    return e.apply(t, arguments);
  };
}
