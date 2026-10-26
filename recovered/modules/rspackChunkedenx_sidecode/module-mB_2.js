import _n from "./module-Vn_2.js";
import i from "./module-vE_2.js";
import o from "./module-d_3.js";
import s from "./module-ng_3.js";
import a from "./module-X_3.js";
import u from "./module-TK_3.js";
const _n_PROPER = _n.PROPER;
const c = "toString";
const f = RegExp.prototype[c];
const h = a(function () {
  return (
    f.call({
      source: "a",
      flags: "b",
    }) !== "/a/b"
  );
});
const l = _n_PROPER && f.name !== c;
if (h || l) {
  i(
    RegExp.prototype,
    c,
    function () {
      const t = o(this);
      return "/" + s(t.source) + "/" + s(u(t));
    },
    {
      unsafe: true,
    },
  );
}
