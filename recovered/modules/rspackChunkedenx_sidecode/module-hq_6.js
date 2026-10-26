import n from "./module-r9_5.js";
import i from "./module-EV_6.js";
export default n &&
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
  ? function (t, r) {
      if (i(t) && !Object.getOwnPropertyDescriptor(t, "length").writable) {
        throw TypeError("Cannot set read only .length");
      }
      return (t.length = r);
    }
  : function (t, r) {
      return (t.length = r);
    };
