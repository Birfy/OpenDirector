import n from "./module-lN_6.js";
import o from "./module-Za_6.js";
import { f } from "./module-t_7.js";
const i = n("unscopables");
if (Array.prototype[i] === undefined) {
  f(Array.prototype, i, {
    configurable: true,
    value: o(null),
  });
}
export default function (t) {
  Array.prototype[i][t] = true;
}
