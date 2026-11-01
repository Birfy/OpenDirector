import n from "./module-A_17.js";
import o from "./module-O9_16.js";
import i from "./module-zQ_17.js";
import a from "./module-vM_17.js";
import s from "./module-ng_17.js";
const u = o([].join);
const c = o([].push);
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
        c(n, t);
      });
      return u(n, e);
    },
  },
);
