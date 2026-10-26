import n from "./module-A_11.js";
import o from "./module-O9_10.js";
import i from "./module-V6_11.js";
import a from "./module-ZW_10.js";
const s = "Invalid number representation";
const l = /^[\da-z]+$/;
const h = o("".charAt);
const v = o(l.exec);
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
      if (!t.length || (h(t, 0) === "-" && ((o = -1), !(t = d(t, 1)).length))) {
        throw SyntaxError(s);
      }
      if ((e = r === undefined ? 10 : i(r)) < 2 || e > 36) {
        throw RangeError("Invalid radix");
      }
      if (!v(l, t) || p((n = a(t, e)), e) !== t) {
        throw SyntaxError(s);
      }
      return o * n;
    },
  },
);
