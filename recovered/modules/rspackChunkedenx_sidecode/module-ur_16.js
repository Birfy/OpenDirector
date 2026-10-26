import n from "./module-WH_15.js";
import o from "./module-Md_15.js";
export default n(ArrayBuffer.prototype, "byteLength", "get") ||
  function (r) {
    if (o(r) !== "ArrayBuffer") {
      throw TypeError("ArrayBuffer expected");
    }
    return r.byteLength;
  };
