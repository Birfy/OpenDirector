import n from "./module-Y_15.js";
import o from "./module-u_15.js";
const o_all = o.all;
export default o.IS_HTMLDDA
  ? function (t) {
      if (typeof t === "object") {
        return t !== null;
      }
      return n(t) || t === o_all;
    }
  : function (t) {
      if (typeof t === "object") {
        return t !== null;
      }
      return n(t);
    };
