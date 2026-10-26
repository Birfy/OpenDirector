import n from "./module-A_4.js";
import i from "./module-N_3.js";
import o from "./module-xl_4.js";
import s from "./module-X_4.js";
import a from "./module-YR_3.js";
import u from "./module-Y_4.js";
import c from "./module-V0_3.js";
import f from "./module-kn_4.js";
import h from "./module-vE_3.js";
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
