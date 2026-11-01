import n from "./module-A_10.js";
import o from "./module-O9_9.js";
import i from "./module-vj_10.js";
import a from "./module-ng_10.js";
const s = o("".charCodeAt);
n(
  {
    target: "String",
    proto: true,
  },
  {
    isWellFormed: function () {
      const t = a(i(this));
      for (let e = t.length, r = 0; r < e; r++) {
        const n = s(t, r);
        if (
          (63488 & n) == 55296 &&
          (n >= 56320 || ++r >= e || (64512 & s(t, r)) != 56320)
        ) {
          return false;
        }
      }
      return true;
    },
  },
);
