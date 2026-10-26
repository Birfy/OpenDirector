import { Buffer } from "./module-s6_2_2.js";
import tt from "./module-eUY.js";
import te from "./module-Ua_2.js";
import tr from "./module-ULy.js";
import tn from "./module-EO4.js";
import ti from "./module-fd_12.js";
import to from "./module-ws.js";
function ta(J) {
  te.Writable.call(this);
  const Z = to[J];
  if (!Z) {
    throw Error("Unknown message digest");
  }
  this._hashType = Z.hash;
  this._hash = tt(Z.hash);
  this._tag = Z.id;
  this._signType = Z.sign;
}
function ts(J) {
  te.Writable.call(this);
  const Z = to[J];
  if (!Z) {
    throw Error("Unknown message digest");
  }
  this._hash = tt(Z.hash);
  this._tag = Z.id;
  this._signType = Z.sign;
}
function tf(J) {
  return new ta(J);
}
function tu(J) {
  return new ts(J);
}
Object.keys(to).forEach((J) => {
  to[J].id = Buffer.from(to[J].id, "hex");
  to[J.toLowerCase()] = to[J];
});
tr(ta, te.Writable);
ta.prototype._write = function (J, Z, Q) {
  this._hash.update(J);
  Q();
};
ta.prototype.update = function (J, Z) {
  this._hash.update(typeof J === "string" ? Buffer.from(J, Z) : J);
  return this;
};
ta.prototype.sign = function (J, Z) {
  this.end();
  const Q = tn(
    this._hash.digest(),
    J,
    this._hashType,
    this._signType,
    this._tag,
  );
  if (Z) {
    return Q.toString(Z);
  }
  return Q;
};
tr(ts, te.Writable);
ts.prototype._write = function (J, Z, Q) {
  this._hash.update(J);
  Q();
};
ts.prototype.update = function (J, Z) {
  this._hash.update(typeof J === "string" ? Buffer.from(J, Z) : J);
  return this;
};
ts.prototype.verify = function (J, Z, Q) {
  const tt = typeof Z === "string" ? Buffer.from(Z, Q) : Z;
  this.end();
  return ti(tt, this._hash.digest(), J, this._signType, this._tag);
};
export default {
  Sign: tf,
  Verify: tu,
  createSign: tf,
  createVerify: tu,
};
