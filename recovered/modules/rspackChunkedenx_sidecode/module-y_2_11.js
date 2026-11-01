import n from "./module-Y_12.js";
import o from "./module-u_12.js";
const o_all = o.all;
export default o.IS_HTMLDDA
  ? function (r) {
      if (typeof r === "object") {
        return r !== null;
      }
      return n(r) || r === o_all;
    }
  : function (r) {
      if (typeof r === "object") {
        return r !== null;
      }
      return n(r);
    };
