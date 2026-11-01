import n from "./module-r9_7.js";
import o from "./module-X_8.js";
import i from "./module-xv_7.js";
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
