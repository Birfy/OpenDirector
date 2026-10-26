import a from "oa";
import n from "bk";
import o from "QWK";
import s from "Kt";
import c from "SI";
import { PQ } from "./module-Com.js";
import _ from "jh7";
import d from "VN";
import { ey } from "./module-fAr.js";
import { v as v_1 } from "./module-zi.js";
export var N = {
  Show: "show",
  ClickJoinVip: "click_join_vip",
  ClickGetCredits: "click_get_credits",
  Cancel: "cancel",
  Close: "close",
  ClickSwitchFreeModel: "click_switch_free_model",
};
class v {
  get otherReportParams() {
    return {
      second_page: "work_collection_detail",
    };
  }
  getEventParams() {
    const { action, source, isQuickPreview, isFromPreview, batchNumber } =
      this._params;
    const s = v_1(this._membershipService);
    const { isVip, currentVipLevel } = this._vipService;
    const d = ey(this._params.customReportParams);
    return a._(
      n._(
        a._(
          {
            action,
          },
          s,
        ),
        {
          is_vip: +!!isVip,
          user_subscribe_type: c.PR[currentVipLevel],
          source,
          is_quick_preview: Number(isQuickPreview != null ? isQuickPreview : 0),
          is_from_preview: Number(isFromPreview != null ? isFromPreview : 0),
          generate_num: batchNumber,
        },
      ),
      this.otherReportParams,
      d,
    );
  }
  constructor(e, t, r, i) {
    this._params = e;
    this._membershipService = t;
    this._vipService = r;
    this._containerService = i;
    this.eventName = "credit_limit_popup";
  }
}
export function l(e, t) {
  PQ(e, v, [t]);
}
v = o.Cg(
  [
    o.Qj(1, _.r3),
    o.Qj(2, d._),
    o.Qj(3, s._),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof IParams === "undefined" ? Object : IParams,
      typeof ICommercialMembershipServiceType === "undefined"
        ? Object
        : ICommercialMembershipServiceType,
      d._ === undefined ? Object : d._,
      s._ === undefined ? Object : s._,
    ]),
  ],
  v,
);
