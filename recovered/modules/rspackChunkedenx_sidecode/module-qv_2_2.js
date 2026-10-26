import n from "./module-M_2_2.js";
import i from "./module-vE_2.js";
import o from "./module-YR_2.js";
import s from "./module-C_3.js";
import a from "./module-D_2_2.js";
import u from "./module-lN_2.js";
import c from "./module-fq_2.js";
const f = u("asyncDispose");
const h = o("Promise");
if (!a(c, f)) {
  i(c, f, function () {
    const t = this;
    return new h(function (r, e) {
      const i = s(t, "return");
      if (i) {
        h.resolve(n(i, t)).then(() => {
          r(undefined);
        }, e);
      } else {
        r(undefined);
      }
    });
  });
}
