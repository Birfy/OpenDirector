import { fromByteArray, toByteArray } from "./module-Vy.js";
import { read, write } from "./module-Br_2_2.js";
let te =
  typeof Symbol === "function" && typeof Symbol.for === "function"
    ? Symbol.for("nodejs.util.inspect.custom")
    : null;
function tr(J) {
  if (J > 2147483647) {
    throw RangeError('The value "' + J + '" is invalid for option "size"');
  }
  let Z = new Uint8Array(J);
  Object.setPrototypeOf(Z, Buffer.prototype);
  return Z;
}
export function Buffer(J, Z, Q) {
  if (typeof J === "number") {
    if (typeof Z === "string") {
      throw TypeError(
        'The "string" argument must be of type string. Received type number',
      );
    }
    return ta(J);
  }
  return ti(J, Z, Q);
}
function ti(J, Z, Q) {
  if (typeof J === "string") {
    const $ = J;
    let tt = Z;
    if (typeof tt !== "string" || tt === "") {
      tt = "utf8";
    }
    if (!Buffer.isEncoding(tt)) {
      throw TypeError("Unknown encoding: " + tt);
    }
    let Q = 0 | tc($, tt);
    let te = tr(Q);
    let ti = te.write($, tt);
    if (ti !== Q) {
      te = te.slice(0, ti);
    }
    return te;
  }
  if (ArrayBuffer.isView(J)) {
    const te = J;
    if (tj(te, Uint8Array)) {
      let J = new Uint8Array(te);
      return tf(J.buffer, J.byteOffset, J.byteLength);
    }
    return ts(te);
  }
  if (J == null) {
    throw TypeError(
      `The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ${typeof J}`,
    );
  }
  if (
    tj(J, ArrayBuffer) ||
    (J && tj(J.buffer, ArrayBuffer)) ||
    (typeof SharedArrayBuffer !== "undefined" &&
      (tj(J, SharedArrayBuffer) || (J && tj(J.buffer, SharedArrayBuffer))))
  ) {
    return tf(J, Z, Q);
  }
  if (typeof J === "number") {
    throw TypeError(
      'The "value" argument must not be of type number. Received type number',
    );
  }
  let ti = J.valueOf && J.valueOf();
  if (ti != null && ti !== J) {
    return Buffer.from(ti, Z, Q);
  }
  let to = ((J) => {
    if (Buffer.isBuffer(J)) {
      let Z = 0 | tu(J.length);
      let Q = tr(Z);
      if (Q.length !== 0) {
        J.copy(Q, 0, 0, Z);
      }
      return Q;
    }
    if (J.length !== undefined) {
      if (typeof J.length !== "number" || ((J) => J != J)(J.length)) {
        return tr(0);
      }
      return ts(J);
    }
    if (J.type === "Buffer" && Array.isArray(J.data)) {
      return ts(J.data);
    }
  })(J);
  if (to) {
    return to;
  }
  if (
    typeof Symbol !== "undefined" &&
    Symbol.toPrimitive != null &&
    typeof J[Symbol.toPrimitive] === "function"
  ) {
    return Buffer.from(J[Symbol.toPrimitive]("string"), Z, Q);
  }
  throw TypeError(
    `The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ${typeof J}`,
  );
}
function to(J) {
  if (typeof J !== "number") {
    throw TypeError('"size" argument must be of type number');
  }
  if (J < 0) {
    throw RangeError('The value "' + J + '" is invalid for option "size"');
  }
}
function ta(J) {
  to(J);
  return tr(J < 0 ? 0 : 0 | tu(J));
}
function ts(J) {
  let Z = J.length < 0 ? 0 : 0 | tu(J.length);
  let Q = tr(Z);
  for (let $ = 0; $ < Z; $ += 1) {
    Q[$] = 255 & J[$];
  }
  return Q;
}
function tf(J, Z, Q) {
  let $;
  if (Z < 0 || J.byteLength < Z) {
    throw RangeError('"offset" is outside of buffer bounds');
  }
  if (J.byteLength < Z + (Q || 0)) {
    throw RangeError('"length" is outside of buffer bounds');
  }
  Object.setPrototypeOf(
    ($ =
      Z === undefined && Q === undefined
        ? new Uint8Array(J)
        : Q === undefined
          ? new Uint8Array(J, Z)
          : new Uint8Array(J, Z, Q)),
    Buffer.prototype,
  );
  return $;
}
function tu(J) {
  if (J >= 2147483647) {
    throw RangeError(
      "Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes",
    );
  }
  return 0 | J;
}
function tc(J, Z) {
  if (Buffer.isBuffer(J)) {
    return J.length;
  }
  if (ArrayBuffer.isView(J) || tj(J, ArrayBuffer)) {
    return J.byteLength;
  }
  if (typeof J !== "string") {
    throw TypeError(
      `The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ${typeof J}`,
    );
  }
  let J_length = J.length;
  let $ = arguments.length > 2 && arguments[2] === true;
  if (!$ && J_length === 0) {
    return 0;
  }
  let tt = false;
  while (true) {
    switch (Z) {
      case "ascii":
      case "latin1":
      case "binary":
        return J_length;
      case "utf8":
      case "utf-8":
        return tO(J).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return 2 * J_length;
      case "hex":
        return J_length >>> 1;
      case "base64":
        return tT(J).length;
      default:
        if (tt) {
          if ($) {
            return -1;
          }
          return tO(J).length;
        }
        Z = ("" + Z).toLowerCase();
        tt = true;
    }
  }
}
function th(J, Z, Q) {
  let tt = false;
  if (Z === undefined || Z < 0) {
    Z = 0;
  }
  if (
    Z > this.length ||
    ((Q === undefined || Q > this.length) && (Q = this.length),
    Q <= 0 || (Q >>>= 0) <= (Z >>>= 0))
  ) {
    return "";
  }
  for (J || (J = "utf8"); ;) {
    switch (J) {
      case "hex":
        return ((J, Z, Q) => {
          let J_length = J.length;
          if (!Z || Z < 0) {
            Z = 0;
          }
          if (!Q || Q < 0 || Q > J_length) {
            Q = J_length;
          }
          let tt = "";
          for (let $ = Z; $ < Q; ++$) {
            tt += tC[J[$]];
          }
          return tt;
        })(this, Z, Q);
      case "utf8":
      case "utf-8":
        return tb(this, Z, Q);
      case "ascii":
        return ((J, Z, Q) => {
          let $ = "";
          Q = Math.min(J.length, Q);
          for (let tt = Z; tt < Q; ++tt) {
            $ += String.fromCharCode(127 & J[tt]);
          }
          return $;
        })(this, Z, Q);
      case "latin1":
      case "binary":
        return ((J, Z, Q) => {
          let $ = "";
          Q = Math.min(J.length, Q);
          for (let tt = Z; tt < Q; ++tt) {
            $ += String.fromCharCode(J[tt]);
          }
          return $;
        })(this, Z, Q);
      case "base64":
        let te;
        let tr;
        let tn;
        te = this;
        tr = Z;
        tn = Q;
        if (tr === 0 && tn === te.length) {
          return fromByteArray(te);
        }
        return fromByteArray(te.slice(tr, tn));
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return ((J, Z, Q) => {
          let $ = J.slice(Z, Q);
          let tt = "";
          for (let J = 0; J < $.length - 1; J += 2) {
            tt += String.fromCharCode($[J] + 256 * $[J + 1]);
          }
          return tt;
        })(this, Z, Q);
      default:
        if (tt) {
          throw TypeError("Unknown encoding: " + J);
        }
        J = (J + "").toLowerCase();
        tt = true;
    }
  }
}
function td(J, Z, Q) {
  let $ = J[Z];
  J[Z] = J[Q];
  J[Q] = $;
}
function tl(J, Z, Q, $, tt) {
  let te;
  if (J.length === 0) {
    return -1;
  }
  if (typeof Q === "string") {
    $ = Q;
    Q = 0;
  } else if (Q > 2147483647) {
    Q = 2147483647;
  } else if (Q < -2147483648) {
    Q = -2147483648;
  }
  if ((te = Q *= 1) != te) {
    Q = tt ? 0 : J.length - 1;
  }
  if (Q < 0) {
    Q = J.length + Q;
  }
  if (Q >= J.length) {
    if (tt) {
      return -1;
    } else {
      Q = J.length - 1;
    }
  } else if (Q < 0) {
    if (!tt) {
      return -1;
    } else {
      Q = 0;
    }
  }
  if (typeof Z === "string") {
    Z = Buffer.from(Z, $);
  }
  if (Buffer.isBuffer(Z)) {
    if (Z.length === 0) {
      return -1;
    }
    return tp(J, Z, Q, $, tt);
  }
  if (typeof Z === "number") {
    Z &= 255;
    if (typeof Uint8Array.prototype.indexOf === "function") {
      if (tt) {
        return Uint8Array.prototype.indexOf.call(J, Z, Q);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(J, Z, Q);
      }
    }
    return tp(J, [Z], Q, $, tt);
  }
  throw TypeError("val must be string, number or Buffer");
}
function tp(J, Z, Q, $, tt) {
  let te;
  let tr = 1;
  let J_length = J.length;
  let Z_length = Z.length;
  if (
    $ !== undefined &&
    (($ = String($).toLowerCase()) === "ucs2" ||
      $ === "ucs-2" ||
      $ === "utf16le" ||
      $ === "utf-16le")
  ) {
    if (J.length < 2 || Z.length < 2) {
      return -1;
    }
    tr = 2;
    J_length /= 2;
    Z_length /= 2;
    Q /= 2;
  }
  function to(J, Z) {
    if (tr === 1) {
      return J[Z];
    }
    return J.readUInt16BE(Z * tr);
  }
  if (tt) {
    let $ = -1;
    for (te = Q; te < J_length; te++) {
      if (to(J, te) === to(Z, $ === -1 ? 0 : te - $)) {
        if ($ === -1) {
          $ = te;
        }
        if (te - $ + 1 === Z_length) {
          return $ * tr;
        }
      } else {
        if ($ !== -1) {
          te -= te - $;
        }
        $ = -1;
      }
    }
  } else {
    if (Q + Z_length > J_length) {
      Q = J_length - Z_length;
    }
    for (te = Q; te >= 0; te--) {
      let Q = true;
      for (let $ = 0; $ < Z_length; $++) {
        if (to(J, te + $) !== to(Z, $)) {
          Q = false;
          break;
        }
      }
      if (Q) {
        return te;
      }
    }
  }
  return -1;
}
function tb(J, Z, Q) {
  Q = Math.min(J.length, Q);
  let $ = [];
  let tt = Z;
  while (tt < Q) {
    let Z = J[tt];
    let te = null;
    let tr = Z > 239 ? 4 : Z > 223 ? 3 : Z > 191 ? 2 : 1;
    if (tt + tr <= Q) {
      let Q;
      let $;
      let tn;
      let ti;
      switch (tr) {
        case 1:
          if (Z < 128) {
            te = Z;
          }
          break;
        case 2:
          if (
            (192 & (Q = J[tt + 1])) == 128 &&
            (ti = ((31 & Z) << 6) | (63 & Q)) > 127
          ) {
            te = ti;
          }
          break;
        case 3:
          Q = J[tt + 1];
          $ = J[tt + 2];
          if (
            (192 & Q) == 128 &&
            (192 & $) == 128 &&
            (ti = ((15 & Z) << 12) | ((63 & Q) << 6) | (63 & $)) > 2047 &&
            (ti < 55296 || ti > 57343)
          ) {
            te = ti;
          }
          break;
        case 4:
          Q = J[tt + 1];
          $ = J[tt + 2];
          tn = J[tt + 3];
          if (
            (192 & Q) == 128 &&
            (192 & $) == 128 &&
            (192 & tn) == 128 &&
            (ti =
              ((15 & Z) << 18) |
              ((63 & Q) << 12) |
              ((63 & $) << 6) |
              (63 & tn)) > 65535 &&
            ti < 1114112
          ) {
            te = ti;
          }
      }
    }
    if (te === null) {
      te = 65533;
      tr = 1;
    } else if (te > 65535) {
      te -= 65536;
      $.push(((te >>> 10) & 1023) | 55296);
      te = 56320 | (1023 & te);
    }
    $.push(te);
    tt += tr;
  }
  const te = $;
  let te_length = te.length;
  if (te_length <= 4096) {
    return String.fromCharCode.apply(String, te);
  }
  let tn = "";
  let ti = 0;
  while (ti < te_length) {
    tn += String.fromCharCode.apply(String, te.slice(ti, (ti += 4096)));
  }
  return tn;
}
function tv(J, Z, Q) {
  if (J % 1 != 0 || J < 0) {
    throw RangeError("offset is not uint");
  }
  if (J + Z > Q) {
    throw RangeError("Trying to access beyond buffer length");
  }
}
function tg(J, Z, Q, $, tt, te) {
  if (!Buffer.isBuffer(J)) {
    throw TypeError('"buffer" argument must be a Buffer instance');
  }
  if (Z > tt || Z < te) {
    throw RangeError('"value" argument is out of bounds');
  }
  if (Q + $ > J.length) {
    throw RangeError("Index out of range");
  }
}
function ty(J, Z, Q, $, tt) {
  tE(Z, $, tt, J, Q, 7);
  let te = Number(Z & BigInt(4294967295));
  J[Q++] = te;
  te >>= 8;
  J[Q++] = te;
  te >>= 8;
  J[Q++] = te;
  te >>= 8;
  J[Q++] = te;
  let tr = Number((Z >> BigInt(32)) & BigInt(4294967295));
  J[Q++] = tr;
  tr >>= 8;
  J[Q++] = tr;
  tr >>= 8;
  J[Q++] = tr;
  tr >>= 8;
  J[Q++] = tr;
  return Q;
}
function tm(J, Z, Q, $, tt) {
  tE(Z, $, tt, J, Q, 7);
  let te = Number(Z & BigInt(4294967295));
  J[Q + 7] = te;
  te >>= 8;
  J[Q + 6] = te;
  te >>= 8;
  J[Q + 5] = te;
  te >>= 8;
  J[Q + 4] = te;
  let tr = Number((Z >> BigInt(32)) & BigInt(4294967295));
  J[Q + 3] = tr;
  tr >>= 8;
  J[Q + 2] = tr;
  tr >>= 8;
  J[Q + 1] = tr;
  tr >>= 8;
  J[Q] = tr;
  return Q + 8;
}
function tw(J, Z, Q, $, tt, te) {
  if (Q + $ > J.length || Q < 0) {
    throw RangeError("Index out of range");
  }
}
function tx(J, Z, Q, $, te) {
  Z *= 1;
  Q >>>= 0;
  if (!te) {
    tw(J, Z, Q, 4, 3.4028234663852886e38, -3.4028234663852886e38);
  }
  write(J, Z, Q, $, 23, 4);
  return Q + 4;
}
function t_(J, Z, Q, $, te) {
  Z *= 1;
  Q >>>= 0;
  if (!te) {
    tw(J, Z, Q, 8, 1.7976931348623157e308, -1.7976931348623157e308);
  }
  write(J, Z, Q, $, 52, 8);
  return Q + 8;
}
export const SlowBuffer = function (J) {
  if (+J != J) {
    J = 0;
  }
  return Buffer.alloc(+J);
};
export var INSPECT_MAX_BYTES = 50;
export const kMaxLength = 2147483647;
Buffer.TYPED_ARRAY_SUPPORT = (() => {
  try {
    let J = new Uint8Array(1);
    let Z = {
      foo: function () {
        return 42;
      },
    };
    Object.setPrototypeOf(Z, Uint8Array.prototype);
    Object.setPrototypeOf(J, Z);
    return J.foo() === 42;
  } catch (J) {
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
Buffer.from = function (J, Z, Q) {
  return ti(J, Z, Q);
};
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
Buffer.alloc = function (J, Z, Q) {
  to(J);
  if (J <= 0) {
    return tr(J);
  }
  if (Z !== undefined) {
    if (typeof Q === "string") {
      return tr(J).fill(Z, Q);
    }
    return tr(J).fill(Z);
  }
  return tr(J);
};
Buffer.allocUnsafe = function (J) {
  return ta(J);
};
Buffer.allocUnsafeSlow = function (J) {
  return ta(J);
};
Buffer.isBuffer = function (J) {
  return J != null && J._isBuffer === true && J !== Buffer.prototype;
};
Buffer.compare = function (J, Z) {
  if (tj(J, Uint8Array)) {
    J = Buffer.from(J, J.offset, J.byteLength);
  }
  if (tj(Z, Uint8Array)) {
    Z = Buffer.from(Z, Z.offset, Z.byteLength);
  }
  if (!Buffer.isBuffer(J) || !Buffer.isBuffer(Z)) {
    throw TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array',
    );
  }
  if (J === Z) {
    return 0;
  }
  let J_length = J.length;
  let Z_length = Z.length;
  for (let tt = 0, te = Math.min(J_length, Z_length); tt < te; ++tt) {
    if (J[tt] !== Z[tt]) {
      J_length = J[tt];
      Z_length = Z[tt];
      break;
    }
  }
  if (J_length < Z_length) {
    return -1;
  }
  return +(Z_length < J_length);
};
Buffer.isEncoding = function (J) {
  switch (String(J).toLowerCase()) {
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
Buffer.concat = function (J, Z) {
  let Q;
  if (!Array.isArray(J)) {
    throw TypeError('"list" argument must be an Array of Buffers');
  }
  if (J.length === 0) {
    return Buffer.alloc(0);
  }
  if (Z === undefined) {
    Q = 0;
    for (Z = 0; Q < J.length; ++Q) {
      Z += J[Q].length;
    }
  }
  let $ = Buffer.allocUnsafe(Z);
  let tt = 0;
  for (Q = 0; Q < J.length; ++Q) {
    let Z = J[Q];
    if (tj(Z, Uint8Array)) {
      if (tt + Z.length > $.length) {
        if (!Buffer.isBuffer(Z)) {
          Z = Buffer.from(Z);
        }
        Z.copy($, tt);
      } else {
        Uint8Array.prototype.set.call($, Z, tt);
      }
    } else if (Buffer.isBuffer(Z)) {
      Z.copy($, tt);
    } else {
      throw TypeError('"list" argument must be an Array of Buffers');
    }
    tt += Z.length;
  }
  return $;
};
Buffer.byteLength = tc;
Buffer.prototype._isBuffer = true;
Buffer.prototype.swap16 = function () {
  let length = this.length;
  if (length % 2 != 0) {
    throw RangeError("Buffer size must be a multiple of 16-bits");
  }
  for (let Z = 0; Z < length; Z += 2) {
    td(this, Z, Z + 1);
  }
  return this;
};
Buffer.prototype.swap32 = function () {
  let length = this.length;
  if (length % 4 != 0) {
    throw RangeError("Buffer size must be a multiple of 32-bits");
  }
  for (let Z = 0; Z < length; Z += 4) {
    td(this, Z, Z + 3);
    td(this, Z + 1, Z + 2);
  }
  return this;
};
Buffer.prototype.swap64 = function () {
  let length = this.length;
  if (length % 8 != 0) {
    throw RangeError("Buffer size must be a multiple of 64-bits");
  }
  for (let Z = 0; Z < length; Z += 8) {
    td(this, Z, Z + 7);
    td(this, Z + 1, Z + 6);
    td(this, Z + 2, Z + 5);
    td(this, Z + 3, Z + 4);
  }
  return this;
};
Buffer.prototype.toString = function () {
  let length = this.length;
  if (length === 0) {
    return "";
  }
  if (arguments.length == 0) {
    return tb(this, 0, length);
  }
  return th.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function (J) {
  if (!Buffer.isBuffer(J)) {
    throw TypeError("Argument must be a Buffer");
  }
  return this === J || Buffer.compare(this, J) === 0;
};
Buffer.prototype.inspect = function () {
  let J = "";
  let Q = INSPECT_MAX_BYTES;
  J = this.toString("hex", 0, Q)
    .replace(/(.{2})/g, "$1 ")
    .trim();
  if (this.length > Q) {
    J += " ... ";
  }
  return "<Buffer " + J + ">";
};
if (te) {
  Buffer.prototype[te] = Buffer.prototype.inspect;
}
Buffer.prototype.compare = function (J, Z = 0, Q, $ = 0, tt) {
  if (tj(J, Uint8Array)) {
    J = Buffer.from(J, J.offset, J.byteLength);
  }
  if (!Buffer.isBuffer(J)) {
    throw TypeError(
      `The "target" argument must be one of type Buffer or Uint8Array. Received type ${typeof J}`,
    );
  }
  if (Q === undefined) {
    Q = J ? J.length : 0;
  }
  if (tt === undefined) {
    tt = this.length;
  }
  if (Z < 0 || Q > J.length || $ < 0 || tt > this.length) {
    throw RangeError("out of range index");
  }
  if ($ >= tt && Z >= Q) {
    return 0;
  }
  if ($ >= tt) {
    return -1;
  }
  if (Z >= Q) {
    return 1;
  }
  Z >>>= 0;
  Q >>>= 0;
  $ >>>= 0;
  tt >>>= 0;
  if (this === J) {
    return 0;
  }
  let te = tt - $;
  let tr = Q - Z;
  let ti = Math.min(te, tr);
  let to = this.slice($, tt);
  let ta = J.slice(Z, Q);
  for (let J = 0; J < ti; ++J) {
    if (to[J] !== ta[J]) {
      te = to[J];
      tr = ta[J];
      break;
    }
  }
  if (te < tr) {
    return -1;
  }
  return +(tr < te);
};
Buffer.prototype.includes = function (J, Z, Q) {
  return this.indexOf(J, Z, Q) !== -1;
};
Buffer.prototype.indexOf = function (J, Z, Q) {
  return tl(this, J, Z, Q, true);
};
Buffer.prototype.lastIndexOf = function (J, Z, Q) {
  return tl(this, J, Z, Q, false);
};
Buffer.prototype.write = function (J, Z, Q, $) {
  let tt;
  let te;
  let tr;
  let tn;
  let ti;
  let to;
  let ta;
  let ts;
  if (Z === undefined) {
    $ = "utf8";
    Q = this.length;
    Z = 0;
  } else if (Q === undefined && typeof Z === "string") {
    $ = Z;
    Q = this.length;
    Z = 0;
  } else if (isFinite(Z)) {
    Z >>>= 0;
    if (isFinite(Q)) {
      Q >>>= 0;
      if ($ === undefined) {
        $ = "utf8";
      }
    } else {
      $ = Q;
      Q = undefined;
    }
  } else {
    throw Error(
      "Buffer.write(string, encoding, offset[, length]) is no longer supported",
    );
  }
  let tf = this.length - Z;
  if (Q === undefined || Q > tf) {
    Q = tf;
  }
  if ((J.length > 0 && (Q < 0 || Z < 0)) || Z > this.length) {
    throw RangeError("Attempt to write outside buffer bounds");
  }
  if (!$) {
    $ = "utf8";
  }
  let tu = false;
  while (true) {
    switch ($) {
      case "hex":
        return ((J, Z, Q, $) => {
          let tt;
          Q = Number(Q) || 0;
          let te = J.length - Q;
          if ($) {
            if (($ = Number($)) > te) {
              $ = te;
            }
          } else {
            $ = te;
          }
          let Z_length = Z.length;
          if ($ > Z_length / 2) {
            $ = Z_length / 2;
          }
          for (tt = 0; tt < $; ++tt) {
            let tn;
            let $ = parseInt(Z.substr(2 * tt, 2), 16);
            if ((tn = $) != tn) {
              break;
            }
            J[Q + tt] = $;
          }
          return tt;
        })(this, J, Z, Q);
      case "utf8":
      case "utf-8":
        tt = Z;
        te = Q;
        return tB(tO(J, this.length - tt), this, tt, te);
      case "ascii":
      case "latin1":
      case "binary":
        tr = Z;
        tn = Q;
        return tB(
          ((J) => {
            let Z = [];
            for (let Q = 0; Q < J.length; ++Q) {
              Z.push(255 & J.charCodeAt(Q));
            }
            return Z;
          })(J),
          this,
          tr,
          tn,
        );
      case "base64":
        ti = Z;
        to = Q;
        return tB(tT(J), this, ti, to);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        ta = Z;
        ts = Q;
        return tB(
          ((J, Z) => {
            let Q;
            let $;
            let tt = [];
            for (let te = 0; te < J.length && !((Z -= 2) < 0); ++te) {
              $ = (Q = J.charCodeAt(te)) >> 8;
              tt.push(Q % 256);
              tt.push($);
            }
            return tt;
          })(J, this.length - ta),
          this,
          ta,
          ts,
        );
      default:
        if (tu) {
          throw TypeError("Unknown encoding: " + $);
        }
        $ = ("" + $).toLowerCase();
        tu = true;
    }
  }
};
Buffer.prototype.toJSON = function () {
  return {
    type: "Buffer",
    data: Array.prototype.slice.call(this._arr || this, 0),
  };
};
Buffer.prototype.slice = function (J, Z) {
  let length = this.length;
  J = ~~J;
  Z = Z === undefined ? length : ~~Z;
  if (J < 0) {
    if ((J += length) < 0) {
      J = 0;
    }
  } else if (J > length) {
    J = length;
  }
  if (Z < 0) {
    if ((Z += length) < 0) {
      Z = 0;
    }
  } else if (Z > length) {
    Z = length;
  }
  if (Z < J) {
    Z = J;
  }
  let $ = this.subarray(J, Z);
  Object.setPrototypeOf($, Buffer.prototype);
  return $;
};
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function (J, Z, Q) {
  J >>>= 0;
  Z >>>= 0;
  if (!Q) {
    tv(J, Z, this.length);
  }
  let $ = this[J];
  let tt = 1;
  let te = 0;
  while (++te < Z && (tt *= 256)) {
    $ += this[J + te] * tt;
  }
  return $;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function (J, Z, Q) {
  J >>>= 0;
  Z >>>= 0;
  if (!Q) {
    tv(J, Z, this.length);
  }
  let $ = this[J + --Z];
  let tt = 1;
  while (Z > 0 && (tt *= 256)) {
    $ += this[J + --Z] * tt;
  }
  return $;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function (J, Z) {
  J >>>= 0;
  if (!Z) {
    tv(J, 1, this.length);
  }
  return this[J];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function (
  J,
  Z,
) {
  J >>>= 0;
  if (!Z) {
    tv(J, 2, this.length);
  }
  return this[J] | (this[J + 1] << 8);
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function (
  J,
  Z,
) {
  J >>>= 0;
  if (!Z) {
    tv(J, 2, this.length);
  }
  return (this[J] << 8) | this[J + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function (
  J,
  Z,
) {
  J >>>= 0;
  if (!Z) {
    tv(J, 4, this.length);
  }
  return (
    (this[J] | (this[J + 1] << 8) | (this[J + 2] << 16)) +
    16777216 * this[J + 3]
  );
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function (
  J,
  Z,
) {
  J >>>= 0;
  if (!Z) {
    tv(J, 4, this.length);
  }
  return (
    16777216 * this[J] +
    ((this[J + 1] << 16) | (this[J + 2] << 8) | this[J + 3])
  );
};
Buffer.prototype.readBigUInt64LE = tP(function (J) {
  tk((J >>>= 0), "offset");
  let Z = this[J];
  let Q = this[J + 7];
  if (Z === undefined || Q === undefined) {
    tR(J, this.length - 8);
  }
  let $ = Z + 256 * this[++J] + 65536 * this[++J] + 16777216 * this[++J];
  let tt = this[++J] + 256 * this[++J] + 65536 * this[++J] + 16777216 * Q;
  return BigInt($) + (BigInt(tt) << BigInt(32));
});
Buffer.prototype.readBigUInt64BE = tP(function (J) {
  tk((J >>>= 0), "offset");
  let Z = this[J];
  let Q = this[J + 7];
  if (Z === undefined || Q === undefined) {
    tR(J, this.length - 8);
  }
  let $ = 16777216 * Z + 65536 * this[++J] + 256 * this[++J] + this[++J];
  let tt = 16777216 * this[++J] + 65536 * this[++J] + 256 * this[++J] + Q;
  return (BigInt($) << BigInt(32)) + BigInt(tt);
});
Buffer.prototype.readIntLE = function (J, Z, Q) {
  J >>>= 0;
  Z >>>= 0;
  if (!Q) {
    tv(J, Z, this.length);
  }
  let $ = this[J];
  let tt = 1;
  let te = 0;
  while (++te < Z && (tt *= 256)) {
    $ += this[J + te] * tt;
  }
  if ($ >= (tt *= 128)) {
    $ -= 2 ** (8 * Z);
  }
  return $;
};
Buffer.prototype.readIntBE = function (J, Z, Q) {
  J >>>= 0;
  Z >>>= 0;
  if (!Q) {
    tv(J, Z, this.length);
  }
  let $ = Z;
  let tt = 1;
  let te = this[J + --$];
  while ($ > 0 && (tt *= 256)) {
    te += this[J + --$] * tt;
  }
  if (te >= (tt *= 128)) {
    te -= 2 ** (8 * Z);
  }
  return te;
};
Buffer.prototype.readInt8 = function (J, Z) {
  J >>>= 0;
  if (!Z) {
    tv(J, 1, this.length);
  }
  if (128 & this[J]) {
    return -((255 - this[J] + 1) * 1);
  }
  return this[J];
};
Buffer.prototype.readInt16LE = function (J, Z) {
  J >>>= 0;
  if (!Z) {
    tv(J, 2, this.length);
  }
  let Q = this[J] | (this[J + 1] << 8);
  if (32768 & Q) {
    return 4294901760 | Q;
  }
  return Q;
};
Buffer.prototype.readInt16BE = function (J, Z) {
  J >>>= 0;
  if (!Z) {
    tv(J, 2, this.length);
  }
  let Q = this[J + 1] | (this[J] << 8);
  if (32768 & Q) {
    return 4294901760 | Q;
  }
  return Q;
};
Buffer.prototype.readInt32LE = function (J, Z) {
  J >>>= 0;
  if (!Z) {
    tv(J, 4, this.length);
  }
  return (
    this[J] | (this[J + 1] << 8) | (this[J + 2] << 16) | (this[J + 3] << 24)
  );
};
Buffer.prototype.readInt32BE = function (J, Z) {
  J >>>= 0;
  if (!Z) {
    tv(J, 4, this.length);
  }
  return (
    (this[J] << 24) | (this[J + 1] << 16) | (this[J + 2] << 8) | this[J + 3]
  );
};
Buffer.prototype.readBigInt64LE = tP(function (J) {
  tk((J >>>= 0), "offset");
  let Z = this[J];
  let Q = this[J + 7];
  if (Z === undefined || Q === undefined) {
    tR(J, this.length - 8);
  }
  return (
    (BigInt(
      this[J + 4] + 256 * this[J + 5] + 65536 * this[J + 6] + (Q << 24),
    ) <<
      BigInt(32)) +
    BigInt(Z + 256 * this[++J] + 65536 * this[++J] + 16777216 * this[++J])
  );
});
Buffer.prototype.readBigInt64BE = tP(function (J) {
  tk((J >>>= 0), "offset");
  let Z = this[J];
  let Q = this[J + 7];
  if (Z === undefined || Q === undefined) {
    tR(J, this.length - 8);
  }
  return (
    (BigInt((Z << 24) + 65536 * this[++J] + 256 * this[++J] + this[++J]) <<
      BigInt(32)) +
    BigInt(16777216 * this[++J] + 65536 * this[++J] + 256 * this[++J] + Q)
  );
});
Buffer.prototype.readFloatLE = function (J, Z) {
  J >>>= 0;
  if (!Z) {
    tv(J, 4, this.length);
  }
  return read(this, J, true, 23, 4);
};
Buffer.prototype.readFloatBE = function (J, Z) {
  J >>>= 0;
  if (!Z) {
    tv(J, 4, this.length);
  }
  return read(this, J, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function (J, Z) {
  J >>>= 0;
  if (!Z) {
    tv(J, 8, this.length);
  }
  return read(this, J, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function (J, Z) {
  J >>>= 0;
  if (!Z) {
    tv(J, 8, this.length);
  }
  return read(this, J, false, 52, 8);
};
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function (
  J,
  Z,
  Q,
  $,
) {
  J *= 1;
  Z >>>= 0;
  Q >>>= 0;
  if (!$) {
    let $ = 2 ** (8 * Q) - 1;
    tg(this, J, Z, Q, $, 0);
  }
  let tt = 1;
  let te = 0;
  for (this[Z] = 255 & J; ++te < Q && (tt *= 256);) {
    this[Z + te] = (J / tt) & 255;
  }
  return Z + Q;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function (
  J,
  Z,
  Q,
  $,
) {
  J *= 1;
  Z >>>= 0;
  Q >>>= 0;
  if (!$) {
    let $ = 2 ** (8 * Q) - 1;
    tg(this, J, Z, Q, $, 0);
  }
  let tt = Q - 1;
  let te = 1;
  for (this[Z + tt] = 255 & J; --tt >= 0 && (te *= 256);) {
    this[Z + tt] = (J / te) & 255;
  }
  return Z + Q;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function (J, Z, Q) {
  J *= 1;
  Z >>>= 0;
  if (!Q) {
    tg(this, J, Z, 1, 255, 0);
  }
  this[Z] = 255 & J;
  return Z + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function (
  J,
  Z,
  Q,
) {
  J *= 1;
  Z >>>= 0;
  if (!Q) {
    tg(this, J, Z, 2, 65535, 0);
  }
  this[Z] = 255 & J;
  this[Z + 1] = J >>> 8;
  return Z + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function (
  J,
  Z,
  Q,
) {
  J *= 1;
  Z >>>= 0;
  if (!Q) {
    tg(this, J, Z, 2, 65535, 0);
  }
  this[Z] = J >>> 8;
  this[Z + 1] = 255 & J;
  return Z + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function (
  J,
  Z,
  Q,
) {
  J *= 1;
  Z >>>= 0;
  if (!Q) {
    tg(this, J, Z, 4, 4294967295, 0);
  }
  this[Z + 3] = J >>> 24;
  this[Z + 2] = J >>> 16;
  this[Z + 1] = J >>> 8;
  this[Z] = 255 & J;
  return Z + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function (
  J,
  Z,
  Q,
) {
  J *= 1;
  Z >>>= 0;
  if (!Q) {
    tg(this, J, Z, 4, 4294967295, 0);
  }
  this[Z] = J >>> 24;
  this[Z + 1] = J >>> 16;
  this[Z + 2] = J >>> 8;
  this[Z + 3] = 255 & J;
  return Z + 4;
};
Buffer.prototype.writeBigUInt64LE = tP(function (J, Z = 0) {
  return ty(this, J, Z, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeBigUInt64BE = tP(function (J, Z = 0) {
  return tm(this, J, Z, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeIntLE = function (J, Z, Q, $) {
  J *= 1;
  Z >>>= 0;
  if (!$) {
    let $ = 2 ** (8 * Q - 1);
    tg(this, J, Z, Q, $ - 1, -$);
  }
  let tt = 0;
  let te = 1;
  let tr = 0;
  for (this[Z] = 255 & J; ++tt < Q && (te *= 256);) {
    if (J < 0 && tr === 0 && this[Z + tt - 1] !== 0) {
      tr = 1;
    }
    this[Z + tt] = (((J / te) | 0) - tr) & 255;
  }
  return Z + Q;
};
Buffer.prototype.writeIntBE = function (J, Z, Q, $) {
  J *= 1;
  Z >>>= 0;
  if (!$) {
    let $ = 2 ** (8 * Q - 1);
    tg(this, J, Z, Q, $ - 1, -$);
  }
  let tt = Q - 1;
  let te = 1;
  let tr = 0;
  for (this[Z + tt] = 255 & J; --tt >= 0 && (te *= 256);) {
    if (J < 0 && tr === 0 && this[Z + tt + 1] !== 0) {
      tr = 1;
    }
    this[Z + tt] = (((J / te) | 0) - tr) & 255;
  }
  return Z + Q;
};
Buffer.prototype.writeInt8 = function (J, Z, Q) {
  J *= 1;
  Z >>>= 0;
  if (!Q) {
    tg(this, J, Z, 1, 127, -128);
  }
  if (J < 0) {
    J = 255 + J + 1;
  }
  this[Z] = 255 & J;
  return Z + 1;
};
Buffer.prototype.writeInt16LE = function (J, Z, Q) {
  J *= 1;
  Z >>>= 0;
  if (!Q) {
    tg(this, J, Z, 2, 32767, -32768);
  }
  this[Z] = 255 & J;
  this[Z + 1] = J >>> 8;
  return Z + 2;
};
Buffer.prototype.writeInt16BE = function (J, Z, Q) {
  J *= 1;
  Z >>>= 0;
  if (!Q) {
    tg(this, J, Z, 2, 32767, -32768);
  }
  this[Z] = J >>> 8;
  this[Z + 1] = 255 & J;
  return Z + 2;
};
Buffer.prototype.writeInt32LE = function (J, Z, Q) {
  J *= 1;
  Z >>>= 0;
  if (!Q) {
    tg(this, J, Z, 4, 2147483647, -2147483648);
  }
  this[Z] = 255 & J;
  this[Z + 1] = J >>> 8;
  this[Z + 2] = J >>> 16;
  this[Z + 3] = J >>> 24;
  return Z + 4;
};
Buffer.prototype.writeInt32BE = function (J, Z, Q) {
  J *= 1;
  Z >>>= 0;
  if (!Q) {
    tg(this, J, Z, 4, 2147483647, -2147483648);
  }
  if (J < 0) {
    J = 4294967295 + J + 1;
  }
  this[Z] = J >>> 24;
  this[Z + 1] = J >>> 16;
  this[Z + 2] = J >>> 8;
  this[Z + 3] = 255 & J;
  return Z + 4;
};
Buffer.prototype.writeBigInt64LE = tP(function (J, Z = 0) {
  return ty(
    this,
    J,
    Z,
    -BigInt("0x8000000000000000"),
    BigInt("0x7fffffffffffffff"),
  );
});
Buffer.prototype.writeBigInt64BE = tP(function (J, Z = 0) {
  return tm(
    this,
    J,
    Z,
    -BigInt("0x8000000000000000"),
    BigInt("0x7fffffffffffffff"),
  );
});
Buffer.prototype.writeFloatLE = function (J, Z, Q) {
  return tx(this, J, Z, true, Q);
};
Buffer.prototype.writeFloatBE = function (J, Z, Q) {
  return tx(this, J, Z, false, Q);
};
Buffer.prototype.writeDoubleLE = function (J, Z, Q) {
  return t_(this, J, Z, true, Q);
};
Buffer.prototype.writeDoubleBE = function (J, Z, Q) {
  return t_(this, J, Z, false, Q);
};
Buffer.prototype.copy = function (J, Z, Q, $) {
  if (!Buffer.isBuffer(J)) {
    throw TypeError("argument should be a Buffer");
  }
  if (!Q) {
    Q = 0;
  }
  if (!($ || $ === 0)) {
    $ = this.length;
  }
  if (Z >= J.length) {
    Z = J.length;
  }
  if (!Z) {
    Z = 0;
  }
  if ($ > 0 && $ < Q) {
    $ = Q;
  }
  if ($ === Q || J.length === 0 || this.length === 0) {
    return 0;
  }
  if (Z < 0) {
    throw RangeError("targetStart out of bounds");
  }
  if (Q < 0 || Q >= this.length) {
    throw RangeError("Index out of range");
  }
  if ($ < 0) {
    throw RangeError("sourceEnd out of bounds");
  }
  if ($ > this.length) {
    $ = this.length;
  }
  if (J.length - Z < $ - Q) {
    $ = J.length - Z + Q;
  }
  let tt = $ - Q;
  if (this === J && typeof Uint8Array.prototype.copyWithin === "function") {
    this.copyWithin(Z, Q, $);
  } else {
    Uint8Array.prototype.set.call(J, this.subarray(Q, $), Z);
  }
  return tt;
};
Buffer.prototype.fill = function (J, Z, Q, $) {
  let tt;
  if (typeof J === "string") {
    if (typeof Z === "string") {
      $ = Z;
      Z = 0;
      Q = this.length;
    } else if (typeof Q === "string") {
      $ = Q;
      Q = this.length;
    }
    if ($ !== undefined && typeof $ !== "string") {
      throw TypeError("encoding must be a string");
    }
    if (typeof $ === "string" && !Buffer.isEncoding($)) {
      throw TypeError("Unknown encoding: " + $);
    }
    if (J.length === 1) {
      let Z = J.charCodeAt(0);
      if (($ === "utf8" && Z < 128) || $ === "latin1") {
        J = Z;
      }
    }
  } else {
    if (typeof J === "number") {
      J &= 255;
    } else if (typeof J === "boolean") {
      J = Number(J);
    }
  }
  if (Z < 0 || this.length < Z || this.length < Q) {
    throw RangeError("Out of range index");
  }
  if (Q <= Z) {
    return this;
  }
  Z >>>= 0;
  Q = Q === undefined ? this.length : Q >>> 0;
  if (!J) {
    J = 0;
  }
  if (typeof J === "number") {
    for (tt = Z; tt < Q; ++tt) {
      this[tt] = J;
    }
  } else {
    let te = Buffer.isBuffer(J) ? J : Buffer.from(J, $);
    let tr = te.length;
    if (tr === 0) {
      throw TypeError('The value "' + J + '" is invalid for argument "value"');
    }
    for (tt = 0; tt < Q - Z; ++tt) {
      this[tt + Z] = te[tt % tr];
    }
  }
  return this;
};
let tM = {};
function tS(J, Z, Q) {
  tM[J] = class extends Q {
    constructor() {
      super();
      Object.defineProperty(this, "message", {
        value: Z.apply(this, arguments),
        writable: true,
        configurable: true,
      });
      this.name = `${this.name} [${J}]`;
      this.stack;
      delete this.name;
    }
    get code() {
      return J;
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
      return `${this.name} [${J}]: ${this.message}`;
    }
  };
}
function tA(J) {
  let Z = "";
  let J_length = J.length;
  let $ = +(J[0] === "-");
  for (; J_length >= $ + 4; J_length -= 3) {
    Z = `_${J.slice(J_length - 3, J_length)}${Z}`;
  }
  return `${J.slice(0, J_length)}${Z}`;
}
function tE(J, Z, Q, $, tt, te) {
  if (J > Q || J < Z) {
    let $;
    let tt = typeof Z === "bigint" ? "n" : "";
    $ =
      te > 3
        ? Z === 0 || Z === BigInt(0)
          ? `>= 0${tt} and < 2${tt} ** ${(te + 1) * 8}${tt}`
          : `>= -(2${tt} ** ${(te + 1) * 8 - 1}${tt}) and < 2 ** ${(te + 1) * 8 - 1}${tt}`
        : `>= ${Z}${tt} and <= ${Q}${tt}`;
    throw new tM.ERR_OUT_OF_RANGE("value", $, J);
  }
  tk(tt, "offset");
  if ($[tt] === undefined || $[tt + te] === undefined) {
    tR(tt, $.length - (te + 1));
  }
}
function tk(J, Z) {
  if (typeof J !== "number") {
    throw new tM.ERR_INVALID_ARG_TYPE(Z, "number", J);
  }
}
function tR(J, Z, Q) {
  if (Math.floor(J) !== J) {
    tk(J, Q);
    throw new tM.ERR_OUT_OF_RANGE(Q || "offset", "an integer", J);
  }
  if (Z < 0) {
    throw new tM.ERR_BUFFER_OUT_OF_BOUNDS();
  }
  throw new tM.ERR_OUT_OF_RANGE(Q || "offset", `>= ${+!!Q} and <= ${Z}`, J);
}
tS(
  "ERR_BUFFER_OUT_OF_BOUNDS",
  function (J) {
    if (J) {
      return `${J} is outside of buffer bounds`;
    }
    return "Attempt to access memory outside buffer bounds";
  },
  RangeError,
);
tS(
  "ERR_INVALID_ARG_TYPE",
  function (J, Z) {
    return `The "${J}" argument must be of type number. Received type ${typeof Z}`;
  },
  TypeError,
);
tS(
  "ERR_OUT_OF_RANGE",
  function (J, Z, Q) {
    let $ = `The value of "${J}" is out of range.`;
    let tt = Q;
    if (Number.isInteger(Q) && Math.abs(Q) > 4294967296) {
      tt = tA(String(Q));
    } else if (typeof Q === "bigint") {
      tt = String(Q);
      if (Q > BigInt(2) ** BigInt(32) || Q < -(BigInt(2) ** BigInt(32))) {
        tt = tA(tt);
      }
      tt += "n";
    }
    return ($ += ` It must be ${Z}. Received ${tt}`);
  },
  RangeError,
);
let tI = /[^+/0-9A-Za-z-_]/g;
function tO(J, Z) {
  let Q;
  Z = Z || Infinity;
  let J_length = J.length;
  let tt = null;
  let te = [];
  for (let tr = 0; tr < J_length; ++tr) {
    if ((Q = J.charCodeAt(tr)) > 55295 && Q < 57344) {
      if (!tt) {
        if (Q > 56319 || tr + 1 === J_length) {
          if ((Z -= 3) > -1) {
            te.push(239, 191, 189);
          }
          continue;
        }
        tt = Q;
        continue;
      }
      if (Q < 56320) {
        if ((Z -= 3) > -1) {
          te.push(239, 191, 189);
        }
        tt = Q;
        continue;
      }
      Q = (((tt - 55296) << 10) | (Q - 56320)) + 65536;
    } else {
      if (tt && (Z -= 3) > -1) {
        te.push(239, 191, 189);
      }
    }
    tt = null;
    if (Q < 128) {
      if ((Z -= 1) < 0) {
        break;
      }
      te.push(Q);
    } else if (Q < 2048) {
      if ((Z -= 2) < 0) {
        break;
      }
      te.push((Q >> 6) | 192, (63 & Q) | 128);
    } else if (Q < 65536) {
      if ((Z -= 3) < 0) {
        break;
      }
      te.push((Q >> 12) | 224, ((Q >> 6) & 63) | 128, (63 & Q) | 128);
    } else if (Q < 1114112) {
      if ((Z -= 4) < 0) {
        break;
      }
      te.push(
        (Q >> 18) | 240,
        ((Q >> 12) & 63) | 128,
        ((Q >> 6) & 63) | 128,
        (63 & Q) | 128,
      );
    } else {
      throw Error("Invalid code point");
    }
  }
  return te;
}
function tT(J) {
  return toByteArray(
    ((J) => {
      if ((J = (J = J.split("=")[0]).trim().replace(tI, "")).length < 2) {
        return "";
      }
      while (J.length % 4 != 0) {
        J += "=";
      }
      return J;
    })(J),
  );
}
function tB(J, Z, Q, $) {
  let tt;
  for (tt = 0; tt < $ && !(tt + Q >= Z.length) && !(tt >= J.length); ++tt) {
    Z[tt + Q] = J[tt];
  }
  return tt;
}
function tj(J, Z) {
  return (
    J instanceof Z ||
    (J != null &&
      J.constructor != null &&
      J.constructor.name != null &&
      J.constructor.name === Z.name)
  );
}
let tC = (() => {
  let J = "0123456789abcdef";
  let Z = Array(256);
  for (let Q = 0; Q < 16; ++Q) {
    let $ = 16 * Q;
    for (let tt = 0; tt < 16; ++tt) {
      Z[$ + tt] = J[Q] + J[tt];
    }
  }
  return Z;
})();
function tP(J) {
  if (typeof BigInt === "undefined") {
    return tL;
  }
  return J;
}
function tL() {
  throw Error("BigInt not supported");
}
