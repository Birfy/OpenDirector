import n from "./module-A_10.js";
import o from "./module-YR_9.js";
import i from "./module-X_10.js";
import a from "./module-eXf_9.js";
import s from "./module-ng_10.js";
import u from "./module-BZO_9.js";
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
      const e = a(arguments.length, 1);
      const r = s(t);
      const n =
        e < 2 || arguments[1] === undefined ? undefined : s(arguments[1]);
      try {
        new c(r, n);
        return true;
      } catch (t) {
        return false;
      }
    },
  },
);
