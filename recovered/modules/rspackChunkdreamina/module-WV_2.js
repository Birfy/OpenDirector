import r from "NY";
import a from "Rb";
import n from "o7";
import o from "K8";
import s from "CR";
import d from "L4";
import l from "aS";
export class Y extends n.jG {
  canRetryGenerate() {
    let e;
    return (e = this._model.statusModel.isAllowRetry) != null && e;
  }
  retryGenerateTask() {
    return r
      ._(function* () {
        if (this.canRetryGenerate()) {
          this._option.onModelChange((e) => {
            e.statusModel.statusCode = d.A.Init;
          });
          return this.submitGenerateTask();
        }
        return o.xz(s.Q.ErrClientCommon, "task can not Retry");
      })
      .call(this);
  }
  submitGenerateTask() {
    return r
      ._(function* () {
        try {
          if (
            ![d.A.Init, d.A.HistoryStatusPartialSuccess].includes(
              this._model.statusModel.statusCode,
            )
          ) {
            return o.xz(s.Q.ErrClientCommon, "task can not start");
          }
          if ((e = (t = this._option).beforeSubmitTask) != null) {
            e.call(t);
          }
          var e;
          var t;
          const i = yield this._option.processSubmitTaskParams();
          if (!i.ok) {
            const { code, msg } = i;
            const l = Object.values(s.Q).includes(code) ? code : s.Q.ErrOffline;
            this._option.onModelChange((e) => {
              e.statusModel.statusCode = d.A.Unknown;
              e.statusModel.errorCode = l;
              e.statusModel.recordStatus = a.DMLGenRecordStatus.Failed;
              e.statusModel.isAllowRetry = false;
              e.statusModel.errorMsg = msg;
              e.statusModel.showConcurrencyUpgradeEntrance = undefined;
            });
            this._option.onSubmitFailed();
            return i;
          }
          const u = yield this.submitTask(i.value);
          if (!u.ok) {
            const c = u.code === -1 ? s.Q.ErrOffline : u.code;
            const m = u.errorInfo;
            this._option.onModelChange((e) => {
              var t;
              e.statusModel.statusCode = u.code || d.A.Unknown;
              e.statusModel.errorCode = c;
              e.statusModel.recordStatus = a.DMLGenRecordStatus.Failed;
              e.statusModel.isAllowRetry = c === s.Q.ErrOffline;
              e.statusModel.errorMsg = u.msg;
              e.statusModel.failStarlingMessage =
                m == null ? undefined : m.failStarlingMessage;
              e.statusModel.showConcurrencyUpgradeEntrance =
                m == null ? undefined : m.showConcurrencyUpgradeEntrance;
              e.statusModel.logid =
                (t = m == null ? undefined : m.logId) != null
                  ? t
                  : m == null
                    ? undefined
                    : m.logid;
            });
            this._option.onSubmitFailed();
            return o.iX(c, u.msg || "Unknown error", u);
          }
          this._submitSuccessAndSyncChange(u.value);
          return o.nj();
        } catch (error) {
          this._option.onModelChange((t) => {
            t.statusModel.statusCode = d.A.Unknown;
            t.statusModel.errorCode = s.Q.ErrOffline;
            t.statusModel.recordStatus = a.DMLGenRecordStatus.Failed;
            t.statusModel.isAllowRetry = true;
            t.statusModel.errorMsg =
              (error == null ? undefined : error.message) || "submit Task fail";
            t.statusModel.showConcurrencyUpgradeEntrance = undefined;
          });
          this._option.onSubmitFailed();
          return o.iX(s.Q.ErrOffline, "submit Task fail", error);
        }
      })
      .call(this);
  }
  _submitSuccessAndSyncChange(e) {
    this._option.onModelChange((t) => {
      t.idModel = e.idModel;
      t.historyRecordId = e.historyRecordId;
      t.statusModel.statusCode = e.statusModel.statusCode;
      t.statusModel.timeModel = e.statusModel.timeModel;
      t.statusModel.queueInfo = e.statusModel.queueInfo;
      t.statusModel.queueBenefitInfo = e.statusModel.queueBenefitInfo;
      t.statusModel.showConcurrencyUpgradeEntrance =
        e.statusModel.showConcurrencyUpgradeEntrance;
      if (e.preGenItemIds) {
        t.preGenItemIds = e.preGenItemIds;
      }
      if (e.forecastResolution) {
        t.forecastResolution = e.forecastResolution;
      }
      if (e.agentOptData) {
        t.agentOptData = e.agentOptData;
      }
      if (l.g(t) && l.g(e)) {
        t.videoRatio = e.videoRatio;
      }
      this._syncSubmitSuccessExtraData(t, e);
    });
    this._option.onSubmitSuccess();
  }
  _syncSubmitSuccessExtraData(e, t) {
    let i;
    let r;
    if ((i = (r = this._option).syncSubmitSuccessExtraData) != null) {
      i.call(r, e, t);
    }
  }
  constructor(e, t) {
    super();
    this._option = e;
    this._dataService = t;
    this._model = e.model;
  }
}
