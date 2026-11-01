import n from "./module-J_6.js";
import i from "./module-y_2_5.js";
const n_document = n.document;
const s = i(n_document) && i(n_document.createElement);
export default function (t) {
  if (s) {
    return n_document.createElement(t);
  }
  return {};
}
