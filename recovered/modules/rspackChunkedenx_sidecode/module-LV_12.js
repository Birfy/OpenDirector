import $ from "./module-h_13.js";
import tt from "./module-VQ_13.js";
import te from "./module-dF_13.js";
export default function (J, Z, Q, tn) {
  if (te) {
    if (Error.captureStackTrace) {
      Error.captureStackTrace(J, Z);
    } else {
      $(J, "stack", tt(Q, tn));
    }
  }
}
