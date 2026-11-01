import n from "./module-X.js";
import o from "./module-y_2.js";
import i from "./module-Md.js";
import a from "./module-QY.js";
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
