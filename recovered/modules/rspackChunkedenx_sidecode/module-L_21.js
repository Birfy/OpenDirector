import n from "./module-r9_21.js";
import i from "./module-X_22.js";
export default n &&
  i(function () {
    return (
      Object.defineProperty(function () {}, "prototype", {
        value: 42,
        writable: false,
      }).prototype !== 42
    );
  });
