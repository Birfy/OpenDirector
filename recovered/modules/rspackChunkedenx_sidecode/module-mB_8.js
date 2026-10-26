import _n from "./module-Vn_8.js";
import i from "./module-vE_8.js";
import o from "./module-d_9.js";
import s from "./module-ng_9.js";
import a from "./module-X_9.js";
import u from "./module-TK_9.js";
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
