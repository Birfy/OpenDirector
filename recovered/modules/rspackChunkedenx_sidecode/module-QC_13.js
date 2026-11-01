import n from "./module-X_14.js";
import o from "./module-y_2_13.js";
import i from "./module-Md_13.js";
import a from "./module-QY_13.js";
export default n(function () {
  Object.isExtensible(1);
}) || a
  ? function (r) {
      return (
        !!o(r) &&
        (!a || i(r) !== "ArrayBuffer") &&
        (!Object.isExtensible || Object.isExtensible(r))
      );
    }
  : Object.isExtensible;
