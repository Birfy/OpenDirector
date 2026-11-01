import n from "./module-lN_3.js";
import i from "./module-Za_3.js";
import { f } from "./module-t_4.js";
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
