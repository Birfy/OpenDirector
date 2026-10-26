import n from "./module-X_8.js";
import o from "./module-y_2_7.js";
import i from "./module-Md_7.js";
import a from "./module-QY_7.js";
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
