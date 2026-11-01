import n from "./module-M_2_7.js";
import o from "./module-vE_7.js";
import i from "./module-YR_7.js";
import a from "./module-C_8.js";
import s from "./module-D_2_7.js";
import u from "./module-lN_7.js";
import c from "./module-fq_7.js";
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
