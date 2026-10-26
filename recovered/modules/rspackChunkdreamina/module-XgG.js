import r from "o7";
import a from "A7";
import n from "H26";
import o from "Y6";
export class U extends r.jG {
  get onGeneratedDone() {
    return this._onGeneratedDone.event;
  }
  get onGeneratedFailed() {
    return this._onGeneratedFailed.event;
  }
  get onSubmitSuccess() {
    return this._onSubmitSuccess.event;
  }
  get onQueueDetailsChanged() {
    return this._onQueueDetailsChanged.event;
  }
  get model() {
    return this._model;
  }
  get initialGenerateType() {
    let e;
    if ((e = this._initialGenerateType) != null) {
      return e;
    }
    return this.model.generateType;
  }
  get sceneOptions() {
    let e;
    if ((e = this._generatorCommerceManager) == null) {
      return undefined;
    }
    return e.sceneOptions;
  }
  dispose() {
    this._onGeneratedDone.dispose();
    this._onGeneratedFailed.dispose();
    this._disposeTaskResources();
    super.dispose();
  }
  _bootstrap() {
    let e;
    let t;
    if (this._model) {
      if (this._initialGenerateType == null) {
        this._initialGenerateType = this._model.generateType;
      }
      this._createAndExecuteStatusMonitor();
    } else {
      this._model =
        (e = this._mockDataCreator) == null ? undefined : e.call(this);
      if (this._initialGenerateType == null) {
        this._initialGenerateType =
          (t = this._model) == null ? undefined : t.generateType;
      }
      this._submitGenerateTask();
    }
    this._listenQueueDetailsChange();
  }
  _syncModelUpdate(data, id) {
    this._domainModelChangeSyncService.syncDomainModelData({
      eventType: o.T.Update,
      modelType: o.$.AIGCData,
      id,
      data,
      delta: undefined,
    });
  }
  _listenQueueDetailsChange() {
    this._register(
      this._contentGeneratorTaskQueueService.onQueueDetailsChanged((e) => {
        if (e.uniqueKey === this.model.uniqueKey) {
          this.model.statusModel.queueInfo = e.queueDetails.queueInfo;
          this.model.statusModel.queueBenefitInfo =
            e.queueDetails.queueBenefitInfo;
          this.model.statusModel.timeModel.estimatedQueueCostTime =
            e.queueDetails.forecastCostTime.forecastQueueCost * n.K;
          this.model.statusModel.timeModel.estimatedGenCostTime =
            e.queueDetails.forecastCostTime.forecastGenerateCost * n.K;
          this._syncModelUpdate(this.model, this.model.uniqueKey);
          this._onQueueDetailsChanged.fire(this.model);
        }
      }),
    );
  }
  constructor(e, t, i, r) {
    var n;
    super();
    this._containerService = t;
    this._domainModelChangeSyncService = i;
    this._contentGeneratorTaskQueueService = r;
    this._onGeneratedDone = new a.v();
    this._onGeneratedFailed = new a.v();
    this._onSubmitSuccess = new a.v();
    this._onQueueDetailsChanged = new a.v();
    this._model = e.model;
    this._initialGenerateType =
      (n = e.model) == null ? undefined : n.generateType;
    this._mockDataCreator = e.mockDataCreator;
    this._processInputParamsConverter = e.processInputParamsConverter;
    this._generatorCommerceManager = e.generatorCommerceManager;
    this._submitQueryParams = e.submitQueryParams;
    this._needBatchPolling = e.needBatchPolling;
    this._syncSubmitSuccessExtraData = e.syncSubmitSuccessExtraData;
    this._syncPollingFailureExtraData = e.syncPollingFailureExtraData;
    this._submitIdToolNameMap = e.submitIdToolNameMap;
  }
}
