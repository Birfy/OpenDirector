import n from "./module-A_21.js";
import o from "./module-O9_20.js";
import i from "./module-zQ_21.js";
import a from "./module-vM_21.js";
import s from "./module-ng_21.js";
const c = o([].join);
const u = o([].push);
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: true,
  },
  {
    join: function (t) {
      const r = i(this);
      const e = t === undefined ? "," : s(t);
      const n = [];
      a(r, function (t) {
        u(n, t);
      });
      return c(n, e);
    },
  },
);
