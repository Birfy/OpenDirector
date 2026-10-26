import n from "./module-M_2_18.js";
import o from "./module-vE_18.js";
import i from "./module-YR_18.js";
import a from "./module-C_19.js";
import s from "./module-D_2_18.js";
import u from "./module-lN_18.js";
import c from "./module-fq_18.js";
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
