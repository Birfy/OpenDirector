import n from "./module-A_11.js";
import o from "./module-YR_10.js";
import i from "./module-X_11.js";
import a from "./module-eXf_10.js";
import s from "./module-ng_11.js";
import u from "./module-BZO_10.js";
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
    canParse: function (t) {
      const r = a(arguments.length, 1);
      const e = s(t);
      const n =
        r < 2 || arguments[1] === undefined ? undefined : s(arguments[1]);
      try {
        new c(e, n);
        return true;
      } catch (t) {
        return false;
      }
    },
  },
);
