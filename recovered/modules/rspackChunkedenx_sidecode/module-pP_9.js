import n from "./module-vB_11.js";
import o from "./module-F4_10.js";
import i from "./module-V6_10.js";
const n_aTypedArray = n.aTypedArray;
n.exportTypedArrayMethod("at", function (t) {
  const e = n_aTypedArray(this);
  const r = o(e);
  const n = i(t);
  const s = n >= 0 ? n : r + n;
  if (s < 0 || s >= r) {
    return undefined;
  }
  return e[s];
});
