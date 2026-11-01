import n from "./module-u.js";
import o from "./module-N.js";
const n_document = n.document;
const a = o(n_document) && o(n_document.createElement);
export default function (e) {
  if (a) {
    return n_document.createElement(e);
  }
  return {};
}
