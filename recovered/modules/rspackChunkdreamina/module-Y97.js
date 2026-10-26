import a from "oa";
import n from "bk";
import o from "QWK";
import s from "fg";
import c from "SI";
import u from "yK6";
import { PQ } from "./module-Com.js";
import d from "jh7";
import l from "VN";
import p from "EYk";
import { v as v_1 } from "./module-zi.js";
var v = {
  IdentityInsufficient: "identity_insufficient",
  CreditInsufficient: "credit_insufficient",
  Other: "other",
};
export { v as s };
class y {
  getEventParams() {
    const { reason, enterSource, needCredits } = this._params;
    const i = v_1(this._membershipService);
    const { isVip, currentVipLevel } = this._vipService;
    const d = u.d({
      scene: this._params.scene,
      sceneOptions: this._params.sceneOptions,
      commercialStrategyService: this._commercialStrategyService,
    });
    const l = d ? s.w(d) : undefined;
    return a._(
      n._(
        a._(
          {
            reason,
          },
          i,
        ),
        {
          is_vip: +!!isVip,
          user_subscribe_type: c.PR[currentVipLevel],
          need_credits:
            needCredits == null ? undefined : needCredits.toString(),
          enter_source: enterSource,
          is_triplets: this._commercialStrategyService
            .isCommercialComponentizationEnabled
            ? "1"
            : "0",
        },
      ),
      l != null ? l : {},
    );
  }
  constructor(e, t, r, i) {
    this._params = e;
    this._membershipService = t;
    this._vipService = r;
    this._commercialStrategyService = i;
    this.eventName = "right_auth_failed_details";
  }
}
export function q(e, t) {
  PQ(e, y, [t]);
}
y = o.Cg(
  [
    o.Qj(1, d.r3),
    o.Qj(2, l._),
    o.Qj(3, p.a),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof IParams === "undefined" ? Object : IParams,
      typeof ICommercialMembershipServiceType === "undefined"
        ? Object
        : ICommercialMembershipServiceType,
      l._ === undefined ? Object : l._,
      p.a === undefined ? Object : p.a,
    ]),
  ],
  y,
);
