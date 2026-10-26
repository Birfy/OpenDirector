import a from "QWK";
import { PQ } from "./module-Com.js";
import o from "oh";
import s from "VN";
export var gu = {
  Show: "show",
  Cancel: "cancel",
  ClickPay: "click_pay",
  ClickChange: "click_change",
  ClickConfirm: "click_confirm",
};
export var PC = "change_plan";
const _ = (e, cycleUnit, r) => {
  var i = (e == null ? undefined : e.toLowerCase()) || "";
  var a = ((e, t) => {
    if (!e) {
      return "";
    }
    var r = e.toLowerCase();
    if (r === "year" || (r === "month" && t === 12)) {
      return "yearly";
    }
    return "monthly";
  })((cycleUnit == null ? undefined : cycleUnit.toLowerCase()) || "", r);
  return "".concat(i, "_").concat(a);
};
class d {
  getEventParams() {
    const {
      action,
      changeType,
      currentPlan,
      changePlan,
      userSubscribeType,
      currentPage,
    } = this._params;
    return {
      action,
      change_type: changeType,
      current_plan: currentPlan,
      change_plan: changePlan,
      user_subscribe_type: userSubscribeType,
      current_page: currentPage,
    };
  }
  constructor(e, t, r) {
    this._params = e;
    this._vipService = t;
    this._goodsService = r;
    this.eventName = "vip_related_page";
  }
}
export function ex(e, t) {
  PQ(e, d, [t]);
}
d = a.Cg(
  [
    a.Qj(1, s._),
    a.Qj(2, o.$),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof IParams === "undefined" ? Object : IParams,
      s._ === undefined ? Object : s._,
      o.$ === undefined ? Object : o.$,
    ]),
  ],
  d,
);
export var HG = (e) => {
  if (["RenewUpgrade", "RenewDiscountUpgrade", "UpgradeOneOff"].includes(e)) {
    return "upgrade";
  }
  return "subchange";
};
export var zT = (e) => {
  if (
    [
      "LateralOneOff",
      "UpgradeOneOff",
      "DownGradeOneOff",
      "RenewDiscountUpgrade",
      "RenewUpgrade",
    ].includes(e)
  ) {
    return "click_pay";
  }
  return "click_change";
};
export var P8 = (e) => {
  if (!(e == null ? undefined : e.flag)) {
    return "";
  }
  var t;
  var r;
  var i = (r = e.vipLevels) == null ? undefined : r[0];
  var a = i == null ? undefined : i.level;
  var { cycle, cycleUnit } = (t = e.currentAutoRenewPlan) != null ? t : {};
  return _(a, cycleUnit, cycle);
};
export var st = (e) => {
  if (!(e == null ? undefined : e.flag)) {
    return "free";
  }
  var t;
  var r = (t = e.vipLevels) == null ? undefined : t[0];
  return (r == null ? undefined : r.level.toLowerCase()) || "";
};
export var ML = (e) => {
  if (e) {
    return _(e.level, e.cycleUnit, e.subscribeCycle);
  }
  return "";
};
