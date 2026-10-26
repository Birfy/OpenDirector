import i from "QWK";
import a from "SI";
import { PQ } from "./module-Com.js";
import o from "oh";
import s from "VN";
import { G, w } from "./module-gzI.js";
class u {
  getEventParams() {
    const { action, source, toProductId } = this._params;
    const { isVip, currentVipLevel, vipInfo } = this._vipService;
    const { vipPriceList } = this._goodsService;
    const { cycleUnit, level, cycle } =
      (vipInfo == null ? undefined : vipInfo.currentAutoRenewPlan) || {};
    const l = (vipPriceList || []).find((e) => e.productId === toProductId);
    const { cycleUnit: cycleUnit_1, priceType, subscribeCycle } = l || {};
    return {
      action,
      source,
      membership_type_now: isVip
        ? level
          ? a.PR[level]
          : a.PR[currentVipLevel]
        : a.PR[""],
      membership_pay_type_now: (() => {
        var e;
        if (isVip) {
          if ((e = G(cycleUnit, cycle)) != null) {
            return e;
          }
          return "single_purchase";
        }
      })(),
      membership_type_buy: w(l),
      membership_pay_type_buy:
        priceType === "auto"
          ? G(cycleUnit_1, subscribeCycle)
          : priceType === "un-auto"
            ? "single_purchase"
            : undefined,
    };
  }
  constructor(e, t, r) {
    this._params = e;
    this._vipService = t;
    this._goodsService = r;
    this.eventName = "subscribe_plan_change_popup";
  }
}
export function iw(e, t) {
  PQ(e, u, [t]);
}
u = i.Cg(
  [
    i.Qj(1, s._),
    i.Qj(2, o.$),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [
      typeof IParams === "undefined" ? Object : IParams,
      s._ === undefined ? Object : s._,
      o.$ === undefined ? Object : o.$,
    ]),
  ],
  u,
);
