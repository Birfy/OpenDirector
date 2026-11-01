import et from "rCO";
import er from "./module-TVO.js";
import en from "./module-T9c.js";
import ea from "./module-aM_2.js";
import { Buffer } from "./module-sTo.js";
import eu from "D3";
import eh from "./module-LQW.js";
import el from "./module-QT_2.js";
let $;
let ee;
export default eb;
eb.ReadableState = ep;
require("IpG").EventEmitter;
const ei = (Z, Q) => Z.listeners(Q).length;
const es =
  (global !== undefined
    ? global
    : typeof window !== "undefined"
      ? window
      : typeof self !== "undefined"
        ? self
        : {}
  ).Uint8Array || function () {};
const ef = Object.create(require("Rp"));
ef.inherits = require("Hs");
let ec;
ec = eu && eu.debuglog ? eu.debuglog("stream") : function () {};
ef.inherits(eb, ea);
const ed = ["error", "close", "destroy", "pause", "resume"];
function ep(Z, Q) {
  $ = $ || require("./module-a5.js");
  Z = Z || {};
  const et = Q instanceof $;
  this.objectMode = !!Z.objectMode;
  if (et) {
    this.objectMode = this.objectMode || !!Z.readableObjectMode;
  }
  const Z_highWaterMark = Z.highWaterMark;
  const Z_readableHighWaterMark = Z.readableHighWaterMark;
  const ei = this.objectMode ? 16 : 16384;
  if (Z_highWaterMark || Z_highWaterMark === 0) {
    this.highWaterMark = Z_highWaterMark;
  } else if (et && (Z_readableHighWaterMark || Z_readableHighWaterMark === 0)) {
    this.highWaterMark = Z_readableHighWaterMark;
  } else {
    this.highWaterMark = ei;
  }
  this.highWaterMark = Math.floor(this.highWaterMark);
  this.buffer = new eh();
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
  this.destroyed = false;
  this.defaultEncoding = Z.defaultEncoding || "utf8";
  this.awaitDrain = 0;
  this.readingMore = false;
  this.decoder = null;
  this.encoding = null;
  if (Z.encoding) {
    if (!ee) {
      ee = require("./module-vgM.js").I;
    }
    this.decoder = new ee(Z.encoding);
    this.encoding = Z.encoding;
  }
}
function eb(Z) {
  $ = $ || require("./module-a5.js");
  if (!(this instanceof eb)) {
    return new eb(Z);
  }
  this._readableState = new ep(Z, this);
  this.readable = true;
  if (Z) {
    if (typeof Z.read === "function") {
      this._read = Z.read;
    }
    if (typeof Z.destroy === "function") {
      this._destroy = Z.destroy;
    }
  }
  ea.call(this);
}
function eg(Z, Q, X, $, ee) {
  let et;
  let er;
  let en;
  const Z__readableState = Z._readableState;
  if (Q === null) {
    Z__readableState.reading = false;
    ((Z, Q) => {
      if (!Q.ended) {
        if (Q.decoder) {
          const X = Q.decoder.end();
          if (X && X.length) {
            Q.buffer.push(X);
            Q.length += Q.objectMode ? 1 : X.length;
          }
        }
        Q.ended = true;
        e_(Z);
      }
    })(Z, Z__readableState);
  } else {
    if (!ee) {
      en = ((Z, Q) => {
        let X;
        if (
          !(
            Buffer.isBuffer(Q) ||
            Q instanceof es ||
            typeof Q === "string" ||
            Q === undefined ||
            Z.objectMode
          )
        ) {
          X = TypeError("Invalid non-string/buffer chunk");
        }
        return X;
      })(Z__readableState, Q);
    }
    if (en) {
      Z.emit("error", en);
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
          Z.emit("error", Error("stream.unshift() after end event"));
        } else {
          ey(Z, Z__readableState, Q, true);
        }
      } else if (Z__readableState.ended) {
        Z.emit("error", Error("stream.push() after EOF"));
      } else {
        Z__readableState.reading = false;
        if (Z__readableState.decoder && !X) {
          Q = Z__readableState.decoder.write(Q);
          if (Z__readableState.objectMode || Q.length !== 0) {
            ey(Z, Z__readableState, Q, false);
          } else {
            em(Z, Z__readableState);
          }
        } else {
          ey(Z, Z__readableState, Q, false);
        }
      }
    } else if (!$) {
      Z__readableState.reading = false;
    }
  }
  return (
    !(et = Z__readableState).ended &&
    (et.needReadable || et.length < et.highWaterMark || et.length === 0)
  );
}
function ey(Z, Z__readableState, X, $) {
  if (
    Z__readableState.flowing &&
    Z__readableState.length === 0 &&
    !Z__readableState.sync
  ) {
    Z.emit("data", X);
    Z.read(0);
  } else {
    Z__readableState.length += Z__readableState.objectMode ? 1 : X.length;
    if ($) {
      Z__readableState.buffer.unshift(X);
    } else {
      Z__readableState.buffer.push(X);
    }
    if (Z__readableState.needReadable) {
      e_(Z);
    }
  }
  em(Z, Z__readableState);
}
function ev(Z, _readableState) {
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
    if ((X = Z) >= 8388608) {
      X = 8388608;
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
function e_(Z) {
  const Z__readableState = Z._readableState;
  Z__readableState.needReadable = false;
  if (!Z__readableState.emittedReadable) {
    ec("emitReadable", Z__readableState.flowing);
    Z__readableState.emittedReadable = true;
    if (Z__readableState.sync) {
      er.nextTick(ew, Z);
    } else {
      ew(Z);
    }
  }
}
function ew(Z) {
  ec("emit readable");
  Z.emit("readable");
  ek(Z);
}
function em(Z, Q) {
  if (!Q.readingMore) {
    Q.readingMore = true;
    er.nextTick(ex, Z, Q);
  }
}
function ex(Z, Q) {
  for (
    let X = Q.length;
    !Q.reading &&
    !Q.flowing &&
    !Q.ended &&
    Q.length < Q.highWaterMark &&
    (ec("maybeReadMore read 0"), Z.read(0), X !== Q.length);
  ) {
    X = Q.length;
  }
  Q.readingMore = false;
}
function eS(Z) {
  ec("readable nexttick read 0");
  Z.read(0);
}
function eE(Z, Q) {
  if (!Q.reading) {
    ec("resume read 0");
    Z.read(0);
  }
  Q.resumeScheduled = false;
  Q.awaitDrain = 0;
  Z.emit("resume");
  ek(Z);
  if (Q.flowing && !Q.reading) {
    Z.read(0);
  }
}
function ek(Z) {
  const Z__readableState = Z._readableState;
  ec("flow", Z__readableState.flowing);
  while (Z__readableState.flowing && Z.read() !== null);
}
function eT(Z, Q) {
  let X;
  let $;
  let ee;
  let et;
  let er;
  if (Q.length === 0) {
    return null;
  }
  if (Q.objectMode) {
    X = Q.buffer.shift();
  } else if (!Z || Z >= Q.length) {
    X = Q.decoder
      ? Q.buffer.join("")
      : Q.buffer.length === 1
        ? Q.buffer.head.data
        : Q.buffer.concat(Q.length);
    Q.buffer.clear();
  } else {
    $ = Z;
    ee = Q.buffer;
    et = Q.decoder;
    if ($ < ee.head.data.length) {
      er = ee.head.data.slice(0, $);
      ee.head.data = ee.head.data.slice($);
    } else {
      er =
        $ === ee.head.data.length
          ? ee.shift()
          : et
            ? ((Z, Q) => {
                let Q_head = Q.head;
                let $ = 1;
                let X_data = Q_head.data;
                for (Z -= X_data.length; (Q_head = Q_head.next);) {
                  const et = Q_head.data;
                  const er = Z > et.length ? et.length : Z;
                  if (er === et.length) {
                    X_data += et;
                  } else {
                    X_data += et.slice(0, Z);
                  }
                  if ((Z -= er) == 0) {
                    if (er === et.length) {
                      ++$;
                      if (Q_head.next) {
                        Q.head = Q_head.next;
                      } else {
                        Q.head = Q.tail = null;
                      }
                    } else {
                      Q.head = Q_head;
                      Q_head.data = et.slice(er);
                    }
                    break;
                  }
                  ++$;
                }
                Q.length -= $;
                return X_data;
              })($, ee)
            : ((Z, Q) => {
                const X = Buffer.allocUnsafe(Z);
                let Q_head = Q.head;
                let ee = 1;
                Q_head.data.copy(X);
                for (Z -= Q_head.data.length; (Q_head = Q_head.next);) {
                  const et = Q_head.data;
                  const er = Z > et.length ? et.length : Z;
                  et.copy(X, X.length - Z, 0, er);
                  if ((Z -= er) == 0) {
                    if (er === et.length) {
                      ++ee;
                      if (Q_head.next) {
                        Q.head = Q_head.next;
                      } else {
                        Q.head = Q.tail = null;
                      }
                    } else {
                      Q.head = Q_head;
                      Q_head.data = et.slice(er);
                    }
                    break;
                  }
                  ++ee;
                }
                Q.length -= ee;
                return X;
              })($, ee);
    }
    X = er;
  }
  return X;
}
function eR(Z) {
  const Z__readableState = Z._readableState;
  if (Z__readableState.length > 0) {
    throw Error('"endReadable()" called on non-empty stream');
  }
  if (!Z__readableState.endEmitted) {
    Z__readableState.ended = true;
    er.nextTick(eA, Z__readableState, Z);
  }
}
function eA(Z, Q) {
  if (!(Z.endEmitted || Z.length !== 0)) {
    Z.endEmitted = true;
    Q.readable = false;
    Q.emit("end");
  }
}
function ej(pipes, Q) {
  for (let X = 0, $ = pipes.length; X < $; X++) {
    if (pipes[X] === Q) {
      return X;
    }
  }
  return -1;
}
Object.defineProperty(eb.prototype, "destroyed", {
  get: function () {
    return this._readableState !== undefined && this._readableState.destroyed;
  },
  set: function (Z) {
    if (this._readableState) {
      this._readableState.destroyed = Z;
    }
  },
});
eb.prototype.destroy = el.destroy;
eb.prototype._undestroy = el.undestroy;
eb.prototype._destroy = function (Z, Q) {
  this.push(null);
  Q(Z);
};
eb.prototype.push = function (Z, Q) {
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
  return eg(this, Z, Q, false, X);
};
eb.prototype.unshift = function (Z) {
  return eg(this, Z, null, true, false);
};
eb.prototype.isPaused = function () {
  return this._readableState.flowing === false;
};
eb.prototype.setEncoding = function (Z) {
  if (!ee) {
    ee = require("./module-vgM.js").I;
  }
  this._readableState.decoder = new ee(Z);
  this._readableState.encoding = Z;
  return this;
};
eb.prototype.read = function (Z) {
  ec("read", Z);
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
    (_readableState.length >= _readableState.highWaterMark ||
      _readableState.ended)
  ) {
    ec("read: emitReadable", _readableState.length, _readableState.ended);
    if (_readableState.length === 0 && _readableState.ended) {
      eR(this);
    } else {
      e_(this);
    }
    return null;
  }
  if ((Z = ev(Z, _readableState)) === 0 && _readableState.ended) {
    if (_readableState.length === 0) {
      eR(this);
    }
    return null;
  }
  let X_needReadable = _readableState.needReadable;
  ec("need readable", X_needReadable);
  if (
    _readableState.length === 0 ||
    _readableState.length - Z < _readableState.highWaterMark
  ) {
    ec("length less than watermark", (X_needReadable = true));
  }
  if (_readableState.ended || _readableState.reading) {
    ec("reading or ended", (X_needReadable = false));
  } else if (X_needReadable) {
    ec("do read");
    _readableState.reading = true;
    _readableState.sync = true;
    if (_readableState.length === 0) {
      _readableState.needReadable = true;
    }
    this._read(_readableState.highWaterMark);
    _readableState.sync = false;
    if (!_readableState.reading) {
      Z = ev($, _readableState);
    }
  }
  if ((Q = Z > 0 ? eT(Z, _readableState) : null) === null) {
    _readableState.needReadable = true;
    Z = 0;
  } else {
    _readableState.length -= Z;
  }
  if (_readableState.length === 0) {
    if (!_readableState.ended) {
      _readableState.needReadable = true;
    }
    if ($ !== Z && _readableState.ended) {
      eR(this);
    }
  }
  if (Q !== null) {
    this.emit("data", Q);
  }
  return Q;
};
eb.prototype._read = function (Z) {
  this.emit("error", Error("_read() is not implemented"));
};
eb.prototype.pipe = function (Z, Q) {
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
  ec("pipe count=%d opts=%j", _readableState.pipesCount, Q);
  const ea =
    (Q && Q.end === false) || Z === et.stdout || Z === et.stderr ? eb : eo;
  function eo() {
    ec("onend");
    Z.end();
  }
  if (_readableState.endEmitted) {
    er.nextTick(ea);
  } else {
    $.once("end", ea);
  }
  Z.on("unpipe", function Q(X, et) {
    ec("onunpipe");
    if (X === $ && et && et.hasUnpiped === false) {
      et.hasUnpiped = true;
      ec("cleanup");
      Z.removeListener("close", ed);
      Z.removeListener("finish", ep);
      Z.removeListener("drain", es);
      Z.removeListener("error", el);
      Z.removeListener("unpipe", Q);
      $.removeListener("end", eo);
      $.removeListener("end", eb);
      $.removeListener("data", eh);
      ef = true;
      if (
        _readableState.awaitDrain &&
        (!Z._writableState || Z._writableState.needDrain)
      ) {
        es();
      }
    }
  });
  X = $;
  var es = function () {
    const X__readableState = X._readableState;
    ec("pipeOnDrain", X__readableState.awaitDrain);
    if (X__readableState.awaitDrain) {
      X__readableState.awaitDrain--;
    }
    if (X__readableState.awaitDrain === 0 && ei(X, "data")) {
      X__readableState.flowing = true;
      ek(X);
    }
  };
  Z.on("drain", es);
  var ef = false;
  var eu = false;
  function eh(Q) {
    ec("ondata");
    eu = false;
    if (!(Z.write(Q) !== false || eu)) {
      if (
        ((_readableState.pipesCount === 1 && _readableState.pipes === Z) ||
          (_readableState.pipesCount > 1 &&
            ej(_readableState.pipes, Z) !== -1)) &&
        !ef
      ) {
        ec("false write response, pause", _readableState.awaitDrain);
        _readableState.awaitDrain++;
        eu = true;
      }
      $.pause();
    }
  }
  function el(Q) {
    ec("onerror", Q);
    eb();
    Z.removeListener("error", el);
    if (ei(Z, "error") === 0) {
      Z.emit("error", Q);
    }
  }
  function ed() {
    Z.removeListener("finish", ep);
    eb();
  }
  function ep() {
    ec("onfinish");
    Z.removeListener("close", ed);
    eb();
  }
  function eb() {
    ec("unpipe");
    $.unpipe(Z);
  }
  $.on("data", eh);
  ((Z, Q, X) => {
    if (typeof Z.prependListener === "function") {
      return Z.prependListener(Q, X);
    }
    if (Z._events && Z._events[Q]) {
      if (en(Z._events[Q])) {
        Z._events[Q].unshift(X);
      } else {
        Z._events[Q] = [X, Z._events[Q]];
      }
    } else {
      Z.on(Q, X);
    }
  })(Z, "error", el);
  Z.once("close", ed);
  Z.once("finish", ep);
  Z.emit("pipe", $);
  if (!_readableState.flowing) {
    ec("pipe resume");
    $.resume();
  }
  return Z;
};
eb.prototype.unpipe = function (Z) {
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
  const er = ej(_readableState.pipes, Z);
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
eb.prototype.on = function (Z, Q) {
  const X = ea.prototype.on.call(this, Z, Q);
  if (Z === "data") {
    if (this._readableState.flowing !== false) {
      this.resume();
    }
  } else if (Z === "readable") {
    const $ = this._readableState;
    if (!($.endEmitted || $.readableListening)) {
      $.readableListening = $.needReadable = true;
      $.emittedReadable = false;
      if ($.reading) {
        if ($.length) {
          e_(this);
        }
      } else {
        er.nextTick(eS, this);
      }
    }
  }
  return X;
};
eb.prototype.addListener = eb.prototype.on;
eb.prototype.resume = function () {
  let Z;
  let Q;
  const _readableState = this._readableState;
  if (!_readableState.flowing) {
    ec("resume");
    _readableState.flowing = true;
    Z = this;
    if (!(Q = _readableState).resumeScheduled) {
      Q.resumeScheduled = true;
      er.nextTick(eE, Z, Q);
    }
  }
  return this;
};
eb.prototype.pause = function () {
  ec("call pause flowing=%j", this._readableState.flowing);
  if (this._readableState.flowing !== false) {
    ec("pause");
    this._readableState.flowing = false;
    this.emit("pause");
  }
  return this;
};
eb.prototype.wrap = function (Z) {
  const Q = this;
  const _readableState = this._readableState;
  let $ = false;
  Z.on("end", function () {
    ec("wrapped end");
    if (_readableState.decoder && !_readableState.ended) {
      const Z = _readableState.decoder.end();
      if (Z && Z.length) {
        Q.push(Z);
      }
    }
    Q.push(null);
  });
  Z.on("data", function (ee) {
    ec("wrapped data");
    if (_readableState.decoder) {
      ee = _readableState.decoder.write(ee);
    }
    if (!(_readableState.objectMode && ee == null)) {
      if (_readableState.objectMode || (ee && ee.length)) {
        if (!Q.push(ee)) {
          $ = true;
          Z.pause();
        }
      }
    }
  });
  for (const ee in Z) {
    if (this[ee] === undefined && typeof Z[ee] === "function") {
      this[ee] = ((Q) =>
        function () {
          return Z[Q].apply(Z, arguments);
        })(ee);
    }
  }
  for (let et = 0; et < ed.length; et++) {
    Z.on(ed[et], this.emit.bind(this, ed[et]));
  }
  this._read = function (Q) {
    ec("wrapped _read", Q);
    if ($) {
      $ = false;
      Z.resume();
    }
  };
  return this;
};
Object.defineProperty(eb.prototype, "readableHighWaterMark", {
  enumerable: false,
  get: function () {
    return this._readableState.highWaterMark;
  },
});
eb._fromList = eT;
