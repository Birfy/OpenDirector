import n from "./module-WH_5.js";
import i from "./module-Md_5.js";
export default n(ArrayBuffer.prototype, "byteLength", "get") ||
  function (t) {
    if (i(t) !== "ArrayBuffer") {
      throw TypeError("ArrayBuffer expected");
    }
    return t.byteLength;
  };
