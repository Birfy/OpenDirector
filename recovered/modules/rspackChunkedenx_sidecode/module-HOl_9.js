import n from "./module-A_10.js";
import o from "./module-ot_10.js";
import i from "./module-xK_9.js";
import _a from "./module-e7_9.js";
const _a_set = _a.set;
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
      const e = o(this);
      for (let r = arguments.length, n = 0; n < r;) {
        i(
          arguments[n++],
          function (t, r) {
            _a_set(e, t, r);
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
