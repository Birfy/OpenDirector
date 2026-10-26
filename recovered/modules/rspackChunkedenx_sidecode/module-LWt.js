export default (function () {
  "use strict";
  const t = "0.2.6";
  let r = function () {
    return (r =
      Object.assign ||
      function (t) {
        let r;
        for (let e = 1, n = arguments.length; e < n; e++) {
          for (const o in (r = arguments[e])) {
            if (Object.prototype.hasOwnProperty.call(r, o)) {
              t[o] = r[o];
            }
          }
        }
        return t;
      }).apply(this, arguments);
  };
  function e(t, r, e, n) {
    return new (e = e || Promise)(function (o, i) {
      function a(t) {
        try {
          c(n.next(t));
        } catch (error) {
          i(error);
        }
      }
      function s(t) {
        try {
          c(n.throw(t));
        } catch (error) {
          i(error);
        }
      }
      function c(t) {
        let r;
        if (t.done) {
          o(t.value);
        } else {
          ((r = t.value) instanceof e
            ? r
            : new e(function (t) {
                t(r);
              })
          ).then(a, s);
        }
      }
      c((n = n.apply(t, r || [])).next());
    });
  }
  function n(t, r) {
    let e;
    let n;
    let o;
    let i = {
      label: 0,
      sent: function () {
        if (1 & o[0]) {
          throw o[1];
        }
        return o[1];
      },
      trys: [],
      ops: [],
    };
    const a = {
      next: s(0),
      throw: s(1),
      return: s(2),
    };
    if (typeof Symbol === "function") {
      a[Symbol.iterator] = function () {
        return this;
      };
    }
    return a;
    function s(a) {
      return function (s) {
        let c = [a, s];
        if (e) {
          throw TypeError("Generator is already executing.");
        }
        while (i) {
          try {
            e = 1;
            if (
              n &&
              (o =
                2 & c[0]
                  ? n.return
                  : c[0]
                    ? n.throw || ((o = n.return) && o.call(n), 0)
                    : n.next) &&
              !(o = o.call(n, c[1])).done
            ) {
              return o;
            }
            n = 0;
            switch ((c = o ? [2 & c[0], o.value] : c)[0]) {
              case 0:
              case 1:
                o = c;
                break;
              case 4:
                i.label++;
                return {
                  value: c[1],
                  done: false,
                };
              case 5:
                i.label++;
                n = c[1];
                c = [0];
                continue;
              case 7:
                c = i.ops.pop();
                i.trys.pop();
                continue;
              default:
                if (
                  !(o = (o = i.trys).length > 0 && o[o.length - 1]) &&
                  (c[0] === 6 || c[0] === 2)
                ) {
                  i = 0;
                  continue;
                }
                if (c[0] === 3 && (!o || (c[1] > o[0] && c[1] < o[3]))) {
                  i.label = c[1];
                  break;
                }
                if (c[0] === 6 && i.label < o[1]) {
                  i.label = o[1];
                  o = c;
                  break;
                }
                if (o && i.label < o[2]) {
                  i.label = o[2];
                  i.ops.push(c);
                  break;
                }
                if (o[2]) {
                  i.ops.pop();
                }
                i.trys.pop();
                continue;
            }
            c = r.call(t, i);
          } catch (error) {
            c = [6, error];
            n = 0;
          } finally {
            o = 0;
            e = 0;
          }
        }
        if (5 & c[0]) {
          throw c[1];
        }
        return {
          value: c[0] ? c[1] : undefined,
          done: true,
        };
      };
    }
  }
  function o(t) {
    const r = typeof Symbol === "function" && Symbol.iterator;
    const e = r && t[r];
    let n = 0;
    if (e) {
      return e.call(t);
    }
    if (t && typeof t.length === "number") {
      return {
        next: function () {
          return {
            value: (t = t && n >= t.length ? undefined : t) && t[n++],
            done: !t,
          };
        },
      };
    }
    throw TypeError(
      r ? "Object is not iterable." : "Symbol.iterator is not defined.",
    );
  }
  function i(t, r) {
    let e = typeof Symbol === "function" && t[Symbol.iterator];
    if (!e) {
      return t;
    }
    let n;
    let o;
    const i = e.call(t);
    const a = [];
    try {
      while ((r === undefined || r-- > 0) && !(n = i.next()).done) {
        a.push(n.value);
      }
    } catch (error) {
      o = {
        error,
      };
    } finally {
      try {
        if (n && !n.done && (e = i.return)) {
          e.call(i);
        }
      } finally {
        if (o) {
          throw o.error;
        }
      }
    }
    return a;
  }
  function a(t, r, e) {
    if (e || arguments.length == 2) {
      var n;
      for (let o = 0, i = r.length; o < i; o++) {
        if (!(!n && o in r)) {
          n = n || Array.prototype.slice.call(r, 0, o);
          n[o] = r[o];
        }
      }
    }
    return t.concat(n || Array.prototype.slice.call(r));
  }
  function s() {
    return {};
  }
  function c(t) {
    return typeof t === "object" && t !== null;
  }
  const Object_prototype = Object.prototype;
  function f(t) {
    return typeof t === "function";
  }
  function l(t, r, e) {
    return function () {
      const n = [];
      for (let o = 0; o < arguments.length; o++) {
        n[o] = arguments[o];
      }
      if (!t) {
        return s;
      }
      const c = t[r];
      let u = e.apply(undefined, a([c], i(n), false));
      let l = u;
      if (f(l)) {
        l = function () {
          const t = [];
          for (let r = 0; r < arguments.length; r++) {
            t[r] = arguments[r];
          }
          return u.apply(this, t);
        };
      }
      t[r] = l;
      return function () {
        if (l === t[r]) {
          t[r] = c;
        } else {
          u = c;
        }
      };
    };
  }
  let h = 0;
  function v() {
    if (typeof window === "object" && c(window)) {
      return window;
    }
  }
  function p() {
    if (typeof document === "object" && c(document)) {
      return document;
    }
  }
  const d = function () {
    const t = [];
    for (let r = 0; r < arguments.length; r++) {
      t[r] = arguments[r];
    }
    const e = ((t) => {
      if (t) {
        if (!t.__SLARDAR_REGISTRY__) {
          t.__SLARDAR_REGISTRY__ = {
            Slardar: {
              plugins: [],
              errors: [],
              subject: {},
            },
          };
        }
        return t.__SLARDAR_REGISTRY__.Slardar;
      }
    })(v());
    if (e) {
      if (!e.errors) {
        e.errors = [];
      }
      e.errors.push(t);
    }
  };
  const g = (t, r) => {
    const e = t && new t(r);
    return [
      function (t, r) {
        if (e && t) {
          e.observe(t, r);
        }
      },
      function () {
        return e && e.disconnect();
      },
    ];
  };
  const y = (t) => {
    const r = (t && t.timing) || undefined;
    return [
      r,
      function () {
        if (t && t.now) {
          return t.now();
        }
        return (
          (Date.now ? Date.now() : +new Date()) -
          ((r && r.navigationStart) || 0)
        );
      },
      function (r) {
        const getEntriesByType = (t || {}).getEntriesByType;
        return (f(getEntriesByType) && getEntriesByType.call(t, r)) || [];
      },
      function () {
        const clearResourceTimings = (t || {}).clearResourceTimings;
        if (f(clearResourceTimings)) {
          clearResourceTimings.call(t);
        }
      },
      function (r) {
        const getEntriesByName = (t || {}).getEntriesByName;
        return (f(getEntriesByName) && getEntriesByName.call(t, r)) || [];
      },
    ];
  };
  const m = (t, r, e, n) => {
    const o =
      t &&
      new t(function (t, o) {
        if (t.getEntries) {
          t.getEntries().forEach((t, e, n) => r(t, e, n, o));
        } else if (n) {
          n();
        }
        if (e) {
          o.disconnect();
        }
      });
    return [
      function () {
        const entryTypes = [];
        for (let e = 0; e < arguments.length; e++) {
          entryTypes[e] = arguments[e];
        }
        if (!t || !o) {
          return n && n();
        }
        try {
          entryTypes.forEach((r) => {
            if (t.supportedEntryTypes.indexOf(r) > -1) {
              o.observe({
                type: r,
                buffered: false,
              });
            }
          });
        } catch (t) {
          try {
            o.observe({
              entryTypes,
            });
          } catch (t) {
            return n && n();
          }
        }
      },
      function () {
        return o && o.disconnect();
      },
    ];
  };
  w.prototype.subscribe = function (t) {
    this.observers.push(t);
  };
  w.prototype.unsubscribe = function (t) {
    this.observers.filter((r) => r !== t);
  };
  w.prototype.notify = function (t) {
    this.observers.forEach((r) => {
      r(t);
    });
  };
  const b = w;
  function w() {
    this.observers = [];
  }
  class A {
    constructor(t) {
      this.cache = new Map();
      this.capacity = 10;
      this.capacity = t;
    }
    get(t) {
      let r;
      if (this.cache.has(t)) {
        r = this.cache.get(t);
        this.cache.delete(t);
        this.cache.set(t, r);
        return r;
      }
      return null;
    }
    put(t, r) {
      if (this.cache.has(t)) {
        this.cache.delete(t);
      } else if (this.cache.size >= this.capacity) {
        this.cache.delete(this.cache.keys().next().value);
      }
      this.cache.set(t, r);
    }
  }
  function x(t) {
    let r = [];
    Array.from(t).forEach((t) => {
      if (t instanceof Element) {
        if (t.nodeName.toLocaleLowerCase() === "img") {
          r.push(t);
        } else if (t != null && t.querySelectorAll) {
          t = t.querySelectorAll("img");
          r = r.concat(Array.from(t));
        }
      }
    });
    return r;
  }
  const S = (t) => {
    const r = [];
    const e = [];
    (t = t === undefined ? [] : t).forEach((t) => {
      r.push.apply(r, a([], i(x(t.addedNodes)), false));
      e.push.apply(e, a([], i(x(t.removedNodes)), false));
    });
    return [r, e];
  };
  const E = typeof IntersectionObserver !== "undefined";
  R.prototype.set = function (t) {
    let r;
    if (E && (r = this.intersectionObserver) != null) {
      r.observe(t);
    }
    this.record.set(t, {
      visible: false,
      observer: this.intersectionObserver,
    });
  };
  R.prototype.del = function (t) {
    let r;
    if (!(((r = this.record.get(t)) != null && r.visible) || !E)) {
      if ((r = this.intersectionObserver) != null) {
        r.unobserve(t);
      }
    }
    this.record.delete(t);
  };
  R.prototype.find = function (t) {
    let e;
    let n;
    let a = null;
    try {
      for (var s = o(this.record), c = s.next(); !c.done; c = s.next()) {
        const u = i(c.value, 2);
        const target = u[0];
        const l = u[1];
        if (target.currentSrc === t) {
          a = r(
            {
              target,
            },
            l,
          );
          break;
        }
      }
    } catch (error) {
      e = {
        error,
      };
    } finally {
      try {
        if (c && !c.done && (n = s.return)) {
          n.call(s);
        }
      } finally {
        if (e) {
          throw e.error;
        }
      }
    }
    return a;
  };
  const O = R;
  function R() {
    const t = this;
    this.record = new Map();
    this.intersectionObserver = null;
    if (E) {
      this.intersectionObserver = new IntersectionObserver(
        function (e) {
          e.forEach((e) => {
            let n;
            if (e.isIntersecting || e.intersectionRatio > 0) {
              if ((n = t.record.get(e.target))) {
                t.record.set(
                  e.target,
                  r(r({}, n), {
                    visible: true,
                  }),
                );
              }
              if ((n = t.intersectionObserver) != null) {
                n.unobserve(e.target);
              }
            }
          });
        },
        {
          rootMargin: "200px",
        },
      );
    }
  }
  function M(t, r, e) {
    let n = 1;
    return function () {
      const o = [];
      for (let s = 0; s < arguments.length; s++) {
        o[s] = arguments[s];
      }
      const c = t.apply(undefined, a([], i(o), false));
      const u = (n += 2);
      r(u, typeof o[0] === "string" ? o[0] : o[0].url);
      c.then(
        () => {
          e(u);
        },
        () => {
          e(u);
        },
      );
      return c;
    };
  }
  function I(t, r, e) {
    let n = 0;
    return function () {
      const o = [];
      for (let i = 0; i < arguments.length; i++) {
        o[i] = arguments[i];
      }
      const a = (n += 2);
      r(a, this._url);
      l(
        this,
        "onreadystatechange",
        (t) =>
          function () {
            const r = [];
            for (let n = 0; n < arguments.length; n++) {
              r[n] = arguments[n];
            }
            if (this.readyState === 4) {
              e(a);
            }
            return t && t.apply(this, r);
          },
      )();
      return t.apply(this, o);
    };
  }
  function _(
    s = v(),
    l = p(),
    h = v() && window.location,
    d = (() => {
      if (typeof XMLHttpRequest === "function" && f(XMLHttpRequest)) {
        return XMLHttpRequest;
      }
    })(),
    b = (() => {
      if (v() && c(window.performance)) {
        return window.performance;
      }
    })(),
    w = (() => {
      if (v() && f(window.MutationObserver)) {
        return window.MutationObserver;
      }
    })(),
    x = (() => {
      if (v() && f(window.PerformanceObserver)) {
        return window.PerformanceObserver;
      }
    })(),
  ) {
    if (l && s && h) {
      return function (c, f) {
        var c_debug = c_ignoreUrls.debug;
        var c_sampleRate = c_ignoreUrls.sampleRate;
        var c_sample_rate = c_ignoreUrls.sample_rate;
        var c_sample_rate =
          c_sample_rate === undefined ? sample_rate : c_sample_rate;
        var c_ignoreUrls = c_ignoreUrls.ignoreUrls;
        const M = c_ignoreUrls === undefined ? [] : c_ignoreUrls;
        const I = (W = (W = c_debug) !== undefined && W)
          ? function () {
              const t = [];
              for (let r = 0; r < arguments.length; r++) {
                t[r] = arguments[r];
              }
              return console.log.apply(
                console,
                a([`[imageReport] `], i(t), false),
              );
            }
          : () => {};
        const imageSampleRate = c_sampleRate || c_sample_rate;
        function Y(payload) {
          I("图片资源上报", payload);
          if (f) {
            f({
              ev_type,
              payload,
            });
          }
        }
        I("图片插件已注册，version:", t);
        var W;
        let q;
        const H = i(y(b), 2)[1];
        const X = new O();
        const G = new A(10);
        var c_ignoreUrls = i(k(), 3);
        const J = c_ignoreUrls[0];
        const K = c_ignoreUrls[1];
        const Q = c_ignoreUrls[2];
        var Z = i(
          T(
            s,
            d,
            function (t) {
              I("before http 请求, url:", t);
              return true;
            },
            function (url) {
              I("after http 请求, url:", (url = Z.get(url)));
              if (url && Z.size - 1 < V) {
                B.notify({
                  ev_type: P,
                  payload: {
                    url,
                    remainConnections: V - (Z.size - 1),
                  },
                });
              }
            },
          ),
          1,
        )[0];
        var c_debug = i(
          g(w, function (t) {
            var t = i(S(t), 2);
            const r = t[0];
            var t = t[1];
            if (r.length || t.length) {
              I("监听到DOM变更", r, t);
            }
            r.forEach((t) => X.set(t));
            t.forEach((t) => X.del(t));
          }),
          2,
        );
        var c_sampleRate = c_debug[0];
        const $ = c_debug[1];
        c_sampleRate(l, {
          childList: true,
          subtree: true,
          characterData: false,
          attributes: false,
        });
        var c_sample_rate = i(
          m(x, (e) => {
            let n;
            let duration;
            let i;
            let a;
            let s;
            let c;
            let f;
            let l;
            let h;
            let v;
            let p;
            let d;
            let g;
            let y;
            let m;
            let b;
            let w;
            if (
              !(
                (e.initiatorType !== "img" && e.initiatorType !== "css") ||
                ((y = ((t) => {
                  if (Object_prototype.toString.call(t) !== "[object Array]") {
                    return null;
                  }
                  if (t.length) {
                    const r = [];
                    for (let e = t.length, n = 0; n < e; n++) {
                      const o = t[n];
                      if (typeof o === "string") {
                        r.push(o.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"));
                      } else if (o && o.source) {
                        r.push(o.source);
                      }
                    }
                    return RegExp(r.join("|"), "i");
                  }
                  return null;
                })(M)) != null &&
                  y.test(e.name))
              )
            ) {
              I("监听到resource", e);
              m = (y = e.toJSON()).name;
              w = y.initiatorType;
              n = y.transferSize;
              duration = y.duration;
              i = y.encodedBodySize;
              b = y.decodedBodySize;
              a = y.redirectStart;
              s = y.redirectEnd;
              c = y.serverTiming;
              f = y.domainLookupStart;
              l = y.domainLookupEnd;
              h = y.connectStart;
              v = y.connectEnd;
              p = y.secureConnectionStart;
              d = y.requestStart;
              g = y.responseStart;
              y = y.responseEnd;
              if (
                (w = r(
                  {
                    name: m,
                    source: w,
                    dpr: Math.round(
                      (m =
                        window == null ? undefined : window.devicePixelRatio) !=
                        null
                        ? m
                        : 1,
                    ),
                    needCompress: false,
                    needSizeOptim: false,
                    needFormatOptim: false,
                    hitLocalCache:
                      n === 0 || (n === undefined && duration === 0),
                    hitCdnCache:
                      (c || []).findIndex(
                        (t) =>
                          t.name === "cdn-cache" &&
                          t.description.toLocaleLowerCase().indexOf("hit") >= 0,
                      ) >= 0,
                    size: b !== 0 ? i : 0,
                    duration,
                    redirect: s - a,
                    dns: l - f,
                    tcp: v - h,
                    ssl: p === undefined || p <= 0 ? 0 : v - p,
                    request: d === undefined || d <= 0 ? 0 : g - d,
                    download: g === undefined || g <= 0 ? 0 : y - g,
                    timingDetail: e.toJSON(),
                  },
                  {
                    monitorVersion: t,
                    imageSampleRate,
                  },
                )).source === "img"
              ) {
                I("匹配到img", (m = X.find(e.name)), X.record);
                if (m) {
                  b = {
                    imagexType:
                      (n = m.target) == null
                        ? undefined
                        : n.getAttribute("imagex-type"),
                    imagexVersion:
                      (c = m.target) == null
                        ? undefined
                        : c.getAttribute("imagex-version"),
                  };
                  w = r(r(r({}, w), b), {
                    isLazyLoad: !!m.visible,
                    width:
                      ((i = m.target) == null ? undefined : i.naturalWidth) ||
                      0,
                    height:
                      ((duration = m.target) == null
                        ? undefined
                        : duration.naturalHeight) || 0,
                    viewerWidth: (s = m.target) == null ? undefined : s.width,
                    viewerHeight: (a = m.target) == null ? undefined : a.height,
                  });
                }
              }
              B.notify({
                ev_type: D,
                payload: w,
              });
            }
          }),
          2,
        );
        var c_ignoreUrls = c_sample_rate[0];
        const tt = c_sample_rate[1];
        const tr = (t, o) =>
          e(undefined, undefined, undefined, function () {
            let e;
            let i;
            let a;
            let s;
            return n(this, (n) => {
              switch (n.label) {
                case 0:
                  if ((e = G.get(t))) {
                    I("命中缓存header", t, e);
                    return [3, 3];
                  }
                  return [3, 1];
                case 1:
                  return [4, j(t)];
                case 2:
                  e = n.sent();
                  G.put(t, e);
                  n.label = 3;
                case 3:
                  s = (i = e || {}).format;
                  a = i.status;
                  i = i.contentLength;
                  I("response header：", s, a);
                  if (o.source === "css") {
                    if (s == null || !s.startsWith("image/")) {
                      Q(t);
                      return [2];
                    }
                  } else if (
                    (s == null || !s.startsWith("image/")) &&
                    Number(a) < 400
                  ) {
                    Q(t);
                    return [2];
                  }
                  if (
                    !Number(
                      (s = r(r({}, o || {}), {
                        format:
                          s &&
                          String(s).startsWith("image/") &&
                          (s = s.split(/[,;]/)[0]) != null
                            ? s.slice(6)
                            : undefined,
                        status: a,
                      })).size,
                    ) &&
                    Number(a) < 400 &&
                    Number(i) > 0
                  ) {
                    s.size = Number(i);
                  }
                  a = N(s);
                  Y(r(r({}, s), a));
                  Q(t);
                  return [2];
              }
            });
          });
        B.subscribe(function (t) {
          let a;
          let s;
          let c;
          let u;
          let f;
          if (t.ev_type === D) {
            let l;
            var h =
              H() -
              ((h = (h = t.payload) == null ? undefined : h.timingDetail) ==
              null
                ? undefined
                : h.responseEnd);
            I("资源加载事件: ", t.payload.name);
            I(
              "资源完成加载时间: ",
              (f = (f = t.payload) == null ? undefined : f.timingDetail) == null
                ? undefined
                : f.responseEnd,
            );
            I("时间间隔: ", h);
            I(
              "是否命中本地缓存: ",
              (f = t.payload) == null ? undefined : f.hitLocalCache,
            );
            if (!(Math.random() < Number(imageSampleRate))) {
              return;
            }
            if (!z) {
              return void K(t.payload.name, r({}, t.payload));
            }
            l = t.payload;
            e(undefined, undefined, undefined, function () {
              let t;
              let e;
              let o;
              let i;
              return n(this, (n) => {
                switch (n.label) {
                  case 0:
                    I("进行中的请求数：".concat(Z.size));
                    if (V - Z.size > 0) {
                      if ((t = G.get(l.name))) {
                        I("命中缓存header", l.name, t);
                        return [3, 3];
                      }
                      return [3, 1];
                    }
                    return [3, 4];
                  case 1:
                    return [4, j(l.name)];
                  case 2:
                    t = n.sent();
                    G.put(l.name, t);
                    n.label = 3;
                  case 3:
                    i = (e = t || {}).format;
                    o = e.status;
                    e = e.contentLength;
                    I("response header：", i, o);
                    if (l.source === "css") {
                      if (i == null || !i.startsWith("image/")) {
                        return [2];
                      }
                    } else if (
                      (i == null || !i.startsWith("image/")) &&
                      Number(o) < 400
                    ) {
                      return [2];
                    }
                    if (
                      !Number(
                        (i = r(r({}, l), {
                          format:
                            i &&
                            String(i).startsWith("image/") &&
                            (i = i.split(/[,;]/)[0]) != null
                              ? i.slice(6)
                              : undefined,
                          status: o,
                        })).size,
                      ) &&
                      Number(o) < 400 &&
                      Number(e) > 0
                    ) {
                      i.size = Number(e);
                    }
                    o = N(i);
                    Y(r(r({}, i), o));
                    return [3, 5];
                  case 4:
                    K(l.name, r({}, l));
                    n.label = 5;
                  case 5:
                    return [2];
                }
              });
            });
          }
          if (t.ev_type === P && z) {
            I("http请求完成事件");
            if (t.payload.remainConnections <= 0) {
              return;
            }
            try {
              for (var v = o(J), p = v.next(); !p.done; p = v.next()) {
                const d = i(p.value, 2);
                const g = d[0];
                if ((A = d[1]) == null || !A.__lock) {
                  K(
                    g,
                    r(r({}, A), {
                      __lock: true,
                    }),
                  );
                  tr(g, A);
                  break;
                }
              }
            } catch (error) {
              a = {
                error,
              };
            } finally {
              try {
                if (p && !p.done && (s = v.return)) {
                  s.call(v);
                }
              } finally {
                if (a) {
                  throw a.error;
                }
              }
            }
          }
          if (t.ev_type === C && t.payload.pageLoad) {
            I("pageload 事件");
            try {
              for (var y = o(J), m = y.next(); !m.done; m = y.next()) {
                const b = i(m.value, 2);
                const w = b[0];
                var A = b[1];
                if (!(V - Z.size > 0)) {
                  break;
                }
                if (!(A != null && A.__lock)) {
                  K(
                    w,
                    r(r({}, A), {
                      __lock: true,
                    }),
                  );
                  tr(w, A);
                }
              }
            } catch (error) {
              c = {
                error,
              };
            } finally {
              try {
                if (m && !m.done && (u = y.return)) {
                  u.call(y);
                }
              } finally {
                if (c) {
                  throw c.error;
                }
              }
            }
            z = true;
          }
        });
        c_ignoreUrls(U);
        q = function () {
          B.notify({
            ev_type: C,
            payload: {
              pageLoad: true,
            },
          });
        };
        c_debug = v();
        c_sampleRate = p();
        if (c_debug && c_sampleRate) {
          if (c_sampleRate.readyState === "complete") {
            q();
          } else {
            c_debug.addEventListener(
              "load",
              function () {
                setTimeout(() => {
                  q();
                }, 0);
              },
              false,
            );
          }
        }
        return [
          function () {
            I("插件销毁");
            $();
            tt();
          },
        ];
      };
    }
  }
  var k = () => {
    const t = new Map();
    return [
      t,
      function (r, e) {
        return t.set(r, e);
      },
      function (r) {
        return t.delete(r);
      },
    ];
  };
  var T = (t, r, e, n) => {
    function o(t, r) {
      if (e && e(r)) {
        u(t, r);
      }
    }
    function a(t) {
      if (n) {
        n(t);
      }
      f(t);
    }
    const s = i(k(), 3);
    const c = s[0];
    var u = s[1];
    var f = s[2];
    if (r) {
      l(r.prototype, "send", I)(o, a);
    }
    if (t) {
      l(t, "fetch", M)(o, a);
    }
    return [c];
  };
  var j = (t) =>
    e(undefined, undefined, undefined, function () {
      let r;
      let e;
      return n(this, (n) => {
        switch (n.label) {
          case 0:
            n.trys.push([0, 2, , 3]);
            return [
              4,
              fetch(t, {
                cache: "force-cache",
              }),
            ];
          case 1:
            e = (r = n.sent()).headers;
            return [
              2,
              {
                status: r.status,
                format: e.get("content-type") || "",
                contentLength: Number(e.get("content-length")) || 0,
              },
            ];
          case 2:
            (function () {
              const t = [];
              for (let r = 0; r < arguments.length; r++) {
                t[r] = arguments[r];
              }
              console.log.apply(
                console,
                a(
                  ["[SDK]", Date.now(), `${h++}`.padStart(8, " ")],
                  i(t),
                  false,
                ),
              );
            })("获取header失败", n.sent());
            return [2, null];
          case 3:
            return [2];
        }
      });
    });
  var N = (t) => {
    const e = {
      needCompress: false,
      needSizeOptim: false,
      needFormatOptim: false,
    };
    if (!t.size) {
      return e;
    }
    i = (l = t).width;
    u = l.height;
    a = (a = l.format) === undefined ? "" : a;
    l = l.size;
    o = navigator && navigator.userAgent.toLocaleLowerCase().includes("chrome");
    f = {};
    if (/(jpeg|png|bmp)/.test(a)) {
      if (i && u) {
        n = Math.round(Math.max(l - i * u * 0.2, 0));
        if (o) {
          i = Math.round(Math.max(l - (i * u) / 6, 0));
          f.needFormatOptim = i > 0;
          if (f.needFormatOptim) {
            f.webpSavings = n;
            f.avifSavings = i;
          }
        } else {
          f.needFormatOptim = n > 0;
          if (f.needFormatOptim) {
            f.webpSavings = n;
          }
        }
      } else {
        f.needFormatOptim = true;
        f.webpSavings = Math.round(/png/.test(a) ? 0.26 * l : 0.3 * l);
        if (o) {
          f.avifSavings = Math.round(/png/.test(a) ? 0.408 * l : 0.44 * l);
        }
      }
    }
    if (/gif/.test(a)) {
      f.needFormatOptim = true;
      f.webpSavings = 0.65 * l;
      if (o) {
        f.avifSavings = 0.65 * l;
      }
    }
    var n;
    var o;
    var i;
    var a;
    let s;
    let c;
    var u = f;
    n = (i = t).width;
    a = i.height;
    o = (o = i.format) === undefined ? "" : o;
    i = i.size;
    l = {};
    if (n && a) {
      if (/(jpeg|bmp)/.test(o)) {
        s = i - n * a * 0.25;
        l.needCompress = s > 0;
        if (l.needCompress) {
          l.compressSavings = Math.round(s);
        }
      }
      if (/png/.test(o)) {
        s = i - n * a * 0.24;
        l.needCompress = s > 0;
        if (l.needCompress) {
          l.compressSavings = Math.round(s);
        }
      }
    }
    var f = l;
    i = (o = t).width;
    a = t.height;
    s = t.viewerWidth;
    l = t.viewerHeight;
    c = t.dpr;
    o = t.size;
    t = {};
    if (i && a && s && l) {
      t.needSizeOptim = (s = 1 - (s * l * c * c) / (i * a)) > 0;
      if (t.needSizeOptim) {
        t.resizeSavings = Math.round((1 - s) * o);
      }
    }
    var l = t;
    return r(r(r(r({}, e), u), f), l);
  };
  var D = "image_resource";
  var P = "http_custom";
  var C = "pageload";
  var ev_type = "image";
  var sample_rate = 0.1;
  var U = "resource";
  var V = 8;
  var B = new b();
  var z = false;
  const Y = {
    sample_rate,
  };
  return {
    version: t,
    imageReport: function (t = Y) {
      return {
        name: "imageReport",
        setup: function (r) {
          r.on("init", function () {
            const e = i(
              ((t, r = {}, e, n = []) => {
                try {
                  const o = t.apply(undefined, a([], i(n), false));
                  return (o && o(r, e)) || [];
                } catch (error) {
                  d(error);
                  return [];
                }
              })(_, t, r.report.bind(r)),
              1,
            )[0];
            r.on("beforeDestroy", function () {
              e();
            });
          });
        },
      };
    },
  };
})();
