import ti from "./module-H8.js";
import ta from "./module-e9.js";
import { Buffer } from "./module-pH.js";
import tu from "./module-qNo.js";
import tc from "./module-N4.js";
import th from "./module-VV_3_2.js";
import _td from "./module-LS_2_2.js";
import { F } from "./module-abl.js";
let $;
let tt;
let te;
let tr;
let tn;
export default tx;
tx.ReadableState = tw;
require("./module-pf.js").EventEmitter;
const to = (J, Z) => J.listeners(Z).length;
const tf =
  (global !== undefined
    ? global
    : typeof window !== "undefined"
      ? window
      : typeof self !== "undefined"
        ? self
        : {}
  ).Uint8Array || function () {};
tt = tu && tu.debuglog ? tu.debuglog("stream") : function () {};
var _td_getHighWaterMark = _td.getHighWaterMark;
const F_ERR_INVALID_ARG_TYPE = F.ERR_INVALID_ARG_TYPE;
const F_ERR_STREAM_PUSH_AFTER_EOF = F.ERR_STREAM_PUSH_AFTER_EOF;
const F_ERR_METHOD_NOT_IMPLEMENTED = F.ERR_METHOD_NOT_IMPLEMENTED;
const F_ERR_STREAM_UNSHIFT_AFTER_END_EVENT =
  F.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
require("./module-ULy.js")(tx, ta);
const th_errorOrDestroy = th.errorOrDestroy;
const tm = ["error", "close", "destroy", "pause", "resume"];
function tw(J, Z, tt) {
  $ = $ || require("./module-zD_2_2.js");
  J = J || {};
  if (typeof tt !== "boolean") {
    tt = Z instanceof $;
  }
  this.objectMode = !!J.objectMode;
  if (tt) {
    this.objectMode = this.objectMode || !!J.readableObjectMode;
  }
  this.highWaterMark = _td_getHighWaterMark(
    this,
    J,
    "readableHighWaterMark",
    tt,
  );
  this.buffer = new tc();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;
  this.sync = true;
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;
  this.paused = true;
  this.emitClose = J.emitClose !== false;
  this.autoDestroy = !!J.autoDestroy;
  this.destroyed = false;
  this.defaultEncoding = J.defaultEncoding || "utf8";
  this.awaitDrain = 0;
  this.readingMore = false;
  this.decoder = null;
  this.encoding = null;
  if (J.encoding) {
    if (!te) {
      te = require("./module-gU.js").I;
    }
    this.decoder = new te(J.encoding);
    this.encoding = J.encoding;
  }
}
function tx(J) {
  $ = $ || require("./module-zD_2_2.js");
  if (!(this instanceof tx)) {
    return new tx(J);
  }
  const Z = this instanceof $;
  this._readableState = new tw(J, this, Z);
  this.readable = true;
  if (J) {
    if (typeof J.read === "function") {
      this._read = J.read;
    }
    if (typeof J.destroy === "function") {
      this._destroy = J.destroy;
    }
  }
  ta.call(this);
}
function t_(J, Z, Q, $, te) {
  tt("readableAddChunk", Z);
  let tr;
  let tn;
  const J__readableState = J._readableState;
  if (Z === null) {
    J__readableState.reading = false;
    ((J, Z) => {
      tt("onEofChunk");
      if (!Z.ended) {
        if (Z.decoder) {
          const Q = Z.decoder.end();
          if (Q && Q.length) {
            Z.buffer.push(Q);
            Z.length += Z.objectMode ? 1 : Q.length;
          }
        }
        Z.ended = true;
        if (Z.sync) {
          tA(J);
        } else {
          Z.needReadable = false;
          if (!Z.emittedReadable) {
            Z.emittedReadable = true;
            tE(J);
          }
        }
      }
    })(J, J__readableState);
  } else {
    if (!te) {
      tn = ((J, Z) => {
        let Q;
        if (
          !(
            Buffer.isBuffer(Z) ||
            Z instanceof tf ||
            typeof Z === "string" ||
            Z === undefined ||
            J.objectMode
          )
        ) {
          Q = new F_ERR_INVALID_ARG_TYPE(
            "chunk",
            ["string", "Buffer", "Uint8Array"],
            Z,
          );
        }
        return Q;
      })(J__readableState, Z);
    }
    if (tn) {
      th_errorOrDestroy(J, tn);
    } else if (J__readableState.objectMode || (Z && Z.length > 0)) {
      if (
        !(
          typeof Z === "string" ||
          J__readableState.objectMode ||
          Object.getPrototypeOf(Z) === Buffer.prototype
        )
      ) {
        tr = Z;
        Z = Buffer.from(tr);
      }
      if ($) {
        if (J__readableState.endEmitted) {
          th_errorOrDestroy(J, new F_ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
        } else {
          tM(J, J__readableState, Z, true);
        }
      } else if (J__readableState.ended) {
        th_errorOrDestroy(J, new F_ERR_STREAM_PUSH_AFTER_EOF());
      } else {
        if (J__readableState.destroyed) {
          return false;
        }
        J__readableState.reading = false;
        if (J__readableState.decoder && !Q) {
          Z = J__readableState.decoder.write(Z);
          if (J__readableState.objectMode || Z.length !== 0) {
            tM(J, J__readableState, Z, false);
          } else {
            tk(J, J__readableState);
          }
        } else {
          tM(J, J__readableState, Z, false);
        }
      }
    } else {
      if (!$) {
        J__readableState.reading = false;
        tk(J, J__readableState);
      }
    }
  }
  return (
    !J__readableState.ended &&
    (J__readableState.length < J__readableState.highWaterMark ||
      J__readableState.length === 0)
  );
}
function tM(J, J__readableState, Q, $) {
  if (
    J__readableState.flowing &&
    J__readableState.length === 0 &&
    !J__readableState.sync
  ) {
    J__readableState.awaitDrain = 0;
    J.emit("data", Q);
  } else {
    J__readableState.length += J__readableState.objectMode ? 1 : Q.length;
    if ($) {
      J__readableState.buffer.unshift(Q);
    } else {
      J__readableState.buffer.push(Q);
    }
    if (J__readableState.needReadable) {
      tA(J);
    }
  }
  tk(J, J__readableState);
}
function tS(J, _readableState) {
  let Q;
  if (J <= 0 || (_readableState.length === 0 && _readableState.ended)) {
    return 0;
  }
  if (_readableState.objectMode) {
    return 1;
  }
  if (J != J) {
    if (_readableState.flowing && _readableState.length) {
      return _readableState.buffer.head.data.length;
    } else {
      return _readableState.length;
    }
  }
  if (J > _readableState.highWaterMark) {
    if ((Q = J) >= 1073741824) {
      Q = 1073741824;
    } else {
      Q--;
      Q |= Q >>> 1;
      Q |= Q >>> 2;
      Q |= Q >>> 4;
      Q |= Q >>> 8;
      Q |= Q >>> 16;
      Q++;
    }
    _readableState.highWaterMark = Q;
  }
  if (J <= _readableState.length) {
    return J;
  }
  if (_readableState.ended) {
    return _readableState.length;
  }
  _readableState.needReadable = true;
  return 0;
}
function tA(J) {
  const J__readableState = J._readableState;
  tt(
    "emitReadable",
    J__readableState.needReadable,
    J__readableState.emittedReadable,
  );
  J__readableState.needReadable = false;
  if (!J__readableState.emittedReadable) {
    tt("emitReadable", J__readableState.flowing);
    J__readableState.emittedReadable = true;
    ti.nextTick(tE, J);
  }
}
function tE(J) {
  const J__readableState = J._readableState;
  tt(
    "emitReadable_",
    J__readableState.destroyed,
    J__readableState.length,
    J__readableState.ended,
  );
  if (
    !J__readableState.destroyed &&
    (J__readableState.length || J__readableState.ended)
  ) {
    J.emit("readable");
    J__readableState.emittedReadable = false;
  }
  J__readableState.needReadable =
    !J__readableState.flowing &&
    !J__readableState.ended &&
    J__readableState.length <= J__readableState.highWaterMark;
  tB(J);
}
function tk(J, Z) {
  if (!Z.readingMore) {
    Z.readingMore = true;
    ti.nextTick(tR, J, Z);
  }
}
function tR(J, Z) {
  while (
    !Z.reading &&
    !Z.ended &&
    (Z.length < Z.highWaterMark || (Z.flowing && Z.length === 0))
  ) {
    const Q = Z.length;
    tt("maybeReadMore read 0");
    J.read(0);
    if (Q === Z.length) {
      break;
    }
  }
  Z.readingMore = false;
}
function tI(J) {
  const J__readableState = J._readableState;
  J__readableState.readableListening = J.listenerCount("readable") > 0;
  if (J__readableState.resumeScheduled && !J__readableState.paused) {
    J__readableState.flowing = true;
  } else if (J.listenerCount("data") > 0) {
    J.resume();
  }
}
function tO(J) {
  tt("readable nexttick read 0");
  J.read(0);
}
function tT(J, Z) {
  tt("resume", Z.reading);
  if (!Z.reading) {
    J.read(0);
  }
  Z.resumeScheduled = false;
  J.emit("resume");
  tB(J);
  if (Z.flowing && !Z.reading) {
    J.read(0);
  }
}
function tB(J) {
  const J__readableState = J._readableState;
  tt("flow", J__readableState.flowing);
  while (J__readableState.flowing && J.read() !== null);
}
function tj(J, Z) {
  let Q;
  if (Z.length === 0) {
    return null;
  }
  if (Z.objectMode) {
    Q = Z.buffer.shift();
  } else if (!J || J >= Z.length) {
    Q = Z.decoder
      ? Z.buffer.join("")
      : Z.buffer.length === 1
        ? Z.buffer.first()
        : Z.buffer.concat(Z.length);
    Z.buffer.clear();
  } else {
    Q = Z.buffer.consume(J, Z.decoder);
  }
  return Q;
}
function tC(J) {
  const J__readableState = J._readableState;
  tt("endReadable", J__readableState.endEmitted);
  if (!J__readableState.endEmitted) {
    J__readableState.ended = true;
    ti.nextTick(tP, J__readableState, J);
  }
}
function tP(J, Z) {
  tt("endReadableNT", J.endEmitted, J.length);
  if (
    !J.endEmitted &&
    J.length === 0 &&
    ((J.endEmitted = true), (Z.readable = false), Z.emit("end"), J.autoDestroy)
  ) {
    const Q = Z._writableState;
    if (!Q || (Q.autoDestroy && Q.finished)) {
      Z.destroy();
    }
  }
}
function tL(pipes, Z) {
  for (let Q = 0, $ = pipes.length; Q < $; Q++) {
    if (pipes[Q] === Z) {
      return Q;
    }
  }
  return -1;
}
Object.defineProperty(tx.prototype, "destroyed", {
  enumerable: false,
  get: function () {
    return this._readableState !== undefined && this._readableState.destroyed;
  },
  set: function (J) {
    if (this._readableState) {
      this._readableState.destroyed = J;
    }
  },
});
tx.prototype.destroy = th.destroy;
tx.prototype._undestroy = th.undestroy;
tx.prototype._destroy = function (J, Z) {
  Z(J);
};
tx.prototype.push = function (J, Z) {
  let Q;
  const _readableState = this._readableState;
  if (_readableState.objectMode) {
    Q = true;
  } else if (typeof J === "string") {
    if ((Z = Z || _readableState.defaultEncoding) !== _readableState.encoding) {
      J = Buffer.from(J, Z);
      Z = "";
    }
    Q = true;
  }
  return t_(this, J, Z, false, Q);
};
tx.prototype.unshift = function (J) {
  return t_(this, J, null, true, false);
};
tx.prototype.isPaused = function () {
  return this._readableState.flowing === false;
};
tx.prototype.setEncoding = function (J) {
  if (!te) {
    te = require("./module-gU.js").I;
  }
  const Z = new te(J);
  this._readableState.decoder = Z;
  this._readableState.encoding = this._readableState.decoder.encoding;
  for (var $ = this._readableState.buffer.head, tt = ""; $ !== null;) {
    tt += Z.write($.data);
    $ = $.next;
  }
  this._readableState.buffer.clear();
  if (tt !== "") {
    this._readableState.buffer.push(tt);
  }
  this._readableState.length = tt.length;
  return this;
};
tx.prototype.read = function (J) {
  tt("read", J);
  J = parseInt(J, 10);
  let Z;
  const _readableState = this._readableState;
  const $ = J;
  if (J !== 0) {
    _readableState.emittedReadable = false;
  }
  if (
    J === 0 &&
    _readableState.needReadable &&
    ((_readableState.highWaterMark !== 0
      ? _readableState.length >= _readableState.highWaterMark
      : _readableState.length > 0) ||
      _readableState.ended)
  ) {
    tt("read: emitReadable", _readableState.length, _readableState.ended);
    if (_readableState.length === 0 && _readableState.ended) {
      tC(this);
    } else {
      tA(this);
    }
    return null;
  }
  if ((J = tS(J, _readableState)) === 0 && _readableState.ended) {
    if (_readableState.length === 0) {
      tC(this);
    }
    return null;
  }
  let Q_needReadable = _readableState.needReadable;
  tt("need readable", Q_needReadable);
  if (
    _readableState.length === 0 ||
    _readableState.length - J < _readableState.highWaterMark
  ) {
    tt("length less than watermark", (Q_needReadable = true));
  }
  if (_readableState.ended || _readableState.reading) {
    tt("reading or ended", (Q_needReadable = false));
  } else if (Q_needReadable) {
    tt("do read");
    _readableState.reading = true;
    _readableState.sync = true;
    if (_readableState.length === 0) {
      _readableState.needReadable = true;
    }
    this._read(_readableState.highWaterMark);
    _readableState.sync = false;
    if (!_readableState.reading) {
      J = tS($, _readableState);
    }
  }
  if ((Z = J > 0 ? tj(J, _readableState) : null) === null) {
    _readableState.needReadable =
      _readableState.length <= _readableState.highWaterMark;
    J = 0;
  } else {
    _readableState.length -= J;
    _readableState.awaitDrain = 0;
  }
  if (_readableState.length === 0) {
    if (!_readableState.ended) {
      _readableState.needReadable = true;
    }
    if ($ !== J && _readableState.ended) {
      tC(this);
    }
  }
  if (Z !== null) {
    this.emit("data", Z);
  }
  return Z;
};
tx.prototype._read = function (J) {
  th_errorOrDestroy(this, new F_ERR_METHOD_NOT_IMPLEMENTED("_read()"));
};
tx.prototype.pipe = function (J, Z) {
  let Q;
  const $ = this;
  const _readableState = this._readableState;
  switch (_readableState.pipesCount) {
    case 0:
      _readableState.pipes = J;
      break;
    case 1:
      _readableState.pipes = [_readableState.pipes, J];
      break;
    default:
      _readableState.pipes.push(J);
  }
  _readableState.pipesCount += 1;
  tt("pipe count=%d opts=%j", _readableState.pipesCount, Z);
  const tr =
    (Z && Z.end === false) || J === ti.stdout || J === ti.stderr ? td : tn;
  function tn() {
    tt("onend");
    J.end();
  }
  if (_readableState.endEmitted) {
    ti.nextTick(tr);
  } else {
    $.once("end", tr);
  }
  J.on("unpipe", function Z(Q, tr) {
    tt("onunpipe");
    if (Q === $ && tr && tr.hasUnpiped === false) {
      tr.hasUnpiped = true;
      tt("cleanup");
      J.removeListener("close", tc);
      J.removeListener("finish", th);
      J.removeListener("drain", ta);
      J.removeListener("error", tu);
      J.removeListener("unpipe", Z);
      $.removeListener("end", tn);
      $.removeListener("end", td);
      $.removeListener("data", tf);
      ts = true;
      if (
        _readableState.awaitDrain &&
        (!J._writableState || J._writableState.needDrain)
      ) {
        ta();
      }
    }
  });
  Q = $;
  var ta = function () {
    const Q__readableState = Q._readableState;
    tt("pipeOnDrain", Q__readableState.awaitDrain);
    if (Q__readableState.awaitDrain) {
      Q__readableState.awaitDrain--;
    }
    if (Q__readableState.awaitDrain === 0 && to(Q, "data")) {
      Q__readableState.flowing = true;
      tB(Q);
    }
  };
  J.on("drain", ta);
  var ts = false;
  function tf(Z) {
    tt("ondata");
    const Q = J.write(Z);
    tt("dest.write", Q);
    if (Q === false) {
      if (
        ((_readableState.pipesCount === 1 && _readableState.pipes === J) ||
          (_readableState.pipesCount > 1 &&
            tL(_readableState.pipes, J) !== -1)) &&
        !ts
      ) {
        tt("false write response, pause", _readableState.awaitDrain);
        _readableState.awaitDrain++;
      }
      $.pause();
    }
  }
  function tu(Z) {
    tt("onerror", Z);
    td();
    J.removeListener("error", tu);
    if (to(J, "error") === 0) {
      th_errorOrDestroy(J, Z);
    }
  }
  function tc() {
    J.removeListener("finish", th);
    td();
  }
  function th() {
    tt("onfinish");
    J.removeListener("close", tc);
    td();
  }
  function td() {
    tt("unpipe");
    $.unpipe(J);
  }
  $.on("data", tf);
  ((J, Z, Q) => {
    if (typeof J.prependListener === "function") {
      return J.prependListener(Z, Q);
    }
    if (J._events && J._events[Z]) {
      if (Array.isArray(J._events[Z])) {
        J._events[Z].unshift(Q);
      } else {
        J._events[Z] = [Q, J._events[Z]];
      }
    } else {
      J.on(Z, Q);
    }
  })(J, "error", tu);
  J.once("close", tc);
  J.once("finish", th);
  J.emit("pipe", $);
  if (!_readableState.flowing) {
    tt("pipe resume");
    $.resume();
  }
  return J;
};
tx.prototype.unpipe = function (J) {
  const _readableState = this._readableState;
  const Q = {
    hasUnpiped: false,
  };
  if (_readableState.pipesCount === 0) {
    return this;
  }
  if (_readableState.pipesCount === 1) {
    if (!(J && J !== _readableState.pipes)) {
      if (!J) {
        J = _readableState.pipes;
      }
      _readableState.pipes = null;
      _readableState.pipesCount = 0;
      _readableState.flowing = false;
      if (J) {
        J.emit("unpipe", this, Q);
      }
    }
    return this;
  }
  if (!J) {
    const $ = _readableState.pipes;
    const tt = _readableState.pipesCount;
    _readableState.pipes = null;
    _readableState.pipesCount = 0;
    _readableState.flowing = false;
    for (let te = 0; te < tt; te++) {
      $[te].emit("unpipe", this, {
        hasUnpiped: false,
      });
    }
    return this;
  }
  const tr = tL(_readableState.pipes, J);
  if (tr !== -1) {
    _readableState.pipes.splice(tr, 1);
    _readableState.pipesCount -= 1;
    if (_readableState.pipesCount === 1) {
      _readableState.pipes = _readableState.pipes[0];
    }
    J.emit("unpipe", this, Q);
  }
  return this;
};
tx.prototype.on = function (J, Z) {
  const Q = ta.prototype.on.call(this, J, Z);
  const _readableState = this._readableState;
  if (J === "data") {
    _readableState.readableListening = this.listenerCount("readable") > 0;
    if (_readableState.flowing !== false) {
      this.resume();
    }
  } else if (
    !(
      J !== "readable" ||
      _readableState.endEmitted ||
      _readableState.readableListening
    )
  ) {
    _readableState.readableListening = _readableState.needReadable = true;
    _readableState.flowing = false;
    _readableState.emittedReadable = false;
    tt("on readable", _readableState.length, _readableState.reading);
    if (_readableState.length) {
      tA(this);
    } else if (!_readableState.reading) {
      ti.nextTick(tO, this);
    }
  }
  return Q;
};
tx.prototype.addListener = tx.prototype.on;
tx.prototype.removeListener = function (J, Z) {
  const Q = ta.prototype.removeListener.call(this, J, Z);
  if (J === "readable") {
    ti.nextTick(tI, this);
  }
  return Q;
};
tx.prototype.removeAllListeners = function (J) {
  const Z = ta.prototype.removeAllListeners.apply(this, arguments);
  if (J === "readable" || J === undefined) {
    ti.nextTick(tI, this);
  }
  return Z;
};
tx.prototype.resume = function () {
  let J;
  let Z;
  const _readableState = this._readableState;
  if (!_readableState.flowing) {
    tt("resume");
    _readableState.flowing = !_readableState.readableListening;
    J = this;
    if (!(Z = _readableState).resumeScheduled) {
      Z.resumeScheduled = true;
      ti.nextTick(tT, J, Z);
    }
  }
  _readableState.paused = false;
  return this;
};
tx.prototype.pause = function () {
  tt("call pause flowing=%j", this._readableState.flowing);
  if (this._readableState.flowing !== false) {
    tt("pause");
    this._readableState.flowing = false;
    this.emit("pause");
  }
  this._readableState.paused = true;
  return this;
};
tx.prototype.wrap = function (J) {
  const Z = this;
  const _readableState = this._readableState;
  let $ = false;
  J.on("end", function () {
    tt("wrapped end");
    if (_readableState.decoder && !_readableState.ended) {
      const J = _readableState.decoder.end();
      if (J && J.length) {
        Z.push(J);
      }
    }
    Z.push(null);
  });
  J.on("data", function (te) {
    tt("wrapped data");
    if (_readableState.decoder) {
      te = _readableState.decoder.write(te);
    }
    if (!(_readableState.objectMode && te == null)) {
      if (_readableState.objectMode || (te && te.length)) {
        if (!Z.push(te)) {
          $ = true;
          J.pause();
        }
      }
    }
  });
  for (const te in J) {
    if (this[te] === undefined && typeof J[te] === "function") {
      this[te] = ((Z) =>
        function () {
          return J[Z].apply(J, arguments);
        })(te);
    }
  }
  for (let tr = 0; tr < tm.length; tr++) {
    J.on(tm[tr], this.emit.bind(this, tm[tr]));
  }
  this._read = function (Z) {
    tt("wrapped _read", Z);
    if ($) {
      $ = false;
      J.resume();
    }
  };
  return this;
};
if (typeof Symbol === "function") {
  tx.prototype[Symbol.asyncIterator] = function () {
    if (tr === undefined) {
      tr = require("./module-Li.js");
    }
    return tr(this);
  };
}
Object.defineProperty(tx.prototype, "readableHighWaterMark", {
  enumerable: false,
  get: function () {
    return this._readableState.highWaterMark;
  },
});
Object.defineProperty(tx.prototype, "readableBuffer", {
  enumerable: false,
  get: function () {
    return this._readableState && this._readableState.buffer;
  },
});
Object.defineProperty(tx.prototype, "readableFlowing", {
  enumerable: false,
  get: function () {
    return this._readableState.flowing;
  },
  set: function (J) {
    if (this._readableState) {
      this._readableState.flowing = J;
    }
  },
});
tx._fromList = tj;
Object.defineProperty(tx.prototype, "readableLength", {
  enumerable: false,
  get: function () {
    return this._readableState.length;
  },
});
if (typeof Symbol === "function") {
  tx.from = function (J, Z) {
    if (tn === undefined) {
      tn = require("./module-A3x.js");
    }
    return tn(tx, J, Z);
  };
}
