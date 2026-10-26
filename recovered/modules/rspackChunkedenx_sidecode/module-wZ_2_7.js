import n from "./module-A_8.js";
import o from "./module-O9_7.js";
import i from "./module-zQ_8.js";
import a from "./module-vM_8.js";
import s from "./module-ng_8.js";
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
