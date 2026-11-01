import $ from "./module-M_2_12.js";
import tt from "./module-d_13.js";
import te from "./module-C_13.js";
export default function (J, Z, Q) {
  let tr;
  let tn;
  tt(J);
  try {
    if (!(tr = te(J, "return"))) {
      if (Z === "throw") {
        throw Q;
      }
      return Q;
    }
    tr = $(tr, J);
  } catch (error) {
    tn = true;
    tr = error;
  }
  if (Z === "throw") {
    throw Q;
  }
  if (tn) {
    throw tr;
  }
  tt(tr);
  return Q;
}
