import n from "./module-g.js";
import o from "./module-K.js";
import i from "./module-Lu.js";
import a from "./module-VV_4.js";
import s from "./module-Y.js";
import u from "./module-r.js";
import c from "./module-MV_4.js";
import f from "./module-ef.js";
import l from "./module-xX_2.js";
const p = i && i.prototype;
n(
  {
    target: "Promise",
    proto: true,
    real: true,
    forced:
      !!i &&
      a(function () {
        p.finally.call(
          {
            then: function () {},
          },
          function () {},
        );
      }),
  },
  {
    finally: function (e) {
      const t = c(this, s("Promise"));
      const r = u(e);
      return this.then(
        r ? (r) => f(t, e()).then(() => r) : e,
        r
          ? (r) =>
              f(t, e()).then(() => {
                throw r;
              })
          : e,
      );
    },
  },
);
if (!o && u(i)) {
  const h = s("Promise").prototype.finally;
  if (p.finally !== h) {
    l(p, "finally", h, {
      unsafe: true,
    });
  }
}
