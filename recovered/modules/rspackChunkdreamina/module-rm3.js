import r from "NY";
import a from "oa";
import n from "bk";
import o from "QWK";
import s from "A7";
import d from "Kt";
import l from "qnN";
import u from "L4";
import c from "Y6";
import m from "KV";
import g from "x5f";
import h from "wSn";
import { U } from "./module-XgG.js";
import v from "Rb";
import I from "e3";
import _ from "fHC";
import { R as R_1 } from "./module-CRx_2.js";
import b from "Dm";
import { I as I_1 } from "./module-qJ_2.js";
import S from "K8";
import C from "SHI";
import { Y } from "./module-WV_2.js";
import A from "eyO";
class k extends I_1 {
  watch() {
    super.watch();
  }
  getMonitorConfig() {
    const timeout =
      (this._option.model.statusModel.timeModel.estimatedGenCostTime || 5000) +
      (this._option.model.statusModel.timeModel.estimatedQueueCostTime || 0);
    const minInterval = Math.max(timeout, 5000);
    const maxInterval = Math.max(5 * timeout, 5000);
    return n._(a._({}, super.getMonitorConfig()), {
      timeout,
      dynamicPollingInterval: {
        minInterval,
        maxInterval,
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
        b.X3(submitId);
        try {
          let a;
          let n;
          let o;
          let s;
          const d = yield this._historyService.getItemByIds({
            submitIds: [submitId],
            needBatch: this._option.needBatchPolling,
          });
          if (!d.ok) {
            if ((a = (n = this._option).onPollingFailed) != null) {
              a.call(n, d.findJsError());
            }
            return {
              accepted: false,
              changed: false,
              done: false,
            };
          }
          const l = d.value.data[submitId];
          const c = l.statusModel.recordStatus === v.DMLGenRecordStatus.Succeed;
          const m = l.statusModel.recordStatus === v.DMLGenRecordStatus.Failed;
          if (l.statusModel.statusCode === u.A.HistoryStatusPartialSuccess) {
            if ((o = (s = this._option).onTaskPartialSuccess) != null) {
              o.call(s, l);
            }
          }
          if (c) {
            this._option.onTaskDone(l);
          }
          if (m) {
            if (I.A(l)) {
              this._option.onModelChange((e) => {
                var t;
                var i;
                e.statusModel = l.statusModel;
                e.totalImageCount = l.totalImageCount;
                e.imageType = l.imageType;
                if (l.failedItemList) {
                  e.failedItemList = l.failedItemList;
                }
                if (
                  (t = (i = this._option).syncPollingFailureExtraData) != null
                ) {
                  t.call(i, e, l);
                }
              });
            }
            this._option.onTaskFailed();
          }
          return {
            accepted: true,
            changed: true,
            done: c || m,
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
        (t = this._contentGeneratorTaskReportService.getPerfImageReporter(
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
  constructor(e, t, i, r) {
    super(t);
    this._historyService = i;
    this._contentGeneratorTaskReportService = r;
    this.websocketEventName = _.NY.GenerateTaskStatusMessage;
    this._option = e;
  }
}
k = o.Cg(
  [
    o.Qj(1, d._),
    o.Qj(2, R_1),
    o.Qj(3, h.M),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof TaskStatusMonitorParams === "undefined"
        ? Object
        : TaskStatusMonitorParams,
      d._ === undefined ? Object : d._,
      R_1 === undefined ? Object : R_1,
      h.M === undefined ? Object : h.M,
    ]),
  ],
  k,
);
class T extends Y {
  submitTask(e) {
    return r
      ._(function* () {
        let t;
        const submitId = this._model.idModel.submitId;
        const r =
          (t = this._contentGeneratorTaskReportService.getPerfImageReporter(
            e.submitId,
          )) != null
            ? t
            : submitId
              ? this._contentGeneratorTaskReportService.getPerfImageReporter(
                  submitId,
                )
              : undefined;
        if (r != null) {
          r.recordSubmitTime();
        }
        const a = yield this._option.processSubmitQueryParams();
        const n = yield this._dataService.generateImage(e, a);
        if (n.ok) {
          return S.TZ(n.value.data);
        }
        return n;
      })
      .call(this);
  }
  _submitSuccessAndSyncChange(e) {
    this._option.onModelChange((t) => {
      t.idModel = e.idModel;
      t.historyRecordId = e.historyRecordId;
      t.statusModel.statusCode = e.statusModel.statusCode;
      t.statusModel.timeModel = e.statusModel.timeModel;
      t.statusModel.recordStatus = e.statusModel.recordStatus;
      t.statusModel.queueInfo = e.statusModel.queueInfo;
      t.statusModel.queueBenefitInfo = e.statusModel.queueBenefitInfo;
      t.statusModel.showConcurrencyUpgradeEntrance =
        e.statusModel.showConcurrencyUpgradeEntrance;
      t.confirmStatus = e.confirmStatus;
      if (e.preGenItemIds) {
        t.preGenItemIds = e.preGenItemIds;
      }
      if (e.agentOptData) {
        t.agentOptData = e.agentOptData;
      }
      if (e.forecastResolution) {
        t.forecastResolution = e.forecastResolution;
      }
      this._syncSubmitSuccessExtraData(t, e);
    });
    this._option.onSubmitSuccess();
  }
  constructor(e, t, i) {
    super(e, t);
    this._contentGeneratorTaskReportService = i;
  }
}
T = o.Cg(
  [
    o.Qj(1, C.G),
    o.Qj(2, h.M),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof ImageTaskSubmissionParams === "undefined"
        ? Object
        : ImageTaskSubmissionParams,
      C.G === undefined ? Object : C.G,
      h.M === undefined ? Object : h.M,
    ]),
  ],
  T,
);
class R extends I_1 {
  pollGenerateTask() {
    return r._(function* () {
      return yield Promise.resolve({
        accepted: false,
        changed: false,
        done: false,
      });
    })();
  }
  websocketMessageHandler(e) {
    if (this._option.model.idModel.submitId === e.submitId) {
      this._option.onModelChange((t) => {
        t.suggestions = A.S(e.sugData);
      });
      return Promise.resolve({
        accepted: true,
        done: false,
      });
    }
    return Promise.resolve({
      accepted: false,
      done: false,
    });
  }
  fallbackToPolling() {}
  constructor(e, t) {
    super(t);
    this.websocketEventName = _.NY.GenerateTaskSugDataMessage;
    this._option = e;
  }
}
R = o.Cg(
  [
    o.Qj(1, d._),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof TaskSuggestionMonitorParams === "undefined"
        ? Object
        : TaskSuggestionMonitorParams,
      d._ === undefined ? Object : d._,
    ]),
  ],
  R,
);
class P extends U {
  get id() {
    return this.model.uniqueKey;
  }
  get onGeneratePartialSuccess() {
    return this._onGeneratePartialSuccess.event;
  }
  retryFailureTask() {
    let e;
    if ((e = this._taskSubmission) != null) {
      e.retryGenerateTask();
    }
  }
  _getDomainModelType() {
    return c.$.AIGCData;
  }
  _disposeTaskResources() {
    let e;
    let t;
    let i;
    if ((e = this._taskSubmission) != null) {
      e.dispose();
    }
    if ((t = this._taskSuggestionMonitor) != null) {
      t.dispose();
    }
    if ((i = this._taskStatusMonitor) != null) {
      i.dispose();
    }
    this._onGeneratePartialSuccess.dispose();
  }
  _submitGenerateTask() {
    this._taskSubmission = this._containerService.createInstance(T, {
      model: this.model,
      processSubmitTaskParams: () =>
        r
          ._(function* () {
            return yield this._processInputParamsConverter();
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
      beforeSubmitTask: () => {},
      syncSubmitSuccessExtraData: this._syncSubmitSuccessExtraData,
      onModelChange: (e) => {
        e(this.model);
        if (
          [u.A.Init, u.A.SubmitOk].includes(this.model.statusModel.statusCode)
        ) {
          this.model.statusModel.statusCode = u.A.HistoryStatusThinking;
        }
        this._syncModelUpdate(this.model, this.model.uniqueKey);
      },
      onSubmitSuccess: () => {
        this._createAndExecuteSuggestionMonitor();
        this._createAndExecuteStatusMonitor();
        this._onSubmitSuccess.fire(this.model);
      },
      onSubmitFailed: () => {
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
    let e;
    if ((e = this._taskStatusMonitor) != null) {
      e.dispose();
    }
    this._taskStatusMonitor = this._containerService.createInstance(k, {
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
        this._replaceModelWithPollingData(e);
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
      },
      onTaskPartialSuccess: (e) => {
        var t;
        if ((t = this._generatorCommerceManager) != null) {
          t.handleSubmitSuccess();
        }
        this._replaceModelWithPollingData(e);
        this._syncModelUpdate(this.model, this.model.uniqueKey);
        this._onGeneratePartialSuccess.fire(this.model);
      },
      onPollingFailed: (e) => {
        this._contentGeneratorTaskReportService.reportContentGeneratorTaskQueryError(
          this,
          e,
        );
      },
      needBatchPolling: this._needBatchPolling,
      syncPollingFailureExtraData: this._syncPollingFailureExtraData,
    });
    this._contentGeneratorTaskReportService.reportContentGeneratorTaskQueryStart(
      this,
    );
    this._taskStatusMonitor.watch();
  }
  _replaceModelWithPollingData(e) {
    let maxGenerateCount_1;
    const maxGenerateCount = this.model.maxGenerateCount;
    if (l.EZ(maxGenerateCount)) {
      maxGenerateCount_1 = maxGenerateCount;
    } else if (l.EZ(e.maxGenerateCount)) {
      maxGenerateCount_1 = e.maxGenerateCount;
    }
    this._model = {
      suggestions: this.model.suggestions,
      ...e,
      maxGenerateCount: maxGenerateCount_1,
    };
  }
  _createAndExecuteSuggestionMonitor() {
    let e;
    if ((e = this._taskSuggestionMonitor) != null) {
      e.dispose();
    }
    this._taskSuggestionMonitor = this._containerService.createInstance(R, {
      model: this.model,
      onModelChange: (e) => {
        e(this.model);
        this._syncModelUpdate(this.model, this.model.uniqueKey);
      },
    });
    this._taskSuggestionMonitor.watch();
  }
  constructor(e, t, i, r, a) {
    super(e, t, i, r);
    this._contentGeneratorTaskReportService = a;
    this._onGeneratePartialSuccess = new s.v();
    this._bootstrap();
  }
}
export { P as a };
P = o.Cg(
  [
    o.Qj(1, d._),
    o.Qj(2, m.j),
    o.Qj(3, g.R),
    o.Qj(4, h.M),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof ContentGeneratorTaskParams === "undefined"
        ? Object
        : ContentGeneratorTaskParams,
      d._ === undefined ? Object : d._,
      m.j === undefined ? Object : m.j,
      g.R === undefined ? Object : g.R,
      h.M === undefined ? Object : h.M,
    ]),
  ],
  P,
);
