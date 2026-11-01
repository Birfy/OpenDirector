import i from "M8X";
import n from "k6";
import a from "bo";
import o from "yI";
import c from "c8J";
import l from "hag";
import s from "Yvt";
import d from "Iv";
import u from "VN";
import f from "VBv";
import { J_ } from "./module-MgG_2.js";
import { i as i_1 } from "./module-xK1.js";
import { F } from "./module-pGt.js";
import { AT, K, N8, X3, aW, cy, ev } from "./module-Nbm.js";
import h from "NY";
import p from "oa";
import y from "QWK";
import T from "K8";
import { HQ, Ve, jo, qD, sg } from "./module-wcw.js";
import C from "HpP";
import S from "WIi";
import { cU } from "./module-zbK.js";
import { q } from "./module-oix.js";
const D = (e, t) => {
  if (e) {
    if (e.length > t) {
      return "".concat(e.slice(0, t), "...");
    }
    return e;
  }
};
const A = (e) => {
  if (e instanceof Error) {
    return e.stack || e.message;
  }
  if (typeof e === "string") {
    return e;
  }
  try {
    return JSON.stringify(e);
  } catch (t) {
    return String(e);
  }
};
const P = (e, t) => {
  var r;
  var i = new RegExp("".concat(t, ":\\s*([^;]+)")).exec(e);
  if (i == null || (r = i[1]) == null) {
    return undefined;
  }
  return r.trim();
};
const R = (e) => {
  var t;
  var r = e.map((e) => e.errorInfo).filter((e) => !!e);
  var i = e.reduce((acc, item) => {
    var r;
    var i;
    if (acc) {
      if (
        ((r = item.duration) != null ? r : 0) >
        ((i = acc.duration) != null ? i : 0)
      ) {
        return item;
      }
      return acc;
    }
    return item;
  }, undefined);
  var n = r.length
    ? r.map((e) => "".concat(e.task, ": ").concat(e.message)).join(" | ")
    : undefined;
  return {
    errMsg: n,
    primaryFailedTask: (t = r[0]) == null ? undefined : t.task,
    failedTask: r.map((e) => e.task).join(",") || undefined,
    taskCount: e.length,
    successTaskCount: e.filter((e) => e.status === "success").length,
    failedTaskCount: r.length,
    taskStatus: e
      .map((e) => "".concat(e.taskType, ":").concat(e.status))
      .join(","),
    slowestTask: i == null ? undefined : i.taskType,
    slowestTaskDuration: i == null ? undefined : i.duration,
    errorCategory:
      [...new Set(r.map((e) => e.category))].join(",") || undefined,
    errorCode:
      r
        .map((e) => e.code)
        .filter(Boolean)
        .join(",") || undefined,
    errorMsg: n,
    errorDetail: r.length ? D(JSON.stringify(r), 1000) : undefined,
    logId:
      r
        .map((e) => e.logId)
        .filter(Boolean)
        .join(",") || undefined,
  };
};
const M = (_containerService, stage, r) => {
  r.forEach((r) => {
    if (r.errorInfo) {
      C.m(_containerService, {
        stage,
        task: r.taskType,
        status: "error",
        duration: r.duration,
        errorCategory: r.errorInfo.category,
        errorCode: r.errorInfo.code,
        errorMsg: r.errorInfo.message,
        errorDetail: r.errorInfo.detail,
        logId: r.errorInfo.logId,
      });
    }
  });
};
class L {
  _runBeforeTaskHook(e) {
    return h
      ._(function* () {
        if (this._beforeTaskHook) {
          try {
            yield this._beforeTaskHook(e, this._containerService);
          } catch (error) {
            Ve.error("FetchCommercialDataTask _runBeforeTaskHook error", error);
          }
        }
      })
      .call(this);
  }
  doWhenUserLogin(e) {
    return h
      ._(function* () {
        const t = yield this._firstStep(e);
        const r = yield this._secondStep(e);
        i.cQ(this._containerService, d.sG).syncRemoteCreditHistory();
        return [t, r];
      })
      .call(this);
  }
  _firstStep(e) {
    return h
      ._(function* () {
        jo("init_commercial_data_first_step");
        i.cQ(this._containerService, d.sG).init();
        let t;
        const r = [
          {
            taskType: q.INIT_COMMERCIAL_STRATEGY,
            task: () => aW(e, this._containerService),
          },
          {
            taskType: q.FETCH_USER_CREDIT,
            task: () => N8(e, this._containerService),
          },
          {
            taskType: q.FETCH_VIP_INFO,
            task: () => ev(e, this._containerService),
          },
        ];
        const n = yield this._executeTaskItems(r);
        qD("init_commercial_data_first_step");
        const { duration } =
          (t = HQ("init_commercial_data_first_step")) != null ? t : {};
        const o = n.every((e) => {
          var { status } = e;
          return status === "success";
        });
        const c = R(n);
        M(this._containerService, "step1", n);
        C.V(
          this._containerService,
          p._(
            {
              duration,
              stage: "step1",
              status: o ? "success" : "error",
            },
            c,
          ),
        );
        if (o) {
          return T.nj();
        }
        return T.xz(
          -1,
          "init commercial data first step error ".concat(c.errMsg),
        );
      })
      .call(this);
  }
  _executeWithHook(e, t) {
    return h
      ._(function* () {
        yield this._runBeforeTaskHook(e);
        return t();
      })
      .call(this);
  }
  _tryFetchTeamVIPGoodsInfo(e, t) {
    if (t && t && t.currentSpaceType === cU.Team) {
      return X3(e, this._containerService, {
        currentTeamId: t.currentTeamId,
        enterFrom: t.enterFrom,
      });
    }
    return Promise.resolve(T.nj());
  }
  _executeTaskItems(e) {
    return Promise.all(
      e.map((e) => {
        var { taskType, task } = e;
        return this._executeTaskItem(taskType, task);
      }),
    );
  }
  _executeTaskItem(e, t) {
    return h
      ._(function* () {
        let r;
        let i;
        let n;
        let a;
        let o;
        let c;
        let l;
        let s;
        let d;
        let u;
        let f;
        const v = Date.now();
        try {
          yield this._executeWithHook(e, t);
          return {
            taskType: e,
            status: "success",
            duration: Date.now() - v,
          };
        } catch (error) {
          return {
            taskType: e,
            status: "error",
            duration: Date.now() - v,
            errorInfo:
              ((o =
                typeof error === "object" && error !== null
                  ? error
                  : undefined),
              (c =
                error instanceof Error
                  ? error.message
                  : typeof error === "string"
                    ? error
                    : (o == null ? undefined : o.msg) ||
                      (o == null ? undefined : o.message) ||
                      A(error)),
              (l =
                (r = o == null ? undefined : o.code) != null
                  ? r
                  : P(c, "code")),
              (s = (o == null ? undefined : o.msg) || P(c, "msg") || c),
              (d =
                (o == null || (i = o.errorInfo) == null
                  ? undefined
                  : i.log_id) ||
                (o == null || (n = o.errorInfo) == null
                  ? undefined
                  : n.logId) ||
                (o == null || (a = o.errorInfo) == null
                  ? undefined
                  : a.logid) ||
                P(c, "logid")),
              {
                task: e,
                category:
                  ((u = l === undefined ? undefined : String(l)),
                  (f = s.toLowerCase()).includes("network error")
                    ? "network"
                    : f.includes("timeout") || f.includes("timed out")
                      ? "timeout"
                      : f.includes("cannot read") || f.includes("typeerror")
                        ? "runtime"
                        : u && u !== "-1"
                          ? "api"
                          : "unknown"),
                code: l === undefined ? undefined : String(l),
                message: D(s, 500) || "",
                logId: D(d, 500),
                detail: D(A(error), 1000),
              }),
          };
        }
      })
      .call(this);
  }
  _secondStep(e) {
    return h
      ._(function* () {
        jo("init_commercial_data_second_step");
        try {
          var t;
          var r;
          const n = i.cQ(this._containerService, S.G);
          r = yield n.getSubscribeTeamSpaceContext();
        } catch (error) {
          Ve.error(
            "FetchCommercialDataTask _secondStep resolve teamContext error",
            error,
          );
        }
        const a = [
          {
            taskType: q.FETCH_VIP_GOODS_INFO,
            task: () => AT(e, this._containerService),
          },
          {
            taskType: q.FETCH_TEAM_VIP_GOODS_INFO,
            task: () => this._tryFetchTeamVIPGoodsInfo(e, r),
          },
          {
            taskType: q.FETCH_CREDIT_GOODS_INFO,
            task: () => K(e, this._containerService, r),
          },
          {
            taskType: q.FETCH_SUBSCRIBE_PAGE_RESOURCE,
            task: () => cy(e, this._containerService),
          },
        ];
        const o = yield this._executeTaskItems(a);
        qD("init_commercial_data_second_step");
        const { duration } =
          (t = HQ("init_commercial_data_second_step")) != null ? t : {};
        const l = o.every((e) => {
          var { status } = e;
          return status === "success";
        });
        const s = R(o);
        M(this._containerService, "step2", o);
        C.V(
          this._containerService,
          p._(
            {
              duration,
              stage: "step2",
              status: l ? "success" : "error",
            },
            s,
          ),
        );
        if (l) {
          return T.nj();
        }
        return T.xz(
          -1,
          "init commercial data second step error ".concat(s.errMsg),
        );
      })
      .call(this);
  }
  constructor(e, t) {
    this._containerService = e;
    this._beforeTaskHook = t;
  }
}
y.Cg(
  [
    sg(500, {
      leading: true,
      trailing: false,
    }),
    y.Sn("design:type", Function),
    y.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
    ]),
    y.Sn("design:returntype", Promise),
  ],
  L.prototype,
  "doWhenUserLogin",
  null,
);
class w {
  start() {
    if (!(this._isInitialized || this._isDestroyed)) {
      this._initUserLoginEvents();
      this._initVipEvents();
      this._initCreditChangeEvents();
      this._initVisibilityEvents();
      this._initClickEvents();
      this._isInitialized = true;
    }
  }
  destroy() {
    let e;
    if (!this._isDestroyed) {
      if (this._visibilityChangeHandler) {
        window.removeEventListener(
          "visibilitychange",
          this._visibilityChangeHandler,
        );
        this._visibilityChangeHandler = undefined;
      }
      if (this._clickHandler) {
        window.removeEventListener("click", this._clickHandler);
        this._clickHandler = undefined;
      }
      if ((e = this._accountUnsubscribe) != null) {
        e.call(this);
      }
      this._accountUnsubscribe = undefined;
      if (
        this._debounceFetchUserCredit &&
        "cancel" in this._debounceFetchUserCredit
      ) {
        this._debounceFetchUserCredit.cancel();
      }
      if (
        this._debounceFetchAllBenefitStrategy &&
        "cancel" in this._debounceFetchAllBenefitStrategy
      ) {
        this._debounceFetchAllBenefitStrategy.cancel();
      }
      if (
        this._throttleTryReceiveCredits &&
        "cancel" in this._throttleTryReceiveCredits
      ) {
        this._throttleTryReceiveCredits.cancel();
      }
      this._isDestroyed = true;
      this._isInitialized = false;
    }
  }
  get isInitialized() {
    return this._isInitialized;
  }
  get isDestroyed() {
    return this._isDestroyed;
  }
  _initUserLoginEvents() {
    let e;
    let t;
    let hasLogin = this._accountPort.getSnapshot().hasLogin;
    if (hasLogin) {
      this._fetchCommercialDataTaskIns.doWhenUserLogin(a.og());
    }
    this._accountUnsubscribe =
      (e = (t = this._accountPort).subscribe) == null
        ? undefined
        : e.call(t, () => {
            var hasLogin_1 = this._accountPort.getSnapshot().hasLogin;
            var t = !hasLogin && hasLogin_1;
            hasLogin = hasLogin_1;
            if (!this._isDestroyed && t) {
              this._fetchCommercialDataTaskIns.doWhenUserLogin(a.og());
            }
          });
  }
  _initVipEvents() {
    this._vipService.onVipInfoChange(() => {
      if (!this._isDestroyed) {
        AT(a.og(), this._containerService);
      }
    });
  }
  _initCreditChangeEvents() {
    this._commercialCreditService.onLocalCreditChange(
      (e, source, creditsDiff, submitId, n) => {
        if (!this._isDestroyed) {
          if (e === s.y.SYNCED) {
            f.E(this._containerService, {
              type: e,
              creditsDiff,
              submitId,
              source,
              status: creditsDiff === 0 ? "success" : "error",
              isTriplets: n.isTriplets,
              title: n.title,
              needCredits: n.amount,
            });
          }
          this._debounceFetchUserCredit(a.og(), this._containerService);
        }
      },
    );
  }
  _initVisibilityEvents() {
    this._visibilityChangeHandler = () => {
      if (!this._isDestroyed) {
        if (
          this._accountPort.getSnapshot().hasLogin &&
          document.visibilityState === "visible"
        ) {
          this._commercialCreditService.syncRemoteCreditHistory();
          ev(a.og(), this._containerService);
          this._debounceFetchAllBenefitStrategy({
            containerService: this._containerService,
          });
          this._throttleTryReceiveCredits(this._containerService);
        } else {
          this._commercialCreditService.stopSyncRemoteCreditHistory();
        }
      }
    };
    window.addEventListener("visibilitychange", this._visibilityChangeHandler);
  }
  _initClickEvents() {
    this._clickHandler = () => {
      if (!this._isDestroyed) {
        J_(this._containerService);
        this._throttleTryReceiveCredits(this._containerService);
      }
    };
    window.addEventListener("click", this._clickHandler);
  }
  constructor(e, t) {
    this._isInitialized = false;
    this._isDestroyed = false;
    this._containerService = e;
    this._fetchCommercialDataTaskIns = n.M2(
      "FetchCommercialDataTask",
      new L(e, t),
    );
    this._accountPort = i.cQ(e, l.F);
    this._vipService = i.cQ(e, u._);
    this._commercialCreditService = i.cQ(e, d.sG);
    this._debounceFetchUserCredit = o.A(N8, 500, {
      trailing: true,
      leading: false,
    });
    this._debounceFetchAllBenefitStrategy = o.A(i_1, 500, {
      trailing: false,
      leading: true,
    });
    this._throttleTryReceiveCredits = c.A(F, 30000, {
      trailing: false,
      leading: true,
    });
  }
}
export var j = (e, t) => {
  var r = new w(e, t);
  r.start();
  return r;
};
