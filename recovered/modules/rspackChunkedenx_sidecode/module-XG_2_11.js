import n from "./module-r9_11.js";
import o from "./module-X_12.js";
import i from "./module-xv_11.js";
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
