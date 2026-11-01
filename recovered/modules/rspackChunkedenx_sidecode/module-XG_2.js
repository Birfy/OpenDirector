import n from "./module-r9.js";
import o from "./module-X.js";
import i from "./module-xv.js";
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
