if (require.j == "wl4") var a = require("oa");
if (require.j == "wl4") var o = require("bk");
if (require.j == "wl4") var i = require("./module-K8.js");
if (require.j == "wl4") var n = require("./module-jnc.js");
export class m {
  setConfig(e) {
    this._sdk("config", e);
  }
  setEventParams(e) {
    let { metrics, categories } = this._separateEventParams(e);
    this._eventMetrics = a._({}, this._eventMetrics, metrics);
    this._eventCategories = a._({}, this._eventCategories, categories);
  }
  setLogParams(e) {
    this._logParams = a._({}, this._logParams, e);
  }
  setCaptureParams(e) {
    this._captureParams = a._({}, this._captureParams, e);
  }
  captureException(label, t, r = {}, i) {
    let n = o._(a._({}, this._captureParams, r), {
      label,
    });
    let c = this._findJsError(t);
    this._sdk("captureException", c, n, i);
  }
  sendEvent(e, t = {}, attached_log) {
    let o = this._separateEventParams(t);
    this._sdk("sendEvent", {
      name: e,
      attached_log,
      metrics: a._({}, this._eventMetrics, o.metrics),
      categories: a._({}, this._eventCategories, o.categories),
    });
  }
  sendLog(level, content, r = {}) {
    this._sdk("sendLog", {
      level,
      content,
      extra: a._({}, this._logParams, r),
    });
  }
  sendCustomPerfMetric(e, value, r = {}) {
    this._sdk("sendCustomPerfMetric", {
      name: e,
      value,
      type: "perf",
      extra: a._({}, this._logParams, r),
    });
  }
  reportResource(payload) {
    this._sdk("report", {
      ev_type: "resource",
      payload,
    });
  }
  bindSlardarHook(e, t) {
    this._sdk("on", e, t);
  }
  unbindSlardarHook(e, t) {
    this._sdk("off", e, t);
  }
  waitLcpSummary() {
    return this._lcpSummaryDefer.promise;
  }
  _findJsError(e) {
    let t = e;
    while (t) {
      if (t instanceof Error) {
        return t;
      }
      t = t.cause;
    }
    return e.toString();
  }
  _separateEventParams(e) {
    let metrics = {};
    let categories = {};
    Object.keys(e).forEach((a) => {
      if (typeof e[a] === "string" || e[a] instanceof String) {
        categories[a] = e[a];
      } else if (typeof e[a] === "number" || e[a] instanceof Number) {
        metrics[a] = e[a];
      }
    });
    return {
      metrics,
      categories,
    };
  }
  _waitForLcp() {
    let e = (t) => {
      var r;
      var a;
      var o;
      var n;
      var c;
      var l;
      var m;
      var s;
      if ((t == null ? undefined : t.ev_type) === "performance") {
        if (
          ((t == null || (r = t.payload) == null ? undefined : r.name) ===
            "fp" ||
            (t == null || (a = t.payload) == null ? undefined : a.name) ===
              "fcp") &&
          t.payload.value
        ) {
          this._lcpSummary[t.payload.name] = t.payload.value;
        }
        if (
          (t == null || (o = t.payload) == null ? undefined : o.name) === "lcp"
        ) {
          if (t.payload.value) {
            this._lcpSummary.lcp = t.payload.value;
          }
          if ((n = t.payload.extra) == null ? undefined : n.element) {
            this._lcpSummary.lcpElement = t.payload.extra.element;
          }
          if ((c = t.common) == null ? undefined : c.url) {
            this._lcpSummary.lcpUrl = t.common.url;
          }
          if ((l = t.common) == null ? undefined : l.pid) {
            this._lcpSummary.pid = (m = t.common) == null ? undefined : m.pid;
          }
          this.unbindSlardarHook("send", e);
          if (t.payload.value === 0) {
            this._lcpSummary = {
              fp: 0,
              fcp: 0,
              lcp: 0,
              lcpElement: "",
              lcpUrl: "",
              pid: "",
            };
            this._lcpSummaryDefer.resolve(i.xz(-1, "page routed"));
          } else {
            this._lcpSummaryDefer.resolve(i.TZ(this._lcpSummary));
          }
        }
      } else if ((t == null ? undefined : t.ev_type) === "pageview") {
        if (
          !(
            (t == null || (s = t.common) == null ? undefined : s.pid) &&
            location.pathname.includes(t.common.pid)
          )
        ) {
          this.unbindSlardarHook("send", e);
        }
      }
    };
    this.bindSlardarHook("send", e);
  }
  constructor(e, t, r, a, o) {
    this._sdk = e;
    this._logParams = r;
    this._captureParams = a;
    this._options = o;
    this._lcpSummary = {
      fp: 0,
      fcp: 0,
      lcp: 0,
      lcpElement: "",
      lcpUrl: "",
      pid: "",
    };
    this._lcpSummaryDefer = n.v6();
    let { metrics, categories } = this._separateEventParams(t);
    this._eventMetrics = metrics;
    this._eventCategories = categories;
    if (o == null ? undefined : o.lcpSummary) {
      this._waitForLcp();
    }
  }
}
