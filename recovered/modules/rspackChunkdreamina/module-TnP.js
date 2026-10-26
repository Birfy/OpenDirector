import n from "./module-sJv.js";
export default i;
function i(e, t) {
  this.lo = e >>> 0;
  this.hi = t >>> 0;
}
const o = (i.zero = new i(0, 0));
o.toNumber = function () {
  return 0;
};
o.zzEncode = o.zzDecode = function () {
  return this;
};
o.length = function () {
  return 1;
};
const s = (i.zeroHash = "\0\0\0\0\0\0\0\0");
i.fromNumber = function (e) {
  if (e === 0) {
    return o;
  }
  const t = e < 0;
  if (t) {
    e = -e;
  }
  let r = e >>> 0;
  let n = ((e - r) / 4294967296) >>> 0;
  if (t) {
    n = ~n >>> 0;
    r = ~r >>> 0;
    if (++r > 4294967295) {
      r = 0;
      if (++n > 4294967295) {
        n = 0;
      }
    }
  }
  return new i(r, n);
};
i.from = function (e) {
  if (typeof e === "number") {
    return i.fromNumber(e);
  }
  if (n.isString(e)) {
    if (!n.Long) {
      return i.fromNumber(parseInt(e, 10));
    } else {
      e = n.Long.fromString(e);
    }
  }
  if (e.low || e.high) {
    return new i(e.low >>> 0, e.high >>> 0);
  }
  return o;
};
i.prototype.toNumber = function (e) {
  if (!e && this.hi >>> 31) {
    const t = (~this.lo + 1) >>> 0;
    let r = ~this.hi >>> 0;
    if (!t) {
      r = (r + 1) >>> 0;
    }
    return -(t + 4294967296 * r);
  }
  return this.lo + 4294967296 * this.hi;
};
i.prototype.toLong = function (e) {
  if (n.Long) {
    return new n.Long(0 | this.lo, 0 | this.hi, !!e);
  }
  return {
    low: 0 | this.lo,
    high: 0 | this.hi,
    unsigned: !!e,
  };
};
const charCodeAt = String.prototype.charCodeAt;
i.fromHash = function (e) {
  if (e === s) {
    return o;
  }
  return new i(
    (charCodeAt.call(e, 0) |
      (charCodeAt.call(e, 1) << 8) |
      (charCodeAt.call(e, 2) << 16) |
      (charCodeAt.call(e, 3) << 24)) >>>
      0,
    (charCodeAt.call(e, 4) |
      (charCodeAt.call(e, 5) << 8) |
      (charCodeAt.call(e, 6) << 16) |
      (charCodeAt.call(e, 7) << 24)) >>>
      0,
  );
};
i.prototype.toHash = function () {
  return String.fromCharCode(
    255 & this.lo,
    (this.lo >>> 8) & 255,
    (this.lo >>> 16) & 255,
    this.lo >>> 24,
    255 & this.hi,
    (this.hi >>> 8) & 255,
    (this.hi >>> 16) & 255,
    this.hi >>> 24,
  );
};
i.prototype.zzEncode = function () {
  const e = this.hi >> 31;
  this.hi = (((this.hi << 1) | (this.lo >>> 31)) ^ e) >>> 0;
  this.lo = ((this.lo << 1) ^ e) >>> 0;
  return this;
};
i.prototype.zzDecode = function () {
  const e = -(1 & this.lo);
  this.lo = (((this.lo >>> 1) | (this.hi << 31)) ^ e) >>> 0;
  this.hi = ((this.hi >>> 1) ^ e) >>> 0;
  return this;
};
i.prototype.length = function () {
  const e = this.lo;
  const t = ((this.lo >>> 28) | (this.hi << 4)) >>> 0;
  const r = this.hi >>> 24;
  if (r === 0) {
    if (t === 0) {
      if (e < 16384) {
        if (e < 128) {
          return 1;
        }
        return 2;
      }
      if (e < 2097152) {
        return 3;
      }
      return 4;
    }
    if (t < 16384) {
      if (t < 128) {
        return 5;
      }
      return 6;
    }
    if (t < 2097152) {
      return 7;
    }
    return 8;
  }
  if (r < 128) {
    return 9;
  }
  return 10;
};
