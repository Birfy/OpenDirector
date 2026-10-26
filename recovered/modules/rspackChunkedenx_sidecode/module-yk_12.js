import $ from "./module-WG_2_12.js";
import tt from "./module-Q_13.js";
import te from "./module-aq_12.js";
import tr from "./module-F4_13.js";
const tn = (J) => {
  const Z = J === 1;
  return function (Q, tn, ti) {
    let to;
    const ta = te(Q);
    const ts = tt(ta);
    const tf = $(tn, ti);
    for (let tu = tr(ts); tu-- > 0;) {
      if (tf((to = ts[tu]), tu, ta)) {
        switch (J) {
          case 0:
            return to;
          case 1:
            return tu;
        }
      }
    }
    if (Z) {
      return -1;
    }
  };
};
export default {
  findLast: tn(0),
  findLastIndex: tn(1),
};
