import n from "./module-r9_6.js";
import o from "./module-X_7.js";
export default n &&
  o(function () {
    return (
      Object.defineProperty(function () {}, "prototype", {
        value: 42,
        writable: false,
      }).prototype !== 42
    );
  });
