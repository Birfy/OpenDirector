import n from "./module-r9_19.js";
import o from "./module-X_20.js";
import i from "./module-xv_19.js";
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
