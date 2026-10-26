import $ from "./module-vo_12.js";
import tt from "./module-aq_12.js";
import te from "./module-Q_13.js";
import tr from "./module-F4_13.js";
const ti = (J) =>
  function (Z, Q, ti, to) {
    $(Q);
    const ta = tt(Z);
    const ts = te(ta);
    const tf = tr(ta);
    let tu = J ? tf - 1 : 0;
    const tc = J ? -1 : 1;
    if (ti < 2) {
      while (true) {
        if (tu in ts) {
          to = ts[tu];
          tu += tc;
          break;
        }
        tu += tc;
        if (J ? tu < 0 : tf <= tu) {
          throw TypeError("Reduce of empty array with no initial value");
        }
      }
    }
    for (; J ? tu >= 0 : tf > tu; tu += tc) {
      if (tu in ts) {
        to = Q(to, ts[tu], tu, ta);
      }
    }
    return to;
  };
export default {
  left: ti(false),
  right: ti(true),
};
