import $ from "./module-ULy.js";
import tt from "./module-IB_3_2.js";
import te from "./module-mu_2_2.js";
import tr from "./module-ux.js";
import tn from "./module-vWC.js";
function ti(J) {
  tn.call(this, "digest");
  this._hash = J;
}
$(ti, tn);
ti.prototype._update = function (J) {
  this._hash.update(J);
};
ti.prototype._final = function () {
  return this._hash.digest();
};
export default function (J) {
  if ((J = J.toLowerCase()) === "md5") {
    return new tt();
  }
  if (J === "rmd160" || J === "ripemd160") {
    return new te();
  }
  return new ti(tr(J));
}
