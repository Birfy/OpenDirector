import _n from "./module-Vn_7.js";
import o from "./module-vE_7.js";
import i from "./module-d_8.js";
import a from "./module-ng_8.js";
import s from "./module-X_8.js";
import u from "./module-TK_8.js";
const _n_PROPER = _n.PROPER;
const c = "toString";
const f = RegExp.prototype[c];
const l = s(function () {
  return (
    f.call({
      source: "a",
      flags: "b",
    }) !== "/a/b"
  );
});
const h = _n_PROPER && f.name !== c;
if (l || h) {
  o(
    RegExp.prototype,
    c,
    function () {
      const r = i(this);
      return "/" + a(r.source) + "/" + a(u(r));
    },
    {
      unsafe: true,
    },
  );
}
