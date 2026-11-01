import n from "./module-WH_23.js";
import o from "./module-Md_23.js";
export default n(ArrayBuffer.prototype, "byteLength", "get") ||
  function (t) {
    if (o(t) !== "ArrayBuffer") {
      throw TypeError("ArrayBuffer expected");
    }
    return t.byteLength;
  };
