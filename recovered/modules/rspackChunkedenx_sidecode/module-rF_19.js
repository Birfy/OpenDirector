import n from "./module-A_20.js";
import o from "./module-N_19.js";
import i from "./module-xl_20.js";
import a from "./module-X_20.js";
import s from "./module-YR_19.js";
import u from "./module-Y_20.js";
import c from "./module-V0_19.js";
import f from "./module-kn_20.js";
import l from "./module-vE_19.js";
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
    finally: function (r) {
      const t = c(this, s("Promise"));
      const e = u(r);
      return this.then(
        e ? (e) => f(t, r()).then(() => e) : r,
        e
          ? (e) =>
              f(t, r()).then(() => {
                throw e;
              })
          : r,
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
