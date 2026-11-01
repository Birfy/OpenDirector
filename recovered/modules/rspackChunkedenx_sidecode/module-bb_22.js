import n from "./module-yh_22.js";
import i from "./module-vM_23.js";
const n_Set = n.Set;
const n_add = n.add;
export default function (t) {
  const r = new n_Set();
  i(t, function (t) {
    n_add(r, t);
  });
  return r;
}
