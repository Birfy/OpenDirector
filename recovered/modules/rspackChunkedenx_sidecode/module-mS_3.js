import n from "./module-lN_2.js";
import i from "./module-Za_2.js";
import { f } from "./module-t_3.js";
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
