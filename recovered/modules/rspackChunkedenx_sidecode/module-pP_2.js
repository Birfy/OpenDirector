import n from "./module-vB_4.js";
import i from "./module-F4_3.js";
import o from "./module-V6_3.js";
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
