import n from "g";
import i from "Y";
import a from "VV";
import o from "lU";
import s from "BC";
import A from "VJ";
const c = i("URL");
n(
  {
    target: "URL",
    stat: true,
    forced: !(
      A &&
      a(function () {
        c.canParse();
      })
    ),
  },
  {
    canParse: function (t) {
      const e = o(arguments.length, 1);
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
