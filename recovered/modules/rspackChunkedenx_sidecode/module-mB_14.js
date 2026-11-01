import _n from "./module-Vn_14.js";
import o from "./module-vE_14.js";
import i from "./module-d_15.js";
import a from "./module-ng_15.js";
import s from "./module-X_15.js";
import c from "./module-TK_15.js";
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
