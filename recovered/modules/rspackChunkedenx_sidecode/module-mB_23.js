import _n from "./module-Vn_23.js";
import o from "./module-vE_23.js";
import i from "./module-d_24.js";
import a from "./module-ng_24.js";
import s from "./module-X_24.js";
import c from "./module-TK_24.js";
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
      const t = i(this);
      return "/" + a(t.source) + "/" + a(c(t));
    },
    {
      unsafe: true,
    },
  );
}
