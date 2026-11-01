import n from "./module-A_7.js";
import o from "./module-N_6.js";
import a from "./module-xl_7.js";
import i from "./module-X_7.js";
import s from "./module-YR_6.js";
import c from "./module-Y_7.js";
import u from "./module-V0_6.js";
import f from "./module-kn_7.js";
import l from "./module-vE_6.js";
const h = a && a.prototype;
n(
  {
    target: "Promise",
    proto: true,
    real: true,
    forced:
      !!a &&
      i(function () {
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
if (!o && c(a)) {
  const p = s("Promise").prototype.finally;
  if (h.finally !== p) {
    l(h, "finally", p, {
      unsafe: true,
    });
  }
}
