import $ from "./module-r9_12.js";
import { f } from "./module-t_13.js";
import te from "./module-w_13.js";
export default $
  ? function (J, Z, Q) {
      return f(J, Z, te(1, Q));
    }
  : function (J, Z, Q) {
      J[Z] = Q;
      return J;
    };
