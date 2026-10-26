import o from "./module-sJv.js";
export default u;
let n;
let i;
const o_LongBits = o.LongBits;
const o_utf8 = o.utf8;
function l(e, t) {
  return RangeError(
    "index out of range: " + e.pos + " + " + (t || 1) + " > " + e.len,
  );
}
function u(e) {
  this.buf = e;
  this.pos = 0;
  this.len = e.length;
}
const f =
  typeof Uint8Array !== "undefined"
    ? function (e) {
        if (e instanceof Uint8Array || Array.isArray(e)) {
          return new u(e);
        }
        throw Error("illegal buffer");
      }
    : function (e) {
        if (Array.isArray(e)) {
          return new u(e);
        }
        throw Error("illegal buffer");
      };
const c = () => {
  if (o.Buffer) {
    return function (e) {
      return (u.create = function (e) {
        if (o.Buffer.isBuffer(e)) {
          return new i(e);
        }
        return f(e);
      })(e);
    };
  }
  return f;
};
function p() {
  const e = new o_LongBits(0, 0);
  let t = 0;
  if (this.len - this.pos > 4) {
    for (; t < 4; ++t) {
      e.lo = (e.lo | ((127 & this.buf[this.pos]) << (7 * t))) >>> 0;
      if (this.buf[this.pos++] < 128) {
        return e;
      }
    }
    e.lo = (e.lo | ((127 & this.buf[this.pos]) << 28)) >>> 0;
    e.hi = (e.hi | ((127 & this.buf[this.pos]) >> 4)) >>> 0;
    if (this.buf[this.pos++] < 128) {
      return e;
    }
    t = 0;
  } else {
    for (; t < 3; ++t) {
      if (this.pos >= this.len) {
        throw l(this);
      }
      e.lo = (e.lo | ((127 & this.buf[this.pos]) << (7 * t))) >>> 0;
      if (this.buf[this.pos++] < 128) {
        return e;
      }
    }
    e.lo = (e.lo | ((127 & this.buf[this.pos++]) << (7 * t))) >>> 0;
    return e;
  }
  if (this.len - this.pos > 4) {
    for (; t < 5; ++t) {
      e.hi = (e.hi | ((127 & this.buf[this.pos]) << (7 * t + 3))) >>> 0;
      if (this.buf[this.pos++] < 128) {
        return e;
      }
    }
  } else {
    for (; t < 5; ++t) {
      if (this.pos >= this.len) {
        throw l(this);
      }
      e.hi = (e.hi | ((127 & this.buf[this.pos]) << (7 * t + 3))) >>> 0;
      if (this.buf[this.pos++] < 128) {
        return e;
      }
    }
  }
  throw Error("invalid varint encoding");
}
function d(buf, t) {
  return (
    (buf[t - 4] |
      (buf[t - 3] << 8) |
      (buf[t - 2] << 16) |
      (buf[t - 1] << 24)) >>>
    0
  );
}
function h() {
  if (this.pos + 8 > this.len) {
    throw l(this, 8);
  }
  return new o_LongBits(
    d(this.buf, (this.pos += 4)),
    d(this.buf, (this.pos += 4)),
  );
}
u.create = c();
u.prototype._slice = o.Array.prototype.subarray || o.Array.prototype.slice;
u.prototype.uint32 =
  ((n = 4294967295),
  function () {
    n = (127 & this.buf[this.pos]) >>> 0;
    if (
      this.buf[this.pos++] < 128 ||
      ((n = (n | ((127 & this.buf[this.pos]) << 7)) >>> 0),
      this.buf[this.pos++] < 128) ||
      ((n = (n | ((127 & this.buf[this.pos]) << 14)) >>> 0),
      this.buf[this.pos++] < 128) ||
      ((n = (n | ((127 & this.buf[this.pos]) << 21)) >>> 0),
      this.buf[this.pos++] < 128) ||
      ((n = (n | ((15 & this.buf[this.pos]) << 28)) >>> 0),
      this.buf[this.pos++] < 128)
    ) {
      return n;
    }
    if ((this.pos += 5) > this.len) {
      this.pos = this.len;
      throw l(this, 10);
    }
    return n;
  });
u.prototype.int32 = function () {
  return 0 | this.uint32();
};
u.prototype.sint32 = function () {
  const e = this.uint32();
  return (e >>> 1) ^ -(1 & e);
};
u.prototype.bool = function () {
  return this.uint32() !== 0;
};
u.prototype.fixed32 = function () {
  if (this.pos + 4 > this.len) {
    throw l(this, 4);
  }
  return d(this.buf, (this.pos += 4));
};
u.prototype.sfixed32 = function () {
  if (this.pos + 4 > this.len) {
    throw l(this, 4);
  }
  return 0 | d(this.buf, (this.pos += 4));
};
u.prototype.float = function () {
  if (this.pos + 4 > this.len) {
    throw l(this, 4);
  }
  const e = o.float.readFloatLE(this.buf, this.pos);
  this.pos += 4;
  return e;
};
u.prototype.double = function () {
  if (this.pos + 8 > this.len) {
    throw l(this, 4);
  }
  const e = o.float.readDoubleLE(this.buf, this.pos);
  this.pos += 8;
  return e;
};
u.prototype.bytes = function () {
  const e = this.uint32();
  const pos = this.pos;
  const r = this.pos + e;
  if (r > this.len) {
    throw l(this, e);
  }
  this.pos += e;
  if (Array.isArray(this.buf)) {
    return this.buf.slice(pos, r);
  }
  if (pos === r) {
    const n = o.Buffer;
    if (n) {
      return n.alloc(0);
    }
    return new this.buf.constructor(0);
  }
  return this._slice.call(this.buf, pos, r);
};
u.prototype.string = function () {
  const e = this.bytes();
  return o_utf8.read(e, 0, e.length);
};
u.prototype.skip = function (e) {
  if (typeof e === "number") {
    if (this.pos + e > this.len) {
      throw l(this, e);
    }
    this.pos += e;
  } else {
    do {
      if (this.pos >= this.len) {
        throw l(this);
      }
    } while (128 & this.buf[this.pos++]);
  }
  return this;
};
u.prototype.skipType = function (e) {
  switch (e) {
    case 0:
      this.skip();
      break;
    case 1:
      this.skip(8);
      break;
    case 2:
      this.skip(this.uint32());
      break;
    case 3:
      while ((e = 7 & this.uint32()) != 4) {
        this.skipType(e);
      }
      break;
    case 5:
      this.skip(4);
      break;
    default:
      throw Error("invalid wire type " + e + " at offset " + this.pos);
  }
  return this;
};
u._configure = function (e) {
  i = e;
  u.create = c();
  i._configure();
  const t = o.Long ? "toLong" : "toNumber";
  o.merge(u.prototype, {
    int64: function () {
      return p.call(this)[t](false);
    },
    uint64: function () {
      return p.call(this)[t](true);
    },
    sint64: function () {
      return p.call(this).zzDecode()[t](false);
    },
    fixed64: function () {
      return h.call(this)[t](true);
    },
    sfixed64: function () {
      return h.call(this)[t](false);
    },
  });
};
