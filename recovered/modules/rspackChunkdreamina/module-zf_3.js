import n from "./module-ga_2.js";
import o from "./module-MV_4.js";
const n_aTypedArrayConstructor = n.aTypedArrayConstructor;
const n_getTypedArrayConstructor = n.getTypedArrayConstructor;
export default function (e) {
  return n_aTypedArrayConstructor(o(e, n_getTypedArrayConstructor(e)));
}
