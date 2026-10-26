import n from "./module-J_7.js";
import o from "./module-y_2_6.js";
const n_document = n.document;
const i = o(n_document) && o(n_document.createElement);
export default function (t) {
  if (i) {
    return n_document.createElement(t);
  }
  return {};
}
