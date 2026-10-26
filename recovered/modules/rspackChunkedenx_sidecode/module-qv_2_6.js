import n from "./module-M_2_6.js";
import o from "./module-vE_6.js";
import a from "./module-YR_6.js";
import i from "./module-C_7.js";
import s from "./module-D_2_6.js";
import c from "./module-lN_6.js";
import u from "./module-fq_6.js";
const f = c("asyncDispose");
const l = a("Promise");
if (!s(u, f)) {
  o(u, f, function () {
    const t = this;
    return new l(function (r, e) {
      const o = i(t, "return");
      if (o) {
        l.resolve(n(o, t)).then(() => {
          r(undefined);
        }, e);
      } else {
        r(undefined);
      }
    });
  });
}
