import n from "./module-vB_10.js";
import i from "./module-V0_8.js";
const n_aTypedArrayConstructor = n.aTypedArrayConstructor;
const n_getTypedArrayConstructor = n.getTypedArrayConstructor;
export default function (t) {
  return n_aTypedArrayConstructor(i(t, n_getTypedArrayConstructor(t)));
}
