import r from "QWK";
import s from "Kt";
import i from "NY";
import n from "K8";
import d from "iN";
import o from "fg";
import u from "b5";
import c from "yF";
import h from "KC";
import p from "qN";
import m from "dR";
import f from "cBI";
const l = "/mweb/v1/get_upload_token";
class _ {
  getUploadToken(scene) {
    return i
      ._(function* () {
        try {
          const t = yield this._networkClient.post(this._getUrl(l), {
            scene,
          });
          return n.TZ(o.o(t.data));
        } catch (error) {
          return u.r(error);
        }
      })
      .call(this);
  }
  _getUrl(path) {
    return this._httpApiSettingService.getRequestURL({
      domainType: d.X.DEFAULT,
      path,
    });
  }
  constructor(e, t) {
    var a;
    var r;
    this._containerService = e;
    this._httpApiSettingService = t;
    this._networkClient =
      ((a = this._containerService),
      (r = new h.LL().build({
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })),
      f.U(a, r),
      p.Wh(r),
      m.vo(r),
      c.P(r),
      r);
  }
}
_ = r.Cg(
  [
    r.Qj(0, s._),
    r.Qj(1, d.r),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [
      s._ === undefined ? Object : s._,
      d.r === undefined ? Object : d.r,
    ]),
  ],
  _,
);
export class G {
  getUploadToken(e) {
    return this._repository.getUploadToken(e);
  }
  constructor(e) {
    this._containerService = e;
    this._repository = this._containerService.createInstance(_);
  }
}
G = r.Cg(
  [
    r.Qj(0, s._),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [s._ === undefined ? Object : s._]),
  ],
  G,
);
