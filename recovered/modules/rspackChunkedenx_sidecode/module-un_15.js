import n from "./module-A_16.js";
import o from "./module-O9_15.js";
import i from "./module-vo_15.js";
import a from "./module-F_16.js";
import s from "./module-i1_15.js";
import u from "./module-He_15.js";
import c from "./module-mS_16.js";
const h = o(u("Array").sort);
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
      return h(s(Array, a(this)), r);
    },
  },
);
c("toSorted");
