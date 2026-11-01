import $ from "./module-u_13.js";
const $_all = $.all;
export default $.IS_HTMLDDA
  ? function (J) {
      return typeof J === "function" || J === $_all;
    }
  : function (J) {
      return typeof J === "function";
    };
