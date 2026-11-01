import n from "./module-X_7.js";
import o from "./module-y_2_6.js";
import a from "./module-Md_6.js";
import i from "./module-QY_6.js";
export default n(function () {
  Object.isExtensible(1);
}) || i
  ? function (t) {
      return (
        !!o(t) &&
        (!i || a(t) !== "ArrayBuffer") &&
        (!Object.isExtensible || Object.isExtensible(t))
      );
    }
  : Object.isExtensible;
