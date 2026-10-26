import $ from "./module-Yj_12.js";
import tt from "./module-vo_12.js";
import te from "./module-m_13.js";
const tr = $($.bind);
export default function (J, Z) {
  tt(J);
  if (Z === undefined) {
    return J;
  }
  if (te) {
    return tr(J, Z);
  }
  return function () {
    return J.apply(Z, arguments);
  };
}
