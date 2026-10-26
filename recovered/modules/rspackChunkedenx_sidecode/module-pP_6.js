import n from "./module-vB_8.js";
import o from "./module-F4_7.js";
import a from "./module-V6_7.js";
const n_aTypedArray = n.aTypedArray;
n.exportTypedArrayMethod("at", function (t) {
  const r = n_aTypedArray(this);
  const e = o(r);
  const n = a(t);
  const s = n >= 0 ? n : e + n;
  if (s < 0 || s >= e) {
    return undefined;
  }
  return r[s];
});
