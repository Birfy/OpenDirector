import n from "oa";
import o from "QWK";
import s from "SI";
import c from "mU";
import { PQ } from "./module-Com.js";
import _ from "VN";
import { G, w } from "./module-gzI.js";
export var gy = {
  Show: "show",
};
export var tG = {
  PayButton: "pay_button",
  ModelFreeUseIcon: "model_free_use_icon",
};
class m {
  getEventParams() {
    const { action, toProduct, currentTabKey, bubblePosition } = this._params;
    const { isVip, currentVipLevel, vipInfo } = this._vipService;
    const { cycleUnit, level, cycle } =
      (vipInfo == null ? undefined : vipInfo.currentAutoRenewPlan) || {};
    const { productId, totalAmount } = toProduct || {};
    return n._(
      {
        action,
        bubble_position: bubblePosition,
        user_subscribe_type: s.PR[currentVipLevel],
        membership_type_buy: w(toProduct),
        membership_pay_type_buy: currentTabKey
          ? s.or[currentTabKey]
          : undefined,
        membership_type_now: isVip
          ? level
            ? s.PR[level]
            : s.PR[currentVipLevel]
          : s.PR[""],
        membership_pay_type_now: (() => {
          var e;
          if (isVip) {
            if ((e = G(cycleUnit, cycle)) != null) {
              return e;
            }
            return "single_purchase";
          }
        })(),
        goods_id: productId,
        pay_amount: totalAmount,
      },
      c.m(toProduct),
    );
  }
  constructor(e, t) {
    this._params = e;
    this._vipService = t;
    this.eventName = "vip_popup_pay_button_hover";
  }
}
export function kD(e, t) {
  PQ(e, m, [t]);
}
m = o.Cg(
  [
    o.Qj(1, _._),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof IParams === "undefined" ? Object : IParams,
      _._ === undefined ? Object : _._,
    ]),
  ],
  m,
);
