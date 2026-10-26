import n from "./module-Nt_3.js";
import o from "./module-lY_4.js";
import { f } from "./module-R_2.js";
const a = n("unscopables");
if (Array.prototype[a] === undefined) {
  f(Array.prototype, a, {
    configurable: true,
    value: o(null),
  });
}
export default function (e) {
  Array.prototype[a][e] = true;
}
