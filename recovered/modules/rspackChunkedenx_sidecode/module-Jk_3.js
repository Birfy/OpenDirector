import n from "./module-A_4.js";
import i from "./module-d_4.js";
import o from "./module-xK_3.js";
import s from "./module-NK_3.js";
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
