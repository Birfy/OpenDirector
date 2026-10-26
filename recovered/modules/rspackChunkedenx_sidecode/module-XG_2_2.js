import n from "./module-r9_2.js";
import i from "./module-X_3.js";
import o from "./module-xv_2.js";
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
