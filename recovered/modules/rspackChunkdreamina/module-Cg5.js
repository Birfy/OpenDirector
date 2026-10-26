import et from "rCO";
import ei from "./module-Tx_2.js";
import { Buffer } from "wS";
import es from "./module-di_2.js";
import _ef from "./module-Go_2.js";
import { F } from "./module-Bwd.js";
let $;
let ee;
function er(Z) {
  const Q = this;
  this.next = null;
  this.entry = null;
  this.finish = function () {
    const X = Q;
    const $ = Z;
    let X_entry = X.entry;
    for (X.entry = null; X_entry;) {
      const et = X_entry.callback;
      $.pendingcb--;
      et(undefined);
      X_entry = X_entry.next;
    }
    $.corkedRequestsFree.next = X;
  };
}
export default em;
em.WritableState = ew;
const en = {
  deprecate: require("./module-gN.js"),
};
const eo =
  (global !== undefined
    ? global
    : typeof window !== "undefined"
      ? window
      : typeof self !== "undefined"
        ? self
        : {}
  ).Uint8Array || function () {};
var _ef_getHighWaterMark = _ef.getHighWaterMark;
const F_ERR_INVALID_ARG_TYPE = F.ERR_INVALID_ARG_TYPE;
const F_ERR_METHOD_NOT_IMPLEMENTED = F.ERR_METHOD_NOT_IMPLEMENTED;
var F_ERR_MULTIPLE_CALLBACK = F.ERR_MULTIPLE_CALLBACK;
const F_ERR_STREAM_CANNOT_PIPE = F.ERR_STREAM_CANNOT_PIPE;
var F_ERR_STREAM_DESTROYED = F.ERR_STREAM_DESTROYED;
const F_ERR_STREAM_NULL_VALUES = F.ERR_STREAM_NULL_VALUES;
const F_ERR_STREAM_WRITE_AFTER_END = F.ERR_STREAM_WRITE_AFTER_END;
const F_ERR_UNKNOWN_ENCODING = F.ERR_UNKNOWN_ENCODING;
var es_errorOrDestroy = es.errorOrDestroy;
function e_() {}
function ew(Z, Q, ee) {
  $ = $ || require("./module-qd_2.js");
  Z = Z || {};
  if (typeof ee !== "boolean") {
    ee = Q instanceof $;
  }
  this.objectMode = !!Z.objectMode;
  if (ee) {
    this.objectMode = this.objectMode || !!Z.writableObjectMode;
  }
  this.highWaterMark = _ef_getHighWaterMark(
    this,
    Z,
    "writableHighWaterMark",
    ee,
  );
  this.finalCalled = false;
  this.needDrain = false;
  this.ending = false;
  this.ended = false;
  this.finished = false;
  this.destroyed = false;
  const en = Z.decodeStrings === false;
  this.decodeStrings = !en;
  this.defaultEncoding = Z.defaultEncoding || "utf8";
  this.length = 0;
  this.writing = false;
  this.corked = 0;
  this.sync = true;
  this.bufferProcessing = false;
  this.onwrite = function (Z) {
    ((Z, Q) => {
      const Z__writableState = Z._writableState;
      const X_sync = Z__writableState.sync;
      const X_writecb = Z__writableState.writecb;
      if (typeof X_writecb !== "function") {
        throw new F_ERR_MULTIPLE_CALLBACK();
      }
      Z__writableState.writing = false;
      Z__writableState.writecb = null;
      Z__writableState.length -= Z__writableState.writelen;
      Z__writableState.writelen = 0;
      if (Q) {
        --Z__writableState.pendingcb;
        if (X_sync) {
          et.nextTick(X_writecb, Q);
          et.nextTick(eR, Z, Z__writableState);
          Z._writableState.errorEmitted = true;
          es_errorOrDestroy(Z, Q);
        } else {
          X_writecb(Q);
          Z._writableState.errorEmitted = true;
          es_errorOrDestroy(Z, Q);
          eR(Z, Z__writableState);
        }
      } else {
        const er = ek(Z__writableState) || Z.destroyed;
        if (
          !(
            er ||
            Z__writableState.corked ||
            Z__writableState.bufferProcessing ||
            !Z__writableState.bufferedRequest
          )
        ) {
          eE(Z, Z__writableState);
        }
        if (X_sync) {
          et.nextTick(eS, Z, Z__writableState, er, X_writecb);
        } else {
          eS(Z, Z__writableState, er, X_writecb);
        }
      }
    })(Q, Z);
  };
  this.writecb = null;
  this.writelen = 0;
  this.bufferedRequest = null;
  this.lastBufferedRequest = null;
  this.pendingcb = 0;
  this.prefinished = false;
  this.errorEmitted = false;
  this.emitClose = Z.emitClose !== false;
  this.autoDestroy = !!Z.autoDestroy;
  this.bufferedRequestCount = 0;
  this.corkedRequestsFree = new er(this);
}
require("Hs")(em, ei);
ew.prototype.getBuffer = function () {
  for (var Z = this.bufferedRequest, Q = []; Z;) {
    Q.push(Z);
    Z = Z.next;
  }
  return Q;
};
try {
  Object.defineProperty(ew.prototype, "buffer", {
    get: en.deprecate(
      function () {
        return this.getBuffer();
      },
      "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
      "DEP0003",
    ),
  });
} catch (Z) {}
function em(Z) {
  const Q = this instanceof ($ = $ || require("./module-qd_2.js"));
  if (!Q && !ee.call(em, this)) {
    return new em(Z);
  }
  this._writableState = new ew(Z, this, Q);
  this.writable = true;
  if (Z) {
    if (typeof Z.write === "function") {
      this._write = Z.write;
    }
    if (typeof Z.writev === "function") {
      this._writev = Z.writev;
    }
    if (typeof Z.destroy === "function") {
      this._destroy = Z.destroy;
    }
    if (typeof Z.final === "function") {
      this._final = Z.final;
    }
  }
  ei.call(this);
}
function ex(Z, Q, X, $, ee, et, er) {
  Q.writelen = $;
  Q.writecb = er;
  Q.writing = true;
  Q.sync = true;
  if (Q.destroyed) {
    Q.onwrite(new F_ERR_STREAM_DESTROYED("write"));
  } else if (X) {
    Z._writev(ee, Q.onwrite);
  } else {
    Z._write(ee, et, Q.onwrite);
  }
  Q.sync = false;
}
function eS(Z, Q, X, $) {
  let ee;
  let et;
  if (!X) {
    ee = Z;
    if ((et = Q).length === 0 && et.needDrain) {
      et.needDrain = false;
      ee.emit("drain");
    }
  }
  Q.pendingcb--;
  $();
  eR(Z, Q);
}
function eE(Z, Q) {
  Q.bufferProcessing = true;
  let Q_bufferedRequest = Q.bufferedRequest;
  if (Z._writev && Q_bufferedRequest && Q_bufferedRequest.next) {
    const $ = Array(Q.bufferedRequestCount);
    const ee = Q.corkedRequestsFree;
    ee.entry = Q_bufferedRequest;
    let et = 0;
    let en = true;
    while (Q_bufferedRequest) {
      $[et] = Q_bufferedRequest;
      if (!Q_bufferedRequest.isBuf) {
        en = false;
      }
      Q_bufferedRequest = Q_bufferedRequest.next;
      et += 1;
    }
    $.allBuffers = en;
    ex(Z, Q, true, Q.length, $, "", ee.finish);
    Q.pendingcb++;
    Q.lastBufferedRequest = null;
    if (ee.next) {
      Q.corkedRequestsFree = ee.next;
      ee.next = null;
    } else {
      Q.corkedRequestsFree = new er(Q);
    }
    Q.bufferedRequestCount = 0;
  } else {
    while (Q_bufferedRequest) {
      const ei = Q_bufferedRequest.chunk;
      const ea = Q_bufferedRequest.encoding;
      const eo = Q_bufferedRequest.callback;
      const es = Q.objectMode ? 1 : ei.length;
      ex(Z, Q, false, es, ei, ea, eo);
      Q_bufferedRequest = Q_bufferedRequest.next;
      Q.bufferedRequestCount--;
      if (Q.writing) {
        break;
      }
    }
    if (Q_bufferedRequest === null) {
      Q.lastBufferedRequest = null;
    }
  }
  Q.bufferedRequest = Q_bufferedRequest;
  Q.bufferProcessing = false;
}
function ek(Z) {
  return (
    Z.ending &&
    Z.length === 0 &&
    Z.bufferedRequest === null &&
    !Z.finished &&
    !Z.writing
  );
}
function eT(Z, Q) {
  Z._final(function (X) {
    Q.pendingcb--;
    if (X) {
      es_errorOrDestroy(Z, X);
    }
    Q.prefinished = true;
    Z.emit("prefinish");
    eR(Z, Q);
  });
}
function eR(Z, Q) {
  const X = ek(Q);
  if (
    X &&
    (Q.prefinished ||
      Q.finalCalled ||
      (typeof Z._final !== "function" || Q.destroyed
        ? ((Q.prefinished = true), Z.emit("prefinish"))
        : (Q.pendingcb++, (Q.finalCalled = true), et.nextTick(eT, Z, Q))),
    Q.pendingcb === 0 && ((Q.finished = true), Z.emit("finish"), Q.autoDestroy))
  ) {
    const $ = Z._readableState;
    if (!$ || ($.autoDestroy && $.endEmitted)) {
      Z.destroy();
    }
  }
  return X;
}
if (
  typeof Symbol === "function" &&
  Symbol.hasInstance &&
  typeof Function.prototype[Symbol.hasInstance] === "function"
) {
  ee = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(em, Symbol.hasInstance, {
    value: function (Z) {
      return (
        !!ee.call(this, Z) ||
        (this === em && Z && Z._writableState instanceof ew)
      );
    },
  });
} else {
  ee = function (Z) {
    return Z instanceof this;
  };
}
em.prototype.pipe = function () {
  es_errorOrDestroy(this, new F_ERR_STREAM_CANNOT_PIPE());
};
em.prototype.write = function (Z, Q, X) {
  let $;
  let ee;
  let er;
  let en;
  let ei;
  let es;
  let ef;
  const _writableState = this._writableState;
  let eh = false;
  const el =
    !_writableState.objectMode &&
    (($ = Z), Buffer.isBuffer($) || $ instanceof eo);
  if (el && !Buffer.isBuffer(Z)) {
    ee = Z;
    Z = Buffer.from(ee);
  }
  if (typeof Q === "function") {
    X = Q;
    Q = null;
  }
  if (el) {
    Q = "buffer";
  } else if (!Q) {
    Q = _writableState.defaultEncoding;
  }
  if (typeof X !== "function") {
    X = e_;
  }
  if (_writableState.ending) {
    er = X;
    es_errorOrDestroy(this, (en = new F_ERR_STREAM_WRITE_AFTER_END()));
    et.nextTick(er, en);
  } else if (
    el ||
    ((ei = Z),
    (es = X),
    ei === null
      ? (ef = new F_ERR_STREAM_NULL_VALUES())
      : typeof ei === "string" ||
        _writableState.objectMode ||
        (ef = new F_ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer"], ei)),
    !ef || (es_errorOrDestroy(this, ef), et.nextTick(es, ef), 0))
  ) {
    _writableState.pendingcb++;
    eh = ((Z, Q, isBuf, chunk, encoding, callback) => {
      if (!isBuf) {
        let er;
        let en;
        er = chunk;
        en = encoding;
        if (
          !(Q.objectMode || Q.decodeStrings === false || typeof er !== "string")
        ) {
          er = Buffer.from(er, en);
        }
        const ei = er;
        if (chunk !== ei) {
          isBuf = true;
          encoding = "buffer";
          chunk = ei;
        }
      }
      const eo = Q.objectMode ? 1 : chunk.length;
      Q.length += eo;
      const es = Q.length < Q.highWaterMark;
      if (!es) {
        Q.needDrain = true;
      }
      if (Q.writing || Q.corked) {
        const ef = Q.lastBufferedRequest;
        Q.lastBufferedRequest = {
          chunk,
          encoding,
          isBuf,
          callback,
          next: null,
        };
        if (ef) {
          ef.next = Q.lastBufferedRequest;
        } else {
          Q.bufferedRequest = Q.lastBufferedRequest;
        }
        Q.bufferedRequestCount += 1;
      } else {
        ex(Z, Q, false, eo, chunk, encoding, callback);
      }
      return es;
    })(this, _writableState, el, Z, Q, X);
  }
  return eh;
};
em.prototype.cork = function () {
  this._writableState.corked++;
};
em.prototype.uncork = function () {
  const _writableState = this._writableState;
  if (_writableState.corked) {
    _writableState.corked--;
    if (
      !(
        _writableState.writing ||
        _writableState.corked ||
        _writableState.bufferProcessing ||
        !_writableState.bufferedRequest
      )
    ) {
      eE(this, _writableState);
    }
  }
};
em.prototype.setDefaultEncoding = function (Z) {
  if (typeof Z === "string") {
    Z = Z.toLowerCase();
  }
  if (
    !(
      [
        "hex",
        "utf8",
        "utf-8",
        "ascii",
        "binary",
        "base64",
        "ucs2",
        "ucs-2",
        "utf16le",
        "utf-16le",
        "raw",
      ].indexOf((Z + "").toLowerCase()) > -1
    )
  ) {
    throw new F_ERR_UNKNOWN_ENCODING(Z);
  }
  this._writableState.defaultEncoding = Z;
  return this;
};
Object.defineProperty(em.prototype, "writableBuffer", {
  enumerable: false,
  get: function () {
    return this._writableState && this._writableState.getBuffer();
  },
});
Object.defineProperty(em.prototype, "writableHighWaterMark", {
  enumerable: false,
  get: function () {
    return this._writableState.highWaterMark;
  },
});
em.prototype._write = function (Z, Q, X) {
  X(new F_ERR_METHOD_NOT_IMPLEMENTED("_write()"));
};
em.prototype._writev = null;
em.prototype.end = function (Z, Q, X) {
  let $;
  let ee;
  let er;
  const _writableState = this._writableState;
  if (typeof Z === "function") {
    X = Z;
    Z = null;
    Q = null;
  } else if (typeof Q === "function") {
    X = Q;
    Q = null;
  }
  if (Z != null) {
    this.write(Z, Q);
  }
  if (_writableState.corked) {
    _writableState.corked = 1;
    this.uncork();
  }
  if (!_writableState.ending) {
    $ = this;
    ee = _writableState;
    er = X;
    ee.ending = true;
    eR($, ee);
    if (er) {
      if (ee.finished) {
        et.nextTick(er);
      } else {
        $.once("finish", er);
      }
    }
    ee.ended = true;
    $.writable = false;
  }
  return this;
};
Object.defineProperty(em.prototype, "writableLength", {
  enumerable: false,
  get: function () {
    return this._writableState.length;
  },
});
Object.defineProperty(em.prototype, "destroyed", {
  enumerable: false,
  get: function () {
    return this._writableState !== undefined && this._writableState.destroyed;
  },
  set: function (Z) {
    if (this._writableState) {
      this._writableState.destroyed = Z;
    }
  },
});
em.prototype.destroy = es.destroy;
em.prototype._undestroy = es.undestroy;
em.prototype._destroy = function (Z, Q) {
  Q(Z);
};
