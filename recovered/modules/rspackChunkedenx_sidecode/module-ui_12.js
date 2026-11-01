import $ from "./module-F4_13.js";
import tt from "./module-V6_13.js";
export default function (J, Z, Q, tr) {
  const tn = $(J);
  const ti = tt(Q);
  const to = ti < 0 ? tn + ti : ti;
  if (to >= tn || to < 0) {
    throw RangeError("Incorrect index");
  }
  const ta = new Z(tn);
  for (let ts = 0; ts < tn; ts++) {
    ta[ts] = ts === to ? tr : J[ts];
  }
  return ta;
}
