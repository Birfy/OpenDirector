import a from "QWK";
import { _ } from "./module-Kt_2.js";
import i from "NY";
import n from "qa";
import { TZ } from "./module-K8.js";
import { o as o_1, w } from "./module-wKU.js";
import { r } from "./module-Sq_2.js";
import { B } from "./module-qm.js";
import { q } from "./module-pA_2.js";
class u {
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
  queryUserCanRefundOrderList(e) {
    const t = this;
    return i._(function* () {
      try {
        let r = yield t._networkClient.post(
          yield t._getApi("/commerce/v3/trade/user/can_refund_list"),
          w(e),
        );
        let a = r.data.refund_amount_map || {};
        let o = {};
        Object.keys(a).forEach((e) => {
          let t = o_1(a[e]);
          o[e] = {
            refundReasonList:
              (t == null ? undefined : t.refundReasonList) || [],
          };
        });
        let i = o_1(r.data);
        i.refundAmountMap = o;
        return TZ(i);
      } catch (error) {
        return r(error);
      }
    })();
  }
  queryUserRefundRecordList(e) {
    const t = this;
    return i._(function* () {
      try {
        let r = yield t._networkClient.post(
          yield t._getApi("/commerce/v3/trade/user/refund_record_list"),
          w(e),
        );
        return TZ(o_1(r.data));
      } catch (error) {
        return r(error);
      }
    })();
  }
  userApplyRefund(e) {
    const t = this;
    return i._(function* () {
      try {
        let { urlParamsString = "", headerConfig = {} } = e;
        let o = n._(e, ["urlParamsString", "headerConfig"]);
        let i = yield t._getApi("/commerce/v3/trade/user/apply_order_refund");
        let m = urlParamsString ? `${i}${urlParamsString}` : i;
        let s = yield t._networkClient.post(m, w(o), {
          headers: headerConfig,
        });
        return TZ(o_1(s.data));
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
u = a.Cg(
  [
    a.Qj(0, B),
    a.Qj(1, q),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      B === undefined ? Object : B,
      q === undefined ? Object : q,
    ]),
  ],
  u,
);
export class o {
  queryUserCanRefundOrderList(e) {
    return this._repository.queryUserCanRefundOrderList(e);
  }
  queryUserRefundRecordList(e) {
    return this._repository.queryUserRefundRecordList(e);
  }
  userApplyRefund(e) {
    return this._repository.userApplyRefund(e);
  }
  constructor(e) {
    this._instantiationService = e;
    this._repository = this._instantiationService.createInstance(u);
  }
}
o = a.Cg(
  [
    a.Qj(0, _),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [_ === undefined ? Object : _]),
  ],
  o,
);
