import et from "rCO";
import er from "./module-TVO.js";
import es from "./module-aM_2.js";
import { Buffer } from "./module-sTo.js";
import ec from "./module-QT_2.js";
let $;
let ee;
function en(Z) {
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
export default ed;
const ei =
  !et.browser && ["v0.10", "v0.9."].indexOf(et.version.slice(0, 5)) > -1
    ? setImmediate
    : er.nextTick;
ed.WritableState = el;
const ea = Object.create(require("Rp"));
ea.inherits = require("Hs");
const eo = {
  deprecate: require("./module-gN.js"),
};
const eu =
  (global !== undefined
    ? global
    : typeof window !== "undefined"
      ? window
      : typeof self !== "undefined"
        ? self
        : {}
  ).Uint8Array || function () {};
function eh() {}
function el(Z, Q) {
  $ = $ || require("./module-a5.js");
  Z = Z || {};
  const ee = Q instanceof $;
  this.objectMode = !!Z.objectMode;
  if (ee) {
    this.objectMode = this.objectMode || !!Z.writableObjectMode;
  }
  const Z_highWaterMark = Z.highWaterMark;
  const Z_writableHighWaterMark = Z.writableHighWaterMark;
  const eo = this.objectMode ? 16 : 16384;
  if (Z_highWaterMark || Z_highWaterMark === 0) {
    this.highWaterMark = Z_highWaterMark;
  } else if (ee && (Z_writableHighWaterMark || Z_writableHighWaterMark === 0)) {
    this.highWaterMark = Z_writableHighWaterMark;
  } else {
    this.highWaterMark = eo;
  }
  this.highWaterMark = Math.floor(this.highWaterMark);
  this.finalCalled = false;
  this.needDrain = false;
  this.ending = false;
  this.ended = false;
  this.finished = false;
  this.destroyed = false;
  const es = Z.decodeStrings === false;
  this.decodeStrings = !es;
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
      Z__writableState.writing = false;
      Z__writableState.writecb = null;
      Z__writableState.length -= Z__writableState.writelen;
      Z__writableState.writelen = 0;
      if (Q) {
        --Z__writableState.pendingcb;
        if (X_sync) {
          er.nextTick(X_writecb, Q);
          er.nextTick(e_, Z, Z__writableState);
          Z._writableState.errorEmitted = true;
          Z.emit("error", Q);
        } else {
          X_writecb(Q);
          Z._writableState.errorEmitted = true;
          Z.emit("error", Q);
          e_(Z, Z__writableState);
        }
      } else {
        const et = ey(Z__writableState);
        if (
          !(
            et ||
            Z__writableState.corked ||
            Z__writableState.bufferProcessing ||
            !Z__writableState.bufferedRequest
          )
        ) {
          eg(Z, Z__writableState);
        }
        if (X_sync) {
          ei(eb, Z, Z__writableState, et, X_writecb);
        } else {
          eb(Z, Z__writableState, et, X_writecb);
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
  this.bufferedRequestCount = 0;
  this.corkedRequestsFree = new en(this);
}
ea.inherits(ed, es);
el.prototype.getBuffer = function () {
  for (var Z = this.bufferedRequest, Q = []; Z;) {
    Q.push(Z);
    Z = Z.next;
  }
  return Q;
};
try {
  Object.defineProperty(el.prototype, "buffer", {
    get: eo.deprecate(
      function () {
        return this.getBuffer();
      },
      "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
      "DEP0003",
    ),
  });
} catch (Z) {}
function ed(Z) {
  $ = $ || require("./module-a5.js");
  if (!ee.call(ed, this) && !(this instanceof $)) {
    return new ed(Z);
  }
  this._writableState = new el(Z, this);
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
  es.call(this);
}
function ep(Z, Q, X, $, ee, et, er) {
  Q.writelen = $;
  Q.writecb = er;
  Q.writing = true;
  Q.sync = true;
  if (X) {
    Z._writev(ee, Q.onwrite);
  } else {
    Z._write(ee, et, Q.onwrite);
  }
  Q.sync = false;
}
function eb(Z, Q, X, $) {
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
  e_(Z, Q);
}
function eg(Z, Q) {
  Q.bufferProcessing = true;
  let Q_bufferedRequest = Q.bufferedRequest;
  if (Z._writev && Q_bufferedRequest && Q_bufferedRequest.next) {
    const $ = Array(Q.bufferedRequestCount);
    const ee = Q.corkedRequestsFree;
    ee.entry = Q_bufferedRequest;
    let et = 0;
    let er = true;
    while (Q_bufferedRequest) {
      $[et] = Q_bufferedRequest;
      if (!Q_bufferedRequest.isBuf) {
        er = false;
      }
      Q_bufferedRequest = Q_bufferedRequest.next;
      et += 1;
    }
    $.allBuffers = er;
    ep(Z, Q, true, Q.length, $, "", ee.finish);
    Q.pendingcb++;
    Q.lastBufferedRequest = null;
    if (ee.next) {
      Q.corkedRequestsFree = ee.next;
      ee.next = null;
    } else {
      Q.corkedRequestsFree = new en(Q);
    }
    Q.bufferedRequestCount = 0;
  } else {
    while (Q_bufferedRequest) {
      const ei = Q_bufferedRequest.chunk;
      const ea = Q_bufferedRequest.encoding;
      const eo = Q_bufferedRequest.callback;
      const es = Q.objectMode ? 1 : ei.length;
      ep(Z, Q, false, es, ei, ea, eo);
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
function ey(Z) {
  return (
    Z.ending &&
    Z.length === 0 &&
    Z.bufferedRequest === null &&
    !Z.finished &&
    !Z.writing
  );
}
function ev(Z, Q) {
  Z._final(function (X) {
    Q.pendingcb--;
    if (X) {
      Z.emit("error", X);
    }
    Q.prefinished = true;
    Z.emit("prefinish");
    e_(Z, Q);
  });
}
function e_(Z, Q) {
  const X = ey(Q);
  if (X) {
    if (!(Q.prefinished || Q.finalCalled)) {
      if (typeof Z._final === "function") {
        Q.pendingcb++;
        Q.finalCalled = true;
        er.nextTick(ev, Z, Q);
      } else {
        Q.prefinished = true;
        Z.emit("prefinish");
      }
    }
    if (Q.pendingcb === 0) {
      Q.finished = true;
      Z.emit("finish");
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
  Object.defineProperty(ed, Symbol.hasInstance, {
    value: function (Z) {
      return (
        !!ee.call(this, Z) ||
        (this === ed && Z && Z._writableState instanceof el)
      );
    },
  });
} else {
  ee = function (Z) {
    return Z instanceof this;
  };
}
ed.prototype.pipe = function () {
  this.emit("error", Error("Cannot pipe, not readable"));
};
ed.prototype.write = function (Z, Q, X) {
  let $;
  let ee;
  let et;
  let en;
  let ei;
  let ea;
  let eo;
  let es;
  const _writableState = this._writableState;
  let el = false;
  const ed =
    !_writableState.objectMode &&
    (($ = Z), Buffer.isBuffer($) || $ instanceof eu);
  if (ed && !Buffer.isBuffer(Z)) {
    ee = Z;
    Z = Buffer.from(ee);
  }
  if (typeof Q === "function") {
    X = Q;
    Q = null;
  }
  if (ed) {
    Q = "buffer";
  } else if (!Q) {
    Q = _writableState.defaultEncoding;
  }
  if (typeof X !== "function") {
    X = eh;
  }
  if (_writableState.ended) {
    et = X;
    en = Error("write after end");
    this.emit("error", en);
    er.nextTick(et, en);
  } else if (
    ed ||
    ((ei = Z),
    (ea = X),
    (eo = true),
    (es = false),
    ei === null
      ? (es = TypeError("May not write null values to stream"))
      : typeof ei === "string" ||
        ei === undefined ||
        _writableState.objectMode ||
        (es = TypeError("Invalid non-string/buffer chunk")),
    es && (this.emit("error", es), er.nextTick(ea, es), (eo = false)),
    eo)
  ) {
    _writableState.pendingcb++;
    el = ((Z, Q, isBuf, chunk, encoding, callback) => {
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
      const ea = Q.objectMode ? 1 : chunk.length;
      Q.length += ea;
      const eo = Q.length < Q.highWaterMark;
      if (!eo) {
        Q.needDrain = true;
      }
      if (Q.writing || Q.corked) {
        const es = Q.lastBufferedRequest;
        Q.lastBufferedRequest = {
          chunk,
          encoding,
          isBuf,
          callback,
          next: null,
        };
        if (es) {
          es.next = Q.lastBufferedRequest;
        } else {
          Q.bufferedRequest = Q.lastBufferedRequest;
        }
        Q.bufferedRequestCount += 1;
      } else {
        ep(Z, Q, false, ea, chunk, encoding, callback);
      }
      return eo;
    })(this, _writableState, ed, Z, Q, X);
  }
  return el;
};
ed.prototype.cork = function () {
  const _writableState = this._writableState;
  _writableState.corked++;
};
ed.prototype.uncork = function () {
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
      eg(this, _writableState);
    }
  }
};
ed.prototype.setDefaultEncoding = function (Z) {
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
    throw TypeError("Unknown encoding: " + Z);
  }
  this._writableState.defaultEncoding = Z;
  return this;
};
Object.defineProperty(ed.prototype, "writableHighWaterMark", {
  enumerable: false,
  get: function () {
    return this._writableState.highWaterMark;
  },
});
ed.prototype._write = function (Z, Q, X) {
  X(Error("_write() is not implemented"));
};
ed.prototype._writev = null;
ed.prototype.end = function (Z, Q, X) {
  let $;
  let ee;
  let et;
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
    et = X;
    ee.ending = true;
    e_($, ee);
    if (et) {
      if (ee.finished) {
        er.nextTick(et);
      } else {
        $.once("finish", et);
      }
    }
    ee.ended = true;
    $.writable = false;
  }
};
Object.defineProperty(ed.prototype, "destroyed", {
  get: function () {
    return this._writableState !== undefined && this._writableState.destroyed;
  },
  set: function (Z) {
    if (this._writableState) {
      this._writableState.destroyed = Z;
    }
  },
});
ed.prototype.destroy = ec.destroy;
ed.prototype._undestroy = ec.undestroy;
ed.prototype._destroy = function (Z, Q) {
  this.end();
  Q(Z);
};
