import { Buffer } from "./module-s6_2_2.js";
import { Transform } from "./module-OAG.js";
function te(J) {
  Transform.call(this);
  this._block = Buffer.allocUnsafe(J);
  this._blockSize = J;
  this._blockOffset = 0;
  this._length = [0, 0, 0, 0];
  this._finalized = false;
}
require("./module-ULy.js")(te, Transform);
te.prototype._transform = function (J, Z, Q) {
  let $ = null;
  try {
    this.update(J, Z);
  } catch (error) {
    $ = error;
  }
  Q($);
};
te.prototype._flush = function (J) {
  let Z = null;
  try {
    this.push(this.digest());
  } catch (error) {
    Z = error;
  }
  J(Z);
};
te.prototype.update = function (J, Z) {
  const Q = J;
  if (!Buffer.isBuffer(Q) && typeof Q !== "string") {
    throw TypeError("Data must be a string or a buffer");
  }
  if (this._finalized) {
    throw Error("Digest already called");
  }
  if (!Buffer.isBuffer(J)) {
    J = Buffer.from(J, Z);
  }
  const _block = this._block;
  for (var te = 0; this._blockOffset + J.length - te >= this._blockSize;) {
    for (let tr = this._blockOffset; tr < this._blockSize;) {
      _block[tr++] = J[te++];
    }
    this._update();
    this._blockOffset = 0;
  }
  while (te < J.length) {
    _block[this._blockOffset++] = J[te++];
  }
  for (let tn = 0, ti = 8 * J.length; ti > 0; ++tn) {
    this._length[tn] += ti;
    if ((ti = (this._length[tn] / 4294967296) | 0) > 0) {
      this._length[tn] -= 4294967296 * ti;
    }
  }
  return this;
};
te.prototype._update = function () {
  throw Error("_update is not implemented");
};
te.prototype.digest = function (J) {
  if (this._finalized) {
    throw Error("Digest already called");
  }
  this._finalized = true;
  let Z = this._digest();
  if (J !== undefined) {
    Z = Z.toString(J);
  }
  this._block.fill(0);
  this._blockOffset = 0;
  for (let Q = 0; Q < 4; ++Q) {
    this._length[Q] = 0;
  }
  return Z;
};
te.prototype._digest = function () {
  throw Error("_digest is not implemented");
};
export default te;
