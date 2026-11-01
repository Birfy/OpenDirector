import n from "./module-WH_19.js";
import o from "./module-Md_19.js";
export default n(ArrayBuffer.prototype, "byteLength", "get") ||
  function (r) {
    if (o(r) !== "ArrayBuffer") {
      throw TypeError("ArrayBuffer expected");
    }
    return r.byteLength;
  };
