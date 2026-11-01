import n from "./module-A_24.js";
import o from "./module-O9_23.js";
import i from "./module-zQ_24.js";
import a from "./module-vM_24.js";
import s from "./module-ng_24.js";
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
