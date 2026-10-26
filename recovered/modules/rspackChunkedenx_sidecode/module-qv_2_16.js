import n from "./module-M_2_16.js";
import o from "./module-vE_16.js";
import i from "./module-YR_16.js";
import a from "./module-C_17.js";
import s from "./module-D_2_16.js";
import u from "./module-lN_16.js";
import c from "./module-fq_16.js";
const f = u("asyncDispose");
const l = i("Promise");
if (!s(c, f)) {
  o(c, f, function () {
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
