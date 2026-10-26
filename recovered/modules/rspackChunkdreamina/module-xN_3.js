import { sA } from "./module-wTQ.js";
import { t as t_1 } from "./module-qVX.js";
import { _, f } from "./module-vSe.js";
export var C = {
  Text2Music: "text2music",
};
const l = new Set(["text2music"]);
function d(e) {
  const t = t_1(e);
  if (t !== null) {
    return l.has(t);
  }
  return _(e.toolName, f(e), [], sA);
}
export { d };
