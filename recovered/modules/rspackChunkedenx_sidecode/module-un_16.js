import n from "./module-A_17.js";
import o from "./module-O9_16.js";
import i from "./module-vo_16.js";
import a from "./module-F_17.js";
import s from "./module-i1_16.js";
import u from "./module-He_16.js";
import c from "./module-mS_17.js";
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
