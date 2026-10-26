import n from "./module-r9_20.js";
import o from "./module-X_21.js";
export default n &&
  o(function () {
    return (
      Object.defineProperty(function () {}, "prototype", {
        value: 42,
        writable: false,
      }).prototype !== 42
    );
  });
