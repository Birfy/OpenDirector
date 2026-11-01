import n from "oa";
import o from "QWK";
import s from "SI";
import { r as r_1 } from "./module-zi.js";
import { PQ } from "./module-Com.js";
import _ from "jh7";
import d from "VN";
export var Xs = {
  Manage: "manage",
  TeamManage: "team_manage",
  CancelRenewalRetentionPrimary: "cancel_renewal_retention_primary",
  CancelRenewalRetentionSecondary: "cancel_renewal_retention_secondary",
  CancelRenewalReminderPopup: "cancel_renewal_reminder_popup",
};
export var ok = {
  MultiVipPopupTop: "multi_vip_popup_top",
  MultiVipPopupManagePlan: "multi_vip_popup_manage_plan",
  MultiVipPopupSwitchFree: "multi_vip_popup_switch_free",
};
class m {
  getEventParams() {
    const {
      action,
      currentPage,
      currentTab,
      clickTab,
      productId,
      source,
      subPage,
    } = this._params;
    const current_page =
      subPage === "team_page" &&
      (currentPage === undefined || currentPage === "manage")
        ? "team_manage"
        : currentPage;
    const { isVip, currentVipLevel } = this._vipService;
    return n._(
      {
        action,
        current_tab: currentTab,
        click_tab: clickTab,
        is_vip: +!!isVip,
        user_subscribe_type: s.PR[currentVipLevel],
        user_teams_subscribe_type: r_1(this._membershipService.snapshot.team),
        source,
        sub_page: subPage,
      },
      current_page
        ? {
            current_page,
          }
        : {},
      productId !== undefined
        ? {
            product_id: productId,
          }
        : {},
    );
  }
  constructor(e, t, r) {
    this._params = e;
    this._vipService = t;
    this._membershipService = r;
    this.eventName = "subscribe_plan_manage_popup";
  }
}
export function zH(e, t) {
  PQ(e, m, [t]);
}
m = o.Cg(
  [
    o.Qj(1, d._),
    o.Qj(2, _.r3),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof IParams === "undefined" ? Object : IParams,
      d._ === undefined ? Object : d._,
      typeof ICommercialMembershipServiceType === "undefined"
        ? Object
        : ICommercialMembershipServiceType,
    ]),
  ],
  m,
);
