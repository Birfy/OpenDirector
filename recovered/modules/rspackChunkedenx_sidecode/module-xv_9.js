import n from "./module-J_10.js";
import o from "./module-y_2_9.js";
const n_document = n.document;
const a = o(n_document) && o(n_document.createElement);
export default function (t) {
  if (a) {
    return n_document.createElement(t);
  }
  return {};
}
