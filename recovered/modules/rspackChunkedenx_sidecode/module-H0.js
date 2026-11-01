import n from "./module-A.js";
import o from "./module-O9.js";
import i from "./module-vj.js";
import a from "./module-ng.js";
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
