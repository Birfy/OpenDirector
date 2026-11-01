import ep from "Pst";
import em from "GQs";
import e_ from "NRL";
import ey from "Jwl";
import eJ from "VJI";
import eW from "Iiy";
import eY from "of2";
import eX from "Sa";
import eZ from "DwM";
import iu from "d3d";
import ic from "GmU";
let r;
let n;
export { EVENT_EME } from "d3d";
export { XGSecretKey } from "d3d";
export { checkEMEValid } from "d3d";
export { checkMSEValid } from "d3d";
const s = (e, t, i) => {
  let r;
  if ((r = typeof t !== "symbol" ? t + "" : t) in e) {
    return Object.defineProperty(e, r, {
      enumerable: true,
      configurable: true,
      writable: true,
      value: i,
    });
  }
  return (e[r] = i);
};
class o {
  static getDefaultConfig() {
    return {
      rangeMaxDuration: 15,
      rangeMinDuration: 5,
      rangeMinSize: 409600,
      safeFactor: 0.1,
      cacheSafeFactor: 3,
      minDangerThreshold: 5,
      estPlayTime: 12,
      minBandwidth: 1000000,
      estPTcontrol: false,
      minTargetCacheDur: 30,
      maxTargetCacheDur: 60,
      targetCacheControl: false,
      rangeControl: false,
    };
  }
  constructor(e, t, i, r) {
    this.config = o.getDefaultConfig();
    Object.keys(r).map((e) => {
      if (r[e] !== undefined && r[e] !== null) {
        this.config[e] = r[e];
      }
    });
    this.duration = i;
    this.player = e;
    this.updateBitrate(t);
  }
  updateBitrate(e) {
    this.bitrate = e;
    if (!this.bitrate) {
      this.bitrate = this.config.minBandwidth;
    }
  }
  getAdaptLoadDuration() {
    let { player, config } = this;
    if (!config.rangeControl) {
      return -1;
    }
    let i = (player == null ? undefined : player.bufferedPoint) || null;
    let r = i && i.end ? i.end - player.currentTime : 0;
    return Math.max(config.rangeMaxDuration - r, config.rangeMinDuration);
  }
  getAdaptCacheBuffer() {
    let { player, config, bitrate } = this;
    if (!config.targetCacheControl) {
      return -1;
    }
    let { estPlayTime } = config;
    let n = estPlayTime;
    if (config.estPTcontrol) {
      n = Math.min(
        estPlayTime,
        this.duration -
          ((player == null ? undefined : player.currentTime) || 0),
      );
    }
    let a = (player == null ? undefined : player.avgSpeed) * 1024 || 0;
    let s = Math.max(config.safeFactor * a, config.minBandwidth);
    if (player && player.avgSpeed) {
      s = config.safeFactor * a;
    }
    let o = bitrate > 0 ? Math.floor((1 - s / bitrate) * n) : 0;
    o = config.minDangerThreshold + Math.max(o, 0);
    return Math.min(
      Math.max(config.cacheSafeFactor * o, config.minTargetCacheDur),
      config.maxTargetCacheDur,
    );
  }
}
class l {
  static getDefaultConfig() {
    return {
      rangeControl: false,
      rangeMaxDuration: 20,
      rangeMinDuration: 5,
      rangeMinSize: 409600,
      rangeFloatSize: 10240,
      safeFactor: 0.1,
      cacheSafeFactor: 3,
      minDangerThreshold: 5,
      estPlayTime: 12,
      minBandwidth: 1000000,
      estPTcontrol: false,
      minTargetCacheDur: 30,
      maxTargetCacheDur: 60,
      targetCacheControl: false,
    };
  }
  constructor(e, t, i, r) {
    this.config = l.getDefaultConfig();
    Object.keys(r).map((e) => {
      if (r[e] !== undefined && r[e] !== null) {
        this.config[e] = r[e];
      }
    });
    this.duration = i;
    this.player = e;
    this.updateBitrate(t);
  }
  updateBitrate(e) {
    this.bitrate = e;
    if (!this.bitrate) {
      this.bitrate = this.config.minBandwidth;
    }
  }
  getBuffer() {
    let { player } = this;
    let t = (player == null ? undefined : player.bufferedPoint) || null;
    if (t && t.end) {
      return t.end - player.currentTime;
    }
    return 0;
  }
  getAdaptLoadDuration() {
    let { config, duration } = this;
    if (!config.rangeControl) {
      return -1;
    }
    let i = this.getBuffer();
    return Math.max(
      Math.min(duration - i, config.rangeMaxDuration - i),
      config.rangeMinDuration,
    );
  }
  getAdaptRangeSize(e) {
    let { config, bitrate, duration } = this;
    if (!config.rangeControl) {
      return -1;
    }
    if (!e) {
      e = this.getAdaptLoadDuration();
    }
    let n = this.getBuffer();
    let a = Math.max(config.rangeMinSize, (e * bitrate) / 8);
    let s = ((duration - n) * bitrate) / 8;
    if (a + config.rangeFloatSize >= s) {
      a = s;
    }
    return Math.ceil(a);
  }
  getAdaptCacheBuffer() {
    let { player, config, bitrate } = this;
    if (!config.targetCacheControl) {
      return -1;
    }
    let { estPlayTime } = config;
    let n = estPlayTime;
    if (config.estPTcontrol) {
      n = Math.min(
        estPlayTime,
        this.duration -
          ((player == null ? undefined : player.currentTime) || 0),
      );
    }
    let a = (player == null ? undefined : player.avgSpeed) * 1024 || 0;
    let s = Math.max(config.safeFactor * a, config.minBandwidth);
    if (player && player.avgSpeed) {
      s = config.safeFactor * a;
    }
    let o = bitrate > 0 ? Math.floor((1 - s / bitrate) * n) : 0;
    o = config.minDangerThreshold + Math.max(o, 0);
    return Math.min(
      Math.max(config.cacheSafeFactor * o, config.minTargetCacheDur),
      config.maxTargetCacheDur,
    );
  }
}
r = h || {};
r.CHANGE_FLYING_PLUGIN_CONFIG = "CHANGE_FLYING_PLUGIN_CONFIG";
var h = r;
function d(e, t) {
  for (let i = 0; i < t.length; i++) {
    const r = t[i];
    r.enumerable = r.enumerable || false;
    r.configurable = true;
    if ("value" in r) {
      r.writable = true;
    }
    Object.defineProperty(
      e,
      ((e) => {
        const t = ((e, t) => {
          if (typeof e !== "object" || !e) {
            return e;
          }
          const i = e[Symbol.toPrimitive];
          if (i !== undefined) {
            const r = i.call(e, t);
            if (typeof r !== "object") {
              return r;
            }
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e, "string");
        if (typeof t === "symbol") {
          return t;
        }
        return t + "";
      })(r.key),
      r,
    );
  }
}
function u(e) {
  return (u = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}
function c() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (c = function () {
    return !!e;
  })();
}
function f(e, t) {
  return (f = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function (e, t) {
        e.__proto__ = t;
        return e;
      })(e, t);
}
const g = {
  exports: {},
};
(function (e) {
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  let i = "~";
  function r() {}
  function n(e, t, i) {
    this.fn = e;
    this.context = t;
    this.once = i || false;
  }
  function a(e, t, r, a, s) {
    if (typeof r !== "function") {
      throw TypeError("The listener must be a function");
    }
    const o = new n(r, a || e, s);
    const l = i ? i + t : t;
    if (e._events[l]) {
      if (e._events[l].fn) {
        e._events[l] = [e._events[l], o];
      } else {
        e._events[l].push(o);
      }
    } else {
      e._events[l] = o;
      e._eventsCount++;
    }
    return e;
  }
  function s(e, t) {
    if (--e._eventsCount == 0) {
      e._events = new r();
    } else {
      delete e._events[t];
    }
  }
  class o {
    constructor() {
      this._events = new r();
      this._eventsCount = 0;
    }
    eventNames() {
      let e;
      let r;
      const n = [];
      if (this._eventsCount === 0) {
        return n;
      }
      for (r in (e = this._events)) {
        if (hasOwnProperty.call(e, r)) {
          n.push(i ? r.slice(1) : r);
        }
      }
      if (Object.getOwnPropertySymbols) {
        return n.concat(Object.getOwnPropertySymbols(e));
      }
      return n;
    }
    listeners(e) {
      const t = i ? i + e : e;
      const r = this._events[t];
      if (!r) {
        return [];
      }
      if (r.fn) {
        return [r.fn];
      }
      for (var n = 0, a = r.length, s = Array(a); n < a; n++) {
        s[n] = r[n].fn;
      }
      return s;
    }
    listenerCount(e) {
      const t = i ? i + e : e;
      const r = this._events[t];
      if (r) {
        if (r.fn) {
          return 1;
        }
        return r.length;
      }
      return 0;
    }
    emit(e, t, r, n, a, s) {
      const o = i ? i + e : e;
      if (!this._events[o]) {
        return false;
      }
      let l;
      let h;
      const d = this._events[o];
      const arguments_length = arguments.length;
      if (d.fn) {
        if (d.once) {
          this.removeListener(e, d.fn, undefined, true);
        }
        switch (arguments_length) {
          case 1:
            d.fn.call(d.context);
            return true;
          case 2:
            d.fn.call(d.context, t);
            return true;
          case 3:
            d.fn.call(d.context, t, r);
            return true;
          case 4:
            d.fn.call(d.context, t, r, n);
            return true;
          case 5:
            d.fn.call(d.context, t, r, n, a);
            return true;
          case 6:
            d.fn.call(d.context, t, r, n, a, s);
            return true;
        }
        h = 1;
        for (l = Array(arguments_length - 1); h < arguments_length; h++) {
          l[h - 1] = arguments[h];
        }
        d.fn.apply(d.context, l);
      } else {
        let c;
        const f = d.length;
        for (h = 0; h < f; h++) {
          if (d[h].once) {
            this.removeListener(e, d[h].fn, undefined, true);
          }
          switch (arguments_length) {
            case 1:
              d[h].fn.call(d[h].context);
              break;
            case 2:
              d[h].fn.call(d[h].context, t);
              break;
            case 3:
              d[h].fn.call(d[h].context, t, r);
              break;
            case 4:
              d[h].fn.call(d[h].context, t, r, n);
              break;
            default:
              if (!l) {
                c = 1;
                for (
                  l = Array(arguments_length - 1);
                  c < arguments_length;
                  c++
                ) {
                  l[c - 1] = arguments[c];
                }
              }
              d[h].fn.apply(d[h].context, l);
          }
        }
      }
      return true;
    }
    on(e, t, i) {
      return a(this, e, t, i, false);
    }
    once(e, t, i) {
      return a(this, e, t, i, true);
    }
    removeListener(e, t, r, n) {
      const a = i ? i + e : e;
      if (!this._events[a]) {
        return this;
      }
      if (!t) {
        s(this, a);
        return this;
      }
      const o = this._events[a];
      if (o.fn) {
        if (!(o.fn !== t || (n && !o.once) || (r && o.context !== r))) {
          s(this, a);
        }
      } else {
        for (var l = 0, h = [], d = o.length; l < d; l++) {
          if (o[l].fn !== t || (n && !o[l].once) || (r && o[l].context !== r)) {
            h.push(o[l]);
          }
        }
        if (h.length) {
          this._events[a] = h.length === 1 ? h[0] : h;
        } else {
          s(this, a);
        }
      }
      return this;
    }
    removeAllListeners(e) {
      let t;
      if (e) {
        t = i ? i + e : e;
        if (this._events[t]) {
          s(this, t);
        }
      } else {
        this._events = new r();
        this._eventsCount = 0;
      }
      return this;
    }
  }
  if (Object.create) {
    r.prototype = Object.create(null);
    if (!new r().__proto__) {
      i = false;
    }
  }
  o.prototype.off = o.prototype.removeListener;
  o.prototype.addListener = o.prototype.on;
  o.prefixed = i;
  o.EventEmitter = o;
  e.exports = o;
})(g);
const g_exports = g.exports;
let m =
  g_exports &&
  g_exports.__esModule &&
  Object.prototype.hasOwnProperty.call(g_exports, "default")
    ? g_exports.default
    : g_exports;
const _ = {};
let y = null;
const v = ((e) => {
  let t;
  let i;
  function r() {
    let e;
    let t;
    ((e, t) => {
      if (!(e instanceof t)) {
        throw TypeError("Cannot call a class as a function");
      }
    })(this, r);
    e = r;
    t = arguments;
    e = u(e);
    return ((e, t) => {
      if (t && (typeof t === "object" || typeof t === "function")) {
        return t;
      }
      if (t !== undefined) {
        throw TypeError(
          "Derived constructors may only return object or undefined",
        );
      }
      if (e === undefined) {
        throw ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      }
      return e;
    })(
      this,
      c()
        ? Reflect.construct(e, t || [], u(this).constructor)
        : e.apply(this, t),
    );
  }
  ((e, t) => {
    if (typeof t !== "function" && t !== null) {
      throw TypeError("Super expression must either be null or a function");
    }
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        writable: true,
        configurable: true,
      },
    });
    Object.defineProperty(e, "prototype", {
      writable: false,
    });
    if (t) {
      f(e, t);
    }
  })(r, e);
  t = [
    {
      key: "add",
      value: function (e) {
        if (e) {
          _[e.playerId] = e;
          if (Object.keys(_).length === 1) {
            this.setActive(e.playerId, true);
          }
        }
      },
    },
    {
      key: "remove",
      value: function (e) {
        if (e) {
          e.isUserActive;
          delete _[e.playerId];
        }
      },
    },
    {
      key: "_iterate",
      value: function (e) {
        const t =
          arguments.length > 1 && arguments[1] !== undefined && arguments[1];
        for (const i in _) {
          if (Object.prototype.hasOwnProperty.call(_, i)) {
            const r = _[i];
            if (t) {
              if (e(r)) {
                break;
              }
            } else {
              e(r);
            }
          }
        }
      },
    },
    {
      key: "forEach",
      value: function (e) {
        this._iterate(e);
      },
    },
    {
      key: "find",
      value: function (e) {
        let t = null;
        this._iterate(function (i) {
          const r = e(i);
          if (r) {
            t = i;
          }
          return r;
        }, true);
        return t;
      },
    },
    {
      key: "findAll",
      value: function (e) {
        const t = [];
        this._iterate(function (i) {
          if (e(i)) {
            t.push(i);
          }
        });
        return t;
      },
    },
    {
      key: "setActive",
      value: function (e) {
        const t =
          !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
        if (_[e]) {
          if (t) {
            this.forEach((t) => {
              if (e === t.playerId) {
                t.isUserActive = true;
                t.isInstNext = false;
              } else {
                t.isUserActive = false;
              }
            });
          } else {
            _[e].isUserActive = t;
          }
          return e;
        }
      },
    },
    {
      key: "getActiveId",
      value: function () {
        for (let e = Object.keys(_), t = 0; t < e.length; t++) {
          const i = _[e[t]];
          if (i && i.isUserActive) {
            return e[t];
          }
        }
        return null;
      },
    },
    {
      key: "setNext",
      value: function (e) {
        const t =
          !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
        if (_[e]) {
          if (t) {
            this.forEach((t) => {
              if (e === t.playerId) {
                t.isUserActive = false;
                t.isInstNext = true;
              } else {
                t.isInstNext = false;
              }
            });
          } else {
            _[e].isInstNext = t;
          }
          return e;
        }
      },
    },
  ];
  i = [
    {
      key: "getInstance",
      value: function () {
        if (!y) {
          y = new r();
        }
        return y;
      },
    },
  ];
  if (t) {
    d(r.prototype, t);
  }
  if (i) {
    d(r, i);
  }
  Object.defineProperty(r, "prototype", {
    writable: false,
  });
  return r;
})(g_exports.EventEmitter);
v || Object.prototype.constructor;
n = T || {};
n.UPDATE_INST_ORDER = "UPDATE_INST_ORDER";
var T = n;
function L() {
  L = function () {
    return e;
  };
  var e = {};
  const Object_prototype = Object.prototype;
  const t_hasOwnProperty = Object_prototype.hasOwnProperty;
  const r =
    Object.defineProperty ||
    ((e, t, i) => {
      e[t] = i.value;
    });
  const n = typeof Symbol === "function" ? Symbol : {};
  const a = n.iterator || "@@iterator";
  const s = n.asyncIterator || "@@asyncIterator";
  const o = n.toStringTag || "@@toStringTag";
  function l(e, t, i) {
    Object.defineProperty(e, t, {
      value: i,
      enumerable: true,
      configurable: true,
      writable: true,
    });
    return e[t];
  }
  try {
    l({}, "");
  } catch {
    l = function (e, t, i) {
      return (e[t] = i);
    };
  }
  function h(e, t, i, n) {
    let a;
    let s;
    let o;
    let l;
    const h = Object.create((t && t.prototype instanceof c ? t : c).prototype);
    r(h, "_invoke", {
      value:
        ((a = e),
        (s = i),
        (o = new constructor(n || [])),
        (l = "suspendedStart"),
        function (e, t) {
          if (l === "executing") {
            throw Error("Generator is already running");
          }
          if (l === "completed") {
            if (e === "throw") {
              throw t;
            }
            return next();
          }
          o.method = e;
          for (o.arg = t; ;) {
            const i = o.delegate;
            if (i) {
              const r = (function e(t, i) {
                const i_method = i.method;
                const n = t.iterator[i_method];
                if (n === undefined) {
                  i.delegate = null;
                  if (
                    !(
                      i_method === "throw" &&
                      t.iterator.return &&
                      ((i.method = "return"),
                      (i.arg = undefined),
                      e(t, i),
                      i.method === "throw")
                    )
                  ) {
                    if (i_method !== "return") {
                      i.method = "throw";
                      i.arg = TypeError(
                        "The iterator does not provide a '" +
                          i_method +
                          "' method",
                      );
                    }
                  }
                  return u;
                }
                const a = d(n, t.iterator, i.arg);
                if (a.type === "throw") {
                  i.method = "throw";
                  i.arg = a.arg;
                  i.delegate = null;
                  return u;
                }
                const a_arg = a.arg;
                if (a_arg) {
                  if (a_arg.done) {
                    i[t.resultName] = a_arg.value;
                    i.next = t.nextLoc;
                    if (i.method !== "return") {
                      i.method = "next";
                      i.arg = undefined;
                    }
                    i.delegate = null;
                    return u;
                  }
                  return a_arg;
                }
                i.method = "throw";
                i.arg = TypeError("iterator result is not an object");
                i.delegate = null;
                return u;
              })(i, o);
              if (r) {
                if (r === u) {
                  continue;
                }
                return r;
              }
            }
            if (o.method === "next") {
              o.sent = o._sent = o.arg;
            } else if (o.method === "throw") {
              if (l === "suspendedStart") {
                l = "completed";
                throw o.arg;
              }
              o.dispatchException(o.arg);
            } else {
              if (o.method === "return") {
                o.abrupt("return", o.arg);
              }
            }
            l = "executing";
            const n = d(a, s, o);
            if (n.type === "normal") {
              l = o.done ? "completed" : "suspendedYield";
              if (n.arg === u) {
                continue;
              }
              return {
                value: n.arg,
                done: o.done,
              };
            }
            if (n.type === "throw") {
              l = "completed";
              o.method = "throw";
              o.arg = n.arg;
            }
          }
        }),
    });
    return h;
  }
  function d(e, t, i) {
    try {
      return {
        type: "normal",
        arg: e.call(t, i),
      };
    } catch (arg) {
      return {
        type: "throw",
        arg,
      };
    }
  }
  e.wrap = h;
  var u = {};
  function c() {}
  function f() {}
  function g() {}
  let p = {};
  l(p, a, function () {
    return this;
  });
  const Object_getPrototypeOf = Object.getPrototypeOf;
  const _ =
    Object_getPrototypeOf &&
    Object_getPrototypeOf(Object_getPrototypeOf(P([])));
  if (_ && _ !== Object_prototype && t_hasOwnProperty.call(_, a)) {
    p = _;
  }
  const y = (g.prototype = c.prototype = Object.create(p));
  function v(e) {
    ["next", "throw", "return"].forEach((t) => {
      l(e, t, function (e) {
        return this._invoke(t, e);
      });
    });
  }
  function T(e, t) {
    let n;
    r(this, "_invoke", {
      value: function (r, a) {
        function s() {
          return new t(function (n, s) {
            (function r(n, a, s, o) {
              const l = d(e[n], e, a);
              if (l.type !== "throw") {
                const h = l.arg;
                const u = h.value;
                if (
                  u &&
                  typeof u === "object" &&
                  t_hasOwnProperty.call(u, "__await")
                ) {
                  return t.resolve(u.__await).then(
                    (e) => {
                      r("next", e, s, o);
                    },
                    (e) => {
                      r("throw", e, s, o);
                    },
                  );
                }
                return t.resolve(u).then(
                  (e) => {
                    h.value = e;
                    s(h);
                  },
                  (e) => r("throw", e, s, o),
                );
              }
              o(l.arg);
            })(r, a, n, s);
          });
        }
        return (n = n ? n.then(s, s) : s());
      },
    });
  }
  function b(e) {
    const t = {
      tryLoc: e[0],
    };
    if (1 in e) {
      t.catchLoc = e[1];
    }
    if (2 in e) {
      t.finallyLoc = e[2];
      t.afterLoc = e[3];
    }
    this.tryEntries.push(t);
  }
  function S(e) {
    const t = e.completion || {};
    t.type = "normal";
    delete t.arg;
    e.completion = t;
  }
  function constructor(e) {
    this.tryEntries = [
      {
        tryLoc: "root",
      },
    ];
    e.forEach(b, this);
    this.reset(true);
  }
  function P(e) {
    if (e) {
      const t = e[a];
      if (t) {
        return t.call(e);
      }
      if (typeof e.next === "function") {
        return e;
      }
      if (!isNaN(e.length)) {
        let r = -1;
        const n = function t() {
          while (++r < e.length) {
            if (t_hasOwnProperty.call(e, r)) {
              t.value = e[r];
              t.done = false;
              return t;
            }
          }
          t.value = undefined;
          t.done = true;
          return t;
        };
        return (n.next = n);
      }
    }
    return {
      next,
    };
  }
  function next() {
    return {
      value: undefined,
      done: true,
    };
  }
  f.prototype = g;
  r(y, "constructor", {
    value: g,
    configurable: true,
  });
  r(g, "constructor", {
    value: f,
    configurable: true,
  });
  f.displayName = l(g, o, "GeneratorFunction");
  e.isGeneratorFunction = function (e) {
    const t = typeof e === "function" && e.constructor;
    return (
      !!t && (t === f || (t.displayName || t.name) === "GeneratorFunction")
    );
  };
  e.mark = function (e) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(e, g);
    } else {
      e.__proto__ = g;
      l(e, o, "GeneratorFunction");
    }
    e.prototype = Object.create(y);
    return e;
  };
  e.awrap = function (__await) {
    return {
      __await,
    };
  };
  v(T.prototype);
  l(T.prototype, s, function () {
    return this;
  });
  e.AsyncIterator = T;
  e.async = function (t, i, r, n, a = Promise) {
    const s = new T(h(t, i, r, n), a);
    if (e.isGeneratorFunction(i)) {
      return s;
    }
    return s.next().then((e) => {
      if (e.done) {
        return e.value;
      }
      return s.next();
    });
  };
  v(y);
  l(y, o, "Generator");
  l(y, a, function () {
    return this;
  });
  l(y, "toString", function () {
    return "[object Generator]";
  });
  e.keys = function (e) {
    const t = Object(e);
    const i = [];
    for (const r in t) {
      i.push(r);
    }
    i.reverse();
    return function e() {
      while (i.length) {
        const r = i.pop();
        if (r in t) {
          e.value = r;
          e.done = false;
          return e;
        }
      }
      e.done = true;
      return e;
    };
  };
  e.values = P;
  constructor.prototype = {
    constructor,
    reset: function (e) {
      this.prev = 0;
      this.next = 0;
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(S);
      if (!e) {
        for (const t in this) {
          if (
            t.charAt(0) === "t" &&
            t_hasOwnProperty.call(this, t) &&
            !isNaN(+t.slice(1))
          ) {
            this[t] = undefined;
          }
        }
      }
    },
    stop: function () {
      this.done = true;
      const completion = this.tryEntries[0].completion;
      if (completion.type === "throw") {
        throw completion.arg;
      }
      return this.rval;
    },
    dispatchException: function (e) {
      if (this.done) {
        throw e;
      }
      const t = this;
      function r(i, r) {
        s.type = "throw";
        s.arg = e;
        t.next = i;
        if (r) {
          t.method = "next";
          t.arg = undefined;
        }
        return !!r;
      }
      for (let n = this.tryEntries.length - 1; n >= 0; --n) {
        const a = this.tryEntries[n];
        var s = a.completion;
        if (a.tryLoc === "root") {
          return r("end");
        }
        if (a.tryLoc <= this.prev) {
          const o = t_hasOwnProperty.call(a, "catchLoc");
          const l = t_hasOwnProperty.call(a, "finallyLoc");
          if (o && l) {
            if (this.prev < a.catchLoc) {
              return r(a.catchLoc, true);
            }
            if (this.prev < a.finallyLoc) {
              return r(a.finallyLoc);
            }
          } else if (o) {
            if (this.prev < a.catchLoc) {
              return r(a.catchLoc, true);
            }
          } else {
            if (!l) {
              throw Error("try statement without catch or finally");
            }
            if (this.prev < a.finallyLoc) {
              return r(a.finallyLoc);
            }
          }
        }
      }
    },
    abrupt: function (e, t) {
      for (let r = this.tryEntries.length - 1; r >= 0; --r) {
        const n = this.tryEntries[r];
        if (
          n.tryLoc <= this.prev &&
          t_hasOwnProperty.call(n, "finallyLoc") &&
          this.prev < n.finallyLoc
        ) {
          var a = n;
          break;
        }
      }
      if (
        a &&
        (e === "break" || e === "continue") &&
        a.tryLoc <= t &&
        t <= a.finallyLoc
      ) {
        a = null;
      }
      const s = a ? a.completion : {};
      s.type = e;
      s.arg = t;
      if (a) {
        this.method = "next";
        this.next = a.finallyLoc;
        return u;
      }
      return this.complete(s);
    },
    complete: function (e, t) {
      if (e.type === "throw") {
        throw e.arg;
      }
      if (e.type === "break" || e.type === "continue") {
        this.next = e.arg;
      } else if (e.type === "return") {
        this.rval = this.arg = e.arg;
        this.method = "return";
        this.next = "end";
      } else if (e.type === "normal" && t) {
        this.next = t;
      }
      return u;
    },
    finish: function (e) {
      for (let t = this.tryEntries.length - 1; t >= 0; --t) {
        const i = this.tryEntries[t];
        if (i.finallyLoc === e) {
          this.complete(i.completion, i.afterLoc);
          S(i);
          return u;
        }
      }
    },
    catch: function (e) {
      for (let t = this.tryEntries.length - 1; t >= 0; --t) {
        const i = this.tryEntries[t];
        if (i.tryLoc === e) {
          const r = i.completion;
          if (r.type === "throw") {
            var n = r.arg;
            S(i);
          }
          return n;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function (e, resultName, nextLoc) {
      this.delegate = {
        iterator: P(e),
        resultName,
        nextLoc,
      };
      if (this.method === "next") {
        this.arg = undefined;
      }
      return u;
    },
  };
  return e;
}
function x(e) {
  return (x =
    typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          if (
            e &&
            typeof Symbol === "function" &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
          ) {
            return "symbol";
          }
          return typeof e;
        })(e);
}
function P(e, t, i, r, n, a, s) {
  try {
    var o = e[a](s);
    var l = o.value;
  } catch (error) {
    i(error);
    return;
  }
  if (o.done) {
    t(l);
  } else {
    Promise.resolve(l).then(r, n);
  }
}
function R(e) {
  return function () {
    const t = this;
    const i = arguments;
    return new Promise((resolve, reject) => {
      const a = e.apply(t, i);
      function s(e) {
        P(a, resolve, reject, s, o, "next", e);
      }
      function o(e) {
        P(a, resolve, reject, s, o, "throw", e);
      }
      s(undefined);
    });
  };
}
function E(e, t) {
  if (!(e instanceof t)) {
    throw TypeError("Cannot call a class as a function");
  }
}
function C(e, t) {
  for (let i = 0; i < t.length; i++) {
    const r = t[i];
    r.enumerable = r.enumerable || false;
    r.configurable = true;
    if ("value" in r) {
      r.writable = true;
    }
    Object.defineProperty(e, G(r.key), r);
  }
}
function k(e, t, i) {
  if (t) {
    C(e.prototype, t);
  }
  if (i) {
    C(e, i);
  }
  Object.defineProperty(e, "prototype", {
    writable: false,
  });
  return e;
}
function O(e, t) {
  if (typeof t !== "function" && t !== null) {
    throw TypeError("Super expression must either be null or a function");
  }
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: true,
      configurable: true,
    },
  });
  Object.defineProperty(e, "prototype", {
    writable: false,
  });
  if (t) {
    w(e, t);
  }
}
function D(e) {
  return (D = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}
function w(e, t) {
  return (w = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function (e, t) {
        e.__proto__ = t;
        return e;
      })(e, t);
}
function M() {
  if (
    typeof Reflect === "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  ) {
    return false;
  }
  if (typeof Proxy === "function") {
    return true;
  }
  try {
    Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
    return true;
  } catch {
    return false;
  }
}
function N(e, t, i) {
  return (N = M()
    ? Reflect.construct.bind()
    : function (e, t, i) {
        const r = [null];
        r.push.apply(r, t);
        const n = new (Function.bind.apply(e, r))();
        if (i) {
          w(n, i.prototype);
        }
        return n;
      }).apply(null, arguments);
}
function A(e) {
  const t = typeof Map === "function" ? new Map() : undefined;
  return (A = function (e) {
    if (
      e === null ||
      Function.toString.call(e).indexOf("[native code]") === -1
    ) {
      return e;
    }
    if (typeof e !== "function") {
      throw TypeError("Super expression must either be null or a function");
    }
    if (typeof t !== "undefined") {
      if (t.has(e)) {
        return t.get(e);
      }
      t.set(e, i);
    }
    function i() {
      return N(e, arguments, D(this).constructor);
    }
    i.prototype = Object.create(e.prototype, {
      constructor: {
        value: i,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    });
    return w(i, e);
  })(e);
}
function B(e) {
  if (e === undefined) {
    throw ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  }
  return e;
}
function U(e) {
  const t = M();
  return function () {
    let i;
    const r = D(e);
    i = t
      ? Reflect.construct(r, arguments, D(this).constructor)
      : r.apply(this, arguments);
    if (i && (typeof i === "object" || typeof i === "function")) {
      return i;
    }
    if (i !== undefined) {
      throw TypeError(
        "Derived constructors may only return object or undefined",
      );
    }
    return B(this);
  };
}
function F() {
  return (F =
    typeof Reflect !== "undefined" && Reflect.get
      ? Reflect.get.bind()
      : function (e, t, i) {
          const r = ((e, t) => {
            while (
              !Object.prototype.hasOwnProperty.call(e, t) &&
              (e = D(e)) !== null
            );
            return e;
          })(e, t);
          if (r) {
            const n = Object.getOwnPropertyDescriptor(r, t);
            if (n.get) {
              return n.get.call(arguments.length < 3 ? e : i);
            }
            return n.value;
          }
        }).apply(this, arguments);
}
function j(e, t) {
  if (t == null || t > e.length) {
    t = e.length;
  }
  for (var i = 0, r = Array(t); i < t; i++) {
    r[i] = e[i];
  }
  return r;
}
function G(key) {
  const t = ((e, t) => {
    if (typeof e !== "object" || e === null) {
      return e;
    }
    const i = e[Symbol.toPrimitive];
    if (i !== undefined) {
      const r = i.call(e, t || "default");
      if (typeof r !== "object") {
        return r;
      }
      throw TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(e);
  })(key, "string");
  if (typeof t === "symbol") {
    return t;
  }
  return String(t);
}
function $() {
  let e;
  let t;
  const i = new Promise((resolve, reject) => {
    e = resolve;
    t = reject;
  });
  i.used = false;
  i.resolve = function () {
    i.used = true;
    return e.apply(undefined, arguments);
  };
  i.reject = function () {
    i.used = true;
    return t.apply(undefined, arguments);
  };
  return i;
}
const V = [
  "Boolean",
  "Number",
  "String",
  "Undefined",
  "Null",
  "Date",
  "Object",
];
const H = (() => {
  function e(t, i) {
    E(this, e);
    this.name = t || "";
    this._prefix = "[".concat(this.name, "]");
    this.logCacheLevel = (i == null ? undefined : i.logCacheLevel) || 3;
    this.logMaxSize = (i == null ? undefined : i.logMaxSize) || 204800;
    this.logSize = 0;
    this.logTextArray = [];
  }
  k(
    e,
    [
      {
        key: "debug",
        value: function () {
          let t;
          for (var i = arguments.length, r = Array(i), n = 0; n < i; n++) {
            r[n] = arguments[n];
          }
          this.logCache.apply(this, [1].concat(r));
          if (!e.disabled) {
            (t = console).debug.apply(t, [this._prefix, K()].concat(r));
          }
        },
      },
      {
        key: "log",
        value: function () {
          let t;
          for (var i = arguments.length, r = Array(i), n = 0; n < i; n++) {
            r[n] = arguments[n];
          }
          this.logCache.apply(this, [2].concat(r));
          if (!e.disabled) {
            (t = console).log.apply(t, [this._prefix, K()].concat(r));
          }
        },
      },
      {
        key: "warn",
        value: function () {
          let t;
          for (var i = arguments.length, r = Array(i), n = 0; n < i; n++) {
            r[n] = arguments[n];
          }
          this.logCache.apply(this, [3].concat(r));
          if (!e.disabled) {
            (t = console).warn.apply(t, [this._prefix, K()].concat(r));
          }
        },
      },
      {
        key: "error",
        value: function () {
          let t;
          for (var i = arguments.length, r = Array(i), n = 0; n < i; n++) {
            r[n] = arguments[n];
          }
          this.logCache.apply(this, [4].concat(r));
          if (!e.disabled) {
            (t = console).error.apply(t, [this._prefix, K()].concat(r));
          }
        },
      },
      {
        key: "logCache",
        value: function (e) {
          if (!(e < this.logCacheLevel)) {
            let t = "";
            try {
              for (
                var i = arguments.length, r = Array(i > 1 ? i - 1 : 0), n = 1;
                n < i;
                n++
              ) {
                r[n - 1] = arguments[n];
              }
              const a = r.map((e) =>
                (function e(t, i, r) {
                  if (!r) {
                    r = 1;
                  }
                  if (!i) {
                    i = 2;
                  }
                  const n = {};
                  if (!t || x(t) !== "object") {
                    return t;
                  }
                  const a = Object.prototype.toString.call(t).slice(8, -1);
                  if (!V.includes(a)) {
                    return a;
                  }
                  if (!(r > i)) {
                    for (const s in t) {
                      if (Object.prototype.hasOwnProperty.call(t, s)) {
                        if (r === i) {
                          n[s] = ((e) => {
                            if (x(e) !== "object") {
                              return e;
                            }
                            const t = Object.prototype.toString
                              .call(e)
                              .slice(8, -1);
                            switch (t) {
                              case "Array":
                              case "Uint8Array":
                              case "ArrayBuffer":
                                return t + "[" + e.length + "]";
                              case "Object":
                                return "{}";
                              default:
                                return t;
                            }
                          })(t[s]);
                        } else if (x(t[s]) === "object") {
                          n[s] = e(t[s], i, r + 1);
                        } else {
                          n[s] = t[s];
                        }
                      }
                    }
                    return n;
                  }
                })(e),
              );
              t = this._prefix + K() + JSON.stringify(a);
            } catch {
              return;
            }
            if (e >= this.logCacheLevel) {
              this.logSize += t.length;
              this.logTextArray.push(t);
            }
            if (this.logSize > this.logMaxSize) {
              const s = this.logTextArray.shift();
              this.logSize -= s.length;
            }
          }
        },
      },
      {
        key: "getLogCache",
        value: function () {
          const e = this.logTextArray.join(`
`);
          this.reset();
          return e;
        },
      },
      {
        key: "reset",
        value: function () {
          this.logTextArray = [];
          this.logSize = 0;
        },
      },
      {
        key: "table",
        value: function () {
          let t;
          if (!e.disabled) {
            console.group(this._prefix);
            (t = console).table.apply(t, arguments);
            console.groupEnd();
          }
        },
      },
      {
        key: "setLogLevel",
        value: function (e) {
          this.logCacheLevel = e;
        },
      },
    ],
    [
      {
        key: "enable",
        value: function () {
          e.disabled = false;
        },
      },
      {
        key: "disable",
        value: function () {
          e.disabled = true;
        },
      },
    ],
  );
  return e;
})();
function K() {
  return new Date().toLocaleString();
}
H.disabled = true;
const loaderType = "fetch";
const q = "arraybuffer";
const J = "text";
const W = "json";
const Y = ((e) => {
  O(i, e);
  var t = U(i);
  function i(e, r, n, a) {
    let s;
    E(this, i);
    B((s = t.call(this, a))).retryCount = 0;
    B(s).isTimeout = false;
    B(s).loaderType = loaderType;
    B(s).startTime = 0;
    B(s).endTime = 0;
    B(s).options = {};
    s.url = e;
    s.request = r;
    s.response = n;
    return s;
  }
  return k(i);
})(A(Error));
const toString = Object.prototype.toString;
function Z(e) {
  if (toString.call(e) !== "[object Object]") {
    return false;
  }
  const t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
function Q(e) {
  if (
    !(
      !e ||
      e[0] === null ||
      e[0] === undefined ||
      (e[0] === 0 && (e[1] === null || e[1] === undefined))
    )
  ) {
    let t = "bytes=" + e[0] + "-";
    if (e[1]) {
      t += e[1];
    }
    return t;
  }
}
function ee(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function et(e, t) {
  if (e) {
    if (!t) {
      return e;
    }
    let i;
    const r = Object.keys(t)
      .map((e) => {
        if ((i = t[e]) != null) {
          if (Array.isArray(i)) {
            e += "[]";
          } else {
            i = [i];
          }
          return i
            .map((t) => {
              let i;
              let r;
              i = t;
              if (toString.call(i) === "[object Date]") {
                t = t.toISOString();
              } else if ((r = t) !== null && x(r) === "object") {
                t = JSON.stringify(t);
              }
              return "".concat(ee(e), "=").concat(ee(t));
            })
            .join("&");
        }
      })
      .filter(Boolean)
      .join("&");
    if (r) {
      const n = e.indexOf("#");
      if (n !== -1) {
        e = e.slice(0, n);
      }
      e += (e.indexOf("?") === -1 ? "?" : "&") + r;
    }
    return e;
  }
}
function ei(
  data,
  done,
  response,
  contentLength,
  age,
  startTime,
  firstByteTime,
  o,
  range,
  h,
  priOptions,
) {
  age = age != null ? parseFloat(age) : null;
  if (Number.isNaN((contentLength = parseInt(contentLength || "0", 10)))) {
    contentLength = 0;
  }
  return {
    data,
    done,
    options: {
      range,
      vid: h,
      index: o,
      contentLength,
      age,
      startTime,
      firstByteTime,
      endTime: Date.now(),
      priOptions,
    },
    response,
  };
}
function er(e, t) {
  return Math.round((8 * e * 1000) / t / 1024);
}
const en = "real_time_speed";
const ea = ((e) => {
  O(r, e);
  let t;
  var i = U(r);
  function r() {
    let e;
    E(this, r);
    B((e = i.call(this)))._abortController = null;
    B(e)._timeoutTimer = null;
    B(e)._reader = null;
    B(e)._response = null;
    B(e)._aborted = false;
    B(e)._index = -1;
    B(e)._range = null;
    B(e)._receivedLength = 0;
    B(e)._running = false;
    B(e)._logger = null;
    B(e)._vid = "";
    B(e)._onProcessMinLen = 0;
    B(e)._onCancel = null;
    B(e)._priOptions = null;
    return e;
  }
  k(
    r,
    [
      {
        key: "load",
        value: function (e) {
          let t;
          const i = this;
          let e_url = e.url;
          const e_vid = e.vid;
          const e_timeout = e.timeout;
          const e_responseType = e.responseType;
          const e_onProgress = e.onProgress;
          const e_index = e.index;
          const e_onTimeout = e.onTimeout;
          const e_onCancel = e.onCancel;
          const e_range = e.range;
          const e_transformResponse = e.transformResponse;
          const e_request = e.request;
          const e_params = e.params;
          const e_logger = e.logger;
          const e_method = e.method;
          let e_headers = e.headers;
          const e_body = e.body;
          const e_mode = e.mode;
          const e_credentials = e.credentials;
          const e_cache = e.cache;
          const e_redirect = e.redirect;
          const e_referrer = e.referrer;
          const e_referrerPolicy = e.referrerPolicy;
          const e_onProcessMinLen = e.onProcessMinLen;
          const e_priOptions = e.priOptions;
          this._logger = e_logger;
          this._aborted = false;
          this._onProcessMinLen = e_onProcessMinLen;
          this._onCancel = e_onCancel;
          this._abortController =
            typeof AbortController !== "undefined" && new AbortController();
          this._running = true;
          this._index = e_index;
          this._range = e_range || [0, 0];
          this._vid = e_vid || e_url;
          this._priOptions = e_priOptions || {};
          const k = {
            method: e_method,
            headers: e_headers,
            body: e_body,
            mode: e_mode,
            credentials: e_credentials,
            cache: e_cache,
            redirect: e_redirect,
            referrer: e_referrer,
            referrerPolicy: e_referrerPolicy,
            signal: (t = this._abortController) == null ? undefined : t.signal,
          };
          let I = false;
          clearTimeout(this._timeoutTimer);
          e_url = et(e_url, e_params);
          const O = Q(e_range);
          if (O) {
            e_headers = e_request
              ? e_request.headers
              : (k.headers = k.headers || (Headers ? new Headers() : {}));
            if (Headers && e_headers instanceof Headers) {
              e_headers.append("Range", O);
            } else {
              e_headers.Range = O;
            }
          }
          if (e_timeout) {
            this._timeoutTimer = setTimeout(() => {
              I = true;
              i.cancel();
              if (e_onTimeout) {
                const e = new Y(e_url, k, null, "timeout");
                e.isTimeout = true;
                e_onTimeout(e, {
                  index: i._index,
                  range: i._range,
                  vid: i._vid,
                  priOptions: i._priOptions,
                });
              }
            }, e_timeout);
          }
          const D = Date.now();
          this._logger.debug(
            "[fetch load start], index,",
            e_index,
            ",range,",
            e_range,
          );
          return new Promise((resolve, reject) => {
            let n;
            fetch(e_request || e_url, e_request ? undefined : k)
              .then(
                ((n = R(
                  L().mark(function n(a) {
                    let h;
                    let d;
                    let f;
                    let g;
                    return L().wrap(function (n) {
                      while (true) {
                        switch ((n.prev = n.next)) {
                          case 0:
                            clearTimeout(i._timeoutTimer);
                            i._response = a;
                            if (!(i._aborted || !i._running)) {
                              n.next = 4;
                              break;
                            }
                            return n.abrupt("return");
                          case 4:
                            if (e_transformResponse) {
                              a = e_transformResponse(a, e_url) || a;
                            }
                            if (a.ok) {
                              n.next = 7;
                              break;
                            }
                            throw new Y(e_url, k, a, "bad network response");
                          case 7:
                            h = Date.now();
                            if (e_responseType !== J) {
                              n.next = 15;
                              break;
                            }
                            n.next = 11;
                            return a.text();
                          case 11:
                          case 18:
                            d = n.sent;
                            i._running = false;
                            n.next = 37;
                            break;
                          case 15:
                            if (e_responseType !== W) {
                              n.next = 22;
                              break;
                            }
                            n.next = 18;
                            return a.json();
                          case 22:
                            if (!e_onProgress) {
                              n.next = 29;
                              break;
                            }
                            i.resolve = resolve;
                            i.reject = reject;
                            i._loadChunk(a, e_onProgress, D, h);
                            return n.abrupt("return");
                          case 29:
                            n.next = 31;
                            return a.arrayBuffer();
                          case 31:
                            d = new Uint8Array((d = n.sent));
                            i._running = false;
                            f = Date.now() - D;
                            g = er(d.byteLength, f);
                            i.emit(en, {
                              speed: g,
                              len: d.byteLength,
                              time: f,
                              vid: i._vid,
                              index: i._index,
                              range: i._range,
                              priOptions: i._priOptions,
                            });
                          case 37:
                            i._logger.debug(
                              "[fetch load end], index,",
                              e_index,
                              ",range,",
                              e_range,
                            );
                            resolve(
                              ei(
                                d,
                                true,
                                a,
                                a.headers.get("Content-Length"),
                                a.headers.get("age"),
                                D,
                                h,
                                e_index,
                                e_range,
                                i._vid,
                                i._priOptions,
                              ),
                            );
                          case 39:
                          case "end":
                            return n.stop();
                        }
                      }
                    }, n);
                  }),
                )),
                function (e) {
                  return n.apply(this, arguments);
                }),
              )
              .catch((e) => {
                let n;
                clearTimeout(i._timeoutTimer);
                i._running = false;
                if (!(i._aborted && !I)) {
                  e =
                    e instanceof Y
                      ? e
                      : new Y(
                          e_url,
                          k,
                          null,
                          (n = e) == null ? undefined : n.message,
                        );
                  e.startTime = D;
                  e.endTime = Date.now();
                  e.isTimeout = I;
                  e.options = {
                    index: i._index,
                    range: i._range,
                    vid: i._vid,
                    priOptions: i._priOptions,
                  };
                  reject(e);
                }
              });
          });
        },
      },
      {
        key: "cancel",
        value:
          ((t = R(
            L().mark(function e() {
              return L().wrap(
                function (e) {
                  while (true) {
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!this._aborted) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt("return");
                      case 2:
                        this._aborted = true;
                        this._running = false;
                        if (!this._response) {
                          e.next = 14;
                          break;
                        }
                        e.prev = 5;
                        if (!this._reader) {
                          e.next = 9;
                          break;
                        }
                        e.next = 9;
                        return this._reader.cancel();
                      case 9:
                        e.next = 13;
                        break;
                      case 11:
                        e.prev = 11;
                        e.t0 = e.catch(5);
                      case 13:
                        this._response = this._reader = null;
                      case 14:
                        if (this._abortController) {
                          try {
                            this._abortController.abort();
                          } catch {}
                          this._abortController = null;
                        }
                        if (this._onCancel) {
                          this._onCancel({
                            index: this._index,
                            range: this._range,
                            vid: this._vid,
                            priOptions: this._priOptions,
                          });
                        }
                      case 16:
                      case "end":
                        return e.stop();
                    }
                  }
                },
                e,
                this,
                [[5, 11]],
              );
            }),
          )),
          function () {
            return t.apply(this, arguments);
          }),
      },
      {
        key: "_loadChunk",
        value: function (e, t, st, r) {
          const n = this;
          if (!e.body || !e.body.getReader) {
            this._running = false;
            const a = new Y(
              e.url,
              "",
              e,
              "onProgress of bad response.body.getReader",
            );
            a.options = {
              index: this._index,
              range: this._range,
              vid: this._vid,
              priOptions: this._priOptions,
            };
            this.reject(a);
            return;
          }
          if (this._onProcessMinLen > 0) {
            this._cache = new Uint8Array(2097152);
            this._writeIdx = 0;
          }
          let s;
          let o;
          let l;
          let h;
          const d = (this._reader = e.body.getReader());
          s = R(
            L().mark(function a() {
              let s;
              let c;
              let f;
              let g;
              let p;
              let m;
              let _;
              let y;
              return L().wrap(
                function (a) {
                  while (true) {
                    switch ((a.prev = a.next)) {
                      case 0:
                        l = Date.now();
                        a.prev = 1;
                        a.next = 4;
                        return d.read();
                      case 4:
                        o = a.sent;
                        h = Date.now();
                        a.next = 13;
                        break;
                      case 8:
                        a.prev = 8;
                        a.t0 = a.catch(1);
                        h = Date.now();
                        if (!n._aborted) {
                          n._running = false;
                          a.t0.options = {
                            index: n._index,
                            range: n._range,
                            vid: n._vid,
                            priOptions: n._priOptions,
                          };
                          n.reject(a.t0);
                        }
                        return a.abrupt("return");
                      case 13:
                        f =
                          (c =
                            ((s = n._range) == null ? undefined : s.length) > 0
                              ? n._range[0]
                              : 0) + n._receivedLength;
                        if (!n._aborted) {
                          a.next = 19;
                          break;
                        }
                        n._running = false;
                        t(
                          undefined,
                          false,
                          {
                            range: [f, f],
                            vid: n._vid,
                            index: n._index,
                            startTime: l,
                            endTime: h,
                            st,
                            firstByteTime: r,
                            priOptions: n._priOptions,
                          },
                          e,
                        );
                        return a.abrupt("return");
                      case 19:
                        g = o.value ? o.value.byteLength : 0;
                        n._receivedLength += g;
                        n._logger.debug(
                          "【fetchLoader,onProgress call】,task,",
                          n._range,
                          ", start,",
                          f,
                          ", end,",
                          c + n._receivedLength,
                          ", done,",
                          o.done,
                        );
                        if (n._onProcessMinLen > 0) {
                          if (n._writeIdx + g >= n._onProcessMinLen || o.done) {
                            (p = new Uint8Array(n._writeIdx + g)).set(
                              n._cache.slice(0, n._writeIdx),
                              0,
                            );
                            if (g > 0) {
                              p.set(o.value, n._writeIdx);
                            }
                            n._writeIdx = 0;
                            n._logger.debug(
                              "【fetchLoader,onProgress enough】,done,",
                              o.done,
                              ",len,",
                              p.byteLength,
                              ", writeIdx,",
                              n._writeIdx,
                            );
                          } else if (g > 0 && n._writeIdx + g < 2097152) {
                            n._cache.set(o.value, n._writeIdx);
                            n._writeIdx += g;
                            n._logger.debug(
                              "【fetchLoader,onProgress cache】,len,",
                              g,
                              ", writeIdx,",
                              n._writeIdx,
                            );
                          } else if (g > 0) {
                            m = new Uint8Array(n._writeIdx + g + 2048);
                            n._logger.debug(
                              "【fetchLoader,onProgress extra start】,size,",
                              n._writeIdx + g + 2048,
                              ", datalen,",
                              g,
                              ", writeIdx,",
                              n._writeIdx,
                            );
                            m.set(n._cache.slice(0, n._writeIdx), 0);
                            if (g > 0) {
                              m.set(o.value, n._writeIdx);
                            }
                            n._writeIdx += g;
                            delete n._cache;
                            n._cache = m;
                            n._logger.debug(
                              "【fetchLoader,onProgress extra end】,len,",
                              g,
                              ", writeIdx,",
                              n._writeIdx,
                            );
                          }
                        } else {
                          p = o.value;
                        }
                        if ((p && p.byteLength > 0) || o.done) {
                          t(
                            p,
                            o.done,
                            {
                              range: [
                                n._range[0] +
                                  n._receivedLength -
                                  (p ? p.byteLength : 0),
                                n._range[0] + n._receivedLength,
                              ],
                              vid: n._vid,
                              index: n._index,
                              startTime: l,
                              endTime: h,
                              st,
                              firstByteTime: r,
                              priOptions: n._priOptions,
                            },
                            e,
                          );
                        }
                        if (o.done) {
                          _ = Date.now() - st;
                          y = er(n._receivedLength, _);
                          n.emit(en, {
                            speed: y,
                            len: n._receivedLength,
                            time: _,
                            vid: n._vid,
                            index: n._index,
                            range: n._range,
                            priOptions: n._priOptions,
                          });
                          n._running = false;
                          n._logger.debug(
                            "[fetchLoader onProgress end],task,",
                            n._range,
                            ",done,",
                            o.done,
                          );
                          n.resolve(
                            ei(
                              o,
                              true,
                              e,
                              e.headers.get("Content-Length"),
                              e.headers.get("age"),
                              st,
                              r,
                              n._index,
                              n._range,
                              n._vid,
                              n._priOptions,
                            ),
                          );
                        } else {
                          u();
                        }
                      case 25:
                      case "end":
                        return a.stop();
                    }
                  }
                },
                a,
                null,
                [[1, 8]],
              );
            }),
          );
          var u = function () {
            return s.apply(this, arguments);
          };
          u();
        },
      },
      {
        key: "receiveLen",
        get: function () {
          return this._receivedLength;
        },
      },
      {
        key: "running",
        get: function () {
          return this._running;
        },
        set: function (e) {
          this._running = e;
        },
      },
    ],
    [
      {
        key: "isSupported",
        value: function () {
          return typeof fetch !== "undefined";
        },
      },
    ],
  );
  return r;
})(m);
const es = ((e) => {
  O(i, e);
  var t = U(i);
  function i() {
    let e;
    E(this, i);
    B((e = t.call(this)))._xhr = null;
    B(e)._aborted = false;
    B(e)._timeoutTimer = null;
    B(e)._range = null;
    B(e)._receivedLength = 0;
    B(e)._url = null;
    B(e)._onProgress = null;
    B(e)._index = -1;
    B(e)._headers = null;
    B(e)._currentChunkSizeKB = 384;
    B(e)._timeout = null;
    B(e)._xhr = null;
    B(e)._withCredentials = null;
    B(e)._startTime = -1;
    B(e)._loadCompleteResolve = null;
    B(e)._loadCompleteReject = null;
    B(e)._runing = false;
    B(e)._logger = false;
    B(e)._vid = "";
    B(e)._responseType = undefined;
    B(e)._credentials = undefined;
    B(e)._method = undefined;
    B(e)._transformResponse = undefined;
    B(e)._firstRtt = undefined;
    B(e)._onCancel = null;
    B(e)._priOptions = null;
    return e;
  }
  k(
    i,
    [
      {
        key: "load",
        value: function (e) {
          const t = this;
          clearTimeout(this._timeoutTimer);
          this._logger = e.logger;
          this._range = e.range;
          this._onProgress = e.onProgress;
          this._index = e.index;
          this._headers = e.headers;
          this._withCredentials =
            e.credentials === "include" || e.credentials === "same-origin";
          this._body = e.body || null;
          if (e.method) {
            this._method = e.method;
          }
          this._timeout = e.timeout || null;
          this._runing = true;
          this._vid = e.vid || e.url;
          this._responseType = e.responseType;
          this._firstRtt = -1;
          this._onTimeout = e.onTimeout;
          this._onCancel = e.onCancel;
          this._request = e.request;
          this._priOptions = e.priOptions || {};
          this._logger.debug("【xhrLoader task】, range", this._range);
          this._url = et(e.url, e.params);
          const i = Date.now();
          return new Promise((resolve, reject) => {
            t._loadCompleteResolve = resolve;
            t._loadCompleteReject = reject;
            t._startLoad();
          }).catch((e) => {
            clearTimeout(t._timeoutTimer);
            t._runing = false;
            if (!t._aborted) {
              e = e instanceof Y ? e : new Y(t._url, t._request);
              e.startTime = i;
              e.endTime = Date.now();
              e.options = {
                index: t._index,
                vid: t._vid,
                priOptions: t._priOptions,
              };
              throw e;
            }
          });
        },
      },
      {
        key: "_startLoad",
        value: function () {
          let e = null;
          if (
            this._responseType === q &&
            this._range &&
            this._range.length > 1
          ) {
            if (this._onProgress) {
              this._firstRtt = -1;
              const t = 1024 * this._currentChunkSizeKB;
              const i = this._range[0] + this._receivedLength;
              let r = this._range[1];
              if (t < this._range[1] - i) {
                r = i + t;
              }
              e = [i, r];
              this._logger.debug(
                "[xhr_loader->],tast :",
                this._range,
                ", SubRange, ",
                e,
              );
            } else {
              e = this._range;
              this._logger.debug(
                "[xhr_loader->],tast :",
                this._range,
                ", allRange, ",
                e,
              );
            }
          }
          this._internalOpen(e);
        },
      },
      {
        key: "_internalOpen",
        value: function (e) {
          const t = this;
          try {
            this._startTime = Date.now();
            const i = (this._xhr = new XMLHttpRequest());
            i.open(this._method || "GET", this._url, true);
            i.responseType = this._responseType;
            if (this._timeout) {
              i.timeout = this._timeout;
            }
            i.withCredentials = this._withCredentials;
            i.onload = this._onLoad.bind(this);
            i.onreadystatechange = this._onReadyStatechange.bind(this);
            i.onerror = function (e) {
              t._running = false;
              let i;
              let r;
              let n;
              const a = new Y(
                t._url,
                t._request,
                e == null || (i = e.currentTarget) == null
                  ? undefined
                  : i.response,
                "xhr.onerror.status:" +
                  (e == null || (r = e.currentTarget) == null
                    ? undefined
                    : r.status) +
                  ",statusText," +
                  (e == null || (n = e.currentTarget) == null
                    ? undefined
                    : n.statusText),
              );
              a.options = {
                index: t._index,
                range: t._range,
                vid: t._vid,
                priOptions: t._priOptions,
              };
              t._loadCompleteReject(a);
            };
            i.ontimeout = function (e) {
              t.cancel();
              const i = new Y(
                t._url,
                t._request,
                {
                  status: 408,
                },
                "timeout",
              );
              if (t._onTimeout) {
                i.isTimeout = true;
                t._onTimeout(i, {
                  index: t._index,
                  range: t._range,
                  vid: t._vid,
                  priOptions: t._priOptions,
                });
              }
              i.options = {
                index: t._index,
                range: t._range,
                vid: t._vid,
                priOptions: t._priOptions,
              };
              t._loadCompleteReject(i);
            };
            const r = this._headers || {};
            const n = Q(e);
            if (n) {
              r.Range = n;
            }
            if (r) {
              Object.keys(r).forEach((e) => {
                i.setRequestHeader(e, r[e]);
              });
            }
            this._logger.debug(
              "[xhr.send->] tast,",
              this._range,
              ",load sub range, ",
              e,
            );
            i.send(this._body);
          } catch (error) {
            error.options = {
              index: this._index,
              range: e,
              vid: this._vid,
              priOptions: this._priOptions,
            };
            this._loadCompleteReject(error);
          }
        },
      },
      {
        key: "_onReadyStatechange",
        value: function (e) {
          if (e.target.readyState === 2 && this._firstRtt < 0) {
            this._firstRtt = Date.now();
          }
        },
      },
      {
        key: "_onLoad",
        value: function (e) {
          let t;
          const status = e.target.status;
          if (status < 200 || status > 299) {
            const r = new Y(
              this._url,
              null,
              {
                ...e.target.response,
                status,
              },
              "bad response,status:" + status,
            );
            r.options = {
              index: this._index,
              range: this._range,
              vid: this._vid,
              priOptions: this._priOptions,
            };
            return this._loadCompleteReject(r);
          }
          let n;
          let a = null;
          let s = false;
          const o =
            ((t = this._range) == null ? undefined : t.length) > 0
              ? this._range[0]
              : 0;
          if (this._responseType === q) {
            let l;
            const h = new Uint8Array(e.target.response);
            n = o + this._receivedLength;
            if (h && h.byteLength > 0) {
              this._receivedLength += h.byteLength;
              const d = Date.now() - this._startTime;
              const speed = er(this._receivedLength, d);
              this.emit(en, {
                speed,
                len: this._receivedLength,
                time: d,
                vid: this._vid,
                index: this._index,
                range: [n, o + this._receivedLength],
                priOptions: this._priOptions,
              });
            }
            a = h;
            s =
              !(((l = this._range) == null ? undefined : l.length) > 1) ||
              !this._range[1] ||
              !(this._receivedLength < this._range[1] - this._range[0]);
            this._logger.debug(
              "[xhr load done->], tast :",
              this._range,
              ", start",
              n,
              "end ",
              o + this._receivedLength,
              ",dataLen,",
              h ? h.byteLength : 0,
              ",receivedLength",
              this._receivedLength,
              ",index,",
              this._index,
              ", done,",
              s,
            );
          } else {
            s = true;
            a = e.target.response;
          }
          let c = {
            ok: status >= 200 && status < 300,
            status,
            statusText: this._xhr.statusText,
            url: this._xhr.responseURL,
            headers: this._getHeaders(this._xhr),
            body: this._xhr.response,
          };
          if (this._transformResponse) {
            c = this._transformResponse(c, this._url) || c;
          }
          if (this._onProgress) {
            this._onProgress(
              a,
              s,
              {
                index: this._index,
                vid: this._vid,
                range: [n, o + this._receivedLength],
                startTime: this._startTime,
                endTime: Date.now(),
                priOptions: this._priOptions,
              },
              c,
            );
          }
          if (s) {
            this._runing = false;
            if (this._loadCompleteResolve) {
              this._loadCompleteResolve(
                ei(
                  this._onProgress ? null : a,
                  s,
                  c,
                  c.headers["content-length"],
                  c.headers.age,
                  this._startTime,
                  this._firstRtt,
                  this._index,
                  this._range,
                  this._vid,
                  this._priOptions,
                ),
              );
            }
          } else {
            this._startLoad();
          }
        },
      },
      {
        key: "cancel",
        value: function () {
          if (
            !this._aborted &&
            ((this._aborted = true),
            (this._runing = false),
            F(D(i.prototype), "removeAllListeners", this).call(this),
            this._onCancel &&
              this._onCancel({
                index: this._index,
                range: this._range,
                vid: this._vid,
                priOptions: this._priOptions,
              }),
            this._xhr)
          ) {
            return this._xhr.abort();
          }
        },
      },
      {
        key: "receiveLen",
        get: function () {
          return this._receivedLength;
        },
      },
      {
        key: "running",
        get: function () {
          return this._running;
        },
        set: function (e) {
          this._running = e;
        },
      },
      {
        key: "_getHeaders",
        value: function (e) {
          let t;
          const i = e.getAllResponseHeaders().trim().split(`\r
`);
          const r = {};
          const n = ((e) => {
            let t =
              (typeof Symbol !== "undefined" && e[Symbol.iterator]) ||
              e["@@iterator"];
            if (!t) {
              if (
                Array.isArray(e) ||
                (t = ((e) => {
                  if (e) {
                    if (typeof e === "string") {
                      return j(e, undefined);
                    }
                    let t = Object.prototype.toString.call(e).slice(8, -1);
                    if (t === "Object" && e.constructor) {
                      t = e.constructor.name;
                    }
                    if (t === "Map" || t === "Set") {
                      return Array.from(e);
                    }
                    if (
                      t === "Arguments" ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                    ) {
                      return j(e, undefined);
                    }
                  }
                })(e))
              ) {
                if (t) {
                  e = t;
                }
                let i = 0;
                const r = function () {};
                return {
                  s: r,
                  n: function () {
                    if (i >= e.length) {
                      return {
                        done: true,
                      };
                    }
                    return {
                      done: false,
                      value: e[i++],
                    };
                  },
                  e: function (e) {
                    throw e;
                  },
                  f: r,
                };
              }
              throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }
            let n;
            let a = true;
            let s = false;
            return {
              s: function () {
                t = t.call(e);
              },
              n: function () {
                const e = t.next();
                a = e.done;
                return e;
              },
              e: function (e) {
                s = true;
                n = e;
              },
              f: function () {
                try {
                  if (!(a || t.return == null)) {
                    t.return();
                  }
                } finally {
                  if (s) {
                    throw n;
                  }
                }
              },
            };
          })(i);
          try {
            for (n.s(); !(t = n.n()).done;) {
              const a = t.value.split(": ");
              r[a[0].toLowerCase()] = a.slice(1).join(": ");
            }
          } catch (error) {
            n.e(error);
          } finally {
            n.f();
          }
          return r;
        },
      },
    ],
    [
      {
        key: "isSupported",
        value: function () {
          return typeof XMLHttpRequest !== "undefined";
        },
      },
    ],
  );
  return i;
})(m);
const el = (() => {
  function t(e, i) {
    E(this, t);
    this.promise = $();
    this.alive = !!i.onProgress;
    if (!i.logger) {
      i.logger = new H("Loader");
    }
    this._loaderType = e;
    this._loader = e === loaderType && window.fetch ? new ea() : new es();
    this._config = i;
    this._retryCount = 0;
    this._retryTimer = null;
    this._canceled = false;
    this._retryCheckFunc = i.retryCheckFunc;
    this._logger = i.logger;
  }
  k(t, [
    {
      key: "exec",
      value: function () {
        let e;
        const t = this;
        const _config = this._config;
        const { retry, retryDelay, onRetryError, transformError, ...rest } =
          _config;
        e = R(
          L().mark(function e() {
            let i;
            let h;
            let d;
            return L().wrap(
              function (e) {
                while (true) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      e.prev = 0;
                      e.next = 3;
                      return t._loader.load(rest);
                    case 3:
                      i = e.sent;
                      t.promise.resolve(i);
                      e.next = 27;
                      break;
                    case 7:
                      e.prev = 7;
                      e.t0 = e.catch(0);
                      t._loader.running = false;
                      t._logger.debug("[task request catch err]", e.t0);
                      if (!t._canceled) {
                        e.next = 13;
                        break;
                      }
                      return e.abrupt("return");
                    case 13:
                      e.t0.loaderType = t._loaderType;
                      e.t0.retryCount = t._retryCount;
                      h = e.t0;
                      if (transformError) {
                        h = transformError(h) || h;
                      }
                      if (onRetryError && t._retryCount > 0) {
                        onRetryError(h, t._retryCount, {
                          index: rest.index,
                          vid: rest.vid,
                          range: rest.range,
                          priOptions: rest.priOptions,
                        });
                      }
                      t._retryCount++;
                      d = true;
                      if (t._retryCheckFunc) {
                        d = t._retryCheckFunc(e.t0);
                      }
                      if (!(d && t._retryCount <= retry)) {
                        e.next = 26;
                        break;
                      }
                      clearTimeout(t._retryTimer);
                      t._logger.debug(
                        "[task request setTimeout],retry",
                        t._retryCount,
                        ",retry range,",
                        rest.range,
                      );
                      t._retryTimer = setTimeout(l, retryDelay);
                      return e.abrupt("return");
                    case 26:
                      t.promise.reject(h);
                    case 27:
                    case "end":
                      return e.stop();
                  }
                }
              },
              e,
              null,
              [[0, 7]],
            );
          }),
        );
        var l = function () {
          return e.apply(this, arguments);
        };
        l();
        return this.promise;
      },
    },
    {
      key: "cancel",
      value: async function () {
        clearTimeout(this._retryTimer);
        this._canceled = true;
        this._loader.running = false;
        return this._loader.cancel();
      },
    },
    {
      key: "running",
      get: function () {
        return this._loader && this._loader.running;
      },
    },
    {
      key: "loader",
      get: function () {
        return this._loader;
      },
    },
  ]);
  return t;
})();
const eh = ((e) => {
  O(r, e);
  var i = U(r);
  function r(e) {
    let t;
    E(this, r);
    B((t = i.call(this, e))).type = loaderType;
    B(t)._queue = [];
    B(t)._alive = [];
    B(t)._currentTask = null;
    B(t)._config = undefined;
    t._config = {
      loaderType,
      retry: 0,
      retryDelay: 0,
      timeout: 0,
      request: null,
      onTimeout: undefined,
      onProgress: undefined,
      onRetryError: undefined,
      transformRequest: undefined,
      transformResponse: undefined,
      transformError: undefined,
      responseType: J,
      range: undefined,
      url: "",
      params: undefined,
      method: "GET",
      headers: {},
      body: undefined,
      mode: undefined,
      credentials: undefined,
      cache: undefined,
      redirect: undefined,
      referrer: undefined,
      referrerPolicy: undefined,
      integrity: undefined,
      onProcessMinLen: 0,
      ...e,
    };
    if (!(t._config.loaderType !== "xhr" && ea.isSupported())) {
      t.type = "xhr";
    }
    t.log = e.logger;
    return t;
  }
  k(
    r,
    [
      {
        key: "isFetch",
        value: function () {
          return this.type === loaderType;
        },
      },
      {
        key: "load",
        value: function (e) {
          const t = this;
          let i =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : {};
          if (typeof e !== "string" && e) {
            i = e;
          } else {
            i.url = e || i.url || this._config.url;
          }
          if (
            (i = {
              ...this._config,
              ...i,
            }).params
          ) {
            i.params = {
              ...i.params,
            };
          }
          if (i.headers && Z(i.headers)) {
            i.headers = {
              ...i.headers,
            };
          }
          if (i.body && Z(i.body)) {
            i.body = {
              ...i.body,
            };
          }
          if (i.transformRequest) {
            i = i.transformRequest(i) || i;
          }
          i.logger = this.log;
          const r = new el(this.type, i);
          r.loader.on(en, function (e) {
            t.emit(en, e);
          });
          this._queue.push(r);
          if (
            !(
              this._queue.length !== 1 ||
              (this._currentTask && this._currentTask.running)
            )
          ) {
            this._processTask();
          }
          return r.promise;
        },
      },
      {
        key: "cancel",
        value: async function () {
          let t;
          t = this._queue
            .map((e) => e.cancel())
            .concat(this._alive.map((e) => e.cancel()));
          if (this._currentTask) {
            t.push(this._currentTask.cancel());
          }
          this._queue = [];
          this._alive = [];
          await Promise.all(t);
          await (function () {
            const e =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : 0;
            return new Promise((resolve) => setTimeout(resolve, e));
          })();
        },
      },
      {
        key: "_processTask",
        value: function () {
          const e = this;
          this._currentTask = this._queue.shift();
          if (this._currentTask) {
            if (this._currentTask.alive) {
              this._alive.push(this._currentTask);
            }
            const t = this._currentTask.exec().catch((e) => {});
            if (t && typeof t.finally === "function") {
              t.finally(() => {
                let t;
                let i;
                if (
                  (t = e._currentTask) != null &&
                  t.alive &&
                  ((i = e._alive) == null ? undefined : i.length) > 0
                ) {
                  e._alive = e._alive.filter((t) => t && t !== e._currentTask);
                }
                e._processTask();
              });
            }
          }
        },
      },
    ],
    [
      {
        key: "isFetchSupport",
        value: function () {
          return ea.isSupported();
        },
      },
    ],
  );
  return r;
})(m);
class ed {
  static getDefaultConfig() {
    return {
      PCDNBufferControl: false,
      PCDNCntControl: false,
      estPTcontrol: false,
      minPCDNInBuffer: 8,
      maxPCDNInBuffer: 12,
      minPCDNOutBuffer: 3,
      maxPCDNOutBuffer: 6,
      safePCDNInFactor: 0.1,
      safePCDNOutFactor: 0.4,
      alpha: 0.5,
      estPlayTime: 12,
      minBandwidth: 1000000,
    };
  }
  constructor(e, t, i, r) {
    this.config = ed.getDefaultConfig();
    Object.keys(r).map((e) => {
      if (r[e] !== undefined && r[e] !== null) {
        this.config[e] = r[e];
      }
    });
    this.duration = i;
    this.player = e;
    this.updateBitrate(t);
    this.curPCDNInBuffer = this.config.maxPCDNInBuffer;
    this.curPCDNOutBuffer = this.config.maxPCDNOutBuffer;
    this.PCDNChangeCnt = 0;
  }
  updateBitrate(e) {
    this.bitrate = e;
    if (!this.bitrate) {
      this.bitrate = this.config.minBandwidth;
    }
  }
  getPCDNInBuffer() {
    let { config, player, bitrate } = this;
    if (!config.PCDNBufferControl) {
      return null;
    }
    let { estPlayTime } = config;
    let n = estPlayTime;
    if (config.estPTcontrol) {
      n = Math.min(
        estPlayTime,
        Math.max(
          0,
          this.duration -
            ((player == null ? undefined : player.currentTime) || 0),
        ),
      );
    }
    let { safePCDNInFactor, minBandwidth, maxPCDNInBuffer, minPCDNInBuffer } =
      config;
    let h =
      safePCDNInFactor *
      Math.max(
        (player == null ? undefined : player.avgSpeedPCDN) * 1024 || 0,
        minBandwidth,
      );
    let d = bitrate > 0 ? (1 - h / bitrate) * n : 0;
    this.curPCDNInBuffer = Math.min(
      maxPCDNInBuffer,
      Math.max(minPCDNInBuffer, d),
    );
    return this.curPCDNInBuffer;
  }
  getPCDNOutBuffer() {
    let { config, player, bitrate } = this;
    if (!config.PCDNBufferControl) {
      return null;
    }
    let { estPlayTime } = config;
    let n = estPlayTime;
    if (config.estPTcontrol) {
      n = Math.min(
        estPlayTime,
        Math.max(
          0,
          this.duration -
            ((player == null ? undefined : player.currentTime) || 0),
        ),
      );
    }
    let {
      safePCDNOutFactor,
      minBandwidth,
      maxPCDNOutBuffer,
      minPCDNOutBuffer,
    } = config;
    let h =
      safePCDNOutFactor *
      Math.max(
        (player == null ? undefined : player.avgSpeedPCDN) * 1024 || 0,
        minBandwidth,
      );
    let d = bitrate > 0 ? (1 - h / bitrate) * n : 0;
    this.curPCDNOutBuffer = Math.min(
      maxPCDNOutBuffer,
      Math.max(minPCDNOutBuffer, d),
    );
    return this.curPCDNOutBuffer;
  }
  getPCDNChangeCnt() {
    let { PCDNCntControl, alpha } = this.config;
    let { curPCDNInBuffer, player } = this;
    let n = (player == null ? undefined : player.bufferedPoint) || null;
    let a = n && n.end ? n.end - player.currentTime : 0;
    if (PCDNCntControl) {
      if (a > curPCDNInBuffer + (this.PCDNChangeCnt - 1) * alpha) {
        this.PCDNChangeCnt++;
      }
    } else if (a >= curPCDNInBuffer && this.PCDNChangeCnt < 2) {
      this.PCDNChangeCnt++;
    }
    return this.PCDNChangeCnt;
  }
}
let eu = new Map();
let ec = class e {
  static get pluginName() {
    return "PCDN";
  }
  static get pcdnReqCnt() {
    let { pcdn_tracker_request_cnt, pcdn_tracker_success_cnt } = e;
    e.pcdn_tracker_request_cnt = 0;
    e.pcdn_tracker_success_cnt = 0;
    return {
      pcdn_tracker_request_cnt,
      pcdn_tracker_failed_cnt:
        pcdn_tracker_request_cnt - pcdn_tracker_success_cnt,
    };
  }
  static getDefaultConfig() {
    return {
      trackerUrl: "",
      loaderType,
      responseType: W,
      mode: "cors",
      method: "POST",
      retry: 0,
      retryDelay: 3000,
      timeout: 5000,
      node_num: 5,
      client_info: null,
      maxCnt: 30,
      withReferer: 0,
      NULLNodeTimeStep: 60000,
      ErrorTimeStep: 15000,
    };
  }
  constructor(t, i, r, n) {
    var a;
    var s;
    this.options = e.getDefaultConfig();
    Object.keys(t).map((e) => {
      if (t[e] !== undefined && t[e] !== null) {
        this.options[e] = t[e];
      }
    });
    if (!(this.options.productConfig && this.options.productConfig.app_id)) {
      console.error("productConfig must has");
    }
    this.loader = new eh(this.options);
    this.resetTrackeArgs();
    this._lastFileInfo = null;
    this.lastfetchNodeTime = -1;
    this._lastRetFileKey = null;
    this._minUpdateNodeStep = this.options.ErrorTimeStep;
    if (
      (s = (a = this.options) == null ? undefined : a.adaptPCDNConfig) !=
        null &&
      s.PCDNBufferControl
    ) {
      this.pcdnAdapt = new ed(i, r, n, this.options.adaptPCDNConfig);
    }
  }
  get isOpenAdaptPCDN() {
    return !!this.pcdnAdapt;
  }
  get curPCDNInBuffer() {
    return this.pcdnAdapt.curPCDNInBuffer;
  }
  getPCDNInBuffer() {
    let e;
    if ((e = this.pcdnAdapt) == null) {
      return undefined;
    }
    return e.getPCDNInBuffer();
  }
  get curPCDNOutBuffer() {
    return this.pcdnAdapt.curPCDNOutBuffer;
  }
  getPCDNOutBuffer() {
    let e;
    if ((e = this.pcdnAdapt) == null) {
      return undefined;
    }
    return e.getPCDNOutBuffer();
  }
  get curPCDNChangeCnt() {
    return this.pcdnAdapt.PCDNChangeCnt;
  }
  getPCDNChangeCnt() {
    let e;
    if ((e = this.pcdnAdapt) == null) {
      return undefined;
    }
    return e.getPCDNChangeCnt();
  }
  resetTrackeArgs(e) {
    this.trackeArgs = {
      fid: null,
      trace_id: null,
      req_times: (e == null ? undefined : e.req_times) || 0,
      resp_times: (e == null ? undefined : e.resp_times) || 0,
      token: null,
      node_num: this.options.node_num,
      client_info: this.options.client_info,
    };
  }
  static async gainPCDNNode(t, i, r, n) {
    let a;
    let s;
    let o;
    let l = e.getDefaultConfig();
    Object.keys(i).map((e) => {
      if (i[e] !== undefined && i[e] !== null) {
        l[e] = i[e];
      }
    });
    if (!(n && n.app_id)) {
      console.error("productConfig must has");
    }
    let h = new $();
    if (r) {
      r.byterate = eg(r.bitrate);
      delete r.bitrate;
    } else {
      h.reject("video fileInfo need set");
    }
    let d = JSON.stringify(
      Object.assign(
        n,
        {
          file_info: r,
        },
        {
          node_num: (i == null ? undefined : i.node_num) || 3,
        },
      ),
    );
    let u = new eh(l);
    try {
      e.pcdn_tracker_request_cnt++;
      let i = await u.load(t, {
        body: d,
      });
      if (
        i.done &&
        ((o =
          (s = (a = i.data) == null ? undefined : a.Result) == null
            ? undefined
            : s.nodes) == null
          ? undefined
          : o.length) > 0
      ) {
        e.pcdn_tracker_success_cnt++;
      }
      h.resolve(i);
    } catch (error) {
      h.reject(
        (error == null ? undefined : error.message) || "get pcdnNode error",
      );
    }
    return h;
  }
  getPCDNNode(e, t, i) {
    let r;
    let n = eg(t);
    let a = eu.get(ef(e, n));
    let s = new $();
    if (
      !(a != null && a.nodes) ||
      ((r = a == null ? undefined : a.nodes) == null ? undefined : r.length) < 1
    ) {
      this.fetchPCDNNode(null, null, i)
        .then((e) => {
          s.resolve(e);
        })
        .catch((e) => {
          s.reject(e);
        });
    } else {
      a.fromCache = true;
      s.resolve(a);
    }
    return s;
  }
  removePCDNNode(e, t, i) {
    let r = eg(t);
    let n = eu.get(ef(e, r));
    let a = n == null ? undefined : n.nodes;
    if (a) {
      if (i) {
        n.nodes = a.filter((e) => e && i.indexOf(e.url) < 0);
      } else {
        a.shift();
      }
      eu.set(ef(e, r), n);
    }
    if (!(a && a.length)) {
      this.fetchPCDNNode()
        .then()
        .catch(() => {});
    }
  }
  async fetchPCDNNode(t, i, req_id) {
    let n;
    let a;
    let s = new $();
    if (i) {
      i.byterate = eg(i.bitrate);
      let e = eu.get(ef(i.vid, i.byterate));
      if (
        ((n = e == null ? undefined : e.nodes) == null ? undefined : n.length) >
        0
      ) {
        e.fromCache = true;
        s.resolve(e);
        return s;
      }
      delete i.bitrate;
      this._lastFileInfo = i;
    } else {
      i = this._lastFileInfo;
    }
    if (!i) {
      s.resolve(null);
      return s;
    }
    let o = false;
    let l = ef(i.vid, i.byterate);
    if (this._lastRetFileKey !== l) {
      this.resetTrackeArgs();
      o = true;
    }
    if (Date.now() - this.lastfetchNodeTime < this._minUpdateNodeStep && !o) {
      s.resolve(null);
      return s;
    }
    this.lastfetchNodeTime = Date.now();
    this._lastRetFileKey = l;
    if (i.sfid) {
      i.version = 1;
    } else if (i.vid) {
      i.version = 2;
    }
    if (this.options.withReferer) {
      i.with_referer = this.options.withReferer;
    }
    let h = JSON.stringify(
      Object.assign(
        this.options.productConfig,
        {
          file_info: i,
        },
        this.trackeArgs,
        {
          req_id,
        },
      ),
    );
    if (this.trackeArgs.req_times >= this.options.maxCnt) {
      s.resolve(null);
      return s;
    }
    if (!this.loader) {
      this.loader = new eh(this.options);
    }
    this.trackeArgs.req_times += 1;
    try {
      e.pcdn_tracker_request_cnt++;
      let r = await this.loader.load(t || this.options.trackerUrl, {
        body: h,
      });
      let nodes = null;
      if (r) {
        this.trackeArgs.resp_times += 1;
        let t = 8 * i.byterate;
        if (r.done && (a = r.data) != null && a.Result) {
          let a = r.data.Result;
          if ((nodes = a.nodes) && nodes.length > 0) {
            e.pcdn_tracker_success_cnt++;
          } else {
            this._minUpdateNodeStep = this.options.NULLNodeTimeStep;
          }
          nodes.map((e) => {
            e.vid = i.vid;
            e.bitrate = t;
          });
          let { fid, trace_id, req_id } = a;
          let d = {
            nodes,
            fid,
            vid: i.vid,
            trace_id,
            req_id,
            bitrate: t,
          };
          let u = ef(i.vid, i.byterate);
          eu.set(u, d);
          this.trackeArgs.fid = a.fid;
          this.trackeArgs.trace_id = a.trace_id;
          this.trackeArgs.token = a.token;
          s.resolve(d);
        } else {
          this._minUpdateNodeStep = this.options.ErrorTimeStep;
          s.reject(r);
        }
      }
    } catch (error) {
      this._minUpdateNodeStep = this.options.ErrorTimeStep;
      console.warn("tracker catch ERR,", error);
      s.reject(error);
    }
    return s;
  }
};
function ef(e, t) {
  return `${e}-${t}`;
}
function eg(e) {
  return Math.floor(e / 8);
}
s(ec, "pcdn_tracker_request_cnt", 0);
s(ec, "pcdn_tracker_success_cnt", 0);
let PRELOAD_NEXT = "PRELOAD_NEXT";
let PRELOAD_SEG_DONE = "PRELOAD_SEG_DONE";
let STATES = {
  PREPARE: "PREPARE",
  IDLE: "IDLE",
  PRELOADING: "PRELOADING",
  FINISH: "FINISH",
};
let ONE_STEP_DONE = "ONE_STEP_DONE";
let CACHE_TYPES = {
  INDEXDB: 0,
  MEMORY: 1,
};
let DOWN_STATES = {
  FAIL: -1,
  SUCCESS: 0,
  DOWNLOADING: 1,
};
export let VTYPES = {
  MP4: "MP4",
  DASH: "DASH",
  HLS: "HLS",
};
let eR = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      CACHE_TYPES,
      DOWN_STATES,
      MEDIA_FORMAT: {
        DASH: 0,
        MP4: 1,
      },
      MEDIA_TYPES: {
        VIDEO: 0,
        AUDIO: 1,
        MIXED: 2,
      },
      ONE_STEP_DONE,
      PRELOAD_NEXT,
      PRELOAD_SEG_DONE,
      PRELOAD_TYPES: {
        DURATION: 0,
        SIZE: 1,
      },
      STATES,
      VTYPES,
    },
    Symbol.toStringTag,
    {
      value: "Module",
    },
  ),
);
class eE extends e_.A {
  constructor(e, t, i, r, n) {
    super();
    this.state = STATES.PREPARE;
    this.options = e || {};
    this.logger = e.logger || function () {};
    this._preloadManager = t;
    this.player = t.player;
    let { handlers, predictInst, readyPromise } = i;
    this._predictInst = predictInst;
    this._handlers = handlers;
    this._predictInstReadyPromise = readyPromise;
    this._toLoadList = [];
    this.retryCount = 0;
    this._cachedHandler = r;
    this._cachedDataHandler = n;
    this.cnt = 0;
  }
  start() {
    let e = new ey.Iz();
    this._handlers
      .start(this.options)
      .then((t) => {
        t.onObtain().then((i) => {
          this._predictInstReadyPromise.then(() => {
            this._predictInst.updateMediaInfos(i);
            let r = this._predictInst.preloadPredict(this.options);
            let { cachedData } = this._predictInst;
            this._cachedDataHandler({
              vid: this.options.vid,
              data: cachedData,
            });
            let a = Object.assign(r, this.options);
            t.onTransform(a).then((t) => {
              this._toLoadList = t;
              e.resolve(t);
            });
          });
        });
      })
      .catch(() => {
        e.reject(Error("preload unit start error"));
      });
    return e;
  }
  preloadSeg() {
    if (this._toLoadList.length === 0) {
      this.state = STATES.FINISH;
      this.emit(PRELOAD_SEG_DONE, true);
      return;
    }
    this.state = "PRELOADING";
    let e = this._toLoadList.shift();
    this._handlers
      .onRequest(e, (t) => {
        let i = {
          ...e.extData,
          ...t,
        };
        this._cachedHandler(i);
      })
      .then(() => {
        this.state = STATES.IDLE;
        this.emit(PRELOAD_SEG_DONE);
      })
      .catch(() => {
        this.requestError();
        this.emit(PRELOAD_SEG_DONE, false);
      });
  }
  requestError() {
    this.retryCount++;
    this.state = STATES.IDLE;
    if (this.retryCount >= 10) {
      this.state = STATES.FINISH;
    }
    this.emit(ONE_STEP_DONE);
    this.logger("preload request error");
  }
  cancelLoading() {
    this._toLoadList = [];
  }
  destroy() {
    this.removeAllListeners();
  }
}
let eC = (() => {
  try {
    if (typeof indexedDB !== "undefined") {
      return indexedDB;
    }
  } catch {}
})();
function ek(e, t) {
  if (!t) {
    t = () => {};
  }
  if (t) {
    e.then(
      (e) => {
        t(null, e);
      },
      (e) => {
        t(e);
      },
    );
  }
}
function eI(e) {
  if (typeof e !== "string") {
    console.warn(`${e} used as a key, but it is not a string.`);
    e = String(e);
  }
  return e;
}
let eO = {};
let eD = "readonly";
let ew = "readwrite";
function eM(e) {
  let t = eO[e.name];
  let i = {};
  i.promise = new Promise((resolve, reject) => {
    i.resolve = resolve;
    i.reject = reject;
  });
  t.deferredOperations.push(i);
  if (t.dbReady) {
    t.dbReady = t.dbReady.then(() => i.promise);
  } else {
    t.dbReady = i.promise;
  }
}
function eN(e, t) {
  return new Promise((resolve, reject) => {
    eO[e.name] = eO[e.name] || eU();
    if (e.db) {
      if (!t) {
        return resolve(e.db);
      } else {
        eM(e);
        e.db.close();
      }
    }
    let n = [e.name];
    if (t) {
      n.push(e.version);
    }
    let a = eC == null ? undefined : eC.open.apply(eC, n);
    if (t) {
      a.onupgradeneeded = function (t) {
        let a_result = a.result;
        try {
          a_result.createObjectStore(e.storeName);
        } catch (error) {
          if (error.name === "ConstraintError") {
            let { oldVersion, newVersion } = error;
            console.warn(`The database "${e.name}" has been upgraded from version ${oldVersion} to
            version ${newVersion}, but the storage "${e.storeName}" already exists.`);
          } else {
            throw error;
          }
        }
      };
    }
    a.onerror = function (e) {
      e.preventDefault();
      reject(a.error);
    };
    a.onsuccess = function () {
      let t;
      resolve(a.result);
      if ((t = eO[e.name].deferredOperations.pop())) {
        t.resolve();
        t.promise;
      }
    };
  });
}
function eA(e, t) {
  if (!e.db) {
    return true;
  }
  let i = !e.db.objectStoreNames.contains(e.storeName);
  let r = e.version < e.db.version;
  let n = e.version > e.db.version;
  if (r) {
    if (e.version !== t) {
      console.warn(`The database "${e.name}" can't be downgraded from version ${e.db.version} to
      version ${e.version}.`);
    }
    e.version = e.db.version;
  }
  if (n || i) {
    if (i) {
      let t = e.db.version + 1;
      if (t > e.version) {
        e.version = t;
      }
    }
    return true;
  }
  return false;
}
function eB(e, t, i, r = 1) {
  let n;
  try {
    let r = (n = e.db) == null ? undefined : n.transaction(e.storeName, t);
    i(null, r);
  } catch (error) {
    if (
      r > 0 &&
      (!e.db ||
        error.name === "InvalidStateError" ||
        error.name === "NotFoundError")
    ) {
      return Promise.resolve()
        .then(() => {
          if (
            !e.db ||
            (error.name === "NotFoundError" &&
              !e.db.objectStoreNames.contains(e.storeName) &&
              e.version <= e.db.version)
          ) {
            if (e.db) {
              e.version = e.db.version + 1;
            }
            return eN(e, true);
          }
        })
        .then(() =>
          ((e) => {
            eM(e);
            let t = eO[e.name];
            let { forages } = t;
            for (let e = 0; e < forages.length; e++) {
              let forage = forages[e];
              if (forage._dbInfo.db) {
                forage._dbInfo.db.close();
                forage._dbInfo.db = null;
              }
            }
            e.db = null;
            return eN(e, false)
              .then((t) => {
                e.db = t;
                if (eA(e)) {
                  return eN(e, true);
                }
                return t;
              })
              .then((r) => {
                e.db = t.db = r;
                for (let e = 0; e < forages.length; e++) {
                  forages[e]._dbInfo.db = r;
                }
              })
              .catch((t) => {
                var i;
                var r;
                let n;
                i = e;
                r = t;
                if ((n = eO[i.name].deferredOperations.pop())) {
                  n.reject(r);
                  n.promise;
                }
                throw t;
              });
          })(e).then(() => {
            eB(e, t, i, r - 1);
          }),
        )
        .catch(i);
    }
    i(error);
  }
}
function eU() {
  return {
    forages: [],
    db: null,
    dbReady: null,
    deferredOperations: [],
  };
}
class eF {
  ready() {
    return this._ready;
  }
  _initStorage(e) {
    let t = this;
    t._defaultConfig = e;
    let i = {
      db: null,
      name: "",
      version: "",
      storeName: "",
    };
    if (e) {
      for (let t in e) {
        i[t] = e[t];
      }
    }
    let r = eO[i.name];
    if (!r) {
      r = eU();
      eO[i.name] = r;
    }
    r.forages.push(t);
    if (!t._initReady) {
      t._initReady = t.ready;
      t._ready = t._fullyReady;
    }
    let n = [];
    function a() {
      return Promise.resolve();
    }
    for (let e = 0; e < r.forages.length; e++) {
      let forage = r.forages[e];
      if (forage !== t) {
        n.push(forage._initReady().catch(a));
      }
    }
    let s = r.forages.slice(0);
    t._ready = Promise.all(n)
      .then(() => {
        i.db = r.db;
        return eN(i, false);
      })
      .then((e) => {
        i.db = e;
        if (eA(i, t._defaultConfig.version)) {
          return eN(i, true);
        }
        return e;
      })
      .then((e) => {
        i.db = r.db = e;
        t._dbInfo = i;
        for (let e = 0; e < s.length; e++) {
          let r = s[e];
          if (r !== t) {
            r._dbInfo.db = i.db;
            r._dbInfo.version = i.version;
          }
        }
      });
    return t._ready;
  }
  get probeSupport() {
    try {
      if (!(eC != null && eC.open)) {
        return false;
      }
      let e =
        /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) &&
        !/Chrome/.test(navigator.userAgent) &&
        !/BlackBerry/.test(navigator.platform);
      let t =
        typeof fetch === "function" &&
        fetch.toString().indexOf("[native code") !== -1;
      return (
        (!e || t) &&
        typeof indexedDB !== "undefined" &&
        typeof IDBKeyRange !== "undefined"
      );
    } catch {
      return false;
    }
  }
  getItem(e, t) {
    let i = this;
    e = eI(e);
    let r = new Promise((resolve, reject) => {
      i.ready()
        .then(() => {
          eB(i._dbInfo, eD, function (n, a) {
            if (n) {
              return reject(n);
            }
            try {
              let n = a.objectStore(i._dbInfo.storeName).get(e);
              n.onsuccess = function () {
                let n_result = n.result;
                if (n_result === undefined) {
                  n_result = null;
                }
                resolve(n_result);
              };
              n.onerror = function () {
                reject(n.error);
              };
            } catch (error) {
              reject(error);
            }
          });
        })
        .catch(reject);
    });
    ek(r, t);
    return r;
  }
  setItem(e, t, i) {
    let r = this;
    e = eI(e);
    let n = new Promise((resolve, reject) => {
      r.ready()
        .then(() => {
          r._dbInfo;
          return t;
        })
        .then((t) => {
          eB(r._dbInfo, ew, function (a, s) {
            if (a) {
              return reject(a);
            }
            try {
              let a = s.objectStore(r._dbInfo.storeName);
              if (t === null) {
                t = undefined;
              }
              let o = a.put(t, e);
              s.oncomplete = function () {
                if (t === undefined) {
                  t = null;
                }
                resolve(t);
              };
              s.onabort = s.onerror = function () {
                let e;
                let t = o.error
                  ? o.error
                  : (e = o.transaction) == null
                    ? undefined
                    : e.error;
                reject(t);
              };
            } catch (error) {
              reject(error);
            }
          });
        })
        .catch(reject);
    });
    ek(n, i);
    return n;
  }
  removeItem(e, t) {
    let i = this;
    e = eI(e);
    let r = new Promise((resolve, reject) => {
      i.ready()
        .then(() => {
          eB(i._dbInfo, ew, function (n, a) {
            if (n) {
              return reject(n);
            }
            try {
              let n = a.objectStore(i._dbInfo.storeName).delete(e);
              a.oncomplete = function () {
                resolve();
              };
              a.onerror = function () {
                reject(n.error);
              };
              a.onabort = function () {
                let e;
                let t = n.error
                  ? n.error
                  : (e = n.transaction) == null
                    ? undefined
                    : e.error;
                reject(t);
              };
            } catch (error) {
              reject(error);
            }
          });
        })
        .catch(reject);
    });
    ek(r, t);
    return r;
  }
  clear(e) {
    let t = this;
    let i = new Promise((resolve, reject) => {
      t.ready()
        .then(() => {
          eB(t._dbInfo, ew, function (r, n) {
            if (r) {
              return reject(r);
            }
            try {
              let r = n.objectStore(t._dbInfo.storeName).clear();
              n.oncomplete = function () {
                resolve();
              };
              n.onabort = n.onerror = function () {
                let e;
                let t = r.error
                  ? r.error
                  : (e = r.transaction) == null
                    ? undefined
                    : e.error;
                reject(t);
              };
            } catch (error) {
              reject(error);
            }
          });
        })
        .catch(reject);
    });
    ek(i, e);
    return i;
  }
  length(e) {
    let t = this;
    let i = new Promise((resolve, reject) => {
      t.ready()
        .then(() => {
          eB(t._dbInfo, eD, function (r, n) {
            if (r) {
              return reject(r);
            }
            try {
              let r = n.objectStore(t._dbInfo.storeName).count();
              r.onsuccess = function () {
                resolve(r.result);
              };
              r.onerror = function () {
                reject(r.error);
              };
            } catch (error) {
              reject(error);
            }
          });
        })
        .catch(reject);
    });
    ek(i, e);
    return i;
  }
  all(e) {
    let t = this;
    let i = new Promise((resolve, reject) => {
      t.ready()
        .then(() => {
          eB(t._dbInfo, eD, function (r, n) {
            if (r) {
              return reject(r);
            }
            try {
              let r = n.objectStore(t._dbInfo.storeName).openCursor();
              let a = [];
              r.onsuccess = function () {
                let r_result = r.result;
                if (r_result) {
                  a.push({
                    key: r_result.key,
                    value: r_result.value,
                  });
                  r_result.continue();
                } else {
                  resolve(a);
                }
              };
              r.onerror = function () {
                reject(r.error);
              };
            } catch (error) {
              reject(error);
            }
          });
        })
        .catch(reject);
    });
    ek(i, e);
    return i;
  }
  _fullyReady(e) {
    let t = this;
    let i = t._initReady().then(() => {
      let e = eO[t._dbInfo.name];
      if (e != null && e.dbReady) {
        return e.dbReady;
      }
    });
    if (typeof e === "function") {
      i.then(e);
    }
    if (typeof e === "function") {
      i.catch(e);
    }
    return i;
  }
}
class ej {
  constructor() {
    this.key = "";
    this.store = {};
  }
  _initStorage(e) {
    let { name } = e;
    let { storeName } = e;
    let r = `${name}_${storeName}`;
    this.key = r;
    if (!(window[r] && typeof window[r] === "object")) {
      window[r] = {};
    }
    this.store = window[r];
    return Promise.resolve();
  }
  getItem(e, t) {
    let i = this.store[e];
    if (i === undefined) {
      i = null;
    }
    return this._internalPromise(t, i);
  }
  setItem(e, t, i) {
    this.store[e] = t;
    return this._internalPromise(i);
  }
  removeItem(e, t) {
    delete this.store[e];
    return this._internalPromise(t);
  }
  clear(e) {
    this.store = {};
    window[this.key] = {};
    return this._internalPromise(e);
  }
  length(e) {
    let length = Object.keys(this.store).length;
    return this._internalPromise(e, length);
  }
  _internalPromise(e, t) {
    let i = t ? Promise.resolve(t) : Promise.resolve();
    ek(i, e);
    return i;
  }
  all(e) {
    let t = [];
    let i = Object.keys(this.store);
    for (let e = 0; e < i.length; e++) {
      let r = i[e];
      t.push({
        key: r,
        value: this.store[r],
      });
    }
    return this._internalPromise(e, t);
  }
  probeSupport() {
    return true;
  }
}
let eG = {
  description: "",
  name: "__PRE_CACHE__",
  storeName: "keyvaluepairs",
  version: 1,
};
let e$ = "__PRE_CACHE__KEYS";
class eV {
  constructor(e, t) {
    let i = t === CACHE_TYPES.MEMORY ? ej : eF;
    this._driver = new i();
    this._driver._initStorage(eG).catch(() => {});
    this._hasIdbForbidden = false;
    this._maxCache = !e || e <= 0 ? 200 : e;
    this.setMaxCache(this._maxCache);
    this._allCachedKeys = {};
    this._allCachedTimeKeys = {};
    this.getCachedKeysFromLocal();
    this._readyPromise = new ey.Iz();
    this.init();
  }
  getCachedKeysFromLocal() {
    let e = ey.Lr.getItem(e$);
    if (e) {
      let t = e.split("|");
      for (let e = 0; e < t.length; e++) {
        let i = t[e];
        let { time, cachedKey } = this._getCacheKeyInfos(i);
        this._allCachedKeys[cachedKey] = 1;
        this._allCachedTimeKeys[cachedKey] = time;
      }
    }
  }
  _getCacheKeyInfos(cachedKey) {
    let t;
    let i = cachedKey.split("$");
    if (i.length === 2) {
      t = i[0];
      cachedKey = i[1];
    }
    return {
      time: t,
      cachedKey,
    };
  }
  writeCachedKeysToLocal(e) {
    let t = [];
    this._allCachedKeys = {};
    this._allCachedTimeKeys = {};
    for (let i = 0; i < e.length; i++) {
      let r = e[i].key;
      let { time, cachedKey } = this._getCacheKeyInfos(r);
      this._allCachedKeys[cachedKey] = 1;
      this._allCachedTimeKeys[cachedKey] = time;
      t.push(r);
    }
    let i = t.join("|");
    ey.Lr.setItem(e$, i);
  }
  init() {
    this._driver
      .setItem("test", "test")
      .then(() => {})
      .catch(() => {
        this._hasIdbForbidden = true;
      })
      .finally(() => {
        this._driver.removeItem("test").catch(() => {});
        if (this._hasIdbForbidden) {
          this._driver = new ej();
          this._driver._initStorage(eG);
        }
        this._getAll();
        this._readyPromise.resolve();
      });
  }
  _getAll() {
    this._driver
      .all()
      .then((e) => {
        let t = e.length - this._maxCache;
        let i = e;
        if (t > 0) {
          let r = e.slice(0, t);
          i = e.slice(t);
          for (let e = 0; e < r.length; e++) {
            this.removeItem(r[e].key).then(() => {});
          }
        }
        this.writeCachedKeysToLocal(i);
      })
      .catch(() => {});
  }
  getItem(e, t) {
    if (!this.hasItem(e)) {
      return Promise.resolve(false);
    }
    let { timeKey } = this._getTimeKey(e);
    return this._driver.getItem(timeKey, t);
  }
  setItem(e, t, i) {
    let { timeKey } = this._getTimeKey(e);
    if (timeKey) {
      this.removeItem(e);
    }
    let n = new Date().getTime();
    this._allCachedKeys[e] = 1;
    this._allCachedTimeKeys[e] = n;
    let a = this._genTimeKey(e, n);
    i = i
      ? () => {
          this._getAll();
          i();
        }
      : () => {
          this._getAll();
        };
    return this._driver.setItem(a, t, i);
  }
  _getTimeKey(e) {
    let t = this._allCachedTimeKeys[e];
    let timeKey = e;
    if (t) {
      timeKey = this._genTimeKey(e, t);
    }
    return {
      timeKey,
      time: t,
    };
  }
  _genTimeKey(e, t) {
    return `${t}$${e}`;
  }
  removeItem(e, t) {
    let { timeKey } = this._getTimeKey(e);
    let r = this._driver.removeItem(timeKey, t);
    delete this._allCachedKeys[e];
    delete this._allCachedTimeKeys[e];
    return r;
  }
  hasItem(e) {
    return !!this._allCachedKeys[e];
  }
  clear(e) {
    return this._driver.clear(e);
  }
  length(e) {
    return this._driver.length(e);
  }
  setMaxCache(e) {
    if (typeof e === "number" && e > 0) {
      this._maxCache = e;
    }
  }
}
let eH = class e extends e_.A {
  constructor(e, t, i = null) {
    super();
    this._preloadDataList = [];
    this._currentPreloadInst = null;
    this.autoPreload = e.autoPreload || false;
    this._autoCheck = e.autoCheck || {
      enable: false,
      interval: 1000,
    };
    this._onPreloadNext = this.onPreloadNextReady.bind(this);
    this.on(PRELOAD_NEXT, this._onPreloadNext);
    this._preloaderConfigs = {};
    this.update(e, t, i);
    this._cacheInst = new eV(e.preloadMaxCacheCount, e.preloadCacheType || 0);
    this._preloadCacheProgress = {};
    this._ptag_ = true;
    this._cachedDatas = {};
    this._taskIntervalId = null;
  }
  setMaxCache(e) {
    let t;
    if ((t = this._cacheInst) != null) {
      t.setMaxCache(e);
    }
  }
  startCheckTask() {
    let { _autoCheck, _preloadDataList } = this;
    if (this._taskIntervalId) {
      window.clearTimeout(this._taskIntervalId);
      this._taskIntervalId = null;
    }
    if (_preloadDataList.length !== 0) {
      if (this._checkIfCanPreload()) {
        this.onPreloadNext();
      }
      this._taskIntervalId = window.setTimeout(() => {
        this.startCheckTask();
      }, _autoCheck.interval || 1000);
    }
  }
  stopCheckTask() {
    if (this._taskIntervalId) {
      window.clearTimeout(this._taskIntervalId);
      this._taskIntervalId = null;
    }
  }
  _checkIfCanPreload() {
    if (this._currentPreloadInst == null && this._preloadDataList.length > 0) {
      let e = this._preloadDataList[0].data;
      if (e.payload) {
        let t = this._getPreloaderKey(e);
        let i = this._preloaderConfigs[t];
        if (i == null || !i.handlers) {
          console.warn("need to set vtype, no preloader", e);
          this.stopCheckTask();
          return false;
        }
        {
          let { checkIfCanPreload } = i.handlers;
          if (checkIfCanPreload) {
            return checkIfCanPreload(e);
          }
          this.stopCheckTask();
          return false;
        }
      }
    }
    return false;
  }
  _getPreloaderKey(e) {
    if (e.vtype) {
      return e.vtype;
    }
    return "DEFAULT";
  }
  update(e, handlers, predictInst) {
    if (!predictInst) {
      throw Error("PreloaderManager predictInst is null");
    }
    let r = this._getPreloaderKey(e);
    this._preloaderConfigs[r] = {
      predictInst,
      readyPromise: predictInst.init(e),
      handlers,
    };
  }
  get cachedDatas() {
    return this._cachedDatas;
  }
  onCacheSegment(e) {
    let { vid, format, cacheKey, total, loaded, isInitSegment, mediaType } = e;
    let l = this.getProgressCacheKey(vid, format, mediaType);
    let h = this._preloadCacheProgress[l];
    if (!h) {
      h = this._preloadCacheProgress[l] = {};
    }
    h[cacheKey] = {
      total,
      loaded,
      isInitSegment,
    };
  }
  onCachePredict(e) {
    let { vid, data } = e;
    if (vid && data) {
      this._cachedDatas[vid] = data;
    }
  }
  getProgressCacheKey(e, t, i) {
    return `${e}-${t}-${i}`;
  }
  onPreloadNextReady() {
    this.onPreloadNext();
  }
  onPreloadSegDone() {
    if (this.autoPreload) {
      this.emit(PRELOAD_NEXT);
    }
  }
  onPreloadNext() {
    if (this._currentPreloadInst == null && this._preloadDataList.length > 0) {
      if (this._preloadDataList.length > 0) {
        let e = this._preloadDataList.shift();
        let t = e == null ? undefined : e.data;
        if (t != null && t.payload) {
          let e = this._getPreloaderKey(t);
          let i = this._preloaderConfigs[e];
          if (!i) {
            return void console.warn("need to set vtype, no preloader", t);
          }
          this._currentPreloadInst = new eE(
            t,
            this,
            i,
            (e) => {
              this.onCacheSegment(e);
            },
            (e) => {
              this.onCachePredict(e);
            },
          );
          this._currentPreloadInst.on(
            PRELOAD_SEG_DONE,
            this.onPreloadSegDone.bind(this),
          );
          this._currentPreloadInst
            .start()
            .then(() => {
              this._currentPreloadInst.preloadSeg();
            })
            .catch(() => {
              this._currentPreloadInst = null;
            });
        }
      }
    } else {
      if (this._currentPreloadInst != null) {
        if (this._currentPreloadInst.state === STATES.IDLE) {
          this._currentPreloadInst.preloadSeg();
        } else if (this._currentPreloadInst.state === STATES.FINISH) {
          this._currentPreloadInst.destroy();
          this._currentPreloadInst = null;
        } else if (this._currentPreloadInst.state === STATES.PREPARE) {
          this._currentPreloadInst.cnt++;
          if (this._currentPreloadInst.cnt > 2) {
            this._currentPreloadInst.destroy();
            this._currentPreloadInst = null;
          }
        }
      }
    }
  }
  addDashPreloader(e) {
    if (e.data) {
      this._preloadDataList.push(e);
      this.sort(this._preloadDataList);
      if (this.autoPreload) {
        this.emit(PRELOAD_NEXT);
      }
      if (this._autoCheck.enable && !this._taskIntervalId) {
        this.startCheckTask();
      }
    }
  }
  _addDashPreloader(e) {
    if (e.data) {
      this._preloadDataList.push(e);
    }
  }
  addDashPreloaderList(e = []) {
    this.sort(e);
    for (let t = 0; t < e.length; t++) {
      this._addDashPreloader(e[t]);
    }
    if (this._autoCheck.enable && !this._taskIntervalId) {
      this.startCheckTask();
    }
  }
  sort(e) {
    e.sort((e, t) => {
      if (
        (e.order === undefined && e.order === undefined) ||
        (typeof e.order === "number" &&
          typeof t.order === "number" &&
          e.order < t.order)
      ) {
        return -1;
      }
      return 1;
    });
  }
  destroy() {
    this.off(PRELOAD_NEXT, this._onPreloadNext);
  }
  cancelLoading() {
    if (this._currentPreloadInst) {
      this._currentPreloadInst.cancelLoading();
      this._currentPreloadInst = null;
    }
    this._preloadDataList = [];
  }
  static getInstance(t, i, r = null) {
    let n = e.GLOBAL_KEY + (t.globalKey ? t.globalKey : "");
    let a = window[n];
    if (a != null && a._ptag_) {
      a.update(t, i, r);
      return a;
    }
    let s = new e(t, i, r);
    window[n] = s;
    return s;
  }
  preloadCacheProgress(e) {
    let {
      vid,
      format,
      mediaType,
      prelaodType,
      bitrate,
      set_duration,
      set_size,
      media_type,
      start_time,
    } = e;
    let d = this.getProgressCacheKey(vid, format, mediaType);
    let u = this._preloadCacheProgress[d];
    if (u) {
      let e = Object.values(u);
      let header_size = 0;
      let content_total_size = 0;
      let current_header_download_size = 0;
      let header_download_state = 0;
      let current_content_download_size = 0;
      for (let n = 0; n < e.length; n++) {
        let a = e[n];
        if (a.isInitSegment) {
          header_size = a.total;
          current_header_download_size = a.loaded;
          header_download_state =
            a.loaded === a.total
              ? DOWN_STATES.SUCCESS
              : DOWN_STATES.DOWNLOADING;
        }
        content_total_size += a.total;
        current_content_download_size += a.loaded;
      }
      let content_download_state =
        current_content_download_size === content_total_size
          ? DOWN_STATES.SUCCESS
          : DOWN_STATES.DOWNLOADING;
      return {
        media_type,
        preload_type: prelaodType,
        stream_bitrate: bitrate,
        header_size,
        content_total_size,
        start_time: start_time || -1,
        state_info: {
          set_duration,
          set_size,
          current_header_download_size,
          current_content_download_size,
          header_download_state,
          content_download_state,
        },
      };
    }
    return null;
  }
  getPreloadTaskInfos() {}
  getItem(e, t) {
    return this._cacheInst.getItem(e, t);
  }
  setItem(e, t, i) {
    return this._cacheInst.setItem(e, t, i);
  }
  removeItem(e, t) {
    return this._cacheInst.removeItem(e, t);
  }
};
eH.GLOBAL_KEY = "__preloadcontext__";
class eK extends e_.A {
  constructor(e) {
    super();
    this.options = e;
    this.promisePolyfill();
    this.before();
    this.check();
    this._preloadManager = eH.getInstance(e, this.handlers, this.predictInst);
    this.loadingTasks = [];
  }
  promisePolyfill() {
    if (!Promise.prototype.finally) {
      Promise.prototype.finally = {
        finally(e) {
          let t = (t) => Promise.resolve(e()).then(t);
          return this.then(
            (e) => t(() => e),
            (e) => t(() => Promise.reject(e)),
          );
        },
      }.finally;
    }
  }
  before() {
    throw Error("need");
  }
  check() {
    if (this.handlers) {
      if (!this.handlers.start || !this.handlers.onRequest) {
        throw Error("handlers callback null");
      }
    } else {
      throw Error("handlers null");
    }
    if (!this.predictInst) {
      throw Error("predictInst null");
    }
    if (!this.predictInst.__p__) {
      throw Error("predictInst need extends predictbase");
    }
  }
  preloadNext() {
    this._preloadManager.emit(PRELOAD_NEXT);
  }
  get preloadManager() {
    return this._preloadManager;
  }
  start() {
    throw Error("start need implment, return Promise");
  }
  cancelLoading() {
    for (let e = 0; e < this.loadingTasks.length; e++) {
      try {
        let t = this.loadingTasks[e];
        if (typeof t.cancel === "function") {
          t.cancel();
        }
      } catch {}
    }
    this.loadingTasks = [];
    this._preloadManager.cancelLoading();
  }
  addTasker(e) {
    this.loadingTasks.push(e);
  }
  removeTasker(e) {
    setTimeout(() => {
      for (let t = this.loadingTasks.length - 1; t > -1; t--) {
        if (this.loadingTasks[t] === e) {
          this.loadingTasks.splice(t, 1);
          break;
        }
      }
    });
  }
  addDashPreloader(e) {
    this._preloadManager.addDashPreloader(e);
  }
  addDashPreloaderList(e = []) {
    this._preloadManager.addDashPreloaderList(e);
  }
}
class ez {
  constructor() {
    this.bandwidth2item = {};
    this._mediaInfos = undefined;
    this.__p__ = true;
  }
  init() {
    throw Error("init func not implement, return promise");
  }
  preloadPredict(e) {
    throw Error(`preloadPredict error: ${e}`);
  }
  updateMediaInfos(e) {
    this._mediaInfos = e;
    this.bandwidth2item = {};
    this.dynamic_video = e.dynamic_video_list;
    if (this.dynamic_video.length > 0) {
      for (let e = 0; e < this.dynamic_video.length; e++) {
        let t = this.dynamic_video[e];
        let i =
          (t == null ? undefined : t.bitrate) ||
          (t == null ? undefined : t.bandwidth);
        this.bandwidth2item[i] = t;
      }
    }
  }
  getIdx(e, t) {
    let i = 0;
    e.forEach((e, r) => {
      if (e.definition === t) {
        i = r;
      }
    });
    return i;
  }
  get cachedData() {
    return null;
  }
}
const e0 = (e, t, i) => {
  let r;
  if ((r = typeof t !== "symbol" ? t + "" : t) in e) {
    return Object.defineProperty(e, r, {
      enumerable: true,
      configurable: true,
      writable: true,
      value: i,
    });
  }
  return (e[r] = i);
};
let e1 = {
  MEDIA_EXPIRED: "MEDIA_EXPIRED",
  INIT_FAIL: "INIT_FAIL",
  PARSE_ERROR: "PARSE_ERROR",
  PLAYER_LOG: "PLAYER_LOG",
  BUFFERED_RESET: "BUFFERED_RESET",
};
let e4 = "real_time_speed";
let e2 = "is unsupported";
let e3 = "buffer_control";
let load_type = "pcdn";
let e6 = new Map();
let e8 = new Map();
let e9 = new Map();
let e7 = "size";
let te = {
  BUFFER_CONTROLS: "buffer_control",
};
let tt = "timer_update";
let ti = "h264";
let tr = "h265";
let tn = "h266";
let version = "0.2.18";
let ts = {
  416: eY.sn[eY.sJ.NETWROK_RANGE_NOT_SATISFIABLE],
  403: eY.sn[eY.sJ.NETWORK_FORBIDDEN],
  404: eY.sn[eY.sJ.NETWORK_NOTFOUND],
  timeout: eY.sn[eY.sJ.NETWORK_TIMEOUT],
  "4xx": `${eY.sn[eY.sJ.NETWORK]}4XX`,
  "5xx": `${eY.sn[eY.sJ.NETWORK]}5XX`,
  networkError: eY.sn[eY.sJ.NETWORK],
  contentError: `${eY.sn[eY.sJ.NETWORK]}contentError`,
  mse: eY.sn[eY.sJ.MEDIA][eY.sJ.SUB_TYPES.MSE_OTHER],
  mseOpen: eY.sn[eY.sJ.MEDIA][eY.sJ.SUB_TYPES.MSE_ADD_SB],
  mseAppend: eY.sn[eY.sJ.MEDIA][eY.sJ.SUB_TYPES.MSE_APPEND_BUFFER],
  mse_hijack: eY.sn[eY.sJ.MEDIA][eY.sJ.SUB_TYPES.MSE_HIJACK],
  eme_hijack: eY.sn[eY.sJ.MEDIA][eY.sJ.SUB_TYPES.EME_HIJACK],
  metaError: eY.sn[eY.sJ.DEMUX][eY.sJ.SUB_TYPES.MP4],
  muxError: eY.sn[eY.sJ.REMUX][eY.sJ.SUB_TYPES.FMP4],
  other: eY.sn[eY.sJ.OTHER],
  waitTimeout: eY.sn[eY.sJ.RUNTIME][eY.sJ.SUB_TYPES.BUFFERBREAK_ERROR],
  waitTimeoutWithHidden:
    eY.sn[eY.sJ.RUNTIME][eY.sJ.SUB_TYPES.WAITING_TIMEOUT_ERROR],
  drm: eY.sn[eY.sJ.DRM][eY.sJ.SUB_TYPES.LICENSE],
};
let to = eY.sJ;
class tl {
  constructor(e, httpCode, i) {
    let rangeStart = 0;
    let rangeEnd = 0;
    if (i && i.range && i.range.length > 1) {
      rangeStart = i.range[0];
      rangeEnd = i.range[1];
    }
    let a = ts[httpCode] || httpCode;
    return {
      errorCode: a,
      errorType: e,
      errorMessage:
        (i == null ? undefined : i.httpText) ||
        (i == null ? undefined : i.message),
      url: i == null ? undefined : i.url,
      httpCode,
      version,
      rangeStart,
      rangeEnd,
      ext: i,
      mediaError: {
        code: a,
        message:
          (i == null ? undefined : i.httpText) ||
          (i == null ? undefined : i.message),
      },
    };
  }
}
class th {
  constructor(e, t, i) {
    return {
      errorCode: t,
      errorType: e,
      version,
      errorMessage: i.msg,
      ext: i,
      mediaError: {
        code: t,
        message: i.msg,
      },
    };
  }
}
let td = [
  {
    range: [0, 90],
    size: 614400,
  },
  {
    range: [90, 120],
    size: 819200,
  },
  {
    range: [120, Number.MAX_VALUE],
    size: 1024000,
  },
];
function tu(duration, t, i) {
  let r = i > 51200 ? Math.min(i, t) : t;
  if (!duration) {
    return r;
  }
  for (let n = 0; n < td.length; n++) {
    if (duration >= td[n].range[0] && duration < td[n].range[1]) {
      r = Math.min(Math.max(r, td[n].size), i > 0 ? i : t);
      break;
    }
  }
  return r;
}
let tc =
  (() => {
    try {
      return (
        typeof localStorage !== "undefined" &&
        "setItem" in window.localStorage &&
        !!window.localStorage.setItem
      );
    } catch {
      return false;
    }
  })() &&
  !(() => {
    let e = "_localstorage_support_test";
    try {
      window.localStorage.setItem(e, true);
      window.localStorage.removeItem(e);
      return false;
    } catch {
      return true;
    }
  })();
let openLog = tm();
let tg = (() => {
  if (tc) {
    try {
      return !!window.localStorage.getItem("playertestlog");
    } catch {}
  }
  return false;
})();
let tp = {
  1: "debug",
  2: "log",
  3: "warn",
  4: "error",
};
function tm() {
  if (tc) {
    try {
      return !!window.localStorage.getItem("playerlog");
    } catch {}
  }
  return false;
}
function t_(e, t, i, ...r) {
  let n = tp[t];
  if (n && e && e[n]) {
    e[n](i, ...r);
  }
}
function ty(e = "div", t = "", i = {}, r = "") {
  let n = document.createElement(e);
  n.className = r;
  n.innerHTML = t;
  Object.keys(i).forEach((t) => {
    let r = i[t];
    if (e === "video" || e === "audio" || e === "live-video") {
      if (r) {
        n.setAttribute(t, r);
      }
    } else {
      n.setAttribute(t, r);
    }
  });
  return n;
}
function tv(e) {
  return Object.prototype.toString.call(e).match(/([^\s.*]+)(?=]$)/g)[0];
}
function tT() {
  try {
    return parseInt(performance.now(), 10);
  } catch {
    return new Date().getTime();
  }
}
function tb(e, t) {
  try {
    let i = e.indexOf("?");
    if (i < 0) {
      Object.keys(t).forEach((i, r) => {
        if (r === 0) {
          e += `?${i}=${t[i]}`;
        } else {
          e += `&${i}=${t[i]}`;
        }
      });
    } else {
      Object.keys(t).forEach((r) => {
        if (i === e.length - 1) {
          e += `${r}=${t[r]}`;
        } else {
          e += `&${r}=${t[r]}`;
        }
      });
    }
    return e;
  } catch {
    return e;
  }
}
function tS(e, t) {
  Object.keys(t).forEach((i) => {
    let r = tv(t[i]);
    let n = tv(e[i]);
    switch (r) {
      case "Array":
        if (n !== "Array") {
          e[i] = [];
        }
        e[i].push(...t[i]);
        break;
      case "Object":
        if (n !== "Object") {
          e[i] = {};
        }
        tS(e[i], t[i]);
        break;
      default:
        e[i] = t[i];
    }
  });
  return e;
}
function tL(e, t) {
  try {
    if (e && t) {
      return parseInt((t * e) / 8, 10);
    }
    return 0;
  } catch {
    return 0;
  }
}
function tx(e, t) {
  let i = [];
  let r = 0;
  if (e) {
    i.push(e);
  }
  if (t) {
    i.push(t);
  }
  i.every((e) => {
    if (e) {
      r += e.byteLength;
    }
    return true;
  });
  let n = new Uint8Array(r);
  let a = 0;
  i.every((e) => {
    if (e) {
      n.set(e, a);
      a += e.byteLength;
    }
    return true;
  });
  return n;
}
function tP(e, videoTrak, audioTrak) {
  let r = null;
  let n = null;
  r = e < videoTrak.length - 1 ? videoTrak[e] : videoTrak[videoTrak.length - 1];
  n = e < audioTrak.length - 1 ? audioTrak[e] : audioTrak[audioTrak.length - 1];
  return [
    Math.min(
      (r == null ? undefined : r.range[0]) || Infinity,
      (n == null ? undefined : n.range[0]) || Infinity,
    ),
    Math.max(
      r == null ? undefined : r.range[1],
      n == null ? undefined : n.range[1],
    ),
  ];
}
function tR(e) {
  if (tv(e) !== "String" || !e) {
    return "";
  }
  let t = e.split("/");
  let i = "";
  if (t.length > 3 && t[2]) {
    i = t[2];
  }
  return i;
}
function tE(e) {
  let t = 0;
  let i;
  while (t < 10) {
    try {
      if ((i = new Uint8Array(e)).byteLength > 0) {
        break;
      }
      t++;
    } catch {
      if (t < 10) {
        t++;
      } else {
        console.error("repeat data cache  new array failed final", 10);
      }
    }
  }
  return i;
}
let tC = {
  playBtnClick: (e, t, i, r) => {
    if (!e.paused) {
      if (e.waitingMoreBuffer) {
        e.waitingMoreBuffer = false;
      }
    }
    r.call(e, t, i);
  },
};
let tk = {
  waiting: (e, t) => {
    let { player, eventName } = e;
    player.waitingMoreBuffer = true;
    t(eventName, e);
  },
  play: (e, t) => {
    let { player, eventName } = e;
    if (!player.waitingMoreBuffer) {
      t(eventName, e);
    }
  },
  pause: (e, t) => {
    let { player, eventName } = e;
    if (!player.waitingMoreBuffer) {
      t(eventName, e);
    }
  },
  seeking: (e, t) => {
    let { player, eventName } = e;
    player.isSeekingStart = true;
    t(eventName, e);
  },
  progress: (e, t) => {
    t_(">>>>progress");
    let { player, eventName } = e;
    if (player.waitingMoreBuffer) {
      let e = player.getBufferedRange(player.buffered2);
      if (!(e[0] === 0 && e[1] === 0)) {
        if (player.inWaitingStart === undefined || player.isSeekingStart) {
          t_("progress startplay or seek ended");
          if (
            e[1] - player.currentTime >=
              (player.config.canplayWaterLevel || 1) ||
            e[1] > player.duration - 1
          ) {
            t_("progress out bufferWaterLevel");
            player.play();
          } else {
            t_("progress not out bufferWaterLevel");
            player.emit("waiting");
          }
        } else {
          t_("progress video waiting end");
          if (
            e[1] - player.currentTime >=
              (player.config.bufferWaterLevel || 5) ||
            e[1] > player.duration - 1
          ) {
            t_("progress out bufferWaterLevel");
            player.play();
          } else {
            t_("progress not out bufferWaterLevel");
            player.emit("waiting");
          }
        }
      }
    }
    t(eventName, e);
  },
  playing: (e, t) => {
    let { player, eventName } = e;
    t_("playing");
    let n = player.getBufferedRange(player.buffered2);
    if (n[0] === 0 && n[1] === 0) {
      t_("playing currentTime no buffer, not out bufferWaterLevel");
      player.waitingMoreBuffer = true;
      player.pause();
      t.call("waiting", e);
      return;
    }
    if (player.inWaitingStart === undefined || player.isSeekingStart) {
      t_("playing startplay or seek ended");
      if (
        n[1] - player.currentTime >= (player.config.canplayWaterLevel || 1) ||
        n[1] > player.duration - 1
      ) {
        t_("playing out bufferWaterLevel");
        player.waitingMoreBuffer = false;
        player.isSeekingStart = false;
        t(eventName, e);
      } else {
        t_("playing not out bufferWaterLevel");
        player.waitingMoreBuffer = true;
        player.pause();
        t.call("waiting", e);
      }
    } else {
      t_("playing video waiting ended");
      if (
        n[1] - player.currentTime >= (player.config.bufferWaterLevel || 5) ||
        n[1] > player.duration - 1
      ) {
        t_("playing out bufferWaterLevel");
        player.waitingMoreBuffer = false;
        t(eventName, e);
      } else {
        t_("playing not out bufferWaterLevel");
        player.waitingMoreBuffer = true;
        player.pause();
        t.call("waiting", e);
      }
    }
  },
};
function tI(len, time) {
  return Math.round((8 * len * 1000) / time / 1024);
}
function retryCheckFunc(e) {
  let t;
  let i;
  return !(
    ((t = e == null ? undefined : e.message) == null
      ? undefined
      : t.indexOf("Failed to fetch")) >= 0 ||
    (e != null &&
      e.response &&
      ((i = e.response) == null ? undefined : i.status) >= 400 &&
      e.response.status <= 599)
  );
}
function tD(player, t, i) {
  if (player.video) {
    player.video.addEventListener(t, i);
  }
}
function tw(player, t, i) {
  if (player.video) {
    player.video.removeEventListener(t, i);
  }
}
function tM(player) {
  if (player && player.video && typeof player.video.getStats === "function") {
    return player.video.getStats();
  }
  return null;
}
function tN(config) {
  let { kid, drmKeyToken, secretKey, keyValue, drm } = config;
  return kid || drmKeyToken || secretKey || keyValue || drm;
}
function tA(e) {
  let { cachedBufferDur, loadTarDuration, loadDuration, forceSetMin } = e;
  let { PCDNInBuffer, PCDNOutBuffer, loadSize } = e;
  return {
    buffer_dur: cachedBufferDur || -1,
    load_tar_dur: loadTarDuration || -1,
    load_dur: loadDuration || -1,
    force_set_min: forceSetMin,
    in_buf: PCDNInBuffer || -1,
    out_buf: PCDNOutBuffer || -1,
    load_size: loadSize || -1,
  };
}
let tB = {
  "x-cache": "x_cache",
  "x-response-sinfo": "server_ip",
  "x-response-cinfo": "x-response-cinfo",
  "content-range": "content-range",
  "content-length": "content-length",
  "content-type": "content-type",
};
function tU(e) {
  let t = {};
  if (e && e.get) {
    Object.keys(tB).forEach((i) => {
      let r = tB[i];
      if (e.get(i)) {
        t[r] = e.get(i);
      }
    });
  }
  return t;
}
function tF(e) {
  let t = tB["content-range"];
  if (e && e.get && e.get(t)) {
    let i = e.get(t).split("/");
    if ((i == null ? undefined : i.length) === 2) {
      return i[1];
    }
  }
  return null;
}
let tj = "error";
let tG = "metaReady";
let t$ = "moov_request_Progress";
let tV = "progress_event";
let tH = "updateEME";
let tK = "init_MSE";
let tz = "chaneg_url";
let tq = "update_load_fragmentIdx";
let tJ = "remove_pcdn_node";
let tW = "load_error";
let tY = "cancel_loaded_len";
let tX = "load_len_not_match_error";
let tZ = "close";
let tQ = "forbidden";
let t0 = {};
let t1 = class e extends e_.A {
  constructor(t, i, r, n = [], a) {
    var s;
    super();
    e0(this, "markErrHost", (e) => {
      if (e) {
        t0[e] = true;
        this.log(ep.f.WARN, "[mp4loader markErrHost]", e);
      }
    });
    e0(this, "onprogressDataArrive", async (e, t, i, r) => {
      var n;
      let a =
        ((n = i == null ? undefined : i.priOptions) == null
          ? undefined
          : n.type) || "cdn";
      let range = this.adaptTimeRange[i.index].range;
      if (e && e.byteLength > 0) {
        if (!this._optionDataLenInfo[a]) {
          this._optionDataLenInfo[a] = 0;
        }
        this._optionDataLenInfo[a] += e.byteLength;
        this._receiveDataPos = i == null ? undefined : i.range[1];
        if (range && i.range[1] > range[1] && !t) {
          t = true;
          this.log(
            ep.f.LOG,
            "[onprogressDataArrive] receive data, check state set true >>> index,",
            i.index,
            ",range,",
            JSON.stringify(i.range),
          );
        }
        this.cacheRepeatData(
          this.adaptTimeRange[i.index].repeatRange,
          i.range,
          e,
        );
        this.log(
          ep.f.LOG,
          "[onprogressDataArrive] receive data, >>> index,",
          i.index,
          ",range,",
          JSON.stringify(i.range),
          ", dataLen,",
          e.byteLength,
          ",loadType,",
          a,
          t,
        );
        this._mux(e, i.range[0], i.index, t);
      } else {
        this.log(
          ep.f.LOG,
          "[onprogressDataArrive] receive data null, >>> index,",
          i.index,
          ",range,",
          JSON.stringify(i.range),
          ", dataLen,",
          e == null ? undefined : e.byteLength,
          ",loadType,",
          a,
          t,
        );
      }
      if (t) {
        this._optionDataLenInfo[a] = 0;
        let e = tU(r.headers);
        if (!this.totalSize) {
          this.totalSize = ((e) => {
            try {
              let t = Object.keys(e).filter((e) => e === "content-range");
              if (t.length > 0) {
                let i = e[t[0]].split("/");
                if ((i == null ? undefined : i.length) === 2) {
                  return parseInt(i[1], 10);
                }
              }
              return 0;
            } catch (error) {
              console.error(error);
              return 0;
            }
          })(e);
        }
        let t = range && range.length >= 0 ? Number(range[1]) : 0;
        if (
          (range == null ? undefined : range.length) > 0 &&
          (!t ||
            (t &&
              ((i == null ? undefined : i.range[1]) === t + 1 ||
                this.totalSize === t)))
        ) {
          this.adaptTimeRange[i.index].downloaded = true;
          this.log(
            ep.f.LOG,
            "[FragLoadDowned],fragmentIdx,",
            i.index,
            ",rangeEnd,",
            i.range[1],
          );
        } else {
          await this.cancelLoading();
          let { startTime, endTime } = this.adaptTimeRange[i.index];
          this.emit(tX, [startTime, endTime]);
          let o = a === "cdn" ? this.url : this._pcdnNodeList[0].url;
          let host = tR(o);
          this.emit(tW, {
            src: o,
            host,
            errorCode: ts.contentError,
            message: "progress dataLen not match",
            range: JSON.stringify(range),
            headers: e,
          });
          this.log(
            ep.f.LOG,
            "[FragLoadDowned check false, len is not match],fragmentIdx,",
            i.index,
            ",rangeEnd,",
            i.range[1],
            JSON.stringify(range),
            JSON.stringify(e),
            o,
            r == null ? undefined : r.url,
          );
          await this.loadAllFragmentData(
            this._curLoadSegIdx,
            this._loadSuccessCallBack,
          );
        }
      }
    });
    this.timeRecord = {
      startMuxTime: -1,
      startLoadTime: -1,
      newMP4Time: tT(),
      startLoadMetaTime: -1,
    };
    this.updateUrl(t, n || []);
    this._bitRate = i || 0;
    this.options = e.getDefaultConfig();
    Object.keys(r).map((e) => {
      if (r[e] !== undefined && r[e] !== null) {
        this.options[e] = r[e];
      }
    });
    this.logger = r.logger;
    this.timeRange = [];
    this.adaptTimeRange = [];
    this.firstFrameTime = a || {};
    this.fileSize = r == null ? undefined : r.fileSize;
    this.totalSize = 0;
    this.CHUNK_SIZE =
      ((s = this.options) == null ? undefined : s.firstLoadSize) ||
      tu(r.duration, this.options.chunkSize, this.fileSize);
    this._firstLoadSize = this.CHUNK_SIZE;
    this.log(
      ep.f.LOG,
      "[getFirstLoadSize], firstLoadSize ",
      this._firstLoadSize,
      ",dur,",
      r.duration,
      ",chunkSize,",
      this.CHUNK_SIZE,
      ",fileSize,",
      this.fileSize,
    );
    this._repeatInfo = {
      startPos: -1,
      curDataPos: 0,
      usedPos: 0,
      data: tE(1048576),
    };
    this.meta = null;
    this.preloadCache = null;
    this.videoTrak = null;
    this.audioTrak = null;
    this._loadSuccessCallBack = null;
    this._isPending = false;
    this.metaLoading = false;
    this.MP4Loader = new eW.v({
      url: t,
      vid: `${r.vid}-${i}`,
      retry: r.retryCount || 2,
      retryDelay: r.retryDelay || 1000,
      timeout: r.timeout || 3000,
      segmentDuration: r.segmentDuration,
      fixEditListOffset: r.fixEditListOffset,
      ...r.reqOptions,
      loaderType: r.loaderType,
      retryCheckFunc,
      openLog,
    });
    this.MP4Demuxer = null;
    this.FMP4Remuxer = null;
    this._needInitSegment = true;
    this._bitRateInfoMap = new Map();
    this._switchBitRate = false;
    this._segmentToBitRateMap = new Map();
    this.useEME = false;
    this.secretKey = null;
    this.decryptKey = null;
    this.keyValue = null;
    this.initTransMuxWorker();
    this.seekTime = -1;
    this.changeBitRateTime = -1;
    this._PCDNState = tZ;
    this._pcdnNodeList = [];
    this.loadInfo = {};
    this.pcdnTraceInfo = null;
    this._loadedDataState = false;
    this._PCDNSwitchCnt = 0;
    this._isUseCDN = true;
    this._curLoadSegIdx = 0;
    this._receiveDataPos = -1;
    this._optionDataLenInfo = {};
    this._lastPCDNUrl = "";
    this._lastTargetDur = 0;
    this.pcdnVVStat = this.resetPCDNVVStat();
    this.pSCCancelCnt = 0;
    this._lastDemuxSampleIdxRange = {
      video: 0,
      audio: 0,
    };
    this._mediaEndTime = -1;
  }
  static get pcdnDownLoadReqCnt() {
    let { pcdn_download_request_cnt, pcdn_download_failed_cnt } = e;
    e.pcdn_download_request_cnt = 0;
    e.pcdn_download_failed_cnt = 0;
    return {
      pcdn_download_request_cnt,
      pcdn_download_failed_cnt,
    };
  }
  static getDefaultConfig() {
    return {
      onProcessMinLen: 1024,
      xhrSetup: null,
      chunkSize: 800000,
      isCache: false,
      playerId: "",
      vid: "",
      afterLoadeddataCallBackLen: 0,
      ext: {},
    };
  }
  get size() {
    return this.fileSize;
  }
  initTransMuxWorker() {}
  updateSecretKey(e, secretKey, decryptKey, r) {
    let n;
    this.useEME = e;
    if (!e && secretKey) {
      this.log(ep.f.LOG, "[updateSecretKey] ,force enableWorker");
      this.options.enableWorker = true;
      if (!this.transmuxerWorkerControl) {
        this.initTransMuxWorker();
      }
    } else if (!e && r) {
      this.keyValue = r;
    }
    this.log(
      ep.f.LOG,
      "[updateSecretKey] ,useEME, ",
      e,
      ",secretKey,",
      secretKey,
      ",decryptKey",
      decryptKey,
    );
    if ((n = this.transmuxerWorkerControl) != null) {
      n.updateValue({
        secretKey,
        decryptKey,
      });
    }
  }
  updateLoadedDataDone() {
    this._loadedDataState = true;
  }
  get PCDNSwitchCnt() {
    return this._PCDNSwitchCnt;
  }
  updateLoadInfo(e, t) {
    if (!this.loadInfo) {
      this.loadInfo = {};
    }
    if (!this.loadInfo[e]) {
      this.loadInfo[e] = {};
      this.loadInfo[e].loadLen = 0;
    }
    this.loadInfo[e].loadLen += t;
  }
  async updatePCDNState(e) {
    if (this._PCDNState !== tQ && this._PCDNState !== e) {
      this.log(ep.f.LOG, "[pcdn state update]", this._PCDNState, " - ", e);
    }
    if (e === tQ) {
      this._PCDNState = e;
    } else if (this._PCDNState !== tQ && this._PCDNState !== e) {
      if (this._isUseCDN || e !== tZ) {
        this._PCDNState = e;
      } else {
        this._PCDNState = e;
        if (
          this.adaptTimeRange[this._curLoadSegIdx].downloaded ||
          this._switchBitRate
        ) {
          return void this.log(
            ep.f.LOG,
            "[pcdn] switch cdn ",
            this._curLoadSegIdx,
            "downloaded",
            ",switchBitRate, ",
            this._switchBitRate,
          );
        }
        await this.cancelLoading();
        this.pSCCancelCnt++;
        let t = this._curLoadSegIdx;
        this.log(ep.f.LOG, "[pcdn] cancelLoading ", t, "switch cdn load");
        let i = this.getFragRange(t);
        if (
          this._receiveDataPos &&
          this._receiveDataPos >= i[0] &&
          this._receiveDataPos <= i[1]
        ) {
          let e = i[0];
          i[0] = this._receiveDataPos;
          this.log(
            ep.f.LOG,
            "[pcdn] switch cdn, adject range",
            t,
            JSON.stringify(i),
            ",oldRange,",
            `${e} - ${i[1]}`,
          );
        }
        this._receiveDataPos = -1;
        await this.startLoad(i, t);
      }
      this.log(ep.f.LOG, "[pcdn] openPCDN ", e);
    }
  }
  updateNode(e) {
    if (e && e.length > 0) {
      let t = e.filter((e) => {
        if (
          !Object.prototype.hasOwnProperty.call(
            t0,
            tR(e == null ? undefined : e.url),
          )
        ) {
          return e;
        }
      });
      this._pcdnNodeList = t;
    }
  }
  clearPCDNNodeList() {
    this.log(ep.f.LOG, "[pcdn] clearPCDNNodeList");
    this._pcdnNodeList = [];
  }
  get isUpdateNode() {
    return !this._pcdnNodeList || !this._pcdnNodeList.length;
  }
  isUsePCDN() {
    let e;
    return (
      this._PCDNState === "open" &&
      ((e = this._pcdnNodeList) == null ? undefined : e.length) > 0
    );
  }
  async changeBitRate(e) {
    if (e.bitrate !== this._bitRate) {
      this.updateUrl(e._mainURL, e._backupURL);
      this._bitRate = e.bitrate;
      this._receiveDataPos = -1;
      await this.MP4Loader.changeUrl(
        this.url,
        `${this.options.vid}-${this._bitRate}`,
        this.CHUNK_SIZE,
      );
      this._pcdnNodeList = null;
      this.emit(tz, this.url);
      this._switchBitRate = true;
      this._mediaEndTime = -1;
      this.log(
        ep.f.LOG,
        "[switchBitrate] changeUrl, bitRate,",
        this._bitRate,
        "url",
        this.url,
      );
    }
  }
  _getByPreload(e, t, i, r) {
    try {
      if (e && e.byteLength >= t) {
        let context = {
          endTime: new Date().getTime(),
          startTime: new Date().getTime(),
          index: r,
          range: [],
          vid: this.options.vid,
          from: "local",
        };
        if (i <= e.byteLength) {
          let r = e.slice(t, i);
          context.range = [t, i];
          context.state = true;
          return {
            buffer: r,
            context,
            state: true,
          };
        }
        {
          let i = e.byteLength - 1;
          let r = e.slice(t, i);
          context.range = [t, i];
          return {
            context,
            buffer: r,
            state: false,
          };
        }
      }
      return null;
    } catch (error) {
      console.error("[MP4] _getByPreload", t, i, error);
      return null;
    }
  }
  log(e, t, ...i) {
    let { options } = this;
    let n =
      options && options.vid
        ? `[MP4]${this._logTag} ${options.vid} ${t}`
        : `[MP4]${this._logTag} ${t}`;
    t_(this.logger, e, n, ...i);
  }
  async errorHandler(e, t, i = {}) {
    let { response, message } = e;
    let a = this.options ? this.options.vid : "";
    let s = null;
    this._isPending = true;
    if (response) {
      let headers = tU(response.headers);
      s = new tl("network", response.status, {
        httpText: response.httpText,
        message,
        url: response.url,
        range: i.range,
        headers,
      });
      this.log(
        ep.f.LOG,
        `[MP4] [${a}] errorHandler error state:[${t}],
          _isPending:[${this._isPending}] `,
        response == null ? undefined : response.status,
        message,
      );
      if (this.backUrl && this.backUrl.length > 0) {
        let r = this.backUrl.shift();
        this.updateUrl(r, this.backUrl);
        this.log(
          ep.f.LOG,
          `[${a}] errorHandler start backUpUrl retry`,
          this.backUrl.length,
          r,
        );
        this._isPending = false;
        if (this.MP4Loader) {
          await this.MP4Loader.changeUrl(
            this.url,
            `${this.url}-${this._bitRate}`,
            this.CHUNK_SIZE,
          );
          this.emit(tz, this.url);
        }
        this.emit(tV, {
          type: "error",
          error: e,
        });
        if (t === "getMetaInfo") {
          return void this.getMetaInfo();
        }
        if (t === "loadFragment") {
          let { fragIndex, range } = i;
          if (fragIndex !== null && fragIndex >= 0 && range) {
            this.resetFragmentLoadState(fragIndex);
            this.loadFragment(fragIndex, range);
            return;
          }
        }
      }
      s.context = i;
      s.response = response;
      this.log(ep.f.LOG, `errorHandler end, ${JSON.stringify(i)}`);
      this.emit(tj, s, t);
    } else {
      this.log(
        ep.f.LOG,
        `errorHandler other end, ${t},${response == null ? undefined : response.status}, ${message}`,
      );
      s = e;
      s.context = i;
      this.emit(tj, s, t);
    }
  }
  async init(e) {
    let t;
    let i;
    let r;
    if (this.url) {
      await this.MP4Loader.changeUrl(
        this.url,
        `${this.options.vid}-${this._bitRate}`,
        this.CHUNK_SIZE,
      );
    }
    this.emit(tz, this.url);
    this.meta = null;
    let {
      meta,
      mediaSegList,
      buffer,
      fileSize,
      initSeg,
      bitrate,
      adaptTimeRange,
      repeatData,
    } = e;
    if (meta && meta.ext) {
      if (fileSize) {
        this.fileSize = fileSize;
      }
      this.meta = meta;
      this.videoTrak = meta.ext.videoTrak;
      this.audioTrak = meta.ext.audioTrak;
      this.meta.videoSamplesLen = this.videoTrak.reduce(
        (acc, item) => acc + item.frames.length,
        0,
      );
      this.meta.audioSamplesLen = this.audioTrak.reduce(
        (acc, item) => acc + item.frames.length,
        0,
      );
      this._bitRate = bitrate;
      this.timeRange = this.getTimeRange();
      this.adaptTimeRange = ((e) => {
        let t = [];
        if (!e || !e.length || e.length === 0) {
          return t;
        }
        for (let i = 0; i < e.length; i++) {
          let r = e[i];
          let n = {};
          for (let e in r) {
            if (Object.prototype.hasOwnProperty.call(r, e)) {
              n[e] = r[e];
            }
          }
          t.push(n);
        }
        return t;
      })(adaptTimeRange);
      if (mediaSegList) {
        this.preloadCache = {
          segList: mediaSegList || [],
          initSeg,
        };
        if (
          ((t = this.adaptTimeRange) == null ? undefined : t.length) > 0 &&
          (repeatData == null ? undefined : repeatData.byteLength) > 0
        ) {
          this.cacheRepeatData(
            this.adaptTimeRange[0].repeatRange,
            this.adaptTimeRange[0].repeatRange,
            repeatData,
          );
        }
      } else if (
        buffer &&
        ((i = this.adaptTimeRange) == null ? undefined : i.length) > 0 &&
        (buffer == null ? undefined : buffer.byteLength) > 0
      ) {
        this.cacheRepeatData(
          this.adaptTimeRange[0].range,
          this.adaptTimeRange[0].range,
          buffer,
        );
      }
      this.adaptTimeRange.map((e) => {
        e.downloaded = false;
        e.isLoading = false;
      });
      for (let e = 0; e < this.adaptTimeRange.length; e++) {
        if ((r = this.updateTimeRangeInAdaptTimeRangeIdx) != null) {
          r.call(this, this.adaptTimeRange[e].timeRangeIdx, e);
        }
      }
      let e = {
        meta,
        videoSegments: meta.ext.videoTrak,
        audioSegments: meta.ext.audioTrak,
        bufferLoaded: buffer || null,
      };
      this._bitRateInfoMap.set(this._bitRate, e);
      this.emit(tG, this.meta);
    } else {
      await this.getMetaInfo();
    }
  }
  getTimeRange() {
    let e = [];
    let t = null;
    for (let i = 0; this.videoTrak && i < this.videoTrak.length; i++) {
      let { startTime } = this.videoTrak[i];
      let { endTime } = this.videoTrak[i];
      t = {
        startTime,
        endTime,
        duration: endTime - startTime,
        downloaded: false,
        isLoading: false,
      };
      e.push(t);
    }
    if (this.audioTrak && this.audioTrak.length > e.length) {
      for (let i = e.length; i < this.audioTrak.length; i++) {
        let r = Math.max(this.audioTrak[i].startTime, t ? t.endTime : 0);
        let n = Math.max(this.audioTrak[i].endTime, t ? t.endTime : 0);
        t = {
          startTime: r,
          endTime: n,
          duration: n - r,
          downloaded: false,
          isLoading: false,
        };
        e.push(t);
      }
    }
    return e;
  }
  async getMetaInfo(e = true) {
    let t;
    try {
      let t = tT();
      this.metaLoading = true;
      this.log(
        ep.f.LOG,
        "getMetaInfo start, bitRate,",
        this._bitRate,
        ",url,",
        this.MP4Loader.url,
      );
      this.resetRepeatInfo();
      let i = async (i, r, n, a, s) => {
        var o;
        if (a) {
          await this.cancelLoading();
          let e = new th(to.DEMUX, ts.metaError, {
            msg: JSON.stringify(a),
          });
          this.errorHandler(e, "getMetaInfo", {
            range: [0, this._firstLoadSize],
          });
          return;
        }
        if (!this.fileSize && s) {
          this.fileSize = Number(tF(s.headers));
        }
        let l =
          ((o = n == null ? undefined : n.priOptions) == null
            ? undefined
            : o.type) || "cdn";
        if (i) {
          this.cacheRepeatData([0, this._firstLoadSize], n.range, i);
          if (!this._optionDataLenInfo[l]) {
            this._optionDataLenInfo[l] = 0;
          }
          this._optionDataLenInfo[l] += i.byteLength;
        }
        if (r && this._optionDataLenInfo[l]) {
          this._optionDataLenInfo[l] = 0;
        }
        if (n.meta && !this.meta) {
          this.firstFrameTime.metaload = tT() - t;
          let i = n.meta;
          this.videoTrak = i.videoSegments;
          this.audioTrak = i.audioSegments;
          this.timeRange = this.getTimeRange();
          let r = this.videoTrak.reduce(
            (acc, item) => acc + item.frames.length,
            0,
          );
          let a = this.audioTrak.reduce(
            (acc, item) => acc + item.frames.length,
            0,
          );
          this.meta = {
            ...i.meta,
            ext: {
              videoTrak: this.videoTrak,
              audioTrak: this.audioTrak,
            },
            videoSamplesLen: r,
            audioSamplesLen: a,
            fileSize: this.fileSize,
          };
          this._bitRateInfoMap.set(this._bitRate, i);
          this.log(
            ep.f.LOG,
            "meta reach, bitRate,",
            this._bitRate,
            this._repeatInfo.curDataPos,
          );
          if (e) {
            this.emit(tG, this.meta);
          }
        }
        if (this.meta && r) {
          this.log(
            ep.f.LOG,
            "[getMetaInfo req end]",
            this._repeatInfo.curDataPos,
          );
          this.metaLoading = false;
        }
        if (this._loadedDataState) {
          let e = false;
          if (
            this._repeatInfo.curDataPos - this._repeatInfo.usedPos >=
            this.options.afterLoadeddataCallBackLen
          ) {
            e = true;
          }
          if (this.meta && (e || r)) {
            this.log(
              ep.f.LOG,
              "emit moov_req_progress loadeddata after",
              JSON.stringify(n.range),
            );
            this.emit(t$);
          }
        } else {
          if (this.meta && (i || r)) {
            this.log(
              ep.f.LOG,
              "emit moov_req_progress loadeddata before",
              JSON.stringify(n.range),
            );
            this.emit(t$);
          }
        }
      };
      let r = this._firstLoadSize - 1;
      await this.MP4Loader.loadMetaProcess(this.MP4Loader.cache, [0, r], i);
    } catch (error) {
      this.log(
        ep.f.ERROR,
        "[MP4] trigger errorHandler getMetaInfo",
        (t = error == null ? undefined : error.response) == null
          ? undefined
          : t.status,
        error == null ? undefined : error.message,
      );
      this.loadError(error, "getMetaInfo", false, {
        url: error.url || this.url,
        range: [0, this._firstLoadSize],
      });
    }
  }
  getFragmentIdx(e) {
    let t;
    let i;
    if (!this.videoTrak.length) {
      if ((i = this.audioTrak.find((t) => t.startTime <= e && t.endTime > e))) {
        return i.index;
      }
      return 0;
    }
    t = this.videoTrak.find((t) => t.startTime <= e && t.endTime > e);
    i = this.audioTrak.find((t) => t.startTime <= e && t.endTime > e);
    if (t && i) {
      return Math.min(t.index, i.index);
    }
    if (t || i) {
      if (t) {
        return t.index;
      }
      return i.index;
    }
    {
      let e = Number.MAX_VALUE;
      if (this.videoTrak && this.videoTrak.length > 0) {
        e = this.videoTrak.length - 1;
      }
      if (this.audioTrak && this.audioTrak.length > 0) {
        e = Math.min(this.audioTrak.length - 1, e);
      }
      return e;
    }
  }
  async _checkHasMeta() {
    let e;
    let t;
    let i;
    let r;
    let n = this._bitRateInfoMap.get(this._bitRate);
    if (n) {
      this.log(
        ep.f.LOG,
        "[switchBitrate], not need load InitSegment, bitRate, ",
        this._bitRate,
      );
      this.meta = n.meta;
    } else {
      this.log(
        ep.f.LOG,
        "[switchBitrate], need load InitSegment, bitRate, ",
        this._bitRate,
      );
      this.metaLoading = true;
      let r = await this.MP4Loader.loadMeta(
        this.MP4Loader.cache,
        Math.round(this.CHUNK_SIZE / 2),
      );
      this.log(ep.f.LOG, "[switchBitrate], loadMeta end, ", this._bitRate);
      this.metaLoading = false;
      let { videoTrak, audioTrak } = this;
      let o = videoTrak.reduce((acc, item) => acc + item.frames.length, 0);
      let l = audioTrak.reduce((acc, item) => acc + item.frames.length, 0);
      let h = Number(
        tF(
          (i =
            (t =
              (e = r == null ? undefined : r.responses) == null
                ? undefined
                : e[0]) == null
              ? undefined
              : t.response) == null
            ? undefined
            : i.headers,
        ),
      );
      this.fileSize = h;
      this.log(ep.f.LOG, "[switchBitrate], fileSize set , ", h);
      this.meta = {
        ...r.meta,
        ext: {
          videoTrak: r.videoSegments,
          audioTrak: r.videoSegments,
        },
        videoSamplesLen: o,
        audioSamplesLen: l,
        fileSize: h,
      };
      n = r;
      n.fileSize = h;
      this._bitRateInfoMap.set(this._bitRate, r);
    }
    this.videoTrak = n.videoSegments;
    this.audioTrak = n.audioSegments;
    this.fileSize = n.fileSize;
    this.emit(tH, this.meta);
    this.emit(tK, this.meta);
    this.timeRange = this.getTimeRange();
    for (let e = 0; e < this.adaptTimeRange.length; e++) {
      if ((r = this.updateTimeRangeInAdaptTimeRangeIdx) != null) {
        r.call(this, this.adaptTimeRange[e].timeRangeIdx, e);
      }
    }
    this._firstLoadSize = 0;
    return true;
  }
  async load(e, t) {
    let i;
    this._loadSuccessCallBack = t;
    if (this._switchBitRate && !this.metaLoading) {
      this.log(
        ep.f.LOG,
        "[switchBitrate], switch bitRate start load, bitRate,",
        this._bitRate,
        ", fragIndex,",
        e,
      );
      let t = await this._checkHasMeta();
      if (this.changeBitRateTime > 0) {
        this.resetFragmentLoadState(e, true);
        this.resetRepeatInfo();
        let t = this.getFragmentIdx(this.changeBitRateTime);
        let i = e;
        if ((e = this.getAdaptIdxBySrcIdx(t)) < 0) {
          return void this.log(
            ep.f.ERROR,
            "[switchBitrate] start new bitrate fragIndex error",
          );
        }
        if (i !== e) {
          this.resetFragmentLoadState(e);
        }
        this._curLoadSegIdx = e;
        let r = this.adaptTimeRange[e];
        this.log(
          ep.f.LOG,
          "[switchBitrate], need update load fragIndex",
          e,
          ",oldFragIndex",
          i,
          ",stTime,",
          this.changeBitRateTime,
          ",newBitrateadaptTimeRange,",
          r.startTime,
          "-",
          r.endTime,
        );
        this.emit(tq, e);
        this.seekTime = this.changeBitRateTime;
        this.changeBitRateTime = -1;
      }
      this.log(ep.f.LOG, "[switchBitrate], reset adaptTimeRange state,", e);
      this._needInitSegment = true;
      this.resetTansmuxer();
      if (t) {
        this._switchBitRate = false;
      }
    }
    if (this._switchBitRate && this.metaLoading) {
      return;
    }
    let r = this.getFragRange(e);
    let n = this.getFragmentFromCache(e, r);
    if (n && this._needInitSegment && !n.initSeg) {
      n = null;
      this.log(
        ep.f.LOG,
        "[mp4.load], segment ,",
        e,
        "Data In Cache but not has init, so not use cacheData",
      );
    }
    if (n) {
      let { video, audio } = n.muxSampleIdxRange;
      this._lastDemuxSampleIdxRange.video = video;
      this._lastDemuxSampleIdxRange.audio = audio;
      this.log(
        ep.f.LOG,
        "[mp4.load], segment ,",
        e,
        "Data In Cache",
        JSON.stringify(r),
        ", needInit,",
        this._needInitSegment,
        ",muxSampleIdxRange,",
        JSON.stringify(n.muxSampleIdxRange),
      );
      let a = this.adaptTimeRange[e];
      a.downloaded = true;
      a.isLoading = true;
      this._needInitSegment = false;
      if (this._loadSuccessCallBack) {
        this._loadSuccessCallBack(n);
      }
    } else {
      this.log(
        ep.f.LOG,
        "loadFragment,",
        e,
        ",bitRate,",
        this._bitRate,
        ",range,",
        JSON.stringify(r),
      );
      if (this.seekTime > 0) {
        let t = this.getSubRange(e, this.seekTime, r);
        if ((i = this.resetDemuxSampleIdx) != null) {
          i.call(this, this.seekTime, t);
        }
        this.loadFragment(e, t);
        this.seekTime = -1;
      } else {
        this.loadFragment(e, r);
      }
    }
  }
  getFragmentFromCache(e, t) {
    let { preloadCache } = this;
    if (!preloadCache || !preloadCache.segList) {
      return null;
    }
    let r = -1;
    let { segList, initSeg } = preloadCache;
    for (let t = 0; t < segList.length; t++) {
      if (segList[t].index === e) {
        r = t;
        break;
      }
    }
    if (r < 0) {
      return null;
    }
    {
      let i = segList[r];
      if (!(i.range[1] >= t[1])) {
        return null;
      }
      {
        let { startTime = 0, endTime = 0 } = this.adaptTimeRange[e];
        let s = [startTime, endTime];
        return {
          buffer: i.buffer,
          range: t,
          muxSampleIdxRange: i.muxSampleIdxRange,
          context: {
            range: t,
            fragIndex: e,
            state: true,
            adaptTimeRange: [s[0], s[1]],
          },
          state: true,
          initSeg: this._needInitSegment ? initSeg : undefined,
        };
      }
    }
  }
  cacheRepeatData(e, t, i) {
    let r;
    if (
      !(
        !e ||
        !(e != null && e.length) ||
        !((r = this._repeatInfo.data) != null && r.byteLength)
      ) &&
      (this._repeatInfo.startPos < 0 &&
        t[0] + i.byteLength >= e[0] &&
        t[0] + i.byteLength <= e[1] + 1 &&
        (this._repeatInfo.startPos = e[0]),
      this._repeatInfo.startPos >= 0 &&
        t[0] + i.byteLength >= e[0] &&
        t[0] + i.byteLength <= e[1] + 1)
    ) {
      let r = this._repeatInfo.startPos + this._repeatInfo.curDataPos - t[0];
      if (r < 0) {
        return;
      }
      let n = i.slice(r);
      if (
        this._repeatInfo.curDataPos + n.byteLength <
        this._repeatInfo.data.byteLength
      ) {
        this._repeatInfo.data.set(n, this._repeatInfo.curDataPos);
        this._repeatInfo.curDataPos += n.byteLength;
        this.log(
          ep.f.LOG,
          ", repeatInfo,startPos,",
          this._repeatInfo.startPos,
          ", curDataPos,",
          this._repeatInfo.startPos + this._repeatInfo.curDataPos,
          ",curAppendLen,",
          n.byteLength,
        );
      } else {
        try {
          let t = Math.max(
            2 * this._repeatInfo.data.byteLength,
            (e[1] - e[0]) * 2,
          );
          let i = tE(t);
          if (!i) {
            return;
          }
          i.set(this._repeatInfo.data.slice(0, this._repeatInfo.curDataPos), 0);
          i.set(n, this._repeatInfo.curDataPos);
          this._repeatInfo.curDataPos += n.byteLength;
          delete this._repeatInfo.data;
          this._repeatInfo.data = i;
          this.log(
            ep.f.LOG,
            "_repeatInfo,startPos,",
            this._repeatInfo.startPos,
            ", curDataPos,",
            this._repeatInfo.curDataPos,
          );
        } catch {
          console.error("repeat data cache  new array failed");
        }
      }
    }
  }
  _mux(e, t, i, r) {
    let { firstFrameTime, timeRecord } = this;
    if (firstFrameTime.firstmux < 0 && timeRecord.startMuxTime < 0) {
      this.timeRecord.startMuxTime = tT();
      firstFrameTime.startMuxTime = tT() - timeRecord.startLoadTime;
    }
    let s = this.getSamplesRange(i, "video");
    let o = this.getSamplesRange(i, "audio");
    this.log(ep.f.LOG, "mux videoSampleRange,", s, o);
    let l = [t, t + e.byteLength];
    if (this.transmuxerWorkerControl) {
      let n = {
        range: l,
        state: r,
        fragIndex: i,
      };
      this.log(
        ep.f.LOG,
        "[transmuxerworker start] ,range, ",
        JSON.stringify(l),
        ",dataLen,",
        e.byteLength,
        n,
      );
      this.transmuxerWorkerControl.transmux(
        this.workerSequence,
        e,
        t,
        s,
        o,
        this.meta.moov,
        this.useEME,
        this.secretKey,
        n,
      );
    } else {
      try {
        let h;
        if (!this.MP4Demuxer) {
          this.MP4Demuxer = new eX.Y(this.videoTrak, this.audioTrak, null, {
            openLog,
          });
        }
        let d = this.MP4Demuxer.demuxPart(
          e,
          t,
          s,
          o,
          this.meta.moov,
          this.useEME,
          this.keyValue,
        );
        if (
          !(
            this.FMP4Remuxer ||
            (this.checkCodecH265() && !this.options.supportHevc)
          )
        ) {
          this.FMP4Remuxer = new eZ.s(
            this.MP4Demuxer.videoTrack,
            this.MP4Demuxer.audioTrack,
            {
              openLog,
            },
          );
        }
        let { videoTrack, audioTrack } = d;
        let f = videoTrack == null ? undefined : videoTrack.samples;
        let g = (f == null ? undefined : f.length) > 0 ? f[0].sampleOffset : -1;
        let p =
          (f == null ? undefined : f.length) > 0
            ? f[f.length - 1].sampleOffset
            : -1;
        let m = audioTrack == null ? undefined : audioTrack.samples;
        let _ = (m == null ? undefined : m.length) > 0 ? m[0].sampleOffset : -1;
        let y =
          (m == null ? undefined : m.length) > 0
            ? m[m.length - 1].sampleOffset
            : -1;
        this.updateDemuxSampleIdxRange([g, p], [_, y]);
        this.log(
          ep.f.LOG,
          "[mux],videoTimeRange,",
          videoTrack == null ? undefined : videoTrack.startPts,
          "-",
          videoTrack == null ? undefined : videoTrack.endPts,
          ",videoSampleIdx",
          g,
          "-",
          p,
          ",audioTimeRange,",
          audioTrack == null ? undefined : audioTrack.startPts,
          "-",
          audioTrack == null ? undefined : audioTrack.endPts,
          ",audioSampleIdx",
          _,
          "-",
          y,
          i,
          JSON.stringify(l),
          r,
        );
        let v =
          r || (f == null ? undefined : f.length) > 0
            ? videoTrack == null
              ? undefined
              : videoTrack.startPts
            : -1;
        let T =
          r || (f == null ? undefined : f.length) > 0
            ? videoTrack == null
              ? undefined
              : videoTrack.endPts
            : -1;
        let b =
          r || (m == null ? undefined : m.length) > 0
            ? audioTrack == null
              ? undefined
              : audioTrack.startPts
            : -1;
        let S =
          r || (m == null ? undefined : m.length) > 0
            ? audioTrack == null
              ? undefined
              : audioTrack.endPts
            : -1;
        let timeRange = [Math.min(v, b), Math.max(T, S)];
        if (this.FMP4Remuxer) {
          let e = this.FMP4Remuxer.remux(this._needInitSegment, {
            initMerge: true,
            range: l,
          });
          if (e.initSegment) {
            this._needInitSegment = false;
          }
          h = {
            buffer: tx(e.audioSegment, e.videoSegment),
            range: l,
            state: r,
            context: {
              range: l,
              fragIndex: i,
              timeRange,
            },
            initSeg: e.initSegment,
          };
        } else {
          h = {
            videoTrack,
            audioTrack,
            buffer: null,
            range: l,
            state: r,
            context: {
              range: l,
              fragIndex: i,
              timeRange,
            },
          };
        }
        if (firstFrameTime.firstmux < 0 && timeRecord.startMuxTime > 0) {
          firstFrameTime.firstmux = tT() - timeRecord.startMuxTime;
        }
        if (this._loadSuccessCallBack) {
          this._loadSuccessCallBack(h);
        }
      } catch (error) {
        let msg = error == null ? undefined : error.message;
        this.log(ep.f.ERROR, "mux err:", msg);
        let n = new th(to.REMUX, ts.muxError, {
          msg,
        });
        this.errorHandler(n, "mux", {
          fragIndex: i,
          range: [t, t + e.byteLength],
        });
      }
    }
  }
  updateDemuxSampleIdxRange(e, t) {
    if ((e == null ? undefined : e[1]) >= 0) {
      this._lastDemuxSampleIdxRange.video = e[1];
    }
    if ((t == null ? undefined : t[1]) >= 0) {
      this._lastDemuxSampleIdxRange.audio = t[1];
    }
    this.log(
      ep.f.LOG,
      "updateDemuxSampleIdxRange",
      JSON.stringify(this._lastDemuxSampleIdxRange),
    );
  }
  async loadFragment(e, t) {
    this._curLoadSegIdx = e;
    let i = this.adaptTimeRange[e];
    if (
      this._isPending ||
      (t == null ? undefined : t[1]) === 0 ||
      !i ||
      i.isLoading ||
      (t == null ? undefined : t.length) === 0
    ) {
      return;
    }
    this._segmentToBitRateMap.set(e, this._bitRate);
    if (this.timeRecord.startLoadTime < 0) {
      this.timeRecord.startLoadTime = tT();
    }
    let { startPos, curDataPos } = this._repeatInfo;
    let { usedPos } = this._repeatInfo;
    if (
      t.length >= 2 &&
      t[1] &&
      t[1] > 0 &&
      t[0] >= startPos &&
      t[1] < startPos + curDataPos
    ) {
      i.isLoading = true;
      let s = Math.max(t[0], startPos + usedPos);
      let o = new Uint8Array(
        this._repeatInfo.data.slice(s - startPos, t[1] - startPos + 1),
      );
      this.log(ep.f.LOG, "[mp4.loadFragment] has all data: ", s, t[1]);
      this.log(
        ep.f.LOG,
        "[mp4.loadFragment] ",
        ",repeatInfo, startPos,",
        startPos,
        ", usedPos,",
        startPos + usedPos,
        ",curDataPos, ",
        startPos + curDataPos,
      );
      i.downloaded = true;
      if (this.metaLoading || startPos === 0) {
        this._repeatInfo.usedPos = 0;
        this.log(
          ep.f.LOG,
          "[mp4.loadFragment] has all data set repeatInfo.usedPos = 0",
        );
      } else {
        let e = i.range[0] - startPos;
        let t = i.range[1] + 1 - startPos;
        let n = new Uint8Array(this._repeatInfo.data.slice(e, t));
        this.resetRepeatInfo();
        this.cacheRepeatData(i.repeatRange, i.range, n);
      }
      this._mux(o, s, e, true);
    } else if (
      t.length >= 2 &&
      t[0] &&
      t[0] >= startPos &&
      t[0] <= startPos + curDataPos
    ) {
      if (!i.isLoading) {
        let s = Math.max(t[0], startPos + usedPos);
        let o = Math.min(t[1] + 1, startPos + curDataPos);
        let l = new Uint8Array(
          this._repeatInfo.data.slice(s - startPos, o - startPos),
        );
        if (l.byteLength > 0) {
          this._repeatInfo.usedPos = o - this._repeatInfo.startPos;
          let i = this._repeatInfo.usedPos;
          this.log(
            ep.f.LOG,
            "[mp4.loadFragment] has part data: ",
            s,
            s + l.byteLength,
          );
          this.log(
            ep.f.LOG,
            "[mp4.loadFragment] ",
            ",repeatInfo, startPos,",
            startPos,
            ", usedPos,",
            startPos + i,
            ",curDataPos, ",
            startPos + curDataPos,
          );
          this._mux(l, s, e, t[1] <= startPos + i);
          return;
        }
        if (!this.metaLoading && !i.isLoading) {
          this.log(
            ep.f.LOG,
            "[mp4.loadFragment] load part data >>> ",
            startPos + curDataPos,
            t[1],
          );
          i.isLoading = true;
          let s = [startPos + usedPos, t[1]];
          let o = i == null ? undefined : i.repeatRange;
          if (o && o[0] < s[0]) {
            let e = [i.repeatRange[0], s[0]];
            let {
              startPos: startPos_1,
              curDataPos: curDataPos_1,
              data,
            } = this._repeatInfo;
            let a = data.slice(e[0] - startPos_1, curDataPos_1);
            this.resetRepeatInfo();
            this.cacheRepeatData(i.repeatRange, e, a);
          } else {
            this.resetRepeatInfo();
          }
          await this.startLoad(s, e);
        }
      }
    } else {
      if (!((this.metaLoading && !(t[0] > startPos)) || i.isLoading)) {
        i.isLoading = true;
        this.log(
          ep.f.LOG,
          "[mp4.loadFragment],ready to load all data ,segmentIdx, ",
          e,
          ",range >>> ",
          t,
        );
        this.resetRepeatInfo();
        await this.startLoad(t, e);
      }
    }
  }
  resetRepeatInfo() {
    this.log(ep.f.LOG, ", resetRepeatInfo");
    this._repeatInfo.startPos = -1;
    this._repeatInfo.curDataPos = 0;
    this._repeatInfo.usedPos = 0;
  }
  setSwitchPCDNCallBack(e) {
    this._switchPCDNCallBack = e;
  }
  updateChangeBitRateTime(e) {
    this.changeBitRateTime = e;
  }
  async startLoad(t, i, r = false) {
    let n;
    let a;
    let s;
    let o;
    let { firstFrameTime } = this;
    if (
      i === 0 &&
      (firstFrameTime == null ? undefined : firstFrameTime.first_gop_req_cnt) <
        0
    ) {
      firstFrameTime.first_gop_req_cnt = 1;
    } else if (
      i > 0 &&
      (firstFrameTime == null ? undefined : firstFrameTime.first_gop_req_cnt) <
        0
    ) {
      firstFrameTime.first_gop_req_cnt = 0;
    }
    let h = this.selectedPCDN(r);
    let d = h || this.url;
    this.log(ep.f.LOG, "[startLoad], ", i, JSON.stringify(t), d);
    try {
      await this.MP4Loader.loadData(t, this.MP4Loader.cache, {
        index: i,
        onProgress: this.onprogressDataArrive,
        onProcessMinLen: this.options.onProcessMinLen,
        url: d,
        headers: h
          ? {
              "X-Origin-Server-Host": this._domain,
            }
          : null,
        priOptions: {
          type: h ? load_type : "cdn",
        },
      });
    } catch (error) {
      let r =
        ((a =
          (n = error == null ? undefined : error.options) == null
            ? undefined
            : n.priOptions) == null
          ? undefined
          : a.type) === load_type || !!h;
      let l = null;
      let d = error.url || (r ? h : this.url);
      if (r) {
        this.pcdnVVStat.conn_fail_num++;
        e.pcdn_download_failed_cnt++;
        l = this._pcdnNodeList.shift();
        this.emit(tJ, l);
        this.log(
          ep.f.ERROR,
          "pcdn load err, retry use cdn,range",
          t,
          ",fragIndex",
          i,
          (error == null ? undefined : error.isTimeout) ||
            ((s = error == null ? undefined : error.response) == null
              ? undefined
              : s.status),
          error == null ? undefined : error.message,
          d,
        );
        await this.startLoad(t, i, true);
      } else {
        this.log(
          ep.f.ERROR,
          "cdn load err,range",
          JSON.stringify(t),
          ",fragIndex",
          i,
          (error == null ? undefined : error.isTimeout) ||
            ((o = error == null ? undefined : error.response) == null
              ? undefined
              : o.status),
          error == null ? undefined : error.message,
          d,
        );
      }
      this.loadError(error, "loadFragment", r, {
        range: t,
        fragIndex: i,
        url: d,
      });
    }
  }
  loadError(e, t, i, r) {
    let n;
    let a;
    if (!e.response) {
      e.response = {};
    }
    if (e.isTimeout) {
      e.response.status = ts.timeout;
    } else if (
      !((n = e == null ? undefined : e.response) != null && n.status)
    ) {
      e.response.status = ts.networkError;
    }
    let s = tR(r == null ? undefined : r.url);
    this.markErrHost(s);
    this.emit(tW, {
      src: r == null ? undefined : r.url,
      host: s,
      errorCode:
        (a = e == null ? undefined : e.response) == null ? undefined : a.status,
      message: e == null ? undefined : e.message,
      range: (r == null ? undefined : r.range) && JSON.stringify(r.range),
      headers: r == null ? undefined : r.headers,
    });
    if (!i) {
      this.errorHandler(e, t, r);
    }
  }
  async loadAllFragmentData(t, i, r, n = false) {
    let a;
    let s;
    let o;
    let l;
    let h;
    let d;
    if (this.hasDestroyed) {
      return;
    }
    this.resetRepeatInfo();
    let u =
      ((a = this.adaptTimeRange[t]) == null ? undefined : a.range) ||
      this.getFragRange(t);
    this._curLoadSegIdx = t;
    let c = this.selectedPCDN(n);
    let f = tb(c || this.url, {
      __rand: new Date().getTime(),
    });
    try {
      this.log(
        ep.f.LOG,
        ",[loadAllFragmentData], index,",
        t,
        ",rang,",
        JSON.stringify(u),
        ", use-pcdn,",
        !!c,
      );
      let e = await this.MP4Loader.loadData(u, this.MP4Loader.cache, {
        index: t,
        url: f,
        headers: c
          ? {
              "X-Origin-Server-Host": this._domain,
            }
          : null,
        priOptions: {
          type: c ? load_type : "cdn",
        },
      });
      this.log(ep.f.LOG, "loadAllFragmentData after", t, JSON.stringify(u));
      if (!e || !e.data) {
        let e = Error("response null");
        if (r) {
          r(e);
        } else {
          this.loadError(e, "loadFragment", !!c, {
            range: u,
            fragIndex: t,
            url: c || this.url,
          });
        }
        return;
      }
      let { data } = e;
      if (
        (data == null ? undefined : data.byteLength) > 0 &&
        u &&
        u.length >= 2
      ) {
        this._receiveDataPos =
          u[0] + (data == null ? undefined : data.byteLength);
        this._loadSuccessCallBack = i;
        this.adaptTimeRange[t].downloaded = true;
        this.cacheRepeatData(this.adaptTimeRange[t].repeatRange, u, data);
        this._mux(data, u[0], t, true);
      } else {
        let i = tU(
          (s = e == null ? undefined : e.response) == null
            ? undefined
            : s.headers,
        );
        this.log(
          ep.f.LOG,
          "[FragLoadDowned check false, retry load],fragmentIdx,",
          t,
          ",dataLen,",
          data == null ? undefined : data.byteLength,
          JSON.stringify(u),
          JSON.stringify(i),
          f,
        );
        let r = Error("dataLen not match");
        this.resetRepeatInfo();
        let a = this.adaptTimeRange[t];
        this.emit(tX, [a.startTime, a.endTime]);
        this.loadError(r, "loadFragment", !!c, {
          range: u,
          fragIndex: t,
          url: f,
          headers: i,
        });
      }
    } catch (error) {
      let n =
        ((l =
          (o = error == null ? undefined : error.options) == null
            ? undefined
            : o.priOptions) == null
          ? undefined
          : l.type) === load_type || !!c;
      if (n) {
        e.pcdn_download_failed_cnt++;
        this._pcdnNodeList.shift();
        this.log(
          ep.f.ERROR,
          "[loadAllFragmentData] ,pcdn load err, retry use cdn,fragIndex",
          t,
          error.isTimeout ||
            ((h = error == null ? undefined : error.response) == null
              ? undefined
              : h.status),
          error == null ? undefined : error.message,
        );
        await this.loadAllFragmentData(t, i, r, true);
      } else {
        this.log(
          ep.f.ERROR,
          "[MP4] loadAllFragmentData error",
          {
            fragIndex: t,
            range: JSON.stringify(u),
          },
          error.isTimeout ||
            ((d = error == null ? undefined : error.response) == null
              ? undefined
              : d.status),
          error == null ? undefined : error.message,
        );
      }
      this.loadError(error, "loadFragment", n, {
        range: u,
        fragIndex: t,
        url: error.url || (n ? c : this.url),
      });
    }
  }
  currentLoadUseUrl() {
    let e;
    if (this._isUseCDN) {
      return this.url;
    }
    if (((e = this._pcdnNodeList) == null ? undefined : e.length) > 0) {
      return this._pcdnNodeList[0].url;
    }
    return "";
  }
  getCurSwitchPCDNCnt() {
    return this._PCDNSwitchCnt;
  }
  selectedPCDN(t) {
    let i;
    if (this._PCDNState === tQ || t) {
      this._isUseCDN = true;
      return;
    }
    if (this.isUsePCDN()) {
      if (this._isUseCDN) {
        if (this._switchPCDNCallBack) {
          let e = this._switchPCDNCallBack();
          if (e > 0) {
            this.options.switchPCDNMaxCnt = e;
          }
        }
        if (this._PCDNSwitchCnt >= this.options.switchPCDNMaxCnt) {
          this._isUseCDN = true;
          this.log(
            ep.f.LOG,
            "cdn switch pcdn outlimit, curSwitchCnt ,",
            this._PCDNSwitchCnt,
            ",maxCnt,",
            this.options.switchPCDNMaxCnt,
          );
          return null;
        }
        this._PCDNSwitchCnt++;
        this.log(
          ep.f.LOG,
          "cdn switch pcdn, curSwitchCnt,",
          this._PCDNSwitchCnt,
          ",maxCnt,",
          this.options.switchPCDNMaxCnt,
        );
      }
      this._isUseCDN = false;
      i = tb(this._pcdnNodeList[0].url, {
        __vid: this.options.vid,
      });
      if (this._lastPCDNUrl !== i) {
        this.emit(tz, i);
        this._lastPCDNUrl = i;
        this.pcdnVVStat.conn_req_num += 1;
      }
      e.pcdn_download_request_cnt++;
    } else {
      if (!this._isUseCDN) {
        this.log(
          ep.f.LOG,
          "pcdn switch cdn PCDNSwitchCnt,",
          this._PCDNSwitchCnt,
          ",maxCnt,",
          this.options.switchPCDNMaxCnt,
        );
        this.pcdnVVStat.conn_jump_num += 1;
      }
      this._isUseCDN = true;
    }
    return i;
  }
  async cancelLoading() {
    if (this.MP4Loader) {
      await this.MP4Loader.cancel();
    }
    if (
      this._optionDataLenInfo[load_type] &&
      this._optionDataLenInfo[load_type] > 0
    ) {
      this.emit(tY, {
        load_type,
        len: this._optionDataLenInfo[load_type],
      });
      this._optionDataLenInfo[load_type] = 0;
    }
    if (this._optionDataLenInfo.cdn && this._optionDataLenInfo.cdn > 0) {
      this.emit(tY, {
        load_type: "cdn",
        len: this._optionDataLenInfo.cdn,
      });
      this._optionDataLenInfo.cdn = 0;
    }
  }
  updateUrl(e, t) {
    let i = tR(e);
    if (!this._defaultDomain) {
      this._defaultDomain = i;
    }
    if (i.indexOf("www.") < 0) {
      this._domain = i;
    } else {
      this._domain = this._defaultDomain;
    }
    this.url = e;
    this.backUrl = t || [];
  }
  getDataBitRate(e) {
    return this._segmentToBitRateMap.get(e);
  }
  checkCodecH265() {
    return (
      this.meta &&
      (this.meta.videoCodec.indexOf("hvc1") > -1 ||
        this.meta.videoCodec.indexOf("hev1") > -1)
    );
  }
  checkCodecH266() {
    return this.meta && this.meta.videoCodec.indexOf("bvc2") > -1;
  }
  destroy() {
    if (!this.hasDestroyed) {
      this.resetTansmuxer();
      if (this.transmuxerWorkerControl) {
        this.transmuxerWorkerControl.destroy();
      }
      this.fileSize = 0;
      this.totalSize = 0;
      this._isPending = false;
      this.metaLoading = false;
      this.resetRepeatInfo();
      delete this._repeatInfo.data;
      this._bitRateInfoMap.clear();
      this._segmentToBitRateMap.clear();
      if (this.MP4Loader) {
        this.MP4Loader.cancel();
        this.MP4Loader.destroy();
      }
      this.removeAllListeners();
      this.hasDestroyed = true;
      this.pcdnVVStat = this.resetPCDNVVStat();
    }
  }
  resetPCDNVVStat() {
    return {
      try_req_node: 0,
      req_node_succ: 0,
      has_ret_node: 0,
      conn_req_num: 0,
      conn_fail_num: 0,
      conn_jump_num: 0,
    };
  }
  resetTansmuxer() {
    let e;
    if ((e = this.resetDemuxSampleIdx) != null) {
      e.call(this);
    }
    if (this.MP4Demuxer) {
      this.MP4Demuxer.reset();
    }
    this.MP4Demuxer = null;
    if (this.FMP4Remuxer) {
      this.FMP4Remuxer.reset();
    }
    this.FMP4Remuxer = null;
    if (this.transmuxerWorkerControl) {
      this.transmuxerWorkerControl.reset();
    }
  }
  getMediaEndTime() {
    if (this._mediaEndTime > 0) {
      return this._mediaEndTime;
    }
    let { videoTrak, audioTrak } = this;
    if ((videoTrak == null ? undefined : videoTrak.length) > 0) {
      let { endTime } = videoTrak[videoTrak.length - 1];
      this._mediaEndTime =
        this._mediaEndTime < 0
          ? endTime
          : Math.min(endTime, this._mediaEndTime);
    }
    if ((audioTrak == null ? undefined : audioTrak.length) > 0) {
      let { endTime } = audioTrak[audioTrak.length - 1];
      this._mediaEndTime =
        this._mediaEndTime < 0
          ? endTime
          : Math.min(endTime, this._mediaEndTime);
    }
    return this._mediaEndTime;
  }
};
e0(t1, "pcdn_download_request_cnt", 0);
e0(t1, "pcdn_download_failed_cnt", 0);
let t4 = t1;
class t2 extends t4 {
  constructor(e, t, i, r = [], n, a) {
    super(e, t, i, r, n, a);
    this._logTag = `${a}_gop`;
  }
  updateAdaptTimeRange(e, t) {
    this._lastTargetDur = t;
    let adaptTimeRange = this.adaptTimeRange;
    for (let r = 0; r < adaptTimeRange.length; r++) {
      let { timeRangeIdx } = adaptTimeRange[r];
      if (e >= timeRangeIdx[0] && e < timeRangeIdx[1]) {
        this.log(
          ep.f.LOG,
          "has adaptTimeRange,startSrcIdx, ",
          e,
          ",adaptTimeRangeIdx",
          r,
          ", dur,",
          t,
          JSON.stringify(adaptTimeRange[r]),
        );
        return r;
      }
    }
    let r =
      adaptTimeRange.length > 0
        ? adaptTimeRange[adaptTimeRange.length - 1].timeRangeIdx[1]
        : 0;
    if (r >= this.timeRange.length) {
      return adaptTimeRange.length - 1;
    }
    while (r < e) {
      let { startTime: startTime_1 } = this.timeRange[r];
      let { endTime } = this.timeRange[r];
      let i = {
        startTime: startTime_1,
        endTime,
        timeRangeIdx: [r, r + 1],
        duration: endTime - startTime_1,
        downloaded: false,
        isLoading: false,
      };
      this.adaptTimeRange.push(i);
      this.updateTimeRangeInAdaptTimeRangeIdx(
        i.timeRangeIdx,
        this.adaptTimeRange.length - 1,
      );
      this.log(
        ep.f.LOG,
        "gap adaptTimeRange,adaptTimeRangeIdx, ",
        this.adaptTimeRange.length - 1,
        JSON.stringify(i),
      );
      r++;
    }
    let n = 0;
    let a = r;
    let s = r;
    for (; s < this.timeRange.length; s++) {
      if (n < t) {
        n += this.timeRange[s].endTime - this.timeRange[s].startTime;
      } else {
        a = s;
        break;
      }
    }
    if (s === this.timeRange.length) {
      a = this.timeRange.length;
    }
    let timeRangeIdx = [r, a];
    let { startTime } = this.timeRange[timeRangeIdx[0]];
    let h =
      timeRangeIdx[1] === this.timeRange.length
        ? this.timeRange[timeRangeIdx[1] - 1].endTime
        : this.timeRange[timeRangeIdx[1]].startTime;
    let d = {
      startTime,
      endTime: h,
      timeRangeIdx,
      duration: h - startTime,
      downloaded: false,
      isLoading: false,
    };
    this.log(
      ep.f.LOG,
      "update adaptTimeRange,startIdx,",
      timeRangeIdx[0],
      ", dur,",
      t,
      JSON.stringify(d),
    );
    this.adaptTimeRange.push(d);
    this.updateTimeRangeInAdaptTimeRangeIdx(
      timeRangeIdx,
      this.adaptTimeRange.length - 1,
    );
    return this.adaptTimeRange.length - 1;
  }
  updateTimeRangeInAdaptTimeRangeIdx(e, t) {
    for (let i = e[0]; i < e[1]; i++) {
      if (i < this.timeRange.length) {
        this.timeRange[i].adaptTimeRangeIdx = t;
      }
    }
  }
  getAdaptIdxBySrcIdx(e, t) {
    let i;
    let length = this.adaptTimeRange.length;
    if (
      !t &&
      e >=
        ((i = this.adaptTimeRange[length - 1]) == null
          ? undefined
          : i.timeRangeIdx[1])
    ) {
      let t = this._lastTargetDur || 5;
      this.updateAdaptTimeRange(e, t);
    }
    for (let t = 0; t < this.adaptTimeRange.length; t++) {
      let { timeRangeIdx } = this.adaptTimeRange[t];
      if (timeRangeIdx && e >= timeRangeIdx[0] && e < timeRangeIdx[1]) {
        return t;
      }
    }
    return -1;
  }
  getFragmentIdx(e) {
    let t;
    let i;
    if (!this.videoTrak.length) {
      if ((i = this.audioTrak.find((t) => t.startTime <= e && t.endTime > e))) {
        return i.index;
      }
      return 0;
    }
    t = this.videoTrak.find((t) => t.startTime <= e && t.endTime > e);
    i = this.audioTrak.find((t) => t.startTime <= e && t.endTime > e);
    if (t && i) {
      return Math.min(t.index, i.index);
    }
    if (t || i) {
      if (t) {
        return t.index;
      }
      return i.index;
    }
    {
      let e = Number.MAX_VALUE;
      if (this.videoTrak && this.videoTrak.length > 0) {
        e = this.videoTrak.length - 1;
      }
      if (this.audioTrak && this.audioTrak.length > 0) {
        e = Math.min(this.audioTrak.length - 1, e);
      }
      return e;
    }
  }
  resetFragmentLoadState(e, t = false) {
    this.log(
      ep.f.LOG,
      ", resetFragmentLoadState, fragIndex, ",
      e,
      ",changeBitrate,",
      t,
    );
    for (let i = 0; i < this.adaptTimeRange.length; i++) {
      if (i < e) {
        this.adaptTimeRange[i].downloaded = true;
        this.adaptTimeRange[i].isLoading = true;
      } else {
        this.adaptTimeRange[i].downloaded = false;
        this.adaptTimeRange[i].isLoading = false;
      }
      if (t) {
        this.adaptTimeRange[i].range = null;
        let { timeRangeIdx } = this.adaptTimeRange[i];
        if (timeRangeIdx[0] >= this.timeRange.length) {
          this.log(
            ep.f.WARN,
            "fix adaptTimeRange fragIndex",
            e,
            " ,timeRangeIdx[0] >= this.timeRange.length, so end",
            timeRangeIdx[0],
            this.timeRange.length,
            ",endFragment,",
            i,
          );
          this.adaptTimeRange = this.adaptTimeRange.slice(0, i);
          break;
        }
        if (timeRangeIdx[1] >= this.timeRange.length) {
          this.log(
            ep.f.WARN,
            "fix adaptTimeRange fragIndex",
            e,
            " ,timeRangeIdx[1],",
            timeRangeIdx[1],
            ">>>>",
            this.timeRange.length,
            ",endFragment,",
            i,
          );
          timeRangeIdx[1] = this.timeRange.length;
          this.adaptTimeRange = this.adaptTimeRange.slice(0, i + 1);
        }
        this.adaptTimeRange[i].startTime =
          this.timeRange[timeRangeIdx[0]].startTime;
        this.adaptTimeRange[i].endTime =
          timeRangeIdx[1] >= this.timeRange.length
            ? this.timeRange[this.timeRange.length - 1].endTime
            : this.timeRange[timeRangeIdx[1]].endTime;
        this.adaptTimeRange[i].range = this.getFragRange(i);
      }
    }
  }
  calculateRange(e) {
    let t = null;
    let i = null;
    let r = null;
    let n = null;
    let a =
      e < this.adaptTimeRange.length
        ? this.adaptTimeRange[e].timeRangeIdx
        : null;
    if (!a) {
      this.log(
        ep.f.warn,
        "calculateRange err",
        e,
        JSON.stringify(this.adaptTimeRange),
      );
      return [];
    }
    let s = a[0];
    let o = a[1];
    this.log(ep.f.LOG, "getFragRange, timeRangeIdx,", JSON.stringify(a));
    let videoTrak = this.videoTrak;
    if (videoTrak) {
      t = s < videoTrak.length ? videoTrak[s] : videoTrak[videoTrak.length - 1];
      i =
        o < videoTrak.length
          ? videoTrak[o - 1]
          : videoTrak[videoTrak.length - 1];
    }
    let audioTrak = this.audioTrak;
    if (audioTrak) {
      r = s < audioTrak.length ? audioTrak[s] : audioTrak[audioTrak.length - 1];
      n =
        o < audioTrak.length
          ? audioTrak[o - 1]
          : audioTrak[audioTrak.length - 1];
    }
    let d = Math.min(
      (t == null ? undefined : t.range[0]) || Infinity,
      (r == null ? undefined : r.range[0]) || Infinity,
    );
    let u = Math.max(
      d,
      (i == null ? undefined : i.range[1]) || 0,
      (n == null ? undefined : n.range[1]) || 0,
    );
    let c = [d, u];
    this.log(ep.f.LOG, "calculateRange", e, c[0], "-", c[1]);
    return c;
  }
  getTimeRangeByIdx(e) {
    let t = null;
    let videoTrak = this.videoTrak;
    if (videoTrak) {
      t = e < videoTrak.length ? videoTrak[e] : videoTrak[videoTrak.length - 1];
    }
    let r = null;
    let audioTrak = this.audioTrak;
    if (audioTrak) {
      r = e < audioTrak.length ? audioTrak[e] : audioTrak[audioTrak.length - 1];
    }
    return [
      Math.min(
        (t == null ? undefined : t.range[0]) || Infinity,
        (r == null ? undefined : r.range[0]) || Infinity,
      ),
      Math.max(
        (t == null ? undefined : t.range[1]) - 1 || 0,
        (r == null ? undefined : r.range[1]) - 1 || 0,
      ),
    ];
  }
  getFragRange(e) {
    let t;
    if (
      e < this.adaptTimeRange.length &&
      (t = this.adaptTimeRange[e]) != null &&
      t.range
    ) {
      this.log(
        ep.f.LOG,
        "getFragRange exist",
        e,
        JSON.stringify(this.adaptTimeRange[e].range),
      );
      return this.adaptTimeRange[e].range;
    }
    let i = this.calculateRange(e);
    if (e < this.adaptTimeRange.length) {
      this.adaptTimeRange[e].range = i;
      let t = this.adaptTimeRange[e].timeRangeIdx[1];
      if (t < this.timeRange.length) {
        let r = this.getTimeRangeByIdx(t);
        if (
          (r == null ? undefined : r.length) > 1 &&
          r[0] < r[1] &&
          i[1] > r[0]
        ) {
          this.adaptTimeRange[e].repeatRange = [r[0], i[1]];
        }
      }
    }
    return i;
  }
  getSubRange(e, t, i) {
    let timeRangeIdx = this.adaptTimeRange[e].timeRangeIdx;
    let n = timeRangeIdx[0];
    for (let e = timeRangeIdx[0]; e < timeRangeIdx[1]; e++) {
      if (t >= this.timeRange[e].startTime && t < this.timeRange[e].endTime) {
        n = e;
        break;
      }
    }
    let a = [this.getSrcFragRange(n)[0], i[1]];
    this.log(
      ep.f.LOG,
      ">>>>>getSubRange finalRange ",
      JSON.stringify(a),
      ",oldRange,",
      JSON.stringify(i),
    );
    return a;
  }
  getSrcFragRange(e) {
    let t = null;
    let i = null;
    this.log(
      ep.f.LOG,
      "getFragRange, timeRangeIdx, srcFragment,",
      JSON.stringify(e),
    );
    let videoTrak = this.videoTrak;
    if (videoTrak) {
      t = e < videoTrak.length ? videoTrak[e] : videoTrak[videoTrak.length - 1];
    }
    let audioTrak = this.audioTrak;
    if (audioTrak) {
      i = e < audioTrak.length ? audioTrak[e] : audioTrak[audioTrak.length - 1];
    }
    let a = [
      Math.min(
        (t == null ? undefined : t.range[0]) || Infinity,
        (i == null ? undefined : i.range[0]) || Infinity,
      ),
      Math.max(
        (t == null ? undefined : t.range[1]) - 1 || 0,
        (i == null ? undefined : i.range[1]) - 1 || 0,
      ),
    ];
    this.log(ep.f.LOG, ",getSrcFragRange", e, a);
    return a;
  }
  getSamplesRange(e, t) {
    let i = [];
    let timeRangeIdx = this.adaptTimeRange[e].timeRangeIdx;
    switch (t) {
      case "video":
        if (this.videoTrak && timeRangeIdx[0] < this.videoTrak.length) {
          let { frames } = this.videoTrak[timeRangeIdx[0]];
          i.push(frames[0].index);
          let t = this.videoTrak.length;
          let n = timeRangeIdx[1] - 1;
          let a =
            n < t ? this.videoTrak[n].frames : this.videoTrak[t - 1].frames;
          i.push(a[a.length - 1].index);
        }
        break;
      case "audio":
        if (this.audioTrak && timeRangeIdx[0] < this.audioTrak.length) {
          let { frames } = this.audioTrak[timeRangeIdx[0]];
          i.push(frames[0].index);
          let t = this.audioTrak.length;
          let n = timeRangeIdx[1] - 1;
          let a =
            n < t ? this.audioTrak[n].frames : this.audioTrak[t - 1].frames;
          i.push(a[a.length - 1].index);
        }
        break;
      default:
        console.warn("[getSamplesRange] type ", t, " is invalid");
    }
    return i;
  }
}
function t3() {
  let userAgent = window.navigator.userAgent;
  let t = userAgent.indexOf("MSIE ");
  let i = userAgent.indexOf("Trident/");
  return t > 0 || i > 0;
}
function t5() {
  let e;
  let t;
  let i;
  let r;
  let n;
  return (
    !!navigator.requestMediaKeySystemAccess &&
    ((e =
      /Safari/.test(navigator.userAgent) &&
      !/Chrome/.test(navigator.userAgent)),
    (t = t3()),
    (i = (() => {
      let { mimeTypes } = navigator;
      let navigator_userAgent = navigator.userAgent;
      let i = false;
      if (mimeTypes && navigator_userAgent.indexOf("Chrome") > 1) {
        i = Object.keys(mimeTypes).some(
          (t) =>
            !!(
              (mimeTypes[t].type && mimeTypes[t].type.indexOf("360") > -1) ||
              (mimeTypes[t].type &&
                mimeTypes[t].type.indexOf(
                  "application/vnd.chromium.remoting-viewer",
                ) > -1) ||
              (mimeTypes[t].description &&
                mimeTypes[t].description.indexOf("360") > -1)
            ),
        );
      }
      return i;
    })()),
    (r = navigator.userAgent.indexOf("Firefox") > 0),
    (n = navigator.userAgent.indexOf("Edge") > 0),
    !e && !t && !i && !r && !n)
  );
}
function t6() {
  try {
    if (
      typeof WebAssembly === "object" &&
      typeof WebAssembly.instantiate === "function"
    ) {
      let e = new WebAssembly.Module(
        Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0),
      );
      if (e instanceof WebAssembly.Module) {
        return new WebAssembly.Instance(e) instanceof WebAssembly.Instance;
      }
    }
  } catch (error) {
    console.log(error);
  }
  return false;
}
function t8() {
  let e = (window.MediaSource = window.MediaSource || window.WebKitMediaSource);
  return e && typeof e.isTypeSupported === "function";
}
class t9 {
  constructor() {
    let e;
    let t;
    let i = new Promise((resolve, reject) => {
      e = resolve;
      t = reject;
    });
    i.id = `${new Date().getTime()}_${parseInt(100 * Math.random())}`;
    i.resolve = function (t) {
      e(t);
      i.state = "fulfilled";
    };
    i.reject = function (e) {
      t(e);
      i.state = "rejected";
      i.isBreak = e === "DESTROYED";
    };
    i.state = "pending";
    return i;
  }
  resolve(e) {}
  reject(e) {}
}
class t7 extends ez {
  init() {
    return Promise.resolve();
  }
  preloadPredict(e) {
    return e;
  }
}
let ie = "h264";
function it(e) {
  let { mediaType, definition, codecType, vtype } = e;
  let { vid } = e;
  mediaType = mediaType || "video";
  definition = definition || "-1";
  codecType = codecType || ie;
  vtype = vtype || VTYPES.MP4;
  if (vid) {
    return `${vid}#${mediaType}#${codecType}#${vtype}#${definition}`;
  }
  return null;
}
function ii(e, vid) {
  return (
    ((e, t) => {
      let i = -1;
      for (let r = 0; r < e.length; r++) {
        if (t === e[r].data.vid) {
          i = r;
          break;
        }
      }
      return i;
    })(e, vid) >= 0
  );
}
function ir(playingVids1, t) {
  for (let i = 0; i < playingVids1.length; i++) {
    if (playingVids1[i] === t) {
      return i;
    }
  }
  return -1;
}
let { PRELOAD_TYPES: PRELOAD_TYPES_1 } = eR;
export { PRELOAD_TYPES_1 as PRELOAD_TYPES };
let is = "preload_ended";
let io = 0;
let il = true;
let ih = null;
export class Mp4Preloader extends eK {
  constructor(e, t) {
    var i;
    let r = Mp4Preloader.getDefaultConfig(e);
    Object.keys(e).forEach((t) => {
      r[t] = e[t];
    });
    super(r);
    e0(this, "_updateRealTimeSpeed", (e) => {
      io = e.speed;
      this.emit(e4, e);
    });
    this.video = null;
    this._mp4 = null;
    this._pendingPromise = null;
    this.playerId = t.playerId || "default";
    this._nextPreloadCount = 0;
    this.isActive = true;
    this.MP4Loader = null;
    this.playingVids = [];
    this.playingVids1 = [];
    this.loadingCount = 0;
    let { logCacheLevel, logMaxSize } = this.options.logCacheConfig;
    this.logger = new ep.V("[Mp4Preloader]", {
      logCacheLevel,
      logMaxSize,
    });
    if (
      e.supportHevc === undefined &&
      !(typeof MediaSource === "undefined") &&
      MediaSource.isTypeSupported &&
      (MediaSource.isTypeSupported('video/mp4;codecs="hev1.1.6.L120.90"') ||
        MediaSource.isTypeSupported('video/mp4;codecs="hev1.2.4.L120.90"') ||
        MediaSource.isTypeSupported('video/mp4;codecs="hev1.3.E.L120.90"') ||
        MediaSource.isTypeSupported('video/mp4;codecs="hev1.4.10.L120.90"'))
    ) {
      this.options.supportHevc = true;
    }
    this.loadRangeType =
      ((i = this.options) == null ? undefined : i.loadRangeType) || "gop";
    t_(ep.f.DEBUG, "[Preloader] new preloader, playerId", this.playerId);
    this.update({
      preloadMaxCacheCount: this.options.preloadMaxCacheCount,
    });
  }
  static get PRELOAD_TYPES() {
    return PRELOAD_TYPES_1;
  }
  static get BitRateAdapter() {
    return ih;
  }
  static set BitRateAdapter(e) {
    ih = e;
  }
  static getDefaultConfig() {
    return {
      supportHevc: false,
      preloadTime: 5,
      preloadSize: 0,
      preloadType: 0,
      segmentMinDuration: 5,
      vtype: "MP4",
      codecType: "h264",
      preloadCacheType: 1,
      preloadMaxCacheCount: 5,
      globalKey: null,
      autoPreload: false,
      reqOptions: null,
      getRequestOptionsCallback: null,
      minBufferLength: 5,
      timeout: 3000,
      autoCheck: {
        enable: true,
        interval: 1000,
      },
      logCacheConfig: {
        logCacheLevel: 2,
        logMaxSize: 204800,
      },
      pcdnConfig: {
        openPreloadPCDN: false,
        enterMinBuffer: 10,
        outMaxBuffer: 5,
        pcdn_duration: 2,
        pcdn_open: true,
        openPCDN: true,
        minDuration: 25,
        trackerUrl: "",
      },
      switchPCDNMaxCnt: 2,
      retryCount: 1,
      retryDelay: 1000,
      loaderType: "fetch",
    };
  }
  static registerPreloader(e, t) {
    e.vtype = VTYPES.MP4;
    Mp4Preloader.BitRateAdapter = t;
    return new Mp4Preloader(e, this);
  }
  static getInfoByUniqueKey(e) {
    let t;
    let i;
    let r;
    t = e.split("#");
    i = ["vid", "mediaType", "codecType", "vtype", "definition"];
    r = {};
    t.forEach((e, t) => {
      r[i[t]] = e;
    });
    return r;
  }
  static generateUniqueKey(e) {
    return it(e);
  }
  static disable() {
    il = false;
  }
  static enable() {
    il = true;
  }
  set codecType(e) {
    this.options.codecType = e;
  }
  get codecType() {
    return this.options.codecType;
  }
  get vtype() {
    return this.options.vtype;
  }
  log(e, t, ...i) {
    t_(this.logger, e, t, ...i);
  }
  update(e) {
    Object.keys(e).forEach((t) => {
      this.options[t] = e[t];
    });
    if (this.preloadManager.setMaxCache) {
      this.preloadManager.setMaxCache(this.options.preloadMaxCacheCount);
    } else {
      this.preloadManager._cacheInst._maxCache =
        this.options.preloadMaxCacheCount;
    }
  }
  get currentPreloadInst() {
    return this.preloadManager._currentPreloadInst;
  }
  startCheckTask() {
    this.preloadManager.startCheckTask();
  }
  stopCheckTask() {
    this.preloadManager.stopCheckTask();
  }
  getPreloadMetaByVid(e) {
    let { allCachedKeys, allCachedTimeKeys } = this;
    return ((e, t, i) => {
      let r = [];
      let n = "";
      Object.keys(t).forEach((t) => {
        let i = ((e) => {
          if (!e) {
            throw Error(`key ${e} is empty`);
          }
          let t = e.split("#");
          if (t.length < 5) {
            throw Error(`key ${e} is not right format`);
          }
          return {
            vid: t[0],
            mediaType: t[1],
            codecType: t[2],
            vtype: t[3],
            definition: t[4],
            order: -1,
            timeStamp: 0,
            total: 0,
          };
        })(t);
        if (i.vid === e) {
          r.push(i);
          n = t;
        }
      });
      let a = null;
      if (n) {
        let e;
        e = [];
        Object.keys(i).forEach((t) => {
          e.push(Number(i[t]));
        });
        let t = e.sort((e, t) => e - t);
        let s = Number(i[n]);
        let o = ((e, t) => {
          for (let i = 0; i < e.length; i++) {
            if (e[i] === t) {
              return i;
            }
          }
          return -1;
        })(t, s);
        a = r[0];
        a.timeStamp = s;
        a.order = o;
        a.total = t.length;
      }
      return a;
    })(e, allCachedKeys, allCachedTimeKeys);
  }
  async getPreloadMemoryInfo() {
    let { allCachedKeys } = this;
    let memory = 0;
    let cnt = 0;
    for (let r in allCachedKeys) {
      if (allCachedKeys.hasOwnProperty(r)) {
        cnt++;
        try {
          let e = await this.getPreLoadData(r);
          memory += (e == null ? undefined : e.memory) || 0;
        } catch {}
      }
    }
    return {
      memory,
      cnt,
    };
  }
  getPreloadUnuseInfo() {
    let e = [];
    for (let [t, i] of e8) {
      if (e9.get(t)) {
        e8.delete(t);
      } else {
        let r = t.split("#");
        let n = (r == null ? undefined : r.length) > 0 ? r[0] : t;
        e.push({
          vid: n,
          bw: (i == null ? undefined : i.bw) || 0,
          pbw: (i == null ? undefined : i.pbw) || 0,
        });
      }
    }
    return e;
  }
  generateUniqueKey(e) {
    return it(e);
  }
  addPlayingItem(_playerId, t) {
    let i = this.checkPlaying("_playerId", _playerId);
    if (i > -1) {
      this.playingVids[i].vid = t;
    } else {
      this.playingVids.push({
        vid: t,
        _playerId,
      });
    }
    this.log(ep.f.LOG, "addPlayingItem", i, _playerId, t, this.playingVids);
  }
  delPlayingItem(e) {
    let t = this.checkPlaying("_playerId", e);
    this.log(ep.f.LOG, "delPlayingItem", t, e, this.playingVids);
    if (t > -1) {
      this.playingVids.splice(t, 1);
    }
  }
  checkPlaying(e, t) {
    let playingVids = this.playingVids;
    for (let r = 0; r < playingVids.length; r++) {
      if (t === playingVids[r][e]) {
        return r;
      }
    }
    return -1;
  }
  before() {
    this.handlers = {
      checkIfCanPreload: () => this.checkIfCanPreload(),
      start: (e) => {
        let t = e.payload || [];
        if (t.length === 0) {
          return Promise.reject(Error("preload_is_null"));
        }
        let { vid } = e;
        let r = e.vtype || VTYPES.MP4;
        let n = e.codecType || ie;
        let a = this.getUserSelectDefinition();
        let s = this.checkCacheKey(vid, t, a, r, n);
        this.log(
          ep.f.LOG,
          `${this.playerId} ${vid}`,
          `codecType:${n} vtype:${r} hasCache:${s}`,
        );
        if (s || r === "MP3") {
          return Promise.reject(Error(`vtype_${r}`));
        }
        let o = this.getInitDefinition(t, this.options.definition, a);
        this.log(
          ep.f.LOG,
          ` ${this.playerId} ${vid} getInitDefinition`,
          o == null ? undefined : o.definition,
        );
        if (!o) {
          return Promise.reject(Error("definition_error"));
        }
        let { definition, orgDefinition } = o;
        let d = o.vtype || r;
        let u = o.codecType || n;
        let preloadTime = e.preloadTime || this.options.preloadTime;
        let preloadSize = e.preloadSize || this.options.preloadSize || 390624;
        let g = this.generateUniqueKey({
          vid,
          definition,
          vtype: d,
          codecType: u,
        });
        if (this._nextPreloadCount > 0) {
          this._nextPreloadCount--;
        }
        t_(
          ep.f.LOG,
          `${vid} start duration:${o.duration} preloadTime:${preloadTime} cacheKey:${g},playerId:${this.playerId}`,
        );
        let p = {
          vid,
          definition,
          orgDefinition,
          preloadTime,
          preloadSize,
          cacheKey: g,
          codecType: u,
          vtype: d,
          ...o,
        };
        if (e.reqOptions) {
          p.reqOptions = e.reqOptions;
        }
        this.loadingCount++;
        this.log(
          ep.f.LOG,
          `start preload,${vid} loadingCount:${this.loadingCount},playerId:${this.playerId}`,
        );
        return this.start(p);
      },
      onRequest: ({ url, range, extData }, r) =>
        this.getData(url, range, extData, r),
    };
    this.loggerConfig = {
      logger: () => {},
      openLog: false,
    };
    this.predictInst = new t7(this.loggerConfig);
  }
  start(e) {
    let t = {
      mediaInfos: {
        dynamic_video_list: [],
        dynamic_audio_list: [],
      },
      onObtain: () => {
        let e = new t9();
        e.resolve(t.mediaInfos);
        return e;
      },
      onTransform: () => {
        let t = new t9();
        this._pendingPromise = t;
        let { preloadType } = this.options;
        this.emit("preload_start", {
          ...e,
          type: preloadType,
        });
        if (preloadType === PRELOAD_TYPES_1.DURATION) {
          this.loadByPreloadTime(e, t);
        } else {
          this.loadByChunkSize(e, t);
        }
        return t;
      },
    };
    return Promise.resolve(t);
  }
  getInitDefinition(e, t, i = null) {
    let r = null;
    if (Mp4Preloader.BitRateAdapter) {
      r = Mp4Preloader.BitRateAdapter.select(e, this.codecType, this.vtype);
      this.log(
        ep.f.DEBUG,
        "Mp4Preloader.BitRateAdapter",
        r == null ? undefined : r.type,
        r == null ? undefined : r.definition,
        r == null ? undefined : r.bitrate,
      );
    } else {
      r = ((e, t) => {
        let i = null;
        if (!e || e.length < 1) {
          return i;
        }
        for (let r = 0; r < e.length; r++) {
          let n = e[r];
          if (n.definition === t) {
            i = n;
            break;
          }
        }
        if (!i) {
          i = e[0];
        }
        return i;
      })(e, t);
    }
    if (!r) {
      r = e[0];
    }
    return r;
  }
  getPreLoadData(e) {
    let t = new t9();
    this.getItemSameVid(e)
      .then((e) => {
        this.log(ep.f.DEBUG, "[Preloader] getPreLoadData", !!e.value);
        if (e.value) {
          let {
            mediaSegList,
            meta,
            type,
            buffer,
            preloadTime,
            vid,
            cacheKey,
            definition,
            orgDefinition,
            byteLength,
            duration,
            fileSize,
            from,
            vtype,
            codecType,
            initSeg,
            bitrate,
            adaptTimeRange,
            repeatData,
            memory,
          } = e.value;
          let S = {
            vid,
            type,
            vtype,
            codecType,
            definition,
            orgDefinition,
            bitrate,
            cacheKey,
            duration: duration || 0,
            byteLength,
            from,
            adaptTimeRange,
            repeatData,
            memory,
            meta,
            preloadTime,
          };
          if (type === PRELOAD_TYPES_1.SIZE) {
            S.buffer = buffer;
            S.fileSize = fileSize || 0;
          } else {
            S.mediaSegList = mediaSegList;
            S.fileSize = fileSize || 0;
            S.initSeg = initSeg;
          }
          t.resolve(S);
        } else {
          t.resolve(null);
        }
      })
      .catch((e) => {
        t.reject(e);
      });
    return t;
  }
  async setPreLoadData(e, t) {
    let i;
    let r;
    let n = new t9();
    let {
      mediaSegList,
      meta,
      vid,
      definition,
      orgDefinition,
      type,
      buffer,
      duration,
      byteLength,
      preloadTime,
      fileSize,
      from,
      vtype,
      codecType,
      initSeg,
      bitrate,
      adaptTimeRange,
      repeatData,
    } = t;
    let L = {
      codecType,
      vtype,
      vid,
      definition,
      orgDefinition,
      cacheKey: e,
      type,
      from,
      meta,
      fileSize,
      adaptTimeRange,
      repeatData,
      bitrate,
    };
    L.memory = 0;
    L.memory += (repeatData == null ? undefined : repeatData.byteLength) || 0;
    if (type === PRELOAD_TYPES_1.SIZE) {
      L.buffer = buffer;
      L.byteLength = byteLength || 0;
      L.preloadSize = byteLength || 0;
      L.preloadTime = preloadTime || 0;
      L.fileSize = fileSize;
      if (L.buffer && L.buffer.byteLength > 0) {
        L.memory += (buffer == null ? undefined : buffer.byteLength) || 0;
        this.setItem(e, L);
        n.resolve(true);
      }
    } else {
      L.mediaSegList = [];
      L.duration = duration;
      L.byteLength = byteLength || 0;
      L.preloadTime = preloadTime || 0;
      L.initSeg = initSeg;
      L.memory += (initSeg == null ? undefined : initSeg.byteLength) || 0;
      L.fileSize = fileSize;
      mediaSegList.forEach((e) => {
        var t;
        L.memory +=
          ((t = e == null ? undefined : e.buffer) == null
            ? undefined
            : t.byteLength) || 0;
        L.mediaSegList.push(e);
      });
      if (meta && mediaSegList.length === 0) {
        this.log(
          ep.f.LOG,
          "[Preloader] meta setPreLoadData1 success",
          e,
          (i = L == null ? undefined : L.mediaSegList) == null
            ? undefined
            : i.length,
        );
        this.setItem(e, L);
        n.resolve(true);
      } else {
        let t = mediaSegList.every((e) => !!e.buffer && e.state);
        this.log(
          ep.f.LOG,
          "[Preloader] mediaSegList setPreLoadData1 success",
          e,
          (r = L == null ? undefined : L.mediaSegList) == null
            ? undefined
            : r.length,
          t,
        );
        if (!t) {
          n.resolve(false);
        }
        this.setItem(e, L).then(() => {
          this.log(ep.f.LOG, "[Preloader] setPreLoadData1 success", e);
        });
        n.resolve(true);
      }
    }
    return n;
  }
  getInitCacheData(e, t) {
    let i = {
      type: e,
      meta: null,
      byteLength: 0,
      fileSize: 0,
      bitrate: 0,
      preloadTime: 0,
    };
    if (e === PRELOAD_TYPES_1.DURATION) {
      i.mediaSegList = [];
      i.initSeg = null;
      i.duration = 0;
    } else {
      i.buffer = null;
    }
    Object.keys(t).map((e) => {
      i[e] = t[e];
    });
    return i;
  }
  updatePreCacheData(e, t, i, r, n, a, s, o, l) {
    let { mediaSegList, type } = e;
    if (type === PRELOAD_TYPES_1.SIZE || n === -1) {
      e.buffer = eJ(Uint8Array, e.buffer.buffer || [], new Uint8Array(t));
      return e;
    }
    let u = -1;
    for (let e = 0; e < mediaSegList.length; e++) {
      if (mediaSegList[e].index === n) {
        u = e;
        break;
      }
    }
    let c = a || [0, 0];
    if (u > -1) {
      if (t) {
        mediaSegList[u].buffer = eJ(
          Uint8Array,
          mediaSegList[u].buffer || [],
          new Uint8Array(t),
        );
      }
      if (i.length > 1) {
        if (mediaSegList[u].range.length > 1) {
          mediaSegList[u].range[1] = i[1];
        } else {
          mediaSegList[u].range = i;
        }
      }
      if (s[1] !== -1) {
        r = mediaSegList[u].range[1] >= s[1];
      }
      mediaSegList[u].state = r;
    } else {
      let { video, audio } = o;
      e.duration = c[1];
      mediaSegList.push({
        buffer: t,
        range: i || [],
        index: n,
        totalRange: s || [],
        timeRange: [c[0], c[1]],
        muxSampleIdxRange: {
          video,
          audio,
        },
        state: r,
      });
      let u = `${t == null ? undefined : t.byteLength},${JSON.stringify(i)},${n},${JSON.stringify(s)},${JSON.stringify(a)}`;
      this.log(
        ep.f.DEBUG,
        `[Preloader] ${e.cacheKey} mediaSegList set, dataLen`,
        u,
      );
    }
    if (r) {
      e.byteLength += i[1] - i[0];
      e.preloadTime += l;
    }
    return r;
  }
  checkCacheKey(e, t, definition, r = VTYPES.MP4, n = ie) {
    let a = this.getPreloadMetaByVid(e);
    if (a) {
      return this.generateUniqueKey(a);
    }
    if (definition) {
      let t = this.generateUniqueKey({
        vid: e,
        definition,
        vtype: r,
        codecType: n,
      });
      if (this.hasItemSameVid(t)) {
        return t;
      }
      return null;
    }
    for (let i = 0; i < t.length; i++) {
      let a = this.generateUniqueKey({
        vid: e,
        definition: t[i].definition,
        vtype: r,
        codecType: n,
      });
      if (this.hasItemSameVid(a)) {
        return a;
      }
    }
    return null;
  }
  attachPlayer(e) {
    this.video = e.video ? e.video : e;
  }
  detachPlayer() {
    this.video = null;
  }
  checkIfCanPreload() {
    let e;
    if (!il || this.loadingCount >= 1 || !this.isActive) {
      return false;
    }
    if (this.video) {
      let {
        minBufferLength,
        startPreloadControl,
        startPreloadMinBuffer,
        startPreloadMinPosTime,
      } = this.options;
      e = ((e, t) => {
        if (!e) {
          return false;
        }
        let i = ((e, t) => {
          let i = [0, 0];
          if (e) {
            for (
              let r = 0, n = e.length;
              r < n &&
              ((i[0] = e.start(r)),
              (i[1] = e.end(r)),
              !(i[0] <= t && t <= i[1]));
              r++
            );
          }
          if (i[0] - t <= 0 && t - i[1] <= 0) {
            return i;
          }
          return [0, 0];
        })(e.buffered, e.currentTime);
        let {
          startPreloadControl,
          startPreloadMinBuffer,
          startPreloadMinPosTime,
          minBufferLength,
        } = t;
        if (startPreloadControl) {
          let t = Math.max(i[1] - e.currentTime, 0);
          if (t > startPreloadMinBuffer) {
            if (
              e.currentTime > startPreloadMinPosTime ||
              e.currentTime > e.duration / 2
            ) {
              return true;
            }
          } else if (
            e.currentTime + startPreloadMinBuffer + 1 > e.duration &&
            e.currentTime + t > e.duration - 1
          ) {
            return true;
          }
        } else {
          let t =
            e.duration > minBufferLength + 5 ? minBufferLength : e.duration / 2;
          let r = Math.min(e.currentTime + minBufferLength, e.duration);
          let n = i[1] - r;
          if (e.currentTime > t && (n > 0 || Math.abs(n) < 1)) {
            return true;
          }
        }
        return false;
      })(this.video, {
        startPreloadControl,
        startPreloadMinBuffer,
        startPreloadMinPosTime,
        minBufferLength,
      });
    } else {
      e = this._nextPreloadCount > 0;
    }
    t_(
      ep.f.DEBUG,
      "[Preloader] checkIfCanPreload",
      !!this.video,
      `nextPreloadCount:${this._nextPreloadCount} ret:${e}`,
    );
    return e;
  }
  startPreloadNext(e = 1) {
    let t = true;
    this._nextPreloadCount = e;
    if (this.loadingCount >= 1 || !this.isActive) {
      t = false;
    }
    if (t) {
      this.preloadNext();
    }
    return t;
  }
  get realTimeSpeed() {
    return io;
  }
  getRequestOption(e) {
    let { getRequestOptionsCallback, reqOptions } = this.options;
    return (
      (e.reqOptions
        ? e.reqOptions
        : tv(getRequestOptionsCallback) === "Function"
          ? getRequestOptionsCallback(e)
          : reqOptions) || {}
    );
  }
  loadByPreloadTime(e, t) {
    let i;
    let {
      vid,
      cacheKey,
      preloadTime,
      definition,
      orgDefinition,
      duration,
      bitrate,
    } = e;
    let { codecType, vtype, size } = e;
    let f = tv(e.url) === "Array" ? e.url[0].src : e.url;
    if (!f) {
      return void this._endLoadFragments();
    }
    f = tb(f, {
      __vid: vid,
    });
    let { segmentMinDuration } = this.options;
    let segmentDuration =
      preloadTime >= segmentMinDuration ? segmentMinDuration : preloadTime;
    let m = this.getRequestOption({
      ...e,
      url: f,
    });
    this.log(
      ep.f.DEBUG,
      "[Preloader] loadByPreloadTime",
      `${e.cacheKey}, definition:${e.definition},segmentMinDuration:${segmentDuration}`,
    );
    let fileSize = size || tL(bitrate, duration);
    let y =
      (i = e == null ? undefined : e.pktOffsetMap) == null
        ? undefined
        : i.find((e) => {
            var t;
            return (
              (e == null ? undefined : e.time) ===
              (((t = this.options) == null ? undefined : t.firstLoadTimePos) ||
                5)
            );
          });
    let v = y == null ? undefined : y.offset;
    this._mp4 = new t2(
      f,
      bitrate,
      {
        segmentDuration,
        codecType: this.codecType,
        chunkSize: this.options.preloadSize,
        firstLoadSize: v,
        duration,
        fileSize,
        playerId: this.playerId,
        vid,
        useUrlRange: false,
        retryCount: 1,
        retryDelay: 1000,
        supportHevc: this.options.supportHevc,
        retryCheckFunc,
        switchPCDNMaxCnt: Number.MAX_VALUE,
        logger: this.logger,
        reqOptions: m,
        fixEditListOffset: this.options.fixEditListOffset,
      },
      [],
      this.firstFrameTime,
      "[Preloader]",
    );
    let T = this.getInitCacheData(PRELOAD_TYPES_1.DURATION, {
      vid,
      definition,
      orgDefinition,
      cacheKey,
      codecType,
      vtype,
      bitrate: bitrate || 0,
    });
    this._mp4.once("metaReady", async (i) => {
      var a;
      let _mp4 = this._mp4;
      if (_mp4) {
        this.log(
          ep.f.DEBUG,
          `[Preloader] ${vid} metaReady ${(a = T == null ? undefined : T.mediaSegList) == null ? undefined : a.length}`,
        );
        T.meta = i;
        T.from = 2;
        T.fileSize = _mp4.size;
        await _mp4.cancelLoading();
        if (!_mp4.hasDestroyed) {
          _mp4.metaLoading = false;
          this.emit("prf_meta_ready", {
            ...T,
          });
          await this.setPreLoadData(cacheKey, T);
          if (!_mp4.hasDestroyed) {
            this.startLoadByFragments(T, e, t);
          }
        }
      }
    });
    this._mp4.on(tj, (e) => {
      this.log(ep.f.ERROR, `[Preloader] ${vid} loadByPreloadTime error`);
      this._endLoadFragments();
      this.emit("error", e);
    });
    this._mp4.on(tY, (e) => {
      this.bwEventEmit(vid, e.load_type, e.len, null, cacheKey, e);
    });
    this._mp4.MP4Loader.on(e4, (e) => {
      var t;
      if ((e == null ? undefined : e.len) > 0) {
        let i =
          ((t = e == null ? undefined : e.priOptions) == null
            ? undefined
            : t.type) || "cdn";
        let a = tI(e.len, e.time);
        this.bwEventEmit(vid, i, e.len, a, cacheKey, e);
      }
    });
    this._mp4.init({});
  }
  bwEventEmit(e, t, cdn_size, r, n, a) {
    let s = e8.get(n) || {
      bw: 0,
      pbw: 0,
    };
    if (!(t && t !== "cdn")) {
      s.bw = s.bw + cdn_size;
      this.emit("prf_data_size", {
        vid: e,
        task_type: 2,
        cdn_size,
        cdn_speed: r,
        ...a,
      });
    }
    e8.set(n, s);
    this._updateRealTimeSpeed({
      speed: r,
      type: t || "cdn",
    });
  }
  async loadByChunkSize(e) {
    let t;
    let {
      vid,
      cacheKey,
      definition,
      orgDefinition,
      duration,
      bitrate,
      codecType,
      vtype,
      size,
    } = e;
    let { options } = this;
    let c = tv(e.url) === "Array" ? e.url[0].src : e.url;
    if (!c) {
      return void this._endLoadChunk();
    }
    c = tb(c, {
      __vid: vid,
    });
    let f = size || tL(bitrate, duration);
    let g =
      (t = e == null ? undefined : e.pktOffsetMap) == null
        ? undefined
        : t.find(
            (e) =>
              (e == null ? undefined : e.time) ===
              ((options == null ? undefined : options.firstLoadTimePos) || 5),
          );
    let p = g == null ? undefined : g.offset;
    let m = tu(duration, 800000, f);
    this.log(
      ep.f.LOG,
      `${vid} loadByChunkSize`,
      e.cacheKey,
      e.definition,
      p || m,
    );
    let _ = this.getInitCacheData(PRELOAD_TYPES_1.SIZE, {
      vid,
      definition,
      orgDefinition,
      cacheKey,
      codecType,
      vtype,
      fileSize: size,
      bitrate: bitrate || 0,
    });
    let y = this.getRequestOption({
      ...e,
      url: c,
    });
    this.MP4Loader = new eW.v({
      url: c,
      vid: `${vid}-${bitrate}`,
      retry: options.retryCount || 2,
      retryDelay: options.retryDelay || 1000,
      timeout: options.timeout || 3000,
      ...y,
      loaderType: options.loaderType,
      retryCheckFunc,
      openLog: tm(),
      fixEditListOffset: options.fixEditListOffset,
    });
    this.MP4Loader.on(e4, (e) => {
      var t;
      if ((e == null ? undefined : e.len) > 0) {
        let n =
          ((t = e == null ? undefined : e.priOptions) == null
            ? undefined
            : t.type) || "cdn";
        let a = tI(e.len, e.time);
        this.bwEventEmit(vid, n, e.len, a, cacheKey);
      }
    });
    try {
      let e = new Uint8Array(0);
      let t = 0;
      let n = null;
      let a = async (a, s, o, l, h) => {
        var d;
        if (!_.fileSize) {
          _.fileSize = Number(tF(h.headers));
        }
        if (a && o.range && o.range[0] === t) {
          e = eJ(Uint8Array, e, new Uint8Array(a));
          t += a.byteLength;
        }
        if (o.meta) {
          await this.MP4Loader.cancel();
          let l =
            ((d = a == null ? undefined : a.priOptions) == null
              ? undefined
              : d.type) || "cdn";
          this.bwEventEmit(vid, l, e.byteLength, null, cacheKey);
          let h = o.meta;
          let videoTrak = h.videoSegments;
          let audioTrak = h.audioSegments;
          _.meta = {
            ...h.meta,
            ext: {
              videoTrak,
              audioTrak,
            },
          };
          n = tP(0, videoTrak, audioTrak);
          _.buffer = e.slice(n[0]);
          _.byteLength = _.buffer.byteLength;
          let g = tP(1, videoTrak, audioTrak);
          let repeatRange = [];
          if (g[0] < g[1] && n[1] > g[0]) {
            repeatRange = [g[0], n[1]];
          }
          let m =
            (videoTrak == null ? undefined : videoTrak.length) > 0
              ? videoTrak
              : audioTrak;
          let { startTime } = m[0];
          let { endTime } = m[0];
          let T = {
            startTime,
            endTime,
            range: [...n],
            repeatRange,
            duration: endTime - startTime,
            downloaded: false,
            isLoading: false,
          };
          T.timeRangeIdx = [0, 1];
          _.adaptTimeRange = [T];
          this.log(
            ep.f.LOG,
            `${vid} loadMetaProcess ret`,
            cacheKey,
            e.byteLength,
            JSON.stringify(n),
            _.buffer.byteLength,
            JSON.stringify(repeatRange),
          );
          this.setPreLoadData(cacheKey, _);
          let b = [t, n[1]];
          this.log(
            ep.f.LOG,
            `${cacheKey} loadMetaProcess end, loadOneChunk start`,
            s,
            JSON.stringify(b),
            t,
            e.byteLength,
          );
          this._loadOneChunk(_, b, c, T.duration);
        }
      };
      await this.MP4Loader.loadMetaProcess(
        this.MP4Loader.cache,
        [0, p || m],
        a,
      );
    } catch (error) {
      console.error(`[Preloader] ${cacheKey} loadByChunkSize error`, error);
      this._endLoadChunk();
    }
  }
  async _loadOneChunk(e, t, url, r) {
    if ((t == null ? undefined : t.length) > 0 && t[0] >= t[1]) {
      this._endLoadChunk();
      this.emit(is, e);
      return;
    }
    let { vid, cacheKey, buffer } = e;
    try {
      let o = await this.MP4Loader.loadData(t, this.MP4Loader.cache, {
        index: 0,
        url,
        priOptions: {},
      });
      this.log(ep.f.LOG, `${vid} _loadOneChunk`, JSON.stringify(t), cacheKey);
      let { response, data } = o;
      if (data) {
        this._endLoadChunk();
        if (response && response.headers) {
          let t = tL(response.headers);
          if (t) {
            e.fileSize = t;
          }
        }
        e.buffer = tx(buffer, data);
        e.byteLength = e.buffer.byteLength;
        e.preloadTime += r;
        this.log(
          ep.f.LOG,
          `${vid} _loadOneChunk ret`,
          cacheKey,
          e.buffer.byteLength,
          data == null ? undefined : data.byteLength,
        );
        e.from = 4;
        this.setPreLoadData(cacheKey, e);
      } else {
        this._endLoadChunk();
      }
    } catch (error) {
      this.log(
        ep.f.ERROR,
        `[Preloader] ${vid} loadByChunkSize error`,
        error == null ? undefined : error.message,
      );
      this._endLoadChunk();
    }
  }
  _endLoadChunk() {
    this.log(
      ep.f.LOG,
      `_endLoadChunk loadingCount:${this.loadingCount}`,
      this._pendingPromise ? this._pendingPromise.state : null,
    );
    if (this._pendingPromise) {
      this._pendingPromise.resolve();
      this._pendingPromise = null;
    }
    if (this.loadingCount > 0) {
      this.loadingCount--;
    }
    if (this.MP4Loader) {
      this.MP4Loader.cancel();
      this.MP4Loader.destroy();
      this.MP4Loader = null;
    }
  }
  getAdaptRanges(e, t) {
    let { timeRange } = e;
    for (let r = 0; r < timeRange.length && timeRange[r].startTime <= t; r++) {
      e.updateAdaptTimeRange(r, 1);
      e.getFragRange(r);
    }
    return this._mp4.adaptTimeRange;
  }
  async startLoadByFragments(e, t) {
    let { preloadTime, vid } = t;
    this.log(ep.f.LOG, `[Preloader] ${vid} startLoadByFragments`, t);
    let n = this.getAdaptRanges(this._mp4, preloadTime);
    let a = (e) => {
      this.log(
        ep.f.ERROR,
        `[Preloader] ${vid} _failedCallback error`,
        e == null ? undefined : e.message,
      );
      this.emit("error", e);
      this._endLoadFragments();
    };
    let s = async (t) => {
      var i;
      if (!this._mp4) {
        return;
      }
      let { buffer, context, state, initSeg } = t;
      let { fragIndex, range, timeRange } = context;
      let { _repeatInfo, adaptTimeRange } = this._mp4;
      let p = adaptTimeRange[fragIndex];
      let m = p == null ? undefined : p.range;
      let _ = p == null ? undefined : p.duration;
      if (!e.initSeg && initSeg) {
        e.initSeg = initSeg;
        e.adaptTimeRange = adaptTimeRange;
      }
      let _lastDemuxSampleIdxRange = this._mp4._lastDemuxSampleIdxRange;
      e.repeatData =
        ((i = _repeatInfo.data) == null
          ? undefined
          : i.slice(0, _repeatInfo.curDataPos)) || [];
      let v = this.updatePreCacheData(
        e,
        buffer,
        range,
        state,
        fragIndex,
        timeRange,
        m,
        _lastDemuxSampleIdxRange,
        _,
      );
      this.log(
        ep.f.LOG,
        `[Preloader] ${e.cacheKey} _successCallback`,
        fragIndex,
        state,
        v,
        e,
      );
      e.from = 3;
      if (v) {
        await this.setPreLoadData(e.cacheKey, e);
        if (fragIndex >= n.length - 1) {
          this.log(
            ep.f.LOG,
            `[Preloader] ${e.cacheKey} mp4.load end`,
            fragIndex,
          );
          this.emit(is, e);
          this._endLoadFragments();
        } else {
          this.log(
            ep.f.LOG,
            `[Preloader] ${e.cacheKey} mp4.load start`,
            fragIndex + 1,
          );
          await this._mp4.loadAllFragmentData(fragIndex + 1, s, a);
        }
      }
    };
    await this._mp4.loadAllFragmentData(0, s, a);
  }
  _endLoadFragments() {
    this.log(
      ep.f.LOG,
      `[Preloader] _endLoadFragments loadingCount:${this.loadingCount},${this.playerId}`,
      this._pendingPromise ? this._pendingPromise.state : null,
    );
    if (this._pendingPromise) {
      this._pendingPromise.resolve();
      this._pendingPromise = null;
    }
    if (this.loadingCount > 0) {
      this.loadingCount--;
    }
    if (this._mp4) {
      this._mp4.cancelLoading();
      this._mp4.destroy();
      this._mp4 = null;
    }
  }
  getFragment(e, t, i, r, n, a = {}) {
    let s = new t9();
    this.getData(e, t, a, false).then((e) => {
      r.createFragment(new Uint8Array(e.res), t[0] - r.mdatStart, i, {
        range: t,
        context: e.context,
      }).then((e) => {
        s.resolve(e);
      });
    });
    return s;
  }
  getPreloadUrl({ url, range, definition, vid }) {
    return [
      {
        url,
        range,
        extData: {
          cacheKey: Mp4Preloader.generateUniqueKey({
            vid,
            start: range[0],
            end: range[1],
            definition,
          }),
          vid,
          format: "mp4",
        },
      },
    ];
  }
  getRangeList(e) {
    let { allCachedKeys } = this;
    let i = {
      timeRange: [],
      contentRange: [],
    };
    for (let r in allCachedKeys) {
      if (allCachedKeys.hasOwnProperty(r) && r.indexOf(e) > -1) {
        let e = r.split("#");
        if (e[2].indexOf("pretime") === 0) {
          i.timeRange.push([0, parseFloat(e[2].slice(7))]);
        } else {
          i.contentRange.push([parseInt(e[2]), parseInt(e[3])]);
        }
      }
    }
    return i;
  }
  hasItemSameVid(e) {
    if (!e) {
      return null;
    }
    let t = e.split("#");
    let i = Object.keys(this.allCachedKeys);
    for (let r = 0; r < i.length; r++) {
      let n = i[r];
      if (n === e) {
        return n;
      }
      let a = n.split("#");
      if (a.length >= 4 && t.length >= 4 && a[0] === t[0]) {
        if (a[2].indexOf("pretime") === 0 && t[2].indexOf("pretime") === 0) {
          return n;
        }
        {
          let e = [parseInt(a[2]), parseInt(a[3])];
          let i = [parseInt(t[2]), parseInt(t[3])];
          if (i[0] >= e[0] && i[1] > i[0] && i[1] <= e[1]) {
            return n;
          }
        }
      }
    }
    return null;
  }
  removeOthers(e = []) {
    let { allCachedKeys } = this;
    for (let i in allCachedKeys) {
      if (allCachedKeys.hasOwnProperty(i) && i.split("#").length >= 1) {
        let t = i.split("#")[0];
        if (e.every((e) => e.split("#").length >= 1 && e.split("#")[0] !== t)) {
          this.log(ep.f.LOG, `remove cache:${i}`);
          this.cacheInst.removeItem(i);
        }
      }
    }
  }
  removeAll() {
    let { allCachedKeys } = this;
    for (let t in allCachedKeys) {
      if (allCachedKeys.hasOwnProperty(t)) {
        this.log(ep.f.DEBUG, `remove cache:${t}`);
        this.cacheInst.removeItem(t);
      }
    }
  }
  removeAllPreloadTask() {
    this.preloadManager._preloadDataList = [];
    this.playingVids = [];
  }
  getItemSameVid(e, t) {
    let i = this.hasItemSameVid(e);
    this.log(ep.f.DEBUG, `getItemSameVid: key:${e} checkResult:${i}`);
    if (i) {
      return this.cacheInst.getItem(i, t).then((e) => ({
        value: e,
        key: i,
      }));
    }
    return Promise.resolve({});
  }
  setItem(e, t) {
    return this.cacheInst.setItem(e, t);
  }
  removeItem(e, t) {
    return this.cacheInst.removeItem(e, t);
  }
  get allCachedKeys() {
    return this.cacheInst._allCachedKeys || {};
  }
  get allCachedTimeKeys() {
    return this.cacheInst._allCachedTimeKeys || {};
  }
  get cacheInst() {
    return this.preloadManager._cacheInst;
  }
  get preloadQueueList() {
    return this.preloadManager._preloadDataList || [];
  }
  cancelPreloadByVid(e, t) {
    if (!e) {
      return;
    }
    let { _preloadDataList } = this.preloadManager;
    let r = [];
    for (let t = 0; t < _preloadDataList.length; t++) {
      let { data } = _preloadDataList[t];
      if (data.vid !== e) {
        r.push(_preloadDataList[t]);
      } else {
        this.log(ep.f.LOG, "cancelPreloadByVid", e);
      }
    }
    this.preloadManager._preloadDataList = r;
    let currentPreloadInst = this.currentPreloadInst;
    let a =
      currentPreloadInst && currentPreloadInst.options
        ? currentPreloadInst.options
        : {};
    this.log(ep.f.LOG, "cancelPreloadByVid", e, t, e === a.vid, a);
    if (a.vid === e) {
      this.cancelLoading();
    }
    this.addPlayingItem(t, e);
  }
  addPlayingVid(e) {
    if (!e) {
      return;
    }
    let { _preloadDataList } = this.preloadManager;
    let i = _preloadDataList.filter((t) => t.data.vid !== e);
    this.preloadManager._preloadDataList = i;
    let currentPreloadInst = this.currentPreloadInst;
    let n =
      currentPreloadInst && currentPreloadInst.options
        ? currentPreloadInst.options
        : {};
    this.log(ep.f.LOG, "cancelPreloadByVid", e, e === n.vid, n);
    if (n.vid === e) {
      this.cancelLoading();
    }
    if (!(ir(this.playingVids1, e) >= 0)) {
      this.playingVids1.push(e);
    }
  }
  removePlayingVid(e) {
    let t = ir(this.playingVids1, e);
    if (t >= 0) {
      this.playingVids1.splice(t, 1);
    }
  }
  cancelLoading() {
    this.log(ep.f.LOG, "cancelLoading");
    this._endLoadFragments();
    this._endLoadChunk();
  }
  clearTaskItem(e) {
    let { preloadManager } = this;
    if (preloadManager._currentPreloadInst) {
      let { _toLoadList } = preloadManager._currentPreloadInst;
      let r = [];
      _toLoadList.map((t) => {
        if (t._playerId !== e) {
          r.push(t);
        }
        return t;
      });
      preloadManager._currentPreloadInst._toLoadList = r;
    }
    let i = [];
    let r = [];
    this.log(
      ep.f.LOG,
      "clearTaskItem before",
      e,
      preloadManager._preloadDataList.length,
    );
    preloadManager._preloadDataList.map((t) => {
      if (t._playerId !== e) {
        i.push(t);
      } else {
        r.push(t.data.vid);
      }
      return t;
    });
    this.log(
      ep.f.LOG,
      "clearTaskItem",
      e,
      r.join(","),
      preloadManager._preloadDataList.length,
    );
    preloadManager._preloadDataList = i;
  }
  clearTask() {
    let { preloadManager } = this;
    preloadManager._preloadDataList = [];
  }
  addPreloader(e) {
    if (!e.data) {
      return;
    }
    let { _preloadDataList } = this.preloadManager;
    let { vid } = e.data;
    let r = ii(_preloadDataList || [], vid);
    let n = ir(this.playingVids1, vid) >= 0;
    this.log(ep.f.LOG, "[Preloader] addPreloader checkIfVidInList", vid, r);
    if (r || n) {
      return;
    }
    let a = tS({}, e);
    if (!a.vtype) {
      a.vtype = VTYPES.MP4;
    }
    this.addDashPreloader(a);
  }
  addPreloaderList(e = []) {
    let t = [];
    let { _preloadDataList } = this.preloadManager;
    for (let r = 0; r < e.length; r++) {
      let { vid, vtype } = e[r].data;
      let s = ii(_preloadDataList || [], vid);
      let o = ir(this.playingVids1, vid) >= 0;
      this.log(
        ep.f.LOG,
        "[Preloader] addPreloaderList checkIfVidInList",
        vid,
        s,
        o,
      );
      if (s || o) {
        continue;
      }
      let l = tS({}, e[r]);
      if (!vtype) {
        l.data.vtype = VTYPES.MP4;
      }
      t.push(l);
    }
    this.log(ep.f.LOG, `[Preloader] addPreloaderList length is ${t.length}`);
    this.addDashPreloaderList(t);
    return t;
  }
  setUserSelectDefinition(e) {
    if (this.preloadManager) {
      this.preloadManager.userDefinition = e;
    }
  }
  getUserSelectDefinition() {
    return this.preloadManager.userDefinition || null;
  }
  cancel(e) {
    this.clearTaskItem(e);
    this.delPlayingItem(e, null);
  }
  destroy(e) {
    this.cancelLoading();
    this.clearTaskItem(e);
    this.delPlayingItem(e, null);
  }
  on(e, t, ...i) {
    super.on(e, t, ...i);
  }
  off(e, t, ...i) {
    super.off(e, t, ...i);
  }
}
const ip = (e, t, i) => {
  let r;
  if ((r = typeof t !== "symbol" ? t + "" : t) in e) {
    return Object.defineProperty(e, r, {
      enumerable: true,
      configurable: true,
      writable: true,
      value: i,
    });
  }
  return (e[r] = i);
};
function i_(e, t) {
  if (!(e instanceof t)) {
    throw TypeError("Cannot call a class as a function");
  }
}
function iy(e, t) {
  for (let i = 0; i < t.length; i++) {
    const r = t[i];
    r.enumerable = r.enumerable || false;
    r.configurable = true;
    if ("value" in r) {
      r.writable = true;
    }
    Object.defineProperty(e, iL(r.key), r);
  }
}
function iv(e, t, i) {
  if (t) {
    iy(e.prototype, t);
  }
  if (i) {
    iy(e, i);
  }
  Object.defineProperty(e, "prototype", {
    writable: false,
  });
  return e;
}
function iL(key) {
  const t = ((e, t) => {
    if (typeof e !== "object" || !e) {
      return e;
    }
    const i = e[Symbol.toPrimitive];
    if (i !== undefined) {
      const r = i.call(e, t);
      if (typeof r !== "object") {
        return r;
      }
      throw TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(e);
  })(key, "string");
  if (typeof t === "symbol") {
    return t;
  }
  return t + "";
}
function ix(e) {
  return (ix =
    typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          if (
            e &&
            typeof Symbol === "function" &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
          ) {
            return "symbol";
          }
          return typeof e;
        })(e);
}
const iP =
  typeof window !== "undefined" &&
  window.location &&
  window.location.href.indexOf("xgplayerdebugger=1") > -1;
const iR = "%c[xgplayer]";
const iE = {
  config: {
    debug: 3 * !!iP,
  },
  logInfo: function (e) {
    let t;
    for (
      var i = arguments.length, r = Array(i > 1 ? i - 1 : 0), n = 1;
      n < i;
      n++
    ) {
      r[n - 1] = arguments[n];
    }
    if (this.config.debug >= 3) {
      (t = console).log.apply(
        t,
        [iR, "color: #525252; background-color: #90ee90;", e].concat(r),
      );
    }
  },
  logWarn: function (e) {
    let t;
    for (
      var i = arguments.length, r = Array(i > 1 ? i - 1 : 0), n = 1;
      n < i;
      n++
    ) {
      r[n - 1] = arguments[n];
    }
    if (this.config.debug >= 1) {
      (t = console).warn.apply(
        t,
        [iR, "color: #525252; background-color: yellow; ", e].concat(r),
      );
    }
  },
  logError: function (e) {
    let t;
    if (!(this.config.debug < 1)) {
      const i = this.config.debug >= 2 ? "trace" : "error";
      for (
        var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), a = 1;
        a < r;
        a++
      ) {
        n[a - 1] = arguments[a];
      }
      (t = console)[i].apply(
        t,
        [iR, "color: #525252; background-color: red;", e].concat(n),
      );
    }
  },
};
const iC = iv(
  function e(t) {
    i_(this, e);
    this.bufferedList = t;
  },
  [
    {
      key: "start",
      value: function (e) {
        return this.bufferedList[e].start;
      },
    },
    {
      key: "end",
      value: function (e) {
        return this.bufferedList[e].end;
      },
    },
    {
      key: "length",
      get: function () {
        return this.bufferedList.length;
      },
    },
  ],
);
const ik = {};
ik.createDom = function () {
  const e =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "div";
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  const i =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  const r =
    arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
  const n = document.createElement(e);
  n.className = r;
  n.innerHTML = t;
  Object.keys(i).forEach((t) => {
    const r = i[t];
    if (e === "video" || e === "audio" || e === "live-video") {
      if (r) {
        n.setAttribute(t, r);
      }
    } else {
      n.setAttribute(t, r);
    }
  });
  return n;
};
ik.createDomFromHtml = function (e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const i =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  try {
    let r = document.createElement("div");
    r.innerHTML = e;
    let n = r.children;
    r = null;
    if (n.length > 0) {
      n = n[0];
      if (i) {
        ik.addClass(n, i);
      }
      if (t) {
        Object.keys(t).forEach((e) => {
          n.setAttribute(e, t[e]);
        });
      }
      return n;
    }
    return null;
  } catch (error) {
    iE.logError("util.createDomFromHtml", error);
    return null;
  }
};
ik.hasClass = function (e, t) {
  if (!e || !t) {
    return false;
  }
  try {
    return Array.prototype.some.call(e.classList, function (e) {
      return e === t;
    });
  } catch {
    const i =
      e.className && ix(e.className) === "object"
        ? e.getAttribute("class")
        : e.className;
    return i && !!i.match(RegExp("(\\s|^)" + t + "(\\s|$)"));
  }
};
ik.addClass = function (e, t) {
  if (!(!e || !t)) {
    try {
      t.replace(/(^\s+|\s+$)/g, "")
        .split(/\s+/g)
        .forEach((t) => {
          if (t) {
            e.classList.add(t);
          }
        });
    } catch {
      if (!ik.hasClass(e, t)) {
        if (e.className && ix(e.className) === "object") {
          e.setAttribute("class", e.getAttribute("class") + " " + t);
        } else {
          e.className += " " + t;
        }
      }
    }
  }
};
ik.removeClass = function (e, t) {
  if (!(!e || !t)) {
    try {
      t.replace(/(^\s+|\s+$)/g, "")
        .split(/\s+/g)
        .forEach((t) => {
          if (t) {
            e.classList.remove(t);
          }
        });
    } catch {
      if (ik.hasClass(e, t)) {
        t.split(/\s+/g).forEach((t) => {
          const i = RegExp("(\\s|^)" + t + "(\\s|$)");
          if (e.className && ix(e.className) === "object") {
            e.setAttribute("class", e.getAttribute("class").replace(i, " "));
          } else {
            e.className = e.className.replace(i, " ");
          }
        });
      }
    }
  }
};
ik.toggleClass = function (e, t) {
  if (e) {
    t.split(/\s+/g).forEach((t) => {
      if (ik.hasClass(e, t)) {
        ik.removeClass(e, t);
      } else {
        ik.addClass(e, t);
      }
    });
  }
};
ik.classNames = function () {
  const e = arguments;
  const t = [];
  const i = (i) => {
    if (ik.typeOf(e[i]) === "String") {
      t.push(e[i]);
    } else if (ik.typeOf(e[i]) === "Object") {
      Object.keys(e[i]).map((r) => {
        if (e[i][r]) {
          t.push(r);
        }
      });
    }
  };
  for (let r = 0; r < arguments.length; r++) {
    i(r);
  }
  return t.join(" ");
};
ik.findDom = function () {
  let e;
  const t =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : document;
  const i = arguments.length > 1 ? arguments[1] : undefined;
  try {
    e = t.querySelector(i);
  } catch (error) {
    iE.logError("util.findDom", error);
    if (i.indexOf("#") === 0) {
      e = t.getElementById(i.slice(1));
    }
  }
  return e;
};
ik.getCss = function (e, t) {
  if (e.currentStyle) {
    return e.currentStyle[t];
  }
  return document.defaultView.getComputedStyle(e, false)[t];
};
ik.padStart = function (e, t, i) {
  const r = String(i);
  const n = 0 | t;
  for (var a = Math.ceil(n / r.length), s = [], o = String(e); a--;) {
    s.push(r);
  }
  return s.join("").substring(0, n - o.length) + o;
};
ik.format = function (e) {
  if (window.isNaN(e)) {
    return "";
  }
  e = Math.round(e);
  const t = ik.padStart(Math.floor(e / 3600), 2, 0);
  const i = ik.padStart(Math.floor((e - 3600 * t) / 60), 2, 0);
  const r = ik.padStart(Math.floor(e - 3600 * t - 60 * i), 2, 0);
  return (t === "00" ? [i, r] : [t, i, r]).join(":");
};
ik.event = function (e) {
  if (e.touches) {
    const t = e.touches[0] || e.changedTouches[0];
    e.clientX = t.clientX || 0;
    e.clientY = t.clientY || 0;
    e.offsetX = t.pageX - t.target.offsetLeft;
    e.offsetY = t.pageY - t.target.offsetTop;
  }
  e._target = e.target || e.srcElement;
};
ik.typeOf = function (e) {
  return Object.prototype.toString.call(e).match(/([^\s.*]+)(?=]$)/g)[0];
};
ik.deepCopy = function (e, t) {
  if (ik.typeOf(t) === "Object" && ik.typeOf(e) === "Object") {
    Object.keys(t).forEach((i) => {
      if (ik.typeOf(t[i]) !== "Object" || t[i] instanceof Node) {
        if (ik.typeOf(t[i]) === "Array") {
          e[i] = ik.typeOf(e[i]) === "Array" ? e[i].concat(t[i]) : t[i];
        } else {
          e[i] = t[i];
        }
      } else if (e[i] === undefined || e[i] === undefined) {
        e[i] = t[i];
      } else {
        ik.deepCopy(e[i], t[i]);
      }
    });
    return e;
  }
};
ik.deepMerge = function (e, t) {
  Object.keys(t).map((i) => {
    if (ik.typeOf(t[i]) === "Array" && ik.typeOf(e[i]) === "Array") {
      if (ik.typeOf(e[i]) === "Array") {
        let r;
        (r = e[i]).push.apply(r, [...t[i]]);
      }
    } else {
      if (
        ik.typeOf(e[i]) !== ik.typeOf(t[i]) ||
        e[i] === null ||
        ik.typeOf(e[i]) !== "Object" ||
        t[i] instanceof window.Node
      ) {
        if (t[i] !== null) {
          e[i] = t[i];
        }
      } else {
        ik.deepMerge(e[i], t[i]);
      }
    }
  });
  return e;
};
ik.getBgImage = function (e) {
  const backgroundImage = (e.currentStyle || window.getComputedStyle(e, null))
    .backgroundImage;
  if (!backgroundImage || backgroundImage === "none") {
    return "";
  }
  const i = document.createElement("a");
  i.href = backgroundImage.replace(/url\("|"\)/g, "");
  return i.href;
};
ik.copyDom = function (e) {
  if (!e || e.nodeType !== 1) {
    return "";
  }
  const t = document.createElement(e.tagName);
  Array.prototype.forEach.call(e.attributes, function (e) {
    t.setAttribute(e.name, e.value);
  });
  if (e.innerHTML) {
    t.innerHTML = e.innerHTML;
  }
  return t;
};
ik.setInterval = function (e, t, i, r) {
  if (!e._interval[t]) {
    e._interval[t] = window.setInterval(i.bind(e), r);
  }
};
ik.clearInterval = function (e, t) {
  clearInterval(e._interval[t]);
  e._interval[t] = null;
};
ik.setTimeout = function (e, t, i) {
  if (!e._timers) {
    e._timers = [];
  }
  var r = setTimeout(() => {
    t();
    ik.clearTimeout(e, r);
  }, i);
  e._timers.push(r);
  return r;
};
ik.clearTimeout = function (e, t) {
  const e__timers = e._timers;
  if (ik.typeOf(e__timers) === "Array") {
    for (let r = 0; r < e__timers.length; r++) {
      if (e__timers[r] === t) {
        e__timers.splice(r, 1);
        clearTimeout(t);
        break;
      }
    }
  } else {
    clearTimeout(t);
  }
};
ik.clearAllTimers = function (e) {
  const e__timers = e._timers;
  if (ik.typeOf(e__timers) === "Array") {
    e__timers.map((e) => {
      clearTimeout(e);
    });
    e._timerIds = [];
  }
};
ik.createImgBtn = function (e, t, i, r) {
  let n;
  let a;
  let s;
  const o = ik.createDom(
    "xg-".concat(e),
    "",
    {},
    "xgplayer-".concat(e, "-img"),
  );
  o.style.backgroundImage = 'url("'.concat(t, '")');
  if (i && r) {
    ["px", "rem", "em", "pt", "dp", "vw", "vh", "vm", "%"].every(
      (e) =>
        !(i.indexOf(e) > -1 && r.indexOf(e) > -1) ||
        ((n = parseFloat(i.slice(0, i.indexOf(e)).trim())),
        (a = parseFloat(r.slice(0, r.indexOf(e)).trim())),
        (s = e),
        false),
    );
    o.style.width = "".concat(n).concat(s);
    o.style.height = "".concat(a).concat(s);
    o.style.backgroundSize = "".concat(n).concat(s, " ").concat(a).concat(s);
    if (e === "start") {
      o.style.margin = `-${a / 2}`
        .concat(s, " auto auto -")
        .concat(n / 2)
        .concat(s);
    } else {
      o.style.margin = "auto 5px auto 5px";
    }
  }
  return o;
};
ik.Hex2RGBA = function (e, t) {
  const i = [];
  if (/^\#[0-9A-F]{3}$/i.test(e)) {
    let r = "#";
    e.replace(/[0-9A-F]/gi, (e) => {
      r += e + e;
    });
    e = r;
  }
  if (/^#[0-9A-F]{6}$/i.test(e)) {
    e.replace(/[0-9A-F]{2}/gi, (e) => {
      i.push(parseInt(e, 16));
    });
    return "rgba(".concat(i.join(","), ", ").concat(t, ")");
  }
  return "rgba(255, 255, 255, 0.1)";
};
ik.getFullScreenEl = function () {
  return (
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement
  );
};
ik.checkIsFunction = function (e) {
  return e && typeof e === "function";
};
ik.checkIsObject = function (e) {
  return e !== null && ix(e) === "object";
};
ik.hide = function (e) {
  e.style.display = "none";
};
ik.show = function (e, t) {
  e.style.display = t || "block";
};
ik.isUndefined = function (e) {
  if (typeof e === "undefined" || e === null) {
    return true;
  }
};
ik.isNotNull = function (e) {
  return e != null;
};
ik.setStyleFromCsstext = function (e, t) {
  if (t) {
    if (ik.typeOf(t) === "String") {
      t.replace(/\s+/g, "")
        .split(";")
        .map((t) => {
          if (t) {
            const i = t.split(":");
            if (i.length > 1) {
              e.style[i[0]] = i[1];
            }
          }
        });
    } else {
      Object.keys(t).map((i) => {
        e.style[i] = t[i];
      });
    }
  }
};
ik.filterStyleFromText = function (e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : [
          "width",
          "height",
          "top",
          "left",
          "bottom",
          "right",
          "position",
          "z-index",
          "padding",
          "margin",
          "transform",
        ];
  const cssText = e.style.cssText;
  if (!cssText) {
    return {};
  }
  const r = cssText.replace(/\s+/g, "").split(";");
  const n = {};
  const a = {};
  r.map((e) => {
    if (e) {
      const i = e.split(":");
      if (i.length > 1) {
        if (
          ((e, t) => {
            for (let i = 0, r = t.length; i < r; i++) {
              if (e.indexOf(t[i]) > -1) {
                return true;
              }
            }
            return false;
          })(i[0], t)
        ) {
          n[i[0]] = i[1];
        } else {
          a[i[0]] = i[1];
        }
      }
    }
  });
  e.setAttribute("style", "");
  Object.keys(a).map((t) => {
    e.style[t] = a[t];
  });
  return n;
};
ik.getStyleFromCsstext = function (e) {
  const cssText = e.style.cssText;
  if (!cssText) {
    return {};
  }
  const i = cssText.replace(/\s+/g, "").split(";");
  const r = {};
  i.map((e) => {
    if (e) {
      const t = e.split(":");
      if (t.length > 1) {
        r[t[0]] = t[1];
      }
    }
  });
  return r;
};
ik.preloadImg = function (e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : function () {};
  const i =
    arguments.length > 2 && arguments[2] !== undefined
      ? arguments[2]
      : function () {};
  if (e) {
    let r = new window.Image();
    r.onload = function (e) {
      r = null;
      if (t) {
        t(e);
      }
    };
    r.onerror = function (e) {
      r = null;
      if (i) {
        i(e);
      }
    };
    r.src = e;
  }
};
ik.stopPropagation = function (e) {
  if (e) {
    e.stopPropagation();
  }
};
ik.scrollTop = function () {
  return (
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  );
};
ik.scrollLeft = function () {
  return (
    window.pageXOffset ||
    document.documentElement.scrollLeft ||
    document.body.scrollLeft ||
    0
  );
};
ik.checkTouchSupport = function () {
  return "ontouchstart" in window;
};
ik.getBuffered2 = function (e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
  const i = [];
  for (let r = 0; r < e.length; r++) {
    i.push({
      start: e.start(r) < 0.5 ? 0 : e.start(r),
      end: e.end(r),
    });
  }
  i.sort((e, t) => e.start - t.start || t.end - e.end);
  let n = [];
  if (t) {
    for (let a = 0; a < i.length; a++) {
      const s = n.length;
      if (s) {
        const o = n[s - 1].end;
        if (i[a].start - o < t) {
          if (i[a].end > o) {
            n[s - 1].end = i[a].end;
          }
        } else {
          n.push(i[a]);
        }
      } else {
        n.push(i[a]);
      }
    }
  } else {
    n = i;
  }
  return new iC(n);
};
ik.getEventPos = function (e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  if (e.touches && e.touches.length > 0) {
    e = e.touches[0];
  }
  return {
    x: e.x / t,
    y: e.y / t,
    clientX: e.clientX / t,
    clientY: e.clientY / t,
    offsetX: e.offsetX / t,
    offsetY: e.offsetY / t,
    pageX: e.pageX / t,
    pageY: e.pageY / t,
  };
};
ik.requestAnimationFrame = function (e) {
  const t =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame;
  if (t) {
    return t(e);
  }
};
ik.getHostFromUrl = function (e) {
  if (ik.typeOf(e) !== "String") {
    return "";
  }
  const t = e.split("/");
  let i = "";
  if (t.length > 3 && t[2]) {
    i = t[2];
  }
  return i;
};
ik.cancelAnimationFrame = function (e) {
  const t =
    window.cancelAnimationFrame ||
    window.mozCancelAnimationFrame ||
    window.cancelRequestAnimationFrame;
  if (t) {
    t(e);
  }
};
ik.isMSE = function (e) {
  if (e.media) {
    e = e.media;
  }
  return (
    !!e &&
    e instanceof HTMLMediaElement &&
    (/^blob/.test(e.currentSrc) || /^blob/.test(e.src))
  );
};
ik.isBlob = function (e) {
  return typeof e === "string" && /^blob/.test(e);
};
ik.generateSessionId = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  let t = new Date().getTime();
  try {
    e = parseInt(e);
  } catch {
    e = 0;
  }
  t += e;
  if (window.performance && typeof window.performance.now === "function") {
    t += parseInt(window.performance.now());
  }
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const i = ((t + 16 * Math.random()) % 16) | 0;
    t = Math.floor(t / 16);
    return (e === "x" ? i : (3 & i) | 8).toString(16);
  });
};
ik.createEvent = function (e) {
  let t;
  if (typeof window.Event === "function") {
    t = new Event(e);
  } else {
    (t = document.createEvent("Event")).initEvent(e, true, true);
  }
  return t;
};
ik.adjustTimeByDuration = function (e, t, i) {
  if (t && e && (e > t || (i && e < t))) {
    return t;
  }
  return e;
};
ik.createPositionBar = function (e, t) {
  const i = ik.createDom(
    "xg-bar",
    "",
    {
      "data-index": -1,
    },
    e,
  );
  t.appendChild(i);
  return i;
};
ik.getTransformStyle = function () {
  const e =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : {
          x: 0,
          y: 0,
          scale: 1,
          rotate: 0,
        };
  let t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  const i = {
    scale: "".concat(e.scale || 1),
    translate: "".concat(e.x || 0, "%, ").concat(e.y || 0, "%"),
    rotate: "".concat(e.rotate || 0, "deg"),
  };
  Object.keys(i).forEach((e) => {
    const r = RegExp("".concat(e, "\\([^\\(]+\\)"), "g");
    const n = "".concat(e, "(").concat(i[e], ")");
    if (r.test(t)) {
      r.lastIndex = -1;
      t = t.replace(r, n);
    } else {
      t += "".concat(n, " ");
    }
  });
  return t;
};
ik.convertDeg = function (e) {
  if (Math.abs(e) <= 1) {
    return 360 * e;
  }
  return e % 360;
};
ik.getCurrentTimeByOffset = function (e, t) {
  let i = -1;
  if (!t || t.length < 0) {
    return e;
  }
  for (let r = 0; r < t.length; r++) {
    if (e <= t[r].duration) {
      i = r;
      break;
    }
  }
  if (i !== -1) {
    const n = t[i].start;
    if (i - 1 < 0) {
      return n + e;
    }
    return n + (e - t[i - 1].duration);
  }
  return e;
};
ik.getIndexByTime = function (e, t) {
  const t_length = t.length;
  let r = -1;
  if (t_length < 1) {
    return r;
  }
  if (e <= t[0].end || t_length < 2) {
    r = 0;
  } else if (e > t[t_length - 1].end) {
    r = t_length - 1;
  } else {
    for (let n = 1; n < t_length; n++) {
      if (e > t[n - 1].end && e <= t[n].end) {
        r = n;
        break;
      }
    }
  }
  return r;
};
ik.getOffsetCurrentTime = function (e, t) {
  const i =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
  let r = -1;
  if ((r = i >= 0 && i < t.length ? i : ik.getIndexByTime(e, t)) < 0) {
    return -1;
  }
  const t_length = t.length;
  const a = t[r];
  const a_start = a.start;
  const a_end = a.end;
  const a_cTime = a.cTime;
  const a_offset = a.offset;
  if (e < a_start) {
    return a_cTime;
  }
  if (e >= a_start && e <= a_end) {
    return e - a_offset;
  }
  if (e > a_end && r >= t_length - 1) {
    return a_end - a_offset;
  }
  return -1;
};
const iI = /(Android)\s([\d.]+)/;
const iO = /(Version)\/([\d.]+)/;
const iD = [
  "avc1.42E01E, mp4a.40.2",
  "avc1.58A01E, mp4a.40.2",
  "avc1.4D401E, mp4a.40.2",
  "avc1.64001E, mp4a.40.2",
  "avc1.42E01E",
  "mp4v.20.8",
  "mp4v.20.8, mp4a.40.2",
  "mp4v.20.240, mp4a.40.2",
];
var iw = {
  get device() {
    if (iw.os.isPc) {
      return "pc";
    }
    return "mobile";
  },
  get browser() {
    if (typeof navigator === "undefined") {
      return "";
    }
    const e = navigator.userAgent.toLowerCase();
    const t = {
      ie: /rv:([\d.]+)\) like gecko/,
      firefox: /firefox\/([\d.]+)/,
      chrome: /chrome\/([\d.]+)/,
      opera: /opera.([\d.]+)/,
      safari: /version\/([\d.]+).*safari/,
    };
    return [].concat(Object.keys(t).filter((i) => t[i].test(e)))[0];
  },
  get os() {
    if (typeof navigator === "undefined") {
      return {};
    }
    const navigator_userAgent = navigator.userAgent;
    const isWindowsPhone = /(?:Windows Phone)/.test(navigator_userAgent);
    const isSymbian =
      /(?:SymbianOS)/.test(navigator_userAgent) || isWindowsPhone;
    const isAndroid = /(?:Android)/.test(navigator_userAgent);
    const isFireFox = /(?:Firefox)/.test(navigator_userAgent);
    const isIpad =
      /(?:iPad|PlayBook)/.test(navigator_userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const isTablet =
      isIpad ||
      (isAndroid && !/(?:Mobile)/.test(navigator_userAgent)) ||
      (isFireFox && /(?:Tablet)/.test(navigator_userAgent));
    const isPhone = /(?:iPhone)/.test(navigator_userAgent) && !isTablet;
    return {
      isTablet,
      isPhone,
      isIpad,
      isIos: isPhone || isIpad,
      isAndroid,
      isPc: !isPhone && !isAndroid && !isSymbian && !isTablet,
      isSymbian,
      isWindowsPhone,
      isFireFox,
    };
  },
  get osVersion() {
    if (typeof navigator === "undefined") {
      return 0;
    }
    const navigator_userAgent = navigator.userAgent;
    let t = "";
    const i = (t = /(?:iPhone)|(?:iPad|PlayBook)/.test(navigator_userAgent)
      ? iO
      : iI)
      ? t.exec(navigator_userAgent)
      : [];
    if (i && i.length >= 3) {
      const r = i[2].split(".");
      if (r.length > 0) {
        return parseInt(r[0]);
      }
      return 0;
    }
    return 0;
  },
  get isWeixin() {
    return (
      !(typeof navigator === "undefined") &&
      !!/(micromessenger)\/([\d.]+)/.exec(
        navigator.userAgent.toLocaleLowerCase(),
      )
    );
  },
  isSupportMP4: function () {
    const e = {
      isSupport: false,
      mime: "",
    };
    if (typeof document === "undefined") {
      return e;
    }
    if (this.supportResult) {
      return this.supportResult;
    }
    let t = document.createElement("video");
    if (typeof t.canPlayType === "function") {
      iD.map((i) => {
        if (
          t.canPlayType('video/mp4; codecs="'.concat(i, '"')) === "probably"
        ) {
          e.isSupport = true;
          e.mime += "||".concat(i);
        }
      });
    }
    this.supportResult = e;
    t = null;
    return e;
  },
  isMSESupport: function () {
    const e =
      arguments.length > 0 && arguments[0] !== undefined
        ? arguments[0]
        : 'video/mp4; codecs="avc1.42E01E,mp4a.40.2"';
    if (typeof MediaSource === "undefined" || !MediaSource) {
      return false;
    }
    try {
      return MediaSource.isTypeSupported(e);
    } catch (error) {
      this._logger.error(e, error);
      return false;
    }
  },
  isHevcSupported: function () {
    return (
      !(typeof MediaSource === "undefined") &&
      !!MediaSource.isTypeSupported &&
      (MediaSource.isTypeSupported('video/mp4;codecs="hev1.1.6.L120.90"') ||
        MediaSource.isTypeSupported('video/mp4;codecs="hev1.2.4.L120.90"') ||
        MediaSource.isTypeSupported('video/mp4;codecs="hev1.3.E.L120.90"') ||
        MediaSource.isTypeSupported('video/mp4;codecs="hev1.4.10.L120.90"'))
    );
  },
  probeConfigSupported: function (e) {
    const t = {
      supported: false,
      smooth: false,
      powerEfficient: false,
    };
    if (!e || typeof navigator === "undefined") {
      return Promise.resolve(t);
    }
    if (
      navigator.mediaCapabilities &&
      navigator.mediaCapabilities.decodingInfo
    ) {
      return navigator.mediaCapabilities.decodingInfo(e);
    }
    const i = e.video || {};
    const r = e.audio || {};
    try {
      const n = MediaSource.isTypeSupported(i.contentType);
      const a = MediaSource.isTypeSupported(r.contentType);
      return Promise.resolve({
        supported: n && a,
        smooth: false,
        powerEfficient: false,
      });
    } catch {
      return Promise.resolve(t);
    }
  },
};
const playerVersion = "3.0.28";
const iN = {
  1: 5101,
  2: 5102,
  3: 5103,
  4: 5104,
  5: 5105,
  6: 5106,
};
const iA = iv(function e(t) {
  const i =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : {
          errorType: "",
          errorCode: 0,
          errorMessage: "",
          originError: "",
          ext: {},
          mediaError: null,
        };
  i_(this, e);
  const r = t && t.i18n ? t.i18n.ERROR_TYPES : null;
  if (t.media) {
    const mediaError = i.mediaError ? i.mediaError : t.media.error || {};
    const duration = t.duration;
    const currentTime = t.currentTime;
    const ended = t.ended;
    const l = t.src;
    const h = t.currentSrc;
    const d = t.media;
    const readyState = d.readyState;
    const networkState = d.networkState;
    let errorCode = i.errorCode || mediaError.code;
    if (iN[errorCode]) {
      errorCode = iN[errorCode];
    }
    const g = {
      playerVersion,
      currentTime,
      duration,
      ended,
      readyState,
      networkState,
      src: l || h,
      errorType: i.errorType,
      errorCode,
      message: i.errorMessage || mediaError.message,
      mediaError,
      originError: i.originError ? i.originError.stack : "",
      host: ik.getHostFromUrl(l || h),
    };
    if (i.ext) {
      Object.keys(i.ext).map((e) => {
        g[e] = i.ext[e];
      });
    }
    return g;
  }
  if (arguments.length > 1) {
    const p = {
      playerVersion,
      domain: document.domain,
    };
    const m = [
      "errorType",
      "currentTime",
      "duration",
      "networkState",
      "readyState",
      "src",
      "currentSrc",
      "ended",
      "errd",
      "errorCode",
      "mediaError",
    ];
    for (let _ = 0; _ < arguments.length; _++) {
      p[m[_]] = arguments[_];
    }
    p.ex = r ? (r[arguments[0]] || {}).msg : "";
    return p;
  }
});
const iB = "loadeddata";
const iU = "loadstart";
const iF = "definition_change";
const ij = "after_definition_change";
function iG(e, t, i) {
  for (
    var r = arguments.length, n = Array(r > 3 ? r - 3 : 0), a = 3;
    a < r;
    a++
  ) {
    n[a - 3] = arguments[a];
  }
  const s = t.call.apply(t, [e].concat(n));
  if (i && typeof i === "function") {
    if (s && s.then) {
      s.then(function () {
        for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) {
          r[n] = arguments[n];
        }
        i.call.apply(i, [e].concat(r));
      });
    } else {
      i.call.apply(i, [e].concat(n));
    }
  }
}
function i$(e, t) {
  const i =
    arguments.length > 2 && arguments[2] !== undefined
      ? arguments[2]
      : {
          pre: null,
          next: null,
        };
  if (!this.__hooks) {
    this.__hooks = {};
  }
  if (!this.__hooks[e]) {
    this.__hooks[e] = null;
  }
  return function () {
    const r = arguments;
    const n = this;
    if (i.pre) {
      try {
        (a = i.pre).call.apply(
          a,
          [this].concat(Array.prototype.slice.call(arguments)),
        );
      } catch (error) {
        error.message = "[pluginName: "
          .concat(this.pluginName, ":")
          .concat(e, ":pre error] >> ")
          .concat(error.message);
        throw error;
      }
    }
    if (this.__hooks && this.__hooks[e]) {
      try {
        var a;
        let s;
        const o = (s = this.__hooks[e]).call.apply(
          s,
          [this, this].concat(Array.prototype.slice.call(arguments)),
        );
        if (o) {
          if (o.then) {
            o.then((e) => {
              if (e !== false) {
                iG.apply(undefined, [n, t, i.next, ...r]);
              }
            }).catch((e) => {
              throw e;
            });
          } else {
            iG.apply(
              undefined,
              [this, t, i.next].concat(Array.prototype.slice.call(arguments)),
            );
          }
        } else if (o === undefined) {
          iG.apply(
            undefined,
            [this, t, i.next].concat(Array.prototype.slice.call(arguments)),
          );
        }
      } catch (error) {
        error.message = "[pluginName: "
          .concat(this.pluginName, ":")
          .concat(e, "] >> ")
          .concat(error.message);
        throw error;
      }
    } else {
      iG.apply(
        undefined,
        [this, t, i.next].concat(Array.prototype.slice.call(arguments)),
      );
    }
  }.bind(this);
}
function iV(e, t) {
  const __hooks = this.__hooks;
  if (__hooks) {
    if (__hooks.hasOwnProperty(e)) {
      if (__hooks) {
        __hooks[e] = t;
      }
      return true;
    }
    console.warn("has no supported hook which name [".concat(e, "]"));
    return false;
  }
}
function iH(e, t) {
  const __hooks = this.__hooks;
  if (__hooks) {
    delete __hooks[e];
  }
}
function iK(pluginName, t) {
  iE.logError(
    "["
      .concat(
        pluginName,
        "] event or callback cant be undefined or null when call ",
      )
      .concat(t),
  );
}
const iz = iv(
  function e(t) {
    i_(this, e);
    if (ik.checkIsFunction(this.beforeCreate)) {
      this.beforeCreate(t);
    }
    (function (e) {
      const t =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      e.__hooks = {};
      if (t) {
        t.map((t) => {
          e.__hooks[t] = null;
        });
      }
      Object.defineProperty(e, "hooks", {
        get: function () {
          return (
            e.__hooks &&
            Object.keys(e.__hooks).map((t) => {
              if (e.__hooks[t]) {
                return t;
              }
            })
          );
        },
      });
    })(this);
    this.__args = t;
    this.__events = {};
    this.__onceEvents = {};
    this.config = t.config || {};
    this.player = null;
    this.playerConfig = {};
    this.pluginName = "";
    this.__init(t);
  },
  [
    {
      key: "beforeCreate",
      value: function (e) {},
    },
    {
      key: "afterCreate",
      value: function () {},
    },
    {
      key: "beforePlayerInit",
      value: function () {},
    },
    {
      key: "onPluginsReady",
      value: function () {},
    },
    {
      key: "afterPlayerInit",
      value: function () {},
    },
    {
      key: "destroy",
      value: function () {},
    },
    {
      key: "__init",
      value: function (e) {
        this.player = e.player;
        this.playerConfig = e.player && e.player.config;
        this.pluginName = e.pluginName
          ? e.pluginName.toLowerCase()
          : this.constructor.pluginName.toLowerCase();
        this.logger = e.player && e.player.logger;
      },
    },
    {
      key: "updateLang",
      value: function (e) {
        if (!e) {
          e = this.lang;
        }
      },
    },
    {
      key: "lang",
      get: function () {
        return this.player.lang;
      },
    },
    {
      key: "i18n",
      get: function () {
        return this.player.i18n;
      },
    },
    {
      key: "i18nKeys",
      get: function () {
        return this.player.i18nKeys;
      },
    },
    {
      key: "domEventType",
      get: function () {
        let e = ik.checkTouchSupport() ? "touch" : "mouse";
        if (
          this.playerConfig &&
          (this.playerConfig.domEventType === "touch" ||
            this.playerConfig.domEventType === "mouse")
        ) {
          e = this.playerConfig.domEventType;
        }
        return e;
      },
    },
    {
      key: "on",
      value: function (e, t) {
        const i = this;
        if (e && t && this.player) {
          if (typeof e === "string") {
            this.__events[e] = t;
            this.player.on(e, t);
          } else if (Array.isArray(e)) {
            e.forEach((e) => {
              i.__events[e] = t;
              i.player.on(e, t);
            });
          }
        } else {
          iK(this.pluginName, "plugin.on(event, callback)");
        }
      },
    },
    {
      key: "once",
      value: function (e, t) {
        const i = this;
        if (e && t && this.player) {
          if (typeof e === "string") {
            this.__onceEvents[e] = t;
            this.player.once(e, t);
          } else if (Array.isArray(e)) {
            e.forEach((r) => {
              i.__onceEvents[r] = t;
              i.player.once(e, t);
            });
          }
        } else {
          iK(this.pluginName, "plugin.once(event, callback)");
        }
      },
    },
    {
      key: "off",
      value: function (e, t) {
        const i = this;
        if (e && t && this.player) {
          if (typeof e === "string") {
            delete this.__events[e];
            this.player.off(e, t);
          } else if (Array.isArray(e)) {
            e.forEach((r) => {
              delete i.__events[e];
              i.player.off(r, t);
            });
          }
        } else {
          iK(this.pluginName, "plugin.off(event, callback)");
        }
      },
    },
    {
      key: "offAll",
      value: function () {
        const e = this;
        ["__events", "__onceEvents"].forEach((t) => {
          Object.keys(e[t]).forEach((i) => {
            if (e[t][i]) {
              e.off(i, e[t][i]);
            }
            if (i) {
              delete e[t][i];
            }
          });
        });
        this.__events = {};
        this.__onceEvents = {};
      },
    },
    {
      key: "emit",
      value: function (e) {
        let t;
        if (this.player) {
          for (
            var i = arguments.length, r = Array(i > 1 ? i - 1 : 0), n = 1;
            n < i;
            n++
          ) {
            r[n - 1] = arguments[n];
          }
          (t = this.player).emit.apply(t, [e].concat(r));
        }
      },
    },
    {
      key: "emitUserAction",
      value: function (e, t) {
        const i =
          arguments.length > 2 && arguments[2] !== undefined
            ? arguments[2]
            : {};
        if (this.player) {
          const r = {
            ...i,
            pluginName: this.pluginName,
          };
          this.player.emitUserAction(e, t, r);
        }
      },
    },
    {
      key: "hook",
      value: function (e, t) {
        return i$.call.apply(
          i$,
          [this].concat(Array.prototype.slice.call(arguments)),
        );
      },
    },
    {
      key: "useHooks",
      value: function (e, t) {
        for (
          let i = arguments.length, r = Array(i > 2 ? i - 2 : 0), n = 2;
          n < i;
          n++
        ) {
          r[n - 2] = arguments[n];
        }
        return iV.call.apply(
          iV,
          [this].concat(Array.prototype.slice.call(arguments)),
        );
      },
    },
    {
      key: "removeHooks",
      value: function (e, t) {
        for (
          let i = arguments.length, r = Array(i > 2 ? i - 2 : 0), n = 2;
          n < i;
          n++
        ) {
          r[n - 2] = arguments[n];
        }
        return iH.call.apply(
          iH,
          [this].concat(Array.prototype.slice.call(arguments)),
        );
      },
    },
    {
      key: "registerPlugin",
      value: function (plugin) {
        const options =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : {};
        const i =
          arguments.length > 2 && arguments[2] !== undefined
            ? arguments[2]
            : "";
        if (this.player) {
          if (i) {
            options.pluginName = i;
          }
          return this.player.registerPlugin({
            plugin,
            options,
          });
        }
      },
    },
    {
      key: "getPlugin",
      value: function (e) {
        if (this.player) {
          return this.player.getPlugin(e);
        }
        return null;
      },
    },
    {
      key: "__destroy",
      value: function () {
        const e = this;
        const player = this.player;
        const pluginName = this.pluginName;
        this.offAll();
        ik.clearAllTimers(this);
        if (ik.checkIsFunction(this.destroy)) {
          this.destroy();
        }
        [
          "player",
          "playerConfig",
          "pluginName",
          "logger",
          "__args",
          "__hooks",
        ].map((t) => {
          e[t] = null;
        });
        player.unRegisterPlugin(pluginName);
        this.__hooks = null;
      },
    },
  ],
  [
    {
      key: "defineGetterOrSetter",
      value: function (e, t) {
        for (const i in t) {
          if (Object.prototype.hasOwnProperty.call(t, i)) {
            Object.defineProperty(e, i, t[i]);
          }
        }
      },
    },
    {
      key: "defaultConfig",
      get: function () {
        return {};
      },
    },
    {
      key: "pluginName",
      get: function () {
        return "pluginName";
      },
    },
  ],
);
class iq {
  constructor(e) {
    ip(this, "onTick", (e) => {
      if (this) {
        if (this.cancelPending) {
          this.cancelPending();
        }
        if (this.alive) {
          if (this.onTick_) {
            this.onTick_();
          }
          if (e) {
            e();
          }
        }
      }
    });
    this.onTick_ = e;
    this.timeoutId = null;
    this.alive = true;
  }
  tickAfter(e, t = null) {
    if (this.cancelPending) {
      this.cancelPending();
    } else {
      this.cancelPending = () => {
        clearTimeout(this.timeoutId);
        this.timeoutId = null;
      };
    }
    this.alive = true;
    this.timeoutId = setTimeout(this.onTick, 1000 * e, t);
    return this;
  }
  tickEvery(e) {
    this.tickAfter(e, () => {
      this.tickEvery(e);
    });
  }
  stop() {
    this.alive = false;
    if (this.cancelPending) {
      this.cancelPending();
      this.cancelPending = null;
    }
  }
}
class iJ extends e_.b {
  constructor(e) {
    super();
    this.masterTimer = undefined;
    this.onVisibleChange = () => {
      let e = this.masterTimer || this.workerTimer;
      this.stop();
      if (e) {
        this.start();
      }
    };
    this.options = e;
    document.addEventListener("visibilitychange", this.onVisibleChange);
  }
  start() {
    let { frequency } = this.options;
    let t = () => {
      try {
        if (this.masterTimer || this.workerTimer) {
          this.emit(tt);
        }
      } catch {}
    };
    this.stop();
    this.masterTimer = new iq(t);
    this.masterTimer.tickEvery(frequency);
  }
  stop() {
    if (this.workerTimer) {
      this.workerTimer = undefined;
    }
    if (this.masterTimer) {
      this.masterTimer.stop();
      this.masterTimer = undefined;
    }
  }
  destroy() {
    this.removeAllListeners();
    document.removeEventListener("visibilitychange", this.onVisibleChange);
    this.stop();
  }
}
let iW = "DESTROYED";
let iY = "xglog_cache";
let iX = "degrade";
let iZ = "fps_stuck";
let iQ = null;
let i0 = null;
let i1 = null;
let i4 = null;
let i2 = null;
let i3 = 0;
let i5 = null;
class i6 extends iz {
  constructor(e) {
    var t;
    var i;
    super(e);
    ip(this, "_onChangeConfig", (e) => {
      if (e) {
        let t = e.nextBufferLength === this.config.minBufferLength;
        this.setConfig(e);
        if (e.nextBufferLength && !t) {
          try {
            this._onTimeUpdate();
          } catch {}
        }
      }
    });
    ip(this, "fpsStuckHandle", (e) => {
      let { player, mse } = this;
      if (!this.fpsStuckTime) {
        this.fpsStuckTime = e.currentTime;
        this.log(ep.f.LOG, "fpsStuckHandle, currentTime,", e.currentTime);
      }
      if (this.fpsStuckTime > 0) {
        let e = player.bufferedPoint;
        mse.clearOpQueues(em.Ub.VIDEO);
        this.log(
          ep.f.LOG,
          "fpsStuckHandle, remove,",
          e.start,
          "-",
          e.end,
          ",seekTime,",
          this.fpsStuckTime,
        );
        if (mse != null) {
          mse.remove(em.Ub.VIDEO, e.start, e.end).then(() => {
            player.currentTime = this.fpsStuckTime;
            this.fpsStuckTime = null;
          });
        }
      }
    });
    ip(this, "_retryHook", () => {
      let { player, playerConfig } = this;
      let { paused } = player;
      if (this.softDecode) {
        player.vtype = "MP4_MSE_SOFT";
      } else {
        player.vtype = "MP4_MSE";
      }
      this._defInited = false;
      let r = player.currentTime || 0;
      this.log(ep.f.LOG, "retryHook ", playerConfig.vid, this.codecType, r);
      let n = () => {
        if (r) {
          player.currentTime = r;
          this.log(
            ep.f.LOG,
            "retryHook update currentTime",
            playerConfig.vid,
            this.codecType,
            r,
          );
        }
        if (paused) {
          player.pause();
        } else {
          player.play();
        }
        this._removeMetaDataEvent();
      };
      this._addMetaDataEvent(n);
      this.destroyMSE();
      this._reset();
      this.playerStartInit(playerConfig.url);
      return false;
    });
    ip(this, "_playHook", (e, ...t) => {
      this._usePaused = false;
      this._canceLoading = false;
      this.log(ep.f.LOG, "playHook");
      this._startProgress();
    });
    ip(this, "_pauseHook", (e, ...t) => {
      var i;
      this._usePaused = true;
      this.log(
        ep.f.LOG,
        "pauseHook",
        t[0],
        (i = this.player) == null ? undefined : i.currentTime,
      );
      if (t.indexOf(te == null ? undefined : te.BUFFER_CONTROLS) < 0) {
        clearTimeout(this.checkResumePlayTimer);
        this.checkResumePlayTimer = null;
        this.log(ep.f.LOG, "pause hook clear buffer_control state");
      }
      this._loadStuckCheck();
    });
    ip(this, "abrSwitchURL", async (e) => {
      let { playerConfig } = this;
      let list = playerConfig.definition.list;
      let r = 0;
      for (let t = 0; t < list.length; t++) {
        if (e.definition === list[t].definition) {
          r = t;
          break;
        }
      }
      let curDefinition = this.player.curDefinition;
      this.changeDefinition(list[r], curDefinition, true);
    });
    ip(this, "timerHandle", () => {
      if (this._requestTimer) {
        this._onTimeUpdate();
      }
    });
    ip(this, "changeDefineCanPlay", (e, t, from, to_1) => {
      let { player } = this;
      if (player.ended) {
        player.currentTime = 0;
        return;
      }
      let { _changeDefState } = this;
      player.currentTime = _changeDefState ? _changeDefState.currentTime : e;
      if (_changeDefState ? _changeDefState.paused : t) {
        player.pause();
      } else {
        player.play();
      }
      this._changeDefState = null;
      player.emit(ij, {
        from,
        to: to_1,
      });
    });
    ip(this, "changeDefinition", (e, t, abr) => {
      var r;
      var n;
      let { player, playerConfig, mp4, config } = this;
      if (!t) {
        t = player.curDefinition;
      }
      this._MSEError = false;
      this._isReceiveEndedEvent = false;
      if (this.useVideoLoad) {
        if (e.url === "__auto__") {
          e.url = playerConfig.definition.list[0].url;
        }
        i1.call(this.player, e, t);
        return;
      }
      let { definitionList } = player;
      let d = definitionList.filter((t) => t.definition === e.definition);
      if (d.length > 0) {
        e = d[0];
      }
      let u = this._handlerUrl(e.url);
      if (!u) {
        return;
      }
      config._mainURL = u.main;
      config._backupURL = u.backup;
      e._mainURL = config._mainURL;
      e._backupURL = config._backupURL;
      if (config.switchBitRateWay && !abr) {
        return void this.oldChangeDefinition(e, t);
      }
      let c = e.definition === "自动" || e.definition === "auto";
      if (abr) {
        this.log(
          ep.f.LOG,
          "[switchBitrate:ABR], ready to switch bitRate, ",
          e.bitrate,
          e.definition,
        );
      } else {
        let i = false;
        if (c) {
          if (this._abrService) {
            this._abrService.enable();
          }
          i = true;
        } else {
          if (this._abrService) {
            this._abrService.disable();
          }
          let i = (r = playerConfig.definition) == null ? undefined : r.list;
          if (i && (!e.bitrate || !e.uri || !e.size || !e.duration)) {
            for (let r = 0; r < i.length; r++) {
              if (e.definition === i[r].definition) {
                e.bitrate = i[r].bitrate;
                e.uri = i[r].uri || t.uri;
                e.size = i[r].size || tL(e.bitrate, playerConfig.duration);
                e.duration = i[r].duration || this.playerConfig.duration;
                break;
              }
            }
          }
        }
        if ((n = this.adaptRange) != null) {
          n.updateBitrate(e.bitrate);
        }
        player.emit(iF, {
          from: t,
          to: e,
        });
        setTimeout(() => {
          if (this._abrService) {
            this._abrService.updateAutoDefiDesc(
              player.curDefinition.definition,
              !c,
            );
          }
        });
        if (i) {
          e = player.curDefinition;
        }
        this.log(
          ep.f.LOG,
          "[switchBitrate:CBS],switch bitRate, ",
          e.bitrate,
          e.definition,
        );
      }
      player.curDefinition = e;
      this.mp4.clearPCDNNodeList();
      this.checkPCDN();
      if (!mp4) {
        return;
      }
      [
        "keyValue",
        "kid",
        "secretKey",
        "drm",
        "getLicenseUrl",
        "drmKeyToken",
        "sessionId",
      ].forEach((t) => {
        config[t] = e[t];
      });
      let f = null;
      if (tN(this.config)) {
        this._initSecret();
        f = this._secretkey.getLicenseSecret();
      } else {
        (f = new t9()).resolve();
      }
      f.then(async (r) => {
        var n;
        if (r != null && r.secretKey) {
          if (!config.keyValue) {
            config.secretKey = r.secretKey;
          }
          config.decryptKey = r.decryptKey;
        }
        playerConfig.url = e.url;
        let h = 0;
        let d = false;
        if (this._abrService && this._abrService.isCurrentInAbr()) {
          let e = player.getBufferedRange(player.buffered2);
          if ((h = e[1]) < player.currentTime) {
            h = player.currentTime;
            this.log(
              ep.f.LOG,
              "abr,bufferRange is invalid, adjust",
              e,
              ",timeStart,",
              h,
            );
          }
        } else {
          h = player.currentTime;
          d = true;
        }
        let u = mp4.getFragmentIdx(h);
        let c = this.getAdaptTimeRangeIdx(u);
        if (c < 0) {
          c = this._curLoadSegmentIdx;
        }
        this.log(
          ep.f.LOG,
          `switchBitrate point: ${c}`,
          `startTime: ${mp4.adaptTimeRange[c].startTime}`,
          `currentTime: ${player.currentTime}, timeStart: ${h}`,
        );
        if (d) {
          player.emit(
            "definitionSwitchTime",
            mp4.adaptTimeRange[c].startTime + 1,
          );
        }
        let changeStartTime = Math.max(
          mp4.adaptTimeRange[c].startTime,
          player.currentTime,
        );
        this._definitionChangePointInfo = {
          changeStartTime,
          changeInfo: {
            from: t,
            to: e,
          },
        };
        this.changeState("changeDefinition", {
          abr,
          fragIndex: c,
          startTime: mp4.adaptTimeRange[c].startTime,
          currentTime: player.currentTime,
        });
        if (mp4) {
          mp4.updateChangeBitRateTime(h);
          this.canDownload = false;
          await mp4.cancelLoading();
          if (mp4.metaLoading) {
            mp4.metaLoading = false;
          }
        }
        this._removeBuffeEndTime = mp4.adaptTimeRange[c].startTime;
        this._isChangeDefinition = true;
        let g = player.getBufferedRange(player.buffered);
        let p = (n = this._abrService) == null ? undefined : n.isCurrentInAbr();
        if (
          g[1] > 0 &&
          g[1] - player.currentTime > 5 &&
          (!this._abrService || !p)
        ) {
          this.mse.clearOpQueues(em.Ub.VIDEO);
          this.removeBuffer(em.Ub.VIDEO, player.currentTime + 5, g[1]);
        }
        this.log(ep.f.LOG, "switchBitrate: resetFragmentLoadState,", c);
        mp4.resetFragmentLoadState(c);
        this._curLoadSegmentIdx = c;
        await this.mp4.changeBitRate(e);
        this._setCurrentDefinition(e.bitrate);
        this._emitDefinitionChangeDetailEvent(h);
        this.canDownload = true;
        this._onTimeUpdate();
        let m = {
          width: e.width || e.vwidth,
          height: e.height || e.vheight,
        };
        player.emit("RESOLUTION_UPDATE", m);
      }).catch((t) => {
        this.log(
          ep.f.ERROR,
          "switchBitrate: GET_LICENSE_ERROR,",
          t == null ? undefined : t.message,
        );
        let i = new iA(this.player, {
          errorType: to.DRM,
          errorCode: ts.drm,
          errorMessage:
            (t == null ? undefined : t.message) || "GET_LICENSE_ERROR",
          vid: playerConfig.vid,
        });
        t.errorType = "GET_LICENSE_ERROR";
        this.emit("GET_LICENSE_ERROR", i);
        this.changeState("LICENSE_ERROR", {
          d: e.definition,
        });
      });
    });
    ip(this, "_onVideoError", (e) => {
      var t;
      var i;
      var r;
      var n;
      let { player } = this;
      this.changeState("video_error", {
        code:
          e.code ||
          ((i =
            (t = player == null ? undefined : player.video) == null
              ? undefined
              : t.error) == null
            ? undefined
            : i.code),
        message:
          e.message ||
          ((n =
            (r = player == null ? undefined : player.video) == null
              ? undefined
              : r.error) == null
            ? undefined
            : n.message),
        videoType: this.useVideoLoad,
      });
    });
    ip(this, "removeBuffer", (e, t, i, r) => {
      var n;
      let a = this.getBufferDur();
      if ((n = this.mse) != null) {
        n.remove(e, t, i).then(() => {
          let removeDur = a - this.getBufferDur();
          if (removeDur > 0) {
            this.emit("removeBuffer", {
              removeDur,
            });
            this.log(ep.f.LOG, "removeBuffer dur,", removeDur);
          }
          if (r) {
            r();
          }
        });
      }
    });
    ip(this, "_onPause", () => {
      this._loadStuckCheck();
    });
    ip(this, "_onPlaying", () => {
      var e;
      var t;
      this.changeState("playing", {
        curtime: this.player.currentTime,
        buffer: JSON.stringify(
          (t = (e = this.player) == null ? undefined : e.buffered2) == null
            ? undefined
            : t.bufferedList,
        ),
      });
      if (this._waitAdjustTimeCnt > 0 && this._waitInBufferTimer) {
        this._waitAdjustTimeCnt -= 1;
        this.changeState("waitInBuffer_resume");
        this.log(
          ep.f.WARN,
          "[waitInBuffer resume play], waitAdjustTimeCnt,",
          this._waitAdjustTimeCnt,
        );
      }
      clearTimeout(this._waitInBufferTimer);
      this._waitInBufferTimer = null;
      let { mp4, player } = this;
      let { resumePlayWaterLevel } = this.config;
      if (!mp4) {
        if (this.checkResumePlayTimer > 0) {
          clearTimeout(this.checkResumePlayTimer);
          this.checkResumePlayTimer = null;
          if (player.isBufferControlPaused) {
            player.isBufferControlPaused = false;
          }
          if (player.paused) {
            player.play();
          }
        }
        return;
      }
      if (
        !(
          mp4 &&
          mp4.meta &&
          mp4.meta.duration - player.currentTime <= resumePlayWaterLevel
        ) &&
        (this.waitLevelStartTime < 0 &&
          (this.waitLevelStartTime = player.currentTime),
        this.playFlag || (this.playFlag = true),
        resumePlayWaterLevel > 0 &&
          player.currentTime - this.waitLevelStartTime >= 2)
      ) {
        let e = player.getBufferedRange(player.buffered2);
        if (e[1] > 0 && e[1] - player.currentTime < resumePlayWaterLevel) {
          if (!player.paused) {
            this.emit(e3, {
              type: "waiting",
            });
            player.pause(te == null ? undefined : te.BUFFER_CONTROLS);
            this.log(
              ep.f.LOG,
              "[!!!!!buffer not rich, pause],currentTime, ",
              player.currentTime,
              ", bufferEnd,",
              e[1],
            );
          }
          clearTimeout(this.checkResumePlayTimer);
          this.checkResumePlayTimer = setTimeout(
            this._onPlaying,
            (resumePlayWaterLevel / 2) * 1000,
          );
        } else if (player.isBufferControlPaused && player.paused) {
          this.log(
            ep.f.LOG,
            "[!!!!!buffer rich, play],, currentTime, ",
            player.currentTime,
            ", bufferEnd,",
            e[1],
          );
          clearTimeout(this.checkResumePlayTimer);
          this.checkResumePlayTimer = null;
          player.isBufferControlPaused = false;
          this.emit(e3, {
            type: "playing",
          });
          player.play();
        }
      }
    });
    ip(this, "_lowDecoder", () => {
      let e = tM(this.player);
      this.log(
        ep.f.WARN,
        `H265 lowdecode: ${this.playerConfig.vid} `,
        e,
        ", h265Degrade, ",
        this.config.h265Degrade,
      );
      if (this.config.h265Degrade) {
        this._onDegrade();
      }
    });
    ip(this, "_onError", (e) => {
      this._onDegrade(e);
    });
    ip(this, "_onDegrade", (e) => {
      var t;
      let { player, playerConfig, config } = this;
      tw(player, "lowdecode", this._onDegrade);
      tw(player, "error", this._onError);
      if ((t = this.mp4) != null) {
        t.destroy();
      }
      let { currentTime } = player;
      this.log(
        ep.f.WARN,
        "[h265 degrade], vid,",
        playerConfig.vid,
        ",currtime,",
        currentTime,
      );
      this.emit(iX, {
        errc: e == null ? undefined : e.errorCode,
        err_msg:
          (e == null ? undefined : e.errorMessage) ||
          (e == null ? undefined : e.message),
        codec_type: this.codecType,
        media_type: playerConfig.mediaType,
      });
      if (config != null && config.H264Config) {
        let { H264Config } = config;
        [
          "drm",
          "getLicenseUrl",
          "kid",
          "keyValue",
          "secretKey",
          "isEncrypt",
          "useEME",
        ].forEach((t) => {
          config[t] = H264Config[t] || null;
        });
      }
      let s =
        (playerConfig == null ? undefined : playerConfig.H264DefinitionList) ||
        [];
      if (s.length > 0) {
        playerConfig.definition.list = s;
        playerConfig.url = s[0].url;
        playerConfig.defaultBitrate = s[0].bitrate;
        playerConfig.defaultDefinition = s[0].definition;
        this.isH265DegradeH264 = true;
        player.playNext({
          mp4encryptplayer: config,
          mediaType: "video",
          codecType: ti,
        });
        let e = () => {
          player.currentTime = currentTime;
          this.isH265DegradeH264 = false;
          this.log(ep.f.LOG, "H265DegradeH264 update currentTime", currentTime);
          this._removeMetaDataEvent();
        };
        this._addMetaDataEvent(e);
      } else {
        player.pause();
        this._reset();
        this.checkReUseMSE(false);
        this.log(ep.f.ERROR, "H265 error,degrade h264 but no h264 url");
        this.emit("error", e);
      }
    });
    ip(this, "_onMp4MetaReady", (e) => {
      var t;
      var i;
      if (!this.mp4) {
        return;
      }
      if (openLog) {
        console.log(">>>>_onMp4MetaReady", tT());
      }
      let firstFrameTime = this.firstFrameTime;
      firstFrameTime.metaload = this.mp4.firstFrameTime.metaload;
      firstFrameTime.bitrate = this.player.curDefinition.bitrate;
      let n = this._checkMetaInfo(e);
      this.emit(tG, {
        ...e,
        error: n,
        timeRange: ((t = this.mp4) == null ? undefined : t.timeRange) || [],
      });
      if (n) {
        return void this._errorHandler(n);
      }
      try {
        this._initEME(this.mp4, e);
        if (this.softDecode) {
          this.log(ep.f.LOG, "initH265MseProxy");
          this._initH265MseProxy();
        } else if (this.player.video instanceof HTMLVideoElement) {
          this.log(ep.f.LOG, "initMse");
          this._initMse(e);
        }
        if ((i = this._initPromise) != null) {
          i.resolve();
        }
      } catch (error) {
        this._errorHandler(
          new iA(this.player, {
            errorType: to.MEDIA,
            errorCode: ts.eme_hijack,
            errorMessage:
              (error == null ? undefined : error.message) ||
              "eme or mse catch err",
            vid: this.playerConfig.vid,
          }),
        );
        return;
      }
      if (this.mp4 && this.mp4.timeRange) {
        let e = [];
        this.mp4.timeRange.every((t) => {
          e.push({
            startTime: t.startTime,
            endTime: t.endTime,
          });
          return true;
        });
        this.emit("KEYFRAMETIME", e);
      }
      this._loadData();
    });
    ip(this, "_onMp4Error", async (e, state) => {
      let { vid } = this.playerConfig;
      console.error("[Index] _onMp4Error", vid, e);
      this.changeState("MP4_ERROR", {
        state,
        errmsg:
          (e == null ? undefined : e.errorMessage) ||
          (e == null ? undefined : e.message),
        errorType: e == null ? undefined : e.errorType,
        code: e == null ? undefined : e.errorCode,
        httpCode: e == null ? undefined : e.httpCode,
      });
      this._errorHandler(e);
    });
    ip(this, "_onMp4Progress", (e) => {
      this.emit("progress_event", e);
    });
    ip(this, "_onMp4DataCallBack", () => {
      if (this._isMseInit) {
        this._onTimeUpdate();
      }
    });
    ip(this, "_updateDrmConfig", (e) => {
      let { config, mp4 } = this;
      mp4.updateSecretKey(
        config.useEME,
        config.secretKey,
        config.decryptKey,
        config.keyValue,
      );
      if (this._secretkey && e.kid) {
        this._secretkey.updateKid(e.kid);
      }
    });
    ip(this, "_updateMSE", (e) => {
      let { player } = this;
      if (player.video instanceof HTMLVideoElement) {
        this.log(ep.f.LOG, "updateMse", e.videoCodec);
        this._initMse(e);
      }
    });
    ip(this, "_onVideoTimeUpdate", () => {
      var e;
      var t;
      let { mse, player } = this;
      if (this.waitLevelStartTime < 0) {
        this.waitLevelStartTime = player.currentTime;
      }
      this.checkReStartTimer();
      this._isEnded();
      if (player.isSeeking) {
        player.isSeeking = false;
      }
      if (
        !this.useVideoLoad &&
        mse &&
        this._removeBuffeEndTime > 0 &&
        player.currentTime > this._removeBuffeEndTime + 1
      ) {
        this.log(
          ep.f.LOG,
          "remove old bitrate buffer",
          this._removeBuffeEndTime,
        );
        this.removeBuffer(em.Ub.VIDEO, 0, this._removeBuffeEndTime - 1);
        this._removeBuffeEndTime = 0;
      }
      let _definitionChangePointInfo = this._definitionChangePointInfo;
      if (
        _definitionChangePointInfo &&
        player.currentTime > _definitionChangePointInfo.changeStartTime
      ) {
        player.emit(ij, _definitionChangePointInfo.changeInfo);
        let i = _definitionChangePointInfo.changeInfo || {};
        this.log(
          ep.f.LOG,
          ij,
          ", currentTime,",
          player.currentTime,
          ",from ",
          (e = i == null ? undefined : i.from) == null
            ? undefined
            : e.definition,
          " to ",
          (t = i == null ? undefined : i.to) == null ? undefined : t.definition,
        );
        this._definitionChangePointInfo = null;
      }
      if (
        !(
          this.useVideoLoad ||
          this._requestTimer !== null ||
          this._offineLine ||
          this._canceLoading
        )
      ) {
        this._startProgress();
      }
    });
    ip(this, "_onBufferedReset", () => {
      if (this.mp4 && this.mp4.videoTrak) {
        this.mp4.resetFragmentLoadState(0);
      }
    });
    ip(this, "_onOnlineHandler", () => {
      this._offineLine = false;
      let { playerConfig, player } = this;
      let { currentTime, paused } = player;
      this.log(
        ep.f.LOG,
        "online useVideoLoad:",
        this.useVideoLoad,
        this._hasStartProgressBack,
      );
      if (this.useVideoLoad) {
        let n = () => {
          if (currentTime) {
            player.currentTime = currentTime;
          }
          this.log(
            ep.f.LOG,
            "onOnlineHandler update currentTime",
            playerConfig.vid,
            this.codecType,
            this._currentTime,
          );
          if (paused) {
            player.pause();
          } else {
            player.play();
          }
          this._removeMetaDataEvent();
        };
        this._addMetaDataEvent(n);
        this._setPlayerSrc(playerConfig.url);
      } else {
        if (this._hasStartProgressBack) {
          this._startProgress();
        }
        this._hasStartProgressBack = false;
      }
    });
    ip(this, "_onOfflineHandler", () => {
      this._offineLine = true;
      this.log(ep.f.LOG, "offline, ", this._hasStartProgress);
      if (this._hasStartProgress) {
        this._stopProgress();
        this._hasStartProgressBack = true;
      }
    });
    ip(this, "_loadDataSuccess", (e) => {
      var t;
      var i;
      var r;
      if (this.isDestroy || (!this.mse && !this.mseProxy)) {
        return;
      }
      let firstFrameTime = this.firstFrameTime;
      if (firstFrameTime.startload_stmux < 0) {
        let { startMuxTime, firstmux } = this.mp4.firstFrameTime;
        firstFrameTime.startload_stmux = startMuxTime;
        firstFrameTime.firstmux = firstmux;
      }
      if (firstFrameTime.loadst_loadeddata < 0) {
        firstFrameTime.loaddata = tT() - this.loadstart;
      }
      try {
        if (e.initSeg) {
          this._appendInitSeg(e.initSeg);
          if (!e.buffer || e.buffer.byteLength < 1) {
            this._onTimeUpdate();
          }
        }
        let { buffer, state, context, videoTrack, audioTrack } = e;
        this.debugInfo.loadIndx = context ? context.fragIndex : -1;
        let h =
          (r =
            (i =
              (t = this.mp4) == null
                ? undefined
                : t.adaptTimeRange[context.fragIndex]) == null
              ? undefined
              : i.timeRangeIdx) == null
            ? undefined
            : r[1];
        if (
          this.mse &&
          state &&
          (!buffer || buffer.byteLength <= 0) &&
          h >= this.mp4.timeRange.length
        ) {
          let { buffered } = this.player;
          if (
            buffered &&
            (buffered == null ? undefined : buffered.length) > 0
          ) {
            this.bufferEndTime = buffered.end(buffered.length - 1);
          }
          this._isEnded();
          this.log(
            ep.f.LOG,
            "loaded ended !!!==>>>",
            JSON.stringify(context.range),
            ", fragIndex,",
            context.fragIndex,
            ", bufferEndTime,",
            this.bufferEndTime,
            ",meta_duration,",
            this.mp4.meta.duration,
          );
        }
        if (buffer && this.mse) {
          if (buffer && buffer.byteLength > 0) {
            this._appendBuffer(em.Ub.VIDEO, buffer, context, state);
            let e = this.getDataBitRate(context.fragIndex);
            this.player.emit("addVideoBufferEnd", {
              start: Math.floor(context.startPts),
              end: context.endPts,
              bandwidth: e.bitrate,
            });
          }
        } else {
          if (
            this.mseProxy &&
            ((videoTrack && videoTrack.samples.length > 0) ||
              (audioTrack && audioTrack.samples.length > 0))
          ) {
            this.log(
              ep.f.LOG,
              "[livevideo] append,index,",
              context.fragIndex,
              ",range,",
              JSON.stringify(e.context.range),
              ", timeRange,",
              context.timeRange,
            );
            this.mseProxy.appendBuffer(videoTrack, audioTrack);
          }
        }
      } catch (error) {
        this.changeState("APPEND_DATA_ERROR", {
          errMsg: error == null ? undefined : error.message,
        });
        let e = new iA(this.player, {
          errorType: to.MEDIA,
          errorCode: ts.mseAppend,
          vid: this.playerConfig.vid,
          errorMessage: error.message,
          mediaError: {
            code: ts.mseAppend,
            message: error.message,
          },
        });
        this._errorHandler(e);
      }
      if (e != null && e.state) {
        this._onTimeUpdate();
      }
    });
    ip(this, "_onResumePlaying", () => {
      this._resumePlay = true;
    });
    ip(this, "_seekOnce", (e) => {
      let { player } = this;
      if (player) {
        player.currentTime = e + 0.1 * 2 ** (this._currentSeekTimes || 0);
        this._currentSeekTimes++;
        this.log(
          ep.f.LOG,
          `\u{5F53}\u{524D}\u{7B2C}${this._currentSeekTimes}\u{6B21}Seek\u{FF0C}currentTime=${player == null ? undefined : player.currentTime}`,
        );
      }
    });
    ip(this, "_onWaiting", () => {
      var e;
      var t;
      var i;
      this.checkReStartTimer();
      this._isEnded();
      let r =
        (t = (e = this.player) == null ? undefined : e.buffered2) == null
          ? undefined
          : t.bufferedList;
      this.changeState("waiting", {
        curtime: this.player.currentTime,
        buffer: JSON.stringify(r),
      });
      let { player, config, playerConfig, mp4 } = this;
      clearTimeout(this._waitInBufferTimer);
      this._waitInBufferTimer = null;
      let player_currentTime = player.currentTime;
      this.log(
        ep.f.LOG,
        ",[onWaiting],curTime, ",
        player_currentTime,
        ",buffer,",
        JSON.stringify(r),
        ",dur,",
        (i = mp4 == null ? undefined : mp4.meta) == null
          ? undefined
          : i.duration,
      );
      let player_bufferedPoint = player.bufferedPoint;
      if (
        player_bufferedPoint.end > 0 &&
        player_bufferedPoint.end - player_currentTime >= 2
      ) {
        if (this._waitAdjustTimeCnt < config.waitJampBufferMaxCnt) {
          this._waitInBufferTimer = setTimeout(() => {
            this._waitAdjustTimeCnt++;
            this.changeState("waitInBuffer_seek", {
              waitAdjustTimeCnt: this._waitAdjustTimeCnt,
              curTime: player_currentTime,
            });
            player.currentTime = player.currentTime + 0.5;
          }, config.waitingInBufferTimeOut);
        } else {
          this._errorHandler(
            new iA(this.player, {
              errorType: to.RUNTIME,
              errorCode: ts.waitTimeout,
              errorMessage: "onWaitTimeout_in_buffer",
              vid: playerConfig.vid,
            }),
          );
        }
      } else {
        this._loadStuckCheck();
      }
    });
    ip(this, "_onEnded", () => {
      this.log(ep.f.LOG, "[player.onEnded], stopProgress");
      this._stopProgress();
    });
    ip(this, "_errorHandler", (e) => {
      let { player, playerConfig, preLoadData } = this;
      if (!player || this.useVideoLoad) {
        return;
      }
      if (
        e.errorCode === ts[403] &&
        this._emitExpireEvent(e) &&
        this.config.urlExpireDisableErrorEvent
      ) {
        this.log(
          ep.f.LOG,
          "_errorHandler urlExpireDisableErrorEvent",
          this.config.urlExpireDisableErrorEvent,
          ",errorCode,",
          e.errorCode,
        );
        this._stopProgress();
        this.emit(iY);
        return;
      }
      if (typeof e !== "object") {
        let t = {};
        t.err = e;
        e = t;
      }
      if (!e.ext) {
        e.ext = {};
      }
      let player_paused = player.paused;
      e.ext.vid = playerConfig.vid;
      e.ext.preloadHit = +!!this.hitpreload;
      e.ext.preloadCached = preLoadData ? preLoadData.duration : 0;
      e.ext.timerStep = Math.max(...this.timerStepList);
      e.ext.codectype = this.codecType;
      e.errorMessage = e.message;
      e = new iA(player, e);
      this.log(
        ep.f.ERROR,
        "_errorHandle",
        `preState is ${player_paused}`,
        e == null ? undefined : e.errorCode,
        (e == null ? undefined : e.message) ||
          (e == null ? undefined : e.errorMessage),
      );
      if (!e.url) {
        e.url = player.src;
      }
      if (e.errd && typeof e.errd === "object" && this.mp4) {
        e.errd.url = this.mp4.url;
        e.url = this.mp4.url;
      }
      this.player.emit("playCatch", this.player.vtype, e);
      this.emit("DATA_REPORT", e);
      if (this.mp4) {
        this.mp4.cancelLoading();
      }
      if (this._abrService) {
        this._abrService.disable();
      }
      this.canDownload = false;
      if (this.mp4 && this.mp4.bufferCache) {
        this.mp4.bufferCache.clear();
      }
      if (this.checkIsDegraded(e)) {
        this.player.vtype = "MP4_2";
        if (this._initPromise) {
          this.removeAndRejectInitPromise(e);
        }
        this._startDegradedPlayback(e, player_paused);
      } else {
        this.log(
          ep.f.ERROR,
          "final error !!!!, ",
          playerConfig.vid,
          e == null ? undefined : e.errorCode,
          (e == null ? undefined : e.errorMessage) ||
            (e == null ? undefined : e.message),
        );
        this.player.pause();
        this._reset();
        let { currentTime } = player;
        this.destroyMSE();
        player.currentTime = currentTime;
        this.emit("error", e);
      }
      this.emit(iY);
    });
    ip(this, "_onSeeking", async () => {
      var e;
      var t;
      var i;
      this._isReceiveEndedEvent = false;
      if (this.useVideoLoad) {
        return;
      }
      let { player, mp4 } = this;
      this.waitLevelStartTime = player.currentTime;
      let player_currentTime = player.currentTime;
      this.changeState("seeking", {
        curTime: player_currentTime,
      });
      this.log(
        ep.f.LOG,
        "[seeking], curTime,",
        player_currentTime,
        ",buffer,",
        JSON.stringify(player.buffered2.bufferedList),
      );
      if (!mp4 || !mp4.meta) {
        return;
      }
      this._startProgress();
      this.endofstream = false;
      mp4.bufferUsedPos = 0;
      mp4.metaLoading = false;
      if (this._definitionChangePointInfo) {
        this._definitionChangePointInfo.changeStartTime = player_currentTime;
        this.log(
          "[seeking update definitionChangePointInfo.changeStartTime]",
          player_currentTime,
        );
      }
      if (mp4.changeBitRateTime > 0) {
        mp4.updateChangeBitRateTime(player_currentTime);
        this.log("[seeking update changeBitRateTime]", player_currentTime);
      }
      let player_bufferedPoint = player.bufferedPoint;
      let o = false;
      let l = 0;
      if (player_bufferedPoint.end > 0) {
        o = true;
        if (mp4.meta.duration - player_bufferedPoint.end < 0.5) {
          return void this.log(
            "[seeking in buffered range], buffer end,",
            player_bufferedPoint.end,
            ", duration,",
            (e = mp4 == null ? undefined : mp4.meta) == null
              ? undefined
              : e.duration,
          );
        }
        let t = mp4.getFragmentIdx(player_bufferedPoint.end);
        l = this.getAdaptTimeRangeIdx(t);
        mp4.seekTime = player_bufferedPoint.end;
        if (l < 0) {
          l = this._curLoadSegmentIdx;
        }
        this.log(
          ep.f.LOG,
          "[seeking in buffered range], seekTime ",
          player_currentTime,
          ",bufferRange,",
          player_bufferedPoint.start,
          "-",
          player_bufferedPoint.end,
          ", fragIndex,",
          l,
        );
      }
      if (!o) {
        mp4.seekTime = player_currentTime;
        let e = mp4.getFragmentIdx(player_currentTime);
        l = this.getAdaptTimeRangeIdx(e);
        this.log(
          ep.f.LOG,
          "[seekTime out buffer range], srcFragIndex,",
          e,
          ", fragIndex,",
          l,
        );
        if (l < 0) {
          l = this._curLoadSegmentIdx;
        }
        this.log(
          ep.f.LOG,
          "[seekTime out buffer range], curTime,",
          player_currentTime,
          ", srcFragIndex,",
          e,
          ", adaptIdx,",
          l,
        );
        let { mse } = this;
        if (mse && mse != null && mse.isFull()) {
          let e = player.buffered2.bufferedList;
          let t = e[e.length - 1];
          this._checkRemoveSourceBuffer(
            [t.start, t.end],
            player.currentTime,
            true,
            true,
          );
        }
      }
      if (
        this._curLoadSegmentIdx === l &&
        (t = mp4.adaptTimeRange[l]) != null &&
        t.isLoading
      ) {
        this.log(
          ep.f.LOG,
          "[seeking in buffered range], seek fragIndex is current load segmentIdx",
          l,
        );
      } else {
        mp4.canDownload = false;
        await mp4.cancelLoading();
        mp4.resetFragmentLoadState(l);
        this.log(
          ep.f.LOG,
          "[seekTime resetFragmentLoadState],adaptIdx,",
          l,
          "mp4.seekTime",
          mp4.seekTime,
          JSON.stringify(mp4.adaptTimeRange),
        );
        if ((i = this.mse) != null) {
          i.clearOpQueues(em.Ub.VIDEO);
        }
        this._curLoadSegmentIdx = l;
        this.canDownload = true;
        this._onTimeUpdate();
        this._isEnded();
      }
    });
    this.initLog(
      (i = (t = this.player.playerId) == null ? undefined : t.toString()) ==
        null
        ? undefined
        : i.slice(-4),
    );
    this._pendingPromises = [];
    this._allInitPromise = new t9();
    this._isInit = false;
    this._isEventInit = false;
    this.playerId = this.player.playerId;
    this.preloader = null;
    this.log(ep.f.LOG, "playerId", this.playerId, this.playerConfig.vid);
    this._useVideoLoad = false;
    this.mse = null;
    this.mp4 = null;
    this.eme = null;
    this._isMseInit = false;
    this._corePromise = null;
    this._initPromise = null;
    this._hasStartProgress = false;
    this._hasStartProgressBack = false;
    this._curLoadSegmentIdx = 0;
    this._abrService = null;
    this._checkRemoveBufferLastTime = tT();
    this.playFlag = false;
    this.config.resumePlayWaterLevel = Math.min(
      this.config.minBufferLength,
      this.config.resumePlayWaterLevel,
    );
    this.checkResumePlayTimer = null;
    this._MSEError = false;
    this.loadstart = -1;
    this._loadStartEventTime = -1;
    this._waitAdjustTimeCnt = 0;
    this._waitInBufferTimer = null;
    this.codecType = this.playerConfig.codecType
      ? this.playerConfig.codecType.toLowerCase()
      : ti;
    if (this.playerConfig.vtype) {
      this._vtype = this.playerConfig.vtype.toUpperCase();
    }
    this.isActive = true;
    this.firstFrameTime = {
      newplayer: tT(),
      initmse_sbopen: -1,
      mseopen: -1,
      metaload: -1,
      metaready_initsegend: -1,
      startload_stmux: -1,
      firstmux: -1,
      apcnt: 0,
      aplen: 0,
      data_ap: -1,
      loaded_data: -1,
      loadst_loadeddata: -1,
      new_loadeddata: -1,
      bitrate: -1,
      hitpreload: -1,
      first_gop_req_cnt: -1,
    };
    this.debugInfo = {};
    this.states = [];
    this.removeVideoList = [];
    this._lastCheckTime = tT();
    this._lastCheckLagTime = tT();
    this._changeDefState = null;
    this._defInited = false;
    this._removeBuffeEndTime = 0;
    this._isChangeDefinition = false;
    this._lastTimeupdateTime2 = 0;
    this.waitLevelStartTime = -1;
    this.preLoadData = null;
    this.forPreloadTimeCache = null;
    this._usePaused = false;
    this.endofstream = false;
    this.bufferEndTime = -1;
    this.hitpreload = false;
    this.isH265DegradeH264 = false;
    this.loadstartTimer = null;
    this.loadeddataTimer = null;
    this.canplayTimer = null;
    this.adaptRangeRes = [];
    this._isReceiveEndedEvent = false;
    this._checkEndedTimer = null;
    this._definitionChangePointInfo = null;
    if (i2) {
      this.player.preloader = i2;
    }
    this._lastTimeupdateTime2 = 0;
    this.waitLevelStartTime = -1;
    this.timerStepList = [];
    if (window && window.location.href.indexOf("playerInstance=true") > -1) {
      if (window.mp4PlayerInstanceList === undefined) {
        window.mp4PlayerInstanceList = [];
      }
      window.mp4PlayerInstanceList.push(undefined);
    }
    this._isH265SoftDecoder = false;
    this._beforeLoadStartCostTime = 0;
    this._requestTimer = null;
  }
  static get pluginName() {
    return "Mp4EncryptPlayer";
  }
  static get defaultConfig() {
    return {
      onlyInit: false,
      useWaterLevel: false,
      maxBufferLength: 10,
      minBufferLength: 5,
      tickInSeconds: 0.2,
      getLicenseUrl: "",
      xhrSetup: {},
      chunkSize: 209715,
      retryCount: 1,
      retryDelay: 1000,
      timeout: 3000,
      needPreloadCheck: false,
      needAutoBitrate: true,
      keyValue: null,
      drm: null,
      switchBitRateWay: false,
      enableWorker: false,
      bufferThreshold: 10,
      removeBufferLen: 60,
      focusUserDefinition: false,
      resumePlayWaterLevel: 2,
      waitJampBufferMaxCnt: 3,
      waitingInBufferTimeOut: 5000,
      waitingTimeOut: 10000,
      notDegradeErrorList: [],
      h265Degrade: false,
      forceVideoPlay: false,
      segmentMinDuration: 3,
      supportHevc: undefined,
      H264Config: null,
      reqOptions: {},
      rangeMaxDuration: 15,
      getRequestOptionsCallback: null,
      closeDowngrade: false,
      loaderType: "fetch",
      reUseMSE: false,
      urlExpireDisableErrorEvent: false,
      logCacheConfig: {
        logCacheLevel: ep.f.LOG,
        logMaxSize: 204800,
      },
      noPreloadAddBufferLen: 0,
      enableFPSStuckHandle: false,
      loadRangeType: "gop",
      timerInWorker: false,
    };
  }
  static registerPreloader(e) {
    i2 = e;
  }
  static set ENCRYPT_SECRET(e) {
    i5 = e;
  }
  static get speed() {
    return i3;
  }
  static get realTimeSpeed() {
    return i3;
  }
  static get version() {
    return "0.2.18";
  }
  setConfig(e) {
    this.config = Object.assign(this.config, e);
  }
  initLog(e) {
    let { logCacheLevel, logMaxSize } = this.config.logCacheConfig;
    this.logger = new ep.V(i6.pluginName + e, {
      logCacheLevel,
      logMaxSize,
    });
    if (openLog) {
      ep.V.enable();
    }
  }
  playerlogger(e) {
    if (e) {
      ep.V.enable();
    } else {
      ep.V.disable();
    }
  }
  afterCreate() {
    let { playerConfig, config, player } = this;
    config.width = playerConfig.width || 0;
    config.height = playerConfig.height || 0;
    playerConfig.vid = playerConfig.vid || config.vid;
    if (
      em.Ub.isSupported('video/mp4; codecs="avc1.64001f, mp4a.40.5"') &&
      !t3()
    ) {
      if (
        config.supportHevc === undefined &&
        iw != null &&
        iw.isHevcSupported &&
        iw.isHevcSupported() &&
        this.player.video instanceof HTMLVideoElement
      ) {
        config.supportHevc = true;
      }
      config.supportVvcc =
        !(typeof MediaSource === "undefined") &&
        !!MediaSource.isTypeSupported &&
        MediaSource.isTypeSupported("video/mp4;codecs=bvc2.1.6.L93.B0");
      if (this.softDecode) {
        player.vtype = "MP4_MSE_SOFT";
      } else {
        player.vtype = "MP4_MSE";
      }
      if (!t5() || this.softDecode) {
        config.useEME = false;
      }
      config.useEME = config.useEME !== false;
      this.checkConfig();
      if (config.onlyInit) {
        playerConfig.autoplay = false;
        playerConfig.videoInit = false;
        this._hasStartProgress = false;
        this._hasStartProgressBack = false;
      }
      if (playerConfig.useWaterLevel) {
        if (!playerConfig.userGestureEventMiddleware) {
          playerConfig.userGestureEventMiddleware = tC;
        }
        if (!playerConfig.videoEventMiddleware) {
          player.setEventsMiddleware(tk);
        }
      }
      this._proxyPlayer();
      player.useHooks("play", this._playHook);
      player.useHooks("pause", this._pauseHook);
      player.useHooks("retry", this._retryHook);
      tD(player, e1.BUFFERED_RESET, this._onBufferedReset);
      this._bindNetworkStateChange();
      this.on("timeupdate", this._onVideoTimeUpdate);
      this.on(iB, () => {
        var e;
        this.changeState("LOADED_DATA");
        this.deleteVideo();
        if (this.mp4) {
          this.mp4.updateLoadedDataDone();
        }
        this._firstFrameTime();
        this._onTimeUpdate();
        this.firstFrameTime.loaded_data =
          this._loadStartEventTime > 0 ? tT() - this._loadStartEventTime : -1;
        if ((e = this.config) != null && e.enableFPSStuckHandle) {
          this.on(iZ, this.fpsStuckHandle);
        }
      });
      this.on(iU, () => {
        this.changeState("LOAD_START");
        this._loadStartEventTime = tT();
        this._beforeLoadStartCostTime = new Date().getTime() - this._tm;
        if (!(this.codecType !== tr || this.config.supportHevc)) {
          this._isMseInit = true;
          this._onTimeUpdate();
        }
      });
      this.on("ended", () => {
        this.log(ep.f.LOG, "mp4plugin receive player video ended event");
        this._onEnded();
      });
      this.on("pause", () => {
        this._usePaused = true;
      });
      this.on("play", () => {
        this._usePaused = false;
      });
      this.on("xglog", (e) => {
        if (e.eventType === "firstFrame") {
          let t =
            this.preLoadData && this.preLoadData.definition
              ? this.preLoadData.definition
              : -1;
          let { player, firstFrameTime } = this;
          if (openLog) {
            console.log(
              `[xgplayer-encrypt-mp4]>>>>firstFrame ${this.playerConfig.vid}, ${e.fvt}, codecType: ${this.codecType}`,
              `hitPreload: ${this.hitpreload}, video: ${this._useVideoLoad}, preloadBitrate: ${t}`,
              ` metaLoad: ${firstFrameTime.metaload}, mseOpen: ${firstFrameTime.mseopen}`,
              `curDefinition: ${player.curDefinition.definition},appendInit: ${firstFrameTime.metaready_initsegend}`,
            );
          }
        }
      });
      player.mp4MseFlag = true;
    }
  }
  _startBufferCheck() {
    let { player } = this;
    if (!player.video) {
      return;
    }
    let t = [];
    if (player.video.buffered) {
      for (let i = 0, r = player.video.buffered.length; i < r; i++) {
        t.push([player.video.buffered.start(i), player.video.buffered.end(i)]);
      }
      if (t.toString() !== this.lastBuffer) {
        this.lastBuffer = t.toString();
        this._onBufferReachThreshold();
      }
    }
  }
  _onBufferReachThreshold() {
    let { player, config } = this;
    if (player.video) {
      let i = player.video.buffered;
      let { currentTime } = player.video;
      let n = 0;
      let a = 0;
      for (
        let e = 0;
        e < i.length &&
        ((n = i.start(e)),
        (a = i.end(e)),
        !(n <= currentTime && currentTime <= a));
        e++
      );
      if (
        a - currentTime >= config.bufferThreshold &&
        !this._hasTriggerBufferThreshold
      ) {
        this._hasTriggerBufferThreshold = true;
        player.emit("BUFFER_THRESHOLD", a - currentTime);
      }
    }
  }
  _startUrlExpiredCheck() {
    let { definition } = this.playerConfig;
    if (definition && definition.list && definition.list.length > 0) {
      this.urlExpireTimestamp = definition.list[0].url_expire || 0;
      this._handleUrlExpire();
    }
  }
  async cancelLoading() {
    if (this.mp4) {
      this._canceLoading = true;
      this.log(ep.f.LOG, "player cancelLoading", this.playerConfig.vid);
      this._stopProgress();
      this.cancelPreloadTask();
      await this.mp4.cancelLoading();
    }
  }
  checkConfig() {
    let { playerConfig, config } = this;
    let playerConfig_defaultDefinition = playerConfig.defaultDefinition;
    let playerConfig_defaultBitrate = playerConfig.defaultBitrate;
    if (!playerConfig_defaultDefinition) {
      let { definition } = this.playerConfig;
      playerConfig_defaultDefinition =
        definition && definition.defaultDefinition
          ? definition.defaultDefinition
          : config.definition;
    }
    if (!playerConfig_defaultBitrate && config.bitrate) {
      playerConfig_defaultBitrate = config.bitrate;
    }
    playerConfig.defaultDefinition = playerConfig_defaultDefinition;
    playerConfig.defaultBitrate = playerConfig_defaultBitrate;
  }
  _addMetaDataEvent(e) {
    let { player } = this;
    this.__mHandler = e;
    tD(player, "loadedmetadata", this.__mHandler);
  }
  _removeMetaDataEvent() {
    if (!this.__mHandler) {
      return;
    }
    let { player } = this;
    tw(player, "loadedmetadata", this.__mHandler);
    this.__mHandler = null;
  }
  beforePlayerInit() {
    let { player } = this;
    let t = this;
    if (!this._isInit) {
      iz.defineGetterOrSetter(player, {
        __url: {
          get: () => {
            if (t.mse) {
              return t.mse.url;
            }
            return player.config.url;
          },
          configurable: true,
        },
        downloadSpeed: {
          get: () => i3 / 8,
          configurable: true,
        },
        playerVersion: {
          get: () => "0.2.18",
          configurable: true,
        },
        menuCodeType: {
          get: () => {
            if (t.mp4 && t.mp4.meta) {
              return t.mp4.meta.videoCodec;
            }
            if (t.codecType === ti) {
              return "avc";
            }
            return "hevc";
          },
          configurable: true,
        },
        playerType: {
          get: () => "MP4",
          configurable: true,
        },
        supportMenus: {
          get: () => ({
            speed: player == null ? undefined : player.mp4MseFlag,
            cdn: player == null ? undefined : player.mp4MseFlag,
            resolution: player == null ? undefined : player.mp4MseFlag,
          }),
          configurable: true,
        },
        preloadActive: {
          get: () => this.isActive,
          set: (e) => {
            this.isActive = e;
            if (this.isActive) {
              this._startProgress();
            }
          },
          configurable: true,
        },
        performance: {
          get: () => this.firstFrameTime,
          configurable: true,
        },
        domain: {
          get: () => t.domain,
          configurable: true,
        },
        loadURL: {
          get: () => t.loadURL,
          configurable: true,
        },
        abrInstance: {
          get: () => t.abrInstance,
          configurable: true,
        },
        pcdnReq: {
          get: () => {},
          configurable: true,
        },
        retryInfo: {
          get: () => t0,
          configurable: true,
        },
        softDecoder: {
          get: () => this._isH265SoftDecoder,
          configurable: true,
        },
        logCache: {
          get: () => {
            if (t.logger) {
              t.log(
                ep.f.LOG,
                ",version:0.2.18,timerStepList,",
                JSON.stringify(this.timerStepList),
              );
              return t.logger.getLogCache();
            }
          },
          configurable: true,
        },
        pcdnVVStat: {
          get: () => {
            var e;
            let { mp4, pcdn } = t;
            if (mp4) {
              return {
                ...mp4.pcdnVVStat,
                trace_id:
                  (e = mp4.pcdnTraceInfo) == null ? undefined : e.trace_id,
                cancelCnt: (mp4 == null ? undefined : mp4.pSCCancelCnt) || 0,
                is_try_open: +!!pcdn,
              };
            }
            return null;
          },
          configurable: true,
        },
        beforeLoadStartCostTime: {
          get: () => {
            if (this.useVideoLoad) {
              return 0;
            }
            return this._beforeLoadStartCostTime;
          },
          configurable: true,
        },
        bandwidth: {
          get: () => {
            let e;
            let i;
            let r;
            let { mp4, playerConfig } = t;
            let s = playerConfig == null ? undefined : playerConfig.vid;
            i = (e = mp4 ? mp4.loadInfo : null) ? e.cdn : null;
            r = e ? e[load_type] : null;
            return {
              vid: s,
              cdn: {
                speed: i == null ? undefined : i.loadSpeed,
                size: i ? i.loadLen : 0,
              },
              pcdn: {
                size: r ? r.loadLen : 0,
                ...(mp4 == null ? undefined : mp4.pcdnTraceInfo),
              },
            };
          },
          configurable: true,
        },
        ext: {
          get: () => {
            if (t) {
              return ((e) => {
                let t;
                let i;
                let r = [];
                let { video, currentTime, duration } = e.player;
                let {
                  playerConfig,
                  mp4,
                  mse,
                  debugInfo,
                  _curLoadSegmentIdx,
                  states,
                  _requestTimer,
                  timerStepList,
                } = e;
                let p = video ? video.buffered : [];
                if (p.length > 0) {
                  for (
                    let e = 0, t = (p == null ? undefined : p.length) || 0;
                    e < t;
                    e++
                  ) {
                    r.push([p.start(e), p.end(e)]);
                  }
                }
                return {
                  type: "MP4",
                  usevideo: +!!e.useVideoLoad,
                  curTime: currentTime,
                  duration:
                    ((t = mp4 == null ? undefined : mp4.meta) == null
                      ? undefined
                      : t.duration) || duration,
                  loadIdx: _curLoadSegmentIdx,
                  curload:
                    mp4 != null && mp4.adaptTimeRange
                      ? mp4.adaptTimeRange[_curLoadSegmentIdx]
                      : {},
                  buffer: r,
                  speed: debugInfo == null ? undefined : debugInfo.speed,
                  states,
                  msequeLen:
                    (mse == null ? undefined : mse.opQueues) &&
                    ((i = mse.opQueues.video) == null ? undefined : i.length),
                  timer: !!_requestTimer,
                  timerlist: JSON.stringify(timerStepList),
                  maxtimerstep: Math.max(...timerStepList),
                  url: playerConfig == null ? undefined : playerConfig.url,
                };
              })(this);
            }
            return {};
          },
          configurable: true,
        },
        currentDefitionFromPlayer: {
          get: () => {
            if (t.abrInstance && t.abrInstance.isCurrentInAbr) {
              return player._currentDefitionFromPlayer;
            }
            return player.curDefinition;
          },
          configurable: true,
        },
      });
      this._isInit = true;
    }
  }
  destroy() {
    let e;
    let t;
    let { player } = this;
    if (player.preloader) {
      player.preloader.cancel(this.playerId);
    }
    player.removeHooks("play", this._playHook);
    player.removeHooks("pause", this._pauseHook);
    player.removeHooks("retry", this._retryHook);
    if ((e = this._requestTimer) != null) {
      e.destroy();
    }
    this._requestTimer = null;
    this._reset();
    this.checkReUseMSE(false);
    if (this._secretkey) {
      i5.destroySecretKey(this._secretkey, this._errorHandler);
    }
    this.player.playNext = iQ;
    this.player._startInit = i0;
    this.player.changeDefinition = i1;
    this.player.switchURL = i4;
    this._unbindNetworkStateChange();
    this._unbindEvents();
    tw(player, e1.BUFFERED_RESET, this._onBufferedReset);
    if (this._bufferCheckTimer) {
      clearInterval(this._bufferCheckTimer);
    }
    if (this._removeBufferTimer) {
      clearTimeout(this._removeBufferTimer);
      this._removeBufferTimer = null;
    }
    if ((t = this.logger) != null && t.reset) {
      this.logger.reset();
    }
    this._removeMetaDataEvent();
    this.timerStepList = [];
  }
  _proxyPlayer() {
    if (typeof this.player.playNext === "function") {
      iQ = this.player.playNext;
    }
    this.player.playNext = (...e) => {
      this.playNext(...e);
    };
    i0 = this.player._startInit;
    i4 = this.player.switchURL;
    i1 = this.player.changeDefinition;
    this.player._startInit = this.playerStartInit.bind(this);
    this.player.switchURL = this.switchURL.bind(this);
    this.player.changeDefinition = this.changeDefinition.bind(this);
  }
  getInitBitrate() {
    let { player, config, playerConfig } = this;
    let r = null;
    let { definitionList } = player;
    if (definitionList && definitionList.length > 0) {
      let { preloader } = player;
      if (preloader) {
        definitionList.forEach((e) => {
          let t = preloader.generateUniqueKey({
            vid: playerConfig.vid,
            definition: e.definition || -1,
            vtype: playerConfig.vtype,
            codecType: playerConfig.codecType,
          });
          e.cacheKey = t;
          if (t && !r && preloader && preloader.hasItemSameVid(t)) {
            r = e;
            r.type = "preload";
          }
        });
      }
      let { userSelectDefinition } = playerConfig;
      if (
        r &&
        userSelectDefinition &&
        config.focusUserDefinition &&
        playerConfig.userSelectDefinition !== r.definition
      ) {
        r = null;
      }
      if (!r && this.bitRateAdapter) {
        this.bitRateAdapter.speed = t4.speed;
        if (
          (r = this.getDefinitonFromAdapter(
            definitionList,
            userSelectDefinition,
          ))
        ) {
          r.type = "bitRateAdapter";
        }
      }
    }
    if (!r || !r.url) {
      let { url, definition, defaultDefinition } = playerConfig;
      let s =
        (definition == null ? undefined : definition.defaultDefinition) ||
        defaultDefinition;
      if (
        (tv(url) === "Array" && url.length > 0) ||
        (tv(url) === "String" && url)
      ) {
        let t = this._getDefinitionItem(s);
        let bitrate =
          playerConfig.defaultBitrate ||
          playerConfig.bitrate ||
          (t == null ? undefined : t.bitrate);
        r = {
          url,
          definition: (t == null ? undefined : t.definition) || s || -1,
          duration:
            (t == null ? undefined : t.duration) ||
            playerConfig.duration ||
            this.config.duration ||
            0,
          bitrate,
          uri: playerConfig.uri || (t == null ? undefined : t.uri),
          file_id: t == null ? undefined : t.file_id,
          size: (t == null ? undefined : t.size) || playerConfig.size,
          type: "default",
        };
      } else {
        r = definitionList[definitionList.length - 1];
      }
    }
    if (r) {
      playerConfig.url = r.url;
      r.networkSpeed = t4.speed;
    }
    player.curDefinition = r;
    return r;
  }
  _setPlayerSrc(e) {
    let { player } = this;
    this._removeVideoSource();
    if (tv(e) === "Array") {
      player.video.removeAttribute("src");
      if (!player._detachSourceEvents) {
        e.forEach((e) => {
          player.video.appendChild(
            ty("source", "", {
              src: `${e.src}`,
              type: `${e.type || ""}`,
            }),
          );
        });
      }
      player._attachSourceEvents(player.video, e);
    } else {
      player.video.src = e;
    }
    player.play();
    player.mp4MseFlag = false;
    player.emit("playertypechange");
  }
  _removeVideoSource(e) {
    let { player } = this;
    let { children } = (e = e || player.video);
    if (children.length > 0) {
      for (player._detachSourceEvents(e); children.length > 0;) {
        e.removeChild(children[0]);
      }
    }
  }
  _getDefinitionItem(e) {
    let { definition } = this.playerConfig;
    if (!definition || !definition.list) {
      return null;
    }
    for (let i = 0; i < definition.list.length; i++) {
      let r = definition.list[i];
      if (r.definition === e) {
        return r;
      }
    }
    return null;
  }
  async _initAbrService() {}
  _initSecret() {
    if (i5) {
      if (this._secretkey) {
        this._secretkey.updateConfig(this.config);
      } else {
        this._secretkey = i5.createSecretKey(this.config, this._errorHandler);
      }
    }
  }
  _initMp4Kernel() {
    let { playerConfig, config } = this;
    let i = new t9();
    try {
      let r = this.player.curDefinition;
      this.log(
        ep.f.LOG,
        `[_initMp4Kernel] ${playerConfig.vid} curDefinition`,
        r == null ? undefined : r.definition,
      );
      let n = this._handlerUrl(playerConfig.url);
      if (!n) {
        this.log(ep.f.LOG, "emptyUrl");
        i.reject(Error("emptyUrl"));
        return i;
      }
      config._mainURL = n.main;
      config._backupURL = n.backup;
      if (
        config.forceVideoPlay &&
        (this.codecType === ti || config.supportHevc)
      ) {
        this.useVideoLoad = true;
        this.log(ep.f.LOG, "forceVideoPlay");
        i.reject(Error("forceVideoPlay"));
        return i;
      }
      let a = [];
      if (this._secretkey) {
        a.push(this._secretkey.getLicenseSecret());
      }
      a.push(this._checkPreloader());
      Promise.all(a)
        .then((e) => {
          if (this.isDestroy) {
            return void i.reject(Error("destroy"));
          }
          let n = null;
          if (e && e.length > 0) {
            if (e.length > 1) {
              if (!config.keyValue) {
                config.secretKey = e[0].secretKey;
              }
              config.decryptKey = e[0].decryptKey;
            }
            n = e[e.length - 1].data;
            if (this.firstFrameTime) {
              this.firstFrameTime.hitpreload = +!!n;
            }
          }
          if (
            !n &&
            config.needPreloadCheck &&
            (this.codecType !== tr || config.supportHevc)
          ) {
            this.useVideoLoad = true;
            this.log(ep.f.LOG, "no_preload");
            i.reject(Error("no_preload"));
          } else if (this._vtype && this._vtype === "MP3") {
            this.useVideoLoad = true;
            this.log(ep.f.LOG, "vtype_not_MP4");
            i.reject(Error("vtype_not_MP4"));
          } else {
            let e = config._mainURL;
            this.player.rawSrc = e;
            this._initMp4(e, n, {
              fileSize: r ? r.size : 0,
            });
            this.updateLoadInfo(n == null ? undefined : n.cacheKey);
            this.checkPCDN();
            this.initAdaptRange();
            this._initAbrService();
          }
        })
        .catch((t) => {
          this.log(
            ep.f.ERROR,
            "getLicense or checkPreloader reject",
            t == null ? undefined : t.message,
          );
          let n = new iA(this.player, {
            errorType: to.DRM,
            errorCode: ts.drm,
            errorMessage:
              (t == null ? undefined : t.message) ||
              "getLicense or checkPreloader reject",
            vid: playerConfig.vid,
          });
          this.emit("GET_LICENSE_ERROR", n);
          this.changeState("LICENSE_ERROR", {
            d: r ? r.definition : 0,
          });
          i.reject(n);
        });
    } catch (error) {
      i.reject(error);
    }
    return i;
  }
  updateLoadInfo(e) {
    if (e && this.mp4) {
      this.mp4.loadInfo = e6.get(e);
      e6.delete(e);
    }
  }
  initAdaptRange() {
    let { config, player, playerConfig } = this;
    let { bitrate, duration } = player.curDefinition;
    if (config != null && config.adaptRange) {
      let a = null;
      a = (config == null ? undefined : config.loadRangeType) === e7 ? l : o;
      this.adaptRange = new a(
        player,
        bitrate,
        duration || playerConfig.duration,
        config.adaptRange,
      );
    }
  }
  checkPCDN() {
    let { config, player, playerConfig } = this;
    player.curDefinition;
    this.pcdn = null;
  }
  isOpenPCDN(e) {}
  _pcdnReqSuccess(e, t) {
    let { playerConfig, player, mp4 } = this;
    if (!mp4 || !e) {
      return;
    }
    let a = null.getPCDNReqId(player.curDefinition, playerConfig.vid);
    if (e.req_id && a !== e.req_id) {
      return void this.log(
        ep.f.LOG,
        `,${t} is not match curDefinition reqId', reqId, ', pcdnRet.req_id`,
        e.req_id,
      );
    }
    let s = e.nodes || [];
    this.log(
      ep.f.LOG,
      `${playerConfig.vid} get peer end,pcdn node update,`,
      s.length,
    );
    mp4.updateNode(s);
    mp4.pcdnTraceInfo = {
      uri: e.vid,
      fid: e.fid,
      trace_id: e.trace_id,
    };
    if (mp4.pcdnVVStat) {
      mp4.pcdnVVStat.try_req_node += 1;
      mp4.pcdnVVStat.req_node_succ += 1;
      mp4.pcdnVVStat.has_ret_node += +(s.length > 0);
    }
  }
  _pcdnReqFail(e, t) {
    let { mp4 } = this;
    if (mp4 != null && mp4.pcdnVVStat) {
      mp4.pcdnVVStat.try_req_node += 1;
    }
    this.checkURLExpired(e, t);
  }
  initTimer() {
    if (!this._requestTimer) {
      let { timerInWorker, tickInSeconds } = this.config;
      this._requestTimer = new iJ({
        frequency: tickInSeconds,
        timerInWorker,
      });
      this._requestTimer.on(tt, this.timerHandle);
    }
  }
  playerStartInit(e) {
    let t;
    this.log(
      ep.f.LOG,
      "playerStartInit",
      this.player.hasStart,
      this.playerId,
      e,
    );
    if (this.isDestroy) {
      return;
    }
    let { playerConfig, player } = this;
    this._usePaused = false;
    if (
      this.isActive &&
      (player == null ? undefined : player.currentTime) !== 0 &&
      !this.config.frameFreeze
    ) {
      this.log(
        ep.f.LOG,
        "[playerStartInit] reset current  = 0 ,buffer,",
        JSON.stringify(
          (t = player == null ? undefined : player.buffered2) == null
            ? undefined
            : t.bufferedList,
        ),
      );
      this.player.currentTime = 0;
    }
    this._isH265SoftDecoder = this.softDecode;
    if (
      this.config.reUseMSE &&
      this.mse &&
      tv(e) === "String" &&
      /^blob/.test(e) &&
      e !== this.mse.url
    ) {
      e = playerConfig.url;
      this.destroyMSE();
    }
    if (!e || e === "__auto__" || e === "anytext") {
      let { definition } = playerConfig;
      let t = ((e) => {
        let t = "";
        let i = null;
        let r = e ? e.list : [];
        if (
          r &&
          r.length > 0 &&
          e.defaultDefinition &&
          (r.forEach((r) => {
            if (r.definition === e.defaultDefinition) {
              t = r.url;
              i = r;
            }
          }),
          !t)
        ) {
          let n = r[0];
          t = n.url;
          e.defaultDefinition = n.definition;
          i = n;
        }
        return i;
      })(definition);
      if (t) {
        playerConfig.url = t.url;
        definition.defaultDefinition = t.definition;
        player.curDefinition = t;
      }
    }
    let n = this._defInited ? null : this.getInitBitrate();
    if (playerConfig.nullUrlStart && !n && !playerConfig.url) {
      return;
    }
    this.initTimer();
    if (tN(this.config)) {
      this._initSecret();
    } else {
      this._secretkey = null;
    }
    this._defInited = true;
    this.log(
      ep.f.LOG,
      `[playerStartInit] ${playerConfig.vid} curDefinition`,
      n || this.player.curDefinition,
    );
    let { config } = this;
    let { preloader } = this.player;
    if (preloader) {
      preloader.addPlayingVid(playerConfig.vid);
    }
    let o = !this.softDecode;
    if (config.needPreloadCheck && o && !this._secretkey) {
      let e = false;
      let t;
      let { curDefinition } = this.player;
      if (preloader && curDefinition) {
        t = curDefinition.cacheKey
          ? curDefinition.cacheKey
          : preloader.generateUniqueKey({
              vid: playerConfig.vid,
              definition: curDefinition.definition || -1,
              vtype: playerConfig.vtype,
              codecType: playerConfig.codecType,
            });
        e = preloader.hasItemSameVid(t);
      }
      if (!e) {
        this.useVideoLoad = true;
        this.player.vtype = "MP4_0";
        this.log(
          ep.f.LOG,
          `[playerStartInit] ${playerConfig.vid} no_preload`,
          !!preloader,
          t,
        );
        let e = new iA(this.player, {
          errorType: "runtime",
          errorTypeCode: to.runtime,
          errorCode: ts.other,
          vid: this.playerConfig.vid,
          errorMessage: "no preload",
        });
        this.player.emit("playCatch", this.player.vtype, e);
      }
    }
    if (this.useVideoLoad) {
      e = this.playerConfig.url;
      if (config.closeDowngrade) {
        return;
      }
      this._sTime = tT();
      i0.call(this.player, e);
      this._startProgress();
      return;
    }
    if (this.isDestroy) {
      return;
    }
    this.player.mp4MseFlag = true;
    this.bufferEndTime = -1;
    this._tm = new Date().getTime();
    if (this._initPromise && this._initPromise.state === "pending") {
      let e = this._handlerUrl(playerConfig.url);
      if (e && e.main === config._mainURL) {
        return;
      }
    }
    this._reset();
    let { vid } = this.playerConfig;
    this.changeState("PLAYER_START_INIT");
    let h = this._initMp4Kernel();
    this._initPromise = h;
    this._addPendingPromise(this._initPromise);
    h.then(() => {
      if (!this.isDestroy) {
        if (this.mse) {
          e = this.mse.url;
        }
        this.changeState("PLAY_INIT_OK");
        this._bindEvents();
        this._startProgress();
      }
    })
      .catch((t) => {
        let i = false;
        if (this._initPromise) {
          i = this._initPromise.id !== h.id || this._initPromise.isBreak;
        }
        if (this.isDestroy || i || t === iW) {
          return;
        }
        this.log(
          ep.f.LOG,
          `_initMp4Kernel.catch: ${vid} isDestroy:${this.isDestroy},
          errorCode:${(t == null ? undefined : t.errorCode) || ts.other},errMsg:${(t == null ? undefined : t.errorMessage) || (t == null ? undefined : t.message)}`,
        );
        if (
          (t == null ? undefined : t.errorCode) === ts[403] &&
          this._emitExpireEvent(t) &&
          config.urlExpireDisableErrorEvent
        ) {
          this._initPromise = null;
          this.log(
            ep.f.LOG,
            "initMp4Kernel urlExpireDisableErrorEvent",
            config.urlExpireDisableErrorEvent,
            ",errorCode,",
            t.errorCode,
          );
          this._stopProgress();
          this.emit(iY);
          return;
        }
        let r = t;
        if (!r.errorCode) {
          r = new iA(this.player, {
            errorType: to.RUNTIME,
            errorCode: (t == null ? undefined : t.errorCode) || ts.other,
            vid: this.playerConfig.vid,
            errorMessage:
              (t == null ? undefined : t.errorMessage) ||
              (t == null ? undefined : t.message),
            mediaError: {
              code: (t == null ? undefined : t.httpCode) || ts.other,
              message:
                (t == null ? undefined : t.errorMessage) ||
                (t == null ? undefined : t.message),
              errorType: t == null ? undefined : t.errorType,
            },
          });
          r.url = e;
        }
        this.changeState("PLAY_INIT_CATCH", {
          c: r.errorCode,
          m:
            (t == null ? undefined : t.errorMessage) ||
            (t == null ? undefined : t.message),
          t: t == null ? undefined : t.errorType,
        });
        this.useVideoLoad = true;
        this.player.vtype = "MP4_1";
        this.player.emit("playCatch", this.player.vtype, r);
        let n = this.checkIsDegraded(r);
        this.log(
          ep.f.WARN,
          "PLAY_INIT_CATCH final error !!!!, ",
          vid,
          r == null ? undefined : r.errorCode,
          r == null ? undefined : r.errorMessage,
          ",degrade:",
          n,
        );
        this.emit(iY);
        if (!n) {
          this.player.pause();
          this._reset();
          this.emit("error", r);
          this._initPromise = null;
          return;
        }
      })
      .finally(() => {
        var t;
        if (!this._initPromise) {
          return;
        }
        let { isBreak, id } = this._initPromise;
        if (id !== h.id) {
          return;
        }
        this._removePendingPromise(this._initPromise);
        this._initPromise = null;
        if (this._usePaused) {
          this.playerConfig.autoplay = false;
        }
        if (this.softDecode && tv(e) === "Array") {
          e = e[0].src;
        }
        if (
          !(tv(e) !== "String" || /^blob/.test(e) || this.config.frameFreeze)
        ) {
          this.destroyMSE();
        }
        let reUseSrc =
          ((t = this.player) == null ? undefined : t.currentSrc) === e;
        this.changeState("PLAY_INIT_FINALLY", {
          isDestroy: this.isDestroy,
          isBreak,
          reUseSrc,
        });
        if (!(this.isDestroy || isBreak)) {
          i0.call(this.player, e);
        }
        this.reUseMSEEmitEvents(reUseSrc);
        if (this._abrService && this._abrService.isCurrentInAbr()) {
          this._abrService.enable();
          this._abrService.execute();
        }
      });
  }
  async destroyMSE() {
    let e;
    await ((e = this.mse) == null ? undefined : e.unbindMedia());
    if (this.mse) {
      this.log(ep.f.LOG, "destroyMSE ", this.playerConfig.vid);
    }
    this.mse = null;
  }
  reUseMSEEmitEvents(e) {
    let t;
    if (
      e &&
      /^blob/.test((t = this.player) == null ? undefined : t.currentSrc)
    ) {
      clearTimeout(this.loadstartTimer);
      clearTimeout(this.loadeddataTimer);
      clearTimeout(this.canplayTimer);
      this.loadstartTimer = setTimeout(() => {
        clearTimeout(this.loadstartTimer);
        this.loadstartTimer = null;
        this.emit(iU);
        this.log(ep.f.LOG, "reUseMSE add emit loadstart event");
      }, 10);
      this.loadeddataTimer = setTimeout(() => {
        clearTimeout(this.loadeddataTimer);
        this.loadeddataTimer = null;
        this.emit(iB);
        this.log(ep.f.LOG, "reUseMSE add emit loadeddataevent");
      }, 50);
      this.canplayTimer = setTimeout(() => {
        clearTimeout(this.canplayTimer);
        this.canplayTimer = null;
        this.emit("canplay");
        this.log(ep.f.LOG, "reUseMSE add emit canplayevent");
      }, 90);
    }
  }
  playNext(e) {
    let { player } = this;
    this._defInited = false;
    this._hasTriggerBufferThreshold = false;
    player.resetState();
    player._currentTime = 0;
    player._duration = 0;
    player.isPlaying = false;
    if (this.preloader) {
      this.preloader.clearTask();
    }
    this._useVideoLoad = false;
    this._MSEError = false;
    let softDecode = this.softDecode;
    player.pause();
    this._reset();
    if (e.vtype) {
      this._vtype = e.vtype.toUpperCase();
    }
    player.setConfig(e);
    if (!this.config.frameFreeze) {
      this.checkReUseMSE(this.config.reUseMSE, true);
    }
    if (this.softDecode) {
      player.vtype = "MP4_MSE_SOFT";
    } else {
      player.vtype = "MP4_MSE";
    }
    let { codecType, mediaType } = this.playerConfig;
    this.codecType = codecType ? codecType.toLowerCase() : ti;
    if (softDecode !== this.softDecode) {
      this.h265_h264_switch(mediaType || "video");
    }
    this.checkConfig();
    this.log(ep.f.LOG, "[Index] playNext", e.vtype, e.vid);
    player.start();
    if (this.config.reUseMSE && !this.isH265DegradeH264) {
      let e = () => {
        this.log(ep.f.LOG, "[Index] playNext metadata update currentTime = 0");
        if (player.currentTime !== 0) {
          player.currentTime = 0;
        }
        this._removeMetaDataEvent();
      };
      this._addMetaDataEvent(e);
    }
    this.emit("playnext");
  }
  h265_h264_switch(e) {
    this.log(ep.f.LOG, "[Index],h265_switch_h264", e);
    let { player } = this;
    let { mediaConfig } = player;
    let r = ty(e, "", mediaConfig, `xgplayer-${e}-img`);
    this.removeVideoList.push(player.video);
    let { muted, volume } = player.video;
    r.muted = muted;
    r.volume = volume;
    player.video = r;
    player.attachVideoEvents(player.video);
  }
  next(e) {
    this.playNext(e);
  }
  oldChangeDefinition(e, t) {
    let { config, player, playerConfig } = this;
    player.emit(iF, {
      from: t,
      to: e,
    });
    player.emit("waiting");
    let player_definitionList = player.definitionList;
    let s = player_definitionList.filter(
      (t) =>
        t.definition === e.definition || t.definition === Number(e.definition),
    );
    let o = player_definitionList.filter(
      (e) =>
        e.definition === t.definition || e.definition === Number(t.definition),
    );
    if (o.length > 0) {
      o[0].selected = false;
    }
    if (!(s.length > 0)) {
      return;
    }
    e = s[0];
    e.selected = true;
    player.curDefinition = e;
    this.log(
      ep.f.LOG,
      "[oldChangeDefinition],currentTime,",
      player.currentTime,
      ",from,",
      t,
      ",to,",
      e,
    );
    let { currentTime, paused } = player;
    if (!this._changeDefState) {
      this._changeDefState = {
        currentTime,
        paused,
      };
    }
    config.definition = e.definition;
    [
      "keyValue",
      "kid",
      "secretKey",
      "drm",
      "getLicenseUrl",
      "drmKeyToken",
      "sessionId",
    ].forEach((t) => {
      config[t] = e[t];
    });
    playerConfig.url = e.url;
    playerConfig.userSelectDefinition = e.definition;
    playerConfig.defaultDefinition = e.definition;
    config.focusUserDefinition = true;
    player.currentTime = 0;
    player.pause();
    this._reset();
    this.checkReUseMSE();
    this._isMseInit = false;
    this.eme = null;
    let d = this._handlerUrl(e.url);
    config._mainURL = d.main;
    config._backupURL = d.backup;
    if (this._changeDefineCanPlay) {
      player.off("canplay", this._changeDefineCanPlay);
    }
    this._changeDefineCanPlay = () => {
      this.changeDefineCanPlay(currentTime, paused, t, e);
      this._changeDefineCanPlay = null;
    };
    player.once("canplay", this._changeDefineCanPlay);
    this.player.video.load();
    this.playerStartInit(playerConfig.url);
  }
  _emitDefinitionChangeDetailEvent(start) {
    let { bitrate, definition, file_id, width, vwidth, height, vheight } =
      this._currDefinition;
    this.player.emit("definitionChangeDetail", {
      start,
      bitrate,
      definition,
      mediaType: "video",
      url: this.config._mainURL,
      fileid: file_id,
    });
    this.player.emit("RESOLUTION_UPDATE", {
      width: width || vwidth,
      height: height || vheight,
    });
  }
  _setCurrentDefinition(e) {
    let { config } = this.player;
    if (config.definition && config.definition.list) {
      let i = config.definition.list.filter((t) => t.bitrate === e);
      this._currDefinition = i && i[0];
    }
    if (!this._currDefinition) {
      this._currDefinition = {
        bitrate: e,
      };
    }
    if (e) {
      this._currDefinition.bitrate = e;
    }
  }
  switchURL(e) {
    if (this.useVideoLoad) {
      return void i4.call(this.player, e);
    }
    let { player, playerConfig, config } = this;
    playerConfig.definition.list = [e];
    playerConfig.url = e.url;
    playerConfig.defaultBitrate = e.bitrate;
    playerConfig.defaultDefinition = e.definition;
    [
      "keyValue",
      "kid",
      "secretKey",
      "drm",
      "getLicenseUrl",
      "drmKeyToken",
      "sessionId",
    ].forEach((t) => {
      config[t] = e[t];
    });
    let n = () => {
      player.currentTime = 0;
      this._removeMetaDataEvent();
    };
    this._addMetaDataEvent(n);
    this.playNext(config);
  }
  _handlerUrl(e) {
    let t;
    let { playerConfig } = this;
    if (!e) {
      return null;
    }
    let backup = [];
    if (tv(e) === "String") {
      t = e;
      if (playerConfig.backupURL) {
        backup.push(playerConfig.backupURL);
      }
    } else if (
      tv(e) === "Array" &&
      e.length > 0 &&
      ((t = e[0].src), e.length > 1)
    ) {
      for (let t = 1; t < e.length; t++) {
        backup.push(
          tb(e[t].src, {
            __vid: playerConfig.vid,
          }),
        );
      }
    }
    return (
      (!!t || backup.length !== 0) && {
        main: tb(t, {
          __vid: playerConfig.vid,
        }),
        backup,
      }
    );
  }
  _firstFrameTime() {
    let { firstFrameTime, player, config, loadstart } = this;
    let n = {
      supportHevc: config.supportHevc,
      firstmux: this.mp4 ? this.mp4.firstFrameTime.firstmux : -1,
      stats: tM(player),
      loadstart,
    };
    this.firstFrameTime = ((
      e,
      t,
      i = {
        supportHevc: false,
        loadstart: 0,
        firstmux: -1,
        stats: {},
      },
    ) => {
      let r;
      if (t === ti || i.supportHevc) {
        if (e.new_loadeddata < 0) {
          e.loadst_loadeddata = tT() - i.loadstart;
          e.new_loadeddata = tT() - e.newplayer;
        }
        return e;
      }
      if (t === tr) {
        let { stats, firstmux } = i;
        let { metaload, startMuxTime } = e;
        let o = {};
        for (
          let e = 0;
          e <
          ((r = stats == null ? undefined : stats.bootStats) == null
            ? undefined
            : r.length);
          e++
        ) {
          o[stats.bootStats[e].action] = stats.bootStats[e].dot;
        }
        let l = {
          ...stats,
          metaload,
          startload_stmux: startMuxTime,
          firstmux,
          ...o,
        };
        delete l.bootStats;
        return l;
      }
    })(firstFrameTime, this.codecType, n);
  }
  _bindEvents() {
    this.log(ep.f.LOG, "bindEvents,", this._isEventInit);
    let { config, player } = this;
    if (!this._isEventInit) {
      this.on("seeking", this._onSeeking);
      this.on("waiting", this._onWaiting);
      this.on("error", this._onVideoError);
      this.on("playing", this._onPlaying);
      this.on("pause", this._onPause);
      this.on("detectGap", () => {
        if (config.gapDegrade && config.useEME) {
          config.useEME = false;
          this._replay();
        }
      });
      this.on(h.CHANGE_FLYING_PLUGIN_CONFIG, this._onChangeConfig);
      player.setEventsMiddleware({
        error: (e, i) => {
          var r;
          let n = e == null ? undefined : e.error;
          let a = {
            errorCode: n == null ? undefined : n.code,
            errorMessage: n == null ? undefined : n.message,
            videoType: this.useVideoLoad,
          };
          this.changeState("video_error.Middleware", a);
          if (
            this.codecType === tr &&
            (n == null
              ? undefined
              : n.message.indexOf("video decoder initialization failed")) >= 0
          ) {
            this.emit("DECODER_FAILED", {
              codecType: this.config.codecType,
              vid: this.playerConfig.vid,
            });
          }
          this.log(
            ep.f.ERROR,
            "error middleware",
            JSON.stringify(a),
            ", isDegrade,",
            !this._MSEError && !this.useVideoLoad,
            player.currentTime,
          );
          if (!this._MSEError && !this.useVideoLoad) {
            player.vtype = "MP4_2";
            this._MSEError = true;
            if ((r = this.mp4) != null) {
              r.cancelLoading();
            }
            this._startDegradedPlayback(a, player.paused);
            this.emit(iY);
            return;
          }
          this.emit(iY);
          if (this.useVideoLoad) {
            i(e.eventName, e == null ? undefined : e.error);
          }
        },
      });
    }
    this._isEventInit = true;
  }
  getBufferDur() {
    let e;
    if (!((e = this.player) != null && e.buffered)) {
      return 0;
    }
    let { buffered } = this.player;
    let i = 0;
    for (let e = 0, r = buffered.length; e < r; e++) {
      i += buffered.end(e) - buffered.start(e);
    }
    return i;
  }
  deleteVideo() {
    let e;
    if (((e = this.removeVideoList) == null ? undefined : e.length) > 0) {
      for (let e = 0; e < this.removeVideoList.length; e++) {
        let t = this.removeVideoList[e];
        let i = t.parentNode;
        if (i) {
          i.removeChild(t);
        }
        this.log(ep.f.WARN, "[_removeVideoSource]");
      }
      this.removeVideoList = [];
    }
  }
  _unbindEvents() {
    let e;
    this.log(ep.f.LOG, "unbindEvents,", this._isEventInit);
    this.off("seeking", this._onSeeking);
    this.off("waiting", this._onWaiting);
    this.off("ended", this._onEnded);
    this.off("error", this._onError);
    this.off("playing", this._onPlaying);
    this.off("pause", this._onPause);
    this.off(h.CHANGE_FLYING_PLUGIN_CONFIG, this._onChangeConfig);
    this._isEventInit = false;
    if ((e = this.config) != null && e.enableFPSStuckHandle) {
      this.off(iZ, this.fpsStuckHandle);
    }
  }
  changeState(e, t = {}) {
    if (!this._pTime) {
      this._pTime = tT();
    }
    let t1_1 = tT() - this._pTime;
    let t2_1 = tT() - this._sTime;
    this.log(ep.f.LOG, `>>>changeState[${e}]`, t1_1, t2_1, JSON.stringify(t));
    this.states.push({
      state: e,
      t1: t1_1,
      t2: t2_1,
      data: t,
    });
    this._pTime = tT();
  }
  get softDecode() {
    let e;
    let t;
    return (
      ((t = (e = this.player) == null ? undefined : e.config) == null
        ? undefined
        : t.mediaType) === "xg-video"
    );
  }
  _initH265MseProxy() {
    let { player } = this;
    if (player.video instanceof HTMLVideoElement) {
      this.h265_h264_switch(this.playerConfig.mediaType);
    }
    let player_video = player.video;
    if (this.softDecode && player_video.setPlayMode) {
      player_video.setPlayMode("VOD");
    }
    this.mseProxy = player_video;
    if (this.softDecode) {
      player.forceDegradeToVideo = () => {};
      tD(player, "lowdecode", this._lowDecoder);
      tD(player, "error", this._onError);
    }
  }
  notSupportError(e) {
    this.log(ep.f.LOG, e, e2);
    return new iA(this.player, {
      errorType: to.MEDIA,
      errorCode: ts.mse,
      errorMessage: `${e} ${e2}`,
      vid: this.playerConfig.vid,
    });
  }
  removeAndRejectInitPromise(e) {
    if (this._initPromise) {
      this._removePendingPromise(this._initPromise);
      this._initPromise.reject(e);
    }
  }
  _initMp4(e, t = {}, i = {}) {
    let r;
    let n;
    let a;
    let s;
    let o;
    let l;
    let h;
    let { config, player, playerConfig } = this;
    if (this.mp4) {
      this.mp4.destroy();
      this.mp4 = null;
    }
    this.changeState("MP4_NEW", {});
    let switchPCDNMaxCnt = 0;
    if (
      (r = config == null ? undefined : config.pcdnConfig) != null &&
      r.openPCDN
    ) {
      switchPCDNMaxCnt =
        ((n = config == null ? undefined : config.pcdnConfig) == null
          ? undefined
          : n.switchPCDNMaxCnt) || 2;
    }
    if (
      (a = config == null ? undefined : config.pcdnConfig) != null &&
      a.adaptPCDNConfig
    ) {
      switchPCDNMaxCnt = 0;
    }
    this._setCurrentDefinition(player.curDefinition.bitrate);
    config == null || config.loadRangeType;
    let g =
      (o = (s = player.curDefinition) == null ? undefined : s.pktOffsetMap) ==
      null
        ? undefined
        : o.find(
            (e) =>
              (e == null ? undefined : e.time) ===
              ((config == null ? undefined : config.firstLoadTimePos) || 5),
          );
    let p = g == null ? undefined : g.offset;
    let m = ((e, t) => {
      let { getRequestOptionsCallback, reqOptions } = e;
      let n = null;
      n = t.reqOptions
        ? t.reqOptions
        : tv(getRequestOptionsCallback) === "Function"
          ? getRequestOptionsCallback(t)
          : reqOptions;
      return {
        ...reqOptions,
        ...n,
      };
    })(this.config, {
      url: e,
    });
    this.mp4 = new t2(
      e,
      player.curDefinition.bitrate,
      {
        segmentDuration: config.segmentMinDuration,
        enableWorker: config.enableWorker,
        codecType: this.codecType,
        chunkSize: config.chunkSize,
        firstLoadSize: p,
        duration: playerConfig.duration || 0,
        fileSize: i.fileSize || 0,
        playerId: this.playerId,
        vid: playerConfig.vid,
        useUrlRange: config.useUrlRange,
        retryCount: config.retryCount,
        retryDelay: config.retryDelay,
        timeout: config.timeout,
        onProcessMinLen: config.onProcessMinLen,
        supportHevc: config.supportHevc,
        afterLoadeddataCallBackLen: config.afterLoadeddataCallBackLen,
        firstLoadBuffer: config.firstLoadBuffer,
        logger: this.logger,
        switchPCDNMaxCnt,
        reqOptions: m,
        fixEditListOffset: config.fixEditListOffset,
      },
      this.config._backupURL,
      this.firstFrameTime,
      "",
    );
    this.mp4.once(tG, this._onMp4MetaReady);
    this.mp4.on(tj, this._onMp4Error);
    this.mp4.on(tH, this._updateDrmConfig);
    this.mp4.on(tK, this._updateMSE);
    this.mp4.on(tV, this._onMp4Progress);
    this.mp4.on(t$, this._onMp4DataCallBack);
    this.mp4.on(tW, (e) => {
      if (this.player) {
        this.player.emit("source_error", e);
      }
    });
    this.mp4.on(tX, (e) => {
      var t;
      var i;
      let { player, config } = this;
      this.emit(iY);
      this.log(
        ep.f.LOG,
        "not match remove buffer start,buffer,",
        JSON.stringify(
          (t = player == null ? undefined : player.buffered2) == null
            ? undefined
            : t.bufferedList,
        ),
        ", removeRange,",
        JSON.stringify(e),
      );
      if ((i = this.mse) != null) {
        i.remove(em.Ub.VIDEO, e[0] + 0.1, e[1] - 0.1)
          .then(() => {
            var e;
            this.log(
              ep.f.LOG,
              "not match remove buffer end,",
              JSON.stringify(
                (e = player == null ? undefined : player.buffered2) == null
                  ? undefined
                  : e.bufferedList,
              ),
            );
            let { currentTime } = player;
            if ((config == null ? undefined : config.loadRangeType) === e7) {
              player.currentTime = currentTime;
              this.log(
                ep.f.LOG,
                "not match remove buffer end, fix currentTime",
                player.currentTime,
              );
            }
          })
          .catch(() => {});
      }
    });
    this.mp4.on(tJ, (e) => {
      if (this.pcdn && e) {
        this.pcdn.removePCDNNode(e.vid, e.bitrate, e.url);
      }
    });
    this.mp4.on(tz, (e) => {
      if (this.player) {
        this.player.rawSrc = e;
        this.player.emit("initialUrl", {
          url: e,
        });
        this.player.emit("changeHost", tR(e));
      }
    });
    this.mp4.on(tq, async (e) => {
      var t;
      await ((t = this.mp4) == null ? undefined : t.cancelLoading());
      this._curLoadSegmentIdx = e;
      this.log(ep.f.LOG, "[update curLoadSegmentIdx]", e);
    });
    this.mp4.on(tY, (e) => {
      var t;
      var i;
      var r;
      if (!this.player) {
        return;
      }
      let { vid } = playerConfig;
      let a = {
        vid,
        taskType: 1,
        changeCnt: (t = this.mp4) == null ? undefined : t.getCurSwitchPCDNCnt(),
        traceId:
          (r = (i = this.mp4) == null ? undefined : i.pcdnTraceInfo) == null
            ? undefined
            : r.trace_id,
      };
      let s = ((e, t, i = {}) => {
        let { vid, taskType, changeCnt, traceId } = i;
        let { bitrate, definition, file_id } = t;
        let d = (e == null ? undefined : e.load_type) || "cdn";
        let u = {
          vid,
          task_type: taskType,
          change_cnt: changeCnt,
          definition,
          bitrate,
          fileid: file_id,
        };
        if (d === "cdn") {
          u.cdn_size = e.len;
        } else {
          u.pcdn_size = e.len;
          u.trace_id = traceId;
        }
        return u;
      })(e, this._currDefinition, a);
      this.player.emit("prf_data_size", s);
      let o = (e == null ? undefined : e.load_type) || "cdn";
      if (this.mp4) {
        this.mp4.updateLoadInfo(o, e.len);
      }
      if (tg) {
        console.log(
          "prf_data_size emit, vid,",
          vid,
          ",loadType,",
          o,
          ", task_type, 1",
          ",len,",
          e.len,
        );
      }
    });
    this.mp4.MP4Loader.on(e4, (e) => {
      var t;
      var i;
      var r;
      var n;
      var a;
      var s;
      var o;
      var l;
      var h;
      var d;
      i3 = e.speed;
      ((e, t) => {
        if (!e.speed) {
          e.speed = [];
        }
        let { speed } = e;
        speed.push(t);
        if (speed.length > 10) {
          speed.shift();
        }
      })(this.debugInfo, e.speed);
      let type =
        ((t = e == null ? undefined : e.priOptions) == null
          ? undefined
          : t.type) || "cdn";
      this.emit(e4, {
        speed: e.speed,
        type,
        ...e,
      });
      let c =
        ((i = this.playerConfig) == null ? undefined : i.vid) ||
        (e == null ? undefined : e.vid);
      if ((e == null ? undefined : e.len) > 0) {
        let t;
        let i;
        if (!this.player) {
          return;
        }
        let u =
          ((r = e == null ? undefined : e.priOptions) == null
            ? undefined
            : r.type) || "cdn";
        let f =
          ((n = this.adaptRangeRes) == null ? undefined : n.length) > 0
            ? this.adaptRangeRes.shift()
            : {};
        let change_cnt =
          (a = this.mp4) == null ? undefined : a.getCurSwitchPCDNCnt();
        let { bitrate, definition, file_id } = this._currDefinition;
        let y = {
          vid: c,
          task_type: 1,
          change_cnt,
          bitrate,
          definition,
          fileid: file_id,
        };
        let v = tA(f);
        t = tI(e.len, e.time);
        i = {
          cdn_size: 0,
          cdn_speed: 0,
          pcdn_size: 0,
          pcdn_speed: 0,
        };
        if (u === "cdn") {
          i.cdn_size = e.len;
          i.cdn_speed = t;
        } else {
          i.pcdn_size = e.len;
          i.pcdn_speed = t;
        }
        let T = i;
        let b = {
          ...y,
          ...v,
          ...T,
        };
        let { idx } = f;
        this.player.emit("prf_data_size", b);
        if (tg) {
          console.log("prf_data_size emit,", idx, JSON.stringify(b));
        }
        let L = e.index
          ? (l =
              (o =
                (s = this.mp4) == null
                  ? undefined
                  : s.adaptTimeRange[e.index]) == null
                ? undefined
                : o.timeRangeIdx) == null
            ? undefined
            : l[1]
          : null;
        if (L && L >= this.mp4.timeRange.length - 1) {
          while (
            ((h = this.adaptRangeRes) == null ? undefined : h.length) > 0
          ) {
            let e = this.adaptRangeRes.shift();
            let t =
              (d = this.mp4) == null ? undefined : d.getCurSwitchPCDNCnt();
            let i = {
              ...y,
              ...T,
              ...tA(e),
            };
            i.change_cnt = t;
            this.player.emit("prf_data_size", i);
            if (tg) {
              console.log("prf_data_size emit,", idx, JSON.stringify(i));
            }
          }
        }
        if (this.mp4) {
          this.mp4.updateLoadInfo(u, e.len);
        }
      }
    });
    if (
      (l = config == null ? undefined : config.pcdnConfig) != null &&
      l.adaptPCDNConfig
    ) {
      if ((h = this.mp4) != null) {
        h.setSwitchPCDNCallBack(() => {
          let { pcdn } = this;
          if (!pcdn) {
            return -1;
          }
          let t = pcdn.getPCDNChangeCnt() || -1;
          this.log(ep.f.LOG, "[updateSwitchPCDNMaxCnt]", t);
          return t;
        });
      }
    }
    this.changeState("MP4_INIT", {});
    this.emit("loadstart_mse");
    if (!t) {
      t = {};
    }
    this.mp4.init(t);
    this._emitDefinitionChangeDetailEvent(0);
  }
  _checkPreloader() {
    let { playerConfig } = this;
    let t = new t9();
    let i = {
      method: "checkPreloader",
      success: 0,
      type: "error",
      cacheKey: "",
    };
    this.changeState("CHECK_PRELOAD");
    let { curDefinition, preloader } = this.player;
    if (!preloader) {
      this.changeState("PRELOAD_ERROR", {
        t: 2,
      });
      i.success = 0;
      i.error = Error("no_preloader");
      t.resolve(i);
      return t;
    }
    let ck = curDefinition.cacheKey
      ? curDefinition.cacheKey
      : preloader.generateUniqueKey({
          vid: playerConfig.vid,
          definition: curDefinition.definition || -1,
          vtype: playerConfig.vtype,
          codecType: playerConfig.codecType,
        });
    i.cacheKey = ck;
    if (ck) {
      preloader.getPreLoadData(ck).then((e) => {
        if (e) {
          let { bitrate, orgDefinition } = e;
          if (
            bitrate &&
            curDefinition.bitrate &&
            bitrate !== curDefinition.bitrate
          ) {
            this.preLoadData = null;
            i.success = 0;
            i.error = Error(
              `bitrate_not_match_cut_${curDefinition.bitrate}_cache_${bitrate}`,
            );
            this.changeState("PRELOAD_ERROR", {
              bitrate,
              ck,
            });
            t.resolve(i);
            this.log(
              ep.f.LOG,
              `>>>check Preloader bitrate_not_match cacheKey${ck}
                curDefinition:${curDefinition.bitrate}  cache:${bitrate}`,
            );
            return;
          }
          curDefinition.orgDefinition = orgDefinition;
          if (openLog) {
            console.log(">>>>check Preloader result", ck, e);
          }
          this.preLoadData = e;
          this.emit("PRELOAD_INFO", this.preLoadData);
          this.emit("hitCache", e);
          i.success = 1;
          i.data = e;
          e9.set(ck, true);
          this.changeState("PRELOAD_OK", {
            l: this.preLoadData.byteLength,
            ck,
          });
          if (
            (e.mediaSegList && e.mediaSegList.length > 0) ||
            (e.buffer && e.buffer.byteLength > 0)
          ) {
            this.hitpreload = true;
          } else {
            this.hitpreload = false;
          }
          t.resolve(i);
        } else {
          this.preLoadData = null;
          this.changeState("PRELOAD_ERROR", {
            t: 0,
          });
          i.success = 0;
          i.error = Error("none_preload");
          t.resolve(i);
        }
      });
    } else {
      this.changeState("PRELOAD_ERROR", {
        t: 2,
      });
      i.success = 0;
      i.error = Error("none_preload");
      t.resolve(i);
    }
    return t;
  }
  _initEME(e, t) {
    let i;
    let r;
    let n = tN(this.config);
    let { useEME } = this.config;
    if (n && useEME && !i5.checkEMEValid()) {
      this.log(ep.f.ERROR, "checkEMEInValid");
      this._errorHandler(
        new iA(this.player, {
          errorType: to.MEDIA,
          errorCode: ts.eme_hijack,
          errorMessage: "checkEMEInValid",
          vid: this.playerConfig.vid,
        }),
      );
      return;
    }
    let { player, config } = this;
    this._updateDrmConfig(t);
    this.log(ep.f.LOG, "useEME: ", config.useEME);
    if ((i = this._secretkey) != null) {
      i.setOptions(
        'video/mp4; codecs="avc1.64001E"',
        'audio/mp4; codecs="mp4a.40.2"',
      );
    }
    if ((r = this._secretkey) != null) {
      r.setupEME(player.video);
    }
  }
  async _initMse(e, t = false) {
    let i;
    let r;
    let n;
    let a;
    let s;
    let o;
    let l;
    let { useEME } = this.config;
    if (tN(this.config) && useEME && !i5.checkMSEValid()) {
      this.log(ep.f.ERROR, "checkMSEInValid ");
      this._errorHandler(
        new iA(this.player, {
          errorType: to.MEDIA,
          errorCode: ts.mse_hijack,
          errorMessage: "checkMSEInValid",
          vid: this.playerConfig.vid,
        }),
      );
      return;
    }
    if ((i = this.player) != null) {
      i.emit("codecsupdate", e.videoCodec);
    }
    if (this.config.frameFreeze) {
      this.log(ep.f.LOG, "release freezed frame");
      if (this.mse) {
        let e = this.mse;
        this.mse = null;
        await e.unbindMedia();
      }
      if (this.player && this.player.src) {
        this.player.removeAttribute("src");
        this.player.load();
      }
    } else {
      this.updateMSEDuration();
    }
    r = this.mp4;
    a = r && r.checkCodecH265();
    s = r && r.checkCodecH266();
    o = !!e.videoCodec;
    l = !!e.audioCodec;
    let codec =
      o && l
        ? a
          ? 'video/mp4; codecs="hev1.1.6.L93.B0, mp4a.40.5"'
          : s
            ? 'video/mp4; codecs="bvc2.1.6.L93.B0, mp4a.40.5"'
            : 'video/mp4; codecs="avc1.64001E, mp4a.40.5"'
        : o
          ? a
            ? 'video/mp4; codecs="hev1.1.6.L93.B0"'
            : s
              ? 'video/mp4; codecs="bvc2.1.6.L93.B0"'
              : 'video/mp4; codecs="avc1.64001E"'
          : 'video/mp4; codecs="mp4a.40.5"';
    let u = {
      [em.Ub.VIDEO]: {
        mimeType: "video/mp4",
        codec,
      },
    };
    if (this.mse) {
      this.log(ep.f.LOG, "MSE exit");
      (n = new t9()).resolve();
    } else {
      this.log(ep.f.LOG, "new MSE");
      this.mse = new em.Ub();
      n = this.mse.bindMedia(this.player.video);
    }
    n.then((e) => {
      var i;
      this.changeState("MSE_OPEN");
      let { firstFrameTime } = this;
      firstFrameTime.initmse_sbopen = e == null ? undefined : e.costtime;
      if (this._loadStartEventTime > 0) {
        firstFrameTime.mseopen = tT() - this._loadStartEventTime;
      }
      let n = Object.keys(u);
      try {
        for (let e = 0; e < n.length; e++) {
          let r = n[e];
          if ((i = this.mse) != null) {
            i.createOrChangeSource(r, u[r].codec)
              .then(() => {
                this.changeState("MSE_OPEN_DONE");
                this._isMseInit = true;
                this._onTimeUpdate();
              })
              .catch(async (e) => {
                var i;
                this.config.reUseMSE = false;
                this.log(
                  ep.f.WARN,
                  "MSE createOrChangeSource catch err: ",
                  e == null ? undefined : e.message,
                );
                await ((i = this.mse) == null ? undefined : i.unbindMedia());
                this.mse = null;
                this._isMseInit = false;
                if (t) {
                  this.MSEErrorHandle(e);
                } else {
                  this._initMse(this.mp4.meta, true);
                }
              });
          }
        }
      } catch (error) {
        this.MSEErrorHandle(error);
      }
    }).catch((e) => this.MSEErrorHandle(e));
    this.changeState("MSE_INIT");
  }
  MSEErrorHandle(e) {
    let t = new iA(this.player, {
      errorType: to.mse,
      errorCode: ts.mse,
      vid: this.playerConfig.vid,
      errorMessage: e.message,
      mediaError: {
        code: ts.mse,
        message: e.message,
      },
    });
    this.log(ep.f.ERROR, "initMse error: ", e == null ? undefined : e.message);
    this._errorHandler(t);
  }
  _appendInitSeg(e) {
    if (!(!this.mse || this._MSEError)) {
      this.changeState("MSE_INITSEG");
      this.mse
        .append(em.Ub.VIDEO, e, {
          vid: this.playerConfig.vid,
          range: null,
          dataLen: e.byteLength,
          isinit: true,
        })
        .then((e) => {
          this.firstFrameTime.metaready_initsegend =
            e == null ? undefined : e.costtime;
          this.changeState("MSE_INITSEG_OK", {
            costtime: e == null ? undefined : e.costtime,
          });
        });
      if (this.config.useEME && this._secretkey) {
        this._secretkey.encryptHandle();
      }
    }
  }
  _checkMetaInfo(e) {
    if (!e) {
      return new iA(this.player, {
        errorType: to.DEMUX,
        errorCode: ts.metaError,
        errorMessage: "meta is null",
        vid: this.playerConfig.vid,
      });
    }
    let isH265 = this.mp4.checkCodecH265();
    let isH266 = this.mp4.checkCodecH266();
    this.changeState("MP4_META_READY", {
      isH265,
      isH266,
    });
    if (
      !isH265 ||
      (this.codecType !== tr &&
        ((this.codecType = tr),
        this.log(ep.f.LOG, "codecType fix ", this.codecType)),
      this.softDecode || this.config.supportHevc)
    ) {
      if (
        isH266 &&
        (this.codecType !== tn &&
          ((this.codecType = tn),
          this.log(ep.f.LOG, "codecType fix ", this.codecType)),
        !this.config.supportVvcc)
      ) {
        return this.notSupportError(this.codecType);
      }
      return null;
    }
    return this.notSupportError(this.codecType);
  }
  _stopProgress() {
    this.log(ep.f.LOG, "stopProgress", this._hasStartProgress);
    this._hasStartProgress = false;
    if (this._requestTimer) {
      this._requestTimer.stop();
    }
    if (this._bufferBreakTimer) {
      clearTimeout(this._bufferBreakTimer);
      this._bufferBreakTimer = null;
      this._bufferBreakFlag = undefined;
    }
    if (this._seekResumTimer) {
      clearTimeout(this._seekResumTimer);
      this._seekResumTimer = null;
    }
  }
  checkReStartTimer() {
    let e = tT() - this._lastTimeupdateTime2;
    if (e > 2 * this.config.tickInSeconds * 1000 && !this._offineLine) {
      this.log(ep.f.LOG, "checkReStartTimer reStart timer", e, tT());
      this._stopProgress();
      this._startProgress();
      this._lastTimeupdateTime2 = tT();
    }
  }
  _bindNetworkStateChange() {
    window.addEventListener("online", this._onOnlineHandler);
    window.addEventListener("offline", this._onOfflineHandler);
  }
  _unbindNetworkStateChange() {
    window.removeEventListener("online", this._onOnlineHandler);
    window.removeEventListener("offline", this._onOfflineHandler);
  }
  _onSuperStart(e) {
    let { player } = this;
    t_(`_onSuperStart:${e}`, this.mse);
    player.video.src = e;
    this.once("canplay", () => {
      player.play();
      this.on("waiting", this._onWaiting);
    });
  }
  _appendBuffer(e, t, i = {}, r) {
    let { mse, playerConfig, player } = this;
    let { vid } = playerConfig;
    this.log(
      ep.f.LOG,
      "appendStart",
      vid,
      i.fragIndex,
      JSON.stringify(i.range),
    );
    if (this._MSEError) {
      this.log(ep.f.ERROR, "_MSEError, not append return");
    } else {
      mse
        .append(e, t, {
          vid,
          fragIndex: i.fragIndex,
          range: i.range,
          dataLen: t.byteLength,
          state: r,
        })
        .then((e) => {
          var t;
          var n;
          var a;
          var o;
          var l;
          var h;
          var d;
          let u = player.getBufferedRange();
          this.log(
            ep.f.LOG,
            "appendEnd ",
            (t = e == null ? undefined : e.context) == null
              ? undefined
              : t.fragIndex,
            JSON.stringify(
              (n = e == null ? undefined : e.context) == null
                ? undefined
                : n.range,
            ),
            (a = e == null ? undefined : e.context) == null
              ? undefined
              : a.dataLen,
            ", costTime,",
            e == null ? undefined : e.costtime,
            ", opt,",
            e == null ? undefined : e.name,
            ",buffer,",
            JSON.stringify(u),
            player.currentTime,
          );
          this.checkBufferArriveEndTime();
          let firstFrameTime = this.firstFrameTime;
          if (firstFrameTime.loadst_loadeddata < 0) {
            firstFrameTime.apcnt++;
            let dataLen =
              ((o = e == null ? undefined : e.context) == null
                ? undefined
                : o.dataLen) || 0;
            let costime = (e == null ? undefined : e.costtime) || 0;
            firstFrameTime.aplen += dataLen;
            firstFrameTime.data_ap += costime;
            let r = false;
            for (let e = this.states.length - 1; e >= 0; e--) {
              if (this.states[e].state === "APPEND_DATA_OK") {
                this.states[e].data.cnt += 1;
                this.states[e].data.costime += costime;
                this.states[e].data.dataLen += dataLen;
                r = true;
                break;
              }
            }
            if (!r) {
              this.changeState("APPEND_DATA_OK", {
                costime,
                dataLen,
                cnt: 1,
              });
            }
          }
          let f =
            (d =
              (h =
                (l = this.mp4) == null
                  ? undefined
                  : l.adaptTimeRange[i.fragIndex]) == null
                ? undefined
                : h.timeRangeIdx) == null
              ? undefined
              : d[1];
          if (this.mse && r && f >= this.mp4.timeRange.length) {
            let { buffered } = this.player;
            if (
              buffered &&
              (buffered == null ? undefined : buffered.length) > 0
            ) {
              this.bufferEndTime = buffered.end(buffered.length - 1);
            }
            this._isEnded();
            this.log(
              ep.f.LOG,
              "loaded ended !!!==>>>",
              JSON.stringify(i.range),
              ", fragIndex,",
              i.fragIndex,
              ", bufferEndTime,",
              this.bufferEndTime,
              ",meta_duration,",
              this.mp4.meta.duration,
            );
          }
        })
        .catch((e) => {
          let { player, mse } = this;
          if (this._MSEError || !player) {
            return;
          }
          let n = player.media || player.video;
          if (e && mse != null && mse.isFull()) {
            this.log(ep.f.WARN, "[MSE is full]");
            let e = player.getBufferedRange(player.buffered2);
            this._checkRemoveSourceBuffer(e, player.currentTime, true);
          } else {
            let r = `${
              n != null && n.error
                ? [n.error.code, n.error.message].join("-")
                : "MEDIA_EMPTY"
            }`;
            let a = `${(e == null ? undefined : e.errorCode) || ""}-${(e == null ? undefined : e.errorMessage) || (e == null ? undefined : e.message) || "MSE_EMPTY"}|${r}`;
            this._MSEError = true;
            this.changeState("_MSEError", {
              fragIndex: i == null ? undefined : i.fragIndex,
              range: i == null ? undefined : i.range,
            });
            this.log(
              ep.f.LOG,
              "MSE append error",
              i == null ? undefined : i.fragIndex,
              i == null ? undefined : i.range,
            );
            let s = new iA(player, {
              errorType: to.MEDIA,
              errorCode: ts.mseAppend,
              vid,
              errorMessage: a,
              mediaError: {
                code: ts.mseAppend,
                message: a,
              },
            });
            this._errorHandler(s);
          }
        });
    }
  }
  async _loadData() {
    if (!(!this.mp4 || !this._isMseInit)) {
      if (this.loadstart < 0) {
        this.loadstart = tT();
      }
      try {
        await this.mp4.load(this._curLoadSegmentIdx, this._loadDataSuccess);
      } catch (error) {
        this.log(
          ep.f.ERROR,
          "[Index] _loadData error",
          this.playerConfig.vid,
          error == null ? undefined : error.message,
        );
      }
    }
  }
  getDataBitRate(e) {
    let { mp4, playerConfig } = this;
    let { definition } = playerConfig;
    if (!mp4 || !definition || definition.list) {
      return 0;
    }
    let n = mp4.getDataBitRate(e);
    let { list } = definition;
    let s = 0;
    for (let e = 0; list && e < list.length; e++) {
      if (list[e].bitrate === n) {
        s = list[e];
        break;
      }
    }
    return s;
  }
  _loadStuckCheck() {
    let e;
    let { config, player } = this;
    if (!config.disableBufferBreakCheck) {
      let r = player.isUserActive;
      if (
        player.currentTime - (this._lastCurrentTime || 0) > 0.1 ||
        (!r && player.paused) ||
        (r && this.playFlag && player.paused)
      ) {
        if (this._bufferBreakFlag === 1 || this._bufferBreakFlag === 2) {
          this.log(
            ep.f.LOG,
            "视频没有卡死,重置卡死标记,curtime,",
            player.currentTime,
          );
          this._bufferBreakFlag = 0;
          clearTimeout(this._bufferBreakTimer);
          this._bufferBreakFlag = null;
        }
      } else if (!this._bufferBreakFlag) {
        this._bufferBreakFlag = 1;
        let n = JSON.stringify(
          (e = player == null ? undefined : player.buffered2) == null
            ? undefined
            : e.bufferedList,
        );
        this.log(
          ep.f.LOG,
          `\u{5361}\u{6B7B}\u{8BA1}\u{65F6}\u{5F00}\u{59CB}! ${config.waitingTimeOut}ms\u{540E}\u{786E}\u{8BA4}\u{5361}\u{6B7B},`,
          player.currentTime,
          n,
        );
        this._bufferBreakTimer = setTimeout(() => {
          if (
            !(
              this.isDestroy ||
              (config.disableInactiveWaitingCheck &&
                (!r || (player != null && player.paused)))
            )
          ) {
            if (this._bufferBreakFlag === 1) {
              let e = player.currentTime;
              let t = player.bufferedPoint;
              if (t.end > 0 && t.end - e >= 2) {
                return void this.retrySeekResum(e);
              }
            }
            this._bufferBreakFlag = 2;
            this.waitTimeoutDegrade();
          }
        }, config.waitingTimeOut);
      }
      this._lastCurrentTime = player.currentTime;
    }
  }
  waitTimeoutDegrade() {
    let e;
    let t;
    let i;
    let { player } = this;
    this.changeState("wait_timeout");
    this.log(
      ep.f.LOG,
      "确认卡死!!!,curtime,",
      player.currentTime,
      JSON.stringify(
        (e = player == null ? undefined : player.buffered2) == null
          ? undefined
          : e.bufferedList,
      ),
      ",duration,",
      (i = (t = this.mp4) == null ? undefined : t.meta) == null
        ? undefined
        : i.duration,
    );
    this.emit("waittimeout");
    let n = document.hidden || document.visibilityState === "hidden";
    let a = new iA(this.player, {
      errorType: to.RUNTIME,
      errorCode: n ? ts.waitTimeoutWithHidden : ts.waitTimeout,
      errorMessage: "wait_timeout",
      vid: this.playerConfig.vid,
    });
    this._errorHandler(a);
  }
  async retrySeekResum(e) {
    let { player, config } = this;
    this.changeState("retrySeek");
    this.log(ep.f.LOG, "卡死但有超过2s的buffer,seek下!!!");
    clearTimeout(this._seekResumTimer);
    this._resumePlay = false;
    if (config.waitingRetrySeekTimes > 0 && config.waitingRetryDuration) {
      let r = Math.min(config.waitingRetrySeekTimes, 3);
      this._currentSeekTimes = 0;
      this.off("playing", this._onResumePlaying);
      this.once("playing", this._onResumePlaying);
      let n = () => {
        if (!player || this._resumePlay || player.paused) {
          return void this.log(
            ep.f.LOG,
            `\u{5F53}\u{524D}\u{64AD}\u{653E}\u{5B9E}\u{4F8B}\u{5DF2}\u{6062}\u{590D}\u{6216}\u{5904}\u{4E8E}\u{6682}\u{505C}\u{72B6}\u{6001}\u{FF0C}\u{9000}\u{51FA}\u{91CD}\u{8BD5} player=${!!player},_resumePlay=${this._resumePlay},paused=${player == null ? undefined : player.paused}`,
          );
        }
        if (this._currentSeekTimes < r) {
          this._seekOnce(e);
          this._seekResumTimer = setTimeout(n, config.waitingRetryDuration);
          return;
        }
        this.waitTimeoutDegrade();
        this._seekResumTimer = null;
      };
      this._seekOnce(e);
      this._seekResumTimer = setTimeout(n, config.waitingRetryDuration);
      return;
    }
    player.currentTime = e + 1;
    this.once("playing", () => {
      this._resumePlay = true;
    });
    this._seekResumTimer = setTimeout(
      () => {
        if (!this._resumePlay) {
          this.waitTimeoutDegrade();
        }
        this._seekResumTimer = null;
      },
      Math.ceil(config.waitingTimeOut / 2),
    );
  }
  _isInBuffer(e, t = 0) {
    let i = false;
    let { buffered } = this.player.video;
    for (let n = 0; n < buffered.length; n++) {
      let a = buffered.start(n) - t;
      let s = buffered.end(n) + t;
      if (a <= e.startTime && e.endTime <= s) {
        i = true;
        break;
      }
    }
    return i;
  }
  _doubleCheckBuffer(e) {
    let { player } = this;
    if (
      !(e.startTime > player.currentTime) ||
      !player.video ||
      !player.video.buffered
    ) {
      return true;
    }
    let { buffered } = player.video;
    return buffered.length === 1 || this._isInBuffer(e, 0.2);
  }
  checkURLExpired(e, t) {
    let i;
    let r;
    let n;
    let a;
    let s = ((e) => {
      if (!e || tv(e) !== "String") {
        return 0;
      }
      let t = 0;
      try {
        let i = RegExp("(\\?|&)x-tos-expires=([^&]*)(&|$)");
        let r = e.match(i);
        if (r !== null) {
          t = parseInt(r[2], 10);
        } else {
          let i = e.split("/");
          if (i.length > 5 && i[4].length === 8) {
            t = parseInt(i[4], 16);
          }
        }
        if (t > 0) {
          let e = parseInt(new Date().getTime() / 1000, 10);
          if (t < e) {
            return 1;
          }
          return 2;
        }
        return 0;
      } catch {
        return 0;
      }
    })(this.config._mainURL);
    if (s === 1 && this.pcdn) {
      this.pcdn = null;
    }
    let o =
      ((i = e == null ? undefined : e.response) == null ? undefined : i.url) ||
      ((r = this.config.pcdnConfig) == null ? undefined : r.trackerUrl);
    if ((a = this.player) != null) {
      a.emit("source_error", {
        host: tR(o),
        src: o,
        errorCode:
          (n = e == null ? undefined : e.response) == null
            ? undefined
            : n.status,
        message: `${e == null ? undefined : e.message}-${s}${t}`,
      });
    }
  }
  pushTimerStep() {
    let e;
    if (((e = this.timerStepList) == null ? undefined : e.length) > 10) {
      this.timerStepList.shift();
    }
    if (this._lastTimeupdateTime2 > 0) {
      this.timerStepList.push(tT() - this._lastTimeupdateTime2);
    }
  }
  _onTimeUpdate() {
    this.pushTimerStep();
    this._lastTimeupdateTime2 = tT();
    let { mse, mp4, player, config } = this;
    if (!player || this.useVideoLoad || !mp4) {
      return;
    }
    this.checkBufferArriveEndTime();
    let n = player.getBufferedRange();
    if (tT() - this._lastCheckTime > 1000) {
      this._lastCheckTime = tT();
      this._loadStuckCheck();
      this._startUrlExpiredCheck();
      this._checkRemoveSourceBuffer(n, player.currentTime);
    }
    let { timeRange } = mp4;
    if (
      !(!timeRange || timeRange.length < 1) &&
      (mse || this.mseProxy) &&
      this.canDownload
    ) {
      let e = config.maxBufferLength;
      let t = false;
      if ((this.playFlag && player.paused) || !this.isActive) {
        t = true;
      }
      let {
        nextBufferLength,
        minBufferLength,
        adaptRange,
        noPreloadAddBufferLen,
      } = config;
      let h = adaptRange == null ? undefined : adaptRange.targetCacheControl;
      if (t) {
        e =
          player.isInstNext && nextBufferLength >= 0
            ? nextBufferLength
            : minBufferLength;
      } else if (h) {
        e = this.adaptRange.getAdaptCacheBuffer();
      }
      if (!this.preLoadData && h) {
        e += noPreloadAddBufferLen;
      }
      let d = player.currentTime + e;
      if (n[1] - d < 0) {
        this.isOpenPCDN(n[1]);
        if ((config == null ? undefined : config.loadRangeType) === e7) {
          this.sizeRangeCheckLoad(t, e, n[1] - player.currentTime);
        } else {
          this.gopRangeCheckLoad(t, d, e);
        }
      }
      if (this.playFlag && !this._hasTriggerBufferThreshold) {
        this._startBufferCheck();
      }
    }
  }
  sizeRangeCheckLoad(e, t, i) {
    let r;
    let n;
    let a;
    let { player, mp4 } = this;
    let { adaptTimeRange } = mp4;
    let adaptTimeRange_length = adaptTimeRange.length;
    if (
      !adaptTimeRange_length ||
      ((r = adaptTimeRange[adaptTimeRange_length - 1]) == null
        ? undefined
        : r.range[1]) < (mp4.size - 1 || player.curDefinition.size - 1) ||
      !adaptTimeRange[adaptTimeRange_length - 1].downloaded
    ) {
      let r = adaptTimeRange.findIndex((e) => !e.isLoading);
      if (
        !(adaptTimeRange != null && adaptTimeRange.length) ||
        r >= 0 ||
        adaptTimeRange[adaptTimeRange_length - 1].downloaded
      ) {
        let { adaptRangeRes, loadDuration } = this.calculateAdaptRange(e, t);
        let u =
          (n = this.adaptRange) == null
            ? undefined
            : n.getAdaptRangeSize(loadDuration);
        if (u > 0) {
          adaptRangeRes.loadSize = u;
        }
        adaptRangeRes.loadDuration = loadDuration;
        if (r < 0) {
          this._curLoadSegmentIdx = mp4.updateAdaptTimeRange(
            null,
            loadDuration,
            u,
          );
        } else {
          this._curLoadSegmentIdx = r;
        }
        let c = this._curLoadSegmentIdx;
        if (!adaptTimeRange[c].downloaded) {
          c = Math.max(c - 1, 0);
        }
        let f = adaptTimeRange[c];
        if (
          i > 0 &&
          (f == null ? undefined : f.endTime) - player.currentTime >= t
        ) {
          return;
        }
        let g = adaptTimeRange[this._curLoadSegmentIdx];
        if (
          this._curLoadSegmentIdx >= 0 &&
          this._isInBuffer(g) &&
          !this._isChangeDefinition &&
          this._curLoadSegmentIdx >= 0 &&
          g.endTime - g.startTime > 1
        ) {
          let e = adaptTimeRange[this._curLoadSegmentIdx];
          e.downloaded = true;
          e.isLoading = true;
          this.log(
            ep.f.LOG,
            `onTimeUpdate, ${this._curLoadSegmentIdx} download segment, has buffer`,
            g.startTime,
            g.endTime,
            player.currentTime,
          );
          mp4.seekTime = g.endTime;
          return;
        }
        adaptRangeRes.idx = this._curLoadSegmentIdx;
        if (
          !(
            this.adaptRangeRes.length &&
            ((a = this.adaptRangeRes[adaptRangeRes.length - 1]) == null
              ? undefined
              : a.idx) === this._curLoadSegmentIdx
          )
        ) {
          this.adaptRangeRes.push(adaptRangeRes);
          this.log(ep.f.LOG, "adaptRangeRes>>>>", adaptRangeRes);
        }
        this.log(
          ep.f.LOG,
          "[onTimeUpdate],load index==>>>, ",
          this._curLoadSegmentIdx,
          JSON.stringify(adaptTimeRange[this._curLoadSegmentIdx]),
        );
        this._loadData();
      }
    }
  }
  gopRangeCheckLoad(e, t, i) {
    let { timeRange, adaptTimeRange } = this.mp4;
    let { player } = this;
    timeRange.every((r, s) => {
      var o;
      var l;
      var h;
      var d;
      if (
        r.adaptTimeRangeIdx !== undefined &&
        r.adaptTimeRangeIdx >= 0 &&
        adaptTimeRange &&
        adaptTimeRange[r.adaptTimeRangeIdx].downloaded
      ) {
        return true;
      }
      let u = this.mp4.getAdaptIdxBySrcIdx(s, true);
      let c = u >= 0 ? adaptTimeRange[u] : null;
      let f = u >= 0 && this._isInBuffer(c);
      if (
        !this._isChangeDefinition &&
        u >= 0 &&
        c.endTime - c.startTime > 1 &&
        f
      ) {
        adaptTimeRange[u].downloaded = true;
        adaptTimeRange[u].isLoading = true;
        this.log(
          ep.f.LOG,
          `onTimeUpdate, ${u} download segment, has buffer`,
          c.startTime,
          c.endTime,
          player.currentTime,
        );
        return true;
      }
      if (r.startTime - player.currentTime < t) {
        if (
          u < adaptTimeRange.length &&
          (o = adaptTimeRange[u]) != null &&
          o.isLoading
        ) {
          return false;
        }
        let { adaptRangeRes, loadDuration } = this.calculateAdaptRange(e, i);
        this._curLoadSegmentIdx = this.mp4.updateAdaptTimeRange(
          s,
          loadDuration,
        );
        adaptRangeRes.idx = this._curLoadSegmentIdx;
        if (
          (h = (l = this.config) == null ? undefined : l.adaptRange) != null &&
          h.rangeControl
        ) {
          adaptRangeRes.loadDuration =
            this.mp4.adaptTimeRange[this._curLoadSegmentIdx].duration;
        }
        if (
          !(
            this.adaptRangeRes.length &&
            ((d = this.adaptRangeRes[this.adaptRangeRes.length - 1]) == null
              ? undefined
              : d.idx) === this._curLoadSegmentIdx
          )
        ) {
          this.adaptRangeRes.push(adaptRangeRes);
          this.log(ep.f.LOG, "adaptRangeRes>>>>", adaptRangeRes);
        }
        let c = adaptTimeRange[this._curLoadSegmentIdx];
        if (this._isInBuffer(c)) {
          c.downloaded = true;
          c.isLoading = true;
          this.log(
            ep.f.LOG,
            `onTimeUpdate_, ${this._curLoadSegmentIdx} download segment, has buffer`,
            c.startTime,
            c.endTime,
            player.currentTime,
          );
          return true;
        }
        this.log(
          ep.f.LOG,
          "[onTimeUpdate],load index==>>>, ",
          this._curLoadSegmentIdx,
          JSON.stringify(this.mp4.adaptTimeRange[this._curLoadSegmentIdx]),
        );
        this._loadData();
      }
    });
  }
  checkBufferArriveEndTime() {
    let { player, mse, mp4 } = this;
    if (!player || !mse || !mp4) {
      return;
    }
    let r = player.getBufferedRange();
    let n = mp4.getMediaEndTime();
    if (n > 0 && r[1] >= n && !mse.isEnded) {
      this.log(
        ep.f.LOG,
        "checkBufferArriveEndTime endOfStream, enfTime",
        n,
        ", bufferRange,",
        JSON.stringify(r),
        ",currentTime,",
        player.currentTime,
      );
      mse.endOfStream();
    }
  }
  calculateAdaptRange(forceSetMin, t) {
    let i;
    let r;
    let loadDuration;
    let adaptRangeRes = {
      forceSetMin,
    };
    if ((i = this.pcdn) != null && i.isOpenAdaptPCDN) {
      adaptRangeRes.PCDNInBuffer = this.pcdn.curPCDNInBuffer;
      adaptRangeRes.PCDNOutBuffer = this.pcdn.curPCDNOutBuffer;
    }
    let s = (r = this.config) == null ? undefined : r.adaptRange;
    if (!this.playFlag || forceSetMin) {
      loadDuration = this.config.minBufferLength;
    } else if (s != null && s.rangeControl) {
      adaptRangeRes.loadTarDuration = loadDuration =
        this.adaptRange.getAdaptLoadDuration();
    } else {
      loadDuration = this.config.rangeMaxDuration;
    }
    if (s != null && s.targetCacheControl) {
      adaptRangeRes.cachedBufferDur = t;
    }
    if (!this.playFlag && s != null && s.rangeControl) {
      adaptRangeRes.loadTarDuration = loadDuration;
    }
    return {
      adaptRangeRes,
      loadDuration,
    };
  }
  checkReUseMSE(e, t) {
    let i;
    let { mse } = this;
    if (mse) {
      if (e || this.config.reUseMSE) {
        mse.clearOpQueues(em.Ub.VIDEO, t);
        mse.abort(em.Ub.VIDEO);
        let e = (i = this.player) == null ? undefined : i.buffered;
        if ((e == null ? undefined : e.length) > 0) {
          let t = e.end(e.length - 1);
          this.log(ep.f.LOG, "reUseMSE remove buffer, 0-", t);
          this._canUpdateDuration = false;
          this.removeBuffer(em.Ub.VIDEO, 0, t, () => {
            var e;
            var t;
            this._canUpdateDuration = true;
            if (
              (t = (e = this.mp4) == null ? undefined : e.meta) != null &&
              t.duration
            ) {
              this.updateMSEDuration();
            }
          });
        }
      } else {
        mse.unbindMedia();
        this.mse = null;
        this._unloadVideo();
      }
    }
  }
  updateMSEDuration() {
    let e;
    let { mse, mp4 } = this;
    let r =
      (e = mp4 == null ? undefined : mp4.meta) == null ? undefined : e.duration;
    if (this._canUpdateDuration && r && r !== mse.duration) {
      this.log(
        ep.f.LOG,
        "updateMSEDuration ",
        r,
        ",oldDuration,",
        mse.duration,
      );
      mse.updateDuration(r);
      this._canUpdateDuration = null;
    }
  }
  _reset() {
    this._definitionChangePointInfo = null;
    this._isReceiveEndedEvent = false;
    this.adaptRangeRes = [];
    this.states = [];
    this.hitpreload = false;
    this._sTime = tT();
    this._isChangeDefinition = false;
    this._removeBuffeEndTime = 0;
    this._usePaused = false;
    this.useVideoLoad = false;
    this._isMseInit = false;
    this.endofstream = false;
    this._curLoadSegmentIdx = 0;
    this.emitExpireTimestamp = null;
    this.preLoadData = null;
    this.forPreloadTimeCache = null;
    this.playFlag = false;
    this.waitLevelStartTime = -1;
    this._waitAdjustTimeCnt = 0;
    if (this._initPromise && this._initPromise.state === "pending") {
      this._initPromise.reject(iW);
    }
    clearTimeout(this.checkResumePlayTimer);
    this.checkResumePlayTimer = null;
    this._stopProgress();
    if (this.mp4) {
      this.mp4.destroy();
      this.mp4 = null;
    }
    if (this.mseProxy) {
      tw(this.player, "lowdecode", this._onDegrade);
      tw(this.player, this._onError);
    }
    if (!this.config.frameFreeze) {
      this._unloadVideo();
    }
    this._cancelPendingPromises();
    if (this._abrService) {
      this._abrService.destroy();
      this._abrService = null;
    }
    let firstFrameTime = this.firstFrameTime;
    Object.keys(firstFrameTime).forEach((t) => {
      if (t === "apcnt" || t === "aplen") {
        firstFrameTime[t] = 0;
      } else if (t === "newplayer") {
        firstFrameTime[t] = tT();
      } else {
        firstFrameTime[t] = -1;
      }
    });
    clearTimeout(this._waitInBufferTimer);
    this._waitInBufferTimer = null;
    this.canDownload = true;
    this.loadstart = -1;
    this._loadStartEventTime = -1;
    this.startLoadData = -1;
  }
  removeErrorUrls(e, t, i) {
    if (e.errorCode === ts[403]) {
      this._emitExpireEvent(e);
    }
    return i;
  }
  checkIsDegraded(e) {
    let { notDegradeErrorList } = this.config;
    return !(
      (notDegradeErrorList == null ? undefined : notDegradeErrorList.length) >
        0 &&
      ((e.errorCode === ts.timeout &&
        notDegradeErrorList.indexOf("timeout") >= 0) ||
        (e.errorCode === ts[403] &&
          (notDegradeErrorList.indexOf(403) >= 0 ||
            notDegradeErrorList.indexOf("403") >= 0)) ||
        (e.errorCode === ts[404] &&
          (notDegradeErrorList.indexOf(404) >= 0 ||
            notDegradeErrorList.indexOf("404") >= 0)))
    );
  }
  _startDegradedPlayback(e, t) {
    this.canDownload = false;
    let { player, playerConfig, config } = this;
    this.endofstream = false;
    this._currentTime = player.currentTime || 0;
    this.player.pause();
    this._reset();
    this._replay = null;
    let { H264DefinitionList } = playerConfig;
    if (this.codecType === tr && this.softDecode) {
      this.log(
        ep.f.LOG,
        "h265 softDecode err,degrade use 264 play",
        playerConfig.vid,
      );
      this._onDegrade(e);
    } else if (
      this.codecType === ti ||
      config.supportHevc ||
      config.supportVvcc ||
      (H264DefinitionList == null ? undefined : H264DefinitionList.length) > 0
    ) {
      let { drm, kid, drmKeyToken, keyValue, secretKey } = config;
      if (drm || kid || drmKeyToken || keyValue || secretKey) {
        if (drm) {
          Object.keys(drm).map((t) => {
            if (drm) {
              e[t] = drm[t];
            }
          });
        }
        this.log(
          ep.f.ERROR,
          "final error !!!!, ",
          playerConfig.vid,
          e == null ? undefined : e.errorCode,
          e == null ? undefined : e.errorMessage,
        );
        this.emit("error", e);
      } else {
        this.log(
          ep.f.LOG,
          this.codecType,
          "MSE degrade video,",
          playerConfig.vid,
          player.currentTime,
        );
        this.emit(iX, {
          errc: e == null ? undefined : e.errorCode,
          err_msg:
            (e == null ? undefined : e.errorMessage) ||
            (e == null ? undefined : e.message),
          codec_type: this.codecType,
          media_type: playerConfig.mediaType,
        });
        this.useVideoLoad = true;
        this.destroyMSE();
        let n = () => {
          if (this._currentTime) {
            player.currentTime = this._currentTime;
          }
          this.log(
            ep.f.LOG,
            "DegradedPlayback update currentTime",
            playerConfig.vid,
            this.codecType,
            this._currentTime,
          );
          if (t) {
            this.player.pause();
          } else {
            this.player.play();
          }
          this._removeMetaDataEvent();
        };
        this._addMetaDataEvent(n);
        let s = playerConfig.url;
        if (
          (H264DefinitionList == null ? undefined : H264DefinitionList.length) >
          0
        ) {
          let e = H264DefinitionList.length;
          let t = this.player.curDefinition.definition;
          let i = t && H264DefinitionList.find((e) => e.definition === t);
          if (!i) {
            playerConfig.H264DefinitionList.sort(
              (e, t) => e.bitrate - t.bitrate,
            );
            i = playerConfig.H264DefinitionList[Math.floor(e / 2)];
          }
          if (i) {
            s = i.url;
            this.playerConfig.codecType = ti;
            this.codecType = ti;
          }
        }
        this._setPlayerSrc(s);
      }
    } else {
      this.log(ep.f.ERROR, "degrade player failed");
      this.emit("error", e);
    }
  }
  getAdaptTimeRangeIdx(e) {
    let t;
    let i;
    let { config, adaptRange } = this;
    let config_segmentMinDuration = config.segmentMinDuration;
    if (
      adaptRange &&
      (t = config == null ? undefined : config.adaptRange) != null &&
      t.rangeControl
    ) {
      config_segmentMinDuration = adaptRange.getAdaptLoadDuration();
    }
    if ((i = this.mp4) == null) {
      return undefined;
    }
    return i.updateAdaptTimeRange(e, config_segmentMinDuration);
  }
  _startProgress() {
    this.initTimer();
    this._requestTimer.start();
    this._hasStartProgress = true;
  }
  _unloadVideo() {
    this.log(ep.f.LOG, "unloadVideo");
    let { player } = this;
    try {
      if (
        player.video &&
        player.video.src &&
        !/^blob/.test(player.currentSrc) &&
        !/^blob/.test(player.video.src)
      ) {
        this.log(ep.f.LOG, "unloadVideo src");
        player.video.removeAttribute("src");
        player.video.load();
      }
    } catch (error) {
      this.log(
        ep.f.ERROR,
        "unloadVideo error",
        error == null ? undefined : error.message,
      );
    }
  }
  _addPendingPromise(e) {
    this._pendingPromises.push(e);
  }
  _removePendingPromise(e) {
    this.log(ep.f.LOG, "removePendingPromise", e == null ? undefined : e.id);
    let t = this._pendingPromises.indexOf(e);
    if (t > -1) {
      this._pendingPromises.splice(t, 1);
    }
  }
  _cancelPendingPromises() {
    if (this._pendingPromises.length > 0) {
      this._pendingPromises.forEach((e) => {
        e.reject(iW);
      });
    }
    this._pendingPromises = [];
  }
  _onMediaExpired() {
    this.log(ep.f.LOG, "MediaExpired stopProgress");
    this._stopProgress();
    this.emit(e1.MEDIA_EXPIRED);
  }
  _isEnded() {
    let e;
    let t;
    let { player, mp4 } = this;
    let player_bufferedPoint = player.bufferedPoint;
    let a = player_bufferedPoint ? player_bufferedPoint.end : 0;
    let player_currentTime = player.currentTime;
    if (
      player_currentTime > 1 &&
      a > player_currentTime &&
      (a - player_currentTime >= 2 ||
        player.duration - player_currentTime < 1) &&
      player.video.readyState === 2
    ) {
      if (tT() - this._lastCheckLagTime >= 3000) {
        this.log(
          ep.f.LOG,
          "[has buffer but waiting,seek 0.2 adjust],curTime,",
          player_currentTime,
          ", bufferend,",
          a,
          ", duration,",
          (e = mp4 == null ? undefined : mp4.meta) == null
            ? undefined
            : e.duration,
        );
        player.currentTime = player_currentTime + 0.2;
        this._lastCheckLagTime = tT();
      }
    } else {
      this._lastCheckLagTime = tT();
    }
    let { seeking } = player.video;
    if (
      !this.endofstream &&
      this.bufferEndTime > 0 &&
      this.mse &&
      !seeking &&
      this.bufferEndTime - player_currentTime < 0.5
    ) {
      this.log(
        ep.f.LOG,
        "[isEnded endOfStream],curTime,",
        player.currentTime,
        ", bufferend,",
        a,
        ", duration,",
        (t = mp4 == null ? undefined : mp4.meta) == null
          ? undefined
          : t.duration,
      );
      this.endofstream = true;
      this.mse.endOfStream().then(() => {});
    }
    return (
      !!mp4 &&
      !!mp4.meta &&
      !seeking &&
      mp4.meta.duration - player_currentTime < 0.5 &&
      (this._stopProgress(),
      this.log(
        ep.f.LOG,
        "[isEnded],stopProgress and endOfStream,curTime, ",
        player.currentTime,
        ", bufferend,",
        a,
        ", duration,",
        mp4.meta.duration,
      ),
      this.mse && this.mse.endOfStream().then(() => {}),
      true)
    );
  }
  emitVideoEvent(e) {
    if (this._checkEndedTimer) {
      return;
    }
    let { player, mp4 } = this;
    this._checkEndedTimer = setTimeout(() => {
      this._checkEndedTimer = null;
      if (
        !this._isReceiveEndedEvent &&
        mp4.meta.duration - player.currentTime < 0.5
      ) {
        this.log(
          ep.f.LOG,
          "[ do emit video ended event],curTime,",
          player.currentTime,
          ", bufferend,",
          e,
          ", duration,",
          mp4.meta.duration,
        );
        this.emit("ended");
      }
    }, 2000);
  }
  _clearMediaKeys() {
    let { player } = this;
    if (player.video && typeof player.video.setMediaKeys === "function") {
      player.video.setMediaKeys(null).catch(() => {});
    }
  }
  _checkRemoveSourceBuffer(e, t, i, r) {
    let { mse, mp4, player } = this;
    if (
      !(!mse || !mp4 || !player) &&
      (i &&
        (clearTimeout(this._removeBufferTimer),
        (this._removeBufferTimer = null)),
      e || (e = player.getBufferedRange(player.buffered2)),
      t || (t = player.currentTime),
      !(
        (!i &&
          tT() - this._checkRemoveBufferLastTime <=
            this.config.removeBufferLen) ||
        this.endofstream
      ) &&
        ((this._checkRemoveBufferLastTime = tT()),
        e &&
          e[0] >= 0 &&
          (t - e[0] > this.config.removeBufferLen || mse.isFull())))
    ) {
      let i = r ? e[1] : t - 15 * !mse.isFull();
      let s = mp4.getFragmentIdx(i);
      if (s > 0 && (r || mp4.timeRange[s].startTime < t)) {
        let i = Math.floor(Math.min(mp4.timeRange[s].startTime, e[1]));
        let r = Math.max(mp4.timeRange[0].endTime + 1, e[0]);
        if (r < i) {
          this.log(
            ep.f.LOG,
            "[checkremoveSourceBuffer], remove range==>>>",
            r,
            i,
            t,
          );
          this.removeBuffer(em.Ub.VIDEO, r, i);
        } else if (mse.isFull() && !this._removeBufferTimer) {
          this._removeBufferTimer = setTimeout(() => {
            this._checkRemoveSourceBuffer(null, null, true);
          }, 10000);
        }
      }
    }
  }
  onMediaUpdate(e) {
    let { vid, kid, url } = e;
    let { player, config, playerConfig } = this;
    if (vid === playerConfig.vid && kid === config.kid && url) {
      this.playerConfig.url = url;
      let e = this._handlerUrl(url);
      config._mainURL = e.main;
      config._backupURL = e.backup;
      let t = config._mainURL;
      player.rawSrc = url;
      if (this.useVideoLoad) {
        player.src = url;
      } else if (this.mp4) {
        this.mp4.updateUrl(t);
      }
      return true;
    }
    return false;
  }
  enableAutoBuffer(e) {
    if (e) {
      if (!this._allInitPromise) {
        return void this.log(ep.f.LOG, "player destroyed!!");
      }
      this._allInitPromise.then(() => {
        this.log(ep.f.LOG, "enableAutoBuffer true");
        this._startProgress();
      });
    } else {
      this._stopProgress();
      this.log(ep.f.LOG, "enableAutoBuffer false");
    }
  }
  get bitRateAdapter() {
    if (!this.player || !this.player.plugins) {
      return null;
    }
    if (this.config.needAutoBitrate) {
      let { bitrateselector } = this.player.plugins;
      return bitrateselector;
    }
    return null;
  }
  getDefinitonFromAdapter(e, t) {
    if (!this.bitRateAdapter) {
      return null;
    }
    let bitRateAdapter = this.bitRateAdapter;
    if (bitRateAdapter.getSuitableBitrate) {
      return bitRateAdapter.getSuitableBitrate(e, t);
    }
    if (bitRateAdapter.bitRateAdapter) {
      return bitRateAdapter.bitRateAdapter.select(e);
    }
    return null;
  }
  addPreloader(e = {}) {
    e.playerId = this.playerId;
    let { preloader } = this.player;
    if (preloader) {
      preloader.addPreloader(e, this.playerConfig.vid, this.playerId);
    } else {
      this.log(ep.f.LOG, "preloader has destroyed");
    }
  }
  addPreloaderList(e = []) {
    let { preloader } = this.player;
    if (preloader) {
      preloader.addPreloaderList(e, this.playerConfig.vid, this.playerId);
    } else {
      this.log(ep.f.LOG, "preloader has destroyed");
    }
  }
  log(e, t, ...i) {
    let { vid } = this.playerConfig || {};
    let n = vid ? `[Index]${vid} ${t}` : `[Index] ${t}`;
    t_(this.logger, e, n, ...i);
  }
  _emitInitFail(e) {
    this.log(ep.f.ERROR, "initFail, reason:", e);
    this.emit(e1.INIT_FAIL, e);
  }
  set useVideoLoad(e) {
    this._useVideoLoad = e;
  }
  get useVideoLoad() {
    return this._useVideoLoad;
  }
  get ready() {
    return this._allInitPromise;
  }
  get speed() {
    return parseInt(t4.speed, 10);
  }
  get version() {
    return "0.2.18";
  }
  get realTimeSpeed() {
    return i3;
  }
  get opQueueLen() {
    let e = this.mse && this.mse._queue ? this.mse._queue[em.Ub.VIDEO] : [];
    if (e) {
      return e.length;
    }
    return 0;
  }
  get loadSegmentTimeRange() {
    if (!this.mp4) {
      return [0, 0, 0, 0];
    }
    let adaptTimeRange = this.mp4.adaptTimeRange;
    if (
      adaptTimeRange &&
      adaptTimeRange.length > 0 &&
      this._curLoadSegmentIdx >= 0 &&
      this._curLoadSegmentIdx < adaptTimeRange.length
    ) {
      let t = adaptTimeRange[this._curLoadSegmentIdx];
      if (t.isLoading) {
        let e = t.range;
        return [Number(t.startTime), Number(t.endTime), ...e];
      }
    }
    return [0, 0, 0, 0];
  }
  get preloadState() {
    return this.player.preloader && this.player.preloader.loadingCount;
  }
  get moovSize() {
    return 0;
  }
  get isDestroy() {
    return !this.player;
  }
  cancelPreloadTask() {
    if (this.preloader) {
      this.preloader.cancelLoading(this.player.playerId);
    }
  }
  removeAllPreloadData() {
    if (this.preloader) {
      this.preloader.removeAll();
    }
  }
  removeAllPreloadTask() {
    if (this.preloader) {
      this.preloader.removeAllPreloadTask();
    }
  }
  get domain() {
    return tR(this.loadURL);
  }
  get loadURL() {
    let { player } = this;
    let player_currentSrc = player.currentSrc;
    if (/^blob/.test(player.currentSrc)) {
      player_currentSrc = this.mp4.currentLoadUseUrl();
    }
    return player_currentSrc;
  }
  get abrInstance() {
    if (this._abrService) {
      return this._abrService.abrInstance;
    }
    return null;
  }
  _handleUrlExpire() {
    let { config, player } = this;
    let { paused } = player;
    if (
      new Date().getTime() / 1000 >= this.urlExpireTimestamp &&
      this.urlExpireTimestamp > 0 &&
      !paused &&
      config.getServerTime
    ) {
      player.serverTimeDiffPromise =
        player.serverTimeDiffPromise || config.getServerTime().catch(() => 0);
      player.serverTimeDiffPromise.then((e) => {
        if (e) {
          player.serverTimeDiff = new Date().getTime() / 1000 - e;
        }
        if (
          new Date().getTime() / 1000 >=
          this.urlExpireTimestamp + player.serverTimeDiff
        ) {
          this.urlExpireTimestamp = new Date().getTime() / 1000 + 86400;
          let e = new tl("network", ts[403]);
          this._emitExpireEvent(e);
        }
      });
    }
  }
  _emitExpireEvent(e) {
    let { player } = this;
    let i = new Date().getTime() / 1000;
    if (this.emitExpireTimestamp) {
      return (
        i - this.emitExpireTimestamp > 300 &&
        ((this.emitExpireTimestamp = i), player.emit("MEDIA_EXPIRED", e), true)
      );
    }
    this.emitExpireTimestamp = i;
    player.emit("MEDIA_EXPIRED", e);
    return true;
  }
  reportBugPostPlayerLog() {
    this.emit(iY);
  }
}
export { i6 as default };
i6.isSupported = function () {
  return t8() && t6() && !t3();
};
i6.isEMESupported = t5;
i6.isSupportedWithXgmse = function () {
  return t6() && !t3();
};
i6.isMediaSourceSupported = t8;
i6.isWebAssemblySupported = t6;
i6.CUSTOM_EVENTS = e1;
export class EncryptSecret {
  static init() {
    eX.Y.Crypto = ic.A;
  }
  static createSecretKey(e, t) {
    let i = new iu.XGSecretKey(e);
    i.on(iu.EVENT_EME.ERROR, t);
    return i;
  }
  static destroySecretKey(e, t) {
    e.off(iu.EVENT_EME.ERROR, t);
    e.destroy();
  }
  static updateUnionInfo(...e) {
    if (iu.XGSecretKey) {
      iu.XGSecretKey.updateUnionInfo(...e);
    }
  }
  static checkEMEValid() {
    return iu.checkEMEValid();
  }
  static checkMSEValid() {
    return iu.checkMSEValid();
  }
}
