import _n from "./module-Vn_6.js";
import o from "./module-vE_6.js";
import a from "./module-d_7.js";
import i from "./module-ng_7.js";
import s from "./module-X_7.js";
import c from "./module-TK_7.js";
const _n_PROPER = _n.PROPER;
const u = "toString";
const f = RegExp.prototype[u];
const l = s(function () {
  return (
    f.call({
      source: "a",
      flags: "b",
    }) !== "/a/b"
  );
});
const h = _n_PROPER && f.name !== u;
if (l || h) {
  o(
    RegExp.prototype,
    u,
    function () {
      const t = a(this);
      return "/" + i(t.source) + "/" + i(c(t));
    },
    {
      unsafe: true,
    },
  );
}
