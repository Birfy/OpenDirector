import n from "NY";
import o from "M8X";
import d from "K8";
import c from "TSSB";
import u from "Qrk";
import l from "yB";
import _ from "kT";
import h from "St";
import m from "ur";
import v from "Rda";
import p from "aEg";
import g from "nvF";
import f from "CRx";
import I from "Ks";
import S from "J3";
import C from "pU";
import k from "HSi";
import T from "vJE";
import y from "G12";
import A from "rh7";
import b from "g98";
import M from "R4";
import E from "ALM";
import { h as h_1 } from "./module-lNM.js";
import { K as K_1 } from "./module-DGJ.js";
import { B as B_1 } from "./module-ELo.js";
import P from "QWK";
import G from "nss";
import { R } from "./module-x5f.js";
import q from "A7";
import j from "Kt";
import O from "H26";
import B from "uCp";
import Q from "s68";
import { C as C_1 } from "./module-xbE.js";
import V from "Qey";
import U from "Dm";
import L from "xi";
import K from "aEB";
import H from "Owp";
import W from "oAx";
import J from "gu";
import z from "fHC";
import X from "sMA";
import Y from "qq";
import $ from "fEa";
import { M as M_1 } from "./module-wSn.js";
import es from "oa";
import ea from "bk";
import en from "TC6";
import eo from "xs";
import ed from "Ut";
import ec from "Rb";
import eu from "I3";
import el from "RII";
import e_ from "jp";
import eh from "yMd";
import em from "sV8";
import ev from "e3";
import ep from "aS";
import eg from "CR";
import ef from "z7O";
import eI from "urA";
import eS from "ft";
import eC from "eA5";
import ek from "AX";
import eT from "oeq";
import ey from "Hlu";
import eA from "ha";
import eb from "UUA";
import eM from "kF";
import eE from "a5E";
import eF from "ymj";
import ew from "N3n";
import eG from "fku";
import eO from "iH";
import eN from "puv";
import eV from "M6d";
import eU from "fRi";
import eL from "mnO";
import eK from "qxo";
import eH from "c0";
import eW from "SF";
import eJ from "pY";
import ez from "fIG";
import eX from "Vhy";
import eY from "WJu";
import eZ from "GFn";
import e$ from "PHM";
import e0 from "ie";
import e1 from "Ey";
import e2 from "wC";
import e3 from "LV";
import e4 from "Cf";
import e5 from "tDK";
import e8 from "VHu";
import e6 from "Rq";
import e7 from "VJy";
import e9 from "u55";
import te from "Sl";
import tt from "y7i";
import tr from "Wp";
import to from "EJh";
import td from "R9c";
import tc from "OIT";
import tu from "dpB";
import tl from "cFd";
import t_ from "zU";
import th from "RXB";
import tm from "Mze";
import tv from "x4";
import tp from "yGz";
import tg from "oYY";
import tf from "s4E";
import tT from "nO5";
import tP from "PQZ";
import tG from "e2O";
import tD from "MGT";
import tx from "PXv";
import { d as d_1 } from "./module-uit.js";
import tB from "bE";
import tQ from "iN";
import tN from "ar";
import tV from "r5";
import tU from "qa";
import tL from "KC";
import tK from "dR";
import tH from "qN";
import tW from "fg";
import tJ from "b5";
import tz from "yF";
import tX from "G69";
import tY from "hI";
import tZ from "cBI";
import t$ from "GS";
import t3 from "fm";
import { G as G_1 } from "./module-SHI.js";
import t6 from "bN";
import { c as c_1 } from "./module-T1B.js";
import { g as g_1 } from "./module-yr_2.js";
import rs from "TE";
import { M as M_2 } from "./module-yZN.js";
import rd from "SR";
import rc from "cNo";
import rv from "o7";
import rS from "L8k";
import rA from "xy";
import rG from "Lz";
import rD from "WzM";
import rx from "n28";
import rq from "z9";
import rj from "ssl";
import rO from "ol0";
import rB from "AAv";
import rQ from "bzD";
import rV from "wFW3";
import rH from "u6";
import rW from "fVC";
import rJ from "JkZ";
import rz from "EkZ";
import r5 from "omI";
let i;
let s;
let a;
class D {
  bootstrap() {
    return n
      ._(function* () {
        try {
          this._dreaminaModelConfigFeatureService =
            yield this._dreaminaModelConfigFeatureContainerService.getInstance();
          return d.nj();
        } catch (error) {
          return d.xz(
            10000,
            "Failed to bootstrap AIGCModelStoreService",
            error,
          );
        }
      })
      .call(this);
  }
  getVideoModelConfig(e) {
    let t;
    if ((t = this._dreaminaModelConfigFeatureService) == null) {
      return undefined;
    }
    return t.getVideoModelConfig(e);
  }
  getActionCopyModelConfig(e) {
    let t;
    if ((t = this._dreaminaModelConfigFeatureService) == null) {
      return undefined;
    }
    return t.getActionCopyModelConfig(e);
  }
  getImageModelConfig(e) {
    let t;
    if ((t = this._dreaminaModelConfigFeatureService) == null) {
      return undefined;
    }
    return t.getImageModelConfig(e);
  }
  getDigitalHumanModelConfig(e) {
    let t;
    if ((t = this._dreaminaModelConfigFeatureService) == null) {
      return undefined;
    }
    return t.getDigitalHumanModelConfig(e);
  }
  findDigitalHumanModelByLipSyncMode(e, t) {
    let r;
    let i;
    let s;
    let a;
    let n;
    let o;
    if (
      (i = this._dreaminaModelConfigFeatureService) == null ||
      (r = i.digitalHumanModelConfigData.data) == null
        ? undefined
        : r.ok
    ) {
      if (t) {
        if (
          (o = this._dreaminaModelConfigFeatureService) == null ||
          (n = o.digitalHumanModelConfigData.data) == null
        ) {
          return undefined;
        }
        return n.value.videoModels.find((t) => {
          var r;
          return ((r = t.extra) == null ? undefined : r.mode) === e;
        });
      }
      if (
        (a = this._dreaminaModelConfigFeatureService) == null ||
        (s = a.digitalHumanModelConfigData.data) == null
      ) {
        return undefined;
      }
      return s.value.imageModels.find((t) => {
        var r;
        return ((r = t.extra) == null ? undefined : r.mode) === e;
      });
    }
  }
  get actionCopyModelReplacedKey() {
    let e;
    let t;
    let r;
    if (
      (t = this._dreaminaModelConfigFeatureService) == null ||
      (e = t.actionCopyModelConfigData.data) == null
        ? undefined
        : e.ok
    ) {
      if ((r = this._dreaminaModelConfigFeatureService) == null) {
        return undefined;
      }
      return r.actionCopyModelConfigData.data.value.modelReqKeyEmptyReplace;
    }
  }
  constructor(e) {
    this._dreaminaModelConfigFeatureContainerService = e;
    this._dreaminaModelConfigFeatureService = null;
  }
}
D = P.Cg(
  [
    P.Qj(0, G.Y),
    P.Sn("design:type", Function),
    P.Sn("design:paramtypes", [G.Y === undefined ? Object : G.Y]),
  ],
  D,
);
class Z {
  get uniqueKey() {
    return this._uniqueKey;
  }
  get historyId() {
    return this._historyId;
  }
  get queueDetails() {
    return this._queueDetails;
  }
  get onQueueDetailsChanged() {
    return this._onQueueDetailsChanged.event;
  }
  get onReachedFinalStatus() {
    return this._onReachedFinalStatus.event;
  }
  generateAccelerate() {
    return n
      ._(function* () {
        U.X3(this._historyId, "historyId is required");
        const e = W.H({
          scene: J.Sk.QueueSpeed,
        });
        const t = yield this._commercialLoaderService.getInstance();
        const r = t.getNeedCredits(e);
        const i = r && r.credits > 0;
        const s = t.createTrialInfoManager(e);
        const a =
          yield this._contentGenerationTaskQueueDataService.generateAccelerate({
            historyInfoList: [
              {
                historyId: this._historyId,
                localQueueInfo: {
                  queueIdx: this._queueDetails.queueInfo.queueIdx,
                  queueLength: this._queueDetails.queueInfo.queueLength,
                },
              },
            ],
            scene: 0,
          });
        if (i) {
          t.syncRemoteCreditHistory();
        } else if (s != null) {
          s.forceUpdateTrialInfo();
        }
        if (!a.ok) {
          if (i) {
            this._notificationService.warning(
              V.Ay.t("web_m10n_toast_generate_failed_credits_return", {
                num: r.credits,
              }),
            );
          } else {
            this._notificationService.warning(
              V.Ay.t(
                "web_priority_generation_failed_toast",
                {},
                "高峰期加速拥挤，免费次数已返还",
              ),
            );
          }
          return false;
        }
        const n = a.value[this._historyId];
        if (n.status !== 0) {
          if (n.failCode) {
            if (i) {
              this._notificationService.warning(
                V.Ay.t("web_m10n_toast_generate_failed_credits_return", {
                  num: r.credits,
                }),
              );
            } else {
              this._notificationService.warning(
                V.Ay.t(
                  "web_priority_generation_failed_toast",
                  {},
                  "高峰期加速拥挤，免费次数已返还",
                ),
              );
            }
          }
          return false;
        }
        this._updateQueueDetails({
          queueInfo: n.queueInfo,
          forecastCostTime: n.forecastCostTime,
          queueBenefitInfo: n.queueBenefitInfo,
        });
        return true;
      })
      .call(this);
  }
  dispose() {
    this.stopPolling();
  }
  startPolling(e, t) {
    this.stopPolling();
    this._historyId = e;
    if (t) {
      this._updateQueueDetails(t);
    }
    this._pollingManager = this._createPollingManager();
    this._pollingManager.startListening();
  }
  stopPolling() {
    let e;
    if ((e = this._pollingManager) != null) {
      e.dispose();
    }
    this._pollingManager = undefined;
  }
  _createPollingManager() {
    let e;
    let t;
    let r;
    let i;
    const s = {
      methodId: z.NY.QueueTaskProgress,
      timeout: 10000,
      fallbackStrategy: X.WV.RACING,
      websocketMessageHandler: (e) => {
        var t;
        var r;
        if (e.historyId !== this._historyId) {
          return {
            accepted: false,
            done: false,
          };
        }
        this._updateQueueDetails({
          queueInfo: e.queueInfo,
          forecastCostTime:
            (t = e.forecastCostTime) != null
              ? t
              : this._queueDetails.forecastCostTime,
          queueBenefitInfo:
            (r = e.queueBenefitInfo) != null
              ? r
              : this._queueDetails.queueBenefitInfo,
        });
        return {
          accepted: true,
          done: this._isFinalStatus(e.queueInfo),
        };
      },
      pollingConfig: {
        initialInterval:
          ((e =
            (r = this._queueDetails) == null
              ? undefined
              : r.queueInfo.pollingConfig.intervalSeconds) != null
            ? e
            : 30) * 1000,
        maxInterval:
          ((t =
            (i = this._queueDetails) == null
              ? undefined
              : i.queueInfo.pollingConfig.intervalSeconds) != null
            ? t
            : 30) * 1000,
      },
      pollingHandler: this._handlePolling.bind(this),
    };
    return this._containerService.createInstance(Y.E, s);
  }
  _mergeForestCostTime(e, t) {
    return {
      forecastGenerateCost:
        (t == null ? undefined : t.forecastGenerateCost) ||
        e.forecastGenerateCost,
      forecastQueueCost:
        (t == null ? undefined : t.forecastQueueCost) && t.forecastQueueCost > 0
          ? t.forecastQueueCost
          : e.forecastQueueCost > 0
            ? e.forecastQueueCost
            : 0,
    };
  }
  _updateQueueDetails(e) {
    const { queueInfo, queueBenefitInfo, forecastCostTime } = e;
    const s = {
      queueInfo,
      forecastCostTime: this._mergeForestCostTime(
        this._queueDetails.forecastCostTime,
        forecastCostTime,
      ),
      queueBenefitInfo,
    };
    if (!H.C$(this._queueDetails, s)) {
      this._queueDetails = s;
      L.V.log(
        "[queue-task][before] updateQueueDetails",
        "time:",
        Date.now() / 1000,
        "historyId",
        this._historyId,
        "queueDetails",
        {
          queueInfo,
          forecastCostTime,
          queueBenefitInfo,
        },
      );
      L.V.log(
        "[queue-task][after] updateQueueDetails",
        "time:",
        Date.now() / 1000,
        "history:",
        this._historyId,
        "queueDetails:",
        this._queueDetails,
      );
      this._onQueueDetailsChanged.fire(this._queueDetails);
      if (this._isFinalStatus(queueInfo)) {
        this._onReachedFinalStatus.fire();
      }
    }
    return this._queueDetails;
  }
  _isFinalStatus(e) {
    return e.queueStatus === Q.Y.Finished;
  }
  _handlePolling() {
    return n
      ._(function* () {
        U.X3(this._historyId, "historyId is required");
        const e = yield this._requestHandler.requestData(this._historyId);
        if (!e) {
          return false;
        }
        const t = this._updateQueueDetails(e);
        return this._isFinalStatus(t.queueInfo);
      })
      .call(this);
  }
  constructor(e, t, r, i, s, a, n) {
    this._uniqueKey = e;
    this._requestHandler = t;
    this._mockQueueDetails = r;
    this._containerService = i;
    this._contentGenerationTaskQueueDataService = s;
    this._commercialLoaderService = a;
    this._notificationService = n;
    this._onQueueDetailsChanged = new q.v();
    this._onReachedFinalStatus = new q.v();
    this._queueDetails = r;
    this._updateQueueDetails(r);
  }
}
Z = P.Cg(
  [
    P.Qj(3, j._),
    P.Qj(4, C_1),
    P.Qj(5, l.X),
    P.Qj(6, K.Ot),
    P.Sn("design:type", Function),
    P.Sn("design:paramtypes", [
      String,
      typeof TaskQueueRequestHandler === "undefined"
        ? Object
        : TaskQueueRequestHandler,
      typeof AIGCDataQueueDetails === "undefined"
        ? Object
        : AIGCDataQueueDetails,
      j._ === undefined ? Object : j._,
      C_1 === undefined ? Object : C_1,
      l.X === undefined ? Object : l.X,
      K.Ot === undefined ? Object : K.Ot,
    ]),
  ],
  Z,
);
class ee {
  requestData(e) {
    return n
      ._(function* () {
        this._pendingIds.add(e);
        if (!this._requestPromiseDeferred) {
          this._requestPromiseDeferred = $.v();
        }
        this._resetDebounceTimer();
        const t = yield this._requestPromiseDeferred.promise;
        this._requestPromiseDeferred = null;
        return t[e];
      })
      .call(this);
  }
  dispose() {
    if (this._debounceTimer) {
      clearTimeout(this._debounceTimer);
      this._debounceTimer = null;
    }
    this._pendingIds.clear();
  }
  _resetDebounceTimer() {
    if (this._debounceTimer) {
      clearTimeout(this._debounceTimer);
    }
    this._debounceTimer = setTimeout(
      () => this._processPendingRequests(),
      this._debounceTime,
    );
  }
  _processPendingRequests() {
    return n
      ._(function* () {
        if (this._pendingIds.size !== 0) {
          const e = Array.from(this._pendingIds);
          this._pendingIds.clear();
          U.X3(this._requestPromiseDeferred, "requestPromiseDeferred is null");
          try {
            const t = yield this._fetchFunction(e);
            this._requestPromiseDeferred.resolve(t);
          } catch (error) {
            this._requestPromiseDeferred.reject(error);
          }
        }
      })
      .call(this);
  }
  constructor(e, t = ee.DEFAULT_DEBOUNCE_TIME) {
    this._debounceTimer = null;
    this._pendingIds = new Set();
    this._requestPromiseDeferred = null;
    this._fetchFunction = e;
    this._debounceTime = t;
  }
}
ee.DEFAULT_DEBOUNCE_TIME = 3000;
class et {
  registerTask(e) {
    this._tasks.set(e.uniqueKey, e);
  }
  unregisterTask(e) {
    const t = this._tasks.get(e);
    if (t) {
      t.dispose();
    }
    this._tasks.delete(e);
  }
  getTaskByUniqueKey(e) {
    return this._tasks.get(e);
  }
  getTaskByHistoryId(e) {
    return Array.from(this._tasks.values()).find((t) => t.historyId === e);
  }
  getTasks() {
    return Array.from(this._tasks.values());
  }
  dispose() {
    this._tasks.clear();
  }
  constructor() {
    this._tasks = new Map();
    this._tasks = new Map();
  }
}
class er {
  get onQueueDetailsChanged() {
    return this._onQueueDetailsChanged.event;
  }
  bootstrap() {
    if (!this._isInitialized) {
      this._isInitialized = true;
      this._listenVipChange();
    }
  }
  generateAccelerate(e) {
    const t = this._taskQueueManager.getTaskByUniqueKey(e);
    if (t == null ? undefined : t.historyId) {
      return t.generateAccelerate();
    }
    return Promise.reject(Error("Task not found"));
  }
  getQueueDetails(e) {
    const t = this._taskQueueManager.getTaskByUniqueKey(e);
    if (t) {
      return t.queueDetails;
    }
  }
  createQueueTaskByAIGCDataTask(e) {
    const t = this._createTask(e.model);
    if (e.model.historyRecordId && t) {
      t.startPolling(e.model.historyRecordId);
    }
  }
  fetchAndUpdateAllQueueingTask(e) {
    return n
      ._(function* () {
        const { omitHistoryIds } = e != null ? e : {};
        const r = this._taskQueueManager
          .getTasks()
          .map((e) => {
            if (
              [Q.Y.Waiting, Q.Y.Queueing].includes(
                e.queueDetails.queueInfo.queueStatus,
              )
            ) {
              return e.historyId;
            }
          })
          .filter(
            (e) =>
              !!e &&
              !(omitHistoryIds == null
                ? undefined
                : omitHistoryIds.includes(e)),
          );
        if (r.length !== 0) {
          Object.entries(yield this._fetchQueueDetails(r)).forEach((e) => {
            var [t, r] = e;
            this._updateQueueDetails(t, r);
          });
        }
      })
      .call(this);
  }
  _createTask(e) {
    const { uniqueKey } = e;
    const r = this._taskQueueManager.getTaskByUniqueKey(uniqueKey);
    if (r) {
      return r;
    }
    const i = this._getQueueDetailsByAIGCDataTask(e);
    if (i) {
      const s = this._containerService.createInstance(
        Z,
        uniqueKey,
        this._batchRequestHandler,
        i,
      );
      const a = [];
      a.push(
        s.onQueueDetailsChanged((queueDetails) => {
          this._onQueueDetailsChanged.fire({
            uniqueKey,
            queueDetails,
          });
        }),
      );
      a.push(
        s.onReachedFinalStatus(() => {
          this._taskQueueManager.unregisterTask(uniqueKey);
          a.forEach((e) => e.dispose());
        }),
      );
      this._taskQueueManager.registerTask(s);
      return s;
    }
  }
  _getQueueDetailsByAIGCDataTask(e) {
    let t;
    let r;
    const { queueBenefitInfo, queueInfo } = e.statusModel;
    if (queueInfo) {
      return {
        queueInfo,
        forecastCostTime: {
          forecastGenerateCost:
            ((t = e.statusModel.timeModel.estimatedGenCostTime) != null
              ? t
              : 0) / O.K,
          forecastQueueCost:
            ((r = e.statusModel.timeModel.estimatedQueueCostTime) != null
              ? r
              : 0) / O.K,
        },
        queueBenefitInfo,
      };
    }
  }
  _listenVipChange() {
    return n
      ._(function* () {
        (yield this._dreaminaCommercialFeatureContainerService.getInstance()).membershipService.onMembershipChange(
          (e, t) =>
            n
              ._(function* () {
                if (
                  t &&
                  (t.effective.vipLevel !== e.effective.vipLevel ||
                    t.effective.isActive !== e.effective.isActive)
                ) {
                  const r = yield this._generateAccelerateVip();
                  if (r.ok) {
                    Object.entries(r.value).forEach((e) => {
                      var [t, r] = e;
                      if (r.status === 0) {
                        this._updateQueueDetails(t, {
                          queueInfo: r.queueInfo,
                          forecastCostTime: r.forecastCostTime,
                          queueBenefitInfo: this._getQueueBenefitInfo(r),
                        });
                      }
                    });
                  }
                }
              })
              .call(this),
        );
      })
      .call(this);
  }
  _updateQueueDetails(e, t) {
    const r = this._taskQueueManager.getTaskByHistoryId(e);
    if (r) {
      r.startPolling(e, t);
    }
  }
  _generateAccelerateVip() {
    return n
      ._(function* () {
        return yield this._contentGenerationTaskQueueDataService.generateAccelerate(
          {
            scene: 1,
          },
        );
      })
      .call(this);
  }
  _fetchQueueDetails(historyIds) {
    return n
      ._(function* () {
        const t =
          yield this._contentGenerationTaskQueueDataService.getHistoryQueueInfo(
            {
              historyIds,
            },
          );
        if (!t.ok) {
          return {};
        }
        const t_value = t.value;
        const i = {};
        Object.entries(t_value).forEach((e) => {
          var [t, r] = e;
          if (r.status === 0) {
            i[t] = {
              queueInfo: r.queueInfo,
              forecastCostTime: r.forecastCostTime,
              queueBenefitInfo: this._getQueueBenefitInfo(r),
            };
          }
        });
        return i;
      })
      .call(this);
  }
  _getQueueBenefitInfo(e) {
    let t;
    if ((t = e.queueBenefitInfo) != null) {
      return t;
    }
    return e.queueInfo.queueBenefitInfo;
  }
  constructor(e, t, r) {
    this._containerService = e;
    this._contentGenerationTaskQueueDataService = t;
    this._dreaminaCommercialFeatureContainerService = r;
    this._onQueueDetailsChanged = new q.v();
    this._isInitialized = false;
    this._batchRequestHandler = this._containerService.createInstance(
      ee,
      this._fetchQueueDetails.bind(this),
    );
    this._taskQueueManager = this._containerService.createInstance(et);
    B.v("ContentGeneratorTaskQueueService", this);
  }
}
er = P.Cg(
  [
    P.Qj(0, j._),
    P.Qj(1, C_1),
    P.Qj(2, l.X),
    P.Sn("design:type", Function),
    P.Sn("design:paramtypes", [
      j._ === undefined ? Object : j._,
      C_1 === undefined ? Object : C_1,
      l.X === undefined ? Object : l.X,
    ]),
  ],
  er,
);
class eR extends eM.v {
  constructor(...e) {
    super(...e);
    this.eventName = "agent_message_reply";
  }
}
class eP extends eM.o {
  get params() {
    return this._params;
  }
  setParamsByAIGCAgenticData(e) {
    let t;
    const { taskData, idModel } = e;
    ew.v(this, e);
    this._params.workspaceId =
      idModel.workspaceId !== null && idModel.workspaceId !== undefined
        ? String(idModel.workspaceId)
        : undefined;
    this._params.turnId = idModel.submitId;
    this._params.replyStatus = eE.l(taskData);
    this._params.submitId = idModel.submitId;
    const s = ey.N(e);
    const a = eA.K(s).reduce((acc, item) => {
      if (item.creditCount) {
        return acc + item.creditCount;
      }
      return acc;
    }, 0);
    this._params.creditsNeed = String(a);
    this._params.isCreativeMode = +!!e.creativeModelEnabled;
    this._params.isInspirationSearch = +!!e.searchEnabled;
    this._params.skillId = (t = e.metricsExtra) == null ? undefined : t.skillId;
    this._params.toolList = eb.i(s).join(",");
    eF.o(this, e.metricsExtra);
  }
  _getCollectorClass() {
    return eR;
  }
  _validateParams(e) {
    this._validateRequiredFields(e);
  }
  _validateRequiredFields(e) {
    [
      "reply_status",
      "turn_id",
      "user_message_id",
      "prompt",
      "is_add_image",
    ].forEach((t) => {
      U.F4(e[t], "[AgentMessageReplyReporter] ".concat(t, " is required"));
    });
  }
  constructor(e, t) {
    super(e, t);
    this._containerService = t;
  }
}
eP = P.Cg(
  [
    P.Qj(1, j._),
    P.Sn("design:type", Function),
    P.Sn("design:paramtypes", [
      typeof Partial === "undefined" ? Object : Partial,
      j._ === undefined ? Object : j._,
    ]),
  ],
  eP,
);
class eD extends eM.v {
  constructor(...e) {
    super(...e);
    this.eventName = "ai_audio_generate_status";
  }
}
class ex extends eM.o {
  get params() {
    return this._params;
  }
  setParamsByAIGCData(e, t) {
    let r;
    let i;
    let s;
    let a;
    const {
      idModel: { submitId, generateId },
      generateType,
      metricsExtra: { enterFrom, isRegenerate } = {},
    } = e;
    this._setErrorParams(e);
    this._isUnifiedEditMode =
      ((r = e.textToSpeechAbility) == null ? undefined : r.mode) ===
      ed.DAGenerateTTSMode.UnifiedEdit;
    this._isTextReadingMode =
      ((i = e.textToSpeechAbility) == null ? undefined : i.mode) ===
      ed.DAGenerateTTSMode.TTS;
    eG.i.setTextToSpeechParams(this, e);
    eG.i.setAudioFunctionModeParams(this, e);
    eG.i.setAudioModelParams(this, e, this._containerService);
    eG.i.setAudioPromptParams(this, e);
    this._params.enterFrom = enterFrom != null ? enterFrom : "click";
    if (!this._params.actionType) {
      this._params.actionType = isRegenerate ? "regenerate" : "generate";
    }
    this._params.submitId = submitId;
    this._params.generateId = generateId || submitId || e.uniqueKey;
    this._params.generateType = generateType;
    this._params.status =
      e.statusModel.recordStatus === ec.DMLGenRecordStatus.Failed
        ? "fail"
        : "success";
    this._params.time = Date.now() - e.statusModel.timeModel.createdTime;
    this._params.audioId = t;
    const l = t ? e.itemList.find((e) => e.id === t) : e.itemList[0];
    this._params.audioDuration =
      l == null || (a = l.audio) == null || (s = a.originAudio) == null
        ? undefined
        : s.durationMs;
  }
  _getCollectorClass() {
    return eD;
  }
  _validateParams(e) {
    if (!this._isUnifiedEditMode) {
      this._validateRequiredFields(e);
      this._validateSuccessFields(e);
      this._validateFailFields(e);
    }
  }
  _validateRequiredFields(e) {
    [
      "enter_from",
      "action_type",
      "submit_id",
      "generate_type",
      "script_cnt",
      "status",
      "time",
    ].forEach((t) => {
      U.F4(e[t], "[AiAudioGenerateStatusReporter] ".concat(t, " is required"));
    });
    this._validateSuccessFields(e);
    this._validateFailFields(e);
    this._validateConditionalFields(e);
  }
  _validateSuccessFields(e) {
    if (e.status === "success") {
      ["audio_id", "audio_duration"].forEach((t) => {
        if (e[t] !== undefined) {
          U.F4(
            e[t],
            "[AiAudioGenerateStatusReporter] ".concat(
              t,
              " is required when status is success",
            ),
          );
        }
      });
    }
  }
  _validateFailFields(e) {
    if (e.status === "fail") {
      ["error_code"].forEach((t) => {
        if (e[t] !== undefined) {
          U.F4(
            e[t],
            "[AiAudioGenerateStatusReporter] ".concat(
              t,
              " is required when status is fail",
            ),
          );
        }
      });
    }
  }
  _validateConditionalFields(e) {
    if (this._isTextReadingMode) {
      U.F4(
        e.is_voice_clone,
        "[AiAudioGenerateStatusReporter] is_voice_clone is required",
      );
      if (e.is_voice_clone === 0) {
        U.F4(
          e.voice_key,
          "[AiAudioGenerateStatusReporter] voice_key is required when is_voice_clone is 0",
        );
        U.F4(
          e.voice_id,
          "[AiAudioGenerateStatusReporter] voice_id is required when is_voice_clone is 0",
        );
      }
    }
  }
  _setErrorParams(e) {
    const { errorCode, recordStatus } = e.statusModel;
    if (recordStatus === ec.DMLGenRecordStatus.Failed) {
      this._params.errorCode = errorCode ? "".concat(errorCode) : undefined;
    }
  }
  constructor(e, t, r) {
    super({}, t);
    this._containerService = t;
    this._dreaminaCommercialFeatureContainerService = r;
    this._isUnifiedEditMode = false;
    this._isTextReadingMode = false;
  }
}
ex = P.Cg(
  [
    P.Qj(1, j._),
    P.Qj(2, l.X),
    P.Sn("design:type", Function),
    P.Sn("design:paramtypes", [
      typeof ContentGeneratorAudioTask === "undefined"
        ? Object
        : ContentGeneratorAudioTask,
      j._ === undefined ? Object : j._,
      l.X === undefined ? Object : l.X,
    ]),
  ],
  ex,
);
class eq extends eM.v {
  constructor(...e) {
    super(...e);
    this.eventName = "ai_markdown_generate_status";
  }
}
class ej extends eM.o {
  get params() {
    return this._params;
  }
  setParamsByAIGCDocumentData(e) {
    let t;
    let r;
    let i;
    let s;
    let a;
    let n;
    let o;
    let d;
    let c;
    let u;
    let l;
    let _;
    let h;
    let m;
    let v;
    let p;
    let g;
    let f;
    const { agenticMetricsExtra } = e;
    const S = (t = e.agenticMetricsExtra) != null ? t : {};
    const C = (r = (i = S.prompt) != null ? i : e.prompt) != null ? r : "";
    this._params.actionType = (
      agenticMetricsExtra == null ? undefined : agenticMetricsExtra.isRegenerate
    )
      ? "regenerate"
      : "generate";
    this._params.generateCnt = 1;
    this._params.generateId =
      (s =
        (a = (n = e.idModel.generateId) != null ? n : e.idModel.submitId) !=
        null
          ? a
          : e.uniqueKey) != null
        ? s
        : "";
    this._params.imagePromptCnt =
      (o =
        agenticMetricsExtra == null
          ? undefined
          : agenticMetricsExtra.referenceCnt) != null
        ? o
        : 0;
    this._params.isAddImage =
      (d =
        agenticMetricsExtra == null
          ? undefined
          : agenticMetricsExtra.isAddImage) != null
        ? d
        : 0;
    this._params.isAgentMode = 1;
    this._params.prompt = C;
    this._params.promptCnt = "".concat(C.length);
    this._params.enterFrom = "click";
    this._params.submitId = (c = e.idModel.submitId) != null ? c : "";
    this._params.historyId = e.idModel.recordId;
    this._params.skillName =
      (u =
        agenticMetricsExtra == null
          ? undefined
          : agenticMetricsExtra.skillName) != null
        ? u
        : "";
    this._params.skillId =
      (l =
        agenticMetricsExtra == null
          ? undefined
          : agenticMetricsExtra.skillId) != null
        ? l
        : "";
    this._params.skillSource =
      agenticMetricsExtra == null ? undefined : agenticMetricsExtra.skillSource;
    this._params.markdownId =
      (g = e.itemList) == null ||
      (p = g[0]) == null ||
      (v = p.commonAttr) == null
        ? undefined
        : v.id;
    this._params.promptSource =
      (_ =
        agenticMetricsExtra == null
          ? undefined
          : agenticMetricsExtra.promptSource) != null
        ? _
        : "custom";
    this._params.position = "generate_result";
    if ((h = this._params).conversationId == null) {
      h.conversationId =
        (m = S.conversationId) != null
          ? m
          : (f = e.agentOptData) == null
            ? undefined
            : f.conversationId;
    }
  }
  _getCollectorClass() {
    return eq;
  }
  _validateParams(e) {
    [
      "action_type",
      "enter_from",
      "generate_cnt",
      "generate_id",
      "image_prompt_cnt",
      "is_add_image",
      "is_agent_mode",
      "prompt",
      "prompt_cnt",
      "prompt_source",
      "submit_id",
      "skill_name",
      "skill_id",
      "markdown_id",
    ].forEach((t) => {
      U.F4(
        e[t],
        "[AiMarkdownGenerateStatusReporter] ".concat(t, " is required"),
      );
    });
  }
  constructor(e, t) {
    super(e, t);
    this._containerService = t;
  }
}
ej = P.Cg(
  [
    P.Qj(1, j._),
    P.Sn("design:type", Function),
    P.Sn("design:paramtypes", [
      typeof Partial === "undefined" ? Object : Partial,
      j._ === undefined ? Object : j._,
    ]),
  ],
  ej,
);
class eB extends eM.v {
  constructor(...e) {
    super(...e);
    this.eventName = "ai_music_generate_status";
  }
}
class eQ extends eM.o {
  get params() {
    return this._params;
  }
  setParamsByAIGCData(e, itemId) {
    let r;
    let i;
    let s;
    let a;
    const {
      idModel: { submitId, generateId, taskId },
      generateType,
      metricsExtra: { enterFrom, isRegenerate } = {},
    } = e;
    this._setErrorParams(e);
    const { lyric, lyricCnt } = eG.i.getMusicLyricParams(e, {
      itemId,
      allowAbilityLyricFallback: false,
    });
    this.setParams(
      ea._(es._({}, eG.i.getAgentContextParams(e)), {
        aiMusicLyric: lyric,
        aiMusicLyricCnt: lyricCnt,
      }),
    );
    eG.i.setMusicModelParams(this, e, this._containerService);
    eG.i.setMusicPromptParams(this, e);
    eG.i.setMusicDurationParams(this, e, itemId);
    this._params.enterFrom = enterFrom != null ? enterFrom : "click";
    if (!this._params.actionType) {
      this._params.actionType = isRegenerate ? "regenerate" : "generate";
    }
    this._params.submitId = submitId;
    this._params.generateType = generateType;
    this._params.genMode = "aigc_music";
    this._params.generateId = generateId || submitId || e.uniqueKey;
    this._params.musicId =
      itemId ||
      ((r = e.itemList[0]) == null ? undefined : r.id) ||
      generateId ||
      submitId ||
      e.uniqueKey;
    this._params.taskId = taskId || submitId || e.uniqueKey;
    this._params.status =
      e.statusModel.recordStatus === ec.DMLGenRecordStatus.Failed
        ? "fail"
        : "success";
    this._params.time = Date.now() - e.statusModel.timeModel.createdTime;
    this._params.audioDuration =
      (a = e.itemList[0]) == null ||
      (s = a.audio) == null ||
      (i = s.originAudio) == null
        ? undefined
        : i.durationMs;
  }
  _getCollectorClass() {
    return eB;
  }
  _validateParams(e) {
    this._validateRequiredFields(e);
    this._validateSuccessFields(e);
    this._validateFailFields(e);
  }
  _validateRequiredFields(e) {
    [
      "enter_from",
      "is_agent_mode",
      "action_type",
      "submit_id",
      "generate_type",
      "model_name",
      "prompt",
      "prompt_cnt",
      "prompt_source",
      "ai_music_lyric",
      "ai_music_lyric_cnt",
      "gen_mode",
      "generate_id",
      "music_id",
      "task_id",
      "status",
      "time",
    ].forEach((t) => {
      U.F4(e[t], "[AiMusicGenerateStatusReporter] ".concat(t, " is required"));
    });
  }
  _validateSuccessFields(e) {
    if (e.status === "success") {
      ["audio_duration"].forEach((t) => {
        U.F4(
          e[t],
          "[AiMusicGenerateStatusReporter] ".concat(
            t,
            " is required when status is success",
          ),
        );
      });
    }
  }
  _validateFailFields(e) {
    if (e.status === "fail") {
      ["error_code", "fail_code", "fail_reason"].forEach((t) => {
        U.F4(
          e[t],
          "[AiMusicGenerateStatusReporter] ".concat(
            t,
            " is required when status is fail",
          ),
        );
      });
    }
  }
  _setErrorParams(e) {
    let t;
    let r;
    const { errorCode, errorMsg, recordStatus } = e.statusModel;
    if (recordStatus === ec.DMLGenRecordStatus.Failed) {
      this._params.errorCode = errorCode ? "".concat(errorCode) : undefined;
      this._params.failCode = this._params.errorCode;
      this._params.failReason =
        (t =
          errorMsg != null
            ? errorMsg
            : errorCode
              ? (r = eO.G[errorCode]) == null
                ? undefined
                : r.defaultText
              : undefined) != null
          ? t
          : this._params.failCode;
    }
  }
  constructor(e) {
    super({}, e);
    this._containerService = e;
  }
}
eQ = P.Cg(
  [
    P.Qj(0, j._),
    P.Sn("design:type", Function),
    P.Sn("design:paramtypes", [j._ === undefined ? Object : j._]),
  ],
  eQ,
);
class ti extends eM.v {
  constructor(...e) {
    super(...e);
    this.eventName = "ai_video_generate_status";
  }
}
class ts extends eM.o {
  get params() {
    return this._params;
  }
  _getCollectorClass() {
    return ti;
  }
  _validateParams(e) {
    this._validateRequiredFields(e);
    this._validateLipSyncFields(e);
    eW.B(e, "AiVideoGenerateStatusReporter");
  }
  _validateRequiredFields(e) {
    [
      "is_freetrial",
      "vip_right_trial_type",
      "credits_need",
      "credits_now",
      "generate_type",
      "gen_mode",
      "submit_id",
      "status",
      "time",
      "action_type",
      "prompt_cnt",
      "prompt_type",
      "image_prompt_cnt",
      "enter_from",
      "aspect_ratio",
      "origin_video_duration",
      "is_default_seed",
      "is_first_relaxed_generate",
      "is_from_preview",
      "is_quick_preview",
      "is_relaxed_generate",
      "magic_box_cnt",
    ].forEach((t) => {
      U.F4(e[t], "[AiVideoGenerateStatusReporter] ".concat(t, " is required"));
    });
    this._validateSuccessFields(e);
  }
  _validateSuccessFields(e) {
    if (e.status === "success") {
      ["task_id", "video_duration"].forEach((t) => {
        U.F4(
          e[t],
          "[AiVideoGenerateStatusReporter] ".concat(
            t,
            " is required when status is success",
          ),
        );
      });
    }
  }
  _validateLipSyncFields(e) {
    if (e.lip_sync_type) {
      [
        "lip_sync_mode",
        "voice_category_id",
        "voice_category_key",
        "voice_id",
        "voice_key",
      ].forEach((t) => {
        U.F4(
          e[t],
          "[AiVideoGenerateStatusReporter] ".concat(
            t,
            " is required when lip_sync_type exists",
          ),
        );
      });
      if (e.lip_sync_type === "text_to_speech") {
        ["script", "audio_speed"].forEach((t) => {
          U.F4(
            e[t],
            "[AiVideoGenerateStatusReporter] ".concat(
              t,
              " is required when lip_sync_type is text_to_speech",
            ),
          );
        });
      }
    }
  }
  _setParamsByTask(e) {
    eJ.n(this, this._dreaminaCommercialFeatureContainerService, e.sceneOptions);
    let t;
    let r;
    let i;
    let s;
    let a;
    let n;
    let o;
    let d;
    const e_model = e.model;
    eK.U(this, e_model);
    e9.W(this, e_model);
    e5.h(this, e_model);
    e6.j(this, e_model);
    e1.y(this, e_model);
    e0.Y(this, e_model);
    tr.J(this, e_model);
    ez.L(this, e_model);
    e3.k(this, e_model);
    e$.B(this, e_model);
    e2.X(this, e_model);
    e8.C(this, e_model);
    eY.y(this, e_model);
    eX.k(this, e_model);
    e4.iU(this, e_model);
    te.v(this, e_model.originalInput);
    tt.o(this, e_model);
    e7.S(this, e_model);
    eH.a(this, e_model.taskExtra);
    this._setErrorParams(e_model);
    this._setResolutionFrameRateParams(e_model);
    this._params.generateType = e_model.generateType;
    this._params.submitId = e_model.idModel.submitId;
    this._params.submitGroupId = e_model.taskExtra.submitGroupId;
    this._params.taskId = e_model.idModel.taskId;
    this._params.originItemId = e_model.taskExtra.originId;
    this._params.lastSubmitId = e_model.taskExtra.previewSubmitId;
    this._params.localItemId =
      (s = e_model.itemList[0]) == null ? undefined : s.id;
    this._params.actionType = e_model.taskExtra.isRegenerate
      ? "regenerate"
      : "generate";
    this._params.seed = (
      (a = e_model.originalInput) == null ? undefined : a.seed
    )
      ? "".concat(e_model.originalInput.seed)
      : undefined;
    this._params.isDefaultSeed = +!!e_model.taskExtra.isDefaultSeed;
    const u =
      (n = e_model.originalInput) == null ? undefined : n.videoGenInputs[0];
    this._params.originVideoDuration =
      (t =
        (r = u == null ? undefined : u.durationMs) != null
          ? r
          : (o = e_model.video) == null
            ? undefined
            : o.durationMs) != null
        ? t
        : e_model.videoDuration * O.K;
    this._params.videoDuration = e_model.videoDuration;
    this._params.modelResolution = eU.Xd(e_model);
    this._params.videoId = e_model.idModel.recordId;
    this._params.status = this._resolveStatus(e_model);
    this._params.time = Date.now() - e_model.statusModel.timeModel.createdTime;
    this._params.enterFrom =
      (i = e_model.taskExtra.enterFrom) != null ? i : "click";
    this.setParams(eZ.X(e_model));
    this._params.projectId = e_model.taskExtra.projectId;
    this._params.replyMessageId = e_model.taskExtra.replyMessageId;
    this._params.isAgentMode = +!!eV.F(e_model);
    this._params.workspaceId = e_model.idModel.workspaceId;
    if (e_model.agenticMetricsExtra) {
      this._params.userMessageId = e_model.agenticMetricsExtra.userMessageId;
      this._params.prompt = e_model.agenticMetricsExtra.prompt;
      this._params.isAddImage = e_model.agenticMetricsExtra.isAddImage;
      this._params.quoteTurnId = e_model.agenticMetricsExtra.quoteTurnId;
      this._params.conversationId = e_model.agenticMetricsExtra.conversationId;
      this._params.skillId = e_model.agenticMetricsExtra.skillId;
      this._params.skillSource = e_model.agenticMetricsExtra.skillSource;
      this._params.originalSkillId =
        e_model.agenticMetricsExtra.originalSkillId;
      this._params.projectId = e_model.agenticMetricsExtra.projectId;
      this._params.enterFrom =
        (d = e_model.agenticMetricsExtra.enterFrom) != null ? d : "click";
      this._params.showcaseId = e_model.agenticMetricsExtra.showcaseId;
      eF.o(this, e_model.agenticMetricsExtra);
    }
    eL.H(this, e_model);
    this._fillCloudRenderVideoDefaults(e_model);
  }
  _fillCloudRenderVideoDefaults(e) {
    let t;
    let r;
    let i;
    let s;
    let a;
    let n;
    let o;
    let d;
    let c;
    let u;
    let l;
    let _;
    let h;
    let m;
    let v;
    let p;
    let g;
    if (e.generateType === eh.ce.CloudRenderVideo) {
      this._params.isFreetrial = (t = this._params.isFreetrial) != null ? t : 0;
      this._params.vipRightTrialType =
        (r = this._params.vipRightTrialType) != null ? r : "non_trial";
      this._params.creditsNeed = (i = this._params.creditsNeed) != null ? i : 0;
      this._params.creditsNow = (s = this._params.creditsNow) != null ? s : 0;
      this._params.isDefaultSeed =
        (a = this._params.isDefaultSeed) != null ? a : 0;
      this._params.isFirstRelaxedGenerate =
        (n = this._params.isFirstRelaxedGenerate) != null ? n : 0;
      this._params.isFromPreview =
        (o = this._params.isFromPreview) != null ? o : 0;
      this._params.isQuickPreview =
        (d = this._params.isQuickPreview) != null ? d : 0;
      this._params.isRelaxedGenerate =
        (c = this._params.isRelaxedGenerate) != null ? c : 0;
      this._params.magicBoxCnt = (u = this._params.magicBoxCnt) != null ? u : 0;
      this._params.promptCnt = (l = this._params.promptCnt) != null ? l : 0;
      this._params.imagePromptCnt =
        (_ = this._params.imagePromptCnt) != null ? _ : 0;
      this._params.promptType =
        (h = this._params.promptType) != null ? h : "original_prompt";
      this._params.originVideoDuration =
        (m = this._params.originVideoDuration) != null
          ? m
          : e.videoDuration * O.K;
      this._params.genMode = (v = this._params.genMode) != null ? v : "t2v";
      this._params.taskId =
        this._params.taskId || e.idModel.taskId || e.idModel.submitId;
      this._params.videoDuration =
        (p = (g = this._params.videoDuration) != null ? g : e.videoDuration) !=
        null
          ? p
          : 0;
    }
  }
  _setResolutionFrameRateParams(e) {
    let t;
    const r = (t = e.originalInput) == null ? undefined : t.videoGenInputs[0];
    if (r == null ? undefined : r.v2vOpt) {
      const { v2vOpt } = r;
      const { insertFrame } = v2vOpt;
      if (insertFrame) {
        this._params.originalFrameRate = "".concat(insertFrame.originFps);
        this._params.newFrameRate = "".concat(insertFrame.targetFps);
      }
      const { superResolution } = v2vOpt;
      if (superResolution) {
        this._params.newResolution = ""
          .concat(superResolution.targetWidth, " * ")
          .concat(superResolution.targetHeight);
        const n =
          superResolution.originHeight > 0
            ? superResolution.originHeight
            : superResolution.targetWidth > 0
              ? Math.floor(
                  (superResolution.originWidth * superResolution.targetHeight) /
                    superResolution.targetWidth,
                )
              : 0;
        this._params.originalResolution = ""
          .concat(superResolution.originWidth, " * ")
          .concat(n);
        this._params.hdUpscaleTo = superResolution.resolution;
      }
    }
  }
  _resolveStatus(e) {
    if (e.statusModel.recordStatus !== ec.DMLGenRecordStatus.Failed) {
      return "success";
    }
    if (e.statusModel.errorCode === eg.Q.ErrTaskCancelled) {
      return "cancel";
    }
    return "fail";
  }
  _setErrorParams(e) {
    let t;
    const { errorCode, statusCode, recordStatus, logid } = e.statusModel;
    if (recordStatus === ec.DMLGenRecordStatus.Failed) {
      this._params.taskErrorCode = statusCode
        ? "".concat(statusCode)
        : undefined;
      this._params.errorCode = errorCode ? "".concat(errorCode) : undefined;
      this._params.failCode = errorCode ? "".concat(errorCode) : undefined;
      let n = e.statusModel.errorMsg;
      if (!n && errorCode) {
        n = (t = eO.G[errorCode]) == null ? undefined : t.defaultText;
      }
      this._params.failReason = n != null ? n : this._params.failCode;
      this._params.logid = logid;
    }
  }
  constructor(e, t, r) {
    var i = eN.y();
    super(
      i
        ? {
            teamId: i,
          }
        : {},
      t,
    );
    this._containerService = t;
    this._dreaminaCommercialFeatureContainerService = r;
    this._setParamsByTask(e);
  }
}
ts = P.Cg(
  [
    P.Qj(1, j._),
    P.Qj(2, l.X),
    P.Sn("design:type", Function),
    P.Sn("design:paramtypes", [
      typeof ContentGeneratorVideoTask === "undefined"
        ? Object
        : ContentGeneratorVideoTask,
      j._ === undefined ? Object : j._,
      l.X === undefined ? Object : l.X,
    ]),
  ],
  ts,
);
class ta extends eM.v {
  constructor(...e) {
    super(...e);
    this.eventName = "ai_video_generate_status_more";
  }
}
class tn extends eM.o {
  get params() {
    return this._params;
  }
  setParamsByAIGCData(e) {
    let t;
    let r;
    this._params.submitId = e.idModel.submitId;
    this._params.submitGroupId = e.taskExtra.submitGroupId;
    this._params.generateId = e.idModel.generateId;
    this._params.skillId =
      (t = e.agenticMetricsExtra) == null ? undefined : t.skillId;
    if (this.params.status === "success") {
      this._params.videoId = (r = e.video) == null ? undefined : r.videoId;
    }
    this._params.taskId = e.idModel.taskId;
  }
  _getCollectorClass() {
    return ta;
  }
  _validateParams(e) {
    this._validateRequiredFields(e);
    eW.B(e, "AiVideoGenerateStatusMoreReporter");
  }
  _validateRequiredFields(e) {
    ["submit_id", "status"].forEach((t) => {
      U.F4(
        e[t],
        "[AiVideoGenerateStatusMoreReporter] ".concat(t, " is required"),
      );
    });
  }
}
class tI extends eM.v {
  constructor(...e) {
    super(...e);
    this.eventName = "generate_status";
  }
}
class tS extends eM.o {
  get params() {
    return this._params;
  }
  setParamsByAIGCData(e, t) {
    this._params.submitId = e.idModel.submitId;
    this._params.lastPictureId =
      (p = e.refInfo) == null || (v = p.refRecordInfo) == null
        ? undefined
        : v.refItemId;
    this._params.originItemId =
      (g = e.metricsExtra) == null ? undefined : g.originItemId;
    this._params.lastGenerateId =
      (f = e.metricsExtra) == null ? undefined : f.lastGenerateId;
    this._params.generateLogId =
      (I = e.metricsExtra) == null ? undefined : I.generateLogId;
    this._params.generateSuggestion =
      (S = e.metricsExtra) == null ? undefined : S.generateSuggestion;
    this._params.page = (C = e.metricsExtra) == null ? undefined : C.reportPage;
    this._params.definition = e.text2imageParams.largeImageInfo.resolutionType;
    let r;
    let i;
    let s;
    let a;
    let n;
    let o;
    let d;
    let c;
    let u;
    let l;
    const _ = e.itemList.find((e) => e.id === t);
    if (_) {
      this._params.generateId =
        (N = _.aigcImageParams) == null ? undefined : N.generateId;
      this._params.requestId =
        (V = _.aigcImageParams) == null ? undefined : V.requestId;
      this._params.pictureId = _.id;
      var h;
      var m;
      var v;
      var p;
      var g;
      var f;
      var I;
      var S;
      var C;
      var k;
      var T;
      var y;
      var A;
      var b;
      var M;
      var E;
      var F;
      var w;
      var R;
      var P;
      var G;
      var D;
      var x;
      var q;
      var j;
      var O;
      var B;
      var Q;
      var N;
      var V;
      let U;
      let L;
      const K =
        (L = _.image) == null || (U = L.largeImages) == null ? undefined : U[0];
      if (
        (K == null ? undefined : K.width) &&
        (K == null ? undefined : K.height)
      ) {
        this._params.peRatio = ""
          .concat(K == null ? undefined : K.width, ":")
          .concat(K == null ? undefined : K.height);
      }
    } else {
      this._params.generateId = e.idModel.generateId;
    }
    this._params.actionType = (
      (k = e.metricsExtra) == null ? undefined : k.isRegenerate
    )
      ? "regenerate"
      : "generate";
    eK.U(this, e);
    tp.Z(this, e);
    tv.C(this, e);
    tl.J(this, e.blendImageInfo);
    th.j(this, e);
    const H =
      _ != null
        ? _
        : (T = e.failedItemList) == null
          ? undefined
          : T.find((e) => e.id === t);
    this._crowdTestModelReqKey = tc.c(
      H == null || (y = H.commonAttr) == null ? undefined : y.webExtra,
    );
    tu.B(this, e.blendImageInfo);
    eH.a(this, e.metricsExtra);
    tm.L(this, e.proHDParams);
    tg.x(this, e.unifiedEditInput);
    this._params.enterFrom =
      ((A = e.metricsExtra) == null ? undefined : A.enterFrom) || "click";
    this._params.replyMessageId =
      (b = e.metricsExtra) == null ? undefined : b.replyMessageId;
    this._params.steps = e.text2imageParams.sampleStrength;
    this._params.seed = e.text2imageParams.seed
      ? "".concat(e.text2imageParams.seed)
      : undefined;
    this._params.usePreLlm = +(
      _ != null &&
      (E = _.aigcImageParams) != null &&
      (M = E.text2imageParams) != null &&
      !!M.usePe
    );
    this._params.scheduleConf =
      _ == null ||
      (w = _.aigcImageParams) == null ||
      (F = w.text2imageParams) == null
        ? undefined
        : F.scheduleConf;
    this._params.generateCnt =
      (h = (R = e.metricsExtra) == null ? undefined : R.generateCount) != null
        ? h
        : 1;
    this._params.replyMessageId =
      (P = e.metricsExtra) == null ? undefined : P.replyMessageId;
    if (
      ((G = e.metricsExtra) == null ? undefined : G.isBoxSelect) !== undefined
    ) {
      this._params.isBoxSelect = +!!e.metricsExtra.isBoxSelect;
    }
    if (((D = e.metricsExtra) == null ? undefined : D.isCutout) !== undefined) {
      this._params.isCutout = +!!e.metricsExtra.isCutout;
    }
    this._params.textRowsCnt =
      (x = e.metricsExtra) == null ? undefined : x.textRowsCnt;
    this._params.modifiedTextRowsCnt =
      (q = e.metricsExtra) == null ? undefined : q.modifiedTextRowsCnt;
    this._params.markTagCnt =
      (j = e.metricsExtra) == null ? undefined : j.markTagCnt;
    this._params.markBoxCnt =
      (O = e.metricsExtra) == null ? undefined : O.markBoxCnt;
    this._params.imageTextCnt =
      (B = e.metricsExtra) == null ? undefined : B.imageTextCnt;
    this._params.imageArrowCnt =
      (Q = e.metricsExtra) == null ? undefined : Q.imageArrowCnt;
    this._params.isAgentMode = +!!to.z(e);
    this._params.peTargetNum = e.totalImageCount;
    this._params.peIsGroup = +(e.imageType === td.o.Group_Image);
    this._params.historyId = e.idModel.recordId;
    this._params.workspaceId = e.idModel.workspaceId;
    if (e.agenticMetricsExtra) {
      this._params.userMessageId = e.agenticMetricsExtra.userMessageId;
      this._params.prompt = e.agenticMetricsExtra.prompt;
      this._params.isAddImage = e.agenticMetricsExtra.isAddImage;
      this._params.quoteTurnId = e.agenticMetricsExtra.quoteTurnId;
      this._params.conversationId =
        (i = e.agenticMetricsExtra) == null ? undefined : i.conversationId;
      this._params.position =
        (s = e.agenticMetricsExtra) == null ? undefined : s.position;
      this._params.enterFrom =
        (r = (a = e.agenticMetricsExtra) == null ? undefined : a.enterFrom) !=
        null
          ? r
          : "click";
      this._params.showcaseId =
        (n = e.agenticMetricsExtra) == null ? undefined : n.showcaseId;
      this._params.lastGenerateId =
        (o = e.agenticMetricsExtra) == null ? undefined : o.lastGenerateId;
      this._params.lastPictureId =
        (d = e.agenticMetricsExtra) == null ? undefined : d.lastPictureId;
      this._params.isCreativeMode = +(
        (c = e.agenticMetricsExtra) != null && !!c.creativeModelEnabled
      );
      this._params.generateLogId =
        (u = e.agenticMetricsExtra) == null ? undefined : u.generateLogId;
      this._params.generateSuggestion =
        (l = e.agenticMetricsExtra) == null ? undefined : l.generateSuggestion;
      this._params.skillId = e.agenticMetricsExtra.skillId;
      this._params.skillSource = e.agenticMetricsExtra.skillSource;
      this._params.originalSkillId = e.agenticMetricsExtra.originalSkillId;
      eF.o(this, e.agenticMetricsExtra);
    }
    eL.H(this, e);
    this._setABTagsParams(_);
    this._setIsDescribeParams(_);
    this._params.status =
      e.statusModel.recordStatus === ec.DMLGenRecordStatus.Failed
        ? "fail"
        : "success";
    this._params.timeCost = Date.now() - e.statusModel.timeModel.createdTime;
    this._setErrorParams(e);
    this._params.referenceCnt =
      (m = this._params.imagePromptCnt) != null ? m : 0;
  }
  setParamsByFailItem(e) {
    let t;
    let r;
    let i;
    this._params.status = "fail";
    this._params.errorCode = (
      (t = e.genResultData) == null ? undefined : t.resultCode
    )
      ? "".concat((r = e.genResultData) == null ? undefined : r.resultCode)
      : undefined;
    this._params.failReason =
      (i = e.genResultData) == null ? undefined : i.resultMsg;
  }
  _getCollectorClass() {
    return tI;
  }
  _reportBusinessEvent(e) {
    super._reportBusinessEvent(
      this._crowdTestModelReqKey
        ? ea._(es._({}, e), {
            model_key: this._crowdTestModelReqKey,
          })
        : e,
      {
        syncServer: true,
      },
    );
  }
  _validateParams(e) {
    this._validateRequiredFields(e);
    eW.B(e, "GenerateStatusReporter");
  }
  _validateRequiredFields(e) {
    [
      "generate_app_name",
      "generate_type",
      "submit_id",
      "status",
      "time_cost",
      "action_type",
      "prompt_cnt",
      "image_prompt_cnt",
      "enter_from",
      "ratio",
      "is_time_limited_free",
      "credits_need",
      "credits_now",
      "generate_cnt",
      "is_describe",
    ].forEach((t) => {
      U.F4(e[t], "[GenerateStatusReporter] ".concat(t, " is required"));
    });
  }
  _setParamsByTask(e) {
    this._params.generateType = e.initialGenerateType;
    t_.n(this, e.sceneOptions, this._dreaminaCommercialFeatureContainerService);
  }
  _setIsDescribeParams(e) {
    if (!(e == null ? undefined : e.aigcImageParams)) {
      this._params.isDescribe = 0;
      return;
    }
    const { generateType, superResolutionParams, text2imageParams } =
      e.aigcImageParams;
    if (generateType === eh.ce.SuperResolution) {
      this._params.isDescribe = +(
        superResolutionParams != null &&
        !!superResolutionParams.isDescribePrompt
      );
    } else if ([eh.ce.Text2Image, eh.ce.Blend].includes(generateType)) {
      this._params.isDescribe = +(
        text2imageParams != null && !!text2imageParams.isDescribePrompt
      );
    } else {
      this._params.isDescribe = 0;
    }
  }
  _setABTagsParams(e) {
    const t = e == null ? undefined : e.commonAttr.webExtra;
    if (t) {
      try {
        const r = JSON.parse(t);
        this._params.abTags = r.mweb_abtags.join(",");
      } catch (e) {
        this._params.abTags = "";
      }
    } else {
      this._params.abTags = "";
    }
  }
  _setErrorParams(e) {
    let t;
    const { errorCode, recordStatus, errorMsg } = e.statusModel;
    if (recordStatus === ec.DMLGenRecordStatus.Failed) {
      this._params.errorCode = errorCode ? "".concat(errorCode) : undefined;
      if (errorCode) {
        this._params.failReason =
          (t = tf.I[errorCode]) != null ? t : "".concat(errorCode);
      }
      this._params.errMsg = errorMsg;
      this._params.isNewErrCode = +!!e.isDraftGen;
    }
  }
  constructor(e, t, r) {
    var i = eN.y();
    super(
      i
        ? {
            teamId: i,
          }
        : {},
      t,
    );
    this._containerService = t;
    this._dreaminaCommercialFeatureContainerService = r;
    this._setParamsByTask(e);
  }
}
tS = P.Cg(
  [
    P.Qj(1, j._),
    P.Qj(2, l.X),
    P.Sn("design:type", Function),
    P.Sn("design:paramtypes", [
      typeof ContentGeneratorImageTask === "undefined"
        ? Object
        : ContentGeneratorImageTask,
      j._ === undefined ? Object : j._,
      l.X === undefined ? Object : l.X,
    ]),
  ],
  tS,
);
class tC extends eM.v {
  constructor(...e) {
    super(...e);
    this.eventName = "generate_status_more";
  }
}
class tk extends eM.o {
  get params() {
    return this._params;
  }
  setParamsByAIGCData(e, t) {
    this._params.submitId = e.idModel.submitId;
    let r;
    const i = e.itemList.find((e) => e.id === t);
    if (i) {
      this._params.generateId =
        (r = i.aigcImageParams) == null ? undefined : r.generateId;
      this._params.pictureId = i.id;
    } else {
      this._params.generateId = e.idModel.generateId;
    }
  }
  _getCollectorClass() {
    return tC;
  }
  _validateParams(e) {
    this._validateRequiredFields(e);
    eW.B(e, "GenerateStatusMoreReporter");
  }
  _validateRequiredFields(e) {
    ["submit_id", "status"].forEach((t) => {
      U.F4(e[t], "[GenerateStatusMoreReporter] ".concat(t, " is required"));
    });
  }
}
class ty extends eM.v {
  constructor(...e) {
    super(...e);
    this.eventName = "perf_ai_agent_conversation";
  }
}
class tA extends eM.o {
  copyParamsFromAgentMessageReply(e) {
    const e_params = e.params;
    Object.assign(this._params, e_params);
  }
  recordFromAgentTaskDataDiff(e, t) {
    const { replyMessages } = e;
    const { replyMessages: replyMessages_1 } = t;
    const [s] = replyMessages;
    const [a] = replyMessages_1;
    if (!s && a) {
      this._recordFirstMessageReceivedTime();
    }
  }
  recordFirstArtifactFromReplyMessagesDiff(e, t) {
    if (this._firstArtifactStartTime === undefined) {
      const r = eA.K(t);
      const [i] = eA.K(e);
      const [s] = r;
      if (
        !(i == null ? undefined : i.submitId) &&
        (s == null ? undefined : s.submitId)
      ) {
        this._recordFirstArtifactStartTime(s.submitId);
      }
    }
  }
  recordConversationConfig(e) {
    this._params.agentScene = e == null ? undefined : e.scene;
  }
  recordUserMessageSentTime() {
    this._userMessageSentTime = Date.now();
  }
  _recordFirstMessageReceivedTime() {
    if (!this._firstMessageReceivedTime && this._userMessageSentTime) {
      this._firstMessageReceivedTime = Date.now();
      this._params.perfFirstMessageCost =
        this._firstMessageReceivedTime - this._userMessageSentTime;
    }
  }
  _recordFirstArtifactStartTime(e) {
    if (!this._firstArtifactStartTime && this._userMessageSentTime) {
      this._firstArtifactStartTime = Date.now();
      this._firstArtifactSubmitId = e;
      this._params.perfFirstArtifactStartCost =
        this._firstArtifactStartTime - this._userMessageSentTime;
    }
  }
  recordCurrentArtifactFinishTime(e, t) {
    this._lastArtifactFinishTime = Date.now();
    this._recordFirstArtifactFinishTime(e, this._lastArtifactFinishTime);
    if (!t.hasRunningMediaTask && this._taskFinishedTime) {
      this._allMediaTasksFinishBarrier.open();
    }
  }
  recordTaskFinishedTime(e) {
    return n
      ._(function* () {
        const e_model = e.model;
        this._taskFinishedTime = Date.now();
        if (e.hasRunningMediaTask) {
          yield this._allMediaTasksFinishBarrier.wait();
        }
        if (this._userMessageSentTime && this._taskFinishedTime) {
          this._params.perfTotalCost =
            this._taskFinishedTime - this._userMessageSentTime;
        }
        if (this._lastArtifactFinishTime && this._userMessageSentTime) {
          this._params.perfLastArtifactFinishCost =
            this._lastArtifactFinishTime - this._userMessageSentTime;
        }
        const { submitIdDataMap } = e_model;
        const i = this._firstArtifactSubmitId
          ? submitIdDataMap[this._firstArtifactSubmitId]
          : undefined;
        if (i) {
          if (ev.A(i)) {
            this._params.firstArtifactType = "image";
          }
          if (ep.g(i)) {
            this._params.firstArtifactType = "video";
          }
        }
        this._params.imageArtifactCount = Object.values(submitIdDataMap).filter(
          ev.A,
        ).length;
        this._params.videoArtifactCount = Object.values(submitIdDataMap).filter(
          ep.g,
        ).length;
      })
      .call(this);
  }
  _recordFirstArtifactFinishTime(e, t) {
    if (
      this._firstArtifactSubmitId === e &&
      !this._firstArtifactFinishTime &&
      this._firstArtifactStartTime &&
      this._userMessageSentTime &&
      t
    ) {
      this._firstArtifactFinishTime = t;
      this._params.perfFirstArtifactFinishCost =
        this._firstArtifactFinishTime - this._userMessageSentTime;
    }
  }
  _getCollectorClass() {
    return ty;
  }
  _validateParams(e) {
    if (e.reply_status !== "streaming") {
      [].forEach((t) => {
        U.F4(
          e[t],
          "[PerfAiAgentConversationReporter] ".concat(t, " is required"),
        );
      });
    }
  }
  constructor(e, t) {
    super(e, t);
    this._allMediaTasksFinishBarrier = new tT.W();
  }
}
tA = P.Cg(
  [
    P.Qj(1, j._),
    P.Sn("design:type", Function),
    P.Sn("design:paramtypes", [
      typeof Partial === "undefined" ? Object : Partial,
      j._ === undefined ? Object : j._,
    ]),
  ],
  tA,
);
class tb extends eM.v {
  constructor(...e) {
    super(...e);
    this.eventName = "perf_ai_audio_generate";
  }
}
class tM extends eM.o {
  copyParamsFromAiAudioGenerateStatus(e) {
    const e_params = e.params;
    Object.assign(this._params, e_params);
    this._params.generateTypeStr = "".concat(e_params.generateType);
    if (this._params.status === "success") {
      this._params.errorCode = eg.Q.ErrSuccess.toString();
    }
  }
  recordClickGenerateTime() {
    this._clickGenerateTime = Date.now();
  }
  recordSubmitTime() {
    this._submitTime = Date.now();
    if (this._clickGenerateTime) {
      this._params.perfPreProcessCost =
        this._submitTime - this._clickGenerateTime;
    }
  }
  recordQueueFinishTime(e) {
    const { estimatedQueueCostTime } = e.statusModel.timeModel;
    this._params.perfEstimatedQueueCost = estimatedQueueCostTime;
    if (e.statusModel.queueInfo) {
      this._queueFinishTime = Date.now();
      if (this._submitTime) {
        this._params.perfQueueCostType = "actual";
        this._params.perfQueueCost = this._queueFinishTime - this._submitTime;
      }
      return;
    }
    this._params.perfQueueCostType = "estimated";
    this._params.perfQueueCost = estimatedQueueCostTime;
  }
  recordServerTime(e) {
    const { createdTime, finishedTime } = e.statusModel.timeModel;
    this._taskCreateTime = createdTime;
    this._taskFinishTime = finishedTime;
    if (this._taskCreateTime && this._taskFinishTime) {
      this._params.perfServerTotalCost =
        this._taskFinishTime - this._taskCreateTime;
    }
  }
  recordWebsocketFinishTime() {
    this._websocketFinishTime = Date.now();
    this._notificationType = "websocket_push";
    if (this._submitTime) {
      this._params.perfGenProcessCost =
        this._websocketFinishTime - this._submitTime;
    }
  }
  recordFetchFinishTime() {
    const e = Date.now();
    if (!this._notificationType) {
      this._recordPollingFinishTime();
    }
    if (
      this._notificationType === "websocket_push" &&
      this._websocketFinishTime
    ) {
      this._params.perfPostProcessCost = e - this._websocketFinishTime;
      if (this._taskFinishTime) {
        this._params.perfServerToWebsocketCost =
          this._websocketFinishTime - this._taskFinishTime;
      }
    } else if (this._notificationType === "polling" && this._taskFinishTime) {
      this._params.perfPostProcessCost = e - this._taskFinishTime;
    }
    if (this._clickGenerateTime) {
      this._params.perfTotalCost = e - this._clickGenerateTime;
    }
    if (
      this._params.perfTotalCost !== undefined &&
      this._params.perfGenProcessCost !== undefined
    ) {
      this._params.perfClientTotalCost =
        this._params.perfTotalCost - this._params.perfGenProcessCost;
    }
    if (this._notificationType) {
      this._params.notificationType = this._notificationType;
    }
  }
  _getCollectorClass() {
    return tb;
  }
  _validateParams(e) {
    this._validatePerformanceFields(e);
  }
  _validatePerformanceFields(e) {
    if (e.status === "success") {
      [
        "perf_pre_process_cost",
        "perf_server_total_cost",
        "perf_gen_process_cost",
        "perf_post_process_cost",
        "perf_total_cost",
        "perf_client_total_cost",
        "notification_type",
      ].forEach((t) => {
        U.F4(e[t], "[PerfAiAudioGenerateReporter] ".concat(t, " is required"));
      });
      if (e.notification_type === "websocket_push") {
        U.F4(
          e.perf_server_to_websocket_cost,
          "[PerfAiAudioGenerateReporter] perf_server_to_websocket_cost is required when notification_type is websocket_push",
        );
      }
    }
  }
  _recordPollingFinishTime() {
    this._notificationType = "polling";
    if (this._submitTime && this._taskFinishTime) {
      this._params.perfGenProcessCost = this._taskFinishTime - this._submitTime;
    }
  }
  constructor(e, t) {
    super(e, t);
  }
}
tM = P.Cg(
  [
    P.Qj(1, j._),
    P.Sn("design:type", Function),
    P.Sn("design:paramtypes", [
      typeof Partial === "undefined" ? Object : Partial,
      j._ === undefined ? Object : j._,
    ]),
  ],
  tM,
);
class tE extends eM.v {
  constructor(...e) {
    super(...e);
    this.eventName = "perf_ai_image_generate";
  }
}
class tF extends eM.o {
  copyParamsFromGenerateStatus(e) {
    const e_params = e.params;
    Object.assign(this._params, e_params);
    this._params.perfIsAddImage = this._params.isAddImage ? "1" : "0";
    this._params.perfIsAgentMode = this._params.isAgentMode ? "1" : "0";
    this._params.generateTypeStr = "".concat(e_params.generateType);
    if (this._params.status === "success") {
      this._params.errorCode = eg.Q.ErrSuccess.toString();
    }
  }
  recordClickGenerateTime() {
    this._clickGenerateTime = Date.now();
  }
  recordSubmitTime() {
    this._submitTime = Date.now();
    if (this._clickGenerateTime) {
      this._params.perfPreProcessCost =
        this._submitTime - this._clickGenerateTime;
    }
  }
  recordQueueFinishTime(e) {
    const { estimatedQueueCostTime } = e.statusModel.timeModel;
    this._params.perfEstimatedQueueCost = estimatedQueueCostTime;
    if (e.statusModel.queueInfo) {
      this._queueFinishTime = Date.now();
      if (this._submitTime) {
        this._params.perfQueueCostType = "actual";
        this._params.perfQueueCost = this._queueFinishTime - this._submitTime;
      }
      return;
    }
    this._params.perfQueueCostType = "estimated";
    this._params.perfQueueCost = estimatedQueueCostTime;
  }
  recordServerTime(e) {
    const { createdTime, finishedTime } = e.statusModel.timeModel;
    this._taskCreateTime = createdTime;
    this._taskFinishTime = finishedTime;
    if (this._taskCreateTime && this._taskFinishTime) {
      this._params.perfServerTotalCost =
        this._taskFinishTime - this._taskCreateTime;
    }
  }
  recordFailItemCount(e) {
    let t;
    let r;
    this._params.failItemCount =
      (t = (r = e.failedItemList) == null ? undefined : r.length) != null
        ? t
        : 0;
  }
  recordWebsocketFinishTime() {
    this._websocketFinishTime = Date.now();
    this._notificationType = "websocket_push";
    if (this._submitTime) {
      this._params.perfGenProcessCost =
        this._websocketFinishTime - this._submitTime;
    }
  }
  recordFetchFinishTime() {
    const e = Date.now();
    if (!this._notificationType) {
      this._recordPollingFinishTime();
    }
    if (
      this._notificationType === "websocket_push" &&
      this._websocketFinishTime
    ) {
      this._params.perfPostProcessCost = e - this._websocketFinishTime;
      if (this._taskFinishTime) {
        this._params.perfServerToWebsocketCost =
          this._websocketFinishTime - this._taskFinishTime;
      }
    } else if (this._notificationType === "polling" && this._taskFinishTime) {
      this._params.perfPostProcessCost = e - this._taskFinishTime;
    }
    if (this._clickGenerateTime) {
      this._params.perfTotalCost = e - this._clickGenerateTime;
    }
    if (
      this._params.perfTotalCost !== undefined &&
      this._params.perfGenProcessCost !== undefined
    ) {
      this._params.perfClientTotalCost =
        this._params.perfTotalCost - this._params.perfGenProcessCost;
    }
    if (this._notificationType) {
      this._params.notificationType = this._notificationType;
    }
  }
  _getCollectorClass() {
    return tE;
  }
  _validateParams(e) {
    this._validatePerformanceFields(e);
  }
  _validatePerformanceFields(e) {
    if (e.status === "success") {
      [
        "perf_pre_process_cost",
        "perf_server_total_cost",
        "perf_gen_process_cost",
        "perf_post_process_cost",
        "perf_total_cost",
        "perf_client_total_cost",
        "notification_type",
      ].forEach((t) => {
        U.F4(e[t], "[PerfAiImageGenerateReporter] ".concat(t, " is required"));
      });
      if (e.notification_type === "websocket_push") {
        U.F4(
          e.perf_server_to_websocket_cost,
          "[PerfAiImageGenerateReporter] perf_server_to_websocket_cost is required when notification_type is websocket_push",
        );
      }
    }
  }
  _recordPollingFinishTime() {
    this._notificationType = "polling";
    if (this._submitTime && this._taskFinishTime) {
      this._params.perfGenProcessCost = this._taskFinishTime - this._submitTime;
    }
  }
  constructor(e, t) {
    super(e, t);
  }
}
tF = P.Cg(
  [
    P.Qj(1, j._),
    P.Sn("design:type", Function),
    P.Sn("design:paramtypes", [
      typeof Partial === "undefined" ? Object : Partial,
      j._ === undefined ? Object : j._,
    ]),
  ],
  tF,
);
class tw extends eM.v {
  constructor(...e) {
    super(...e);
    this.eventName = "perf_ai_video_generate";
  }
}
class tR extends eM.o {
  copyParamsFromAiVideoGenerateStatus(e) {
    const e_params = e.params;
    Object.assign(this._params, e_params);
    this._params.perfIsAddImage = this._params.isAddImage ? "1" : "0";
    this._params.perfIsAgentMode = this._params.isAgentMode ? "1" : "0";
    this._params.generateTypeStr = "".concat(e_params.generateType);
    if (this._params.status === "success") {
      this._params.errorCode = eg.Q.ErrSuccess.toString();
      this._params.failCode = eg.Q.ErrSuccess.toString();
    }
  }
  recordClickGenerateTime() {
    this._clickGenerateTime = Date.now();
  }
  recordSubmitTime() {
    this._submitTime = Date.now();
    if (this._clickGenerateTime) {
      this._params.perfPreProcessCost =
        this._submitTime - this._clickGenerateTime;
    }
  }
  recordQueueFinishTime(e) {
    const { estimatedQueueCostTime } = e.statusModel.timeModel;
    this._params.perfEstimatedQueueCost = estimatedQueueCostTime;
    if (e.statusModel.queueInfo) {
      this._queueFinishTime = Date.now();
      if (this._submitTime) {
        this._params.perfQueueCostType = "actual";
        this._params.perfQueueCost = this._queueFinishTime - this._submitTime;
      }
      return;
    }
    this._params.perfQueueCostType = "estimated";
    this._params.perfQueueCost = estimatedQueueCostTime;
  }
  recordServerTime(e) {
    const { createdTime, finishedTime } = e.statusModel.timeModel;
    this._taskCreateTime = createdTime;
    this._taskFinishTime = finishedTime;
    if (this._taskCreateTime && this._taskFinishTime) {
      this._params.perfServerTotalCost =
        this._taskFinishTime - this._taskCreateTime;
    }
  }
  recordWebsocketFinishTime() {
    this._websocketFinishTime = Date.now();
    this._notificationType = "websocket_push";
    if (this._submitTime) {
      this._params.perfGenProcessCost =
        this._websocketFinishTime - this._submitTime;
    }
  }
  recordFetchFinishTime() {
    const e = Date.now();
    if (!this._notificationType) {
      this._recordPollingFinishTime();
    }
    if (
      this._notificationType === "websocket_push" &&
      this._websocketFinishTime
    ) {
      this._params.perfPostProcessCost = e - this._websocketFinishTime;
      if (this._taskFinishTime) {
        this._params.perfServerToWebsocketCost =
          this._websocketFinishTime - this._taskFinishTime;
      }
    } else if (this._notificationType === "polling" && this._taskFinishTime) {
      this._params.perfPostProcessCost = e - this._taskFinishTime;
    }
    if (this._clickGenerateTime) {
      this._params.perfTotalCost = e - this._clickGenerateTime;
    }
    if (
      this._params.perfTotalCost !== undefined &&
      this._params.perfGenProcessCost !== undefined
    ) {
      this._params.perfClientTotalCost =
        this._params.perfTotalCost - this._params.perfGenProcessCost;
    }
    if (this._notificationType) {
      this._params.notificationType = this._notificationType;
    }
  }
  _getCollectorClass() {
    return tw;
  }
  _validateParams(e) {
    this._validatePerformanceFields(e);
  }
  _validatePerformanceFields(e) {
    if (e.status === "success") {
      [
        "perf_pre_process_cost",
        "perf_server_total_cost",
        "perf_gen_process_cost",
        "perf_post_process_cost",
        "perf_total_cost",
        "perf_client_total_cost",
        "notification_type",
      ].forEach((t) => {
        U.F4(e[t], "[PerfAiVideoGenerateReporter] ".concat(t, " is required"));
      });
      if (e.notification_type === "websocket_push") {
        U.F4(
          e.perf_server_to_websocket_cost,
          "[PerfAiVideoGenerateReporter] perf_server_to_websocket_cost is required when notification_type is websocket_push",
        );
      }
    }
  }
  _recordPollingFinishTime() {
    this._notificationType = "polling";
    if (this._submitTime && this._taskFinishTime) {
      this._params.perfGenProcessCost = this._taskFinishTime - this._submitTime;
    }
  }
  constructor(e, t) {
    super(e, t);
  }
}
tR = P.Cg(
  [
    P.Qj(1, j._),
    P.Sn("design:type", Function),
    P.Sn("design:paramtypes", [
      typeof Partial === "undefined" ? Object : Partial,
      j._ === undefined ? Object : j._,
    ]),
  ],
  tR,
);
const tq = [
  eh.ce.SuperResolution,
  eh.ce.InPaintRemove,
  eh.ce.SuperDefinition,
  eh.ce.ViewControl,
];
class tj {
  createPerfVideoReporter(e) {
    if (e) {
      const t = this._containerService.createInstance(tR, {});
      this._setPerfVideoReporter(e, t);
      return t;
    }
  }
  getPerfVideoReporter(e) {
    return this._perfVideoReporterMap[e];
  }
  removePerfVideoReporter(e) {
    delete this._perfVideoReporterMap[e];
  }
  createPerfImageReporter(e) {
    if (e) {
      const t = this._containerService.createInstance(tF, {});
      this._setPerfImageReporter(e, t);
      return t;
    }
  }
  getPerfImageReporter(e) {
    return this._perfImageReporterMap[e];
  }
  removePerfImageReporter(e) {
    delete this._perfImageReporterMap[e];
  }
  createPerfAgentConversationReporter(e) {
    if (e) {
      const t = this._containerService.createInstance(tA, {});
      this._setPerfAgentConversationReporter(e, t);
      return t;
    }
  }
  getPerfAgentConversationReporter(e) {
    return this._perfAgentConversationReporterMap[e];
  }
  removePerfAgentConversationReporter(e) {
    delete this._perfAgentConversationReporterMap[e];
  }
  createPerfAudioReporter(e) {
    if (e) {
      const t = this._containerService.createInstance(tM, {});
      this._setPerfAudioReporter(e, t);
      return t;
    }
  }
  getPerfAudioReporter(e) {
    return this._perfAudioReporterMap[e];
  }
  removePerfAudioReporter(e) {
    delete this._perfAudioReporterMap[e];
  }
  reportImageGenerateStatusMore(e) {
    let t;
    let r;
    const e_model = e.model;
    const s = this._getAigcQueueStatus(e_model);
    if (s && s !== "cancel") {
      const a = "".concat(e_model.idModel.submitId, "-").concat(s);
      if (!this._generateStatusMap[a]) {
        if (s === "generating" && e_model.idModel.submitId) {
          const n = this.getPerfImageReporter(e_model.idModel.submitId);
          if (n != null) {
            n.recordQueueFinishTime(e_model);
          }
        }
        this._generateStatusMap[a] = true;
        for (const o of (t = e_model.failedItemList) != null ? t : []) {
          (r = this._containerService.createInstance(tk, {
            status: s,
          })).setParamsByAIGCData(e_model, o.id);
          r.report();
        }
        for (const d of e_model.itemList) {
          (r = this._containerService.createInstance(tk, {
            status: s,
          })).setParamsByAIGCData(e_model, d.id);
          r.report();
        }
        if (!r) {
          let e;
          for (
            let c = ((e = e_model.generateType), tq.includes(e)) ? 1 : 4, u = 0;
            u < c;
            u++
          ) {
            (r = this._containerService.createInstance(tk, {
              status: s,
            })).setParamsByAIGCData(e_model);
            r.report();
          }
        }
      }
    }
  }
  reportVideoGenerateStatusMore(e) {
    const e_model = e.model;
    const r = this._getAigcQueueStatus(e_model);
    if (r && r !== "cancel") {
      if (r === "generating" && e_model.idModel.submitId) {
        const i = this.getPerfVideoReporter(e_model.idModel.submitId);
        if (i != null) {
          i.recordQueueFinishTime(e_model);
        }
      }
      const s = "video-status-more-"
        .concat(e.model.idModel.submitId, "-")
        .concat(r);
      if (!this._generateStatusMap[s]) {
        this._generateStatusMap[s] = true;
        const a = this._containerService.createInstance(tn, {
          status: r,
        });
        a.setParamsByAIGCData(e.model);
        a.report();
      }
    }
  }
  reportImageGenerateStatus(e) {
    let t;
    let r;
    const e_model = e.model;
    for (const s of (t = e_model.failedItemList) != null ? t : []) {
      (r = this._containerService.createInstance(tS, e)).setParamsByAIGCData(
        e_model,
        s.id,
      );
      r.setParamsByFailItem(s);
      r.report();
    }
    for (const a of e_model.itemList) {
      (r = this._containerService.createInstance(tS, e)).setParamsByAIGCData(
        e_model,
        a.id,
      );
      r.report();
    }
    if (!r) {
      let t;
      for (
        let n = ((t = e_model.generateType), tq.includes(t)) ? 1 : 4, o = 0;
        o < n;
        o++
      ) {
        (r = this._containerService.createInstance(tS, e)).setParamsByAIGCData(
          e_model,
        );
        r.report();
      }
    }
    const { submitId } = e.model.idModel;
    if (submitId) {
      const c = this.getPerfImageReporter(submitId);
      if (c) {
        c.recordServerTime(e.model);
        c.recordFailItemCount(e.model);
        c.recordFetchFinishTime();
        if (r) {
          c.copyParamsFromGenerateStatus(r);
        }
        c.report("dev");
        this.removePerfImageReporter(submitId);
      }
    }
  }
  reportVideoGenerateStatus(e) {
    const e_model = e.model;
    const r = this._getAigcQueueStatus(e_model);
    if (!r) {
      return;
    }
    const i = "video-status-".concat(e_model.idModel.submitId, "-").concat(r);
    if (!this._generateStatusMap[i]) {
      this._generateStatusMap[i] = true;
      const s = this._containerService.createInstance(ts, e);
      s.report();
      const { submitId } = e_model.idModel;
      if (submitId) {
        const n = this.getPerfVideoReporter(submitId);
        if (n) {
          n.recordServerTime(e_model);
          n.recordFetchFinishTime();
          n.copyParamsFromAiVideoGenerateStatus(s);
          n.report("dev");
          this.removePerfVideoReporter(submitId);
        }
      }
    }
  }
  reportAudioGenerateStatus(e) {
    let t;
    let r;
    let i;
    let s;
    let a;
    let n;
    const e_model = e.model;
    if (em.n(e_model)) {
      for (const d of (t = e_model == null ? undefined : e_model.itemList) !=
      null
        ? t
        : []) {
        (n = this._containerService.createInstance(ex, e)).setParamsByAIGCData(
          e_model,
          d.id,
        );
        n.report();
      }
      if (!n) {
        (n = this._containerService.createInstance(ex, e)).setParamsByAIGCData(
          e_model,
        );
        n.report();
      }
      const { submitId } = e.model.idModel;
      if (submitId) {
        const u = this.getPerfAudioReporter(submitId);
        if (u) {
          if ((r = u.recordServerTime) != null) {
            r.call(u, e.model);
          }
          if ((i = u.recordFetchFinishTime) != null) {
            i.call(u);
          }
          if ((s = u.copyParamsFromAiAudioGenerateStatus) != null) {
            s.call(u, n);
          }
          if ((a = u.report) != null) {
            a.call(u, "dev");
          }
          this.removePerfAudioReporter(submitId);
        }
      }
    }
  }
  reportMusicGenerateStatus(e) {
    let t;
    let r;
    let i;
    let s;
    let a;
    let n;
    const e_model = e.model;
    if (em.n(e_model)) {
      for (const d of (t = e_model == null ? undefined : e_model.itemList) !=
      null
        ? t
        : []) {
        (n = this._containerService.createInstance(eQ)).setParamsByAIGCData(
          e_model,
          d.id,
        );
        n.report();
      }
      if (!n) {
        (n = this._containerService.createInstance(eQ)).setParamsByAIGCData(
          e_model,
        );
        n.report();
      }
      const { submitId } = e.model.idModel;
      if (submitId) {
        const u = this.getPerfAudioReporter(submitId);
        if (u) {
          if ((r = u.recordServerTime) != null) {
            r.call(u, e.model);
          }
          if ((i = u.recordFetchFinishTime) != null) {
            i.call(u);
          }
          if ((s = u.copyParamsFromAiAudioGenerateStatus) != null) {
            s.call(u, n);
          }
          if ((a = u.report) != null) {
            a.call(u, "dev");
          }
          this.removePerfAudioReporter(submitId);
        }
      }
    }
  }
  reportAgentMessageReply(e) {
    return n
      ._(function* () {
        const { model } = e;
        const r = this._containerService.createInstance(eP, {});
        r.setParamsByAIGCAgenticData(model);
        r.report();
        const { submitId } = model.idModel;
        if (submitId) {
          const s = this.getPerfAgentConversationReporter(submitId);
          if (s) {
            yield s.recordTaskFinishedTime(e);
            s.copyParamsFromAgentMessageReply(r);
            s.report("dev");
            this.removePerfAgentConversationReporter(submitId);
          }
        }
      })
      .call(this);
  }
  reportAgentMessageAction(e, action) {
    const { model } = e;
    const i = this._containerService.createInstance(eT.s, {
      action,
    });
    i.setParamsByAIGCAgenticData(model);
    i.report();
  }
  reportMarkdownGenerateStatus(e) {
    const t = this._containerService.createInstance(ej, {});
    t.setParamsByAIGCDocumentData(e);
    t.report();
  }
  updateGenerateCount(e) {
    if (!e) {
      return 1;
    }
    const t = this._getFormatTaskParamJsonStringify(e);
    if (!t) {
      return 1;
    }
    const r = this._generateCountMap[t];
    if (!r) {
      this._generateCountMap = {};
      this._generateCountMap[t] = 1;
      return 1;
    }
    const i = r + 1;
    this._generateCountMap[t] = i;
    return i;
  }
  reportContentGeneratorTaskSubmitStart(e) {
    const { submitId } = e.model.idModel;
    if (submitId) {
      const r = this._getAIGCTaskInputParamsStr(e);
      L.V.info(
        "[ContentGeneratorTaskReportService]",
        "content_generator_task_submit_start",
        JSON.stringify({
          submitId,
          type: this._getTaskType(e),
          generateType: e.model.generateType,
          historyId: e.model.idModel.recordId,
          generateId: e.model.idModel.generateId,
          inputParamsStr: r,
        }),
      );
    }
  }
  reportContentGeneratorTaskSubmitEnd(e) {
    const { submitId } = e.model.idModel;
    if (submitId) {
      const r = this._getAIGCTaskInputParamsStr(e);
      L.V.info(
        "[ContentGeneratorTaskReportService]",
        "content_generator_task_submit_end",
        JSON.stringify({
          submitId,
          type: this._getTaskType(e),
          generateType: e.model.generateType,
          historyId: e.model.idModel.recordId,
          generateId: e.model.idModel.generateId,
          inputParamsStr: r,
          statusModel: e.model.statusModel,
        }),
      );
    }
  }
  reportContentGeneratorTaskSubmitError(e, t) {
    const { submitId } = e.model.idModel;
    if (submitId) {
      this._reportService.reportDevError(
        "[ContentGeneratorTaskReportService]content_generator_task_submit_error",
        t,
        {
          submitId,
          type: this._getTaskType(e),
          generateType: "".concat(e.model.generateType),
          historyId: "".concat(e.model.idModel.recordId),
          generateId: "".concat(e.model.idModel.generateId),
          statusModel: JSON.stringify(e.model.statusModel),
        },
      );
    }
  }
  reportContentGeneratorTaskQueryStart(e) {
    const { submitId } = e.model.idModel;
    if (submitId) {
      const r = this._getAIGCTaskInputParamsStr(e);
      L.V.info(
        "[ContentGeneratorTaskReportService]",
        "content_generator_task_query_start",
        JSON.stringify({
          submitId,
          type: this._getTaskType(e),
          generateType: e.model.generateType,
          historyId: e.model.idModel.recordId,
          generateId: e.model.idModel.generateId,
          inputParamsStr: r,
          statusModel: e.model.statusModel,
        }),
      );
    }
  }
  reportContentGeneratorTaskQueryEnd(e) {
    const { submitId } = e.model.idModel;
    if (submitId) {
      L.V.info(
        "[ContentGeneratorTaskReportService]",
        "content_generator_task_query_end",
        JSON.stringify({
          submitId,
          type: this._getTaskType(e),
          generateType: "".concat(e.model.generateType),
          historyId: "".concat(e.model.idModel.recordId),
          generateId: "".concat(e.model.idModel.generateId),
          statusModel: e.model.statusModel,
        }),
      );
    }
  }
  reportContentGeneratorTaskQueryError(e, t) {
    const { submitId } = e.model.idModel;
    if (submitId) {
      this._reportService.reportDevError(
        "[ContentGeneratorTaskReportService]content_generator_task_query_error",
        t,
        {
          submitId,
          type: this._getTaskType(e),
          generateType: "".concat(e.model.generateType),
          historyId: "".concat(e.model.idModel.recordId),
          generateId: "".concat(e.model.idModel.generateId),
          statusModel: JSON.stringify(e.model.statusModel),
        },
      );
    }
  }
  listenAndReportSubmitTaskStatusBySubmitPromise(e, t) {
    e.catch((e) => {
      this.reportContentGeneratorTaskSubmitError(t, e);
    });
    e.then((e) => {
      if (!e.ok) {
        this.reportContentGeneratorTaskSubmitError(t, e.findJsError());
      }
      this.reportContentGeneratorTaskSubmitEnd(t);
    });
  }
  reportVipFunctionDetailsUse(e, t) {
    let r;
    let i;
    let s;
    let a;
    let n;
    let o;
    let d;
    let c = [];
    if (
      ev.A(e.model) &&
      ((i = e.model.metricsExtra) == null ? undefined : i.sceneOptions)
    ) {
      c = eu.j((o = e.model.metricsExtra) == null ? undefined : o.sceneOptions);
    } else if (
      ep.g(e.model) &&
      ((s = e.model.taskExtra) == null ? undefined : s.sceneOptions)
    ) {
      c = eu.j((d = e.model.taskExtra) == null ? undefined : d.sceneOptions);
    }
    if (c.length) {
      const u = this._containerService.createInstance(eC.l, {
        action: ek.U.Use,
        enterSource:
          (r = t == null ? undefined : t.enterSource) != null
            ? r
            : (n = c.at(-1)) == null || (a = n.reportParams) == null
              ? undefined
              : a.enterSource,
      });
      u.setParamsByCommercialSceneOptions(c);
      u.report();
    }
  }
  reportAgenticTaskVipFunctionDetails(e) {
    const { submitIdDataMap } = e;
    if (submitIdDataMap) {
      Object.values(submitIdDataMap).forEach((e) => {
        if (e && e.statusModel.recordStatus === ec.DMLGenRecordStatus.Succeed) {
          var t =
            this._dreaminaCommercialFeatureContainerService.getInstanceSync();
          if (t) {
            var r = t.getCommercialSceneOptionsFromAIGCData(e);
            if (r) {
              var sceneOptions = ea._(es._({}, r), {
                reportParams: {
                  enterSource: eS.k.Generate,
                  allowDuplicateShowAction: true,
                },
              });
              eI.s({
                containerService: this._containerService,
                action: ek.U.Show,
                sceneOptions,
              });
              eI.s({
                containerService: this._containerService,
                action: ek.U.Click,
                sceneOptions,
              });
              eI.s({
                containerService: this._containerService,
                action: ek.U.Use,
                sceneOptions,
              });
            }
          }
        }
      });
    }
  }
  _getAIGCTaskInputParamsStr(e) {
    let t = "";
    if (e instanceof tD.X) {
      t = JSON.stringify(
        ea._(
          es._(
            {},
            en.A(e.model, ["prompt", "text2imageParams", "blendImageInfo"]),
          ),
          {
            modelName:
              (r = e.model.modelInfo) == null ? undefined : r.modelName,
            modelReqKey:
              (i = e.model.modelInfo) == null ? undefined : i.modelReqKey,
          },
        ),
      );
    } else if (e instanceof tx.T) {
      var r;
      var i;
      let s;
      let a;
      let n;
      let o;
      let d;
      let c;
      const u =
        (a = e.model.originalInput) == null || (s = a.videoGenInputs) == null
          ? undefined
          : s[0];
      t = JSON.stringify(
        ea._(
          es._(
            {},
            en.A(e.model, ["ttsInfo"]),
            en.A(e.model.originalInput, [
              "videoAspectRatio",
              "taskScene",
              "modelReqKey",
            ]),
            eo.A(u, ["firstFrameImage", "endFrameImage"]),
            en.A(u == null ? undefined : u.firstFrameImage, [
              "width",
              "height",
              "imageUri",
              "imageUrl",
            ]),
            en.A(u == null ? undefined : u.endFrameImage, [
              "width",
              "height",
              "imageUri",
              "imageUrl",
            ]),
          ),
          {
            modelName:
              ((n = e.model.modelInfo) == null ? undefined : n.modelName) ||
              ((o = e.model.videoModelConfig) == null
                ? undefined
                : o.modelName),
            modelReqKey:
              ((d = e.model.modelInfo) == null ? undefined : d.modelReqKey) ||
              ((c = e.model.videoModelConfig) == null
                ? undefined
                : c.modelReqKey),
          },
        ),
      );
    } else {
      if (e instanceof tG.w) {
        t = JSON.stringify(
          en.A(e.model, [
            "instrumentalAbility",
            "songAbility",
            "lyrics",
            "captions",
          ]),
        );
      } else if (e instanceof tP.P) {
        t = JSON.stringify(
          en.A(e.model.taskData.userMessage, [
            "text",
            "files",
            "referenceInfo",
          ]),
        );
      }
    }
    return t;
  }
  _getTaskType(e) {
    if (e instanceof tD.X) {
      return "image";
    }
    if (e instanceof tx.T) {
      return "video";
    }
    if (e instanceof tG.w) {
      return "audio";
    }
    if (e instanceof tP.P) {
      return "agentic";
    }
    return "";
  }
  _getAigcQueueStatus(e) {
    switch (e.statusModel.recordStatus) {
      case ec.DMLGenRecordStatus.Failed:
        if (ep.g(e) && e.statusModel.errorCode === eg.Q.ErrTaskCancelled) {
          return "cancel";
        }
        return "fail";
      case ec.DMLGenRecordStatus.Succeed:
        return "success";
      case ec.DMLGenRecordStatus.Loading:
        const { queueInfo } = e.statusModel;
        if (!queueInfo) {
          return;
        }
        switch (queueInfo.queueStatus) {
          case Q.Y.Generating:
            return "generating";
          case Q.Y.Queueing:
          case Q.Y.Waiting:
            if (queueInfo.priority !== ef.k.NormalUser) {
              return "queue_speeding";
            }
            return "queuing";
          default:
            return;
        }
      default:
        return;
    }
  }
  _getFormatTaskParamJsonStringify(e) {
    if ("prompt" in e && "model" in e && "largeImageInfo" in e) {
      const { prompt, model, largeImageInfo } = e;
      const imageRatio =
        e_.B(largeImageInfo) || ed.DAImageRatioType.ImageRatioType_11;
      try {
        return JSON.stringify({
          prompt,
          model,
          imageRatio,
        });
      } catch (e) {
        return;
      }
    }
  }
  _setPerfVideoReporter(e, t) {
    this._perfVideoReporterMap[e] = t;
  }
  _setPerfImageReporter(e, t) {
    this._perfImageReporterMap[e] = t;
  }
  _setPerfAgentConversationReporter(e, t) {
    this._perfAgentConversationReporterMap[e] = t;
  }
  _setPerfAudioReporter(e, t) {
    this._perfAudioReporterMap[e] = t;
  }
  constructor(e, t, r) {
    this._containerService = e;
    this._reportService = t;
    this._dreaminaCommercialFeatureContainerService = r;
    this._generateCountMap = {};
    this._perfVideoReporterMap = {};
    this._perfImageReporterMap = {};
    this._perfAgentConversationReporterMap = {};
    this._perfAudioReporterMap = {};
    this._generateStatusMap = {};
  }
}
tj = P.Cg(
  [
    P.Qj(0, j._),
    P.Qj(1, el.l),
    P.Qj(2, l.X),
    P.Sn("design:type", Function),
    P.Sn("design:paramtypes", [
      j._ === undefined ? Object : j._,
      el.l === undefined ? Object : el.l,
      l.X === undefined ? Object : l.X,
    ]),
  ],
  tj,
);
class t0 {
  get _networkClient() {
    let e;
    let t;
    if (!this._networkClientInstance) {
      this._networkClientInstance =
        ((e = this._containerService),
        (t = new tL.LL().build({
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })),
        tZ.U(e, t),
        tK.vo(t),
        tH.Wh(t),
        tz.P(t),
        tY.m(t),
        t);
    }
    return this._networkClientInstance;
  }
  generateByDraft(e, t) {
    return n
      ._(function* () {
        try {
          const { babiParam, generateId } = t;
          const s = tU._(t, ["babiParam", "generateId"]);
          const generateId_1 = generateId != null ? generateId : t$.hT();
          const n = yield this._networkClient.post(
            this._getApi("/mweb/v1/aigc_draft/generate"),
            tW.w(
              ea._(es._({}, e), {
                httpCommonInfo: {
                  aid: this._environmentService.appId,
                },
              }),
            ),
            {
              params: ea._(
                es._(
                  {},
                  this._getCommonRequestParams(),
                  tW.w(s),
                  t$.wi({
                    babiParam,
                    generateId: generateId_1,
                  }),
                ),
                {
                  commerce_with_input_video: "1",
                },
              ),
            },
          );
          if (Number(n.data.fail_code) !== 0 || Number(n.ret) !== 0) {
            const o = n.data;
            return d.xz(
              Number(n.ret),
              n.errmsg || "generate task error",
              es._(
                {
                  logId: n.logid,
                },
                this._getGenerateErrorInfo(o),
              ),
            );
          }
          const c = this._formatAIGCData(n.data.aigc_data);
          c.idModel.webGenerateId = generateId_1;
          return d.TZ({
            logId: n.logid,
            data: c,
          });
        } catch (error) {
          const u = tJ.r(error);
          if (typeof error === "object" && error !== null) {
            const l = error.data;
            const _ = this._getGenerateErrorInfo(l);
            if (Object.keys(_).length > 0) {
              return d.xz(u.code, u.msg, es._({}, u.errorInfo, _));
            }
          }
          return u;
        }
      })
      .call(this);
  }
  _getApi(e) {
    return this._httpApiSettingService.getRequestURL({
      domainType: tQ.X.DEFAULT,
      path: e,
    });
  }
  _getGenerateErrorInfo(e) {
    const t = {};
    const r = e == null ? undefined : e.fail_starling_message;
    if (typeof r === "string" && r.trim() !== "") {
      t.failStarlingMessage = r;
    }
    if (
      (e == null ? undefined : e.show_concurrency_upgrade_entrance) === true
    ) {
      t.showConcurrencyUpgradeEntrance = true;
    }
    return t;
  }
  _getCommonRequestParams() {
    const e = {
      aid: "".concat(this._environmentService.appId),
      device_platform: "web",
      region: this._httpApiSettingService.userLocationInfo.region,
      webId: this._accountService.userProfile.webId,
      da_version: "3.1.3",
    };
    const t = tX.R();
    if (t) {
      e.os = t;
    }
    return e;
  }
  constructor(e, t, r, i) {
    this._containerService = e;
    this._httpApiSettingService = t;
    this._environmentService = r;
    this._accountService = i;
  }
}
t0 = P.Cg(
  [
    P.Qj(0, j._),
    P.Qj(1, tQ.r),
    P.Qj(2, tN.k),
    P.Qj(3, tB.c),
    P.Sn("design:type", Function),
    P.Sn("design:paramtypes", [
      j._ === undefined ? Object : j._,
      tQ.r === undefined ? Object : tQ.r,
      tN.k === undefined ? Object : tN.k,
      tB.c === undefined ? Object : tB.c,
    ]),
  ],
  t0,
);
class t1 extends t0 {
  _formatAIGCData(e) {
    return tV.N(e);
  }
  constructor(e, t, r, i) {
    super(e, t, r, i);
  }
}
t1 = P.Cg(
  [
    P.Qj(0, j._),
    P.Qj(1, tQ.r),
    P.Qj(2, tN.k),
    P.Qj(3, tB.c),
    P.Sn("design:type", Function),
    P.Sn("design:paramtypes", [
      j._ === undefined ? Object : j._,
      tQ.r === undefined ? Object : tQ.r,
      tN.k === undefined ? Object : tN.k,
      tB.c === undefined ? Object : tB.c,
    ]),
  ],
  t1,
);
class t2 {
  submitTask(e, t) {
    return this._taskRepository.generateByDraft(e, t);
  }
  constructor(e) {
    this._instantiationService = e;
    this._taskRepository = this._instantiationService.createInstance(t1);
  }
}
t2 = P.Cg(
  [
    P.Qj(0, j._),
    P.Sn("design:type", Function),
    P.Sn("design:paramtypes", [j._ === undefined ? Object : j._]),
  ],
  t2,
);
class t4 {
  get _networkClient() {
    let e;
    let t;
    if (!this._networkClientInstance) {
      this._networkClientInstance =
        ((e = this._containerService),
        (t = new tL.LL().build({
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })),
        tZ.U(e, t),
        tK.vo(t),
        tH.Wh(t),
        tz.P(t),
        tY.m(t),
        t);
    }
    return this._networkClientInstance;
  }
  generateAccelerate(e) {
    return n
      ._(function* () {
        try {
          const t = this._getApi("/mweb/v1/aigc_draft/generate_accelerate");
          const r = yield this._networkClient.post(t, tW.w(e));
          return d.TZ(tW.o(r.data, t3.Cb));
        } catch (error) {
          return tJ.r(error);
        }
      })
      .call(this);
  }
  getHistoryQueueInfo(e) {
    return n
      ._(function* () {
        try {
          const t = this._getApi("/mweb/v1/get_history_queue_info");
          const r = yield this._networkClient.post(t, tW.w(e));
          return d.TZ(tW.o(r.data, t3.Cb));
        } catch (error) {
          return tJ.r(error);
        }
      })
      .call(this);
  }
  cancelGenerate(e) {
    return n
      ._(function* () {
        try {
          const t = this._getApi("/mweb/v1/aigc_draft/cancel_generate");
          const r = yield this._networkClient.post(t, tW.w(e));
          return d.TZ(tW.o(r.data));
        } catch (error) {
          return tJ.r(error);
        }
      })
      .call(this);
  }
  getSwitchModelQueueInfo(e) {
    return n
      ._(function* () {
        try {
          const t = this._getApi(
            "/mweb/v1/video_generate/get_switch_model_queue_info",
          );
          const r = yield this._networkClient.post(t, tW.w(e));
          return d.TZ(tW.o(r.data, t3.Cb));
        } catch (error) {
          return tJ.r(error);
        }
      })
      .call(this);
  }
  _getApi(e) {
    return this._httpApiSettingService.getRequestURL({
      domainType: tQ.X.DEFAULT,
      path: e,
    });
  }
  constructor(e, t) {
    this._httpApiSettingService = e;
    this._containerService = t;
  }
}
t4 = P.Cg(
  [
    P.Qj(0, tQ.r),
    P.Qj(1, j._),
    P.Sn("design:type", Function),
    P.Sn("design:paramtypes", [
      tQ.r === undefined ? Object : tQ.r,
      j._ === undefined ? Object : j._,
    ]),
  ],
  t4,
);
class t5 {
  generateAccelerate(e) {
    return this._repository.generateAccelerate(e);
  }
  getHistoryQueueInfo(e) {
    return this._repository.getHistoryQueueInfo(e);
  }
  cancelGenerate(e) {
    return this._repository.cancelGenerate(e);
  }
  getSwitchModelQueueInfo(e) {
    return this._repository.getSwitchModelQueueInfo(e);
  }
  constructor(e, t) {
    this._containerService = e;
    this._httpApiSettingService = t;
    this._repository = new t4(
      this._httpApiSettingService,
      this._containerService,
    );
  }
}
t5 = P.Cg(
  [
    P.Qj(0, j._),
    P.Qj(1, tQ.r),
    P.Sn("design:type", Function),
    P.Sn("design:paramtypes", [
      j._ === undefined ? Object : j._,
      tQ.r === undefined ? Object : tQ.r,
    ]),
  ],
  t5,
);
class t7 extends t0 {
  _formatAIGCData(e) {
    return t6.E(e);
  }
  constructor(e, t, r, i) {
    super(e, t, r, i);
  }
}
t7 = P.Cg(
  [
    P.Qj(0, j._),
    P.Qj(1, tQ.r),
    P.Qj(2, tN.k),
    P.Qj(3, tB.c),
    P.Sn("design:type", Function),
    P.Sn("design:paramtypes", [
      j._ === undefined ? Object : j._,
      tQ.r === undefined ? Object : tQ.r,
      tN.k === undefined ? Object : tN.k,
      tB.c === undefined ? Object : tB.c,
    ]),
  ],
  t7,
);
class t9 {
  generateImage(e, t) {
    return this._imageRepository.generateByDraft(e, t);
  }
  constructor(e) {
    this._instantiationService = e;
    this._imageRepository = this._instantiationService.createInstance(t7);
  }
}
t9 = P.Cg(
  [
    P.Qj(0, j._),
    P.Sn("design:type", Function),
    P.Sn("design:paramtypes", [j._ === undefined ? Object : j._]),
  ],
  t9,
);
class rt {
  get _networkClient() {
    let e;
    let t;
    if (!this._networkClientInstance) {
      this._networkClientInstance =
        ((e = this._containerService),
        (t = new tL.LL().build({
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })),
        tZ.U(e, t),
        tK.vo(t),
        tH.Wh(t),
        tz.P(t),
        tY.m(t),
        t);
    }
    return this._networkClientInstance;
  }
  agentEdit(e, t) {
    return n
      ._(function* () {
        try {
          const r = t
            ? {
                params: t$.wi({
                  babiParam: t.babiParam,
                  generateId: t.generateId,
                }),
              }
            : undefined;
          const i = yield this._networkClient.post(
            this._getApi("/mweb/v1/infinite_canvas/edit"),
            tW.w(e),
            r,
          );
          if (i.ret !== "0") {
            return d.xz(Number(i.ret), i.errmsg);
          }
          return d.TZ(tW.o(i));
        } catch (error) {
          return tJ.r(error);
        }
      })
      .call(this);
  }
  _getApi(e) {
    return this._httpApiSettingService.getRequestURL({
      domainType: tQ.X.DEFAULT,
      path: e,
    });
  }
  constructor(e, t) {
    this._containerService = e;
    this._httpApiSettingService = t;
  }
}
rt = P.Cg(
  [
    P.Qj(0, j._),
    P.Qj(1, tQ.r),
    P.Sn("design:type", Function),
    P.Sn("design:paramtypes", [
      j._ === undefined ? Object : j._,
      tQ.r === undefined ? Object : tQ.r,
    ]),
  ],
  rt,
);
class rr {
  submitTask(e, t) {
    return this._repository.agentEdit(e, t);
  }
  constructor(e) {
    this._instantiationService = e;
    this._repository = this._instantiationService.createInstance(rt);
  }
}
rr = P.Cg(
  [
    P.Qj(0, j._),
    P.Sn("design:type", Function),
    P.Sn("design:paramtypes", [j._ === undefined ? Object : j._]),
  ],
  rr,
);
class ra extends t0 {
  submitMixAudioVideoTask(e) {
    return n
      ._(function* () {
        try {
          const { babiParam } = e;
          const r = tU._(e, ["babiParam"]);
          const i = yield this._networkClient.post(
            this._getApi("/mweb/v1/mix_audio_video"),
            tW.w(r, true),
            {
              params: t$.wi({
                babiParam,
              }),
            },
          );
          const s = tW.o(i.data, t3.Cb);
          return d.TZ({
            status: s.task.status,
            audioVid: e.input.audioVid,
            itemId: e.input.videoItemId,
          });
        } catch (error) {
          return tJ.r(error);
        }
      })
      .call(this);
  }
  submitMixAudioVideosTask(e) {
    return n
      ._(function* () {
        try {
          const { babiParam } = e;
          const r = tU._(e, ["babiParam"]);
          const i = yield this._networkClient.post(
            this._getApi("/mweb/v1/mix_audio_videos"),
            tW.w(r, true),
            {
              params: t$.wi({
                babiParam,
              }),
            },
          );
          const s = tW.o(i.data, t3.Cb);
          const a = Object.entries(s.resultMap).map((t, r) => {
            var [submitId, s] = t;
            return {
              status: s.status,
              audioVid: e.inputList[r].audioVid,
              itemId: e.inputList[r].videoItemId,
              submitId,
            };
          });
          return d.TZ(a);
        } catch (error) {
          return tJ.r(error);
        }
      })
      .call(this);
  }
  _formatAIGCData(e) {
    return rs.o(e);
  }
  constructor(e, t, r, i) {
    super(e, t, r, i);
  }
}
ra = P.Cg(
  [
    P.Qj(0, j._),
    P.Qj(1, tQ.r),
    P.Qj(2, tN.k),
    P.Qj(3, tB.c),
    P.Sn("design:type", Function),
    P.Sn("design:paramtypes", [
      j._ === undefined ? Object : j._,
      tQ.r === undefined ? Object : tQ.r,
      tN.k === undefined ? Object : tN.k,
      tB.c === undefined ? Object : tB.c,
    ]),
  ],
  ra,
);
class rn {
  submitTask(e, t) {
    return this._taskRepository.generateByDraft(e, t);
  }
  submitMixAudioVideoTask(e) {
    return this._taskRepository.submitMixAudioVideoTask(e);
  }
  submitMixAudioVideosTask(e) {
    return this._taskRepository.submitMixAudioVideosTask(e);
  }
  constructor(e, t) {
    this._instantiationService = e;
    this._containerService = t;
    this._taskRepository = this._instantiationService.createInstance(ra);
  }
}
rn = P.Cg(
  [
    P.Qj(0, j._),
    P.Qj(1, j._),
    P.Sn("design:type", Function),
    P.Sn("design:paramtypes", [
      j._ === undefined ? Object : j._,
      j._ === undefined ? Object : j._,
    ]),
  ],
  rn,
);
const ru = {
  pf: "7",
};
const mcpConfig = [
  {
    serviceName: ec.pointsServiceName,
    supportedTools: [ec.mcpToolPointsConsumptionReminderName],
  },
];
const r_ = {
  [ec.mcpToolPointsConsumptionReminderName]: () =>
    V.Ay.t("dre_agent_points_tool_desc"),
};
const rh = {
  CREATE_CONVERSATION: "/mweb/v1/creation_agent/v2/conversation",
  RESUME: "/mweb/v1/creation_agent/v2/resume",
  STOP_STREAM: "/mweb/v1/creation_agent/v2/stop_stream",
  SUBSCRIBE_SESSION: "/mweb/v1/creation_agent/v2/subscribe_session",
};
const rm = {
  CREATE_CONVERSATION: "/mweb/v1/infinite_canvas/conversation",
  RESUME: "/mweb/v1/infinite_canvas/resume",
  STOP_STREAM: "/mweb/v1/infinite_canvas/stop_stream",
};
function rp(e) {
  return typeof e === "object" && e !== null;
}
function rg(e) {
  if (typeof e === "boolean") {
    return e;
  }
  if (typeof e === "string") {
    if (e === "true") {
      return true;
    }
    if (e === "false") {
      return false;
    }
  }
}
const rf = new Set(["pending", "in_progress", "completed"]);
function rI(e) {
  return !!e && typeof e === "object" && !Array.isArray(e);
}
class rC {
  getEventParams() {
    const {
      event,
      status,
      conversationId,
      requestKey,
      requestMessageId,
      operationKind,
      submitId,
      workspaceId,
      projectId,
      resumeCount,
      ret,
      logId,
      errorCode,
      errorMessage,
    } = this._params;
    return {
      event,
      status,
      conversation_id: conversationId,
      request_key: requestKey,
      request_message_id: requestMessageId,
      operation_kind: operationKind,
      submit_id: submitId,
      workspace_id: workspaceId,
      project_id: projectId,
      resume_count: resumeCount,
      ret,
      log_id: logId,
      error_code: errorCode,
      error_message: errorMessage,
    };
  }
  constructor(e) {
    this._params = e;
    this.eventName = "sandbox_auth_flow";
  }
}
function rk(e, t) {
  const r = e.createInstance(new rS.d(rC, [t]));
  o.cQ(e, el.l).reportDevEvent(r.eventName, r.getEventParams());
}
function rT(_containerService, t) {
  rk(
    _containerService,
    ea._(es._({}, t), {
      event: "sandbox_auth_resume_result",
      status: t.status,
    }),
  );
}
function ry(_containerService, t, r) {
  let i;
  let s;
  let a;
  let n;
  let d;
  let c;
  let u;
  o.cQ(_containerService, el.l).reportDevError(r.event, t, {
    conversation_id: r.conversationId,
    request_key: r.requestKey,
    request_message_id: (i = r.requestMessageId) != null ? i : "",
    operation_kind: (s = r.operationKind) != null ? s : "",
    submit_id: (a = r.submitId) != null ? a : "",
    workspace_id: r.workspaceId !== undefined ? String(r.workspaceId) : "",
    project_id: (n = r.projectId) != null ? n : "",
    resume_count: r.resumeCount !== undefined ? String(r.resumeCount) : "",
    ret: (d = r.ret) != null ? d : "",
    log_id: (c = r.logId) != null ? c : "",
    error_code: r.errorCode !== undefined ? String(r.errorCode) : "",
    error_message: (u = r.errorMessage) != null ? u : "",
  });
}
const clientKey = "rj4d6shgcuwww353";
const rM =
  ((i = eO.G[eg.Q.ErrOffline]) == null ? undefined : i.defaultText) || "";
const rE = (e) => {
  if (e && typeof e === "object" && "data" in e) {
    return e.data;
  }
  return e;
};
class rF {
  get _passportNetworkClient() {
    let e;
    if (!this._passportNetworkClientInstance) {
      this._passportNetworkClientInstance =
        ((e = new tL.LL().build({
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          withCredentials: true,
        })),
        rA.pP(e),
        tH.Wh(e, {
          disableRetCheck: true,
        }),
        tz.P(e),
        e);
    }
    return this._passportNetworkClientInstance;
  }
  get _vaultNetworkClient() {
    let e;
    let t;
    if (!this._vaultNetworkClientInstance) {
      this._vaultNetworkClientInstance =
        ((e = this._containerService),
        (t = new tL.LL().build({
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })),
        tZ.U(e, t),
        tK.vo(t),
        t.interceptors.response.use((e) =>
          ea._(es._({}, e), {
            data: e.data,
          }),
        ),
        tz.P(t),
        t);
    }
    return this._vaultNetworkClientInstance;
  }
  openSandboxAuth() {
    return n
      ._(function* () {
        try {
          let e;
          let t;
          const r = new URLSearchParams();
          r.append("client_key", clientKey);
          r.append("scope", "user_info");
          r.append("source", "web");
          r.append("redirect_uri", this._getSandboxAuthRedirectUri());
          r.append("aid", String(513695));
          r.append("response_type", "code");
          const i = yield this._passportNetworkClient.post(
            this._getApi("/passport/open/web/auth/"),
            r,
            {
              withCredentials: true,
            },
          );
          if ((i == null ? undefined : i.message) === "error") {
            return d.xz(
              (e = (t = i.data.errorCode) != null ? t : i.data.error_code) !=
                null
                ? e
                : eg.Q.ErrClientCommon,
              i.data.description,
              i,
            );
          }
          const s = rE(i);
          const a = s && typeof s === "object" && "data" in s ? s.data : s;
          const { redirectUrl } = tW.o(a, t3.Cb);
          if (!redirectUrl) {
            return d.xz(
              eg.Q.ErrClientCommon,
              "Missing redirect_url from sandbox auth",
            );
          }
          const o = new URL(redirectUrl).searchParams.get("code");
          if (!o) {
            return d.xz(
              eg.Q.ErrClientCommon,
              "Missing code from sandbox auth redirect_url",
            );
          }
          return d.TZ({
            code: o,
          });
        } catch (error) {
          return tJ.r(error);
        }
      })
      .call(this);
  }
  completeAuthorization(e) {
    return n
      ._(function* () {
        try {
          const t = yield this._vaultNetworkClient.post(
            this._getApi("/vault/manager/complete_authorization"),
            tW.w({
              code: e.code,
              encryptedBizKey: e.encryptedBizKey,
              provider: "account_center",
              clientKey,
            }),
          );
          const r = tW.o(rE(t), t3.Cb);
          if (r.status !== 0) {
            return d.xz(eg.Q.ErrClientCommon, rM);
          }
          return d.nj();
        } catch (error) {
          return tJ.r(error);
        }
      })
      .call(this);
  }
  _getSandboxAuthRedirectUri() {
    return "".concat(location.origin, "/");
  }
  _getApi(e) {
    return this._httpApiSettingService.getRequestURL({
      domainType: tQ.X.DEFAULT,
      path: e,
    });
  }
  constructor(e, t) {
    this._containerService = e;
    this._httpApiSettingService = t;
  }
}
rF = P.Cg(
  [
    P.Qj(0, j._),
    P.Qj(1, tQ.r),
    P.Sn("design:type", Function),
    P.Sn("design:paramtypes", [
      j._ === undefined ? Object : j._,
      tQ.r === undefined ? Object : tQ.r,
    ]),
  ],
  rF,
);
const rw =
  ((s = eO.G[eg.Q.ErrOffline]) == null ? undefined : s.defaultText) || "";
function rR(e) {
  return typeof e === "object" && e !== null && "ok" in e;
}
class rP {
  send(e) {
    return this._enqueue(() =>
      n
        ._(function* () {
          let t;
          let r;
          let i;
          let s;
          let a;
          let n;
          let o;
          const c = yield this._sendOnce(e);
          if (rR(c)) {
            this._replayedRequestKeys.delete(e.requestKey);
            return c;
          }
          if (c.kind === "ok") {
            this._replayedRequestKeys.delete(e.requestKey);
            return d.nj();
          }
          if (c.kind === "failed") {
            return d.xz(c.code, c.msg, c.errorInfo);
          }
          if (this._replayedRequestKeys.has(e.requestKey)) {
            ry(
              this._containerService,
              Error("sandbox auth replay already attempted"),
              {
                event: "sandbox_auth_flow_error",
                conversationId: e.meta.conversationId,
                requestKey: e.requestKey,
                requestMessageId: e.meta.requestMessageId,
                operationKind: e.kind,
                submitId: e.meta.submitId,
                workspaceId: e.meta.workspaceId,
                projectId: e.meta.projectId,
                resumeCount: 1,
                ret: c.errorInfo.ret,
                logId: c.errorInfo.logid,
                errorMessage: "sandbox auth replay already attempted",
              },
            );
            return d.xz(eg.Q.ErrOffline, rw);
          }
          this._replayedRequestKeys.add(e.requestKey);
          const u = yield this._sandboxAuthService.openSandboxAuth();
          t = this._containerService;
          r = {
            status: u.ok ? "success" : "failed",
            conversationId: e.meta.conversationId,
            requestKey: e.requestKey,
            requestMessageId: e.meta.requestMessageId,
            operationKind: e.kind,
            submitId: e.meta.submitId,
            workspaceId: e.meta.workspaceId,
            projectId: e.meta.projectId,
            resumeCount: 1,
            ret: c.errorInfo.ret,
            logId: c.errorInfo.logid,
            errorCode: u.ok ? undefined : u.code,
            errorMessage: u.ok ? undefined : u.msg,
          };
          rk(
            t,
            ea._(es._({}, r), {
              event: "sandbox_auth_code_result",
              status: r.status,
            }),
          );
          if (!u.ok) {
            this._replayedRequestKeys.delete(e.requestKey);
            return d.xz(eg.Q.ErrOffline, rw);
          }
          const l = yield this._sandboxAuthService.completeAuthorization({
            code: u.value.code,
            encryptedBizKey:
              (o = c.errorInfo.sandbox_auth_bizkey) != null ? o : "",
          });
          i = this._containerService;
          s = {
            status: l.ok ? "success" : "failed",
            conversationId: e.meta.conversationId,
            requestKey: e.requestKey,
            requestMessageId: e.meta.requestMessageId,
            operationKind: e.kind,
            submitId: e.meta.submitId,
            workspaceId: e.meta.workspaceId,
            projectId: e.meta.projectId,
            resumeCount: 1,
            ret: c.errorInfo.ret,
            logId: c.errorInfo.logid,
            errorCode: l.ok ? undefined : l.code,
            errorMessage: l.ok ? undefined : l.msg,
          };
          rk(
            i,
            ea._(es._({}, s), {
              event: "sandbox_auth_complete_result",
              status: s.status,
            }),
          );
          if (!l.ok) {
            this._replayedRequestKeys.delete(e.requestKey);
            return d.xz(eg.Q.ErrOffline, rw);
          }
          a = this._containerService;
          n = {
            conversationId: e.meta.conversationId,
            requestKey: e.requestKey,
            requestMessageId: e.meta.requestMessageId,
            operationKind: e.kind,
            submitId: e.meta.submitId,
            workspaceId: e.meta.workspaceId,
            projectId: e.meta.projectId,
            resumeCount: 1,
            ret: c.errorInfo.ret,
            logId: c.errorInfo.logid,
          };
          rk(
            a,
            ea._(es._({}, n), {
              event: "sandbox_auth_resume_start",
            }),
          );
          const _ = yield this._sendOnce(e);
          if (rR(_)) {
            rT(this._containerService, {
              status: _.ok ? "success" : "failed",
              conversationId: e.meta.conversationId,
              requestKey: e.requestKey,
              requestMessageId: e.meta.requestMessageId,
              operationKind: e.kind,
              submitId: e.meta.submitId,
              workspaceId: e.meta.workspaceId,
              projectId: e.meta.projectId,
              resumeCount: 1,
              ret: c.errorInfo.ret,
              logId: c.errorInfo.logid,
              errorCode: _.ok ? undefined : _.code,
              errorMessage: _.ok ? undefined : _.msg,
            });
            this._replayedRequestKeys.delete(e.requestKey);
            return _;
          }
          rT(this._containerService, {
            status: _.kind === "ok" ? "success" : "failed",
            conversationId: e.meta.conversationId,
            requestKey: e.requestKey,
            requestMessageId: e.meta.requestMessageId,
            operationKind: e.kind,
            submitId: e.meta.submitId,
            workspaceId: e.meta.workspaceId,
            projectId: e.meta.projectId,
            resumeCount: 1,
            ret: c.errorInfo.ret,
            logId: c.errorInfo.logid,
            errorCode: _.kind === "failed" ? _.code : undefined,
            errorMessage: _.kind === "failed" ? _.msg : undefined,
          });
          if (_.kind === "ok") {
            this._replayedRequestKeys.delete(e.requestKey);
            return d.nj();
          }
          this._replayedRequestKeys.delete(e.requestKey);
          return d.xz(
            _.kind === "failed" ? _.code : eg.Q.ErrOffline,
            rw,
            (_.kind, _.errorInfo),
          );
        })
        .call(this),
    );
  }
  _enqueue(e) {
    const t = this._sendQueue.then(e, e);
    this._sendQueue = t.then(
      () => undefined,
      () => undefined,
    );
    return t;
  }
  _sendOnce(e) {
    return new Promise((resolve) => {
      this._pendingRequests.set(e.requestKey, {
        resolve,
        operationMeta: {
          operationKind: e.kind,
          inferenceModelId: e.meta.inferenceModelId,
          creationMode: e.meta.creationMode,
          submitId: e.meta.submitId,
          workspaceId: e.meta.workspaceId,
          projectId: e.meta.projectId,
          requestMessageId: e.meta.requestMessageId,
        },
      });
      try {
        e.execute();
      } catch (error) {
        this._pendingRequests.delete(e.requestKey);
        L.V.error(
          "[ConversationOutboundCoordinator] execute operation failed",
          {
            error,
            kind: e.kind,
            requestKey: e.requestKey,
            meta: e.meta,
          },
        );
        resolve({
          kind: "failed",
          code: eg.Q.ErrOffline,
          msg:
            (error == null ? undefined : error.message) ||
            "send outbound operation failed",
        });
      }
    });
  }
  constructor(e, t) {
    this._pendingRequests = e;
    this._sendQueue = Promise.resolve();
    this._replayedRequestKeys = new Set();
    this._containerService = t;
    this._sandboxAuthService = t.createInstance(rF);
  }
}
rP = P.Cg(
  [
    P.Qj(1, j._),
    P.Sn("design:type", Function),
    P.Sn("design:paramtypes", [
      typeof Map === "undefined" ? Object : Map,
      j._ === undefined ? Object : j._,
    ]),
  ],
  rP,
);
class rN {
  getEventParams() {
    const {
      status,
      logId,
      conversationId,
      errorType,
      httpStatus,
      errorMessage,
      duration,
      endpoint,
      connectionId,
      messageId,
    } = this._params;
    return {
      status,
      log_id: logId,
      conversation_id: conversationId,
      error_type: errorType,
      http_status: httpStatus,
      error_message: errorMessage,
      duration,
      endpoint,
      connection_id: connectionId,
      message_id: messageId,
    };
  }
  constructor(e) {
    this._params = e;
    this.eventName = "nuro_conversation_fetch_stability";
  }
}
const rU =
  ((a = eO.G[eg.Q.ErrOffline]) == null ? undefined : a.defaultText) || "";
const rL = "/mweb/v1/creation_agent/v2/conversation";
class rK {
  static unregisterManager(e, t) {
    if (this._managerRegistry.get(e) === t) {
      this._managerRegistry.delete(e);
    }
  }
  updateConversationId(e, t) {
    if (t && e !== t) {
      rK.unregisterManager(e, this);
      rK._managerRegistry.set(t, this);
      this._config.conversationId = t;
    }
  }
  static _resolveManager(e) {
    const t = this._parseConversationId(e.endpoint, e.data);
    if (t) {
      return this._managerRegistry.get(t);
    }
  }
  static _parseConversationId(e, t) {
    if (t) {
      try {
        if (e.includes("conversation")) {
          const r = JSON.parse(t);
          if (r.conversation_id) {
            return r.conversation_id;
          }
          for (const i of (s = r.messages) != null ? s : []) {
            var s;
            let a;
            const n =
              i == null || (a = i.metadata) == null
                ? undefined
                : a.conversation_id;
            if (n) {
              return n;
            }
          }
          return;
        }
        return JSON.parse(t).conversation_id;
      } catch (error) {
        L.V.error(
          "[NuroEventStreamAdapterManager] Failed to parse conversation ID",
          {
            error,
            endpoint: e,
            dataString: t,
          },
        );
        return;
      }
    }
  }
  setupEventStreamAdapter() {
    if (!rK._eventStreamAdapterInstalled) {
      rd.EventStreamAdapter.fetch = (e) => {
        var t;
        var r = rK._resolveManager(e);
        if (r) {
          return r._handleFetch(e);
        }
        L.V.error(
          "[NuroEventStreamAdapterManager] No manager found for fetch config",
          {
            endpoint: e.endpoint,
            data: e.data,
          },
        );
        if ((t = e.onError) != null) {
          t.call(e, -1, "No conversation manager found");
        }
        return "";
      };
      rd.EventStreamAdapter.cancel = (e) => {
        if (typeof e === "string") {
          var t = rK._globalConnections.get(e);
          if (t != null) {
            t.abort();
          }
          rK._globalConnections.delete(e);
        }
      };
      rK._eventStreamAdapterInstalled = true;
    }
    rd.EventStreamAdapter.reconnectEndpoint =
      this._config.initConfig.reconnectEndpoint;
    rd.EventStreamAdapter.interruptEndpoint =
      this._config.initConfig.interruptEndpoint;
  }
  _handleFetch(e) {
    let t;
    let r;
    const connectionId = rd.NuroUtils.randomUUIDString();
    const s = new AbortController();
    this._connections.set(connectionId, s);
    rK._globalConnections.set(connectionId, s);
    const candidates = this._extractPendingRequestKeyCandidates(
      e.endpoint,
      (r = e.data) != null ? r : "",
    );
    const { requestKey, promiseHandler, matchSource } =
      this._resolvePendingRequest(candidates);
    const resumeContextList = this._resolveResumeContextList(requestKey);
    const _ = promiseHandler == null ? undefined : promiseHandler.operationMeta;
    const h =
      !!(t = {
        matchSource,
        operationKind: _ == null ? undefined : _.operationKind,
      }).matchSource && t.operationKind === "submit_user_message";
    const inferenceModelId = h
      ? _ == null
        ? undefined
        : _.inferenceModelId
      : undefined;
    const creationMode = h
      ? _ == null
        ? undefined
        : _.creationMode
      : undefined;
    L.V.info(
      "[NuroEventStreamAdapterManager] EventStreamAdapter.fetch started",
      JSON.stringify({
        connectionId,
        messageId: requestKey,
        endpoint: e.endpoint,
        method: e.method || "GET",
        hasData: !!e.data,
        conversationId: this._config.conversationId,
      }),
    );
    n._(function* () {
      const t = this;
      const r = Date.now();
      let n = null;
      let u = false;
      const _ = () => {
        if (n) {
          clearTimeout(n);
          n = null;
        }
      };
      const h = function () {
        const logId =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : "";
        _();
        n = setTimeout(() => {
          var a;
          var n;
          var c;
          var u = Date.now() - r;
          a = t._containerService;
          n = {
            duration: u,
            endpoint: e.endpoint,
            connectionId,
            messageId: requestKey,
            errorMessage: "Chunk timeout after ".concat(t._chunkTimeout, "ms"),
            logId,
            conversationId: t._config.conversationId,
          };
          c = a.createInstance(
            new rS.d(rN, [
              ea._(es._({}, n), {
                status: "error",
                errorType: "timeout",
              }),
            ]),
          );
          o.cQ(a, el.l).reportDevEvent(c.eventName, c.getEventParams());
        }, t._chunkTimeout);
      };
      try {
        if ((G = e.onStart) != null) {
          G.call(e);
        }
        let p;
        let g;
        let f;
        const I = yield this._getCommonRequestParams();
        const S = new URL(e.endpoint);
        Object.entries(I).forEach((e) => {
          var [t, r] = e;
          S.searchParams.append(t, String(r));
        });
        const C = e.endpoint.includes("conversation")
          ? this._appendRoiQuery(S.toString())
          : S.toString();
        L.V.info(
          "[NuroEventStreamAdapterManager] Preparing fetch request",
          JSON.stringify({
            connectionId,
            messageId: requestKey,
            finalUrl: C,
            commonParams: JSON.stringify(I),
            conversationId: this._config.conversationId,
          }),
        );
        const k = this._getRequestBody(e, {
          resumeContextList,
          inferenceModelId,
          creationMode,
        });
        const headers = this._createFetchHeaders(C, e);
        const y = {
          method: e.method || "GET",
          headers,
          credentials: "include",
          body: k,
          signal: s.signal,
        };
        w = e.endpoint.includes(rL)
          ? rq.GU({
              endpoint: "conversation",
              init: y,
              url: C,
            })
          : undefined;
        const A = yield fetch(C, y);
        if (w != null) {
          w.recordResponse(A);
        }
        yield rG.OK(A, headers[rD.s0]);
        L.V.info(
          "[NuroEventStreamAdapterManager] Fetch response received",
          JSON.stringify({
            connectionId,
            messageId: requestKey,
            status: A.status,
            statusText: A.statusText,
            ok: A.ok,
            hasBody: !!A.body,
            conversationId: this._config.conversationId,
          }),
        );
        const b = this._storeDebugInfo(A, e.endpoint, e.data);
        if (!A.ok || !A.body) {
          let M;
          let E;
          let F;
          var w;
          var R;
          var P;
          var G;
          var D;
          let x;
          let q;
          const j = "HTTP error! status: ".concat(A.status);
          const O = Date.now() - r;
          if (A.body) {
            const B = yield A.text().catch(() => "");
            if (w != null) {
              w.recordChunk(B);
            }
          }
          if (w != null) {
            w.recordError(Error(j));
          }
          L.V.info(
            "[NuroEventStreamAdapterManager] Fetch request failed",
            JSON.stringify({
              connectionId,
              messageId: requestKey,
              status: A.status,
              statusText: A.statusText,
              errorMsg: j,
              duration: O,
              conversationId: this._config.conversationId,
            }),
          );
          M = this._containerService;
          E = {
            httpStatus: A.status,
            errorMessage: j,
            duration: O,
            endpoint: e.endpoint,
            connectionId,
            messageId: requestKey,
            logId: (x = b == null ? undefined : b.logId) != null ? x : "",
            conversationId: this._config.conversationId,
          };
          F = M.createInstance(
            new rS.d(rN, [
              ea._(es._({}, E), {
                status: "error",
                errorType: "request_error",
              }),
            ]),
          );
          o.cQ(M, el.l).reportDevEvent(F.eventName, F.getEventParams());
          if ((q = e.onError) != null) {
            q.call(e, A.status, j);
          }
          if (promiseHandler != null) {
            promiseHandler.resolve({
              kind: "failed",
              code: A.status,
              msg: j,
            });
          }
          this._deletePendingRequest(requestKey);
          this._connections.delete(connectionId);
          return;
        }
        this._deletePendingRequest(requestKey);
        const Q = new TextDecoderStream();
        const N = A.body.pipeThrough(Q).getReader();
        let V = -1;
        let U = "";
        let K = true;
        L.V.info(
          "[NuroEventStreamAdapterManager] Starting stream reading",
          JSON.stringify({
            connectionId,
            messageId: requestKey,
            logId: (R = b == null ? undefined : b.logId) != null ? R : "",
            conversationId: this._config.conversationId,
          }),
        );
        h(b == null ? undefined : b.logId);
        while (true) {
          V++;
          const H = yield N == null ? undefined : N.read();
          if (typeof H.value === "string") {
            if (w != null) {
              w.recordChunk(H.value);
            }
            h();
            if (K) {
              U += H.value;
            }
            const parsedData = K
              ? ((e) => {
                  const t = e.trim();
                  if (t && t.startsWith("{")) {
                    let r = 0;
                    let i = false;
                    let s = false;
                    for (let a = 0; a < t.length; a++) {
                      const n = t[a];
                      if (s) {
                        s = false;
                        continue;
                      }
                      if (n === "\\") {
                        s = true;
                        continue;
                      }
                      if (n === '"') {
                        i = !i;
                        continue;
                      }
                      if (!i) {
                        if (n === "{") {
                          r++;
                          continue;
                        }
                        if (n === "}" && --r == 0) {
                          return t.slice(0, a + 1);
                        }
                      }
                    }
                    return t;
                  }
                })(U)
              : undefined;
            if (V === 0) {
              L.V.info(
                "[NuroEventStreamAdapterManager] First chunk received",
                JSON.stringify({
                  connectionId,
                  messageId: requestKey,
                  chunkLength: H.value.length,
                  startsWithJson: H.value.trimStart().startsWith("{"),
                  conversationId: this._config.conversationId,
                }),
              );
            }
            if (!(V !== 0 || H.value.trimStart().startsWith("{"))) {
              K = false;
              U = "";
            }
            if (K && parsedData) {
              try {
                const J = ((e) => {
                  try {
                    let t;
                    let r;
                    let i;
                    const s = JSON.parse(e);
                    const a =
                      (t = (r = s.errmsg) != null ? r : s.msg) != null ? t : "";
                    const n =
                      (i = s.data) == null ? undefined : i.sandbox_auth_info;
                    const o =
                      a.trim() && a.trim().toLowerCase() !== "success" ? a : rU;
                    if (
                      s.ret === "0" &&
                      (n == null ? undefined : n.auth_res) === 2
                    ) {
                      if (!n.sandbox_auth_bizkey) {
                        return {
                          kind: "submit_failed",
                          message: "Missing sandbox_auth_bizkey",
                        };
                      }
                      return {
                        kind: "sandbox_auth_required",
                        message: o,
                        errorInfo: ea._(es._({}, n), {
                          ret: s.ret,
                          logid: s.logid,
                        }),
                      };
                    }
                    if (s.ret && s.ret !== "0") {
                      const d = ((e) => {
                        if (e && e !== "0") {
                          const t = Number(e);
                          if (Number.isFinite(t) && t !== 0) {
                            return t;
                          }
                        }
                      })(s.ret);
                      return es._(
                        {
                          kind: "submit_failed",
                          message: a,
                        },
                        d === undefined
                          ? {}
                          : {
                              code: d,
                            },
                      );
                    }
                    return {
                      kind: "pass_through",
                    };
                  } catch (e) {
                    return {
                      kind: "pending",
                    };
                  }
                })(parsedData);
                L.V.info(
                  "[NuroEventStreamAdapterManager] First chunk parsed",
                  JSON.stringify({
                    connectionId,
                    messageId: requestKey,
                    resultKind: J.kind,
                    parsedData,
                    conversationId: this._config.conversationId,
                  }),
                );
                if (J.kind === "sandbox_auth_required") {
                  u = true;
                  _();
                  z = this._containerService;
                  X = {
                    conversationId: this._config.conversationId,
                    requestKey: requestKey != null ? requestKey : "",
                    requestMessageId:
                      (Z =
                        promiseHandler == null ||
                        (eo = promiseHandler.operationMeta) == null
                          ? undefined
                          : eo.requestMessageId) != null
                        ? Z
                        : requestKey,
                    operationKind:
                      promiseHandler == null ||
                      (ed = promiseHandler.operationMeta) == null
                        ? undefined
                        : ed.operationKind,
                    submitId:
                      promiseHandler == null ||
                      (ec = promiseHandler.operationMeta) == null
                        ? undefined
                        : ec.submitId,
                    workspaceId:
                      ($ =
                        promiseHandler == null ||
                        (eu = promiseHandler.operationMeta) == null
                          ? undefined
                          : eu.workspaceId) != null
                        ? $
                        : this._config.workspaceId,
                    projectId:
                      (ee =
                        promiseHandler == null ||
                        (e_ = promiseHandler.operationMeta) == null
                          ? undefined
                          : e_.projectId) != null
                        ? ee
                        : this._config.projectId,
                    ret: J.errorInfo.ret,
                    logId:
                      (et =
                        (er = J.errorInfo.logid) != null
                          ? er
                          : b == null
                            ? undefined
                            : b.logId) != null
                        ? et
                        : "",
                  };
                  rk(
                    z,
                    ea._(es._({}, X), {
                      event: "sandbox_auth_required",
                    }),
                  );
                  if (!promiseHandler) {
                    L.V.error(
                      "[NuroEventStreamAdapterManager] auth required but pending request missing",
                      {
                        connectionId,
                        requestKey,
                        candidates,
                        endpoint: e.endpoint,
                        conversationId: this._config.conversationId,
                      },
                    );
                    ry(
                      this._containerService,
                      Error(
                        "sandbox auth required but pending request missing",
                      ),
                      {
                        event: "sandbox_auth_flow_error",
                        conversationId: this._config.conversationId,
                        requestKey: requestKey != null ? requestKey : "",
                        requestMessageId: requestKey,
                        workspaceId: this._config.workspaceId,
                        projectId: this._config.projectId,
                        ret: J.errorInfo.ret,
                        logId:
                          (eh =
                            (em = J.errorInfo.logid) != null
                              ? em
                              : b == null
                                ? undefined
                                : b.logId) != null
                            ? eh
                            : "",
                        errorMessage:
                          "sandbox auth required but pending request missing",
                      },
                    );
                    if ((ev = e.onError) != null) {
                      ev.call(e, eg.Q.ErrOffline, J.message);
                    }
                    u = true;
                    break;
                  }
                  promiseHandler.resolve({
                    kind: "auth_required",
                    errorInfo: ea._(es._({}, J.errorInfo), {
                      logid:
                        (ei =
                          (en = J.errorInfo.logid) != null
                            ? en
                            : b == null
                              ? undefined
                              : b.logId) != null
                          ? ei
                          : "",
                    }),
                  });
                  break;
                }
                if (J.kind === "submit_failed") {
                  u = true;
                  _();
                  if (promiseHandler != null) {
                    promiseHandler.resolve({
                      kind: "failed",
                      code:
                        (ep = J.code) != null
                          ? ep
                          : eg.Q.ErrAgenticSubmitFailed,
                      msg: J.message,
                    });
                  }
                  break;
                }
                if (J.kind === "pass_through") {
                  K = false;
                  var z;
                  var X;
                  var Y;
                  var Z;
                  var $;
                  var ee;
                  var et;
                  var er;
                  var ei;
                  var en;
                  var eo;
                  var ed;
                  var ec;
                  var eu;
                  var e_;
                  var eh;
                  var em;
                  var ev;
                  var ep;
                  let ef;
                  const eI = U;
                  U = "";
                  if ((ef = e.onChunk) != null) {
                    ef.call(e, eI);
                  }
                  if (promiseHandler != null) {
                    promiseHandler.resolve({
                      kind: "ok",
                    });
                  }
                  continue;
                }
                if (J.kind === "pending") {
                  continue;
                }
              } catch (error) {
                L.V.info(
                  "[NuroEventStreamAdapterManager] Failed to parse first chunk",
                  JSON.stringify({
                    connectionId,
                    messageId: requestKey,
                    parseError:
                      error instanceof Error ? error.message : String(error),
                    chunkValue: JSON.stringify(H.value),
                    conversationId: this._config.conversationId,
                  }),
                );
              }
            }
            if ((Y = e.onChunk) != null) {
              Y.call(e, H.value);
            }
            if (promiseHandler != null) {
              promiseHandler.resolve({
                kind: "ok",
              });
            }
          }
          if (H.done) {
            L.V.info(
              "[NuroEventStreamAdapterManager] Stream reading completed",
              JSON.stringify({
                connectionId,
                messageId: requestKey,
                totalChunks: V + 1,
                conversationId: this._config.conversationId,
              }),
            );
            _();
            break;
          }
        }
        if (u) {
          _();
          N.cancel().catch(() => undefined);
          s.abort();
          if (w != null) {
            w.complete("cancelled_after_control_response");
          }
          return;
        }
        if ((D = e.onFinish) != null) {
          D.call(e);
        }
        if (w != null) {
          w.complete();
        }
        const eS = Date.now() - r;
        p = this._containerService;
        g = {
          duration: eS,
          endpoint: e.endpoint,
          connectionId,
          messageId: requestKey,
          logId: (P = b == null ? undefined : b.logId) != null ? P : "",
          conversationId: this._config.conversationId,
        };
        f = p.createInstance(
          new rS.d(rN, [
            ea._(es._({}, g), {
              status: "success",
            }),
          ]),
        );
        o.cQ(p, el.l).reportDevEvent(f.eventName, f.getEventParams());
      } catch (error) {
        let eC;
        let ek;
        let eT;
        let ey;
        let eA;
        const eb = Date.now() - r;
        _();
        if (w != null) {
          w.recordError(error);
        }
        L.V.info(
          "[NuroEventStreamAdapterManager] Fetch operation failed with error",
          JSON.stringify({
            connectionId,
            messageId: requestKey,
            errorName: error instanceof Error ? error.name : "Unknown",
            errorMessage:
              error instanceof Error ? error.message : String(error),
            duration: eb,
            conversationId: this._config.conversationId,
          }),
        );
        if (error instanceof Error) {
          if (error.name === "AbortError") {
            if ((ey = e.onCancel) != null) {
              ey.call(e, -1, "SSE connection cancelled");
            }
            if (promiseHandler != null) {
              promiseHandler.resolve({
                kind: "failed",
                code: eg.Q.ErrAbortError,
                msg: "SSE connection cancelled",
              });
            }
          } else {
            if ((eA = e.onError) != null) {
              eA.call(e, -1, error.message);
            }
            if (promiseHandler != null) {
              promiseHandler.resolve({
                kind: "failed",
                code: eg.Q.ErrOffline,
                msg: error.message,
              });
            }
          }
          this._reportService.reportDevError(
            "nuro_event_stream_adapter_manager_fetch_operation_failed",
            error,
            {
              conversationId: this._config.conversationId,
              connectionId,
              messageId: requestKey || "",
            },
          );
          eC = this._containerService;
          ek = {
            errorMessage: error.message,
            endpoint: e.endpoint,
            connectionId,
            messageId: requestKey,
            duration: eb,
            logId: "",
            conversationId: this._config.conversationId,
          };
          eT = eC.createInstance(
            new rS.d(rN, [
              ea._(es._({}, ek), {
                status: "error",
                errorType: "unknown",
              }),
            ]),
          );
          o.cQ(eC, el.l).reportDevEvent(eT.eventName, eT.getEventParams());
        }
      } finally {
        L.V.info(
          "[NuroEventStreamAdapterManager] Fetch operation completed, cleaning up connection",
          JSON.stringify({
            connectionId,
            messageId: requestKey,
            conversationId: this._config.conversationId,
          }),
        );
        this._connections.delete(connectionId);
        rK._globalConnections.delete(connectionId);
      }
    }).call(this);
    return connectionId;
  }
  _initializeChunkTimeout() {
    return n
      ._(function* () {
        const e = yield this._imcConfigService.getImcConfigByKey(
          rB.r1.AigcDataDebugConfig,
        );
        if (e == null ? undefined : e.timeout) {
          this._chunkTimeout = e.timeout;
        }
      })
      .call(this);
  }
  _getPendingRequest(e) {
    if (e) {
      return this._pendingRequests.get(e);
    }
  }
  _deletePendingRequest(e) {
    if (e) {
      this._pendingRequests.delete(e);
    }
  }
  _resolveResumeContextList(e) {
    if (e) {
      const t = this._config.resolveToolMessageById(e);
      return rO.M2(t);
    }
  }
  _getCommonRequestParams() {
    return n
      ._(function* () {
        const web_component_open_flag =
          (yield this._commercialLoaderService.getInstance()).getWebComponentOpenFlag();
        return {
          aid: "".concat(this._environmentService.appId),
          device_platform: "web",
          region: this._httpApiSettingService.userLocationInfo.region,
          webId: this._accountService.userProfile.webId,
          da_version: "3.1.3",
          web_version: "7.5.0",
          web_component_open_flag,
          commerce_with_input_video: "1",
        };
      })
      .call(this);
  }
  _appendRoiQuery(e) {
    const editType = this._config.projectId ? "canva" : "agent";
    const r = t$.wi({
      babiParam: rj.y({
        editType,
      }),
    });
    const i = "generate_id="
      .concat(r.generate_id, "&babi_param=")
      .concat(r.babi_param);
    return ""
      .concat(e)
      .concat(e.includes("?") ? "&" : "?")
      .concat(i);
  }
  _createFetchHeaders(url, t) {
    let r;
    return Object.fromEntries(
      Object.entries(
        (r = {
          url,
          headers: es._(
            {
              "Content-Type": "application/json",
              Accept: "text/event-stream",
            },
            t.headers ? Object.fromEntries(t.headers) : undefined,
            rD.Wo(),
          ),
        }.headers) != null
          ? r
          : {},
      )
        .filter((e) => {
          var [, t] = e;
          return t !== undefined;
        })
        .map((e) => {
          var [t, r] = e;
          return [t, String(r)];
        }),
    );
  }
  _storeDebugInfo(e, t, r) {
    const i = e.headers.get("x-tt-logid");
    if (!t.includes("stop_stream") && i && r) {
      const s = this._extractPendingRequestKeyCandidates(t, r)[0];
      if (s) {
        const a = rQ.b.getJson(rx.X.agenticConversationDebugInfoKey) || {};
        const n = {
          logId: i,
        };
        a[s] = n;
        rQ.b.setJson(rx.X.agenticConversationDebugInfoKey, a);
        return n;
      }
    }
  }
  _extractPendingRequestKeyCandidates(e, t) {
    if (!t) {
      return [];
    }
    try {
      const r = this._parseDirectMessageId(t);
      const i = this._parseAllMessageIds(t);
      const s = [r, ...i].filter((e) => !!e);
      if (e.includes("conversation")) {
        return s;
      }
      if (r) {
        return [r];
      }
      return [];
    } catch (error) {
      L.V.error("[NuroEventStreamAdapterManager] Failed to parse message ID", {
        error,
        endpoint: e,
        dataString: t,
      });
      return [];
    }
  }
  _resolvePendingRequest(e) {
    if (e.length === 0) {
      if (this._pendingRequests.size === 1) {
        const t = this._pendingRequests.keys().next().value;
        return {
          requestKey: t,
          promiseHandler: t ? this._getPendingRequest(t) : undefined,
          matchSource: t ? "onlyPendingRequest" : undefined,
        };
      }
      L.V.error(
        "[NuroEventStreamAdapterManager] Failed to resolve pending request: empty candidates",
        {
          pendingRequestsSize: this._pendingRequests.size,
          conversationId: this._config.conversationId,
        },
      );
      return {};
    }
    for (const r of e) {
      const promiseHandler = this._getPendingRequest(r);
      if (promiseHandler) {
        return {
          requestKey: r,
          promiseHandler,
          matchSource: "matchedByMessageId",
        };
      }
    }
    return {
      requestKey: e[0],
      promiseHandler: undefined,
    };
  }
  _parseAllMessageIds(e) {
    if (!e) {
      return [];
    }
    try {
      const t = JSON.parse(e);
      if (!(t == null ? undefined : t.messages)) {
        return [];
      }
      return t.messages
        .map((e) => {
          if (e == null) {
            return undefined;
          }
          return e.id;
        })
        .filter((e) => !!e)
        .reverse();
    } catch (error) {
      L.V.error(
        "[NuroEventStreamAdapterManager] Failed to parse conversation data",
        {
          error,
          dataString: e,
        },
      );
      return [];
    }
  }
  _parseDirectMessageId(e) {
    if (e) {
      try {
        let t;
        const r = JSON.parse(e);
        if ((t = r.message_id) != null) {
          return t;
        }
        return r.messageId;
      } catch (error) {
        L.V.error(
          "[NuroEventStreamAdapterManager] Failed to parse direct message ID",
          {
            error,
            dataString: e,
          },
        );
        return;
      }
    }
  }
  _getRequestBody(e) {
    const t =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const { resumeContextList, inferenceModelId, creationMode } = t;
    let e_data = e.data;
    const { projectId, workspaceId } = this._config;
    const d = !!projectId;
    const c = workspaceId !== undefined;
    const u = this._config.initConfig.agentOptModeEnabled === true;
    const l = this._config.initConfig.cloudAgentExperimentEnabled === true;
    const _ = !!(resumeContextList == null
      ? undefined
      : resumeContextList.length);
    const h = u || _ || l;
    const m = !projectId && e.endpoint.includes(rL);
    const v = !!inferenceModelId && m;
    const p = !!creationMode && m;
    const g = d || c || h || v || p;
    if (e.data && g) {
      try {
        const f = JSON.parse(e.data);
        const I = es._(
          {},
          f,
          d && {
            project_id: projectId,
          },
          c && {
            workspace_id: workspaceId,
          },
          h && {
            extra_info: rV.P(f.extra_info, {
              resumeContextList,
              agentOptModeEnabled: u,
              cloudAgentExperimentEnabled: l,
            }),
          },
        );
        if (f.action !== "resume_interrupt") {
          if (v) {
            I.inference_selection = {
              model_id: inferenceModelId,
            };
          }
          if (p) {
            I.creation_mode = creationMode;
          }
        }
        e_data = JSON.stringify(I);
      } catch (error) {
        L.V.error(
          "[NuroEventStreamAdapterManager] Failed to parse config.data for injection",
          {
            error,
            projectId,
            workspaceId,
            conversationId: this._config.conversationId,
          },
        );
        e_data = e.data;
      }
    }
    if (e_data != null) {
      return e_data;
    }
    return "";
  }
  constructor(e, t, r, i, s, a, n, o, d, c) {
    this._connections = e;
    this._pendingRequests = t;
    this._config = r;
    this._containerService = i;
    this._accountService = s;
    this._environmentService = a;
    this._httpApiSettingService = n;
    this._imcConfigService = o;
    this._commercialLoaderService = d;
    this._reportService = c;
    this._chunkTimeout = 60000;
    this._initializeChunkTimeout();
    rK._managerRegistry.set(this._config.conversationId, this);
  }
}
rK._eventStreamAdapterInstalled = false;
rK._managerRegistry = new Map();
rK._globalConnections = new Map();
rK = P.Cg(
  [
    P.Qj(3, j._),
    P.Qj(4, tB.c),
    P.Qj(5, tN.k),
    P.Qj(6, tQ.r),
    P.Qj(7, _.R),
    P.Qj(8, l.X),
    P.Qj(9, el.l),
    P.Sn("design:type", Function),
    P.Sn("design:paramtypes", [
      typeof Map === "undefined" ? Object : Map,
      typeof Map === "undefined" ? Object : Map,
      typeof NuroEventStreamAdapterConfig === "undefined"
        ? Object
        : NuroEventStreamAdapterConfig,
      j._ === undefined ? Object : j._,
      tB.c === undefined ? Object : tB.c,
      tN.k === undefined ? Object : tN.k,
      tQ.r === undefined ? Object : tQ.r,
      _.R === undefined ? Object : _.R,
      l.X === undefined ? Object : l.X,
      el.l === undefined ? Object : el.l,
    ]),
  ],
  rK,
);
function rX(e) {
  if (e == null ? undefined : e.type) {
    return e.type;
  }
  if (e == null ? undefined : e.properties) {
    return "object";
  }
  if (e == null ? undefined : e.items) {
    return "array";
  }
}
class rY {
  listTools(e) {
    return n
      ._(function* () {
        try {
          const { tools } = yield this.client.listTools();
          e(
            tools.map((e) => {
              var t;
              return new rd.NuroMCPToolItem(
                this.serviceName,
                e.name,
                (t = e.description) != null ? t : "",
                JSON.stringify(e.inputSchema),
              );
            }),
          );
        } catch (error) {
          L.V.error(
            "[NuroMCPClientAdapter] Failed to list tools for ".concat(
              this.serviceName,
              ":",
            ),
            error,
          );
          e([]);
        }
      })
      .call(this);
  }
  callTool(e, t, r, i) {
    L.V.info(
      "[NuroMCPClientAdapter] Calling tool "
        .concat(t, " with args: ")
        .concat(r),
    );
    this.client
      .callTool({
        name: t,
        arguments: (() => {
          try {
            if (r) {
              return JSON.parse(r);
            }
            return {};
          } catch (error) {
            L.V.error(
              "[NuroMCPClientAdapter] Failed to parse tool args: ".concat(r),
              error,
            );
            return {};
          }
        })(),
      })
      .then((e) => {
        L.V.info("[NuroMCPClientAdapter] Tool ".concat(t, " call succeeded"));
        i(JSON.stringify(e));
      })
      .catch((e) => {
        L.V.error("[NuroMCPClientAdapter] Tool ".concat(t, " call failed:"), e);
        i(
          JSON.stringify({
            content: [],
          }),
        );
      });
  }
  constructor(e, t) {
    var r;
    var i = (e) => {
      let t;
      o.tool(
        e.name,
        e.description,
        (t = e.inputSchema) && rX(t) === "object"
          ? (function e(t) {
              let r;
              let i;
              const s = new Set((i = t.required) != null ? i : []);
              const a = {};
              for (const [n, o] of (r = t.properties)
                ? r instanceof Map
                  ? Array.from(r.entries())
                  : Object.entries(r)
                : []) {
                let d = (function t(r) {
                  if (!r) {
                    return rz.bz();
                  }
                  switch (rX(r)) {
                    case "object":
                      n = rz.Ik(e(r));
                      break;
                    case "string":
                      var i;
                      var s;
                      var a;
                      var n;
                      let o;
                      let d;
                      let c;
                      const u = (o = r._enum) != null ? o : r.enum;
                      const l = (d = r._const) != null ? d : r.const;
                      if (
                        l !== undefined &&
                        ((c = typeof l),
                        l === null ||
                          c === "string" ||
                          c === "number" ||
                          c === "boolean" ||
                          c === "bigint" ||
                          c === "symbol")
                      ) {
                        n = rz.eu(l);
                      } else if (
                        (u == null ? undefined : u.length) &&
                        u.every((e) => typeof e === "string")
                      ) {
                        n = rz.k5(u);
                      } else {
                        n = rz.Yj();
                        if (r.minLength !== undefined) {
                          n = n.min(r.minLength);
                        }
                        if (r.maxLength !== undefined) {
                          n = n.max(r.maxLength);
                        }
                      }
                      break;
                    case "integer":
                      n = rz.ai().int();
                      if (r.minimum !== undefined) {
                        n = n.min(r.minimum);
                      }
                      if (r.maximum !== undefined) {
                        n = n.max(r.maximum);
                      }
                      break;
                    case "number":
                      n = rz.ai();
                      if (r.minimum !== undefined) {
                        n = n.min(r.minimum);
                      }
                      if (r.maximum !== undefined) {
                        n = n.max(r.maximum);
                      }
                      break;
                    case "boolean":
                      n = rz.zM();
                      break;
                    case "array":
                      n = rz.YO(t(r.items));
                      if (r.minItems !== undefined) {
                        n = n.min(r.minItems);
                      }
                      if (r.maxItems !== undefined) {
                        n = n.max(r.maxItems);
                      }
                      break;
                    default:
                      n = rz.bz();
                  }
                  i = n;
                  if (r.description) {
                    i = i.describe(r.description);
                  }
                  if (
                    (a = (s = r._default) != null ? s : r.default) !== undefined
                  ) {
                    i = i.default(a);
                  }
                  return i;
                })(o);
                if (!s.has(n)) {
                  d = d.optional();
                }
                a[n] = d;
              }
              return a;
            })(t)
          : {},
        (t) => {
          L.V.info(
            "[MCP Server "
              .concat(r.serviceName, "] Received call to ")
              .concat(e.name, " with params:"),
            t,
          );
          return {
            content: [],
          };
        },
      );
    };
    var { name, version, tools } = e;
    this.serviceName = name;
    var o = new rJ._({
      name,
      version,
    });
    var d = tools.filter((e) => t.includes(e.name));
    for (var c of d) {
      r = this;
      i(c);
    }
    var [u, l] = rW.W.createLinkedPair();
    o.connect(l);
    this.client = new rH.K({
      name,
      version,
    });
    this.client.connect(u);
    L.V.info(
      "[NuroMCPClientAdapter] Created MCP server for "
        .concat(name, " with ")
        .concat(d.length, " supported tools out of ")
        .concat(tools.length, " total tools"),
    );
  }
}
class rZ extends rd.SSETransport {
  sendMessages() {
    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) {
      t[r] = arguments[r];
    }
    const [i] = t;
    for (var s of i) {
      let a;
      var n;
      const o = (e) => {
        if (!(e == null ? undefined : e.fileId) || !e.material) {
          return "continue";
        }
        let t;
        const r =
          (t = s.files) == null ? undefined : t.find((t) => t.id === e.fileId);
        const { material } = e;
        n._syncMaterialReference(r, material);
      };
      if (s instanceof rd.NuroUserMessage) {
        for (const d of [
          ...((a = s.referenceInfo) != null ? a : []).map((e) => e.mention),
          s.mention,
        ]) {
          n = this;
          o(d);
        }
      }
    }
    super.sendMessages(...t);
  }
  _syncMaterialReference(e, t) {
    if (e && e.type === t.materialType) {
      switch (e.type) {
        case rd.NuroFileType.image:
          if (t.imageInfo && e.uri) {
            t.imageInfo.imageUri = e.uri;
          }
          break;
        case rd.NuroFileType.video:
          if (t.videoInfo && e.vid) {
            t.videoInfo.vid = e.vid;
          }
          break;
        case rd.NuroFileType.audio:
          if (t.audioInfo && e.vid) {
            t.audioInfo.vid = e.vid;
          }
      }
    }
  }
}
function r$(e) {
  return typeof e === "object" && e !== null;
}
function r0(e, t) {
  const r = e[t];
  if (typeof r === "string" && r) {
    return r;
  }
}
function r1(data) {
  try {
    const t = JSON.parse(data);
    if (r$(t)) {
      return t;
    }
    return undefined;
  } catch (e) {
    return;
  }
}
function r2(e, t, r) {
  let i;
  let s;
  let a;
  let n;
  const o = ((e, t) => {
    if (e.event !== "delta") {
      return {
        event: e,
      };
    }
    const r = r1(e.data);
    if (!r) {
      return {
        event: e,
      };
    }
    const i = r0(r, "message_id");
    const sdkPath = r0(r, "path");
    if (!sdkPath) {
      return {
        event: e,
      };
    }
    const a = ((e) => {
      const [, t, r] = e.split("/");
      if (t === "messages" && r) {
        return r;
      }
    })(sdkPath);
    if (a) {
      return {
        event: e,
        messageId: a,
        sdkPath,
      };
    }
    if (
      !i ||
      !(sdkPath === "/message" || sdkPath.startsWith("/message/")) ||
      !((e, t) => {
        if (e.messageArray.has(t)) {
          return true;
        }
        const { currentChatMessage } = e;
        return (
          !!currentChatMessage &&
          r0(currentChatMessage, "id") === t &&
          (e.messageArray.set(t, currentChatMessage), true)
        );
      })(t, i)
    ) {
      return {
        event: e,
      };
    }
    const n =
      sdkPath === "/message"
        ? "/messages/".concat(i)
        : "/messages/".concat(i).concat(sdkPath.slice(8));
    return {
      event: ea._(es._({}, e), {
        data: JSON.stringify(
          ea._(es._({}, r), {
            path: n,
          }),
        ),
      }),
      messageId: i,
      sdkPath: n,
    };
  })(t, e);
  const d =
    o.messageId &&
    o.sdkPath &&
    ((e) => {
      const [, t, r, i] = e.split("/");
      return t === "messages" && !!r && i === "tool_calls";
    })(o.sdkPath)
      ? o.messageId
      : undefined;
  const { event } = o;
  ((n = r != null ? r : e.dreaminaOriginalOnSSEEvent) != null
    ? n
    : e.onSSEEvent.bind(e))(event.id, event.event, event.data);
  ((e, t) => {
    let r;
    let i;
    const s = ((e) => {
      const t = r1(e.data);
      if (t) {
        const r = r0(t, "conversation_id");
        if (r) {
          return r;
        }
        const { metadata } = t;
        if (r$(metadata)) {
          return r0(metadata, "conversation_id");
        }
        return undefined;
      }
    })(t);
    const a = ((e) => {
      const t = r1(e.data);
      if (t) {
        if (e.event === "delta") {
          const { value } = t;
          if (typeof value !== "string") {
            return;
          }
          try {
            return JSON.parse(value).id;
          } catch (e) {
            return;
          }
        }
        if (e.event === "message") {
          const { metadata } = t;
          if (r$(metadata)) {
            return r0(metadata, "tool_call_id");
          }
          return undefined;
        }
      }
    })(t);
    if (s && a) {
      const n =
        (i = e._conversationManager) == null || (r = i.conversation) == null
          ? undefined
          : r.messages;
      if (n) {
        for (const o of n) {
          if (o instanceof rd.NuroToolCallMessage && o.toolCallId === a) {
            if (!o.metadata) {
              o.metadata = {};
            }
            if (!o.metadata.conversation_id) {
              o.metadata.conversation_id = s;
            }
          }
        }
      }
    }
  })(e, t);
  if (
    d &&
    (a =
      (s = e._conversationManager) == null || (i = s.conversation) == null
        ? undefined
        : i.messages)
  ) {
    a.forEach((e) => {
      if ((r$(e) ? r0(e, "_rawId") : undefined) === d) {
        if (e instanceof rd.NuroReasoningMessage && !e.isFinalStatus()) {
          return void e.setMsgStatus(
            rd.NuroReasoningMessageStatus.finished_successfully,
          );
        }
        if (e instanceof rd.NuroAssistantMessage && !e.isFinalStatus()) {
          e.setMsgStatus(rd.NuroAssistantMessageStatus.finished_successfully);
        }
      }
    });
  }
  if (event.event === "message") {
    ((e) => {
      const { currentChatMessage } = e;
      if (currentChatMessage) {
        const r = r0(currentChatMessage, "id");
        if (r) {
          e.messageArray.set(r, currentChatMessage);
        }
      }
    })(e);
  }
}
function r3(e) {
  let t;
  const r =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const i =
    (t = e.dreaminaOriginalOnSSEEvent) != null ? t : e.onSSEEvent.bind(e);
  e.dreaminaOriginalOnSSEEvent = i;
  e.onSSEEvent = (id_1, event, data) => {
    var n;
    var o = {
      id: id_1,
      event,
      data,
    };
    if ((n = r.onSSEEvent) != null) {
      n.call(r, o);
    }
    if (r.dispatchParsedEventsToSDK !== false) {
      r2(e, o, i);
    }
  };
}
class r4 extends rv.jG {
  get isDisconnected() {
    return this._isDisconnected;
  }
  get conversationId() {
    return this._conversationManager.conversation.conversationId;
  }
  get conversationManager() {
    return this._conversationManager;
  }
  get lastNuroTaskId() {
    const { tasks } = this._conversationManager.conversation;
    const t = tasks[tasks.length - 1];
    if (t == null) {
      return undefined;
    }
    return t.taskId;
  }
  connect() {
    if (!this._isConnected) {
      const { endpoint, headers } = this._initConfig;
      const r = new rZ(
        endpoint,
        headers ? new Map(Object.entries(headers)) : undefined,
      );
      r3(r);
      this._conversationManager.connect(r);
      this._isConnected = true;
    }
  }
  sendUserMessage(e) {
    let t;
    const r =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const { projectId, workspaceId } = this._initConfig;
    const a = {
      kind: "submit_user_message",
      requestKey: e.id,
      meta: {
        inferenceModelId: r.inferenceModelId,
        creationMode: r.creationMode,
        conversationId: this.conversationId,
        requestMessageId: (t = r.requestMessageId) != null ? t : e.id,
        submitId: r.submitId,
        workspaceId,
        projectId,
      },
      execute: () => {
        this._conversationManager.sendUserMessage(e);
      },
    };
    return this._outboundCoordinator.send(a);
  }
  sendToolResultMessage(e, t) {
    let r;
    const i =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const { projectId, workspaceId } = this._initConfig;
    const n = {
      kind: "send_tool_result",
      requestKey: e.id,
      meta: {
        conversationId: this.conversationId,
        requestMessageId: (r = i.requestMessageId) != null ? r : e.id,
        submitId: i.submitId,
        workspaceId,
        projectId,
      },
      execute: () => {
        this._conversationManager.sendToolResultMessage(e, t);
      },
    };
    return this._outboundCoordinator.send(n);
  }
  interruptResponse() {
    this._conversationManager.interruptResponse();
    this._cancelRunningTasks();
  }
  resumeInterrupt(e) {
    return n
      ._(function* () {
        try {
          yield this._conversationManager.resumeInterrupt(e);
          return d.nj();
        } catch (error) {
          let t;
          L.V.error(
            "[NuroConversation] resumeInterrupt failed",
            (t = error == null ? undefined : error.message) != null
              ? t
              : "unknown error",
          );
          return d.xz(eg.Q.ErrClientCommon, "resumeInterrupt failed");
        }
      })
      .call(this);
  }
  decodeConversationFromJSONString(e, t) {
    this._conversationManager.decodeConversationFromJSONString(e, t);
  }
  applyServerConversationId(e) {
    if (e && !this._initConfig.agentOptModeEnabled) {
      const t = this.conversationId;
      if (t !== e) {
        L.V.info(
          "[NuroConversation] conversation rename: "
            .concat(t, " -> ")
            .concat(e),
        );
        this._eventStreamAdapterManager.updateConversationId(t, e);
        this._conversationManager.conversation.conversationId = e;
      }
    }
  }
  resumeMessageIfNeed(e) {
    const t = (r) =>
      n
        ._(function* () {
          try {
            const i = yield this._resumeMessageIfNeed(e);
            if (i.ok) {
              return i;
            }
            if (r < 5) {
              const s = 1000 * 2 ** (r - 1);
              L.V.warn(
                "[NuroConversation] resumeMessageIfNeed failed, retrying in "
                  .concat(s, "ms (attempt ")
                  .concat(r, "/")
                  .concat(5, ")"),
                {
                  messageId: e,
                  error: i.msg,
                },
              );
              yield new Promise((resolve) => setTimeout(resolve, s));
              return yield t(r + 1);
            }
            L.V.error(
              `[NuroConversation] resumeMessageIfNeed failed after ${5} attempts`,
              {
                messageId: e,
                error: i.msg,
              },
            );
            return i;
          } catch (error) {
            const a = error instanceof Error ? error.message : String(error);
            if (r < 5) {
              const n = 1000 * 2 ** (r - 1);
              L.V.warn(
                "[NuroConversation] resumeMessageIfNeed threw error, retrying in "
                  .concat(n, "ms (attempt ")
                  .concat(r, "/")
                  .concat(5, ")"),
                {
                  messageId: e,
                  error: a,
                },
              );
              yield new Promise((resolve) => setTimeout(resolve, n));
              return t(r + 1);
            }
            L.V.error(
              `[NuroConversation] resumeMessageIfNeed threw error after ${5} attempts`,
              {
                messageId: e,
                error: a,
              },
            );
            return d.xz(eg.Q.ErrOffline, a);
          }
        })
        .call(this);
    return t(1);
  }
  disconnect() {
    if (!this._isDisconnected) {
      for (const e of this._connections.values()) {
        e.abort();
      }
      this._connections.clear();
      for (const t of this._pendingRequests.keys()) {
        this._resolvePendingRequest(
          t,
          d.xz(eg.Q.ErrAbortError, "Connection disconnected"),
        );
      }
      this._conversationManager.interruptResponse();
      this._unregisterEventStreamManager();
      this._isDisconnected = true;
    }
  }
  dispose() {
    this.disconnect();
    this._unregisterEventStreamManager();
    this._onNuroTaskUpdate.dispose();
    this._onConversationStateUpdate.dispose();
    this._onConversationSummaryUpdate.dispose();
    this._onTitleGeneration.dispose();
    this._onInterruptApproval.dispose();
    this._onContinueAvailableChange.dispose();
    this._onTurnTitleUpdate.dispose();
    this._onTurnUuidUpdate.dispose();
    this._onSugResultUpdate.dispose();
    this._onTodoPlanUpdate.dispose();
    super.dispose();
  }
  _unregisterEventStreamManager() {
    if (!this._isManagerUnregistered) {
      rK.unregisterManager(
        this.conversationId,
        this._eventStreamAdapterManager,
      );
      this._isManagerUnregistered = true;
    }
  }
  _registerMCPServers() {
    const e = ec.getAllToolServer();
    const t = {};
    const r = this._initConfig.mcpConfig || [];
    const i = r.reduce((acc, item) => {
      acc[item.serviceName] = item.supportedTools;
      return acc;
    }, {});
    const s = r.map((e) => e.serviceName);
    for (const a of e) {
      if (s.includes(a.name)) {
        if (a) {
          for (const n of a.tools) {
            if (n.name && r_[n.name]) {
              n.description = r_[n.name]();
            }
          }
        }
        t[a.name] = new rY(a, i[a.name]);
      }
    }
    Object.entries(t).forEach((e) => {
      var [t, r] = e;
      this._registerMCPServer(t, r);
    });
    const length = Object.keys(t).length;
    L.V.info(
      "[NuroConversation] Register "
        .concat(length, " supported MCP servers out of ")
        .concat(e.length, " available"),
    );
  }
  _enableMCPTools() {
    this._conversationManager.enableMCPTools();
  }
  _getPendingRequest(e) {
    if (e) {
      return this._pendingRequests.get(e);
    }
  }
  _deletePendingRequest(e) {
    if (e) {
      this._pendingRequests.delete(e);
    }
  }
  _resolvePendingRequest(e, t) {
    const r = this._getPendingRequest(e);
    if (r) {
      r.resolve(t);
      this._deletePendingRequest(e);
    }
  }
  _setupTOSFileUploadAdapter() {
    rd.TOSFileUploadAdapter.upload = (e) => {
      var t = rd.NuroUtils.randomUUIDString();
      var { nuroFile, localFile, onFinish, onError } = e;
      n._(function* () {
        try {
          const { type } = nuroFile;
          if (
            (type === rd.NuroFileType.video ||
              type === rd.NuroFileType.audio) &&
            nuroFile.vid
          ) {
            if (onFinish != null) {
              onFinish();
            }
            return;
          }
          const file = localFile.localFileObject;
          if (!file) {
            if (onError != null) {
              onError(
                -1,
                "[NuroConversation] TOSFileUploadAdapter.upload: Invalid file object",
              );
            }
            return;
          }
          const n = file.type.startsWith("image/");
          const o = file.type.startsWith("video/");
          const d = file.type.startsWith("audio/");
          if (!n && !o && !d) {
            if (onError != null) {
              onError(
                -1,
                "[NuroConversation] TOSFileUploadAdapter.upload: Only image, video or audio files are supported",
              );
            }
            return;
          }
          if (n) {
            const c = yield this._uploadService.uploadImage({
              file,
            });
            if (!c.ok) {
              if (onError != null) {
                onError(
                  -1,
                  "[NuroConversation] TOSFileUploadAdapter.upload: ".concat(
                    c.msg || "Upload failed",
                  ),
                );
              }
              return;
            }
            nuroFile.uri = c.value.uri;
          } else {
            const u = yield this._uploadService.uploadVideo({
              file,
            });
            if (!u.ok) {
              if (onError != null) {
                onError(
                  -1,
                  "[NuroConversation] TOSFileUploadAdapter.upload: ".concat(
                    u.msg || "Upload failed",
                  ),
                );
              }
              return;
            }
            nuroFile.vid = u.value.vid;
          }
          if (onFinish != null) {
            onFinish();
          }
        } catch (error) {
          const l = error instanceof Error ? error.message : String(error);
          if (onError != null) {
            onError(
              -1,
              "[NuroConversation] TOSFileUploadAdapter.upload: ".concat(
                l || "Unknown upload error",
              ),
            );
          }
        }
      }).call(this);
      return t;
    };
    rd.TOSFileUploadAdapter.cancel = (e) => {
      L.V.warn(
        "[NuroConversation] Upload task ".concat(
          e,
          " cancel requested, but upload service doesn't support cancellation",
        ),
      );
    };
  }
  _resumeMessageIfNeed(e) {
    return new Promise((resolve) => {
      this._pendingRequests.set(e, {
        resolve: (e) => {
          if (e && typeof e === "object" && "ok" in e) {
            resolve(e);
          } else if (e.kind === "ok") {
            resolve(d.nj());
          } else if (e.kind === "failed") {
            resolve(d.xz(e.code, e.msg, e.errorInfo));
          } else {
            resolve(
              d.xz(
                eg.Q.ErrClientCommon,
                "Unexpected auth-required during resume",
              ),
            );
          }
        },
      });
      this._conversationManager.resumeMessageIfNeed();
    });
  }
  _cancelRunningTasks() {
    const e = [];
    const { tasks } = this._conversationManager.conversation;
    for (const r of tasks) {
      if (r.taskStatus === rd.NuroTaskStatus.running) {
        r.taskStatus = rd.NuroTaskStatus.cancelled;
        const i = new rd.NuroTaskOut(r, rd.NuroTaskOp.update);
        e.push(i);
      }
    }
    if (e.length !== 0) {
      this._handleTaskUpdate(e);
    }
  }
  _ensureMessageConversationId(e) {
    if (!e.metadata) {
      e.metadata = {};
    }
    if (!e.metadata.conversation_id) {
      e.metadata.conversation_id = this.conversationId;
    }
  }
  _resolveToolMessageById(e) {
    const t = this._conversationManager.conversation.messages.find(
      (t) => t.id === e,
    );
    if (t instanceof rd.NuroToolCallMessage) {
      return t;
    }
  }
  _handleTaskUpdate(e) {
    for (const t of e) {
      const { task, taskOp, messages } = t;
      for (const a of messages) {
        this._ensureMessageConversationId(a.message);
      }
      for (const n of [
        ...task.promptMessages,
        ...task.middlewareMessages,
        ...task.artifactMessages,
        ...task.shieldMessages,
      ]) {
        this._ensureMessageConversationId(n);
      }
      const changeMsg = messages.map((e) => e.message);
      const changeMsgOp = messages.map((e) => e.messageOp);
      this._onNuroTaskUpdate.fire({
        task,
        op: taskOp,
        changeMsg,
        changeMsgOp,
      });
    }
  }
  _registerEventListeners() {
    this._conversationManager.conversation.addStateUpdateListener((e) => {
      this._onConversationStateUpdate.fire(e);
    });
    this._conversationManager.conversation.addTaskUpdateListener(
      this._handleTaskUpdate.bind(this),
    );
    this._conversationManager.conversation.addSystemDataListener((e) => {
      var t;
      var r;
      var i;
      var s;
      var a;
      var n;
      var o;
      var d;
      var c;
      var e_type = e.type;
      if (e_type === "conversation_created") {
        this.applyServerConversationId(
          (a = e.conversation_id) != null ? a : "",
        );
      } else if (e_type === "stream_start") {
        if (e.turn_uuid && e.request_message_id) {
          this._onTurnUuidUpdate.fire(e.request_message_id, e.turn_uuid);
        }
      } else if (e_type === "summary") {
        this._onConversationSummaryUpdate.fire(
          (n = e.content) != null ? n : "",
        );
      } else if (e_type === "title_generation") {
        this._onTitleGeneration.fire((o = e.title) != null ? o : "");
      } else if (e_type === "interrupt_approval") {
        this._onInterruptApproval.fire({
          content: (d = e.content) != null ? d : "",
        });
      } else if (e_type === "show_continue") {
        this._onContinueAvailableChange.fire({
          available:
            !rp(e) ||
            (t =
              (r =
                (i =
                  (s = rg(e.show_continue)) != null ? s : rg(e.showContinue)) !=
                null
                  ? i
                  : rg(e.value)) != null
                ? r
                : ((e) => {
                    const t = rg(e);
                    if (t !== undefined) {
                      return t;
                    }
                    if (typeof e === "string") {
                      try {
                        let r;
                        const i = JSON.parse(e);
                        if (!rp(i)) {
                          return;
                        }
                        if ((r = rg(i.show_continue)) != null) {
                          return r;
                        }
                        return rg(i.showContinue);
                      } catch (e) {
                        return;
                      }
                    }
                  })(e.content)) == null ||
            t,
        });
      } else if (e_type === "turn_title") {
        this._onTurnTitleUpdate.fire(
          (c = e.content) != null ? c : "",
          e.turn_uuid,
        );
      } else if (e_type === "sug_result") {
        this._onSugResultUpdate.fire(e.content || "[]");
      } else if (e_type === "todo_plan") {
        try {
          var l = ((e) => {
            if (e) {
              const t = JSON.parse(e);
              if (rI(t) && Array.isArray(t.plan)) {
                const plan = [];
                for (const i of t.plan) {
                  if (!rI(i) || typeof i.step !== "string") {
                    return;
                  }
                  let s;
                  const step = i.step.trim();
                  const n =
                    (s = i.status) === "complete"
                      ? "completed"
                      : typeof s === "string" && rf.has(s)
                        ? s
                        : undefined;
                  if (!step || !n) {
                    return;
                  }
                  plan.push({
                    step,
                    status: n,
                  });
                }
                if (plan.length !== 0) {
                  const explanation =
                    typeof t.explanation === "string"
                      ? t.explanation.trim()
                      : undefined;
                  return ea._(
                    es._(
                      {},
                      explanation
                        ? {
                            explanation,
                          }
                        : {},
                    ),
                    {
                      plan,
                    },
                  );
                }
              }
            }
          })(e.content);
          if (l) {
            this._onTodoPlanUpdate.fire(l);
          }
        } catch (error) {
          L.V.error(
            "[NuroConversation] parse todo_plan system event failed",
            error,
          );
        }
      }
    });
  }
  _registerMCPServer(e, t) {
    let r;
    const i = new rd.NuroMCPServerConfig(e, t);
    if ((r = this._conversationManager.mcpManager) != null) {
      r.registerServer(i);
    }
  }
  constructor(e, t, r) {
    super();
    this._initConfig = e;
    this._containerService = t;
    this._uploadService = r;
    this._connections = new Map();
    this._pendingRequests = new Map();
    this._onNuroTaskUpdate = new q.v();
    this._onConversationStateUpdate = new q.v();
    this._onConversationSummaryUpdate = new q.v();
    this._onTitleGeneration = new q.v();
    this._onInterruptApproval = new q.v();
    this._onContinueAvailableChange = new q.v();
    this._onTurnTitleUpdate = new q.v();
    this._onTurnUuidUpdate = new q.v();
    this._onSugResultUpdate = new q.v();
    this._onTodoPlanUpdate = new q.v();
    this._isConnected = false;
    this._isDisconnected = false;
    this._isManagerUnregistered = false;
    this.onNuroTaskUpdate = this._onNuroTaskUpdate.event;
    this.onConversationStateUpdate = this._onConversationStateUpdate.event;
    this.onConversationSummaryUpdate = this._onConversationSummaryUpdate.event;
    this.onTitleGeneration = this._onTitleGeneration.event;
    this.onInterruptApproval = this._onInterruptApproval.event;
    this.onContinueAvailableChange = this._onContinueAvailableChange.event;
    this.onTurnTitleUpdate = this._onTurnTitleUpdate.event;
    this.onTurnUuidUpdate = this._onTurnUuidUpdate.event;
    this.onSugResultUpdate = this._onSugResultUpdate.event;
    this.onTodoPlanUpdate = this._onTodoPlanUpdate.event;
    this._setupEventStreamAdapter = () => {
      this._eventStreamAdapterManager.setupEventStreamAdapter();
    };
    var { conversationId, projectId, workspaceId } = this._initConfig;
    this._conversationManager = new rd.NuroConversationManager(conversationId);
    this._conversationManager.mcpManager = new rd.NuroMCPManager();
    this._conversationManager.conversation.taskChecker =
      new rd.NuroTaskChecker();
    this._eventStreamAdapterManager = this._containerService.createInstance(
      rK,
      this._connections,
      this._pendingRequests,
      {
        initConfig: this._initConfig,
        conversationId: this.conversationId,
        projectId,
        workspaceId,
        resolveToolMessageById: (e) => this._resolveToolMessageById(e),
      },
    );
    this._outboundCoordinator = this._containerService.createInstance(
      rP,
      this._pendingRequests,
    );
    this._setupEventStreamAdapter();
    this._setupTOSFileUploadAdapter();
    this._registerMCPServers();
    this._enableMCPTools();
    this._registerEventListeners();
  }
}
r4 = P.Cg(
  [
    P.Qj(1, j._),
    P.Qj(2, b.H),
    P.Sn("design:type", Function),
    P.Sn("design:paramtypes", [
      typeof NuroSDKInitConfig === "undefined" ? Object : NuroSDKInitConfig,
      j._ === undefined ? Object : j._,
      b.H === undefined ? Object : b.H,
    ]),
  ],
  r4,
);
rd.NuroSetting.version = "3.0.0";
rd.NuroSetting.shieldToolCall = ["handoff_to_planner", "handoff_to_host"];
rd.NuroSetting.canvasSettings = {
  startNode: ec.openNewCanvasName,
  endNode: ec.closeCanvasName,
  nodes: [
    ec.text2imageV3Name,
    ec.image2imageV3Name,
    ec.image2videoV3Name,
    ec.text2videoV3Name,
    ec.start2EndVideoV3Name,
    ec.ref2ImageV3Name,
  ],
};
B.v("NuroSetting", rd.NuroSetting);
class r8 {
  createConversation(e, t, projectId, workspaceId) {
    const s = !!projectId;
    const a = s ? rm : rh;
    const endpoint = ((e) => {
      var t = tX.R();
      if (!t) {
        return e;
      }
      var r = e.includes("?") ? "&" : "?";
      return "".concat(e).concat(r, "os=").concat(t);
    })(
      this._httpApiSettingService.getRequestURL({
        domainType: tQ.X.DEFAULT,
        path: a.CREATE_CONVERSATION,
      }),
    );
    const o = {
      mcpConfig,
      endpoint,
      reconnectEndpoint: this._httpApiSettingService.getRequestURL({
        domainType: tQ.X.DEFAULT,
        path: a.RESUME,
      }),
      interruptEndpoint: this._httpApiSettingService.getRequestURL({
        domainType: tQ.X.DEFAULT,
        path: a.STOP_STREAM,
      }),
      conversationId: e,
      projectId,
      workspaceId,
      agentOptModeEnabled: !s && workspaceId !== undefined && r5.i(),
      cloudAgentExperimentEnabled: !s && rc.u,
      headers: this._getNuroSDKHeaders(s ? {} : t),
    };
    const d = this._containerService.createInstance(r4, o);
    this._conversationCache.set(d.conversationId, d);
    return d;
  }
  getOrCreateConversation(e, t, r, i) {
    const s = e ? this._conversationCache.get(e) : undefined;
    return s || this.createConversation(e, t, r, i);
  }
  getConversation(e) {
    return this._conversationCache.get(e);
  }
  disconnectAllConversations() {
    for (const e of this._conversationCache.values()) {
      if (!e.isDisconnected) {
        e.disconnect();
      }
    }
    this._conversationCache.clear();
  }
  _getNuroSDKHeaders(e) {
    const t = es._({}, ru);
    if (e == null ? undefined : e.scene) {
      t.scene = e.scene;
    }
    return t;
  }
  constructor(e, t) {
    this._containerService = e;
    this._httpApiSettingService = t;
    this._conversationCache = new Map();
  }
}
r8 = P.Cg(
  [
    P.Qj(0, j._),
    P.Qj(1, tQ.r),
    P.Sn("design:type", Function),
    P.Sn("design:paramtypes", [
      j._ === undefined ? Object : j._,
      tQ.r === undefined ? Object : tQ.r,
    ]),
  ],
  r8,
);
const r6 = require("./module-OVn.js");
const r7 = require("rp");
const r9 = require("AI");
const ie = require("TK");
const it = require("rr");
class ir extends rv.jG {
  setConversationManager(e) {
    if (this._conversationManager !== e) {
      this._unhookSystemDataListener();
      this._conversationManager = e;
      this._transport.setConversationManager(e);
      this._systemDataToken = e.conversation.addSystemDataListener((e) => {
        this._onSystemData.fire(e);
      });
    }
  }
  appendChunk(e) {
    const _transport = this._transport;
    _transport.currentChunked = ""
      .concat(_transport.currentChunked || "")
      .concat(e);
    _transport.flushChuck(false);
  }
  dispatchEvent(e) {
    r2(this._transport, e);
  }
  finish() {
    this._transport.flushChuck(true);
  }
  reset() {
    let e;
    e = this._transport;
    e.currentChunked = "";
    e.currentChatMessage = undefined;
    e.messageArray.clear();
  }
  dispose() {
    this._unhookSystemDataListener();
    this._onSystemData.dispose();
    this._onSSEEvent.dispose();
    super.dispose();
  }
  _hookParsedSSEEvent() {
    r3(this._transport, {
      dispatchParsedEventsToSDK: this._dispatchParsedEventsToSDK,
      onSSEEvent: (e) => this._onSSEEvent.fire(e),
    });
  }
  _unhookSystemDataListener() {
    if (this._conversationManager && this._systemDataToken) {
      this._conversationManager.conversation.removeSystemDataListener(
        this._systemDataToken,
      );
    }
    this._systemDataToken = undefined;
  }
  constructor(e = true) {
    super();
    this._dispatchParsedEventsToSDK = e;
    this._onSystemData = new q.v();
    this._onSSEEvent = new q.v();
    this.onSystemData = this._onSystemData.event;
    this.onSSEEvent = this._onSSEEvent.event;
    this._transport = new rd.SSETransport("", new Map());
    this._hookParsedSSEEvent();
  }
}
const ii = require("Br");
const is = require("BL");
const ia = require("Yh");
const io = [ii.yD, ii.jo];
function id(e) {
  const t = ia.zu(e.author) ? e.author : undefined;
  return ia.v8(t, "role") === "system" && ia.v8(t, "name") === "compact";
}
function ic(types, t) {
  const r = is.f(t);
  if ((r == null ? undefined : r[ii.yD]) !== undefined) {
    types.add(ii.yD);
  }
  if ((r == null ? undefined : r[ii.jo]) !== undefined) {
    types.add(ii.jo);
  }
}
function iu(types, t) {
  if (t === ii.yD || t === ii.jo) {
    types.add(t);
  }
}
function il(e) {
  return typeof e === "object" && e !== null;
}
function i_(e, t) {
  const r = e[t];
  if (typeof r === "string" && r) {
    return r;
  }
}
function ih(e) {
  const { user_input } = e;
  if (Array.isArray(user_input)) {
    return user_input.filter(il);
  }
  return [];
}
function im(e) {
  for (const t of ih(e)) {
    const r = i_(t, "id");
    if (r) {
      return r;
    }
  }
}
function iv(initialMessageId, t) {
  let r;
  const i = t ? i_(t, "trigger_message_id") : undefined;
  const s = t ? i_(t, "content") : undefined;
  if (s) {
    try {
      const a = JSON.parse(s);
      r = il(a) ? i_(a, "trigger_message_id") : undefined;
    } catch (e) {
      r = undefined;
    }
  }
  const n = i != null ? i : r;
  return !n || !initialMessageId || n === initialMessageId;
}
class ip extends rv.jG {
  get status() {
    return this._status;
  }
  get enabled() {
    return r5.i();
  }
  getSession(e) {
    let t;
    return {
      generation: this._sessionGeneration,
      workspaceGeneration:
        (t = this._workspaceGenerations.get(e)) != null ? t : 0,
    };
  }
  acquire(e, t) {
    if (this.enabled && !this._disposed) {
      let r;
      const workspaceGeneration =
        (r = this._workspaceGenerations.get(e)) != null ? r : 0;
      if (
        !t ||
        (t.generation === this._sessionGeneration &&
          t.workspaceGeneration === workspaceGeneration)
      ) {
        const s = this._nextLeaseId++;
        const generation = this._sessionGeneration;
        let n = false;
        const o = this;
        let d = this._leaseIdsByWorkspaceId.get(e);
        if (!d) {
          d = new Set();
          this._leaseIdsByWorkspaceId.set(e, d);
        }
        d.add(s);
        if (this._workspaceService.data.selectedWorkspaceId === e) {
          this._start(e);
        }
        return {
          get valid() {
            let t;
            return (
              !n &&
              generation === o._sessionGeneration &&
              workspaceGeneration ===
                ((t = o._workspaceGenerations.get(e)) != null ? t : 0)
            );
          },
          session: {
            generation,
            workspaceGeneration,
          },
          get isCurrentWorkspace() {
            return o._workspaceService.data.selectedWorkspaceId === e;
          },
          release: function () {
            const { closeCurrentStream = false } =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : {};
            if (!n && generation === o._sessionGeneration) {
              n = true;
              const r = o._leaseIdsByWorkspaceId.get(e);
              if (r != null) {
                r.delete(s);
              }
              if ((r == null ? undefined : r.size) === 0) {
                o._leaseIdsByWorkspaceId.delete(e);
                if (closeCurrentStream && o._workspaceId === e) {
                  o.stop();
                }
              }
            }
          },
        };
      }
    }
  }
  _start(e) {
    if (this._workspaceId !== e) {
      this._resetConnectionState(e);
    }
    if (
      !this._connectLoopPromise ||
      this._status === "closed" ||
      this._status === "idle"
    ) {
      const t = this._connectionGeneration;
      var r = this._connectLoop(t).finally(() => {
        if (this._connectLoopPromise === r) {
          this._connectLoopPromise = undefined;
        }
      });
      this._connectLoopPromise = r;
    }
  }
  stop() {
    let e;
    this._connectionGeneration += 1;
    this._clearWatchdog();
    if ((e = this._abortController) != null) {
      e.abort();
    }
    this._abortController = undefined;
    this._activeConversationId = undefined;
    this._mainConversationId = undefined;
    this._reconnectAttempt = 0;
    this._controlChunkBuffer = "";
    this._streamEventAdapter.reset();
    this._disposeAllTransports();
    this._clearRouteState();
    this._clearPendingBusinessEvents();
    this._boundBusinessConversationIds.clear();
    this._setStatus("closed");
  }
  setActiveConversationId(e) {
    this._activeConversationId = e;
    this._mainConversationId = e;
    this.bindConversation(e);
  }
  bindConversation(e) {
    this._boundBusinessConversationIds.add(e);
    this._getOrCreateBusinessTransport(e);
    this._flushPendingBusinessEvents(e);
    this._prunePendingBusinessEvents();
  }
  bindSubAgentConversation(e, t, initialMessageId) {
    this._registerSubAgentBinding({
      carrierMessageId: t,
      initialMessageId,
      mainConversationId: e,
      subAgentConversationId: t,
    });
  }
  whenOpen() {
    const timeoutMs =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5000;
    if (this._status === "open") {
      return Promise.resolve(true);
    }
    if (!this.enabled || this._disposed || this._status === "closed") {
      return Promise.resolve(false);
    }
    return new Promise((resolve) => {
      var r = false;
      var i = {};
      var s = (e) => {
        var s;
        if (!r) {
          r = true;
          if ((s = i.listener) != null) {
            s.dispose();
          }
          if (i.timer) {
            clearTimeout(i.timer);
          }
          resolve(e);
        }
      };
      i.listener = this.onStatusChange((e) => {
        if (e === "open") {
          s(true);
        } else if (e === "closed") {
          s(false);
        }
      });
      i.timer = setTimeout(() => {
        L.V.warn("[SubscribeStream] whenOpen timed out", {
          timeoutMs,
          status: this._status,
        });
        s(false);
      }, timeoutMs);
    });
  }
  dispose() {
    this._disposed = true;
    this._clearLeases();
    this.stop();
    this._onStatusChange.dispose();
    this._onHandshake.dispose();
    this._onAgentBillingUpdated.dispose();
    this._onAgentConversationSystemEvent.dispose();
    this._onSubAgentConversationSnapshot.dispose();
    this._onSubAgentInterruptApproval.dispose();
    this._disposeAllTransports();
    super.dispose();
  }
  _registerWorkspaceListeners() {
    this._register(
      this._workspaceService.onWorkspaceChange((e) => {
        if (e) {
          if ((e == null ? undefined : e.id) !== this._workspaceId) {
            this.stop();
          }
          this._syncFromCurrentWorkspace();
        } else {
          this.stop();
        }
      }),
    );
    this._register(
      this._workspaceService.onWorkspaceDeleted((e) => {
        this._releaseWorkspaceLeases(e, true);
      }),
    );
    this._register(this._accountService.onDidLogin(() => this._clearLeases()));
    this._register(this._accountService.onDidLogout(() => this._clearLeases()));
    this._register(
      this._configurationService.serverAbTestManager.onDidChangeConfiguration(
        () => {
          if (this.enabled) {
            this._syncFromCurrentWorkspace();
          } else {
            this.stop();
          }
        },
      ),
    );
  }
  _syncFromCurrentWorkspace() {
    const selectedWorkspaceId = this._workspaceService.data.selectedWorkspaceId;
    if (
      this.enabled &&
      selectedWorkspaceId !== undefined &&
      this._leaseIdsByWorkspaceId.has(selectedWorkspaceId)
    ) {
      this._start(selectedWorkspaceId);
    }
  }
  _releaseWorkspaceLeases(e, t) {
    let r;
    this._workspaceGenerations.set(
      e,
      ((r = this._workspaceGenerations.get(e)) != null ? r : 0) + 1,
    );
    this._leaseIdsByWorkspaceId.delete(e);
    if (t && this._workspaceId === e) {
      this.stop();
    }
  }
  _clearLeases() {
    this._sessionGeneration += 1;
    this._leaseIdsByWorkspaceId.clear();
    this.stop();
  }
  _resetConnectionState(e) {
    let t;
    this._connectionGeneration += 1;
    this._clearWatchdog();
    if ((t = this._abortController) != null) {
      t.abort();
    }
    this._abortController = undefined;
    this._connectLoopPromise = undefined;
    this._workspaceId = e;
    this._activeConversationId = undefined;
    this._mainConversationId = undefined;
    this._controlChunkBuffer = "";
    this._streamEventAdapter.reset();
    this._reconnectAttempt = 0;
    this._disposeAllTransports();
    this._clearRouteState();
    this._clearPendingBusinessEvents();
    this._boundBusinessConversationIds.clear();
    this._setStatus("idle");
  }
  _connectLoop(e) {
    return n
      ._(function* () {
        let t;
        const r = function* () {
          try {
            yield t._connectOnce(e);
            L.V.info("[SubscribeStream] stream closed by server");
          } catch (error) {
            if (
              e !== t._connectionGeneration ||
              t._disposed ||
              t._status === "closed"
            ) {
              return {
                v: undefined,
              };
            }
            const r = error instanceof Error ? error.message : String(error);
            L.V.warn("[SubscribeStream] connection failed", {
              message: r,
            });
          } finally {
            t._clearWatchdog();
          }
          if (
            e !== t._connectionGeneration ||
            t._disposed ||
            !t.enabled ||
            t._status === "closed" ||
            t._workspaceId === undefined ||
            !t._leaseIdsByWorkspaceId.has(t._workspaceId)
          ) {
            if (
              !(
                t._workspaceId === undefined ||
                t._leaseIdsByWorkspaceId.has(t._workspaceId)
              )
            ) {
              t._setStatus("idle");
            }
            return {
              v: undefined,
            };
          }
          t._reconnectAttempt += 1;
          const i = Math.min(2000 * 2 ** (t._reconnectAttempt - 1), 60000);
          t._setStatus("reconnecting");
          yield new Promise((resolve) => setTimeout(resolve, i));
          if (e !== t._connectionGeneration) {
            return {
              v: undefined,
            };
          }
        };
        while (
          e === this._connectionGeneration &&
          !this._disposed &&
          this.enabled &&
          this._workspaceId !== undefined &&
          this._leaseIdsByWorkspaceId.has(this._workspaceId)
        ) {
          t = this;
          const i = yield* r();
          if (r7._(i) === "object") {
            return i.v;
          }
        }
      })
      .call(this);
  }
  _connectOnce(e) {
    return n
      ._(function* () {
        if (
          e === this._connectionGeneration &&
          this._workspaceId !== undefined
        ) {
          const t = new AbortController();
          this._abortController = t;
          this._controlChunkBuffer = "";
          this._streamEventAdapter.reset();
          this._setStatus("connecting");
          const r = this._buildUrl();
          const i = JSON.stringify(this._buildRequestBody(this._workspaceId));
          const s = rD.Wo();
          const a = {
            method: "POST",
            headers: es._(
              ea._(
                es._(
                  {
                    "Content-Type": "application/json",
                    Accept: "text/event-stream",
                  },
                  ru,
                ),
                {
                  lan: V.Ay.language,
                },
              ),
              s,
            ),
            credentials: "include",
            body: i,
            signal: t.signal,
          };
          const n = rq.GU({
            endpoint: "subscribe_session",
            init: a,
            url: r,
          });
          try {
            const o = yield fetch(r, a);
            if (n != null) {
              n.recordResponse(o);
            }
            yield rG.OK(o, s[rD.s0]);
            if (!o.ok || !o.body) {
              if (o.body) {
                const d = yield o.text().catch(() => "");
                if (n != null) {
                  n.recordChunk(d);
                }
              }
              throw Error("HTTP ".concat(o.status, " ").concat(o.statusText));
            }
            this._resetWatchdog();
            const c = o.body.getReader();
            const u = new TextDecoder();
            try {
              while (true) {
                const { done, value } = yield c.read();
                if (e !== this._connectionGeneration) {
                  if (n != null) {
                    n.complete("connection_generation_changed");
                  }
                  return;
                }
                if (done) {
                  break;
                }
                const h = u.decode(value, {
                  stream: true,
                });
                if (h) {
                  if (n != null) {
                    n.recordChunk(h);
                  }
                  this._resetWatchdog();
                  this._routeChunk(h);
                }
              }
              const m = u.decode();
              if (m) {
                if (n != null) {
                  n.recordChunk(m);
                }
                this._resetWatchdog();
                this._routeChunk(m);
              }
            } finally {
              c.releaseLock();
            }
            this._appendControlChunk("", true);
            this._streamEventAdapter.finish();
            this._finishConversationTransports();
            if (n != null) {
              n.complete();
            }
          } catch (error) {
            if (n != null) {
              n.recordError(error);
            }
            throw error;
          }
        }
      })
      .call(this);
  }
  _buildRequestBody(workspace_id) {
    return {
      workspace_id,
    };
  }
  _buildUrl() {
    return this._httpApiSettingService.getRequestURL({
      domainType: tQ.X.DEFAULT,
      path: rh.SUBSCRIBE_SESSION,
    });
  }
  _handleHandshake(e) {
    if (this._status !== "open") {
      this._reconnectAttempt = 0;
      this._setStatus("open");
      this._onHandshake.fire(e);
    }
  }
  _routeChunk(e) {
    this._appendControlChunk(e);
    this._streamEventAdapter.appendChunk(e);
  }
  _appendControlChunk(e) {
    const t =
      arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    this._controlChunkBuffer += e;
    const r = this._controlChunkBuffer.split(/\r?\n\r?\n/);
    const i = r.length - 1;
    r.forEach((e, r) => {
      if (!t && r === i) {
        this._controlChunkBuffer = e;
        return;
      }
      this._parseControlEvent(e);
    });
    if (t) {
      this._controlChunkBuffer = "";
    }
  }
  _parseControlEvent(e) {
    if (!e.trim()) {
      return;
    }
    let t = "";
    let r = "";
    const i = [];
    e.split(/\r?\n/).forEach((e) => {
      if (e.startsWith("id:")) {
        r = e.slice(3).trim();
      } else if (e.startsWith("event:")) {
        t = e.slice(6).trim();
      } else if (e.startsWith("data:")) {
        i.push(e.slice(5).trim());
      }
    });
    if (i.length !== 0) {
      const s = {
        id: r,
        event: t,
        data: i.join("\n"),
      };
      const a = this._parseEventPayload(s);
      if (
        !((!r || !t) && this._handleAgentBillingUpdated(a)) &&
        (t === "system" || t === "error") &&
        !r
      ) {
        if (
          s.event === "system" &&
          (a == null ? undefined : a.type) === "heartbeat"
        ) {
          return void this._resetWatchdog();
        }
        this._handleStreamErrorEvent(s, a);
      }
    }
  }
  _handleSSEEvent(e) {
    const t = this._parseEventPayload(e);
    if (
      !(
        this._handleControlEvent(e, t) ||
        this._handleAgentBillingUpdated(t) ||
        this._handleContextEvent(e, t)
      ) &&
      !this._handleStreamErrorEvent(e, t)
    ) {
      const r = this._resolveConversationId(e, t);
      if (!r) {
        return void L.V.warn("[SubscribeStream] event route failed", {
          event: e.event,
          id: e.id,
        });
      }
      this._activeConversationId = r;
      this._rememberConversationRoute(e, t, r);
      this._dispatchRoutedBusinessEvent(r, e, t);
    }
  }
  _emitAgentConversationSystemEvent(e, t, r) {
    ((e, t, r) => {
      if (!t) {
        return [];
      }
      let i;
      let s;
      let a;
      let n;
      let o;
      let d;
      const { message, types } = ((e, t) => {
        const types_1 = new Set();
        const i = ia.wK(t.value);
        iu(types_1, e.event);
        iu(types_1, t.type);
        if (e.event === "message" && id(t)) {
          ic(types_1, t.extra);
        }
        if (e.event === "delta") {
          let s;
          let a;
          const n = (s = ia.Yt(t, "path")) != null ? s : "";
          if (n.includes(ii.yD)) {
            types_1.add(ii.yD);
          }
          if (n.includes(ii.jo)) {
            types_1.add(ii.jo);
          }
          if (i) {
            if (id(i)) {
              ic(types_1, i.extra);
            } else {
              ic(types_1, (a = i.extra) != null ? a : i);
            }
          }
        }
        return {
          message: i,
          types: types_1,
        };
      })(e, t);
      if (types.size === 0) {
        return [];
      }
      const messageId =
        (i =
          (s =
            (a =
              (n = ia.v8(t, "message_id")) != null
                ? n
                : ((e) => {
                    const t = ia.Yt(e, "path");
                    if (t) {
                      const [, r, i] = t.split("/");
                      if (r === "messages" && i) {
                        return i;
                      }
                      return undefined;
                    }
                  })(t)) != null
              ? a
              : ia.v8(t, "id")) != null
            ? s
            : ia.v8(message, "id")) != null
          ? i
          : e.id;
      const createTime =
        (o =
          (d = ia.CC(t, "create_time", "createTime")) != null
            ? d
            : ia.CC(message, "create_time", "createTime")) != null
          ? o
          : Date.now();
      return io
        .filter((e) => types.has(e))
        .map((type) =>
          ii.bH({
            type,
            messageId,
            conversationId: r,
            createTime,
          }),
        );
    })(t, r, e).forEach((e) => {
      this._onAgentConversationSystemEvent.fire(e);
    });
    const i = this._getString(r != null ? r : {}, "type");
    if (
      t.event === "system" &&
      (i === "stream_complete" || i === "stream_error")
    ) {
      this._onAgentConversationSystemEvent.fire({
        conversationId: e,
        data: t.data,
        event: t.event,
        id: t.id,
      });
    }
  }
  _handleControlEvent(e, t) {
    return (
      e.event === "system" &&
      !!t &&
      (t.type === "subscribe_handshake"
        ? (typeof t.queue_id === "string" && t.queue_id
            ? this._handleHandshake({
                type: "subscribe_handshake",
                queue_id: t.queue_id,
                session_id:
                  typeof t.session_id === "string" ? t.session_id : undefined,
              })
            : L.V.warn("[SubscribeStream] handshake missing queue_id"),
          true)
        : t.type === "heartbeat" && (this._resetWatchdog(), true))
    );
  }
  _handleAgentBillingUpdated(e) {
    const t = ((e) => {
      if ((e == null ? undefined : e.type) === "agent_billing_updated") {
        let t;
        const r = e.conversation_id;
        const i = e.billing_info;
        if (
          typeof r === "string" &&
          r &&
          typeof (t = i) === "object" &&
          t !== null
        ) {
          return {
            type: "agent_billing_updated",
            conversationId: r,
            billingInfo: tW.o(i, t3.Cb),
          };
        }
      }
    })(e);
    return !!t && (this._onAgentBillingUpdated.fire(t), true);
  }
  _handleContextEvent(e, t) {
    if (e.event !== "creation_agent_v33.turn_start" || !t) {
      return false;
    }
    let r;
    let i;
    const s =
      (i = this._getString(t, "conversation_id")) != null
        ? i
        : ((e) => {
            for (const t of ih(e)) {
              const r = ((e) => {
                const { metadata } = e;
                if (il(metadata)) {
                  return i_(metadata, "conversation_id");
                }
              })(t);
              if (r) {
                return r;
              }
            }
          })(t);
    if (!s) {
      return true;
    }
    const a = this._subAgentBindingByConversationId.get(s);
    if (a == null ? undefined : a.active) {
      let n;
      const o = im(t);
      n = a.initialMessageId;
      if (n && o && n !== o) {
        this._rememberPendingSubAgentTurnStart(e, t, s);
      } else {
        this._activeConversationId = s;
        this._rememberConversationRoute(e, t, s);
        this._dispatchBusinessEvent(s, e, t);
        this._emitSubAgentSnapshot(a.mainConversationId);
      }
      return true;
    }
    r = this._mainConversationId;
    if (r && s !== r) {
      this._rememberPendingSubAgentTurnStart(e, t, s);
    } else {
      this._activeConversationId = s;
      this._mainConversationId = s;
      this.bindConversation(s);
    }
    return true;
  }
  _handleStreamErrorEvent(e, t) {
    if ((t == null ? undefined : t.type) !== "stream_error") {
      return false;
    }
    const r = ea._(es._({}, e), {
      event: "system",
    });
    const i = this._resolveConversationId(r, t);
    if (i) {
      this._activeConversationId = i;
      this._rememberConversationRoute(r, t, i);
      this._dispatchRoutedBusinessEvent(i, r, t);
    } else {
      L.V.warn("[SubscribeStream] stream_error route failed", {
        event: e.event,
        id: e.id,
      });
    }
    return true;
  }
  _parseEventPayload(e) {
    try {
      const t = JSON.parse(e.data);
      if (this._isRecord(t)) {
        return t;
      }
      return undefined;
    } catch (error) {
      L.V.warn("[SubscribeStream] failed to parse event payload", {
        event: e.event,
        id: e.id,
        message: error instanceof Error ? error.message : String(error),
      });
      return;
    }
  }
  _resolveConversationId(e, t) {
    let r;
    let i;
    let s;
    let a;
    let n;
    if (t) {
      if (e.event === "message") {
        if (
          (r =
            (i = this._getString(t, "conversation_id")) != null
              ? i
              : this._getMetadataConversationId(t)) != null
        ) {
          return r;
        }
        return this._getFallbackConversationId();
      }
      if (e.event === "delta") {
        if (
          (s =
            (a = this._getString(t, "conversation_id")) != null
              ? a
              : this._getDeltaMappedConversationId(t)) != null
        ) {
          return s;
        }
        return this._getFallbackConversationId();
      }
      if (e.event === "system") {
        if ((n = this._getString(t, "conversation_id")) != null) {
          return n;
        }
        return this._getFallbackConversationId();
      }
      return this._findConversationId(t);
    }
  }
  _getFallbackConversationId() {
    if (this._activeConversationId) {
      const e = new Set([
        ...this._transportByConversationId.keys(),
        ...this._pendingBusinessEventsByConversationId.keys(),
        this._activeConversationId,
      ]);
      if (this._mainConversationId) {
        e.add(this._mainConversationId);
      }
      if (e.size === 1) {
        return this._activeConversationId;
      }
      return undefined;
    }
  }
  _dispatchBusinessEventToTransport(e, t, r, i) {
    const s =
      r.event === "system" &&
      this._getString(i != null ? i : {}, "type") === "stream_complete";
    if (e === this._mainConversationId && s) {
      t.dispatchEvent(r);
      this._emitAgentConversationSystemEvent(e, r, i);
      return;
    }
    this._emitAgentConversationSystemEvent(e, r, i);
    t.dispatchEvent(r);
  }
  _dispatchBusinessEvent(e, t, r) {
    const i = this._getOrCreateBusinessTransport(e);
    if (!i) {
      if (this._shouldBufferBusinessEvent(e)) {
        this._bufferBusinessEvent(e, t);
      }
      return false;
    }
    const s = r != null ? r : this._parseEventPayload(t);
    this._dispatchBusinessEventToTransport(e, i, t, s);
    return true;
  }
  _dispatchRoutedBusinessEvent(e, t, r) {
    if (e === this._mainConversationId) {
      this._dispatchBusinessEvent(e, t, r);
      this._bindSubAgentFromSpawnTaskMessage(e, t, r);
      this._bindSubAgentFromSendMessageMessage(e, t, r);
      this._syncSubAgentBindingsFromMainConversation(e);
      return;
    }
    if (this._pendingSubAgentConversationIds.has(e)) {
      return void this._bufferBusinessEvent(e, t);
    }
    const i = this._subAgentBindingByConversationId.get(e);
    if (i == null ? undefined : i.active) {
      this._emitSubAgentInterruptApproval(i, t, r);
      this._appendSubAgentSystemEvent(i, t, r);
      this._dispatchBusinessEvent(e, t, r);
      this._emitSubAgentSnapshot(i.mainConversationId);
      return;
    }
    this._dispatchBusinessEvent(e, t, r);
  }
  _clearRouteState() {
    this._messageIdToConversationId.clear();
    this._toolCallIdToConversationId.clear();
    this._subAgentBindingByConversationId.clear();
    this._subAgentSystemEventsByConversationId.clear();
    this._pendingSubAgentTurnStartByInitialMessageId.clear();
    this._pendingSubAgentConversationIds.clear();
    this._routeSeq = 0;
  }
  _rememberConversationRoute(e, t, r) {
    if (t) {
      const i = this._getMessageIdFromEventPayload(e, t);
      if (i) {
        this._messageIdToConversationId.set(i, r);
      }
      const s = this._getToolCallIdFromEventPayload(e, t);
      if (s) {
        this._toolCallIdToConversationId.set(s, r);
      }
    }
  }
  _getDeltaMappedConversationId(e) {
    let t;
    const r =
      (t = this._getString(e, "message_id")) != null
        ? t
        : this._getMessageIdFromPath(e);
    const i = r ? this._messageIdToConversationId.get(r) : undefined;
    if (i) {
      return i;
    }
    const s = this._getToolCallIdFromPayloadValue(e);
    if (s) {
      return this._toolCallIdToConversationId.get(s);
    }
  }
  _getMessageIdFromEventPayload(e, t) {
    if (e.event === "message") {
      return this._getString(t, "id");
    }
    if (e.event === "delta") {
      let r;
      if ((r = this._getString(t, "message_id")) != null) {
        return r;
      }
      return this._getMessageIdFromPath(t);
    }
  }
  _getMessageIdFromPath(e) {
    const t = this._getString(e, "path");
    if (t) {
      const [, r, i] = t.split("/");
      if (r === "messages" && i) {
        return i;
      }
      return undefined;
    }
  }
  _getToolCallIdFromEventPayload(e, t) {
    if (e.event === "message") {
      const { metadata } = t;
      if (this._isRecord(metadata)) {
        return this._getString(metadata, "tool_call_id");
      }
      return undefined;
    }
    if (e.event === "delta") {
      return this._getToolCallIdFromPayloadValue(t);
    }
  }
  _getToolCallIdFromPayloadValue(e) {
    const { value } = e;
    if (typeof value === "string") {
      try {
        const r = JSON.parse(value);
        if (this._isRecord(r)) {
          return this._getString(r, "id");
        }
        return undefined;
      } catch (e) {
        return;
      }
    }
  }
  _rememberPendingSubAgentTurnStart(e, t, r) {
    const i = im(t);
    if (i) {
      this._activeConversationId = r;
      this._pendingSubAgentConversationIds.add(r);
      this._pendingSubAgentTurnStartByInitialMessageId.set(i, r);
      this._bufferBusinessEvent(r, e);
      this._rememberConversationRoute(e, t, r);
      if (this._mainConversationId) {
        this._syncSubAgentBindingsFromMainConversation(
          this._mainConversationId,
        );
      }
    } else {
      L.V.warn(
        "[SubscribeStream] sub agent turn_start missing initial message id",
        {
          conversationId: r,
          id: e.id,
        },
      );
    }
  }
  _resolveSubAgentConversationIdFromSpawnResult(e) {
    return ((e, t) => {
      let r;
      let i;
      let s;
      const a =
        e == null || (i = e.data) == null || (r = i.extra) == null
          ? undefined
          : r.sub_agent_conv_id;
      if (a) {
        return a;
      }
      const n =
        e == null || (s = e.data) == null ? undefined : s.initial_message_id;
      if (n) {
        return t.get(n);
      }
    })(e, this._pendingSubAgentTurnStartByInitialMessageId);
  }
  _resolveSubAgentConversationIdFromSendMessageResult(e) {
    return ((e, t) => {
      let r;
      let i;
      let s;
      const a =
        e == null || (i = e.data) == null || (r = i.extra) == null
          ? undefined
          : r.sub_agent_conv_id;
      if (a) {
        return a;
      }
      const n = e == null || (s = e.data) == null ? undefined : s.message_id;
      if (n) {
        return t.get(n);
      }
    })(e, this._pendingSubAgentTurnStartByInitialMessageId);
  }
  _appendSubAgentSystemEvent(e, t, r) {
    let i;
    const s = this._getString(r != null ? r : {}, "type");
    if (
      t.event === "system" &&
      (s === "stream_complete" || s === "stream_error") &&
      iv(e.initialMessageId, r)
    ) {
      const a =
        (i = this._subAgentSystemEventsByConversationId.get(
          e.subAgentConversationId,
        )) != null
          ? i
          : [];
      const n = {
        conversationId: e.subAgentConversationId,
        data: t.data,
        event: t.event,
        id: t.id,
      };
      if (
        !a.some(
          (e) => e.id === n.id && e.event === n.event && e.data === n.data,
        )
      ) {
        this._subAgentSystemEventsByConversationId.set(
          e.subAgentConversationId,
          [...a, n],
        );
      }
    }
  }
  _emitSubAgentInterruptApproval(e, t, r) {
    const approval = ((e, t) => {
      if (
        e.event === "system" &&
        (t == null ? undefined : t.type) === "interrupt_approval"
      ) {
        const payload = typeof t.content === "string" ? t.content : undefined;
        return {
          status: "pending_approval",
          payload,
          toolCallId: ((e) => {
            if (e) {
              try {
                const t = JSON.parse(e);
                if (typeof t.tool_call_id === "string") {
                  return t.tool_call_id;
                }
                return undefined;
              } catch (e) {
                return;
              }
            }
          })(payload),
        };
      }
    })(t, r);
    if (approval && iv(e.initialMessageId, r)) {
      this._onSubAgentInterruptApproval.fire({
        mainConversationId: e.mainConversationId,
        subAgentConversationId: e.subAgentConversationId,
        approval,
      });
    }
  }
  _registerSubAgentBinding(e) {
    if (!e.subAgentConversationId) {
      return false;
    }
    let t;
    const r = this._subAgentBindingByConversationId.get(
      e.subAgentConversationId,
    );
    return (
      !!((e, t) => {
        if (!e) {
          return true;
        }
        let r;
        let i;
        const s = (r = t.initialMessageId) == null ? undefined : r.trim();
        return (
          !!s && s !== ((i = e.initialMessageId) == null ? undefined : i.trim())
        );
      })(r, e) &&
      (this._nuroConversationService.getOrCreateConversation(
        e.subAgentConversationId,
        undefined,
        undefined,
        this._workspaceId,
      ),
      this._subAgentBindingByConversationId.set(e.subAgentConversationId, {
        active: true,
        bindSeq: ++this._routeSeq,
        carrierMessageId: e.carrierMessageId,
        initialMessageId: e.initialMessageId,
        mainConversationId: e.mainConversationId,
        subAgentConversationId: e.subAgentConversationId,
        target: (t = e.target) != null ? t : r == null ? undefined : r.target,
      }),
      this.bindConversation(e.subAgentConversationId),
      this._pendingSubAgentConversationIds.delete(e.subAgentConversationId),
      e.initialMessageId &&
        this._pendingSubAgentTurnStartByInitialMessageId.delete(
          e.initialMessageId,
        ),
      this._emitSubAgentSnapshot(e.mainConversationId),
      true)
    );
  }
  _getSpawnTaskResultFromMessagePayload(e) {
    if (!e) {
      return;
    }
    const { author } = e;
    if (
      this._isRecord(author) &&
      this._getString(author, "name") === r9.i.SpawnTask
    ) {
      const { content } = e;
      if (this._isRecord(content)) {
        const i = content.content_parts;
        if (Array.isArray(i)) {
          for (const s of i) {
            if (this._isRecord(s)) {
              const a = this._getString(s, "text");
              const n = this._safeParse(a);
              if (this._resolveSubAgentConversationIdFromSpawnResult(n)) {
                return n;
              }
            }
          }
        }
      }
    }
  }
  _bindSubAgentFromSpawnTaskMessage(e, t, r) {
    if (t.event === "message") {
      const i = this._getSpawnTaskResultFromMessagePayload(r);
      const s = this._resolveSubAgentConversationIdFromSpawnResult(i);
      if ((i == null ? undefined : i.data) && s) {
        const a = this._getString(r != null ? r : {}, "id") || s;
        this._registerSubAgentBinding({
          carrierMessageId: a,
          initialMessageId: i.data.initial_message_id,
          mainConversationId: e,
          subAgentConversationId: s,
          target: i.data.target,
        });
      }
    }
  }
  _getSendMessageResultFromMessagePayload(e) {
    if (!e) {
      return;
    }
    const { author } = e;
    if (
      this._isRecord(author) &&
      this._getString(author, "name") === r9.i.SendMessage
    ) {
      const { content } = e;
      if (this._isRecord(content)) {
        const i = content.content_parts;
        if (Array.isArray(i)) {
          for (const s of i) {
            if (this._isRecord(s)) {
              const a = this._getString(s, "text");
              const n = this._safeParse(a);
              if (this._resolveSubAgentConversationIdFromSendMessageResult(n)) {
                return n;
              }
            }
          }
        }
      }
    }
  }
  _bindSubAgentFromSendMessageMessage(e, t, r) {
    if (t.event === "message") {
      const i = this._getSendMessageResultFromMessagePayload(r);
      const s = this._resolveSubAgentConversationIdFromSendMessageResult(i);
      if ((i == null ? undefined : i.data) && s) {
        const a = this._getString(r != null ? r : {}, "id") || s;
        this._registerSubAgentBinding({
          carrierMessageId: a,
          initialMessageId: i.data.message_id,
          mainConversationId: e,
          subAgentConversationId: s,
        });
      }
    }
  }
  _syncSubAgentBindingsFromMainConversation(e) {
    for (const t of this._getConversationReplyMessages(e)) {
      if (t instanceof rd.NuroToolCallMessage) {
        if (t.toolName === r9.i.SpawnTask) {
          const r = this._safeParse(t.toolResult);
          const i = this._resolveSubAgentConversationIdFromSpawnResult(r);
          if (!(r == null ? undefined : r.data) || !i) {
            continue;
          }
          this._registerSubAgentBinding({
            carrierMessageId: t.id,
            initialMessageId: r.data.initial_message_id,
            mainConversationId: e,
            subAgentConversationId: i,
            target: r.data.target,
          });
          continue;
        }
        if (t.toolName === r9.i.SendMessage) {
          const s = this._safeParse(t.toolResult);
          const a = this._resolveSubAgentConversationIdFromSendMessageResult(s);
          if (!(s == null ? undefined : s.data) || !a) {
            continue;
          }
          const n = this._safeParse(t.toolArgs);
          this._registerSubAgentBinding({
            carrierMessageId: t.id,
            initialMessageId: s.data.message_id,
            mainConversationId: e,
            subAgentConversationId: a,
            target: n == null ? undefined : n.target,
          });
        }
      }
    }
  }
  _getSubAgentTaskState(e) {
    let t;
    let r;
    const i = this._nuroConversationService.getConversation(
      e.subAgentConversationId,
    );
    const s =
      (t = i == null ? undefined : i.conversationManager.conversation.tasks) !=
      null
        ? t
        : [];
    if (s.length !== 0) {
      const a = e.initialMessageId
        ? s.find((t) => {
            var r;
            return (
              ((r = t.promptMessages[0]) == null ? undefined : r.id) ===
              e.initialMessageId
            );
          })
        : undefined;
      const n = a != null ? a : s.length === 1 ? s[0] : s[s.length - 1];
      if (n) {
        return {
          conversationId: e.subAgentConversationId,
          initialMessageId:
            (r = n.promptMessages[0]) == null ? undefined : r.id,
          summary:
            i == null ? undefined : i.conversationManager.conversation.summary,
          taskId: n.taskId,
          taskStatus: n.taskStatus,
        };
      }
    }
  }
  _getSubAgentTaskStates(e) {
    const t = {};
    for (const r of e) {
      const i = this._getSubAgentTaskState(r);
      if (i) {
        t[r.subAgentConversationId] = i;
      }
    }
    return t;
  }
  _emitSubAgentSnapshot(e) {
    const t = Array.from(this._subAgentBindingByConversationId.values()).filter(
      (t) => t.active && t.mainConversationId === e,
    );
    if (t.length !== 0) {
      const r = t.flatMap((e) =>
        this._getConversationReplyMessages(e.subAgentConversationId),
      );
      const systemEvents = t.flatMap((e) => {
        var t;
        if (
          (t = this._subAgentSystemEventsByConversationId.get(
            e.subAgentConversationId,
          )) != null
        ) {
          return t;
        }
        return [];
      });
      this._onSubAgentConversationSnapshot.fire({
        mainConversationId: e,
        messages: this._dedupeMessages(r),
        subAgentConversationIds: t.map((e) => e.subAgentConversationId),
        systemEvents,
        taskStates: this._getSubAgentTaskStates(t),
      });
    }
  }
  _getConversationReplyMessages(e) {
    let t;
    const r = this._nuroConversationService.getConversation(e);
    const i =
      (t = r == null ? undefined : r.conversationManager.conversation.tasks) !=
      null
        ? t
        : [];
    const s = [];
    for (const a of i) {
      for (const n of [
        ...a.middlewareMessages,
        ...a.artifactMessages,
        ...a.shieldMessages,
      ]) {
        if (this._isReplyMessage(n)) {
          s.push(n);
        }
      }
    }
    return this._dedupeMessages(s);
  }
  _dedupeMessages(e) {
    const t = [];
    const r = new Set();
    for (const i of e) {
      if (!r.has(i.id)) {
        r.add(i.id);
        t.push(i);
      }
    }
    return t;
  }
  _isReplyMessage(e) {
    return (
      e instanceof rd.NuroAssistantMessage ||
      e instanceof rd.NuroCanvasMessage ||
      e instanceof rd.NuroReasoningMessage ||
      e instanceof rd.NuroToolCallMessage
    );
  }
  _safeParse(e) {
    if (e) {
      try {
        return JSON.parse(e);
      } catch (e) {
        return;
      }
    }
  }
  _getMetadataConversationId(e) {
    const { metadata } = e;
    if (this._isRecord(metadata)) {
      return this._getString(metadata, "conversation_id");
    }
  }
  _findConversationId(e) {
    if (this._isRecord(e)) {
      const t = this._getString(e, "conversation_id");
      if (t) {
        return t;
      }
      for (const r of Object.values(e)) {
        if (Array.isArray(r)) {
          for (const i of r) {
            const s = this._findConversationId(i);
            if (s) {
              return s;
            }
          }
          continue;
        }
        const a = this._findConversationId(r);
        if (a) {
          return a;
        }
      }
    }
  }
  _getString(e, t) {
    const r = e[t];
    if (typeof r === "string" && r) {
      return r;
    }
  }
  _isRecord(e) {
    return typeof e === "object" && e !== null;
  }
  _finishConversationTransports() {
    this._transportByConversationId.forEach((e) => {
      e.finish();
    });
  }
  _disposeAllTransports() {
    this._transportByConversationId.forEach((e) => {
      e.dispose();
    });
    this._transportByConversationId.clear();
  }
  _clearPendingBusinessEvents() {
    this._pendingBusinessEventsByConversationId.clear();
  }
  _getOrCreateBusinessTransport(e) {
    const t = this._transportByConversationId.get(e);
    if (t) {
      return t;
    }
    const r = this._nuroConversationService.getConversation(e);
    if (r) {
      const i = new ir();
      i.setConversationManager(r.conversationManager);
      this._transportByConversationId.set(e, i);
      return i;
    }
  }
  _bufferBusinessEvent(e, t) {
    let r;
    const i =
      (r = this._pendingBusinessEventsByConversationId.get(e)) != null ? r : [];
    i.push(t);
    this._pendingBusinessEventsByConversationId.set(e, i);
  }
  _shouldBufferBusinessEvent(e) {
    return (
      this._boundBusinessConversationIds.size === 0 ||
      this._boundBusinessConversationIds.has(e) ||
      this._pendingSubAgentConversationIds.has(e)
    );
  }
  _flushPendingBusinessEvents(e) {
    const t = this._pendingBusinessEventsByConversationId.get(e);
    if (t == null ? undefined : t.length) {
      const r = this._getOrCreateBusinessTransport(e);
      if (r) {
        this._pendingBusinessEventsByConversationId.delete(e);
        const i = this._subAgentBindingByConversationId.get(e);
        t.forEach((t) => {
          var s = this._parseEventPayload(t);
          if (i == null ? undefined : i.active) {
            this._emitSubAgentInterruptApproval(i, t, s);
            this._appendSubAgentSystemEvent(i, t, s);
          }
          this._dispatchBusinessEventToTransport(e, r, t, s);
        });
        if (i == null ? undefined : i.active) {
          this._emitSubAgentSnapshot(i.mainConversationId);
        }
      }
    }
  }
  _prunePendingBusinessEvents() {
    for (const e of this._pendingBusinessEventsByConversationId.keys()) {
      if (
        !(
          this._boundBusinessConversationIds.has(e) ||
          this._pendingSubAgentConversationIds.has(e)
        )
      ) {
        this._pendingBusinessEventsByConversationId.delete(e);
      }
    }
  }
  _resetWatchdog() {
    this._clearWatchdog();
    this._watchdogTimer = setTimeout(() => {
      var e;
      L.V.warn(
        "[SubscribeStream] watchdog timeout, aborting current connection",
      );
      if ((e = this._abortController) != null) {
        e.abort();
      }
    }, 60000);
  }
  _clearWatchdog() {
    if (this._watchdogTimer) {
      clearTimeout(this._watchdogTimer);
      this._watchdogTimer = undefined;
    }
  }
  _setStatus(e) {
    if (this._status !== e) {
      this._status = e;
      this._onStatusChange.fire(e);
    }
  }
  constructor(e, t, r, i, s) {
    super();
    this._workspaceService = e;
    this._nuroConversationService = t;
    this._httpApiSettingService = r;
    this._configurationService = i;
    this._accountService = s;
    this._onStatusChange = new q.v();
    this._onHandshake = new q.v();
    this._onAgentBillingUpdated = new q.v();
    this._onAgentConversationSystemEvent = new q.v();
    this._onSubAgentConversationSnapshot = new q.v();
    this._onSubAgentInterruptApproval = new q.v();
    this._streamEventAdapter = new ir(false);
    this._transportByConversationId = new Map();
    this._pendingBusinessEventsByConversationId = new Map();
    this._boundBusinessConversationIds = new Set();
    this._messageIdToConversationId = new Map();
    this._toolCallIdToConversationId = new Map();
    this._subAgentBindingByConversationId = new Map();
    this._subAgentSystemEventsByConversationId = new Map();
    this._pendingSubAgentTurnStartByInitialMessageId = new Map();
    this._pendingSubAgentConversationIds = new Set();
    this._leaseIdsByWorkspaceId = new Map();
    this._workspaceGenerations = new Map();
    this._status = "idle";
    this._controlChunkBuffer = "";
    this._reconnectAttempt = 0;
    this._connectionGeneration = 0;
    this._disposed = false;
    this._routeSeq = 0;
    this._nextLeaseId = 0;
    this._sessionGeneration = 0;
    this.onStatusChange = this._onStatusChange.event;
    this.onHandshake = this._onHandshake.event;
    this.onAgentBillingUpdated = this._onAgentBillingUpdated.event;
    this.onAgentConversationSystemEvent =
      this._onAgentConversationSystemEvent.event;
    this.onSubAgentConversationSnapshot =
      this._onSubAgentConversationSnapshot.event;
    this.onSubAgentInterruptApproval = this._onSubAgentInterruptApproval.event;
    this._register(this._streamEventAdapter);
    this._register(
      this._streamEventAdapter.onSSEEvent((e) => this._handleSSEEvent(e)),
    );
    this._registerWorkspaceListeners();
  }
}
ip = P.Cg(
  [
    P.Qj(0, it.D),
    P.Qj(1, M_2),
    P.Qj(2, tQ.r),
    P.Qj(3, ie.a),
    P.Qj(4, tB.c),
    P.Sn("design:type", Function),
    P.Sn("design:paramtypes", [
      it.D === undefined ? Object : it.D,
      M_2 === undefined ? Object : M_2,
      tQ.r === undefined ? Object : tQ.r,
      ie.a === undefined ? Object : ie.a,
      tB.c === undefined ? Object : tB.c,
    ]),
  ],
  ip,
);
class ig extends E.P {
  _registerDynamicSharedServices(e) {
    e.register(y.a, A.r);
    e.register(k.G, T.D);
    e.register(c.W, u.B);
    e.register(b.H, M.U);
    e.register(p.V, g.G);
    e.register(_.R, h.E);
  }
  _registerChildLevelServices(e) {
    e.registry.register(K_1, h_1);
    e.registry.register(f.R, I.c);
    e.registry.register(g_1, rn);
    e.registry.register(G_1, t9);
    e.registry.register(d_1, t2);
    e.registry.register(c_1, rr);
    e.registry.register(m.o, v.Z);
    e.registry.register(B_1, D);
    e.registry.register(S.B, C.U);
    e.registry.register(M_1, tj);
    e.registry.register(R, er);
    e.registry.register(C_1, t5);
    e.registry.register(M_2, r8);
    e.registry.register(r6.l, ip);
    return Promise.resolve();
  }
  _execFlow(e) {
    return n._(function* () {
      const t = [
        () =>
          n._(function* () {
            yield o.cQ(e, l.X).getInstance();
            return d.nj();
          })(),
        () => o.cQ(e, B_1).bootstrap(),
      ];
      if (!(yield Promise.all(t.map((e) => e()))).every((e) => e.ok)) {
        throw Error("Failed to bootstrap AIGCModelStoreService");
      }
      o.cQ(e, r6.l);
      return Promise.resolve();
    })();
  }
  constructor(...e) {
    super(...e);
    this._serviceId = K_1;
  }
}
export { ig as O };
