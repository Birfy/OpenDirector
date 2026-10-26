import n from "./module-r9_6.js";
import o from "./module-EV_7.js";
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
      if (o(t) && !Object.getOwnPropertyDescriptor(t, "length").writable) {
        throw TypeError("Cannot set read only .length");
      }
      return (t.length = r);
    }
  : function (t, r) {
      return (t.length = r);
    };
