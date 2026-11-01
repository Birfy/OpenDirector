import n from "./module-A_20.js";
import o from "./module-O9_19.js";
import i from "./module-vo_19.js";
import a from "./module-F_20.js";
import s from "./module-i1_19.js";
import u from "./module-He_19.js";
import c from "./module-mS_20.js";
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
