import n from "./module-A_12.js";
import o from "./module-YR_11.js";
import i from "./module-X_12.js";
import a from "./module-eXf_11.js";
import s from "./module-ng_12.js";
import u from "./module-BZO_11.js";
const c = o("URL");
n(
  {
    target: "URL",
    stat: true,
    forced: !(
      u &&
      i(function () {
        c.canParse();
      })
    ),
  },
  {
    canParse: function (r) {
      const t = a(arguments.length, 1);
      const e = s(r);
      const n =
        t < 2 || arguments[1] === undefined ? undefined : s(arguments[1]);
      try {
        new c(e, n);
        return true;
      } catch (r) {
        return false;
      }
    },
  },
);
