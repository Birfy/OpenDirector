import _n from "./module-Vn_10.js";
import o from "./module-vE_10.js";
import i from "./module-d_11.js";
import a from "./module-ng_11.js";
import s from "./module-X_11.js";
import u from "./module-TK_11.js";
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
      const t = i(this);
      return "/" + a(t.source) + "/" + a(u(t));
    },
    {
      unsafe: true,
    },
  );
}
