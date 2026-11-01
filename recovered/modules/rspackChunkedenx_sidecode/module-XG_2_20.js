import n from "./module-r9_20.js";
import o from "./module-X_21.js";
import i from "./module-xv_20.js";
export default !n &&
  !o(function () {
    return (
      Object.defineProperty(i("div"), "a", {
        get: function () {
          return 7;
        },
      }).a !== 7
    );
  });
