import n from "./module-A_18.js";
import o from "./module-N_17.js";
import i from "./module-xl_18.js";
import a from "./module-X_18.js";
import s from "./module-YR_17.js";
import u from "./module-Y_18.js";
import c from "./module-V0_17.js";
import f from "./module-kn_18.js";
import h from "./module-vE_17.js";
const l = i && i.prototype;
n(
  {
    target: "Promise",
    proto: true,
    real: true,
    forced:
      !!i &&
      a(function () {
        l.finally.call(
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
  if (l.finally !== v) {
    h(l, "finally", v, {
      unsafe: true,
    });
  }
}
