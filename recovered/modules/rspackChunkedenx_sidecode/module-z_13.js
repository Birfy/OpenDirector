import $ from "./module-M_2_12.js";
import tt from "./module-Y_13.js";
import te from "./module-y_2_12.js";
export default function (J, Z) {
  let Q;
  let tn;
  if (
    (Z === "string" && tt((Q = J.toString)) && !te((tn = $(Q, J)))) ||
    (tt((Q = J.valueOf)) && !te((tn = $(Q, J)))) ||
    (Z !== "string" && tt((Q = J.toString)) && !te((tn = $(Q, J))))
  ) {
    return tn;
  }
  throw TypeError("Can't convert object to primitive value");
}
