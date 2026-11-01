import r from "NY";
import a from "QWK";
import n from "iA";
import o from "Kt";
import s from "gu";
import d from "yB";
import l from "cm";
export class E {
  get sceneOptions() {
    return this._options.sceneOptions;
  }
  getCommerceInfo(e) {
    return r
      ._(function* () {
        const t = yield this._getCommercialStrategyService();
        if (!this._options.sceneOptions) {
          return this._getDefaultCommerceInfo();
        }
        const { sceneOptions } = this._options;
        const { amount } = e != null ? e : {};
        const a = amount != null ? amount : l.N(sceneOptions);
        const n = t.commercialBenefitsManager.computeStrategyBenefit(
          sceneOptions.scene,
          sceneOptions,
        );
        if (n) {
          return {
            benefitType: n.benefitKey,
            resourceId: n.strategyId,
            resourceIdType: "str",
            resourceSubType: "aigc",
            amount: a,
          };
        }
        return this._getDefaultCommerceInfo();
      })
      .call(this);
  }
  getCommerceInfos(e) {
    return r
      ._(function* () {
        const t = yield this._getCommercialStrategyService();
        if (!this._options.sceneOptions) {
          return [];
        }
        const { sceneOptions } = this._options;
        const r = t.commercialBenefitsManager.computeStrategyBenefit(
          sceneOptions.scene,
          sceneOptions,
        );
        const { amount } = e != null ? e : {};
        const n = amount != null ? amount : l.N(sceneOptions);
        if (!r) {
          return [];
        }
        const o = [r.benefitKey, ...(r.extraBenefitKeys || [])].filter(
          (e) => !!e,
        );
        if (o.length === 0) {
          return [];
        }
        const { strategyId } = r;
        return o.map((benefitType) => ({
          benefitType,
          resourceId: strategyId,
          resourceIdType: "str",
          resourceSubType: "aigc",
          amount: n,
        }));
      })
      .call(this);
  }
  handleBeforeSubmitTask() {
    let e;
    let t;
    if ((e = (t = this._options).validateBeforeSubmit) != null) {
      e.call(t);
    }
    this._freezeCredit();
  }
  handleSubmitSuccess() {
    return r
      ._(function* () {
        yield this.syncCommercialStatus();
      })
      .call(this);
  }
  syncCommercialStatus() {
    return r
      ._(function* () {
        const e =
          (yield this._getCommercialFeatureService()).createTrialInfoManager(
            this._options.sceneOptions,
          );
        if (e == null ? undefined : e.hasCreditTrialTimes()) {
          this._trialInfoManager = e;
          e.forceUpdateTrialInfo();
          yield this._syncRemoteCreditHistory();
          return;
        }
        if (e == null ? undefined : e.hasFreeTrialTimes()) {
          e.forceUpdateTrialInfo();
          this._trialInfoManager = e;
          return;
        }
        this._syncRemoteCreditHistory();
      })
      .call(this);
  }
  handleSubmitFailed() {
    let e;
    if (
      (e = this._trialInfoManager) == null ? undefined : e.hasCreditTrialTimes()
    ) {
      this._trialInfoManager.forceUpdateTrialInfo();
      this._unFreezeCredit();
      return;
    }
    if (this._trialInfoManager) {
      this._trialInfoManager.forceUpdateTrialInfo();
    } else {
      this._unFreezeCredit();
    }
  }
  handleTaskFailed() {
    let e;
    if (
      (e = this._trialInfoManager) == null ? undefined : e.hasCreditTrialTimes()
    ) {
      this._trialInfoManager.forceUpdateTrialInfo();
      this._syncRemoteCreditHistory();
      return;
    }
    if (this._trialInfoManager) {
      this._trialInfoManager.triggerFailDeduct();
    } else {
      this._syncRemoteCreditHistory();
    }
  }
  handleTaskDone() {
    let e;
    if (
      (e = this._trialInfoManager) == null ? undefined : e.hasCreditTrialTimes()
    ) {
      this._trialInfoManager.forceUpdateTrialInfo();
      this._syncRemoteCreditHistory();
      return;
    }
    if (this._trialInfoManager) {
      this._trialInfoManager.triggerSuccessDeduct();
    } else {
      this._syncRemoteCreditHistory();
    }
  }
  getWebComponentOpenFlag() {
    return r
      ._(function* () {
        return (yield this._getCommercialFeatureService()).getWebComponentOpenFlag();
      })
      .call(this);
  }
  _freezeCredit() {
    return r
      ._(function* () {
        let e;
        const t = yield this._getCommercialCreditService();
        const { credits } =
          (e = (yield this._getCommercialFeatureService()).getNeedCredits(
            this._options.sceneOptions,
          )) != null
            ? e
            : {};
        if (credits === undefined) {
          throw Error("get credits failed");
        }
        const r = n.b(credits, 2, "", this._options.submitId);
        this._freezeCreditDisposeEvent = t.addLocalCreditHistory(r);
        return this._freezeCreditDisposeEvent;
      })
      .call(this);
  }
  _unFreezeCredit() {
    return r
      ._(function* () {
        let e;
        if ((e = this._freezeCreditDisposeEvent) != null) {
          e.dispose();
        }
        this._freezeCreditDisposeEvent = null;
        yield this._syncRemoteCreditHistory();
      })
      .call(this);
  }
  _syncRemoteCreditHistory() {
    return r
      ._(function* () {
        (yield this._getCommercialCreditService()).syncRemoteCreditHistory();
      })
      .call(this);
  }
  _getDefaultCommerceInfo() {
    return {
      benefitType: s.ni.BasicVideoOperation,
      resourceId: s.XG.Video,
      resourceIdType: "str",
      resourceSubType: "aigc",
    };
  }
  _getCommercialFeatureService() {
    return r
      ._(function* () {
        return yield this._commercialLoaderService.getInstance();
      })
      .call(this);
  }
  _getCommercialCreditService() {
    return r
      ._(function* () {
        return (yield this._commercialLoaderService.getInstance())
          .commercialCreditService;
      })
      .call(this);
  }
  _getCommercialStrategyService() {
    return r
      ._(function* () {
        return (yield this._commercialLoaderService.getInstance())
          .commercialStrategyService;
      })
      .call(this);
  }
  constructor(e, t, i) {
    this._options = e;
    this._commercialLoaderService = t;
    this._containerService = i;
    this._freezeCreditDisposeEvent = null;
  }
}
E = a.Cg(
  [
    a.Qj(1, d.X),
    a.Qj(2, o._),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof GeneratorCommerceManagerOptions === "undefined"
        ? Object
        : GeneratorCommerceManagerOptions,
      d.X === undefined ? Object : d.X,
      o._ === undefined ? Object : o._,
    ]),
  ],
  E,
);
