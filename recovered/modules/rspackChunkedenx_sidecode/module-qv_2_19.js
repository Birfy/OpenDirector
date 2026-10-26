import n from "./module-M_2_19.js";
import o from "./module-vE_19.js";
import i from "./module-YR_19.js";
import a from "./module-C_20.js";
import s from "./module-D_2_19.js";
import u from "./module-lN_19.js";
import c from "./module-fq_19.js";
const f = u("asyncDispose");
const l = i("Promise");
if (!s(c, f)) {
  o(c, f, function () {
    const r = this;
    return new l(function (t, e) {
      const o = a(r, "return");
      if (o) {
        l.resolve(n(o, r)).then(() => {
          t(undefined);
        }, e);
      } else {
        t(undefined);
      }
    });
  });
}
