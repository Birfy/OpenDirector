import i from "./module-wYy.js";
import { CBC, DES, EDE } from "./module-uI_2.js";
import n from "./module-Hs_2.js";
import { Buffer } from "b58";
const s = {
  "des-ede3-cbc": CBC.instantiate(EDE),
  "des-ede3": EDE,
  "des-ede-cbc": CBC.instantiate(EDE),
  "des-ede": EDE,
  "des-cbc": CBC.instantiate(DES),
  "des-ecb": DES,
};
function o(t) {
  i.call(this);
  let e;
  const r = t.mode.toLowerCase();
  const f = s[r];
  e = t.decrypt ? "decrypt" : "encrypt";
  let t_key = t.key;
  if (!Buffer.isBuffer(t_key)) {
    t_key = Buffer.from(t_key);
  }
  if (r === "des-ede" || r === "des-ede-cbc") {
    t_key = Buffer.concat([t_key, t_key.slice(0, 8)]);
  }
  let iv = t.iv;
  if (!Buffer.isBuffer(iv)) {
    iv = Buffer.from(iv);
  }
  this._des = f.create({
    key: t_key,
    iv,
    type: e,
  });
}
s.des = s["des-cbc"];
s.des3 = s["des-ede3-cbc"];
export default o;
n(o, i);
o.prototype._update = function (t) {
  return Buffer.from(this._des.update(t));
};
o.prototype._final = function () {
  return Buffer.from(this._des.final());
};
