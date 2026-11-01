import i from "oa";
import a from "bk";
import n from "QWK";
import o from "SI";
import { sq } from "./module-Com.js";
import c from "Iv";
import u from "oh";
import _ from "VN";
class d {
  getEventParams() {
    const {
      status,
      duration,
      logId,
      paymentMethod,
      errMsg,
      backendRet,
      backendErrmsg,
      code,
      orderId,
      orderType,
      productId,
    } = this._params;
    const { isVip, currentVipLevel } = this._vipService;
    return a._(
      i._(
        {
          status,
          duration,
          log_id: logId,
          err_msg: errMsg,
          backend_ret: backendRet,
          backend_errmsg: backendErrmsg,
          cycle_type: ((e) => {
            let t;
            let r;
            const { commercialGoodsService, productId } = e;
            if (!productId) {
              return "un-auto";
            }
            const n =
              (t = commercialGoodsService.vipPriceList.find(
                (e) => e.productId === productId,
              )) != null
                ? t
                : commercialGoodsService.teamWorkspaceVipPriceList.find(
                    (e) => e.productId === productId,
                  );
            if ((r = n == null ? undefined : n.priceType) != null) {
              return r;
            }
            return "un-auto";
          })({
            commercialGoodsService: this._commercialGoodsService,
            productId,
          }),
        },
        {
          code,
          order_failure_code: code === undefined ? undefined : String(code),
        },
      ),
      {
        orderId,
        orderType,
        payment_method: paymentMethod,
        is_vip: +!!isVip,
        user_subscribe_type: o.PR[currentVipLevel],
        credit_now: this._commercialCreditService.localCredit,
      },
    );
  }
  constructor(e, t, r, i) {
    this._params = e;
    this._vipService = t;
    this._commercialCreditService = r;
    this._commercialGoodsService = i;
    this.eventName = "order_pay_dev";
  }
}
function l(e, t) {
  sq(e, d, [t]);
}
export { l as d };
d = n.Cg(
  [
    n.Qj(1, _._),
    n.Qj(2, c.sG),
    n.Qj(3, u.$),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof IParams === "undefined" ? Object : IParams,
      _._ === undefined ? Object : _._,
      c.sG === undefined ? Object : c.sG,
      u.$ === undefined ? Object : u.$,
    ]),
  ],
  d,
);
