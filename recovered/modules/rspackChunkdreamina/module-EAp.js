import r from "NY";
import o from "QWK";
import n from "K8";
import a from "yF";
import s from "iN";
import c from "fg";
import l from "b5";
import u from "KC";
import d from "dR";
import h from "qN";
import v from "ar";
import _ from "Kt";
import p from "cBI";
import { n as n_1 } from "./module-p3b.js";
export class F {
  get _networkClient() {
    if (!this._networkClientInstance) {
      this._networkClientInstance = this._createNetworkClient();
    }
    return this._networkClientInstance;
  }
  get _fetchCategoriesUrl() {
    return this._httpApiSettingService.getRequestURL({
      domainType: s.X.DEFAULT,
      path: n_1.FETCH_CATEGORIES,
    });
  }
  fetchCategories() {
    return r
      ._(function* () {
        try {
          const e = this.getRequestData();
          const t = yield this._networkClient.post(
            this._fetchCategoriesUrl,
            c.w(e),
          );
          const i = c.o(t.data);
          return n.TZ(i);
        } catch (error) {
          return l.r(error);
        }
      })
      .call(this);
  }
  _createNetworkClient() {
    const e = new u.LL().build({
      headers: {
        "Content-Type": "application/json",
        "Device-Type": "web",
        ch: this._environmentService.isDev ? "local_test" : "online",
      },
      withCredentials: true,
    });
    d.vo(e);
    p.U(this._containerService, e);
    h.Wh(e);
    a.P(e);
    return e;
  }
  constructor(e, t, i) {
    this._containerService = e;
    this._environmentService = t;
    this._httpApiSettingService = i;
  }
}
F = o.Cg(
  [
    o.Qj(0, _._),
    o.Qj(1, v.k),
    o.Qj(2, s.r),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      _._ === undefined ? Object : _._,
      v.k === undefined ? Object : v.k,
      s.r === undefined ? Object : s.r,
    ]),
  ],
  F,
);
