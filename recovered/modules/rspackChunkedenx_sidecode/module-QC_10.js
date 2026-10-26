import n from "./module-X_11.js";
import o from "./module-y_2_10.js";
import i from "./module-Md_10.js";
import a from "./module-QY_10.js";
export default n(function () {
  Object.isExtensible(1);
}) || a
  ? function (t) {
      return (
        !!o(t) &&
        (!a || i(t) !== "ArrayBuffer") &&
        (!Object.isExtensible || Object.isExtensible(t))
      );
    }
  : Object.isExtensible;
