import n from "./module-lN.js";
import { f } from "./module-t.js";
const i = n("metadata");
if (Function.prototype[i] === undefined) {
  f(Function.prototype, i, {
    value: null,
  });
}
