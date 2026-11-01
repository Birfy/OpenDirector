import n from "./module-X_16.js";
import o from "./module-y_2_15.js";
import i from "./module-Md_15.js";
import a from "./module-QY_15.js";
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
