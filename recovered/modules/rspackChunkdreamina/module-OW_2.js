import a from "NY";
import o from "Cb";
import { v } from "./module-A7.js";
import { F4, X3 } from "./module-Dm.js";
import { P } from "./module-Ik.js";
import { $S } from "./module-jnc.js";
import { iX, nj } from "./module-K8.js";
let m = {
  appId: "app_id",
  appVersion: "app_version",
  userId: "user_id",
  hasLogin: "user_is_login",
  stagingFlag: "_staging_flag",
  enableTTWid: "enable_ttwebid",
  userType: "user_type",
};
class s {
  setConfig(e) {
    let t = this._transformToTeaConfig(e);
    this._sdk.config(t);
    if (t.user_unique_id !== undefined || t.user_id !== undefined) {
      this._abReady = false;
    }
  }
  getTeaConfig() {
    return this._sdk.getConfig();
  }
  reportPv(e = {}, t) {
    let { forceReport } = t || {};
    if (!this._canReport()) {
      this._needReportPv = e;
      return;
    }
    if (forceReport) {
      this._sdk.predefinePageView(e);
    } else if (this._canReportPv) {
      this._canReportPv = false;
      this._needReportPv = undefined;
      this._sdk.predefinePageView(e);
    }
  }
  disableReportPv() {
    this._canReportPv = false;
  }
  setCustomParams(e) {
    Object.assign(this._customParams, e);
    this._sdk.config({
      custom: this._customParams,
    });
  }
  getCustomParams() {
    return this._customParams;
  }
  setCommonEventParams(e) {
    Object.assign(this._evtParams, e);
    this._sdk.config({
      evtParams: this._evtParams,
    });
  }
  getCommonEventParams() {
    return this._evtParams;
  }
  track(e, t, r = false) {
    if (this._canReport()) {
      if (r) {
        this._reportBecon(e, t);
      } else {
        this._report(e, t);
      }
    }
  }
  ensureTrack(event, params, immediately = false) {
    if (this._canReport()) {
      if (immediately) {
        this._reportBecon(event, params);
      } else {
        this._report(event, params);
      }
    } else {
      this._pendingEventQueue.push({
        event,
        params,
        immediately,
      });
    }
  }
  getABConfig() {
    const e = this;
    return a._(function* () {
      yield e._abMutex.lock();
      try {
        return yield e._getABConfig();
      } finally {
        e._abMutex.unLock();
      }
    })();
  }
  getABTestVar(e, t) {
    const r = this;
    return a._(function* () {
      yield r._checkAbReady();
      return new Promise((resolve) => {
        if (r._canReport()) {
          return r._sdk.getVar(e, t, resolve);
        }
        resolve(t);
      });
    })();
  }
  getWebId() {
    const e = this;
    return a._(function* () {
      if (e._webId || (yield e._webIdMutexLock.lockShared(), e._webId)) {
        return e._webId;
      }
      let t = yield new Promise((resolve) => {
        e._sdk.getToken(resolve, 3000);
      });
      e._webIdMutexLock.unLockShared();
      e._webId = t.web_id;
      e.setCustomParams({
        web_id: e._webId,
      });
      return e._webId;
    })();
  }
  _getABConfig() {
    return new Promise((resolve) => {
      if (this._sdk.getABConfig) {
        this._sdk.getABConfig({}, resolve);
      } else {
        this._sdk.getABconfig({}, resolve);
      }
    });
  }
  _flush() {
    for (let e of (this._needReportPv && this.reportPv(this._needReportPv),
    this._pendingEventQueue)) {
      if (e.immediately) {
        this._reportBecon(e.event, e.params);
      } else {
        this._report(e.event, e.params);
      }
    }
  }
  _transformToTeaConfig(e) {
    let t = {};
    Object.entries(e).forEach(([e, r]) => {
      t[m[e] ? m[e] : e] = r;
    });
    if (e.userId) {
      t.user_unique_id = e.userId;
    } else if (e.userId === "") {
      t.user_unique_id = undefined;
    }
    return t;
  }
  _report(e, t) {
    this._sdk.event(e, t);
  }
  _reportBecon(e, t) {
    this._sdk.beconEvent(e, t);
  }
  _checkAbReady() {
    const e = this;
    return a._(function* () {
      yield e._abMutex.lock();
      try {
        if (e._abReady) {
          return;
        }
        yield $S(() => e._getABConfig(), 3000);
        e._abReady = true;
      } finally {
        e._abMutex.unLock();
      }
    })();
  }
  constructor() {
    this._customParams = {};
    this._evtParams = {};
    this._abReady = false;
    this._abMutex = new P();
    this._canReportPv = true;
    this._pendingEventQueue = [];
    this._webId = "";
    this._webIdMutexLock = new P();
  }
}
function u() {
  return (u = a._(function* (aid, unionHost) {
    let { TtWid } = yield Promise.all([
      require.e("1g3"),
      require.e("hw9"),
    ]).then(require.bind(require, "Vm"));
    let o = new TtWid({
      aid,
      service: location.host,
      unionHost,
    });
    try {
      yield o.checkWebIdFromTea();
      return nj();
    } catch (error) {
      return iX(-1, "webId invalid.", error);
    }
  })).apply(this, arguments);
}
function p() {
  return (p = a._(function* (e, t, r) {
    let o = yield $S(
      a._(function* () {
        let { web_id } = yield new Promise((resolve) => {
          r.getToken(resolve, 3000);
        });
        F4(web_id);
        return web_id;
      }),
      3000,
    );
    if (o.ok) {
      return (function (e, t) {
        return u.apply(this, arguments);
      })(e, t);
    }
    return o;
  })).apply(this, arguments);
}
class C extends s {
  getSessionId() {}
  _canReport() {
    return true;
  }
  _initSdk(e, t) {
    let r;
    let a;
    this._sdk.init({
      app_id: e.appId,
      disable_auto_pv: e.disableAutoPv,
      channel: e.channel,
      enable_ab_test: (r = e.enableAbTest) != null && r,
      ab_channel_domain: (a = e.abChannelDomain) != null ? a : "",
      autotrack: e.autoTrack,
      disable_webid: !!e.webId,
      max_report: e.maxReportMerge,
      reportTime: e.reportInterval,
      enable_stay_duration: e.enableStayDuration,
    });
    if (!e.disableAutoPv) {
      super.disableReportPv();
    }
    this.setConfig(t);
    if (e.webId) {
      this._webId = e.webId;
      this._sdk.config({
        web_id: e.webId,
      });
    }
    if (!e.webId && t.enableTTWid) {
      X3(
        t.ttWidUnionHost,
        "must pass ttWidUnionHost when enableTTWid(true) and webId(no).",
      );
      this._prepareTtWebId(e.appId, t.ttWidUnionHost);
    }
  }
  _startSdk(e) {
    if (this._canReport()) {
      if (!this._running) {
        this._sdk.start();
        this._running = true;
      }
      this._flush();
    }
  }
  _prepareTtWebId(e, t) {
    const r = this;
    return a._(function* () {
      yield r._webIdMutexLock.lock();
      (function (e, t, r) {
        return p.apply(this, arguments);
      })(e, t, r._sdk)
        .then((e) => {
          if (!e.ok) {
            r._onBindTtWidError.fire();
          }
        })
        .finally(() => {
          r._webIdMutexLock.unLock();
        });
    })();
  }
  constructor(e, t) {
    super();
    this._sdk = o.A;
    this._running = false;
    this._onBindTtWidError = new v();
    this.onBindTtWidError = this._onBindTtWidError.event;
    this._initSdk(e, t);
    this._startSdk(t);
  }
}
export { C as P };
