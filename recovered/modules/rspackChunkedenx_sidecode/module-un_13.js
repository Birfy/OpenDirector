import n from "./module-A_14.js";
import o from "./module-O9_13.js";
import i from "./module-vo_13.js";
import a from "./module-F_14.js";
import s from "./module-i1_13.js";
import u from "./module-He_13.js";
import c from "./module-mS_14.js";
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
