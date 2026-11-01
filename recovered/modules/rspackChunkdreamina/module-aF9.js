import a from "NY";
import r from "QWK";
import s from "K8";
import l from "b5";
import n from "iN";
import o from "Kt";
import { l as l_1 } from "./module-PHu.js";
import c from "KC";
import u from "xy";
import _ from "dR";
import h from "qN";
import p from "yF";
import k from "cBI";
export class V {
  get _networkClient() {
    let t;
    let e;
    if (this._networkClientInstance == null) {
      this._networkClientInstance =
        ((t = this._containerService),
        (e = new c.LL().build({
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })),
        k.U(t, e),
        u.sc(e),
        _.vo(e),
        h.Wh(e),
        p.P(e),
        e);
    }
    return this._networkClientInstance;
  }
  submitAuditJob(t, e) {
    return a
      ._(function* () {
        try {
          const i = yield this._networkClient.post(
            this._getApi(l_1.SUBMIT_ATTACHMENT_AUDIT_JOB),
            t,
            {
              signal: e == null ? undefined : e.signal,
            },
          );
          return s.TZ(i.data);
        } catch (error) {
          return l.r(error);
        }
      })
      .call(this);
  }
  _getApi(path) {
    return this._httpApiSettingService.getRequestURL({
      domainType: n.X.DEFAULT,
      path,
    });
  }
  constructor(t, e) {
    this._containerService = t;
    this._httpApiSettingService = e;
  }
}
V = r.Cg(
  [
    r.Qj(0, o._),
    r.Qj(1, n.r),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [
      o._ === undefined ? Object : o._,
      n.r === undefined ? Object : n.r,
    ]),
  ],
  V,
);
