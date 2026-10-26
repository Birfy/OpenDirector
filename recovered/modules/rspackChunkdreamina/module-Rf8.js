import i from "QWK";
import a from "SI";
import { PQ } from "./module-Com.js";
import o from "VN";
class s {
  getEventParams() {
    const { currentVipLevel } = this._vipService;
    const { action, status, isVip, sku, orderId, payChannel, source } =
      this._params;
    return {
      action,
      status,
      source,
      is_vip: +!!isVip,
      user_subscribe_type: a.PR[currentVipLevel],
      sku,
      pay_channel: payChannel,
      order_id: orderId,
    };
  }
  constructor(e, t) {
    this._params = e;
    this._vipService = t;
    this.eventName = "payment_detail_popup";
  }
}
export function E$(e, t) {
  PQ(e, s, [t]);
}
s = i.Cg(
  [
    i.Qj(1, o._),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [
      typeof IParams === "undefined" ? Object : IParams,
      o._ === undefined ? Object : o._,
    ]),
  ],
  s,
);
