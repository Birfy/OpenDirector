import _n from "./module-Vn_18.js";
import o from "./module-vE_18.js";
import i from "./module-d_19.js";
import a from "./module-ng_19.js";
import s from "./module-X_19.js";
import u from "./module-TK_19.js";
const _n_PROPER = _n.PROPER;
const c = "toString";
const f = RegExp.prototype[c];
const h = s(function () {
  return (
    f.call({
      source: "a",
      flags: "b",
    }) !== "/a/b"
  );
});
const l = _n_PROPER && f.name !== c;
if (h || l) {
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
