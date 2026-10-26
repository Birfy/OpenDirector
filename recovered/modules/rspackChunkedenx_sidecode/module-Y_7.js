import n from "./module-u_7.js";
const n_all = n.all;
export default n.IS_HTMLDDA
  ? function (t) {
      return typeof t === "function" || t === n_all;
    }
  : function (t) {
      return typeof t === "function";
    };
