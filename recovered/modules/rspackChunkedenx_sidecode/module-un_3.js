import n from "./module-A_4.js";
import i from "./module-O9_3.js";
import o from "./module-vo_3.js";
import s from "./module-F_4.js";
import a from "./module-i1_3.js";
import u from "./module-He_3.js";
import c from "./module-mS_4.js";
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
