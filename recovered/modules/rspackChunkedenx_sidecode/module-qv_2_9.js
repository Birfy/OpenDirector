import n from "./module-M_2_9.js";
import o from "./module-vE_9.js";
import i from "./module-YR_9.js";
import a from "./module-C_10.js";
import s from "./module-D_2_9.js";
import u from "./module-lN_9.js";
import c from "./module-fq_9.js";
const f = u("asyncDispose");
const l = i("Promise");
if (!s(c, f)) {
  o(c, f, function () {
    const t = this;
    return new l(function (e, r) {
      const o = a(t, "return");
      if (o) {
        l.resolve(n(o, t)).then(() => {
          e(undefined);
        }, r);
      } else {
        e(undefined);
      }
    });
  });
}
