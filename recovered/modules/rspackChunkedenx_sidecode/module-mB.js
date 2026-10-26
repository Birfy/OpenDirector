import _n from "./module-Vn.js";
import o from "./module-vE.js";
import i from "./module-d.js";
import a from "./module-ng.js";
import s from "./module-X.js";
import u from "./module-TK.js";
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
      const t = i(this);
      return "/" + a(t.source) + "/" + a(u(t));
    },
    {
      unsafe: true,
    },
  );
}
