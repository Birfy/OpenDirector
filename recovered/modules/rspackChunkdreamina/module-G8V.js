import r from "oa";
import n from "bk";
import i from "SH";
import s from "Kg8";
import o from "M4O";
import { yJ } from "./module-ogj.js";
const c = {
  bid: "cc_web",
  domain: yJ.domain,
  pluginPathPrefix: yJ.pluginPathPrefix,
};
function d(e) {
  if (typeof e === "string") {
    return JSON.parse(e || "{}");
  }
  if (e && typeof e === "object") {
    return e;
  }
  return {};
}
function u(e, t, a) {
  try {
    let logId =
      ((o = t.response.headers) == null ? undefined : o["x-tt-logid"]) || "";
    if (logId) {
      t.extra = n._(r._({}, t.extra), {
        logId,
      });
    }
    ((e, t, a) => {
      try {
        const i = d(e);
        const s = new URL(t.request.url);
        if (s.pathname.includes("/passport/web/region/")) {
          const o = Object.fromEntries(
            new URLSearchParams(typeof a === "string" ? a : undefined),
          );
          t.extra = n._(r._({}, t.extra, o), {
            domain: i.data.domain,
            country_code: i.data.country_code,
          });
        }
        if (s.pathname.includes("/passport/web/account/info/")) {
          t.extra = n._(r._({}, t.extra), {
            biz_target_idc: i.data.biz_target_idc,
          });
        }
        if (s.pathname.includes("/passport/web/check_qrconnect/")) {
          t.extra = n._(r._({}, t.extra), {
            status: i.data.status,
          });
        }
      } catch (e) {}
    })(e, t, a);
    const s = d(e);
    if (
      s.ret !== "0" &&
      s.status_code !== 0 &&
      s.code !== 0 &&
      s.e !== 0 &&
      (!s.BaseResp || s.BaseResp.StatusCode !== 0) &&
      s.message !== "success" &&
      (!s.ResponseMetadata || s.ResponseMetadata.Error)
    ) {
      logId = s.log_id || logId || "";
      var o;
      let l;
      let c;
      const u = (s.message || s.errmsg || "").slice(0, 50);
      const m =
        s.ret ||
        ((l = s.BaseResp) == null ? undefined : l.StatusCode) ||
        s.status_code ||
        s.code ||
        s.e ||
        ((c = s.data) == null ? undefined : c.error_code) ||
        "";
      return n._(r._({}, t.extra), {
        ret: m.toString(),
        msg: u.toString(),
        logId: logId.toString(),
      });
    }
  } catch (e) {}
  return false;
}
const m = {
  bid: c.bid,
  domain: c.domain,
  pluginPathPrefix: c.pluginPathPrefix,
};
var p = new (class {
  get sdk() {
    let e;
    if (typeof window !== "undefined") {
      if ((e = window) == null) {
        return undefined;
      }
      return e.ccWebSlardar;
    }
  }
  init(e) {
    let t;
    this._shareSessionId();
    this._initEnv();
    if ((t = this.sdk) != null) {
      t.call(
        this,
        "init",
        n._(r._({}, m, e), {
          deviceId: this._getWebId(),
          plugins: r._(
            {
              fetch: {
                extraExtractor: (e, t, a) => u(e, t, a),
              },
              ajax: {
                extraExtractor: (e, t, a) => u(e, t, a),
              },
            },
            e.plugins,
          ),
        }),
      );
    }
  }
  start() {
    let e;
    if ((e = this.sdk) != null) {
      e.call(this, "start");
    }
  }
  config(e) {
    let t;
    if ((t = this.sdk) != null) {
      t.call(this, "config", e);
    }
  }
  error(e, t) {
    let a;
    let s;
    const o =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const l = (o == null ? undefined : o.level)
      ? o == null
        ? undefined
        : o.level
      : "warn";
    const c = i.A(t)
      ? (((a = Error(t.message)).name = t.name),
        (a.stack = t.stack),
        (a.message = t.message),
        a)
      : Error(JSON.stringify(t));
    const { message } = c;
    c.message = "【Custom-Error】:"
      .concat(e, "-")
      .concat(
        o.toGroup ? "MoreDataInExternal" : c == null ? undefined : c.message,
      );
    if (o.toGroup) {
      Object.assign(o, {
        message,
      });
      delete o.toGroup;
    }
    if ((s = this.sdk) != null) {
      s.call(
        this,
        "captureException",
        c,
        n._(r._({}, o), {
          level: l,
        }),
      );
    }
  }
  dataEvent(e) {
    let t;
    const a =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const i = (a == null ? undefined : a.level)
      ? a == null
        ? undefined
        : a.level
      : "info";
    const l = s.A(a, o.A);
    if ((t = this.sdk) != null) {
      t.call(this, "sendEvent", {
        name: "【Custom-Data】: ".concat(e),
        metrics: l,
        categories: n._(r._({}, a), {
          level: i,
        }),
      });
    }
  }
  event(name) {
    let t;
    const a =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const i = (a == null ? undefined : a.level)
      ? a == null
        ? undefined
        : a.level
      : "info";
    const l = s.A(a, o.A);
    if ((t = this.sdk) != null) {
      t.call(this, "sendEvent", {
        name,
        metrics: l,
        categories: n._(r._({}, a), {
          level: i,
        }),
      });
    }
  }
  log(e) {
    let t;
    const a =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const n = (a == null ? undefined : a.level)
      ? a == null
        ? undefined
        : a.level
      : "info";
    if ((t = this.sdk) != null) {
      t.call(this, "sendLog", {
        content: "【Custom-Log】: ".concat(e),
        level: n,
        extra: r._({}, a),
      });
    }
  }
  sendCustomPerfMetric(e) {
    let t;
    if ((t = this.sdk) != null) {
      t.call(this, "sendCustomPerfMetric", e);
    }
  }
  setCurrentBranch() {
    const e =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    this._setContext("branch", e);
  }
  setTargetIdc(e) {
    this._setContext("cc_target_idc", e);
  }
  reportServerTiming() {
    try {
      const e = new Set();
      for (const t of performance
        .getEntriesByType("navigation")
        .reduce((acc, item) => {
          if (item && item.serverTiming) {
            acc.push(...item.serverTiming);
          }
          return acc;
        }, [])) {
        var a;
        var r;
        let n;
        const { name, description, duration } = t;
        if (t.name) {
          if (!e.has(name)) {
            e.add(name);
            if ((n = this.sdk) != null) {
              n.call(this, "sendCustomPerfMetric", {
                type: "perf",
                name,
                value: duration,
                extra: description
                  ? {
                      description,
                    }
                  : undefined,
              });
            }
          }
        }
      }
      if (!((r = this.sdk) == null || (a = r.getSender()) == null)) {
        a.flush();
      }
    } catch (error) {
      this.error("report_server_timing_error", error);
    }
  }
  _initEnv() {
    if (typeof window !== "undefined") {
      let e;
      let t;
      let a;
      let r;
      let n;
      let i;
      const s = new URLSearchParams(window.location.search);
      this._setContext("branch", window._currentBranch);
      this._setContext("tag", window._tag);
      this._setContext("gray_config_key", window.__gray_config_key);
      this._setContext("lvweb_env", window.__lvweb_env);
      this._setContext("psm", window.__agw_psm);
      this._setContext(
        "idc",
        (n = window.gfdatav1) == null ? undefined : n.idc,
      );
      this._setContext(
        "pc_session_id",
        (e = s.get("pcSessionId")) != null ? e : "",
      );
      this._setContext(
        "app_channel",
        (t = s.get("appChannel")) != null ? t : "",
      );
      this._setContext("pc_did", (a = s.get("did")) != null ? a : "");
      this._setContext(
        "ssr_render_level",
        "".concat(
          (r = (i = window._SSR_DATA) == null ? undefined : i.renderLevel) !=
            null
            ? r
            : 0,
        ),
      );
    }
  }
  _setContext(e) {
    let t;
    const a =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    if (a) {
      if ((t = this.sdk) != null) {
        t.call(this, "context.set", e, a);
      }
    }
  }
  _getWebId() {
    let e;
    if (typeof window !== "undefined") {
      return (
        window.GATEWAY_INJECTED_WEB_ID ||
        ((e = document.cookie.match(RegExp("(^| )_tea_web_id=([^;]+)"))) == null
          ? undefined
          : e[2])
      );
    }
  }
  _shareSessionId() {
    let e;
    if ((e = this.sdk) != null) {
      e.call(this, "on", "start", () => {
        if (typeof window !== "undefined") {
          var e;
          var { sessionId } =
            ((e = this.sdk) == null ? undefined : e.call(this, "config")) || {};
          if (sessionId) {
            window.__slardar_session_id = sessionId;
          }
        }
      });
    }
  }
  getParentSessionId() {
    if (typeof window !== "undefined") {
      let e;
      const t =
        (e = window.opener) == null ? undefined : e.__slardar_session_id;
      if (typeof t === "string" && t) {
        return t;
      }
    }
  }
})();
export { p as n };
