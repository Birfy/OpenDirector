import n from "./module-A_15.js";
import o from "./module-N_14.js";
import i from "./module-xl_15.js";
import a from "./module-X_15.js";
import s from "./module-YR_14.js";
import c from "./module-Y_15.js";
import u from "./module-V0_14.js";
import f from "./module-kn_15.js";
import l from "./module-vE_14.js";
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
      const r = u(this, s("Promise"));
      const e = c(t);
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
if (!o && c(i)) {
  const v = s("Promise").prototype.finally;
  if (h.finally !== v) {
    l(h, "finally", v, {
      unsafe: true,
    });
  }
}
