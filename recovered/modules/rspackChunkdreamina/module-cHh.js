import i from "z8";
import n from "bT";
import a from "ED";
import o from "p21";
import s from "wF";
import c from "SC";
import l from "Kt";
import d from "SI";
import u from "csY";
import p from "F3";
import m from "zbK";
import h from "QSq";
import v from "f0";
import _ from "TX";
import y from "MK";
import g from "jh7";
import b from "VN";
import f from "Iv";
import x from "Qc";
import P from "oh";
import C from "PT";
import { Je, iT } from "./module-GFp.js";
import A from "oa";
import k from "bk";
import I from "qa";
import _j from "xb";
import N from "KN";
import O from "NA";
import L from "Mw";
import "r6K";
const M = a.PA(function (e) {
  const { amount, mode, presentation } = e;
  return i.jsx("div", {
    className: _j("credit-amount-text-u_Sicg", {
      "row-mode-mhFZbx": mode === "row",
      "column-mode-Q9hrZX": mode === "column",
      "membership-summary-SSUZs7": presentation === "membership-summary",
    }),
    children: amount,
  });
});
const R = (e) => {
  var { width = 10, height = 10 } = e;
  return i.jsx("svg", {
    width,
    height,
    viewBox: "0 0 25 24",
    preserveAspectRatio: "xMidYMid meet",
    fill: "none",
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    children: i.jsx("path", {
      "data-follow-fill": "currentColor",
      d: "M22.044 12.695a.77.77 0 0 0-.596-.734c-4.688-1.152-7.18-3.92-7.986-9.924a.358.358 0 0 0-.006-.033.573.573 0 0 0-1.137 0l-.007.033c-.805 6.004-3.298 8.772-7.986 9.924a.77.77 0 0 0-.596.734v.033a.82.82 0 0 0 .625.796c3.3.859 6.851 2.872 7.9 6.022.086.26.332.443.613.454h.037a.673.673 0 0 0 .614-.454c1.048-3.15 4.598-5.163 7.9-6.021a.82.82 0 0 0 .625-.797v-.033Z",
      fill: "currentColor",
    }),
  });
};
const F = a.PA(function (e) {
  const { amount, mode, presentation } = e;
  return i.jsxs("div", {
    className: _j("credit-amount-container-NjetBW", {
      "membership-summary-B7oZja": presentation === "membership-summary",
    }),
    children: [
      i.jsx(R, {
        width: 12,
        height: 12,
      }),
      i.jsx(M, {
        amount,
        mode,
        presentation,
      }),
    ],
  });
});
function E(currentVipLevel) {
  switch (currentVipLevel) {
    case "ultra":
      return y.Ay.t("dreamina_utra_subscribe", {}, "超级会员");
    case "maestro":
      return y.Ay.t("web_dre_m10n_subscription_plans_maestro", {}, "高级");
    case "artisan":
      return y.Ay.t("web_dre_m10n_subscription_plans_artisan", {}, "标准会员");
    case "standard":
      return y.Ay.t(
        "web_dre_m10n_management_page_auto_renew_standard",
        {},
        "基础",
      );
    case "":
      return y.Ay.t("web_m10n_subscribe_to_use", {}, "开会员");
    default:
      return "";
  }
}
const $ = a.PA(function (e) {
  const {
    mode,
    useResourceText = true,
    presentation = "default",
    content = "auto",
  } = e;
  const c = s.h(P.$);
  const l = s.h(b._);
  const d = s.h(x.q5);
  const u = v.w(c.vipPriceList);
  n.useEffect(() => {
    d.fetchResourcePosition();
  }, [d]);
  const p = n.useMemo(() => {
    if (content === "membership") {
      return E(l.currentVipLevel);
    }
    if (u) {
      return O.I(u);
    }
    if (useResourceText && d.text) {
      return d.text;
    }
    if (content === "promotion") {
      return "";
    }
    return E(l.currentVipLevel);
  }, [content, u, useResourceText, d.text, l.currentVipLevel]);
  const mRef = n.useRef(null);
  L.B(L.k());
  const [h, setH] = n.useState(false);
  n.useEffect(() => {
    setH(false);
  }, [false, p]);
  if (p) {
    return i.jsx("div", {
      ref: mRef,
      className: _j("upgrade-text-vCzr73", {
        "is-oversea-TrqfdO": false,
        "english-PRbIOw": false,
        "non-english-GByq4m": false,
        "shrink-text-_JCCPu": h,
        "row-mode-MRKpwg": mode === "row",
        "column-mode-w5VbwG": mode === "column",
        "membership-summary-label-UfXR7v":
          presentation === "membership-summary" && content === "membership",
        "promotion-tag-O09KjS":
          presentation === "membership-summary" && content === "promotion",
      }),
      children: p,
    });
  }
  return null;
});
const W = "row-mode-bIlPr_";
const B = "column-mode-uBIdgP";
const D = /\d+(?:\.\d+)?/g;
function V(e) {
  const { text } = e;
  const r = [];
  let n = 0;
  for (let a = D.exec(text); a;) {
    const o = a[0];
    const s = a.index;
    if (s > n) {
      r.push(text.slice(n, s));
    }
    r.push(
      i.jsx(
        "span",
        {
          className: "activity-text-number-KyHBcF",
          children: o,
        },
        "".concat(o, "-").concat(s),
      ),
    );
    n = s + o.length;
    a = D.exec(text);
  }
  if (n < text.length) {
    r.push(text.slice(n));
  }
  return i.jsx("div", {
    className: "activity-text-esRAPy",
    children: r,
  });
}
const useH = (e) => {
  var t;
  var r;
  var {
    showBrandColor,
    localCreditStr,
    onContainerClick,
    label,
    showUpgradeLabel = true,
    activityText,
    reportActivityId,
    reportDeeplink,
    reportReady = true,
    useResourceTextAsLabel = true,
    mode,
    className,
    presentation = "default",
    onClick,
  } = e;
  var P = I._(e, [
    "showBrandColor",
    "localCreditStr",
    "onContainerClick",
    "label",
    "showUpgradeLabel",
    "activityText",
    "reportActivityId",
    "reportDeeplink",
    "reportReady",
    "useResourceTextAsLabel",
    "mode",
    "className",
    "presentation",
    "onClick",
  ]);
  var C = s.h(l._);
  var S = u.b();
  var j = mode === "column" && !!activityText;
  var M = mode === "row" && presentation === "membership-summary";
  n.useEffect(() => {
    if (reportReady) {
      N.vx(C, {
        action: "show",
        activityId: reportActivityId,
        deeplink: reportDeeplink,
      });
    }
  }, [C, reportActivityId, reportDeeplink, reportReady]);
  var onClick_1 = n.useCallback(
    (e) => {
      onContainerClick();
      if (onClick != null) {
        onClick(e);
      }
      N.vx(C, {
        action: "click",
        activityId: reportActivityId,
        deeplink: reportDeeplink,
      });
    },
    [onContainerClick, onClick, C, reportActivityId, reportDeeplink],
  );
  var O = !S && !showUpgradeLabel && !!label;
  return i.jsxs(
    "div",
    k._(A._({}, P), {
      className: _j(
        "credit-display-container-jat_lj",
        {
          [W]: mode === "row",
          [B]: mode === "column",
          "non-vip-e7GQoA": !showBrandColor,
          "activity-atmosphere-JoRn1g": j,
          "freemium-mvkrtM": S,
          "membership-summary-nCcGct": M,
        },
        className,
      ),
      onClick: onClick_1,
      title: (t = P.title) != null ? t : label,
      "aria-label": (r = P["aria-label"]) != null ? r : label,
      children: [
        j
          ? i.jsx(V, {
              text: activityText != null ? activityText : "",
            })
          : null,
        i.jsxs("div", {
          className: "content-card-DZyjzx",
          children: [
            i.jsx(F, {
              amount: localCreditStr,
              mode,
              presentation,
            }),
            M
              ? i.jsxs(i.Fragment, {
                  children: [
                    O
                      ? i.jsx("div", {
                          className: "membership-summary-label-AUIJU1",
                          children: label,
                        })
                      : null,
                    !S && showUpgradeLabel
                      ? i.jsx($, {
                          mode,
                          presentation,
                          content: "membership",
                        })
                      : null,
                    !S && showUpgradeLabel
                      ? i.jsx($, {
                          mode,
                          presentation,
                          content: "promotion",
                          useResourceText: true,
                        })
                      : null,
                  ],
                })
              : i.jsxs(i.Fragment, {
                  children: [
                    mode === "row" &&
                      i.jsx("div", {
                        className: "divider-jDa4Pe",
                      }),
                    O &&
                      i.jsx("div", {
                        className: _j("label-text-kPUHE9", {
                          [W]: mode === "row",
                          [B]: mode === "column",
                        }),
                        children: label,
                      }),
                    !S &&
                      showUpgradeLabel &&
                      i.jsx($, {
                        mode,
                        useResourceText: useResourceTextAsLabel,
                      }),
                  ],
                }),
          ],
        }),
      ],
    }),
  );
};
function z(e, t, showZeroDecimal) {
  if (!showZeroDecimal) {
    const i = e.split(".")[1];
    if (i && i.split("").every((e) => e === "0")) {
      return e.split(".")[0] + t;
    }
  }
  return e + t;
}
export var S = a.PA(function (e) {
  let t;
  const {
    contextViewIds,
    mode = "column",
    tipPos = "right",
    tipHorizontalOffset,
    className,
    presentation = "default",
  } = e;
  const w = p.S();
  const containerService = s.h(l._);
  const M = s.h(g.r3);
  const {
    hasActiveMembership,
    hasCurrentTeamMembershipContext,
    teamMembershipStatus,
    teamVipLevel,
  } = o.F(M, (e) => ({
    hasActiveMembership: e.hasActiveMembership,
    hasCurrentTeamMembershipContext: e.isTeamMode,
    teamMembershipStatus: e.team.status,
    teamVipLevel: e.team.vipLevel,
  }));
  const E = s.h(b._);
  const isPersonalVipReady = o.F(E, (e) => e.isVipReady);
  const W = s.h(f.sG);
  const B = s.h(x.q5);
  const D = u.b();
  const { vipPriceList } = s.h(P.$);
  const [reportReady, setReportReady] = n.useState(false);
  const hasPromotePrice = n.useMemo(() => !!v.w(vipPriceList), [vipPriceList]);
  const isTeamCreditAccount = W.getCurrentAccount().accountType === "team";
  const B_text = B.text;
  const G = !!B_text;
  const Q = !!(B.activityId || B.deeplink);
  n.useEffect(() => {
    var e = false;
    B.fetchResourcePosition().finally(() => {
      if (!e) {
        setReportReady(true);
      }
    });
    return () => {
      e = true;
    };
  }, [B]);
  const localCreditStr = n.useMemo(
    () =>
      (function (e) {
        const t =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : {};
        const { decimalPlaces = 1, showZeroDecimal = false } = t;
        if (e < 10000) {
          return e.toString();
        }
        const n = ["万", "亿", "兆"];
        const a = [10000, 100000000, 1000000000000];
        for (let o = a.length - 1; o >= 0; o--) {
          if (e >= a[o]) {
            return z((e / a[o]).toFixed(decimalPlaces), n[o], showZeroDecimal);
          }
        }
        return z((e / 10000).toFixed(decimalPlaces), "万", showZeroDecimal);
      })(Math.min(990000, w)),
    [w],
  );
  const showBrandColor = n.useMemo(
    () =>
      ((e) => {
        const { hasActiveMembership, hasPromotePrice } = e;
        return hasActiveMembership || hasPromotePrice;
      })({
        hasActiveMembership,
        hasPromotePrice,
      }) ||
      G ||
      !!B_text,
    [hasActiveMembership, G, hasPromotePrice, B_text],
  );
  const ee = n.useMemo(
    () =>
      ((e) => {
        const { hasCurrentTeamMembershipContext, isTeamCreditAccount } = e;
        return hasCurrentTeamMembershipContext || isTeamCreditAccount;
      })({
        hasCurrentTeamMembershipContext,
        isTeamCreditAccount,
      }),
    [hasCurrentTeamMembershipContext, isTeamCreditAccount],
  );
  const et = n.useMemo(
    () =>
      ((e) => {
        const { hasCurrentTeamMembershipContext, isTeamCreditAccount } = e;
        return hasCurrentTeamMembershipContext || isTeamCreditAccount;
      })({
        hasCurrentTeamMembershipContext,
        isTeamCreditAccount,
      }),
    [hasCurrentTeamMembershipContext, isTeamCreditAccount],
  );
  const er = ((e) => {
    const {
      hasCurrentTeamMembershipContext,
      isTeamMembershipActive,
      teamVipLevel,
      mode,
      presentation,
    } = e;
    return (
      mode === "row" &&
      presentation === "membership-summary" &&
      hasCurrentTeamMembershipContext &&
      isTeamMembershipActive &&
      c.ny(teamVipLevel)
    );
  })({
    hasCurrentTeamMembershipContext,
    isTeamMembershipActive: teamMembershipStatus === g.lz.Active,
    teamVipLevel,
    mode,
    presentation,
  });
  const showUpgradeLabel = n.useMemo(
    () =>
      ((e) => {
        const { hasCurrentTeamMembershipContext, isTeamCreditAccount } = e;
        return !hasCurrentTeamMembershipContext && !isTeamCreditAccount;
      })({
        hasCurrentTeamMembershipContext,
        isTeamCreditAccount,
      }),
    [hasCurrentTeamMembershipContext, isTeamCreditAccount],
  );
  const onContainerClick = n.useCallback(() => {
    if (ee) {
      return void Je({
        containerService,
        purchaseSource: m.UA.TeamSubscribe,
        reportParam: {
          source: "top_account_button",
        },
      });
    }
    var e = _.MS(B.jumpType);
    var B_jumpSchema = B.jumpSchema;
    if (e === _.ML.Custom) {
      h.$(B_jumpSchema);
    } else {
      iT({
        containerService,
        reportParam: {
          source: "top_account_button",
          entranceActivityId: B.activityId,
          entranceDeeplink: B.deeplink,
          entranceResourceKey: Q ? x.AR : undefined,
        },
        defaultSubscriptionTab: _.Qt(B_jumpSchema),
      });
    }
  }, [
    containerService,
    Q,
    ee,
    B.activityId,
    B.deeplink,
    B.jumpSchema,
    B.jumpType,
  ]);
  if (
    !((e) => {
      const {
        isPersonalVipReady,
        isInFreemiumStage,
        hasCurrentTeamMembershipContext,
      } = e;
      return (
        isPersonalVipReady ||
        hasCurrentTeamMembershipContext ||
        isInFreemiumStage
      );
    })({
      hasCurrentTeamMembershipContext,
      isPersonalVipReady,
      isInFreemiumStage: D,
    })
  ) {
    return null;
  }
  return i.jsx(C.H, {
    contextViewIds,
    disabled: D,
    tipPos,
    tipHorizontalOffset,
    children: i.jsx(useH, {
      showBrandColor,
      localCreditStr,
      onContainerClick,
      label: et
        ? ((t = er ? teamVipLevel : undefined),
          c.ny(t) ? d.Qk(t) : y.Ay.t("web_team_membership", {}, "团队会员"))
        : undefined,
      showUpgradeLabel,
      activityText: G ? B_text : undefined,
      reportActivityId: B.activityId,
      reportDeeplink: B.deeplink,
      reportReady,
      useResourceTextAsLabel: !G,
      mode,
      className,
      presentation,
    }),
  });
});
