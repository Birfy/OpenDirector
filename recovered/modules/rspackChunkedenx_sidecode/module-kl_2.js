import n from "./module-A_3.js";
import i from "./module-YR_2.js";
import o from "./module-X_3.js";
import s from "./module-eXf_2.js";
import a from "./module-ng_3.js";
import u from "./module-BZO_2.js";
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
