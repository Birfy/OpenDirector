import n from "./module-J_4.js";
import i from "./module-y_2_3.js";
const n_document = n.document;
const s = i(n_document) && i(n_document.createElement);
export default function (t) {
  if (s) {
    return n_document.createElement(t);
  }
  return {};
}
