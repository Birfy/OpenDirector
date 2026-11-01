import ei from "rCO";
import eo from "./module-Tx_2.js";
import { Buffer } from "wS";
import eu from "qNo";
import ec from "./module-FT_3.js";
import eh from "./module-di_2.js";
import _el from "./module-Go_2.js";
import { F } from "./module-Bwd.js";
let $;
let ee;
let et;
let er;
let en;
export default em;
em.ReadableState = ew;
require("IpG").EventEmitter;
const ea = (Z, Q) => Z.listeners(Q).length;
const ef =
  (global !== undefined
    ? global
    : typeof window !== "undefined"
      ? window
      : typeof self !== "undefined"
        ? self
        : {}
  ).Uint8Array || function () {};
ee = eu && eu.debuglog ? eu.debuglog("stream") : function () {};
var _el_getHighWaterMark = _el.getHighWaterMark;
const F_ERR_INVALID_ARG_TYPE = F.ERR_INVALID_ARG_TYPE;
const F_ERR_STREAM_PUSH_AFTER_EOF = F.ERR_STREAM_PUSH_AFTER_EOF;
const F_ERR_METHOD_NOT_IMPLEMENTED = F.ERR_METHOD_NOT_IMPLEMENTED;
const F_ERR_STREAM_UNSHIFT_AFTER_END_EVENT =
  F.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
require("Hs")(em, eo);
const eh_errorOrDestroy = eh.errorOrDestroy;
const e_ = ["error", "close", "destroy", "pause", "resume"];
function ew(Z, Q, ee) {
  $ = $ || require("./module-qd_2.js");
  Z = Z || {};
  if (typeof ee !== "boolean") {
    ee = Q instanceof $;
  }
  this.objectMode = !!Z.objectMode;
  if (ee) {
    this.objectMode = this.objectMode || !!Z.readableObjectMode;
  }
  this.highWaterMark = _el_getHighWaterMark(
    this,
    Z,
    "readableHighWaterMark",
    ee,
  );
  this.buffer = new ec();
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
  this.emitClose = Z.emitClose !== false;
  this.autoDestroy = !!Z.autoDestroy;
  this.destroyed = false;
  this.defaultEncoding = Z.defaultEncoding || "utf8";
  this.awaitDrain = 0;
  this.readingMore = false;
  this.decoder = null;
  this.encoding = null;
  if (Z.encoding) {
    if (!et) {
      et = require("./module-Ng_4.js").I;
    }
    this.decoder = new et(Z.encoding);
    this.encoding = Z.encoding;
  }
}
function em(Z) {
  $ = $ || require("./module-qd_2.js");
  if (!(this instanceof em)) {
    return new em(Z);
  }
  const Q = this instanceof $;
  this._readableState = new ew(Z, this, Q);
  this.readable = true;
  if (Z) {
    if (typeof Z.read === "function") {
      this._read = Z.read;
    }
    if (typeof Z.destroy === "function") {
      this._destroy = Z.destroy;
    }
  }
  eo.call(this);
}
function ex(Z, Q, X, $, et) {
  ee("readableAddChunk", Q);
  let er;
  let en;
  const Z__readableState = Z._readableState;
  if (Q === null) {
    Z__readableState.reading = false;
    ((Z, Q) => {
      ee("onEofChunk");
      if (!Q.ended) {
        if (Q.decoder) {
          const X = Q.decoder.end();
          if (X && X.length) {
            Q.buffer.push(X);
            Q.length += Q.objectMode ? 1 : X.length;
          }
        }
        Q.ended = true;
        if (Q.sync) {
          ek(Z);
        } else {
          Q.needReadable = false;
          if (!Q.emittedReadable) {
            Q.emittedReadable = true;
            eT(Z);
          }
        }
      }
    })(Z, Z__readableState);
  } else {
    if (!et) {
      en = ((Z, Q) => {
        let X;
        if (
          !(
            Buffer.isBuffer(Q) ||
            Q instanceof ef ||
            typeof Q === "string" ||
            Q === undefined ||
            Z.objectMode
          )
        ) {
          X = new F_ERR_INVALID_ARG_TYPE(
            "chunk",
            ["string", "Buffer", "Uint8Array"],
            Q,
          );
        }
        return X;
      })(Z__readableState, Q);
    }
    if (en) {
      eh_errorOrDestroy(Z, en);
    } else if (Z__readableState.objectMode || (Q && Q.length > 0)) {
      if (
        !(
          typeof Q === "string" ||
          Z__readableState.objectMode ||
          Object.getPrototypeOf(Q) === Buffer.prototype
        )
      ) {
        er = Q;
        Q = Buffer.from(er);
      }
      if ($) {
        if (Z__readableState.endEmitted) {
          eh_errorOrDestroy(Z, new F_ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
        } else {
          eS(Z, Z__readableState, Q, true);
        }
      } else if (Z__readableState.ended) {
        eh_errorOrDestroy(Z, new F_ERR_STREAM_PUSH_AFTER_EOF());
      } else {
        if (Z__readableState.destroyed) {
          return false;
        }
        Z__readableState.reading = false;
        if (Z__readableState.decoder && !X) {
          Q = Z__readableState.decoder.write(Q);
          if (Z__readableState.objectMode || Q.length !== 0) {
            eS(Z, Z__readableState, Q, false);
          } else {
            eR(Z, Z__readableState);
          }
        } else {
          eS(Z, Z__readableState, Q, false);
        }
      }
    } else {
      if (!$) {
        Z__readableState.reading = false;
        eR(Z, Z__readableState);
      }
    }
  }
  return (
    !Z__readableState.ended &&
    (Z__readableState.length < Z__readableState.highWaterMark ||
      Z__readableState.length === 0)
  );
}
function eS(Z, Z__readableState, X, $) {
  if (
    Z__readableState.flowing &&
    Z__readableState.length === 0 &&
    !Z__readableState.sync
  ) {
    Z__readableState.awaitDrain = 0;
    Z.emit("data", X);
  } else {
    Z__readableState.length += Z__readableState.objectMode ? 1 : X.length;
    if ($) {
      Z__readableState.buffer.unshift(X);
    } else {
      Z__readableState.buffer.push(X);
    }
    if (Z__readableState.needReadable) {
      ek(Z);
    }
  }
  eR(Z, Z__readableState);
}
function eE(Z, _readableState) {
  let X;
  if (Z <= 0 || (_readableState.length === 0 && _readableState.ended)) {
    return 0;
  }
  if (_readableState.objectMode) {
    return 1;
  }
  if (Z != Z) {
    if (_readableState.flowing && _readableState.length) {
      return _readableState.buffer.head.data.length;
    } else {
      return _readableState.length;
    }
  }
  if (Z > _readableState.highWaterMark) {
    if ((X = Z) >= 1073741824) {
      X = 1073741824;
    } else {
      X--;
      X |= X >>> 1;
      X |= X >>> 2;
      X |= X >>> 4;
      X |= X >>> 8;
      X |= X >>> 16;
      X++;
    }
    _readableState.highWaterMark = X;
  }
  if (Z <= _readableState.length) {
    return Z;
  }
  if (_readableState.ended) {
    return _readableState.length;
  }
  _readableState.needReadable = true;
  return 0;
}
function ek(Z) {
  const Z__readableState = Z._readableState;
  ee(
    "emitReadable",
    Z__readableState.needReadable,
    Z__readableState.emittedReadable,
  );
  Z__readableState.needReadable = false;
  if (!Z__readableState.emittedReadable) {
    ee("emitReadable", Z__readableState.flowing);
    Z__readableState.emittedReadable = true;
    ei.nextTick(eT, Z);
  }
}
function eT(Z) {
  const Z__readableState = Z._readableState;
  ee(
    "emitReadable_",
    Z__readableState.destroyed,
    Z__readableState.length,
    Z__readableState.ended,
  );
  if (
    !Z__readableState.destroyed &&
    (Z__readableState.length || Z__readableState.ended)
  ) {
    Z.emit("readable");
    Z__readableState.emittedReadable = false;
  }
  Z__readableState.needReadable =
    !Z__readableState.flowing &&
    !Z__readableState.ended &&
    Z__readableState.length <= Z__readableState.highWaterMark;
  eM(Z);
}
function eR(Z, Q) {
  if (!Q.readingMore) {
    Q.readingMore = true;
    ei.nextTick(eA, Z, Q);
  }
}
function eA(Z, Q) {
  while (
    !Q.reading &&
    !Q.ended &&
    (Q.length < Q.highWaterMark || (Q.flowing && Q.length === 0))
  ) {
    const X = Q.length;
    ee("maybeReadMore read 0");
    Z.read(0);
    if (X === Q.length) {
      break;
    }
  }
  Q.readingMore = false;
}
function ej(Z) {
  const Z__readableState = Z._readableState;
  Z__readableState.readableListening = Z.listenerCount("readable") > 0;
  if (Z__readableState.resumeScheduled && !Z__readableState.paused) {
    Z__readableState.flowing = true;
  } else if (Z.listenerCount("data") > 0) {
    Z.resume();
  }
}
function eC(Z) {
  ee("readable nexttick read 0");
  Z.read(0);
}
function eI(Z, Q) {
  ee("resume", Q.reading);
  if (!Q.reading) {
    Z.read(0);
  }
  Q.resumeScheduled = false;
  Z.emit("resume");
  eM(Z);
  if (Q.flowing && !Q.reading) {
    Z.read(0);
  }
}
function eM(Z) {
  const Z__readableState = Z._readableState;
  ee("flow", Z__readableState.flowing);
  while (Z__readableState.flowing && Z.read() !== null);
}
function eO(Z, Q) {
  let X;
  if (Q.length === 0) {
    return null;
  }
  if (Q.objectMode) {
    X = Q.buffer.shift();
  } else if (!Z || Z >= Q.length) {
    X = Q.decoder
      ? Q.buffer.join("")
      : Q.buffer.length === 1
        ? Q.buffer.first()
        : Q.buffer.concat(Q.length);
    Q.buffer.clear();
  } else {
    X = Q.buffer.consume(Z, Q.decoder);
  }
  return X;
}
function eP(Z) {
  const Z__readableState = Z._readableState;
  ee("endReadable", Z__readableState.endEmitted);
  if (!Z__readableState.endEmitted) {
    Z__readableState.ended = true;
    ei.nextTick(eB, Z__readableState, Z);
  }
}
function eB(Z, Q) {
  ee("endReadableNT", Z.endEmitted, Z.length);
  if (
    !Z.endEmitted &&
    Z.length === 0 &&
    ((Z.endEmitted = true), (Q.readable = false), Q.emit("end"), Z.autoDestroy)
  ) {
    const X = Q._writableState;
    if (!X || (X.autoDestroy && X.finished)) {
      Q.destroy();
    }
  }
}
function eL(pipes, Q) {
  for (let X = 0, $ = pipes.length; X < $; X++) {
    if (pipes[X] === Q) {
      return X;
    }
  }
  return -1;
}
Object.defineProperty(em.prototype, "destroyed", {
  enumerable: false,
  get: function () {
    return this._readableState !== undefined && this._readableState.destroyed;
  },
  set: function (Z) {
    if (this._readableState) {
      this._readableState.destroyed = Z;
    }
  },
});
em.prototype.destroy = eh.destroy;
em.prototype._undestroy = eh.undestroy;
em.prototype._destroy = function (Z, Q) {
  Q(Z);
};
em.prototype.push = function (Z, Q) {
  let X;
  const _readableState = this._readableState;
  if (_readableState.objectMode) {
    X = true;
  } else if (typeof Z === "string") {
    if ((Q = Q || _readableState.defaultEncoding) !== _readableState.encoding) {
      Z = Buffer.from(Z, Q);
      Q = "";
    }
    X = true;
  }
  return ex(this, Z, Q, false, X);
};
em.prototype.unshift = function (Z) {
  return ex(this, Z, null, true, false);
};
em.prototype.isPaused = function () {
  return this._readableState.flowing === false;
};
em.prototype.setEncoding = function (Z) {
  if (!et) {
    et = require("./module-Ng_4.js").I;
  }
  const Q = new et(Z);
  this._readableState.decoder = Q;
  this._readableState.encoding = this._readableState.decoder.encoding;
  for (var $ = this._readableState.buffer.head, ee = ""; $ !== null;) {
    ee += Q.write($.data);
    $ = $.next;
  }
  this._readableState.buffer.clear();
  if (ee !== "") {
    this._readableState.buffer.push(ee);
  }
  this._readableState.length = ee.length;
  return this;
};
em.prototype.read = function (Z) {
  ee("read", Z);
  Z = parseInt(Z, 10);
  let Q;
  const _readableState = this._readableState;
  const $ = Z;
  if (Z !== 0) {
    _readableState.emittedReadable = false;
  }
  if (
    Z === 0 &&
    _readableState.needReadable &&
    ((_readableState.highWaterMark !== 0
      ? _readableState.length >= _readableState.highWaterMark
      : _readableState.length > 0) ||
      _readableState.ended)
  ) {
    ee("read: emitReadable", _readableState.length, _readableState.ended);
    if (_readableState.length === 0 && _readableState.ended) {
      eP(this);
    } else {
      ek(this);
    }
    return null;
  }
  if ((Z = eE(Z, _readableState)) === 0 && _readableState.ended) {
    if (_readableState.length === 0) {
      eP(this);
    }
    return null;
  }
  let X_needReadable = _readableState.needReadable;
  ee("need readable", X_needReadable);
  if (
    _readableState.length === 0 ||
    _readableState.length - Z < _readableState.highWaterMark
  ) {
    ee("length less than watermark", (X_needReadable = true));
  }
  if (_readableState.ended || _readableState.reading) {
    ee("reading or ended", (X_needReadable = false));
  } else if (X_needReadable) {
    ee("do read");
    _readableState.reading = true;
    _readableState.sync = true;
    if (_readableState.length === 0) {
      _readableState.needReadable = true;
    }
    this._read(_readableState.highWaterMark);
    _readableState.sync = false;
    if (!_readableState.reading) {
      Z = eE($, _readableState);
    }
  }
  if ((Q = Z > 0 ? eO(Z, _readableState) : null) === null) {
    _readableState.needReadable =
      _readableState.length <= _readableState.highWaterMark;
    Z = 0;
  } else {
    _readableState.length -= Z;
    _readableState.awaitDrain = 0;
  }
  if (_readableState.length === 0) {
    if (!_readableState.ended) {
      _readableState.needReadable = true;
    }
    if ($ !== Z && _readableState.ended) {
      eP(this);
    }
  }
  if (Q !== null) {
    this.emit("data", Q);
  }
  return Q;
};
em.prototype._read = function (Z) {
  eh_errorOrDestroy(this, new F_ERR_METHOD_NOT_IMPLEMENTED("_read()"));
};
em.prototype.pipe = function (Z, Q) {
  let X;
  const $ = this;
  const _readableState = this._readableState;
  switch (_readableState.pipesCount) {
    case 0:
      _readableState.pipes = Z;
      break;
    case 1:
      _readableState.pipes = [_readableState.pipes, Z];
      break;
    default:
      _readableState.pipes.push(Z);
  }
  _readableState.pipesCount += 1;
  ee("pipe count=%d opts=%j", _readableState.pipesCount, Q);
  const er =
    (Q && Q.end === false) || Z === ei.stdout || Z === ei.stderr ? el : en;
  function en() {
    ee("onend");
    Z.end();
  }
  if (_readableState.endEmitted) {
    ei.nextTick(er);
  } else {
    $.once("end", er);
  }
  Z.on("unpipe", function Q(X, er) {
    ee("onunpipe");
    if (X === $ && er && er.hasUnpiped === false) {
      er.hasUnpiped = true;
      ee("cleanup");
      Z.removeListener("close", ec);
      Z.removeListener("finish", eh);
      Z.removeListener("drain", eo);
      Z.removeListener("error", eu);
      Z.removeListener("unpipe", Q);
      $.removeListener("end", en);
      $.removeListener("end", el);
      $.removeListener("data", ef);
      es = true;
      if (
        _readableState.awaitDrain &&
        (!Z._writableState || Z._writableState.needDrain)
      ) {
        eo();
      }
    }
  });
  X = $;
  var eo = function () {
    const X__readableState = X._readableState;
    ee("pipeOnDrain", X__readableState.awaitDrain);
    if (X__readableState.awaitDrain) {
      X__readableState.awaitDrain--;
    }
    if (X__readableState.awaitDrain === 0 && ea(X, "data")) {
      X__readableState.flowing = true;
      eM(X);
    }
  };
  Z.on("drain", eo);
  var es = false;
  function ef(Q) {
    ee("ondata");
    const X = Z.write(Q);
    ee("dest.write", X);
    if (X === false) {
      if (
        ((_readableState.pipesCount === 1 && _readableState.pipes === Z) ||
          (_readableState.pipesCount > 1 &&
            eL(_readableState.pipes, Z) !== -1)) &&
        !es
      ) {
        ee("false write response, pause", _readableState.awaitDrain);
        _readableState.awaitDrain++;
      }
      $.pause();
    }
  }
  function eu(Q) {
    ee("onerror", Q);
    el();
    Z.removeListener("error", eu);
    if (ea(Z, "error") === 0) {
      eh_errorOrDestroy(Z, Q);
    }
  }
  function ec() {
    Z.removeListener("finish", eh);
    el();
  }
  function eh() {
    ee("onfinish");
    Z.removeListener("close", ec);
    el();
  }
  function el() {
    ee("unpipe");
    $.unpipe(Z);
  }
  $.on("data", ef);
  ((Z, Q, X) => {
    if (typeof Z.prependListener === "function") {
      return Z.prependListener(Q, X);
    }
    if (Z._events && Z._events[Q]) {
      if (Array.isArray(Z._events[Q])) {
        Z._events[Q].unshift(X);
      } else {
        Z._events[Q] = [X, Z._events[Q]];
      }
    } else {
      Z.on(Q, X);
    }
  })(Z, "error", eu);
  Z.once("close", ec);
  Z.once("finish", eh);
  Z.emit("pipe", $);
  if (!_readableState.flowing) {
    ee("pipe resume");
    $.resume();
  }
  return Z;
};
em.prototype.unpipe = function (Z) {
  const _readableState = this._readableState;
  const X = {
    hasUnpiped: false,
  };
  if (_readableState.pipesCount === 0) {
    return this;
  }
  if (_readableState.pipesCount === 1) {
    if (!(Z && Z !== _readableState.pipes)) {
      if (!Z) {
        Z = _readableState.pipes;
      }
      _readableState.pipes = null;
      _readableState.pipesCount = 0;
      _readableState.flowing = false;
      if (Z) {
        Z.emit("unpipe", this, X);
      }
    }
    return this;
  }
  if (!Z) {
    const $ = _readableState.pipes;
    const ee = _readableState.pipesCount;
    _readableState.pipes = null;
    _readableState.pipesCount = 0;
    _readableState.flowing = false;
    for (let et = 0; et < ee; et++) {
      $[et].emit("unpipe", this, {
        hasUnpiped: false,
      });
    }
    return this;
  }
  const er = eL(_readableState.pipes, Z);
  if (er !== -1) {
    _readableState.pipes.splice(er, 1);
    _readableState.pipesCount -= 1;
    if (_readableState.pipesCount === 1) {
      _readableState.pipes = _readableState.pipes[0];
    }
    Z.emit("unpipe", this, X);
  }
  return this;
};
em.prototype.on = function (Z, Q) {
  const X = eo.prototype.on.call(this, Z, Q);
  const _readableState = this._readableState;
  if (Z === "data") {
    _readableState.readableListening = this.listenerCount("readable") > 0;
    if (_readableState.flowing !== false) {
      this.resume();
    }
  } else if (
    !(
      Z !== "readable" ||
      _readableState.endEmitted ||
      _readableState.readableListening
    )
  ) {
    _readableState.readableListening = _readableState.needReadable = true;
    _readableState.flowing = false;
    _readableState.emittedReadable = false;
    ee("on readable", _readableState.length, _readableState.reading);
    if (_readableState.length) {
      ek(this);
    } else if (!_readableState.reading) {
      ei.nextTick(eC, this);
    }
  }
  return X;
};
em.prototype.addListener = em.prototype.on;
em.prototype.removeListener = function (Z, Q) {
  const X = eo.prototype.removeListener.call(this, Z, Q);
  if (Z === "readable") {
    ei.nextTick(ej, this);
  }
  return X;
};
em.prototype.removeAllListeners = function (Z) {
  const Q = eo.prototype.removeAllListeners.apply(this, arguments);
  if (Z === "readable" || Z === undefined) {
    ei.nextTick(ej, this);
  }
  return Q;
};
em.prototype.resume = function () {
  let Z;
  let Q;
  const _readableState = this._readableState;
  if (!_readableState.flowing) {
    ee("resume");
    _readableState.flowing = !_readableState.readableListening;
    Z = this;
    if (!(Q = _readableState).resumeScheduled) {
      Q.resumeScheduled = true;
      ei.nextTick(eI, Z, Q);
    }
  }
  _readableState.paused = false;
  return this;
};
em.prototype.pause = function () {
  ee("call pause flowing=%j", this._readableState.flowing);
  if (this._readableState.flowing !== false) {
    ee("pause");
    this._readableState.flowing = false;
    this.emit("pause");
  }
  this._readableState.paused = true;
  return this;
};
em.prototype.wrap = function (Z) {
  const Q = this;
  const _readableState = this._readableState;
  let $ = false;
  Z.on("end", function () {
    ee("wrapped end");
    if (_readableState.decoder && !_readableState.ended) {
      const Z = _readableState.decoder.end();
      if (Z && Z.length) {
        Q.push(Z);
      }
    }
    Q.push(null);
  });
  Z.on("data", function (et) {
    ee("wrapped data");
    if (_readableState.decoder) {
      et = _readableState.decoder.write(et);
    }
    if (!(_readableState.objectMode && et == null)) {
      if (_readableState.objectMode || (et && et.length)) {
        if (!Q.push(et)) {
          $ = true;
          Z.pause();
        }
      }
    }
  });
  for (const et in Z) {
    if (this[et] === undefined && typeof Z[et] === "function") {
      this[et] = ((Q) =>
        function () {
          return Z[Q].apply(Z, arguments);
        })(et);
    }
  }
  for (let er = 0; er < e_.length; er++) {
    Z.on(e_[er], this.emit.bind(this, e_[er]));
  }
  this._read = function (Q) {
    ee("wrapped _read", Q);
    if ($) {
      $ = false;
      Z.resume();
    }
  };
  return this;
};
if (typeof Symbol === "function") {
  em.prototype[Symbol.asyncIterator] = function () {
    if (er === undefined) {
      er = require("./module-rB.js");
    }
    return er(this);
  };
}
Object.defineProperty(em.prototype, "readableHighWaterMark", {
  enumerable: false,
  get: function () {
    return this._readableState.highWaterMark;
  },
});
Object.defineProperty(em.prototype, "readableBuffer", {
  enumerable: false,
  get: function () {
    return this._readableState && this._readableState.buffer;
  },
});
Object.defineProperty(em.prototype, "readableFlowing", {
  enumerable: false,
  get: function () {
    return this._readableState.flowing;
  },
  set: function (Z) {
    if (this._readableState) {
      this._readableState.flowing = Z;
    }
  },
});
em._fromList = eO;
Object.defineProperty(em.prototype, "readableLength", {
  enumerable: false,
  get: function () {
    return this._readableState.length;
  },
});
if (typeof Symbol === "function") {
  em.from = function (Z, Q) {
    if (en === undefined) {
      en = require("./module-NKF.js");
    }
    return en(em, Z, Q);
  };
}
