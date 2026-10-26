import $ from "./module-M_2_12.js";
import tt from "./module-D_2_12.js";
import te from "./module-e_12.js";
import tr from "./module-qN_2_12.js";
export default function (J) {
  const J_flags = J.flags;
  if (
    !(
      J_flags === undefined &&
      !("flags" in RegExp.prototype) &&
      !tt(J, "flags") &&
      te(RegExp.prototype, J)
    )
  ) {
    return J_flags;
  }
  return $(tr, J);
}
