import n from "./module-A_14.js";
import o from "./module-O9_13.js";
import i from "./module-V6_14.js";
import a from "./module-ZW_13.js";
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
    fromString: function (r, t) {
      let e;
      let n;
      let o = 1;
      if (typeof r !== "string") {
        throw TypeError(s);
      }
      if (!r.length || (l(r, 0) === "-" && ((o = -1), !(r = d(r, 1)).length))) {
        throw SyntaxError(s);
      }
      if ((e = t === undefined ? 10 : i(t)) < 2 || e > 36) {
        throw RangeError("Invalid radix");
      }
      if (!v(h, r) || p((n = a(r, e)), e) !== r) {
        throw SyntaxError(s);
      }
      return o * n;
    },
  },
);
