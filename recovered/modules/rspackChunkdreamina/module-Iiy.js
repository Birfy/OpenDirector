import { V as V_1 } from "./module-Pst.js";
import {
  B as B_1,
  P4,
  Rx,
  Xx,
  hz,
  j6,
  n8,
  qW,
  uk,
  vG,
  xs,
} from "./module-Yx.js";
import D from "NRL";
import { $f } from "./module-hxD.js";
import { t as t_1 } from "./module-vBD.js";
function n(e, t) {
  if (t == null || t > e.length) {
    t = e.length;
  }
  for (var r = 0, n = Array(t); r < t; r++) {
    n[r] = e[r];
  }
  return n;
}
function i(e, t, r, n, i, a, s) {
  try {
    var o = e[a](s);
    var u = o.value;
  } catch (error) {
    return void r(error);
  }
  if (o.done) {
    t(u);
  } else {
    Promise.resolve(u).then(n, i);
  }
}
function a(e) {
  return function () {
    const t = this;
    const r = arguments;
    return new Promise((resolve, reject) => {
      const s = e.apply(t, r);
      function o(e) {
        i(s, resolve, reject, o, u, "next", e);
      }
      function u(e) {
        i(s, resolve, reject, o, u, "throw", e);
      }
      o(undefined);
    });
  };
}
function s(e, t) {
  if (!(e instanceof t)) {
    throw TypeError("Cannot call a class as a function");
  }
}
function o(e, t) {
  for (let r = 0; r < t.length; r++) {
    const n = t[r];
    n.enumerable = n.enumerable || false;
    n.configurable = true;
    if ("value" in n) {
      n.writable = true;
    }
    Object.defineProperty(e, g(n.key), n);
  }
}
function u(e, t, r) {
  if (t) {
    o(e.prototype, t);
  }
  if (r) {
    o(e, r);
  }
  Object.defineProperty(e, "prototype", {
    writable: false,
  });
  return e;
}
function c(e) {
  return (c = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}
function f() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch (e) {}
  return (f = function () {
    return !!e;
  })();
}
function p(e) {
  throw TypeError('"' + e + '" is read-only');
}
function v() {
  v = function () {
    return t;
  };
  let e;
  var t = {};
  const Object_prototype = Object.prototype;
  const r_hasOwnProperty = Object_prototype.hasOwnProperty;
  const i = typeof Symbol === "function" ? Symbol : {};
  const a = i.iterator || "@@iterator";
  const s = i.asyncIterator || "@@asyncIterator";
  const o = i.toStringTag || "@@toStringTag";
  function u(e, t, value, n) {
    return Object.defineProperty(e, t, {
      value,
      enumerable: !n,
      configurable: !n,
      writable: !n,
    });
  }
  try {
    u({}, "");
  } catch (e) {
    u = function (e, t, r) {
      return (e[t] = r);
    };
  }
  function l(t, r, n, i) {
    let a;
    let s;
    const o = Object.create((r && r.prototype instanceof d ? r : d).prototype);
    u(
      o,
      "_invoke",
      ((a = new constructor(i || [])),
      (s = 1),
      function (r, i) {
        if (s === 3) {
          throw Error("Generator is already running");
        }
        if (s === 4) {
          if (r === "throw") {
            throw i;
          }
          return {
            value: e,
            done: true,
          };
        }
        a.method = r;
        for (a.arg = i; ;) {
          const o = a.delegate;
          if (o) {
            const u = (function t(r, n) {
              const n_method = n.method;
              const a = r.i[n_method];
              if (a === e) {
                n.delegate = null;
                if (
                  !(
                    n_method === "throw" &&
                    r.i.return &&
                    ((n.method = "return"),
                    (n.arg = e),
                    t(r, n),
                    n.method === "throw")
                  )
                ) {
                  if (n_method !== "return") {
                    n.method = "throw";
                    n.arg = TypeError(
                      "The iterator does not provide a '" +
                        n_method +
                        "' method",
                    );
                  }
                }
                return f;
              }
              const s = c(a, r.i, n.arg);
              if (s.type === "throw") {
                n.method = "throw";
                n.arg = s.arg;
                n.delegate = null;
                return f;
              }
              const s_arg = s.arg;
              if (s_arg) {
                if (s_arg.done) {
                  n[r.r] = s_arg.value;
                  n.next = r.n;
                  if (n.method !== "return") {
                    n.method = "next";
                    n.arg = e;
                  }
                  n.delegate = null;
                  return f;
                }
                return s_arg;
              }
              n.method = "throw";
              n.arg = TypeError("iterator result is not an object");
              n.delegate = null;
              return f;
            })(o, a);
            if (u) {
              if (u === f) {
                continue;
              }
              return u;
            }
          }
          if (a.method === "next") {
            a.sent = a._sent = a.arg;
          } else if (a.method === "throw") {
            if (s === 1) {
              s = 4;
              throw a.arg;
            }
            a.dispatchException(a.arg);
          } else {
            if (a.method === "return") {
              a.abrupt("return", a.arg);
            }
          }
          s = 3;
          const l = c(t, n, a);
          if (l.type === "normal") {
            s = a.done ? 4 : 2;
            if (l.arg === f) {
              continue;
            }
            return {
              value: l.arg,
              done: a.done,
            };
          }
          if (l.type === "throw") {
            s = 4;
            a.method = "throw";
            a.arg = l.arg;
          }
        }
      }),
      true,
    );
    return o;
  }
  function c(e, t, r) {
    try {
      return {
        type: "normal",
        arg: e.call(t, r),
      };
    } catch (arg) {
      return {
        type: "throw",
        arg,
      };
    }
  }
  t.wrap = l;
  var f = {};
  function d() {}
  function h() {}
  function p() {}
  let m = {};
  u(m, a, function () {
    return this;
  });
  const Object_getPrototypeOf = Object.getPrototypeOf;
  const g =
    Object_getPrototypeOf &&
    Object_getPrototypeOf(Object_getPrototypeOf(E([])));
  if (g && g !== Object_prototype && r_hasOwnProperty.call(g, a)) {
    m = g;
  }
  const _ = (p.prototype = d.prototype = Object.create(m));
  function b(e) {
    ["next", "throw", "return"].forEach((t) => {
      u(e, t, function (e) {
        return this._invoke(t, e);
      });
    });
  }
  function k(e, t) {
    let r;
    u(
      this,
      "_invoke",
      function (i, a) {
        function s() {
          return new t(function (r, s) {
            (function r(i, a, s, o) {
              const u = c(e[i], e, a);
              if (u.type !== "throw") {
                const l = u.arg;
                const f = l.value;
                if (
                  f &&
                  typeof f === "object" &&
                  r_hasOwnProperty.call(f, "__await")
                ) {
                  return t.resolve(f.__await).then(
                    (e) => {
                      r("next", e, s, o);
                    },
                    (e) => {
                      r("throw", e, s, o);
                    },
                  );
                }
                return t.resolve(f).then(
                  (e) => {
                    l.value = e;
                    s(l);
                  },
                  (e) => r("throw", e, s, o),
                );
              }
              o(u.arg);
            })(i, a, r, s);
          });
        }
        return (r = r ? r.then(s, s) : s());
      },
      true,
    );
  }
  function x(e) {
    this.tryEntries.push(e);
  }
  function S(t) {
    const r = t[4] || {};
    r.type = "normal";
    r.arg = e;
    t[4] = r;
  }
  function constructor(e) {
    this.tryEntries = [[-1]];
    e.forEach(x, this);
    this.reset(true);
  }
  function E(t) {
    if (t != null) {
      const r = t[a];
      if (r) {
        return r.call(t);
      }
      if (typeof t.next === "function") {
        return t;
      }
      if (!isNaN(t.length)) {
        let i = -1;
        const s = function r() {
          while (++i < t.length) {
            if (r_hasOwnProperty.call(t, i)) {
              r.value = t[i];
              r.done = false;
              return r;
            }
          }
          r.value = e;
          r.done = true;
          return r;
        };
        return (s.next = s);
      }
    }
    throw TypeError(`${typeof t} is not iterable`);
  }
  h.prototype = p;
  u(_, "constructor", p);
  u(p, "constructor", h);
  h.displayName = u(p, o, "GeneratorFunction");
  t.isGeneratorFunction = function (e) {
    const t = typeof e === "function" && e.constructor;
    return (
      !!t && (t === h || (t.displayName || t.name) === "GeneratorFunction")
    );
  };
  t.mark = function (e) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(e, p);
    } else {
      e.__proto__ = p;
      u(e, o, "GeneratorFunction");
    }
    e.prototype = Object.create(_);
    return e;
  };
  t.awrap = function (__await) {
    return {
      __await,
    };
  };
  b(k.prototype);
  u(k.prototype, s, function () {
    return this;
  });
  t.AsyncIterator = k;
  t.async = function (e, r, n, i, a = Promise) {
    const s = new k(l(e, r, n, i), a);
    if (t.isGeneratorFunction(r)) {
      return s;
    }
    return s.next().then((e) => {
      if (e.done) {
        return e.value;
      }
      return s.next();
    });
  };
  b(_);
  u(_, o, "Generator");
  u(_, a, function () {
    return this;
  });
  u(_, "toString", function () {
    return "[object Generator]";
  });
  t.keys = function (e) {
    const t = Object(e);
    const r = [];
    for (var n in t) {
      r.unshift(n);
    }
    return function e() {
      while (r.length) {
        if ((n = r.pop()) in t) {
          e.value = n;
          e.done = false;
          return e;
        }
      }
      e.done = true;
      return e;
    };
  };
  t.values = E;
  constructor.prototype = {
    constructor,
    reset: function (t) {
      this.prev = this.next = 0;
      this.sent = this._sent = e;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = e;
      this.tryEntries.forEach(S);
      if (!t) {
        for (const r in this) {
          if (
            r.charAt(0) === "t" &&
            r_hasOwnProperty.call(this, r) &&
            !isNaN(+r.slice(1))
          ) {
            this[r] = e;
          }
        }
      }
    },
    stop: function () {
      this.done = true;
      const e = this.tryEntries[0][4];
      if (e.type === "throw") {
        throw e.arg;
      }
      return this.rval;
    },
    dispatchException: function (t) {
      if (this.done) {
        throw t;
      }
      const r = this;
      function n(e) {
        s.type = "throw";
        s.arg = t;
        r.next = e;
      }
      for (let i = r.tryEntries.length - 1; i >= 0; --i) {
        const a = this.tryEntries[i];
        var s = a[4];
        const o = this.prev;
        const u = a[1];
        const l = a[2];
        if (a[0] === -1) {
          n("end");
          return false;
        }
        if (!u && !l) {
          throw Error("try statement without catch or finally");
        }
        if (a[0] != null && a[0] <= o) {
          if (o < u) {
            this.method = "next";
            this.arg = e;
            n(u);
            return true;
          }
          if (o < l) {
            n(l);
            return false;
          }
        }
      }
    },
    abrupt: function (e, t) {
      for (let r = this.tryEntries.length - 1; r >= 0; --r) {
        const n = this.tryEntries[r];
        if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) {
          var i = n;
          break;
        }
      }
      if (i && (e === "break" || e === "continue") && i[0] <= t && t <= i[2]) {
        i = null;
      }
      const a = i ? i[4] : {};
      a.type = e;
      a.arg = t;
      if (i) {
        this.method = "next";
        this.next = i[2];
        return f;
      }
      return this.complete(a);
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
      return f;
    },
    finish: function (e) {
      for (let t = this.tryEntries.length - 1; t >= 0; --t) {
        const r = this.tryEntries[t];
        if (r[2] === e) {
          this.complete(r[4], r[3]);
          S(r);
          return f;
        }
      }
    },
    catch: function (e) {
      for (let t = this.tryEntries.length - 1; t >= 0; --t) {
        const r = this.tryEntries[t];
        if (r[0] === e) {
          const n = r[4];
          if (n.type === "throw") {
            var i = n.arg;
            S(r);
          }
          return i;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function (t, r, n) {
      this.delegate = {
        i: E(t),
        r,
        n,
      };
      if (this.method === "next") {
        this.arg = e;
      }
      return f;
    },
  };
  return t;
}
function m(e, t) {
  return (m = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function (e, t) {
        e.__proto__ = t;
        return e;
      })(e, t);
}
function g(key) {
  const t = ((e, t) => {
    if (typeof e !== "object" || !e) {
      return e;
    }
    const r = e[Symbol.toPrimitive];
    if (r !== undefined) {
      const n = r.call(e, t || "default");
      if (typeof n !== "object") {
        return n;
      }
      throw TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(e);
  })(key, "string");
  if (typeof t === "symbol") {
    return t;
  }
  return t + "";
}
function _(e, t) {
  if (e) {
    if (typeof e === "string") {
      return n(e, t);
    }
    let r = {}.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor) {
      r = e.constructor.name;
    }
    if (r === "Map" || r === "Set") {
      return Array.from(e);
    }
    if (
      r === "Arguments" ||
      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
    ) {
      return n(e, t);
    }
    return undefined;
  }
}
let b;
const loaderType = "fetch";
const w = "arraybuffer";
const responseType = "text";
const T = ((e) => {
  function t(e, r, n, i) {
    let a;
    xs(this, t);
    a = qW(this, t, [i]);
    n8(a, "retryCount", 0);
    n8(a, "isTimeout", false);
    n8(a, "loaderType", loaderType);
    n8(a, "startTime", 0);
    n8(a, "endTime", 0);
    n8(a, "options", {});
    a.url = e;
    a.request = r;
    a.response = n;
    return a;
  }
  B_1(t, e);
  return j6(t);
})(Xx(Error));
const toString = Object.prototype.toString;
function A(e) {
  if (toString.call(e) !== "[object Object]") {
    return false;
  }
  const t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
function C(e) {
  if (
    e &&
    e[0] !== null &&
    e[0] !== undefined &&
    (e[0] !== 0 || (e[1] !== null && e[1] !== undefined))
  ) {
    let t = "bytes=" + e[0] + "-";
    if (e[1]) {
      t += e[1];
    }
    return t;
  }
}
function R(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function P(e, t) {
  if (e) {
    if (!t) {
      return e;
    }
    let r;
    const n = Object.keys(t)
      .map((e) => {
        if ((r = t[e]) != null) {
          if (Array.isArray(r)) {
            e += "[]";
          } else {
            r = [r];
          }
          return r
            .map((t) => {
              let r;
              let n;
              r = t;
              if (toString.call(r) === "[object Date]") {
                t = t.toISOString();
              } else if ((n = t) !== null && uk(n) === "object") {
                t = JSON.stringify(t);
              }
              return "".concat(R(e), "=").concat(R(t));
            })
            .join("&");
        }
      })
      .filter(Boolean)
      .join("&");
    if (n) {
      const i = e.indexOf("#");
      if (i !== -1) {
        e = e.slice(0, i);
      }
      e += (e.indexOf("?") === -1 ? "?" : "&") + n;
    }
    return e;
  }
}
function I(
  data,
  done,
  response,
  contentLength,
  age,
  startTime,
  firstByteTime,
  o,
  range,
  vid,
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
      vid,
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
function B(e, t) {
  return Math.round((8 * e * 1000) / t / 1024);
}
const U = "real_time_speed";
const L = ((e) => {
  let t;
  function r() {
    let e;
    xs(this, r);
    e = qW(this, r);
    n8(e, "_abortController", null);
    n8(e, "_timeoutTimer", null);
    n8(e, "_reader", null);
    n8(e, "_response", null);
    n8(e, "_aborted", false);
    n8(e, "_index", -1);
    n8(e, "_range", null);
    n8(e, "_receivedLength", 0);
    n8(e, "_running", false);
    n8(e, "_logger", null);
    n8(e, "_vid", "");
    n8(e, "_onProcessMinLen", 0);
    n8(e, "_onCancel", null);
    n8(e, "_priOptions", null);
    n8(e, "_processMaxGapTime", Infinity);
    return e;
  }
  B_1(r, e);
  return j6(
    r,
    [
      {
        key: "load",
        value: function (e) {
          let t;
          const r = this;
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
          const e_processMaxGapTime = e.processMaxGapTime;
          const e_priOptions = e.priOptions;
          this._logger = e_logger;
          this._aborted = false;
          this._onProcessMinLen = e_onProcessMinLen;
          this._onCancel = e_onCancel;
          this._abortController =
            typeof AbortController !== "undefined" && new AbortController();
          this._running = true;
          this._receivedLength = 0;
          this._index = e_index;
          this._range = e_range || [0, 0];
          this._vid = e_vid || e_url;
          this._priOptions = e_priOptions || {};
          this._processMaxGapTime = e_processMaxGapTime;
          const L = {
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
          let M = false;
          clearTimeout(this._timeoutTimer);
          e_url = P(e_url, e_params);
          const j = C(e_range);
          if (j) {
            e_headers = e_request
              ? e_request.headers
              : (L.headers = L.headers || (Headers ? new Headers() : {}));
            if (Headers && e_headers instanceof Headers) {
              e_headers.append("Range", j);
            } else {
              e_headers.Range = j;
            }
          }
          if (e_timeout) {
            this._timeoutTimer = setTimeout(
              Rx(
                P4().mark(function* e() {
                  let t;
                  M = true;
                  yield r.cancel();
                  if (e_onTimeout) {
                    t = new T(e_url, L, null, "timeout");
                    t.isTimeout = true;
                    e_onTimeout(t, {
                      index: r._index,
                      range: r._range,
                      vid: r._vid,
                      priOptions: r._priOptions,
                    });
                  }
                }),
              ),
              e_timeout,
            );
          }
          const N = Date.now();
          this._logger.debug(
            "[fetch load start], index,",
            e_index,
            ",range,",
            e_range,
          );
          return new Promise((resolve, reject) => {
            let i;
            fetch(e_request || e_url, e_request ? undefined : L)
              .then(
                ((i = Rx(
                  P4().mark(function i(a) {
                    let l;
                    let c;
                    let h;
                    let p;
                    return P4().wrap(function (i) {
                      while (true) {
                        switch ((i.prev = i.next)) {
                          case 0:
                            clearTimeout(r._timeoutTimer);
                            r._response = a;
                            if (!(r._aborted || !r._running)) {
                              i.next = 4;
                              break;
                            }
                            return i.abrupt("return");
                          case 4:
                            if (e_transformResponse) {
                              a = e_transformResponse(a, e_url) || a;
                            }
                            if (a.ok) {
                              i.next = 7;
                              break;
                            }
                            throw new T(e_url, L, a, "bad network response");
                          case 7:
                            l = Date.now();
                            if (e_responseType !== responseType) {
                              i.next = 15;
                              break;
                            }
                            i.next = 11;
                            return a.text();
                          case 11:
                          case 18:
                            c = i.sent;
                            r._running = false;
                            i.next = 37;
                            break;
                          case 15:
                            if (e_responseType !== "json") {
                              i.next = 22;
                              break;
                            }
                            i.next = 18;
                            return a.json();
                          case 22:
                            if (!e_onProgress) {
                              i.next = 29;
                              break;
                            }
                            r.resolve = resolve;
                            r.reject = reject;
                            r._loadChunk(a, e_onProgress, N, l);
                            return i.abrupt("return");
                          case 29:
                            i.next = 31;
                            return a.arrayBuffer();
                          case 31:
                            c = new Uint8Array((c = i.sent));
                            r._running = false;
                            h = Date.now() - N;
                            p = B(c.byteLength, h);
                            r.emit(U, {
                              speed: p,
                              len: c.byteLength,
                              time: h,
                              vid: r._vid,
                              index: r._index,
                              range: r._range,
                              priOptions: r._priOptions,
                            });
                          case 37:
                            r._logger.debug(
                              "[fetch load end], index,",
                              e_index,
                              ",range,",
                              e_range,
                            );
                            resolve(
                              I(
                                c,
                                true,
                                a,
                                a.headers.get("Content-Length"),
                                a.headers.get("age"),
                                N,
                                l,
                                e_index,
                                e_range,
                                r._vid,
                                r._priOptions,
                              ),
                            );
                          case 39:
                          case "end":
                            return i.stop();
                        }
                      }
                    }, i);
                  }),
                )),
                function (e) {
                  return i.apply(this, arguments);
                }),
              )
              .catch((e) => {
                let i;
                clearTimeout(r._timeoutTimer);
                r._running = false;
                if (!r._aborted || M) {
                  e =
                    e instanceof T
                      ? e
                      : new T(
                          e_url,
                          L,
                          null,
                          (i = e) == null ? undefined : i.message,
                        );
                  e.startTime = N;
                  e.endTime = Date.now();
                  e.isTimeout = M;
                  e.options = {
                    index: r._index,
                    range: r._range,
                    vid: r._vid,
                    priOptions: r._priOptions,
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
          ((t = Rx(
            P4().mark(function e() {
              return P4().wrap(
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
                          } catch (e) {}
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
        value: function (e, t, st, n) {
          let i;
          let a;
          let s;
          let endTime;
          const u = this;
          if (!e.body || !e.body.getReader) {
            this._running = false;
            const l = new T(
              e.url,
              "",
              e,
              "onProgress of bad response.body.getReader",
            );
            l.options = {
              index: this._index,
              range: this._range,
              vid: this._vid,
              priOptions: this._priOptions,
            };
            this.reject(l);
            return;
          }
          if (this._onProcessMinLen > 0) {
            this._cache = new Uint8Array(2097152);
            this._writeIdx = 0;
          }
          const c = (this._reader = e.body.getReader());
          let f = Date.now();
          i = Rx(
            P4().mark(function i() {
              let l;
              let h;
              let p;
              let v;
              let m;
              let y;
              let g;
              let _;
              let b;
              return P4().wrap(
                function (i) {
                  while (true) {
                    switch ((i.prev = i.next)) {
                      case 0:
                        s = Date.now();
                        i.prev = 1;
                        i.next = 4;
                        return c.read();
                      case 4:
                        a = i.sent;
                        endTime = Date.now();
                        i.next = 13;
                        break;
                      case 8:
                        i.prev = 8;
                        i.t0 = i.catch(1);
                        endTime = Date.now();
                        if (!u._aborted) {
                          u._running = false;
                          i.t0.options = {
                            index: u._index,
                            range: u._range,
                            vid: u._vid,
                            priOptions: u._priOptions,
                          };
                          u.reject(i.t0);
                        }
                        return i.abrupt("return");
                      case 13:
                        p =
                          (h =
                            ((l = u._range) == null ? undefined : l.length) > 0
                              ? u._range[0]
                              : 0) + u._receivedLength;
                        if (!u._aborted) {
                          i.next = 19;
                          break;
                        }
                        u._running = false;
                        t(
                          undefined,
                          false,
                          {
                            range: [p, p],
                            vid: u._vid,
                            index: u._index,
                            startTime: s,
                            endTime,
                            st,
                            firstByteTime: n,
                            priOptions: u._priOptions,
                          },
                          e,
                        );
                        return i.abrupt("return");
                      case 19:
                        v = a.value ? a.value.byteLength : 0;
                        u._receivedLength += v;
                        if (u._onProcessMinLen > 0) {
                          if (u._writeIdx + v >= u._onProcessMinLen || a.done) {
                            (m = new Uint8Array(u._writeIdx + v)).set(
                              u._cache.subarray(0, u._writeIdx),
                              0,
                            );
                            if (v > 0) {
                              m.set(a.value, u._writeIdx);
                            }
                            u._writeIdx = 0;
                            u._logger.debug(
                              "【fetchLoader,onProgress enough】,done,",
                              a.done,
                              ",len,",
                              m.byteLength,
                              ", writeIdx,",
                              u._writeIdx,
                            );
                          } else if (v > 0 && u._writeIdx + v < 2097152) {
                            u._cache.set(a.value, u._writeIdx);
                            u._writeIdx += v;
                            u._logger.debug(
                              "【fetchLoader,onProgress cache】,len,",
                              v,
                              ", writeIdx,",
                              u._writeIdx,
                            );
                          } else if (v > 0) {
                            y = new Uint8Array(u._writeIdx + v + 2048);
                            u._logger.debug(
                              "【fetchLoader,onProgress extra start】,size,",
                              u._writeIdx + v + 2048,
                              ", datalen,",
                              v,
                              ", writeIdx,",
                              u._writeIdx,
                            );
                            y.set(u._cache.subarray(0, u._writeIdx), 0);
                            if (v > 0) {
                              y.set(a.value, u._writeIdx);
                            }
                            u._writeIdx += v;
                            delete u._cache;
                            u._cache = y;
                            u._logger.debug(
                              "【fetchLoader,onProgress extra end】,len,",
                              v,
                              ", writeIdx,",
                              u._writeIdx,
                            );
                          }
                        } else {
                          m = a.value;
                        }
                        if (!((m && m.byteLength > 0) || a.done)) {
                          i.next = 28;
                          break;
                        }
                        u._logger.debug(
                          "【fetchLoader,onProgress call】,task,",
                          u._range,
                          ", start,",
                          p,
                          ", end,",
                          h + u._receivedLength,
                          ", done,",
                          a.done,
                          st,
                        );
                        t(
                          m,
                          a.done,
                          {
                            range: [
                              u._range[0] +
                                u._receivedLength -
                                (m ? m.byteLength : 0),
                              u._range[0] + u._receivedLength,
                            ],
                            vid: u._vid,
                            index: u._index,
                            startTime: s,
                            endTime,
                            st,
                            firstByteTime: n,
                            priOptions: u._priOptions,
                          },
                          e,
                        );
                        f = Date.now();
                        i.next = 37;
                        break;
                      case 28:
                        if (!(Date.now() - f >= u._processMaxGapTime)) {
                          i.next = 37;
                          break;
                        }
                        u._logger.debug(
                          "[onProgress timeout],task: "
                            .concat(JSON.stringify(u._range), " done: ")
                            .concat(a.done, " processMaxGapTime: ")
                            .concat(u._processMaxGapTime),
                        );
                        g = new T(e.url, null, e, "process timeout");
                        g.options = {
                          index: u._index,
                          range: u._range,
                          vid: u._vid,
                          priOptions: u._priOptions,
                        };
                        u.running = false;
                        i.next = 35;
                        return u.cancel();
                      case 35:
                        u.reject(g);
                        return i.abrupt("return");
                      case 37:
                        if (a.done) {
                          _ = Date.now() - st;
                          b = B(u._receivedLength, _);
                          u.emit(U, {
                            speed: b,
                            len: u._receivedLength,
                            time: _,
                            vid: u._vid,
                            index: u._index,
                            range: u._range,
                            priOptions: u._priOptions,
                          });
                          u._running = false;
                          u._logger.debug(
                            "[fetchLoader onProgress end],task,",
                            u._range,
                            ",done,",
                            a.done,
                          );
                          u.resolve(
                            I(
                              a,
                              true,
                              e,
                              e.headers.get("Content-Length"),
                              e.headers.get("age"),
                              st,
                              n,
                              u._index,
                              u._range,
                              u._vid,
                              u._priOptions,
                            ),
                          );
                        } else {
                          d();
                        }
                      case 38:
                      case "end":
                        return i.stop();
                    }
                  }
                },
                i,
                null,
                [[1, 8]],
              );
            }),
          );
          var d = function () {
            return i.apply(this, arguments);
          };
          d();
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
})(D.A);
const M = ((e) => {
  function t() {
    let e;
    xs(this, t);
    e = qW(this, t);
    n8(e, "_xhr", null);
    n8(e, "_aborted", false);
    n8(e, "_timeoutTimer", null);
    n8(e, "_range", null);
    n8(e, "_receivedLength", 0);
    n8(e, "_url", null);
    n8(e, "_onProgress", null);
    n8(e, "_index", -1);
    n8(e, "_headers", null);
    n8(e, "_currentChunkSizeKB", 384);
    n8(e, "_timeout", null);
    n8(e, "_xhr", null);
    n8(e, "_withCredentials", null);
    n8(e, "_startTime", -1);
    n8(e, "_loadCompleteResolve", null);
    n8(e, "_loadCompleteReject", null);
    n8(e, "_runing", false);
    n8(e, "_logger", false);
    n8(e, "_vid", "");
    n8(e, "_responseType", undefined);
    n8(e, "_credentials", undefined);
    n8(e, "_method", undefined);
    n8(e, "_transformResponse", undefined);
    n8(e, "_firstRtt", undefined);
    n8(e, "_onCancel", null);
    n8(e, "_priOptions", null);
    return e;
  }
  B_1(t, e);
  return j6(
    t,
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
          this._url = P(e.url, e.params);
          const r = Date.now();
          return new Promise((resolve, reject) => {
            t._loadCompleteResolve = resolve;
            t._loadCompleteReject = reject;
            t._startLoad();
          }).catch((e) => {
            clearTimeout(t._timeoutTimer);
            t._runing = false;
            if (!t._aborted) {
              e = e instanceof T ? e : new T(t._url, t._request);
              e.startTime = r;
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
            this._responseType === w &&
            this._range &&
            this._range.length > 1
          ) {
            if (this._onProgress) {
              this._firstRtt = -1;
              const t = 1024 * this._currentChunkSizeKB;
              const r = this._range[0] + this._receivedLength;
              let n = this._range[1];
              if (t < this._range[1] - r) {
                n = r + t;
              }
              e = [r, n];
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
            const r = (this._xhr = new XMLHttpRequest());
            r.open(this._method || "GET", this._url, true);
            r.responseType = this._responseType;
            if (this._timeout) {
              r.timeout = this._timeout;
            }
            r.withCredentials = this._withCredentials;
            r.onload = this._onLoad.bind(this);
            r.onreadystatechange = this._onReadyStatechange.bind(this);
            r.onerror = function (e) {
              t._running = false;
              let r;
              let n;
              let i;
              const a = new T(
                t._url,
                t._request,
                e == null || (r = e.currentTarget) == null
                  ? undefined
                  : r.response,
                "xhr.onerror.status:" +
                  (e == null || (n = e.currentTarget) == null
                    ? undefined
                    : n.status) +
                  ",statusText," +
                  (e == null || (i = e.currentTarget) == null
                    ? undefined
                    : i.statusText),
              );
              a.options = {
                index: t._index,
                range: t._range,
                vid: t._vid,
                priOptions: t._priOptions,
              };
              t._loadCompleteReject(a);
            };
            r.ontimeout = function (e) {
              t.cancel();
              const r = new T(
                t._url,
                t._request,
                {
                  status: 408,
                },
                "timeout",
              );
              if (t._onTimeout) {
                r.isTimeout = true;
                t._onTimeout(r, {
                  index: t._index,
                  range: t._range,
                  vid: t._vid,
                  priOptions: t._priOptions,
                });
              }
              r.options = {
                index: t._index,
                range: t._range,
                vid: t._vid,
                priOptions: t._priOptions,
              };
              t._loadCompleteReject(r);
            };
            const n = this._headers || {};
            const i = C(e);
            if (i) {
              n.Range = i;
            }
            if (n) {
              Object.keys(n).forEach((e) => {
                r.setRequestHeader(e, n[e]);
              });
            }
            this._logger.debug(
              "[xhr.send->] tast,",
              this._range,
              ",load sub range, ",
              e,
            );
            r.send(this._body);
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
          const status = e.target.status;
          if (status < 200 || status > 299) {
            const r = new T(
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
          let n = null;
          let i = false;
          const a =
            ((s = this._range) == null ? undefined : s.length) > 0
              ? this._range[0]
              : 0;
          if (this._responseType === w) {
            var s;
            var o;
            let u;
            const l = new Uint8Array(e.target.response);
            o = a + this._receivedLength;
            if (l && l.byteLength > 0) {
              this._receivedLength += l.byteLength;
              const c = Date.now() - this._startTime;
              const speed = B(this._receivedLength, c);
              this.emit(U, {
                speed,
                len: this._receivedLength,
                time: c,
                vid: this._vid,
                index: this._index,
                range: [o, a + this._receivedLength],
                priOptions: this._priOptions,
              });
            }
            n = l;
            i =
              !(((u = this._range) == null ? undefined : u.length) > 1) ||
              !this._range[1] ||
              !(this._receivedLength < this._range[1] - this._range[0]);
            this._logger.debug(
              "[xhr load done->], tast :",
              this._range,
              ", start",
              o,
              "end ",
              a + this._receivedLength,
              ",dataLen,",
              l ? l.byteLength : 0,
              ",receivedLength",
              this._receivedLength,
              ",index,",
              this._index,
              ", done,",
              i,
            );
          } else {
            i = true;
            n = e.target.response;
          }
          let d = {
            ok: status >= 200 && status < 300,
            status,
            statusText: this._xhr.statusText,
            url: this._xhr.responseURL,
            headers: this._getHeaders(this._xhr),
            body: this._xhr.response,
          };
          if (this._transformResponse) {
            d = this._transformResponse(d, this._url) || d;
          }
          if (this._onProgress) {
            this._onProgress(
              n,
              i,
              {
                index: this._index,
                vid: this._vid,
                range: [o, a + this._receivedLength],
                startTime: this._startTime,
                endTime: Date.now(),
                priOptions: this._priOptions,
              },
              d,
            );
          }
          if (i) {
            this._runing = false;
            if (this._loadCompleteResolve) {
              this._loadCompleteResolve(
                I(
                  this._onProgress ? null : n,
                  i,
                  d,
                  d.headers["content-length"],
                  d.headers.age,
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
            hz(t, "removeAllListeners", this, 3)([]),
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
          const r = e.getAllResponseHeaders().trim().split("\r\n");
          const n = {};
          const i = vG(r);
          try {
            for (i.s(); !(t = i.n()).done;) {
              const a = t.value.split(": ");
              n[a[0].toLowerCase()] = a.slice(1).join(": ");
            }
          } catch (error) {
            i.e(error);
          } finally {
            i.f();
          }
          return n;
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
})(D.A);
const V = j6(
  function e(t, r) {
    xs(this, e);
    this.promise = $f();
    this.alive = !!r.onProgress;
    if (!r.logger) {
      r.logger = new V_1("Loader");
    }
    this._loaderType = t;
    this._loader =
      t === loaderType && typeof fetch !== "undefined" ? new L() : new M();
    this._config = r;
    this._retryCount = 0;
    this._retryTimer = null;
    this._canceled = false;
    this._retryCheckFunc = r.retryCheckFunc;
    this._logger = r.logger;
  },
  [
    {
      key: "exec",
      value: function () {
        let e;
        const t = this;
        const _config = this._config;
        const { retry, retryDelay, onRetryError, transformError, ...rest } =
          _config;
        e = Rx(
          P4().mark(function e() {
            let r;
            let l;
            let c;
            return P4().wrap(
              function (e) {
                while (true) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      e.prev = 0;
                      e.next = 3;
                      return t._loader.load(rest);
                    case 3:
                      r = e.sent;
                      t.promise.resolve(r);
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
                      l = e.t0;
                      if (transformError) {
                        l = transformError(l) || l;
                      }
                      if (onRetryError && t._retryCount > 0) {
                        onRetryError(l, t._retryCount, {
                          index: rest.index,
                          vid: rest.vid,
                          range: rest.range,
                          priOptions: rest.priOptions,
                        });
                      }
                      t._retryCount++;
                      c = true;
                      if (t._retryCheckFunc) {
                        c = t._retryCheckFunc(e.t0);
                      }
                      if (!(c && t._retryCount <= retry)) {
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
                      t._retryTimer = setTimeout(u, retryDelay);
                      return e.abrupt("return");
                    case 26:
                      t.promise.reject(l);
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
        var u = function () {
          return e.apply(this, arguments);
        };
        u();
        return this.promise;
      },
    },
    {
      key: "cancel",
      value:
        ((b = Rx(
          P4().mark(function* e() {
            clearTimeout(this._retryTimer);
            this._canceled = true;
            this._loader.running = false;
            return this._loader.cancel();
          }),
        )),
        function () {
          return b.apply(this, arguments);
        }),
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
  ],
);
function F() {
  for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) {
    t[r] = arguments[r];
  }
  if ((t = t.filter(Boolean)).length < 2) {
    return t[0];
  }
  const n = z(t.reduce((acc, item) => acc + item.byteLength, 0));
  let i = 0;
  t.forEach((e) => {
    n.set(e, i);
    i += e.byteLength;
  });
  return n;
}
function z(e) {
  let t;
  for (let r = 0; r < 10;) {
    try {
      if ((t = new Uint8Array(e)).byteLength > 0) {
        break;
      }
      r++;
    } catch (error) {
      if (r < 10) {
        r++;
      } else {
        throw Error(
          "new array failed final,".concat(
            error == null ? undefined : error.message,
          ),
        );
      }
    }
  }
  return t;
}
const G = ((e) => {
  let t;
  function r(e) {
    let t;
    xs(this, r);
    t = qW(this, r, [e]);
    n8(t, "type", loaderType);
    n8(t, "_queue", []);
    n8(t, "_alive", []);
    n8(t, "_currentTask", null);
    n8(t, "_finnalUrl", "");
    n8(t, "_config", undefined);
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
      responseType,
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
      processMaxGapTime: Infinity,
      ...e,
    };
    if (!(t._config.loaderType !== "xhr" && L.isSupported())) {
      t.type = "xhr";
    }
    t.log = e.logger;
    return t;
  }
  B_1(r, e);
  return j6(
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
          let r =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : {};
          if (typeof e !== "string" && e) {
            r = e;
          } else {
            r.url = e || r.url || this._config.url;
          }
          if (
            (r = {
              ...this._config,
              ...r,
            }).params
          ) {
            r.params = {
              ...r.params,
            };
          }
          if (r.headers && A(r.headers)) {
            r.headers = {
              ...r.headers,
            };
          }
          if (r.body && A(r.body)) {
            r.body = {
              ...r.body,
            };
          }
          if (r.transformRequest) {
            r = r.transformRequest(r) || r;
          }
          r.logger = this.log;
          const n = new V(this.type, r);
          n.loader.on(U, function (e) {
            t.emit(U, e);
          });
          this._queue.push(n);
          if (
            !(
              this._queue.length !== 1 ||
              (this._currentTask && this._currentTask.running)
            )
          ) {
            this._processTask();
          }
          return n.promise;
        },
      },
      {
        key: "cancel",
        value:
          ((t = Rx(
            P4().mark(function* e() {
              let t;
              t = this._queue
                .map((e) => e.cancel())
                .concat(this._alive.map((e) => e.cancel()));
              if (this._currentTask) {
                t.push(this._currentTask.cancel());
              }
              this._queue = [];
              this._alive = [];
              yield Promise.all(t);
              yield (function () {
                const e =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : 0;
                return new Promise((resolve) => setTimeout(resolve, e));
              })();
            }),
          )),
          function () {
            return t.apply(this, arguments);
          }),
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
                let r;
                if (
                  (t = e._currentTask) != null &&
                  t.alive &&
                  ((r = e._alive) == null ? undefined : r.length) > 0
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
          return L.isSupported();
        },
      },
    ],
  );
})(D.A);
const K = u(function e(t, r) {
  s(this, e);
  this.type = "file";
  this.message = t;
  this.data = r;
});
const H = u(
  function e() {
    s(this, e);
    this._data = Object.create(null);
  },
  [
    {
      key: "set",
      value: function (e, t) {
        this._data[e] = t;
      },
    },
    {
      key: "get",
      value: function (e) {
        return this._data[e];
      },
    },
    {
      key: "clear",
      value: function () {
        this._data = Object.create(null);
      },
    },
  ],
);
const W = u(
  function e() {
    s(this, e);
    this.frames = [];
    this.dur = 0;
    this.minPts = Number.MAX_VALUE;
    this.maxPts = 0;
  },
  [
    {
      key: "appendFrame",
      value: function (e) {
        this.frames.push(e);
        this.dur += e.duration;
      },
    },
    {
      key: "calMinMaxPts",
      value: function (e) {
        if (e.pts < this.minPts) {
          this.minPts = e.pts;
        }
        const t = e.pts + e.duration;
        if (t > this.maxPts) {
          this.maxPts = t;
        }
      },
    },
  ],
);
function Y(e, t) {
  const e_trak = e.trak;
  if (e_trak && e_trak.length) {
    const n = e_trak.find((e) => {
      let t;
      return (
        ((t = e.mdia) == null || (t = t.hdlr) == null
          ? undefined
          : t.handlerType) === "vide"
      );
    });
    const i = e_trak.find((e) => {
      let t;
      return (
        ((t = e.mdia) == null || (t = t.hdlr) == null
          ? undefined
          : t.handlerType) === "soun"
      );
    });
    if (n || i) {
      let a = [];
      let s = [];
      if (t) {
        const o = [];
        let u = 0;
        let l = t.start + t.size;
        t.references.forEach((e, r) => {
          o.push({
            index: r,
            startTime: u,
            endTime: u + e.subsegment_duration / t.timescale,
            duration: e.subsegment_duration / t.timescale,
            range: [l, l + e.referenced_size],
            frames: [],
          });
          u += e.subsegment_duration / t.timescale;
          l += e.referenced_size;
        });
        a = o;
        s = o;
      } else {
        let c;
        let f;
        const d = (t) => {
          if (t) {
            return [
              {
                index: 0,
                startTime: 0,
                endTime: t.duration / t.timescale,
                duration: t.duration / t.timescale,
                range: [e.start + e.size, ""],
                frames: [],
              },
            ];
          }
          return [];
        };
        s = d(
          e.mvhd.duration ? e.mvhd : (c = n.mdia) == null ? undefined : c.mdhd,
        );
        a = d(
          e.mvhd.duration ? e.mvhd : (f = i.mdia) == null ? undefined : f.mdhd,
        );
      }
      return {
        videoSegments: s,
        audioSegments: a,
      };
    }
  }
}
function Z(e, _config) {
  let r;
  const t_segmentDuration = _config.segmentDuration;
  const e_trak = e.trak;
  if (e_trak && e_trak.length) {
    const a = e_trak.find((e) => {
      let t;
      return (
        ((t = e.mdia) == null || (t = t.hdlr) == null
          ? undefined
          : t.handlerType) === "vide"
      );
    });
    const s = e_trak.find((e) => {
      let t;
      return (
        ((t = e.mdia) == null || (t = t.hdlr) == null
          ? undefined
          : t.handlerType) === "soun"
      );
    });
    if (a || s) {
      let o = [];
      let u = [];
      if (a) {
        r = (o = $("video", a, t_segmentDuration, _config)).map(
          (e) => e.duration,
        );
      }
      if (s) {
        u = $("audio", s, t_segmentDuration, _config, r, o);
      }
      return {
        videoSegments: o,
        audioSegments: u,
      };
    }
  }
}
function $(e, t, r, n) {
  const i =
    arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
  const a = arguments.length > 5 ? arguments[5] : undefined;
  const n_fixEditListOffset = n.fixEditListOffset;
  const n_fixEditListOffsetThreshold = n.fixEditListOffsetThreshold;
  const n_audioGroupingStrategy = n.audioGroupingStrategy;
  const n_memoryOpt = n.memoryOpt;
  const c =
    (ee = t.mdia) == null || (ee = ee.minf) == null ? undefined : ee.stbl;
  if (!c) {
    return [];
  }
  const f = (et = t.mdia.mdhd) == null ? undefined : et.timescale;
  const c_stts = c.stts;
  const c_stsc = c.stsc;
  const c_stsz = c.stsz;
  const c_stco = c.stco;
  const c_stss = c.stss;
  const c_ctts = c.ctts;
  if (
    !f ||
    !c_stts ||
    !c_stsc ||
    !c_stsz ||
    !c_stco ||
    (e === "video" && !c_stss)
  ) {
    return [];
  }
  let _ = 0;
  const b =
    (er = t.edts) == null || (er = er.elst) == null ? undefined : er.entries;
  if (
    n_fixEditListOffset &&
    (() => {
      let e = true;
      const t = navigator.userAgent || "";
      if (/Chrome/gi.test(t) && !/Edge\//gi.test(t)) {
        const r = t.match(/Chrome\/(\d+)/i);
        const n = r ? parseInt(r[1], 10) : 0;
        e = !!n && n >= 75;
      }
      return e;
    })() &&
    Array.isArray(b) &&
    b.length > 0
  ) {
    const k = b[0].media_time;
    if (
      k > 0 &&
      k <
        (n_fixEditListOffsetThreshold
          ? n_fixEditListOffsetThreshold * f
          : 5 * f)
    ) {
      _ = k;
    }
  }
  const x = [];
  const S = [];
  const w = [];
  let E = [];
  let T = [];
  const h_entries = c_stsc.entries;
  const v_entries = c_stco.entries;
  const p_entrySizes = c_stsz.entrySizes;
  const R = c_stss == null ? undefined : c_stss.entries;
  const P = c_ctts == null ? undefined : c_ctts.entries;
  const I = [];
  const B = {};
  if (!n_memoryOpt) {
    if (P) {
      P.forEach((e) => {
        for (let t = e.count, r = e.offset, n = 0; n < t; n++) {
          I.push(r);
        }
      });
    }
    if (R) {
      R.forEach((e) => {
        B[e - 1] = true;
      });
    }
  }
  let U = 0;
  let D = 0;
  let L = 0;
  let M = 0;
  let j = h_entries.length > 0 ? h_entries[0].samplesPerChunk : 0;
  let N =
    h_entries.length > 1 && h_entries[1]
      ? h_entries[1].firstChunk - 1
      : Infinity;
  let dts = 0;
  let F = -1;
  let z = false;
  const G = {};
  if ((P == null ? undefined : P.length) > 0 && _ > 0) {
    dts -= _;
    z = true;
  }
  t.editListApplied = z;
  if (n_memoryOpt) {
    ei = R == null ? undefined : R.shift();
  }
  c_stts.entries.forEach((e) => {
    for (let t = e.count, r = e.delta, n = 0; n < t; n++) {
      en = {
        dts,
        duration: r,
        size: p_entrySizes[U] || c_stsz.sampleSize,
        offset: v_entries[D] + M,
        index: U,
      };
      if (P) {
        if (n_memoryOpt) {
          ((e, t, r) => {
            r.offset = 0;
            const n = (r == null ? undefined : r.beforeFrameNum) || 0;
            let i = (r == null ? undefined : r.usedCttsIdx) || 0;
            if (
              !e ||
              (e == null ? undefined : e.length) <= 0 ||
              (r == null ? undefined : r.usedCttsIdx) >= e.length
            ) {
              r.offset = 0;
              r.usedCttsIdx = i;
              r.beforeFrameNum = n;
            } else {
              const a = e[i];
              if (t < n + ((a == null ? undefined : a.count) || 1)) {
                r.offset = (a == null ? undefined : a.offset) || 0;
              } else {
                const s = e[++i];
                if (s) {
                  r.offset = s.offset || 0;
                  r.beforeFrameNum = n + a.count;
                } else {
                  r.offset = 0;
                  r.beforeFrameNum = n + 1;
                }
                r.usedCttsIdx = i;
              }
            }
          })(P, U, G);
          en.pts = dts + ((G == null ? undefined : G.offset) || 0);
        } else if (I && U < I.length) {
          en.pts = dts + I[U];
        }
      }
      if (_ === 0 && U === 0) {
        en.pts = 0;
      }
      if (en.pts === undefined) {
        en.pts = en.dts;
      }
      if (R) {
        if (n_memoryOpt) {
          if (U + 1 === ei) {
            en.keyframe = true;
            ei = R.shift();
          }
        } else {
          en.keyframe = B[U];
        }
        if (en.keyframe) {
          F++;
          if (n_memoryOpt) {
            const i = new W();
            i.appendFrame(en);
            S.push(i);
          } else {
            S.push([en]);
            w.push(en.duration);
          }
        } else {
          if (n_memoryOpt) {
            S[S.length - 1].appendFrame(en);
          } else {
            S[S.length - 1].push(en);
            w[S.length - 1] += en.duration;
          }
        }
        en.gopId = F;
        if (n_memoryOpt) {
          S[S.length - 1].calMinMaxPts(en);
        }
      }
      if (!n_memoryOpt) {
        if (en.keyframe) {
          E[E.length] = en.pts;
        } else if (en.pts < E[S.length - 1]) {
          E[S.length - 1] = en.pts;
        }
        if (en.keyframe) {
          T[T.length] = en.index;
        } else if (S.length > 0 && T[S.length - 1] !== undefined) {
          let a;
          const s = (a = x[T[S.length - 1]]) == null ? undefined : a.pts;
          if (s !== undefined && en.pts > s) {
            T[S.length - 1] = en.index;
          }
        }
      }
      x[x.length] = en;
      dts += r;
      if (++U < j) {
        M += en.size;
      } else {
        D++;
        M = 0;
        if (D >= N) {
          N = h_entries[++L + 1] ? h_entries[L + 1].firstChunk - 1 : Infinity;
        }
        j += h_entries[L].samplesPerChunk;
      }
    }
  });
  const x_length = x.length;
  if (!x_length || (c_stss && !x[0].keyframe)) {
    return [];
  }
  const K = [];
  let frames = [];
  let Y = 0;
  let Z = 0;
  let $ = 0;
  let J = 0;
  const X = (e, t, r) => {
    ea = frames[frames.length - 1];
    if (n_memoryOpt) {
      $ = (S == null ? undefined : S.length) > 0 ? S[t].minPts : frames[0].pts;
      J =
        (S == null ? undefined : S.length) > 0
          ? S[r].maxPts
          : ea.pts + ea.duration;
    } else {
      $ = E[t];
      J = (es = x[T[r]]).pts + es.duration;
    }
    if (K.length === 0) {
      e = (J - $) / f;
    }
    K.push({
      index: K.length,
      startTime: $ / f,
      endTime: J / f,
      duration: e,
      range: [frames[0].offset, ea.offset + ea.size - 1],
      frames,
    });
    if (n_audioGroupingStrategy !== 1) {
      Y = 0;
    }
    frames = [];
  };
  let Q = 0;
  if (c_stss) {
    var ee;
    var et;
    var er;
    var en;
    var ei;
    var ea;
    var es;
    let eo;
    let eu;
    const el = r * f;
    for (let ec = 0, ef = S.length; ec < ef; ec++) {
      if (n_memoryOpt) {
        Y += S[ec].dur;
        (eo = frames).push.apply(eo, [...S[ec].frames]);
      } else {
        Y += w[ec];
        (eu = frames).push.apply(eu, [...S[ec]]);
      }
      if (ec + 1 < ef) {
        if (ec === 0 || Y > el) {
          X(Y / f, Q, ec);
          Y = 0;
          Q = ec + 1;
        }
      } else {
        X(Y / f, Q, ec);
        Y = 0;
        Q = ec + 1;
      }
    }
  } else {
    if (!n_memoryOpt) {
      E = [];
      T = [];
    }
    let ed = i[0] || r;
    if (n_audioGroupingStrategy === 1) {
      let eh;
      for (let ep = 0; ep < x_length; ep++) {
        const ev = x[ep];
        const em = x[ep + 1];
        const ey = ep === x_length - 1;
        frames.push(ev);
        Y += ev.duration;
        const eg = eh || Y / f;
        eh = (em ? Y + em.duration : 0) / f;
        if (
          ey ||
          (a[K.length]
            ? eh > a[K.length].endTime
            : eh - frames[0].pts / f >= ed)
        ) {
          if (!n_memoryOpt) {
            E.push(frames[0].pts);
            T.push(frames[frames.length - 1].index);
          }
          X(eg, K.length, K.length);
          ed = i[K.length] || r;
        }
      }
    } else {
      let e_;
      for (let eb = 0; eb < x_length; eb++) {
        const ek = x[eb];
        const ex = x[eb + 1];
        const eS = eb === x_length - 1;
        frames.push(ek);
        Y += ek.duration;
        const ew = e_ || Y / f;
        e_ = (ex ? Y + ex.duration : 0) / f;
        if (eS || e_ + Z >= ed) {
          if (n_audioGroupingStrategy === 2) {
            Z += Y / f - ed;
          } else {
            Z += e_ - ed;
          }
          if (!n_memoryOpt) {
            E.push(frames[0].pts);
            T.push(frames[frames.length - 1].index);
          }
          X(ew, K.length, K.length);
          ed = i[K.length] || r;
        }
      }
    }
  }
  return K;
}
function J(moov, isFragmentMP4) {
  let videoCodec = "";
  let audioCodec = "";
  let width = 0;
  let height = 0;
  let audioChannelCount = 0;
  let audioSampleRate = 0;
  let u = 0;
  let videoTimescale = 0;
  let audioTimescale = 0;
  if (moov.mvhd) {
    u = moov.mvhd.duration / moov.mvhd.timescale;
  }
  const e_trak = moov.trak;
  if (e_trak) {
    let d;
    let h;
    let p;
    let v;
    let m;
    let y;
    let g;
    let _;
    let b;
    const k = e_trak.find((e) => {
      let t;
      return (
        ((t = e.mdia) == null || (t = t.hdlr) == null
          ? undefined
          : t.handlerType) === "vide"
      );
    });
    const x = e_trak.find((e) => {
      let t;
      return (
        ((t = e.mdia) == null || (t = t.hdlr) == null
          ? undefined
          : t.handlerType) === "soun"
      );
    });
    let S = null;
    if (
      k &&
      (S =
        (h = k.mdia) == null || (h = h.minf) == null || (h = h.stbl) == null
          ? undefined
          : h.stsd.entries[0])
    ) {
      width = S.width;
      height = S.height;
      videoTimescale =
        (p = k.mdia) == null || (p = p.mdhd) == null ? undefined : p.timescale;
      videoCodec =
        (v = S.avcC || S.hvcC || S.av1C || S.vvcC) == null
          ? undefined
          : v.codec;
      if (S.type === "encv") {
        d =
          (m = S.sinf) == null || (m = m.schi) == null
            ? undefined
            : m.tenc.default_KID;
      }
    }
    if (
      x &&
      (S =
        (y = x.mdia) == null || (y = y.minf) == null || (y = y.stbl) == null
          ? undefined
          : y.stsd.entries[0])
    ) {
      audioChannelCount = S.channelCount;
      audioSampleRate = S.sampleRate;
      audioCodec = (g = S.esds) == null ? undefined : g.codec;
      audioTimescale =
        (_ = x.mdia) == null || (_ = _.mdhd) == null ? undefined : _.timescale;
      if (S.type === "enca") {
        d =
          d ||
          ((b = S.sinf) == null || (b = b.schi) == null
            ? undefined
            : b.tenc.default_KID);
      }
    }
    return {
      kid: d ? d.join("") : null,
      videoCodec,
      audioCodec,
      width,
      height,
      videoTimescale,
      audioChannelCount,
      audioSampleRate,
      duration: u,
      audioTimescale,
      moov,
      isFragmentMP4,
    };
  }
}
function X(e) {
  return typeof e === "number" && !Number.isNaN(e);
}
function Q(e) {
  if (!e) {
    return false;
  }
  const e_audioSegments = e.audioSegments;
  const e_videoSegments = e.videoSegments;
  const n = !e_videoSegments || e_videoSegments.length === 0;
  const i = !e_audioSegments || e_audioSegments.length === 0;
  return !n || !i;
}
var et = ((e) => {
  let r;
  let i;
  let o;
  let d;
  let y;
  let g;
  let S;
  function w(e) {
    s(this, w);
    t = c((t = w));
    r = ((e, t) => {
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
      f()
        ? Reflect.construct(t, [], c(this).constructor)
        : t.apply(this, undefined),
    );
    r.vid = "";
    r.url = "";
    r.meta = {};
    r.downloadInfo = [];
    r.videoSegments = [];
    r.audioSegments = [];
    r.cache = null;
    r._currentSegmentIndex = -1;
    r._currentLoadingSegmentIndex = -1;
    r.buffer = undefined;
    r.bufferDataLen = 0;
    r._error = undefined;
    r._transformError = function (e) {
      return e;
    };
    if (typeof e.fixEditListOffset !== "boolean") {
      delete e.fixEditListOffset;
    }
    r._config = {
      vid: "",
      moovEnd: 80000,
      segmentDuration: 2,
      maxDownloadInfoSize: 30,
      responseType: "arraybuffer",
      fixEditListOffset: true,
      cache: null,
      ...e,
    };
    var t;
    var r;
    const r__config = r._config;
    const { vid, cache, ...rest } = r__config;
    r.cache = cache || new H();
    r.vid = vid || rest.url;
    r.url = rest.url;
    rest.transformError = r._transformError;
    r.logger = new V_1("MP4Loader_" + r.vid);
    if (e.openLog) {
      V_1.enable();
    }
    rest.logger = r.logger;
    r._loader = new G(rest);
    r._loader.on(U, function (e) {
      r.emit(U, e);
    });
    return r;
  }
  if (typeof e !== "function" && e !== null) {
    throw TypeError("Super expression must either be null or a function");
  }
  w.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: w,
      writable: true,
      configurable: true,
    },
  });
  Object.defineProperty(w, "prototype", {
    writable: false,
  });
  if (e) {
    m(w, e);
  }
  return u(w, [
    {
      key: "isMetaLoaded",
      get: function () {
        return this.videoSegments.length || this.audioSegments.length;
      },
    },
    {
      key: "setCurrentSegment",
      value: function (e) {
        if (X(e)) {
          this._currentSegmentIndex = e;
        }
      },
    },
    {
      key: "isLastSegment",
      value: function (e) {
        if (X(e)) {
          let t;
          let r;
          return (
            e >=
            (((t = this.videoSegments[this.videoSegments.length - 1]) == null
              ? undefined
              : t.index) ||
              ((r = this.audioSegments[this.audioSegments.length - 1]) == null
                ? undefined
                : r.index) ||
              0)
          );
        }
        return false;
      },
    },
    {
      key: "isSegmentLoading",
      value: function (e) {
        return e === this._currentLoadingSegmentIndex;
      },
    },
    {
      key: "changeUrl",
      value: async function (t) {
        let r;
        let n;
        let i;
        const a = arguments;
        r = a.length > 1 && a[1] !== undefined ? a[1] : t;
        n = a.length > 2 ? a[2] : undefined;
        i = a.length > 3 ? a[3] : undefined;
        await this.reset(i);
        if (t) {
          this.url = t;
        }
        if (r) {
          this.vid = r;
        }
        if (n) {
          this._config.moovEnd = n;
        }
      },
    },
    {
      key: "getOrLoadMeta",
      value:
        ((r = a(
          v().mark(function e(t) {
            return v().wrap(
              function (e) {
                while (true) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (this.isMetaLoaded) {
                        e.next = 3;
                        break;
                      }
                      e.next = 3;
                      return this.loadMeta(t);
                    case 3:
                      return e.abrupt("return", this.meta);
                    case 4:
                    case "end":
                      return e.stop();
                  }
                }
              },
              e,
              this,
            );
          }),
        )),
        function (e) {
          return r.apply(this, arguments);
        }),
    },
    {
      key: "newBufferArray",
      value: function (e, t) {
        let r;
        if (this.buffer) {
          if (t || ((r = this.buffer) == null ? undefined : r.byteLength) < e) {
            let n;
            const i = this.buffer.subarray(0, this.bufferDataLen);
            const a = z(
              (((n = this.buffer) == null ? undefined : n.byteLength) || 0) + e,
            );
            a.set(i, 0);
            delete this.buffer;
            this.buffer = a;
          }
        } else {
          this.buffer = z(e);
          this.bufferDataLen = 0;
        }
      },
    },
    {
      key: "loadMetaProcess",
      value: async function (t, r, n) {
        let i;
        let s;
        let o;
        let u;
        let l;
        let onProgress;
        const f = this;
        const d = arguments;
        o = (s =
          ((e) => {
            if (Array.isArray(e)) {
              return e;
            }
          })(r) ||
          ((e) => {
            let t =
              e == null
                ? null
                : (typeof Symbol !== "undefined" && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (t != null) {
              let r;
              let n;
              let i;
              let a;
              const s = [];
              let o = true;
              let u = false;
              try {
                i = (t = t.call(e)).next;
                false;
                for (
                  ;
                  !(o = (r = i.call(t)).done) &&
                  (s.push(r.value), s.length !== 2);
                  o = true
                );
              } catch (error) {
                u = true;
                n = error;
              } finally {
                try {
                  if (
                    !o &&
                    t.return != null &&
                    ((a = t.return()), Object(a) !== a)
                  ) {
                    return;
                  }
                } finally {
                  if (u) {
                    throw n;
                  }
                }
              }
              return s;
            }
          })(r) ||
          _(r, 2) ||
          (() => {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })())[0];
        u = s[1];
        l = d.length > 3 && d[3] !== undefined ? d[3] : {};
        this._error = false;
        this.logger.debug("[loadMetaProcess start], range,", [o, u]);
        if (
          (i = this._config) != null &&
          i.memoryOpt &&
          (!this.buffer || (l != null && l.isExp))
        ) {
          try {
            this.newBufferArray(u - o + 1, l == null ? undefined : l.isExp);
          } catch (error) {
            n(
              null,
              true,
              {},
              new K(error == null ? undefined : error.message),
              {},
            );
          }
        }
        onProgress = (() => {
          const e = a(
            v().mark(function e(r, i, s, c) {
              let d;
              let h;
              let m;
              let y;
              let g;
              let _;
              let b;
              let k;
              let x;
              let S;
              let w;
              let E;
              let T;
              let O;
              let A;
              let C;
              return v().wrap(
                function (e) {
                  while (true) {
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          f.meta &&
                          s != null &&
                          s.range &&
                          s.range.length > 0 &&
                          s.range[1] >= u
                        ) {
                          i = true;
                          f.logger.debug(
                            "[loadMetaProcess],data done,setstate true,[",
                            o,
                            u,
                            "]",
                          );
                        }
                        if (
                          i &&
                          s != null &&
                          s.range &&
                          s.range.length > 0 &&
                          s.range[1] < u
                        ) {
                          i = false;
                          f.logger.debug(
                            "[loadMetaProcess],data not done,setstate false,[",
                            o,
                            u,
                            "]",
                          );
                        }
                        f.logger.debug(
                          "[loadMetaProcess],task,[",
                          o,
                          u,
                          "], range,",
                          s.range,
                          ",dataLen,",
                          r ? r.byteLength : undefined,
                          ", state,",
                          i,
                          ",err,",
                          f._error,
                        );
                        if (!f._error && r && r.byteLength > 0) {
                          n(r, i, s, null, c);
                        }
                        if (!(f.meta.moov || f._error)) {
                          e.next = 6;
                          break;
                        }
                        return e.abrupt("return");
                      case 6:
                        if (!(r && r.byteLength > 0)) {
                          e.next = 59;
                          break;
                        }
                        e.prev = 7;
                        if ((h = f._config) != null && h.memoryOpt) {
                          f.buffer.set(r, f.bufferDataLen);
                          f.bufferDataLen +=
                            (r == null ? undefined : r.byteLength) || 0;
                          d = f.buffer.subarray(0, f.bufferDataLen);
                        } else {
                          f.buffer = F(f.buffer, r);
                          d = f.buffer;
                        }
                        e.next = 15;
                        break;
                      case 11:
                        e.prev = 11;
                        e.t0 = e.catch(7);
                        n(
                          null,
                          i,
                          s,
                          new K(
                            e.t0 === null || e.t0 === undefined
                              ? undefined
                              : e.t0.message,
                          ),
                          c,
                        );
                        return e.abrupt("return");
                      case 15:
                        if (
                          (m = t_1.findBox(d, ["moov"])[0]) ||
                          ((y = t_1.findBox(d, ["mdat"])[0]), !i)
                        ) {
                          e.next = 30;
                          break;
                        }
                        if (y) {
                          e.next = 25;
                          break;
                        }
                        f._error = true;
                        n(null, i, s, new K("cannot find moov or mdat box"), c);
                        return e.abrupt("return");
                      case 25:
                        g = y.start + y.size;
                        e.next = 28;
                        return f.loadData([g, ""], t, l);
                      case 28:
                        if ((_ = e.sent)) {
                          m = t_1.findBox(_.data, ["moov"])[0];
                        }
                      case 30:
                        if (!(m && i && m.size > m.data.length)) {
                          e.next = 34;
                          break;
                        }
                        f.logger.debug(
                          "[loadMetaProcess],moov not all, range,",
                          s.range[1],
                          ",dataLen,",
                          f.bufferDataLen,
                          ", state,",
                          i,
                        );
                        e.next = 34;
                        return f.loadMetaProcess(
                          t,
                          [s.range[1], m.start + m.size - 1],
                          n,
                          {
                            isExp: true,
                          },
                        );
                      case 34:
                        if (!(m && m.size <= m.data.length && !f.meta.moov)) {
                          e.next = 59;
                          break;
                        }
                        if ((k = t_1.moov(m))) {
                          e.next = 40;
                          break;
                        }
                        f._error = true;
                        n(null, i, s, new K("cannot parse moov box"), c);
                        return e.abrupt("return");
                      case 40:
                        x = Z(k, f._config);
                        S = (() => {
                          const e = a(
                            v().mark(function e(r) {
                              let n;
                              let i;
                              return v().wrap(function (e) {
                                while (true) {
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (
                                        !(n = t_1.findBox(f.buffer, [r])[0])
                                      ) {
                                        e.next = 11;
                                        break;
                                      }
                                      if (!(n.size > n.data.length)) {
                                        e.next = 10;
                                        break;
                                      }
                                      e.next = 5;
                                      return f.loadData(
                                        [n.start, n.start + n.size - 1],
                                        t,
                                        l,
                                      );
                                    case 5:
                                      if (!(i = e.sent)) {
                                        e.next = 8;
                                        break;
                                      }
                                      return e.abrupt(
                                        "return",
                                        t_1.findBox(i.data, [r])[0],
                                      );
                                    case 8:
                                      e.next = 11;
                                      break;
                                    case 10:
                                      return e.abrupt("return", n);
                                    case 11:
                                    case "end":
                                      return e.stop();
                                  }
                                }
                              }, e);
                            }),
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })();
                        w = false;
                        if (
                          x &&
                          x.videoSegments.length &&
                          x.audioSegments.length
                        ) {
                          e.next = 48;
                          break;
                        }
                        e.next = 46;
                        return S("sidx");
                      case 46:
                        if ((E = e.sent) && (T = t_1.sidx(E))) {
                          Y(k, T);
                          p("segments");
                          w = true;
                        }
                      case 48:
                        if (Q(x)) {
                          e.next = 52;
                          break;
                        }
                        f._error = true;
                        n(null, i, s, new K("cannot parse segments"), c);
                        return e.abrupt("return");
                      case 52:
                        f.meta = J(k, w);
                        A = (O = x).videoSegments;
                        C = O.audioSegments;
                        f.videoSegments = A;
                        f.audioSegments = C;
                        if ((b = f._config) != null && b.memoryOpt) {
                          delete f.buffer;
                          f.bufferDataLen = 0;
                        }
                        f.logger.debug("[loadMetaProcess] moov ok");
                        n(
                          undefined,
                          i,
                          {
                            meta: {
                              meta: f.meta,
                              videoSegments: A,
                              audioSegments: C,
                            },
                          },
                          null,
                          c,
                        );
                      case 59:
                      case "end":
                        return e.stop();
                    }
                  }
                },
                e,
                null,
                [[7, 11]],
              );
            }),
          );
          return function (t, r, n, i) {
            return e.apply(this, arguments);
          };
        })();
        await this.loadData([o, u || this._config.moovEnd], t, {
          onProgress,
          ...l,
        });
      },
    },
    {
      key: "loadMeta",
      value:
        ((i = a(
          v().mark(function e(t, r) {
            let n;
            let responses;
            let a;
            let s;
            let o;
            let u;
            let l;
            let c;
            let f;
            let d;
            let h;
            let m;
            let y;
            let g;
            let _;
            const b = arguments;
            return v().wrap(
              function (e) {
                while (true) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      n = b.length > 2 && b[2] !== undefined ? b[2] : {};
                      responses = [];
                      this.logger.debug("[loadMeta start]");
                      e.next = 5;
                      return this.loadData(
                        [0, r || this._config.moovEnd],
                        t,
                        n,
                      );
                    case 5:
                      if ((a = e.sent)) {
                        e.next = 8;
                        break;
                      }
                      return e.abrupt("return");
                    case 8:
                      responses.push(a);
                      if ((s = t_1.findBox(a.data, ["moov"])[0])) {
                        e.next = 24;
                        break;
                      }
                      if ((o = t_1.findBox(a.data, ["mdat"])[0])) {
                        e.next = 14;
                        break;
                      }
                      throw new K("cannot find moov or mdat box", a.data);
                    case 14:
                      u = o.start + o.size;
                      e.next = 17;
                      return this.loadData([u], t, n);
                    case 17:
                      if ((a = e.sent)) {
                        e.next = 20;
                        break;
                      }
                      return e.abrupt("return");
                    case 20:
                      responses.push(a);
                      if ((s = t_1.findBox(a.data, ["moov"], u)[0])) {
                        e.next = 24;
                        break;
                      }
                      throw new K("cannot find moov box", a.data);
                    case 24:
                      if (!(s.size > s.data.length)) {
                        e.next = 32;
                        break;
                      }
                      e.next = 27;
                      return this.loadData(
                        [a.data.length, s.start + s.size - 1],
                        t,
                        n,
                      );
                    case 27:
                      if ((a = e.sent)) {
                        e.next = 30;
                        break;
                      }
                      return e.abrupt("return");
                    case 30:
                      responses.push(a);
                      s.data = F(s.data, a.data);
                    case 32:
                      if ((l = t_1.moov(s))) {
                        e.next = 35;
                        break;
                      }
                      throw new K("cannot parse moov box", s.data);
                    case 35:
                      if (Q((c = Z(l, this._config)))) {
                        e.next = 38;
                        break;
                      }
                      throw new K("cannot parse segments", s.data);
                    case 38:
                      if (!(c.videoSegments.length && c.audioSegments.length)) {
                        d = t_1.findBox(this.buffer, ["moof"])[0];
                        h = t_1.findBox(this.buffer, ["sidx"])[0];
                        if (d && d.size <= d.data.length && h) {
                          m = t_1.moof(d);
                          f = t_1.sidx(h);
                          if (m && f) {
                            Y(l, f);
                            p("segments");
                          }
                        }
                      }
                      this.meta = J(l, f);
                      g = (y = c).videoSegments;
                      _ = y.audioSegments;
                      this.videoSegments = g;
                      this.audioSegments = _;
                      delete this.buffer;
                      this.bufferDataLen = 0;
                      this.logger.debug("[load moov end!!!!!]");
                      return e.abrupt("return", {
                        meta: this.meta,
                        videoSegments: g,
                        audioSegments: _,
                        responses,
                      });
                    case 47:
                    case "end":
                      return e.stop();
                  }
                }
              },
              e,
              this,
            );
          }),
        )),
        function (e, t) {
          return i.apply(this, arguments);
        }),
    },
    {
      key: "loadCacheMeta",
      value: function (e, t) {
        const r = Z(e.moov, this._config);
        const r_videoSegments = r.videoSegments;
        const r_audioSegments = r.audioSegments;
        this.videoSegments = r_videoSegments;
        this.audioSegments = r_audioSegments;
        this._currentSegmentIndex = t;
        this.meta = e;
      },
    },
    {
      key: "getSegmentByTime",
      value: function (e) {
        let video;
        let audio;
        if (this.videoSegments.length) {
          if (
            (video = this.videoSegments.find(
              (t) => t.startTime <= e && t.endTime > e,
            ))
          ) {
            audio = this.audioSegments[video.index];
          }
        } else {
          audio = this.audioSegments.find(
            (t) => t.startTime <= e && t.endTime > e,
          );
        }
        return {
          video,
          audio,
        };
      },
    },
    {
      key: "loadSegmentByTime",
      value:
        ((o = a(
          v().mark(function e(t, r) {
            let n;
            let i;
            let a;
            let s;
            let o;
            const u = arguments;
            return v().wrap(
              function (e) {
                while (true) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      n = !(u.length > 2) || u[2] === undefined || u[2];
                      i = u.length > 3 && u[3] !== undefined ? u[3] : {};
                      if (this.isMetaLoaded) {
                        e.next = 5;
                        break;
                      }
                      e.next = 5;
                      return this.loadMeta(r);
                    case 5:
                      s = (a = this.getSegmentByTime(t)).video;
                      o = a.audio;
                      return e.abrupt(
                        "return",
                        this._loadSegment(s, o, r, n, i),
                      );
                    case 7:
                    case "end":
                      return e.stop();
                  }
                }
              },
              e,
              this,
            );
          }),
        )),
        function (e, t) {
          return o.apply(this, arguments);
        }),
    },
    {
      key: "loadNextSegment",
      value:
        ((d = a(
          v().mark(function e(t) {
            let r;
            let n;
            let i;
            let a;
            const s = arguments;
            return v().wrap(
              function (e) {
                while (true) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      r = !(s.length > 1) || s[1] === undefined || s[1];
                      n = s.length > 2 && s[2] !== undefined ? s[2] : {};
                      if (this.isMetaLoaded) {
                        e.next = 5;
                        break;
                      }
                      e.next = 5;
                      return this.loadMeta();
                    case 5:
                      i = this.videoSegments[this._currentSegmentIndex + 1];
                      a = this.audioSegments[this._currentSegmentIndex + 1];
                      return e.abrupt(
                        "return",
                        this._loadSegment(i, a, t, r, n),
                      );
                    case 8:
                    case "end":
                      return e.stop();
                  }
                }
              },
              e,
              this,
            );
          }),
        )),
        function (e) {
          return d.apply(this, arguments);
        }),
    },
    {
      key: "preload",
      value:
        ((y = a(
          v().mark(function e(t) {
            let r;
            let n;
            let i;
            let s;
            let o;
            let u;
            let l;
            const c = this;
            return v().wrap(
              function (e) {
                while (true) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (this.isMetaLoaded) {
                        e.next = 3;
                        break;
                      }
                      e.next = 3;
                      return this.loadMeta(true);
                    case 3:
                      if (!(!t || t < 0)) {
                        e.next = 5;
                        break;
                      }
                      return e.abrupt("return");
                    case 5:
                      n = (r = this.getSegmentByTime(t)).video;
                      i = r.audio;
                      if (
                        (s = Math.max(
                          (n == null ? undefined : n.index) || 0,
                          (i == null ? undefined : i.index) || 0,
                        ))
                      ) {
                        e.next = 9;
                        break;
                      }
                      return e.abrupt("return");
                    case 9:
                      o = this.videoSegments.slice(0, s);
                      u = this.audioSegments.slice(0, s);
                      l = (() => {
                        const e = a(
                          v().mark(function e(t) {
                            return v().wrap(function (e) {
                              while (true) {
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (!(t > s)) {
                                      e.next = 2;
                                      break;
                                    }
                                    return e.abrupt("return");
                                  case 2:
                                    e.next = 4;
                                    return c._loadSegment(
                                      o[t],
                                      u[t],
                                      true,
                                      false,
                                    );
                                  case 4:
                                    e.next = 6;
                                    return l(t + 1);
                                  case 6:
                                  case "end":
                                    return e.stop();
                                }
                              }
                            }, e);
                          }),
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })();
                      e.next = 14;
                      return l(0);
                    case 14:
                    case "end":
                      return e.stop();
                  }
                }
              },
              e,
              this,
            );
          }),
        )),
        function (e) {
          return y.apply(this, arguments);
        }),
    },
    {
      key: "cancel",
      value: function () {
        return this._loader.cancel();
      },
    },
    {
      key: "reset",
      value:
        ((g = a(
          v().mark(function e() {
            let t;
            const r = arguments;
            return v().wrap(
              function (e) {
                while (true) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (r.length > 0 && r[0] !== undefined && r[0]) {
                        e.next = 5;
                        break;
                      }
                      this.logger.debug(
                        "[MP4loader reset func call loader.cancel]",
                      );
                      e.next = 5;
                      return this._loader.cancel();
                    case 5:
                      this.vid = this.url = "";
                      this.meta = {};
                      this.downloadInfo = [];
                      this.videoSegments = [];
                      this.audioSegments = [];
                      this._currentSegmentIndex = -1;
                      this._currentLoadingSegmentIndex = -1;
                      if ((t = this._config) != null && t.memoryOpt) {
                        delete this.buffer;
                        this.bufferDataLen = 0;
                      }
                    case 13:
                    case "end":
                      return e.stop();
                  }
                }
              },
              e,
              this,
            );
          }),
        )),
        function () {
          return g.apply(this, arguments);
        }),
    },
    {
      key: "destroy",
      value: async function () {
        await this.reset();
        this.cache.clear();
      },
    },
    {
      key: "_loadSegment",
      value: async function (t, r, n, i, a) {
        let s;
        let o;
        for (; !t && !r; o.audio = r) {
          return;
          s =
            (t == null ? undefined : t.index) ||
            (r == null ? undefined : r.index) ||
            0;
          this._currentLoadingSegmentIndex = s;
          try {
            o = await this.loadData(
              [
                Math.min(
                  (t == null ? undefined : t.range[0]) || Infinity,
                  (r == null ? undefined : r.range[0]) || Infinity,
                ),
                Math.max(
                  (t == null ? undefined : t.range[1]) || 0,
                  (r == null ? undefined : r.range[1]) || 0,
                ),
              ],
              n,
              a,
            );
          } finally {
            this._currentLoadingSegmentIndex = -1;
          }
          if (o) {
            continue;
          }
          return;
          if (i) {
            this._currentSegmentIndex = s;
          }
          o.video = t;
        }
        return o;
      },
    },
    {
      key: "loadData",
      value:
        ((S = a(
          v().mark(function e(t, r) {
            let n;
            let i;
            let a;
            let s;
            let o;
            const u = arguments;
            return v().wrap(
              function (e) {
                while (true) {
                  switch ((e.prev = e.next)) {
                    case 0:
                      n = u.length > 2 && u[2] !== undefined ? u[2] : {};
                      i = this._getCacheKey(t);
                      e.next = 4;
                      return this.cache.get(i);
                    case 4:
                      if ((a = e.sent)) {
                        e.next = 12;
                        break;
                      }
                      o = n != null && n.url ? n.url : this.url;
                      e.next = 9;
                      return this._loader.load(o, {
                        range: t,
                        vid: this.vid,
                        ...n,
                      });
                    case 9:
                      s = e.sent;
                      e.next = 13;
                      break;
                    case 12:
                      s = {
                        data: a,
                        state: true,
                        options: {
                          fromCache: true,
                          range: t,
                          vid: this.vid,
                        },
                      };
                    case 13:
                      if (s) {
                        e.next = 15;
                        break;
                      }
                      return e.abrupt("return");
                    case 15:
                      if (!a) {
                        if (s.data) {
                          this.downloadInfo.push({
                            startTime: s.startTime,
                            endTime: s.endTime,
                            size: s.data.byteLength,
                            range: t,
                          });
                        }
                        if (
                          this.downloadInfo &&
                          this.downloadInfo.length >
                            this._config.maxDownloadInfoSize
                        ) {
                          this.downloadInfo = this.downloadInfo.slice(
                            -this._config.maxDownloadInfoSize,
                          );
                        }
                      }
                      return e.abrupt("return", s);
                    case 18:
                    case "end":
                      return e.stop();
                  }
                }
              },
              e,
              this,
            );
          }),
        )),
        function (e, t) {
          return S.apply(this, arguments);
        }),
    },
    {
      key: "_getCacheKey",
      value: function (e) {
        return (this.vid || this.url) + ":" + e;
      },
    },
  ]);
})(D.A);
export { et as v };
