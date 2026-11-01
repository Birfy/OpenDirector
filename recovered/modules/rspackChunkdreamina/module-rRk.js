import i from "QWK";
import n from "MWC";
import a from "MK";
import { i as i_1 } from "./module-xK1.js";
import c from "Kt";
export class Q {
  forceUpdateTrialInfo() {
    i_1({
      containerService: this._containerService,
    });
  }
  hasFreeTrialTimes() {
    return this._trialInfo.strategyFreeTrialTimes > 0;
  }
  hasCreditTrialTimes() {
    return !!this._trialInfo.isCreditTrial;
  }
  triggerSuccessDeduct() {
    if (this.hasFreeTrialTimes()) {
      this.forceUpdateTrialInfo();
      n.p.success(
        a.Ay.t(
          "dre_m10n_lip_sync_success_toast",
          {},
          "Generated successfully, 1 free time consumed.",
        ),
      );
    }
  }
  triggerFailDeduct() {
    if (this.hasFreeTrialTimes()) {
      this.forceUpdateTrialInfo();
      n.p.warning(
        a.Ay.t(
          "dre_m10n_lip_sync_fail_toast",
          {},
          "Generated failed, 1 free time has been returned.",
        ),
      );
    }
  }
  constructor(e, t) {
    this._trialInfo = e;
    this._containerService = t;
  }
}
Q = i.Cg(
  [
    i.Qj(1, c._),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [
      typeof IGetTrialInfo === "undefined" ? Object : IGetTrialInfo,
      c._ === undefined ? Object : c._,
    ]),
  ],
  Q,
);
