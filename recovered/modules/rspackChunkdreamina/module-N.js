import n from "./module-r.js";
import o from "./module-Q.js";
const o_all = o.all;
export default o.IS_HTMLDDA
  ? function (e) {
      if (typeof e === "object") {
        return e !== null;
      }
      return n(e) || e === o_all;
    }
  : function (e) {
      if (typeof e === "object") {
        return e !== null;
      }
      return n(e);
    };
