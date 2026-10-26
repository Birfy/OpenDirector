import { A } from "./module-eZ_4.js";
function o(e, t) {
  e.prototype = Object.create(t.prototype);
  e.prototype.constructor = e;
  A(e, t);
}
export { o as A };
