import n from "./module-WH.js";
import o from "./module-Md.js";
export default n(ArrayBuffer.prototype, "byteLength", "get") ||
  function (t) {
    if (o(t) !== "ArrayBuffer") {
      throw TypeError("ArrayBuffer expected");
    }
    return t.byteLength;
  };
