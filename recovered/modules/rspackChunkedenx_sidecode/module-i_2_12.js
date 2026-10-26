import $ from "./module-YR_12.js";
import tt from "./module-Y_13.js";
import te from "./module-e_12.js";
import tr from "./module-x_2_12.js";
export default tr
  ? function (J) {
      return typeof J === "symbol";
    }
  : function (J) {
      const Z = $("Symbol");
      return tt(Z) && te(Z.prototype, Object(J));
    };
