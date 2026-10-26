import n from "./module-r9_10.js";
import o from "./module-X_11.js";
import i from "./module-xv_10.js";
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
