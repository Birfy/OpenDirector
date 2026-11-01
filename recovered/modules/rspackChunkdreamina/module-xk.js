import { Buffer } from "b58";
import f from "./module-io_2.js";
import n from "UO";
import a from "./module-Hs_2.js";
import s from "./module-aK.js";
import o from "./module-nU_3.js";
import h from "./module-ws.js";
function d(t) {
  n.Writable.call(this);
  const e = h[t];
  if (!e) {
    throw Error("Unknown message digest");
  }
  this._hashType = e.hash;
  this._hash = f(e.hash);
  this._tag = e.id;
  this._signType = e.sign;
}
function c(t) {
  n.Writable.call(this);
  const e = h[t];
  if (!e) {
    throw Error("Unknown message digest");
  }
  this._hash = f(e.hash);
  this._tag = e.id;
  this._signType = e.sign;
}
function u(t) {
  return new d(t);
}
function l(t) {
  return new c(t);
}
Object.keys(h).forEach((t) => {
  h[t].id = Buffer.from(h[t].id, "hex");
  h[t.toLowerCase()] = h[t];
});
a(d, n.Writable);
d.prototype._write = function (t, e, r) {
  this._hash.update(t);
  r();
};
d.prototype.update = function (t, e) {
  this._hash.update(typeof t === "string" ? Buffer.from(t, e) : t);
  return this;
};
d.prototype.sign = function (t, e) {
  this.end();
  const r = s(
    this._hash.digest(),
    t,
    this._hashType,
    this._signType,
    this._tag,
  );
  if (e) {
    return r.toString(e);
  }
  return r;
};
a(c, n.Writable);
c.prototype._write = function (t, e, r) {
  this._hash.update(t);
  r();
};
c.prototype.update = function (t, e) {
  this._hash.update(typeof t === "string" ? Buffer.from(t, e) : t);
  return this;
};
c.prototype.verify = function (t, e, r) {
  const f = typeof e === "string" ? Buffer.from(e, r) : e;
  this.end();
  return o(f, this._hash.digest(), t, this._signType, this._tag);
};
export default {
  Sign: u,
  Verify: l,
  createSign: u,
  createVerify: l,
};
