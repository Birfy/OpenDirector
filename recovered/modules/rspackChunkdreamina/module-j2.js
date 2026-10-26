import n from "z8";
import i from "bT";
import a from "CFa";
import s from "SI";
import o from "QSq";
import c from "JZn";
import l from "wcw";
import d from "TX";
import u from "zF";
import p from "GFp";
import m from "P4p";
import g from "Ux";
import v from "wb";
import b from "MK";
import { A as A_1 } from "./module-Ry_2.js";
function h(accountSnapshot) {
  const r = accountSnapshot.uniqueId || accountSnapshot.userId;
  if (r) {
    return `commerce_landing_dialog_time_`.concat(r);
  }
}
const useY = (e) => {
  var {
    commerceCreditService,
    commercialStrategyService,
    promotePrice,
    onBtnClick,
    isDailyCreditReceiveEnabled,
    resourceText,
    textConfig,
  } = e;
  var d = i.useMemo(() => {
    if (textConfig != null) {
      return textConfig;
    }
    return ((e) => {
      var {
        price,
        commerceCreditService,
        commercialStrategyService,
        isDailyCreditReceiveEnabled,
        resourceText,
      } = e;
      var { isHitCreditPackageGroupExperiment } = commercialStrategyService;
      var o = isDailyCreditReceiveEnabled && isHitCreditPackageGroupExperiment;
      var c = !!price && g.L(price);
      var { creditReceiveManager } = commerceCreditService;
      var d = isDailyCreditReceiveEnabled
        ? creditReceiveManager.receiveCreditResult
        : undefined;
      var u = (d == null ? undefined : d.ok) ? d.value.receiveQuota : 0;
      var title = o
        ? resourceText == null
          ? undefined
          : resourceText.replace(/\{credits\}/g, String(u))
        : undefined;
      if (price && c) {
        var m;
        var desc;
        var {
          lowPriceTrialInfo,
          vipBenefitPackage,
          currencyCode,
          currencyTips,
        } = price;
        var { trialPrice } = lowPriceTrialInfo || {};
        var price_1 = v.X(currencyCode, currencyTips, trialPrice, true);
        var num =
          (vipBenefitPackage == null ||
          (m = vipBenefitPackage.userTrialCredit) == null
            ? undefined
            : m.amount) || "";
        if (title) {
          desc = title;
        } else if (isDailyCreditReceiveEnabled) {
          desc = b.Ay.t("free_trial_popup_des", {
            num: u,
            price: price_1,
          });
        }
        return {
          title: b.Ay.t("free_trial_popup_title", {
            price: price_1,
          }),
          desc,
          btnText: b.Ay.t("free_trial_popup_button", {
            num,
            price: price_1,
          }),
        };
      }
      if (o && !c && title) {
        return {
          title,
          btnText: b.Ay.t(
            "web_m10n_free_credits_olduser_popup_desc",
            {},
            "开会员，享更多",
          ),
        };
      }
    })({
      price: promotePrice,
      commerceCreditService,
      commercialStrategyService,
      isDailyCreditReceiveEnabled,
      resourceText,
    });
  }, [
    textConfig,
    promotePrice,
    commercialStrategyService,
    commerceCreditService,
    isDailyCreditReceiveEnabled,
    resourceText,
  ]);
  return n.jsx(m.i, {
    title: d == null ? undefined : d.title,
    desc: d == null ? undefined : d.desc,
    btnText: d == null ? undefined : d.btnText,
    wrapperClassName: A_1.wrapper,
    onBtnClick,
  });
};
export var q = (e) => {
  var {
    containerService,
    commerceCreditService,
    membershipService,
    promotePrice,
    accountSnapshot,
    commercialStrategyService,
    isHitCreditPackageGroupExperiment,
    isDailyCreditReceiveEnabled,
    resourceText,
    textConfig,
    defaultSubscriptionTab,
    jumpConfig,
    reportResourceKey,
    reportActivityId,
    reportDeeplink,
  } = e;
  var N = c.Y(containerService, a.u.CommercialLandingModal);
  var S = !!(reportActivityId || reportDeeplink);
  var P = () => {
    var e =
      commerceCreditService == null
        ? undefined
        : commerceCreditService.localCredit;
    if (membershipService.hasActiveMembership) {
      if (e < s.q_) {
        return u.Zg.ToAddCredits;
      }
      return u.Zg.EnoughCredits;
    }
    return u.Zg.ToJoinVIP;
  };
  return {
    className: A_1.commerceDialog,
    afterOpen: () => {
      var e = h(accountSnapshot);
      if (e) {
        var t = Date.now();
        l.i0.set(e, String(t));
      }
      u.tR(containerService, {
        action: u.$5.Show,
        status: P(),
        activityId: reportActivityId,
        deeplink: reportDeeplink,
      });
    },
    afterClose: () => {
      if (N != null) {
        N.unmount();
      }
    },
    isFirstShow: (() => {
      if (isHitCreditPackageGroupExperiment) {
        if (commerceCreditService.isFirstReceived) {
          return true;
        }
        var e = commerceCreditService.creditReceiveManager.receiveCreditResult;
        return e != null && !!e.ok && !e.value.hasPopup;
      }
      var r = h(accountSnapshot);
      if (!r) {
        return true;
      }
      var n = l.i0.get(r);
      var i = Date.now();
      return !(n && i - Number(n) < 86400000);
    })(),
    content: n.jsx(useY, {
      commerceCreditService,
      commercialStrategyService,
      promotePrice,
      onBtnClick: () => {
        var e;
        var t = d.MS(jumpConfig == null ? undefined : jumpConfig.jumpType);
        var n =
          jumpConfig == null || (e = jumpConfig.jumpSchema) == null
            ? undefined
            : e.trim();
        if (t === d.ML.Custom) {
          o.$(n);
          u.tR(containerService, {
            action: u.$5.Click,
            status: P(),
            activityId: reportActivityId,
            deeplink: reportDeeplink,
          });
          return;
        }
        p.iT({
          containerService,
          reportParam: {
            source: "top_account_button_bubble",
            entranceResourceKey: S ? reportResourceKey : undefined,
            entranceActivityId: reportActivityId,
            entranceDeeplink: reportDeeplink,
          },
          defaultSubscriptionTab,
        });
        u.tR(containerService, {
          action: u.$5.Click,
          status: P(),
          activityId: reportActivityId,
          deeplink: reportDeeplink,
        });
      },
      isDailyCreditReceiveEnabled,
      resourceText,
      textConfig,
    }),
  };
};
