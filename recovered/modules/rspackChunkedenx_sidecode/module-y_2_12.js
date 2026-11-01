import $ from "./module-Y_13.js";
import tt from "./module-u_13.js";
const tt_all = tt.all;
export default tt.IS_HTMLDDA
  ? function (J) {
      if (typeof J === "object") {
        return J !== null;
      }
      return $(J) || J === tt_all;
    }
  : function (J) {
      if (typeof J === "object") {
        return J !== null;
      }
      return $(J);
    };
