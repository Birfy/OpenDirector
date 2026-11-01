import n from "p3";
import i from "xX";
import a from "Y";
import o from "T";
import s from "h";
import A from "Nt";
import c from "lZ";
const u = A("asyncDispose");
const l = a("Promise");
if (!s(c, u)) {
  i(c, u, function () {
    const t = this;
    return new l(function (e, r) {
      const i = o(t, "return");
      if (i) {
        l.resolve(n(i, t)).then(() => {
          e(undefined);
        }, r);
      } else {
        e(undefined);
      }
    });
  });
}
