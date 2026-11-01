import n from "./module-A_6.js";
import i from "./module-d_6.js";
import o from "./module-xK_5.js";
import s from "./module-NK_5.js";
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
