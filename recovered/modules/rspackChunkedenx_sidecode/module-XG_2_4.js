import n from "./module-r9_4.js";
import i from "./module-X_5.js";
import o from "./module-xv_4.js";
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
