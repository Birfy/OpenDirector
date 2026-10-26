import n from "./module-A.js";
import o from "./module-YR.js";
import i from "./module-X.js";
import a from "./module-eXf.js";
import s from "./module-ng.js";
import u from "./module-BZO.js";
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
