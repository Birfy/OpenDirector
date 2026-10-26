import r from "NY";
import a from "oa";
import n from "bk";
import o from "QWK";
import s from "Kt";
import d from "Y6";
import l from "KV";
import u from "SgZ";
import c from "TK";
import m from "x5f";
import g from "wSn";
import { U } from "./module-XgG.js";
import { R as R_1 } from "./module-CRx_2.js";
import v from "fHC";
import I from "yr";
import _ from "Rb";
import f from "Dm";
import b from "aS";
import { I as I_1 } from "./module-qJ_2.js";
import C from "T7";
import M from "K8";
import { Y } from "./module-WV_2.js";
class k extends I_1 {
  watch() {
    super.watch();
    this._setupFirstFrameHandler();
    this.pollGenerateTask();
  }
  getMonitorConfig() {
    let e;
    let t;
    const timeout =
      (((e = this._option.model) == null
        ? undefined
        : e.statusModel.timeModel.estimatedGenCostTime) || 20000) +
      (((t = this._option.model) == null
        ? undefined
        : t.statusModel.timeModel.estimatedQueueCostTime) || 0);
    return n._(a._({}, super.getMonitorConfig()), {
      timeout,
      dynamicPollingInterval: {
        minInterval: 0.3 * timeout,
        maxInterval: 5 * timeout,
        step: 1000,
        resetOnChange: true,
      },
    });
  }
  pollGenerateTask() {
    return r
      ._(function* () {
        let e;
        let t;
        const { idModel } = this._option.model;
        const { submitId } = idModel;
        f.X3(submitId);
        try {
          let a;
          let n;
          let o;
          let s;
          let d;
          const l = yield this._historyService.getItemByIds({
            submitIds: ["".concat(submitId)],
            needBatch: this._option.needBatchPolling,
            submitIdToolNameMap: this._option.submitIdToolNameMap,
          });
          if (!l.ok) {
            if ((s = (d = this._option).onPollingFailed) != null) {
              s.call(d, l.findJsError());
            }
            return {
              accepted: false,
              changed: false,
              done: false,
            };
          }
          const taskResult = l.value.data["".concat(submitId)];
          if (!taskResult) {
            return {
              accepted: true,
              changed: false,
              done: false,
            };
          }
          const changed =
            (a =
              (n = (o = this._option).progressStrategy) == null
                ? undefined
                : n.call(o, {
                    taskResult,
                    currentModel: this._option.model,
                    onModelChange: this._option.onModelChange,
                  })) != null && a;
          const m =
            taskResult.statusModel.recordStatus ===
            _.DMLGenRecordStatus.Succeed;
          const g =
            taskResult.statusModel.recordStatus === _.DMLGenRecordStatus.Failed;
          if (m) {
            this._option.onTaskDone(taskResult);
          }
          if (g) {
            if (b.g(taskResult)) {
              this._option.onModelChange((e) => {
                e.statusModel = taskResult.statusModel;
                if (taskResult.failedItemList) {
                  e.failedItemList = taskResult.failedItemList;
                }
              });
            }
            this._option.onTaskFailed();
          }
          return {
            accepted: true,
            changed,
            done: m || g,
          };
        } catch (error) {
          if ((e = (t = this._option).onPollingFailed) != null) {
            e.call(t, error);
          }
          return {
            accepted: false,
            changed: false,
            done: false,
          };
        }
      })
      .call(this);
  }
  websocketMessageHandler(e) {
    if (this._option.model.idModel.submitId === e.submitId) {
      let t;
      if (
        (t = this._contentGeneratorTaskReportService.getPerfVideoReporter(
          e.submitId,
        )) != null
      ) {
        t.recordWebsocketFinishTime();
      }
      return this.pollGenerateTask();
    }
    return Promise.resolve({
      accepted: false,
      done: false,
    });
  }
  fallbackToPolling() {}
  _setupFirstFrameHandler() {
    var e = this._websocketService.registerEventHandler(
      v.NY.AigcVideoFirstFrame,
      (t) => {
        this._option.model.idModel.taskId;
        t.taskId;
        e.dispose();
      },
    );
    this._store.add(e);
  }
  constructor(e, t, i, r, a, n) {
    super(t);
    this._dataService = i;
    this._historyService = r;
    this._websocketService = a;
    this._contentGeneratorTaskReportService = n;
    this.websocketEventName = v.NY.GenerateTaskStatusMessage;
    this._option = e;
  }
}
k = o.Cg(
  [
    o.Qj(1, s._),
    o.Qj(2, I.g),
    o.Qj(3, R_1),
    o.Qj(4, v.dE),
    o.Qj(5, g.M),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof TaskStatusMonitorParams === "undefined"
        ? Object
        : TaskStatusMonitorParams,
      s._ === undefined ? Object : s._,
      I.g === undefined ? Object : I.g,
      R_1 === undefined ? Object : R_1,
      v.dE === undefined ? Object : v.dE,
      g.M === undefined ? Object : g.M,
    ]),
  ],
  k,
);
class S extends k {
  watch() {
    let e;
    let t;
    let i;
    let a;
    let n;
    const o =
      (e =
        (a = this._option.customPollingConfig) == null ||
        (i = a.dynamicPollingInterval) == null
          ? undefined
          : i.minInterval) != null
        ? e
        : 3000;
    const s =
      (t =
        (n = this._option.customPollingConfig) == null
          ? undefined
          : n.timeout) != null
        ? t
        : 86400000;
    const d = Date.now();
    const l = () =>
      r
        ._(function* () {
          if (!this._purePollingStopped) {
            if (Date.now() - d >= s) {
              return void this._handleTimeout(s);
            }
            let e;
            let t;
            let i = {
              done: false,
              accepted: false,
              changed: false,
            };
            try {
              i = yield this.pollGenerateTask();
            } catch (e) {
              i = {
                done: false,
                accepted: false,
                changed: false,
              };
            }
            if (!this._purePollingStopped) {
              if (i.done) {
                return void this._stopPurePolling();
              }
              if (i.accepted) {
                this._consecutiveFailures = 0;
              } else {
                this._consecutiveFailures += 1;
                if (
                  !this._hasReportedFailure &&
                  this._consecutiveFailures >= 5
                ) {
                  this._hasReportedFailure = true;
                  if ((e = (t = this._option).onPollingFailed) != null) {
                    e.call(
                      t,
                      Error(
                        "marketing-agent polling failed ".concat(
                          this._consecutiveFailures,
                          " times consecutively",
                        ),
                      ),
                    );
                  }
                }
              }
              const r = Math.min(o * 2 ** this._consecutiveFailures, 30000);
              const a = Math.max(0, s - (Date.now() - d));
              this._purePollingTimer = window.setTimeout(l, Math.min(r, a));
            }
          }
        })
        .call(this);
    l();
  }
  dispose() {
    this._stopPurePolling();
    super.dispose();
  }
  _handleTimeout(e) {
    this._stopPurePolling();
    if (!this._hasReportedFailure) {
      let t;
      let i;
      this._hasReportedFailure = true;
      if ((t = (i = this._option).onPollingFailed) != null) {
        t.call(
          i,
          Error("marketing-agent polling timeout after ".concat(e, "ms")),
        );
      }
    }
    this._option.onTaskFailed();
  }
  _stopPurePolling() {
    this._purePollingStopped = true;
    if (this._purePollingTimer !== undefined) {
      clearTimeout(this._purePollingTimer);
      this._purePollingTimer = undefined;
    }
  }
  constructor(e, t, i, r, a, n) {
    super(e, t, i, r, a, n);
    this._purePollingStopped = false;
    this._consecutiveFailures = 0;
    this._hasReportedFailure = false;
    this._option = e;
  }
}
S = o.Cg(
  [
    o.Qj(1, s._),
    o.Qj(2, I.g),
    o.Qj(3, R_1),
    o.Qj(4, v.dE),
    o.Qj(5, g.M),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof MarketingAgentTaskStatusMonitorParams === "undefined"
        ? Object
        : MarketingAgentTaskStatusMonitorParams,
      s._ === undefined ? Object : s._,
      I.g === undefined ? Object : I.g,
      R_1 === undefined ? Object : R_1,
      v.dE === undefined ? Object : v.dE,
      g.M === undefined ? Object : g.M,
    ]),
  ],
  S,
);
class A extends Y {
  submitTask(e) {
    return r
      ._(function* () {
        if (
          (t = this._contentGeneratorTaskReportService.getPerfVideoReporter(
            e.submitId,
          )) != null
        ) {
          t.recordSubmitTime();
        }
        var t;
        const i = yield this._option.processSubmitQueryParams();
        const r = yield this._dataService.submitTask(e, i);
        if (r.ok) {
          return M.TZ(r.value.data);
        }
        return r;
      })
      .call(this);
  }
  constructor(e, t, i) {
    super(e, t);
    this._contentGeneratorTaskReportService = i;
  }
}
A = o.Cg(
  [
    o.Qj(1, I.g),
    o.Qj(2, g.M),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof VideoTaskSubmissionParams === "undefined"
        ? Object
        : VideoTaskSubmissionParams,
      I.g === undefined ? Object : I.g,
      g.M === undefined ? Object : g.M,
    ]),
  ],
  A,
);
const R = (e) => {
  var t;
  var i;
  var { taskResult, currentModel, onModelChange } = e;
  var o = (t = taskResult.statusModel.timeModel.progress) != null ? t : 0;
  return (
    !(
      o <= ((i = currentModel.statusModel.timeModel.progress) != null ? i : 0)
    ) &&
    (onModelChange((e) => {
      e.statusModel.timeModel.progress = o;
    }),
    true)
  );
};
export class T extends U {
  get id() {
    return this.model.uniqueKey;
  }
  retryFailureTask() {
    let e;
    if ((e = this._taskSubmission) != null) {
      e.retryGenerateTask();
    }
  }
  _getDomainModelType() {
    return d.$.AIGCData;
  }
  _disposeTaskResources() {
    let e;
    let t;
    if ((e = this._taskSubmission) != null) {
      e.dispose();
    }
    if ((t = this._taskStatusMonitor) != null) {
      t.dispose();
    }
  }
  _submitGenerateTask() {
    this._taskSubmission = this._containerService.createInstance(A, {
      model: this.model,
      processSubmitTaskParams: () =>
        r
          ._(function* () {
            let e;
            const t = yield this._processInputParamsConverter();
            if (!t.ok) {
              return t;
            }
            const mVideoCommerceInfoList = yield (e =
              this._generatorCommerceManager) == null
              ? undefined
              : e.getCommerceInfos();
            if (mVideoCommerceInfoList && t.ok) {
              t.value.extend = n._(a._({}, t.value.extend), {
                mVideoCommerceInfo:
                  mVideoCommerceInfoList == null
                    ? undefined
                    : mVideoCommerceInfoList[0],
                mVideoCommerceInfoList,
              });
            }
            return t;
          })
          .call(this),
      processSubmitQueryParams: () =>
        r
          ._(function* () {
            let e;
            const webComponentOpenFlag = yield (e =
              this._generatorCommerceManager) == null
              ? undefined
              : e.getWebComponentOpenFlag();
            return n._(a._({}, this._submitQueryParams), {
              webComponentOpenFlag,
            });
          })
          .call(this),
      beforeSubmitTask: () => {
        var e;
        if ((e = this._generatorCommerceManager) != null) {
          e.handleBeforeSubmitTask();
        }
      },
      onModelChange: (e) => {
        e(this.model);
        this._syncModelUpdate(this.model, this.model.uniqueKey);
      },
      onSubmitSuccess: () => {
        var e;
        if ((e = this._generatorCommerceManager) != null) {
          e.handleSubmitSuccess();
        }
        this._createAndExecuteStatusMonitor();
        this._onSubmitSuccess.fire(this.model);
      },
      onSubmitFailed: () => {
        var e;
        if ((e = this._generatorCommerceManager) != null) {
          e.handleSubmitFailed();
        }
        this._onGeneratedFailed.fire(this.model);
      },
    });
    this._contentGeneratorTaskReportService.reportContentGeneratorTaskSubmitStart(
      this,
    );
    const e = this._taskSubmission.submitGenerateTask();
    this._contentGeneratorTaskReportService.listenAndReportSubmitTaskStatusBySubmitPromise(
      e,
      this,
    );
  }
  _createAndExecuteStatusMonitor() {
    if ((l = this._taskStatusMonitor) != null) {
      l.dispose();
    }
    let e;
    let t;
    let i;
    let r;
    let o;
    let s;
    let maxInterval;
    var l;
    const u = this._isMarketingAgentTask();
    const c = {
      model: this.model,
      onModelChange: (e) => {
        e(this.model);
        this._syncModelUpdate(this.model, this.model.uniqueKey);
      },
      onTaskDone: (e) => {
        var t;
        if ((t = this._generatorCommerceManager) != null) {
          t.handleTaskDone();
        }
        this._model = e;
        this._syncModelUpdate(this.model, this.model.uniqueKey);
        this._onGeneratedDone.fire(this.model);
        this._contentGeneratorTaskReportService.reportContentGeneratorTaskQueryEnd(
          this,
        );
        this.dispose();
      },
      onTaskFailed: () => {
        var e;
        if ((e = this._generatorCommerceManager) != null) {
          e.handleTaskFailed();
        }
        this._onGeneratedFailed.fire(this.model);
        this._contentGeneratorTaskReportService.reportContentGeneratorTaskQueryEnd(
          this,
        );
        this.dispose();
      },
      onPollingFailed: (e) => {
        this._contentGeneratorTaskReportService.reportContentGeneratorTaskQueryError(
          this,
          e,
        );
      },
      needBatchPolling: this._needBatchPolling,
      submitIdToolNameMap: this._submitIdToolNameMap,
      progressStrategy: u ? R : undefined,
    };
    if (u) {
      this._taskStatusMonitor = this._containerService.createInstance(
        S,
        n._(a._({}, c), {
          customPollingConfig:
            ((s =
              (e =
                (o =
                  this._configurationService.serverAbTestManager.getAbTestValueSync(
                    C.s.DreaminaMarketingAgentQueryConfig,
                    {},
                  )) == null || (i = o.polling_config) == null
                  ? undefined
                  : i.interval_seconds) != null
                ? e
                : 3),
            {
              timeout:
                1000 *
                ((t =
                  o == null || (r = o.polling_config) == null
                    ? undefined
                    : r.timeout_seconds) != null
                  ? t
                  : 86400),
              dynamicPollingInterval: {
                minInterval: (maxInterval = 1000 * s),
                maxInterval,
                step: 0,
                resetOnChange: true,
              },
            }),
        }),
      );
    } else {
      this._taskStatusMonitor = this._containerService.createInstance(k, c);
    }
    this._contentGeneratorTaskReportService.reportContentGeneratorTaskQueryStart(
      this,
    );
    this._taskStatusMonitor.watch();
  }
  _isMarketingAgentTask() {
    const e = this.model.idModel.submitId
      ? "".concat(this.model.idModel.submitId)
      : undefined;
    return (
      !!e && !!this._submitIdToolNameMap && u.b(this._submitIdToolNameMap[e])
    );
  }
  constructor(e, t, i, r, a, n) {
    super(e, t, i, r);
    this._contentGeneratorTaskReportService = a;
    this._configurationService = n;
    this._bootstrap();
  }
}
T = o.Cg(
  [
    o.Qj(1, s._),
    o.Qj(2, l.j),
    o.Qj(3, m.R),
    o.Qj(4, g.M),
    o.Qj(5, c.a),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof ContentGeneratorTaskParams === "undefined"
        ? Object
        : ContentGeneratorTaskParams,
      s._ === undefined ? Object : s._,
      l.j === undefined ? Object : l.j,
      m.R === undefined ? Object : m.R,
      g.M === undefined ? Object : g.M,
      c.a === undefined ? Object : c.a,
    ]),
  ],
  T,
);
