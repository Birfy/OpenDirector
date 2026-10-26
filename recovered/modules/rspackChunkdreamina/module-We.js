import i from "./module-Hs_2.js";
import { Buffer } from "wS";
import n from "./module-r0_2.js";
function a(t) {
  n.call(this, t);
  this.enc = "pem";
}
i(a, n);
export default a;
a.prototype.decode = function (t, e) {
  for (
    var r = t.toString().split(/[\r\n]+/g),
      i = e.label.toUpperCase(),
      a = /^-----(BEGIN|END) ([^-]+)-----$/,
      s = -1,
      o = -1,
      h = 0;
    h < r.length;
    h++
  ) {
    const d = r[h].match(a);
    if (d !== null && d[2] === i) {
      if (s === -1) {
        if (d[1] !== "BEGIN") {
          break;
        }
        s = h;
      } else {
        if (d[1] !== "END") {
          break;
        }
        o = h;
        break;
      }
    }
  }
  if (s === -1 || o === -1) {
    throw Error("PEM section not found for: " + i);
  }
  const c = r.slice(s + 1, o).join("");
  c.replace(/[^a-z0-9\+\/=]+/gi, "");
  const u = new Buffer(c, "base64");
  return n.prototype.decode.call(this, u, e);
};
