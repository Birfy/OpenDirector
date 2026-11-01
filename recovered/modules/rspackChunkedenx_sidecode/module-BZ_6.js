import n from "./module-A_7.js";
import o from "./module-O9_6.js";
import a from "./module-V6_7.js";
import i from "./module-ZW_6.js";
const s = "Invalid number representation";
const l = /^[\da-z]+$/;
const h = o("".charAt);
const p = o(l.exec);
const v = o((1).toString);
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
      if ((e = r === undefined ? 10 : a(r)) < 2 || e > 36) {
        throw RangeError("Invalid radix");
      }
      if (!p(l, t) || v((n = i(t, e)), e) !== t) {
        throw SyntaxError(s);
      }
      return o * n;
    },
  },
);
