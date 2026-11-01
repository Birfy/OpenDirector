import n from "./module-A_12.js";
import o from "./module-O9_11.js";
import i from "./module-zQ_12.js";
import a from "./module-vM_12.js";
import s from "./module-ng_12.js";
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
    join: function (r) {
      const t = i(this);
      const e = r === undefined ? "," : s(r);
      const n = [];
      a(t, function (r) {
        c(n, r);
      });
      return u(n, e);
    },
  },
);
