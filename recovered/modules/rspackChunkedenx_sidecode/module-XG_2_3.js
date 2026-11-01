import n from "./module-r9_3.js";
import i from "./module-X_4.js";
import o from "./module-xv_3.js";
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
