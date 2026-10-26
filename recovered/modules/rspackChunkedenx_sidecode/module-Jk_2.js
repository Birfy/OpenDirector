import n from "./module-A_3.js";
import i from "./module-d_3.js";
import o from "./module-xK_2.js";
import s from "./module-NK_2.js";
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
