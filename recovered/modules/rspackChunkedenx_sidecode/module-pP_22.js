import n from "./module-vB_24.js";
import i from "./module-F4_23.js";
import o from "./module-V6_23.js";
const n_aTypedArray = n.aTypedArray;
n.exportTypedArrayMethod("at", function (t) {
  const r = n_aTypedArray(this);
  const e = i(r);
  const n = o(t);
  const a = n >= 0 ? n : e + n;
  if (a < 0 || a >= e) {
    return undefined;
  }
  return r[a];
});
