import n from "./module-X_15.js";
import o from "./module-y_2_14.js";
import i from "./module-Md_14.js";
import a from "./module-QY_14.js";
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
