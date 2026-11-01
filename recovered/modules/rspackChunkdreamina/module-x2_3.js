import n from "./module-F.js";
import o from "./module-DN_2.js";
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
  ? function (e, t) {
      if (o(e) && !Object.getOwnPropertyDescriptor(e, "length").writable) {
        throw TypeError("Cannot set read only .length");
      }
      return (e.length = t);
    }
  : function (e, t) {
      return (e.length = t);
    };
