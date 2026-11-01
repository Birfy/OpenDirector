import n from "./module-r9_9.js";
import o from "./module-EV_10.js";
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
  ? function (t, e) {
      if (o(t) && !Object.getOwnPropertyDescriptor(t, "length").writable) {
        throw TypeError("Cannot set read only .length");
      }
      return (t.length = e);
    }
  : function (t, e) {
      return (t.length = e);
    };
