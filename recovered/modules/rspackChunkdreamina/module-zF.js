import n from "oa";
import o from "QWK";
import s from "SI";
import c from "f0";
import u from "mU";
import { PQ } from "./module-Com.js";
import d from "VN";
import l from "oh";
export var $5 = {
  Show: "show",
  Click: "click",
};
export var Zg = {
  ToJoinVIP: "to_join_vip",
  ToAddCredits: "to_add_credits",
  EnoughCredits: "enough_credits",
};
class v {
  getEventParams() {
    const { action, status, activityId, deeplink } = this._params;
    const { currentVipLevel } = this._vipService;
    const { vipPriceList } = this._commercialGoodsService;
    const _ = c.w(vipPriceList);
    return n._(
      {
        action,
        user_subscribe_type: s.PR[currentVipLevel],
        status,
        activity_id: activityId,
        deeplink,
      },
      u.m(_),
    );
  }
  constructor(e, t, r) {
    this._params = e;
    this._vipService = t;
    this._commercialGoodsService = r;
    this.eventName = "top_account_button_bubble";
  }
}
export function tR(e, t) {
  PQ(e, v, [t]);
}
v = o.Cg(
  [
    o.Qj(1, d._),
    o.Qj(2, l.$),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof IParams === "undefined" ? Object : IParams,
      d._ === undefined ? Object : d._,
      l.$ === undefined ? Object : l.$,
    ]),
  ],
  v,
);
