import n from "./module-vB_21.js";
import o from "./module-F4_20.js";
import i from "./module-V6_20.js";
const n_aTypedArray = n.aTypedArray;
n.exportTypedArrayMethod("at", function (r) {
  const t = n_aTypedArray(this);
  const e = o(t);
  const n = i(r);
  const s = n >= 0 ? n : e + n;
  if (s < 0 || s >= e) {
    return undefined;
  }
  return t[s];
});
