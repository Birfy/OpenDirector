import r from "NY";
import s from "QWK";
import i from "UOD";
import n from "xL4";
import d from "K8";
class o {
  get permissionSlots() {
    return this._permissionSlots;
  }
  getVodToken() {
    return r
      ._(function* () {
        let e;
        const t = yield this._dreaminaUploadDataService.getUploadToken(1);
        if (!t.ok) {
          return t;
        }
        const a = n.T.cn;
        return d.TZ({
          accessKeyId: t.value.accessKeyId,
          secretAccessKey: t.value.secretAccessKey,
          sessionToken: t.value.sessionToken,
          expiredTime: t.value.expiredTime,
          currentTime: t.value.currentTime,
          region: (e = n.T[t.value.region]) != null ? e : a,
          spaceName: t.value.spaceName,
        });
      })
      .call(this);
  }
  constructor(e) {
    this._dreaminaUploadDataService = e;
    this._permissionSlots = [0, 1]
      .map((e) => 1 << e)
      .reduce((acc, item) => acc + item);
  }
}
var u = (o = s.Cg(
  [
    s.Qj(0, i.V),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [i.V === undefined ? Object : i.V]),
  ],
  o,
));
export { u as n };
