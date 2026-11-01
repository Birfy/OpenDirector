import $ from "./module-WH_12.js";
import tt from "./module-Md_12.js";
export default $(ArrayBuffer.prototype, "byteLength", "get") ||
  function (J) {
    if (tt(J) !== "ArrayBuffer") {
      throw TypeError("ArrayBuffer expected");
    }
    return J.byteLength;
  };
