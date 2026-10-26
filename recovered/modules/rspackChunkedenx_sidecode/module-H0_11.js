import n from "./module-A_12.js";
import o from "./module-O9_11.js";
import i from "./module-vj_12.js";
import a from "./module-ng_12.js";
const s = o("".charCodeAt);
n(
  {
    target: "String",
    proto: true,
  },
  {
    isWellFormed: function () {
      const r = a(i(this));
      for (let t = r.length, e = 0; e < t; e++) {
        const n = s(r, e);
        if (
          (63488 & n) == 55296 &&
          (n >= 56320 || ++e >= t || (64512 & s(r, e)) != 56320)
        ) {
          return false;
        }
      }
      return true;
    },
  },
);
