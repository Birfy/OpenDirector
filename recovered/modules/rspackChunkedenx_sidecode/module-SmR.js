let e;
function o(t, r) {
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
function i(t, r, e) {
  if (e || arguments.length == 2) {
    var n;
    for (let o = 0, i = r.length; o < i; o++) {
      if (!(!n && o in r)) {
        if (!n) {
          n = Array.prototype.slice.call(r, 0, o);
        }
        n[o] = r[o];
      }
    }
  }
  return t.concat(n || Array.prototype.slice.call(r));
}
const a = function () {
  return {};
};
function s(t) {
  return typeof t === "object" && t !== null;
}
function u(t) {
  return Object.prototype.toString.call(t) === "[object Array]";
}
function f(t) {
  return typeof t === "function";
}
function l(t) {
  return typeof t === "string";
}
const h = () => {
  const t = {};
  return [
    t,
    function (r, e) {
      return (t[r] = e);
    },
    function (r) {
      return delete t[r];
    },
  ];
};
const v = (t, r) => {
  let e;
  const n =
    u((e = t || [])) && e.length
      ? ((t) => {
          const r = [];
          for (let e = t.length, n = 0; n < e; n++) {
            const o = t[n];
            if (l(o)) {
              r.push(o.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"));
            } else if (o && o.source) {
              r.push(o.source);
            }
          }
          return RegExp(r.join("|"), "i");
        })(e)
      : null;
  return !!n && n.test(r);
};
const p = (t, r, e) =>
  function () {
    const n = [];
    for (let s = 0; s < arguments.length; s++) {
      n[s] = arguments[s];
    }
    if (!t) {
      return a;
    }
    const c = t[r];
    let u = e.apply(undefined, i([c], o(n), false));
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
function d(t, r) {
  return t.initSubject(r);
}
const g = () => Date.now();
function y() {
  if (typeof window === "object" && s(window)) {
    return window;
  }
}
function m() {
  if (typeof document === "object" && s(document)) {
    return document;
  }
}
function b() {
  if (y() && f(window.PerformanceObserver)) {
    return window.PerformanceObserver;
  }
}
const w = (t) => {
  let r;
  return {
    pid: t.pid,
    view_id: t.viewId,
    url: (r = y() && y() && window.location) ? r.href : "",
  };
};
const A = (t) => {
  const r = w(t.config());
  r.context = t.context ? t.context.toString() : {};
  return r;
};
const x = (t, r = false) => {
  const overrides = A(t);
  if (r) {
    overrides.timestamp = g();
  }
  return function (r) {
    t.report({
      ...r,
      overrides,
    });
  };
};
const S = (MutationObserver, r) => {
  const e = MutationObserver && new MutationObserver(r);
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
const E = (performance) => {
  const r = (performance && performance.timing) || undefined;
  return [
    r,
    function () {
      if (performance && performance.now) {
        return performance.now();
      }
      return (
        (Date.now ? Date.now() : +new Date()) - ((r && r.navigationStart) || 0)
      );
    },
    function (r) {
      const getEntriesByType = (performance || {}).getEntriesByType;
      return (
        (f(getEntriesByType) && getEntriesByType.call(performance, r)) || []
      );
    },
    function () {
      const clearResourceTimings = (performance || {}).clearResourceTimings;
      if (f(clearResourceTimings)) {
        clearResourceTimings.call(performance);
      }
    },
    function (r) {
      const getEntriesByName = (performance || {}).getEntriesByName;
      return (
        (f(getEntriesByName) && getEntriesByName.call(performance, r)) || []
      );
    },
  ];
};
const O = () => {
  const t = RegExp(
    "\\/monitor_web\\/collect|\\/monitor_browser\\/collect\\/batch",
    "i",
  );
  return function (r) {
    return t.test(r);
  };
};
const R = function (t) {
  return function () {
    let r;
    const e = [];
    for (let n = 0; n < arguments.length; n++) {
      e[n] = arguments[n];
    }
    r = o(e, 2);
    this._method = r[0];
    this._url = r[1];
    return t.apply(this, e);
  };
};
const M = function (t) {
  return function () {
    const r = [];
    for (let e = 0; e < arguments.length; e++) {
      r[e] = arguments[e];
    }
    this._reqHeaders = this._reqHeaders || {};
    const n = o(r, 2);
    const i = n[0];
    const a = n[1];
    this._reqHeaders[i] = a;
    return t && t.apply(this, r);
  };
};
const I = function (t, r) {
  const e = O();
  return function () {
    const n = [];
    for (let o = 0; o < arguments.length; o++) {
      n[o] = arguments[o];
    }
    this._start = g();
    this._data = n == null ? undefined : n[0];
    if (!e(this._url)) {
      let i;
      const a = r([this._method, this._url, this._start, this]);
      ((i = this),
      p(
        i,
        "onreadystatechange",
        (t) =>
          function () {
            const r = [];
            for (let e = 0; e < arguments.length; e++) {
              r[e] = arguments[e];
            }
            if (this.readyState === 4) {
              a(i);
            }
            return t && t.apply(this, r);
          },
      ))();
    }
    return t.apply(this, n);
  };
};
const _ = function (t, r) {
  return function (e, n = {}) {
    const o = r([e, n]);
    const i = t(e, n);
    i.then(
      (t) => {
        o(t);
      },
      () => {
        o(undefined);
      },
    );
    return i;
  };
};
const k = [
  "fetch_0",
  function (t, r) {
    const e = y();
    if (e && fetch) {
      const n = [];
      n.push(p(e, "fetch", _)(t));
      r(function () {
        n.forEach((t) => t());
      });
    }
  },
];
const T = ["resource"];
const j = ["longtask"];
const N = (t, r, e) => {
  const n =
    t &&
    new t(function (t, n) {
      if (t.getEntries) {
        t.getEntries().forEach((t, e, o) => r(t, e, o, n));
      } else if (e) {
        e();
      }
    });
  return [
    function (entryTypes) {
      if (!t || !n) {
        return e && e();
      }
      try {
        n.observe({
          entryTypes,
        });
      } catch (t) {
        return e && e();
      }
    },
    function (r, o) {
      if (!t || !n) {
        return e && e();
      }
      try {
        const i = {
          type: r,
          buffered: true,
        };
        if (o !== undefined) {
          i.durationThreshold = o;
        }
        n.observe(i);
      } catch (t) {
        return e && e();
      }
      n.observe({
        type: r,
        buffered: false,
      });
    },
    function () {
      return n && n.disconnect();
    },
  ];
};
const D = (t, r, e) => {
  const n = o(N(t, r), 3);
  const i = n[0];
  const a = n[2];
  i(e);
  return a;
};
const P = [
  "longtask_0",
  function (t, r) {
    const e = b();
    if (e) {
      r(D(e, t, j));
    }
  },
];
const C = [
  "resource_0",
  function (t, r) {
    const e = b();
    if (e) {
      const n = O();
      r(
        D(
          e,
          function (r) {
            if (!n(r.name)) {
              t(r);
            }
          },
          T,
        ),
      );
    }
  },
];
const F = "http";
const L = "resource_error";
const U = "resource";
const V = "performance_longtask";
const ev_type = "action";
const z = ["BODY", "HTML", "HEAD"];
const Y = "data-apm-action";
const W = (window, r, e, n) => {
  let o;
  let i;
  let a = false;
  const s = function () {
    window.clearTimeout(o);
    if (a) {
      o = window.setTimeout(function () {
        r();
      }, 100);
    }
  };
  return [
    function () {
      a = true;
      window.clearTimeout(i);
      i = window.setTimeout(function () {
        r(true);
        e();
      }, n);
      s();
    },
    s,
    function () {
      a = false;
      window.clearTimeout(o);
      window.clearTimeout(i);
    },
  ];
};
const q = () => {
  if (e === undefined) {
    return (e = "closest" in HTMLElement.prototype);
  }
  return e;
};
const H = (t, r, e = 10) => {
  for (let n = t, o = 0; o < e && n; o++) {
    if (~z.indexOf(n.nodeName)) {
      return;
    }
    if (n.hasAttribute(r)) {
      return n;
    }
    n = n.parentElement;
  }
};
const X = (t, r) => {
  if ((e = q() ? t.closest("[" + r + "]") : H(t, r))) {
    var e;
    return e.getAttribute(r).trim();
  }
};
const G = (t) => {
  for (var r = t, e = false; r;) {
    if (r.tagName.toUpperCase() === "SVG") {
      r = null;
      e = true;
    } else {
      r = r.parentElement;
    }
  }
  return e;
};
const J = (t) => {
  const t_children = t.children;
  return (
    !t_children.length ||
    ![].slice.call(t_children).some((t) => t.children.length > 0)
  );
};
const K = (target) => {
  const r = target.tagName.toUpperCase();
  return (
    !(target.nodeType !== 1 || z.includes(r) || G(target)) &&
    (!target.style || target.style.display !== "none") &&
    (!!(["A", "BUTTON", "INPUT", "TEXTAREA"].includes(r) || X(target, Y)) ||
      !!J(target))
  );
};
function Q(t, r) {
  if (
    (e = q()
      ? t.closest("[" + r + "]")
      : ((t, r, e = 10) => {
          for (let n = t, o = 0; o < e && n; o++) {
            if (~z.indexOf(n.nodeName)) {
              return;
            }
            if (n.hasAttribute(r)) {
              return n;
            }
            n = n.parentElement;
          }
        })(t, r))
  ) {
    var e;
    return e.getAttribute(r).trim();
  }
}
const Z = (t, r) =>
  !!(
    t &&
    t.length &&
    r &&
    v(
      t,
      ((t) => {
        const r = m();
        if (!r || !t) {
          return "";
        }
        const e = r.createElement("a");
        e.href = t;
        return e.href;
      })(r),
    )
  );
const $ = (t, r) => {
  let e;
  if (r.ev_type === F) {
    e = r.payload.request.url;
  } else if (r.ev_type === U && "name" in r.payload) {
    e = r.payload.name;
  } else if (r.ev_type === L) {
    e = r.payload.url;
  }
  return Z(t, e);
};
const tt = ["click"];
const tr = {
  capture: true,
};
const te = (t, r, e, n) => {
  const i = o(r, 2);
  const s = i[0];
  const c = i[1];
  const u = o(h(), 3);
  const f = u[0];
  const l = u[1];
  const v = u[2];
  let p = 0;
  t.push(
    s[0](function (t) {
      const r = o(t, 2);
      r[0];
      if (Z(n, r[1])) {
        return a;
      }
      const i = (p += 1);
      l(i, g());
      e();
      return function () {
        v(i);
        e();
      };
    }),
  );
  t.push(
    c[0](function (t) {
      const r = o(t, 1)[0];
      if (Z(n, typeof r === "string" ? r : r.url)) {
        return a;
      }
      const i = (p += 1);
      l(i, g());
      e();
      return function () {
        v(i);
        e();
      };
    }),
  );
  return f;
};
const tn = (t, r, e, a) => {
  const s = o(e, 4);
  const c = s[0];
  const f = s[1];
  const h = s[2];
  const v = s[3];
  const a_types = a.types;
  const a_pure = a.pure;
  const a_ignoreUrls = a.ignoreUrls;
  let y = null;
  let m = null;
  let b;
  let w = [];
  let A = 0;
  const x = o(E(performance), 2)[1];
  const O = function (t) {
    if (
      y &&
      (a_pure || Object.keys(y.metrics).length) &&
      (!Object.keys(j).length || t)
    ) {
      if (y.metrics[V]) {
        y.metrics[V].duration = A;
      }
      const r =
        w.length > 0
          ? Math.max.apply(Math, i([], o(w), false)) -
            Math.min.apply(Math, i([], o(w), false))
          : 0;
      if (y.metrics[F]) {
        y.metrics[F].duration = r;
      }
      const duration = x() - y.start_time;
      if (b) {
        b({
          ev_type,
          payload: {
            ...y,
            duration,
            frontend_time: duration - r,
          },
        });
      }
      R();
    }
  };
  var R = function () {
    T();
    if (y) {
      m = {
        start_time: y.start_time,
        id: y.id,
      };
    }
    y = null;
    w = [];
    A = 0;
  };
  const M = (t) => {
    let r;
    let e;
    if (y) {
      y.metrics[t] = {
        count:
          ((e = (r = y.metrics[t]) == null ? undefined : r.count) != null
            ? e
            : 0) + 1,
      };
    }
  };
  const I = o(W(window, O, R, 10000), 3);
  const _ = I[0];
  const k = I[1];
  var T = I[2];
  var j = te(r, [c, f], k, a_ignoreUrls);
  const N = o(S(MutationObserver, k), 2);
  const D = N[0];
  const P = N[1];
  D();
  r.push(P);
  r.push(T);
  r.push(
    h[0](function (t) {
      const t_startTime = t.startTime;
      const t_duration = t.duration;
      k();
      if (y && y.start_time <= t_startTime + 50) {
        A += t_duration;
        M(V);
      }
    }),
  );
  r.push(
    v[0](function (t) {
      const t_name = t.name;
      const t_startTime = t.startTime;
      const t_duration = t.duration;
      const t_initiatorType = t.initiatorType;
      if (!Z(a_ignoreUrls, t_name)) {
        k();
        if (y && y.start_time < t_startTime) {
          if (["xmlhttprequest", "fetch"].includes(t_initiatorType)) {
            w.push(t_startTime, t_startTime + t_duration);
            M(F);
          }
          if (
            !["xmlhttprequest", "fetch", "beacon"].includes(t_initiatorType)
          ) {
            M(U);
          }
        }
      }
    }),
  );
  const C = (target, e) => {
    const id = (() => {
      const t = (() => {
        const t = Array(16);
        let r = 0;
        for (let e = 0; e < 16; e++) {
          if ((3 & e) == 0) {
            r = 4294967296 * Math.random();
          }
          t[e] = (r >>> ((3 & e) << 3)) & 255;
        }
        return t;
      })();
      t[6] = (15 & t[6]) | 64;
      t[8] = (63 & t[8]) | 128;
      const r = [];
      for (let e = 0; e < 256; ++e) {
        r[e] = (e + 256).toString(16).substr(1);
      }
      let n = 0;
      return [
        r[t[n++]],
        r[t[n++]],
        r[t[n++]],
        r[t[n++]],
        "-",
        r[t[n++]],
        r[t[n++]],
        "-",
        r[t[n++]],
        r[t[n++]],
        "-",
        r[t[n++]],
        r[t[n++]],
        "-",
        r[t[n++]],
        r[t[n++]],
        r[t[n++]],
        r[t[n++]],
        r[t[n++]],
        r[t[n++]],
      ].join("");
    })();
    y = {
      start_time: o(E(performance), 2)[1](),
      id,
      type: e,
      target,
      metrics: {},
    };
    b = t();
    _();
  };
  const z = function (t) {
    let r;
    let e;
    let n;
    let o;
    O(true);
    R();
    if (t.target instanceof HTMLElement && K(t.target)) {
      r = X((e = t.target), Y) || e.innerText;
    } else {
      if (
        !(t.target instanceof SVGElement) ||
        ((o = (n = t.target).tagName.toUpperCase()),
        n.nodeType !== 1 ||
          (n.style && n.style.display === "none") ||
          (["SVG"].includes(o) || Q(n, Y), 0))
      ) {
        return;
      }
      r = Q(t.target, Y) || "ANONYMOUS_SVG";
    }
    if (r) {
      C(
        {
          name: r,
          path: ((t) => {
            try {
              for (
                var r = t, e = [], n = 0, o = 0, i;
                r &&
                n++ < 5 &&
                ((i = ((t) => {
                  let r;
                  let e;
                  let n;
                  let o;
                  let i;
                  let a;
                  const s = [];
                  if (!t || !t.tagName) {
                    return "";
                  }
                  s.push(t.tagName.toLowerCase());
                  if (t.id) {
                    return "#" + t.id;
                  }
                  const t_className = t.className;
                  if (t_className && l(t_className)) {
                    n = t_className.split(/\s+/);
                    for (a = 0; a < n.length; a++) {
                      s.push("." + n[a]);
                    }
                  }
                  const u = ["type", "name", "title", "alt"];
                  for (a = 0; a < u.length; a++) {
                    o = u[a];
                    if ((i = t.getAttribute(o))) {
                      s.push("[" + o + '="' + i + '"]');
                    }
                  }
                  for (
                    var f = t, h = 1, v = true;
                    (f = f.previousElementSibling);
                  ) {
                    if (
                      ((r = f.tagName) == null
                        ? undefined
                        : r.toLowerCase()) ===
                      ((e = t.tagName) == null ? undefined : e.toLowerCase())
                    ) {
                      if (
                        f.className === t.className &&
                        u.every(
                          (r) =>
                            t.getAttribute(r) ===
                            (f == null ? undefined : f.getAttribute(r)),
                        )
                      ) {
                        v = false;
                      }
                      h++;
                    }
                  }
                  if (h > 1 && !v) {
                    s.push(":nth-of-type(" + h + ")");
                  }
                  return s.join("");
                })(r)),
                i !== "html" &&
                  (!(n > 1) || !(o + 3 * e.length + i.length >= 256)));
              ) {
                e.push(i);
                o += i.length;
                r = r.parentNode;
              }
              return e.reverse().join(" > ");
            } catch (t) {
              return "<unknown>";
            }
          })(t.target),
        },
        t.type,
      );
    }
  };
  if (a_types) {
    a_types.forEach((t) => {
      let e;
      let n;
      if (
        ((t, r) => {
          if (!u(t) || t.length === 0) {
            return false;
          }
          for (let e = 0; e < t.length;) {
            if (t[e] === r) {
              return true;
            }
            e++;
          }
          return false;
        })(tt, t)
      ) {
        r.push(
          ((e = document),
          (n = tr) === undefined && (n = false),
          e.addEventListener(t, z, n),
          function () {
            e.removeEventListener(t, z, n);
          }),
        );
      }
    });
  }
  return [
    function (t) {
      if (!$(a_ignoreUrls, t)) {
        if (t.ev_type === "pageview") {
          O(true);
          R();
          return;
        }
        if (t.ev_type === F) {
          var r =
            t.payload.response.timing && t.payload.response.timing.startTime;
          if (r) {
            if (y && r > y.start_time) {
              return y.id;
            }
            if (m && r > m.start_time) {
              return m.id;
            }
            return undefined;
          }
          return undefined;
        }
        if (t.ev_type === V) {
          var r =
            t.payload.longtasks.length && t.payload.longtasks[0].startTime + 50;
          if (y && r && r > y.start_time) {
            return y.id;
          }
          return undefined;
        }
        if (y) {
          if (t.ev_type === "js_error" || t.ev_type === L) {
            M(t.ev_type);
          }
          return y.id;
        }
      }
    },
    function (name, r) {
      O(true);
      R();
      C(
        {
          name,
        },
        r,
      );
    },
  ];
};
const to = "action";
const ti = {
  types: ["click"],
  pure: true,
};
export const S4 = function (t) {
  return {
    name: to,
    setup: function (r) {
      ((t, r = ti) => {
        const e = [];
        const n = m();
        const i = y();
        if (n && i) {
          let a;
          const s = o(
            tn(
              () => x(t, true),
              e,
              [
                d(t, [
                  "xhr_0",
                  ((a = XMLHttpRequest && XMLHttpRequest.prototype),
                  function (t, r) {
                    if (a) {
                      const e = [];
                      e.push(p(a, "open", R)());
                      e.push(p(a, "setRequestHeader", M)());
                      e.push(p(a, "send", I)(t));
                      r(function () {
                        e.forEach((t) => t());
                      });
                    }
                  }),
                ]),
                d(t, k),
                d(t, P),
                d(t, C),
              ],
              r,
            ),
            2,
          );
          const c = s[0];
          const u = s[1];
          const f = function (t) {
            const r = c(t);
            if (r && t.extra) {
              t.extra.action_id = r;
            }
            return t;
          };
          t.on("report", f);
          e.push(function () {
            t.off("report", f);
          });
          t.provide("startAction", u);
          t.destroyAgent.set(to, ev_type, e);
        }
      })(r, t);
    },
  };
};
