import te from "./module-H8.js";
import tr from "./module-EH.js";
import ts from "./module-UA.js";
import { Buffer } from "./module-Um.js";
import tc from "./module-wh_2_2.js";
let $;
let tt;
function tn(J) {
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
export default tl;
const ti =
  !te.browser && ["v0.10", "v0.9."].indexOf(te.version.slice(0, 5)) > -1
    ? setImmediate
    : tr.nextTick;
tl.WritableState = td;
const to = Object.create(require("./module-H96.js"));
to.inherits = require("./module-ULy.js");
const ta = {
  deprecate: require("./module-Lx_2_2.js"),
};
const tu =
  (global !== undefined
    ? global
    : typeof window !== "undefined"
      ? window
      : typeof self !== "undefined"
        ? self
        : {}
  ).Uint8Array || function () {};
function th() {}
function td(J, Z) {
  $ = $ || require("./module-ef.js");
  J = J || {};
  const tt = Z instanceof $;
  this.objectMode = !!J.objectMode;
  if (tt) {
    this.objectMode = this.objectMode || !!J.writableObjectMode;
  }
  const J_highWaterMark = J.highWaterMark;
  const J_writableHighWaterMark = J.writableHighWaterMark;
  const ta = this.objectMode ? 16 : 16384;
  if (J_highWaterMark || J_highWaterMark === 0) {
    this.highWaterMark = J_highWaterMark;
  } else if (tt && (J_writableHighWaterMark || J_writableHighWaterMark === 0)) {
    this.highWaterMark = J_writableHighWaterMark;
  } else {
    this.highWaterMark = ta;
  }
  this.highWaterMark = Math.floor(this.highWaterMark);
  this.finalCalled = false;
  this.needDrain = false;
  this.ending = false;
  this.ended = false;
  this.finished = false;
  this.destroyed = false;
  const ts = J.decodeStrings === false;
  this.decodeStrings = !ts;
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
      J__writableState.writing = false;
      J__writableState.writecb = null;
      J__writableState.length -= J__writableState.writelen;
      J__writableState.writelen = 0;
      if (Z) {
        --J__writableState.pendingcb;
        if (Q_sync) {
          tr.nextTick(Q_writecb, Z);
          tr.nextTick(tm, J, J__writableState);
          J._writableState.errorEmitted = true;
          J.emit("error", Z);
        } else {
          Q_writecb(Z);
          J._writableState.errorEmitted = true;
          J.emit("error", Z);
          tm(J, J__writableState);
        }
      } else {
        const te = tg(J__writableState);
        if (
          !(
            te ||
            J__writableState.corked ||
            J__writableState.bufferProcessing ||
            !J__writableState.bufferedRequest
          )
        ) {
          tv(J, J__writableState);
        }
        if (Q_sync) {
          ti(tb, J, J__writableState, te, Q_writecb);
        } else {
          tb(J, J__writableState, te, Q_writecb);
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
  this.bufferedRequestCount = 0;
  this.corkedRequestsFree = new tn(this);
}
to.inherits(tl, ts);
td.prototype.getBuffer = function () {
  for (var J = this.bufferedRequest, Z = []; J;) {
    Z.push(J);
    J = J.next;
  }
  return Z;
};
try {
  Object.defineProperty(td.prototype, "buffer", {
    get: ta.deprecate(
      function () {
        return this.getBuffer();
      },
      "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
      "DEP0003",
    ),
  });
} catch (J) {}
function tl(J) {
  $ = $ || require("./module-ef.js");
  if (!tt.call(tl, this) && !(this instanceof $)) {
    return new tl(J);
  }
  this._writableState = new td(J, this);
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
  ts.call(this);
}
function tp(J, Z, Q, $, tt, te, tr) {
  Z.writelen = $;
  Z.writecb = tr;
  Z.writing = true;
  Z.sync = true;
  if (Q) {
    J._writev(tt, Z.onwrite);
  } else {
    J._write(tt, te, Z.onwrite);
  }
  Z.sync = false;
}
function tb(J, Z, Q, $) {
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
  tm(J, Z);
}
function tv(J, Z) {
  Z.bufferProcessing = true;
  let Z_bufferedRequest = Z.bufferedRequest;
  if (J._writev && Z_bufferedRequest && Z_bufferedRequest.next) {
    const $ = Array(Z.bufferedRequestCount);
    const tt = Z.corkedRequestsFree;
    tt.entry = Z_bufferedRequest;
    let te = 0;
    let tr = true;
    while (Z_bufferedRequest) {
      $[te] = Z_bufferedRequest;
      if (!Z_bufferedRequest.isBuf) {
        tr = false;
      }
      Z_bufferedRequest = Z_bufferedRequest.next;
      te += 1;
    }
    $.allBuffers = tr;
    tp(J, Z, true, Z.length, $, "", tt.finish);
    Z.pendingcb++;
    Z.lastBufferedRequest = null;
    if (tt.next) {
      Z.corkedRequestsFree = tt.next;
      tt.next = null;
    } else {
      Z.corkedRequestsFree = new tn(Z);
    }
    Z.bufferedRequestCount = 0;
  } else {
    while (Z_bufferedRequest) {
      const ti = Z_bufferedRequest.chunk;
      const to = Z_bufferedRequest.encoding;
      const ta = Z_bufferedRequest.callback;
      const ts = Z.objectMode ? 1 : ti.length;
      tp(J, Z, false, ts, ti, to, ta);
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
function tg(J) {
  return (
    J.ending &&
    J.length === 0 &&
    J.bufferedRequest === null &&
    !J.finished &&
    !J.writing
  );
}
function ty(J, Z) {
  J._final(function (Q) {
    Z.pendingcb--;
    if (Q) {
      J.emit("error", Q);
    }
    Z.prefinished = true;
    J.emit("prefinish");
    tm(J, Z);
  });
}
function tm(J, Z) {
  const Q = tg(Z);
  if (Q) {
    if (!(Z.prefinished || Z.finalCalled)) {
      if (typeof J._final === "function") {
        Z.pendingcb++;
        Z.finalCalled = true;
        tr.nextTick(ty, J, Z);
      } else {
        Z.prefinished = true;
        J.emit("prefinish");
      }
    }
    if (Z.pendingcb === 0) {
      Z.finished = true;
      J.emit("finish");
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
  Object.defineProperty(tl, Symbol.hasInstance, {
    value: function (J) {
      return (
        !!tt.call(this, J) ||
        (this === tl && J && J._writableState instanceof td)
      );
    },
  });
} else {
  tt = function (J) {
    return J instanceof this;
  };
}
tl.prototype.pipe = function () {
  this.emit("error", Error("Cannot pipe, not readable"));
};
tl.prototype.write = function (J, Z, Q) {
  let $;
  let tt;
  let te;
  let tn;
  let ti;
  let to;
  let ta;
  let ts;
  const _writableState = this._writableState;
  let td = false;
  const tl =
    !_writableState.objectMode &&
    (($ = J), Buffer.isBuffer($) || $ instanceof tu);
  if (tl && !Buffer.isBuffer(J)) {
    tt = J;
    J = Buffer.from(tt);
  }
  if (typeof Z === "function") {
    Q = Z;
    Z = null;
  }
  if (tl) {
    Z = "buffer";
  } else if (!Z) {
    Z = _writableState.defaultEncoding;
  }
  if (typeof Q !== "function") {
    Q = th;
  }
  if (_writableState.ended) {
    te = Q;
    tn = Error("write after end");
    this.emit("error", tn);
    tr.nextTick(te, tn);
  } else if (
    tl ||
    ((ti = J),
    (to = Q),
    (ta = true),
    (ts = false),
    ti === null
      ? (ts = TypeError("May not write null values to stream"))
      : typeof ti === "string" ||
        ti === undefined ||
        _writableState.objectMode ||
        (ts = TypeError("Invalid non-string/buffer chunk")),
    ts && (this.emit("error", ts), tr.nextTick(to, ts), (ta = false)),
    ta)
  ) {
    _writableState.pendingcb++;
    td = ((J, Z, isBuf, chunk, encoding, callback) => {
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
      const to = Z.objectMode ? 1 : chunk.length;
      Z.length += to;
      const ta = Z.length < Z.highWaterMark;
      if (!ta) {
        Z.needDrain = true;
      }
      if (Z.writing || Z.corked) {
        const ts = Z.lastBufferedRequest;
        Z.lastBufferedRequest = {
          chunk,
          encoding,
          isBuf,
          callback,
          next: null,
        };
        if (ts) {
          ts.next = Z.lastBufferedRequest;
        } else {
          Z.bufferedRequest = Z.lastBufferedRequest;
        }
        Z.bufferedRequestCount += 1;
      } else {
        tp(J, Z, false, to, chunk, encoding, callback);
      }
      return ta;
    })(this, _writableState, tl, J, Z, Q);
  }
  return td;
};
tl.prototype.cork = function () {
  const _writableState = this._writableState;
  _writableState.corked++;
};
tl.prototype.uncork = function () {
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
      tv(this, _writableState);
    }
  }
};
tl.prototype.setDefaultEncoding = function (J) {
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
    throw TypeError("Unknown encoding: " + J);
  }
  this._writableState.defaultEncoding = J;
  return this;
};
Object.defineProperty(tl.prototype, "writableHighWaterMark", {
  enumerable: false,
  get: function () {
    return this._writableState.highWaterMark;
  },
});
tl.prototype._write = function (J, Z, Q) {
  Q(Error("_write() is not implemented"));
};
tl.prototype._writev = null;
tl.prototype.end = function (J, Z, Q) {
  let $;
  let tt;
  let te;
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
    te = Q;
    tt.ending = true;
    tm($, tt);
    if (te) {
      if (tt.finished) {
        tr.nextTick(te);
      } else {
        $.once("finish", te);
      }
    }
    tt.ended = true;
    $.writable = false;
  }
};
Object.defineProperty(tl.prototype, "destroyed", {
  get: function () {
    return this._writableState !== undefined && this._writableState.destroyed;
  },
  set: function (J) {
    if (this._writableState) {
      this._writableState.destroyed = J;
    }
  },
});
tl.prototype.destroy = tc.destroy;
tl.prototype._undestroy = tc.undestroy;
tl.prototype._destroy = function (J, Z) {
  this.end();
  Z(J);
};
