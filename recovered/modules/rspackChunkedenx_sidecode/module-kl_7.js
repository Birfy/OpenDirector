import n from "./module-A_8.js";
import o from "./module-YR_7.js";
import i from "./module-X_8.js";
import a from "./module-eXf_7.js";
import s from "./module-ng_8.js";
import u from "./module-BZO_7.js";
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
