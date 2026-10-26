import te from "./module-H8.js";
import tr from "./module-EH.js";
import tn from "./module-MC.js";
import to from "./module-UA.js";
import { Buffer } from "./module-Um.js";
import tu from "./module-D3.js";
import th from "./module-px.js";
import td from "./module-wh_2_2.js";
let $;
let tt;
export default tb;
tb.ReadableState = tp;
require("./module-pf.js").EventEmitter;
const ti = (J, Z) => J.listeners(Z).length;
const ts =
  (global !== undefined
    ? global
    : typeof window !== "undefined"
      ? window
      : typeof self !== "undefined"
        ? self
        : {}
  ).Uint8Array || function () {};
const tf = Object.create(require("./module-H96.js"));
tf.inherits = require("./module-ULy.js");
let tc;
tc = tu && tu.debuglog ? tu.debuglog("stream") : function () {};
tf.inherits(tb, to);
const tl = ["error", "close", "destroy", "pause", "resume"];
function tp(J, Z) {
  $ = $ || require("./module-ef.js");
  J = J || {};
  const te = Z instanceof $;
  this.objectMode = !!J.objectMode;
  if (te) {
    this.objectMode = this.objectMode || !!J.readableObjectMode;
  }
  const J_highWaterMark = J.highWaterMark;
  const J_readableHighWaterMark = J.readableHighWaterMark;
  const ti = this.objectMode ? 16 : 16384;
  if (J_highWaterMark || J_highWaterMark === 0) {
    this.highWaterMark = J_highWaterMark;
  } else if (te && (J_readableHighWaterMark || J_readableHighWaterMark === 0)) {
    this.highWaterMark = J_readableHighWaterMark;
  } else {
    this.highWaterMark = ti;
  }
  this.highWaterMark = Math.floor(this.highWaterMark);
  this.buffer = new th();
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
  this.defaultEncoding = J.defaultEncoding || "utf8";
  this.awaitDrain = 0;
  this.readingMore = false;
  this.decoder = null;
  this.encoding = null;
  if (J.encoding) {
    if (!tt) {
      tt = require("./module-MS_3_2.js").I;
    }
    this.decoder = new tt(J.encoding);
    this.encoding = J.encoding;
  }
}
function tb(J) {
  $ = $ || require("./module-ef.js");
  if (!(this instanceof tb)) {
    return new tb(J);
  }
  this._readableState = new tp(J, this);
  this.readable = true;
  if (J) {
    if (typeof J.read === "function") {
      this._read = J.read;
    }
    if (typeof J.destroy === "function") {
      this._destroy = J.destroy;
    }
  }
  to.call(this);
}
function tv(J, Z, Q, $, tt) {
  let te;
  let tr;
  let tn;
  const J__readableState = J._readableState;
  if (Z === null) {
    J__readableState.reading = false;
    ((J, Z) => {
      if (!Z.ended) {
        if (Z.decoder) {
          const Q = Z.decoder.end();
          if (Q && Q.length) {
            Z.buffer.push(Q);
            Z.length += Z.objectMode ? 1 : Q.length;
          }
        }
        Z.ended = true;
        tm(J);
      }
    })(J, J__readableState);
  } else {
    if (!tt) {
      tn = ((J, Z) => {
        let Q;
        if (
          !(
            Buffer.isBuffer(Z) ||
            Z instanceof ts ||
            typeof Z === "string" ||
            Z === undefined ||
            J.objectMode
          )
        ) {
          Q = TypeError("Invalid non-string/buffer chunk");
        }
        return Q;
      })(J__readableState, Z);
    }
    if (tn) {
      J.emit("error", tn);
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
          J.emit("error", Error("stream.unshift() after end event"));
        } else {
          tg(J, J__readableState, Z, true);
        }
      } else if (J__readableState.ended) {
        J.emit("error", Error("stream.push() after EOF"));
      } else {
        J__readableState.reading = false;
        if (J__readableState.decoder && !Q) {
          Z = J__readableState.decoder.write(Z);
          if (J__readableState.objectMode || Z.length !== 0) {
            tg(J, J__readableState, Z, false);
          } else {
            tx(J, J__readableState);
          }
        } else {
          tg(J, J__readableState, Z, false);
        }
      }
    } else if (!$) {
      J__readableState.reading = false;
    }
  }
  return (
    !(te = J__readableState).ended &&
    (te.needReadable || te.length < te.highWaterMark || te.length === 0)
  );
}
function tg(J, J__readableState, Q, $) {
  if (
    J__readableState.flowing &&
    J__readableState.length === 0 &&
    !J__readableState.sync
  ) {
    J.emit("data", Q);
    J.read(0);
  } else {
    J__readableState.length += J__readableState.objectMode ? 1 : Q.length;
    if ($) {
      J__readableState.buffer.unshift(Q);
    } else {
      J__readableState.buffer.push(Q);
    }
    if (J__readableState.needReadable) {
      tm(J);
    }
  }
  tx(J, J__readableState);
}
function ty(J, _readableState) {
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
    if ((Q = J) >= 8388608) {
      Q = 8388608;
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
function tm(J) {
  const J__readableState = J._readableState;
  J__readableState.needReadable = false;
  if (!J__readableState.emittedReadable) {
    tc("emitReadable", J__readableState.flowing);
    J__readableState.emittedReadable = true;
    if (J__readableState.sync) {
      tr.nextTick(tw, J);
    } else {
      tw(J);
    }
  }
}
function tw(J) {
  tc("emit readable");
  J.emit("readable");
  tA(J);
}
function tx(J, Z) {
  if (!Z.readingMore) {
    Z.readingMore = true;
    tr.nextTick(t_, J, Z);
  }
}
function t_(J, Z) {
  for (
    let Q = Z.length;
    !Z.reading &&
    !Z.flowing &&
    !Z.ended &&
    Z.length < Z.highWaterMark &&
    (tc("maybeReadMore read 0"), J.read(0), Q !== Z.length);
  ) {
    Q = Z.length;
  }
  Z.readingMore = false;
}
function tM(J) {
  tc("readable nexttick read 0");
  J.read(0);
}
function tS(J, Z) {
  if (!Z.reading) {
    tc("resume read 0");
    J.read(0);
  }
  Z.resumeScheduled = false;
  Z.awaitDrain = 0;
  J.emit("resume");
  tA(J);
  if (Z.flowing && !Z.reading) {
    J.read(0);
  }
}
function tA(J) {
  const J__readableState = J._readableState;
  tc("flow", J__readableState.flowing);
  while (J__readableState.flowing && J.read() !== null);
}
function tE(J, Z) {
  let Q;
  let $;
  let tt;
  let te;
  let tr;
  if (Z.length === 0) {
    return null;
  }
  if (Z.objectMode) {
    Q = Z.buffer.shift();
  } else if (!J || J >= Z.length) {
    Q = Z.decoder
      ? Z.buffer.join("")
      : Z.buffer.length === 1
        ? Z.buffer.head.data
        : Z.buffer.concat(Z.length);
    Z.buffer.clear();
  } else {
    $ = J;
    tt = Z.buffer;
    te = Z.decoder;
    if ($ < tt.head.data.length) {
      tr = tt.head.data.slice(0, $);
      tt.head.data = tt.head.data.slice($);
    } else {
      tr =
        $ === tt.head.data.length
          ? tt.shift()
          : te
            ? ((J, Z) => {
                let Z_head = Z.head;
                let $ = 1;
                let Q_data = Z_head.data;
                for (J -= Q_data.length; (Z_head = Z_head.next);) {
                  const te = Z_head.data;
                  const tr = J > te.length ? te.length : J;
                  if (tr === te.length) {
                    Q_data += te;
                  } else {
                    Q_data += te.slice(0, J);
                  }
                  if ((J -= tr) == 0) {
                    if (tr === te.length) {
                      ++$;
                      if (Z_head.next) {
                        Z.head = Z_head.next;
                      } else {
                        Z.head = Z.tail = null;
                      }
                    } else {
                      Z.head = Z_head;
                      Z_head.data = te.slice(tr);
                    }
                    break;
                  }
                  ++$;
                }
                Z.length -= $;
                return Q_data;
              })($, tt)
            : ((J, Z) => {
                const Q = Buffer.allocUnsafe(J);
                let Z_head = Z.head;
                let tt = 1;
                Z_head.data.copy(Q);
                for (J -= Z_head.data.length; (Z_head = Z_head.next);) {
                  const te = Z_head.data;
                  const tr = J > te.length ? te.length : J;
                  te.copy(Q, Q.length - J, 0, tr);
                  if ((J -= tr) == 0) {
                    if (tr === te.length) {
                      ++tt;
                      if (Z_head.next) {
                        Z.head = Z_head.next;
                      } else {
                        Z.head = Z.tail = null;
                      }
                    } else {
                      Z.head = Z_head;
                      Z_head.data = te.slice(tr);
                    }
                    break;
                  }
                  ++tt;
                }
                Z.length -= tt;
                return Q;
              })($, tt);
    }
    Q = tr;
  }
  return Q;
}
function tk(J) {
  const J__readableState = J._readableState;
  if (J__readableState.length > 0) {
    throw Error('"endReadable()" called on non-empty stream');
  }
  if (!J__readableState.endEmitted) {
    J__readableState.ended = true;
    tr.nextTick(tR, J__readableState, J);
  }
}
function tR(J, Z) {
  if (!(J.endEmitted || J.length !== 0)) {
    J.endEmitted = true;
    Z.readable = false;
    Z.emit("end");
  }
}
function tI(pipes, Z) {
  for (let Q = 0, $ = pipes.length; Q < $; Q++) {
    if (pipes[Q] === Z) {
      return Q;
    }
  }
  return -1;
}
Object.defineProperty(tb.prototype, "destroyed", {
  get: function () {
    return this._readableState !== undefined && this._readableState.destroyed;
  },
  set: function (J) {
    if (this._readableState) {
      this._readableState.destroyed = J;
    }
  },
});
tb.prototype.destroy = td.destroy;
tb.prototype._undestroy = td.undestroy;
tb.prototype._destroy = function (J, Z) {
  this.push(null);
  Z(J);
};
tb.prototype.push = function (J, Z) {
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
  return tv(this, J, Z, false, Q);
};
tb.prototype.unshift = function (J) {
  return tv(this, J, null, true, false);
};
tb.prototype.isPaused = function () {
  return this._readableState.flowing === false;
};
tb.prototype.setEncoding = function (J) {
  if (!tt) {
    tt = require("./module-MS_3_2.js").I;
  }
  this._readableState.decoder = new tt(J);
  this._readableState.encoding = J;
  return this;
};
tb.prototype.read = function (J) {
  tc("read", J);
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
    (_readableState.length >= _readableState.highWaterMark ||
      _readableState.ended)
  ) {
    tc("read: emitReadable", _readableState.length, _readableState.ended);
    if (_readableState.length === 0 && _readableState.ended) {
      tk(this);
    } else {
      tm(this);
    }
    return null;
  }
  if ((J = ty(J, _readableState)) === 0 && _readableState.ended) {
    if (_readableState.length === 0) {
      tk(this);
    }
    return null;
  }
  let Q_needReadable = _readableState.needReadable;
  tc("need readable", Q_needReadable);
  if (
    _readableState.length === 0 ||
    _readableState.length - J < _readableState.highWaterMark
  ) {
    tc("length less than watermark", (Q_needReadable = true));
  }
  if (_readableState.ended || _readableState.reading) {
    tc("reading or ended", (Q_needReadable = false));
  } else if (Q_needReadable) {
    tc("do read");
    _readableState.reading = true;
    _readableState.sync = true;
    if (_readableState.length === 0) {
      _readableState.needReadable = true;
    }
    this._read(_readableState.highWaterMark);
    _readableState.sync = false;
    if (!_readableState.reading) {
      J = ty($, _readableState);
    }
  }
  if ((Z = J > 0 ? tE(J, _readableState) : null) === null) {
    _readableState.needReadable = true;
    J = 0;
  } else {
    _readableState.length -= J;
  }
  if (_readableState.length === 0) {
    if (!_readableState.ended) {
      _readableState.needReadable = true;
    }
    if ($ !== J && _readableState.ended) {
      tk(this);
    }
  }
  if (Z !== null) {
    this.emit("data", Z);
  }
  return Z;
};
tb.prototype._read = function (J) {
  this.emit("error", Error("_read() is not implemented"));
};
tb.prototype.pipe = function (J, Z) {
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
  tc("pipe count=%d opts=%j", _readableState.pipesCount, Z);
  const to =
    (Z && Z.end === false) || J === te.stdout || J === te.stderr ? tb : ta;
  function ta() {
    tc("onend");
    J.end();
  }
  if (_readableState.endEmitted) {
    tr.nextTick(to);
  } else {
    $.once("end", to);
  }
  J.on("unpipe", function Z(Q, te) {
    tc("onunpipe");
    if (Q === $ && te && te.hasUnpiped === false) {
      te.hasUnpiped = true;
      tc("cleanup");
      J.removeListener("close", tl);
      J.removeListener("finish", tp);
      J.removeListener("drain", ts);
      J.removeListener("error", td);
      J.removeListener("unpipe", Z);
      $.removeListener("end", ta);
      $.removeListener("end", tb);
      $.removeListener("data", th);
      tf = true;
      if (
        _readableState.awaitDrain &&
        (!J._writableState || J._writableState.needDrain)
      ) {
        ts();
      }
    }
  });
  Q = $;
  var ts = function () {
    const Q__readableState = Q._readableState;
    tc("pipeOnDrain", Q__readableState.awaitDrain);
    if (Q__readableState.awaitDrain) {
      Q__readableState.awaitDrain--;
    }
    if (Q__readableState.awaitDrain === 0 && ti(Q, "data")) {
      Q__readableState.flowing = true;
      tA(Q);
    }
  };
  J.on("drain", ts);
  var tf = false;
  var tu = false;
  function th(Z) {
    tc("ondata");
    tu = false;
    if (!(J.write(Z) !== false || tu)) {
      if (
        ((_readableState.pipesCount === 1 && _readableState.pipes === J) ||
          (_readableState.pipesCount > 1 &&
            tI(_readableState.pipes, J) !== -1)) &&
        !tf
      ) {
        tc("false write response, pause", _readableState.awaitDrain);
        _readableState.awaitDrain++;
        tu = true;
      }
      $.pause();
    }
  }
  function td(Z) {
    tc("onerror", Z);
    tb();
    J.removeListener("error", td);
    if (ti(J, "error") === 0) {
      J.emit("error", Z);
    }
  }
  function tl() {
    J.removeListener("finish", tp);
    tb();
  }
  function tp() {
    tc("onfinish");
    J.removeListener("close", tl);
    tb();
  }
  function tb() {
    tc("unpipe");
    $.unpipe(J);
  }
  $.on("data", th);
  ((J, Z, Q) => {
    if (typeof J.prependListener === "function") {
      return J.prependListener(Z, Q);
    }
    if (J._events && J._events[Z]) {
      if (tn(J._events[Z])) {
        J._events[Z].unshift(Q);
      } else {
        J._events[Z] = [Q, J._events[Z]];
      }
    } else {
      J.on(Z, Q);
    }
  })(J, "error", td);
  J.once("close", tl);
  J.once("finish", tp);
  J.emit("pipe", $);
  if (!_readableState.flowing) {
    tc("pipe resume");
    $.resume();
  }
  return J;
};
tb.prototype.unpipe = function (J) {
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
  const tr = tI(_readableState.pipes, J);
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
tb.prototype.on = function (J, Z) {
  const Q = to.prototype.on.call(this, J, Z);
  if (J === "data") {
    if (this._readableState.flowing !== false) {
      this.resume();
    }
  } else if (J === "readable") {
    const $ = this._readableState;
    if (!($.endEmitted || $.readableListening)) {
      $.readableListening = $.needReadable = true;
      $.emittedReadable = false;
      if ($.reading) {
        if ($.length) {
          tm(this);
        }
      } else {
        tr.nextTick(tM, this);
      }
    }
  }
  return Q;
};
tb.prototype.addListener = tb.prototype.on;
tb.prototype.resume = function () {
  let J;
  let Z;
  const _readableState = this._readableState;
  if (!_readableState.flowing) {
    tc("resume");
    _readableState.flowing = true;
    J = this;
    if (!(Z = _readableState).resumeScheduled) {
      Z.resumeScheduled = true;
      tr.nextTick(tS, J, Z);
    }
  }
  return this;
};
tb.prototype.pause = function () {
  tc("call pause flowing=%j", this._readableState.flowing);
  if (this._readableState.flowing !== false) {
    tc("pause");
    this._readableState.flowing = false;
    this.emit("pause");
  }
  return this;
};
tb.prototype.wrap = function (J) {
  const Z = this;
  const _readableState = this._readableState;
  let $ = false;
  J.on("end", function () {
    tc("wrapped end");
    if (_readableState.decoder && !_readableState.ended) {
      const J = _readableState.decoder.end();
      if (J && J.length) {
        Z.push(J);
      }
    }
    Z.push(null);
  });
  J.on("data", function (tt) {
    tc("wrapped data");
    if (_readableState.decoder) {
      tt = _readableState.decoder.write(tt);
    }
    if (!(_readableState.objectMode && tt == null)) {
      if (_readableState.objectMode || (tt && tt.length)) {
        if (!Z.push(tt)) {
          $ = true;
          J.pause();
        }
      }
    }
  });
  for (const tt in J) {
    if (this[tt] === undefined && typeof J[tt] === "function") {
      this[tt] = ((Z) =>
        function () {
          return J[Z].apply(J, arguments);
        })(tt);
    }
  }
  for (let te = 0; te < tl.length; te++) {
    J.on(tl[te], this.emit.bind(this, tl[te]));
  }
  this._read = function (Z) {
    tc("wrapped _read", Z);
    if ($) {
      $ = false;
      J.resume();
    }
  };
  return this;
};
Object.defineProperty(tb.prototype, "readableHighWaterMark", {
  enumerable: false,
  get: function () {
    return this._readableState.highWaterMark;
  },
});
tb._fromList = tE;
