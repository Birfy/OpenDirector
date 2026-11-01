import $ from "./module-ULy.js";
import tt from "./module-gDA.js";
function te(J) {
  tt.call(this, J);
  this.enc = "pem";
}
$(te, tt);
export default te;
te.prototype.encode = function (J, Z) {
  for (
    var Q = tt.prototype.encode.call(this, J).toString("base64"),
      $ = ["-----BEGIN " + Z.label + "-----"],
      te = 0;
    te < Q.length;
    te += 64
  ) {
    $.push(Q.slice(te, te + 64));
  }
  $.push("-----END " + Z.label + "-----");
  return $.join("\n");
};
