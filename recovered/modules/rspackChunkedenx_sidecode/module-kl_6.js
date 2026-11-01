import n from "./module-A_7.js";
import o from "./module-YR_6.js";
import a from "./module-X_7.js";
import i from "./module-eXf_6.js";
import s from "./module-ng_7.js";
import c from "./module-BZO_6.js";
const u = o("URL");
n(
  {
    target: "URL",
    stat: true,
    forced: !(
      c &&
      a(function () {
        u.canParse();
      })
    ),
  },
  {
    canParse: function (t) {
      const r = i(arguments.length, 1);
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
