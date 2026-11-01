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
      if (!e) {
        throw Error("path is required");
      }
      return yield t._httpApiSettingService.getAsyncApi(e);
    })();
  }
  makeOrder(e) {
    const t = this;
    return i._(function* () {
      try {
        let r = yield t._networkClient.post(
          yield t._getApi("/commerce/v1/purchase/make_order"),
          w(e),
        );
        return TZ(r.data);
      } catch (error) {
        return r(error);
      }
    })();
  }
  query(e) {
    const t = this;
    return i._(function* () {
      try {
        let r = yield t._networkClient.post(
          yield t._getApi("/commerce/v1/purchase/query_order_status"),
          w(e),
        );
        return TZ(r.data);
      } catch (error) {
        return r(error);
      }
    })();
  }
  initTrade(e) {
    const t = this;
    return i._(function* () {
      try {
        let r = yield t._networkClient.post(
          yield t._getApi("/commerce/v3/trade/init_trade"),
          w(e),
        );
        return TZ(o(r.data));
      } catch (error) {
        return r(error);
      }
    })();
  }
  querySubscribeOrderStatus(e) {
    const t = this;
    return i._(function* () {
      try {
        let r = yield t._networkClient.post(
          yield t._getApi("/commerce/v1/subscription/query_order_status"),
          w(e),
        );
        return TZ(o(r.data));
      } catch (error) {
        return r(error);
      }
    })();
  }
  getSignInfos(e) {
    const t = this;
    return i._(function* () {
      try {
        let r = yield t._networkClient.post(
          yield t._getApi("/commerce/v1/subscription/get_sign_infos"),
          w(e),
        );
        return TZ(o(r.data));
      } catch (error) {
        return r(error);
      }
    })();
  }
  unsign(e) {
    const t = this;
    return i._(function* () {
      try {
        yield t._networkClient.post(
          yield t._getApi("/commerce/v1/subscription/unsign"),
          w(e),
        );
        return TZ(undefined);
      } catch (error) {
        return r(error);
      }
    })();
  }
  purchaseRecord(e) {
    const t = this;
    return i._(function* () {
      try {
        let r = yield t._networkClient.post(
          yield t._getApi("/lv/v1/purchase/purchase_record"),
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
class u {
  makeOrder(e) {
    return this._repository.makeOrder(e);
  }
  queryOrderStatus(e) {
    return this._repository.query(e);
  }
  initTrade(e) {
    return this._repository.initTrade(e);
  }
  querySubscribeOrderStatus(e) {
    return this._repository.querySubscribeOrderStatus(e);
  }
  getSignInfos(e) {
    return this._repository.getSignInfos(e);
  }
  unsign(e) {
    return this._repository.unsign(e);
  }
  purchaseRecord(e) {
    return this._repository.purchaseRecord(e);
  }
  constructor(e) {
    this._instantiationService = e;
    this._repository = this._instantiationService.createInstance(d);
  }
}
export { u as w };
u = a.Cg(
  [
    a.Qj(0, _),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [_ === undefined ? Object : _]),
  ],
  u,
);
