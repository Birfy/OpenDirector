import n from "./module-X_10.js";
import o from "./module-y_2_9.js";
import i from "./module-Md_9.js";
import a from "./module-QY_9.js";
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
