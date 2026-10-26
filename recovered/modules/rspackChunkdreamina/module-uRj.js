import n from "NY";
import i from "oa";
import a from "bk";
import s from "z8";
import "WJ";
import o from "gei";
import "bT";
import _c from "xb";
import d from "yw";
import u from "MK";
import p from "Bup";
import m from "Iv";
import h from "oh";
import g from "jh7";
import v from "EYk";
import b from "H1y";
import { x as x_1 } from "./module-sIr.js";
import y from "GFp";
import { Dk, Gs, Ko } from "./module-MtA.js";
import A from "SI";
const x = "standaloneLightTheme-Em7dLN";
const w = "standaloneDarkTheme-jHlpyJ";
const R = "cancel-button-iuLJUf";
const k = "hidden-EKTSXb";
const className = "confirm-button-LhLite";
export var Z = (e) => {
  var r;
  var {
    onVipSuccess,
    containerService,
    reportParams,
    guidance,
    teamCreditRechargeContext,
    afterClose,
    onSuccess,
    forceTheme,
    enableStandaloneCreditsPackPurchaseModal,
  } = e;
  var {
    vipSource,
    customReportParams,
    sceneOptions,
    scene,
    benefits,
    benefitAmount,
    batchNumber,
  } = reportParams;
  var { membershipService, commercialStrategyService, commercialGoodsService } =
    containerService.invokeFunction((e) => ({
      membershipService: e.get(g.r3),
      commercialStrategyService: e.get(v.a),
      commercialGoodsService: e.get(h.$),
    }));
  var z = containerService
    .invokeFunction((e) => e.get(m.sG))
    .getCurrentAccount();
  var V = ((e) => {
    if (!e.hasActiveMembership) {
      return false;
    }
    if (e.isTeamMode) {
      return true;
    }
    const r = A.MG[e.currentVipLevel];
    return !(e.vipPriceList.length
      ? e.vipPriceList.some((e) => !e.disablePurchase && A.MG[e.level] > r)
      : r < A.MG[A.PB(e.isUltraEnabled)]);
  })({
    hasActiveMembership: membershipService.hasActiveMembership,
    isTeamMode: membershipService.isTeamMode,
    currentVipLevel: membershipService.effectiveVipLevel,
    isUltraEnabled: commercialStrategyService.isUltraEnabled,
    vipPriceList: commercialGoodsService.vipPriceList,
  });
  var H =
    commercialStrategyService.getCreditInsufficientModalSwitchFreeModelConfig();
  var Q = null;
  var K = false;
  var U = (e) => {
    if (!K && onSuccess) {
      K = true;
      try {
        Promise.resolve(onSuccess(e)).catch(() => undefined);
      } catch (e) {}
    }
  };
  var X = (action) => {
    p.l(containerService, {
      action,
      source: vipSource,
      customReportParams,
      batchNumber,
    });
  };
  var onCancel = () => {
    X("close");
  };
  var onOk = () =>
    n._(function* () {
      if (Ko(z)) {
        if (Gs(z, teamCreditRechargeContext)) {
          let e;
          let r;
          let n;
          let s;
          if (
            (e = yield (r = teamCreditRechargeContext.prepareRecharge) == null
              ? undefined
              : r.call(teamCreditRechargeContext)) == null ||
            e
          ) {
            yield b.c({
              containerService,
              reportParam: {
                source: "credit_limit_popup",
                scene,
                sceneOptions,
                benefitAmount,
                benefits,
                customReportParams,
              },
              targetTeamId: teamCreditRechargeContext.targetTeamId,
              teamCreditTradeType:
                teamCreditRechargeContext.teamCreditTradeType,
              teamProfile: {
                teamName: (n = z.displayInfo) == null ? undefined : n.teamName,
                avatarColor:
                  (s = z.displayInfo) == null ? undefined : s.avatarColor,
                expireTime: membershipService.team.expireTime,
                membershipStatus: membershipService.team.status,
              },
              onSuccess: onSuccess ? U : undefined,
              forceTheme,
            });
            X("click_get_credits");
            return;
          }
        }
        X("close");
        if (Q != null) {
          Q.close();
        }
        return;
      }
      if (V) {
        x_1(
          i._(
            {
              containerService,
              reportParam: {
                source: "credit_limit_popup",
                scene,
                sceneOptions,
                benefitAmount,
                benefits,
                customReportParams,
              },
              onSuccess: onSuccess ? U : undefined,
              forceTheme,
            },
            enableStandaloneCreditsPackPurchaseModal === undefined
              ? {}
              : {
                  enableStandaloneCreditsPackPurchaseModal,
                },
          ),
        );
        X("click_get_credits");
        return;
      }
      y.iT(
        i._(
          a._(
            i._(
              {},
              onVipSuccess
                ? {
                    onSuccess: onVipSuccess,
                  }
                : {},
            ),
            {
              containerService,
              reportParam: {
                source: "credit_limit_popup",
                scene,
                sceneOptions,
                benefitAmount,
                benefits,
                customReportParams,
              },
              onPersonalPaymentSuccess: onSuccess ? U : undefined,
              forceTheme,
            },
          ),
          enableStandaloneCreditsPackPurchaseModal === undefined
            ? {}
            : {
                enableStandaloneCreditsPackPurchaseModal,
              },
        ),
      );
      X("click_join_vip");
    })();
  X("show");
  if (Ko(z)) {
    var q = Dk(z, teamCreditRechargeContext);
    return (Q = o.A.confirm({
      title: q.title,
      content: q.content,
      icon: null,
      closeIcon: s.jsx(d.gzW, {}),
      maskClosable: true,
      wrapClassName: _c(
        forceTheme === "light" && "lv-theme-force_light",
        forceTheme === "light" && x,
        forceTheme === "dark" && "lv-theme-force_dark",
        forceTheme === "dark" && w,
      ),
      afterClose,
      onCancel,
      onOk,
      okText: q.okText,
      cancelButtonProps: {
        className: _c(R, k),
      },
      okButtonProps: {
        className,
      },
    }));
  }
  var ee = H == null ? undefined : H.shouldShowSwitchButton(sceneOptions);
  var er =
    guidance !== "more_credits" &&
    !!scene &&
    commercialStrategyService.isBenefitForeverFreeForVip({
      scene,
      sceneOptions,
    });
  var okText = V
    ? u.Ay.t(
        "web_dre_m10n_generate_popup_credits_ininsufficient_btn3",
        {},
        "Recharge credits",
      )
    : er
      ? u.Ay.t("m10n_credits_insufficient_popup_btn2", {}, "Upgrade")
      : u.Ay.t(
          "web_dre_m10n_generate_popup_credits_ininsufficient_btn2",
          {},
          "Upgrade Vip level",
        );
  var content = V
    ? u.Ay.t(
        "web_dre_m10n_generate_popup_credit_ininsufficient_subtitle2",
        {},
        "You can buy more credits to continue to generate.",
      )
    : er
      ? u.Ay.t(
          "m10n_credits_insufficient_popup_desc",
          {},
          "Upgrade to use this model, or switch to a free model to keep creating.",
        )
      : u.Ay.t(
          "web_dre_m10n_generate_popup_credit_ininsufficient_subtitle1",
          {},
          "You do not have enough credits to do this, please upgrade membership to get more credits",
        );
  return (Q = o.A.confirm({
    title: u.Ay.t(
      "web_dre_m10n_generate_popup_credit_ininsufficient_title",
      {},
      "Underintegration",
    ),
    content,
    icon: null,
    closeIcon: s.jsx(d.gzW, {}),
    maskClosable: true,
    wrapClassName: _c(
      forceTheme === "light" && "lv-theme-force_light",
      forceTheme === "light" && x,
      forceTheme === "dark" && "lv-theme-force_dark",
      forceTheme === "dark" && w,
    ),
    afterClose,
    onCancel,
    onOk,
    okText,
    cancelButtonProps: {
      onClick: () =>
        n._(function* () {
          if ((H == null ? undefined : H.onClick) && sceneOptions) {
            yield H.onClick(sceneOptions);
            if (Q != null) {
              Q.close();
            }
            X("click_switch_free_model");
          }
        })(),
      className: _c(R, {
        [k]: !ee,
      }),
    },
    okButtonProps: {
      className,
    },
    cancelText:
      (r = H == null ? undefined : H.text) != null
        ? r
        : u.Ay.t("m10n_credits_insufficient_popup_btn1", {}, "Switch model"),
  }));
};
