import n from "g";
import i from "p3";
import a from "O";
import o from "V8";
import { IteratorPrototype } from "ii";
import A from "Yt";
import c from "RI";
import forced from "K";
const l = A(function () {
  return i(this.next, this.iterator);
}, true);
n(
  {
    target: "Iterator",
    stat: true,
    forced,
  },
  {
    from: function (t) {
      const e = c(typeof t === "string" ? a(t) : t, true);
      if (o(IteratorPrototype, e.iterator)) {
        return e.iterator;
      }
      return new l(e);
    },
  },
);
