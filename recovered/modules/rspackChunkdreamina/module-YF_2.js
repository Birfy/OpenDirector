import n from "./module-Do_2.js";
import o from "./module-Ip_2.js";
const n_Set = n.Set;
const n_add = n.add;
export default function (e) {
  const t = new n_Set();
  o(e, function (e) {
    n_add(t, e);
  });
  return t;
}
