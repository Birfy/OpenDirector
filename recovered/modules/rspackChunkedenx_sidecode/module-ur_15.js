import n from "./module-WH_14.js";
import o from "./module-Md_14.js";
export default n(ArrayBuffer.prototype, "byteLength", "get") ||
  function (t) {
    if (o(t) !== "ArrayBuffer") {
      throw TypeError("ArrayBuffer expected");
    }
    return t.byteLength;
  };
