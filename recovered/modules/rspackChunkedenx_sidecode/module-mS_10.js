import n from "./module-lN_9.js";
import o from "./module-Za_9.js";
import { f } from "./module-t_10.js";
const a = n("unscopables");
if (Array.prototype[a] === undefined) {
  f(Array.prototype, a, {
    configurable: true,
    value: o(null),
  });
}
export default function (t) {
  Array.prototype[a][t] = true;
}
