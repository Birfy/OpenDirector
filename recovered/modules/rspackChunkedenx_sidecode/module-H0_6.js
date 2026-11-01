import n from "./module-A_7.js";
import o from "./module-O9_6.js";
import a from "./module-vj_7.js";
import i from "./module-ng_7.js";
const s = o("".charCodeAt);
n(
  {
    target: "String",
    proto: true,
  },
  {
    isWellFormed: function () {
      const t = i(a(this));
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
