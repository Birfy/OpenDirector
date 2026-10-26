import n from "./module-F.js";
import o from "./module-VV_4.js";
import i from "./module-nH_3.js";
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
