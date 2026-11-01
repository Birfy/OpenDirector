import n from "./module-A_10.js";
import o from "./module-O9_9.js";
import i from "./module-vo_9.js";
import a from "./module-F_10.js";
import s from "./module-i1_9.js";
import u from "./module-He_9.js";
import c from "./module-mS_10.js";
const l = o(u("Array").sort);
n(
  {
    target: "Array",
    proto: true,
  },
  {
    toSorted: function (t) {
      if (t !== undefined) {
        i(t);
      }
      return l(s(Array, a(this)), t);
    },
  },
);
c("toSorted");
