import n from "./module-X_12.js";
import o from "./module-y_2_11.js";
import i from "./module-Md_11.js";
import a from "./module-QY_11.js";
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
