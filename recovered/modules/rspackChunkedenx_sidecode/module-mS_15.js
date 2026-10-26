import n from "./module-lN_14.js";
import o from "./module-Za_14.js";
import { f } from "./module-t_15.js";
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
