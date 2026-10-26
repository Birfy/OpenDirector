import a from "QWK";
import { _ } from "./module-Kt_2.js";
import i from "NY";
import n from "oa";
import c from "bk";
import l from "qa";
import { TZ } from "./module-K8.js";
import { w } from "./module-wKU.js";
import { r } from "./module-Sq_2.js";
import { B } from "./module-qm.js";
import { q } from "./module-pA_2.js";
class C {
  get _networkClient() {
    if (!this._networkClientInstance) {
      this._networkClientInstance =
        this._networkClientFactoryService.createNetworkClient();
    }
    return this._networkClientInstance;
  }
  submitAppeal(e) {
    const t = this;
    return i._(function* () {
      try {
        let { smsTicket = "", channel = "" } = e;
        let o = l._(e, ["smsTicket", "channel"]);
        let i = c._(n._({}, o), {
          smsTicket,
          channel,
        });
        yield t._networkClient.post(
          yield t._httpApiSettingService.getAsyncApi(
            "/commerce/v1/appeal/submit",
          ),
          w(i, true),
        );
        return TZ(undefined);
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
C = a.Cg(
  [
    a.Qj(0, B),
    a.Qj(1, q),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      B === undefined ? Object : B,
      q === undefined ? Object : q,
    ]),
  ],
  C,
);
export class F {
  submitAppeal(e) {
    return this._repository.submitAppeal(e);
  }
  constructor(e) {
    this._instantiationService = e;
    this._repository = this._instantiationService.createInstance(C);
  }
}
F = a.Cg(
  [
    a.Qj(0, _),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [_ === undefined ? Object : _]),
  ],
  F,
);
