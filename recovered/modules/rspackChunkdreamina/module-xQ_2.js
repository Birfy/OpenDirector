import i from "QWK";
import a from "Iv";
import n from "SI";
import { sq } from "./module-Com.js";
import s from "VN";
class c {
  getEventParams() {
    const { productId, orderId, orderType, confirmStatus } = this._params;
    const { isVip, currentVipLevel } = this._vipService;
    return {
      status: confirmStatus,
      product_id: productId,
      order_id: orderId,
      order_type: orderType,
      is_vip: +!!isVip,
      user_subscribe_type: n.PR[currentVipLevel],
      credit_now: this._commercialCreditService.localCredit,
    };
  }
  constructor(e, t, r) {
    this._params = e;
    this._vipService = t;
    this._commercialCreditService = r;
    this.eventName = "pay_benefits_confirm";
  }
}
function u(e, t) {
  sq(e, c, [t]);
}
export { u as n };
c = i.Cg(
  [
    i.Qj(1, s._),
    i.Qj(2, a.sG),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [
      typeof IParams === "undefined" ? Object : IParams,
      s._ === undefined ? Object : s._,
      a.sG === undefined ? Object : a.sG,
    ]),
  ],
  c,
);
