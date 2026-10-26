import n from "./module-r9_8.js";
import i from "./module-X_9.js";
export default n &&
  i(function () {
    return (
      Object.defineProperty(function () {}, "prototype", {
        value: 42,
        writable: false,
      }).prototype !== 42
    );
  });
