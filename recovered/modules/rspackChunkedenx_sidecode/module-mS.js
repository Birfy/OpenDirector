import n from "./module-lN.js";
import o from "./module-Za.js";
import { f } from "./module-t.js";
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
