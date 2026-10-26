import n from "./module-A_10.js";
import o from "./module-N_9.js";
import i from "./module-xl_10.js";
import a from "./module-X_10.js";
import s from "./module-YR_9.js";
import u from "./module-Y_10.js";
import c from "./module-V0_9.js";
import f from "./module-kn_10.js";
import l from "./module-vE_9.js";
const h = i && i.prototype;
n(
  {
    target: "Promise",
    proto: true,
    real: true,
    forced:
      !!i &&
      a(function () {
        h.finally.call(
          {
            then: function () {},
          },
          function () {},
        );
      }),
  },
  {
    finally: function (t) {
      const e = c(this, s("Promise"));
      const r = u(t);
      return this.then(
        r ? (r) => f(e, t()).then(() => r) : t,
        r
          ? (r) =>
              f(e, t()).then(() => {
                throw r;
              })
          : t,
      );
    },
  },
);
if (!o && u(i)) {
  const v = s("Promise").prototype.finally;
  if (h.finally !== v) {
    l(h, "finally", v, {
      unsafe: true,
    });
  }
}
