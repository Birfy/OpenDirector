import n from "./module-A.js";
import o from "./module-O9.js";
import i from "./module-V6.js";
import a from "./module-ZW.js";
const s = "Invalid number representation";
const h = /^[\da-z]+$/;
const l = o("".charAt);
const v = o(h.exec);
const p = o((1).toString);
const d = o("".slice);
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
      let o = 1;
      if (typeof t !== "string") {
        throw TypeError(s);
      }
      if (!t.length || (l(t, 0) === "-" && ((o = -1), !(t = d(t, 1)).length))) {
        throw SyntaxError(s);
      }
      if ((e = r === undefined ? 10 : i(r)) < 2 || e > 36) {
        throw RangeError("Invalid radix");
      }
      if (!v(h, t) || p((n = a(t, e)), e) !== t) {
        throw SyntaxError(s);
      }
      return o * n;
    },
  },
);
