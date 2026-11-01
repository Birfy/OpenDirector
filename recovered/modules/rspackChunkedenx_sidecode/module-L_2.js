import n from "./module-r9_2.js";
import i from "./module-X_3.js";
export default n &&
  i(function () {
    return (
      Object.defineProperty(function () {}, "prototype", {
        value: 42,
        writable: false,
      }).prototype !== 42
    );
  });
