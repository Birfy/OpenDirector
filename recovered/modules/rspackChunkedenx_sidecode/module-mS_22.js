import n from "./module-lN_21.js";
import i from "./module-Za_21.js";
import { f } from "./module-t_22.js";
const s = n("unscopables");
if (Array.prototype[s] === undefined) {
  f(Array.prototype, s, {
    configurable: true,
    value: i(null),
  });
}
export default function (t) {
  Array.prototype[s][t] = true;
}
