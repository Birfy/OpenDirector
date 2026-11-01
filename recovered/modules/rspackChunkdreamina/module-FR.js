import o from "./module-FyS.js";
export default function (t, e) {
  t.prototype = Object.create(e.prototype);
  t.prototype.constructor = t;
  o(t, e);
}
