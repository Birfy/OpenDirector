import n from "./module-M_2.js";
import o from "./module-vE.js";
import i from "./module-YR.js";
import a from "./module-C.js";
import s from "./module-D_2.js";
import u from "./module-lN.js";
import c from "./module-fq.js";
const f = u("asyncDispose");
const h = i("Promise");
if (!s(c, f)) {
  o(c, f, function () {
    const t = this;
    return new h(function (r, e) {
      const o = a(t, "return");
      if (o) {
        h.resolve(n(o, t)).then(() => {
          r(undefined);
        }, e);
      } else {
        r(undefined);
      }
    });
  });
}
