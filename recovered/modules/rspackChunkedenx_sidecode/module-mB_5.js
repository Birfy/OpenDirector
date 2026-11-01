import _n from "./module-Vn_5.js";
import i from "./module-vE_5.js";
import o from "./module-d_6.js";
import s from "./module-ng_6.js";
import a from "./module-X_6.js";
import u from "./module-TK_6.js";
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
