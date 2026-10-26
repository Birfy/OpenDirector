import n from "./module-u_8.js";
const n_all = n.all;
export default n.IS_HTMLDDA
  ? function (r) {
      return typeof r === "function" || r === n_all;
    }
  : function (r) {
      return typeof r === "function";
    };
