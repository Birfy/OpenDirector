import n from "./module-M_2_15.js";
import o from "./module-vE_15.js";
import i from "./module-YR_15.js";
import a from "./module-C_16.js";
import s from "./module-D_2_15.js";
import u from "./module-lN_15.js";
import c from "./module-fq_15.js";
const f = u("asyncDispose");
const h = i("Promise");
if (!s(c, f)) {
  o(c, f, function () {
    const r = this;
    return new h(function (t, e) {
      const o = a(r, "return");
      if (o) {
        h.resolve(n(o, r)).then(() => {
          t(undefined);
        }, e);
      } else {
        t(undefined);
      }
    });
  });
}
