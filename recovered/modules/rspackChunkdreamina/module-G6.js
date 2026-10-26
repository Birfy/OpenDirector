import i from "./module-Hs_2.js";
import f from "./module-EV.js";
import n from "./module-wYy.js";
import { Buffer } from "b58";
import s from "./module-fz.js";
import o from "xe";
import h from "gLn";
const d = Buffer.alloc(128);
function c(t, e) {
  n.call(this, "digest");
  if (typeof e === "string") {
    e = Buffer.from(e);
  }
  const r = t === "sha512" || t === "sha384" ? 128 : 64;
  this._alg = t;
  this._key = e;
  if (e.length > r) {
    e = (t === "rmd160" ? new o() : h(t)).update(e).digest();
  } else if (e.length < r) {
    e = Buffer.concat([e, d], r);
  }
  const i = (this._ipad = Buffer.allocUnsafe(r));
  const f = (this._opad = Buffer.allocUnsafe(r));
  for (let s = 0; s < r; s++) {
    i[s] = 54 ^ e[s];
    f[s] = 92 ^ e[s];
  }
  this._hash = t === "rmd160" ? new o() : h(t);
  this._hash.update(i);
}
i(c, n);
c.prototype._update = function (t) {
  this._hash.update(t);
};
c.prototype._final = function () {
  const t = this._hash.digest();
  return (this._alg === "rmd160" ? new o() : h(this._alg))
    .update(this._opad)
    .update(t)
    .digest();
};
export default function (t, e) {
  if ((t = t.toLowerCase()) === "rmd160" || t === "ripemd160") {
    return new c("rmd160", e);
  }
  if (t === "md5") {
    return new f(s, e);
  }
  return new c(t, e);
}
