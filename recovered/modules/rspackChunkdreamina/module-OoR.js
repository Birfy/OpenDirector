import r from "NY";
import o from "oa";
import n from "qa";
import a from "QWK";
import s from "K8";
import c from "yF";
import l from "si5";
import u from "b5";
import d from "KC";
import h from "xy";
import v from "dR";
import _ from "qN";
import p from "iN";
import m from "fg";
import g from "Kt";
import f from "cBI";
import { n as n_1 } from "./module-p3b.js";
class S {
  get _networkClient() {
    if (!this._networkClientInstance) {
      this._networkClientInstance = this._createNetworkClient();
    }
    return this._networkClientInstance;
  }
  fetchResources(e) {
    return r
      ._(function* () {
        try {
          const t = yield this._networkClient.post(
            this._getUrl(n_1.FETCH_RESOURCES),
            this._convertParamsToRequest(e),
          );
          const i = l.CM(e) ? e.config : e;
          const r = yield this._convertResponseToQueryToken(i, t);
          return s.TZ(r);
        } catch (error) {
          return u.r(error);
        }
      })
      .call(this);
  }
  _createNetworkClient() {
    const e = new d.LL().build({
      headers: {
        "Content-Type": "application/json",
        "Device-Type": "web",
      },
      withCredentials: true,
    });
    f.U(this._containerService, e);
    h.sc(e);
    v.vo(e);
    _.Wh(e);
    c.P(e);
    return e;
  }
  _getUrl(path) {
    return this._httpApiSettingService.getRequestURL({
      domainType: p.X.DEFAULT,
      path,
    });
  }
  _convertParamsToRequest(e) {
    const t = l.CM(e) ? e.config : e;
    const { limit } = t;
    const r = n._(t, ["limit"]);
    const a = this.getRequestData(r);
    const s = l.CM(e)
      ? {
          count: limit != null ? limit : 50,
          offset: e.offset,
        }
      : {
          count: limit != null ? limit : 50,
          offset: 0,
        };
    return m.w(o._({}, a, s));
  }
  _convertResponseToQueryToken(e, t) {
    const { itemList, nextOffset, hasMore } = m.o(t.data);
    const list = itemList.map((e) =>
      this.parseHeycanResponseDataToResources(e),
    );
    return l.yC(
      e,
      {
        list,
      },
      {
        hasMore,
        offset: nextOffset,
      },
    );
  }
  constructor(e, t) {
    this._containerService = e;
    this._httpApiSettingService = t;
  }
}
export { S as m };
S = a.Cg(
  [
    a.Qj(0, g._),
    a.Qj(1, p.r),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      g._ === undefined ? Object : g._,
      p.r === undefined ? Object : p.r,
    ]),
  ],
  S,
);
