import n from "./module-A_11.js";
import o from "./module-N_10.js";
import i from "./module-xl_11.js";
import a from "./module-X_11.js";
import s from "./module-YR_10.js";
import u from "./module-Y_11.js";
import c from "./module-V0_10.js";
import f from "./module-kn_11.js";
import l from "./module-vE_10.js";
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
