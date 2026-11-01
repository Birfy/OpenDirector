import n from "./module-A_16.js";
import o from "./module-YR_15.js";
import i from "./module-X_16.js";
import a from "./module-eXf_15.js";
import s from "./module-ng_16.js";
import u from "./module-BZO_15.js";
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
