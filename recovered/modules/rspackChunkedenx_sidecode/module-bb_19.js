import n from "./module-yh_19.js";
import o from "./module-vM_20.js";
const n_Set = n.Set;
const n_add = n.add;
export default function (r) {
  const t = new n_Set();
  o(r, function (r) {
    n_add(t, r);
  });
  return t;
}
