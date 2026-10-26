import n from "./module-r9_9.js";
import o from "./module-X_10.js";
import i from "./module-xv_9.js";
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
