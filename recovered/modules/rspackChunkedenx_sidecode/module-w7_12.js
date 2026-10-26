import $ from "./module-M_2_12.js";
import tt from "./module-Y_13.js";
import te from "./module-d_13.js";
import tr from "./module-NK_2_2.js";
import tn from "./module-Qn_13.js";
import ti from "./module-C_13.js";
import to from "./module-lN_12.js";
import ta from "./module-xsY_12.js";
const ts = to("asyncIterator");
export default function (J) {
  let Z;
  const Q = te(J);
  let to = true;
  let tf = ti(Q, ts);
  if (!tt(tf)) {
    tf = tn(Q);
    to = false;
  }
  if (tf !== undefined) {
    Z = $(tf, Q);
  } else {
    Z = Q;
    to = true;
  }
  te(Z);
  return tr(to ? Z : new ta(tr(Z)));
}
