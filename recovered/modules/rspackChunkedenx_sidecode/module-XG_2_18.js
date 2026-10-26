import n from "./module-r9_18.js";
import o from "./module-X_19.js";
import i from "./module-xv_18.js";
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
