import $ from "./module-d_13.js";
import tt from "./module-jX_13.js";
export default function (J, Z, Q, te) {
  try {
    if (te) {
      return Z($(Q)[0], Q[1]);
    }
    return Z(Q);
  } catch (error) {
    tt(J, "throw", error);
  }
}
