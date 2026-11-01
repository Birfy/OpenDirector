import n from "./module-K.js";
import o from "./module-o.js";
const i = n("keys");
export default function (t) {
  return i[t] || (i[t] = o(t));
}
