function n(t, r) {
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
const o = function () {
  return {};
};
function i(t) {
  return typeof t === "object" && t !== null;
}
function a(t) {
  return typeof t === "function";
}
function s(t, r) {
  return t.initSubject(r);
}
const c = () => Date.now();
function u() {
  if (typeof window === "object" && i(window)) {
    return window;
  }
}
function f() {
  if (typeof document === "object" && i(document)) {
    return document;
  }
}
function l() {
  if (u() && a(window.PerformanceObserver)) {
    return window.PerformanceObserver;
  }
}
const h = (t, r) => {
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
const v = (performance) => {
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
        (a(getEntriesByType) && getEntriesByType.call(performance, r)) || []
      );
    },
    function () {
      const clearResourceTimings = (performance || {}).clearResourceTimings;
      if (a(clearResourceTimings)) {
        clearResourceTimings.call(performance);
      }
    },
    function (r) {
      const getEntriesByName = (performance || {}).getEntriesByName;
      return (
        (a(getEntriesByName) && getEntriesByName.call(performance, r)) || []
      );
    },
  ];
};
const p = (t, r, e, n = false) => {
  t.addEventListener(r, e, n);
  return function () {
    t.removeEventListener(r, e, n);
  };
};
const d = (t) => {
  let r = false;
  return [
    function (e) {
      if (!r) {
        r = true;
        if (t) {
          t(e);
        }
      }
    },
  ];
};
const g = (t, r) => {
  if (i(t)) {
    return {
      ...r,
      ...t,
    };
  }
  return !!t && r;
};
const y = () => {
  const t = RegExp(
    "\\/monitor_web\\/collect|\\/monitor_browser\\/collect\\/batch",
    "i",
  );
  return function (r) {
    return t.test(r);
  };
};
const m = ["resource"];
const b = ["longtask"];
const w = (t, r, e) => {
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
    function (type, o) {
      if (!t || !n) {
        return e && e();
      }
      try {
        const i = {
          type,
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
        type,
        buffered: false,
      });
    },
    function () {
      return n && n.disconnect();
    },
  ];
};
const A = (t, r, e) => {
  const o = n(w(t, r), 3);
  const i = o[0];
  const a = o[2];
  i(e);
  return a;
};
const x = [
  "longtask_0",
  function (t, r) {
    const e = l();
    if (e) {
      r(A(e, t, b));
    }
  },
];
const S = [
  "resource_0",
  function (t, r) {
    const e = l();
    if (e) {
      const n = y();
      r(
        A(
          e,
          function (r) {
            if (!n(r.name)) {
              t(r);
            }
          },
          m,
        ),
      );
    }
  },
];
const E = "js_error";
const O = "http";
const R = "resource_error";
const ev_type = "blank_screen";
const I = [
  "unload_0",
  function (t, r) {
    const e = u();
    if (e) {
      const o = n(d(t), 1)[0];
      const i = function () {
        o();
      };
      const a = [];
      ["unload", "beforeunload", "pagehide"].forEach((t) => {
        a.push(
          (e.addEventListener(t, i, false),
          function () {
            e.removeEventListener(t, i, false);
          }),
        );
      });
      r(function () {
        a.forEach((t) => t());
      });
    }
  },
];
const _ = [
  "domLoad_1",
  function (t, r) {
    const e = u();
    const n = f();
    if (e && n) {
      let i = false;
      let a = o;
      const s = function () {
        setTimeout(() => {
          t();
          i = true;
        }, 0);
      };
      if (n.readyState !== "loading") {
        s();
      } else {
        a = p(n, "DOMContentLoaded", s, false);
      }
      r(
        function () {
          a();
        },
        function (t) {
          if (i) {
            t();
          }
        },
      );
    }
  },
];
const k = [
  "activated_0",
  function (t, r) {
    const e = f();
    if (e) {
      let n = false;
      let i = o;
      const a = function () {
        t();
        n = true;
      };
      if (e && e.prerendering) {
        i = p(e, "prerenderingchange", a, true);
      } else {
        a();
      }
      r(
        function () {
          i();
        },
        function (t) {
          if (n) {
            t();
          }
        },
      );
    }
  },
];
const T = ["SCRIPT", "STYLE", "META", "HEAD"];
const j = [E, O, R];
const N = [
  "performance",
  "performance_longtask",
  "performance_timing",
  "custom",
];
const D = (t, r) => {
  if (
    j.indexOf(r.ev_type) === -1 ||
    (r.ev_type === O && r.payload.response.status < 400) ||
    (t && j.indexOf(t.type) < j.indexOf(r.ev_type))
  ) {
    return t;
  }
  let message = "";
  switch (r.ev_type) {
    case E:
      message = r.payload.error.message;
      break;
    case O:
      message = r.payload.request.url;
      break;
    case R:
      message = r.payload.url;
  }
  return {
    type: r.ev_type,
    message,
    timestamp: c(),
  };
};
const P = (t, r) => ~T.indexOf(t.tagName) || r > 4;
const C = (t) => {
  const r = t.getBoundingClientRect();
  return {
    width: r.width,
    height: r.height,
    top: r.top,
  };
};
const F = (t) => {
  if (t) {
    return document.querySelector(t);
  }
  return document.body;
};
const L = (t, r = 0, e = 0, n = 1.5) => {
  if (!t || P(t, r) || e >= n) {
    return e;
  }
  const o = (() => {
    if (!r) {
      return 0;
    }
    const e = C(t);
    const e_top = e.top;
    const e_height = e.height;
    if (e_top > innerHeight || e_height <= 0) {
      return 0;
    }
    return 1 / (1 << (r - 1));
  })();
  return [].reduceRight.call(
    t.children,
    function (t, e) {
      return L(e, r + 1, t, n);
    },
    e + o,
  );
};
const U = (t) => {
  let r;
  const e = t.cb;
  const t_screenshotUrl = t.screenshotUrl;
  const t_window = t.window;
  const t_document = t.document;
  const t_mask = t.mask;
  const t_partialShot = t.partialShot;
  const t_quality = t.quality;
  const t_rootSelector = t.rootSelector;
  if (
    (() => {
      if (u() && "Promise" in window) {
        return Promise;
      }
    })() &&
    t_window &&
    t_document
  ) {
    if (t_window.html2canvas) {
      return h();
    }
    const l = t_document.createElement("script");
    l.src = t_screenshotUrl;
    l.crossOrigin = "anonymous";
    l.onload = h;
    l.onerror = function () {
      e();
    };
    if ((r = t_document.head) != null) {
      r.appendChild(l);
    }
  }
  function h() {
    (
      t_window.requestIdleCallback ||
      function (t) {
        return t_window.setTimeout(t, 1);
      }
    )(function () {
      if (t_window.html2canvas) {
        t_window
          .html2canvas(
            (t_partialShot &&
              t_rootSelector &&
              t_document.querySelector(t_rootSelector)) ||
              t_document.body,
            {
              scale: 360 / t_window.innerWidth,
              mask: t_mask,
            },
          )
          .then((t) => {
            let r;
            e(
              (r = t.toDataURL("image/jpeg", t_quality)).slice(0, 10) ===
                "data:image"
                ? r
                : V(),
            );
          })
          .catch(() => {
            e(V());
          });
      }
    });
  }
};
function V(t = 192, r = 108) {
  const e = document.createElement("canvas");
  e.width = t;
  e.height = r;
  const n = e.getContext("2d");
  if (n) {
    n.fillStyle = "#ffffff";
    n.fillRect(0, 0, t, r);
  }
  return e.toDataURL("image/jpeg");
}
const B = (t, r, i, s) => {
  let l;
  let p;
  let d;
  let g;
  let y;
  let m;
  let b;
  const w = n(i, 5);
  const A = w[0];
  const x = w[1];
  const S = w[2];
  const E = w[3];
  const O = w[4];
  const s_threshold = s.threshold;
  const s_screenshot = s.screenshot;
  const s_rootSelector = s.rootSelector;
  const s_autoDetect = s.autoDetect;
  const s_ssUrl = s.ssUrl;
  const s_quality = s.quality;
  const s_mask = s.mask;
  const s_partialShot = s.partialShot;
  const s_initDetTime = s.initDetTime;
  const s_runDetTime = s.runDetTime;
  const window_1 = u();
  const document = f();
  const H = window_1.requestAnimationFrame || o;
  const X = window_1.cancelAnimationFrame || o;
  const G = n(v(performance), 2)[1];
  let J = 0;
  let K = false;
  let Q = !s_screenshot;
  const Z = () => {
    const t = F(s_rootSelector);
    if (t) {
      const r = L(t, 0, 0, s_threshold);
      if (r < s_threshold) {
        return [c(), r];
      }
    }
  };
  const $ = function (n, screenshot) {
    if (!K) {
      if ((d = Z())) {
        K = true;
        r.forEach((t) => t());
        r.length = 0;
        t({
          ev_type,
          payload: {
            timestamp: d[0],
            score: d[1],
            screenshot,
            error: g,
            serialized_dom: (function t(r, n = 0, o = true) {
              if (!r || P(r, n)) {
                return "";
              }
              const i = {
                ...C(r),
                id: r.getAttribute("id"),
                class: r.getAttribute("class"),
              };
              const a = Object.keys(i).reduce(
                (acc, key) =>
                  "" +
                  acc +
                  (typeof i[key] === "number" || i[key]
                    ? " " + key + '="' + i[key] + '"'
                    : ""),
                "",
              );
              const s = r.tagName.toLowerCase();
              return (
                "<" +
                s +
                a +
                (o ? ' innerHeight="' + innerHeight + '"' : "") +
                ">" +
                [].reduce.call(
                  r.children,
                  function (r, e) {
                    return r + t(e, n + 1, false);
                  },
                  "",
                ) +
                "</" +
                s +
                ">"
              );
            })(F(s_rootSelector)),
          },
          overrides: {
            timestamp: n || d[0],
          },
        });
      }
    }
  };
  const tt = function () {
    if (b) {
      clearTimeout(b);
    }
    if (y) {
      clearTimeout(y);
    }
    y = window_1.setTimeout(function () {
      m = H(function () {
        if ((d = Z())) {
          tr();
        }
      });
    }, 1000);
  };
  l = function () {
    if (d && !K) {
      if (Q) {
        $();
      } else {
        Q = true;
        U({
          cb: $.bind(null, c()),
          screenshotUrl: s_ssUrl,
          window: window_1,
          document,
          mask: s_mask,
          partialShot: s_partialShot,
          quality: s_quality,
          rootSelector: s_rootSelector,
        });
      }
    }
  };
  var tr = () => {
    if (b) {
      clearTimeout(b);
    }
    p = c();
    b = window_1.setTimeout(
      function () {
        if (J > p) {
          tt();
        } else {
          l();
        }
      },
      G() > 10000 ? s_runDetTime : s_initDetTime,
    );
  };
  r.push(
    O[0](function () {
      if (g) {
        $();
      }
    }),
  );
  if (s_autoDetect) {
    r.push(
      A[0](function () {
        const t = x();
        r.push(
          t[0](function () {
            let t;
            const e = n(
              h(
                (() => {
                  if (u() && a(window.MutationObserver)) {
                    return window.MutationObserver;
                  }
                })(),
                tt,
              ),
              2,
            );
            const o = e[0];
            const i = e[1];
            r.push(function () {
              clearTimeout(y);
              clearTimeout(b);
              X(m);
              if (i) {
                i();
              }
            });
            o((t = f()) == null ? undefined : t.body, {
              subtree: true,
              childList: true,
            });
            r.push(
              S()[0](function () {
                if (y) {
                  tt();
                }
              }),
            );
            r.push(
              E()[0](function () {
                if (y) {
                  tt();
                }
              }),
            );
            tt();
          }),
        );
      }),
    );
  }
  return [
    function (t) {
      if (!(K || ~N.indexOf(t.ev_type))) {
        J = c();
        if (g && J - g.timestamp > 10000) {
          g = undefined;
        }
        g = D(g, t);
      }
    },
    tt,
  ];
};
const z = "blankScreen";
export const Yk = function (t = {}) {
  return {
    name: z,
    setup: function (r) {
      let e;
      e = t;
      r.on("init", function () {
        let t;
        const o = {
          autoDetect: true,
          threshold: 1.5,
          screenshot: true,
          mask: false,
          ssUrl: r.config().pluginPathPrefix + "/screenshot.min.js",
          partialShot: true,
          quality: 0.1,
          initDetTime: 8000,
          runDetTime: 4000,
        };
        const i = e
          ? g(e, o)
          : g((t = r.config()) == null ? undefined : t.plugins[z], o);
        if (i) {
          ((t, r) => {
            const e = f();
            const o = u();
            if (e && o) {
              const i = [];
              const a = n(
                B(
                  t.report.bind(t),
                  i,
                  [
                    s(t, k),
                    function () {
                      return s(t, _);
                    },
                    function () {
                      return s(t, x);
                    },
                    function () {
                      return s(t, S);
                    },
                    s(t, I),
                  ],
                  r,
                ),
                2,
              );
              const c = a[0];
              const l = a[1];
              const h = function (t) {
                c(t);
                return t;
              };
              t.on("report", h);
              i.push(function () {
                t.off("report", h);
              });
              t.destroyAgent.set(z, ev_type, i);
              t.provide("detectBlankScreen", l);
            }
          })(r, i);
        }
      });
    },
  };
};
