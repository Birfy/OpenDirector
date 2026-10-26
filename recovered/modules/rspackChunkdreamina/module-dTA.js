import a from "QWK";
import n from "SI";
import o from "VN";
import { PQ } from "./module-Com.js";
export var Tg = {
  Show: "show",
  ClickToVipPage: "click_to_vip_page",
  ClickToOther: "click_to_other",
  CloseButton: "close_button",
  CloseOutside: "close_outside",
};
class u {
  getEventParams() {
    const {
      action,
      pageFrom,
      pageShape,
      page,
      resourceKey,
      activityId,
      activityName,
      deeplink,
      planId,
      planName,
    } = this._params;
    return {
      action,
      page_from: pageFrom,
      page_shape: pageShape,
      page,
      user_subscribe_type: n.PR[this._vipService.currentVipLevel],
      resource_key: resourceKey,
      activity_id: activityId != null ? activityId : "",
      activity_name: activityName != null ? activityName : "",
      url: deeplink != null ? deeplink : "",
      plan_id: planId,
      plan_name: planName,
    };
  }
  constructor(e, t) {
    this._params = e;
    this._vipService = t;
    this.eventName = "general_ad_placement";
  }
}
export function jA(e, t) {
  PQ(e, u, [t]);
}
u = a.Cg(
  [
    a.Qj(1, o._),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof IParams === "undefined" ? Object : IParams,
      o._ === undefined ? Object : o._,
    ]),
  ],
  u,
);
