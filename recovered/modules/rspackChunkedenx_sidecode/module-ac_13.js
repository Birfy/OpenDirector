import $ from "./module-aq_12.js";
import tt from "./module-j_2_12.js";
import te from "./module-F4_13.js";
export default function (J) {
  const Z = $(this);
  const Q = te(Z);
  const arguments_length = arguments.length;
  for (
    let tn = tt(arguments_length > 1 ? arguments[1] : undefined, Q),
      ti = arguments_length > 2 ? arguments[2] : undefined,
      to = ti === undefined ? Q : tt(ti, Q);
    to > tn;
  ) {
    Z[tn++] = J;
  }
  return Z;
}
