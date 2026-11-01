import n from "./module-J_22.js";
import i from "./module-y_2_21.js";
const n_document = n.document;
const s = i(n_document) && i(n_document.createElement);
export default function (t) {
  if (s) {
    return n_document.createElement(t);
  }
  return {};
}
