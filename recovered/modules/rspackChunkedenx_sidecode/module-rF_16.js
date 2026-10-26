import n from "./module-A_17.js";
import o from "./module-N_16.js";
import i from "./module-xl_17.js";
import a from "./module-X_17.js";
import s from "./module-YR_16.js";
import u from "./module-Y_17.js";
import c from "./module-V0_16.js";
import f from "./module-kn_17.js";
import l from "./module-vE_16.js";
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
      const r = c(this, s("Promise"));
      const e = u(t);
      return this.then(
        e ? (e) => f(r, t()).then(() => e) : t,
        e
          ? (e) =>
              f(r, t()).then(() => {
                throw e;
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
