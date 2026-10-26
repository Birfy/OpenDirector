import i from "oa";
import { PQ } from "./module-Com.js";
import { ey } from "./module-fAr.js";
class o {
  getEventParams() {
    const e = ey(this._params.customReportParams);
    const t = typeof window !== "undefined" && window.location !== undefined;
    return i._(
      {
        LandingPageUrl: t ? window.location.href : "",
        AppId: 513695,
        EventTs: Math.floor(Date.now() / 1000),
        growth_deepevent: "4",
        EventName: "ug_vip_pay_success",
      },
      e,
    );
  }
  constructor(e) {
    this._params = e;
    this.eventName = "vip_pay_success";
  }
}
export function v(e, t) {
  PQ(e, o, [t]);
}
