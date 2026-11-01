import n from "./module-A_6.js";
import i from "./module-O9_5.js";
import o from "./module-vo_5.js";
import s from "./module-F_6.js";
import a from "./module-i1_5.js";
import u from "./module-He_5.js";
import c from "./module-mS_6.js";
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
