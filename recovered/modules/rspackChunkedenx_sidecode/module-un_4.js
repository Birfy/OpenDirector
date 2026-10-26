import n from "./module-A_5.js";
import i from "./module-O9_4.js";
import o from "./module-vo_4.js";
import s from "./module-F_5.js";
import a from "./module-i1_4.js";
import u from "./module-He_4.js";
import c from "./module-mS_5.js";
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
