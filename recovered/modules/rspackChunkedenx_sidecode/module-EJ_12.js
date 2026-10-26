import $ from "./module-EV_13.js";
import tt from "./module-F4_13.js";
import te from "./module-MU_12.js";
import tr from "./module-WG_2_12.js";
const tn = function (J, Z, Q, ti, to, ta, ts, tf) {
  let tu;
  let tc;
  let th = to;
  for (let td = 0, tl = !!ts && tr(ts, tf); td < ti;) {
    if (td in Q) {
      tu = tl ? tl(Q[td], td, Z) : Q[td];
      if (ta > 0 && $(tu)) {
        tc = tt(tu);
        th = tn(J, Z, tu, tc, th, ta - 1) - 1;
      } else {
        te(th + 1);
        J[th] = tu;
      }
      th++;
    }
    td++;
  }
  return th;
};
export default tn;
