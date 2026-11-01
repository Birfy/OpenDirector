import $ from "./module-YR_12.js";
import tt from "./module-Y_13.js";
import te from "./module-ec_12.js";
import tr from "./module-y_2_12.js";
const tn = $("Set");
export default function (J) {
  if (tr(J) && typeof J.size === "number" && tt(J.has) && tt(J.keys)) {
    return J;
  }
  if (te(J)) {
    return new tn(J);
  }
  return J;
}
