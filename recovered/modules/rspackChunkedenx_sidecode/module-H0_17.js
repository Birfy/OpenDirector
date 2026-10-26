import n from "./module-A_18.js";
import o from "./module-O9_17.js";
import i from "./module-vj_18.js";
import a from "./module-ng_18.js";
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
