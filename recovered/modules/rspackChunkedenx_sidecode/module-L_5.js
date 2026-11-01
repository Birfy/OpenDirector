import n from "./module-r9_5.js";
import i from "./module-X_6.js";
export default n &&
  i(function () {
    return (
      Object.defineProperty(function () {}, "prototype", {
        value: 42,
        writable: false,
      }).prototype !== 42
    );
  });
