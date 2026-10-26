import n from "./module-A_21.js";
import o from "./module-ot_21.js";
import i from "./module-xK_20.js";
import _a from "./module-e7_20.js";
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
      const r = o(this);
      for (let e = arguments.length, n = 0; n < e;) {
        i(
          arguments[n++],
          function (t, e) {
            _a_set(r, t, e);
          },
          {
            AS_ENTRIES: true,
          },
        );
      }
      return r;
    },
  },
);
