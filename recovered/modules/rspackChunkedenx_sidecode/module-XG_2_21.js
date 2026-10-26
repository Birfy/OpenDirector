import n from "./module-r9_21.js";
import i from "./module-X_22.js";
import o from "./module-xv_21.js";
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
