function n(e, t, r) {
  for (let n = Object.keys(t), i = 0; i < n.length; ++i) {
    if (!(e[n[i]] !== undefined && r)) {
      e[n[i]] = t[n[i]];
    }
  }
  return e;
}
function i(e) {
  function t(e, r) {
    if (!(this instanceof t)) {
      return new t(e, r);
    }
    Object.defineProperty(this, "message", {
      get: function () {
        return e;
      },
    });
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, t);
    } else {
      Object.defineProperty(this, "stack", {
        value: Error().stack || "",
      });
    }
    if (r) {
      n(this, r);
    }
  }
  t.prototype = Object.create(Error.prototype, {
    constructor: {
      value: t,
      writable: true,
      enumerable: false,
      configurable: true,
    },
    name: {
      get: function () {
        return e;
      },
      set: undefined,
      enumerable: false,
      configurable: true,
    },
    toString: {
      value: function () {
        return this.name + ": " + this.message;
      },
      writable: true,
      enumerable: false,
      configurable: true,
    },
  });
  return t;
}
exports.asPromise = require("./module-aIo.js");
exports.base64 = require("./module-fzW.js");
exports.EventEmitter = require("./module-Bjd.js");
exports.float = require("./module-lDi.js");
exports.inquire = require("./module-Ekb.js");
exports.utf8 = require("./module-xkL.js");
exports.pool = require("./module-ZCF.js");
exports.LongBits = require("./module-TnP.js");
exports.isNode = !!(
  global !== undefined &&
  global &&
  global.process &&
  global.process.versions &&
  global.process.versions.node
);
exports.global =
  (exports.isNode && global) ||
  (typeof window !== "undefined" && window) ||
  (typeof self !== "undefined" && self) ||
  this;
exports.emptyArray = Object.freeze ? Object.freeze([]) : [];
exports.emptyObject = Object.freeze ? Object.freeze({}) : {};
exports.isInteger =
  Number.isInteger ||
  function (e) {
    return typeof e === "number" && isFinite(e) && Math.floor(e) === e;
  };
exports.isString = function (e) {
  return typeof e === "string" || e instanceof String;
};
exports.isObject = function (e) {
  return e && typeof e === "object";
};
exports.isset = exports.isSet = function (e, t) {
  const r = e[t];
  return (
    !!(r != null && e.hasOwnProperty(t)) &&
    (typeof r !== "object" ||
      (Array.isArray(r) ? r.length : Object.keys(r).length) > 0)
  );
};
exports.Buffer = (() => {
  try {
    const e = exports.inquire("buffer").Buffer;
    if (e.prototype.utf8Write) {
      return e;
    }
    return null;
  } catch (e) {
    return null;
  }
})();
exports._Buffer_from = null;
exports._Buffer_allocUnsafe = null;
exports.newBuffer = function (e) {
  if (typeof e === "number") {
    if (exports.Buffer) {
      return exports._Buffer_allocUnsafe(e);
    }
    return new exports.Array(e);
  }
  if (exports.Buffer) {
    return exports._Buffer_from(e);
  }
  if (typeof Uint8Array === "undefined") {
    return e;
  }
  return new Uint8Array(e);
};
exports.Array = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
exports.Long =
  (exports.global.dcodeIO && exports.global.dcodeIO.Long) ||
  exports.global.Long ||
  exports.inquire("long");
exports.key2Re = /^true|false|0|1$/;
exports.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
exports.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
exports.longToHash = function (e) {
  if (e) {
    return exports.LongBits.from(e).toHash();
  }
  return exports.LongBits.zeroHash;
};
exports.longFromHash = function (e, r) {
  const n = exports.LongBits.fromHash(e);
  if (exports.Long) {
    return exports.Long.fromBits(n.lo, n.hi, r);
  }
  return n.toNumber(!!r);
};
exports.merge = n;
exports.lcFirst = function (e) {
  return e.charAt(0).toLowerCase() + e.substring(1);
};
exports.newError = i;
exports.ProtocolError = i("ProtocolError");
exports.oneOfGetter = function (e) {
  const t = {};
  for (let r = 0; r < e.length; ++r) {
    t[e[r]] = 1;
  }
  return function () {
    const e = Object.keys(this);
    for (let r = e.length - 1; r > -1; --r) {
      if (t[e[r]] === 1 && this[e[r]] !== undefined && this[e[r]] !== null) {
        return e[r];
      }
    }
  };
};
exports.oneOfSetter = function (e) {
  return function (t) {
    for (let r = 0; r < e.length; ++r) {
      if (e[r] !== t) {
        delete this[e[r]];
      }
    }
  };
};
exports.toJSONOptions = {
  longs: String,
  enums: String,
  bytes: String,
  json: true,
};
exports._configure = function () {
  const exports_Buffer = exports.Buffer;
  if (!exports_Buffer) {
    exports._Buffer_allocUnsafe = null;
    exports._Buffer_from = null;
    return;
  }
  exports._Buffer_from =
    (exports_Buffer.from !== Uint8Array.from && exports_Buffer.from) ||
    function (t, r) {
      return new exports_Buffer(t, r);
    };
  exports._Buffer_allocUnsafe =
    exports_Buffer.allocUnsafe ||
    function (t) {
      return new exports_Buffer(t);
    };
};
