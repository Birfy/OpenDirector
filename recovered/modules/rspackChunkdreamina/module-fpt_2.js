import i from "QWK";
import a from "SI";
import { sq } from "./module-Com.js";
import o from "Iv";
import s from "VN";
class c {
  getEventParams() {
    const { status, duration, logId, errMsg, code, orderId, orderType } =
      this._params;
    const { isVip, currentVipLevel } = this._vipService;
    return {
      status,
      duration,
      log_id: logId,
      err_msg: errMsg,
      code,
      order_id: orderId,
      order_type: orderType,
      is_vip: +!!isVip,
      user_subscribe_type: a.PR[currentVipLevel],
      credit_now: this._commercialCreditService.localCredit,
    };
  }
  constructor(e, t, r) {
    this._params = e;
    this._vipService = t;
    this._commercialCreditService = r;
    this.eventName = "query_order_dev";
  }
}
export function h(e, t) {
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
