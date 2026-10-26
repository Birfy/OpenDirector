import a from "SC";
import o from "MK";
export var _u = {
  INIT_COMMERCIAL_DATA_FIRST_STEP: "init_commercial_data_first_step",
  INIT_COMMERCIAL_DATA_SECOND_STEP: "init_commercial_data_second_step",
  INIT_COMMERCIAL_DATA: "init_commercial_data",
  RECEIVE_CREDIT: "receive_credit",
  MAKE_ORDER_VIP: "make_order_vip",
  MAKE_ORDER_CREDIT: "make_order_credit",
  QUERY_CREDIT_ORDER: "query_credit_order",
  QUERY_VIP_ORDER: "query_vip_order",
  PAY: "pay",
};
export var iJ = {
  Violation: "34010421",
  HostedPageNotAvailable: "36010113",
  GenerateViolation: "3003",
  OverseaViolation: "-5",
  CommercialRiskControlViolation: "1021",
};
export var Qk = (e) =>
  ({
    teams: o.Ay.t("web_dreamina_teams_default_membership", {}, "高级团队会员"),
    teams_super: o.Ay.t(
      "web_dreamina_teams_super_membership",
      {},
      "超级团队会员",
    ),
  })[e];
export var JI = (e) => {
  var { level } = e;
  if (level) {
    return {
      "": "",
      standard: o.Ay.t(
        "web_dre_m10n_subscription_plans_standard",
        {},
        "Standard Plan",
      ),
      artisan: o.Ay.t(
        "web_dre_m10n_subscription_plans_artisan",
        {},
        "Artisan Plan",
      ),
      maestro: o.Ay.t(
        "web_dre_m10n_subscription_plans_maestro",
        {},
        "Maestro Plan",
      ),
      ultra: o.Ay.t("dreamina_utra_subscribe", {}, "Ultra Plan"),
      teams: Qk("teams"),
      teams_super: Qk("teams_super"),
    }[level];
  }
  return "";
};
export var DZ = (e) => {
  var { level } = e;
  if (level) {
    return {
      "": "",
      standard: o.Ay.t(
        "web_dre_m10n_management_page_membership_standard",
        {},
        "Standard",
      ),
      artisan: o.Ay.t(
        "web_dre_m10n_management_page_membership_artisan",
        {},
        "Artisan",
      ),
      maestro: o.Ay.t(
        "web_dre_m10n_management_page_membership_maestro",
        {},
        "Maestro",
      ),
      ultra: o.Ay.t("dreamina_utra_subscribe", {}, "Ultra"),
      teams: Qk("teams"),
      teams_super: Qk("teams_super"),
    }[level];
  }
  return "";
};
export var xg = (e, t) => {
  if (t) {
    switch (e) {
      case 12:
        return o.Ay.t("web_team_subscribe_oneyear_sku_title", {}, "单年");
      case 3:
        return o.Ay.t("web_team_subscribe_onequarter_sku_title", {}, "单季");
      default:
        return o.Ay.t(
          "web_dre_m10n_subscription_page_staus_oneoff",
          {},
          "1-month",
        );
    }
  }
  switch (e) {
    case 12:
      return o.Ay.t(
        "web_dre_m10n_subscription_page_staus_yearly",
        {},
        "Yearly",
      );
    case 3:
      return o.Ay.t("dreamina_utra_renewal", {}, "Quarterly");
    case 1:
      return o.Ay.t(
        "web_dre_m10n_subscription_page_staus_monthly",
        {},
        "Monthly",
      );
    default:
      return "";
  }
};
export var MG = {
  "": 0,
  standard: 1,
  artisan: 2,
  maestro: 3,
  ultra: 4,
  teams: 3,
  teams_super: 3,
};
Object.values(MG);
export var PB = (e) => {
  if (e) {
    return "ultra";
  }
  return "maestro";
};
export var PR = {
  standard: "standard",
  artisan: "artisan",
  maestro: "maestro",
  ultra: "ultra",
  "": "free",
  teams: a.dx.teams.logType,
  teams_super: a.dx.teams_super.logType,
};
export var or = {
  dre_m10n_subscription_page_plans_yearly: "pay_annually",
  dre_m10n_subscription_page_plans_monthly: "pay_monthly",
  dre_m10n_subscription_page_plans_oneoff: "single_purchase",
  web_dre_m10n_subscription_page_plans_yearly: "pay_annually",
  web_dre_m10n_subscription_page_plans_monthly: "pay_monthly",
  web_dre_m10n_subscription_page_plans_oneoff: "single_purchase",
  dreamina_utra_renewal: "pay_quarterly",
  personal: "personal",
  team: "team",
};
export var uI = (e) =>
  (e &&
    {
      2: "处理中",
      3: "退款失败",
      4: "退款成功",
    }[e]) ||
  "";
Object.defineProperty(exports, "q_", {
  enumerable: true,
  get: () => 1000000,
});
Object.defineProperty(exports, "xz", {
  enumerable: true,
  get: () => 86400,
});
