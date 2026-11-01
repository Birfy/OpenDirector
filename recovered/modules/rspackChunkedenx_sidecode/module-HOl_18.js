import n from "./module-A_19.js";
import o from "./module-ot_19.js";
import i from "./module-xK_18.js";
import _a from "./module-e7_18.js";
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
    merge: function (r) {
      const t = o(this);
      for (let e = arguments.length, n = 0; n < e;) {
        i(
          arguments[n++],
          function (r, e) {
            _a_set(t, r, e);
          },
          {
            AS_ENTRIES: true,
          },
        );
      }
      return t;
    },
  },
);
