import n from "g";
import i from "o";
import a from "Ok";
import o from "jb";
const s = "Invalid number representation";
const l = /^[\da-z]+$/;
const h = i("".charAt);
const f = i(l.exec);
const g = i((1).toString);
const d = i("".slice);
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
      let i = 1;
      if (typeof t !== "string") {
        throw TypeError(s);
      }
      if (!t.length || (h(t, 0) === "-" && ((i = -1), !(t = d(t, 1)).length))) {
        throw SyntaxError(s);
      }
      if ((r = e === undefined ? 10 : a(e)) < 2 || r > 36) {
        throw RangeError("Invalid radix");
      }
      if (!f(l, t) || g((n = o(t, r)), r) !== t) {
        throw SyntaxError(s);
      }
      return i * n;
    },
  },
);
