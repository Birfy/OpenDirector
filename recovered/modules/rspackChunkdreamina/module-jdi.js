import n from "NY";
import t from "oa";
import a from "z8";
import o from "bT";
import l from "p21";
import s from "X5";
import c from "wF";
import u from "ar";
import d from "Kt";
import m from "MgG";
import p from "MWC";
import v from "YY";
import g from "MK";
import _ from "gjS";
import h from "DT";
import b from "gLs";
import y from "Wd";
import f from "VN";
import "WJ";
import M from "gei";
import T from "cO";
import N from "yw";
import x from "fGo";
import I from "bk";
import B from "yyo";
import $ from "qfb";
const j = "{discountNumber}";
const A = "{discountPrice}";
const C = /\{[A-Za-z][A-Za-z0-9]*}/g;
const k = /\*\*([\s\S]+?)\*\*/g;
const w = /(\d+(?:\.\d+)?)/g;
const D = new Set([j, A]);
function S(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function E(e, r) {
  const i = e[r];
  if (typeof i === "string") {
    return i.trim();
  }
  return "";
}
function z(e, r) {
  return E(e, r) || undefined;
}
function R(e) {
  return [...e.matchAll(C)].some((e) => {
    var [r] = e;
    return !D.has(r);
  });
}
function O(e) {
  if (S(e)) {
    let r;
    const i = {
      backgroundImage: E(e, "backgroundImage"),
      logoImage: z(e, "logoImage"),
      heroText:
        (r = z(e, "heroText")) == null
          ? undefined
          : r
              .replaceAll("\\r\\n", "\n")
              .replaceAll("\\n", "\n")
              .replaceAll("\\r", "\n"),
      heroTextColor: z(e, "heroTextColor"),
      heroHighlightColor: z(e, "heroHighlightColor"),
      title: E(e, "title"),
      subtitle: E(e, "subtitle"),
      primaryButtonText: E(e, "primaryButtonText"),
      secondaryButtonText: E(e, "secondaryButtonText"),
    };
    if (
      i.backgroundImage &&
      i.title &&
      i.subtitle &&
      i.primaryButtonText &&
      i.secondaryButtonText
    ) {
      if ([i.heroText, i.title, i.subtitle].filter((e) => !!e).some(R)) {
        return undefined;
      }
      return i;
    }
  }
}
function P(e, r) {
  if (e && r) {
    return e.replaceAll(j, r.discountNumber).replaceAll(A, r.discountPrice);
  }
  return e;
}
function L(e, r) {
  return I._(t._({}, e), {
    heroText: P(e.heroText, r),
    title: P(e.title, r),
    subtitle: P(e.subtitle, r),
  });
}
const className = "title-CAsslh";
function W(e) {
  const {
    primaryText,
    secondaryText,
    disabled,
    onPrimaryClick,
    onSecondaryClick,
  } = e;
  return a.jsxs("div", {
    className: "buttons-CkcMWT",
    children: [
      a.jsx("button", {
        className: "secondaryButton-IAljYn",
        type: "button",
        disabled,
        onClick: onSecondaryClick,
        children: secondaryText,
      }),
      a.jsx("button", {
        className: "primaryButton-mUQ2Fr",
        type: "button",
        disabled,
        onClick: onPrimaryClick,
        children: primaryText,
      }),
    ],
  });
}
function U(e) {
  const { dialog, stage } = e;
  return a.jsxs("div", {
    className: "heroContent-HXiy7C",
    "data-retention-hero": stage,
    children: [
      dialog.logoImage
        ? a.jsx("img", {
            className: "logoImage-ZQ3L9t",
            src: T.m(dialog.logoImage, null, {
              logType: "js.href/src",
              reportOnly: "false",
              blackConfig: "{}",
              configMode: "merge",
              isCloseSSRReport: true,
              bid: "cc_dreamina",
              region: "cn",
              urlLimit: "-1",
              htmlLimit: "-1",
              isSaveValidUrl: false,
              isRuntimeLog: false,
              isDOMParser: false,
              escapeRule: "escape-report",
              reportUrl:
                "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
              htmlparserOptions: "{}",
              scmBranch: "-",
              scmName: "-",
              scmVersion: "-",
              webpackPluginVersion: "3.6.0",
              filename:
                "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-W1Je%1-%mFXRXBx$2xNNW$tTnR%WFpaTWpsMFkw-z$k$nB-TlRCam$%bHBaRmhP-0dKdFZuc*pl$*w2WkZkS2$sa3pTbkJq%0ZKd1lqSTBkR0p-%m5WWl-y%nN%RmN4Z*xwSFJuTk1Naz%yWWxoQ2RtSnRWblZr%0%xMllsZEdk$mx-Wkd4T$dFSnpX$mMxZWt3elRqRlpiaz$xWTIxc2Qy%khiSFpp-$R*c$dW-zFhbHB-ZDNSamJWWXdXb*MxT%d*WE9-$k1NbXgx$2tk$05FeH$$bnBs%jBaN$dqTldlZz09",
            }),
            alt: "",
            crossOrigin: "anonymous",
            draggable: false,
          })
        : null,
      dialog.heroText
        ? a.jsx("div", {
            className: "heroText-Zg0T2N",
            style: dialog.heroTextColor
              ? {
                  color: dialog.heroTextColor,
                }
              : undefined,
            children: ((e) => {
              if (!e) {
                return [];
              }
              const r = [];
              let i = 0;
              k.lastIndex = 0;
              for (let n = k.exec(e); n;) {
                if (n.index > i) {
                  r.push({
                    highlighted: false,
                    text: e.slice(i, n.index),
                  });
                }
                r.push({
                  highlighted: true,
                  text: n[1],
                });
                i = n.index + n[0].length;
                n = k.exec(e);
              }
              if (i < e.length) {
                r.push({
                  highlighted: false,
                  text: e.slice(i),
                });
              }
              return r.flatMap((e) =>
                e.text
                  .split(w)
                  .filter(Boolean)
                  .map((text) =>
                    I._(t._({}, e), {
                      numeric: /^\d+(?:\.\d+)?$/.test(text),
                      text,
                    }),
                  ),
              );
            })(dialog.heroText).map((e, i) =>
              a.jsx(
                "span",
                {
                  className: e.numeric ? "heroTextNumber-zYNTDW" : undefined,
                  style:
                    e.highlighted && dialog.heroHighlightColor
                      ? {
                          color: dialog.heroHighlightColor,
                        }
                      : undefined,
                  children: e.text,
                },
                "".concat(e.text, "-").concat(i),
              ),
            ),
          })
        : null,
    ],
  });
}
function V(e) {
  const { dialog, onKeepSubscription, onShowOffer } = e;
  return a.jsxs(a.Fragment, {
    children: [
      a.jsx("div", {
        className,
        children: dialog.title,
      }),
      a.jsx(W, {
        primaryText: dialog.primaryButtonText,
        secondaryText: dialog.secondaryButtonText,
        disabled: false,
        onPrimaryClick: onKeepSubscription,
        onSecondaryClick: onShowOffer,
      }),
    ],
  });
}
function Z(e) {
  let r;
  let i;
  const {
    material,
    stage,
    isAwarding,
    isCancelling,
    onDismiss,
    onKeepSubscription,
    onShowOffer,
    onAward,
    onContinueCancel,
    onContinueOriginalCancel,
  } = e;
  const v =
    stage === "rights"
      ? material == null
        ? undefined
        : material.rightsDialog
      : undefined;
  if (stage === "offer") {
    r = material == null ? undefined : material.offerDialog;
    i = "offer";
  } else if (stage === "retained") {
    r = material == null ? undefined : material.retenDialog;
    i = "retained";
  }
  const g = v != null ? v : r;
  const visible = !!(g && stage);
  const disabled = isAwarding || isCancelling;
  return a.jsx(M.A, {
    visible,
    title: null,
    footer: null,
    simple: false,
    closable: false,
    maskClosable: false,
    className: "retentionModal-KlvPgS",
    wrapClassName: "retentionModalWrapper-vwP77Q",
    maskStyle: x.S(8),
    onCancel: onDismiss,
    children:
      material && stage && g
        ? a.jsxs("div", {
            className: "surface-pVlGMm",
            "aria-busy": disabled,
            "data-retention-stage": stage,
            children: [
              a.jsxs("div", {
                className: "hero-tzmF8e",
                children: [
                  a.jsx("img", {
                    className: "backgroundImage-e_WTRq",
                    src: T.m(g.backgroundImage, null, {
                      logType: "js.href/src",
                      reportOnly: "false",
                      blackConfig: "{}",
                      configMode: "merge",
                      isCloseSSRReport: true,
                      bid: "cc_dreamina",
                      region: "cn",
                      urlLimit: "-1",
                      htmlLimit: "-1",
                      isSaveValidUrl: false,
                      isRuntimeLog: false,
                      isDOMParser: false,
                      escapeRule: "escape-report",
                      reportUrl:
                        "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
                      htmlparserOptions: "{}",
                      scmBranch: "-",
                      scmName: "-",
                      scmVersion: "-",
                      webpackPluginVersion: "3.6.0",
                      filename:
                        "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-W1Je%1-%mFXRXBx$2xNNW$tTnR%WFpaTWpsMFkw-z$k$nB-TlRCam$%bHBaRmhP-0dKdFZuc*pl$*w2WkZkS2$sa3pTbkJq%0ZKd1lqSTBkR0p-%m5WWl-y%nN%RmN4Z*xwSFJuTk1Naz%yWWxoQ2RtSnRWblZr%0%xMllsZEdk$mx-Wkd4T$dFSnpX$mMxZWt3elRqRlpiaz$xWTIxc2Qy%khiSFpp-$R*c$dW-zFhbHB-ZDNSamJWWXdXb*MxT%d*WE9-$k1NbXgx$2tk$05FeH$$bnBs%jBaN$dqTldlZz09",
                    }),
                    alt: "",
                    crossOrigin: "anonymous",
                    draggable: false,
                  }),
                  r && i
                    ? a.jsx(U, {
                        dialog: r,
                        stage: i,
                      })
                    : null,
                ],
              }),
              a.jsx("button", {
                className: "closeButton-jOUTH8",
                type: "button",
                "aria-label": "关闭",
                disabled,
                onClick: onDismiss,
                children: a.jsx(N.gzW, {
                  className: "closeIcon-Sb1UzK",
                }),
              }),
              a.jsxs("div", {
                className: "content-LfpKAF",
                children: [
                  stage === "rights" && v
                    ? a.jsx(V, {
                        dialog: v,
                        onKeepSubscription,
                        onShowOffer,
                      })
                    : null,
                  r
                    ? a.jsxs(a.Fragment, {
                        children: [
                          a.jsx("div", {
                            className,
                            children: r.title,
                          }),
                          r.subtitle
                            ? a.jsx("div", {
                                className: "subtitle-ueIz7u",
                                children: r.subtitle,
                              })
                            : null,
                          a.jsx(W, {
                            primaryText: r.primaryButtonText,
                            secondaryText: r.secondaryButtonText,
                            disabled,
                            onPrimaryClick:
                              stage === "offer" ? onAward : onKeepSubscription,
                            onSecondaryClick:
                              stage === "offer"
                                ? onContinueCancel
                                : onContinueOriginalCancel,
                          }),
                        ],
                      })
                    : null,
                ],
              }),
            ],
          })
        : null,
  });
}
const J = {
  isPreparing: false,
  isAwarding: false,
  isCancelling: false,
};
function Q(plan) {
  return [
    plan == null ? undefined : plan.subscribeId,
    plan == null ? undefined : plan.payChannel,
  ].join("|");
}
const H = {
  rights: "cancel_renewal_retention_primary",
  offer: "cancel_renewal_retention_secondary",
  retained: "cancel_renewal_reminder_popup",
};
function useY(e) {
  let commercialPayTradeDataService;
  let i;
  const { forceTheme, onAwardSuccess, reportParam, signInfo } = e;
  const containerService = c.h(d._);
  const j = c.h(b.o);
  const A = c.h(f._);
  const plan = l.F(A, (e) => {
    var r;
    if ((r = e.vipInfo) == null) {
      return undefined;
    }
    return r.currentAutoRenewPlan;
  });
  const kRef = o.useRef(false);
  const { currentTab, source, subPage } = reportParam;
  const reportSource =
    source === _.ok.MultiVipPopupSwitchFree
      ? "multi_vip_popup_click_subscribe"
      : "subscribe_plan_manage_popup_click_cancel_auto_renewal";
  const onFallback = o.useCallback(() => {
    ((e) => {
      const {
        containerService,
        forceTheme,
        nextRenewalTime,
        reportSource,
        signInfo,
      } = e;
      v.X({
        containerService,
        currentSubscribedProductId:
          signInfo == null ? undefined : signInfo.productId,
        forceTheme,
        preCreateRes: {
          obtainedVipInfo: {
            autoRenewEndTime: nextRenewalTime,
          },
          upcomingVipInfo: {},
          subscriptionChangeInfo: {
            changeType: "DEGRADE",
          },
        },
        reportParam: {
          source: reportSource,
        },
      });
    })({
      containerService,
      forceTheme,
      nextRenewalTime: plan == null ? undefined : plan.nextRenewalTime,
      reportSource,
      signInfo,
    });
  }, [
    containerService,
    plan == null ? undefined : plan.nextRenewalTime,
    forceTheme,
    reportSource,
    signInfo,
  ]);
  const onAwardSuccess_1 = o.useCallback(
    () =>
      n._(function* () {
        yield Promise.all([
          m.CA(containerService, true),
          Promise.resolve(
            onAwardSuccess == null ? undefined : onAwardSuccess(),
          ),
        ]);
      })(),
    [containerService, onAwardSuccess],
  );
  commercialPayTradeDataService = c.h(s.ICommercialPayTradeDataService);
  i = c.h(u.k);
  const onDirectCancel = o.useCallback(
    (subscribeId) =>
      (function (e) {
        return n
          ._(function* (e) {
            const {
              subscribeId,
              aid,
              commercialPayTradeDataService,
              containerService,
              reportSource,
            } = e;
            const o = Date.now();
            h.iw(containerService, {
              action: "cancel_subscribe",
              source: reportSource,
            });
            try {
              if (
                !(yield commercialPayTradeDataService.unsign({
                  aid,
                  subscribeId,
                })).ok
              ) {
                y.a("warn", {
                  durationMs: Date.now() - o,
                  outcome: "failed",
                  phase: "direct_cancel",
                  reason: "response_not_ok",
                  source: reportSource,
                });
                p.p.error(
                  g.Ay.t(
                    "web_dre_m10n_management_page_auto_renew_cancel_fail_toast",
                    {},
                    "Something went wrong. Try again later.",
                  ),
                );
                h.iw(containerService, {
                  action: "failed",
                  source: reportSource,
                });
                return false;
              }
              try {
                yield m.CA(containerService, true);
              } catch (error) {
                y.a("error", {
                  errorType: y.n(error),
                  outcome: "error",
                  phase: "refresh",
                  reason: "cancel_refresh_exception",
                  source: reportSource,
                });
              }
              y.a("info", {
                durationMs: Date.now() - o,
                outcome: "success",
                phase: "direct_cancel",
                source: reportSource,
              });
              p.p.success(
                g.Ay.t(
                  "web_dre_m10n_management_page_auto_renew_cancel_success",
                  {},
                  "Cancel auto renew successfully!",
                ),
              );
              h.iw(containerService, {
                action: "success",
                source: reportSource,
              });
              return true;
            } catch (error) {
              y.a("error", {
                durationMs: Date.now() - o,
                errorType: y.n(error),
                outcome: "error",
                phase: "direct_cancel",
                reason: "request_exception",
                source: reportSource,
              });
              p.p.error(
                g.Ay.t(
                  "web_dre_m10n_management_page_auto_renew_cancel_fail_toast",
                  {},
                  "Something went wrong. Try again later.",
                ),
              );
              h.iw(containerService, {
                action: "failed",
                source: reportSource,
              });
              return false;
            }
          })
          .apply(this, arguments);
      })({
        subscribeId,
        aid: Number(i.appId),
        commercialPayTradeDataService,
        containerService,
        reportSource,
      }),
    [commercialPayTradeDataService, containerService, i.appId, reportSource],
  );
  const retention = ((e) => {
    const {
      enabled,
      logSource,
      plan,
      signInfo,
      onFallback,
      onDirectCancel,
      onAwardSuccess,
    } = e;
    const m = c.h($.Q);
    const [v, setV] = o.useState(J);
    const _Ref = o.useRef(0);
    const hRef = o.useRef(false);
    const b = Q(plan);
    const fRef = o.useRef(b);
    const MRef = o.useRef(b);
    fRef.current = b;
    const dismiss = o.useCallback(() => {
      _Ref.current += 1;
      hRef.current = false;
      setV(J);
    }, []);
    o.useEffect(() => {
      if (MRef.current !== b) {
        MRef.current = b;
        dismiss();
      }
    }, [b, dismiss]);
    o.useEffect(() => {
      if (!enabled) {
        dismiss();
      }
    }, [enabled, dismiss]);
    o.useEffect(
      () => () => {
        _Ref.current += 1;
        hRef.current = false;
      },
      [],
    );
    const N = o.useCallback(
      () =>
        n._(function* () {
          if (!hRef.current) {
            let e;
            let n;
            let material;
            let c;
            const u = Date.now();
            if (!enabled) {
              y.a("info", {
                durationMs: Date.now() - u,
                outcome: "fallback",
                phase: "precheck",
                reason: "setting_disabled",
                settingHit: false,
                source: logSource,
              });
              onFallback();
              return;
            }
            const d =
              plan == null || (n = plan.subscribeId) == null
                ? undefined
                : n.trim();
            if (!d) {
              y.a("warn", {
                durationMs: Date.now() - u,
                outcome: "fallback",
                phase: "precheck",
                reason: "subscribe_id_missing",
                settingHit: true,
                source: logSource,
              });
              onFallback();
              return;
            }
            if (B.g(plan == null ? undefined : plan.payChannel)) {
              y.a("info", {
                durationMs: Date.now() - u,
                outcome: "fallback",
                phase: "precheck",
                reason: "apple_subscription",
                settingHit: true,
                source: logSource,
              });
              onFallback();
              return;
            }
            const p = ++_Ref.current;
            const v = Q(plan);
            hRef.current = true;
            setV({
              isPreparing: true,
              isAwarding: false,
              isCancelling: false,
            });
            const [b, M] = yield Promise.all([
              m.getRetention(d).catch((e) => {
                y.a("error", {
                  durationMs: Date.now() - u,
                  errorType: y.n(e),
                  outcome: "error",
                  phase: "activity_query",
                  reason: "request_rejected",
                  settingHit: true,
                  source: logSource,
                });
              }),
              m.getMaterial().catch((e) => {
                y.a("error", {
                  durationMs: Date.now() - u,
                  errorType: y.n(e),
                  outcome: "error",
                  phase: "material_query",
                  reason: "request_rejected",
                  settingHit: true,
                  source: logSource,
                });
              }),
            ]);
            if (p !== _Ref.current || v !== fRef.current) {
              return void y.a("info", {
                durationMs: Date.now() - u,
                outcome: "ignored",
                phase: "prepare",
                reason: "stale_response",
                settingHit: true,
                source: logSource,
              });
            }
            const N =
              (b == null ? undefined : b.status) === 0 ||
              (b == null ? undefined : b.status) === 1
                ? signInfo != null
                  ? signInfo
                  : yield m.getSignInfo(d).catch((e) => {
                      y.a("error", {
                        activityStatus: b.status,
                        durationMs: Date.now() - u,
                        errorType: y.n(e),
                        outcome: "error",
                        phase: "sign_info_query",
                        reason: "request_rejected",
                        settingHit: true,
                        source: logSource,
                      });
                    })
                : undefined;
            if (p !== _Ref.current || v !== fRef.current) {
              return void y.a("info", {
                activityStatus: b == null ? undefined : b.status,
                durationMs: Date.now() - u,
                outcome: "ignored",
                phase: "prepare",
                reason: "stale_response",
                settingHit: true,
                source: logSource,
              });
            }
            const x =
              ((b == null ? undefined : b.status) === 0 ||
                (b == null ? undefined : b.status) === 1) &&
              b.reductionFen !== undefined &&
              (N == null ? undefined : N.billingFen) !== undefined
                ? ((originalFen, reductionFen) => {
                    if (
                      Number.isSafeInteger(originalFen) &&
                      Number.isSafeInteger(reductionFen) &&
                      !(originalFen <= 0) &&
                      !(reductionFen <= 0) &&
                      !(reductionFen > originalFen)
                    ) {
                      const finalFen = originalFen - reductionFen;
                      const n = Math.ceil((finalFen / originalFen) * 100);
                      return {
                        originalFen,
                        reductionFen,
                        finalFen,
                        discountNumber:
                          n % 10 == 0
                            ? String(n / 10)
                            : "".concat(Math.floor(n / 10), ".").concat(n % 10),
                        discountPrice: (Math.max(reductionFen, 0) / 100)
                          .toFixed(2)
                          .replace(/\.?0+$/, ""),
                      };
                    }
                  })(N.billingFen, b.reductionFen)
                : undefined;
            if (x && (b == null ? undefined : b.status) === 0) {
              material = ((e, r) => {
                if (S(e)) {
                  const rightsDialog = ((e) => {
                    if (S(e)) {
                      const r = {
                        backgroundImage: E(e, "backgroundImage"),
                        title: E(e, "title"),
                        primaryButtonText: E(e, "primaryButtonText"),
                        secondaryButtonText: E(e, "secondaryButtonText"),
                      };
                      if (
                        r.backgroundImage &&
                        r.title &&
                        r.primaryButtonText &&
                        r.secondaryButtonText
                      ) {
                        return r;
                      }
                      return undefined;
                    }
                  })(e.rightsDialog);
                  const n = ((e) => {
                    if (S(e)) {
                      const r = O(e);
                      const successTips = E(e, "successTips");
                      const failTips = E(e, "failTips");
                      if (r && successTips && failTips) {
                        return I._(t._({}, r), {
                          successTips,
                          failTips,
                        });
                      }
                      return undefined;
                    }
                  })(e.offerDialog);
                  if (rightsDialog && n) {
                    return {
                      rightsDialog,
                      offerDialog: L(n, r),
                    };
                  }
                }
              })(M, x);
              c = "rights";
            } else if (x && (b == null ? undefined : b.status) === 1) {
              material = ((e, r) => {
                if (S(e)) {
                  const i = O(e.retenDialog);
                  if (i) {
                    return {
                      retenDialog: L(i, r),
                    };
                  }
                  return undefined;
                }
              })(M, x);
              c = "retained";
            }
            const j =
              (b == null ? undefined : b.status) === 0 ||
              (b == null ? undefined : b.status) === 1;
            const materialStatus =
              M === undefined
                ? "unavailable"
                : material === undefined
                  ? "invalid"
                  : "valid";
            const amountStatus = j ? (x ? "valid" : "invalid") : "not_checked";
            if (!material || !c) {
              const reason = b
                ? j
                  ? N
                    ? x
                      ? M === undefined
                        ? "material_unavailable"
                        : "material_invalid"
                      : "amount_invalid"
                    : "sign_info_unavailable"
                  : "activity_ineligible"
                : "activity_unavailable";
              y.a(reason === "activity_ineligible" ? "info" : "warn", {
                activityStatus: b == null ? undefined : b.status,
                amountStatus,
                durationMs: Date.now() - u,
                materialStatus,
                outcome: "fallback",
                phase: "prepare",
                reason,
                settingHit: true,
                source: logSource,
              });
              dismiss();
              onFallback();
              return;
            }
            y.a("info", {
              activityStatus: b == null ? undefined : b.status,
              amountStatus,
              durationMs: Date.now() - u,
              materialStatus,
              outcome: "shown",
              phase: "prepare",
              settingHit: true,
              source: logSource,
              stage: c,
            });
            hRef.current = false;
            setV({
              material,
              productId:
                (e = N == null ? undefined : N.productId) != null ? e : "",
              stage: c,
              isPreparing: false,
              isAwarding: false,
              isCancelling: false,
            });
          }
        })(),
      [enabled, logSource, onFallback, plan, signInfo, dismiss, m],
    );
    const keepSubscription = o.useCallback(() => {
      if (!hRef.current) {
        dismiss();
      }
    }, [dismiss]);
    const showOffer = o.useCallback(() => {
      if (!hRef.current) {
        setV((e) => {
          if (e.material) {
            return I._(t._({}, e), {
              stage: "offer",
            });
          }
          return e;
        });
      }
    }, []);
    const continueCancel = o.useCallback(
      () =>
        n._(function* () {
          if (enabled && !hRef.current && v.stage === "offer") {
            let e;
            const n =
              plan == null || (e = plan.subscribeId) == null
                ? undefined
                : e.trim();
            if (!n) {
              return void y.a("warn", {
                outcome: "failed",
                phase: "direct_cancel",
                reason: "subscribe_id_missing",
                source: logSource,
              });
            }
            const o = Date.now();
            const l = _Ref.current;
            const s = Q(plan);
            hRef.current = true;
            setV((e) =>
              I._(t._({}, e), {
                isCancelling: true,
              }),
            );
            let c = false;
            try {
              c = yield onDirectCancel(n);
            } catch (error) {
              y.a("error", {
                durationMs: Date.now() - o,
                errorType: y.n(error),
                outcome: "error",
                phase: "direct_cancel",
                reason: "callback_rejected",
                source: logSource,
              });
              c = false;
            }
            if (l !== _Ref.current || s !== fRef.current) {
              return void y.a("info", {
                durationMs: Date.now() - o,
                outcome: "ignored",
                phase: "direct_cancel",
                reason: "stale_response",
                source: logSource,
              });
            }
            if (c) {
              y.a("info", {
                durationMs: Date.now() - o,
                outcome: "success",
                phase: "direct_cancel",
                source: logSource,
              });
              dismiss();
              return;
            }
            y.a("warn", {
              durationMs: Date.now() - o,
              outcome: "failed",
              phase: "direct_cancel",
              reason: "callback_failed",
              source: logSource,
            });
            hRef.current = false;
            setV((e) =>
              I._(t._({}, e), {
                isCancelling: false,
              }),
            );
          }
        })(),
      [enabled, logSource, onDirectCancel, plan, dismiss, v.stage],
    );
    const continueOriginalCancel = o.useCallback(() => {
      if (!hRef.current && v.stage === "retained") {
        _Ref.current += 1;
        hRef.current = true;
        setV(J);
        try {
          onFallback();
        } finally {
          Promise.resolve().then(() => {
            hRef.current = false;
          });
        }
      }
    }, [onFallback, v.stage]);
    const award = o.useCallback(
      () =>
        n._(function* () {
          let e;
          let n;
          let o;
          const l = (e = v.material) == null ? undefined : e.offerDialog;
          if (enabled && !hRef.current && v.stage === "offer" && l) {
            const s =
              plan == null || (n = plan.subscribeId) == null
                ? undefined
                : n.trim();
            if (!s) {
              return void y.a("warn", {
                outcome: "failed",
                phase: "award",
                reason: "subscribe_id_missing",
                source: logSource,
              });
            }
            const c = Date.now();
            const u = _Ref.current;
            const b = Q(plan);
            hRef.current = true;
            setV((e) =>
              I._(t._({}, e), {
                isAwarding: true,
              }),
            );
            try {
              o = yield m.awardRetention(s);
            } catch (error) {
              y.a("error", {
                durationMs: Date.now() - c,
                errorType: y.n(error),
                outcome: "error",
                phase: "award",
                reason: "request_rejected",
                source: logSource,
              });
            }
            if (u !== _Ref.current || b !== fRef.current) {
              return void y.a("info", {
                awardStatus: o == null ? undefined : o.awardStatus,
                durationMs: Date.now() - c,
                outcome: "ignored",
                phase: "award",
                reason: "stale_response",
                source: logSource,
              });
            }
            if (
              (o == null ? undefined : o.awardStatus) === 1 ||
              (o == null ? undefined : o.awardStatus) === 2
            ) {
              const M = l.successTips;
              y.a("info", {
                awardStatus: o.awardStatus,
                durationMs: Date.now() - c,
                outcome: "success",
                phase: "award",
                source: logSource,
              });
              dismiss();
              p.p.success(M);
              try {
                Promise.resolve(
                  onAwardSuccess == null ? undefined : onAwardSuccess(),
                ).catch((e) => {
                  y.a("error", {
                    errorType: y.n(e),
                    outcome: "error",
                    phase: "refresh",
                    reason: "award_refresh_rejected",
                    source: logSource,
                  });
                });
              } catch (error) {
                y.a("error", {
                  errorType: y.n(error),
                  outcome: "error",
                  phase: "refresh",
                  reason: "award_refresh_exception",
                  source: logSource,
                });
              }
              return;
            }
            y.a("warn", {
              awardStatus: o == null ? undefined : o.awardStatus,
              durationMs: Date.now() - c,
              outcome: "failed",
              phase: "award",
              reason: o ? "award_status_failed" : "award_unavailable",
              source: logSource,
            });
            hRef.current = false;
            setV((e) =>
              I._(t._({}, e), {
                isAwarding: false,
              }),
            );
            p.p.error(l.failTips);
          }
        })(),
      [
        enabled,
        logSource,
        onAwardSuccess,
        plan,
        dismiss,
        m,
        v.material,
        v.stage,
      ],
    );
    return o.useMemo(
      () =>
        I._(t._({}, v), {
          isActive: !!v.stage,
          start: N,
          dismiss,
          keepSubscription,
          showOffer,
          continueCancel,
          continueOriginalCancel,
          award,
        }),
      [
        award,
        continueCancel,
        continueOriginalCancel,
        keepSubscription,
        dismiss,
        showOffer,
        N,
        v,
      ],
    );
  })({
    enabled: !j.isOversea,
    logSource: source,
    plan,
    signInfo,
    onFallback,
    onDirectCancel,
    onAwardSuccess: onAwardSuccess_1,
  });
  const V = ((e) => {
    const { containerService, currentTab, retention, source, subPage } = e;
    const report = o.useCallback(
      (action, currentPage) => {
        var l;
        _.zH(containerService, {
          action,
          currentPage,
          currentTab,
          productId: (l = retention.productId) != null ? l : "",
          source,
          subPage,
        });
      },
      [containerService, currentTab, retention.productId, source, subPage],
    );
    return ((e) => {
      const {
        stage,
        report,
        onDismiss,
        onKeepSubscription,
        onShowOffer,
        onAward,
        onContinueCancel,
        onContinueOriginalCancel,
      } = e;
      const uRef = o.useRef(new Set());
      o.useEffect(() => {
        if (!stage) {
          return void uRef.current.clear();
        }
        var e = H[stage];
        if (!(!e || uRef.current.has(e))) {
          uRef.current.add(e);
          report("show", e);
        }
      }, [report, stage]);
      const d = o.useCallback(
        (e, n) => {
          if (stage === e) {
            var t = H[e];
            if (t) {
              report(n, t);
            }
          }
        },
        [report, stage],
      );
      return {
        onDismiss,
        onKeepSubscription: () => {
          if (stage === "retained") {
            d("retained", "claim_offer");
          } else {
            d("rights", "keep_renewal");
          }
          onKeepSubscription();
        },
        onShowOffer: () => {
          d("rights", "close");
          onShowOffer();
        },
        onAward: () => {
          d("offer", "claim_offer");
          onAward();
        },
        onContinueCancel: () => {
          d("offer", "close");
          onContinueCancel();
        },
        onContinueOriginalCancel: () => {
          d("retained", "close");
          onContinueOriginalCancel();
        },
      };
    })({
      stage: retention.stage,
      report,
      onDismiss: retention.dismiss,
      onKeepSubscription: retention.keepSubscription,
      onShowOffer: retention.showOffer,
      onAward: () => void retention.award(),
      onContinueCancel: () => void retention.continueCancel(),
      onContinueOriginalCancel: retention.continueOriginalCancel,
    });
  })({
    containerService,
    currentTab,
    retention,
    source,
    subPage,
  });
  const start = o.useCallback(
    () =>
      n._(function* () {
        let e;
        if (kRef.current || retention.isActive) {
          return false;
        }
        kRef.current = true;
        _.zH(containerService, {
          action: "click_cancel_auto_renewal",
          currentPage: "manage",
          currentTab,
          productId:
            (e = signInfo == null ? undefined : signInfo.productId) != null
              ? e
              : "",
          source,
          subPage,
        });
        try {
          yield retention.start();
          return true;
        } finally {
          kRef.current = false;
        }
      })(),
    [
      containerService,
      currentTab,
      retention,
      signInfo == null ? undefined : signInfo.productId,
      source,
      subPage,
    ],
  );
  return {
    isActive: retention.isActive,
    isPreparing: retention.isPreparing,
    start,
    dialogProps: {
      material: retention.material,
      stage: retention.stage,
      isAwarding: retention.isAwarding,
      isCancelling: retention.isCancelling,
      onDismiss: V.onDismiss,
      onKeepSubscription: V.onKeepSubscription,
      onShowOffer: V.onShowOffer,
      onAward: V.onAward,
      onContinueCancel: V.onContinueCancel,
      onContinueOriginalCancel: V.onContinueOriginalCancel,
    },
  };
}
export { useY as d };
function X(e) {
  const { flow } = e;
  return a.jsx(Z, t._({}, flow.dialogProps));
}
export { X as S };
