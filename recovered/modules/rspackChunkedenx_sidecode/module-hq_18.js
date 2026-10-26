import n from "./module-r9_17.js";
import o from "./module-EV_18.js";
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
  ? function (r, t) {
      if (o(r) && !Object.getOwnPropertyDescriptor(r, "length").writable) {
        throw TypeError("Cannot set read only .length");
      }
      return (r.length = t);
    }
  : function (r, t) {
      return (r.length = t);
    };
