import _n from "./module-A.js";
import o from "./module-xX_2.js";
import i from "./module-IF_2.js";
import a from "./module-BC_2.js";
import s from "./module-VV_4.js";
import u from "./module-zV_3.js";
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
const p = _n_PROPER && f.name !== c;
if (l || p) {
  o(
    RegExp.prototype,
    c,
    function () {
      const e = i(this);
      return "/" + a(e.source) + "/" + a(u(e));
    },
    {
      unsafe: true,
    },
  );
}
