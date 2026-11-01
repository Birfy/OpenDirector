function a7r51826g2d0u693s(r) {
  var e = /[\t\n\f\r ]/g;
  var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var t = "argus";
  var n = 3;
  function decode(r) {
    r = String(r).replace(e, "");
    var t = r,
      n = t.length;
    if (n % 4 === 0) {
      r = r.replace(/==?$/, "");
      n = r.length;
    }
    if (n % 4 === 1 || /[^+a-zA-Z0-9/]/.test(r))
      throw new Error(
        "Invalid character: the string to be decoded is not correctly encoded.",
      );
    var c = 0;
    var o, d;
    var g = "";
    var i = -1;
    while (++i < n) {
      d = a.indexOf(r.charAt(i));
      o = c % 4 ? o * 64 + d : d;
      if (c++ % 4) g += String.fromCharCode(255 & (o >> ((-2 * c) & 6)));
    }
    return g;
  }
  var c = r
    .replace(/\$/g, "V")
    .replace(/\-/g, "Y")
    .replace(/\*/g, "G")
    .replace(/\%/g, "U");
  for (var o = 0; o < n; o++) c = decode(c);
  c = c.slice(0, c.length - t.length);
  return c;
}
/*! LICENSE: slardar-runtime-cn.adeec237eb.js.LICENSE.txt */
("use strict");
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [7128],
  {
    27356(n, e, t) {
      t.r(e);
      var r,
        o = function () {
          return (o =
            Object.assign ||
            function (n) {
              for (var e, t = 1, r = arguments.length; t < r; t++)
                for (var o in (e = arguments[t]))
                  Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
              return n;
            }).apply(this, arguments);
        };
      function i(n, e) {
        var t = "function" == typeof Symbol && n[Symbol.iterator];
        if (!t) return n;
        var r,
          o,
          i = t.call(n),
          u = [];
        try {
          for (; (void 0 === e || e-- > 0) && !(r = i.next()).done; )
            u.push(r.value);
        } catch (n) {
          o = { error: n };
        } finally {
          try {
            r && !r.done && (t = i.return) && t.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return u;
      }
      function u(n, e, t) {
        if (t || 2 == arguments.length)
          for (var r, o = 0, i = e.length; o < i; o++)
            (!r && o in e) ||
              (r || (r = Array.prototype.slice.call(e, 0, o)), (r[o] = e[o]));
        return n.concat(r || Array.prototype.slice.call(e));
      }
      var a = function (n) {
          return JSON.stringify({ ev_type: "batch", list: n });
        },
        c = function () {
          return {};
        };
      function f(n) {
        return n;
      }
      function s(n) {
        return "object" == typeof n && null !== n;
      }
      var l = Object.prototype;
      function d(n) {
        if (s(n)) {
          if ("function" == typeof Object.getPrototypeOf) {
            var e = Object.getPrototypeOf(n);
            return e === l || null === e;
          }
          return "[object Object]" === l.toString.call(n);
        }
        return !1;
      }
      function v(n) {
        return "[object Array]" === l.toString.call(n);
      }
      function p(n) {
        return "function" == typeof n;
      }
      function g(n) {
        return "number" == typeof n;
      }
      function h(n) {
        return "string" == typeof n;
      }
      function m(n, e) {
        if (!v(n) || 0 === n.length) return !1;
        for (var t = 0; t < n.length; ) {
          if (n[t] === e) return !0;
          t++;
        }
        return !1;
      }
      var _ = function (n, e) {
          if (!v(n)) return n;
          var t = n.indexOf(e);
          if (t >= 0) {
            var r = n.slice();
            return (r.splice(t, 1), r);
          }
          return n;
        },
        y = function (n, e, t) {
          for (
            var r, o = i(e.split(".")), u = o[0], a = o.slice(1);
            n && a.length > 0;
          )
            ((n = n[u]), (u = (r = i(a))[0]), (a = r.slice(1)));
          if (n) return t(n, u);
        },
        b = function (n, e) {
          var t,
            r =
              v((t = n || [])) && t.length
                ? (function (n) {
                    for (var e = [], t = n.length, r = 0; r < t; r++) {
                      var o = n[r];
                      h(o)
                        ? e.push(o.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"))
                        : o && o.source && e.push(o.source);
                    }
                    return RegExp(e.join("|"), "i");
                  })(t)
                : null;
          return !!r && r.test(e);
        };
      function E(n) {
        try {
          return h(n) ? n : JSON.stringify(n);
        } catch (n) {
          return "[FAILED_TO_STRINGIFY]:" + String(n);
        }
      }
      var x = function (n, e, t, r) {
          return (
            void 0 === r && (r = !0),
            function () {
              for (var o = [], a = 0; a < arguments.length; a++)
                o[a] = arguments[a];
              if (!n) return c;
              var f = n[e],
                s = t.apply(void 0, u([f], i(o), !1)),
                l = s;
              return (
                p(l) &&
                  r &&
                  (l = function () {
                    for (var n = [], e = 0; e < arguments.length; e++)
                      n[e] = arguments[e];
                    try {
                      return s.apply(this, n);
                    } catch (e) {
                      return p(f) && f.apply(this, n);
                    }
                  }),
                (n[e] = l),
                function (t) {
                  t || (l === n[e] ? (n[e] = f) : (s = f));
                }
              );
            }
          );
        },
        S = function (n, e, t) {
          return function () {
            for (var r = [], o = 0; o < arguments.length; o++)
              r[o] = arguments[o];
            if (!n) return c;
            var a = n[e],
              f = t.apply(void 0, u([a], i(r), !1)),
              s = f;
            return (
              p(s) &&
                (s = function () {
                  for (var n = [], e = 0; e < arguments.length; e++)
                    n[e] = arguments[e];
                  return f.apply(this, n);
                }),
              (n[e] = s),
              function () {
                s === n[e] ? (n[e] = a) : (f = a);
              }
            );
          };
        },
        w = "".padStart
          ? function (n, e) {
              return (void 0 === e && (e = 8), n.padStart(e, " "));
            }
          : function (n) {
              return n;
            },
        O = 0,
        R = function () {
          for (var n = [], e = 0; e < arguments.length; e++)
            n[e] = arguments[e];
          console.error.apply(
            console,
            u(["[SDK]", Date.now(), w("" + O++)], i(n), !1),
          );
        },
        I = 0,
        T = function () {
          for (var n = [], e = 0; e < arguments.length; e++)
            n[e] = arguments[e];
          console.warn.apply(
            console,
            u(["[SDK]", Date.now(), w("" + I++)], i(n), !1),
          );
        },
        j = function (n) {
          return Math.random() < Number(n);
        },
        A = function (n, e) {
          return n < Number(e);
        },
        C = function (n) {
          return function (e) {
            for (var t = e, r = 0; r < n.length; r++)
              if (t)
                try {
                  t = n[r](t);
                } catch (n) {
                  R(n);
                }
              else break;
            return t;
          };
        };
      function D() {
        var n = (function () {
          for (var n = Array(16), e = 0, t = 0; t < 16; t++)
            ((3 & t) == 0 && (e = 0x100000000 * Math.random()),
              (n[t] = (e >>> ((3 & t) << 3)) & 255));
          return n;
        })();
        ((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128));
        for (var e = [], t = 0; t < 256; ++t)
          e[t] = (t + 256).toString(16).substr(1);
        var r = 0;
        return [
          e[n[r++]],
          e[n[r++]],
          e[n[r++]],
          e[n[r++]],
          "-",
          e[n[r++]],
          e[n[r++]],
          "-",
          e[n[r++]],
          e[n[r++]],
          "-",
          e[n[r++]],
          e[n[r++]],
          "-",
          e[n[r++]],
          e[n[r++]],
          e[n[r++]],
          e[n[r++]],
          e[n[r++]],
          e[n[r++]],
        ].join("");
      }
      var P = function (n, e, t) {
          var r = 0;
          return -1 === t
            ? c
            : function () {
                if (n()) {
                  (r && clearTimeout(r), (r = 0));
                  return;
                }
                0 === r && (r = setTimeout(e, t));
              };
        },
        L = function (n, e) {
          var t = [];
          try {
            t = e.reduce(function (e, t) {
              try {
                var r = t(n);
                "function" == typeof r && e.push(r);
              } catch (n) {}
              return e;
            }, []);
          } catch (n) {}
          return function (n) {
            return L(n, t);
          };
        },
        N = function (n) {
          void 0 === n && (n = 3e5);
          var e,
            t = [],
            r = [],
            o = !1,
            i = P(
              function () {
                return !!t.length;
              },
              function () {
                ((o = !0),
                  e && e[0](),
                  r.forEach(function (n) {
                    return n();
                  }),
                  (r.length = 0),
                  (e = void 0));
              },
              n,
            ),
            u = function (n) {
              ((t = _(t, n)), o || i());
            };
          return {
            next: function (n) {
              return L(n, t);
            },
            complete: function (n) {
              r.push(n);
            },
            attach: function (n, t) {
              e = [n, t];
            },
            subscribe: function (n) {
              if (o) throw Error("Observer is closed");
              return (
                t.push(n),
                e && e[1] && e[1](n),
                i(),
                function () {
                  return u(n);
                }
              );
            },
            unsubscribe: u,
          };
        },
        k = function (n, e, t) {
          var r = N(t);
          try {
            (n(r.next, r.attach), e && r.complete(e));
          } catch (n) {}
          return [r.subscribe, r.unsubscribe];
        },
        M = function (n, e) {
          var t = i(n, 1)[0];
          return function (n, r) {
            var o = t(function (t) {
              return (function (n) {
                for (var t = !0, r = 0; r < e.length; r++)
                  if (t)
                    try {
                      t = e[r](n);
                    } catch (n) {
                      R(n);
                    }
                  else break;
                return t;
              })(t)
                ? n(t)
                : c;
            });
            r(function () {
              o();
            });
          };
        },
        q = function (n, e, t, r) {
          return n.destroyAgent.set(e, t, r);
        },
        H = [
          "init",
          "start",
          "config",
          "beforeDestroy",
          "provide",
          "beforeReport",
          "report",
          "beforeBuild",
          "build",
          "beforeSend",
          "send",
          "beforeConfig",
        ],
        B = function (n) {
          var e,
            t,
            r,
            i =
              ((e = {}),
              (t = {}),
              (r = {
                set: function (n, o) {
                  return ((e[n] = o), (t[n] = E(o)), r);
                },
                merge: function (n) {
                  return (
                    (e = o(o({}, e), n)),
                    Object.keys(n).forEach(function (e) {
                      t[e] = E(n[e]);
                    }),
                    r
                  );
                },
                delete: function (n) {
                  return (delete e[n], delete t[n], r);
                },
                clear: function () {
                  return ((e = {}), (t = {}), r);
                },
                get: function (n) {
                  return t[n];
                },
                toString: function () {
                  return o({}, t);
                },
              }));
          (n.provide("context", i),
            n.on("report", function (n) {
              return (
                n.extra || (n.extra = {}),
                (n.extra.context = i.toString()),
                n
              );
            }));
        },
        U = function (n, e, t) {
          var r = {},
            o = function () {
              for (var t, a = [], c = 0; c < arguments.length; c++)
                a[c] = arguments[c];
              var f = a[0];
              if (f) {
                var s,
                  l = f.split(".")[0];
                if (!(l in o)) {
                  var d = r[l] || [],
                    v = null != (t = null == e ? void 0 : e(n)) ? t : {};
                  (d.push(u([v], i(a), !1)), (r[l] = d));
                  return;
                }
                return (
                  (s = [].slice.call(a, 1)),
                  y(o, f, function (n, e) {
                    if (n && e in n && p(n[e]))
                      try {
                        return n[e].apply(n, s);
                      } catch (n) {
                        return;
                      }
                  })
                );
              }
            };
          for (var a in (x(n, "provide", function (e) {
            return function (t, r) {
              ((o[t] = r), e.call(n, t, r));
            };
          })(),
          n))
            Object.prototype.hasOwnProperty.call(n, a) && (o[a] = n[a]);
          return (
            n.on("provide", function (e) {
              r[e] &&
                (r[e].forEach(function (e) {
                  var r = i(e),
                    o = r[0],
                    u = r.slice(1);
                  null == t || t(n, o, u);
                }),
                (r[e] = null));
            }),
            o
          );
        };
      function G(n, e) {
        return n.initSubject(e);
      }
      function F(n, e, t) {
        var r = i(e, 2),
          o = r[0],
          u = r[1],
          a = n.privateSubject || {};
        return (
          a[o] ||
            (a[o] = k(
              u,
              function () {
                a[o] = void 0;
              },
              t,
            )),
          a[o]
        );
      }
      var z = function (n) {
          try {
            "object" == typeof window &&
              s(window) &&
              window.__SLARDAR_DEVTOOLS_GLOBAL_HOOK__ &&
              window.__SLARDAR_DEVTOOLS_GLOBAL_HOOK__.push(n);
          } catch (n) {}
        },
        W = function () {
          return Date.now();
        };
      function K() {
        if ("object" == typeof window && s(window)) return window;
      }
      function V() {
        if ("object" == typeof document && s(document)) return document;
      }
      function X() {
        return K() && window.location;
      }
      function $() {
        var n = (function () {
          if (K() && "navigator" in window) return window.navigator;
        })();
        if (n) return n.connection || n.mozConnection || n.webkitConnection;
      }
      function J(n) {
        return (
          (null == n ? void 0 : n.effectiveType) ||
          (null == n ? void 0 : n.type) ||
          ""
        );
      }
      function Y(n) {
        var e = V();
        if (!e || !n) return "";
        var t = e.createElement("a");
        return ((t.href = n), t.href);
      }
      function Q(n) {
        var e = V();
        if (!e || !n)
          return {
            url: n,
            protocol: "",
            domain: "",
            query: "",
            path: "",
            hash: "",
          };
        var t = e.createElement("a");
        t.href = n;
        var r = t.pathname || "/";
        return (
          "/" !== r[0] && (r = "/" + r),
          {
            url: t.href,
            protocol: t.protocol.slice(0, -1),
            domain: t.hostname,
            query: t.search.substring(1),
            path: r,
            hash: t.hash,
          }
        );
      }
      function Z() {
        var n = K() && X();
        return n ? n.href : "";
      }
      var nn = function (n) {
          var e,
            t = { pid: (e = n.config()).pid, view_id: e.viewId, url: Z() };
          return ((t.context = n.context ? n.context.toString() : {}), t);
        },
        ne = function (n, e) {
          void 0 === e && (e = !1);
          var t = nn(n);
          return (
            e && (t.timestamp = W()),
            function (e) {
              n.report(o(o({}, e), { overrides: t }));
            }
          );
        },
        nt = function (n) {
          if (n)
            return (
              n.__SLARDAR_REGISTRY__ ||
                (n.__SLARDAR_REGISTRY__ = {
                  Slardar: { plugins: [], errors: [], subject: {} },
                }),
              n.__SLARDAR_REGISTRY__.Slardar
            );
        },
        nr = function () {
          for (var n = [], e = 0; e < arguments.length; e++)
            n[e] = arguments[e];
          var t = nt(K());
          t && (t.errors || (t.errors = []), t.errors.push(n));
        },
        no = function (n) {
          var e = { url: Z(), timestamp: W() },
            t = n.config();
          return (
            (null == t ? void 0 : t.pid) && (e.pid = t.pid),
            (null == n ? void 0 : n.context) &&
              (e.context = n.context.toString()),
            e
          );
        },
        ni = function (n, e) {
          return function (t) {
            var r = function (n) {
              return ((n.overrides = e), n);
            };
            (n.on("report", r), t(), n.off("report", r));
          };
        },
        nu = function (n, e, t, r) {
          return (
            void 0 === r && (r = !1),
            n.addEventListener(e, t, r),
            function () {
              n.removeEventListener(e, t, r);
            }
          );
        },
        na = function (n, e, t, r) {
          return (
            void 0 === r && (r = !1),
            n.addEventListener(e, t, r),
            function () {
              n.removeEventListener(e, t, r);
            }
          );
        },
        nc = function (n) {
          var e = !1;
          return [
            function (t) {
              !e && ((e = !0), n && n(t));
            },
          ];
        },
        nf = function (n) {
          var e = K();
          if (e) {
            var t = i(nc(n), 1)[0];
            ["unload", "beforeunload", "pagehide"].forEach(function (n) {
              nu(e, n, t, !1);
            });
          }
        },
        ns = function (n) {
          var e = V(),
            t = K();
          if (e && t) {
            var r = c;
            r = na(
              e,
              "visibilitychange",
              function () {
                "visible" === e.visibilityState && (n(), r());
              },
              !0,
            );
          }
        },
        nl = function (n, e) {
          var t,
            r = V();
          if (r) {
            var o = r.createElement("script");
            ((o.src = n),
              (o.crossOrigin = "anonymous"),
              (o.onload = e),
              null == (t = r.head) || t.appendChild(o));
          }
        },
        nd = function (n, e) {
          return s(n) ? o(o({}, e), n) : !!n && e;
        },
        nv = function () {
          return !!btoa && !!atob;
        },
        np = function (n) {
          try {
            var e = localStorage.getItem(n),
              t = e;
            e &&
              "string" == typeof e &&
              (t = JSON.parse(nv() ? decodeURI(atob(e)) : e));
            var r = t,
              o = r.expires,
              i = (function (n, e) {
                var t = {};
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) &&
                    0 > e.indexOf(r) &&
                    (t[r] = n[r]);
                if (
                  null != n &&
                  "function" == typeof Object.getOwnPropertySymbols
                )
                  for (
                    var o = 0, r = Object.getOwnPropertySymbols(n);
                    o < r.length;
                    o++
                  )
                    0 > e.indexOf(r[o]) &&
                      Object.prototype.propertyIsEnumerable.call(n, r[o]) &&
                      (t[r[o]] = n[r[o]]);
                return t;
              })(r, ["expires"]);
            return o >= W() ? i : void 0;
          } catch (n) {
            return;
          }
        },
        ng = function (n, e, t) {
          if (!(t <= 0))
            try {
              var r;
              localStorage.setItem(
                n,
                ((r = JSON.stringify(o(o({}, e), { expires: W() + t }))),
                nv() ? btoa(encodeURI(r)) : r),
              );
            } catch (n) {}
        },
        nh = function (n) {
          return !1 === n ? 0 : !0 !== n && void 0 !== n && g(n) ? n : 7776e6;
        },
        nm = function (n) {
          if ("object" == typeof window && window.__perfsee__) {
            var e,
              t = {};
            return (
              null == (e = Error.captureStackTrace) || e.call(Error, t, n),
              t.stack
            );
          }
        },
        n_ = function () {
          var n = RegExp(
            "\\/monitor_web\\/collect|\\/monitor_browser\\/collect\\/batch",
            "i",
          );
          return function (e) {
            return n.test(e);
          };
        },
        ny = function (n) {
          return function () {
            for (var e, t = [], r = 0; r < arguments.length; r++)
              t[r] = arguments[r];
            return (
              (e = i(t, 2)),
              (this._method = e[0]),
              (this._url = e[1]),
              n.apply(this, t)
            );
          };
        },
        nb = function (n) {
          return function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            this._reqHeaders = this._reqHeaders || {};
            var r = i(e, 2),
              o = r[0],
              u = r[1];
            return ((this._reqHeaders[o] = u), n && n.apply(this, e));
          };
        },
        nE = function (n, e) {
          var t = n_();
          return function () {
            for (var r = [], o = 0; o < arguments.length; o++)
              r[o] = arguments[o];
            if (
              ((this._start = W()),
              (this._data = null == r ? void 0 : r[0]),
              !t(this._url))
            ) {
              var i,
                u = e([this._method, this._url, this._start, this]);
              ((i = this),
              S(i, "onreadystatechange", function (n) {
                return function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                  return (4 === this.readyState && u(i), n && n.apply(this, e));
                };
              }))();
            }
            return n.apply(this, r);
          };
        },
        nx = function (n) {
          return function (e, t) {
            if (n) {
              var r = [];
              (r.push(S(n, "open", ny)()),
                r.push(S(n, "setRequestHeader", nb)()),
                r.push(S(n, "send", nE)(e)),
                t(function () {
                  r.forEach(function (n) {
                    return n();
                  });
                }));
            }
          };
        },
        nS = function (n, e) {
          return function (t, r) {
            void 0 === r && (r = {});
            var o = e([t, r]),
              i = n(t, r);
            return (
              i.then(
                function (n) {
                  o(n);
                },
                function () {
                  o(void 0);
                },
              ),
              i
            );
          };
        },
        nw = [
          "fetch_0",
          function (n, e) {
            var t = K();
            if (t && fetch) {
              var r = [];
              (r.push(S(t, "fetch", nS)(n)),
                e(function () {
                  r.forEach(function (n) {
                    return n();
                  });
                }));
            }
          },
        ],
        nO = ["resource"],
        nR = function (n, e, t) {
          var r =
            n &&
            new n(function (n, r) {
              n.getEntries
                ? n.getEntries().forEach(function (n, t, o) {
                    return e(n, t, o, r);
                  })
                : t && t();
            });
          return [
            function (e) {
              if (!n || !r) return t && t();
              try {
                r.observe({ entryTypes: e });
              } catch (n) {
                return t && t();
              }
            },
            function (e, o) {
              if (!n || !r) return t && t();
              try {
                var i = { type: e, buffered: !0 };
                (void 0 === o || (i.durationThreshold = o), r.observe(i));
              } catch (n) {
                return t && t();
              }
              r.observe({ type: e, buffered: !1 });
            },
            function () {
              return r && r.disconnect();
            },
          ];
        },
        nI = function (n, e, t) {
          var r = i(nR(n, e), 3),
            o = r[0],
            u = r[2];
          return (o(t), u);
        },
        nT = [
          "resource_0",
          function (n, e) {
            var t = (function () {
              if (K() && p(window.PerformanceObserver))
                return window.PerformanceObserver;
            })();
            if (t) {
              var r = n_();
              e(
                nI(
                  t,
                  function (e) {
                    r(e.name) || n(e);
                  },
                  nO,
                ),
              );
            }
          },
        ],
        nj = "pageview",
        nA = "session",
        nC = "js_error",
        nD = "http",
        nP = "custom",
        nL = "action",
        nN = { sampleRate: 1, origins: [] },
        nk = function () {
          var n = window && (window.crypto || window.msCrypto);
          if (void 0 !== n && n.getRandomValues) {
            var e = new Uint16Array(8);
            n.getRandomValues(e);
            var t = function (n) {
              for (var e = n.toString(16); e.length < 4; ) e = "0" + e;
              return e;
            };
            return (
              t(e[0]) +
              t(e[1]) +
              t(e[2]) +
              t(e[3]) +
              t(e[4]) +
              t(e[5]) +
              t(e[6]) +
              t(e[7])
            );
          }
          return "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".replace(
            /[x]/g,
            function () {
              return ((16 * Math.random()) | 0).toString(16);
            },
          );
        },
        nM = function (n) {
          var e = nd(n, nN);
          if (e && j(e.sampleRate))
            return function (n, t) {
              var r = e.origins;
              r.length &&
                b(r, n) &&
                t(
                  "traceparent",
                  "03-" + nk() + "-" + nk().substring(16) + "-01",
                );
            };
        },
        nq = RegExp(
          "(cookie|auth|jwt|token|key|ticket|secret|credential|session|password)",
          "i",
        ),
        nH = RegExp("(bearer|session)", "i"),
        nB = function (n, e) {
          return !n || !e || nq.test(n) || nH.test(e);
        },
        nU = function (n) {
          var e = !1;
          return function (t) {
            e || ((e = !0), n(t));
          };
        },
        nG = function (n, e) {
          try {
            if (e) {
              var t = n.request.url,
                r = e(t);
              if (!r) return;
              ((n.request.url = r),
                (n.extra = o(o({}, n.extra), { original_url: t })));
            }
          } catch (n) {}
        },
        nF = function (n, e, t) {
          var r = i(e, 2),
            o = r[0],
            u = r[1],
            a = t.setTraceHeader,
            f = t.ignoreUrls,
            s = t.setContextAtReq,
            l = t.extractUrl;
          n.push(
            o[0](function (n) {
              var e,
                r = i(n, 4);
              r[0];
              var o = r[1];
              r[2];
              var d = r[3];
              if (!o) return c;
              var v = Y(o);
              if (b(f, v)) return c;
              a &&
                a(v, function (n, e) {
                  return d.setRequestHeader(n, e);
                });
              var p = s(),
                g = void 0,
                h = u()[0](function (n) {
                  (v === n.name || (e && e === n.name)) && !g && (g = n);
                });
              return function (n) {
                e = n.responseURL;
                var r = nz(n, t);
                setTimeout(function () {
                  (g && (r.response.timing = g),
                    nG(r, l),
                    p && p({ ev_type: nD, payload: r }),
                    h());
                }, 100);
              };
            }),
          );
        },
        nz = function (n, e) {
          var t,
            r = n._method,
            o = n._reqHeaders,
            u = n._url,
            a = n._start,
            c = n._data,
            f = {
              api: "xhr",
              request: {
                url: Y(u),
                method: (r || "").toLowerCase(),
                headers:
                  o &&
                  Object.keys(o).reduce(function (n, e) {
                    return (nB(e, o[e]) || (n[e.toLowerCase()] = o[e]), n);
                  }, {}),
                timestamp: a,
              },
              response: {
                status: n.status || 0,
                is_custom_error: !1,
                timestamp: W(),
              },
              duration: W() - a,
            };
          "function" == typeof n.getAllResponseHeaders &&
            (f.response.headers =
              h((t = n.getAllResponseHeaders())) && t
                ? t.split("\r\n").reduce(function (n, e) {
                    if (h(e)) {
                      var t = i(e.split(": "), 2),
                        r = t[0],
                        o = t[1];
                      nB(r, o) || (n[r.toLowerCase()] = o);
                    }
                    return n;
                  }, {})
                : {});
          var s = f.response.status,
            l = e.collectBodyOnError,
            d = e.extraExtractor;
          try {
            var v = null == d ? void 0 : d(n.response, f, c);
            (v && (f.extra = v),
              v && (f.response.is_custom_error = !0),
              l &&
                (v || s >= 400) &&
                ((f.request.body = c ? "" + c : void 0),
                (f.response.body = n.response ? "" + n.response : void 0)));
          } catch (n) {}
          return f;
        },
        nW = "ajax",
        nK = {
          autoWrap: !0,
          setContextAtReq: function () {
            return f;
          },
          ignoreUrls: [],
          collectBodyOnError: !1,
        },
        nV = function (n, e, t) {
          var r = i(e, 2),
            o = r[0],
            u = r[1],
            a = t.setTraceHeader,
            f = t.ignoreUrls,
            s = t.setContextAtReq,
            l = t.extractUrl,
            d = window.Headers,
            v = window.Request;
          v &&
            d &&
            n.push(
              o[0](function (n) {
                var e,
                  r = i(n, 2),
                  o = r[0],
                  p = r[1],
                  g = Y(o instanceof v ? o.url : o);
                if (!nX(g) || b(f, g)) return c;
                a &&
                  a(g, function (n, e) {
                    return nJ(n, e, o, p, v, d);
                  });
                var h = s(),
                  m = W(),
                  _ = void 0,
                  y = u()[0](function (n) {
                    (g === n.name || (e && e === n.name)) && !_ && (_ = n);
                  });
                return function (n) {
                  e = n && n.url;
                  var r = n0(o, p, n, v, d, t, m),
                    i = nU(function (n) {
                      (_ && (n.response.timing = _),
                        nG(n, l),
                        h && h({ ev_type: nD, payload: n }),
                        y());
                    });
                  setTimeout(function () {
                    i(r);
                  }, 1e3);
                };
              }),
            );
        },
        nX = function (n) {
          if (!h(n)) return !1;
          var e = i(n.split(":"), 2),
            t = e[0];
          return !e[1] || "http" === t || "https" === t;
        },
        n$ = function (n, e) {
          return n instanceof e;
        },
        nJ = function (n, e, t, r, i, u) {
          var a;
          n$(t, i)
            ? t.headers.set(n, e)
            : r.headers instanceof u
              ? r.headers.set(n, e)
              : (r.headers = o(o({}, r.headers), (((a = {})[n] = e), a)));
        },
        nY = function (n, e, t) {
          var r = (e && e.method) || "get";
          return (n$(n, t) && (r = n.method || r), r.toLowerCase());
        },
        nQ = function (n) {
          for (var e = [], t = 1; t < arguments.length; t++)
            e[t - 1] = arguments[t];
          try {
            return e.reduce(function (e, t) {
              return (
                new n(t || {}).forEach(function (n, t) {
                  return !nB(t, n) && (e[t] = n);
                }),
                e
              );
            }, {});
          } catch (n) {
            return {};
          }
        },
        nZ = function (n, e, t) {
          return n$(n, t) ? n.body : null == e ? void 0 : e.body;
        },
        n0 = function (n, e, t, r, o, i, u) {
          var a = {
              api: "fetch",
              request: {
                method: nY(n, e, r),
                timestamp: u,
                url: Y(n instanceof r ? n.url : n),
                headers: nQ(o, n.headers, e.headers),
              },
              response: {
                status: (t && t.status) || 0,
                is_custom_error: !1,
                timestamp: W(),
              },
              duration: W() - u,
            },
            f = i.collectBodyOnError,
            s = i.extraExtractor,
            l = function () {
              var t;
              f &&
                (a.request.body =
                  null == (t = nZ(n, e, r)) ? void 0 : t.toString());
            };
          if (t)
            try {
              var d = nQ(o, t.headers);
              a.response.headers = d;
              try {
                -1 !== (d["content-type"] || "").indexOf("application/json") &&
                  s &&
                  t
                    .clone()
                    .json()
                    .catch(function () {
                      return t.clone().text();
                    })
                    .then(function (t) {
                      var o,
                        i = s(
                          t,
                          a,
                          null == (o = nZ(n, e, r)) ? void 0 : o.toString(),
                        );
                      i &&
                        ((a.extra = i), (a.response.is_custom_error = !0), l());
                    })
                    .catch(c);
              } catch (n) {}
              t.status >= 400 && l();
            } catch (n) {}
          else l();
          return a;
        },
        n1 = "fetch",
        n2 = {
          autoWrap: !0,
          setContextAtReq: function () {
            return f;
          },
          ignoreUrls: [],
          collectBodyOnError: !1,
        },
        n3 = ["name", "message", "stack", "filename", "lineno", "colno"],
        n6 = function (n) {
          var e;
          return (
            !(function (n) {
              switch (Object.prototype.toString.call(n)) {
                case "[object Error]":
                case "[object Exception]":
                case "[object DOMError]":
                case "[object DOMException]":
                  return !0;
                default:
                  return n instanceof Error;
              }
            })(n)
              ? (d(n) ||
                  ("u" > typeof Event &&
                    (function (n, e) {
                      try {
                        return n instanceof e;
                      } catch (n) {
                        return !1;
                      }
                    })(n, Event)) ||
                  h(n)) &&
                (e = { message: E(n) })
              : (e =
                  n && s(n)
                    ? n3.reduce(function (e, t) {
                        return ((e[t] = n[t]), e);
                      }, {})
                    : n),
            e
          );
        },
        n5 = function (n) {
          var e = n6(n.error);
          if (!e) return e;
          var t = n.colno,
            r = n.lineno,
            o = n.filename;
          return (
            t && !e.colno && (e.colno = String(t)),
            r && !e.lineno && (e.lineno = String(r)),
            o && !e.filename && (e.filename = o),
            e
          );
        },
        n4 = function (n) {
          var e;
          try {
            var t = void 0;
            if (
              ("reason" in n
                ? (t = n.reason)
                : "detail" in n &&
                  "reason" in n.detail &&
                  (t = n.detail.reason),
              t)
            ) {
              var r = n6(t);
              return o(o({}, r), {
                name: null != (e = r && r.name) ? e : "UnhandledRejection",
              });
            }
          } catch (n) {}
        },
        n7 = function (n) {
          return "[object ErrorEvent]" === Object.prototype.toString.call(n)
            ? n5(n)
            : "[object PromiseRejectionEvent]" ===
                Object.prototype.toString.call(n)
              ? n4(n)
              : n6(n);
        },
        n8 = "jsError",
        n9 = function (n) {
          return "hidden" === n.visibilityState;
        },
        en = function (n, e) {
          var t = V(),
            r = K();
          if (t && r) {
            var o = function (e) {
                n("pagehide" === e.type || n9(t));
              },
              i = na(t, "visibilitychange", o, !0),
              u = nu(r, "pagehide", o, !0),
              a = nu(r, "pageshow", o, !0);
            e(
              function () {
                (i(), u(), a());
              },
              function (n) {
                n(n9(t));
              },
            );
          }
        },
        ee = ["hidden_3", en],
        et = [
          "unload_0",
          function (n, e) {
            var t = K();
            if (t) {
              var r = i(nc(n), 1)[0],
                o = function () {
                  r();
                },
                u = [];
              (["unload", "beforeunload", "pagehide"].forEach(function (n) {
                u.push(nu(t, n, o, !1));
              }),
                e(function () {
                  u.forEach(function (n) {
                    return n();
                  });
                }));
            }
          },
        ],
        er = [
          "hash_0",
          function (n, e) {
            var t = K();
            if (t) {
              var r = nu(
                t,
                "hashchange",
                function () {
                  return n(location.href);
                },
                !0,
              );
              e(function () {
                r();
              });
            }
          },
        ],
        eo = [
          "history_0",
          function (n, e) {
            var t = K() && window.history,
              r = K();
            if (t && r) {
              var o = [],
                i = function () {
                  return n(location.href);
                },
                u = function (n) {
                  return function () {
                    for (var e = [], r = 0; r < arguments.length; r++)
                      e[r] = arguments[r];
                    try {
                      n.apply(t, e);
                    } finally {
                      i();
                    }
                  };
                };
              (o.push(x(t, "pushState", u)(), x(t, "replaceState", u)()),
                o.push(nu(r, "popstate", i, !0)),
                e(function () {
                  o.forEach(function (n) {
                    return n();
                  });
                }));
            }
          },
        ],
        ei = function (n) {
          return eu(n, W());
        },
        eu = function (n, e) {
          return n + "_" + e;
        },
        ea = function (n, e, t, r) {
          var o = t,
            i = e;
          return (
            r && r(e),
            [
              function (e, t, u) {
                "user_set" !== e && t !== o
                  ? ((o = t), (i = null != u ? u : o), r && r(i), n(e, i))
                  : "user_set" === e &&
                    t !== i &&
                    ((i = t), r && r(i), n(e, i));
              },
              function () {
                e && n("init", e);
              },
            ]
          );
        },
        ec = function (n, e) {
          var t = e;
          return [
            function (e, r) {
              r !== t && n(e, (t = r));
            },
          ];
        },
        ef = function (n) {
          return "manual" === n;
        },
        es = "error_weight",
        el = "duration_apdex",
        ed = "perf_apdex",
        ev = function () {
          var n;
          return (
            ((n = { error_count: [0, 0, 0, 0], duration_count: [0, 0, 0] })[
              ed
            ] = {}),
            n
          );
        },
        ep = function (n, e) {
          var t = n[0] + n[1] + n[2],
            r = n[0] / t;
          return n[2] / t > e.frustrating_threshold
            ? 2
            : r > e.satisfying_threshold || 0 === t
              ? 0
              : 1;
        },
        eg = function () {
          var n = 0,
            e = void 0;
          return [
            function (t) {
              t ? e && ((n += W() - e), (e = void 0)) : (e = W());
            },
            function () {
              e && (n += W() - e);
              var t = n;
              return ((n = 0), (e = W()), t);
            },
          ];
        },
        eh = function (n, e) {
          return function (t, r) {
            var o = t.payload;
            switch (t.ev_type) {
              case "performance":
                var i = o.name;
                o.isSupport && n(r[ed], i, o.value);
                break;
              case nL:
                n(r[ed], "action", o.duration || 0);
                break;
              case nC:
                e(r[es], 0);
                break;
              case nD:
                if (o.response.is_custom_error || o.response.status >= 400)
                  e(r[es], 1);
                else {
                  var u = o.response.timing;
                  u && n(r[el], 0, u.duration);
                }
                break;
              case "resource_error":
                e(r[es], 2);
                break;
              case "blank_screen":
                e(r[es], 3);
                break;
              case "resource":
                n(r[el], 1, o.duration);
                break;
              case "performance_longtask":
                o.longtasks.forEach(function (e) {
                  n(r[el], 2, e.duration);
                });
            }
          };
        },
        em = function () {
          var n,
            e,
            t = function () {
              ((n = [0, 0, 0]), (e = ev()));
            };
          return (
            t(),
            [
              function (t, r, o) {
                var i = t && t[r];
                if (i && !(o <= 0)) {
                  var u =
                    o < (i[0].threshold || 0)
                      ? 0
                      : o > (i[1].threshold || 0)
                        ? 2
                        : 1;
                  if (((n[u] += i[u].weight), "string" == typeof r)) {
                    var a = eu(r, u),
                      c = e[ed][a];
                    e[ed][a] = (c || 0) + 1;
                  } else 2 === u && (e.duration_count[r] += 1);
                }
              },
              function (t, r) {
                t && ((n[2] += t[r]), (e.error_count[r] += 1));
              },
              function () {
                return [n, e];
              },
              t,
            ]
          );
        },
        e_ = function () {
          var n = {
            start: W(),
            end: 0,
            time_spent: 0,
            is_bounced: !1,
            entry: "",
            exit: "",
            p_count: 0,
            a_count: 0,
          };
          return [
            function (e, t) {
              var r = i(e, 3),
                o = r[0],
                u = r[1],
                a = r[2];
              ((n.end = W()),
                (n.time_spent += (t && t.time_spent) || 0),
                (n.last_page = t),
                (n.p_count += 1),
                (n.rank = o),
                (n.apdex = u),
                (n.apdex_detail = a));
              var c = V();
              c && (n.is_bounced = "complete" !== c.readyState);
            },
            function (e, t) {
              ((n.time_spent += e.time_spent), (n.p_count += 1), (n.exit = t));
            },
            function () {
              n.a_count += 1;
            },
            function (e) {
              ((n.entry = e), (n.exit = e));
            },
            function () {
              return n;
            },
          ];
        },
        ey = function (n, e, t, r) {
          var o,
            u,
            a = r.sendInit,
            c = r.initPid,
            f = r.routeMode,
            s = r.extractPid,
            l = r.onPidUpdate,
            d = ef(f)
              ? function () {
                  return "";
                }
              : function (n) {
                  var e;
                  return "hash" === f
                    ? (null == (e = Q(n).hash)
                        ? void 0
                        : e.replace(/^#/, "")) || "/"
                    : Q(n).path;
                },
            v = s || function () {},
            p = i(
              ea(
                function (e, t) {
                  n({ ev_type: nj, payload: { pid: t, source: e } });
                },
                c || (null != (u = v((o = location.href))) ? u : d(o)),
                d(location.href),
                l,
              ),
              2,
            ),
            g = p[0],
            h = p[1];
          if (!ef(f)) {
            var m = i(
              ec(function (n, e) {
                return g(n, d(e), v(e));
              }, ""),
              1,
            )[0];
            t.length &&
              t.forEach(function (n) {
                return e.push(
                  n[0](function (n) {
                    return m(f, n);
                  }),
                );
              });
          }
          return (a && h(), [g.bind(null, "user_set")]);
        },
        eb = function (n, e, t, r) {
          var o = i(t, 2),
            u = o[0],
            a = o[1],
            c = 2 === r.apdex,
            f = void 0,
            s = void 0,
            l = void 0,
            d = !1,
            v = i(em(), 4),
            p = v[0],
            g = v[1],
            h = v[2],
            m = v[3],
            _ = i(em(), 4),
            y = _[0],
            b = _[1],
            E = _[2],
            x = _[3],
            S = i(e_(), 5),
            w = S[0],
            O = S[1],
            R = S[2],
            I = S[3],
            T = S[4],
            j = i(eg(), 2),
            A = j[0],
            C = j[1];
          (e.push(u[0](A)),
            c ||
              e.push(
                a[0](function () {
                  if (d) {
                    var e = i(E(), 2),
                      t = e[0],
                      r = e[1];
                    (w([ep(t, l), t, r], L()),
                      n({ ev_type: nA, payload: T() }),
                      x());
                  }
                }),
              ));
          var D = eh(p, g),
            P = eh(y, b),
            L = function () {
              var n = i(h(), 2),
                e = n[0],
                t = n[1];
              return {
                start: f[0],
                pid: f[1],
                view_id: f[2],
                end: W(),
                time_spent: C(),
                apdex: e,
                rank: ep(e, l),
                detail: t,
              };
            };
          return (
            e.push(function () {
              d = !1;
            }),
            [
              function (n, e) {
                if (!f) {
                  ((f = [W(), n, e]), I(n), (d = !!(l && f)));
                  return;
                }
                (d && O((s = L()), n), (f = [W(), n, e]), m());
              },
              function (n) {
                d &&
                  (c || (P(n, l), n.ev_type === nL && R()),
                  n.common.pid === f[1] && D(n, l));
              },
              function (e) {
                (d && (e.payload.last = s), n(e));
              },
              function (n) {
                if (!n) {
                  (e.forEach(function (n) {
                    return n();
                  }),
                    (e.length = 0));
                  return;
                }
                d = !!((l = n) && f);
              },
            ]
          );
        },
        eE = "pageview",
        ex = { sendInit: !0, routeMode: "history", apdex: 2 },
        eS = function (n) {
          if (n && s(n) && n.name && h(n.name)) {
            var e = { name: n.name, type: "event" };
            if ("metrics" in n && s(n.metrics)) {
              var t = n.metrics,
                r = {};
              for (var o in t) g(t[o]) && (r[o] = t[o]);
              e.metrics = r;
            }
            if ("categories" in n && s(n.categories)) {
              var i = n.categories,
                u = {};
              for (var o in i) u[o] = E(i[o]);
              e.categories = u;
            }
            return (
              "attached_log" in n &&
                h(n.attached_log) &&
                (e.attached_log = n.attached_log),
              e
            );
          }
        },
        ew = function (n) {
          if (n && s(n) && n.content && h(n.content)) {
            var e = { content: E(n.content), type: "log", level: "info" };
            if (
              ("level" in n && (e.level = n.level), "extra" in n && s(n.extra))
            ) {
              var t = n.extra,
                r = {},
                o = {};
              for (var i in t) g(t[i]) ? (r[i] = t[i]) : (o[i] = E(t[i]));
              ((e.metrics = r), (e.categories = o));
            }
            return (
              "attached_log" in n &&
                h(n.attached_log) &&
                (e.attached_log = n.attached_log),
              e
            );
          }
        },
        eO = function (n) {
          var e = function (t) {
            var r = eS(t);
            if (r) {
              var o = nm(e);
              (o && (r.stacks = o),
                n.report({
                  ev_type: nP,
                  payload: r,
                  extra: { timestamp: W() },
                }));
            }
          };
          (n.provide("sendEvent", e),
            n.provide("sendLog", function (e) {
              var t = ew(e);
              t &&
                n.report({
                  ev_type: nP,
                  payload: t,
                  extra: { timestamp: W() },
                });
            }));
        },
        eR = function (n) {
          var e = $(),
            t = J(e);
          (e &&
            (e.onchange = function () {
              t = J(e);
            }),
            n.on("report", function (n) {
              return o(o({}, n), {
                extra: o(o({}, n.extra || {}), { network_type: t }),
              });
            }));
        },
        eI = function (n, e) {
          var t = n.common || {};
          return ((t.sample_rate = e), (n.common = t), n);
        },
        eT = function (n, e, t, r, o) {
          var i;
          return n
            ? ((i = o(r, e)),
              function () {
                return i;
              })
            : function () {
                return t(e);
              };
        },
        ej = function (n, e, t) {
          switch (t) {
            case "eq":
              return m(e, n);
            case "neq":
              return !m(e, n);
            case "gt":
              return n > e[0];
            case "gte":
              return n >= e[0];
            case "lt":
              return n < e[0];
            case "lte":
              return n <= e[0];
            case "regex":
              return !!n.match(new RegExp(e.join("|")));
            case "not_regex":
              return !n.match(new RegExp(e.join("|")));
            default:
              return !1;
          }
        },
        eA = function (n, e, t, r) {
          var o = y(n, e, function (n, e) {
            return n[e];
          });
          if (void 0 === o) return !1;
          var i = "boolean" == typeof o ? "bool" : g(o) ? "number" : "string";
          return ej(
            o,
            r.map(function (n) {
              switch (i) {
                case "number":
                  return Number(n);
                case "boolean":
                  return "1" === n;
                default:
                  return String(n);
              }
            }),
            t,
          );
        },
        eC = function (n, e) {
          try {
            return "rule" === e.type
              ? eA(n, e.field, e.op, e.values)
              : "and" === e.type
                ? e.children.every(function (e) {
                    return eC(n, e);
                  })
                : e.children.some(function (e) {
                    return eC(n, e);
                  });
          } catch (n) {
            return (nr(n), !1);
          }
        },
        eD = function (n, e, t, r, o, i) {
          var u = {};
          return (
            Object.keys(n).forEach(function (a) {
              var c = n[a],
                f = c.enable,
                s = c.sample_rate,
                l = c.conditional_sample_rules;
              f
                ? ((u[a] = {
                    enable: f,
                    sample_rate: s,
                    effectiveSampleRate: s * t,
                    hit: eT(e, s, r, o, i),
                  }),
                  l &&
                    (u[a].conditional_hit_rules = l.map(function (n) {
                      var u = n.sample_rate,
                        a = n.filter;
                      return {
                        sample_rate: u,
                        hit: eT(e, u, r, o, i),
                        effectiveSampleRate: u * t,
                        filter: a,
                      };
                    })))
                : (u[a] = {
                    enable: f,
                    hit: function () {
                      return !1;
                    },
                    sample_rate: 0,
                    effectiveSampleRate: 0,
                  });
            }),
            u
          );
        },
        eP = function (n, e, t, r, o) {
          if (!e) return f;
          var i = e.sample_rate,
            u = e.include_users,
            a = e.sample_granularity,
            c = e.rules,
            s = e.r,
            l = void 0 === s ? Math.random() : s;
          if (m(u, n))
            return function (n) {
              return eI(n, 1);
            };
          var d = "session" === a,
            v = eT(d, i, t, l, r),
            p = eD(c, d, i, t, l, r);
          return function (n) {
            if (!v()) return (d && o[0](), !1);
            if (!(n.ev_type in p)) return eI(n, i);
            if (!p[n.ev_type].enable) return (d && o[1](n.ev_type), !1);
            if (null == (e = n.common) ? void 0 : e.sample_rate) return n;
            var e,
              t = p[n.ev_type],
              r = t.conditional_hit_rules;
            if (r) {
              for (var u = 0; u < r.length; u++)
                if (eC(n, r[u].filter)) {
                  if (r[u].hit()) return eI(n, r[u].effectiveSampleRate);
                  return !1;
                }
            }
            return t.hit()
              ? eI(n, t.effectiveSampleRate)
              : (!(r && r.length) && d && o[1](n.ev_type), !1);
          };
        },
        eL = function (n) {
          n.on("start", function () {
            var e = Math.random(),
              t = [
                function () {
                  n.destroy();
                },
                function (e) {
                  n.destroyAgent.removeByEvType(e);
                },
              ],
              r = -1,
              i = f,
              u = function () {
                var u,
                  a = n.config(),
                  c = a.userId,
                  f = a.sample,
                  s = a.sampleConfigVersion,
                  l = void 0 === s ? 0 : s;
                l !== r &&
                  ((r = l),
                  (i = eP(
                    c,
                    f ? o(o({}, f), { r: null != (u = f.r) ? u : e }) : f,
                    j,
                    A,
                    t,
                  )));
              };
            (u(),
              n.on("config", u),
              n.on("build", function (n) {
                return i(n);
              }));
          });
        },
        eN = function () {
          var n = K();
          return n && n.navigator.sendBeacon
            ? {
                get: function () {},
                post: function (e, t) {
                  n.navigator.sendBeacon(e, t);
                },
              }
            : { get: c, post: c };
        };
      function ek(n) {
        var e = Error(n);
        return ((e.name = "RequestNetworkError"), e);
      }
      var eM = function (n, e, t) {
          var r = e.url,
            o = e.data,
            i = e.success,
            u = void 0 === i ? c : i,
            a = e.fail,
            f = void 0 === a ? c : a,
            s = e.getResponseText,
            l = void 0 === s ? c : s,
            d = e.withCredentials,
            v = new t();
          ((v.withCredentials = void 0 !== d && d),
            v.open(n, r, !0),
            v.setRequestHeader("Content-Type", "application/json"),
            (v.onload = function () {
              null == l || l(this.responseText);
              try {
                if (this.status >= 400) {
                  var n, e;
                  f(
                    ((n = this.responseText || this.statusText),
                    ((e = Error(n)).name = "ReqeustServerError"),
                    e),
                  );
                } else if (this.responseText) {
                  var t = JSON.parse(this.responseText);
                  u(t);
                } else u({});
              } catch (n) {
                f(n);
              }
            }),
            (v.onerror = function () {
              f(ek("Network request failed"));
            }),
            (v.onabort = function () {
              f(ek("Network request aborted"));
            }),
            v.send(o));
        },
        eq = function () {
          var n = (function () {
            if ("function" == typeof XMLHttpRequest && p(XMLHttpRequest))
              return XMLHttpRequest;
          })();
          return n
            ? {
                useBeacon: !0,
                get: function (e) {
                  eM("GET", e, n);
                },
                post: function (e) {
                  eM("POST", e, n);
                },
              }
            : { get: c, post: c };
        },
        eH =
          "mon." +
          a7r51826g2d0u693s("Wlcxc2NXRlhWbWhq%jJ0M$d%ST$kRmxZ%201a1dFMDk"),
        eB =
          "https://lf3-short." +
          a7r51826g2d0u693s("W$ZkS05X%khWbXRa$0$KMFRHM%9kb%p-%m5s-%0xWj-") +
          "/slardar/fe/sdk-web/plugins",
        eU = "1.16.7",
        eG = "SDK_SLARDAR_WEB",
        eF = "/monitor_web/settings/browser-settings",
        ez = "/monitor_browser/collect/batch/",
        eW = "SLARDAR",
        eK = ["/log/sentry/", ez, eF],
        eV = "session",
        eX = ["blankScreen", "action"],
        e$ = {
          sample_rate: 1,
          include_users: [],
          sample_granularity: eV,
          rules: {},
        };
      function eJ(n, e, t) {
        (void 0 === t && (t = eZ),
          (function (n) {
            var e = K(),
              t = V();
            if (e && t) {
              if ("complete" === t.readyState) return n();
              nu(
                e,
                "load",
                function () {
                  setTimeout(function () {
                    n();
                  }, 0);
                },
                !1,
              );
            }
          })(function () {
            n.on("init", function () {
              t(n, e);
            });
          }));
      }
      var eY = function (n, e, t, r) {
          void 0 === r && (r = e0);
          var o = e.config(),
            i = o.plugins,
            u = o.pluginBundle,
            a = n.filter(function (n) {
              return i[n] && !e.destroyAgent.has(n);
            }),
            c = function () {
              return a.forEach(function (n) {
                return e1(e, n, t);
              });
            };
          a.every(function (n) {
            return e3(n, t);
          })
            ? c()
            : r(e, { name: u.name }, c);
        },
        eQ = function (n, e, t, r) {
          void 0 === r && (r = e0);
          var o = e.config().plugins;
          n.filter(function (n) {
            return o[n] && !e.destroyAgent.has(n);
          }).forEach(function (n) {
            e3(n, t)
              ? e1(e, n, t)
              : r(e, { name: n, config: o[n] }, function () {
                  return e1(e, n, t);
                });
          });
        };
      function eZ(n, e, t) {
        void 0 === t && (t = e0);
        var r = n.config().pluginBundle;
        (eY(r ? r.plugins : [], n, e, t),
          eQ(eX, n, e, t),
          n.provide("reloadPlugin", function (e, t) {
            var r,
              i = n.config().pluginBundle;
            (n.destroyAgent.has(e) && n.destroyAgent.remove(e),
              void 0 !== t &&
                n.set({
                  plugins: o(o({}, n.config().plugins), (((r = {})[e] = t), r)),
                }),
              i && ~i.plugins.indexOf(e) ? eY([e], n) : eQ([e], n));
          }));
      }
      function e0(n, e, t, r) {
        var o,
          i,
          u,
          a,
          c = e.name,
          f = e.config;
        (void 0 === r && (r = nl),
          r(
            ((o = n),
            (i = c),
            null != (a = null == (u = f) ? void 0 : u.path)
              ? a
              : o.config().pluginPathPrefix +
                "/" +
                i.replace(/([a-z])([A-Z])/g, function (n, e, t) {
                  return e + "-" + t.toLowerCase();
                }) +
                "." +
                eU +
                ".js"),
            function () {
              t();
            },
          ));
      }
      function e1(n, e, t) {
        if ((void 0 === t && (t = nt(K())), t)) {
          var r = e2(t, e);
          if (!r) return void T("[loader].applyPlugin not found", e);
          try {
            if (n.destroyAgent.has(e)) return;
            r.apply(n);
          } catch (n) {
            (nr(n), T("[loader].applyPlugin failed", e, n));
          }
        }
      }
      function e2(n, e) {
        return n.plugins.filter(function (n) {
          return n.name === e && n.version === eU;
        })[0];
      }
      function e3(n, e) {
        return (
          void 0 === e && (e = nt(K())),
          !!e && !!e.plugins && !!e2(e, n)
        );
      }
      function e6(n, e, t) {
        (void 0 === t && (t = nt(K())),
          t &&
            t.plugins &&
            (e2(t, n) || t.plugins.push({ name: n, version: eU, apply: e })));
      }
      function e5(n) {
        var e, t;
        try {
          for (
            var r = (function (n) {
                var e = "function" == typeof Symbol && Symbol.iterator,
                  t = e && n[e],
                  r = 0;
                if (t) return t.call(n);
                if (n && "number" == typeof n.length)
                  return {
                    next: function () {
                      return (
                        n && r >= n.length && (n = void 0),
                        { value: n && n[r++], done: !n }
                      );
                    },
                  };
                throw TypeError(
                  e
                    ? "Object is not iterable."
                    : "Symbol.iterator is not defined.",
                );
              })(["userId", "deviceId", "sessionId", "env"]),
              o = r.next();
            !o.done;
            o = r.next()
          ) {
            var i = o.value;
            n[i] || delete n[i];
          }
        } catch (n) {
          e = { error: n };
        } finally {
          try {
            o && !o.done && (t = r.return) && t.call(r);
          } finally {
            if (e) throw e.error;
          }
        }
        return n;
      }
      function e4(n) {
        var e = n.plugins || {};
        for (var t in e) e[t] && !s(e[t]) && (e[t] = {});
        return e5(o(o({}, n), { plugins: e }));
      }
      function e7(n) {
        return s(n) && "bid" in n;
      }
      function e8(n) {
        return e5(o({}, n));
      }
      function e9(n) {
        if (!n) return {};
        var e,
          t = n.sample,
          r = n.plugins,
          o = n.timestamp,
          i = n.quota_rate,
          u = n.apdex;
        if (!t) return {};
        var a = t.sample_rate,
          c = t.sample_granularity,
          f = t.include_users,
          s = t.rules;
        return {
          sample: {
            include_users: f,
            sample_rate: a * (void 0 === i ? 1 : i),
            sample_granularity: void 0 === c ? eV : c,
            rules: (void 0 === s ? [] : s).reduce(function (n, e) {
              var t = e.name,
                r = e.enable,
                o = e.sample_rate,
                i = e.conditional_sample_rules;
              return (
                (n[t] = {
                  enable: r,
                  sample_rate: o,
                  conditional_sample_rules: i,
                }),
                n
              );
            }, {}),
          },
          plugins: {
            heatmap: null != (e = null == r ? void 0 : r.heatmap) && e,
          },
          apdex: u,
          serverTimestamp: o,
        };
      }
      var tn = function (n) {
          var e,
            t,
            r = 0,
            o = 0,
            i = !1,
            u = function () {
              (f(), t && t(), (t = void 0), (r = 0), (o = 0));
            },
            a = function () {
              !i &&
                r &&
                ((i = !0),
                n(function () {
                  ((i = !1), r && !e && c(r));
                }));
            },
            c = function (n) {
              (f(),
                (o = Date.now() + n),
                (e = setTimeout(function () {
                  ((e = void 0), (o = 0), a());
                }, n)));
            },
            f = function () {
              (e && clearTimeout(e), (e = void 0));
            };
          return [
            function (n) {
              var e =
                "number" == typeof n && isFinite(n) && n > 0
                  ? Math.max(1e3 * n, 6e5)
                  : 0;
              if (!e) return u();
              ((r = e),
                t ||
                  (t = k(en)[0](function (n) {
                    n || i || !r || !o || Date.now() < o || (f(), (o = 0), a());
                  })),
                c(r));
            },
            u,
          ];
        },
        te = function (n, e) {
          return (
            void 0 === e && (e = ez),
            (n && n.indexOf("//") >= 0 ? "" : "https://") + n + e
          );
        },
        tt = function (n, e) {
          return (
            void 0 === e && (e = eF),
            (n && n.indexOf("//") >= 0 ? "" : "https://") + n + e
          );
        },
        tr = function () {
          return D();
        },
        to = function (n) {
          var e = [];
          return (
            (n.observe = function (n) {
              e.push(n);
            }),
            (n.push = function () {
              for (var t, r = [], o = 0; o < arguments.length; o++)
                r[o] = arguments[o];
              return (
                r.forEach(function (n) {
                  e.forEach(function (e) {
                    return e(n);
                  });
                }),
                (t = [].push).call.apply(t, u([n], i(r), !1))
              );
            }),
            n
          );
        },
        ti = function () {
          var n,
            e,
            t,
            r = K(),
            o = V();
          if (r && o)
            return (
              (null ==
              (t =
                null ==
                (e =
                  null ==
                  (n = (function () {
                    if (!document) return null;
                    if (document.currentScript) return document.currentScript;
                    try {
                      throw Error();
                    } catch (f) {
                      var n = 0,
                        e = /at\s+(.*)\s+\((.*):(\d*):(\d*)\)/i.exec(f.stack),
                        t = (e && e[2]) || !1,
                        r = (e && e[3]) || 0,
                        o = document.location.href.replace(
                          document.location.hash,
                          "",
                        ),
                        i = "",
                        u = document.getElementsByTagName("script");
                      if (t === o) {
                        var a = document.documentElement.outerHTML,
                          c = RegExp(
                            "(?:[^\\n]+?\\n){0," +
                              (r - 2) +
                              "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*",
                            "i",
                          );
                        i = a.replace(c, "$1").trim();
                      }
                      for (; n < u.length; n++)
                        if (
                          "interactive" === u[n].readyState ||
                          u[n].src === t ||
                          (t === o &&
                            u[n].innerHTML &&
                            u[n].innerHTML.trim() === i)
                        )
                          return u[n];
                      return null;
                    }
                  })())
                    ? void 0
                    : n.getAttribute("src"))
                  ? void 0
                  : e.match(/globalName=(.+)$/))
                ? void 0
                : t[1]) || "Slardar"
            );
        },
        tu = function () {
          var n = K(),
            e = ti();
          if (n && e) return n[e];
        },
        ta = function (n) {
          return eW + n;
        },
        tc = function (n, e) {
          return eW + n + "::setting::" + e;
        },
        tf = function (n, e) {
          try {
            var t = localStorage.getItem(n);
            if (!t || !nv() || "{" !== t[0]) return;
            ng(n, JSON.parse(t), e);
          } catch (n) {}
        },
        ts = function (n, e) {
          void 0 === n && (n = "");
          var t = { userId: D(), deviceId: D() };
          if (e <= 0) return t;
          var r = ta(n);
          tf(r, e);
          var o = np(r);
          return {
            userId: (null == o ? void 0 : o.userId) || t.userId,
            deviceId: (null == o ? void 0 : o.deviceId) || t.deviceId,
          };
        },
        tl = function (n) {
          return (void 0 === n && (n = ""), !!np(ta(n)));
        },
        td = function (n) {
          var e = n.bid,
            t = n.userId,
            r = n.deviceId,
            o = n.storageExpires;
          ng(ta(e), { userId: t, deviceId: r }, nh(o));
        },
        tv = function (n, e) {
          return np(tc(n, e));
        },
        tp = function (n, e, t, r) {
          ng(tc(e, t), n, r);
        },
        tg = {
          get: function () {
            return this.__SLARDAR__REPALCE__HOLDER__;
          },
        },
        th = function (n) {
          var e,
            t,
            r = n,
            u = {},
            a = tg.get(),
            f = i(
              tn(function (n) {
                t_(
                  r.transport,
                  r.domain,
                  r.bid,
                  function (e) {
                    (e &&
                      e.sample &&
                      void 0 !== e.updated_at &&
                      (e.updated_at !== r.sampleConfigVersion
                        ? ((a = e), _())
                        : l(e.refresh_after)),
                      n());
                  },
                  n,
                );
              }),
              2,
            ),
            l = f[0],
            p = f[1],
            g = c,
            h = c;
          return {
            getConfig: function () {
              return r;
            },
            setConfig: function (n) {
              return (
                (u = o(o({}, u), n || {})),
                m(),
                e ||
                  ((e = n),
                  r.useLocalConfig || !r.bid
                    ? ((t = {}), g())
                    : a
                      ? _(!0)
                      : tm(
                          r.transport,
                          r.domain,
                          r.bid,
                          function (n) {
                            ((a = n), _(!0));
                          },
                          r.serverSettingStorageExpires,
                        )),
                r
              );
            },
            onChange: function (n) {
              h = n;
            },
            onReady: function (n) {
              ((g = function () {
                (td(r), n());
              }),
                t && g());
            },
            destroy: function () {
              p();
            },
          };
          function m() {
            var e = o(o(o({}, n), t || {}), u);
            ((e.plugins = (function () {
              for (var n = [], e = 0; e < arguments.length; e++)
                n[e] = arguments[e];
              for (var t = {}, r = 0; r < n.length; )
                t = (function n(e, t) {
                  var r = o({}, e);
                  for (var i in t)
                    Object.prototype.hasOwnProperty.call(t, i) &&
                      void 0 !== t[i] &&
                      (s(t[i]) && d(t[i])
                        ? (r[i] = n(s(e[i]) ? e[i] : {}, t[i]))
                        : v(t[i]) && v(e[i])
                          ? (r[i] = (function e(t, r) {
                              var o = v(t) ? t : [],
                                i = v(r) ? r : [];
                              return Array.prototype.concat
                                .call(o, i)
                                .map(function (t) {
                                  return t instanceof RegExp
                                    ? t
                                    : s(t) && d(t)
                                      ? n({}, t)
                                      : v(t)
                                        ? e([], t)
                                        : t;
                                });
                            })(e[i], t[i]))
                          : (r[i] = t[i]));
                  return r;
                })(t, n[r++]);
              return t;
            })(
              n.plugins,
              (null == t ? void 0 : t.plugins) || {},
              u.plugins || {},
            )),
              (e.sample = ty(
                ty(n.sample, null == t ? void 0 : t.sample),
                u.sample,
              )),
              (e.sampleConfigVersion = (null == a ? void 0 : a.sample)
                ? a.updated_at
                : void 0),
              (r = e),
              h());
          }
          function _(n) {
            ((t = e9(a)), m(), l(a && a.refresh_after), n && g());
          }
        };
      function tm(n, e, t, r, o) {
        void 0 === o && (o = 0);
        var i,
          u = K(),
          a = tv(t, e),
          c = 0,
          f = !1;
        function s() {
          (c++,
            t_(
              n,
              e,
              t,
              function (n) {
                return l(n, !0);
              },
              d,
            ));
        }
        function l(n, u) {
          f ||
            ((f = !0),
            u && o && tp(n, t, e, o),
            i && (i(), (i = void 0)),
            r(n));
        }
        function d(n) {
          var e, t, r;
          if (a) return l(a, !1);
          if (
            ((r = n),
            !(c >= 3) &&
              "RequestNetworkError" === r.name &&
              m(["slow-2g", "2g"], J($())) &&
              u)
          )
            return void u.setTimeout(s, 2e3);
          if (
            ((e = K()) && "navigator" in e && "onLine" in e.navigator
              ? function () {
                  return !e.navigator.onLine;
                }
              : function () {
                  return !1;
                })()
          ) {
            i =
              (t = K()) && "addEventListener" in t
                ? nu(t, "online", s)
                : function () {};
            return;
          }
          return l({ sample: { sample_rate: 0.001 } }, !1);
        }
        s();
      }
      function t_(n, e, t, r, o) {
        n.get({
          withCredentials: !0,
          url: tt(e) + "?bid=" + t + "&store=1",
          success: function (n) {
            r(n.data || {});
          },
          fail: o,
        });
      }
      function ty(n, e) {
        if (!n || !e) return n || e;
        var t = o(o({}, n), e);
        return (
          (t.include_users = u(
            u([], i(n.include_users || []), !1),
            i(e.include_users || []),
            !1,
          )),
          (t.rules = u(
            u([], i(Object.keys(n.rules || {})), !1),
            i(Object.keys(e.rules || {})),
            !1,
          ).reduce(function (t, r) {
            var a, c;
            return (
              r in t ||
                (r in (n.rules || {}) && r in (e.rules || {})
                  ? ((t[r] = o(o({}, n.rules[r]), e.rules[r])),
                    (t[r].conditional_sample_rules = u(
                      u([], i(n.rules[r].conditional_sample_rules || []), !1),
                      i(e.rules[r].conditional_sample_rules || []),
                      !1,
                    )))
                  : (t[r] =
                      (null == (a = n.rules) ? void 0 : a[r]) ||
                      (null == (c = e.rules) ? void 0 : c[r]))),
              t
            );
          }, {})),
          t
        );
      }
      var tb = {
          build: function (n) {
            return {
              ev_type: n.ev_type,
              payload: n.payload,
              common: o(o({}, n.extra || {}), n.overrides || {}),
            };
          },
        },
        tE = function (n, e) {
          var t = e || {},
            r = t.pid,
            i = t.viewId,
            u = {
              url: Z(),
              timestamp: W(),
              sdk_version: eU,
              sdk_name: eG,
              pid: void 0 === r ? "" : r,
              view_id: void 0 === i ? "" : i,
            };
          return o(o({}, n), { extra: o(o({}, u), n.extra || {}) });
        },
        tx = function (n) {
          (n.on("report", function (e) {
            return tE(e, n.config());
          }),
            n.on("init", function () {
              var e = n.config(),
                t = e.pid,
                r = e.viewId,
                i = n.getPreStartQueue();
              i.forEach(function (n, e) {
                var u = n.extra || {};
                i[e] = o(o({}, n), {
                  extra: o(o({}, u), {
                    pid: u.pid || t,
                    view_id: u.view_id || r,
                  }),
                });
              });
            }));
        },
        tS = {
          sri: "reportSri",
          st: "reportResourceError",
          err: "captureException",
          reject: "captureException",
        },
        tw = function (n) {
          return Object.keys(n).reduce(function (n, e) {
            return ((n[e] = []), n);
          }, {});
        },
        tO = function (n) {
          return Object.keys(n).reduce(function (e, t) {
            return (e[n[t]] ? e[n[t]].push(t) : (e[n[t]] = [t]), e);
          }, {});
        },
        tR = function (n, e, t) {
          return function (r, i, u, a) {
            (void 0 === u && (u = W()), void 0 === a && (a = location.href));
            var c,
              f = o(o({}, no(n)), { url: a, timestamp: u });
            e[r] &&
              (n[t[r]]
                ? ni(
                    n,
                    f,
                  )(function () {
                    n[t[r]](i);
                  })
                : null == (c = e[r]) || c.push([i, f]));
          };
        },
        tI = function (n, e, t) {
          return function (r) {
            r in t &&
              t[r].forEach(function (t) {
                var o;
                (null == (o = e[t]) ||
                  o.forEach(function (e) {
                    var t = i(e, 2),
                      o = t[0];
                    ni(
                      n,
                      t[1],
                    )(function () {
                      n[r](o);
                    });
                  }),
                  (e[t] = null));
              });
          };
        },
        tT = function (n, e) {
          return "err" === e
            ? !1 !==
                y(n, "plugins." + n8 + ".onerror", function (n, e) {
                  return n[e];
                })
            : "reject" !== e ||
                !1 !==
                  y(
                    n,
                    "plugins." + n8 + ".onunhandledrejection",
                    function (n, e) {
                      return n[e];
                    },
                  );
        },
        tj = function (n, e) {
          void 0 === e && (e = tS);
          var t,
            r = tw(e),
            o = tO(e),
            u = tR(n, r, e);
          ((null == (t = n.p) ? void 0 : t.a) &&
            "observe" in n.p.a &&
            n.p.a.observe(function (e) {
              var t = i(e, 5);
              t[0];
              var r = t[1],
                o = t[2],
                a = t[3],
                c = t[4];
              tT(n.config(), r) && u(r, o, a, c);
            }),
            n.on("init", function () {
              var e,
                t = n.config();
              (null == (e = n.p) ||
                e.a.forEach(function (n) {
                  var e = i(n, 5);
                  e[0];
                  var r = e[1],
                    o = e[2],
                    a = e[3],
                    c = e[4];
                  tT(t, r) && u(r, o, a, c);
                }),
                n.p && n.p.a && (n.p.a.length = 0),
                n.provide("precollect", function (n, e, r, o) {
                  (void 0 === r && (r = W()),
                    void 0 === o && (o = location.href),
                    tT(t, n) && u(n, e, r, o));
                }));
            }),
            n.on("provide", tI(n, r, o)));
        },
        tA = function (n) {
          var e = i(n, 2),
            t = e[0],
            r = e[1];
          return {
            ev_type: nC,
            payload: { error: n7(t), breadcrumbs: [], extra: r || {} },
            extra: { bid: "slardar_sdk" },
          };
        },
        tC = function (n, e) {
          void 0 === e && (e = 0.001);
          var t = nt(K());
          !t ||
            (t.errors || (t.errors = []),
            "observe" in t.errors ||
              (j(e) &&
                ((t.errors = to(t.errors)),
                t.errors.forEach(function (e) {
                  n.report(tA(e));
                }),
                t.errors.observe(function (e) {
                  n.report(tA(e));
                }))));
        },
        tD = function (n) {
          var e,
            t = !1;
          n.on("init", function () {
            ((e = new Date().getTime()),
              n.on("config", function () {
                var r,
                  i = null == (r = n.config()) ? void 0 : r.serverTimestamp;
                if (!(isNaN(i) || 0 >= Number(i)) && !t) {
                  t = !0;
                  var u = new Date().getTime();
                  if (u - e < 700 && i) {
                    var a = i - (u + e) / 2;
                    !isNaN(a) &&
                      (a > 0 || a < -6e5) &&
                      n.on("beforeBuild", function (n) {
                        var e;
                        return o(o({}, n), {
                          extra: o(o({}, null != (e = n.extra) ? e : {}), {
                            sdk_offset: null != a ? a : 0,
                          }),
                        });
                      });
                  }
                }
              }));
          });
        },
        tP = function (n, e) {
          var t = {};
          return (
            (t.bid = e.bid),
            (t.user_id = e.userId),
            (t.device_id = e.deviceId),
            (t.session_id = e.sessionId),
            (t.release = e.release),
            (t.env = e.env),
            o(o({}, n), { extra: o(o({}, t), n.extra || {}) })
          );
        },
        tL = function (n) {
          n.on("beforeBuild", function (e) {
            return tP(e, n.config());
          });
        },
        tN = function (n) {
          n.on("start", function () {
            var e = n.config().bid,
              t = n.getSender();
            t.setEndpoint(t.getEndpoint() + "?biz_id=" + e);
          });
        },
        tk = function (n) {
          var e = nh(n.storageExpires),
            t = ts(n.bid, e);
          return {
            bid: "",
            pid: "",
            viewId: ei("_"),
            userId: t.userId,
            deviceId: t.deviceId,
            storageExpires: e,
            serverSettingStorageExpires: 0,
            sessionId: tr(),
            domain: eH,
            pluginBundle: {
              name: "commonMonitors",
              plugins: [
                "breadcrumb",
                "jsError",
                "performance",
                "resourceError",
                "resource",
              ],
            },
            pluginPathPrefix: eB,
            plugins: {
              ajax: { ignoreUrls: eK },
              fetch: { ignoreUrls: eK },
              breadcrumb: {},
              pageview: {},
              jsError: {},
              resource: {},
              resourceError: {},
              performance: {},
              tti: {},
              fmp: {},
              blankScreen: !1,
              heatmap: !1,
            },
            release: "",
            env: "production",
            sample: e$,
            transport: eq(),
          };
        },
        tM = function (n) {
          var e,
            t,
            r = void 0 === n ? {} : n,
            o = r.createSender,
            c =
              void 0 === o
                ? function (n) {
                    var e, t, r;
                    return (
                      (r = (t = (function (n) {
                        var e,
                          t,
                          r = n.transport,
                          o = n.endpoint,
                          i = n.size,
                          u = void 0 === i ? 10 : i,
                          c = n.wait,
                          f = void 0 === c ? 1e3 : c,
                          s = [],
                          l = 0;
                        function d() {
                          if (s.length) {
                            var n = this.getBatchData();
                            (r.post({
                              url: o,
                              data: n,
                              fail: function (t) {
                                e && e(t, n);
                              },
                              success: function () {
                                t && t(n);
                              },
                            }),
                              (s = []));
                          }
                        }
                        return {
                          getSize: function () {
                            return u;
                          },
                          getWait: function () {
                            return f;
                          },
                          setSize: function (n) {
                            u = n;
                          },
                          setWait: function (n) {
                            f = n;
                          },
                          getEndpoint: function () {
                            return o;
                          },
                          setEndpoint: function (n) {
                            o = n;
                          },
                          send: function (n) {
                            (s.push(n),
                              s.length >= u && d.call(this),
                              clearTimeout(l),
                              (l = setTimeout(d.bind(this), f)));
                          },
                          flush: function () {
                            (clearTimeout(l), d.call(this));
                          },
                          getBatchData: function () {
                            return s.length ? a(s) : "";
                          },
                          clear: function () {
                            (clearTimeout(l), (s = []));
                          },
                          fail: function (n) {
                            e = n;
                          },
                          success: function (n) {
                            t = n;
                          },
                        };
                      })(
                        (e = {
                          size: 20,
                          endpoint: te(n.domain),
                          transport: n.transport,
                        }),
                      )).send),
                      nf(function () {
                        if (e.transport.useBeacon) {
                          var n = eN(),
                            o = t.getBatchData();
                          (o && (n.post(t.getEndpoint(), o), t.clear()),
                            (t.send = function (e) {
                              n.post(t.getEndpoint(), a([e]));
                            }),
                            ns(function () {
                              t.send = r;
                            }));
                        } else t.flush();
                      }),
                      t
                    );
                  }
                : o,
            f = r.builder,
            l = r.createDefaultConfig,
            d = (function (n) {
              var e,
                t,
                r,
                o,
                a,
                c,
                f = n.builder,
                l = n.createSender,
                d = n.createDefaultConfig,
                v = n.createConfigManager,
                p = n.userConfigNormalizer,
                g = n.initConfigNormalizer,
                h = n.validateInitConfig,
                y = {};
              H.forEach(function (n) {
                return (y[n] = []);
              });
              var b = !1,
                E = !1,
                x = !1,
                S = [],
                w = [],
                O =
                  ((e = !1),
                  (t = {}),
                  (r = function (n) {
                    (n.length &&
                      n.forEach(function (n) {
                        try {
                          n();
                        } catch (n) {}
                      }),
                      (n.length = 0));
                  }),
                  {
                    set: function (n, o, i) {
                      (t[n] ? t[n].push([o, i]) : (t[n] = [[o, i]]), e && r(i));
                    },
                    has: function (n) {
                      return !!t[n];
                    },
                    remove: (o = function (n) {
                      (t[n] &&
                        t[n].forEach(function (n) {
                          r(n[1]);
                        }),
                        (t[n] = void 0));
                    }),
                    removeByEvType: function (n) {
                      Object.keys(t).forEach(function (e) {
                        t[e] &&
                          t[e].forEach(function (e) {
                            e[0] === n && r(e[1]);
                          });
                      });
                    },
                    clear: function () {
                      ((e = !0),
                        Object.keys(t).forEach(function (n) {
                          o(n);
                        }));
                    },
                  }),
                R = {
                  getBuilder: function () {
                    return f;
                  },
                  getSender: function () {
                    return a;
                  },
                  getPreStartQueue: function () {
                    return S;
                  },
                  init: function (n) {
                    if (b) return void T("already inited");
                    if (n && s(n) && h(n)) {
                      var e = d(n);
                      if (!e) throw Error("defaultConfig missing");
                      var t = g(n);
                      if (
                        ((c = v(e)).setConfig(t),
                        c.onChange(function () {
                          I("config");
                        }),
                        !(a = l(c.getConfig())))
                      )
                        throw Error("sender missing");
                      ((b = !0), I("init", !0));
                    } else throw Error("invalid InitConfig, init failed");
                  },
                  set: function (n) {
                    b &&
                      n &&
                      s(n) &&
                      (I("beforeConfig", !1, n), null == c || c.setConfig(n));
                  },
                  config: function (n) {
                    if (b)
                      return (
                        n &&
                          s(n) &&
                          (I("beforeConfig", !1, n),
                          null == c || c.setConfig(p(n))),
                        null == c ? void 0 : c.getConfig()
                      );
                  },
                  provide: function (n, e) {
                    m(w, n)
                      ? T("cannot provide " + n + ", reserved")
                      : ((R[n] = e), I("provide", !1, n));
                  },
                  start: function () {
                    !b ||
                      E ||
                      null == c ||
                      c.onReady(function () {
                        var n;
                        ((E = !0),
                          I("start", !0),
                          (n = R.getPreStartQueue()).forEach(function (n) {
                            return R.build(n);
                          }),
                          (n.length = 0));
                      });
                  },
                  report: function (n) {
                    if (n) {
                      var e = C(y.beforeReport)(n);
                      if (e) {
                        var t = C(y.report)(e);
                        if (t) {
                          if (E) this.build(t);
                          else if ((S.push(t), !(S.length < 500))) {
                            var r = S.splice(0, 50);
                            R.savePreStartDataToDb && R.savePreStartDataToDb(r);
                          }
                        }
                      }
                    }
                  },
                  build: function (n) {
                    if (!E) return;
                    var e = C(y.beforeBuild)(n);
                    if (e) {
                      var t = f.build(e);
                      if (t) {
                        var r = C(y.build)(t);
                        r && this.send(r);
                      }
                    }
                  },
                  send: function (n) {
                    if (E) {
                      var e = C(y.beforeSend)(n);
                      e && (a.send(e), I("send", !1, e));
                    }
                  },
                  destroy: function () {
                    var n;
                    (null == (n = null == c ? void 0 : c.destroy) || n.call(c),
                      O.clear(),
                      (x = !0),
                      (S.length = 0),
                      I("beforeDestroy", !0));
                  },
                  on: function (n, e) {
                    if (
                      ("init" === n && b) ||
                      ("start" === n && E) ||
                      ("beforeDestroy" === n && x)
                    )
                      try {
                        e();
                      } catch (n) {}
                    else y[n] && y[n].push(e);
                  },
                  off: function (n, e) {
                    y[n] && (y[n] = _(y[n], e));
                  },
                  destroyAgent: O,
                };
              return ((w = Object.keys(R)), R);
              function I(n, e) {
                void 0 === e && (e = !1);
                for (var t = [], r = 2; r < arguments.length; r++)
                  t[r - 2] = arguments[r];
                (y[n].forEach(function (n) {
                  try {
                    n.apply(void 0, u([], i(t), !1));
                  } catch (n) {}
                }),
                  e && (y[n].length = 0));
              }
            })({
              validateInitConfig: e7,
              initConfigNormalizer: e4,
              userConfigNormalizer: e8,
              createSender: c,
              builder: void 0 === f ? tb : f,
              createDefaultConfig: void 0 === l ? tk : l,
              createConfigManager: th,
            });
          (tC(d), B(d));
          var v = nt(K());
          ((e = (v && v.subject) || {}),
            (t = {}),
            d.provide("setFilter", function (n, e) {
              (t[n] || (t[n] = []), t[n].push(e));
            }),
            d.provide("initSubject", function (n) {
              var r = i(n, 2),
                o = r[0],
                u = r[1],
                a = o.split("_")[0],
                c = !!a && t[a];
              return (e[o] ||
                (e[o] = k(u, function () {
                  e[o] = void 0;
                })),
              c)
                ? F(d, [o, M(e[o], c)])
                : e[o];
            }),
            d.provide("getSubject", function (n) {
              return e[n];
            }),
            d.provide("privateSubject", {}),
            tD(d),
            tL(d),
            tx(d),
            eR(d),
            tN(d));
          var p = U(d, no, function (n, e, t) {
            return ni(
              n,
              e,
            )(function () {
              var n = i(t),
                e = n[0],
                r = n.slice(1);
              d[e].apply(d, u([], i(r), !1));
            });
          });
          return (
            p.on("init", function () {
              var n = [],
                e = function (e) {
                  e.forEach(function (e) {
                    var t = e.name;
                    m(n, t) ||
                      (n.push(t),
                      e.setup(p),
                      e6 && e6(t, e.setup),
                      p.destroyAgent.set(t, t, [
                        function () {
                          ((n = _(n, t)), e.tearDown && e.tearDown());
                        },
                      ]));
                  });
                };
              p.provide("applyIntegrations", e);
              var t = p.config();
              t && t.integrations && e(t.integrations);
            }),
            z(p),
            p
          );
        },
        tq =
          (((r = {})[eE] = function (n) {
            n.on("init", function () {
              var e,
                t = null == (e = n.config()) ? void 0 : e.plugins[eE];
              !(function (n, e) {
                var t,
                  r = nd(e, ex);
                if (r && X()) {
                  var u = r.routeMode,
                    a = r.apdex,
                    f = n.report.bind(n),
                    s = c;
                  if (a) {
                    var l = [],
                      d = i(
                        eb(n.report.bind(n), l, [G(n, ee), G(n, et)], r),
                        4,
                      ),
                      v = d[0],
                      p = d[1],
                      g = d[2],
                      h = d[3];
                    ((f = g),
                      (s = v),
                      n.on("send", p),
                      l.push(function () {
                        return n.off("send", p);
                      }),
                      n.on("start", function () {
                        h(n.config().apdex);
                      }),
                      q(n, eE, nA, l));
                  }
                  var m = [],
                    _ = i(
                      ey(
                        f,
                        m,
                        ef(u) ? [] : [n.initSubject(er), n.initSubject(eo)],
                        o(o({}, r), {
                          initPid: null == (t = n.config()) ? void 0 : t.pid,
                          onPidUpdate: function (e) {
                            var t = ei(e);
                            (s(e, t),
                              n.set({ pid: e, viewId: t, actionId: void 0 }));
                          },
                        }),
                      ),
                      1,
                    )[0];
                  F(
                    n,
                    [
                      "f_view_0",
                      function (e, t) {
                        var r = nn(n);
                        t(c, function (n) {
                          r && n(r);
                        });
                      },
                    ],
                    -1,
                  );
                  var y = function () {
                    _(n.config().pid);
                  };
                  (n.on("config", y),
                    m.push(function () {
                      return n.off("config", y);
                    }),
                    q(n, eE, nj, m),
                    n.provide("sendPageview", _));
                }
              })(n, t);
            });
          }),
          (r[nW] = function (n) {
            n.on("init", function () {
              var e,
                t = null == (e = n.config()) ? void 0 : e.plugins[nW],
                r = nd(t, nK);
              if (r) {
                var i = [],
                  u = o(o({}, r), {
                    setContextAtReq: function () {
                      return ne(n, !0);
                    },
                    setTraceHeader: nM(r.trace),
                  }),
                  a = function () {
                    return G(n, nT);
                  };
                (u.autoWrap &&
                  nF(
                    i,
                    [
                      G(n, [
                        "xhr_0",
                        nx(XMLHttpRequest && XMLHttpRequest.prototype),
                      ]),
                      a,
                    ],
                    u,
                  ),
                  q(n, nW, nD, i),
                  n.provide("wrapXhr", function (n) {
                    function e() {
                      var e = new n();
                      return (nF(i, [k(nx(e)), a], u), e);
                    }
                    return (
                      (e.prototype = new n()),
                      [
                        "DONE",
                        "HEADERS_RECIEVED",
                        "LOADING",
                        "OPENED",
                        "UNSENT",
                      ].forEach(function (t) {
                        e[t] = n[t];
                      }),
                      e
                    );
                  }));
              }
            });
          }),
          (r[n1] = function (n) {
            n.on("init", function () {
              var e,
                t = null == (e = n.config()) ? void 0 : e.plugins[n1],
                r = nd(t, n2);
              if (r) {
                var i = [],
                  u = o(o({}, r), {
                    setContextAtReq: function () {
                      return ne(n, !0);
                    },
                    setTraceHeader: nM(r.trace),
                  }),
                  a = function () {
                    return G(n, nT);
                  };
                (u.autoWrap && nV(i, [G(n, nw), a], u),
                  q(n, n1, nD, i),
                  n.provide("wrapFetch", function (n) {
                    var e = void 0;
                    return (
                      nV(
                        i,
                        [
                          k(function (t) {
                            e = nS(n, t);
                          }),
                          a,
                        ],
                        u,
                      ),
                      e
                    );
                  }));
              }
            });
          }),
          r),
        tH = function (n) {
          void 0 === n && (n = {});
          var e = tM(n);
          return (
            eL(e),
            tj(e),
            eO(e),
            Object.keys(tq).forEach(function (n) {
              (e6(n, tq[n]), tq[n](e));
            }),
            eJ(e),
            e.provide("create", tH),
            e
          );
        },
        tB = "precollect",
        tU = tH(),
        tG = K();
      (tG &&
        (function (n, e) {
          if ("addEventListener" in n) {
            ((e.pcErr = function (t) {
              var r = (t = t || n.event).target || t.srcElement || {};
              r instanceof Element || r instanceof HTMLElement
                ? e(tB, "st", {
                    tagName: r.tagName,
                    url: r.getAttribute("href") || r.getAttribute("src"),
                  })
                : e(tB, "err", t.error);
            }),
              (e.pcRej = function (t) {
                e(
                  tB,
                  "reject",
                  (t = t || n.event).reason || (t.detail && t.detail.reason),
                );
              }));
            var t = [];
            (t.push(nu(n, "error", e.pcErr, !0)),
              t.push(nu(n, "unhandledrejection", e.pcRej, !0)),
              setTimeout(function () {
                t.forEach(function (n) {
                  return n();
                });
              }, 3e5));
          }
          "PerformanceObserver" in n &&
            "PerformanceLongTaskTiming" in n &&
            ((e.pp = { entries: [] }),
            (e.pp.observer = new PerformanceObserver(function (n) {
              e.pp.entries = e.pp.entries.concat(n.getEntries());
            })),
            e.pp.observer.observe({ entryTypes: ["longtask"] }),
            setTimeout(function () {
              e.pp.observer.disconnect();
            }, 3e5));
        })(tG, tU),
        t.d(e, {
          BATCH_REPORT_PATH: () => ez,
          DEFAULT_IGNORE_PATHS: () => eK,
          DEFAULT_SAMPLE_CONFIG: () => e$,
          DEFAULT_SAMPLE_GRANULARITY: () => eV,
          DEFAULT_SENDER_SIZE: () => 20,
          DEVICE_ID_COOKIE_NAME: () => "MONITOR_DEVICE_ID",
          EV_METHOD_MAP: () => tS,
          EXTRA_INDEPENDENT_PLUGINS: () => eX,
          InjectConfigPlugin: () => tL,
          InjectEnvPlugin: () => tx,
          InjectQueryPlugin: () => tN,
          ObserveErrorPlugin: () => tC,
          PLUGINS_LOAD_PREFIX: () => eB,
          PluginMap: () => tq,
          PrecollectPlugin: () => tj,
          REPORT_DOMAIN: () => eH,
          SDK_NAME: () => eG,
          SDK_VERSION: () => eU,
          SETTINGS_DOMAIN: () => eH,
          SETTINGS_PATH: () => eF,
          STORAGE_PREFIX: () => eW,
          TimeCalibrationPlugin: () => tD,
          USER_ID_COOKIE_NAME: () => "MONITOR_WEB_ID",
          addConfigToReportEvent: () => tP,
          addEnvToSendEvent: () => tE,
          applyPlugin: () => e1,
          browserBuilder: () => tb,
          buildSelfErrorEvent: () => tA,
          configHolder: () => tg,
          createBrowserClient: () => tH,
          createBrowserConfigManager: () => th,
          createMinimalBrowserClient: () => tM,
          createStore: () => tw,
          default: () => tU,
          doesPluginExistInRegistry: () => e3,
          filterIfPluginDisabled: () => tT,
          getConsumeStored: () => tI,
          getDefaultConfig: () => tk,
          getDefaultSessionId: () => tr,
          getDefaultUserIdAndDeviceId: () => ts,
          getGlobalInstance: () => tu,
          getGlobalName: () => ti,
          getPluginFromRegistry: () => e2,
          getReportUrl: () => te,
          getServerConfig: () => tm,
          getSettingCache: () => tv,
          getSettingStorageKey: () => tc,
          getSettingsUrl: () => tt,
          getStorageKey: () => ta,
          getStoreOrConsume: () => tR,
          glueCodeForStorageSecurity: () => tf,
          hasSetStorageItem: () => tl,
          loadCombinedPlugins: () => eY,
          loadIndependentPlugins: () => eQ,
          loadNow: () => e0,
          loadPlugins: () => eZ,
          loadPluginsOnPageLoad: () => eJ,
          mergeSampleConfig: () => ty,
          normalizeInitConfig: () => e4,
          normalizeStrictFields: () => e5,
          normalizeUserConfig: () => e8,
          parseServerConfig: () => e9,
          register: () => e6,
          reverseMap: () => tO,
          setSettingCache: () => tp,
          setStorageUserIdAndDeviceId: () => td,
          toObservableArray: () => to,
          validateInitConfig: () => e7,
        }));
    },
    66517(n, e) {
      Object.defineProperty(e, "__esModule", { value: !0 });
      var t,
        r = function () {
          return (r =
            Object.assign ||
            function (n) {
              for (var e, t = 1, r = arguments.length; t < r; t++)
                for (var o in (e = arguments[t]))
                  Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
              return n;
            }).apply(this, arguments);
        };
      function o(n, e) {
        var t = "function" == typeof Symbol && n[Symbol.iterator];
        if (!t) return n;
        var r,
          o,
          i = t.call(n),
          u = [];
        try {
          for (; (void 0 === e || e-- > 0) && !(r = i.next()).done; )
            u.push(r.value);
        } catch (n) {
          o = { error: n };
        } finally {
          try {
            r && !r.done && (t = i.return) && t.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return u;
      }
      function i(n, e, t) {
        if (t || 2 == arguments.length)
          for (var r, o = 0, i = e.length; o < i; o++)
            (!r && o in e) ||
              (r || (r = Array.prototype.slice.call(e, 0, o)), (r[o] = e[o]));
        return n.concat(r || Array.prototype.slice.call(e));
      }
      var u = function (n) {
          return JSON.stringify({ ev_type: "batch", list: n });
        },
        a = function () {
          return {};
        };
      function c(n) {
        return n;
      }
      function f(n) {
        return "object" == typeof n && null !== n;
      }
      var s = Object.prototype;
      function l(n) {
        if (f(n)) {
          if ("function" == typeof Object.getPrototypeOf) {
            var e = Object.getPrototypeOf(n);
            return e === s || null === e;
          }
          return "[object Object]" === s.toString.call(n);
        }
        return !1;
      }
      function d(n) {
        return "[object Array]" === s.toString.call(n);
      }
      function v(n) {
        return "function" == typeof n;
      }
      function p(n) {
        return "number" == typeof n;
      }
      function g(n) {
        return "string" == typeof n;
      }
      function h(n, e) {
        if (!d(n) || 0 === n.length) return !1;
        for (var t = 0; t < n.length; ) {
          if (n[t] === e) return !0;
          t++;
        }
        return !1;
      }
      var m = function (n, e) {
          if (!d(n)) return n;
          var t = n.indexOf(e);
          if (t >= 0) {
            var r = n.slice();
            return (r.splice(t, 1), r);
          }
          return n;
        },
        _ = function (n, e, t) {
          for (
            var r, i = o(e.split(".")), u = i[0], a = i.slice(1);
            n && a.length > 0;
          )
            ((n = n[u]), (u = (r = o(a))[0]), (a = r.slice(1)));
          if (n) return t(n, u);
        },
        y = function (n, e) {
          var t,
            r =
              d((t = n || [])) && t.length
                ? (function (n) {
                    for (var e = [], t = n.length, r = 0; r < t; r++) {
                      var o = n[r];
                      g(o)
                        ? e.push(o.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"))
                        : o && o.source && e.push(o.source);
                    }
                    return RegExp(e.join("|"), "i");
                  })(t)
                : null;
          return !!r && r.test(e);
        };
      function b(n) {
        try {
          return g(n) ? n : JSON.stringify(n);
        } catch (n) {
          return "[FAILED_TO_STRINGIFY]:" + String(n);
        }
      }
      var E = function (n, e, t, r) {
          return (
            void 0 === r && (r = !0),
            function () {
              for (var u = [], c = 0; c < arguments.length; c++)
                u[c] = arguments[c];
              if (!n) return a;
              var f = n[e],
                s = t.apply(void 0, i([f], o(u), !1)),
                l = s;
              return (
                v(l) &&
                  r &&
                  (l = function () {
                    for (var n = [], e = 0; e < arguments.length; e++)
                      n[e] = arguments[e];
                    try {
                      return s.apply(this, n);
                    } catch (e) {
                      return v(f) && f.apply(this, n);
                    }
                  }),
                (n[e] = l),
                function (t) {
                  t || (l === n[e] ? (n[e] = f) : (s = f));
                }
              );
            }
          );
        },
        x = function (n, e, t) {
          return function () {
            for (var r = [], u = 0; u < arguments.length; u++)
              r[u] = arguments[u];
            if (!n) return a;
            var c = n[e],
              f = t.apply(void 0, i([c], o(r), !1)),
              s = f;
            return (
              v(s) &&
                (s = function () {
                  for (var n = [], e = 0; e < arguments.length; e++)
                    n[e] = arguments[e];
                  return f.apply(this, n);
                }),
              (n[e] = s),
              function () {
                s === n[e] ? (n[e] = c) : (f = c);
              }
            );
          };
        },
        S = "".padStart
          ? function (n, e) {
              return (void 0 === e && (e = 8), n.padStart(e, " "));
            }
          : function (n) {
              return n;
            },
        w = 0,
        O = function () {
          for (var n = [], e = 0; e < arguments.length; e++)
            n[e] = arguments[e];
          console.error.apply(
            console,
            i(["[SDK]", Date.now(), S("" + w++)], o(n), !1),
          );
        },
        R = 0,
        I = function () {
          for (var n = [], e = 0; e < arguments.length; e++)
            n[e] = arguments[e];
          console.warn.apply(
            console,
            i(["[SDK]", Date.now(), S("" + R++)], o(n), !1),
          );
        },
        T = function (n) {
          return Math.random() < Number(n);
        },
        j = function (n, e) {
          return n < Number(e);
        },
        A = function (n) {
          return function (e) {
            for (var t = e, r = 0; r < n.length; r++)
              if (t)
                try {
                  t = n[r](t);
                } catch (n) {
                  O(n);
                }
              else break;
            return t;
          };
        };
      function C() {
        var n = (function () {
          for (var n = Array(16), e = 0, t = 0; t < 16; t++)
            ((3 & t) == 0 && (e = 0x100000000 * Math.random()),
              (n[t] = (e >>> ((3 & t) << 3)) & 255));
          return n;
        })();
        ((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128));
        for (var e = [], t = 0; t < 256; ++t)
          e[t] = (t + 256).toString(16).substr(1);
        var r = 0;
        return [
          e[n[r++]],
          e[n[r++]],
          e[n[r++]],
          e[n[r++]],
          "-",
          e[n[r++]],
          e[n[r++]],
          "-",
          e[n[r++]],
          e[n[r++]],
          "-",
          e[n[r++]],
          e[n[r++]],
          "-",
          e[n[r++]],
          e[n[r++]],
          e[n[r++]],
          e[n[r++]],
          e[n[r++]],
          e[n[r++]],
        ].join("");
      }
      var D = function (n, e, t) {
          var r = 0;
          return -1 === t
            ? a
            : function () {
                if (n()) {
                  (r && clearTimeout(r), (r = 0));
                  return;
                }
                0 === r && (r = setTimeout(e, t));
              };
        },
        P = function (n, e) {
          var t = [];
          try {
            t = e.reduce(function (e, t) {
              try {
                var r = t(n);
                "function" == typeof r && e.push(r);
              } catch (n) {}
              return e;
            }, []);
          } catch (n) {}
          return function (n) {
            return P(n, t);
          };
        },
        L = function (n) {
          void 0 === n && (n = 3e5);
          var e,
            t = [],
            r = [],
            o = !1,
            i = D(
              function () {
                return !!t.length;
              },
              function () {
                ((o = !0),
                  e && e[0](),
                  r.forEach(function (n) {
                    return n();
                  }),
                  (r.length = 0),
                  (e = void 0));
              },
              n,
            ),
            u = function (n) {
              ((t = m(t, n)), o || i());
            };
          return {
            next: function (n) {
              return P(n, t);
            },
            complete: function (n) {
              r.push(n);
            },
            attach: function (n, t) {
              e = [n, t];
            },
            subscribe: function (n) {
              if (o) throw Error("Observer is closed");
              return (
                t.push(n),
                e && e[1] && e[1](n),
                i(),
                function () {
                  return u(n);
                }
              );
            },
            unsubscribe: u,
          };
        },
        N = function (n, e, t) {
          var r = L(t);
          try {
            (n(r.next, r.attach), e && r.complete(e));
          } catch (n) {}
          return [r.subscribe, r.unsubscribe];
        },
        k = function (n, e) {
          var t = o(n, 1)[0];
          return function (n, r) {
            var o = t(function (t) {
              return (function (n) {
                for (var t = !0, r = 0; r < e.length; r++)
                  if (t)
                    try {
                      t = e[r](n);
                    } catch (n) {
                      O(n);
                    }
                  else break;
                return t;
              })(t)
                ? n(t)
                : a;
            });
            r(function () {
              o();
            });
          };
        },
        M = function (n, e, t, r) {
          return n.destroyAgent.set(e, t, r);
        },
        q = [
          "init",
          "start",
          "config",
          "beforeDestroy",
          "provide",
          "beforeReport",
          "report",
          "beforeBuild",
          "build",
          "beforeSend",
          "send",
          "beforeConfig",
        ],
        H = function (n) {
          var e,
            t,
            o,
            i =
              ((e = {}),
              (t = {}),
              (o = {
                set: function (n, r) {
                  return ((e[n] = r), (t[n] = b(r)), o);
                },
                merge: function (n) {
                  return (
                    (e = r(r({}, e), n)),
                    Object.keys(n).forEach(function (e) {
                      t[e] = b(n[e]);
                    }),
                    o
                  );
                },
                delete: function (n) {
                  return (delete e[n], delete t[n], o);
                },
                clear: function () {
                  return ((e = {}), (t = {}), o);
                },
                get: function (n) {
                  return t[n];
                },
                toString: function () {
                  return r({}, t);
                },
              }));
          (n.provide("context", i),
            n.on("report", function (n) {
              return (
                n.extra || (n.extra = {}),
                (n.extra.context = i.toString()),
                n
              );
            }));
        },
        B = function (n, e, t) {
          var r = {},
            u = function () {
              for (var t, a = [], c = 0; c < arguments.length; c++)
                a[c] = arguments[c];
              var f = a[0];
              if (f) {
                var s,
                  l = f.split(".")[0];
                if (!(l in u)) {
                  var d = r[l] || [],
                    p = null != (t = null == e ? void 0 : e(n)) ? t : {};
                  (d.push(i([p], o(a), !1)), (r[l] = d));
                  return;
                }
                return (
                  (s = [].slice.call(a, 1)),
                  _(u, f, function (n, e) {
                    if (n && e in n && v(n[e]))
                      try {
                        return n[e].apply(n, s);
                      } catch (n) {
                        return;
                      }
                  })
                );
              }
            };
          for (var a in (E(n, "provide", function (e) {
            return function (t, r) {
              ((u[t] = r), e.call(n, t, r));
            };
          })(),
          n))
            Object.prototype.hasOwnProperty.call(n, a) && (u[a] = n[a]);
          return (
            n.on("provide", function (e) {
              r[e] &&
                (r[e].forEach(function (e) {
                  var r = o(e),
                    i = r[0],
                    u = r.slice(1);
                  null == t || t(n, i, u);
                }),
                (r[e] = null));
            }),
            u
          );
        };
      function U(n, e) {
        return n.initSubject(e);
      }
      function G(n, e, t) {
        var r = o(e, 2),
          i = r[0],
          u = r[1],
          a = n.privateSubject || {};
        return (
          a[i] ||
            (a[i] = N(
              u,
              function () {
                a[i] = void 0;
              },
              t,
            )),
          a[i]
        );
      }
      var F = function (n) {
          try {
            "object" == typeof window &&
              f(window) &&
              window.__SLARDAR_DEVTOOLS_GLOBAL_HOOK__ &&
              window.__SLARDAR_DEVTOOLS_GLOBAL_HOOK__.push(n);
          } catch (n) {}
        },
        z = function () {
          return Date.now();
        };
      function W() {
        if ("object" == typeof window && f(window)) return window;
      }
      function K() {
        if ("object" == typeof document && f(document)) return document;
      }
      function V() {
        return W() && window.location;
      }
      function X() {
        var n = (function () {
          if (W() && "navigator" in window) return window.navigator;
        })();
        if (n) return n.connection || n.mozConnection || n.webkitConnection;
      }
      function $(n) {
        return (
          (null == n ? void 0 : n.effectiveType) ||
          (null == n ? void 0 : n.type) ||
          ""
        );
      }
      function J(n) {
        var e = K();
        if (!e || !n) return "";
        var t = e.createElement("a");
        return ((t.href = n), t.href);
      }
      function Y(n) {
        var e = K();
        if (!e || !n)
          return {
            url: n,
            protocol: "",
            domain: "",
            query: "",
            path: "",
            hash: "",
          };
        var t = e.createElement("a");
        t.href = n;
        var r = t.pathname || "/";
        return (
          "/" !== r[0] && (r = "/" + r),
          {
            url: t.href,
            protocol: t.protocol.slice(0, -1),
            domain: t.hostname,
            query: t.search.substring(1),
            path: r,
            hash: t.hash,
          }
        );
      }
      function Q() {
        var n = W() && V();
        return n ? n.href : "";
      }
      var Z = function (n) {
          var e,
            t = { pid: (e = n.config()).pid, view_id: e.viewId, url: Q() };
          return ((t.context = n.context ? n.context.toString() : {}), t);
        },
        nn = function (n, e) {
          void 0 === e && (e = !1);
          var t = Z(n);
          return (
            e && (t.timestamp = z()),
            function (e) {
              n.report(r(r({}, e), { overrides: t }));
            }
          );
        },
        ne = function (n) {
          if (n)
            return (
              n.__SLARDAR_REGISTRY__ ||
                (n.__SLARDAR_REGISTRY__ = {
                  Slardar: { plugins: [], errors: [], subject: {} },
                }),
              n.__SLARDAR_REGISTRY__.Slardar
            );
        },
        nt = function () {
          for (var n = [], e = 0; e < arguments.length; e++)
            n[e] = arguments[e];
          var t = ne(W());
          t && (t.errors || (t.errors = []), t.errors.push(n));
        },
        nr = function (n) {
          var e = { url: Q(), timestamp: z() },
            t = n.config();
          return (
            (null == t ? void 0 : t.pid) && (e.pid = t.pid),
            (null == n ? void 0 : n.context) &&
              (e.context = n.context.toString()),
            e
          );
        },
        no = function (n, e) {
          return function (t) {
            var r = function (n) {
              return ((n.overrides = e), n);
            };
            (n.on("report", r), t(), n.off("report", r));
          };
        },
        ni = function (n, e, t, r) {
          return (
            void 0 === r && (r = !1),
            n.addEventListener(e, t, r),
            function () {
              n.removeEventListener(e, t, r);
            }
          );
        },
        nu = function (n, e, t, r) {
          return (
            void 0 === r && (r = !1),
            n.addEventListener(e, t, r),
            function () {
              n.removeEventListener(e, t, r);
            }
          );
        },
        na = function (n) {
          var e = !1;
          return [
            function (t) {
              !e && ((e = !0), n && n(t));
            },
          ];
        },
        nc = function (n) {
          var e = W();
          if (e) {
            var t = o(na(n), 1)[0];
            ["unload", "beforeunload", "pagehide"].forEach(function (n) {
              ni(e, n, t, !1);
            });
          }
        },
        nf = function (n) {
          var e = K(),
            t = W();
          if (e && t) {
            var r = a;
            r = nu(
              e,
              "visibilitychange",
              function () {
                "visible" === e.visibilityState && (n(), r());
              },
              !0,
            );
          }
        },
        ns = function (n, e) {
          var t,
            r = K();
          if (r) {
            var o = r.createElement("script");
            ((o.src = n),
              (o.crossOrigin = "anonymous"),
              (o.onload = e),
              null == (t = r.head) || t.appendChild(o));
          }
        },
        nl = function (n, e) {
          return f(n) ? r(r({}, e), n) : !!n && e;
        },
        nd = function () {
          return !!btoa && !!atob;
        },
        nv = function (n) {
          try {
            var e = localStorage.getItem(n),
              t = e;
            e &&
              "string" == typeof e &&
              (t = JSON.parse(nd() ? decodeURI(atob(e)) : e));
            var r = t,
              o = r.expires,
              i = (function (n, e) {
                var t = {};
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) &&
                    0 > e.indexOf(r) &&
                    (t[r] = n[r]);
                if (
                  null != n &&
                  "function" == typeof Object.getOwnPropertySymbols
                )
                  for (
                    var o = 0, r = Object.getOwnPropertySymbols(n);
                    o < r.length;
                    o++
                  )
                    0 > e.indexOf(r[o]) &&
                      Object.prototype.propertyIsEnumerable.call(n, r[o]) &&
                      (t[r[o]] = n[r[o]]);
                return t;
              })(r, ["expires"]);
            return o >= z() ? i : void 0;
          } catch (n) {
            return;
          }
        },
        np = function (n, e, t) {
          if (!(t <= 0))
            try {
              var o;
              localStorage.setItem(
                n,
                ((o = JSON.stringify(r(r({}, e), { expires: z() + t }))),
                nd() ? btoa(encodeURI(o)) : o),
              );
            } catch (n) {}
        },
        ng = function (n) {
          return !1 === n ? 0 : !0 !== n && void 0 !== n && p(n) ? n : 7776e6;
        },
        nh = function (n) {
          if ("object" == typeof window && window.__perfsee__) {
            var e,
              t = {};
            return (
              null == (e = Error.captureStackTrace) || e.call(Error, t, n),
              t.stack
            );
          }
        },
        nm = function () {
          var n = RegExp(
            "\\/monitor_web\\/collect|\\/monitor_browser\\/collect\\/batch",
            "i",
          );
          return function (e) {
            return n.test(e);
          };
        },
        n_ = function (n) {
          return function () {
            for (var e, t = [], r = 0; r < arguments.length; r++)
              t[r] = arguments[r];
            return (
              (e = o(t, 2)),
              (this._method = e[0]),
              (this._url = e[1]),
              n.apply(this, t)
            );
          };
        },
        ny = function (n) {
          return function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            this._reqHeaders = this._reqHeaders || {};
            var r = o(e, 2),
              i = r[0],
              u = r[1];
            return ((this._reqHeaders[i] = u), n && n.apply(this, e));
          };
        },
        nb = function (n, e) {
          var t = nm();
          return function () {
            for (var r = [], o = 0; o < arguments.length; o++)
              r[o] = arguments[o];
            if (
              ((this._start = z()),
              (this._data = null == r ? void 0 : r[0]),
              !t(this._url))
            ) {
              var i,
                u = e([this._method, this._url, this._start, this]);
              ((i = this),
              x(i, "onreadystatechange", function (n) {
                return function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                  return (4 === this.readyState && u(i), n && n.apply(this, e));
                };
              }))();
            }
            return n.apply(this, r);
          };
        },
        nE = function (n) {
          return function (e, t) {
            if (n) {
              var r = [];
              (r.push(x(n, "open", n_)()),
                r.push(x(n, "setRequestHeader", ny)()),
                r.push(x(n, "send", nb)(e)),
                t(function () {
                  r.forEach(function (n) {
                    return n();
                  });
                }));
            }
          };
        },
        nx = function (n, e) {
          return function (t, r) {
            void 0 === r && (r = {});
            var o = e([t, r]),
              i = n(t, r);
            return (
              i.then(
                function (n) {
                  o(n);
                },
                function () {
                  o(void 0);
                },
              ),
              i
            );
          };
        },
        nS = [
          "fetch_0",
          function (n, e) {
            var t = W();
            if (t && fetch) {
              var r = [];
              (r.push(x(t, "fetch", nx)(n)),
                e(function () {
                  r.forEach(function (n) {
                    return n();
                  });
                }));
            }
          },
        ],
        nw = ["resource"],
        nO = function (n, e, t) {
          var r =
            n &&
            new n(function (n, r) {
              n.getEntries
                ? n.getEntries().forEach(function (n, t, o) {
                    return e(n, t, o, r);
                  })
                : t && t();
            });
          return [
            function (e) {
              if (!n || !r) return t && t();
              try {
                r.observe({ entryTypes: e });
              } catch (n) {
                return t && t();
              }
            },
            function (e, o) {
              if (!n || !r) return t && t();
              try {
                var i = { type: e, buffered: !0 };
                (void 0 === o || (i.durationThreshold = o), r.observe(i));
              } catch (n) {
                return t && t();
              }
              r.observe({ type: e, buffered: !1 });
            },
            function () {
              return r && r.disconnect();
            },
          ];
        },
        nR = function (n, e, t) {
          var r = o(nO(n, e), 3),
            i = r[0],
            u = r[2];
          return (i(t), u);
        },
        nI = [
          "resource_0",
          function (n, e) {
            var t = (function () {
              if (W() && v(window.PerformanceObserver))
                return window.PerformanceObserver;
            })();
            if (t) {
              var r = nm();
              e(
                nR(
                  t,
                  function (e) {
                    r(e.name) || n(e);
                  },
                  nw,
                ),
              );
            }
          },
        ],
        nT = "pageview",
        nj = "session",
        nA = "js_error",
        nC = "http",
        nD = "custom",
        nP = "action",
        nL = { sampleRate: 1, origins: [] },
        nN = function () {
          var n = window && (window.crypto || window.msCrypto);
          if (void 0 !== n && n.getRandomValues) {
            var e = new Uint16Array(8);
            n.getRandomValues(e);
            var t = function (n) {
              for (var e = n.toString(16); e.length < 4; ) e = "0" + e;
              return e;
            };
            return (
              t(e[0]) +
              t(e[1]) +
              t(e[2]) +
              t(e[3]) +
              t(e[4]) +
              t(e[5]) +
              t(e[6]) +
              t(e[7])
            );
          }
          return "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".replace(
            /[x]/g,
            function () {
              return ((16 * Math.random()) | 0).toString(16);
            },
          );
        },
        nk = function (n) {
          var e = nl(n, nL);
          if (e && T(e.sampleRate))
            return function (n, t) {
              var r = e.origins;
              r.length &&
                y(r, n) &&
                t(
                  "traceparent",
                  "03-" + nN() + "-" + nN().substring(16) + "-01",
                );
            };
        },
        nM = RegExp(
          "(cookie|auth|jwt|token|key|ticket|secret|credential|session|password)",
          "i",
        ),
        nq = RegExp("(bearer|session)", "i"),
        nH = function (n, e) {
          return !n || !e || nM.test(n) || nq.test(e);
        },
        nB = function (n) {
          var e = !1;
          return function (t) {
            e || ((e = !0), n(t));
          };
        },
        nU = function (n, e) {
          try {
            if (e) {
              var t = n.request.url,
                o = e(t);
              if (!o) return;
              ((n.request.url = o),
                (n.extra = r(r({}, n.extra), { original_url: t })));
            }
          } catch (n) {}
        },
        nG = function (n, e, t) {
          var r = o(e, 2),
            i = r[0],
            u = r[1],
            c = t.setTraceHeader,
            f = t.ignoreUrls,
            s = t.setContextAtReq,
            l = t.extractUrl;
          n.push(
            i[0](function (n) {
              var e,
                r = o(n, 4);
              r[0];
              var i = r[1];
              r[2];
              var d = r[3];
              if (!i) return a;
              var v = J(i);
              if (y(f, v)) return a;
              c &&
                c(v, function (n, e) {
                  return d.setRequestHeader(n, e);
                });
              var p = s(),
                g = void 0,
                h = u()[0](function (n) {
                  (v === n.name || (e && e === n.name)) && !g && (g = n);
                });
              return function (n) {
                e = n.responseURL;
                var r = nF(n, t);
                setTimeout(function () {
                  (g && (r.response.timing = g),
                    nU(r, l),
                    p && p({ ev_type: nC, payload: r }),
                    h());
                }, 100);
              };
            }),
          );
        },
        nF = function (n, e) {
          var t,
            r = n._method,
            i = n._reqHeaders,
            u = n._url,
            a = n._start,
            c = n._data,
            f = {
              api: "xhr",
              request: {
                url: J(u),
                method: (r || "").toLowerCase(),
                headers:
                  i &&
                  Object.keys(i).reduce(function (n, e) {
                    return (nH(e, i[e]) || (n[e.toLowerCase()] = i[e]), n);
                  }, {}),
                timestamp: a,
              },
              response: {
                status: n.status || 0,
                is_custom_error: !1,
                timestamp: z(),
              },
              duration: z() - a,
            };
          "function" == typeof n.getAllResponseHeaders &&
            (f.response.headers =
              g((t = n.getAllResponseHeaders())) && t
                ? t.split("\r\n").reduce(function (n, e) {
                    if (g(e)) {
                      var t = o(e.split(": "), 2),
                        r = t[0],
                        i = t[1];
                      nH(r, i) || (n[r.toLowerCase()] = i);
                    }
                    return n;
                  }, {})
                : {});
          var s = f.response.status,
            l = e.collectBodyOnError,
            d = e.extraExtractor;
          try {
            var v = null == d ? void 0 : d(n.response, f, c);
            (v && (f.extra = v),
              v && (f.response.is_custom_error = !0),
              l &&
                (v || s >= 400) &&
                ((f.request.body = c ? "" + c : void 0),
                (f.response.body = n.response ? "" + n.response : void 0)));
          } catch (n) {}
          return f;
        },
        nz = "ajax",
        nW = {
          autoWrap: !0,
          setContextAtReq: function () {
            return c;
          },
          ignoreUrls: [],
          collectBodyOnError: !1,
        },
        nK = function (n, e, t) {
          var r = o(e, 2),
            i = r[0],
            u = r[1],
            c = t.setTraceHeader,
            f = t.ignoreUrls,
            s = t.setContextAtReq,
            l = t.extractUrl,
            d = window.Headers,
            v = window.Request;
          v &&
            d &&
            n.push(
              i[0](function (n) {
                var e,
                  r = o(n, 2),
                  i = r[0],
                  p = r[1],
                  g = J(i instanceof v ? i.url : i);
                if (!nV(g) || y(f, g)) return a;
                c &&
                  c(g, function (n, e) {
                    return n$(n, e, i, p, v, d);
                  });
                var h = s(),
                  m = z(),
                  _ = void 0,
                  b = u()[0](function (n) {
                    (g === n.name || (e && e === n.name)) && !_ && (_ = n);
                  });
                return function (n) {
                  e = n && n.url;
                  var r = nZ(i, p, n, v, d, t, m),
                    o = nB(function (n) {
                      (_ && (n.response.timing = _),
                        nU(n, l),
                        h && h({ ev_type: nC, payload: n }),
                        b());
                    });
                  setTimeout(function () {
                    o(r);
                  }, 1e3);
                };
              }),
            );
        },
        nV = function (n) {
          if (!g(n)) return !1;
          var e = o(n.split(":"), 2),
            t = e[0];
          return !e[1] || "http" === t || "https" === t;
        },
        nX = function (n, e) {
          return n instanceof e;
        },
        n$ = function (n, e, t, o, i, u) {
          var a;
          nX(t, i)
            ? t.headers.set(n, e)
            : o.headers instanceof u
              ? o.headers.set(n, e)
              : (o.headers = r(r({}, o.headers), (((a = {})[n] = e), a)));
        },
        nJ = function (n, e, t) {
          var r = (e && e.method) || "get";
          return (nX(n, t) && (r = n.method || r), r.toLowerCase());
        },
        nY = function (n) {
          for (var e = [], t = 1; t < arguments.length; t++)
            e[t - 1] = arguments[t];
          try {
            return e.reduce(function (e, t) {
              return (
                new n(t || {}).forEach(function (n, t) {
                  return !nH(t, n) && (e[t] = n);
                }),
                e
              );
            }, {});
          } catch (n) {
            return {};
          }
        },
        nQ = function (n, e, t) {
          return nX(n, t) ? n.body : null == e ? void 0 : e.body;
        },
        nZ = function (n, e, t, r, o, i, u) {
          var c = {
              api: "fetch",
              request: {
                method: nJ(n, e, r),
                timestamp: u,
                url: J(n instanceof r ? n.url : n),
                headers: nY(o, n.headers, e.headers),
              },
              response: {
                status: (t && t.status) || 0,
                is_custom_error: !1,
                timestamp: z(),
              },
              duration: z() - u,
            },
            f = i.collectBodyOnError,
            s = i.extraExtractor,
            l = function () {
              var t;
              f &&
                (c.request.body =
                  null == (t = nQ(n, e, r)) ? void 0 : t.toString());
            };
          if (t)
            try {
              var d = nY(o, t.headers);
              c.response.headers = d;
              try {
                -1 !== (d["content-type"] || "").indexOf("application/json") &&
                  s &&
                  t
                    .clone()
                    .json()
                    .catch(function () {
                      return t.clone().text();
                    })
                    .then(function (t) {
                      var o,
                        i = s(
                          t,
                          c,
                          null == (o = nQ(n, e, r)) ? void 0 : o.toString(),
                        );
                      i &&
                        ((c.extra = i), (c.response.is_custom_error = !0), l());
                    })
                    .catch(a);
              } catch (n) {}
              t.status >= 400 && l();
            } catch (n) {}
          else l();
          return c;
        },
        n0 = "fetch",
        n1 = {
          autoWrap: !0,
          setContextAtReq: function () {
            return c;
          },
          ignoreUrls: [],
          collectBodyOnError: !1,
        },
        n2 = ["name", "message", "stack", "filename", "lineno", "colno"],
        n3 = function (n) {
          var e;
          return (
            !(function (n) {
              switch (Object.prototype.toString.call(n)) {
                case "[object Error]":
                case "[object Exception]":
                case "[object DOMError]":
                case "[object DOMException]":
                  return !0;
                default:
                  return n instanceof Error;
              }
            })(n)
              ? (l(n) ||
                  ("u" > typeof Event &&
                    (function (n, e) {
                      try {
                        return n instanceof e;
                      } catch (n) {
                        return !1;
                      }
                    })(n, Event)) ||
                  g(n)) &&
                (e = { message: b(n) })
              : (e =
                  n && f(n)
                    ? n2.reduce(function (e, t) {
                        return ((e[t] = n[t]), e);
                      }, {})
                    : n),
            e
          );
        },
        n6 = function (n) {
          var e = n3(n.error);
          if (!e) return e;
          var t = n.colno,
            r = n.lineno,
            o = n.filename;
          return (
            t && !e.colno && (e.colno = String(t)),
            r && !e.lineno && (e.lineno = String(r)),
            o && !e.filename && (e.filename = o),
            e
          );
        },
        n5 = function (n) {
          var e;
          try {
            var t = void 0;
            if (
              ("reason" in n
                ? (t = n.reason)
                : "detail" in n &&
                  "reason" in n.detail &&
                  (t = n.detail.reason),
              t)
            ) {
              var o = n3(t);
              return r(r({}, o), {
                name: null != (e = o && o.name) ? e : "UnhandledRejection",
              });
            }
          } catch (n) {}
        },
        n4 = function (n) {
          return "[object ErrorEvent]" === Object.prototype.toString.call(n)
            ? n6(n)
            : "[object PromiseRejectionEvent]" ===
                Object.prototype.toString.call(n)
              ? n5(n)
              : n3(n);
        },
        n7 = "jsError",
        n8 = function (n) {
          return "hidden" === n.visibilityState;
        },
        n9 = function (n, e) {
          var t = K(),
            r = W();
          if (t && r) {
            var o = function (e) {
                n("pagehide" === e.type || n8(t));
              },
              i = nu(t, "visibilitychange", o, !0),
              u = ni(r, "pagehide", o, !0),
              a = ni(r, "pageshow", o, !0);
            e(
              function () {
                (i(), u(), a());
              },
              function (n) {
                n(n8(t));
              },
            );
          }
        },
        en = ["hidden_3", n9],
        ee = [
          "unload_0",
          function (n, e) {
            var t = W();
            if (t) {
              var r = o(na(n), 1)[0],
                i = function () {
                  r();
                },
                u = [];
              (["unload", "beforeunload", "pagehide"].forEach(function (n) {
                u.push(ni(t, n, i, !1));
              }),
                e(function () {
                  u.forEach(function (n) {
                    return n();
                  });
                }));
            }
          },
        ],
        et = [
          "hash_0",
          function (n, e) {
            var t = W();
            if (t) {
              var r = ni(
                t,
                "hashchange",
                function () {
                  return n(location.href);
                },
                !0,
              );
              e(function () {
                r();
              });
            }
          },
        ],
        er = [
          "history_0",
          function (n, e) {
            var t = W() && window.history,
              r = W();
            if (t && r) {
              var o = [],
                i = function () {
                  return n(location.href);
                },
                u = function (n) {
                  return function () {
                    for (var e = [], r = 0; r < arguments.length; r++)
                      e[r] = arguments[r];
                    try {
                      n.apply(t, e);
                    } finally {
                      i();
                    }
                  };
                };
              (o.push(E(t, "pushState", u)(), E(t, "replaceState", u)()),
                o.push(ni(r, "popstate", i, !0)),
                e(function () {
                  o.forEach(function (n) {
                    return n();
                  });
                }));
            }
          },
        ],
        eo = function (n) {
          return ei(n, z());
        },
        ei = function (n, e) {
          return n + "_" + e;
        },
        eu = function (n, e, t, r) {
          var o = t,
            i = e;
          return (
            r && r(e),
            [
              function (e, t, u) {
                "user_set" !== e && t !== o
                  ? ((o = t), (i = null != u ? u : o), r && r(i), n(e, i))
                  : "user_set" === e &&
                    t !== i &&
                    ((i = t), r && r(i), n(e, i));
              },
              function () {
                e && n("init", e);
              },
            ]
          );
        },
        ea = function (n, e) {
          var t = e;
          return [
            function (e, r) {
              r !== t && n(e, (t = r));
            },
          ];
        },
        ec = function (n) {
          return "manual" === n;
        },
        ef = "error_weight",
        es = "duration_apdex",
        el = "perf_apdex",
        ed = function () {
          var n;
          return (
            ((n = { error_count: [0, 0, 0, 0], duration_count: [0, 0, 0] })[
              el
            ] = {}),
            n
          );
        },
        ev = function (n, e) {
          var t = n[0] + n[1] + n[2],
            r = n[0] / t;
          return n[2] / t > e.frustrating_threshold
            ? 2
            : r > e.satisfying_threshold || 0 === t
              ? 0
              : 1;
        },
        ep = function () {
          var n = 0,
            e = void 0;
          return [
            function (t) {
              t ? e && ((n += z() - e), (e = void 0)) : (e = z());
            },
            function () {
              e && (n += z() - e);
              var t = n;
              return ((n = 0), (e = z()), t);
            },
          ];
        },
        eg = function (n, e) {
          return function (t, r) {
            var o = t.payload;
            switch (t.ev_type) {
              case "performance":
                var i = o.name;
                o.isSupport && n(r[el], i, o.value);
                break;
              case nP:
                n(r[el], "action", o.duration || 0);
                break;
              case nA:
                e(r[ef], 0);
                break;
              case nC:
                if (o.response.is_custom_error || o.response.status >= 400)
                  e(r[ef], 1);
                else {
                  var u = o.response.timing;
                  u && n(r[es], 0, u.duration);
                }
                break;
              case "resource_error":
                e(r[ef], 2);
                break;
              case "blank_screen":
                e(r[ef], 3);
                break;
              case "resource":
                n(r[es], 1, o.duration);
                break;
              case "performance_longtask":
                o.longtasks.forEach(function (e) {
                  n(r[es], 2, e.duration);
                });
            }
          };
        },
        eh = function () {
          var n,
            e,
            t = function () {
              ((n = [0, 0, 0]), (e = ed()));
            };
          return (
            t(),
            [
              function (t, r, o) {
                var i = t && t[r];
                if (i && !(o <= 0)) {
                  var u =
                    o < (i[0].threshold || 0)
                      ? 0
                      : o > (i[1].threshold || 0)
                        ? 2
                        : 1;
                  if (((n[u] += i[u].weight), "string" == typeof r)) {
                    var a = ei(r, u),
                      c = e[el][a];
                    e[el][a] = (c || 0) + 1;
                  } else 2 === u && (e.duration_count[r] += 1);
                }
              },
              function (t, r) {
                t && ((n[2] += t[r]), (e.error_count[r] += 1));
              },
              function () {
                return [n, e];
              },
              t,
            ]
          );
        },
        em = function () {
          var n = {
            start: z(),
            end: 0,
            time_spent: 0,
            is_bounced: !1,
            entry: "",
            exit: "",
            p_count: 0,
            a_count: 0,
          };
          return [
            function (e, t) {
              var r = o(e, 3),
                i = r[0],
                u = r[1],
                a = r[2];
              ((n.end = z()),
                (n.time_spent += (t && t.time_spent) || 0),
                (n.last_page = t),
                (n.p_count += 1),
                (n.rank = i),
                (n.apdex = u),
                (n.apdex_detail = a));
              var c = K();
              c && (n.is_bounced = "complete" !== c.readyState);
            },
            function (e, t) {
              ((n.time_spent += e.time_spent), (n.p_count += 1), (n.exit = t));
            },
            function () {
              n.a_count += 1;
            },
            function (e) {
              ((n.entry = e), (n.exit = e));
            },
            function () {
              return n;
            },
          ];
        },
        e_ = function (n, e, t, r) {
          var i,
            u,
            a = r.sendInit,
            c = r.initPid,
            f = r.routeMode,
            s = r.extractPid,
            l = r.onPidUpdate,
            d = ec(f)
              ? function () {
                  return "";
                }
              : function (n) {
                  var e;
                  return "hash" === f
                    ? (null == (e = Y(n).hash)
                        ? void 0
                        : e.replace(/^#/, "")) || "/"
                    : Y(n).path;
                },
            v = s || function () {},
            p = o(
              eu(
                function (e, t) {
                  n({ ev_type: nT, payload: { pid: t, source: e } });
                },
                c || (null != (u = v((i = location.href))) ? u : d(i)),
                d(location.href),
                l,
              ),
              2,
            ),
            g = p[0],
            h = p[1];
          if (!ec(f)) {
            var m = o(
              ea(function (n, e) {
                return g(n, d(e), v(e));
              }, ""),
              1,
            )[0];
            t.length &&
              t.forEach(function (n) {
                return e.push(
                  n[0](function (n) {
                    return m(f, n);
                  }),
                );
              });
          }
          return (a && h(), [g.bind(null, "user_set")]);
        },
        ey = function (n, e, t, r) {
          var i = o(t, 2),
            u = i[0],
            a = i[1],
            c = 2 === r.apdex,
            f = void 0,
            s = void 0,
            l = void 0,
            d = !1,
            v = o(eh(), 4),
            p = v[0],
            g = v[1],
            h = v[2],
            m = v[3],
            _ = o(eh(), 4),
            y = _[0],
            b = _[1],
            E = _[2],
            x = _[3],
            S = o(em(), 5),
            w = S[0],
            O = S[1],
            R = S[2],
            I = S[3],
            T = S[4],
            j = o(ep(), 2),
            A = j[0],
            C = j[1];
          (e.push(u[0](A)),
            c ||
              e.push(
                a[0](function () {
                  if (d) {
                    var e = o(E(), 2),
                      t = e[0],
                      r = e[1];
                    (w([ev(t, l), t, r], L()),
                      n({ ev_type: nj, payload: T() }),
                      x());
                  }
                }),
              ));
          var D = eg(p, g),
            P = eg(y, b),
            L = function () {
              var n = o(h(), 2),
                e = n[0],
                t = n[1];
              return {
                start: f[0],
                pid: f[1],
                view_id: f[2],
                end: z(),
                time_spent: C(),
                apdex: e,
                rank: ev(e, l),
                detail: t,
              };
            };
          return (
            e.push(function () {
              d = !1;
            }),
            [
              function (n, e) {
                if (!f) {
                  ((f = [z(), n, e]), I(n), (d = !!(l && f)));
                  return;
                }
                (d && O((s = L()), n), (f = [z(), n, e]), m());
              },
              function (n) {
                d &&
                  (c || (P(n, l), n.ev_type === nP && R()),
                  n.common.pid === f[1] && D(n, l));
              },
              function (e) {
                (d && (e.payload.last = s), n(e));
              },
              function (n) {
                if (!n) {
                  (e.forEach(function (n) {
                    return n();
                  }),
                    (e.length = 0));
                  return;
                }
                d = !!((l = n) && f);
              },
            ]
          );
        },
        eb = "pageview",
        eE = { sendInit: !0, routeMode: "history", apdex: 2 },
        ex = function (n) {
          if (n && f(n) && n.name && g(n.name)) {
            var e = { name: n.name, type: "event" };
            if ("metrics" in n && f(n.metrics)) {
              var t = n.metrics,
                r = {};
              for (var o in t) p(t[o]) && (r[o] = t[o]);
              e.metrics = r;
            }
            if ("categories" in n && f(n.categories)) {
              var i = n.categories,
                u = {};
              for (var o in i) u[o] = b(i[o]);
              e.categories = u;
            }
            return (
              "attached_log" in n &&
                g(n.attached_log) &&
                (e.attached_log = n.attached_log),
              e
            );
          }
        },
        eS = function (n) {
          if (n && f(n) && n.content && g(n.content)) {
            var e = { content: b(n.content), type: "log", level: "info" };
            if (
              ("level" in n && (e.level = n.level), "extra" in n && f(n.extra))
            ) {
              var t = n.extra,
                r = {},
                o = {};
              for (var i in t) p(t[i]) ? (r[i] = t[i]) : (o[i] = b(t[i]));
              ((e.metrics = r), (e.categories = o));
            }
            return (
              "attached_log" in n &&
                g(n.attached_log) &&
                (e.attached_log = n.attached_log),
              e
            );
          }
        },
        ew = function (n) {
          var e = function (t) {
            var r = ex(t);
            if (r) {
              var o = nh(e);
              (o && (r.stacks = o),
                n.report({
                  ev_type: nD,
                  payload: r,
                  extra: { timestamp: z() },
                }));
            }
          };
          (n.provide("sendEvent", e),
            n.provide("sendLog", function (e) {
              var t = eS(e);
              t &&
                n.report({
                  ev_type: nD,
                  payload: t,
                  extra: { timestamp: z() },
                });
            }));
        },
        eO = function (n) {
          var e = X(),
            t = $(e);
          (e &&
            (e.onchange = function () {
              t = $(e);
            }),
            n.on("report", function (n) {
              return r(r({}, n), {
                extra: r(r({}, n.extra || {}), { network_type: t }),
              });
            }));
        },
        eR = function (n, e) {
          var t = n.common || {};
          return ((t.sample_rate = e), (n.common = t), n);
        },
        eI = function (n, e, t, r, o) {
          var i;
          return n
            ? ((i = o(r, e)),
              function () {
                return i;
              })
            : function () {
                return t(e);
              };
        },
        eT = function (n, e, t) {
          switch (t) {
            case "eq":
              return h(e, n);
            case "neq":
              return !h(e, n);
            case "gt":
              return n > e[0];
            case "gte":
              return n >= e[0];
            case "lt":
              return n < e[0];
            case "lte":
              return n <= e[0];
            case "regex":
              return !!n.match(new RegExp(e.join("|")));
            case "not_regex":
              return !n.match(new RegExp(e.join("|")));
            default:
              return !1;
          }
        },
        ej = function (n, e, t, r) {
          var o = _(n, e, function (n, e) {
            return n[e];
          });
          if (void 0 === o) return !1;
          var i = "boolean" == typeof o ? "bool" : p(o) ? "number" : "string";
          return eT(
            o,
            r.map(function (n) {
              switch (i) {
                case "number":
                  return Number(n);
                case "boolean":
                  return "1" === n;
                default:
                  return String(n);
              }
            }),
            t,
          );
        },
        eA = function (n, e) {
          try {
            return "rule" === e.type
              ? ej(n, e.field, e.op, e.values)
              : "and" === e.type
                ? e.children.every(function (e) {
                    return eA(n, e);
                  })
                : e.children.some(function (e) {
                    return eA(n, e);
                  });
          } catch (n) {
            return (nt(n), !1);
          }
        },
        eC = function (n, e, t, r, o, i) {
          var u = {};
          return (
            Object.keys(n).forEach(function (a) {
              var c = n[a],
                f = c.enable,
                s = c.sample_rate,
                l = c.conditional_sample_rules;
              f
                ? ((u[a] = {
                    enable: f,
                    sample_rate: s,
                    effectiveSampleRate: s * t,
                    hit: eI(e, s, r, o, i),
                  }),
                  l &&
                    (u[a].conditional_hit_rules = l.map(function (n) {
                      var u = n.sample_rate,
                        a = n.filter;
                      return {
                        sample_rate: u,
                        hit: eI(e, u, r, o, i),
                        effectiveSampleRate: u * t,
                        filter: a,
                      };
                    })))
                : (u[a] = {
                    enable: f,
                    hit: function () {
                      return !1;
                    },
                    sample_rate: 0,
                    effectiveSampleRate: 0,
                  });
            }),
            u
          );
        },
        eD = function (n, e, t, r, o) {
          if (!e) return c;
          var i = e.sample_rate,
            u = e.include_users,
            a = e.sample_granularity,
            f = e.rules,
            s = e.r,
            l = void 0 === s ? Math.random() : s;
          if (h(u, n))
            return function (n) {
              return eR(n, 1);
            };
          var d = "session" === a,
            v = eI(d, i, t, l, r),
            p = eC(f, d, i, t, l, r);
          return function (n) {
            if (!v()) return (d && o[0](), !1);
            if (!(n.ev_type in p)) return eR(n, i);
            if (!p[n.ev_type].enable) return (d && o[1](n.ev_type), !1);
            if (null == (e = n.common) ? void 0 : e.sample_rate) return n;
            var e,
              t = p[n.ev_type],
              r = t.conditional_hit_rules;
            if (r) {
              for (var u = 0; u < r.length; u++)
                if (eA(n, r[u].filter)) {
                  if (r[u].hit()) return eR(n, r[u].effectiveSampleRate);
                  return !1;
                }
            }
            return t.hit()
              ? eR(n, t.effectiveSampleRate)
              : (!(r && r.length) && d && o[1](n.ev_type), !1);
          };
        },
        eP = function (n) {
          n.on("start", function () {
            var e = Math.random(),
              t = [
                function () {
                  n.destroy();
                },
                function (e) {
                  n.destroyAgent.removeByEvType(e);
                },
              ],
              o = -1,
              i = c,
              u = function () {
                var u,
                  a = n.config(),
                  c = a.userId,
                  f = a.sample,
                  s = a.sampleConfigVersion,
                  l = void 0 === s ? 0 : s;
                l !== o &&
                  ((o = l),
                  (i = eD(
                    c,
                    f ? r(r({}, f), { r: null != (u = f.r) ? u : e }) : f,
                    T,
                    j,
                    t,
                  )));
              };
            (u(),
              n.on("config", u),
              n.on("build", function (n) {
                return i(n);
              }));
          });
        },
        eL = function () {
          var n = W();
          return n && n.navigator.sendBeacon
            ? {
                get: function () {},
                post: function (e, t) {
                  n.navigator.sendBeacon(e, t);
                },
              }
            : { get: a, post: a };
        };
      function eN(n) {
        var e = Error(n);
        return ((e.name = "RequestNetworkError"), e);
      }
      var ek = function (n, e, t) {
          var r = e.url,
            o = e.data,
            i = e.success,
            u = void 0 === i ? a : i,
            c = e.fail,
            f = void 0 === c ? a : c,
            s = e.getResponseText,
            l = void 0 === s ? a : s,
            d = e.withCredentials,
            v = new t();
          ((v.withCredentials = void 0 !== d && d),
            v.open(n, r, !0),
            v.setRequestHeader("Content-Type", "application/json"),
            (v.onload = function () {
              null == l || l(this.responseText);
              try {
                if (this.status >= 400) {
                  var n, e;
                  f(
                    ((n = this.responseText || this.statusText),
                    ((e = Error(n)).name = "ReqeustServerError"),
                    e),
                  );
                } else if (this.responseText) {
                  var t = JSON.parse(this.responseText);
                  u(t);
                } else u({});
              } catch (n) {
                f(n);
              }
            }),
            (v.onerror = function () {
              f(eN("Network request failed"));
            }),
            (v.onabort = function () {
              f(eN("Network request aborted"));
            }),
            v.send(o));
        },
        eM = function () {
          var n = (function () {
            if ("function" == typeof XMLHttpRequest && v(XMLHttpRequest))
              return XMLHttpRequest;
          })();
          return n
            ? {
                useBeacon: !0,
                get: function (e) {
                  ek("GET", e, n);
                },
                post: function (e) {
                  ek("POST", e, n);
                },
              }
            : { get: a, post: a };
        },
        eq =
          "mon." +
          a7r51826g2d0u693s("Wlcxc2NXRlhWbWhq%jJ0M$d%ST$kRmxZ%201a1dFMDk"),
        eH =
          "https://lf3-short." +
          a7r51826g2d0u693s("W$ZkS05X%khWbXRa$0$KMFRHM%9kb%p-%m5s-%0xWj-") +
          "/slardar/fe/sdk-web/plugins",
        eB = "1.16.7",
        eU = "SDK_SLARDAR_WEB",
        eG = "/monitor_web/settings/browser-settings",
        eF = "/monitor_browser/collect/batch/",
        ez = "SLARDAR",
        eW = ["/log/sentry/", eF, eG],
        eK = "session",
        eV = ["blankScreen", "action"],
        eX = {
          sample_rate: 1,
          include_users: [],
          sample_granularity: eK,
          rules: {},
        };
      function e$(n, e, t) {
        (void 0 === t && (t = eQ),
          (function (n) {
            var e = W(),
              t = K();
            if (e && t) {
              if ("complete" === t.readyState) return n();
              ni(
                e,
                "load",
                function () {
                  setTimeout(function () {
                    n();
                  }, 0);
                },
                !1,
              );
            }
          })(function () {
            n.on("init", function () {
              t(n, e);
            });
          }));
      }
      var eJ = function (n, e, t, r) {
          void 0 === r && (r = eZ);
          var o = e.config(),
            i = o.plugins,
            u = o.pluginBundle,
            a = n.filter(function (n) {
              return i[n] && !e.destroyAgent.has(n);
            }),
            c = function () {
              return a.forEach(function (n) {
                return e0(e, n, t);
              });
            };
          a.every(function (n) {
            return e2(n, t);
          })
            ? c()
            : r(e, { name: u.name }, c);
        },
        eY = function (n, e, t, r) {
          void 0 === r && (r = eZ);
          var o = e.config().plugins;
          n.filter(function (n) {
            return o[n] && !e.destroyAgent.has(n);
          }).forEach(function (n) {
            e2(n, t)
              ? e0(e, n, t)
              : r(e, { name: n, config: o[n] }, function () {
                  return e0(e, n, t);
                });
          });
        };
      function eQ(n, e, t) {
        void 0 === t && (t = eZ);
        var o = n.config().pluginBundle;
        (eJ(o ? o.plugins : [], n, e, t),
          eY(eV, n, e, t),
          n.provide("reloadPlugin", function (e, t) {
            var o,
              i = n.config().pluginBundle;
            (n.destroyAgent.has(e) && n.destroyAgent.remove(e),
              void 0 !== t &&
                n.set({
                  plugins: r(r({}, n.config().plugins), (((o = {})[e] = t), o)),
                }),
              i && ~i.plugins.indexOf(e) ? eJ([e], n) : eY([e], n));
          }));
      }
      function eZ(n, e, t, r) {
        var o,
          i,
          u,
          a,
          c = e.name,
          f = e.config;
        (void 0 === r && (r = ns),
          r(
            ((o = n),
            (i = c),
            null != (a = null == (u = f) ? void 0 : u.path)
              ? a
              : o.config().pluginPathPrefix +
                "/" +
                i.replace(/([a-z])([A-Z])/g, function (n, e, t) {
                  return e + "-" + t.toLowerCase();
                }) +
                "." +
                eB +
                ".js"),
            function () {
              t();
            },
          ));
      }
      function e0(n, e, t) {
        if ((void 0 === t && (t = ne(W())), t)) {
          var r = e1(t, e);
          if (!r) return void I("[loader].applyPlugin not found", e);
          try {
            if (n.destroyAgent.has(e)) return;
            r.apply(n);
          } catch (n) {
            (nt(n), I("[loader].applyPlugin failed", e, n));
          }
        }
      }
      function e1(n, e) {
        return n.plugins.filter(function (n) {
          return n.name === e && n.version === eB;
        })[0];
      }
      function e2(n, e) {
        return (
          void 0 === e && (e = ne(W())),
          !!e && !!e.plugins && !!e1(e, n)
        );
      }
      function e3(n, e, t) {
        (void 0 === t && (t = ne(W())),
          t &&
            t.plugins &&
            (e1(t, n) || t.plugins.push({ name: n, version: eB, apply: e })));
      }
      function e6(n) {
        var e, t;
        try {
          for (
            var r = (function (n) {
                var e = "function" == typeof Symbol && Symbol.iterator,
                  t = e && n[e],
                  r = 0;
                if (t) return t.call(n);
                if (n && "number" == typeof n.length)
                  return {
                    next: function () {
                      return (
                        n && r >= n.length && (n = void 0),
                        { value: n && n[r++], done: !n }
                      );
                    },
                  };
                throw TypeError(
                  e
                    ? "Object is not iterable."
                    : "Symbol.iterator is not defined.",
                );
              })(["userId", "deviceId", "sessionId", "env"]),
              o = r.next();
            !o.done;
            o = r.next()
          ) {
            var i = o.value;
            n[i] || delete n[i];
          }
        } catch (n) {
          e = { error: n };
        } finally {
          try {
            o && !o.done && (t = r.return) && t.call(r);
          } finally {
            if (e) throw e.error;
          }
        }
        return n;
      }
      function e5(n) {
        var e = n.plugins || {};
        for (var t in e) e[t] && !f(e[t]) && (e[t] = {});
        return e6(r(r({}, n), { plugins: e }));
      }
      function e4(n) {
        return f(n) && "bid" in n;
      }
      function e7(n) {
        return e6(r({}, n));
      }
      function e8(n) {
        if (!n) return {};
        var e,
          t = n.sample,
          r = n.plugins,
          o = n.timestamp,
          i = n.quota_rate,
          u = n.apdex;
        if (!t) return {};
        var a = t.sample_rate,
          c = t.sample_granularity,
          f = void 0 === c ? eK : c,
          s = t.include_users,
          l = t.rules;
        return {
          sample: {
            include_users: s,
            sample_rate: a * (void 0 === i ? 1 : i),
            sample_granularity: f,
            rules: (void 0 === l ? [] : l).reduce(function (n, e) {
              var t = e.name,
                r = e.enable,
                o = e.sample_rate,
                i = e.conditional_sample_rules;
              return (
                (n[t] = {
                  enable: r,
                  sample_rate: o,
                  conditional_sample_rules: i,
                }),
                n
              );
            }, {}),
          },
          plugins: {
            heatmap: null != (e = null == r ? void 0 : r.heatmap) && e,
          },
          apdex: u,
          serverTimestamp: o,
        };
      }
      var e9 = function (n) {
          var e,
            t,
            r = 0,
            o = 0,
            i = !1,
            u = function () {
              (f(), t && t(), (t = void 0), (r = 0), (o = 0));
            },
            a = function () {
              !i &&
                r &&
                ((i = !0),
                n(function () {
                  ((i = !1), r && !e && c(r));
                }));
            },
            c = function (n) {
              (f(),
                (o = Date.now() + n),
                (e = setTimeout(function () {
                  ((e = void 0), (o = 0), a());
                }, n)));
            },
            f = function () {
              (e && clearTimeout(e), (e = void 0));
            };
          return [
            function (n) {
              var e =
                "number" == typeof n && isFinite(n) && n > 0
                  ? Math.max(1e3 * n, 6e5)
                  : 0;
              if (!e) return u();
              ((r = e),
                t ||
                  (t = N(n9)[0](function (n) {
                    n || i || !r || !o || Date.now() < o || (f(), (o = 0), a());
                  })),
                c(r));
            },
            u,
          ];
        },
        tn = function (n, e) {
          return (
            void 0 === e && (e = eF),
            (n && n.indexOf("//") >= 0 ? "" : "https://") + n + e
          );
        },
        te = function (n, e) {
          return (
            void 0 === e && (e = eG),
            (n && n.indexOf("//") >= 0 ? "" : "https://") + n + e
          );
        },
        tt = function () {
          return C();
        },
        tr = function (n) {
          var e = [];
          return (
            (n.observe = function (n) {
              e.push(n);
            }),
            (n.push = function () {
              for (var t, r = [], u = 0; u < arguments.length; u++)
                r[u] = arguments[u];
              return (
                r.forEach(function (n) {
                  e.forEach(function (e) {
                    return e(n);
                  });
                }),
                (t = [].push).call.apply(t, i([n], o(r), !1))
              );
            }),
            n
          );
        },
        to = function () {
          var n,
            e,
            t,
            r = W(),
            o = K();
          if (r && o)
            return (
              (null ==
              (t =
                null ==
                (e =
                  null ==
                  (n = (function () {
                    if (!document) return null;
                    if (document.currentScript) return document.currentScript;
                    try {
                      throw Error();
                    } catch (f) {
                      var n = 0,
                        e = /at\s+(.*)\s+\((.*):(\d*):(\d*)\)/i.exec(f.stack),
                        t = (e && e[2]) || !1,
                        r = (e && e[3]) || 0,
                        o = document.location.href.replace(
                          document.location.hash,
                          "",
                        ),
                        i = "",
                        u = document.getElementsByTagName("script");
                      if (t === o) {
                        var a = document.documentElement.outerHTML,
                          c = RegExp(
                            "(?:[^\\n]+?\\n){0," +
                              (r - 2) +
                              "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*",
                            "i",
                          );
                        i = a.replace(c, "$1").trim();
                      }
                      for (; n < u.length; n++)
                        if (
                          "interactive" === u[n].readyState ||
                          u[n].src === t ||
                          (t === o &&
                            u[n].innerHTML &&
                            u[n].innerHTML.trim() === i)
                        )
                          return u[n];
                      return null;
                    }
                  })())
                    ? void 0
                    : n.getAttribute("src"))
                  ? void 0
                  : e.match(/globalName=(.+)$/))
                ? void 0
                : t[1]) || "Slardar"
            );
        },
        ti = function (n) {
          return ez + n;
        },
        tu = function (n, e) {
          return ez + n + "::setting::" + e;
        },
        ta = function (n, e) {
          try {
            var t = localStorage.getItem(n);
            if (!t || !nd() || "{" !== t[0]) return;
            np(n, JSON.parse(t), e);
          } catch (n) {}
        },
        tc = function (n, e) {
          void 0 === n && (n = "");
          var t = { userId: C(), deviceId: C() };
          if (e <= 0) return t;
          var r = ti(n);
          ta(r, e);
          var o = nv(r);
          return {
            userId: (null == o ? void 0 : o.userId) || t.userId,
            deviceId: (null == o ? void 0 : o.deviceId) || t.deviceId,
          };
        },
        tf = function (n) {
          var e = n.bid,
            t = n.userId,
            r = n.deviceId,
            o = n.storageExpires;
          np(ti(e), { userId: t, deviceId: r }, ng(o));
        },
        ts = function (n, e) {
          return nv(tu(n, e));
        },
        tl = function (n, e, t, r) {
          np(tu(e, t), n, r);
        },
        td = {
          get: function () {
            return this.__SLARDAR__REPALCE__HOLDER__;
          },
        },
        tv = function (n) {
          var e,
            t,
            i = n,
            u = {},
            c = td.get(),
            s = o(
              e9(function (n) {
                tg(
                  i.transport,
                  i.domain,
                  i.bid,
                  function (e) {
                    (e &&
                      e.sample &&
                      void 0 !== e.updated_at &&
                      (e.updated_at !== i.sampleConfigVersion
                        ? ((c = e), _())
                        : v(e.refresh_after)),
                      n());
                  },
                  n,
                );
              }),
              2,
            ),
            v = s[0],
            p = s[1],
            g = a,
            h = a;
          return {
            getConfig: function () {
              return i;
            },
            setConfig: function (n) {
              return (
                (u = r(r({}, u), n || {})),
                m(),
                e ||
                  ((e = n),
                  i.useLocalConfig || !i.bid
                    ? ((t = {}), g())
                    : c
                      ? _(!0)
                      : tp(
                          i.transport,
                          i.domain,
                          i.bid,
                          function (n) {
                            ((c = n), _(!0));
                          },
                          i.serverSettingStorageExpires,
                        )),
                i
              );
            },
            onChange: function (n) {
              h = n;
            },
            onReady: function (n) {
              ((g = function () {
                (tf(i), n());
              }),
                t && g());
            },
            destroy: function () {
              p();
            },
          };
          function m() {
            var e = r(r(r({}, n), t || {}), u);
            ((e.plugins = (function () {
              for (var n = [], e = 0; e < arguments.length; e++)
                n[e] = arguments[e];
              for (var t = {}, o = 0; o < n.length; )
                t = (function n(e, t) {
                  var o = r({}, e);
                  for (var i in t)
                    Object.prototype.hasOwnProperty.call(t, i) &&
                      void 0 !== t[i] &&
                      (f(t[i]) && l(t[i])
                        ? (o[i] = n(f(e[i]) ? e[i] : {}, t[i]))
                        : d(t[i]) && d(e[i])
                          ? (o[i] = (function e(t, r) {
                              var o = d(t) ? t : [],
                                i = d(r) ? r : [];
                              return Array.prototype.concat
                                .call(o, i)
                                .map(function (t) {
                                  return t instanceof RegExp
                                    ? t
                                    : f(t) && l(t)
                                      ? n({}, t)
                                      : d(t)
                                        ? e([], t)
                                        : t;
                                });
                            })(e[i], t[i]))
                          : (o[i] = t[i]));
                  return o;
                })(t, n[o++]);
              return t;
            })(
              n.plugins,
              (null == t ? void 0 : t.plugins) || {},
              u.plugins || {},
            )),
              (e.sample = th(
                th(n.sample, null == t ? void 0 : t.sample),
                u.sample,
              )),
              (e.sampleConfigVersion = (null == c ? void 0 : c.sample)
                ? c.updated_at
                : void 0),
              (i = e),
              h());
          }
          function _(n) {
            ((t = e8(c)), m(), v(c && c.refresh_after), n && g());
          }
        };
      function tp(n, e, t, r, o) {
        void 0 === o && (o = 0);
        var i,
          u = W(),
          a = ts(t, e),
          c = 0,
          f = !1;
        function s() {
          (c++,
            tg(
              n,
              e,
              t,
              function (n) {
                return l(n, !0);
              },
              d,
            ));
        }
        function l(n, u) {
          f ||
            ((f = !0),
            u && o && tl(n, t, e, o),
            i && (i(), (i = void 0)),
            r(n));
        }
        function d(n) {
          var e, t, r;
          if (a) return l(a, !1);
          if (
            ((r = n),
            !(c >= 3) &&
              "RequestNetworkError" === r.name &&
              h(["slow-2g", "2g"], $(X())) &&
              u)
          )
            return void u.setTimeout(s, 2e3);
          if (
            ((e = W()) && "navigator" in e && "onLine" in e.navigator
              ? function () {
                  return !e.navigator.onLine;
                }
              : function () {
                  return !1;
                })()
          ) {
            i =
              (t = W()) && "addEventListener" in t
                ? ni(t, "online", s)
                : function () {};
            return;
          }
          return l({ sample: { sample_rate: 0.001 } }, !1);
        }
        s();
      }
      function tg(n, e, t, r, o) {
        n.get({
          withCredentials: !0,
          url: te(e) + "?bid=" + t + "&store=1",
          success: function (n) {
            r(n.data || {});
          },
          fail: o,
        });
      }
      function th(n, e) {
        if (!n || !e) return n || e;
        var t = r(r({}, n), e);
        return (
          (t.include_users = i(
            i([], o(n.include_users || []), !1),
            o(e.include_users || []),
            !1,
          )),
          (t.rules = i(
            i([], o(Object.keys(n.rules || {})), !1),
            o(Object.keys(e.rules || {})),
            !1,
          ).reduce(function (t, u) {
            var a, c;
            return (
              u in t ||
                (u in (n.rules || {}) && u in (e.rules || {})
                  ? ((t[u] = r(r({}, n.rules[u]), e.rules[u])),
                    (t[u].conditional_sample_rules = i(
                      i([], o(n.rules[u].conditional_sample_rules || []), !1),
                      o(e.rules[u].conditional_sample_rules || []),
                      !1,
                    )))
                  : (t[u] =
                      (null == (a = n.rules) ? void 0 : a[u]) ||
                      (null == (c = e.rules) ? void 0 : c[u]))),
              t
            );
          }, {})),
          t
        );
      }
      var tm = {
          build: function (n) {
            return {
              ev_type: n.ev_type,
              payload: n.payload,
              common: r(r({}, n.extra || {}), n.overrides || {}),
            };
          },
        },
        t_ = function (n, e) {
          var t = e || {},
            o = t.pid,
            i = t.viewId,
            u = {
              url: Q(),
              timestamp: z(),
              sdk_version: eB,
              sdk_name: eU,
              pid: void 0 === o ? "" : o,
              view_id: void 0 === i ? "" : i,
            };
          return r(r({}, n), { extra: r(r({}, u), n.extra || {}) });
        },
        ty = function (n) {
          (n.on("report", function (e) {
            return t_(e, n.config());
          }),
            n.on("init", function () {
              var e = n.config(),
                t = e.pid,
                o = e.viewId,
                i = n.getPreStartQueue();
              i.forEach(function (n, e) {
                var u = n.extra || {};
                i[e] = r(r({}, n), {
                  extra: r(r({}, u), {
                    pid: u.pid || t,
                    view_id: u.view_id || o,
                  }),
                });
              });
            }));
        },
        tb = {
          sri: "reportSri",
          st: "reportResourceError",
          err: "captureException",
          reject: "captureException",
        },
        tE = function (n) {
          return Object.keys(n).reduce(function (n, e) {
            return ((n[e] = []), n);
          }, {});
        },
        tx = function (n) {
          return Object.keys(n).reduce(function (e, t) {
            return (e[n[t]] ? e[n[t]].push(t) : (e[n[t]] = [t]), e);
          }, {});
        },
        tS = function (n, e, t) {
          return function (o, i, u, a) {
            (void 0 === u && (u = z()), void 0 === a && (a = location.href));
            var c,
              f = r(r({}, nr(n)), { url: a, timestamp: u });
            e[o] &&
              (n[t[o]]
                ? no(
                    n,
                    f,
                  )(function () {
                    n[t[o]](i);
                  })
                : null == (c = e[o]) || c.push([i, f]));
          };
        },
        tw = function (n, e, t) {
          return function (r) {
            r in t &&
              t[r].forEach(function (t) {
                var i;
                (null == (i = e[t]) ||
                  i.forEach(function (e) {
                    var t = o(e, 2),
                      i = t[0];
                    no(
                      n,
                      t[1],
                    )(function () {
                      n[r](i);
                    });
                  }),
                  (e[t] = null));
              });
          };
        },
        tO = function (n, e) {
          return "err" === e
            ? !1 !==
                _(n, "plugins." + n7 + ".onerror", function (n, e) {
                  return n[e];
                })
            : "reject" !== e ||
                !1 !==
                  _(
                    n,
                    "plugins." + n7 + ".onunhandledrejection",
                    function (n, e) {
                      return n[e];
                    },
                  );
        },
        tR = function (n, e) {
          void 0 === e && (e = tb);
          var t,
            r = tE(e),
            i = tx(e),
            u = tS(n, r, e);
          ((null == (t = n.p) ? void 0 : t.a) &&
            "observe" in n.p.a &&
            n.p.a.observe(function (e) {
              var t = o(e, 5);
              t[0];
              var r = t[1],
                i = t[2],
                a = t[3],
                c = t[4];
              tO(n.config(), r) && u(r, i, a, c);
            }),
            n.on("init", function () {
              var e,
                t = n.config();
              (null == (e = n.p) ||
                e.a.forEach(function (n) {
                  var e = o(n, 5);
                  e[0];
                  var r = e[1],
                    i = e[2],
                    a = e[3],
                    c = e[4];
                  tO(t, r) && u(r, i, a, c);
                }),
                n.p && n.p.a && (n.p.a.length = 0),
                n.provide("precollect", function (n, e, r, o) {
                  (void 0 === r && (r = z()),
                    void 0 === o && (o = location.href),
                    tO(t, n) && u(n, e, r, o));
                }));
            }),
            n.on("provide", tw(n, r, i)));
        },
        tI = function (n) {
          var e = o(n, 2),
            t = e[0],
            r = e[1];
          return {
            ev_type: nA,
            payload: { error: n4(t), breadcrumbs: [], extra: r || {} },
            extra: { bid: "slardar_sdk" },
          };
        },
        tT = function (n, e) {
          void 0 === e && (e = 0.001);
          var t = ne(W());
          !t ||
            (t.errors || (t.errors = []),
            "observe" in t.errors ||
              (T(e) &&
                ((t.errors = tr(t.errors)),
                t.errors.forEach(function (e) {
                  n.report(tI(e));
                }),
                t.errors.observe(function (e) {
                  n.report(tI(e));
                }))));
        },
        tj = function (n) {
          var e,
            t = !1;
          n.on("init", function () {
            ((e = new Date().getTime()),
              n.on("config", function () {
                var o,
                  i = null == (o = n.config()) ? void 0 : o.serverTimestamp;
                if (!(isNaN(i) || 0 >= Number(i)) && !t) {
                  t = !0;
                  var u = new Date().getTime();
                  if (u - e < 700 && i) {
                    var a = i - (u + e) / 2;
                    !isNaN(a) &&
                      (a > 0 || a < -6e5) &&
                      n.on("beforeBuild", function (n) {
                        var e;
                        return r(r({}, n), {
                          extra: r(r({}, null != (e = n.extra) ? e : {}), {
                            sdk_offset: null != a ? a : 0,
                          }),
                        });
                      });
                  }
                }
              }));
          });
        },
        tA = function (n, e) {
          var t = {};
          return (
            (t.bid = e.bid),
            (t.user_id = e.userId),
            (t.device_id = e.deviceId),
            (t.session_id = e.sessionId),
            (t.release = e.release),
            (t.env = e.env),
            r(r({}, n), { extra: r(r({}, t), n.extra || {}) })
          );
        },
        tC = function (n) {
          n.on("beforeBuild", function (e) {
            return tA(e, n.config());
          });
        },
        tD = function (n) {
          n.on("start", function () {
            var e = n.config().bid,
              t = n.getSender();
            t.setEndpoint(t.getEndpoint() + "?biz_id=" + e);
          });
        },
        tP = function (n) {
          var e = ng(n.storageExpires),
            t = tc(n.bid, e);
          return {
            bid: "",
            pid: "",
            viewId: eo("_"),
            userId: t.userId,
            deviceId: t.deviceId,
            storageExpires: e,
            serverSettingStorageExpires: 0,
            sessionId: tt(),
            domain: eq,
            pluginBundle: {
              name: "commonMonitors",
              plugins: [
                "breadcrumb",
                "jsError",
                "performance",
                "resourceError",
                "resource",
              ],
            },
            pluginPathPrefix: eH,
            plugins: {
              ajax: { ignoreUrls: eW },
              fetch: { ignoreUrls: eW },
              breadcrumb: {},
              pageview: {},
              jsError: {},
              resource: {},
              resourceError: {},
              performance: {},
              tti: {},
              fmp: {},
              blankScreen: !1,
              heatmap: !1,
            },
            release: "",
            env: "production",
            sample: eX,
            transport: eM(),
          };
        },
        tL = function (n) {
          var e,
            t,
            r = void 0 === n ? {} : n,
            a = r.createSender,
            c =
              void 0 === a
                ? function (n) {
                    var e, t, r;
                    return (
                      (r = (t = (function (n) {
                        var e,
                          t,
                          r = n.transport,
                          o = n.endpoint,
                          i = n.size,
                          a = void 0 === i ? 10 : i,
                          c = n.wait,
                          f = void 0 === c ? 1e3 : c,
                          s = [],
                          l = 0;
                        function d() {
                          if (s.length) {
                            var n = this.getBatchData();
                            (r.post({
                              url: o,
                              data: n,
                              fail: function (t) {
                                e && e(t, n);
                              },
                              success: function () {
                                t && t(n);
                              },
                            }),
                              (s = []));
                          }
                        }
                        return {
                          getSize: function () {
                            return a;
                          },
                          getWait: function () {
                            return f;
                          },
                          setSize: function (n) {
                            a = n;
                          },
                          setWait: function (n) {
                            f = n;
                          },
                          getEndpoint: function () {
                            return o;
                          },
                          setEndpoint: function (n) {
                            o = n;
                          },
                          send: function (n) {
                            (s.push(n),
                              s.length >= a && d.call(this),
                              clearTimeout(l),
                              (l = setTimeout(d.bind(this), f)));
                          },
                          flush: function () {
                            (clearTimeout(l), d.call(this));
                          },
                          getBatchData: function () {
                            return s.length ? u(s) : "";
                          },
                          clear: function () {
                            (clearTimeout(l), (s = []));
                          },
                          fail: function (n) {
                            e = n;
                          },
                          success: function (n) {
                            t = n;
                          },
                        };
                      })(
                        (e = {
                          size: 20,
                          endpoint: tn(n.domain),
                          transport: n.transport,
                        }),
                      )).send),
                      nc(function () {
                        if (e.transport.useBeacon) {
                          var n = eL(),
                            o = t.getBatchData();
                          (o && (n.post(t.getEndpoint(), o), t.clear()),
                            (t.send = function (e) {
                              n.post(t.getEndpoint(), u([e]));
                            }),
                            nf(function () {
                              t.send = r;
                            }));
                        } else t.flush();
                      }),
                      t
                    );
                  }
                : a,
            s = r.builder,
            l = void 0 === s ? tm : s,
            d = r.createDefaultConfig,
            v = (function (n) {
              var e,
                t,
                r,
                u,
                a,
                c,
                s = n.builder,
                l = n.createSender,
                d = n.createDefaultConfig,
                v = n.createConfigManager,
                p = n.userConfigNormalizer,
                g = n.initConfigNormalizer,
                _ = n.validateInitConfig,
                y = {};
              q.forEach(function (n) {
                return (y[n] = []);
              });
              var b = !1,
                E = !1,
                x = !1,
                S = [],
                w = [],
                O =
                  ((e = !1),
                  (t = {}),
                  (r = function (n) {
                    (n.length &&
                      n.forEach(function (n) {
                        try {
                          n();
                        } catch (n) {}
                      }),
                      (n.length = 0));
                  }),
                  {
                    set: function (n, o, i) {
                      (t[n] ? t[n].push([o, i]) : (t[n] = [[o, i]]), e && r(i));
                    },
                    has: function (n) {
                      return !!t[n];
                    },
                    remove: (u = function (n) {
                      (t[n] &&
                        t[n].forEach(function (n) {
                          r(n[1]);
                        }),
                        (t[n] = void 0));
                    }),
                    removeByEvType: function (n) {
                      Object.keys(t).forEach(function (e) {
                        t[e] &&
                          t[e].forEach(function (e) {
                            e[0] === n && r(e[1]);
                          });
                      });
                    },
                    clear: function () {
                      ((e = !0),
                        Object.keys(t).forEach(function (n) {
                          u(n);
                        }));
                    },
                  }),
                R = {
                  getBuilder: function () {
                    return s;
                  },
                  getSender: function () {
                    return a;
                  },
                  getPreStartQueue: function () {
                    return S;
                  },
                  init: function (n) {
                    if (b) return void I("already inited");
                    if (n && f(n) && _(n)) {
                      var e = d(n);
                      if (!e) throw Error("defaultConfig missing");
                      var t = g(n);
                      if (
                        ((c = v(e)).setConfig(t),
                        c.onChange(function () {
                          T("config");
                        }),
                        !(a = l(c.getConfig())))
                      )
                        throw Error("sender missing");
                      ((b = !0), T("init", !0));
                    } else throw Error("invalid InitConfig, init failed");
                  },
                  set: function (n) {
                    b &&
                      n &&
                      f(n) &&
                      (T("beforeConfig", !1, n), null == c || c.setConfig(n));
                  },
                  config: function (n) {
                    if (b)
                      return (
                        n &&
                          f(n) &&
                          (T("beforeConfig", !1, n),
                          null == c || c.setConfig(p(n))),
                        null == c ? void 0 : c.getConfig()
                      );
                  },
                  provide: function (n, e) {
                    h(w, n)
                      ? I("cannot provide " + n + ", reserved")
                      : ((R[n] = e), T("provide", !1, n));
                  },
                  start: function () {
                    !b ||
                      E ||
                      null == c ||
                      c.onReady(function () {
                        var n;
                        ((E = !0),
                          T("start", !0),
                          (n = R.getPreStartQueue()).forEach(function (n) {
                            return R.build(n);
                          }),
                          (n.length = 0));
                      });
                  },
                  report: function (n) {
                    if (n) {
                      var e = A(y.beforeReport)(n);
                      if (e) {
                        var t = A(y.report)(e);
                        if (t) {
                          if (E) this.build(t);
                          else if ((S.push(t), !(S.length < 500))) {
                            var r = S.splice(0, 50);
                            R.savePreStartDataToDb && R.savePreStartDataToDb(r);
                          }
                        }
                      }
                    }
                  },
                  build: function (n) {
                    if (!E) return;
                    var e = A(y.beforeBuild)(n);
                    if (e) {
                      var t = s.build(e);
                      if (t) {
                        var r = A(y.build)(t);
                        r && this.send(r);
                      }
                    }
                  },
                  send: function (n) {
                    if (E) {
                      var e = A(y.beforeSend)(n);
                      e && (a.send(e), T("send", !1, e));
                    }
                  },
                  destroy: function () {
                    var n;
                    (null == (n = null == c ? void 0 : c.destroy) || n.call(c),
                      O.clear(),
                      (x = !0),
                      (S.length = 0),
                      T("beforeDestroy", !0));
                  },
                  on: function (n, e) {
                    if (
                      ("init" === n && b) ||
                      ("start" === n && E) ||
                      ("beforeDestroy" === n && x)
                    )
                      try {
                        e();
                      } catch (n) {}
                    else y[n] && y[n].push(e);
                  },
                  off: function (n, e) {
                    y[n] && (y[n] = m(y[n], e));
                  },
                  destroyAgent: O,
                };
              return ((w = Object.keys(R)), R);
              function T(n, e) {
                void 0 === e && (e = !1);
                for (var t = [], r = 2; r < arguments.length; r++)
                  t[r - 2] = arguments[r];
                (y[n].forEach(function (n) {
                  try {
                    n.apply(void 0, i([], o(t), !1));
                  } catch (n) {}
                }),
                  e && (y[n].length = 0));
              }
            })({
              validateInitConfig: e4,
              initConfigNormalizer: e5,
              userConfigNormalizer: e7,
              createSender: c,
              builder: l,
              createDefaultConfig: void 0 === d ? tP : d,
              createConfigManager: tv,
            });
          (tT(v), H(v));
          var p = ne(W());
          ((e = (p && p.subject) || {}),
            (t = {}),
            v.provide("setFilter", function (n, e) {
              (t[n] || (t[n] = []), t[n].push(e));
            }),
            v.provide("initSubject", function (n) {
              var r = o(n, 2),
                i = r[0],
                u = r[1],
                a = i.split("_")[0],
                c = !!a && t[a];
              return (e[i] ||
                (e[i] = N(u, function () {
                  e[i] = void 0;
                })),
              c)
                ? G(v, [i, k(e[i], c)])
                : e[i];
            }),
            v.provide("getSubject", function (n) {
              return e[n];
            }),
            v.provide("privateSubject", {}),
            tj(v),
            tC(v),
            ty(v),
            eO(v),
            tD(v));
          var g = B(v, nr, function (n, e, t) {
            return no(
              n,
              e,
            )(function () {
              var n = o(t),
                e = n[0],
                r = n.slice(1);
              v[e].apply(v, i([], o(r), !1));
            });
          });
          return (
            g.on("init", function () {
              var n = [],
                e = function (e) {
                  e.forEach(function (e) {
                    var t = e.name;
                    h(n, t) ||
                      (n.push(t),
                      e.setup(g),
                      e3 && e3(t, e.setup),
                      g.destroyAgent.set(t, t, [
                        function () {
                          ((n = m(n, t)), e.tearDown && e.tearDown());
                        },
                      ]));
                  });
                };
              g.provide("applyIntegrations", e);
              var t = g.config();
              t && t.integrations && e(t.integrations);
            }),
            F(g),
            g
          );
        },
        tN =
          (((t = {})[eb] = function (n) {
            n.on("init", function () {
              var e,
                t = null == (e = n.config()) ? void 0 : e.plugins[eb];
              !(function (n, e) {
                var t,
                  i = nl(e, eE);
                if (i && V()) {
                  var u = i.routeMode,
                    c = i.apdex,
                    f = n.report.bind(n),
                    s = a;
                  if (c) {
                    var l = [],
                      d = o(
                        ey(n.report.bind(n), l, [U(n, en), U(n, ee)], i),
                        4,
                      ),
                      v = d[0],
                      p = d[1],
                      g = d[2],
                      h = d[3];
                    ((f = g),
                      (s = v),
                      n.on("send", p),
                      l.push(function () {
                        return n.off("send", p);
                      }),
                      n.on("start", function () {
                        h(n.config().apdex);
                      }),
                      M(n, eb, nj, l));
                  }
                  var m = [],
                    _ = o(
                      e_(
                        f,
                        m,
                        ec(u) ? [] : [n.initSubject(et), n.initSubject(er)],
                        r(r({}, i), {
                          initPid: null == (t = n.config()) ? void 0 : t.pid,
                          onPidUpdate: function (e) {
                            var t = eo(e);
                            (s(e, t),
                              n.set({ pid: e, viewId: t, actionId: void 0 }));
                          },
                        }),
                      ),
                      1,
                    )[0];
                  G(
                    n,
                    [
                      "f_view_0",
                      function (e, t) {
                        var r = Z(n);
                        t(a, function (n) {
                          r && n(r);
                        });
                      },
                    ],
                    -1,
                  );
                  var y = function () {
                    _(n.config().pid);
                  };
                  (n.on("config", y),
                    m.push(function () {
                      return n.off("config", y);
                    }),
                    M(n, eb, nT, m),
                    n.provide("sendPageview", _));
                }
              })(n, t);
            });
          }),
          (t[nz] = function (n) {
            n.on("init", function () {
              var e,
                t = null == (e = n.config()) ? void 0 : e.plugins[nz],
                o = nl(t, nW);
              if (o) {
                var i = [],
                  u = r(r({}, o), {
                    setContextAtReq: function () {
                      return nn(n, !0);
                    },
                    setTraceHeader: nk(o.trace),
                  }),
                  a = function () {
                    return U(n, nI);
                  };
                (u.autoWrap &&
                  nG(
                    i,
                    [
                      U(n, [
                        "xhr_0",
                        nE(XMLHttpRequest && XMLHttpRequest.prototype),
                      ]),
                      a,
                    ],
                    u,
                  ),
                  M(n, nz, nC, i),
                  n.provide("wrapXhr", function (n) {
                    function e() {
                      var e = new n();
                      return (nG(i, [N(nE(e)), a], u), e);
                    }
                    return (
                      (e.prototype = new n()),
                      [
                        "DONE",
                        "HEADERS_RECIEVED",
                        "LOADING",
                        "OPENED",
                        "UNSENT",
                      ].forEach(function (t) {
                        e[t] = n[t];
                      }),
                      e
                    );
                  }));
              }
            });
          }),
          (t[n0] = function (n) {
            n.on("init", function () {
              var e,
                t = null == (e = n.config()) ? void 0 : e.plugins[n0],
                o = nl(t, n1);
              if (o) {
                var i = [],
                  u = r(r({}, o), {
                    setContextAtReq: function () {
                      return nn(n, !0);
                    },
                    setTraceHeader: nk(o.trace),
                  }),
                  a = function () {
                    return U(n, nI);
                  };
                (u.autoWrap && nK(i, [U(n, nS), a], u),
                  M(n, n0, nC, i),
                  n.provide("wrapFetch", function (n) {
                    var e = void 0;
                    return (
                      nK(
                        i,
                        [
                          N(function (t) {
                            e = nx(n, t);
                          }),
                          a,
                        ],
                        u,
                      ),
                      e
                    );
                  }));
              }
            });
          }),
          t),
        tk = function (n) {
          void 0 === n && (n = {});
          var e = tL(n);
          return (
            eP(e),
            tR(e),
            ew(e),
            Object.keys(tN).forEach(function (n) {
              (e3(n, tN[n]), tN[n](e));
            }),
            e$(e),
            e.provide("create", tk),
            e
          );
        },
        tM = "precollect",
        tq = tk(),
        tH = W();
      (tH &&
        (function (n, e) {
          if ("addEventListener" in n) {
            ((e.pcErr = function (t) {
              var r = (t = t || n.event).target || t.srcElement || {};
              r instanceof Element || r instanceof HTMLElement
                ? e(tM, "st", {
                    tagName: r.tagName,
                    url: r.getAttribute("href") || r.getAttribute("src"),
                  })
                : e(tM, "err", t.error);
            }),
              (e.pcRej = function (t) {
                e(
                  tM,
                  "reject",
                  (t = t || n.event).reason || (t.detail && t.detail.reason),
                );
              }));
            var t = [];
            (t.push(ni(n, "error", e.pcErr, !0)),
              t.push(ni(n, "unhandledrejection", e.pcRej, !0)),
              setTimeout(function () {
                t.forEach(function (n) {
                  return n();
                });
              }, 3e5));
          }
          "PerformanceObserver" in n &&
            "PerformanceLongTaskTiming" in n &&
            ((e.pp = { entries: [] }),
            (e.pp.observer = new PerformanceObserver(function (n) {
              e.pp.entries = e.pp.entries.concat(n.getEntries());
            })),
            e.pp.observer.observe({ entryTypes: ["longtask"] }),
            setTimeout(function () {
              e.pp.observer.disconnect();
            }, 3e5));
        })(tH, tq),
        (e.BATCH_REPORT_PATH = eF),
        (e.DEFAULT_IGNORE_PATHS = eW),
        (e.DEFAULT_SAMPLE_CONFIG = eX),
        (e.DEFAULT_SAMPLE_GRANULARITY = eK),
        (e.DEFAULT_SENDER_SIZE = 20),
        (e.DEVICE_ID_COOKIE_NAME = "MONITOR_DEVICE_ID"),
        (e.EV_METHOD_MAP = tb),
        (e.EXTRA_INDEPENDENT_PLUGINS = eV),
        (e.InjectConfigPlugin = tC),
        (e.InjectEnvPlugin = ty),
        (e.InjectQueryPlugin = tD),
        (e.ObserveErrorPlugin = tT),
        (e.PLUGINS_LOAD_PREFIX = eH),
        (e.PluginMap = tN),
        (e.PrecollectPlugin = tR),
        (e.REPORT_DOMAIN = eq),
        (e.SDK_NAME = eU),
        (e.SDK_VERSION = eB),
        (e.SETTINGS_DOMAIN = eq),
        (e.SETTINGS_PATH = eG),
        (e.STORAGE_PREFIX = ez),
        (e.TimeCalibrationPlugin = tj),
        (e.USER_ID_COOKIE_NAME = "MONITOR_WEB_ID"),
        (e.addConfigToReportEvent = tA),
        (e.addEnvToSendEvent = t_),
        (e.applyPlugin = e0),
        (e.browserBuilder = tm),
        (e.buildSelfErrorEvent = tI),
        (e.configHolder = td),
        (e.createBrowserClient = tk),
        (e.createBrowserConfigManager = tv),
        (e.createMinimalBrowserClient = tL),
        (e.createStore = tE),
        (e.default = tq),
        (e.doesPluginExistInRegistry = e2),
        (e.filterIfPluginDisabled = tO),
        (e.getConsumeStored = tw),
        (e.getDefaultConfig = tP),
        (e.getDefaultSessionId = tt),
        (e.getDefaultUserIdAndDeviceId = tc),
        (e.getGlobalInstance = function () {
          var n = W(),
            e = to();
          if (n && e) return n[e];
        }),
        (e.getGlobalName = to),
        (e.getPluginFromRegistry = e1),
        (e.getReportUrl = tn),
        (e.getServerConfig = tp),
        (e.getSettingCache = ts),
        (e.getSettingStorageKey = tu),
        (e.getSettingsUrl = te),
        (e.getStorageKey = ti),
        (e.getStoreOrConsume = tS),
        (e.glueCodeForStorageSecurity = ta),
        (e.hasSetStorageItem = function (n) {
          return (void 0 === n && (n = ""), !!nv(ti(n)));
        }),
        (e.loadCombinedPlugins = eJ),
        (e.loadIndependentPlugins = eY),
        (e.loadNow = eZ),
        (e.loadPlugins = eQ),
        (e.loadPluginsOnPageLoad = e$),
        (e.mergeSampleConfig = th),
        (e.normalizeInitConfig = e5),
        (e.normalizeStrictFields = e6),
        (e.normalizeUserConfig = e7),
        (e.parseServerConfig = e8),
        (e.register = e3),
        (e.reverseMap = tx),
        (e.setSettingCache = tl),
        (e.setStorageUserIdAndDeviceId = tf),
        (e.toObservableArray = tr),
        (e.validateInitConfig = e4));
    },
  },
]);
