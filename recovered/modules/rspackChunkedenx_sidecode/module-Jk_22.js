import n from "./module-A_23.js";
import i from "./module-d_23.js";
import o from "./module-xK_22.js";
import s from "./module-NK_22.js";
const push = [].push;
n(
  {
    target: "Iterator",
    proto: true,
    real: true,
  },
  {
    toArray: function () {
      const that = [];
      o(s(i(this)), push, {
        that,
        IS_RECORD: true,
      });
      return that;
    },
  },
);
