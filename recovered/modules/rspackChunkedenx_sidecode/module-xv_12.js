import $ from "./module-J_13.js";
import tt from "./module-y_2_12.js";
const $_document = $.document;
const tr = tt($_document) && tt($_document.createElement);
export default function (J) {
  if (tr) {
    return $_document.createElement(J);
  }
  return {};
}
