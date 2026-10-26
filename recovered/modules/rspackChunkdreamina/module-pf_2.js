import s from "oa";
import n from "bk";
export var KL = {
  Member: "team_member",
  TeamPool: "team_all",
};
export var x8 = n._(s._({}, KL), {
  TeamIncome: "team_history_income",
  TeamConsumption: "team_history_consumption",
  TeamAllocation: "team_history_allocation",
});
export var $t = {
  VIP_ISSUED: "VIP_GIFT",
  DAILY_ISSUED: "FREEMIUM_RECEIVE",
  ONEOFF_PURCHASE: "ONE_OFF_PURCHASE",
  TEAMS_VIP_GIFT: "TEAMS_VIP_GIFT",
  ACTIVITY_GIFT: "ACTIVITY_GIFT",
  VIMO: "VIMO",
  UG_ACTIVITY: "UG_ACTIVITY",
  GENERATE_VIDEO: "GENERATE_VIDEO",
  REFUND: "REFUND",
  INIT_DATA: "INIT_DATA",
  EMPTY: "",
};
export function $R(t) {
  if (!t) {
    return 0;
  }
  if ("allocatableCredit" in t) {
    let e;
    const i =
      typeof (e = t.allocatableCredit) === "number" &&
      Number.isFinite(e) &&
      e >= 0
        ? e
        : undefined;
    if (typeof i === "number") {
      return i;
    }
  }
  return 0;
}
