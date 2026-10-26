import i from "./module-Hs_2.js";
import { Reporter } from "./module-Ngd.js";
import { Buffer } from "wS";
function a(t, e) {
  Reporter.call(this, e);
  if (Buffer.isBuffer(t)) {
    this.base = t;
    this.offset = 0;
    this.length = t.length;
  } else {
    this.error("Input not Buffer");
  }
}
export class d {
  constructor(t, e) {
    if (Array.isArray(t)) {
      this.length = 0;
      this.value = t.map(function (t) {
        if (!(t instanceof d)) {
          t = new d(t, e);
        }
        this.length += t.length;
        return t;
      }, this);
    } else if (typeof t === "number") {
      if (!(t >= 0 && t <= 255)) {
        return e.error("non-byte EncoderBuffer value");
      }
      this.value = t;
      this.length = 1;
    } else if (typeof t === "string") {
      this.value = t;
      this.length = Buffer.byteLength(t);
    } else {
      if (!Buffer.isBuffer(t)) {
        return e.error(`Unsupported type: ${typeof t}`);
      }
      this.value = t;
      this.length = t.length;
    }
  }
  join(t, e) {
    if (!t) {
      t = new Buffer(this.length);
    }
    if (!e) {
      e = 0;
    }
    if (this.length !== 0) {
      if (Array.isArray(this.value)) {
        this.value.forEach((r) => {
          r.join(t, e);
          e += r.length;
        });
      } else {
        if (typeof this.value === "number") {
          t[e] = this.value;
        } else if (typeof this.value === "string") {
          t.write(this.value, e);
        } else if (Buffer.isBuffer(this.value)) {
          this.value.copy(t, e);
        }
        e += this.length;
      }
    }
    return t;
  }
}
i(a, Reporter);
export { a as t };
a.prototype.save = function () {
  return {
    offset: this.offset,
    reporter: Reporter.prototype.save.call(this),
  };
};
a.prototype.restore = function (t) {
  const e = new a(this.base);
  e.offset = t.offset;
  e.length = this.offset;
  this.offset = t.offset;
  Reporter.prototype.restore.call(this, t.reporter);
  return e;
};
a.prototype.isEmpty = function () {
  return this.offset === this.length;
};
a.prototype.readUInt8 = function (t) {
  if (this.offset + 1 <= this.length) {
    return this.base.readUInt8(this.offset++, true);
  }
  return this.error(t || "DecoderBuffer overrun");
};
a.prototype.skip = function (t, e) {
  if (!(this.offset + t <= this.length)) {
    return this.error(e || "DecoderBuffer overrun");
  }
  const r = new a(this.base);
  r._reporterState = this._reporterState;
  r.offset = this.offset;
  r.length = this.offset + t;
  this.offset += t;
  return r;
};
a.prototype.raw = function (t) {
  return this.base.slice(t ? t.offset : this.offset, this.length);
};
