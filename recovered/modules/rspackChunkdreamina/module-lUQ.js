import i from "NY";
import s from "QWK";
import { V } from "./module-UOD.js";
import { T } from "./module-xL4.js";
import o from "K8";
import { ru } from "./module-t7.js";
class d {
  get permissionSlots() {
    return this._permissionSlots;
  }
  getImageXToken() {
    return i
      ._(function* () {
        let e;
        const t = yield this._dreaminaUploadDataService.getUploadToken(3);
        if (!t.ok) {
          return t;
        }
        const r = T.cn;
        return o.TZ({
          accessKeyId: t.value.accessKeyId,
          secretAccessKey: t.value.secretAccessKey,
          sessionToken: t.value.sessionToken,
          expiredTime: t.value.expiredTime,
          currentTime: t.value.currentTime,
          region: (e = T[t.value.region]) != null ? e : r,
          serviceId: t.value.spaceName,
        });
      })
      .call(this);
  }
  constructor(e) {
    this._dreaminaUploadDataService = e;
    this._permissionSlots = ru([1]);
  }
}
export var Q = (d = s.Cg(
  [
    s.Qj(0, V),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [V === undefined ? Object : V]),
  ],
  d,
));
