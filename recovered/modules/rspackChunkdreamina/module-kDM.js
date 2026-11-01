import i from "QWK";
import a from "SI";
import { sq } from "./module-Com.js";
import o from "Iv";
import s from "VN";
class c {
  getEventParams() {
    const {
      status,
      duration,
      orderId,
      errMsg,
      productId,
      logId,
      orderType,
      code,
      retCode,
    } = this._params;
    const { isVip, currentVipLevel } = this._vipService;
    return {
      status,
      duration,
      order_id: orderId,
      product_id: productId,
      err_msg: errMsg,
      order_type: orderType,
      log_id: logId,
      code,
      ret_code: retCode,
      is_vip: +!!isVip,
      user_subscribe_type: a.PR[currentVipLevel],
      credit_now: this._commercialCreditService.localCredit,
    };
  }
  constructor(e, t, r) {
    this._params = e;
    this._vipService = t;
    this._commercialCreditService = r;
    this.eventName = "make_order_dev";
  }
}
export function l(e, t) {
  sq(e, c, [t]);
}
c = i.Cg(
  [
    i.Qj(1, s._),
    i.Qj(2, o.sG),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [
      typeof IParams === "undefined" ? Object : IParams,
      s._ === undefined ? Object : s._,
      o.sG === undefined ? Object : o.sG,
    ]),
  ],
  c,
);
