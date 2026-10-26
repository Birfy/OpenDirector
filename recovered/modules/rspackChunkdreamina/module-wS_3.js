import { fromByteArray, toByteArray } from "./module-jG_2.js";
import o from "Nk";
let i =
  typeof Symbol === "function" && typeof Symbol.for === "function"
    ? Symbol.for("nodejs.util.inspect.custom")
    : null;
function a(e) {
  if (e > 2147483647) {
    throw RangeError('The value "' + e + '" is invalid for option "size"');
  }
  let t = new Uint8Array(e);
  Object.setPrototypeOf(t, Buffer.prototype);
  return t;
}
export function Buffer(e, t, r) {
  if (typeof e === "number") {
    if (typeof t === "string") {
      throw TypeError(
        'The "string" argument must be of type string. Received type number',
      );
    }
    return f(e);
  }
  return u(e, t, r);
}
function u(e, t, r) {
  if (typeof e === "string") {
    const n = e;
    let o = t;
    if (typeof o !== "string" || o === "") {
      o = "utf8";
    }
    if (!Buffer.isEncoding(o)) {
      throw TypeError("Unknown encoding: " + o);
    }
    let r = 0 | v(n, o);
    let i = a(r);
    let u = i.write(n, o);
    if (u !== r) {
      i = i.slice(0, u);
    }
    return i;
  }
  if (ArrayBuffer.isView(e)) {
    const i = e;
    if (P(i, Uint8Array)) {
      let e = new Uint8Array(i);
      return p(e.buffer, e.byteOffset, e.byteLength);
    }
    return l(i);
  }
  if (e == null) {
    throw TypeError(
      `The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ${typeof e}`,
    );
  }
  if (
    P(e, ArrayBuffer) ||
    (e && P(e.buffer, ArrayBuffer)) ||
    (typeof SharedArrayBuffer !== "undefined" &&
      (P(e, SharedArrayBuffer) || (e && P(e.buffer, SharedArrayBuffer))))
  ) {
    return p(e, t, r);
  }
  if (typeof e === "number") {
    throw TypeError(
      'The "value" argument must not be of type number. Received type number',
    );
  }
  let u = e.valueOf && e.valueOf();
  if (u != null && u !== e) {
    return Buffer.from(u, t, r);
  }
  let c = ((e) => {
    if (Buffer.isBuffer(e)) {
      let t = 0 | h(e.length);
      let r = a(t);
      if (r.length !== 0) {
        e.copy(r, 0, 0, t);
      }
      return r;
    }
    if (e.length !== undefined) {
      if (typeof e.length !== "number" || ((e) => e != e)(e.length)) {
        return a(0);
      }
      return l(e);
    }
    if (e.type === "Buffer" && Array.isArray(e.data)) {
      return l(e.data);
    }
  })(e);
  if (c) {
    return c;
  }
  if (
    typeof Symbol !== "undefined" &&
    Symbol.toPrimitive != null &&
    typeof e[Symbol.toPrimitive] === "function"
  ) {
    return Buffer.from(e[Symbol.toPrimitive]("string"), t, r);
  }
  throw TypeError(
    `The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ${typeof e}`,
  );
}
function c(e) {
  if (typeof e !== "number") {
    throw TypeError('"size" argument must be of type number');
  }
  if (e < 0) {
    throw RangeError('The value "' + e + '" is invalid for option "size"');
  }
}
function f(e) {
  c(e);
  return a(e < 0 ? 0 : 0 | h(e));
}
function l(e) {
  let t = e.length < 0 ? 0 : 0 | h(e.length);
  let r = a(t);
  for (let n = 0; n < t; n += 1) {
    r[n] = 255 & e[n];
  }
  return r;
}
function p(e, t, r) {
  let n;
  if (t < 0 || e.byteLength < t) {
    throw RangeError('"offset" is outside of buffer bounds');
  }
  if (e.byteLength < t + (r || 0)) {
    throw RangeError('"length" is outside of buffer bounds');
  }
  Object.setPrototypeOf(
    (n =
      t === undefined && r === undefined
        ? new Uint8Array(e)
        : r === undefined
          ? new Uint8Array(e, t)
          : new Uint8Array(e, t, r)),
    Buffer.prototype,
  );
  return n;
}
function h(e) {
  if (e >= 2147483647) {
    throw RangeError(
      "Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes",
    );
  }
  return 0 | e;
}
function v(e, t) {
  if (Buffer.isBuffer(e)) {
    return e.length;
  }
  if (ArrayBuffer.isView(e) || P(e, ArrayBuffer)) {
    return e.byteLength;
  }
  if (typeof e !== "string") {
    throw TypeError(
      `The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ${typeof e}`,
    );
  }
  let e_length = e.length;
  let n = arguments.length > 2 && arguments[2] === true;
  if (!n && e_length === 0) {
    return 0;
  }
  let o = false;
  while (true) {
    switch (t) {
      case "ascii":
      case "latin1":
      case "binary":
        return e_length;
      case "utf8":
      case "utf-8":
        return B(e).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return 2 * e_length;
      case "hex":
        return e_length >>> 1;
      case "base64":
        return q(e).length;
      default:
        if (o) {
          if (n) {
            return -1;
          }
          return B(e).length;
        }
        t = ("" + t).toLowerCase();
        o = true;
    }
  }
}
function d(e, t, r) {
  let o = false;
  if (t === undefined || t < 0) {
    t = 0;
  }
  if (
    t > this.length ||
    ((r === undefined || r > this.length) && (r = this.length),
    r <= 0 || (r >>>= 0) <= (t >>>= 0))
  ) {
    return "";
  }
  for (e || (e = "utf8"); ;) {
    switch (e) {
      case "hex":
        return ((e, t, r) => {
          let e_length = e.length;
          if (!t || t < 0) {
            t = 0;
          }
          if (!r || r < 0 || r > e_length) {
            r = e_length;
          }
          let o = "";
          for (let n = t; n < r; ++n) {
            o += F[e[n]];
          }
          return o;
        })(this, t, r);
      case "utf8":
      case "utf-8":
        return x(this, t, r);
      case "ascii":
        return ((e, t, r) => {
          let n = "";
          r = Math.min(e.length, r);
          for (let o = t; o < r; ++o) {
            n += String.fromCharCode(127 & e[o]);
          }
          return n;
        })(this, t, r);
      case "latin1":
      case "binary":
        return ((e, t, r) => {
          let n = "";
          r = Math.min(e.length, r);
          for (let o = t; o < r; ++o) {
            n += String.fromCharCode(e[o]);
          }
          return n;
        })(this, t, r);
      case "base64":
        let i;
        let a;
        let s;
        i = this;
        a = t;
        s = r;
        if (a === 0 && s === i.length) {
          return fromByteArray(i);
        }
        return fromByteArray(i.slice(a, s));
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return ((e, t, r) => {
          let n = e.slice(t, r);
          let o = "";
          for (let e = 0; e < n.length - 1; e += 2) {
            o += String.fromCharCode(n[e] + 256 * n[e + 1]);
          }
          return o;
        })(this, t, r);
      default:
        if (o) {
          throw TypeError("Unknown encoding: " + e);
        }
        e = (e + "").toLowerCase();
        o = true;
    }
  }
}
function g(e, t, r) {
  let n = e[t];
  e[t] = e[r];
  e[r] = n;
}
function y(e, t, r, n, o) {
  let i;
  if (e.length === 0) {
    return -1;
  }
  if (typeof r === "string") {
    n = r;
    r = 0;
  } else if (r > 2147483647) {
    r = 2147483647;
  } else if (r < -2147483648) {
    r = -2147483648;
  }
  if ((i = r *= 1) != i) {
    r = o ? 0 : e.length - 1;
  }
  if (r < 0) {
    r = e.length + r;
  }
  if (r >= e.length) {
    if (o) {
      return -1;
    } else {
      r = e.length - 1;
    }
  } else if (r < 0) {
    if (!o) {
      return -1;
    } else {
      r = 0;
    }
  }
  if (typeof t === "string") {
    t = Buffer.from(t, n);
  }
  if (Buffer.isBuffer(t)) {
    if (t.length === 0) {
      return -1;
    }
    return m(e, t, r, n, o);
  }
  if (typeof t === "number") {
    t &= 255;
    if (typeof Uint8Array.prototype.indexOf === "function") {
      if (o) {
        return Uint8Array.prototype.indexOf.call(e, t, r);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(e, t, r);
      }
    }
    return m(e, [t], r, n, o);
  }
  throw TypeError("val must be string, number or Buffer");
}
function m(e, t, r, n, o) {
  let i;
  let a = 1;
  let e_length = e.length;
  let t_length = t.length;
  if (
    n !== undefined &&
    ((n = String(n).toLowerCase()) === "ucs2" ||
      n === "ucs-2" ||
      n === "utf16le" ||
      n === "utf-16le")
  ) {
    if (e.length < 2 || t.length < 2) {
      return -1;
    }
    a = 2;
    e_length /= 2;
    t_length /= 2;
    r /= 2;
  }
  function c(e, t) {
    if (a === 1) {
      return e[t];
    }
    return e.readUInt16BE(t * a);
  }
  if (o) {
    let n = -1;
    for (i = r; i < e_length; i++) {
      if (c(e, i) === c(t, n === -1 ? 0 : i - n)) {
        if (n === -1) {
          n = i;
        }
        if (i - n + 1 === t_length) {
          return n * a;
        }
      } else {
        if (n !== -1) {
          i -= i - n;
        }
        n = -1;
      }
    }
  } else {
    if (r + t_length > e_length) {
      r = e_length - t_length;
    }
    for (i = r; i >= 0; i--) {
      let r = true;
      for (let n = 0; n < t_length; n++) {
        if (c(e, i + n) !== c(t, n)) {
          r = false;
          break;
        }
      }
      if (r) {
        return i;
      }
    }
  }
  return -1;
}
function x(e, t, r) {
  r = Math.min(e.length, r);
  let n = [];
  let o = t;
  while (o < r) {
    let t = e[o];
    let i = null;
    let a = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
    if (o + a <= r) {
      let r;
      let n;
      let s;
      let u;
      switch (a) {
        case 1:
          if (t < 128) {
            i = t;
          }
          break;
        case 2:
          if (
            (192 & (r = e[o + 1])) == 128 &&
            (u = ((31 & t) << 6) | (63 & r)) > 127
          ) {
            i = u;
          }
          break;
        case 3:
          r = e[o + 1];
          n = e[o + 2];
          if (
            (192 & r) == 128 &&
            (192 & n) == 128 &&
            (u = ((15 & t) << 12) | ((63 & r) << 6) | (63 & n)) > 2047 &&
            (u < 55296 || u > 57343)
          ) {
            i = u;
          }
          break;
        case 4:
          r = e[o + 1];
          n = e[o + 2];
          s = e[o + 3];
          if (
            (192 & r) == 128 &&
            (192 & n) == 128 &&
            (192 & s) == 128 &&
            (u =
              ((15 & t) << 18) |
              ((63 & r) << 12) |
              ((63 & n) << 6) |
              (63 & s)) > 65535 &&
            u < 1114112
          ) {
            i = u;
          }
      }
    }
    if (i === null) {
      i = 65533;
      a = 1;
    } else if (i > 65535) {
      i -= 65536;
      n.push(((i >>> 10) & 1023) | 55296);
      i = 56320 | (1023 & i);
    }
    n.push(i);
    o += a;
  }
  const i = n;
  let i_length = i.length;
  if (i_length <= 4096) {
    return String.fromCharCode.apply(String, i);
  }
  let s = "";
  let u = 0;
  while (u < i_length) {
    s += String.fromCharCode.apply(String, i.slice(u, (u += 4096)));
  }
  return s;
}
function b(e, t, r) {
  if (e % 1 != 0 || e < 0) {
    throw RangeError("offset is not uint");
  }
  if (e + t > r) {
    throw RangeError("Trying to access beyond buffer length");
  }
}
function w(e, t, r, n, o, i) {
  if (!Buffer.isBuffer(e)) {
    throw TypeError('"buffer" argument must be a Buffer instance');
  }
  if (t > o || t < i) {
    throw RangeError('"value" argument is out of bounds');
  }
  if (r + n > e.length) {
    throw RangeError("Index out of range");
  }
}
function A(e, t, r, n, o) {
  _(t, n, o, e, r, 7);
  let i = Number(t & BigInt(4294967295));
  e[r++] = i;
  i >>= 8;
  e[r++] = i;
  i >>= 8;
  e[r++] = i;
  i >>= 8;
  e[r++] = i;
  let a = Number((t >> BigInt(32)) & BigInt(4294967295));
  e[r++] = a;
  a >>= 8;
  e[r++] = a;
  a >>= 8;
  e[r++] = a;
  a >>= 8;
  e[r++] = a;
  return r;
}
function E(e, t, r, n, o) {
  _(t, n, o, e, r, 7);
  let i = Number(t & BigInt(4294967295));
  e[r + 7] = i;
  i >>= 8;
  e[r + 6] = i;
  i >>= 8;
  e[r + 5] = i;
  i >>= 8;
  e[r + 4] = i;
  let a = Number((t >> BigInt(32)) & BigInt(4294967295));
  e[r + 3] = a;
  a >>= 8;
  e[r + 2] = a;
  a >>= 8;
  e[r + 1] = a;
  a >>= 8;
  e[r] = a;
  return r + 8;
}
function j(e, t, r, n, o, i) {
  if (r + n > e.length || r < 0) {
    throw RangeError("Index out of range");
  }
}
function I(e, t, r, n, i) {
  t *= 1;
  r >>>= 0;
  if (!i) {
    j(e, t, r, 4, 3.4028234663852886e38, -3.4028234663852886e38);
  }
  o.write(e, t, r, n, 23, 4);
  return r + 4;
}
function R(e, t, r, n, i) {
  t *= 1;
  r >>>= 0;
  if (!i) {
    j(e, t, r, 8, 1.7976931348623157e308, -1.7976931348623157e308);
  }
  o.write(e, t, r, n, 52, 8);
  return r + 8;
}
export const SlowBuffer = function (e) {
  if (+e != e) {
    e = 0;
  }
  return Buffer.alloc(+e);
};
export var INSPECT_MAX_BYTES = 50;
export const kMaxLength = 2147483647;
Buffer.TYPED_ARRAY_SUPPORT = (() => {
  try {
    let e = new Uint8Array(1);
    let t = {
      foo: function () {
        return 42;
      },
    };
    Object.setPrototypeOf(t, Uint8Array.prototype);
    Object.setPrototypeOf(e, t);
    return e.foo() === 42;
  } catch (e) {
    return false;
  }
})();
if (
  !Buffer.TYPED_ARRAY_SUPPORT &&
  typeof console !== "undefined" &&
  typeof console.error === "function"
) {
  console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.",
  );
}
Object.defineProperty(Buffer.prototype, "parent", {
  enumerable: true,
  get: function () {
    if (Buffer.isBuffer(this)) {
      return this.buffer;
    }
  },
});
Object.defineProperty(Buffer.prototype, "offset", {
  enumerable: true,
  get: function () {
    if (Buffer.isBuffer(this)) {
      return this.byteOffset;
    }
  },
});
Buffer.poolSize = 8192;
Buffer.from = function (e, t, r) {
  return u(e, t, r);
};
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
Buffer.alloc = function (e, t, r) {
  c(e);
  if (e <= 0) {
    return a(e);
  }
  if (t !== undefined) {
    if (typeof r === "string") {
      return a(e).fill(t, r);
    }
    return a(e).fill(t);
  }
  return a(e);
};
Buffer.allocUnsafe = function (e) {
  return f(e);
};
Buffer.allocUnsafeSlow = function (e) {
  return f(e);
};
Buffer.isBuffer = function (e) {
  return e != null && e._isBuffer === true && e !== Buffer.prototype;
};
Buffer.compare = function (e, t) {
  if (P(e, Uint8Array)) {
    e = Buffer.from(e, e.offset, e.byteLength);
  }
  if (P(t, Uint8Array)) {
    t = Buffer.from(t, t.offset, t.byteLength);
  }
  if (!Buffer.isBuffer(e) || !Buffer.isBuffer(t)) {
    throw TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array',
    );
  }
  if (e === t) {
    return 0;
  }
  let e_length = e.length;
  let t_length = t.length;
  for (let o = 0, i = Math.min(e_length, t_length); o < i; ++o) {
    if (e[o] !== t[o]) {
      e_length = e[o];
      t_length = t[o];
      break;
    }
  }
  if (e_length < t_length) {
    return -1;
  }
  return +(t_length < e_length);
};
Buffer.isEncoding = function (e) {
  switch (String(e).toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "latin1":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return true;
    default:
      return false;
  }
};
Buffer.concat = function (e, t) {
  let r;
  if (!Array.isArray(e)) {
    throw TypeError('"list" argument must be an Array of Buffers');
  }
  if (e.length === 0) {
    return Buffer.alloc(0);
  }
  if (t === undefined) {
    r = 0;
    for (t = 0; r < e.length; ++r) {
      t += e[r].length;
    }
  }
  let n = Buffer.allocUnsafe(t);
  let o = 0;
  for (r = 0; r < e.length; ++r) {
    let t = e[r];
    if (P(t, Uint8Array)) {
      if (o + t.length > n.length) {
        if (!Buffer.isBuffer(t)) {
          t = Buffer.from(t);
        }
        t.copy(n, o);
      } else {
        Uint8Array.prototype.set.call(n, t, o);
      }
    } else if (Buffer.isBuffer(t)) {
      t.copy(n, o);
    } else {
      throw TypeError('"list" argument must be an Array of Buffers');
    }
    o += t.length;
  }
  return n;
};
Buffer.byteLength = v;
Buffer.prototype._isBuffer = true;
Buffer.prototype.swap16 = function () {
  let length = this.length;
  if (length % 2 != 0) {
    throw RangeError("Buffer size must be a multiple of 16-bits");
  }
  for (let t = 0; t < length; t += 2) {
    g(this, t, t + 1);
  }
  return this;
};
Buffer.prototype.swap32 = function () {
  let length = this.length;
  if (length % 4 != 0) {
    throw RangeError("Buffer size must be a multiple of 32-bits");
  }
  for (let t = 0; t < length; t += 4) {
    g(this, t, t + 3);
    g(this, t + 1, t + 2);
  }
  return this;
};
Buffer.prototype.swap64 = function () {
  let length = this.length;
  if (length % 8 != 0) {
    throw RangeError("Buffer size must be a multiple of 64-bits");
  }
  for (let t = 0; t < length; t += 8) {
    g(this, t, t + 7);
    g(this, t + 1, t + 6);
    g(this, t + 2, t + 5);
    g(this, t + 3, t + 4);
  }
  return this;
};
Buffer.prototype.toString = function () {
  let length = this.length;
  if (length === 0) {
    return "";
  }
  if (arguments.length == 0) {
    return x(this, 0, length);
  }
  return d.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function (e) {
  if (!Buffer.isBuffer(e)) {
    throw TypeError("Argument must be a Buffer");
  }
  return this === e || Buffer.compare(this, e) === 0;
};
Buffer.prototype.inspect = function () {
  let e = "";
  let r = INSPECT_MAX_BYTES;
  e = this.toString("hex", 0, r)
    .replace(/(.{2})/g, "$1 ")
    .trim();
  if (this.length > r) {
    e += " ... ";
  }
  return "<Buffer " + e + ">";
};
if (i) {
  Buffer.prototype[i] = Buffer.prototype.inspect;
}
Buffer.prototype.compare = function (e, t = 0, r, n = 0, o) {
  if (P(e, Uint8Array)) {
    e = Buffer.from(e, e.offset, e.byteLength);
  }
  if (!Buffer.isBuffer(e)) {
    throw TypeError(
      `The "target" argument must be one of type Buffer or Uint8Array. Received type ${typeof e}`,
    );
  }
  if (r === undefined) {
    r = e ? e.length : 0;
  }
  if (o === undefined) {
    o = this.length;
  }
  if (t < 0 || r > e.length || n < 0 || o > this.length) {
    throw RangeError("out of range index");
  }
  if (n >= o && t >= r) {
    return 0;
  }
  if (n >= o) {
    return -1;
  }
  if (t >= r) {
    return 1;
  }
  t >>>= 0;
  r >>>= 0;
  n >>>= 0;
  o >>>= 0;
  if (this === e) {
    return 0;
  }
  let i = o - n;
  let a = r - t;
  let u = Math.min(i, a);
  let c = this.slice(n, o);
  let f = e.slice(t, r);
  for (let e = 0; e < u; ++e) {
    if (c[e] !== f[e]) {
      i = c[e];
      a = f[e];
      break;
    }
  }
  if (i < a) {
    return -1;
  }
  return +(a < i);
};
Buffer.prototype.includes = function (e, t, r) {
  return this.indexOf(e, t, r) !== -1;
};
Buffer.prototype.indexOf = function (e, t, r) {
  return y(this, e, t, r, true);
};
Buffer.prototype.lastIndexOf = function (e, t, r) {
  return y(this, e, t, r, false);
};
Buffer.prototype.write = function (e, t, r, n) {
  let o;
  let i;
  let a;
  let s;
  let u;
  let c;
  let f;
  let l;
  if (t === undefined) {
    n = "utf8";
    r = this.length;
    t = 0;
  } else if (r === undefined && typeof t === "string") {
    n = t;
    r = this.length;
    t = 0;
  } else if (isFinite(t)) {
    t >>>= 0;
    if (isFinite(r)) {
      r >>>= 0;
      if (n === undefined) {
        n = "utf8";
      }
    } else {
      n = r;
      r = undefined;
    }
  } else {
    throw Error(
      "Buffer.write(string, encoding, offset[, length]) is no longer supported",
    );
  }
  let p = this.length - t;
  if (r === undefined || r > p) {
    r = p;
  }
  if ((e.length > 0 && (r < 0 || t < 0)) || t > this.length) {
    throw RangeError("Attempt to write outside buffer bounds");
  }
  if (!n) {
    n = "utf8";
  }
  let h = false;
  while (true) {
    switch (n) {
      case "hex":
        return ((e, t, r, n) => {
          let o;
          r = Number(r) || 0;
          let i = e.length - r;
          if (n) {
            if ((n = Number(n)) > i) {
              n = i;
            }
          } else {
            n = i;
          }
          let t_length = t.length;
          if (n > t_length / 2) {
            n = t_length / 2;
          }
          for (o = 0; o < n; ++o) {
            let s;
            let n = parseInt(t.substr(2 * o, 2), 16);
            if ((s = n) != s) {
              break;
            }
            e[r + o] = n;
          }
          return o;
        })(this, e, t, r);
      case "utf8":
      case "utf-8":
        o = t;
        i = r;
        return N(B(e, this.length - o), this, o, i);
      case "ascii":
      case "latin1":
      case "binary":
        a = t;
        s = r;
        return N(
          ((e) => {
            let t = [];
            for (let r = 0; r < e.length; ++r) {
              t.push(255 & e.charCodeAt(r));
            }
            return t;
          })(e),
          this,
          a,
          s,
        );
      case "base64":
        u = t;
        c = r;
        return N(q(e), this, u, c);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        f = t;
        l = r;
        return N(
          ((e, t) => {
            let r;
            let n;
            let o = [];
            for (let i = 0; i < e.length && !((t -= 2) < 0); ++i) {
              n = (r = e.charCodeAt(i)) >> 8;
              o.push(r % 256);
              o.push(n);
            }
            return o;
          })(e, this.length - f),
          this,
          f,
          l,
        );
      default:
        if (h) {
          throw TypeError("Unknown encoding: " + n);
        }
        n = ("" + n).toLowerCase();
        h = true;
    }
  }
};
Buffer.prototype.toJSON = function () {
  return {
    type: "Buffer",
    data: Array.prototype.slice.call(this._arr || this, 0),
  };
};
Buffer.prototype.slice = function (e, t) {
  let length = this.length;
  e = ~~e;
  t = t === undefined ? length : ~~t;
  if (e < 0) {
    if ((e += length) < 0) {
      e = 0;
    }
  } else if (e > length) {
    e = length;
  }
  if (t < 0) {
    if ((t += length) < 0) {
      t = 0;
    }
  } else if (t > length) {
    t = length;
  }
  if (t < e) {
    t = e;
  }
  let n = this.subarray(e, t);
  Object.setPrototypeOf(n, Buffer.prototype);
  return n;
};
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function (e, t, r) {
  e >>>= 0;
  t >>>= 0;
  if (!r) {
    b(e, t, this.length);
  }
  let n = this[e];
  let o = 1;
  let i = 0;
  while (++i < t && (o *= 256)) {
    n += this[e + i] * o;
  }
  return n;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function (e, t, r) {
  e >>>= 0;
  t >>>= 0;
  if (!r) {
    b(e, t, this.length);
  }
  let n = this[e + --t];
  let o = 1;
  while (t > 0 && (o *= 256)) {
    n += this[e + --t] * o;
  }
  return n;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function (e, t) {
  e >>>= 0;
  if (!t) {
    b(e, 1, this.length);
  }
  return this[e];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function (
  e,
  t,
) {
  e >>>= 0;
  if (!t) {
    b(e, 2, this.length);
  }
  return this[e] | (this[e + 1] << 8);
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function (
  e,
  t,
) {
  e >>>= 0;
  if (!t) {
    b(e, 2, this.length);
  }
  return (this[e] << 8) | this[e + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function (
  e,
  t,
) {
  e >>>= 0;
  if (!t) {
    b(e, 4, this.length);
  }
  return (
    (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
    16777216 * this[e + 3]
  );
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function (
  e,
  t,
) {
  e >>>= 0;
  if (!t) {
    b(e, 4, this.length);
  }
  return (
    16777216 * this[e] +
    ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
  );
};
Buffer.prototype.readBigUInt64LE = C(function (e) {
  T((e >>>= 0), "offset");
  let t = this[e];
  let r = this[e + 7];
  if (t === undefined || r === undefined) {
    k(e, this.length - 8);
  }
  let n = t + 256 * this[++e] + 65536 * this[++e] + 16777216 * this[++e];
  let o = this[++e] + 256 * this[++e] + 65536 * this[++e] + 16777216 * r;
  return BigInt(n) + (BigInt(o) << BigInt(32));
});
Buffer.prototype.readBigUInt64BE = C(function (e) {
  T((e >>>= 0), "offset");
  let t = this[e];
  let r = this[e + 7];
  if (t === undefined || r === undefined) {
    k(e, this.length - 8);
  }
  let n = 16777216 * t + 65536 * this[++e] + 256 * this[++e] + this[++e];
  let o = 16777216 * this[++e] + 65536 * this[++e] + 256 * this[++e] + r;
  return (BigInt(n) << BigInt(32)) + BigInt(o);
});
Buffer.prototype.readIntLE = function (e, t, r) {
  e >>>= 0;
  t >>>= 0;
  if (!r) {
    b(e, t, this.length);
  }
  let n = this[e];
  let o = 1;
  let i = 0;
  while (++i < t && (o *= 256)) {
    n += this[e + i] * o;
  }
  if (n >= (o *= 128)) {
    n -= 2 ** (8 * t);
  }
  return n;
};
Buffer.prototype.readIntBE = function (e, t, r) {
  e >>>= 0;
  t >>>= 0;
  if (!r) {
    b(e, t, this.length);
  }
  let n = t;
  let o = 1;
  let i = this[e + --n];
  while (n > 0 && (o *= 256)) {
    i += this[e + --n] * o;
  }
  if (i >= (o *= 128)) {
    i -= 2 ** (8 * t);
  }
  return i;
};
Buffer.prototype.readInt8 = function (e, t) {
  e >>>= 0;
  if (!t) {
    b(e, 1, this.length);
  }
  if (128 & this[e]) {
    return -((255 - this[e] + 1) * 1);
  }
  return this[e];
};
Buffer.prototype.readInt16LE = function (e, t) {
  e >>>= 0;
  if (!t) {
    b(e, 2, this.length);
  }
  let r = this[e] | (this[e + 1] << 8);
  if (32768 & r) {
    return 4294901760 | r;
  }
  return r;
};
Buffer.prototype.readInt16BE = function (e, t) {
  e >>>= 0;
  if (!t) {
    b(e, 2, this.length);
  }
  let r = this[e + 1] | (this[e] << 8);
  if (32768 & r) {
    return 4294901760 | r;
  }
  return r;
};
Buffer.prototype.readInt32LE = function (e, t) {
  e >>>= 0;
  if (!t) {
    b(e, 4, this.length);
  }
  return (
    this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24)
  );
};
Buffer.prototype.readInt32BE = function (e, t) {
  e >>>= 0;
  if (!t) {
    b(e, 4, this.length);
  }
  return (
    (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]
  );
};
Buffer.prototype.readBigInt64LE = C(function (e) {
  T((e >>>= 0), "offset");
  let t = this[e];
  let r = this[e + 7];
  if (t === undefined || r === undefined) {
    k(e, this.length - 8);
  }
  return (
    (BigInt(
      this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (r << 24),
    ) <<
      BigInt(32)) +
    BigInt(t + 256 * this[++e] + 65536 * this[++e] + 16777216 * this[++e])
  );
});
Buffer.prototype.readBigInt64BE = C(function (e) {
  T((e >>>= 0), "offset");
  let t = this[e];
  let r = this[e + 7];
  if (t === undefined || r === undefined) {
    k(e, this.length - 8);
  }
  return (
    (BigInt((t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e]) <<
      BigInt(32)) +
    BigInt(16777216 * this[++e] + 65536 * this[++e] + 256 * this[++e] + r)
  );
});
Buffer.prototype.readFloatLE = function (e, t) {
  e >>>= 0;
  if (!t) {
    b(e, 4, this.length);
  }
  return o.read(this, e, true, 23, 4);
};
Buffer.prototype.readFloatBE = function (e, t) {
  e >>>= 0;
  if (!t) {
    b(e, 4, this.length);
  }
  return o.read(this, e, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function (e, t) {
  e >>>= 0;
  if (!t) {
    b(e, 8, this.length);
  }
  return o.read(this, e, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function (e, t) {
  e >>>= 0;
  if (!t) {
    b(e, 8, this.length);
  }
  return o.read(this, e, false, 52, 8);
};
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function (
  e,
  t,
  r,
  n,
) {
  e *= 1;
  t >>>= 0;
  r >>>= 0;
  if (!n) {
    let n = 2 ** (8 * r) - 1;
    w(this, e, t, r, n, 0);
  }
  let o = 1;
  let i = 0;
  for (this[t] = 255 & e; ++i < r && (o *= 256);) {
    this[t + i] = (e / o) & 255;
  }
  return t + r;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function (
  e,
  t,
  r,
  n,
) {
  e *= 1;
  t >>>= 0;
  r >>>= 0;
  if (!n) {
    let n = 2 ** (8 * r) - 1;
    w(this, e, t, r, n, 0);
  }
  let o = r - 1;
  let i = 1;
  for (this[t + o] = 255 & e; --o >= 0 && (i *= 256);) {
    this[t + o] = (e / i) & 255;
  }
  return t + r;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function (e, t, r) {
  e *= 1;
  t >>>= 0;
  if (!r) {
    w(this, e, t, 1, 255, 0);
  }
  this[t] = 255 & e;
  return t + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function (
  e,
  t,
  r,
) {
  e *= 1;
  t >>>= 0;
  if (!r) {
    w(this, e, t, 2, 65535, 0);
  }
  this[t] = 255 & e;
  this[t + 1] = e >>> 8;
  return t + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function (
  e,
  t,
  r,
) {
  e *= 1;
  t >>>= 0;
  if (!r) {
    w(this, e, t, 2, 65535, 0);
  }
  this[t] = e >>> 8;
  this[t + 1] = 255 & e;
  return t + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function (
  e,
  t,
  r,
) {
  e *= 1;
  t >>>= 0;
  if (!r) {
    w(this, e, t, 4, 4294967295, 0);
  }
  this[t + 3] = e >>> 24;
  this[t + 2] = e >>> 16;
  this[t + 1] = e >>> 8;
  this[t] = 255 & e;
  return t + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function (
  e,
  t,
  r,
) {
  e *= 1;
  t >>>= 0;
  if (!r) {
    w(this, e, t, 4, 4294967295, 0);
  }
  this[t] = e >>> 24;
  this[t + 1] = e >>> 16;
  this[t + 2] = e >>> 8;
  this[t + 3] = 255 & e;
  return t + 4;
};
Buffer.prototype.writeBigUInt64LE = C(function (e, t = 0) {
  return A(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeBigUInt64BE = C(function (e, t = 0) {
  return E(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeIntLE = function (e, t, r, n) {
  e *= 1;
  t >>>= 0;
  if (!n) {
    let n = 2 ** (8 * r - 1);
    w(this, e, t, r, n - 1, -n);
  }
  let o = 0;
  let i = 1;
  let a = 0;
  for (this[t] = 255 & e; ++o < r && (i *= 256);) {
    if (e < 0 && a === 0 && this[t + o - 1] !== 0) {
      a = 1;
    }
    this[t + o] = (((e / i) | 0) - a) & 255;
  }
  return t + r;
};
Buffer.prototype.writeIntBE = function (e, t, r, n) {
  e *= 1;
  t >>>= 0;
  if (!n) {
    let n = 2 ** (8 * r - 1);
    w(this, e, t, r, n - 1, -n);
  }
  let o = r - 1;
  let i = 1;
  let a = 0;
  for (this[t + o] = 255 & e; --o >= 0 && (i *= 256);) {
    if (e < 0 && a === 0 && this[t + o + 1] !== 0) {
      a = 1;
    }
    this[t + o] = (((e / i) | 0) - a) & 255;
  }
  return t + r;
};
Buffer.prototype.writeInt8 = function (e, t, r) {
  e *= 1;
  t >>>= 0;
  if (!r) {
    w(this, e, t, 1, 127, -128);
  }
  if (e < 0) {
    e = 255 + e + 1;
  }
  this[t] = 255 & e;
  return t + 1;
};
Buffer.prototype.writeInt16LE = function (e, t, r) {
  e *= 1;
  t >>>= 0;
  if (!r) {
    w(this, e, t, 2, 32767, -32768);
  }
  this[t] = 255 & e;
  this[t + 1] = e >>> 8;
  return t + 2;
};
Buffer.prototype.writeInt16BE = function (e, t, r) {
  e *= 1;
  t >>>= 0;
  if (!r) {
    w(this, e, t, 2, 32767, -32768);
  }
  this[t] = e >>> 8;
  this[t + 1] = 255 & e;
  return t + 2;
};
Buffer.prototype.writeInt32LE = function (e, t, r) {
  e *= 1;
  t >>>= 0;
  if (!r) {
    w(this, e, t, 4, 2147483647, -2147483648);
  }
  this[t] = 255 & e;
  this[t + 1] = e >>> 8;
  this[t + 2] = e >>> 16;
  this[t + 3] = e >>> 24;
  return t + 4;
};
Buffer.prototype.writeInt32BE = function (e, t, r) {
  e *= 1;
  t >>>= 0;
  if (!r) {
    w(this, e, t, 4, 2147483647, -2147483648);
  }
  if (e < 0) {
    e = 4294967295 + e + 1;
  }
  this[t] = e >>> 24;
  this[t + 1] = e >>> 16;
  this[t + 2] = e >>> 8;
  this[t + 3] = 255 & e;
  return t + 4;
};
Buffer.prototype.writeBigInt64LE = C(function (e, t = 0) {
  return A(
    this,
    e,
    t,
    -BigInt("0x8000000000000000"),
    BigInt("0x7fffffffffffffff"),
  );
});
Buffer.prototype.writeBigInt64BE = C(function (e, t = 0) {
  return E(
    this,
    e,
    t,
    -BigInt("0x8000000000000000"),
    BigInt("0x7fffffffffffffff"),
  );
});
Buffer.prototype.writeFloatLE = function (e, t, r) {
  return I(this, e, t, true, r);
};
Buffer.prototype.writeFloatBE = function (e, t, r) {
  return I(this, e, t, false, r);
};
Buffer.prototype.writeDoubleLE = function (e, t, r) {
  return R(this, e, t, true, r);
};
Buffer.prototype.writeDoubleBE = function (e, t, r) {
  return R(this, e, t, false, r);
};
Buffer.prototype.copy = function (e, t, r, n) {
  if (!Buffer.isBuffer(e)) {
    throw TypeError("argument should be a Buffer");
  }
  if (!r) {
    r = 0;
  }
  if (!(n || n === 0)) {
    n = this.length;
  }
  if (t >= e.length) {
    t = e.length;
  }
  if (!t) {
    t = 0;
  }
  if (n > 0 && n < r) {
    n = r;
  }
  if (n === r || e.length === 0 || this.length === 0) {
    return 0;
  }
  if (t < 0) {
    throw RangeError("targetStart out of bounds");
  }
  if (r < 0 || r >= this.length) {
    throw RangeError("Index out of range");
  }
  if (n < 0) {
    throw RangeError("sourceEnd out of bounds");
  }
  if (n > this.length) {
    n = this.length;
  }
  if (e.length - t < n - r) {
    n = e.length - t + r;
  }
  let o = n - r;
  if (this === e && typeof Uint8Array.prototype.copyWithin === "function") {
    this.copyWithin(t, r, n);
  } else {
    Uint8Array.prototype.set.call(e, this.subarray(r, n), t);
  }
  return o;
};
Buffer.prototype.fill = function (e, t, r, n) {
  let o;
  if (typeof e === "string") {
    if (typeof t === "string") {
      n = t;
      t = 0;
      r = this.length;
    } else if (typeof r === "string") {
      n = r;
      r = this.length;
    }
    if (n !== undefined && typeof n !== "string") {
      throw TypeError("encoding must be a string");
    }
    if (typeof n === "string" && !Buffer.isEncoding(n)) {
      throw TypeError("Unknown encoding: " + n);
    }
    if (e.length === 1) {
      let t = e.charCodeAt(0);
      if ((n === "utf8" && t < 128) || n === "latin1") {
        e = t;
      }
    }
  } else {
    if (typeof e === "number") {
      e &= 255;
    } else if (typeof e === "boolean") {
      e = Number(e);
    }
  }
  if (t < 0 || this.length < t || this.length < r) {
    throw RangeError("Out of range index");
  }
  if (r <= t) {
    return this;
  }
  t >>>= 0;
  r = r === undefined ? this.length : r >>> 0;
  if (!e) {
    e = 0;
  }
  if (typeof e === "number") {
    for (o = t; o < r; ++o) {
      this[o] = e;
    }
  } else {
    let i = Buffer.isBuffer(e) ? e : Buffer.from(e, n);
    let a = i.length;
    if (a === 0) {
      throw TypeError('The value "' + e + '" is invalid for argument "value"');
    }
    for (o = 0; o < r - t; ++o) {
      this[o + t] = i[o % a];
    }
  }
  return this;
};
let z = {};
function O(e, t, r) {
  z[e] = class extends r {
    constructor() {
      super();
      Object.defineProperty(this, "message", {
        value: t.apply(this, arguments),
        writable: true,
        configurable: true,
      });
      this.name = `${this.name} [${e}]`;
      this.stack;
      delete this.name;
    }
    get code() {
      return e;
    }
    set code(value) {
      Object.defineProperty(this, "code", {
        configurable: true,
        enumerable: true,
        value,
        writable: true,
      });
    }
    toString() {
      return `${this.name} [${e}]: ${this.message}`;
    }
  };
}
function S(e) {
  let t = "";
  let e_length = e.length;
  let n = +(e[0] === "-");
  for (; e_length >= n + 4; e_length -= 3) {
    t = `_${e.slice(e_length - 3, e_length)}${t}`;
  }
  return `${e.slice(0, e_length)}${t}`;
}
function _(e, t, r, n, o, i) {
  if (e > r || e < t) {
    let n;
    let o = typeof t === "bigint" ? "n" : "";
    n =
      i > 3
        ? t === 0 || t === BigInt(0)
          ? `>= 0${o} and < 2${o} ** ${(i + 1) * 8}${o}`
          : `>= -(2${o} ** ${(i + 1) * 8 - 1}${o}) and < 2 ** ${(i + 1) * 8 - 1}${o}`
        : `>= ${t}${o} and <= ${r}${o}`;
    throw new z.ERR_OUT_OF_RANGE("value", n, e);
  }
  T(o, "offset");
  if (n[o] === undefined || n[o + i] === undefined) {
    k(o, n.length - (i + 1));
  }
}
function T(e, t) {
  if (typeof e !== "number") {
    throw new z.ERR_INVALID_ARG_TYPE(t, "number", e);
  }
}
function k(e, t, r) {
  if (Math.floor(e) !== e) {
    T(e, r);
    throw new z.ERR_OUT_OF_RANGE(r || "offset", "an integer", e);
  }
  if (t < 0) {
    throw new z.ERR_BUFFER_OUT_OF_BOUNDS();
  }
  throw new z.ERR_OUT_OF_RANGE(r || "offset", `>= ${+!!r} and <= ${t}`, e);
}
O(
  "ERR_BUFFER_OUT_OF_BOUNDS",
  function (e) {
    if (e) {
      return `${e} is outside of buffer bounds`;
    }
    return "Attempt to access memory outside buffer bounds";
  },
  RangeError,
);
O(
  "ERR_INVALID_ARG_TYPE",
  function (e, t) {
    return `The "${e}" argument must be of type number. Received type ${typeof t}`;
  },
  TypeError,
);
O(
  "ERR_OUT_OF_RANGE",
  function (e, t, r) {
    let n = `The value of "${e}" is out of range.`;
    let o = r;
    if (Number.isInteger(r) && Math.abs(r) > 4294967296) {
      o = S(String(r));
    } else if (typeof r === "bigint") {
      o = String(r);
      if (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) {
        o = S(o);
      }
      o += "n";
    }
    return (n += ` It must be ${t}. Received ${o}`);
  },
  RangeError,
);
let M = /[^+/0-9A-Za-z-_]/g;
function B(e, t) {
  let r;
  t = t || Infinity;
  let e_length = e.length;
  let o = null;
  let i = [];
  for (let a = 0; a < e_length; ++a) {
    if ((r = e.charCodeAt(a)) > 55295 && r < 57344) {
      if (!o) {
        if (r > 56319 || a + 1 === e_length) {
          if ((t -= 3) > -1) {
            i.push(239, 191, 189);
          }
          continue;
        }
        o = r;
        continue;
      }
      if (r < 56320) {
        if ((t -= 3) > -1) {
          i.push(239, 191, 189);
        }
        o = r;
        continue;
      }
      r = (((o - 55296) << 10) | (r - 56320)) + 65536;
    } else {
      if (o && (t -= 3) > -1) {
        i.push(239, 191, 189);
      }
    }
    o = null;
    if (r < 128) {
      if ((t -= 1) < 0) {
        break;
      }
      i.push(r);
    } else if (r < 2048) {
      if ((t -= 2) < 0) {
        break;
      }
      i.push((r >> 6) | 192, (63 & r) | 128);
    } else if (r < 65536) {
      if ((t -= 3) < 0) {
        break;
      }
      i.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
    } else if (r < 1114112) {
      if ((t -= 4) < 0) {
        break;
      }
      i.push(
        (r >> 18) | 240,
        ((r >> 12) & 63) | 128,
        ((r >> 6) & 63) | 128,
        (63 & r) | 128,
      );
    } else {
      throw Error("Invalid code point");
    }
  }
  return i;
}
function q(e) {
  return toByteArray(
    ((e) => {
      if ((e = (e = e.split("=")[0]).trim().replace(M, "")).length < 2) {
        return "";
      }
      while (e.length % 4 != 0) {
        e += "=";
      }
      return e;
    })(e),
  );
}
function N(e, t, r, n) {
  let o;
  for (o = 0; o < n && !(o + r >= t.length) && !(o >= e.length); ++o) {
    t[o + r] = e[o];
  }
  return o;
}
function P(e, t) {
  return (
    e instanceof t ||
    (e != null &&
      e.constructor != null &&
      e.constructor.name != null &&
      e.constructor.name === t.name)
  );
}
let F = (() => {
  let e = "0123456789abcdef";
  let t = Array(256);
  for (let r = 0; r < 16; ++r) {
    let n = 16 * r;
    for (let o = 0; o < 16; ++o) {
      t[n + o] = e[r] + e[o];
    }
  }
  return t;
})();
function C(e) {
  if (typeof BigInt === "undefined") {
    return V;
  }
  return e;
}
function V() {
  throw Error("BigInt not supported");
}
