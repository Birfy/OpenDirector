import n from "./module-M_2_14.js";
import o from "./module-vE_14.js";
import i from "./module-YR_14.js";
import a from "./module-C_15.js";
import s from "./module-D_2_14.js";
import c from "./module-lN_14.js";
import u from "./module-fq_14.js";
const f = c("asyncDispose");
const l = i("Promise");
if (!s(u, f)) {
  o(u, f, function () {
    const t = this;
    return new l(function (r, e) {
      const o = a(t, "return");
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
