import $ from "./module-ULy.js";
import { Reporter } from "./module-Yc.js";
import { Buffer } from "./module-pH.js";
function tr(J, Z) {
  Reporter.call(this, Z);
  if (Buffer.isBuffer(J)) {
    this.base = J;
    this.offset = 0;
    this.length = J.length;
  } else {
    this.error("Input not Buffer");
  }
}
class tn {
  constructor(J, Z) {
    if (Array.isArray(J)) {
      this.length = 0;
      this.value = J.map(function (J) {
        if (!(J instanceof tn)) {
          J = new tn(J, Z);
        }
        this.length += J.length;
        return J;
      }, this);
    } else if (typeof J === "number") {
      if (!(J >= 0 && J <= 255)) {
        return Z.error("non-byte EncoderBuffer value");
      }
      this.value = J;
      this.length = 1;
    } else if (typeof J === "string") {
      this.value = J;
      this.length = Buffer.byteLength(J);
    } else {
      if (!Buffer.isBuffer(J)) {
        return Z.error(`Unsupported type: ${typeof J}`);
      }
      this.value = J;
      this.length = J.length;
    }
  }
  join(J, Z) {
    if (!J) {
      J = new Buffer(this.length);
    }
    if (!Z) {
      Z = 0;
    }
    if (this.length !== 0) {
      if (Array.isArray(this.value)) {
        this.value.forEach((Q) => {
          Q.join(J, Z);
          Z += Q.length;
        });
      } else {
        if (typeof this.value === "number") {
          J[Z] = this.value;
        } else if (typeof this.value === "string") {
          J.write(this.value, Z);
        } else if (Buffer.isBuffer(this.value)) {
          this.value.copy(J, Z);
        }
        Z += this.length;
      }
    }
    return J;
  }
}
$(tr, Reporter);
export { tr as t };
tr.prototype.save = function () {
  return {
    offset: this.offset,
    reporter: Reporter.prototype.save.call(this),
  };
};
tr.prototype.restore = function (J) {
  const Z = new tr(this.base);
  Z.offset = J.offset;
  Z.length = this.offset;
  this.offset = J.offset;
  Reporter.prototype.restore.call(this, J.reporter);
  return Z;
};
tr.prototype.isEmpty = function () {
  return this.offset === this.length;
};
tr.prototype.readUInt8 = function (J) {
  if (this.offset + 1 <= this.length) {
    return this.base.readUInt8(this.offset++, true);
  }
  return this.error(J || "DecoderBuffer overrun");
};
tr.prototype.skip = function (J, Z) {
  if (!(this.offset + J <= this.length)) {
    return this.error(Z || "DecoderBuffer overrun");
  }
  const Q = new tr(this.base);
  Q._reporterState = this._reporterState;
  Q.offset = this.offset;
  Q.length = this.offset + J;
  this.offset += J;
  return Q;
};
tr.prototype.raw = function (J) {
  return this.base.slice(J ? J.offset : this.offset, this.length);
};
export { tn as d };
