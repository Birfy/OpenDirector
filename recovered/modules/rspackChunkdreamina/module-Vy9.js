import i from "oa";
import a from "bk";
import n from "QWK";
import o from "SI";
import { PQ } from "./module-Com.js";
import c from "VN";
export var X = {
  SiteMessage: "message",
  ApiTokenConsole: "api_token_console",
};
class _ {
  getEventParams() {
    const {
      action,
      currentPage,
      source,
      invoiceStatus,
      currentTab,
      invoiceType,
    } = this._params;
    const { isVip, currentVipLevel } = this._vipService;
    return a._(
      i._(
        {
          action,
          current_page: currentPage,
          source,
          invoice_status: invoiceStatus,
          current_tab: currentTab,
        },
        invoiceType
          ? {
              invoice_type: invoiceType,
            }
          : {},
      ),
      {
        is_vip: +!!isVip,
        user_subscribe_type: o.PR[currentVipLevel],
      },
    );
  }
  constructor(e, t) {
    this._params = e;
    this._vipService = t;
    this.eventName = "vip_related_page";
  }
}
function d(e, t) {
  PQ(e, _, [t]);
}
export { d as _ };
_ = n.Cg(
  [
    n.Qj(1, c._),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof IParams === "undefined" ? Object : IParams,
      c._ === undefined ? Object : c._,
    ]),
  ],
  _,
);
