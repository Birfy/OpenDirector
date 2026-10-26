import n from "./module-A_7.js";
import o from "./module-ot_7.js";
import a from "./module-xK_6.js";
import _i from "./module-e7_6.js";
const _i_set = _i.set;
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
        a(
          arguments[n++],
          function (t, e) {
            _i_set(r, t, e);
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
