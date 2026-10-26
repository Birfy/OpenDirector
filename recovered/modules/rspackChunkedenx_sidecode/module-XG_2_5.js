import n from "./module-r9_5.js";
import i from "./module-X_6.js";
import o from "./module-xv_5.js";
export default !n &&
  !i(function () {
    return (
      Object.defineProperty(o("div"), "a", {
        get: function () {
          return 7;
        },
      }).a !== 7
    );
  });
