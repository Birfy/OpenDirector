import $ from "./module-j_2_12.js";
import tt from "./module-F4_13.js";
import te from "./module-er_12.js";
export default function (J, Z, Q) {
  const ti = tt(J);
  for (
    var to = $(Z, ti),
      ta = $(Q === undefined ? ti : Q, ti),
      ts = Array(Math.max(ta - to, 0)),
      tf = 0;
    to < ta;
    to++, tf++
  ) {
    te(ts, tf, J[to]);
  }
  ts.length = tf;
  return ts;
}
