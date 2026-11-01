import n from "./module-J.js";
import o from "./module-C.js";
export default n(ArrayBuffer.prototype, "byteLength", "get") ||
  function (e) {
    if (o(e) !== "ArrayBuffer") {
      throw TypeError("ArrayBuffer expected");
    }
    return e.byteLength;
  };
