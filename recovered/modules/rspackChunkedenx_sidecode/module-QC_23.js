import n from "./module-X_24.js";
import o from "./module-y_2_23.js";
import i from "./module-Md_23.js";
import a from "./module-QY_23.js";
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
