import n from "./module-ga_2.js";
import o from "./module-OG_2.js";
import i from "./module-Ok_2.js";
const n_aTypedArray = n.aTypedArray;
n.exportTypedArrayMethod("at", function (e) {
  const t = n_aTypedArray(this);
  const r = o(t);
  const n = i(e);
  const s = n >= 0 ? n : r + n;
  if (s < 0 || s >= r) {
    return undefined;
  }
  return t[s];
});
