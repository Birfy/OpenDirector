import n from "./module-vB_22.js";
import o from "./module-F4_21.js";
import i from "./module-V6_21.js";
const n_aTypedArray = n.aTypedArray;
n.exportTypedArrayMethod("at", function (t) {
  const r = n_aTypedArray(this);
  const e = o(r);
  const n = i(t);
  const s = n >= 0 ? n : e + n;
  if (s < 0 || s >= e) {
    return undefined;
  }
  return r[s];
});
