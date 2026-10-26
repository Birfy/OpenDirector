import _n from "./module-Vn_16.js";
import o from "./module-X_17.js";
import i from "./module-ri_17.js";
const _n_PROPER = _n.PROPER;
const a = "\u200B\x85\u180E";
export default function (t) {
  return o(function () {
    return !!i[t]() || a[t]() !== a || (_n_PROPER && i[t].name !== t);
  });
}
