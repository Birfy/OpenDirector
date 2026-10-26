import n from "g";
import i from "O";
import a from "V8";
import o from "kj";
import s from "lZ";
import A from "PNn";
n(
  {
    target: "AsyncIterator",
    stat: true,
    forced: require("K"),
  },
  {
    from: function (t) {
      const e = o(typeof t === "string" ? i(t) : t);
      if (a(s, e.iterator)) {
        return e.iterator;
      }
      return new A(e);
    },
  },
);
