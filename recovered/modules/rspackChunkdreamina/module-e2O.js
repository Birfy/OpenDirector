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
import g from "Dm";
import h from "Rb";
import p from "sV8";
import v from "fHC";
import { R } from "./module-CRx_2.js";
import _ from "uit";
import { I } from "./module-qJ_2.js";
import y from "K8";
import { Y } from "./module-WV_2.js";
class b extends I {
  watch() {
    super.watch();
  }
  getMonitorConfig() {
    const e =
      (this._option.model.statusModel.timeModel.estimatedGenCostTime || 5000) +
      (this._option.model.statusModel.timeModel.estimatedQueueCostTime || 0);
    return n._(a._({}, super.getMonitorConfig()), {
      timeout: e,
      dynamicPollingInterval: {
        minInterval: e,
        maxInterval: 5 * e,
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
        g.X3(submitId);
        try {
          let a;
          let n;
          const o = yield this._historyService.getItemByIds({
            submitIds: ["".concat(submitId)],
          });
          if (!o.ok) {
            if ((a = (n = this._option).onPollingFailed) != null) {
              a.call(n, o.findJsError());
            }
            return {
              accepted: false,
              changed: false,
              done: false,
            };
          }
          const s = o.value.data["".concat(submitId)];
          const d = s.statusModel.recordStatus === h.DMLGenRecordStatus.Succeed;
          const l = s.statusModel.recordStatus === h.DMLGenRecordStatus.Failed;
          if (d) {
            this._option.onTaskDone(s);
          }
          if (l) {
            if (p.n(s)) {
              this._option.onModelChange((e) => {
                e.statusModel = s.statusModel;
                if (s.failedItemList) {
                  e.failedItemList = s.failedItemList;
                }
              });
            }
            this._option.onTaskFailed();
          }
          return {
            accepted: true,
            changed: false,
            done: d || l,
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
      return this.pollGenerateTask();
    }
    return Promise.resolve({
      accepted: false,
      done: false,
    });
  }
  fallbackToPolling() {}
  constructor(e, t, i, r, a) {
    super(t);
    this._dataService = i;
    this._historyService = r;
    this._websocketService = a;
    this.websocketEventName = v.NY.GenerateTaskStatusMessage;
    this._option = e;
  }
}
b = o.Cg(
  [
    o.Qj(1, s._),
    o.Qj(2, _.d),
    o.Qj(3, R),
    o.Qj(4, v.dE),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof TaskStatusMonitorParams === "undefined"
        ? Object
        : TaskStatusMonitorParams,
      s._ === undefined ? Object : s._,
      _.d === undefined ? Object : _.d,
      R === undefined ? Object : R,
      v.dE === undefined ? Object : v.dE,
    ]),
  ],
  b,
);
class S extends Y {
  submitTask(e) {
    return r
      ._(function* () {
        const t = yield this._option.processSubmitQueryParams();
        const i = yield this._dataService.submitTask(e, t);
        if (i.ok) {
          return y.TZ(i.value.data);
        }
        return i;
      })
      .call(this);
  }
  constructor(e, t) {
    super(e, t);
  }
}
S = o.Cg(
  [
    o.Qj(1, _.d),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof AudioTaskSubmissionParams === "undefined"
        ? Object
        : AudioTaskSubmissionParams,
      _.d === undefined ? Object : _.d,
    ]),
  ],
  S,
);
export class w extends U {
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
    this._taskSubmission = this._containerService.createInstance(S, {
      model: this.model,
      processSubmitTaskParams: () =>
        r
          ._(function* () {
            let e;
            let t;
            const i = yield this._processInputParamsConverter();
            if (!i.ok) {
              return i;
            }
            const r =
              (e = this._generatorCommerceManager) == null
                ? undefined
                : e.sceneOptions;
            const mVideoCommerceInfoList = yield (t =
              this._generatorCommerceManager) == null
              ? undefined
              : t.getCommerceInfos({
                  amount: r == null ? undefined : r.benefitAmount,
                });
            if (mVideoCommerceInfoList) {
              i.value.extend = n._(a._({}, i.value.extend), {
                mVideoCommerceInfoList,
              });
            }
            return i;
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
    let e;
    if ((e = this._taskStatusMonitor) != null) {
      e.dispose();
    }
    this._taskStatusMonitor = this._containerService.createInstance(b, {
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
      },
      onPollingFailed: (e) => {
        this._contentGeneratorTaskReportService.reportContentGeneratorTaskQueryError(
          this,
          e,
        );
      },
    });
    this._contentGeneratorTaskReportService.reportContentGeneratorTaskQueryStart(
      this,
    );
    this._taskStatusMonitor.watch();
  }
  constructor(e, t, i, r, a) {
    super(e, t, i, r);
    this._contentGeneratorTaskReportService = a;
    this._bootstrap();
  }
}
w = o.Cg(
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
  w,
);
