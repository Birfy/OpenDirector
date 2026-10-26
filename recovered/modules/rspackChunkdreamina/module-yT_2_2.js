import n from "./module-g.js";
import o from "./module-o.js";
import i from "./module-B.js";
import a from "./module-MR.js";
import s from "./module-z1_2.js";
import u from "./module-x5_2.js";
import c from "./module-Yz_2.js";
const l = o(u("Array").sort);
n(
  {
    target: "Array",
    proto: true,
  },
  {
    toSorted: function (e) {
      if (e !== undefined) {
        i(e);
      }
      return l(s(Array, a(this)), e);
    },
  },
);
c("toSorted");
