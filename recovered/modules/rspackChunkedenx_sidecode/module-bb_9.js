import n from "./module-yh_9.js";
import o from "./module-vM_10.js";
const n_Set = n.Set;
const n_add = n.add;
export default function (t) {
  const e = new n_Set();
  o(t, function (t) {
    n_add(e, t);
  });
  return e;
}
