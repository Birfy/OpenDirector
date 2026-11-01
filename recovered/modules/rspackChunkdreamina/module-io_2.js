import i from "./module-Hs_2.js";
import f from "irr";
import n from "xe";
import a from "gLn";
import s from "./module-wYy.js";
function o(t) {
  s.call(this, "digest");
  this._hash = t;
}
i(o, s);
o.prototype._update = function (t) {
  this._hash.update(t);
};
o.prototype._final = function () {
  return this._hash.digest();
};
export default function (t) {
  if ((t = t.toLowerCase()) === "md5") {
    return new f();
  }
  if (t === "rmd160" || t === "ripemd160") {
    return new n();
  }
  return new o(a(t));
}
