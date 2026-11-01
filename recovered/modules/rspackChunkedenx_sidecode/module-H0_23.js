import n from "./module-A_24.js";
import o from "./module-O9_23.js";
import i from "./module-vj_24.js";
import a from "./module-ng_24.js";
const s = o("".charCodeAt);
n(
  {
    target: "String",
    proto: true,
  },
  {
    isWellFormed: function () {
      const t = a(i(this));
      for (let r = t.length, e = 0; e < r; e++) {
        const n = s(t, e);
        if (
          (63488 & n) == 55296 &&
          (n >= 56320 || ++e >= r || (64512 & s(t, e)) != 56320)
        ) {
          return false;
        }
      }
      return true;
    },
  },
);
