import n from "./module-yh_23.js";
import o from "./module-vM_24.js";
const n_Set = n.Set;
const n_add = n.add;
export default function (t) {
  const r = new n_Set();
  o(t, function (t) {
    n_add(r, t);
  });
  return r;
}
