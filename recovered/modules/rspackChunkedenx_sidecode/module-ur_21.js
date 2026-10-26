import n from "./module-WH_20.js";
import o from "./module-Md_20.js";
export default n(ArrayBuffer.prototype, "byteLength", "get") ||
  function (t) {
    if (o(t) !== "ArrayBuffer") {
      throw TypeError("ArrayBuffer expected");
    }
    return t.byteLength;
  };
