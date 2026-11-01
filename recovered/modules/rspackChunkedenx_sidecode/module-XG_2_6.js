import n from "./module-r9_6.js";
import o from "./module-X_7.js";
import a from "./module-xv_6.js";
export default !n &&
  !o(function () {
    return (
      Object.defineProperty(a("div"), "a", {
        get: function () {
          return 7;
        },
      }).a !== 7
    );
  });
