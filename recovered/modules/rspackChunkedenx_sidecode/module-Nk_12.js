import $ from "./module-vWC.js";
import { CBC, DES, EDE } from "./module-S1.js";
import te from "./module-ULy.js";
import { Buffer } from "./module-s6_2_2.js";
const tn = {
  "des-ede3-cbc": CBC.instantiate(EDE),
  "des-ede3": EDE,
  "des-ede-cbc": CBC.instantiate(EDE),
  "des-ede": EDE,
  "des-cbc": CBC.instantiate(DES),
  "des-ecb": DES,
};
function ti(J) {
  $.call(this);
  let Z;
  const Q = J.mode.toLowerCase();
  const tt = tn[Q];
  Z = J.decrypt ? "decrypt" : "encrypt";
  let J_key = J.key;
  if (!Buffer.isBuffer(J_key)) {
    J_key = Buffer.from(J_key);
  }
  if (Q === "des-ede" || Q === "des-ede-cbc") {
    J_key = Buffer.concat([J_key, J_key.slice(0, 8)]);
  }
  let iv = J.iv;
  if (!Buffer.isBuffer(iv)) {
    iv = Buffer.from(iv);
  }
  this._des = tt.create({
    key: J_key,
    iv,
    type: Z,
  });
}
tn.des = tn["des-cbc"];
tn.des3 = tn["des-ede3-cbc"];
export default ti;
te(ti, $);
ti.prototype._update = function (J) {
  return Buffer.from(this._des.update(J));
};
ti.prototype._final = function () {
  return Buffer.from(this._des.final());
};
