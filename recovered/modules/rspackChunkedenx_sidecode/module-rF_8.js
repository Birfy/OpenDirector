import n from "./module-A_9.js";
import i from "./module-N_8.js";
import o from "./module-xl_9.js";
import s from "./module-X_9.js";
import a from "./module-YR_8.js";
import u from "./module-Y_9.js";
import c from "./module-V0_8.js";
import f from "./module-kn_9.js";
import h from "./module-vE_8.js";
const l = o && o.prototype;
n(
  {
    target: "Promise",
    proto: true,
    real: true,
    forced:
      !!o &&
      s(function () {
        l.finally.call(
          {
            then: function () {},
          },
          function () {},
        );
      }),
  },
  {
    finally: function (t) {
      const r = c(this, a("Promise"));
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
if (!i && u(o)) {
  const v = a("Promise").prototype.finally;
  if (l.finally !== v) {
    h(l, "finally", v, {
      unsafe: true,
    });
  }
}
