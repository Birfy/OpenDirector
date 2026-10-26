import n from "./module-Y_11.js";
import o from "./module-u_11.js";
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
