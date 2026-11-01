import te from "./module-H8.js";
import ti from "./module-e9.js";
import { Buffer } from "./module-pH.js";
import ts from "./module-VV_3_2.js";
import _tf from "./module-LS_2_2.js";
import { F } from "./module-abl.js";
let $;
let tt;
function tr(J) {
  const Z = this;
  this.next = null;
  this.entry = null;
  this.finish = function () {
    const Q = Z;
    const $ = J;
    let Q_entry = Q.entry;
    for (Q.entry = null; Q_entry;) {
      const te = Q_entry.callback;
      $.pendingcb--;
      te(undefined);
      Q_entry = Q_entry.next;
    }
    $.corkedRequestsFree.next = Q;
  };
}
export default tx;
tx.WritableState = tw;
const tn = {
  deprecate: require("./module-Lx_2_2.js"),
};
const ta =
  (global !== undefined
    ? global
    : typeof window !== "undefined"
      ? window
      : typeof self !== "undefined"
        ? self
        : {}
  ).Uint8Array || function () {};
var _tf_getHighWaterMark = _tf.getHighWaterMark;
const F_ERR_INVALID_ARG_TYPE = F.ERR_INVALID_ARG_TYPE;
const F_ERR_METHOD_NOT_IMPLEMENTED = F.ERR_METHOD_NOT_IMPLEMENTED;
var F_ERR_MULTIPLE_CALLBACK = F.ERR_MULTIPLE_CALLBACK;
const F_ERR_STREAM_CANNOT_PIPE = F.ERR_STREAM_CANNOT_PIPE;
var F_ERR_STREAM_DESTROYED = F.ERR_STREAM_DESTROYED;
const F_ERR_STREAM_NULL_VALUES = F.ERR_STREAM_NULL_VALUES;
const F_ERR_STREAM_WRITE_AFTER_END = F.ERR_STREAM_WRITE_AFTER_END;
const F_ERR_UNKNOWN_ENCODING = F.ERR_UNKNOWN_ENCODING;
var ts_errorOrDestroy = ts.errorOrDestroy;
function tm() {}
function tw(J, Z, tt) {
  $ = $ || require("./module-zD_2_2.js");
  J = J || {};
  if (typeof tt !== "boolean") {
    tt = Z instanceof $;
  }
  this.objectMode = !!J.objectMode;
  if (tt) {
    this.objectMode = this.objectMode || !!J.writableObjectMode;
  }
  this.highWaterMark = _tf_getHighWaterMark(
    this,
    J,
    "writableHighWaterMark",
    tt,
  );
  this.finalCalled = false;
  this.needDrain = false;
  this.ending = false;
  this.ended = false;
  this.finished = false;
  this.destroyed = false;
  const tn = J.decodeStrings === false;
  this.decodeStrings = !tn;
  this.defaultEncoding = J.defaultEncoding || "utf8";
  this.length = 0;
  this.writing = false;
  this.corked = 0;
  this.sync = true;
  this.bufferProcessing = false;
  this.onwrite = function (J) {
    ((J, Z) => {
      const J__writableState = J._writableState;
      const Q_sync = J__writableState.sync;
      const Q_writecb = J__writableState.writecb;
      if (typeof Q_writecb !== "function") {
        throw new F_ERR_MULTIPLE_CALLBACK();
      }
      J__writableState.writing = false;
      J__writableState.writecb = null;
      J__writableState.length -= J__writableState.writelen;
      J__writableState.writelen = 0;
      if (Z) {
        --J__writableState.pendingcb;
        if (Q_sync) {
          te.nextTick(Q_writecb, Z);
          te.nextTick(tk, J, J__writableState);
          J._writableState.errorEmitted = true;
          ts_errorOrDestroy(J, Z);
        } else {
          Q_writecb(Z);
          J._writableState.errorEmitted = true;
          ts_errorOrDestroy(J, Z);
          tk(J, J__writableState);
        }
      } else {
        const tr = tA(J__writableState) || J.destroyed;
        if (
          !(
            tr ||
            J__writableState.corked ||
            J__writableState.bufferProcessing ||
            !J__writableState.bufferedRequest
          )
        ) {
          tS(J, J__writableState);
        }
        if (Q_sync) {
          te.nextTick(tM, J, J__writableState, tr, Q_writecb);
        } else {
          tM(J, J__writableState, tr, Q_writecb);
        }
      }
    })(Z, J);
  };
  this.writecb = null;
  this.writelen = 0;
  this.bufferedRequest = null;
  this.lastBufferedRequest = null;
  this.pendingcb = 0;
  this.prefinished = false;
  this.errorEmitted = false;
  this.emitClose = J.emitClose !== false;
  this.autoDestroy = !!J.autoDestroy;
  this.bufferedRequestCount = 0;
  this.corkedRequestsFree = new tr(this);
}
require("./module-ULy.js")(tx, ti);
tw.prototype.getBuffer = function () {
  for (var J = this.bufferedRequest, Z = []; J;) {
    Z.push(J);
    J = J.next;
  }
  return Z;
};
try {
  Object.defineProperty(tw.prototype, "buffer", {
    get: tn.deprecate(
      function () {
        return this.getBuffer();
      },
      "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
      "DEP0003",
    ),
  });
} catch (J) {}
function tx(J) {
  const Z = this instanceof ($ = $ || require("./module-zD_2_2.js"));
  if (!Z && !tt.call(tx, this)) {
    return new tx(J);
  }
  this._writableState = new tw(J, this, Z);
  this.writable = true;
  if (J) {
    if (typeof J.write === "function") {
      this._write = J.write;
    }
    if (typeof J.writev === "function") {
      this._writev = J.writev;
    }
    if (typeof J.destroy === "function") {
      this._destroy = J.destroy;
    }
    if (typeof J.final === "function") {
      this._final = J.final;
    }
  }
  ti.call(this);
}
function t_(J, Z, Q, $, tt, te, tr) {
  Z.writelen = $;
  Z.writecb = tr;
  Z.writing = true;
  Z.sync = true;
  if (Z.destroyed) {
    Z.onwrite(new F_ERR_STREAM_DESTROYED("write"));
  } else if (Q) {
    J._writev(tt, Z.onwrite);
  } else {
    J._write(tt, te, Z.onwrite);
  }
  Z.sync = false;
}
function tM(J, Z, Q, $) {
  let tt;
  let te;
  if (!Q) {
    tt = J;
    if ((te = Z).length === 0 && te.needDrain) {
      te.needDrain = false;
      tt.emit("drain");
    }
  }
  Z.pendingcb--;
  $();
  tk(J, Z);
}
function tS(J, Z) {
  Z.bufferProcessing = true;
  let Z_bufferedRequest = Z.bufferedRequest;
  if (J._writev && Z_bufferedRequest && Z_bufferedRequest.next) {
    const $ = Array(Z.bufferedRequestCount);
    const tt = Z.corkedRequestsFree;
    tt.entry = Z_bufferedRequest;
    let te = 0;
    let tn = true;
    while (Z_bufferedRequest) {
      $[te] = Z_bufferedRequest;
      if (!Z_bufferedRequest.isBuf) {
        tn = false;
      }
      Z_bufferedRequest = Z_bufferedRequest.next;
      te += 1;
    }
    $.allBuffers = tn;
    t_(J, Z, true, Z.length, $, "", tt.finish);
    Z.pendingcb++;
    Z.lastBufferedRequest = null;
    if (tt.next) {
      Z.corkedRequestsFree = tt.next;
      tt.next = null;
    } else {
      Z.corkedRequestsFree = new tr(Z);
    }
    Z.bufferedRequestCount = 0;
  } else {
    while (Z_bufferedRequest) {
      const ti = Z_bufferedRequest.chunk;
      const to = Z_bufferedRequest.encoding;
      const ta = Z_bufferedRequest.callback;
      const ts = Z.objectMode ? 1 : ti.length;
      t_(J, Z, false, ts, ti, to, ta);
      Z_bufferedRequest = Z_bufferedRequest.next;
      Z.bufferedRequestCount--;
      if (Z.writing) {
        break;
      }
    }
    if (Z_bufferedRequest === null) {
      Z.lastBufferedRequest = null;
    }
  }
  Z.bufferedRequest = Z_bufferedRequest;
  Z.bufferProcessing = false;
}
function tA(J) {
  return (
    J.ending &&
    J.length === 0 &&
    J.bufferedRequest === null &&
    !J.finished &&
    !J.writing
  );
}
function tE(J, Z) {
  J._final(function (Q) {
    Z.pendingcb--;
    if (Q) {
      ts_errorOrDestroy(J, Q);
    }
    Z.prefinished = true;
    J.emit("prefinish");
    tk(J, Z);
  });
}
function tk(J, Z) {
  const Q = tA(Z);
  if (
    Q &&
    (Z.prefinished ||
      Z.finalCalled ||
      (typeof J._final !== "function" || Z.destroyed
        ? ((Z.prefinished = true), J.emit("prefinish"))
        : (Z.pendingcb++, (Z.finalCalled = true), te.nextTick(tE, J, Z))),
    Z.pendingcb === 0 && ((Z.finished = true), J.emit("finish"), Z.autoDestroy))
  ) {
    const $ = J._readableState;
    if (!$ || ($.autoDestroy && $.endEmitted)) {
      J.destroy();
    }
  }
  return Q;
}
if (
  typeof Symbol === "function" &&
  Symbol.hasInstance &&
  typeof Function.prototype[Symbol.hasInstance] === "function"
) {
  tt = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(tx, Symbol.hasInstance, {
    value: function (J) {
      return (
        !!tt.call(this, J) ||
        (this === tx && J && J._writableState instanceof tw)
      );
    },
  });
} else {
  tt = function (J) {
    return J instanceof this;
  };
}
tx.prototype.pipe = function () {
  ts_errorOrDestroy(this, new F_ERR_STREAM_CANNOT_PIPE());
};
tx.prototype.write = function (J, Z, Q) {
  let $;
  let tt;
  let tr;
  let tn;
  let ti;
  let ts;
  let tf;
  const _writableState = this._writableState;
  let th = false;
  const td =
    !_writableState.objectMode &&
    (($ = J), Buffer.isBuffer($) || $ instanceof ta);
  if (td && !Buffer.isBuffer(J)) {
    tt = J;
    J = Buffer.from(tt);
  }
  if (typeof Z === "function") {
    Q = Z;
    Z = null;
  }
  if (td) {
    Z = "buffer";
  } else if (!Z) {
    Z = _writableState.defaultEncoding;
  }
  if (typeof Q !== "function") {
    Q = tm;
  }
  if (_writableState.ending) {
    tr = Q;
    ts_errorOrDestroy(this, (tn = new F_ERR_STREAM_WRITE_AFTER_END()));
    te.nextTick(tr, tn);
  } else if (
    td ||
    ((ti = J),
    (ts = Q),
    ti === null
      ? (tf = new F_ERR_STREAM_NULL_VALUES())
      : typeof ti === "string" ||
        _writableState.objectMode ||
        (tf = new F_ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer"], ti)),
    !tf || (ts_errorOrDestroy(this, tf), te.nextTick(ts, tf), 0))
  ) {
    _writableState.pendingcb++;
    th = ((J, Z, isBuf, chunk, encoding, callback) => {
      if (!isBuf) {
        let tr;
        let tn;
        tr = chunk;
        tn = encoding;
        if (
          !(Z.objectMode || Z.decodeStrings === false || typeof tr !== "string")
        ) {
          tr = Buffer.from(tr, tn);
        }
        const ti = tr;
        if (chunk !== ti) {
          isBuf = true;
          encoding = "buffer";
          chunk = ti;
        }
      }
      const ta = Z.objectMode ? 1 : chunk.length;
      Z.length += ta;
      const ts = Z.length < Z.highWaterMark;
      if (!ts) {
        Z.needDrain = true;
      }
      if (Z.writing || Z.corked) {
        const tf = Z.lastBufferedRequest;
        Z.lastBufferedRequest = {
          chunk,
          encoding,
          isBuf,
          callback,
          next: null,
        };
        if (tf) {
          tf.next = Z.lastBufferedRequest;
        } else {
          Z.bufferedRequest = Z.lastBufferedRequest;
        }
        Z.bufferedRequestCount += 1;
      } else {
        t_(J, Z, false, ta, chunk, encoding, callback);
      }
      return ts;
    })(this, _writableState, td, J, Z, Q);
  }
  return th;
};
tx.prototype.cork = function () {
  this._writableState.corked++;
};
tx.prototype.uncork = function () {
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
      tS(this, _writableState);
    }
  }
};
tx.prototype.setDefaultEncoding = function (J) {
  if (typeof J === "string") {
    J = J.toLowerCase();
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
      ].indexOf((J + "").toLowerCase()) > -1
    )
  ) {
    throw new F_ERR_UNKNOWN_ENCODING(J);
  }
  this._writableState.defaultEncoding = J;
  return this;
};
Object.defineProperty(tx.prototype, "writableBuffer", {
  enumerable: false,
  get: function () {
    return this._writableState && this._writableState.getBuffer();
  },
});
Object.defineProperty(tx.prototype, "writableHighWaterMark", {
  enumerable: false,
  get: function () {
    return this._writableState.highWaterMark;
  },
});
tx.prototype._write = function (J, Z, Q) {
  Q(new F_ERR_METHOD_NOT_IMPLEMENTED("_write()"));
};
tx.prototype._writev = null;
tx.prototype.end = function (J, Z, Q) {
  let $;
  let tt;
  let tr;
  const _writableState = this._writableState;
  if (typeof J === "function") {
    Q = J;
    J = null;
    Z = null;
  } else if (typeof Z === "function") {
    Q = Z;
    Z = null;
  }
  if (J != null) {
    this.write(J, Z);
  }
  if (_writableState.corked) {
    _writableState.corked = 1;
    this.uncork();
  }
  if (!_writableState.ending) {
    $ = this;
    tt = _writableState;
    tr = Q;
    tt.ending = true;
    tk($, tt);
    if (tr) {
      if (tt.finished) {
        te.nextTick(tr);
      } else {
        $.once("finish", tr);
      }
    }
    tt.ended = true;
    $.writable = false;
  }
  return this;
};
Object.defineProperty(tx.prototype, "writableLength", {
  enumerable: false,
  get: function () {
    return this._writableState.length;
  },
});
Object.defineProperty(tx.prototype, "destroyed", {
  enumerable: false,
  get: function () {
    return this._writableState !== undefined && this._writableState.destroyed;
  },
  set: function (J) {
    if (this._writableState) {
      this._writableState.destroyed = J;
    }
  },
});
tx.prototype.destroy = ts.destroy;
tx.prototype._undestroy = ts.undestroy;
tx.prototype._destroy = function (J, Z) {
  Z(J);
};
