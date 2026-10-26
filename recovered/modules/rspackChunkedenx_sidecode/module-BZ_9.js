import n from "./module-A_10.js";
import o from "./module-O9_9.js";
import i from "./module-V6_10.js";
import a from "./module-ZW_9.js";
const s = "Invalid number representation";
const l = /^[\da-z]+$/;
const h = o("".charAt);
const v = o(l.exec);
const d = o((1).toString);
const p = o("".slice);
n(
  {
    target: "Number",
    stat: true,
    forced: true,
  },
  {
    fromString: function (t, e) {
      let r;
      let n;
      let o = 1;
      if (typeof t !== "string") {
        throw TypeError(s);
      }
      if (!t.length || (h(t, 0) === "-" && ((o = -1), !(t = p(t, 1)).length))) {
        throw SyntaxError(s);
      }
      if ((r = e === undefined ? 10 : i(e)) < 2 || r > 36) {
        throw RangeError("Invalid radix");
      }
      if (!v(l, t) || d((n = a(t, r)), r) !== t) {
        throw SyntaxError(s);
      }
      return o * n;
    },
  },
);
