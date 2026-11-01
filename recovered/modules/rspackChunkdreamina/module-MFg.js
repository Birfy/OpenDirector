import a from "QWK";
import { _ } from "./module-Kt_2.js";
import i from "NY";
import { TZ } from "./module-K8.js";
import { o, w } from "./module-wKU.js";
import { r } from "./module-Sq_2.js";
import { B } from "./module-qm.js";
import { q } from "./module-pA_2.js";
class d {
  get _networkClient() {
    if (!this._networkClientInstance) {
      this._networkClientInstance =
        this._networkClientFactoryService.createNetworkClient();
    }
    return this._networkClientInstance;
  }
  _getApi(e) {
    const t = this;
    return i._(function* () {
      return yield t._httpApiSettingService.getAsyncApi(e);
    })();
  }
  batchCheckWithholdDeduct(e) {
    const t = this;
    return i._(function* () {
      try {
        let r = yield t._networkClient.post(
          yield t._getApi("/commerce/v3/benefits/batch_check_withhold_deduct"),
          w(e),
        );
        return TZ(o(r.data));
      } catch (error) {
        return r(error);
      }
    })();
  }
  queryBenefitMetadata(e) {
    const t = this;
    return i._(function* () {
      try {
        let r = yield t._networkClient.post(
          yield t._getApi("/commerce/v3/resource/benefit_metadata"),
          w(e),
        );
        return TZ(o(r.data));
      } catch (error) {
        return r(error);
      }
    })();
  }
  batchGetUserBenefit(e) {
    const t = this;
    return i._(function* () {
      try {
        let r = yield t._networkClient.post(
          yield t._getApi("/commerce/v3/benefits/batch_get_user_benefit"),
          w(e),
        );
        return TZ(o(r.data));
      } catch (error) {
        return r(error);
      }
    })();
  }
  batchReportUsage(e) {
    const t = this;
    return i._(function* () {
      try {
        let r = yield t._networkClient.post(
          yield t._getApi("/commerce/v3/benefits/batch_report_usage"),
          w(e),
        );
        return TZ(o(r.data));
      } catch (error) {
        return r(error);
      }
    })();
  }
  exchangeBenefit(e) {
    const t = this;
    return i._(function* () {
      try {
        let r = yield t._networkClient.post(
          yield t._getApi("/commerce/v3/benefits/exchange"),
          w(e),
        );
        return TZ(o(r.data));
      } catch (error) {
        return r(error);
      }
    })();
  }
  checkQualification(e) {
    const t = this;
    return i._(function* () {
      try {
        let r = yield t._networkClient.post(
          yield t._getApi("/commerce/v3/benefits/check_qualification"),
          w(e),
        );
        return TZ(o(r.data));
      } catch (error) {
        return r(error);
      }
    })();
  }
  constructor(e, t) {
    this._httpApiSettingService = e;
    this._networkClientFactoryService = t;
  }
}
d = a.Cg(
  [
    a.Qj(0, B),
    a.Qj(1, q),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      B === undefined ? Object : B,
      q === undefined ? Object : q,
    ]),
  ],
  d,
);
export class j {
  batchCheckWithholdDeduct(e) {
    return this._repository.batchCheckWithholdDeduct(e);
  }
  queryBenefitMetadata(e) {
    return this._repository.queryBenefitMetadata(e);
  }
  batchGetUserBenefit(e) {
    return this._repository.batchGetUserBenefit(e);
  }
  batchReportUsage(e) {
    return this._repository.batchReportUsage(e);
  }
  exchangeBenefit(e) {
    return this._repository.exchangeBenefit(e);
  }
  checkQualification(e) {
    return this._repository.checkQualification(e);
  }
  constructor(e) {
    this._instantiationService = e;
    this._repository = this._instantiationService.createInstance(d);
  }
}
j = a.Cg(
  [
    a.Qj(0, _),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [_ === undefined ? Object : _]),
  ],
  j,
);
