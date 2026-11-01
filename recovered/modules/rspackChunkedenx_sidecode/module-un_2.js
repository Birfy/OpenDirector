import n from "./module-A_3.js";
import i from "./module-O9_2.js";
import o from "./module-vo_2.js";
import s from "./module-F_3.js";
import a from "./module-i1_2.js";
import u from "./module-He_2.js";
import c from "./module-mS_3.js";
const h = i(u("Array").sort);
n(
  {
    target: "Array",
    proto: true,
  },
  {
    toSorted: function (t) {
      if (t !== undefined) {
        o(t);
      }
      return h(a(Array, s(this)), t);
    },
  },
);
c("toSorted");
