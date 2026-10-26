import $ from "./module-M_2_12.js";
import tt from "./module-d_13.js";
import te from "./module-Y_13.js";
import tr from "./module-Md_12.js";
import tn from "./module-X7_12.js";
export default function (J, Z) {
  const J_exec = J.exec;
  if (te(J_exec)) {
    const to = $(J_exec, J, Z);
    if (to !== null) {
      tt(to);
    }
    return to;
  }
  if (tr(J) === "RegExp") {
    return $(tn, J, Z);
  }
  throw TypeError("RegExp#exec called on incompatible receiver");
}
