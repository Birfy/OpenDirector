import n from "./module-VV_4.js";
import o from "./module-N.js";
import i from "./module-C.js";
import a from "./module-Sk.js";
export default n(function () {
  Object.isExtensible(1);
}) || a
  ? function (e) {
      return (
        !!o(e) &&
        (!a || i(e) !== "ArrayBuffer") &&
        (!Object.isExtensible || Object.isExtensible(e))
      );
    }
  : Object.isExtensible;
