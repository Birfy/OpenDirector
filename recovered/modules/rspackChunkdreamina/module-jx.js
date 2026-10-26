import i from "./module-Hs_2.js";
import f from "./module-AQ.js";
function n(t) {
  f.call(this, t);
  this.enc = "pem";
}
i(n, f);
export default n;
n.prototype.encode = function (t, e) {
  for (
    var r = f.prototype.encode.call(this, t).toString("base64"),
      i = ["-----BEGIN " + e.label + "-----"],
      n = 0;
    n < r.length;
    n += 64
  ) {
    i.push(r.slice(n, n + 64));
  }
  i.push("-----END " + e.label + "-----");
  return i.join("\n");
};
