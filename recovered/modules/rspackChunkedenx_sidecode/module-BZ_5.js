import n from "./module-A_6.js";
import i from "./module-O9_5.js";
import o from "./module-V6_6.js";
import s from "./module-ZW_5.js";
const a = "Invalid number representation";
const h = /^[\da-z]+$/;
const l = i("".charAt);
const v = i(h.exec);
const p = i((1).toString);
const d = i("".slice);
n(
  {
    target: "Number",
    stat: true,
    forced: true,
  },
  {
    fromString: function (t, r) {
      let e;
      let n;
      let i = 1;
      if (typeof t !== "string") {
        throw TypeError(a);
      }
      if (!t.length || (l(t, 0) === "-" && ((i = -1), !(t = d(t, 1)).length))) {
        throw SyntaxError(a);
      }
      if ((e = r === undefined ? 10 : o(r)) < 2 || e > 36) {
        throw RangeError("Invalid radix");
      }
      if (!v(h, t) || p((n = s(t, e)), e) !== t) {
        throw SyntaxError(a);
      }
      return i * n;
    },
  },
);
