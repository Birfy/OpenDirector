import _$ from "./module-Vn_12.js";
import tt from "./module-vE_12.js";
import te from "./module-d_13.js";
import tr from "./module-ng_13.js";
import tn from "./module-X_13.js";
import ti from "./module-TK_13.js";
const _$_PROPER = _$.PROPER;
const to = "toString";
const ta = RegExp.prototype[to];
const ts = tn(function () {
  return (
    ta.call({
      source: "a",
      flags: "b",
    }) !== "/a/b"
  );
});
const tf = _$_PROPER && ta.name !== to;
if (ts || tf) {
  tt(
    RegExp.prototype,
    to,
    function () {
      const J = te(this);
      return "/" + tr(J.source) + "/" + tr(ti(J));
    },
    {
      unsafe: true,
    },
  );
}
