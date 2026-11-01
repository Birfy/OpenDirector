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
  queryResourcePosition(e) {
    const t = this;
    return i._(function* () {
      try {
        let r = yield t._networkClient.post(
          yield t._getApi("/commerce/v1/resource_position"),
          w(e),
        );
        return TZ(o(r.data));
      } catch (error) {
        return r(error);
      }
    })();
  }
  recordResourceAction(e) {
    const t = this;
    return i._(function* () {
      try {
        let r = yield t._networkClient.post(
          yield t._getApi("/commerce/v1/record_resource_action"),
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
export class J {
  queryResourcePosition(e) {
    return this._repository.queryResourcePosition(e);
  }
  recordResourceAction(e) {
    return this._repository.recordResourceAction(e);
  }
  constructor(e) {
    this._instantiationService = e;
    this._repository = this._instantiationService.createInstance(d);
  }
}
J = a.Cg(
  [
    a.Qj(0, _),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [_ === undefined ? Object : _]),
  ],
  J,
);
