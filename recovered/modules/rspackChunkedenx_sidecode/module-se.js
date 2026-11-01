import n from "./module-lN.js";
import o from "./module-at.js";
const i = n("iterator");
export default function (t) {
  return t !== undefined && (o.Array === t || Array.prototype[i] === t);
}
