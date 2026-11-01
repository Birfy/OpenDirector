import n from "g";
import i from "vP";
import a from "Fm";
import { set } from "UF";
n(
  {
    target: "Map",
    proto: true,
    real: true,
    arity: 1,
    forced: true,
  },
  {
    merge: function (t) {
      const e = i(this);
      for (let r = arguments.length, n = 0; n < r;) {
        a(
          arguments[n++],
          function (t, r) {
            set(e, t, r);
          },
          {
            AS_ENTRIES: true,
          },
        );
      }
      return e;
    },
  },
);
