import r from "oa";
import o from "bk";
import n from "QWK";
import a from "SI";
import s from "Dm";
import c from "Kt";
import l from "gu";
import u from "yB";
import d from "kF";
class h extends d.v {
  constructor(...e) {
    super(...e);
    this.eventName = "general_ad_placement";
  }
}
export class y extends d.o {
  setRightTrackingDataBySceneOptios(e) {
    const t = this._commercialFeatureService.getInstanceSync();
    if (t) {
      const { currentVipLevel } = t.vipService;
      const n = t.getCommerceRightTrackingData(
        o._(r._({}, e), {
          scene: l.Sk.ImageBasicGenerate,
        }),
      );
      this.setParams({
        rightId: n == null ? undefined : n.rightId,
        userSubscribeType: a.PR[currentVipLevel],
        pageShape: "bar",
      });
    }
  }
  _getCollectorClass() {
    return h;
  }
  _validateParams(e) {
    this._validateRequiredFields(e);
  }
  _validateRequiredFields(e) {
    ["action", "page_from"].forEach((t) => {
      s.F4(e[t], "[GeneralAdPlacementReporter] ".concat(t, " is required"));
    });
  }
  constructor(e, t, i) {
    super(e, t);
    this._containerService = t;
    this._commercialFeatureService = i;
  }
}
y = n.Cg(
  [
    n.Qj(1, c._),
    n.Qj(2, u.X),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof Partial === "undefined" ? Object : Partial,
      c._ === undefined ? Object : c._,
      u.X === undefined ? Object : u.X,
    ]),
  ],
  y,
);
