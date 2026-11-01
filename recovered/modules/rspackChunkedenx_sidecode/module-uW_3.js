import n from "./module-K_3.js";
import i from "./module-o_2.js";
const o = n("keys");
export default function (t) {
  return o[t] || (o[t] = i(t));
}
