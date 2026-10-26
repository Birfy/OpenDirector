import n from "./module-r9_22.js";
import i from "./module-X_23.js";
import o from "./module-xv_22.js";
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
