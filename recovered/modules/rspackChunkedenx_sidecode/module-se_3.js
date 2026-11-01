import n from "./module-lN_2.js";
import i from "./module-at_2.js";
const o = n("iterator");
export default function (t) {
  return t !== undefined && (i.Array === t || Array.prototype[o] === t);
}
