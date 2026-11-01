import n from "./module-F.js";
import o from "./module-VV_4.js";
export default n &&
  o(function () {
    return (
      Object.defineProperty(function () {}, "prototype", {
        value: 42,
        writable: false,
      }).prototype !== 42
    );
  });
