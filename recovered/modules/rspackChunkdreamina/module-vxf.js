import i from "oa";
import n from "bk";
import _a from "bfR";
import s from "SI";
import c from "Ux";
import l from "emQ";
import d from "PB";
import u from "Fo";
import p from "wnF";
import m from "wb";
import h from "MK";
export var _6 = (e) => {
  var { isFreeItem, goodsInfo, userInfo, currentSubscribedProductId } = e;
  var { changeType, level, priceType, productId, subscribeCycle } = goodsInfo;
  var { currentAutoRenewPlan, flag, curVipLevel } =
    userInfo != null ? userInfo : {};
  if (priceType === "un-auto") {
    return "Purchase";
  }
  if (isFreeItem && !flag) {
    return "CurrentPlan";
  }
  if (
    (currentAutoRenewPlan == null ? undefined : currentAutoRenewPlan.cycle) !==
      subscribeCycle ||
    (currentAutoRenewPlan == null ? undefined : currentAutoRenewPlan.level) !==
      level ||
    (currentSubscribedProductId && currentSubscribedProductId !== productId)
  ) {
    if (isFreeItem) {
      return "SwitchFree";
    }
    if (changeType === "UPGRADE") {
      return "Upgrade";
    }
    return "SubscribeTo";
  }
  return "ManageSubscription";
};
export var xX = (e) => {
  var { goodsInfo, userInfo, isFreeItem } = e;
  var { flag } = userInfo != null ? userInfo : {};
  var { level, currencyTips, currencyCode } = goodsInfo;
  var p = _6(e);
  switch (p) {
    case "CurrentPlan":
      return h.Ay.t(
        "web_dre_m10n_subscription_page_btn_current_plan",
        {},
        "Current plan",
      );
    case "ManageSubscription":
      return h.Ay.t(
        "web_dre_m10n_subscription_page_btn_manage_subscription",
        {},
        "Manage subscription",
      );
    case "SwitchFree":
      return h.Ay.t(
        "web_dre_m10n_subscription_page_btn_switch",
        {
          string0: h.Ay.t("web_dre_m10n_subscription_plans_free", {}, "Free"),
        },
        "Subscribe to {string0}",
      );
  }
  if (c.L(goodsInfo)) {
    return h.Ay.t("free_trial_normal_button", {
      price: m.X(
        currencyCode,
        currencyTips,
        goodsInfo.lowPriceTrialInfo.trialPrice,
      ),
    });
  }
  if (l.q(goodsInfo)) {
    var _ = m.X(currencyCode, currencyTips, goodsInfo.totalAmount);
    if (goodsInfo.subscribeCycle === 12) {
      return h.Ay.t(
        "free_trial_normal_button_dis_yr",
        {
          price: _,
          num: d.f(goodsInfo.totalAmount / goodsInfo.normalAmount),
        },
        "{price} 首年{num}折",
      );
    }
    if (goodsInfo.subscribeCycle === 3) {
      return h.Ay.t(
        "free_trial_normal_button_dis_qu",
        {
          price: _,
          num: d.f(goodsInfo.totalAmount / goodsInfo.normalAmount),
        },
        "{price} 首季{num}折",
      );
    }
    return h.Ay.t(
      "free_trial_normal_button_dis_mn",
      {
        price: _,
        num: d.f(goodsInfo.totalAmount / goodsInfo.normalAmount),
      },
      "{price} 首月{num}折",
    );
  }
  switch (p) {
    case "Purchase":
      if (isFreeItem) {
        if (flag) {
          return h.Ay.t(
            "web_dre_m10n_subscription_page_btn_switch",
            {
              string0: h.Ay.t(
                "web_dre_m10n_subscription_plans_free",
                {},
                "Free",
              ),
            },
            "Subscribe to {string0}",
          );
        } else {
          return h.Ay.t(
            "web_dre_m10n_subscription_page_btn_current_plan",
            {},
            "Current plan",
          );
        }
      }
      return h.Ay.t(
        "web_dre_m10n_subscription_page_btn_purchase",
        {},
        "Purchase",
      );
    case "Upgrade":
      if (goodsInfo.subscribeCycle === 12) {
        return h.Ay.t(
          "web_dre_m10n_subscription_page_btn_subcribe_yearly",
          {
            string0: s.DZ({
              level,
            }),
          },
          "Upgrade to {string0} yearly",
        );
      }
      if (goodsInfo.subscribeCycle === 3) {
        return h.Ay.t(
          "dreamina_utra_page_btn_subcribe_quarterly",
          {
            string0: s.DZ({
              level,
            }),
          },
          "Upgrade to {string0} quarterly",
        );
      }
      return h.Ay.t(
        "web_dre_m10n_subscription_page_btn_subcribe_monthly",
        {
          string0: s.DZ({
            level,
          }),
        },
        "Upgrade to {string0} monthly",
      );
    default:
      if (goodsInfo.subscribeCycle === 12) {
        return h.Ay.t(
          "web_dre_m10n_subscription_page_btn_switch_yearly",
          {
            string0: s.DZ({
              level,
            }),
          },
          "Switch to {string0} yearly",
        );
      }
      if (goodsInfo.subscribeCycle === 3) {
        return h.Ay.t(
          "dreamina_utra_page_btn_switch_quarterly",
          {
            string0: s.DZ({
              level,
            }),
          },
          "Switch to {string0} quarterly",
        );
      }
      return h.Ay.t(
        "web_dre_m10n_subscription_page_btn_switch_monthly",
        {
          string0: s.DZ({
            level,
          }),
        },
        "Switch to {string0} monthly",
      );
  }
};
export var RY = (e) => {
  var t = _6(e);
  var { userInfo, goodsInfo } = e;
  var { currentAutoRenewPlan } = userInfo != null ? userInfo : {};
  switch (t) {
    case "CurrentPlan":
      return true;
    case "SwitchFree":
      if (goodsInfo.priceType === "un-auto") {
        return true;
      }
      return !currentAutoRenewPlan;
    case "Upgrade":
    case "SubscribeTo":
      return (
        (currentAutoRenewPlan == null
          ? undefined
          : currentAutoRenewPlan.cycle) &&
        (currentAutoRenewPlan == null
          ? undefined
          : currentAutoRenewPlan.cycle) > goodsInfo.subscribeCycle
      );
    case "Purchase":
      return goodsInfo.totalAmount === 0;
    default:
      return false;
  }
};
const g = (e) => {
  var t;
  var {
    vipBenefitPackage,
    cycleUnit,
    currencyTips,
    currencyCode,
    normalAmount,
    totalAmount,
    vipPriceTips,
    subscribeCycle,
  } = e;
  var { userCredit } = vipBenefitPackage != null ? vipBenefitPackage : {};
  var v = normalAmount || totalAmount;
  var _ = m.X(currencyCode, currencyTips, v);
  var y = p.b(currencyCode, v != null ? v : 0);
  var g = m.X(currencyCode, currencyTips, e.originPriceAmount);
  var b = p.b(currencyCode, (t = e.originPriceAmount) != null ? t : 0);
  var f = _a(vipPriceTips, {
    symbol: currencyTips,
    precision: 2 * !!vipPriceTips.includes("."),
  }).format();
  switch (subscribeCycle) {
    case 12:
      return {
        priceTips: _,
        priceAmount: y,
        originPriceTips: g,
        originPriceAmount: b,
        cycleTips: h.Ay.t(
          "web_dre_m10n_subscription_page_plans_peryear",
          {
            price: "",
          },
          "{price}/year",
        ),
        priceDesc: {
          firstPart: h.Ay.t(
            "web_dre_m10n_subscription_page_plans_price_permonth",
            {
              price: f,
            },
            "{price}/month",
          ),
          secondPart: h.Ay.t("dreamina_ultra_subs_cancel"),
        },
      };
    case 3:
      return {
        priceTips: _,
        priceAmount: y,
        originPriceTips: g,
        originPriceAmount: b,
        cycleTips: h.Ay.t(
          "web_dre_m10n_subscription_page_plans_perquarter",
          {
            price: "",
          },
          "quarter{price}",
        ),
        priceDesc: {
          firstPart: h.Ay.t(
            "web_dre_m10n_subscription_page_plans_price_permonth",
            {
              price: f,
            },
            "{price}/month",
          ),
          secondPart: h.Ay.t("dreamina_ultra_subs_cancel"),
        },
      };
    default:
      return {
        priceTips: _,
        priceAmount: y,
        originPriceTips: g,
        originPriceAmount: b,
        cycleTips: h.Ay.t(
          "web_dre_m10n_subscription_page_plans_permonth",
          {},
          "/month",
        ),
        priceDesc: {
          secondPart: h.Ay.t("dreamina_ultra_subs_cancel"),
        },
      };
  }
};
export var b4 = (e) => {
  if (e.isFakeUltraPlan) {
    var t = g(e);
    return n._(i._({}, t), {
      priceTips: "".concat(e.currencyTips).concat(e.totalAmount),
      priceDesc: {
        firstPart: "",
        secondPart: "",
      },
      priceAmount: "".concat(e.totalAmount),
      originPriceTips: "",
      originPriceAmount: "0",
    });
  }
  if (c.L(e)) {
    return ((e) => {
      var t;
      var {
        normalAmount,
        cycleUnit,
        currencyTips,
        currencyCode,
        priceTips,
        subscribeCycle,
        lowPriceTrialInfo,
        secondPromoteInfo,
      } = e;
      var v = m.X(currencyCode, currencyTips, normalAmount);
      var _ = m.X(currencyCode, currencyTips, e.originPriceAmount);
      var y = p.b(currencyCode, (t = e.originPriceAmount) != null ? t : 0);
      var { trialPrice } = lowPriceTrialInfo || {};
      var b = m.X(currencyCode, currencyTips, trialPrice, true);
      var f = m.X(currencyCode, currencyTips, trialPrice);
      var x = p.b(currencyCode, trialPrice != null ? trialPrice : 0);
      var P = m.X(
        currencyCode,
        currencyTips,
        secondPromoteInfo == null ? undefined : secondPromoteInfo.introPrice,
      );
      var C = u.g(e);
      var secondPart = "";
      if (C && subscribeCycle === 1) {
        secondPart = h.Ay.t(
          "trial_vip_discount_title_month_next",
          {
            num: d.f(
              (secondPromoteInfo == null
                ? undefined
                : secondPromoteInfo.introPrice) / normalAmount,
            ),
            price1: b,
            price2: P,
            price3: v,
          },
          "{price1}元试用7天·首月6折{price2}·次月{price3}自动续费",
        );
      }
      if (C && subscribeCycle === 3) {
        secondPart = h.Ay.t(
          "trial_vip_discount_title_quarter_next",
          {
            num: d.f(
              (secondPromoteInfo == null
                ? undefined
                : secondPromoteInfo.introPrice) / normalAmount,
            ),
            price1: b,
            price2: P,
            price3: v,
          },
          "{price1}元试用7天·首季6折{price2}·次季{price3}自动续费",
        );
      }
      if (C && subscribeCycle === 12) {
        secondPart = h.Ay.t(
          "trial_vip_discount_title_year_next",
          {
            num: d.f(
              (secondPromoteInfo == null
                ? undefined
                : secondPromoteInfo.introPrice) / normalAmount,
            ),
            price1: b,
            price2: P,
            price3: v,
          },
          "{price1}元试用7天·首年5折{price2}·次年{price3}自动续费",
        );
      }
      if (!(C || cycleUnit !== "YEAR")) {
        secondPart = ""
          .concat(
            h.Ay.t("first_trial_des", {
              price: b,
            }),
            " · ",
          )
          .concat(
            h.Ay.t("second_year_price", {
              price: v,
            }),
            " ",
          );
      }
      return {
        priceTips: f,
        priceAmount: x,
        originPriceTips: _,
        originPriceAmount: y,
        cycleTips: h.Ay.t("free_trial_price"),
        priceDesc: {
          secondPart,
          lineThroughPart: "",
        },
      };
    })(e);
  }
  if (l.q(e)) {
    return ((e) => {
      var t;
      var {
        normalAmount,
        cycleUnit,
        currencyTips,
        currencyCode,
        totalAmount,
        subscribeCycle,
      } = e;
      var c = m.X(currencyCode, currencyTips, totalAmount);
      var l = p.b(currencyCode, totalAmount != null ? totalAmount : 0);
      var u = m.X(currencyCode, currencyTips, e.originPriceAmount);
      var v = p.b(currencyCode, (t = e.originPriceAmount) != null ? t : 0);
      var _ = m.X(currencyCode, currencyTips, normalAmount);
      if (cycleUnit === "YEAR") {
        return {
          priceTips: c,
          priceAmount: l,
          originPriceTips: u,
          originPriceAmount: v,
          cycleTips: h.Ay.t(
            "web_dre_m10n_subscription_page_plans_peryear",
            {
              price: "",
            },
            "{price}/year",
          ),
          priceDesc: {
            secondPart: h.Ay.t(
              "free_trial_normal_sub_dis_yr",
              {
                price1: c,
                num: d.f(totalAmount / normalAmount),
                price2: _,
              },
              "首年{num}折{price1} · 次年续费金额{price2} · 包年可随时取消",
            ),
          },
        };
      }
      if (subscribeCycle === 3) {
        return {
          priceTips: c,
          priceAmount: l,
          originPriceTips: u,
          originPriceAmount: v,
          cycleTips: h.Ay.t(
            "web_dre_m10n_subscription_page_plans_perquarter",
            {
              price: "",
            },
            "quarter{price}",
          ),
          priceDesc: {
            secondPart: h.Ay.t(
              "free_trial_normal_sub_dis_qu",
              {
                price1: c,
                num: d.f(totalAmount / normalAmount),
                price2: _,
              },
              "首季{num}折{price1} · 下季续费金额{price2} · 包季可随时取消",
            ),
          },
        };
      }
      var { introInfo } = e;
      return {
        priceTips: c,
        priceAmount: l,
        originPriceTips: u,
        originPriceAmount: v,
        cycleTips: h.Ay.t(
          "web_dre_m10n_subscription_page_plans_permonth",
          {
            price: "",
          },
          "/month",
        ),
        priceDesc: {
          secondPart: h.Ay.t(
            "free_trial_normal_sub_dis_mo",
            {
              price1: c,
              num: d.f(totalAmount / normalAmount),
              price2: _,
            },
            "首月{num}折{price1} · 下月续费金额{price2} · 包月可随时取消",
          ),
        },
      };
    })(e);
  }
  return g(e);
};
