import n from "./module-r9_23.js";
import o from "./module-X_24.js";
import i from "./module-xv_23.js";
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
