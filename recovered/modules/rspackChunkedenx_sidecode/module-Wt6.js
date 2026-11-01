import $ from "./module-ULy.js";
import { Buffer } from "./module-pH.js";
import te from "./module-Ab_12.js";
function tr(J) {
  te.call(this, J);
  this.enc = "pem";
}
$(tr, te);
export default tr;
tr.prototype.decode = function (J, Z) {
  for (
    var Q = J.toString().split(/[\r\n]+/g),
      $ = Z.label.toUpperCase(),
      tr = /^-----(BEGIN|END) ([^-]+)-----$/,
      tn = -1,
      ti = -1,
      to = 0;
    to < Q.length;
    to++
  ) {
    const ta = Q[to].match(tr);
    if (ta !== null && ta[2] === $) {
      if (tn === -1) {
        if (ta[1] !== "BEGIN") {
          break;
        }
        tn = to;
      } else {
        if (ta[1] !== "END") {
          break;
        }
        ti = to;
        break;
      }
    }
  }
  if (tn === -1 || ti === -1) {
    throw Error("PEM section not found for: " + $);
  }
  const ts = Q.slice(tn + 1, ti).join("");
  ts.replace(/[^a-z0-9\+\/=]+/gi, "");
  const tf = new Buffer(ts, "base64");
  return te.prototype.decode.call(this, tf, Z);
};
