import n from "./module-WH_18.js";
import o from "./module-Md_18.js";
export default n(ArrayBuffer.prototype, "byteLength", "get") ||
  function (r) {
    if (o(r) !== "ArrayBuffer") {
      throw TypeError("ArrayBuffer expected");
    }
    return r.byteLength;
  };
