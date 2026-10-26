import n from "./module-J_8.js";
import o from "./module-y_2_7.js";
const n_document = n.document;
const a = o(n_document) && o(n_document.createElement);
export default function (r) {
  if (a) {
    return n_document.createElement(r);
  }
  return {};
}
