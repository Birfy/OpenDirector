import n from "./module-Y_5.js";
import i from "./module-u_5.js";
const i_all = i.all;
export default i.IS_HTMLDDA
  ? function (t) {
      if (typeof t === "object") {
        return t !== null;
      }
      return n(t) || t === i_all;
    }
  : function (t) {
      if (typeof t === "object") {
        return t !== null;
      }
      return n(t);
    };
