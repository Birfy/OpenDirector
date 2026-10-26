import n from "./module-A_9.js";
import i from "./module-O9_8.js";
import o from "./module-vo_8.js";
import s from "./module-F_9.js";
import a from "./module-i1_8.js";
import u from "./module-He_8.js";
import c from "./module-mS_9.js";
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
