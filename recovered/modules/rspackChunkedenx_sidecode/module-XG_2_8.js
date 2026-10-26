import n from "./module-r9_8.js";
import i from "./module-X_9.js";
import o from "./module-xv_8.js";
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
