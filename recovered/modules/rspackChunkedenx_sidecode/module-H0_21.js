import n from "./module-A_22.js";
import i from "./module-O9_21.js";
import o from "./module-vj_22.js";
import s from "./module-ng_22.js";
const a = i("".charCodeAt);
n(
  {
    target: "String",
    proto: true,
  },
  {
    isWellFormed: function () {
      const t = s(o(this));
      for (let r = t.length, e = 0; e < r; e++) {
        const n = a(t, e);
        if (
          (63488 & n) == 55296 &&
          (n >= 56320 || ++e >= r || (64512 & a(t, e)) != 56320)
        ) {
          return false;
        }
      }
      return true;
    },
  },
);
