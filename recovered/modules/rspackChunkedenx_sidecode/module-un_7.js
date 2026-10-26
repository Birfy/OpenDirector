import n from "./module-A_8.js";
import o from "./module-O9_7.js";
import i from "./module-vo_7.js";
import a from "./module-F_8.js";
import s from "./module-i1_7.js";
import u from "./module-He_7.js";
import c from "./module-mS_8.js";
const l = o(u("Array").sort);
n(
  {
    target: "Array",
    proto: true,
  },
  {
    toSorted: function (r) {
      if (r !== undefined) {
        i(r);
      }
      return l(s(Array, a(this)), r);
    },
  },
);
c("toSorted");
