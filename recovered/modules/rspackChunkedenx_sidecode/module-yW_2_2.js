import { a as a_1 } from "./module-l_2_2.js";
let n;
let o;
let a;
let i;
let s;
let c;
let u;
let f;
let l;
let h;
let p;
let v;
let d;
let g;
let y;
let m;
let isHighDensity;
function w() {
  let t = 0;
  for (var r = 0, e = arguments.length; r < e; r++) {
    t += arguments[r].length;
  }
  const n = Array(t);
  let o = 0;
  for (r = 0; r < e; r++) {
    const a = arguments[r];
    for (let i = 0, s = a.length; i < s; i++, o++) {
      n[o] = a[i];
    }
  }
  return n;
}
let x;
let E;
let S;
const O = "retryTimes";
const R = "succeeded";
const M = "failed";
const I = "maxRetryCount";
const k = "onRetry";
const T = "onSuccess";
const j = "onFail";
const F = "domain";
const N = "extraHashAttrs";
const P = "_assetsRetryProxy";
const C = "_assetsRetryOnerror";
const D = "script";
const L = "link";
const _ = "data-assets-retry-hooked";
const U = "data-assets-retry-ignore";
const V = "data-retry-id";
const W = window;
const window_document = window.document;
const W_HTMLElement = W.HTMLElement;
const W_HTMLScriptElement = W.HTMLScriptElement;
const W_HTMLStyleElement = W.HTMLStyleElement;
const W_HTMLLinkElement = W.HTMLLinkElement;
const W_HTMLImageElement = W.HTMLImageElement;
const J = function (t) {
  return t;
};
const q = function () {};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const Q = (t, r, e) => {
  const n = t.indexOf(r);
  if (n === -1) {
    return t;
  }
  return t.substring(0, n) + e + t.substring(n + r.length);
};
const Z = (t) => [].slice.call(t);
const $ = (t) => {
  for (
    var r = Object.getPrototypeOf ? Object.getPrototypeOf : (t) => t.__proto__,
      e = Object.keys(t);
    r(t);
  ) {
    e = e.concat(Object.keys(r(t)));
    t = r(t);
  }
  return e.filter((t) => t !== "constructor");
};
const tt = (t, r) => {
  try {
    return typeof t[r] === "function";
  } catch (t) {
    return false;
  }
};
const tr = (t, r, e = q, n = false) => {
  const o = n || t.defer || t.async;
  if (
    window_document.readyState !== "loading" ||
    /Edge|MSIE|rv:/i.test(navigator.userAgent) ||
    o
  ) {
    const a = window_document.createElement(D);
    Object.keys(W_HTMLScriptElement.prototype).forEach((r) => {
      if (r !== "src" && t[r] && typeof t[r] !== "object") {
        try {
          a[r] = t[r];
        } catch (t) {}
      }
    });
    a.src = r;
    a.onload = t.onload;
    a.onerror = t.onerror;
    a.setAttribute(V, to());
    const i = t.getAttribute("nonce");
    if (i) {
      a.setAttribute("nonce", i);
    }
    window_document.getElementsByTagName("head")[0].appendChild(a);
  } else {
    const s = to();
    const c = t.outerHTML
      .replace(/data-retry-id="[^"]+"/, "")
      .replace(/src=(?:"[^"]+"|.+)([ >])/, V + "=" + s + ' src="' + r + '"$1');
    window_document.write(c);
    const u = window_document.querySelector("script[" + V + '="' + s + '"]');
    if (u) {
      u.onload = e;
    }
  }
};
const te = (t) => {
  try {
    return t.rules;
  } catch (r) {
    try {
      return t.cssRules;
    } catch (t) {
      return null;
    }
  }
};
const tn = (t, r, e) => {
  const n = window_document.createElement(L);
  Object.keys(W_HTMLLinkElement.prototype).forEach((r) => {
    if (r !== "href" && t[r] && typeof t[r] !== "object") {
      try {
        n[r] = t[r];
      } catch (t) {}
    }
  });
  n.href = r;
  n.onload = e || t.onload;
  n.onerror = t.onerror;
  n.setAttribute(V, to());
  window_document.getElementsByTagName("head")[0].appendChild(n);
};
var to = () => Math.random().toString(36).slice(2);
const ta = (t) => {
  if (t instanceof W_HTMLScriptElement || t instanceof W_HTMLImageElement) {
    return t.src;
  }
  if (t instanceof W_HTMLLinkElement) {
    return t.href;
  }
  return "";
};
const ti = {};
const ts = (t) => {
  if (Array.isArray(t)) {
    return t.reduce((acc, item, index, n) => {
      acc[item] = n[(index + 1) % n.length];
      return acc;
    }, {});
  }
  return t;
};
const tc = (t, r) =>
  Object.keys(r)
    .filter((r) => t.indexOf(r) > -1)
    .sort((t, r) => r.length - t.length)[0];
const tu = (t, r, e) => {
  let s;
  const c = tf(t, r);
  const u = c[0];
  const f = c[1];
  if (u) {
    if ((s = ti[u]) == null ? undefined : s[O]) {
      if (ti[u][O][e.tagName] === undefined) {
        ti[u] = {
          ...ti[u],
          ...{
            [O]: {
              ...ti[u][O],
              ...{
                [e.tagName]: 0,
              },
            },
          },
        };
      } else {
        ti[u] = ti[u];
      }
    } else {
      ti[u] = {
        [O]: {
          [e.tagName]: 0,
        },
        [M]: [],
        [R]: [],
      };
    }
    return [f, ti[u]];
  }
  return [];
};
var tf = (t, r) => {
  const e = tc(t, r);
  if (e) {
    return [t.substr(t.indexOf(e) + e.length, t.length), e];
  }
  return ["", ""];
};
try {
  E = w($(W_HTMLScriptElement.prototype), $(W_HTMLLinkElement.prototype));
  S = {};
  E.forEach((t) => {
    S[t] = true;
  });
  x = Object.keys(S);
} catch (t) {}
const tl = {};
const th = (t, r) => {
  const e = r[I];
  const n = ts(r[F]);
  const o = r[k];
  return x.reduce((acc, item) => {
    const i = ((t) => {
      if (tl[t] === undefined) {
        const r = tt(W_HTMLScriptElement.prototype, t);
        tl[t] = r;
      }
      return tl[t];
    })(item);
    acc[item] = i
      ? {
          value: function () {
            return t[P][item].apply(t[P], arguments);
          },
        }
      : item === "onerror"
        ? {
            set: function (r) {
              const a = t[P];
              t[C] = r;
              a.onerror = function (r) {
                if (typeof r !== "string") {
                  if (r.stopPropagation) {
                    r.stopPropagation();
                  }
                  const i = () => {
                    let e;
                    if (typeof (e = t[C]) !== "function") {
                      return null;
                    }
                    return e.call(a, r);
                  };
                  const s = ta(a);
                  const c = tu(s, n, a);
                  const u = c[0];
                  const f = c[1];
                  const l = a.hasAttribute(U);
                  if (!u || !f || l) {
                    return i();
                  }
                  const h = o(Q(s, u, n[u]), s, f);
                  if (h === null) {
                    return i();
                  }
                  if (typeof h !== "string") {
                    throw Error(
                      'a string should be returned in "onRetry" function',
                    );
                  }
                  if (f[O][a.tagName] <= e) {
                    if (a instanceof W_HTMLScriptElement) {
                      tr(a, h, q, true);
                    } else if (a instanceof W_HTMLLinkElement) {
                      tn(a, h);
                    }
                  } else {
                    i();
                  }
                }
              };
            },
            get: function () {
              return t[P][item];
            },
          }
        : item === "onload"
          ? {
              set: function (r) {
                t._assetsRetryOnload = r;
                t[P].onload = function (e) {
                  if (r && !r._called) {
                    r._called = true;
                    r.call(t[P], e);
                  }
                };
              },
              get: function () {
                return t[P][item];
              },
            }
          : {
              set: function (r) {
                t[P][item] = r;
              },
              get: function () {
                return t[P][item];
              },
            };
    return acc;
  }, {});
};
const tp = (t) => {
  const window_document_createElement = window_document.createElement;
  window_document.createElement = function (e, n) {
    let o;
    let a;
    let i;
    let s;
    if (e === D || e === L) {
      o = window_document_createElement.call(window_document, e);
      o.setAttribute(_, "true");
      s = th((((a = {})[P] = o), (a[C] = q), (i = a)), t);
      Object.defineProperties(i, s);
      i.onload = q;
      i.onerror = q;
      return i;
    }
    return window_document_createElement.call(window_document, e, n);
  };
};
const tv = (t) => {
  Object.keys(t)
    .filter((r) => tt(t, r))
    .forEach((r) => {
      const e = t[r];
      t[r] = function () {
        const t = [].slice.call(arguments).map((t) => {
          if (t && hasOwnProperty.call(t, P)) {
            return t[P];
          }
          return t;
        });
        return e.apply(this, t);
      };
    });
};
const td = {};
const tg = {};
const ty = [];
const tm = (t, r) => {
  const e = ["backgroundImage", "borderImage", "listStyleImage"];
  t.forEach((t) => {
    const n = te(t);
    if (n !== null) {
      const o = Z(n);
      o.forEach((n) => {
        e.forEach((e) => {
          ((t, r, e, n, o) => {
            const a = o[F];
            const i = o[k];
            const s = r.style && r.style[t];
            if (s && !/^url\(["']?data:/.test(s)) {
              const c = s.match(/^url\(["']?(.+?)["']?\)/) || [];
              c[0];
              const u = c[1];
              if (u) {
                const f = tc(u, a);
                if (f && a[f]) {
                  const l = Object.keys(a)
                    .map((t) => 'url("' + i(Q(u, f, t), u, null) + '")')
                    .join(",");
                  const h =
                    r.selectorText +
                    "{ " +
                    t.replace(
                      /([a-z])([A-Z])/g,
                      (t, r, e) => r + "-" + e.toLowerCase(),
                    ) +
                    ": " +
                    l +
                    " !important; }";
                  try {
                    e.insertRule(h, n.length);
                  } catch (t) {
                    e.insertRule(h, 0);
                  }
                }
              }
            }
          })(e, n, t, o, r);
        });
      });
      if (t.href) {
        tg[t.href] = true;
      }
      if (t.ownerNode instanceof W_HTMLStyleElement) {
        ty.push(t.ownerNode);
      }
    }
  });
};
const tA = "76px";
const tw = "44px";
const tx = "40px";
const tE = parseFloat(tA) + parseFloat("0px");
const tS = parseFloat(tx) + parseFloat(tw) + parseFloat("16px");
const tO = parseFloat("2199px") - tS - tE;
const tR = parseFloat("1800px") - tS - tE;
const tM = parseFloat("1536px") - tS - tE;
const tI = parseFloat("1279px") - tS - tE;
const tk = parseFloat("810px") - tS - tE;
const tT = Math.max(0, parseFloat("0px") - tS - tE);
const tj = parseFloat("2px");
const tF = parseFloat("6");
const tN = parseFloat("5");
const tP = parseFloat("5");
const tC = parseFloat("5");
const tD = parseFloat("3");
const tL = parseFloat("2");
const t_ = parseFloat("12px");
const tU = parseFloat("5");
const tV = parseFloat("4");
const tW = parseFloat("4");
const tY = parseFloat("3");
const tB = parseFloat("2");
const tz = parseFloat("1");
const tX = parseFloat("12px");
const tH = parseFloat("5");
const tG = parseFloat("4");
const tJ = parseFloat("4");
const tq = parseFloat("3");
const tK = parseFloat("2");
const tQ = parseFloat("1");
parseFloat("965px");
parseFloat("1287px");
parseFloat("1529px");
const tZ = {
  gap: tj,
  breakpoints: {
    xxl: {
      minWidth: tO,
      columnCount: tF,
    },
    xl: {
      minWidth: tR,
      columnCount: tN,
    },
    lg: {
      minWidth: tM,
      columnCount: tP,
    },
    md: {
      minWidth: tI,
      columnCount: tC,
    },
    sm: {
      minWidth: tk,
      columnCount: tD,
    },
    xs: {
      minWidth: tT,
      columnCount: tL,
    },
  },
};
parseFloat("3");
parseFloat("4");
parseFloat("5");
parseFloat("6");
const t$ = {
  gap: t_,
  breakpoints: {
    xxl: {
      minWidth: tO,
      columnCount: tU,
    },
    xl: {
      minWidth: tR,
      columnCount: tV,
    },
    lg: {
      minWidth: tM,
      columnCount: tW,
    },
    md: {
      minWidth: tI,
      columnCount: tY,
    },
    sm: {
      minWidth: tk,
      columnCount: tB,
    },
    xs: {
      minWidth: tT,
      columnCount: tz,
    },
  },
};
const t0 = {
  gap: tX,
  breakpoints: {
    xxl: {
      minWidth: tO,
      columnCount: tH,
    },
    xl: {
      minWidth: tR,
      columnCount: tG,
    },
    lg: {
      minWidth: tM,
      columnCount: tJ,
    },
    md: {
      minWidth: tI,
      columnCount: tq,
    },
    sm: {
      minWidth: tk,
      columnCount: tK,
    },
    xs: {
      minWidth: tT,
      columnCount: tQ,
    },
  },
};
function t1(t) {
  throw Error(`lvAssert(${t != null ? t : "unreachable code flow"})`);
}
function t2(breakpoints, r) {
  if (r <= 0) {
    return 0;
  }
  const e = Object.values(breakpoints).sort((t, r) => t.minWidth - r.minWidth);
  if (!e.length) {
    t1("empty breakpoint config");
  }
  if (
    e.some((t) => {
      var { maxWidthExclusive } = t;
      return maxWidthExclusive !== undefined;
    })
  ) {
    const n = e
      .slice()
      .reverse()
      .find((t) => {
        var { minWidth, maxWidthExclusive } = t;
        return (
          minWidth <= r &&
          (maxWidthExclusive === undefined || r < maxWidthExclusive)
        );
      });
    if (n) {
      return n.columnCount;
    }
  }
  let o = -1;
  for (let a = 0; a < e.length; ++a) {
    if (e[a].minWidth < r) {
      o = a;
    } else {
      break;
    }
  }
  if (o === -1) {
    t1("no matched breakpoint config for width ".concat(r));
  }
  return e[o].columnCount;
}
if (window.performance && window.performance.mark) {
  window.performance.mark("HEAD_SCRIPT_EXECUTION_START");
}
window.perfMark = function (t, detail) {
  if (performance != null && performance.mark && performance.getEntriesByName) {
    if (!performance.getEntriesByName(t).length) {
      performance.mark(t, {
        detail,
      });
    }
  }
};
if (window.performance && window.performance.mark) {
  window.performance.mark("HEAD_ASSET_RETRY_START");
}
window.rawCreateElement = window.document.createElement;
window.rawAppendChild = window.document.appendChild;
window.rawRemove = window.document.head.remove;
const canRetryCDNDomain = a_1.ASSETS_RETRY.canRetryCDNDomain;
window.__asset_retry_count = 0;
try {
  window.assetsRetryStatistics = ((t = {}) => {
    try {
      if (typeof t[F] !== "object") {
        throw Error("opts.domain cannot be non-object.");
      }
      let e;
      let n;
      let o;
      let a;
      let i;
      let s;
      let c;
      let u;
      const f = [I, k, T, j, F, N];
      const l = Object.keys(t).filter((t) => f.indexOf(t) === -1);
      if (l.length > 0) {
        throw Error("option name: " + l.join(", ") + " is not valid.");
      }
      const h = {
        [I]: t[I] || 3,
        [k]: t[k] || J,
        [T]: t[T] || q,
        [j]: t[j] || q,
        [N]: t[N] || [],
        [F]: ts(t[F]),
      };
      tp(h);
      if (typeof Node !== "undefined") {
        tv(Node.prototype);
      }
      if (typeof Element !== "undefined") {
        tv(Element.prototype);
      }
      e = h[k];
      n = h[T];
      o = h[j];
      a = h[F];
      i = h[N];
      s = function (t) {
        if (t) {
          const r = t.target || t.srcElement;
          const n = ta(r);
          if (n) {
            const s = tu(n, a, r);
            const c = s[0];
            const u = s[1];
            const f = r instanceof HTMLElement && r.hasAttribute(U);
            if (u && c && !f) {
              const l = r.tagName;
              if (l) {
                u[O][l]++;
                u[M].push(n);
                const p = u[O][l] > h[I];
                if (p) {
                  o(tf(n, a)[0]);
                }
                if (a[c] && !p) {
                  const v = a[c];
                  const d = e(Q(n, c, v), n, u);
                  if (d !== null) {
                    if (typeof d !== "string") {
                      throw Error(
                        'a string should be returned in "onRetry" function',
                      );
                    }
                    const g = r
                      ? r instanceof W_HTMLElement
                        ? w(
                            [r.nodeName, r.src, r.href, r.getAttribute(V)],
                            i.map((t) => r.getAttribute(t)),
                          ).join(";")
                        : "not_supported"
                      : "null";
                    if (!td[g]) {
                      td[g] = true;
                      if (
                        r instanceof W_HTMLScriptElement &&
                        !r.getAttribute(_) &&
                        r.src
                      ) {
                        tr(r, d);
                      } else if (
                        r instanceof W_HTMLLinkElement &&
                        !r.getAttribute(_) &&
                        r.href
                      ) {
                        tn(r, d);
                      } else if (r instanceof W_HTMLImageElement && r.src) {
                        r.setAttribute(V, to());
                        r.src = d;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      };
      window_document.addEventListener("error", s, true);
      window_document.addEventListener(
        "load",
        function (t) {
          if (t) {
            const r = t.target || t.srcElement;
            const e = ta(r);
            if (e) {
              const o = tu(e, a, r);
              o[0];
              const i = o[1];
              const c = tf(e, a)[0];
              const u = () => {
                if (i) {
                  i[R].push(e);
                }
                n(c);
              };
              if (r instanceof W_HTMLLinkElement) {
                if (window_document.styleSheets) {
                  const f = te(
                    Z(window_document.styleSheets).filter(
                      (t) => t.href === r.href,
                    )[0],
                  );
                  if (f !== null) {
                    if (f.length !== 0) {
                      u();
                    } else {
                      s(t);
                    }
                  }
                }
              } else {
                u();
              }
            }
          }
        },
        true,
      );
      c = window_document.styleSheets;
      u = h[F];
      if (c) {
        setInterval(() => {
          let t;
          t = window_document.styleSheets;
          const r = Z(t).filter((t) => {
            if (!te(t)) {
              return false;
            }
            if (!t.href) {
              const r = t.ownerNode;
              return !(r instanceof W_HTMLStyleElement && ty.indexOf(r) > -1);
            }
            return !tg[t.href] && !!tc(t.href, u);
          });
          if (r.length > 0) {
            tm(r, h);
          }
        }, 250);
      }
      return ti;
    } catch (error) {
      if (W.console) {
        console.error("[assetsRetry] error captured", error);
      }
    }
  })({
    maxRetryCount: 3,
    domain: canRetryCDNDomain,
    extraHashAttrs: ["rel"],
    onRetry: function (t) {
      if (!window.__asset_retry_count) {
        window.__asset_retry_count = 0;
      }
      window.__asset_retry_count++;
      return t;
    },
  });
} catch (error) {
  console.warn("[assets-retry] init failed:", error);
}
if (performance.measure) {
  performance.measure("HEAD_ASSET_RETRY", "HEAD_ASSET_RETRY_START");
}
if (window.performance && window.performance.mark) {
  window.performance.mark("HEAD_SLARDAR_START");
}
n = window;
o = document;
a = "".concat(a_1.SLARDAR.sdkUrl);
i = "".concat(a_1.SLARDAR.bid);
s = "__DreaminaSlardar";
c = "precollect";
u = "getAttribute";
f = "addEventListener";
l = function (t) {
  h = [].slice.call(arguments);
  h.push(Date.now(), location.href);
  (t === c ? l.p.a : l.q).push(h);
};
l.q = [];
l.p = {
  a: [],
};
n[s] = l;
p = document.createElement("script");
p.src = a + "?bid=" + i + "&globalName=" + s;
p.crossOrigin = a.indexOf("sdk") > 0 ? "anonymous" : "use-credentials";
o.getElementsByTagName("head")[0].appendChild(p);
if (f in n) {
  l.pcErr = function (t) {
    if (
      (v = (t = t || n.event).target || t.srcElement) instanceof Element ||
      v instanceof HTMLElement
    ) {
      if (v[u]("integrity")) {
        n[s](c, "sri", v[u]("href") || v[u]("src"));
      } else {
        n[s](c, "st", {
          tagName: v.tagName || "unknown",
          url: v[u]("href") || v[u]("src"),
        });
      }
    } else {
      n[s](c, "err", t.error);
    }
  };
  l.pcRej = function (t) {
    t = t || n.event;
    n[s](c, "reject", t.reason || (t.detail && t.detail.reason));
  };
  n[f]("error", l.pcErr, true);
  n[f]("unhandledrejection", l.pcRej, true);
}
if ("PerformanceLongTaskTiming" in n) {
  d = l.pp = {
    entries: [],
  };
  d.observer = new PerformanceObserver(function (t) {
    d.entries = d.entries.concat(t.getEntries());
  });
  d.observer.observe({
    entryTypes: ["longtask", "largest-contentful-paint", "layout-shift"],
  });
}
if (performance.measure) {
  performance.measure("HEAD_SLARDAR", "HEAD_SLARDAR_START");
}
if (window.performance && window.performance.mark) {
  window.performance.mark("HEAD_SCRIPT_EXECUTION_END");
}
if (window.performance && window.performance.mark) {
  window.performance.mark("HEAD_BEFORE_SCRIPT_START");
}
try {
  window._injectDisplayedFeaturesClassName();
} catch (t) {}
g = parseFloat("0px") + parseFloat(tA);
y = parseFloat("2028px");
m = parseFloat(tx) + parseFloat(tw);
isHighDensity =
  !(typeof window === "undefined") &&
  (window.matchMedia
    ? !!(
        window.matchMedia(
          "only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)",
        ).matches ||
        window.matchMedia(
          "only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)",
        ).matches
      )
    : !!(window.devicePixelRatio && window.devicePixelRatio > 1.3));
window._multiResolutionInspiration = function () {
  const t = Math.min(y, document.documentElement.clientWidth - g - 2 * m);
  const { gap } = tZ;
  const e = t2(tZ.breakpoints, t);
  const n = Math.round((t - gap * (e - 1)) / e);
  return {
    gap,
    cols: e,
    colWidth: n,
    isHighDensity,
    masonryWidth: t,
  };
};
window._multiResolutionShortVideo = function () {
  const t = Math.min(y, document.documentElement.clientWidth - g - 2 * m);
  const { gap } = t$;
  const e = t2(t$.breakpoints, t);
  const n = Math.round((t - gap * (e - 1)) / e);
  return {
    gap,
    cols: e,
    colWidth: n,
    isHighDensity,
    masonryWidth: t,
  };
};
window._multiResolutionActivity = function () {
  const t = Math.min(y, document.documentElement.clientWidth - g - 2 * m);
  const { gap } = t0;
  const e = t2(t0.breakpoints, t);
  const n = Math.round((t - gap * (e - 1)) / e);
  return {
    gap,
    cols: e,
    colWidth: n,
    isHighDensity,
    masonryWidth: t,
  };
};
