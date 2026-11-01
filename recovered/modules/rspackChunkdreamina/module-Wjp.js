import n from "oa";
import t from "bk";
import a from "qa";
import o from "z8";
import l from "bT";
import s from "wF";
import c from "EYk";
import u from "NY";
import d from "p21";
import m from "rhl";
import p from "Kt";
import v from "csY";
import g from "F3";
import _ from "rvO";
import h from "f0";
import b from "wBX";
import y from "oh";
import f from "OY4";
import M from "Ld";
import T from "Js";
import N from "jh7";
import x from "Ek";
import j from "M8X";
import A from "SI";
import C from "uRj";
import k from "GFp";
import w from "MtA";
import D from "Y97";
import S from "Iv";
import E from "gLs";
import { C as C_1 } from "./module-z2h.js";
import "WJ";
import O from "gei";
import P from "yw";
import L from "lj";
import F from "zbK";
import W from "MK";
import { X as X_1 } from "./module-WZ.js";
import H from "Jhy";
import "wD";
import Y from "ynx";
import X from "Bp";
import { k as k_1 } from "./module-hj_2.js";
import * as q from "./module-C9X.js";
import * as er from "./module-P4p.js";
function I(e) {
  let r;
  let i;
  return {
    isVip: e.effective.isActive,
    currentVipLevel: e.effective.vipLevel,
    membershipSubject: e.effective.subject,
    activeMembershipSubjects: e.effective.activeSubjects,
    isTeamMode: e.isTeamMode,
    isTeamOwner:
      x.OR((i = e.team.teamInfo) == null ? undefined : i.currentRole) ===
      "owner",
    teamMembershipStatus: e.team.status,
    teamMembershipUnavailableReason:
      (r = e.effective.unavailableReason) != null
        ? r
        : e.team.unavailableReason,
  };
}
const R = function (target) {
  let r;
  for (
    let i =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8,
      n = target,
      t = 0;
    n && t < i;
  ) {
    if (
      n instanceof HTMLElement &&
      ((r = n.dataset) == null ? undefined : r.ignore)
    ) {
      return true;
    }
    n = n.parentNode;
    t++;
  }
  return false;
};
function U() {
  return W.Ay.t("web_team_acknowledge", {}, "知道了");
}
function V(e, r) {
  switch (e) {
    case "open_membership":
      k.Je({
        containerService: r.containerService,
        reportParam: r.reportParam,
        purchaseSource: F.UA.TeamSubscribe,
      });
      break;
    case "add_seats":
      k.XH({
        containerService: r.containerService,
        reportParam: r.reportParam,
      });
      break;
    default:
      if (e === "member_management") {
        j.cQ(r.containerService, L.K).navigate("TeamManagement");
      }
  }
}
function Z(containerService) {
  try {
    const r = j.cQ(containerService, E.o);
    if (r.isOversea) {
      return undefined;
    }
    return r.subscriptionPhase2Policy;
  } catch (e) {
    return;
  }
}
const $ = l.memo(function (e) {
  const { children, component } = e;
  const n = a._(e, ["children", "component"]);
  return X_1(children, n);
});
const J = (e) => {
  var { credits, customWriting } = e;
  var n = ((e, r) => {
    const i = g.S();
    const { isLocalCreditReady } = s.h(S.sG);
    const { isReady } = s.h(c.a);
    const a = v.b();
    if (isReady) {
      return (
        r ||
        (a || e <= 0
          ? W.Ay.t("dre_m10n_feature_try_free_hover", {}, "Try free")
          : !isLocalCreditReady || i >= e
            ? null
            : undefined)
      );
    }
    return null;
  })(credits, customWriting);
  return o.jsx("div", {
    className: "label-u5SZ52",
    children: n
      ? o.jsx("div", {
          className: "labelContent-yJLXIm",
          children: n,
        })
      : null,
  });
};
const Q = l.memo(function (e) {
  let r;
  const { children, limitations, uiConfig, component, hideBaseGenerateLabel } =
    e;
  const c = a._(e, [
    "children",
    "limitations",
    "uiConfig",
    "component",
    "hideBaseGenerateLabel",
  ]);
  return o.jsxs("div", {
    style: {
      position: "relative",
    },
    children: [
      X_1(children, c),
      !hideBaseGenerateLabel &&
        o.jsx(J, {
          credits: limitations.needCredits,
          customWriting:
            uiConfig == null || (r = uiConfig.config) == null
              ? undefined
              : r.customWriting,
        }),
    ],
  });
});
const className = "tooltip-content-upM9u5";
const useEe = (e) => {
  var {
    limitations,
    customVipTooltipContent,
    customTooltipContent,
    customNeedCreditsTooltipContent,
    isCreditsTooltipDisabled,
    customFreeTrialTooltipContent,
    children,
    disabled = false,
    vipDropDownContent,
    dropdownTriggerProps,
    tooltipTriggerProps,
    showDropDownContent,
    getDropDownPopupContainer,
    onDropDownVisibleChange,
    content,
    component,
    isVipTooltipDisabled,
    hideVipHoverGuide = false,
  } = e;
  var x = a._(e, [
    "limitations",
    "customVipTooltipContent",
    "customTooltipContent",
    "customNeedCreditsTooltipContent",
    "isCreditsTooltipDisabled",
    "customFreeTrialTooltipContent",
    "children",
    "disabled",
    "vipDropDownContent",
    "dropdownTriggerProps",
    "tooltipTriggerProps",
    "showDropDownContent",
    "getDropDownPopupContainer",
    "onDropDownVisibleChange",
    "content",
    "component",
    "isVipTooltipDisabled",
    "hideVipHoverGuide",
  ]);
  var {
    currentVipLevel,
    needMinVipLevel,
    needCredits,
    trialInfo,
    needVip,
    isInFreemiumStage,
    isVip,
  } = limitations;
  var E = l.useMemo(() => {
    var e;
    var i;
    var n = null;
    if (isInFreemiumStage) {
      n = W.Ay.t(
        "dre_m10n_feature_free_limited_time_hover",
        {},
        "You can try this feature for free for now",
      );
    } else if (trialInfo.isStrategyFreeTrial) {
      n =
        (e =
          customFreeTrialTooltipContent == null
            ? undefined
            : customFreeTrialTooltipContent(limitations)) != null
          ? e
          : W.Ay.t(
              "dre_m10n_lip_sync_freetrial_button",
              {
                num: trialInfo.strategyFreeTrialTimes,
                number0: trialInfo.strategyFreeTrialTimes,
              },
              "{number0} free trials",
            );
    } else if (needCredits && !isCreditsTooltipDisabled) {
      n =
        (i =
          customNeedCreditsTooltipContent == null
            ? undefined
            : customNeedCreditsTooltipContent(limitations)) != null
          ? i
          : W.Ay.t(
              "tag_hover_credits_tips",
              {
                num: o.jsx(q.n, {
                  limitations,
                }),
              },
              "此功能需要消耗{num}",
            );
    }
    if (n) {
      return o.jsx("div", {
        className,
        children: o.jsx("div", {
          children: n,
        }),
      });
    }
    return null;
  }, [
    customFreeTrialTooltipContent,
    customNeedCreditsTooltipContent,
    isInFreemiumStage,
    isCreditsTooltipDisabled,
    limitations,
    needCredits,
    trialInfo,
  ]);
  var z = l.useMemo(() => {
    var e;
    return (
      !isVipTooltipDisabled &&
      o.jsx("div", {
        className,
        children:
          (e =
            customVipTooltipContent == null
              ? undefined
              : customVipTooltipContent(limitations)) != null
            ? e
            : W.Ay.t(
                "dre_m10n_pro_feature",
                {
                  strong1: (e) => e,
                },
                "Upgrade to use this feature",
              ),
      })
    );
  }, [customVipTooltipContent, limitations, isVipTooltipDisabled]);
  var R = l.useMemo(() => {
    var e;
    if (
      (e =
        customTooltipContent == null
          ? undefined
          : customTooltipContent(limitations)) != null
    ) {
      return e;
    }
    return null;
  }, [customTooltipContent, limitations]);
  var O = l.useMemo(() => {
    if (content) {
      return o.jsx("div", {
        className,
        children: content,
      });
    }
    return null;
  }, [content]);
  var P = l.useMemo(
    () =>
      ((e) => {
        const {
          insufficientVipLevel,
          needVip,
          isInFreemiumStage,
          isStrategyFreeTrial,
          isCreditTrial,
        } = e;
        return (
          insufficientVipLevel &&
          needVip &&
          !isInFreemiumStage &&
          !isStrategyFreeTrial &&
          !isCreditTrial
        );
      })({
        insufficientVipLevel:
          !isVip || A.MG[currentVipLevel] < A.MG[needMinVipLevel],
        needVip,
        isInFreemiumStage,
        isStrategyFreeTrial: trialInfo.isStrategyFreeTrial,
        isCreditTrial: trialInfo.isCreditTrial,
      }),
    [
      currentVipLevel,
      isInFreemiumStage,
      isVip,
      needMinVipLevel,
      needVip,
      trialInfo,
    ],
  );
  var droplist =
    (P || showDropDownContent) && !hideVipHoverGuide
      ? vipDropDownContent
      : undefined;
  var content_1 = l.useMemo(() => {
    if (droplist) {
      return null;
    }
    return R || (P ? (hideVipHoverGuide ? null : z) : E || O);
  }, [E, O, droplist, P, z, hideVipHoverGuide, R]);
  var U = !droplist || disabled;
  var V = disabled || !!droplist;
  var Z = l.useMemo(() => {
    if (component === "div") {
      return o.jsx("div", {
        className: "tooltip-container-vrj4kK",
        children: o.jsx(
          X.D,
          t._(n._({}, x), {
            disabled: V,
            content: content_1,
            triggerProps: tooltipTriggerProps,
            children,
          }),
        ),
      });
    }
    return o.jsx(
      X.D,
      t._(n._({}, x), {
        disabled: V,
        content: content_1,
        triggerProps: tooltipTriggerProps,
        children,
      }),
    );
  }, [component, x, V, content_1, children, tooltipTriggerProps]);
  var B = l.useMemo(() => {
    if (U) {
      return Z;
    }
    return o.jsx(Y.A, {
      mouseEnterDelay: 350,
      disabled: U,
      droplist,
      onVisibleChange: onDropDownVisibleChange,
      getPopupContainer: (e) => {
        var r;
        if (
          (r =
            getDropDownPopupContainer == null
              ? undefined
              : getDropDownPopupContainer()) != null
        ) {
          return r;
        }
        return document.body;
      },
      triggerProps:
        dropdownTriggerProps != null
          ? dropdownTriggerProps
          : {
              position: "top",
            },
      children: Z,
    });
  }, [
    dropdownTriggerProps,
    droplist,
    getDropDownPopupContainer,
    U,
    onDropDownVisibleChange,
    Z,
  ]);
  var value = l.useMemo(
    () => ({
      isBaseTooltipActive: (!V && !!content_1) || (!U && !!droplist),
    }),
    [droplist, content_1, U, V],
  );
  return o.jsx(k_1.Provider, {
    value,
    children: B,
  });
};
const ei = l.memo(function (e) {
  let r;
  let i;
  let t;
  let c;
  let u;
  let d;
  const {
    children,
    limitations,
    uiConfig,
    component,
    scene,
    sceneOptions,
    benefitAmount,
    extraBenefits,
    reportParam,
    dropdownTriggerProps,
    tooltipTriggerProps,
    fallbackTipText,
    disabled,
    isCreditsTooltipDisabled,
    customNeedCreditsTooltipContent,
    isVipTooltipDisabled,
    hideVipHoverGuide,
  } = e;
  const S = a._(e, [
    "children",
    "limitations",
    "uiConfig",
    "component",
    "scene",
    "sceneOptions",
    "benefitAmount",
    "extraBenefits",
    "reportParam",
    "dropdownTriggerProps",
    "tooltipTriggerProps",
    "fallbackTipText",
    "disabled",
    "isCreditsTooltipDisabled",
    "customNeedCreditsTooltipContent",
    "isVipTooltipDisabled",
    "hideVipHoverGuide",
  ]);
  const E = s.h(p._);
  const z =
    limitations.isTeamMode === true &&
    limitations.teamMembershipStatus !== N.lz.Active;
  const R = z && limitations.isTeamOwner !== true;
  const O = z && limitations.isTeamOwner === true;
  const P = l.useMemo(
    () =>
      n._(
        {
          scene,
          sceneOptions,
          benefitAmount,
          benefits: extraBenefits,
        },
        reportParam,
      ),
    [benefitAmount, extraBenefits, reportParam, scene, sceneOptions],
  );
  const L = l.useCallback(() => {
    var e;
    var r;
    var i;
    var n =
      uiConfig == null ||
      (i = uiConfig.config) == null ||
      (r = i.dropDownProps) == null ||
      (e = r.vipDropDownProps) == null
        ? undefined
        : e.call(r, limitations);
    if (n) {
      return o.jsx(er.i, {
        coverType: n.coverType,
        coverUrl: n.coverUrl,
        poster: n.poster,
        desc: n.desc,
        title: n.title,
        btnText: n.btnText,
        btnDisabled: n.btnDisabled || R,
        btnTooltip: R
          ? W.Ay.t(
              "web_team_upload_membership_expired_title",
              {},
              "团队版已过期，无法使用团队会员权益",
            )
          : n.btnTooltip,
        onBtnClick: () => {
          var e;
          if (!R) {
            if (O) {
              return void k.Je({
                containerService: E,
                reportParam: P,
                purchaseSource: F.UA.TeamSubscribe,
              });
            }
            if ((e = n.onBtnClick) != null) {
              e.call(n);
            }
          }
        },
      });
    }
  }, [
    E,
    R,
    O,
    P,
    uiConfig == null || (i = uiConfig.config) == null
      ? undefined
      : i.dropDownProps,
    limitations,
  ]);
  const vipDropDownContent = l.useMemo(() => L(), [L]);
  const V = l.useMemo(() => {
    var e;
    if (uiConfig == null || (e = uiConfig.config) == null) {
      return undefined;
    }
    return e.tooltipProps;
  }, [uiConfig]);
  const Z = l.useMemo(() => {
    var e;
    if (uiConfig == null || (e = uiConfig.config) == null) {
      return undefined;
    }
    return e.dropDownProps;
  }, [uiConfig]);
  const showDropDownContent = l.useMemo(() => {
    var e;
    var r;
    var i;
    var n;
    return (
      (e =
        uiConfig == null ||
        (n = uiConfig.config) == null ||
        (i = n.dropDownProps) == null ||
        (r = i.shouldShowDropDownContent) == null
          ? undefined
          : r.call(i, limitations)) != null && e
    );
  }, [uiConfig, limitations]);
  const disabled_1 = l.useMemo(
    () =>
      ((V == null ? undefined : V.isDisabled) && V.isDisabled(limitations)) ||
      disabled,
    [V, limitations, disabled],
  );
  const dropdownTriggerProps_1 = l.useMemo(() => {
    var e;
    var r;
    if (
      uiConfig == null ||
      (r = uiConfig.config) == null ||
      (e = r.dropDownProps) == null
        ? undefined
        : e.triggerProps
    ) {
      return H.A(
        {
          position: "top",
        },
        uiConfig.config.dropDownProps.triggerProps,
        dropdownTriggerProps,
      );
    }
    return dropdownTriggerProps;
  }, [
    uiConfig == null ||
    (c = uiConfig.config) == null ||
    (t = c.dropDownProps) == null
      ? undefined
      : t.triggerProps,
    dropdownTriggerProps,
  ]);
  const tooltipTriggerProps_1 = l.useMemo(() => {
    var e;
    var r;
    if (
      uiConfig == null ||
      (r = uiConfig.config) == null ||
      (e = r.tooltipProps) == null
        ? undefined
        : e.triggerProps
    ) {
      return H.A(
        {
          position: "top",
        },
        uiConfig.config.tooltipProps.triggerProps,
        tooltipTriggerProps,
      );
    }
    return tooltipTriggerProps;
  }, [
    uiConfig == null ||
    (d = uiConfig.config) == null ||
    (u = d.tooltipProps) == null
      ? undefined
      : u.triggerProps,
    tooltipTriggerProps,
  ]);
  return o.jsx(useEe, {
    customVipTooltipContent: V == null ? undefined : V.customVipTooltipContent,
    customTooltipContent: V == null ? undefined : V.customTooltipContent,
    customNeedCreditsTooltipContent:
      customNeedCreditsTooltipContent != null
        ? customNeedCreditsTooltipContent
        : V == null
          ? undefined
          : V.customNeedCreditsTooltipContent,
    customFreeTrialTooltipContent:
      V == null ? undefined : V.customFreeTrialTooltipContent,
    onVisibleChange: V == null ? undefined : V.onVisibleChange,
    getDropDownPopupContainer:
      Z == null ? undefined : Z.getDropDownPopupContainer,
    onDropDownVisibleChange: Z == null ? undefined : Z.onDropDownVisibleChange,
    limitations,
    vipDropDownContent,
    content: fallbackTipText,
    dropdownTriggerProps: dropdownTriggerProps_1,
    tooltipTriggerProps: tooltipTriggerProps_1,
    disabled: disabled_1,
    component,
    isCreditsTooltipDisabled:
      (r = V == null ? undefined : V.isCreditsTooltipDisabled) != null
        ? r
        : isCreditsTooltipDisabled,
    showDropDownContent,
    isVipTooltipDisabled,
    hideVipHoverGuide,
    children: X_1(children, S),
  });
});
const useEn = (e) => {
  var {
    className,
    scene,
    extraBenefits,
    benefitAmount,
    sceneOptions,
    children,
    wrapperStyle,
    component = "div",
    ignoreClickIntercept = false,
    ignoreEnterIntercept = false,
    ignoreNeedVip = false,
    ignoreNeedCredits = false,
    batchNumber,
    discount,
    reportParam,
    disabled,
    creditNotPassCallback,
    beforeClickCapture,
    beforeKeyDownCapture,
    onInsufficientCustomCallback,
    decision,
    getTeamCreditRechargeContext,
  } = e;
  var ea = s.h(p._);
  var isInFreemiumStage = v.b();
  var localCredit = g.S();
  var es = s.h(y.$);
  var ec = s.h(m.k);
  var [isDirectSubscription, setIsDirectSubscription] = l.useState(false);
  var em = d.F(es, (e) => e.vipPriceList);
  var lowPriceTrialPrice = l.useMemo(() => h.w(em || []), [em]);
  var reason = l.useMemo(
    () =>
      b.Z({
        scene,
        sceneOptions,
        containerService: ea,
      }),
    [ea, scene, sceneOptions],
  );
  var {
    isVip,
    currentVipLevel,
    membershipSubject,
    activeMembershipSubjects,
    isTeamMode,
    isTeamOwner,
    teamMembershipStatus,
    teamMembershipUnavailableReason,
    needMinVipLevel,
    needVip,
    trialInfo,
    vipSource,
  } = ((e) => {
    var { scene, sceneOptions, extraBenefits, benefitAmount, ignoreNeedVip } =
      e;
    var commercialStrategyService = s.h(c.a);
    var u = s.h(N.r3);
    var {
      isVip,
      currentVipLevel,
      membershipSubject,
      activeMembershipSubjects,
      isTeamMode,
      isTeamOwner,
      teamMembershipStatus,
      teamMembershipUnavailableReason,
    } = d.F(u, I);
    var [x, setX] = l.useState(0);
    l.useEffect(() => {
      var e = commercialStrategyService.onAllBenefitStrategyChange(() => {
        setX((e) => e + 1);
      });
      return () => {
        e.dispose();
      };
    }, [sceneOptions, scene, commercialStrategyService]);
    var needMinVipLevel_1 = l.useMemo(
      () =>
        f.I({
          scene,
          extraBenefits,
          commercialStrategyService,
          sceneOptions,
        }),
      [scene, extraBenefits, commercialStrategyService, sceneOptions, x],
    );
    var needVip_1 = l.useMemo(
      () =>
        M.$({
          scene,
          extraBenefits,
          sceneOptions,
          commercialStrategyService,
        }) && !ignoreNeedVip,
      [
        scene,
        extraBenefits,
        sceneOptions,
        commercialStrategyService,
        ignoreNeedVip,
        x,
      ],
    );
    return {
      isVip,
      currentVipLevel,
      membershipSubject,
      activeMembershipSubjects,
      isTeamMode,
      isTeamOwner,
      teamMembershipStatus,
      teamMembershipUnavailableReason,
      needMinVipLevel: needMinVipLevel_1,
      needVip: needVip_1,
      trialInfo: l.useMemo(
        () =>
          T.v({
            scene,
            extraBenefits,
            commercialStrategyService,
            sceneOptions,
            benefitAmount,
          }),
        [
          scene,
          extraBenefits,
          commercialStrategyService,
          sceneOptions,
          benefitAmount,
          x,
        ],
      ),
      vipSource: l.useMemo(
        () =>
          ((e) => {
            var { scene, sceneOptions, commercialStrategyService } = e;
            var t =
              commercialStrategyService.commercialBenefitsManager.getPluginVipModalConfig(
                scene,
                sceneOptions,
              );
            if (t == null) {
              return undefined;
            }
            return t.vipSource;
          })({
            scene,
            sceneOptions,
            commercialStrategyService,
          }),
        [scene, sceneOptions, commercialStrategyService, x],
      ),
    };
  })({
    scene,
    sceneOptions,
    extraBenefits,
    benefitAmount,
    ignoreNeedVip,
  });
  var eA = _.O({
    extraBenefits,
    scene,
    sceneOptions,
    batchNumber,
    discount,
    benefitAmount,
  });
  var limitations = l.useMemo(
    () => ({
      isVip,
      currentVipLevel,
      membershipSubject,
      activeMembershipSubjects,
      isTeamMode,
      isTeamOwner,
      teamMembershipStatus,
      teamMembershipUnavailableReason,
      needMinVipLevel,
      needVip,
      trialInfo,
      needCredits: eA.credits,
      creditDisplayInfo: eA.creditDisplayInfo,
      isInFreemiumStage,
      lowPriceTrialPrice,
      reason,
      benefitAmount: eA.benefitAmount,
    }),
    [
      isVip,
      currentVipLevel,
      membershipSubject,
      activeMembershipSubjects,
      isTeamMode,
      isTeamOwner,
      teamMembershipStatus,
      teamMembershipUnavailableReason,
      needMinVipLevel,
      needVip,
      trialInfo,
      eA.credits,
      eA.creditDisplayInfo,
      eA.benefitAmount,
      isInFreemiumStage,
      lowPriceTrialPrice,
      reason,
    ],
  );
  l.useEffect(() => {
    u._(function* () {
      const [e, r] = yield Promise.all([
        ec.getABTestVar("is_direct_subscription", false),
        ec.getABTestVar("dreamina_web_commerce_intercept_flow", "v0"),
      ]);
      setIsDirectSubscription(e || r !== "v0");
    })();
  }, [ec]);
  var { handleClickCapture, handleKeyDownCapture } = ((e) => {
    var r;
    var {
      scene,
      sceneOptions,
      benefitAmount,
      extraBenefits,
      ignoreClickIntercept,
      ignoreEnterIntercept,
      ignoreNeedVip,
      ignoreNeedCredits,
      disabled,
      creditNotPassCallback,
      reportParam,
      limitations,
      vipSource,
      containerService,
      localCredit,
      beforeClickCapture,
      beforeKeyDownCapture,
      isDirectSubscription,
      onInsufficientCustomCallback,
      decision,
      getTeamCreditRechargeContext,
    } = e;
    var F = l.useMemo(() => {
      if (vipSource != null) {
        return vipSource;
      }
      return "generate";
    }, [vipSource]);
    var B = l.useMemo(
      () => localCredit >= limitations.needCredits || ignoreNeedCredits,
      [localCredit, limitations.needCredits, ignoreNeedCredits],
    );
    try {
      r = j.cQ(containerService, S.sG).getCurrentAccount();
    } catch (e) {
      r = undefined;
    }
    var $ = isDirectSubscription && w.gu(r);
    var J = l.useMemo(() => {
      var e = reportParam == null ? undefined : reportParam.customReportParams;
      if (typeof e !== "object" || e === null) {
        return {};
      }
      return e;
    }, [reportParam]);
    var Q = l.useMemo(
      () =>
        n._(
          {
            source: F,
            scene,
            sceneOptions,
            benefitAmount,
            benefits: extraBenefits,
          },
          reportParam,
        ),
      [F, scene, sceneOptions, benefitAmount, extraBenefits, reportParam],
    );
    var H = l.useCallback(
      (interceptionType) =>
        t._(n._({}, Q), {
          minVipLevel: limitations.needMinVipLevel,
          interceptionType,
        }),
      [limitations.needMinVipLevel, Q],
    );
    var reportParams = l.useMemo(
      () =>
        t._(
          n._(
            {
              vipSource: F,
              creditSource: F || "generate",
              scene,
              benefitAmount,
              sceneOptions,
              benefits: extraBenefits,
            },
            reportParam,
          ),
          {
            customReportParams: n._(
              {},
              J,
              w.xC(r, limitations.needCredits, {
                membershipSubject: limitations.membershipSubject,
                teamMembershipStatus: limitations.teamMembershipStatus,
              }),
            ),
          },
        ),
      [
        F,
        scene,
        benefitAmount,
        sceneOptions,
        extraBenefits,
        reportParam,
        J,
        r,
        limitations.needCredits,
        limitations.membershipSubject,
        limitations.teamMembershipStatus,
      ],
    );
    var showCreditInsufficientModal = l.useCallback(
      (e) => {
        C.Z({
          containerService,
          reportParams,
          teamCreditRechargeContext:
            getTeamCreditRechargeContext == null
              ? undefined
              : getTeamCreditRechargeContext(),
          onSuccess: e == null ? undefined : e.onSuccess,
        });
      },
      [containerService, reportParams, getTeamCreditRechargeContext],
    );
    var K = l.useCallback(
      (e) => {
        var r = H(e);
        return {
          sceneOptions,
          benefitAmount,
          extraBenefits,
          reportParam: e === C_1.VIP_INSUFFICIENT ? Q : reportParams,
          defaultActions: {
            showVIPModal: (e) =>
              k.iT({
                containerService,
                reportParam: r,
                onPersonalPaymentSuccess: e == null ? undefined : e.onSuccess,
              }),
            showCreditInsufficientModal,
          },
        };
      },
      [
        sceneOptions,
        benefitAmount,
        extraBenefits,
        containerService,
        H,
        Q,
        reportParams,
        showCreditInsufficientModal,
      ],
    );
    var qRef = l.useRef(new WeakSet());
    var G = l.useCallback(() => {
      var e;
      return (
        (reportParam == null ? undefined : reportParam.interceptionTrigger) ===
          "model_selection" &&
        ((e = Z(containerService)) == null
          ? undefined
          : e.modelSelectionMini) === true &&
        !limitations.isTeamMode
      );
    }, [
      reportParam == null ? undefined : reportParam.interceptionTrigger,
      containerService,
      limitations.isTeamMode,
    ]);
    var ee = l.useCallback(
      (e) => {
        if (!qRef.current.has(e)) {
          if (creditNotPassCallback != null) {
            creditNotPassCallback();
          }
          e.stopPropagation();
          e.preventDefault();
        }
      },
      [creditNotPassCallback],
    );
    var er = l.useCallback(
      (e) => {
        var r = H(C_1.VIP_INSUFFICIENT);
        D.q(containerService, {
          reason: "identity_insufficient",
          enterSource: F,
          needCredits: limitations.needCredits,
          scene,
          sceneOptions,
        });
        if (onInsufficientCustomCallback) {
          var n = K(C_1.VIP_INSUFFICIENT);
          try {
            onInsufficientCustomCallback(C_1.VIP_INSUFFICIENT, limitations, n);
          } catch (e) {
            k.iT({
              containerService,
              reportParam: r,
            });
          }
        } else {
          k.iT({
            containerService,
            reportParam: r,
          });
        }
        ee(e);
      },
      [
        onInsufficientCustomCallback,
        limitations,
        K,
        H,
        containerService,
        F,
        scene,
        sceneOptions,
        ee,
      ],
    );
    var ei = l.useCallback(
      (e) => {
        D.q(containerService, {
          reason: "credit_insufficient",
          enterSource: F,
          needCredits: limitations.needCredits,
          scene,
          sceneOptions,
        });
        var r = H(C_1.CREDIT_INSUFFICIENT);
        if (onInsufficientCustomCallback) {
          var n = K(C_1.CREDIT_INSUFFICIENT);
          try {
            onInsufficientCustomCallback(
              C_1.CREDIT_INSUFFICIENT,
              limitations,
              n,
            );
          } catch (e) {
            k.iT({
              containerService,
              reportParam: r,
            });
          }
        } else {
          k.iT({
            containerService,
            reportParam: r,
          });
        }
        ee(e);
      },
      [
        K,
        H,
        containerService,
        F,
        ee,
        limitations,
        onInsufficientCustomCallback,
        scene,
        sceneOptions,
      ],
    );
    var en = l.useCallback(
      (e) => {
        D.q(containerService, {
          reason: "credit_insufficient",
          enterSource: F,
          needCredits: limitations.needCredits,
          scene,
          sceneOptions,
        });
        if (onInsufficientCustomCallback) {
          var r = K(C_1.CREDIT_INSUFFICIENT);
          try {
            onInsufficientCustomCallback(
              C_1.CREDIT_INSUFFICIENT,
              limitations,
              r,
            );
          } catch (e) {
            showCreditInsufficientModal();
          }
        } else {
          showCreditInsufficientModal();
        }
        ee(e);
      },
      [
        onInsufficientCustomCallback,
        limitations,
        K,
        containerService,
        F,
        scene,
        sceneOptions,
        showCreditInsufficientModal,
        ee,
      ],
    );
    var et = l.useCallback(
      (e, type) => {
        var t;
        var l;
        var s;
        D.q(containerService, {
          reason: "identity_insufficient",
          enterSource: F,
          needCredits: limitations.needCredits,
          scene,
          sceneOptions,
        });
        s = ((e) => {
          const { type, isTeamOwner } = e;
          switch (type) {
            case "ultra_unavailable":
              return {
                title: W.Ay.t(
                  "web_team_feature_unavailable_for_non_membership",
                  {},
                  "此功能团队版暂不可用",
                ),
                okText: U(),
                okAction: "acknowledge",
              };
            case "membership_expired":
              return n._(
                {
                  title: W.Ay.t(
                    "web_team_upload_membership_expired_title",
                    {},
                    "团队版已过期，无法使用团队会员权益",
                  ),
                  content: isTeamOwner
                    ? W.Ay.t(
                        "web_team_upload_membership_expired_desc",
                        {},
                        "你可以开通团队版，再使用相关团队权益",
                      )
                    : W.Ay.t(
                        "web_team_upload_membership_expired_member_desc",
                        {},
                        "你可以联系团队创建者开通团队版，再使用相关团队权益",
                      ),
                  okText: isTeamOwner
                    ? W.Ay.t(
                        "web_team_upload_open_membership",
                        {},
                        "开通团队会员",
                      )
                    : U(),
                  okAction: isTeamOwner ? "open_membership" : "acknowledge",
                },
                isTeamOwner
                  ? {
                      cancelText: W.Ay.t(
                        "web_team_upload_not_now",
                        {},
                        "暂不开通",
                      ),
                      cancelAction: "acknowledge",
                    }
                  : {},
              );
            default:
              return n._(
                {
                  title: W.Ay.t(
                    "web_team_member_seat_limit_exceeded_title",
                    {},
                    "当前团队成员，超出团队会员席位上限",
                  ),
                  content: isTeamOwner
                    ? W.Ay.t(
                        "web_team_member_seat_limit_exceeded_desc",
                        {},
                        "你暂时无法使用团队会员权益，你可以扩充小组席位或清理成员后，再使用相关团队权益",
                      )
                    : W.Ay.t(
                        "web_team_member_seat_limit_exceeded_member_desc",
                        {},
                        "你暂时无法使用团队会员权益，你可以联系创建者扩充小组席位或清理成员后，再使用相关团队权益",
                      ),
                  okText: isTeamOwner
                    ? W.Ay.t("web_team_seats_add", {}, "增加席位")
                    : U(),
                  okAction: isTeamOwner ? "add_seats" : "acknowledge",
                },
                isTeamOwner
                  ? {
                      cancelText: W.Ay.t(
                        "web_team_member_management",
                        {},
                        "成员管理",
                      ),
                      cancelAction: "member_management",
                    }
                  : {},
              );
          }
        })(
          (t = {
            containerService,
            reportParam: Q,
            type,
            isTeamOwner: limitations.isTeamOwner,
          }),
        );
        l = O.A.confirm({
          title: s.title,
          content: s.content,
          icon: null,
          closeIcon: o.jsx(P.gzW, {}),
          maskClosable: true,
          okText: s.okText,
          cancelText: s.cancelText,
          cancelButtonProps: {
            className: "cancel-button-QyNHyJ",
            onClick: () => {
              if (l != null) {
                l.close();
              }
              l = undefined;
              V(s.cancelAction, t);
            },
          },
          okButtonProps: {
            className: "confirm-button-_IbVAR",
          },
          onOk: () => V(s.okAction, t),
          footer: s.cancelText ? undefined : (e, r) => r,
        });
        ee(e);
      },
      [limitations, containerService, F, scene, sceneOptions, Q, ee],
    );
    var ea = l.useCallback(
      (e) => {
        var r;
        if (
          ((r = Z(containerService)) == null ? undefined : r.creditMini) ===
            true &&
          !limitations.isTeamMode
        ) {
          D.q(containerService, {
            reason: "credit_insufficient",
            enterSource: F,
            needCredits: limitations.needCredits,
            scene,
            sceneOptions,
          });
          k.iT({
            containerService,
            reportParam: H(C_1.CREDIT_INSUFFICIENT),
          });
          ee(e);
          return;
        }
        if ($) {
          ei(e);
        } else {
          en(e);
        }
      },
      [
        en,
        ei,
        $,
        containerService,
        limitations.isTeamMode,
        limitations.needCredits,
        F,
        scene,
        sceneOptions,
        H,
        ee,
      ],
    );
    var eo = l.useCallback(
      (e) => {
        if (!decision) {
          return false;
        }
        try {
          r = decision.recheck();
        } catch (e) {}
        if (!r || r.status === "checking" || r.status === "unavailable") {
          return false;
        }
        if (
          r.status === "blocked" &&
          r.intent === "vip" &&
          (ignoreNeedVip || limitations.trialInfo.isCreditTrial)
        ) {
          if (!B) {
            ea(e);
          }
          return true;
        }
        if (
          r.status === "blocked" &&
          r.intent === "credit_recharge" &&
          ignoreNeedCredits
        ) {
          return true;
        }
        var r;
        var i;
        var n =
          (i = r).status === "allowed"
            ? "allow"
            : i.status !== "blocked" || i.intent === "login"
              ? "intercept"
              : i.intent === "vip" || $
                ? "vip"
                : "credit";
        return (
          n === "allow" ||
          (n === "vip"
            ? r.status === "blocked" && r.intent === "credit_recharge"
              ? ei(e)
              : er(e)
            : n === "credit"
              ? ea(e)
              : ee(e),
          true)
        );
      },
      [
        decision,
        ei,
        ea,
        er,
        ignoreNeedCredits,
        ignoreNeedVip,
        ee,
        B,
        limitations.trialInfo.isCreditTrial,
        $,
      ],
    );
    var el = l.useCallback(
      (e) => {
        if (!R(e.target)) {
          var r = (function (e) {
            const r =
              !(arguments.length > 1) ||
              arguments[1] === undefined ||
              arguments[1];
            if (e.isTeamMode) {
              const i = e.needVip || (!e.isTeamOwner && e.needCredits > 0);
              const n =
                !!e.isTeamOwner && !e.needVip && e.needCredits > 0 && !r;
              if (
                (i || n) &&
                (e.teamMembershipStatus === N.lz.Expired ||
                  e.teamMembershipUnavailableReason === N.ms.Expired)
              ) {
                return "membership_expired";
              }
              if (
                i &&
                e.teamMembershipUnavailableReason === N.ms.SeatLimitExceeded
              ) {
                return "seat_limit_exceeded";
              }
              if (
                e.needVip &&
                e.needMinVipLevel === "ultra" &&
                e.currentVipLevel !== "ultra"
              ) {
                return "ultra_unavailable";
              }
              return undefined;
            }
          })(limitations, B);
          if (limitations.trialInfo.isCreditTrial && r) {
            return void et(e, r);
          }
          if (
            !eo(e) &&
            !limitations.isInFreemiumStage &&
            !limitations.trialInfo.isStrategyFreeTrial
          ) {
            if (limitations.trialInfo.isCreditTrial) {
              if (!B) {
                ea(e);
              }
              return;
            }
            if (r) {
              return void et(e, r);
            }
            var i = limitations.needVip;
            var n =
              A.MG[limitations.currentVipLevel] >=
              A.MG[limitations.needMinVipLevel];
            if (i && (!limitations.isVip || !n)) {
              return void er(e);
            }
            if (!B) {
              return void ea(e);
            }
          }
        }
      },
      [limitations, B, ea, eo, et, er],
    );
    return {
      handleClickCapture: l.useCallback(
        (e) => {
          if (beforeClickCapture != null) {
            beforeClickCapture(e);
          }
          var r = G();
          if ((!ignoreClickIntercept || r) && !disabled) {
            if (r) {
              qRef.current.add(e);
              queueMicrotask(() => el(e));
              return;
            }
            return el(e);
          }
        },
        [el, ignoreClickIntercept, disabled, beforeClickCapture, G],
      ),
      handleKeyDownCapture: l.useCallback(
        (e) => {
          var r = G();
          if (
            e.key === "Enter" &&
            !e.shiftKey &&
            (!ignoreEnterIntercept || r) &&
            !disabled
          ) {
            if (beforeKeyDownCapture != null) {
              beforeKeyDownCapture(e);
            }
            if (r) {
              qRef.current.add(e);
              queueMicrotask(() => el(e));
              return;
            }
            return el(e);
          }
        },
        [el, ignoreEnterIntercept, disabled, beforeKeyDownCapture, G],
      ),
    };
  })({
    scene,
    sceneOptions,
    benefitAmount,
    extraBenefits,
    ignoreClickIntercept,
    ignoreEnterIntercept,
    ignoreNeedVip,
    ignoreNeedCredits,
    disabled,
    creditNotPassCallback,
    reportParam,
    limitations,
    vipSource,
    containerService: ea,
    localCredit,
    beforeClickCapture,
    beforeKeyDownCapture,
    isDirectSubscription,
    onInsufficientCustomCallback,
    decision,
    getTeamCreditRechargeContext,
  });
  var { renderFunctionChildren, renderSingleChild, renderMultipleChildren } = ((
    e,
  ) => {
    var {
      limitations,
      className,
      wrapperStyle,
      handleClickCapture,
      handleKeyDownCapture,
      component = "div",
    } = e;
    var c = l.useMemo(
      () => ({
        className,
        style: wrapperStyle,
        onClickCapture: handleClickCapture,
        onKeyDownCapture: handleKeyDownCapture,
      }),
      [className, wrapperStyle, handleClickCapture, handleKeyDownCapture],
    );
    var u = l.useCallback(
      (e) => ({
        onClickCapture: (r) => {
          var i;
          var n;
          handleClickCapture(r);
          if ((i = (n = e.props).onClickCapture) != null) {
            i.call(n, r);
          }
        },
        onKeyDownCapture: (r) => {
          var i;
          var n;
          handleKeyDownCapture(r);
          if ((i = (n = e.props).onKeyDownCapture) != null) {
            i.call(n, r);
          }
        },
      }),
      [handleClickCapture, handleKeyDownCapture],
    );
    var d = l.useCallback(
      (e) => ({
        className:
          ""
            .concat(className || "", " ")
            .concat(e.props.className || "")
            .trim() || undefined,
        style: n._({}, wrapperStyle || {}, e.props.style || {}),
      }),
      [className, wrapperStyle],
    );
    var m = l.useCallback((e) => n._({}, u(e), d(e)), [u, d]);
    var renderFunctionChildren_1 = l.useCallback(
      (e) => {
        var i = e(limitations);
        if (l.isValidElement(i)) {
          if (component === null) {
            return l.cloneElement(i, m(i));
          }
          return l.createElement(component, c, i);
        }
        if (component === null) {
          if (i === null) {
            return null;
          }
          return l.createElement("div", {}, i);
        }
        return l.createElement(component, c, i);
      },
      [limitations, c, component, m],
    );
    return {
      renderFunctionChildren: renderFunctionChildren_1,
      renderSingleChild: l.useCallback(
        (e) => {
          if (component === null) {
            return l.cloneElement(e, m(e));
          }
          return l.createElement(component, c, e);
        },
        [component, c, m],
      ),
      renderMultipleChildren: l.useCallback(
        (e) => l.createElement(component != null ? component : "div", c, e),
        [component, c],
      ),
    };
  })({
    limitations,
    component,
    className,
    wrapperStyle,
    handleClickCapture,
    handleKeyDownCapture,
  });
  if (typeof children === "function") {
    return renderFunctionChildren(children);
  }
  if (l.Children.count(children) === 1) {
    return renderSingleChild(l.Children.only(children));
  }
  return renderMultipleChildren(children);
};
var et = l.memo(function (e) {
  const {
    children,
    component = "div",
    ignoreClickIntercept = false,
    decision,
  } = e;
  const m = a._(e, [
    "children",
    "component",
    "ignoreClickIntercept",
    "decision",
  ]);
  const p = s.h(c.a);
  const uiConfig = l.useMemo(
    () => p.commercialBenefitsManager.getUIConfig(m.scene, m.sceneOptions),
    [p, m.scene, m.sceneOptions],
  );
  const g = l.useCallback(
    (e) => {
      var a = typeof children === "function" ? children(e) : children;
      if ((uiConfig == null ? undefined : uiConfig.uiType) === "tooltip") {
        return o.jsx(
          ei,
          t._(
            n._(
              {
                limitations: e,
                component,
                uiConfig,
              },
              m,
            ),
            {
              children: a,
            },
          ),
        );
      }
      if ((uiConfig == null ? undefined : uiConfig.uiType) === "label") {
        return o.jsx(
          Q,
          t._(
            n._(
              {
                limitations: e,
                component,
                uiConfig,
              },
              m,
            ),
            {
              children: a,
            },
          ),
        );
      }
      return o.jsx(
        $,
        t._(
          n._(
            {
              limitations: e,
              component,
              uiConfig,
            },
            m,
          ),
          {
            children: a,
          },
        ),
      );
    },
    [uiConfig, m, children, component],
  );
  return o.jsx(
    useEn,
    t._(
      n._(
        {
          component,
          decision,
          ignoreClickIntercept:
            ignoreClickIntercept ||
            (uiConfig == null ? undefined : uiConfig.ignoreClickIntercept),
        },
        m,
      ),
      {
        children: g,
      },
    ),
  );
});
export { et as w };
