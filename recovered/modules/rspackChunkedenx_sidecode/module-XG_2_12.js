import $ from "./module-r9_12.js";
import tt from "./module-X_13.js";
import te from "./module-xv_12.js";
export default !$ &&
  !tt(function () {
    return (
      Object.defineProperty(te("div"), "a", {
        get: function () {
          return 7;
        },
      }).a !== 7
    );
  });
