import n from "./module-A_9.js";
import i from "./module-d_9.js";
import o from "./module-xK_8.js";
import s from "./module-NK_8.js";
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
