import n from "./module-r9_17.js";
import o from "./module-X_18.js";
import i from "./module-xv_17.js";
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
