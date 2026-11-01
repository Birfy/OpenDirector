import i from "oa";
import a from "bk";
import n from "QWK";
import o from "SI";
import s from "f0";
import c from "mU";
import { PQ } from "./module-Com.js";
import _ from "jh7";
import d from "VN";
import l from "oh";
import p from "Iv";
import { v as v_1 } from "./module-zi.js";
class v {
  getEventParams() {
    const { action, activityId, deeplink } = this._params;
    const n = v_1(this._membershipService);
    const { isVip, currentVipLevel } = this._vipService;
    const { vipPriceList } = this._commercialGoodsService;
    const l = s.w(vipPriceList);
    return i._(
      a._(
        i._(
          {
            name: "vip_text",
            action,
          },
          n,
        ),
        {
          is_vip: +!!isVip,
          user_subscribe_type: o.PR[currentVipLevel],
          status: this._genReportStatus(),
          credit_now: this._commercialCreditService.localCredit,
          activity_id: activityId,
          deeplink,
        },
      ),
      c.m(l),
    );
  }
  _genReportStatus() {
    const localCredit = this._commercialCreditService.localCredit;
    if (this._vipService.isVip) {
      if (localCredit < 1000000) {
        return "to_add_credits";
      }
      return "enough_credits";
    }
    return "to_join_vip";
  }
  constructor(e, t, r, i, a) {
    this._params = e;
    this._membershipService = t;
    this._vipService = r;
    this._commercialGoodsService = i;
    this._commercialCreditService = a;
    this.eventName = "top_account_button";
  }
}
export function vx(e, t) {
  PQ(e, v, [t]);
}
v = n.Cg(
  [
    n.Qj(1, _.r3),
    n.Qj(2, d._),
    n.Qj(3, l.$),
    n.Qj(4, p.sG),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof IParams === "undefined" ? Object : IParams,
      typeof ICommercialMembershipServiceType === "undefined"
        ? Object
        : ICommercialMembershipServiceType,
      d._ === undefined ? Object : d._,
      l.$ === undefined ? Object : l.$,
      p.sG === undefined ? Object : p.sG,
    ]),
  ],
  v,
);
