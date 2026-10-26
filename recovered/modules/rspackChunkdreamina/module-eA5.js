import r from "QWK";
import a from "Dm";
import n from "Kt";
import o from "n28";
import s from "yB";
import d from "gu";
import l from "kF";
import u from "ft";
import c from "AX";
class m extends l.v {
  constructor(...e) {
    super(...e);
    this.eventName = "vip_function_details";
  }
}
class g extends l.o {
  setParamsByCommercialSceneOptions(e) {
    const t = this._commercialFeatureService.getInstanceSync();
    if (t) {
      const i = t.getCommerceRightTrackingData(e);
      if (i) {
        this.setParams(i);
        const r = Array.isArray(e) ? e[0] : e;
        if (
          this._params.action === c.U.Use &&
          (r == null ? undefined : r.scene) === d.Sk.QueueSpeed &&
          t.membershipService.hasActiveMembership
        ) {
          this.setParams({
            enterSource: u.k.QueueSpeedByDefault,
          });
        }
        if ((r == null ? undefined : r.scene) === d.Sk.QueueSpeed) {
          this._saveEnterSourceToLocalStorage(this._params.enterSource);
        }
      }
    }
  }
  _saveEnterSourceToLocalStorage(enterSource) {
    const currentEnterSourceKey = o.X.currentEnterSourceKey;
    const i = {
      enterSource,
      timestamp: Date.now(),
    };
    localStorage.setItem(currentEnterSourceKey, JSON.stringify(i));
  }
  _getCollectorClass() {
    return m;
  }
  _validateParams(e) {
    ["action"].forEach((t) => {
      a.F4(e[t], "[VipFunctionDetailsReporter] ".concat(t, " is required"));
    });
  }
  constructor(e, t, i) {
    super(e, t);
    this._containerService = t;
    this._commercialFeatureService = i;
  }
}
export { g as l };
g = r.Cg(
  [
    r.Qj(1, n._),
    r.Qj(2, s.X),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [
      typeof Partial === "undefined" ? Object : Partial,
      n._ === undefined ? Object : n._,
      s.X === undefined ? Object : s.X,
    ]),
  ],
  g,
);
