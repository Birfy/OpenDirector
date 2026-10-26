import $ from "./module-r9_12.js";
import tt from "./module-X_13.js";
export default $ &&
  tt(function () {
    return (
      Object.defineProperty(function () {}, "prototype", {
        value: 42,
        writable: false,
      }).prototype !== 42
    );
  });
