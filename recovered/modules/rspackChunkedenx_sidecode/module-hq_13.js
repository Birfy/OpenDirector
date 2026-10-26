import $ from "./module-r9_12.js";
import tt from "./module-EV_13.js";
export default $ &&
!(function () {
  if (this !== undefined) {
    return true;
  }
  try {
    Object.defineProperty([], "length", {
      writable: false,
    }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
})()
  ? function (J, Z) {
      if (tt(J) && !Object.getOwnPropertyDescriptor(J, "length").writable) {
        throw TypeError("Cannot set read only .length");
      }
      return (J.length = Z);
    }
  : function (J, Z) {
      return (J.length = Z);
    };
