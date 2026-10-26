import n from "./module-A_12.js";
import o from "./module-O9_11.js";
import i from "./module-vo_11.js";
import a from "./module-F_12.js";
import s from "./module-i1_11.js";
import u from "./module-He_11.js";
import c from "./module-mS_12.js";
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
