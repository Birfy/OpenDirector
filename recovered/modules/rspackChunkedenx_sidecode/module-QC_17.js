import n from "./module-X_18.js";
import o from "./module-y_2_17.js";
import i from "./module-Md_17.js";
import a from "./module-QY_17.js";
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
