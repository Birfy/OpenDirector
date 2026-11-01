import n from "./module-X_3.js";
import i from "./module-y_2_2.js";
import o from "./module-Md_2.js";
import s from "./module-QY_2.js";
export default n(function () {
  Object.isExtensible(1);
}) || s
  ? function (t) {
      return (
        !!i(t) &&
        (!s || o(t) !== "ArrayBuffer") &&
        (!Object.isExtensible || Object.isExtensible(t))
      );
    }
  : Object.isExtensible;
