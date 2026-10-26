import n from "./module-A.js";
import o from "./module-O9.js";
import i from "./module-vo.js";
import a from "./module-F.js";
import s from "./module-i1.js";
import u from "./module-He.js";
import c from "./module-mS.js";
const h = o(u("Array").sort);
n(
  {
    target: "Array",
    proto: true,
  },
  {
    toSorted: function (t) {
      if (t !== undefined) {
        i(t);
      }
      return h(s(Array, a(this)), t);
    },
  },
);
c("toSorted");
