import { _ as __1 } from "./module-xo.js";
import "./module-B_2_3.js";
import "./module-n_2_3.js";
import a from "./module-jN.js";
function s(t) {
  if (typeof window !== "undefined") {
    window.__dreamina_ccfmp_report_phase = t;
    if (window.__DreaminaSlardar !== undefined) {
      window.__DreaminaSlardar("context.set", "ccfmpPhase", t);
    }
  }
}
if (
  typeof window !== "undefined" &&
  window.__dreamina_ccfmp_report_phase === undefined
) {
  window.__dreamina_ccfmp_report_phase = "initial";
  if (window.__DreaminaSlardar !== undefined) {
    window.__DreaminaSlardar("context.set", "ccfmpPhase", "initial");
  }
}
const u = [
  "/ai-tool/ai-image",
  "/ai-tool/ai-video",
  "/ai-tool/ai-agent",
  "/ai-tool/canvas-home",
  "/ai-tool/tools",
];
function c(pathname, search) {
  const r = pathname.replace(/\/$/, "");
  if (r !== "/ai-tool/tools") {
    return r;
  }
  const n = new URLSearchParams(search);
  return JSON.stringify([
    r,
    ["toolId", "type", "panel_key"].some((t) => n.has(t)),
    ...["toolId", "type", "panel_key"].map((t) => {
      var e = n.getAll(t).map((e) => {
        if (t === "type") {
          return e;
        }
        return e.trim();
      });
      if (t !== "type" || e.length) {
        return e;
      }
      return ["default"];
    }),
  ]);
}
function f(t, e) {
  if (t.kind !== "tool" || t.toolId) {
    const r = t.kind === "tool" ? t.toolId : undefined;
    return "dreamina-landing-ccfmp:"
      .concat(t.kind, ":")
      .concat(e, ":")
      .concat(encodeURIComponent(r != null ? r : ""));
  }
}
const SYMBOL_IS_CUSTOM_ = Symbol.for("__is_custom__");
function h(t) {
  return (
    t.entryType === "element" && !(t == null ? undefined : t[SYMBOL_IS_CUSTOM_])
  );
}
function v(t) {
  const e = new PerformanceObserver((e) => {
    t(e.getEntries().filter(h));
  });
  e.observe({
    type: "element",
    buffered: true,
  });
  return e;
}
let firstHiddenTime = -1;
let hasHidden = false;
let g = () => {};
function y() {
  const t = document.visibilityState === "hidden" && !document.prerendering;
  if (t) {
    hasHidden = true;
    g();
  }
  if (t) {
    return 0;
  }
  return Infinity;
}
function m(t) {
  if (document.visibilityState === "hidden" && firstHiddenTime > -1) {
    firstHiddenTime = t.type === "visibilitychange" ? t.timeStamp : 0;
    hasHidden = true;
    g();
    removeEventListener("visibilitychange", m, true);
    removeEventListener("prerenderingchange", m, true);
  }
}
function b() {
  addEventListener("visibilitychange", m, true);
  addEventListener("prerenderingchange", m, true);
}
function w(t) {
  if (t) {
    g = t;
  }
  if (firstHiddenTime < 0) {
    firstHiddenTime = y();
    b();
    addEventListener(
      "pageshow",
      (t) => {
        if (t.persisted) {
          t.timeStamp;
          (() => {
            setTimeout(() => {
              firstHiddenTime = y();
              b();
            }, 0);
          })();
        }
      },
      true,
    );
  }
  return {
    get firstHiddenTime() {
      return firstHiddenTime;
    },
    get hasHidden() {
      return hasHidden;
    },
  };
}
function A(t, e) {
  let r = "";
  try {
    while (t && t.nodeType !== 9) {
      const n = t;
      const o = n.id
        ? "#".concat(n.id)
        : ((t) => {
            const t_nodeName = t.nodeName;
            if (t.nodeType === 1) {
              return t_nodeName.toLowerCase();
            }
            return t_nodeName.toUpperCase().replace(/^#/, "");
          })(n) +
          (n.classList &&
          n.classList.value &&
          n.classList.value.trim() &&
          n.classList.value.trim().length
            ? ".".concat(n.classList.value.trim().replace(/\s+/g, "."))
            : "");
      if (r.length + o.length > (e || 100) - 1) {
        return r || o;
      }
      r = r ? "".concat(o, ">").concat(r) : o;
      if (n.id) {
        break;
      }
      t = n.parentNode;
    }
  } catch (t) {}
  return r;
}
function x() {
  if (typeof window !== "undefined") {
    let t;
    let e;
    const r =
      (e = (t = window).__generateFeedDiagnostics) != null
        ? e
        : (t.__generateFeedDiagnostics = {
            categories: {},
            metrics: {},
            selectedSource: "unknown",
            latestActiveSource: "unknown",
            pipelines: {
              ssr: {
                categories: {},
                metrics: {},
              },
              csr: {
                categories: {},
                metrics: {},
              },
              handoff: {
                categories: {},
                metrics: {},
              },
              unknown: {
                categories: {},
                metrics: {},
              },
            },
          });
    if (r.categories == null) {
      r.categories = {};
    }
    if (r.metrics == null) {
      r.metrics = {};
    }
    if (r.selectedSource == null) {
      r.selectedSource = "unknown";
    }
    if (r.latestActiveSource == null) {
      r.latestActiveSource =
        r.categories.feed_source === "ssr" || r.categories.feed_source === "csr"
          ? r.categories.feed_source
          : "unknown";
    }
    if (r.pipelines == null) {
      r.pipelines = {
        ssr: {
          categories: {},
          metrics: {},
        },
        csr: {
          categories: {},
          metrics: {},
        },
        handoff: {
          categories: {},
          metrics: {},
        },
        unknown: {
          categories: {},
          metrics: {},
        },
      };
    }
    return r;
  }
}
function E(t) {
  const e =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : "unknown";
  const r = x();
  if (r) {
    const n = r.pipelines[e];
    Object.assign(n.categories, t.categories);
    Object.assign(n.metrics, t.metrics);
    if (e === "ssr" || e === "csr") {
      r.latestActiveSource = e;
    }
    Object.assign(r.categories, t.categories);
    Object.assign(r.metrics, t.metrics);
  }
}
function S(t) {
  return (t || "").replace(/\/$/, "");
}
function O(t, e) {
  const r = S(e);
  if (!r.includes(":")) {
    return t === r;
  }
  const n = t.split("/").filter(Boolean);
  const o = r.split("/").filter(Boolean);
  if (n.length !== o.length) {
    return false;
  }
  for (let i = 0; i < o.length; i++) {
    const a = o[i];
    if (a.startsWith(":")) {
      if (!n[i]) {
        return false;
      }
      continue;
    }
    if (n[i] !== a) {
      return false;
    }
  }
  return true;
}
function _(t, e) {
  let r;
  let n;
  let s;
  let u;
  let c;
  let f;
  let script_security_execution;
  let h;
  let v;
  const {
    basicMetric: { name },
  } = t;
  if (!window._cacheMilestone) {
    window._cacheMilestone = {};
  }
  if (window._cacheMilestone[name]) {
    return window._cacheMilestone[name];
  }
  window._cacheMilestone[name] = {
    ...(() => {
      let e;
      let r;
      const { domainLookupStart, serverTiming, responseStart, requestStart } =
        performance.getEntriesByType("navigation")[0];
      const f = ["bd-gf-total", "tt_agw", "inner", "edge", "origin"];
      const l = serverTiming.reduce((acc, item) => {
        if (f.includes(item.name)) {
          return {
            ...acc,
            [item.name]: item.duration,
          };
        }
        return acc;
      }, {});
      const h =
        t.pid === a.gL
          ? {
              server_cost_feed:
                (e =
                  (r = window._agw_timing) == null
                    ? undefined
                    : r.get_dreamina_generate_asset_inner) != null
                  ? e
                  : 0,
            }
          : {};
      return {
        domainLookupStart,
        ttfb: responseStart - domainLookupStart,
        server_cost_gf_execute: l["bd-gf-total"],
        server_cost_agw_handler: l.tt_agw,
        server_cost_inner: l.inner,
        server_cost_edge_origin: l.edge + l.origin,
        network_cost_rtt: responseStart - requestStart,
        ...h,
      };
    })(),
    ...(() => {
      let t;
      let e;
      let r;
      let n;
      let o;
      const ssrRenderLevel =
        ((r = window._SSR_DATA) == null ? undefined : r.renderLevel) || 0;
      const { serverTiming } = performance.getEntriesByType("navigation")[0];
      const renderCacheStatus =
        (t =
          (n = serverTiming.find(
            (t) => t.name === "cc-ssr-render_cache_status",
          )) == null
            ? undefined
            : n.description) != null
          ? t
          : "unknown";
      const u = window._isAGWInjectSuccess ? "true" : "false";
      const AGWInjectCount = (e = window._AGWInjectCount) != null ? e : 0;
      const f = performance.getEntriesByName("AGW_HOME_FEED_INJECT");
      return {
        ssrRenderLevel,
        renderCacheStatus,
        isAGWInjectSuccess: u,
        AGWInjectCount,
        inject_feed_waiting:
          f == null || (o = f[0]) == null ? undefined : o.duration,
      };
    })(),
    ...((c =
      (r = performance.getEntriesByName("SECURITY_SCRIPT_EXECUTION_START")) ==
      null
        ? undefined
        : r[0]),
    (f =
      (n = performance.getEntriesByName("SECURITY_SCRIPT_EXECUTION_END")) ==
      null
        ? undefined
        : n[0]),
    (script_security_execution = c && f ? f.startTime - c.startTime : 0),
    (h =
      (s = performance.getEntriesByName("SCRIPT_BEFORE_ENTRY_START")) == null
        ? undefined
        : s[0]),
    (v =
      (u = performance.getEntriesByName("SCRIPT_BEFORE_ENTRY_END")) == null
        ? undefined
        : u[0]),
    {
      script_security_execution,
      script_entry_execution: h && v ? v.startTime - h.startTime : 0,
    }),
    ...(() => {
      let t;
      let e;
      let r;
      let n;
      let o;
      let i;
      let a;
      const { domainLookupStart } =
        performance.getEntriesByType("navigation")[0];
      const u =
        (r = performance.getEntriesByName(name)) == null ? undefined : r[0];
      const c =
        (t = u == null || (n = u.detail) == null ? undefined : n.element) !=
        null
          ? t
          : "";
      const f = u == null || (o = u.detail) == null ? undefined : o.feed_source;
      return {
        ccfmp:
          (u == null || (i = u.detail) == null ? undefined : i.status) ===
            "success" && u.startTime
            ? u.startTime - domainLookupStart
            : 0,
        ccfmp_status:
          (e = u == null || (a = u.detail) == null ? undefined : a.status) !=
          null
            ? e
            : "unknown",
        ccfmp_phase:
          f === "ssr" ||
          c.includes("#ssr-waterfall-feed") ||
          c.includes("#ssr-generated-record-feed")
            ? "ssr"
            : "csr",
      };
    })(),
  };
  return window._cacheMilestone[name];
}
function R(t, e) {
  let r;
  let n;
  let a;
  let s;
  let u;
  let c;
  let f;
  const {
    basicMetric: { name },
  } = t;
  if (!window._cacheMilestoneDetail) {
    window._cacheMilestoneDetail = {};
  }
  if (window._cacheMilestoneDetail[name]) {
    return window._cacheMilestoneDetail[name];
  }
  const h = (() => {
    const t = x();
    if (!t) {
      return {
        categories: {},
        metrics: {},
      };
    }
    const e =
      t.selectedSource === "unknown" ? t.latestActiveSource : t.selectedSource;
    const r = t.pipelines[e];
    const { handoff } = t.pipelines;
    return {
      categories: {
        ...r.categories,
        ...handoff.categories,
      },
      metrics: {
        ...r.metrics,
        ...handoff.metrics,
      },
    };
  })();
  window._cacheMilestoneDetail[name] = {
    ...(window._agw_timing
      ? {
          get_dreamina_feed_inner:
            (r = window._agw_timing.get_dreamina_feed_inner) != null ? r : 0,
          dreamina_feed: (n = window._agw_timing.dreamina_feed) != null ? n : 0,
          get_dreamina_generate_asset_inner:
            (a = window._agw_timing.get_dreamina_generate_asset_inner) != null
              ? a
              : 0,
          dreamina_generate_asset:
            (s = window._agw_timing.dreamina_generate_asset) != null ? s : 0,
        }
      : {
          get_dreamina_feed_inner: 0,
          dreamina_feed: 0,
          get_dreamina_generate_asset_inner: 0,
          dreamina_generate_asset: 0,
        }),
    ...((u = Object.entries({
      duration_head_script_execution: "HEAD_SCRIPT_EXECUTION",
      duration_head_before_script: "HEAD_BEFORE_SCRIPT",
    }).reduce((acc, entry) => {
      var r;
      var n;
      var [a, s] = entry;
      var u =
        (r = performance.getEntriesByName("".concat(s, "_START"))) == null
          ? undefined
          : r[0];
      var c =
        (n = performance.getEntriesByName("".concat(s, "_END"))) == null
          ? undefined
          : n[0];
      return {
        ...acc,
        [a]: u && c ? c.startTime - u.startTime : 0,
      };
    }, {})),
    (c = Object.entries({
      duration_head_asset_retry: "HEAD_ASSET_RETRY",
      duration_head_chunks_map: "HEAD_CHUNKS_MAP",
      duration_head_ssr_data: "HEAD_SSR_DATA",
      duration_head_slardar: "HEAD_SLARDAR",
      duration_feed_decrypt: "HOME_FEED_DECRYPT",
    }).reduce((acc, entry) => {
      var r;
      var [n, a] = entry;
      var s = (r = performance.getEntriesByName(a)) == null ? undefined : r[0];
      return {
        ...acc,
        [n]: s ? s.duration : 0,
      };
    }, {})),
    (f = Object.entries({
      timestamp_before_inject: "STREAM_GATEWAY_CONTENT_START",
    }).reduce((acc, entry) => {
      var r;
      var [n, a] = entry;
      var s = (r = performance.getEntriesByName(a)) == null ? undefined : r[0];
      return {
        ...acc,
        [n]: s ? s.startTime : 0,
      };
    }, {})),
    {
      ...u,
      ...c,
      ...f,
    }),
    ...h.categories,
    ...h.metrics,
  };
  return window._cacheMilestoneDetail[name];
}
function M(t, e, value, n, a) {
  let s;
  let u;
  let c;
  const { basicMetric } = t;
  const l = window._isAGWInjectSuccess ? "true" : "false";
  const ssrPreRenderContent =
    (s = window._ssrPreRenderContent) != null ? s : "";
  const hitFeedExperimentalGroup = window._hitFeedExperimentalGroup
    ? "true"
    : "false";
  if ((u = (c = window).__DreaminaSlardar) != null) {
    u.call(c, "sendCustomPerfMetric", {
      ...basicMetric,
      ...n,
      value,
      extra: {
        ...a,
        hitFeedExperimentalGroup,
        ssrPreRenderContent,
        isAGWInjectSuccess: l,
      },
    });
  }
}
function I(t, e) {
  if (e.milestoneName) {
    let r;
    let n;
    const o = _(t, e);
    if ((r = (n = window).__DreaminaSlardar) != null) {
      r.call(n, "sendEvent", k(e.milestoneName, o));
    }
  }
}
function T(t, e) {
  if (e.milestoneDetailName) {
    let r;
    let n;
    const o = R(t, e);
    if ((r = (n = window).__DreaminaSlardar) != null) {
      r.call(n, "sendEvent", k(e.milestoneDetailName, o));
    }
  }
}
var k = (name, e) => {
  var { metrics, categories } = Object.entries(e).reduce(
    (acc, entry) => {
      var [r, n] = entry;
      if (typeof n === "number") {
        return {
          metrics: {
            ...acc.metrics,
            [r]: n,
          },
          categories: {
            ...acc.categories,
          },
        };
      }
      if (typeof n === "string") {
        return {
          metrics: {
            ...acc.metrics,
          },
          categories: {
            ...acc.categories,
            [r]: n,
          },
        };
      }
      return acc;
    },
    {
      metrics: {},
      categories: {},
    },
  );
  return {
    name,
    metrics,
    categories,
  };
};
const N = "WORK_DETAIL_SOURCE_LOADED";
class j {
  static listen(t, e) {
    return new Promise((resolve) => {
      new j(t, resolve).start();
    });
  }
  start() {
    const t = document.querySelector("#ssr-root #ssr-video");
    const e = document.querySelector("#ssr-root #ssr-img");
    if (t instanceof HTMLVideoElement) {
      this._attachVideo(t);
    } else if (e instanceof HTMLImageElement) {
      this._attachImg(e);
    }
    this._ctx.teardown.push({
      dispose: () => this._dispose(),
    });
  }
  _dispose() {
    this._disposed = true;
    this._cleanup();
    this._mediaNode = null;
  }
  _cleanup() {
    if (this._mediaNode instanceof HTMLVideoElement) {
      this._mediaNode.removeEventListener("canplay", this._onVideoSuccess);
      this._mediaNode.removeEventListener("error", this._onVideoError);
    } else if (this._mediaNode instanceof HTMLImageElement) {
      this._mediaNode.removeEventListener("load", this._onImgSuccess);
      this._mediaNode.removeEventListener("error", this._onImgError);
    }
  }
  _finish(t, e) {
    if (!this._hadReported && !this._disposed) {
      this._hadReported = true;
      if (
        typeof performance !== "undefined" &&
        typeof performance.mark === "function"
      ) {
        const r = "".concat(N, "-end");
        performance.mark(r);
        performance.measure(N, "navigationStart", r);
      }
      const source_type = t;
      const o = (() => {
        if (
          typeof window !== "undefined" &&
          typeof window.__DreaminaSlardar === "function"
        ) {
          return window.__DreaminaSlardar;
        }
      })();
      if (o) {
        const i = performance.getEntriesByName(N);
        const s = performance.getEntriesByName("".concat(N, "-end"));
        if (i.length !== 0 && s.length !== 0) {
          o("sendCustomPerfMetric", {
            name: "work_detail_source_loaded",
            value: i[0].duration,
            type: "perf",
            extra: {
              source_type,
            },
          });
        }
      }
      let u;
      const c =
        this._visibilityWatcher.hasHidden ||
        document.visibilityState === "hidden";
      const f = e.getAttribute("src");
      if (f) {
        const l = performance
          .getEntriesByName(f)
          .find((t) => t.entryType === "resource");
        if (l) {
          u = l.responseEnd;
        }
      }
      const h = A(e, a.Ur);
      this._resolve({
        status: c ? "hidden" : "success",
        data: {
          value: u != null ? u : performance.now(),
          element: h,
          src: f || null,
        },
      });
    }
  }
  _attachVideo(t) {
    this._mediaNode = t;
    if (t.readyState >= 2) {
      this._onVideoSuccess();
    } else {
      t.addEventListener("canplay", this._onVideoSuccess);
      t.addEventListener("error", this._onVideoError);
    }
  }
  _attachImg(t) {
    this._mediaNode = t;
    if (t.complete) {
      this._onImgSuccess();
    } else {
      t.addEventListener("load", this._onImgSuccess);
      t.addEventListener("error", this._onImgError);
    }
  }
  constructor(t, e) {
    this._ctx = t;
    this._resolve = e;
    this._visibilityWatcher = w();
    this._hadReported = false;
    this._disposed = false;
    this._mediaNode = null;
    this._onVideoSuccess = () => {
      this._onSuccess("video");
    };
    this._onVideoError = () => {
      this._onError();
    };
    this._onImgSuccess = () => {
      this._onSuccess("img");
    };
    this._onSuccess = (t) => {
      var _mediaNode = this._mediaNode;
      if (_mediaNode) {
        this._cleanup();
        this._finish(t, _mediaNode);
      }
    };
    this._onImgError = () => {
      this._onError();
    };
    this._onError = () => {
      this._cleanup();
    };
  }
}
window._bindFMP = function (t) {
  return __1(function* () {
    let e;
    let r;
    let l;
    let h;
    let d;
    let p;
    let g;
    const y = S(window.location.pathname);
    const pid = t.pids.find((t) => O(y, t));
    if (!pid) {
      if (t.perfName === a.IM) {
        s("no_ccfmp");
      }
      return;
    }
    if (t.perfName === a.IM && u.includes(pid)) {
      if (window.__dreaminaLandingCcfmpStarted) {
        return;
      }
      window.__dreaminaLandingCcfmpStarted = true;
    }
    if (t.perfName === a.IM) {
      s("before_ccfmp");
    }
    if (t.forceContext) {
      k = t.forceContext;
      if ((N = (P = window).__DreaminaSlardar) != null) {
        N.call(P, "on", "beforeBuild", function (t) {
          let e;
          let r = false;
          switch (t.ev_type) {
            case "custom":
            case "performance":
              if (k[t.ev_type][(e = t.payload) == null ? undefined : e.name]) {
                r = true;
              }
          }
          if (r) {
            if (!t.extra) {
              t.extra = {};
            }
            if (!t.extra.context) {
              t.extra.context = {};
            }
            Object.assign(t.extra.context, k.buildContext());
          }
          return t;
        });
      }
    }
    const b = {
      pid,
      teardown: [],
      basicMetric: {
        name: t.perfName || a.kW,
        type: "perf",
        isCustom: true,
        isPolyfill: false,
        isSupport: true,
        isBounced: false,
      },
    };
    const _ = yield (
      ((D = {
        ...t,
        elementTiming:
          t.perfName === a.IM && [a.c1, a.gL].includes(pid) ? a.kO : undefined,
        candidateWindowEndMark: pid === a.c1 ? a.$7 : a.fk,
      }),
      __1(function* () {
        try {
          const t = b.basicMetric.name === a.IM && u.includes(b.pid);
          return yield Promise.race([
            t
              ? ((t) => {
                  if (
                    typeof PerformanceObserver === "undefined" ||
                    !((e = PerformanceObserver.supportedEntryTypes) == null
                      ? undefined
                      : e.includes("element"))
                  ) {
                    return Promise.resolve({
                      status: "not-support",
                    });
                  }
                  var e;
                  let r;
                  let n;
                  const o =
                    (r = (n = performance).getEntriesByType) == null
                      ? undefined
                      : r.call(n, "navigation")[0];
                  const i = (o == null ? undefined : o.name)
                    ? new URL(o.name)
                    : location;
                  const s = c(i.pathname, i.search);
                  if (c(location.pathname, location.search) !== s) {
                    return Promise.resolve({
                      status: "route-change",
                    });
                  }
                  const u = ((t, e) => {
                    switch (t.replace(/\/$/, "")) {
                      case "/ai-tool/ai-image":
                        return {
                          kind: "image",
                        };
                      case "/ai-tool/ai-video":
                        return {
                          kind: "video",
                        };
                      case "/ai-tool/ai-agent":
                        return {
                          kind: "agentic",
                        };
                      case "/ai-tool/canvas-home":
                        return {
                          kind: "canvas",
                        };
                      case "/ai-tool/tools":
                        let r;
                        let n;
                        var o = new URLSearchParams(e);
                        const i = ["toolId", "type", "panel_key"];
                        if (!i.some((t) => o.has(t))) {
                          return {
                            kind: "tools",
                          };
                        }
                        const a = (r = o.get("type")) != null ? r : "default";
                        return {
                          kind: "tool",
                          toolId:
                            (i.every((t) => o.getAll(t).length <= 1) &&
                              (a === "default" || a === "custom") &&
                              ((n = o.get("toolId")) == null
                                ? undefined
                                : n.trim())) ||
                            undefined,
                        };
                      default:
                        return;
                    }
                  })(i.pathname, i.search);
                  const l = w();
                  return new Promise((resolve) => {
                    var r = false;
                    var n = v((t) => {
                      if (!r && u) {
                        if (c(location.pathname, location.search) !== s) {
                          r = true;
                          resolve({
                            status: "route-change",
                          });
                          n.disconnect();
                          return;
                        }
                        var o = ["ssr", "csr"];
                        var i = t
                          .filter(
                            (t) =>
                              !!o.some((e) => t.identifier === f(u, e)) &&
                              !!Number.isFinite(t.renderTime) &&
                              !(t.renderTime <= 0) &&
                              !(t.intersectionRect.width <= 0) &&
                              !(t.intersectionRect.height <= 0) &&
                              (u.kind === "canvas"
                                ? t.name === "text-paint"
                                : t.name === "image-paint" &&
                                  !!t.url &&
                                  !(t.naturalWidth <= 0) &&
                                  !(t.naturalHeight <= 0)) &&
                              (!t.element ||
                                t.element.getAttribute("elementtiming") ===
                                  t.identifier),
                          )
                          .sort((t, e) => t.renderTime - e.renderTime)[0];
                        if (i) {
                          r = true;
                          var feedSource =
                            i.identifier === f(u, "ssr") ? "ssr" : "csr";
                          resolve({
                            status:
                              l.hasHidden ||
                              document.visibilityState === "hidden"
                                ? "hidden"
                                : "success",
                            data: {
                              value: i.renderTime,
                              element: i.element
                                ? A(i.element, a.Ur)
                                : i.identifier,
                              src: i.url || null,
                              contentType:
                                u.kind === "canvas" ? "canvas-create" : "asset",
                              feedDataStatus: "success",
                              feedSource,
                            },
                          });
                          n.disconnect();
                        }
                      }
                    });
                    t.teardown.push({
                      dispose: () => {
                        r = true;
                        n.disconnect();
                      },
                    });
                  });
                })(b)
              : ((t, e) => {
                  let r;
                  const { teardown } = t;
                  const { rootId, attributeName } = e;
                  if (
                    e.elementTiming
                      ? typeof PerformanceObserver === "undefined" ||
                        !((r = PerformanceObserver.supportedEntryTypes) == null
                          ? undefined
                          : r.includes("element"))
                      : typeof MutationObserver === "undefined"
                  ) {
                    return Promise.resolve({
                      status: "not-support",
                    });
                  }
                  let s = null;
                  if (rootId) {
                    s = document.getElementById(rootId);
                  }
                  if (!s) {
                    s = document.getElementsByTagName("body")[0];
                  }
                  if (s) {
                    return new Promise((resolve) => {
                      const o = w();
                      const u = new WeakSet();
                      const c = (t) =>
                        !!t.complete &&
                        !(t.naturalWidth <= 0) &&
                        !(t.naturalHeight <= 0) &&
                        (t.setAttribute(a.E$, "ssr"),
                        t.setAttribute(attributeName, "true"),
                        h(t));
                      const f = (t) => {
                        var e =
                          t instanceof HTMLImageElement
                            ? t
                            : t.querySelector("img");
                        if (!e || u.has(e)) {
                          return false;
                        }
                        u.add(e);
                        if (c(e)) {
                          return true;
                        }
                        var r = () => {
                          c(e);
                        };
                        e.addEventListener("load", r);
                        teardown.push({
                          dispose: () => e.removeEventListener("load", r),
                        });
                        return false;
                      };
                      const l = (t) => {
                        if (
                          attributeName !== a.Wj ||
                          t.nodeType !== Node.ELEMENT_NODE
                        ) {
                          return false;
                        }
                        var e = "[".concat(a.vz, '="true"]');
                        var r = t.closest(e);
                        if ((r && f(r)) || (t.matches(e) && f(t))) {
                          return true;
                        }
                        for (var n of t.querySelectorAll(e)) {
                          if (f(n)) {
                            return true;
                          }
                        }
                        return false;
                      };
                      function h(e, n) {
                        if (
                          n ||
                          ((e == null ? undefined : e.nodeType) ===
                            Node.ELEMENT_NODE &&
                            e.getAttribute(attributeName) === "true")
                        ) {
                          let s;
                          let u;
                          let c;
                          let f;
                          let l;
                          let h;
                          const v =
                            o.hasHidden ||
                            document.visibilityState === "hidden";
                          const p = e
                            ? A(e, a.Ur)
                            : (n == null ? undefined : n.id)
                              ? "#".concat(n.id)
                              : "";
                          const src =
                            (n == null ? undefined : n.url) ||
                            (e == null ? undefined : e.getAttribute("src")) ||
                            null;
                          const y = n
                            ? e == null
                              ? undefined
                              : e.closest("[".concat(a.E$, "]"))
                            : e;
                          const contentType =
                            (u =
                              y == null ? undefined : y.getAttribute(a.C4)) !=
                            null
                              ? u
                              : undefined;
                          const feedDataStatus =
                            (c =
                              y == null ? undefined : y.getAttribute(a.Ai)) !=
                            null
                              ? c
                              : undefined;
                          const w =
                            (f =
                              y == null ? undefined : y.getAttribute(a.E$)) !=
                            null
                              ? f
                              : undefined;
                          const feed_source =
                            w === "ssr" || w === "csr" ? w : "unknown";
                          const O = t.pid === a.gL;
                          const _ = O
                            ? performance
                                .getEntriesByName(
                                  "GENERATE_FEED_CSR_REQUEST_END",
                                )
                                .at(-1)
                            : undefined;
                          const R = n == null ? undefined : n.startTime;
                          if (O) {
                            if ((s = x())) {
                              s.selectedSource = feed_source;
                            }
                            E(
                              {
                                categories: {
                                  ccfmp_content_type:
                                    contentType === "asset" ||
                                    contentType === "generating" ||
                                    contentType === "loading" ||
                                    contentType === "empty" ||
                                    contentType === "error"
                                      ? contentType
                                      : "unknown",
                                  feed_data_status:
                                    feedDataStatus === "pending" ||
                                    feedDataStatus === "success" ||
                                    feedDataStatus === "error"
                                      ? feedDataStatus
                                      : "unknown",
                                  feed_source,
                                },
                                metrics:
                                  w === "csr" && _ && R !== undefined
                                    ? {
                                        render_duration: Math.max(
                                          0,
                                          R - _.startTime,
                                        ),
                                      }
                                    : undefined,
                              },
                              feed_source,
                            );
                          }
                          if (src) {
                            const M = performance
                              .getEntriesByName(src)
                              .find((t) => t.entryType === "resource");
                            if (M) {
                              h = M.responseEnd;
                              if (O && w === "csr") {
                                E(
                                  {
                                    categories: {
                                      media_result: "loaded",
                                    },
                                    metrics: {
                                      media_load_duration: M.duration,
                                      media_wait_duration: _
                                        ? Math.max(0, h - _.startTime)
                                        : M.duration,
                                    },
                                  },
                                  "csr",
                                );
                              }
                            }
                          }
                          console.log("[fmp] hit element:", e);
                          resolve({
                            status: v ? "hidden" : "success",
                            data: {
                              value:
                                (l = R != null ? R : h) != null
                                  ? l
                                  : performance.now(),
                              element: p,
                              src,
                              contentType,
                              feedDataStatus,
                              feedSource: w,
                            },
                          });
                          d.disconnect();
                          return true;
                        }
                        return false;
                      }
                      teardown.push({
                        dispose: () => {
                          var t;
                          if (d == null || (t = d.disconnect) == null) {
                            return undefined;
                          }
                          return t.call(d);
                        },
                      });
                      if (e.elementTiming) {
                        var d;
                        let p;
                        const g = new WeakSet();
                        const y = new Set();
                        const m = '[elementtiming="'.concat(
                          e.elementTiming,
                          '"]',
                        );
                        const b =
                          (p = e.candidateWindowEndMark) != null ? p : a.fk;
                        const S = () =>
                          performance.getEntriesByName(b).length > 0;
                        const O = (t) => {
                          g.add(t);
                          if (t.id) {
                            y.add(t.id);
                          }
                        };
                        const _ = (t) => {
                          if (t.nodeType === Node.ELEMENT_NODE) {
                            if (t.matches(m)) {
                              O(t);
                            }
                            t.querySelectorAll(m).forEach(O);
                          }
                        };
                        _(s);
                        if (typeof MutationObserver !== "undefined" && !S()) {
                          var R = new MutationObserver((t) => {
                            if (S()) {
                              R.disconnect();
                            } else {
                              t.forEach((t) => {
                                if (t.type === "attributes") {
                                  _(t.target);
                                } else {
                                  t.addedNodes.forEach(_);
                                }
                              });
                            }
                          });
                          R.observe(s, {
                            attributes: true,
                            attributeFilter: ["elementtiming"],
                            childList: true,
                            subtree: true,
                          });
                          teardown.push({
                            dispose: () => R.disconnect(),
                          });
                        }
                        d = v((t) => {
                          var r = t
                            .filter(
                              (t) =>
                                t.identifier === e.elementTiming &&
                                (!S() ||
                                  (t.element
                                    ? g.has(t.element)
                                    : !!(t.id && y.has(t.id)))),
                            )
                            .sort((t, e) => t.startTime - e.startTime)[0];
                          if (r) {
                            h(r.element, r);
                          }
                        });
                        return;
                      }
                      (d = new MutationObserver(function (t) {
                        for (const e of t) {
                          if (e) {
                            if (
                              e.type === "childList" &&
                              e.addedNodes.length > 0
                            ) {
                              for (const r of e.addedNodes) {
                                if (h(r) || l(r)) {
                                  return;
                                }
                              }
                            } else if (
                              e.type === "attributes" &&
                              attributeName === e.attributeName &&
                              h(e.target)
                            ) {
                              return;
                            }
                          }
                        }
                      })).observe(s, {
                        subtree: true,
                        childList: true,
                        attributes: true,
                        attributeFilter: [attributeName],
                      });
                      for (const M of s.querySelectorAll(
                        "[".concat(attributeName, '="true"]'),
                      )) {
                        if (h(M)) {
                          return;
                        }
                      }
                      l(s);
                    });
                  }
                  return Promise.resolve({
                    status: "no-root-element",
                  });
                })(b, D),
            ...(t ? [] : [j.listen(b, D)]),
            ((t, e) => {
              const { teardown } = t;
              const { timeout = a.yr } = e;
              return new Promise((resolve) => {
                var e = setTimeout(
                  () =>
                    resolve({
                      status: "timeout",
                    }),
                  timeout,
                );
                teardown.push({
                  dispose: () => clearTimeout(e),
                });
              });
            })(b, D),
            ((t, e) => {
              const { teardown, basicMetric } = t;
              return new Promise((resolve) => {
                function s() {
                  let r;
                  const s = performance.now();
                  console.warn(
                    "[fmp] beforeunload",
                    window.__DreaminaSlardar,
                    window.__DreaminaSlardar.sendCustomPerfMetric,
                  );
                  if (window.__DreaminaSlardar) {
                    if (window.__DreaminaSlardar.sendCustomPerfMetric) {
                      M(
                        t,
                        e,
                        s,
                        {
                          isBounced: true,
                        },
                        {
                          status: "user-close",
                        },
                      );
                    } else {
                      window.__DreaminaSlardar.report({
                        ev_type: "performance",
                        payload: {
                          ...basicMetric,
                          type: "perf",
                          isBounced: true,
                          value: s,
                          extra: {
                            status: "user-close",
                            hitFeedExperimentalGroup:
                              window._hitFeedExperimentalGroup
                                ? "true"
                                : "false",
                            ssrPreRenderContent:
                              (r = window._ssrPreRenderContent) != null
                                ? r
                                : "",
                            isAGWInjectSuccess: window._isAGWInjectSuccess
                              ? "true"
                              : "false",
                          },
                        },
                        overrides: undefined,
                      });
                    }
                    I(t, e);
                    T(t, e);
                  }
                  resolve({
                    status: "user-close",
                  });
                }
                window.addEventListener("beforeunload", s);
                teardown.push({
                  dispose: () => window.removeEventListener("beforeunload", s),
                });
              });
            })(b, D),
            ((t) => {
              const { teardown } = t;
              return new Promise((resolve) => {
                var r;
                var n;
                var o;
                r = () =>
                  resolve({
                    status: "hidden",
                  });
                n = new AbortController();
                addEventListener(
                  "visibilitychange",
                  (o = (t) => {
                    if (
                      t.type === "pagehide" ||
                      document.visibilityState === "hidden"
                    ) {
                      r();
                    }
                  }),
                  {
                    capture: true,
                    signal: n.signal,
                  },
                );
                addEventListener("pagehide", o, {
                  capture: true,
                  signal: n.signal,
                });
                var i = n;
                teardown.push({
                  dispose: () => i.abort(),
                });
              });
            })(b),
            ((t) => {
              const { teardown, pid } = t;
              const n = u.includes(pid)
                ? c(window.location.pathname, window.location.search)
                : undefined;
              return new Promise((resolve) => {
                var o = setInterval(() => {
                  if (
                    !(
                      O(S(window.location.pathname), pid) &&
                      (n === undefined ||
                        c(window.location.pathname, window.location.search) ===
                          n)
                    )
                  ) {
                    resolve({
                      status: "route-change",
                    });
                  }
                }, a.nw);
                teardown.push({
                  dispose: () => clearInterval(o),
                });
              });
            })(b),
          ]);
        } catch (error) {
          return Promise.resolve({
            status: "js-error",
            error,
          });
        }
      })())
    );
    performance.mark(b.basicMetric.name, {
      startTime:
        (e = (r = _.data) == null ? undefined : r.value) != null
          ? e
          : performance.now(),
      detail: {
        status: _.status,
        element: (l = _.data) == null ? undefined : l.element,
        ccfmp_content_type: (h = _.data) == null ? undefined : h.contentType,
        feed_data_status: (d = _.data) == null ? undefined : d.feedDataStatus,
        feed_source: (p = _.data) == null ? undefined : p.feedSource,
      },
    });
    for (const R of b.teardown) {
      if (!(R == null || (g = R.dispose) == null)) {
        g.call(R);
      }
    }
    var k;
    var N;
    var P;
    var D;
    let F;
    let C;
    const L = () => {
      if (b.basicMetric.name !== a.IM) {
        var e;
        var r;
        M(
          b,
          t,
          (e = (r = _.data) == null ? undefined : r.value) != null
            ? e
            : performance.now(),
          {
            isSupport: _.status !== "not-support" && undefined,
            isBounced: _.status === "route-change" || undefined,
          },
          {
            status: _.status,
          },
        );
      }
      I(b, t);
      T(b, t);
    };
    switch (_.status) {
      case "success":
        console.log("[ccfmp] success:", _.data.value, _.data.element);
        M(
          b,
          t,
          _.data.value,
          {},
          {
            element: _.data.element,
            src: _.data.src || undefined,
            status: _.status,
            ccfmp_content_type: _.data.contentType,
            feed_data_status: _.data.feedDataStatus,
            feed_source: _.data.feedSource,
          },
        );
        I(b, t);
        T(b, t);
        break;
      case "hidden":
        console.warn("[ccfmp] hidden");
        L();
        break;
      case "not-support":
        console.warn("[ccfmp] not support");
        L();
        break;
      case "route-change":
        console.warn("[ccfmp] bounced:", _.status);
        L();
        break;
      case "user-close":
        console.warn("[ccfmp] bounced:", _.status);
        break;
      case "timeout":
        console.warn("[ccfmp] timeout");
        L();
        break;
      case "no-root-element":
        console.warn("[ccfmp] no root");
        L();
        break;
      case "js-error":
        console.error("[ccfmp] error:", _.error);
        L();
        if ((F = (C = window).__DreaminaSlardar) != null) {
          F.call(C, "captureException", _.error);
        }
    }
    if (t.perfName === a.IM) {
      s("after_ccfmp");
    }
  })();
};
window._getMilestoneDetail = R;
window._getMilestone = _;
window._bindFMP({
  pids: ["/ai-tool/home"],
  perfName: a.YF,
  attributeName: a.o9,
});
window._bindFMP({
  pids: [
    "/ai-tool/home",
    "/ai-tool/asset",
    "/ai-tool/generate",
    "/ai-tool/search-result",
    "/ai-tool/assets-canvas",
    "/ai-tool/work-detail/:id",
  ],
  perfName: a.IM,
  attributeName: a.Wj,
  milestoneName: a.X_,
  milestoneDetailName: a.f5,
  forceContext: {
    performance: {
      [a.IM]: true,
    },
    custom: {},
    buildContext() {
      let t;
      return {
        isAGWInjectSuccess: window._isAGWInjectSuccess ? "true" : "false",
        ssrPreRenderContent: (t = window._ssrPreRenderContent) != null ? t : "",
        hitFeedExperimentalGroup: window._hitFeedExperimentalGroup
          ? "true"
          : "false",
      };
    },
  },
});
