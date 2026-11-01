import n from "./module-WH_11.js";
import o from "./module-Md_11.js";
export default n(ArrayBuffer.prototype, "byteLength", "get") ||
  function (r) {
    if (o(r) !== "ArrayBuffer") {
      throw TypeError("ArrayBuffer expected");
    }
    return r.byteLength;
  };
