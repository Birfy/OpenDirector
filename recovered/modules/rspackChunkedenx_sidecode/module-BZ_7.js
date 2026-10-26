import n from "./module-A_8.js";
import o from "./module-O9_7.js";
import i from "./module-V6_8.js";
import a from "./module-ZW_7.js";
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
    fromString: function (r, t) {
      let e;
      let n;
      let o = 1;
      if (typeof r !== "string") {
        throw TypeError(s);
      }
      if (!r.length || (h(r, 0) === "-" && ((o = -1), !(r = d(r, 1)).length))) {
        throw SyntaxError(s);
      }
      if ((e = t === undefined ? 10 : i(t)) < 2 || e > 36) {
        throw RangeError("Invalid radix");
      }
      if (!v(l, r) || p((n = a(r, e)), e) !== r) {
        throw SyntaxError(s);
      }
      return o * n;
    },
  },
);
