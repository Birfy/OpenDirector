import n from "./module-A_18.js";
import o from "./module-O9_17.js";
import i from "./module-vo_17.js";
import a from "./module-F_18.js";
import s from "./module-i1_17.js";
import u from "./module-He_17.js";
import c from "./module-mS_18.js";
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
