import n from "./module-A_8.js";
import o from "./module-N_7.js";
import i from "./module-xl_8.js";
import a from "./module-X_8.js";
import s from "./module-YR_7.js";
import u from "./module-Y_8.js";
import c from "./module-V0_7.js";
import f from "./module-kn_8.js";
import l from "./module-vE_7.js";
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
