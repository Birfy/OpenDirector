import n from "./module-A_11.js";
import o from "./module-O9_10.js";
import i from "./module-vo_10.js";
import a from "./module-F_11.js";
import s from "./module-i1_10.js";
import u from "./module-He_10.js";
import c from "./module-mS_11.js";
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
