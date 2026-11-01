import r from "NY";
import a from "oa";
import n from "bk";
import o from "QWK";
import s from "Kt";
import d from "Y6";
import l from "KV";
import u from "x5f";
import c from "wSn";
import { U } from "./module-XgG.js";
import g from "Rb";
import h from "Dm";
import p from "R9c";
import v from "e3";
import { R } from "./module-CRx_2.js";
import _ from "fHC";
import f from "SHI";
import { I } from "./module-qJ_2.js";
import k from "K8";
import { Y } from "./module-WV_2.js";
import M from "eyO";
class y extends I {
  watch() {
    super.watch();
  }
  dispose() {
    this._acceptTaskUpdates = false;
    super.dispose();
  }
  getMonitorConfig() {
    const e =
      (this._option.model.statusModel.timeModel.estimatedGenCostTime || 5000) +
      (this._option.model.statusModel.timeModel.estimatedQueueCostTime || 0);
    const t = this._option.model.imageDisplayMode === p.d.OneByOne;
    const minInterval = t ? 5000 : Math.max(e, 5000);
    const maxInterval = t ? 25000 : Math.max(5 * e, 5000);
    return n._(a._({}, super.getMonitorConfig()), {
      timeout: t ? Math.min(e, 5000) : e,
      dynamicPollingInterval: {
        minInterval,
        maxInterval,
        step: 1000,
        resetOnChange: true,
      },
    });
  }
  pollGenerateTask(e) {
    return r
      ._(function* () {
        if (!this._acceptTaskUpdates) {
          return {
            accepted: false,
            changed: false,
            done: true,
          };
        }
        let t;
        let i;
        const { idModel } = this._option.model;
        const { submitId } = idModel;
        h.X3(submitId);
        try {
          let n;
          let o;
          let s;
          let d;
          const l = yield this._historyService.getItemByIds({
            submitIds: [submitId],
            needBatch: this._option.needBatchPolling,
          });
          if (!this._acceptTaskUpdates) {
            return {
              accepted: false,
              changed: false,
              done: true,
            };
          }
          if (!l.ok) {
            if ((n = (o = this._option).onPollingFailed) != null) {
              n.call(o, l.findJsError());
            }
            return {
              accepted: false,
              changed: false,
              done: false,
            };
          }
          const u = l.value.data[submitId];
          const c = u.statusModel.recordStatus === g.DMLGenRecordStatus.Succeed;
          const m = u.statusModel.recordStatus === g.DMLGenRecordStatus.Failed;
          if (!c && v.A(u)) {
            if (u.imageDisplayMode === p.d.OneByOne) {
              this._option.onModelChange((e) => {
                var t;
                var i;
                var r;
                var a;
                var n = new Map(e.itemList.map((e) => [e.id, e]));
                for (var o of u.itemList) {
                  n.set(o.id, o);
                }
                var s = new Map(
                  (a = e.failedItemList) == null
                    ? undefined
                    : a.map((e) => [e.id, e]),
                );
                for (var d of (t = u.failedItemList) != null ? t : []) {
                  s.set(d.id, d);
                }
                Object.assign(e, u, {
                  itemList: [...n.values()],
                  failedItemList: [...s.values()],
                  suggestions: e.suggestions,
                  finishedImageCount: Math.max(
                    (i = e.finishedImageCount) != null ? i : 0,
                    (r = u.finishedImageCount) != null ? r : 0,
                  ),
                });
              });
            } else if (
              !(
                m ||
                (u.imageDisplayMode === this._option.model.imageDisplayMode &&
                  ((s = u.modelInfo) == null
                    ? undefined
                    : s.generationWaitTipStarlingKey) ===
                    ((d = this._option.model.modelInfo) == null
                      ? undefined
                      : d.generationWaitTipStarlingKey))
              )
            ) {
              this._option.onModelChange((e) => {
                e.imageDisplayMode = u.imageDisplayMode;
                e.modelInfo = u.modelInfo;
              });
            }
          }
          if (c || m) {
            this._acceptTaskUpdates = false;
            if (e != null) {
              e();
            }
          }
          if (c && v.A(u)) {
            this._option.onTaskDone(u);
          }
          if (m) {
            if (v.A(u)) {
              this._option.onModelChange((e) => {
                var t;
                var i;
                e.statusModel = u.statusModel;
                if (u.failedItemList) {
                  e.failedItemList = u.failedItemList;
                }
                if (
                  (t = (i = this._option).syncPollingFailureExtraData) != null
                ) {
                  t.call(i, e, u);
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
          if ((t = (i = this._option).onPollingFailed) != null) {
            t.call(i, error);
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
    if (this._acceptTaskUpdates) {
      if (this._option.model.idModel.submitId === e.submitId) {
        return this.pollGenerateTask(() => {
          var t;
          if (
            (t = this._contentGeneratorTaskReportService.getPerfImageReporter(
              e.submitId,
            )) != null
          ) {
            t.recordWebsocketFinishTime();
          }
        });
      }
      return Promise.resolve({
        accepted: false,
        done: false,
      });
    }
    return Promise.resolve({
      accepted: false,
      done: true,
    });
  }
  fallbackToPolling() {}
  constructor(e, t, i, r, a, n) {
    super(t);
    this._dataService = i;
    this._historyService = r;
    this._websocketService = a;
    this._contentGeneratorTaskReportService = n;
    this.websocketEventName = _.NY.GenerateTaskStatusMessage;
    this._acceptTaskUpdates = true;
    this._option = e;
  }
}
y = o.Cg(
  [
    o.Qj(1, s._),
    o.Qj(2, f.G),
    o.Qj(3, R),
    o.Qj(4, _.dE),
    o.Qj(5, c.M),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof TaskStatusMonitorParams === "undefined"
        ? Object
        : TaskStatusMonitorParams,
      s._ === undefined ? Object : s._,
      f.G === undefined ? Object : f.G,
      R === undefined ? Object : R,
      _.dE === undefined ? Object : _.dE,
      c.M === undefined ? Object : c.M,
    ]),
  ],
  y,
);
class C extends Y {
  _syncSubmitSuccessExtraData(e, t) {
    let i;
    let r;
    e.imageDisplayMode = t.imageDisplayMode;
    e.modelInfo = t.modelInfo;
    e.totalImageCount = (i = t.totalImageCount) != null ? i : e.totalImageCount;
    e.finishedImageCount =
      (r = t.finishedImageCount) != null ? r : e.finishedImageCount;
    if (t.imageDisplayMode === p.d.OneByOne) {
      e.itemList = t.itemList;
      e.failedItemList = t.failedItemList;
    }
    super._syncSubmitSuccessExtraData(e, t);
  }
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
          return k.TZ(n.value.data);
        }
        return n;
      })
      .call(this);
  }
  constructor(e, t, i) {
    super(e, t);
    this._contentGeneratorTaskReportService = i;
  }
}
C = o.Cg(
  [
    o.Qj(1, f.G),
    o.Qj(2, c.M),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof ImageTaskSubmissionParams === "undefined"
        ? Object
        : ImageTaskSubmissionParams,
      f.G === undefined ? Object : f.G,
      c.M === undefined ? Object : c.M,
    ]),
  ],
  C,
);
class T extends I {
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
        t.suggestions = M.S(e.sugData);
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
T = o.Cg(
  [
    o.Qj(1, s._),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof TaskSuggestionMonitorParams === "undefined"
        ? Object
        : TaskSuggestionMonitorParams,
      s._ === undefined ? Object : s._,
    ]),
  ],
  T,
);
export class X extends U {
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
  }
  _submitGenerateTask() {
    this._taskSubmission = this._containerService.createInstance(C, {
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
            let t;
            let i;
            const r = yield (t = this._generatorCommerceManager) == null
              ? undefined
              : t.getWebComponentOpenFlag();
            return n._(a._({}, this._submitQueryParams), {
              webComponentOpenFlag:
                (e =
                  (i = this._submitQueryParams) == null
                    ? undefined
                    : i.webComponentOpenFlag) != null
                  ? e
                  : r,
            });
          })
          .call(this),
      beforeSubmitTask: () => {
        var e;
        if ((e = this._generatorCommerceManager) != null) {
          e.handleBeforeSubmitTask();
        }
      },
      syncSubmitSuccessExtraData: this._syncSubmitSuccessExtraData,
      onModelChange: (e) => {
        e(this.model);
        this._syncModelUpdate(this.model, this.model.uniqueKey);
      },
      onSubmitSuccess: () => {
        var e;
        if ((e = this._generatorCommerceManager) != null) {
          e.handleSubmitSuccess();
        }
        this._createAndExecuteSuggestionMonitor();
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
    let e;
    if ((e = this._taskStatusMonitor) != null) {
      e.dispose();
    }
    this._taskStatusMonitor = this._containerService.createInstance(y, {
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
        this._model = {
          suggestions: this.model.suggestions,
          ...e,
        };
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
  _createAndExecuteSuggestionMonitor() {
    let e;
    if ((e = this._taskSuggestionMonitor) != null) {
      e.dispose();
    }
    this._taskSuggestionMonitor = this._containerService.createInstance(T, {
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
    this._bootstrap();
  }
}
X = o.Cg(
  [
    o.Qj(1, s._),
    o.Qj(2, l.j),
    o.Qj(3, u.R),
    o.Qj(4, c.M),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof ContentGeneratorTaskParams === "undefined"
        ? Object
        : ContentGeneratorTaskParams,
      s._ === undefined ? Object : s._,
      l.j === undefined ? Object : l.j,
      u.R === undefined ? Object : u.R,
      c.M === undefined ? Object : c.M,
    ]),
  ],
  X,
);
