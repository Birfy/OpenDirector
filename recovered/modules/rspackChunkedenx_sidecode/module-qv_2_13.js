import n from "./module-M_2_13.js";
import o from "./module-vE_13.js";
import i from "./module-YR_13.js";
import a from "./module-C_14.js";
import s from "./module-D_2_13.js";
import u from "./module-lN_13.js";
import c from "./module-fq_13.js";
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
