import $ from "./module-F_13.js";
import tt from "./module-j_2_12.js";
import te from "./module-F4_13.js";
const tr = (J) =>
  function (Z, Q, tr) {
    let tn;
    const ti = $(Z);
    const to = te(ti);
    let ta = tt(tr, to);
    if (J && Q != Q) {
      while (to > ta) {
        if ((tn = ti[ta++]) != tn) {
          return true;
        }
      }
    } else {
      for (; to > ta; ta++) {
        if ((J || ta in ti) && ti[ta] === Q) {
          return J || ta || 0;
        }
      }
    }
    return !J && -1;
  };
export default {
  includes: tr(true),
  indexOf: tr(false),
};
