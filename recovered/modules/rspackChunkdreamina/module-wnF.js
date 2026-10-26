import { P } from "./module-auX.js";
export var b = (e, t) => {
  var r = P(e);
  var n = t / 10 ** r;
  if (Number.isInteger(n)) {
    return "".concat(n);
  }
  return "".concat(n.toFixed(r));
};
