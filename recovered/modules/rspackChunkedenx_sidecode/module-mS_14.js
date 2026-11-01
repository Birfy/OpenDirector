import n from "./module-lN_13.js";
import o from "./module-Za_13.js";
import { f } from "./module-t_14.js";
const a = n("unscopables");
if (Array.prototype[a] === undefined) {
  f(Array.prototype, a, {
    configurable: true,
    value: o(null),
  });
}
export default function (r) {
  Array.prototype[a][r] = true;
}
