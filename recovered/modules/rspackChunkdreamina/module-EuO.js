import n from "oa";
import i from "bk";
import a from "z8";
import s from "SJ";
import o from "wF";
import c from "CFa";
import l from "JZn";
import d from "Dz";
import u from "bT";
import p from "yw";
import m from "y6y";
import v from "VPK";
import b from "p21";
import _ from "bo";
import y from "Kt";
import f from "bI5";
import A from "SI";
import x from "Nbm";
import w from "MK";
import R from "oh";
import k from "EYk";
import C from "xMb";
import T from "VN";
import N from "jh7";
import S from "zbK";
import P from "vxf";
import j from "gYh";
import M from "KS";
import E from "FL1";
import $ from "m5h";
import J from "yWs";
import Z from "TX";
const h = require.p + "static/image/jimeng.6182d378ef.png";
const CommerceMiniSubscribeModal_hero = "hero-OWfKB1";
const F = [12, 1, 3];
const I = (e) =>
  !!e.level && e.priceType === "auto" && F.includes(e.subscribeCycle);
function B(e, r) {
  let t;
  return ((t = e == null ? undefined : e.productIds) != null ? t : []).flatMap(
    (e) => {
      var t = r.find((r) => r.productId === e);
      if (t && I(t)) {
        return [t];
      }
      return [];
    },
  );
}
function W(e, r) {
  let t;
  let n;
  const i =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  const a = e
    .filter((e) => !e.disablePurchase)
    .sort((e, r) => e.totalAmount - r.totalAmount);
  if (
    (t =
      (n = a.find((e) => e.productId === r)) != null
        ? n
        : a.find((e) => i.includes(e.productId))) != null
  ) {
    return t;
  }
  return a[0];
}
function useO(e) {
  let r;
  let t;
  let s;
  let c;
  let l;
  let F;
  let O;
  let D;
  let L;
  const {
    payManager,
    minimumLevel,
    interceptionType,
    forceTheme,
    defaultSubscriptionTab,
    onClose,
    onViewAllPlans,
  } = e;
  const G = o.h(y._);
  const Y = o.h(C.Bo);
  const q = b.F(Y, (e) => e.material);
  const ee =
    (t =
      q == null || (F = q.sku) == null
        ? undefined
        : F.filter((e) => e.enable).flatMap((e) => e.pid)) != null
      ? t
      : [];
  const er = o.h(k.a);
  const et = payManager.commercialScene
    ? (O = er.commercialBenefitsManager.getPluginVipModalConfig(
        payManager.commercialScene,
        payManager.commercialSceneOptions,
      )) == null
      ? undefined
      : O.vipModalFeatureText
    : undefined;
  const en = o.h(R.$);
  const ei = o.h(f.aH);
  const ea = o.h(T._);
  const es = o.h(N.r3);
  const { prices, tabs } = b.F(en, (e) => ({
    prices: e.vipPriceList,
    tabs: e.vipTabList,
  }));
  const el = b.F(ea, (e) => e.vipInfo);
  const [ed, setEd] = u.useState(true);
  const [ep, setEp] = u.useState(false);
  const [eh, setEh] = u.useState(0);
  const [ev, setEv] = u.useState();
  const [e_, setE_] = u.useState();
  const [ef, setEf] = u.useState({});
  const [subscriptionExtraInfo, setSubscriptionExtraInfo] = u.useState();
  const eRRef = u.useRef(false);
  u.useEffect(() => {
    var e = false;
    setEd(true);
    setEp(false);
    Promise.all([
      es.ensureReady(),
      x.AT(_.p3(), G),
      ei.fetchUserSubscriptionExtraInfo(_.og()),
      Y.fetchResourcePosition(),
    ])
      .then((r) => {
        var [, , t] = r;
        if (!e) {
          payManager.updateProductScene(S.fq.Personal);
          if (t.ok) {
            setSubscriptionExtraInfo(t.value);
          }
          if (!eRRef.current) {
            eRRef.current = true;
            payManager.reportPopup({
              action: "show",
            });
          }
        }
      })
      .catch(() => {
        if (!e) {
          setEp(true);
        }
      })
      .finally(() => {
        if (!e) {
          setEd(false);
        }
      });
    return () => {
      e = true;
    };
  }, [eh, G, ei, es, payManager, Y]);
  r = minimumLevel ? A.MG[minimumLevel] : 1;
  const ek = prices.filter((e) => {
    var t = A.MG[e.level];
    return r !== undefined && t > 0 && t >= r;
  });
  const eC = tabs.filter((e) =>
    ek.some((r) => e.productIds.includes(r.productId) && I(r)),
  );
  const { defaultActiveTab } = J.j(eC, ek, [
    defaultSubscriptionTab,
    Z.Zo(q == null ? undefined : q.defaultTab),
  ]);
  const eN =
    (s =
      (c = eC.find((e) => e.tabName === ev)) != null
        ? c
        : eC[defaultActiveTab]) != null
      ? s
      : eC[0];
  const eS = B(eN, ek);
  const goodsInfo = W(eS, e_, ee);
  const currentSubscribedProductId =
    (D = j.K7({
      priceList: prices,
      subscriptionExtraInfo,
      vipInfo: el,
    })) == null
      ? undefined
      : D.productId;
  const { handlePurchase, loadingProductId } = E.k(
    payManager,
    currentSubscribedProductId,
    forceTheme,
    false,
    () => false,
    {
      enablePaymentRetention: false,
    },
  );
  const plans = Array.from(j.PY(eS), (e) => {
    var r;
    var t;
    var n;
    var [i, s] = e;
    var o =
      (r = W(
        s,
        (goodsInfo == null ? undefined : goodsInfo.level) === i
          ? goodsInfo.productId
          : ef[i],
        ee,
      )) != null
        ? r
        : s[0];
    var c = P.b4(o);
    var l =
      (n = o.vipBenefitPackage) == null || (t = n.userCredit) == null
        ? undefined
        : t.amount;
    var d = $.vj(q == null ? undefined : q.sku, o.productId, "light");
    return {
      id: i,
      title: A.JI({
        level: o.level,
      }),
      activityDecoration: d
        ? {
            badge: d.signText
              ? {
                  text: d.signText,
                  style: {
                    color: d.signColor || undefined,
                    background: d.signBgColor || undefined,
                    boxShadow: d.signShadow || undefined,
                  },
                }
              : undefined,
            borderColor:
              d.bgType === "bg_gradient_color"
                ? d.bgGradientColor
                : d.bgType === "bg_color"
                  ? d.bgColor
                  : undefined,
            background: d.bgPriceColor,
          }
        : undefined,
      description: M.e.get(i),
      benefits: j.zf(o),
      price: {
        currency: o.currencyTips,
        amount: c.priceAmount,
        cycle: c.cycleTips,
        cyclePrefix: "",
        originalAmount:
          c.originPriceAmount !== "0" ? c.originPriceAmount : undefined,
      },
      credits:
        l === undefined
          ? undefined
          : a.jsxs("span", {
              className: "credits-JKZC0B",
              children: [
                a.jsx(p.mC1, {
                  "aria-hidden": "true",
                }),
                w.Ay.t(
                  "web_team_membership_monthly_credits",
                  {
                    monthly_credits: l,
                  },
                  "{monthly_credits} 积分每月",
                )
                  .split(String(l))
                  .map((e, r) =>
                    a.jsxs(
                      "span",
                      {
                        className: "creditPart-qXB8Zn",
                        children: [
                          r > 0 &&
                            a.jsx("span", {
                              className: "creditValue-C9OuOi",
                              children: l,
                            }),
                          e.trim() &&
                            a.jsx("span", {
                              children: e.trim(),
                            }),
                        ],
                      },
                      r,
                    ),
                  ),
              ],
            }),
      creditRate:
        l !== undefined && o.totalAmount > 0
          ? w.Ay.t("dreamina_utra_equivalent", m.A(o, l))
          : undefined,
      activeVariantKey: o.productId,
      variants:
        s.length > 1
          ? s.map((e) => {
              var r;
              var t;
              var n;
              return {
                key: e.productId,
                label: j.mH(
                  (r =
                    (n = e.vipBenefitPackage) == null ||
                    (t = n.userCredit) == null
                      ? undefined
                      : t.amount) != null
                    ? r
                    : 0,
                ),
                disabled: e.disablePurchase,
              };
            })
          : undefined,
    };
  });
  plans.sort((e, r) => {
    var t;
    var n;
    var i;
    var a;
    return (
      ((t =
        (i = eS.find((r) => r.productId === e.activeVariantKey)) == null
          ? undefined
          : i.totalAmount) != null
        ? t
        : 0) -
      ((n =
        (a = eS.find((e) => e.productId === r.activeVariantKey)) == null
          ? undefined
          : a.totalAmount) != null
        ? n
        : 0)
    );
  });
  const eI = goodsInfo
    ? {
        goodsInfo,
        userInfo: el,
        isFreeItem: false,
        currentSubscribedProductId,
      }
    : undefined;
  const eB = goodsInfo ? P.b4(goodsInfo) : undefined;
  const disabled = ed || !!loadingProductId;
  const e$ = (e) => {
    if (!disabled) {
      var toProduct = eS.find((r) => r.productId === e);
      if (toProduct) {
        setE_(e);
        setEf((t) =>
          i._(n._({}, t), {
            [toProduct.level]: e,
          }),
        );
        payManager.reportPopup({
          action: "vip_select",
          toProduct,
        });
      }
    }
  };
  const eJ = a.jsx(v.Yt, {
    visible: true,
    className: "lv-theme-force_light",
    classes: {
      CommerceMiniSubscribeModal_hero,
    },
    title:
      interceptionType === "credit_insufficient"
        ? w.Ay.t(
            "web_dre_m10n_generate_popup_credit_ininsufficient_title",
            {},
            "积分不足或没有相关权益",
          )
        : w.Ay.t("web_dre_mini_subscription_title", {}, "升级会员即可解锁"),
    subtitle:
      interceptionType === "credit_insufficient"
        ? w.Ay.t(
            "web_dre_m10n_generate_popup_credit_ininsufficient_subtitle1",
            {},
            "你没有足够的积分进行此操作，请升级会员获得更多积分",
          )
        : (et == null ? undefined : et.trim()) ||
          w.Ay.t(
            "web_dre_mini_subscription_current_feature",
            {},
            "当前受限功能",
          ),
    tabs: eC.map((e) => {
      var r;
      var t = (r = B(e, ek)[0]) == null ? undefined : r.subscribeCycle;
      return {
        key: e.tabName,
        label:
          t === 12
            ? w.Ay.t(
                "web_dre_m10n_subscription_page_plans_yearly",
                {},
                "连续包年",
              )
            : t === 3
              ? w.Ay.t("dreamina_utra_renewal", {}, "连续包季")
              : w.Ay.t(
                  "web_dre_m10n_subscription_page_plans_monthly",
                  {},
                  "连续包月",
                ),
        disabled,
      };
    }),
    activeTab: (l = eN == null ? undefined : eN.tabName) != null ? l : "",
    onTabChange: (clickTabKey) => {
      if (!disabled) {
        setEv(clickTabKey);
        setE_(undefined);
        setEf({});
        payManager.reportPopup({
          action: "click_tab",
          clickTabKey,
        });
      }
    },
    plans,
    selectedPlanId: goodsInfo == null ? undefined : goodsInfo.level,
    onPlanChange: (e) => {
      var r = plans.find((r) => r.id === e);
      if (r == null ? undefined : r.activeVariantKey) {
        e$(r.activeVariantKey);
      }
    },
    onVariantChange: (e, r) => e$(r),
    loading: ed,
    loadingText: w.Ay.t("loading", {}, "加载中"),
    error: ep
      ? w.Ay.t(
          "web_canva_loading_failed_please_try_again",
          {},
          "加载失败，请重试",
        )
      : ed || goodsInfo
        ? undefined
        : w.Ay.t(
            "web_dre_mini_subscription_no_eligible_plan",
            {},
            "暂无符合条件的套餐，请查看全部计划",
          ),
    retryText: ep
      ? w.Ay.t("retry", {}, "重试")
      : w.Ay.t("web_dre_mini_subscription_all_plans", {}, "查看全部计划"),
    onRetry: () => {
      if (ep) {
        setEh((e) => e + 1);
      } else if (!disabled) {
        onViewAllPlans();
      }
    },
    cta: {
      text: eI
        ? P.xX(eI)
        : w.Ay.t("creditsconfirm_upgrademembership", {}, "升级会员"),
      description:
        eB == null || (L = eB.priceDesc) == null ? undefined : L.secondPart,
      loading: !!loadingProductId,
      disabled: disabled || ep || !eI || !!(eI && P.RY(eI)),
      onClick: () => {
        if (!disabled && !ep && goodsInfo) {
          if (es.isTeamMode) {
            return void onViewAllPlans();
          }
          handlePurchase(goodsInfo).catch(d.gP);
        }
      },
    },
    onClose: () => {
      if (!loadingProductId) {
        onClose();
      }
    },
    closeLabel: w.Ay.t("close", {}, "关闭"),
    allPlansText: w.Ay.t(
      "web_dre_mini_subscription_all_plans",
      {},
      "查看全部计划",
    ),
    onViewAllPlans: () => {
      if (!disabled) {
        onViewAllPlans();
      }
    },
  });
  return a.jsxs(a.Fragment, {
    children: [
      a.jsx("style", {
        "data-mini-subscribe-hero": true,
        children: "."
          .concat(CommerceMiniSubscribeModal_hero, ".")
          .concat(CommerceMiniSubscribeModal_hero, ' { background-image: url("')
          .concat(h, '"); }'),
      }),
      eJ,
    ],
  });
}
const D = new WeakMap();
function L(e) {
  let r;
  const {
    containerService,
    reportParam,
    forceTheme,
    onAfterClose,
    onViewAllPlans,
  } = e;
  const g = D.get(containerService);
  if (g) {
    return g;
  }
  const payManager = d.Lm(containerService);
  payManager.updateReportParam(
    i._(n._({}, reportParam), {
      customReportParams: i._(n._({}, reportParam.customReportParams), {
        subscription_surface: "mini",
      }),
    }),
  );
  const b = l.Y(containerService, c.u.VIP_MODAL);
  const _ = document.createElement("div");
  document.body.appendChild(_);
  const y = s.H(_);
  let f = false;
  const A = (e) => {
    if (f) {
      if (r != null) {
        r.close();
      }
      return;
    }
    f = true;
    queueMicrotask(() => {
      y.unmount();
      b.unmount();
      payManager.dispose();
      _.remove();
      D.delete(containerService);
      if (e) {
        r = e();
      } else if (onAfterClose != null) {
        onAfterClose();
      }
    });
  };
  const x = {
    close: () => A(),
  };
  D.set(containerService, x);
  b.onUnmount(() => {
    if (!f) {
      A();
    }
  });
  payManager.onSuccess(() => A());
  y.render(
    a.jsx(o.Z, {
      instantiationService: containerService,
      children: a.jsx(useO, {
        payManager,
        minimumLevel: reportParam.minVipLevel,
        interceptionType: reportParam.interceptionType,
        forceTheme,
        defaultSubscriptionTab: e.defaultSubscriptionTab,
        onClose: () => {
          payManager.reportPopup({
            action: "close",
          });
          A();
        },
        onViewAllPlans: () => A(onViewAllPlans),
      }),
    }),
  );
  return x;
}
export { L as M };
