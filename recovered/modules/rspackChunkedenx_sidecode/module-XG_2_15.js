import n from "./module-r9_15.js";
import o from "./module-X_16.js";
import i from "./module-xv_15.js";
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
