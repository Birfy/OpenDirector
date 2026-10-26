import n from "./module-A_15.js";
import o from "./module-YR_14.js";
import i from "./module-X_15.js";
import a from "./module-eXf_14.js";
import s from "./module-ng_15.js";
import c from "./module-BZO_14.js";
const u = o("URL");
n(
  {
    target: "URL",
    stat: true,
    forced: !(
      c &&
      i(function () {
        u.canParse();
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
        new u(e, n);
        return true;
      } catch (t) {
        return false;
      }
    },
  },
);
