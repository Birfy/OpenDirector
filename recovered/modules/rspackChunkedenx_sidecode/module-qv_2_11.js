import n from "./module-M_2_11.js";
import o from "./module-vE_11.js";
import i from "./module-YR_11.js";
import a from "./module-C_12.js";
import s from "./module-D_2_11.js";
import u from "./module-lN_11.js";
import c from "./module-fq_11.js";
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
