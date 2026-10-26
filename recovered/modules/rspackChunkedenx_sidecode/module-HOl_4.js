import n from "./module-A_5.js";
import i from "./module-ot_5.js";
import o from "./module-xK_4.js";
import _s from "./module-e7_4.js";
const _s_set = _s.set;
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
      const r = i(this);
      for (let e = arguments.length, n = 0; n < e;) {
        o(
          arguments[n++],
          function (t, e) {
            _s_set(r, t, e);
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
