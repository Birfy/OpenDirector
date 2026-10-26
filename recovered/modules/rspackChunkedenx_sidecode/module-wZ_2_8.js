import n from "./module-A_9.js";
import i from "./module-O9_8.js";
import o from "./module-zQ_9.js";
import s from "./module-vM_9.js";
import a from "./module-ng_9.js";
const u = i([].join);
const c = i([].push);
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: true,
  },
  {
    join: function (t) {
      const r = o(this);
      const e = t === undefined ? "," : a(t);
      const n = [];
      s(r, function (t) {
        c(n, t);
      });
      return u(n, e);
    },
  },
);
