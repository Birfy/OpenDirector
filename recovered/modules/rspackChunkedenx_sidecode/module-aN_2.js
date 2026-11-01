import n from "./module-vB.js";
import o from "./module-V0.js";
const n_aTypedArrayConstructor = n.aTypedArrayConstructor;
const n_getTypedArrayConstructor = n.getTypedArrayConstructor;
export default function (t) {
  return n_aTypedArrayConstructor(o(t, n_getTypedArrayConstructor(t)));
}
