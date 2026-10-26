import n from "./module-g.js";
import o from "./module-o.js";
import i from "./module-H_2.js";
import a from "./module-BC_2.js";
const s = o("".charCodeAt);
n(
  {
    target: "String",
    proto: true,
  },
  {
    isWellFormed: function () {
      const e = a(i(this));
      for (let t = e.length, r = 0; r < t; r++) {
        const n = s(e, r);
        if (
          (63488 & n) == 55296 &&
          (n >= 56320 || ++r >= t || (64512 & s(e, r)) != 56320)
        ) {
          return false;
        }
      }
      return true;
    },
  },
);
