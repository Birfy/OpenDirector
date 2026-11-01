import n from "./module-A_4.js";
import i from "./module-YR_3.js";
import o from "./module-X_4.js";
import s from "./module-eXf_3.js";
import a from "./module-ng_4.js";
import u from "./module-BZO_3.js";
const c = i("URL");
n(
  {
    target: "URL",
    stat: true,
    forced: !(
      u &&
      o(function () {
        c.canParse();
      })
    ),
  },
  {
    canParse: function (t) {
      const r = s(arguments.length, 1);
      const e = a(t);
      const n =
        r < 2 || arguments[1] === undefined ? undefined : a(arguments[1]);
      try {
        new c(e, n);
        return true;
      } catch (t) {
        return false;
      }
    },
  },
);
