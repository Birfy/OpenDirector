import i from "oa";
import n from "bk";
import a from "z8";
import o from "bT";
import c from "ED";
import _l from "xb";
import u from "p21";
import p from "VPK";
import m from "bo";
import h from "wF";
import v from "I3";
import _ from "rhl";
import y from "bI5";
import g from "Kt";
import b from "TX";
import f from "sIr";
import x from "zbK";
import { Ai, W$, W5, iu, to as to_1, tz, uh } from "./module-e3g.js";
import { Yl } from "./module-iAN.js";
import A from "jdi";
import k from "MK";
import I from "gjS";
import j from "xMb";
import w from "ibs";
import N from "Pen";
import M from "gLs";
import R from "oh";
import F from "VN";
import { v as v_1 } from "./module-CQu.js";
import { vf } from "./module-M4z.js";
import E from "sXG";
import * as $ from "./module-S2.js";
import { Gy, PY, QD } from "./module-gYh.js";
import B from "SI";
import D from "OY4";
import V from "z2h";
import H from "yTc";
import z from "EYk";
import { l as l_1 } from "./module-M8G.js";
import q from "If9";
import K from "f42";
import Z from "KH";
import { RY, b4, xX } from "./module-vxf.js";
import G from "SC";
import { ue, vj } from "./module-m5h.js";
import { k as k_1 } from "./module-FL1.js";
import "HZH";
import ei from "I7V";
import en from "yw";
import { e as e_1 } from "./module-KS.js";
import ed from "DVK";
import { M as M_1 } from "./module-fPt.js";
import ep from "wnF";
import { c as c_1 } from "./module-TtZ.js";
import eW from "NY";
import eB from "cO";
import eD from "zTG";
import eV from "KkI";
import eH from "M8X";
import ez from "ar";
import eU from "ofP";
import eq from "MWC";
import e9 from "h4d";
import te from "Ae";
import tt from "mqj";
import { j as j_1 } from "./module-yWs.js";
import tn from "emQ";
import ta from "Fo";
import to from "PB";
import ts from "gzI";
function s(e) {
  const { text, onClick, badge, disabled = false } = e;
  return a.jsxs("button", {
    type: "button",
    className: "button-xRf7q1",
    onClick,
    disabled,
    children: [
      a.jsx("span", {
        children: text,
      }),
      (badge == null ? undefined : badge.kind) === "new"
        ? a.jsxs("svg", {
            className: "newBadge-JSq7Sd",
            width: "26",
            height: "16",
            viewBox: "0 0 21 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            preserveAspectRatio: "xMidYMid meet",
            "aria-hidden": "true",
            children: [
              a.jsx("rect", {
                width: "21",
                height: "12",
                rx: "4",
                fill: "#fff",
              }),
              a.jsx("rect", {
                width: "21",
                height: "12",
                rx: "4",
                fill: "currentColor",
              }),
              a.jsx("path", {
                d: "M7.48 8.39H7.193L4.057 4.918V8.39H3.56V3.35H3.854L6.983 6.738V3.35H7.48V8.39ZM11.5031 6.654H9.26309V6.71C9.28175 7.16267 9.36109 7.48933 9.50109 7.69C9.65042 7.90467 9.89542 8.012 10.2361 8.012C10.5908 8.012 10.9571 7.93267 11.3351 7.774L11.3911 8.215C10.9244 8.38767 10.4741 8.474 10.0401 8.474C8.86875 8.474 8.28309 7.84167 8.28309 6.577C8.28309 5.97967 8.43009 5.51533 8.72409 5.184C9.02742 4.83867 9.46142 4.666 10.0261 4.666C11.0108 4.666 11.5031 5.21667 11.5031 6.318V6.654ZM9.99809 5.072C9.54075 5.072 9.29575 5.48033 9.26309 6.297H10.6211C10.6398 5.48033 10.4321 5.072 9.99809 5.072ZM16.1468 4.75H17.1408L15.9928 8.39H15.0688L14.4108 5.52L13.8018 8.39H12.8638L11.7858 4.75H12.7658L13.3888 7.69L14.0118 4.75H14.9008L15.5658 7.69L16.1468 4.75Z",
                fill: "currentColor",
              }),
            ],
          })
        : (badge == null ? undefined : badge.kind) === "text" && badge.text
          ? a.jsx("span", {
              className: "badge-NqApHd",
              children: badge.text,
            })
          : null,
    ],
  });
}
function C(e) {
  const { prices, subscriptionStatus, currentTeamVipLevel } = e;
  if (subscriptionStatus !== x.pT.Active || !currentTeamVipLevel) {
    return prices;
  }
  const n = prices.filter((e) => e.teamVipLevel === currentTeamVipLevel);
  if (n.length > 0) {
    return n;
  }
  return prices;
}
function Q(e) {
  const t = e == null ? undefined : e.trim();
  if (t) {
    return k.Ay.t(t, {}, t);
  }
  return "";
}
const ee = ["视频闲时生成积分消耗", "单次同时生成5个视频", "延长生成视频时长"];
function et(e) {
  if (e.needHover && e.hoverText) {
    return k.Ay.t(e.hoverText, {}, e.hoverText);
  }
}
function er(e) {
  const { tabName, productIds, vipPriceList, includeFree = false } = e;
  return productIds
    .map((e) => vipPriceList.find((t) => e === t.productId))
    .filter((e) => !!(e && (includeFree || e.level)));
}
function ea(e) {
  const { items } = e;
  if (items.length) {
    return a.jsx("div", {
      className: "extraDescriptionList-wdDnFq",
      children: items.map((e, t) => {
        var r;
        return a.jsxs(
          "div",
          {
            className: "extraDescriptionItem-eHhNIy",
            children: [
              a.jsx(en.mC1, {
                className: "extraDescriptionIntegralIcon-BVdx9c",
                size: 12,
              }),
              a.jsx("span", {
                className: "extraDescriptionText-VPQb8d",
                children: e.text,
              }),
              e.tips
                ? a.jsx(ei.A, {
                    content: e.tips,
                    checkOverflow: false,
                    children: a.jsx("span", {
                      className: "extraDescriptionInfoIcon-ztoopH",
                      children: a.jsx(en.G_L, {
                        size: 14,
                      }),
                    }),
                  })
                : null,
            ],
          },
          ""
            .concat(e.text, "-")
            .concat((r = e.tips) != null ? r : "", "-")
            .concat(t),
        );
      }),
    });
  }
  return null;
}
function useEs(e) {
  const {
    currentPriceList,
    vipPriceList,
    vipTabList,
    activatedTab,
    activeTabKey,
    commerceTabs,
    vipPayManager,
    subscriptionPageHeaderTexts,
    subscriptionExtraInfo,
    priceCardTexts,
    extraDescriptionItems = [],
    onTabChange,
    onSwitchFree,
    forceTheme,
    enableStandaloneCreditsPackPurchaseModal,
  } = e;
  const { models, activeVariants, currentSubscribedVariantPrice } = QD({
    priceList: currentPriceList,
    allPriceList: vipPriceList,
    vipPayManager,
    activatedTab,
    subscriptionPageHeaderTexts,
    subscriptionExtraInfo,
    forceTheme,
    enableStandaloneCreditsPackPurchaseModal,
    onSwitchFree,
  });
  const w = ((e, t) => {
    const { isNewSubscribePage } = vf();
    const commercialStrategyService = h.h(z.a);
    const s = h.h(g._);
    const c = h.h(F._);
    const l = u.F(c, (e) => e.currentVipLevel);
    const d = !isNewSubscribePage && !t.enableSubscriptionGuide;
    const pRef = o.useRef(false);
    const [m, setM] = o.useState();
    const _ = o.useMemo(() => {
      var r;
      var i;
      var t_commercialScene = t.commercialScene;
      if (
        !d ||
        !t_commercialScene ||
        t.interceptionType !== V.C.VIP_INSUFFICIENT
      ) {
        return;
      }
      var o = l_1[t_commercialScene];
      var c =
        (r = o == null ? undefined : o.level) != null
          ? r
          : D.I({
              scene: t_commercialScene,
              commercialStrategyService,
              extraBenefits: t.extraBenefits,
              sceneOptions: t.commercialSceneOptions,
            });
      if (c !== "" && !(B.MG[l] >= B.MG[c])) {
        var u = e.find((e) => e.level === String(c));
        if (u) {
          if (o) {
            var p = o.key({
              containerService: s,
              scene: t_commercialScene,
            });
            if (p) {
              return {
                id: u.id,
                content: p,
              };
            }
            return undefined;
          }
          var m =
            (i =
              commercialStrategyService.commercialBenefitsManager.getPluginVipModalConfig(
                t_commercialScene,
                t.commercialSceneOptions,
              )) == null
              ? undefined
              : i.vipModalGuideKey;
          if (m) {
            var h = k.Ay.t(
              "web_dre_m10n_subscription_page_tooltips",
              {
                string0: k.Ay.t(m, {}, m),
              },
              "Upgrade to use this feature: {string0}",
            );
            if (h) {
              return {
                id: u.id,
                content: h,
              };
            }
            return undefined;
          }
        }
      }
    }, [d, e, t, commercialStrategyService, s, l]);
    o.useEffect(() => {
      if (_ && !pRef.current) {
        var e = setTimeout(() => {
          pRef.current = true;
          setM(
            n._(i._({}, _), {
              visible: true,
            }),
          );
        }, 300);
        return () => clearTimeout(e);
      }
    }, [_]);
    o.useEffect(() => {
      if (m == null ? undefined : m.visible) {
        var e = setTimeout(
          () =>
            setM(
              n._(i._({}, m), {
                visible: false,
              }),
            ),
          3000,
        );
        return () => clearTimeout(e);
      }
    }, [m]);
    return o.useMemo(
      () =>
        e.map((e) => {
          if (d && (m == null ? undefined : m.id) === e.id) {
            return n._(i._({}, e), {
              tooltip: {
                content: m.content,
                popupVisible: m.visible,
                showArrow: true,
                className: ""
                  .concat(H.A.timeoutTooltip, " ")
                  .concat("vipTimeoutTooltip-kKSy6A"),
                triggerProps: {
                  popupAlign: {
                    bottom: 4,
                  },
                },
              },
            });
          }
          return e;
        }),
      [d, m, e],
    );
  })(models, vipPayManager);
  const { isNewSubscribePage, isPhase2SubscribePage } = vf();
  const plans = o.useMemo(() => {
    if (isPhase2SubscribePage) {
      return w.map((e) => {
        var t;
        var r;
        return n._(i._({}, e), {
          slogan:
            (t = e_1.get((r = e.level) != null ? r : "")) != null
              ? t
              : e.slogan,
        });
      });
    }
    return w;
  }, [w, isPhase2SubscribePage]);
  const E = vipTabList[activatedTab];
  const matrix = ((e, t, r, currentSubscribedProductId, n, s) => {
    let c;
    const l = h.h(F._);
    const d = h.h(g._);
    const p = h.h(j.Bo);
    const m = h.h(Z.Bn);
    const v = u.F(m, (e) => e.material);
    const { isNewSubscribePage } = vf();
    const y = v_1();
    const { vipInfo } = u.F(l, (e) => ({
      vipInfo: e.vipInfo,
    }));
    const {
      forceTheme,
      enableStandaloneCreditsPackPurchaseModal,
      onSwitchFree,
    } = s;
    const { handlePurchase, loadingProductId } = k_1(
      r,
      currentSubscribedProductId,
      forceTheme,
      enableStandaloneCreditsPackPurchaseModal,
      onSwitchFree,
    );
    return o.useMemo(() => {
      if (!e.length) {
        return null;
      }
      var r;
      var o;
      var s;
      var c;
      var l;
      var u;
      var m =
        (u = q.A([...e].sort((e, t) => B.MG[t.level] - B.MG[e.level]))) == null
          ? undefined
          : u.level;
      var h = new Map(t.map((e) => [e.id, e]));
      var g = e.map((goodsInfo) => {
        var t;
        var r;
        var n;
        var a;
        var o;
        var s;
        var c = b4(goodsInfo);
        var isFreeItem = goodsInfo.level === "";
        var d = h.get(goodsInfo.productId);
        var u = vj(
          (s = p.material) == null ? undefined : s.sku,
          goodsInfo.productId,
          y,
        );
        var v =
          (d == null ? undefined : d.secondaryCta) || d == null
            ? undefined
            : d.cta;
        var _ = {
          goodsInfo,
          userInfo: vipInfo,
          isFreeItem,
          currentSubscribedProductId,
        };
        var ctaText = (t = v == null ? undefined : v.text) != null ? t : xX(_);
        var ctaDisabled =
          !!goodsInfo.isFakeUltraPlan ||
          !!((r = v == null ? undefined : v.disabled) != null
            ? r
            : RY(_) || loadingProductId === goodsInfo.productId);
        var onCtaClick =
          (n = v == null ? undefined : v.onClick) != null
            ? n
            : () => handlePurchase(goodsInfo);
        var P = ((e) => {
          if (e == null ? undefined : e.enable) {
            return {
              tag: e.bottomSignText,
              tagStyle: {
                color: e.bottomSignColor,
                backgroundColor: e.bottomSignBgColor,
                borderColor: e.bottomSignBgColor ? "transparent" : undefined,
                boxShadow: e.bottomSignShadow,
              },
            };
          }
        })(u);
        return {
          key: goodsInfo.productId,
          planName: isFreeItem
            ? "Free"
            : B.JI({
                level: goodsInfo.level,
              }),
          tag:
            (a = P == null ? undefined : P.tag) != null
              ? a
              : d == null
                ? undefined
                : d.tag,
          tagStyle: P == null ? undefined : P.tagStyle,
          price: {
            currency: goodsInfo.currencyTips,
            amount: c.priceAmount,
            cycle: c.cycleTips,
            cyclePrefix: "",
          },
          ctaText,
          ctaDisabled,
          ctaLoading:
            (o = v == null ? undefined : v.loading) != null
              ? o
              : loadingProductId === goodsInfo.productId,
          onCtaClick,
          highlight: goodsInfo.level === m,
        };
      });
      var f = n || "";
      r = (toProduct, t) => {
        if (t) {
          K.kD(d, {
            action: K.gy.Show,
            bubblePosition: K.tG.ModelFreeUseIcon,
            toProduct,
            currentTabKey: f,
          });
        }
      };
      o = new Map();
      e.forEach((priceItem) => {
        var t;
        var r;
        var i;
        if (
          !(
            (i = priceItem.vipBenefitPackage) == null ||
            (r = i.richBenefitTexts) == null ||
            (t = r.moreBenefit) == null
          )
        ) {
          t.forEach((t) => {
            var r;
            var t_moduleTitle = t.moduleTitle;
            if (t_moduleTitle) {
              var n = o.get(t_moduleTitle);
              if (!n) {
                n = {
                  key: t_moduleTitle,
                  title: t_moduleTitle,
                  rows: new Map(),
                };
                o.set(t_moduleTitle, n);
              }
              if ((r = t.benefits) != null) {
                r.forEach((t) => {
                  var t_benefitText = t.benefitText;
                  if (t_benefitText) {
                    var a = "".concat(t_moduleTitle, "_").concat(t_benefitText);
                    var o = n.rows.get(a);
                    if (o) {
                      if (!o.tooltip) {
                        o.tooltip = et(t);
                      }
                    } else {
                      o = {
                        key: a,
                        featureTitle: t_benefitText,
                        tooltip: et(t),
                        priceItem,
                        detailMap: new Map(),
                      };
                      n.rows.set(a, o);
                    }
                    o.detailMap.set(priceItem.productId, t.benefitDetail);
                  }
                });
              }
            }
          });
        }
      });
      var x = Array.from(o.values())
        .map((e) => ({
          key: e.key,
          title: e.title,
          rows: Array.from(e.rows.values()).map((e) => ({
            key: e.key,
            featureTitle: e.featureTitle,
            tooltip: e.tooltip,
            onTooltipVisibleChange: e.tooltip
              ? (t) => {
                  if (e.priceItem) {
                    if (r != null) {
                      r(e.priceItem, t);
                    }
                  }
                }
              : undefined,
            cells: g.map((t) => {
              var r;
              var i;
              if (
                (i = (r = (e.detailMap.get(t.key) || "").trim()).toLowerCase())
              ) {
                if (i === "✓") {
                  return {
                    type: "enabled",
                  };
                }
                if (r) {
                  return {
                    type: "text",
                    text: r,
                  };
                }
                return {
                  type: "enabled",
                };
              }
              return {
                type: "disabled",
              };
            }),
          })),
        }))
        .filter((e) => e.rows.length > 0);
      var P = x.length
        ? x
        : ((s = []),
          (c = new Set()),
          (l = new Map()),
          e.forEach((e) => {
            var t;
            var r = (
              ((t = e.vipBenefitPackage) == null
                ? undefined
                : t.benefitTexts) || []
            ).filter((e) => !ee.some((t) => e.indexOf(t) !== -1));
            l.set(e.productId, new Set(r));
            r.forEach((e) => {
              if (!c.has(e)) {
                c.add(e);
                s.push(e);
              }
            });
          }),
          [
            {
              key: "features",
              title: "Features",
              rows: s.map((e) => ({
                key: e,
                featureTitle: e,
                cells: g.map((t) => {
                  var r;
                  if ((r = l.get(t.key)) == null ? undefined : r.has(e)) {
                    return {
                      type: "enabled",
                    };
                  }
                  return {
                    type: "disabled",
                  };
                }),
              })),
            },
          ]);
      var A = isNewSubscribePage
        ? ((e, t) => {
            if (e) {
              let r;
              let i;
              let n;
              const o = Q(e.title);
              const rows =
                (r = e.benefits) == null
                  ? undefined
                  : r
                      .filter((e) => {
                        var t;
                        return !!((t = e.title) == null ? undefined : t.trim());
                      })
                      .map((e, r) => {
                        var i;
                        return {
                          key: "activity-benefit-"
                            .concat(
                              (i = e.title) == null ? undefined : i.trim(),
                              "-",
                            )
                            .concat(r),
                          featureTitle: Q(e.title),
                          cells: t.map((t) => {
                            var r;
                            if (
                              (r = Q(
                                ((e, t) => {
                                  if (!G.ny(t)) {
                                    const r = t || "free";
                                    if (e == null) {
                                      return undefined;
                                    }
                                    return e[r];
                                  }
                                })(e.values, t.level),
                              )) &&
                              r !== "-" &&
                              r !== "—"
                            ) {
                              if (r === "✓") {
                                return {
                                  type: "enabled",
                                };
                              }
                              return {
                                type: "text",
                                text: r,
                              };
                            }
                            return {
                              type: "disabled",
                            };
                          }),
                        };
                      });
              if (o && (rows == null ? undefined : rows.length)) {
                const c = Q((i = e.badge) == null ? undefined : i.text);
                return {
                  key: "activity-benefit-comparison",
                  title: a.jsxs("div", {
                    className: "groupTitle-eMUxhb",
                    children: [
                      a.jsx("span", {
                        children: o,
                      }),
                      c
                        ? a.jsx("span", {
                            className: "badge-THpejs",
                            style: {
                              backgroundColor:
                                (n = e.badge) == null
                                  ? undefined
                                  : n.backgroundColor,
                            },
                            children: c,
                          })
                        : null,
                    ],
                  }),
                  rows,
                };
              }
            }
          })(v, e)
        : undefined;
      var groups = A ? [P[0], A, ...P.slice(1)].filter(Boolean) : P;
      if (groups.some((e) => e.rows.length > 0)) {
        return {
          plans: g,
          groups,
        };
      }
      return null;
    }, [
      e,
      t,
      (c = p.material) == null ? undefined : c.sku,
      v,
      isNewSubscribePage,
      vipInfo,
      currentSubscribedProductId,
      handlePurchase,
      loadingProductId,
      d,
      n,
      y,
    ]);
  })(
    o.useMemo(() => {
      var e;
      var t = er({
        tabName: E == null ? undefined : E.tabName,
        productIds: (e = E == null ? undefined : E.productIds) != null ? e : [],
        vipPriceList,
        includeFree: true,
      });
      return Array.from(PY(t).entries()).map((e) => {
        var [groupKey, prices] = e;
        return Gy({
          activeVariants,
          currentSubscribedVariantPrice,
          groupKey,
          prices,
        });
      });
    }, [E, vipPriceList, activeVariants, currentSubscribedVariantPrice]),
    models,
    vipPayManager,
    currentSubscribedVariantPrice == null
      ? undefined
      : currentSubscribedVariantPrice.productId,
    E == null ? undefined : E.tabName,
    {
      forceTheme,
      enableStandaloneCreditsPackPurchaseModal,
      onSwitchFree,
    },
  );
  const ei = o.useMemo(() => models.some((e) => !!e.banner), [models]);
  const en = models.length === 3;
  const es = [
    ei ? "priceCardListWithResource-N5Jvgi" : "priceCardList-Gncz73",
    en ? "priceCardListCompact-GskyKC" : "",
    isPhase2SubscribePage ? "tierDescriptions-QUElr3" : "",
  ]
    .filter(Boolean)
    .join(" ");
  const ec = ["priceSection-IIGrWF", en ? "priceSectionCompact-ntAy1P" : ""]
    .filter(Boolean)
    .join(" ");
  return a.jsxs(a.Fragment, {
    children: [
      a.jsxs("div", {
        className: ec,
        children: [
          a.jsx("div", {
            className: es,
            children: a.jsx(p.xA, {
              plans,
              layout: "horizontal",
              autoalign: true,
              showPriceSlider: models.some((e) => {
                var t;
                var r;
                return (
                  ((t = (r = e.variants) == null ? undefined : r.length) != null
                    ? t
                    : 0) > 1
                );
              }),
              texts: priceCardTexts,
            }),
          }),
          a.jsx(ea, {
            items: extraDescriptionItems,
          }),
        ],
      }),
      matrix &&
        a.jsxs(a.Fragment, {
          children: [
            a.jsx(p.C3, {
              className: "priceCompare-yDBDjt",
              tabs: commerceTabs,
              activeTab: activeTabKey,
              onTabChange,
              title: k.Ay.t(
                "dreamina_utra_best",
                {},
                "Which plan suits you best",
              ),
              matrix,
            }),
            isNewSubscribePage
              ? a.jsx("div", {
                  className: "creditResetNotice-kw8nhQ",
                  children: k.Ay.t(
                    "web_dre_subscription_credits_reset_every_31_days",
                    {},
                    "订阅积分每31天进行重置",
                  ),
                })
              : null,
          ],
        }),
    ],
  });
}
const ec = {
  CommerceTabs_wrap: "wrap-hy7M7B",
  CommerceTabs_navbar: "navbar-snzB3L",
  CommerceTabs_item: "item-jQrbKL",
  CommerceTabs_active: "active-ZxSIuo",
  CommerceTabs_label: "label-yNodhx",
  CommerceTabs_discount: "discount-XBYrl_",
};
function useEl(e) {
  const {
    activePageKind,
    appearance = "segmented",
    disabled,
    onChange,
    subtitles,
  } = e;
  const tabs = o.useMemo(
    () =>
      [
        {
          key: x.Ac.Personal,
          label: k.Ay.t(
            "web_dre_subscription_phase2_tab_personal",
            {},
            "个人订阅",
          ),
        },
        {
          key: x.Ac.Team,
          label: k.Ay.t("web_dre_subscription_phase2_tab_team", {}, "团队订阅"),
        },
      ].map((e) => {
        var { key, label } = e;
        var n = subtitles == null ? undefined : subtitles[key];
        return {
          key,
          label,
          discount: (n == null ? undefined : n.text)
            ? a.jsx("span", {
                style: {
                  color: n.color,
                },
                children: n.text,
              })
            : undefined,
          disabled,
        };
      }),
    [disabled, subtitles],
  );
  const l = o.useCallback(
    (e) => {
      if (e === x.Ac.Personal || e === x.Ac.Team) {
        if (onChange != null) {
          onChange(e);
        }
      }
    },
    [onChange],
  );
  if (appearance === "heading") {
    return a.jsx("div", {
      className: "heading-w3vWq4",
      role: "tablist",
      children: tabs.map((e) =>
        a.jsxs(
          "button",
          {
            type: "button",
            role: "tab",
            "aria-selected": activePageKind === e.key,
            disabled,
            onClick: () => {
              if (e.key !== activePageKind) {
                l(e.key);
              }
            },
            children: [
              e.label,
              e.discount &&
                a.jsx("span", {
                  className: "headingSubtitle-W125dc",
                  children: e.discount,
                }),
            ],
          },
          e.key,
        ),
      ),
    });
  }
  return a.jsx(p.wQ, {
    tabs,
    activeTab: activePageKind,
    onChange: l,
    classes: ec,
  });
}
function em(group, cycle) {
  let r;
  return Object.values((r = group.skuMatrix[cycle]) != null ? r : {}).sort(iu);
}
function eh(e, quantityTexts) {
  let r;
  let i;
  if (
    (r =
      quantityTexts == null || (i = quantityTexts.seatCount) == null
        ? undefined
        : i.call(quantityTexts, e)) != null
  ) {
    return r;
  }
  return "".concat(e, " 席位");
}
function ev(e) {
  let t;
  let r;
  const { group, cycle, preferredProductId, preferredMemberLimit } = e;
  const s = em(group, cycle);
  if (preferredProductId) {
    const c = s.find((e) => e.productId === preferredProductId);
    if (c) {
      return c;
    }
  }
  if (
    typeof preferredMemberLimit === "number" &&
    (t =
      (r = W$(group, cycle, preferredMemberLimit)) != null
        ? r
        : s.find((e) => e.memberLimit >= preferredMemberLimit)) != null
  ) {
    return t;
  }
  return s[0];
}
function e_(e, t, r) {
  let i;
  if ((i = W$(e, t, r.memberLimit)) != null) {
    return i;
  }
  return ev({
    group: e,
    cycle: t,
  });
}
function ey(e) {
  let t;
  if (typeof (t = e.totalAmount) === "number" && Number.isFinite(t)) {
    return t;
  }
}
function eg(e, memberLimit) {
  const r =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  if (typeof e === "number" && !(memberLimit <= 0) && !(r <= 0)) {
    return e / memberLimit / r;
  }
}
function eb(originPriceAmount) {
  if (typeof originPriceAmount === "number" && originPriceAmount > 0) {
    return originPriceAmount;
  }
}
function ef(e, t) {
  if (typeof t === "number") {
    return ep.b(e.currencyCode, t);
  }
}
function ex(e, unitTexts) {
  let r;
  let i;
  switch (tz(e)) {
    case "month":
    case "quarter":
      if ((r = unitTexts == null ? undefined : unitTexts.monthlyUnit) != null) {
        return r;
      }
      return e.cycleTips;
    case "year":
      if ((i = unitTexts == null ? undefined : unitTexts.yearlyUnit) != null) {
        return i;
      }
      return e.cycleTips;
    default:
      return e.cycleTips;
  }
}
function eP(e) {
  switch (tz(e)) {
    case "quarter":
      return 3;
    case "year":
      return 12;
    default:
      return 1;
  }
}
function eC(e, t, r) {
  let i;
  let n;
  const a =
    (i = t == null ? undefined : t.cycle) != null
      ? i
      : e.cycles.includes("year")
        ? "year"
        : e.cycles.includes("month")
          ? "month"
          : e.cycles[0];
  const o =
    (n = t == null ? undefined : t.seatCount) != null
      ? n
      : r == null
        ? undefined
        : r.minMemberLimit;
  const s = uh(e, a);
  const c = Ai(e, a);
  if (typeof o === "number" && typeof s === "number" && o > s && c) {
    return {
      cycle: a,
      selectedSkuProductId: c.productId,
      seatCount: o,
    };
  }
  const l = (t == null ? undefined : t.selectedSkuProductId)
    ? e.skus.find((e) => e.productId === t.selectedSkuProductId)
    : undefined;
  const d =
    l &&
    (typeof (r == null ? undefined : r.minMemberLimit) !== "number" ||
      l.memberLimit >= r.minMemberLimit)
      ? l
      : undefined;
  const u =
    d && tz(d) !== a
      ? e_(e, a, d)
      : d != null
        ? d
        : ev({
            group: e,
            cycle: a,
            preferredMemberLimit: r == null ? undefined : r.minMemberLimit,
          });
  if (u) {
    return {
      cycle: a,
      selectedSkuProductId: u.productId,
      seatCount: u.memberLimit,
    };
  }
}
function eT(e) {
  const { anchorSku, seatCount, totalAmount } = e;
  const n = ((e, t) => {
    const r = eP(e);
    if (typeof t === "number" && !(e.memberLimit <= 0)) {
      const i = t / e.memberLimit / r;
      if (Number.isFinite(i)) {
        return Math.round(i);
      }
      return undefined;
    }
  })(anchorSku, totalAmount);
  const a = eP(anchorSku);
  if (
    typeof n === "number" &&
    Number.isSafeInteger(seatCount) &&
    !(seatCount <= 0)
  ) {
    const o = n * a * seatCount;
    if (Number.isSafeInteger(o)) {
      return o;
    }
    return undefined;
  }
}
function eS(e) {
  const { group, cycle, forceReadOnly, ctaDisabled } = e;
  const a = uh(group, cycle);
  const o = Ai(group, cycle);
  return !!(
    !forceReadOnly &&
    !ctaDisabled &&
    typeof a === "number" &&
    o &&
    !o.disablePurchase &&
    a + 1 <= 200
  );
}
const eA = ["视频闲时生成积分消耗", "单次同时生成5个视频", "延长生成视频时长"];
function ek(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function eI(cycleTips) {
  if (cycleTips == null) {
    return undefined;
  }
  return cycleTips.replace(/^\/+/, "");
}
function ej(e) {
  const { amountTips, currencyTips, cycleTips } = e;
  if (!amountTips) {
    return amountTips;
  }
  let n = amountTips.trim();
  if (currencyTips) {
    n = n.replace(new RegExp("^\\s*".concat(ek(currencyTips), "\\s*")), "");
  }
  const a = eI(cycleTips);
  if (a) {
    n = n.replace(new RegExp("\\s*/?".concat(ek(a), "\\s*$")), "");
  }
  return n;
}
function ew(e) {
  let t;
  const { showCycle = true } =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const a = eI(e.cycleTips);
  return n._(
    i._(
      {
        currency: e.currencyTips,
        amount:
          (t = ej({
            amountTips: e.amountTips,
            currencyTips: e.currencyTips,
            cycleTips: e.cycleTips,
          })) != null
            ? t
            : "",
      },
      showCycle && a
        ? {
            cycle: a,
            cyclePrefix: "",
          }
        : {},
    ),
    {
      originalAmount: ej({
        amountTips: e.originAmountTips,
        currencyTips: e.currencyTips,
        cycleTips: e.cycleTips,
      }),
    },
  );
}
function eN(e) {
  return eA.some((t) => e.includes(t));
}
function eM(e) {
  const { styleText } = e;
  if (styleText) {
    if (Array.isArray(styleText)) {
      return styleText;
    }
    return [styleText];
  }
  return [];
}
function eR(e) {
  let t;
  const r = eM(e).find((e) => e.type === "label");
  if (r) {
    const i =
      (t = r.contents) == null
        ? undefined
        : t.map((e) => e.text || e.title).filter((e) => !!e);
    const n = (i == null ? undefined : i.length) ? i.join(" ") : r.title;
    if (n) {
      return {
        text: n,
        variant: "gray",
      };
    }
    return undefined;
  }
}
function eF() {
  for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) {
    t[r] = arguments[r];
  }
  for (const i of t) {
    if (i == null ? undefined : i.trim()) {
      return i;
    }
  }
}
function eO(e) {
  return k.Ay.t(e, {}, e);
}
function eL(e) {
  return k.Ay.t(
    e,
    {
      string1: (e) =>
        a.jsx("span", {
          style: {
            color: "#ff6f00",
          },
          children: e,
        }),
      strong1: (e) =>
        a.jsx("span", {
          style: {
            color: "#ff6f00",
          },
          children: e,
        }),
      string0: (e) =>
        a.jsx("span", {
          children: e,
        }),
      strong0: (e) =>
        a.jsx("span", {
          children: e,
        }),
    },
    e,
  );
}
function eE(e) {
  if (typeof e === "number" && Number.isFinite(e) && e > 0) {
    return e;
  }
}
const eK = {
  key: "web_team_do_not_submit_repeatedly",
  defaultMessage: "请勿重复提交",
};
const eZ = {
  key: "web_team_submit_failed_retry",
  defaultMessage: "提交失败，请重试",
};
const eX = /^1\d{10}$/;
function eG(mobile) {
  return eX.test(mobile.trim());
}
const eQ = {
  mobile: "",
  userName: "",
  companyName: "",
  email: "",
  appeal: "",
  peopleCountIndex: null,
  industry: null,
};
const eJ = [
  [1, "web_team_business_consultation_industry_media", "影视传媒"],
  [2, "web_team_business_consultation_industry_advertising", "广告营销"],
  [3, "web_team_business_consultation_industry_mcn", "MCN机构"],
  [4, "web_team_business_consultation_industry_education", "教育培训"],
  [5, "web_team_business_consultation_industry_consumer", "消费业"],
  [6, "web_team_business_consultation_industry_manufacturing", "制造业"],
  [7, "web_team_business_consultation_industry_finance", "金融"],
  [8, "web_team_business_consultation_industry_technology", "科技"],
  [9, "web_team_business_consultation_industry_ecommerce", "电商"],
  [99, "web_team_business_consultation_industry_other", "其他"],
];
const eY = [
  [16, "web_team_business_consultation_user_count_5_15", "21-30"],
  [17, "web_team_business_consultation_user_count_15_30", "30-50"],
  [18, "web_team_business_consultation_user_count_30_50", "50-100"],
  [19, "web_team_business_consultation_user_count_50_100", "100-200"],
  [20, "web_team_business_consultation_user_count_100_plus", "200 以上"],
];
function e0(e) {
  return e.map((e) => {
    var [t, r, i] = e;
    return {
      value: t,
      label: k.Ay.t(r, {}, i),
    };
  });
}
function useE1(e) {
  const { visible, onClose, onDismiss, onSubmitAttempt } = e;
  const s = h.h(g._);
  const [c, setC] = o.useState(eQ);
  const [agreementChecked, setAgreementChecked] = o.useState(false);
  const [submitLoading, setSubmitLoading] = o.useState(false);
  const copy = {
    title: k.Ay.t("web_team_business_consultation_title", {}, "商务咨询"),
    companyName: {
      label: k.Ay.t(
        "web_team_business_consultation_company_name",
        {},
        "公司名称",
      ),
      placeholder: k.Ay.t(
        "web_team_business_consultation_company_name_placeholder",
        {},
        "请输入公司名称（限30字以内）",
      ),
      requiredErrorText: k.Ay.t(
        "web_team_business_consultation_company_name_required",
        {},
        "公司名称不能为空",
      ),
    },
    industry: {
      label: k.Ay.t("web_team_business_consultation_industry", {}, "所属行业"),
      requiredErrorText: k.Ay.t(
        "web_team_business_consultation_industry_required",
        {},
        "所属行业不能为空",
      ),
    },
    peopleCountIndex: {
      label: k.Ay.t(
        "web_team_business_consultation_user_count",
        {},
        "使用人数",
      ),
      requiredErrorText: k.Ay.t(
        "web_team_business_consultation_user_count_required",
        {},
        "使用人数不能为空",
      ),
    },
    appeal: {
      label: k.Ay.t(
        "web_team_business_consultation_requirement",
        {},
        "需求描述",
      ),
      placeholder: k.Ay.t(
        "web_team_business_consultation_requirement_placeholder",
        {},
        "请简要描述您的使用场景和主要需求",
      ),
    },
    userName: {
      label: k.Ay.t("web_team_business_consultation_contact", {}, "联系人"),
      placeholder: k.Ay.t(
        "web_team_business_consultation_contact_placeholder",
        {},
        "请输入联系人姓名",
      ),
      requiredErrorText: k.Ay.t(
        "web_team_business_consultation_contact_required",
        {},
        "联系人不能为空",
      ),
    },
    mobile: {
      label: k.Ay.t("web_team_business_consultation_phone", {}, "手机号"),
      placeholder: k.Ay.t(
        "web_team_business_consultation_phone_placeholder",
        {},
        "请输入手机号",
      ),
      requiredErrorText: k.Ay.t(
        "web_team_business_consultation_phone_required",
        {},
        "手机号不能为空",
      ),
    },
    agreementText: k.Ay.t(
      "web_team_has_read_and_agreed_link",
      {
        link: a.jsx("a", {
          href: eB.m(eU.y.PERSONAL_INFORMATION_PROTECTION(false), null, {
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
              "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-W1Je%1-%mFXRXBx$2xNNW$tTnR%WFpaTWpsMFkw-z$k$nB-TlRCam$%bHBaRmhP-0dKdFZuc*pl$*xxWWpJe*R*cFlTbXBo$jBaelR*aENhR1Z%T1dwa%1qRjNZakkx-kdKd$$ucE1NMD$2WWpOamRH%nRiS*RN$np*MldrZEdjMHd5$*5aa$dFSjJZbTFXZFdSS$R-Wmti$3gz$EZoQ2$XRlh%bXhN$jNod1l6TlJkb*t5T1hSalJ6bDFXb*MxT%dON%9%QmFWMFow$EZo-WNHTkRNW*Rq-ld4c$dsTXhlbHB-$*pCaFZ6bDF%RE5T-kZsWE1I%mFWel$3$2xoS2QyTnRiSHBh$Xp*eldsZEdhMHh-$25aamJ%QjBZb*M1-TFsW*Qz$mtTRTQw$1ZoS2Jt%ll%$DA9",
          }),
          target: "_blank",
          rel: "noopener noreferrer",
          onClick: (e) => e.stopPropagation(),
          children: k.Ay.t(
            "web_team_personal_privacy_statement",
            {},
            "《个人信息保护声明》",
          ),
        }),
      },
      "已阅读并同意{link}",
    ),
    cancelText: k.Ay.t("web_team_cancel", {}, "取消"),
    submitText: k.Ay.t("web_team_submit", {}, "提交"),
    closeAriaLabel: k.Ay.t("genetate_sidebar_close", {}, "关闭"),
  };
  const industryOptions = e0(eJ);
  const peopleCountOptions = e0(eY);
  return a.jsx(p.gW, {
    className: "modal-DiPvgL",
    visible,
    value: c,
    copy,
    industryOptions,
    peopleCountOptions,
    agreementChecked,
    submitLoading,
    onChange: setC,
    onAgreementChange: setAgreementChecked,
    onAgreementRequired: () =>
      eq.p.error(
        k.Ay.t(
          "web_team_agree_privacy_statement_toast",
          {},
          "请先阅读并同意《个人信息保护声明》",
        ),
      ),
    onSubmit: (e) =>
      eW._(function* () {
        if (onSubmitAttempt != null) {
          onSubmitAttempt();
        }
        if (!eG(e.mobile)) {
          return void eq.p.error(
            k.Ay.t(
              "web_team_enter_valid_phone_number",
              {},
              "请输入有效的11位手机号",
            ),
          );
        }
        try {
          const t = eH.cQ(s, ez.k);
          const i = ((e, appId) => {
            if (
              eG(e.mobile) &&
              e.userName.trim() &&
              e.companyName.trim() &&
              Number.isInteger(appId) &&
              !(appId <= 0) &&
              e.peopleCountIndex !== null &&
              e.industry !== null
            ) {
              return {
                mobile: e.mobile.trim(),
                userName: e.userName.trim(),
                companyName: e.companyName.trim(),
                appeal: e.appeal.trim(),
                appId,
                appealType: eD.w.ENTERPRISE_LEAD,
                peopleCountIndex: e.peopleCountIndex,
                channel: "jimeng_web",
                industry: e.industry,
              };
            }
          })(e, t.appId);
          if (!i) {
            return void eq.p.error(
              k.Ay.t("web_team_submit_failed_retry", {}, "提交失败，请重试"),
            );
          }
          setSubmitLoading(true);
          const a = eH.cQ(s, eV.c);
          const o = yield a.submitAppeal(i);
          if (!o.ok) {
            const c = o.code === 1905 ? eK : eZ;
            eq.p.error(k.Ay.t(c.key, {}, c.defaultMessage));
            return;
          }
          eq.p.success(k.Ay.t("web_team_submit_success", {}, "提交成功！"));
          setC(eQ);
          setAgreementChecked(false);
          onClose();
        } catch (e) {
          eq.p.error(
            k.Ay.t("web_team_submit_failed_retry", {}, "提交失败，请重试"),
          );
        } finally {
          setSubmitLoading(false);
        }
      })(),
    onClose: () => {
      setC(eQ);
      setAgreementChecked(false);
      if (onDismiss != null) {
        onDismiss();
      }
      onClose();
    },
  });
}
const total_price = "__TEAM_TOTAL_PRICE__";
const e3 = /^\d*$/;
const e5 = new Set([
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "End",
  "Enter",
  "Home",
]);
function e6(e) {
  const { currency, amount } = e;
  return a.jsxs("span", {
    className: "priceContainer-MV08Ah",
    children: [
      currency
        ? a.jsx("span", {
            className: "currencySymbol-HNifVg",
            children: currency,
          })
        : null,
      a.jsx("span", {
        className: "priceAmount-r8XuMc",
        children: amount,
      }),
    ],
  });
}
function e4(e) {
  if (e) {
    return a.jsx("span", {
      className: "totalPricePrefix-pJXzWb",
      children: e,
    });
  }
  return null;
}
function useE7(e) {
  const { inputRef, value, maxSeatCount, options, readOnly, onChange } = e;
  const [l, setL] = o.useState(String(value));
  o.useEffect(() => {
    setL(String(value));
  }, [value]);
  const u = o.useCallback(
    (e) => {
      var value_1 = e.target.value;
      if (!readOnly && e3.test(value_1) && (setL(value_1), value_1)) {
        var a = Number(value_1);
        if (Number.isSafeInteger(a) && !(a <= 0) && a !== value) {
          if (typeof maxSeatCount === "number" && a > maxSeatCount) {
            if (onChange != null) {
              onChange(a, {
                value: a,
              });
            }
            return;
          }
          var o = options.find((e) => e.value === a && !e.disabled);
          if (o) {
            if (onChange != null) {
              onChange(a, o);
            }
          }
        }
      }
    },
    [maxSeatCount, onChange, options, readOnly, value],
  );
  const onBlur = o.useCallback(() => {
    setL(String(value));
  }, [value]);
  const onKeyDown = o.useCallback((e) => {
    if (e5.has(e.key)) {
      e.stopPropagation();
    }
    if (e.key === "Enter") {
      e.preventDefault();
      e.currentTarget.blur();
    }
  }, []);
  const onFocus = o.useCallback((e) => {
    var length = e.currentTarget.value.length;
    e.currentTarget.setSelectionRange(length, length);
  }, []);
  return a.jsx("span", {
    className: "teamSeatCountText-NEWtzP",
    children: k.Ay.t(
      "web_team_membership_seat_count",
      {
        seat_count: a.jsx("input", {
          ref: inputRef,
          "aria-label": k.Ay.t(
            "web_team_membership_seat_count",
            {
              seat_count: "",
            },
            "席位",
          ),
          autoComplete: "off",
          className: "teamSeatCountInput-xEJgUl",
          enterKeyHint: "done",
          inputMode: "numeric",
          pattern: "[0-9]*",
          readOnly,
          size: Math.max(l.length, String(value).length, 1),
          type: "text",
          value: l,
          onBlur,
          onChange: u,
          onFocus,
          onKeyDown,
        }),
      },
      "{seat_count}席位",
    ),
  });
}
function useE8(e) {
  const {
    isDomesticRedesign = false,
    vipPriceList,
    vipPayManager,
    teamContext,
    priceCardTexts,
    material,
  } = e;
  const u = h.h(g._);
  const forceTheme = v_1();
  const v = material == null ? undefined : material.sku;
  const [_, set_] = o.useState(false);
  const [b, setB] = o.useState();
  const S = o.useCallback(
    function (action) {
      const t =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : b;
      if (t) {
        vipPayManager.reportPopup({
          action,
          toProduct: t.selectedSku,
          extra: {
            payAmount: t.price,
            sku: t.selectedSku.productId,
          },
        });
      }
    },
    [b, vipPayManager],
  );
  const onContactSales = o.useCallback(
    (e) => {
      S("click_contact_sales", e);
      setB(e);
      set_(true);
    },
    [S],
  );
  o.useEffect(() => {
    if (_ && b) {
      S("show_contact_sales_popup");
    }
  }, [b, _, S]);
  const onClose = o.useCallback(() => {
    set_(false);
    setB(undefined);
  }, []);
  const onDismiss = o.useCallback(() => {
    S("close_contact_sales_popup");
  }, [S]);
  const onSubmitAttempt = o.useCallback(() => {
    S("confirm_contact_sales_popup");
  }, [S]);
  const N = o.useMemo(() => W5(vipPriceList), [vipPriceList]);
  const M = o.useMemo(
    () =>
      C({
        prices: N,
        subscriptionStatus: teamContext.subscriptionStatus,
        currentTeamVipLevel: teamContext.currentTeamVipLevel,
      }),
    [N, teamContext.currentTeamVipLevel, teamContext.subscriptionStatus],
  );
  const R = teamContext.subscriptionStatus === x.pT.Active;
  const F = teamContext.subscriptionStatus === x.pT.Expired;
  const L =
    teamContext.currentSpaceType === x.cU.Team &&
    teamContext.role !== x.t0.Owner;
  const E = R || L;
  const teamContext_currentTeamMemberLimit = teamContext.currentTeamMemberLimit;
  const titleTexts = o.useMemo(
    () => ({
      monthlyTitle: k.Ay.t(
        "web_team_membership_plan_onemonth_name",
        {},
        "团队会员-1个月",
      ),
      quarterlyTitle: k.Ay.t(
        "web_team_membership_plan_threemonth_name",
        {},
        "团队会员-3个月",
      ),
      yearlyTitle: k.Ay.t(
        "web_team_membership_plan_twelvemonth_name",
        {},
        "团队会员-12个月",
      ),
    }),
    [],
  );
  const unitTexts = o.useMemo(() => {
    var e = k.Ay.t("web_team_membership_seat_month_price_unit", {}, "席位/月");
    return {
      monthlyUnit: e,
      yearlyUnit: e,
    };
  }, []);
  const quantityTexts = o.useMemo(
    () => ({
      seatCount: (seat_count) =>
        k.Ay.t(
          "web_team_membership_seat_count",
          {
            seat_count,
          },
          "{seat_count}席位",
        ),
    }),
    [],
  );
  const V = o.useMemo(() => {
    if (R && !L) {
      return k.Ay.t(
        "web_team_renewbtnlimit_remind_toast",
        {},
        "目前仅支持原席位数续费，如需增加席位可在管理页单独添加",
      );
    }
  }, [R, L]);
  const quantityMinMemberLimitTips = o.useMemo(() => {
    if (F && !L && teamContext_currentTeamMemberLimit !== undefined) {
      return k.Ay.t(
        "web_team_renewlimit_seat_toast",
        {},
        "续费席位不得小于团队内现有席位数",
      );
    }
  }, [teamContext_currentTeamMemberLimit, F, L]);
  const quantityReadOnlyProductIds = o.useMemo(() => {
    if (E) {
      return M.map((e) => e.productId);
    }
  }, [E, M]);
  const U = o.useMemo(
    () => k.Ay.t("web_team_membership_buy_btn", {}, "购买团队会员"),
    [],
  );
  const q = o.useMemo(
    () => k.Ay.t("web_team_membership_renew_now", {}, "立即续费"),
    [],
  );
  const K = o.useMemo(
    () =>
      k.Ay.t(
        "web_team_large_seat_contact_sales_support",
        {},
        "20席以上，请联系我们",
      ),
    [],
  );
  const Z = o.useMemo(
    () => k.Ay.t("web_team_contactowner_buy_btn", {}, "联系空间创建者购买"),
    [],
  );
  const X = ((e) => {
    const {
      prices,
      initialSelections,
      quantityReadOnlyProductIds,
      quantityReadOnlyTips,
      quantityDecreaseDisabledTips,
      quantityIncreaseDisabledTips,
      quantityMinMemberLimit,
      quantityMinMemberLimitTips,
      ctaDisabled,
      titleTexts,
      unitTexts,
      quantityTexts,
      onPurchase,
      onContactSales,
    } = e;
    const [g, setG] = o.useState(
      initialSelections != null ? initialSelections : {},
    );
    const onSelectionChange = o.useCallback((e, t) => {
      setG((r) =>
        n._(i._({}, r), {
          [e]: t,
        }),
      );
    }, []);
    return {
      models: o.useMemo(
        () =>
          ((e) => {
            const {
              prices,
              selections,
              quantityReadOnlyProductIds,
              quantityReadOnlyTips,
              quantityDecreaseDisabledTips,
              quantityIncreaseDisabledTips,
              quantityMinMemberLimit,
              quantityMinMemberLimitTips,
              ctaDisabled,
              titleTexts,
              unitTexts,
              quantityTexts,
              onSelectionChange,
              onPurchase,
              onContactSales,
            } = e;
            return ((e) => {
              const {
                prices,
                selections,
                quantityReadOnlyProductIds,
                quantityReadOnlyTips,
                quantityDecreaseDisabledTips,
                quantityIncreaseDisabledTips,
                quantityMinMemberLimit,
                quantityMinMemberLimitTips,
                titleTexts,
                unitTexts,
                quantityTexts,
                ctaDisabled,
              } = e;
              return to_1(prices).flatMap((e) => {
                var t;
                var v;
                var _;
                var y;
                var g;
                var b;
                var f;
                var x;
                var C;
                var S = selections == null ? undefined : selections[e.groupKey];
                var A = eC(e, S, {
                  minMemberLimit: quantityMinMemberLimit,
                });
                var k = A
                  ? e.skus.find((e) => e.productId === A.selectedSkuProductId)
                  : undefined;
                if (!A || !k) {
                  return [];
                }
                var I = uh(e, A.cycle);
                var j = Ai(e, A.cycle);
                if (typeof I !== "number" || !j) {
                  return [];
                }
                var forceReadOnly = !!(quantityReadOnlyProductIds == null
                  ? undefined
                  : quantityReadOnlyProductIds.includes(k.productId));
                var N = eS({
                  group: e,
                  cycle: A.cycle,
                  forceReadOnly,
                  ctaDisabled,
                });
                var M = A.seatCount > I && !N;
                var R = M
                  ? {
                      cycle: A.cycle,
                      selectedSkuProductId: j.productId,
                      seatCount: I,
                    }
                  : A;
                var F = M ? j : k;
                var isLargeSeat = R.seatCount > I;
                var L = isLargeSeat
                  ? ((e) => {
                      const { anchorSku, seatCount } = e;
                      return eT({
                        anchorSku,
                        seatCount,
                        totalAmount: ey(anchorSku),
                      });
                    })({
                      anchorSku: F,
                      seatCount: R.seatCount,
                    })
                  : undefined;
                var displayTotalAmount =
                  (f = L != null ? L : ey(F)) != null ? f : 0;
                var displayOriginTotalAmount =
                  (x = isLargeSeat
                    ? ((e) => {
                        const { anchorSku, seatCount } = e;
                        return eT({
                          anchorSku,
                          seatCount,
                          totalAmount: eb(anchorSku.originPriceAmount),
                        });
                      })({
                        anchorSku: F,
                        seatCount: R.seatCount,
                      })
                    : eb(F.originPriceAmount)) != null
                    ? x
                    : displayTotalAmount;
                return [
                  {
                    id: e.groupKey,
                    alignKey: e.groupKey,
                    productId: F.productId,
                    group: e,
                    selectedSku: F,
                    seatCount: R.seatCount,
                    maxSeatCount: I,
                    isLargeSeat,
                    activeCycle: R.cycle,
                    title: ((e, t) => {
                      let r;
                      let i;
                      let n;
                      let a;
                      const o =
                        (r = e.productTips) == null ? undefined : r.trim();
                      if (o) {
                        return o;
                      }
                      switch (tz(e)) {
                        case "month":
                          if (
                            (i = t == null ? undefined : t.monthlyTitle) != null
                          ) {
                            return i;
                          }
                          return "";
                        case "quarter":
                          if (
                            (n = t == null ? undefined : t.quarterlyTitle) !=
                            null
                          ) {
                            return n;
                          }
                          return "";
                        case "year":
                          if (
                            (a = t == null ? undefined : t.yearlyTitle) != null
                          ) {
                            return a;
                          }
                          return "";
                        default:
                          return "";
                      }
                    })(F, titleTexts),
                    tag: F.productRecommendTips,
                    price:
                      ((v = eP(F)),
                      (_ = eg(ey(F), F.memberLimit, v)),
                      (y = eg(eb(F.originPriceAmount), F.memberLimit, v)),
                      {
                        currencyTips: F.currencyTips,
                        amountTips: (t = ef(F, _)) != null ? t : F.priceTips,
                        cycleTips: ex(F, unitTexts),
                        originAmountTips: ef(F, y),
                      }),
                    variants: e.cycles.flatMap((t) => {
                      var r = e_(e, t, F);
                      if (r) {
                        return {
                          key: t,
                          label: ex(r, unitTexts),
                          value: t,
                          productId: r.productId,
                          sku: r,
                        };
                      }
                      return [];
                    }),
                    quantity: ((e) => {
                      const {
                        group,
                        selectedSku,
                        cycle,
                        quantityReadOnlyProductIds,
                        quantityReadOnlyTips,
                        quantityDecreaseDisabledTips,
                        quantityIncreaseDisabledTips,
                        quantityMinMemberLimit,
                        quantityMinMemberLimitTips,
                        quantityTexts,
                        seatCount,
                        ctaDisabled,
                      } = e;
                      const v = !!(quantityReadOnlyProductIds == null
                        ? undefined
                        : quantityReadOnlyProductIds.includes(
                            selectedSku.productId,
                          ));
                      const options = ((e) => {
                        const {
                          group,
                          cycle,
                          seatCount,
                          quantityMinMemberLimit,
                          quantityTexts,
                          forceReadOnly,
                          ctaDisabled,
                        } = e;
                        const d = em(group, cycle)
                          .map((e) => ({
                            value: e.memberLimit,
                            label: eh(e.memberLimit, quantityTexts),
                            memberLimit: e.memberLimit,
                            sku: e,
                          }))
                          .map((e) =>
                            n._(i._({}, e), {
                              disabled:
                                typeof quantityMinMemberLimit === "number"
                                  ? e.memberLimit < quantityMinMemberLimit
                                  : e.disabled,
                            }),
                          );
                        const u = uh(group, cycle);
                        const p = Ai(group, cycle);
                        if (
                          !eS({
                            group,
                            cycle,
                            forceReadOnly,
                            ctaDisabled,
                          }) ||
                          typeof u !== "number" ||
                          !p
                        ) {
                          return d;
                        }
                        const m = [u + 1];
                        if (seatCount > u + 1) {
                          m.push(seatCount - 1, seatCount);
                        }
                        const h = new Map(d.map((e) => [e.value, e]));
                        m.filter((e) => e <= 200 && !h.has(e)).forEach((e) => {
                          h.set(e, {
                            value: e,
                            label: eh(e, quantityTexts),
                            memberLimit: e,
                            sku: p,
                            isVirtual: true,
                          });
                        });
                        return [...h.values()].sort(
                          (e, t) => e.value - t.value,
                        );
                      })({
                        group,
                        cycle,
                        seatCount,
                        quantityMinMemberLimit,
                        quantityTexts,
                        forceReadOnly: v,
                        ctaDisabled,
                      });
                      return {
                        label: "memberLimit",
                        value: seatCount,
                        options,
                        readOnly: v || options.length <= 1,
                        readOnlyTips: v ? quantityReadOnlyTips : undefined,
                        decreaseDisabledTips: v
                          ? quantityDecreaseDisabledTips
                          : quantityMinMemberLimitTips,
                        increaseDisabledTips: v
                          ? quantityIncreaseDisabledTips
                          : undefined,
                      };
                    })({
                      group: e,
                      selectedSku: F,
                      cycle: R.cycle,
                      quantityReadOnlyProductIds,
                      quantityReadOnlyTips,
                      quantityDecreaseDisabledTips,
                      quantityIncreaseDisabledTips,
                      quantityMinMemberLimit,
                      quantityMinMemberLimitTips,
                      quantityTexts,
                      seatCount: R.seatCount,
                      ctaDisabled,
                    }),
                    totalPrice:
                      ((b = Number.isFinite(displayTotalAmount)
                        ? displayTotalAmount
                        : ey(F)),
                      {
                        currencyTips: F.currencyTips,
                        amountTips: (g = ef(F, b)) != null ? g : F.priceTips,
                        cycleTips: ex(F, unitTexts),
                      }),
                    displayTotalAmount,
                    displayOriginTotalAmount,
                    benefits:
                      (C = F.vipBenefitPackage) == null
                        ? undefined
                        : C.benefitTexts,
                    cta: {
                      disabled: F.disablePurchase,
                      productId: F.productId,
                    },
                  },
                ];
              });
            })({
              prices,
              selections,
              quantityReadOnlyProductIds,
              quantityReadOnlyTips,
              quantityDecreaseDisabledTips,
              quantityIncreaseDisabledTips,
              quantityMinMemberLimit,
              quantityMinMemberLimitTips,
              titleTexts,
              unitTexts,
              quantityTexts,
              ctaDisabled,
            }).map((e) => {
              var t = {
                cycle: e.activeCycle,
                selectedSkuProductId: e.selectedSku.productId,
                seatCount: e.seatCount,
              };
              var disabled = !!(e.cta.disabled || ctaDisabled);
              var onSeatCountChange = (nextSeatCount) => {
                if (!e.quantity.readOnly) {
                  var r = ((e) => {
                    let t;
                    const { group, cycle, nextSeatCount, minMemberLimit } = e;
                    if (
                      Number.isSafeInteger(nextSeatCount) &&
                      !(nextSeatCount <= 0) &&
                      (typeof minMemberLimit !== "number" ||
                        !(nextSeatCount < minMemberLimit))
                    ) {
                      const o = uh(group, cycle);
                      const s = Ai(group, cycle);
                      if (typeof o === "number" && s) {
                        if (nextSeatCount > o) {
                          if (s.disablePurchase || o + 1 > 200) {
                            return;
                          }
                          const seatCount = Math.min(nextSeatCount, 200);
                          return {
                            cycle,
                            selectedSkuProductId: s.productId,
                            seatCount,
                          };
                        }
                        const l =
                          (t = group.skuMatrix[cycle]) == null
                            ? undefined
                            : t[nextSeatCount];
                        if (l) {
                          return {
                            cycle,
                            selectedSkuProductId: l.productId,
                            seatCount: nextSeatCount,
                          };
                        }
                        return undefined;
                      }
                    }
                  })({
                    group: e.group,
                    cycle: e.activeCycle,
                    nextSeatCount,
                    minMemberLimit: quantityMinMemberLimit,
                  });
                  if (r) {
                    if (onSelectionChange != null) {
                      onSelectionChange(e.id, r);
                    }
                  }
                }
              };
              return n._(i._({}, e), {
                activeVariantKey: e.activeCycle,
                onCycleChange: (r) => {
                  var i = ((e, t, r) => {
                    const i = eC(e, t);
                    const n = (i == null ? undefined : i.selectedSkuProductId)
                      ? e.skus.find(
                          (e) => e.productId === i.selectedSkuProductId,
                        )
                      : undefined;
                    const a = i == null ? undefined : i.seatCount;
                    const o = uh(e, r);
                    const s = Ai(e, r);
                    const c =
                      typeof a === "number" &&
                      typeof o === "number" &&
                      a > o &&
                      !!s;
                    const l = c
                      ? s
                      : n
                        ? e_(e, r, n)
                        : ev({
                            group: e,
                            cycle: r,
                          });
                    if (l) {
                      return {
                        cycle: r,
                        selectedSkuProductId: l.productId,
                        seatCount: c && a != null ? a : l.memberLimit,
                      };
                    }
                  })(e.group, t, r);
                  if (i) {
                    if (onSelectionChange != null) {
                      onSelectionChange(e.id, i);
                    }
                  }
                },
                onQuantityChange: (t) => {
                  if (!(e.quantity.readOnly || t.disabled)) {
                    onSeatCountChange(t.value);
                  }
                },
                onSeatCountChange,
                cta: n._(i._({}, e.cta), {
                  disabled,
                  onClick: () => {
                    if (!disabled) {
                      if (e.isLargeSeat) {
                        if (onContactSales != null) {
                          onContactSales({
                            groupKey: e.id,
                            cycle: e.activeCycle,
                            seatCount: e.seatCount,
                            maxSeatCount: e.maxSeatCount,
                            selectedSku: e.selectedSku,
                            price: e.displayTotalAmount,
                            originPrice: e.displayOriginTotalAmount,
                          });
                        }
                        return;
                      }
                      if (onPurchase != null) {
                        onPurchase(e.selectedSku);
                      }
                    }
                  },
                }),
              });
            });
          })({
            prices,
            selections: g,
            quantityReadOnlyProductIds,
            quantityReadOnlyTips,
            quantityDecreaseDisabledTips,
            quantityIncreaseDisabledTips,
            quantityMinMemberLimit,
            quantityMinMemberLimitTips,
            ctaDisabled,
            titleTexts,
            unitTexts,
            quantityTexts,
            onSelectionChange,
            onPurchase,
            onContactSales,
          }),
        [
          onSelectionChange,
          onPurchase,
          onContactSales,
          prices,
          quantityDecreaseDisabledTips,
          quantityIncreaseDisabledTips,
          quantityMinMemberLimit,
          quantityMinMemberLimitTips,
          ctaDisabled,
          quantityReadOnlyProductIds,
          quantityReadOnlyTips,
          g,
          titleTexts,
          unitTexts,
          quantityTexts,
        ],
      ),
      selections: g,
      setSelections: setG,
    };
  })({
    prices: M,
    quantityReadOnlyProductIds,
    quantityDecreaseDisabledTips: V,
    quantityIncreaseDisabledTips: V,
    quantityMinMemberLimit:
      R || F ? teamContext_currentTeamMemberLimit : undefined,
    quantityMinMemberLimitTips,
    ctaDisabled: L,
    titleTexts,
    unitTexts,
    quantityTexts,
    onPurchase: o.useCallback(
      (selectedSku) => {
        M_1({
          selectedSku,
          onPurchase: (e) => {
            ed.i4({
              containerService: u,
              price: e.priceTips,
              selectedSku: e,
              payManager: vipPayManager,
              teamContext,
              forceTheme,
            });
            vipPayManager.reportPopup({
              action: "vip_pay",
              toProduct: e,
            });
          },
        }).catch(() => undefined);
      },
      [u, teamContext, vipPayManager, forceTheme],
    ),
    onContactSales,
  });
  const G = o.useMemo(() => {
    var e;
    var t;
    var r = new Map(X.models.map((e) => [e.id, e]));
    return ((e = X.models),
    (t = {
      texts: {
        ctaText: (e) => {
          if (L) {
            return Z;
          }
          if (e.isLargeSeat) {
            return K;
          }
          if (
            !((e) => {
              const {
                selectedSku,
                subscriptionStatus,
                isSeatLimitExceeded,
                currentTeamMemberLimit,
                currentTeamVipLevel,
              } = e;
              return (
                subscriptionStatus === x.pT.Expired ||
                (subscriptionStatus === x.pT.Active &&
                  (!!isSeatLimitExceeded ||
                    (currentTeamMemberLimit !== undefined &&
                      selectedSku.memberLimit === currentTeamMemberLimit &&
                      selectedSku.teamVipLevel === currentTeamVipLevel)))
              );
            })({
              selectedSku: e.selectedSku,
              subscriptionStatus: teamContext.subscriptionStatus,
              isSeatLimitExceeded: teamContext.isSeatLimitExceeded,
              currentTeamMemberLimit: teamContext_currentTeamMemberLimit,
              currentTeamVipLevel: teamContext.currentTeamVipLevel,
            })
          ) {
            return U;
          }
          return q;
        },
        totalPriceText: (e) => {
          var t;
          var { currency, totalPrice } = e;
          t = {
            currency,
            amount: totalPrice,
          };
          return a.jsx("span", {
            className: "totalPriceText-WJsPHY",
            children: ((e) => {
              const { currency, amount } = e;
              const i = k.Ay.t(
                "web_team_membership_total_price",
                {
                  total_price,
                },
                "合计：".concat(total_price),
              );
              const n = i.indexOf(total_price);
              if (n < 0) {
                return a.jsxs(a.Fragment, {
                  children: [
                    e4(i),
                    a.jsx(e6, {
                      currency,
                      amount,
                    }),
                  ],
                });
              }
              const o = i.slice(0, n);
              const s = i.slice(n + total_price.length);
              return a.jsxs(a.Fragment, {
                children: [
                  e4(
                    ((e, t) => {
                      if (!t) {
                        return e;
                      }
                      const r = e.trimEnd();
                      if (r.endsWith(t)) {
                        return ""
                          .concat(r.slice(0, -t.length))
                          .concat(e.slice(r.length));
                      }
                      return e;
                    })(o, currency),
                  ),
                  a.jsx(e6, {
                    currency,
                    amount,
                  }),
                  ((e, t) => {
                    if (!t) {
                      return e;
                    }
                    const r = e.trimStart();
                    if (r.startsWith(t)) {
                      return ""
                        .concat(e.slice(0, e.length - r.length))
                        .concat(r.slice(t.length));
                    }
                    return e;
                  })(s, currency),
                ],
              });
            })(t),
          });
        },
        descriptionText: (e) => {
          var { price } = e;
          return k.Ay.t(
            "web_team_membership_plan_twelvemonth_subtitle",
            {
              price,
            },
            "按照12个月收费，每席位：¥{price}/12个月",
          );
        },
        creditExchangeText: (e) => {
          var { price, creditAmount } = e;
          return k.Ay.t(
            "dreamina_utra_equivalent",
            {
              price,
              number: creditAmount,
            },
            "换算 ".concat(price, "=").concat(creditAmount, " 积分"),
          );
        },
      },
    }),
    e.map((e) =>
      (function (e) {
        let t;
        let r;
        let o;
        let s;
        let c;
        const l =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : {};
        const { texts } = l;
        const u = ((e, t, r) => {
          if (r == null ? undefined : r.length) {
            let i;
            let n;
            i = [];
            n = [];
            r.forEach((t, r) => {
              if (!(!t.benefitText || eN(t.benefitText))) {
                var a = eM(t).flatMap((t, i) => {
                  if (t.type !== "dialog") {
                    return [];
                  }
                  var n;
                  var a;
                  var o = ""
                    .concat(e, "-benefit-group-")
                    .concat(r, "-")
                    .concat(i);
                  var items =
                    (n =
                      (a = t.contents) == null
                        ? undefined
                        : a.flatMap((e, t) => {
                            var r = eF(e.text, e.title);
                            if (r) {
                              return [
                                {
                                  key: "".concat(o, "-item-").concat(t),
                                  text: eO(r),
                                  tag: eR(e),
                                },
                              ];
                            }
                            return [];
                          })) != null
                      ? n
                      : [];
                  if (!items.length) {
                    return [];
                  }
                  var c = eF(t.title, t.dialogText, t.text);
                  return [
                    {
                      key: o,
                      title: c ? eO(c) : undefined,
                      items,
                    },
                  ];
                });
                if (a.length) {
                  return void n.push(...a);
                }
                i.push({
                  key: "".concat(e, "-benefit-").concat(r),
                  text: eL(t.benefitText),
                  tooltip:
                    t.needHover && t.hoverText
                      ? k.Ay.t(t.hoverText, {}, t.hoverText)
                      : undefined,
                  tag: eR(t),
                });
              }
            });
            return {
              benefits: i.length ? i : undefined,
              benefitGroups: n.length ? n : undefined,
            };
          }
          const a =
            t == null
              ? undefined
              : t
                  .filter((e) => !eN(e))
                  .map((t, r) => ({
                    key: "".concat(e, "-benefit-").concat(r),
                    text: eL(t),
                  }));
          return {
            benefits: (a == null ? undefined : a.length) ? a : undefined,
          };
        })(
          e.productId,
          e.benefits,
          (c = e.selectedSku.vipBenefitPackage) == null ||
            (s = c.richBenefitTexts) == null
            ? undefined
            : s.richBenefitText,
        );
        return n._(
          i._(
            {
              id: e.id,
              productId: e.productId,
              level: "".concat(String(e.selectedSku.level), ":").concat(e.id),
              title: (o = e.title) != null ? o : e.selectedSku.productTips,
              tag: e.tag,
              price: ew(e.price),
              priceLayout: "horizontal",
              priceOriginalPlacement: "after-cycle",
              description: ((e, t) => {
                if (tz(e) === "year") {
                  const r = eE(ey(e));
                  const i = eE(e.memberLimit);
                  if (t && r && i) {
                    return t({
                      price: ep.b(e.currencyCode, r / i),
                    });
                  }
                }
              })(
                e.selectedSku,
                texts == null ? undefined : texts.descriptionText,
              ),
              alignKey: e.alignKey,
              variants: e.variants.map((e) => ({
                key: e.key,
                value: e.value,
                label: e.label,
                productId: e.productId,
              })),
              activeVariantKey: e.activeVariantKey,
              onVariantChange: (t) => {
                var r = e.variants.find((e) => String(e.key) === String(t));
                if (r) {
                  e.onCycleChange(r.key);
                }
              },
              quantity: {
                label: texts == null ? undefined : texts.quantityLabel,
                value: e.quantity.value,
                options: e.quantity.options.map((e) =>
                  i._(
                    {
                      value: e.value,
                      label: e.label,
                    },
                    e.disabled
                      ? {
                          disabled: true,
                        }
                      : {},
                  ),
                ),
                readOnly: e.quantity.readOnly,
                tooltip: e.quantity.readOnlyTips,
                decreaseDisabledTooltip: e.quantity.decreaseDisabledTips,
                increaseDisabledTooltip: e.quantity.increaseDisabledTips,
                onChange: (t) => {
                  if (!e.quantity.readOnly) {
                    e.onSeatCountChange(t);
                  }
                },
              },
              totalPrice: e.totalPrice
                ? {
                    label:
                      (t = ((e, t) => {
                        if (e && (t == null ? undefined : t.amountTips)) {
                          const totalPrice = ej({
                            amountTips: t.amountTips,
                            currencyTips: t.currencyTips,
                            cycleTips: t.cycleTips,
                          });
                          if (totalPrice) {
                            return e({
                              currency: t.currencyTips,
                              totalPrice,
                            });
                          }
                        }
                      })(
                        texts == null ? undefined : texts.totalPriceText,
                        e.totalPrice,
                      )) != null
                        ? t
                        : texts == null
                          ? undefined
                          : texts.totalPriceLabel,
                    price: t
                      ? {
                          amount: "",
                        }
                      : ew(e.totalPrice, {
                          showCycle: false,
                        }),
                  }
                : undefined,
            },
            u,
          ),
          {
            metrics: ((e, t) => {
              let r;
              const i =
                (r = e.vipBenefitPackage) == null ? undefined : r.userCredit;
              const n = ey(e);
              if (i && n && (t == null ? undefined : t.creditExchangeText)) {
                const o = i.amount * e.memberLimit;
                const s = tz(e);
                const price = "".concat(e.currencyTips, "10");
                const creditAmount = (
                  ((o * (s === "year" ? 12 : s === "quarter" ? 3 : 1)) / n) *
                  1000
                ).toFixed();
                return {
                  creditAmountMonthly: i.amount,
                  creditAmountRate: i.amount,
                  currency: e.currencyTips,
                  icon: a.jsx(en.mC1, {}),
                  mode: "compact",
                  exchangeText: t.creditExchangeText({
                    price,
                    creditAmount,
                  }),
                };
              }
            })(e.selectedSku, texts),
            cta: {
              text:
                ((r = texts == null ? undefined : texts.ctaText),
                typeof r === "function" ? r(e) : r),
              disabled: e.cta.disabled,
              onClick: e.cta.onClick,
            },
            secondaryCta: {
              text: k.Ay.t(
                "web_teamfeature_limit_onlyweb_toast",
                {},
                "团队权益仅限即梦AI Web端使用，即梦AI App端和端外渠道不可互通。",
              ),
              mode: "text",
            },
          },
        );
      })(e, t),
    ))
      .map((e) =>
        ((e, t, r) => {
          let a;
          const e_productId = e.productId;
          if (!e_productId) {
            return e;
          }
          const s = ue(t, e_productId, r);
          if (!s) {
            return e;
          }
          const c = c_1(s, e_productId);
          const tag = c.signText || e.tag;
          const d = !!((a = e.cta) == null ? undefined : a.disabled);
          return n._(
            i._(
              n._(i._({}, e), {
                banner: c.banner,
                cardStyle: c.cardStyle,
                contentStyle: c.contentStyle,
                bannerStyle: c.bannerStyle,
                tag,
              }),
              c.prioritySignText
                ? {
                    priorityTag: c.prioritySignText,
                  }
                : {},
              c.creditBadgeText
                ? {
                    creditBadge: {
                      text: c.creditBadgeText,
                      amount: c.creditBadgeAmount,
                    },
                  }
                : {},
            ),
            {
              highlightBenefitTitle: c.highlightTitle,
              highlightBenefits: c.highlightBenefits,
              cta: n._(i._({}, e.cta), {
                buttonStyle: d ? undefined : c.buttonStyle,
              }),
            },
          );
        })(e, v, forceTheme),
      )
      .map((e) => {
        var t;
        var maxSeatCount =
          (t = r.get(e.id)) == null ? undefined : t.maxSeatCount;
        var e_quantity = e.quantity;
        if (!e_quantity) {
          return e;
        }
        var inputRef = o.createRef();
        return n._(i._({}, e), {
          quantity: n._(i._({}, e_quantity), {
            onClick: () => {
              var e;
              if ((e = inputRef.current) != null) {
                e.focus();
              }
            },
            options: e_quantity.options.map((e) => {
              if (e.value === e_quantity.value) {
                return n._(i._({}, e), {
                  label: a.jsx(useE7, {
                    inputRef,
                    value: e_quantity.value,
                    maxSeatCount,
                    options: e_quantity.options,
                    readOnly: e_quantity.readOnly || e_quantity.disabled,
                    onChange: e_quantity.onChange,
                  }),
                });
              }
              return e;
            }),
          }),
        });
      });
  }, [
    teamContext_currentTeamMemberLimit,
    L,
    v,
    U,
    Z,
    K,
    X.models,
    q,
    teamContext.currentTeamVipLevel,
    teamContext.isSeatLimitExceeded,
    teamContext.subscriptionStatus,
    forceTheme,
  ]);
  const Q = o.useMemo(() => G.some((e) => !!e.banner), [G]);
  const Y = o.useMemo(
    () => ({
      CommercePriceCard_card: "teamPriceCardRoot-s4FjsF",
      CommercePriceCard_content: "teamPriceCardContent-MAjoj7",
      CommercePriceCard_quantity: "teamPriceCardQuantity-H7u0BX",
      CommerceQuantityStepper_control: "teamQuantityStepperControl-Fzepoz",
      CommerceQuantityStepper_root: "teamQuantityStepperRoot-iVPoCq",
    }),
    [],
  );
  return a.jsxs(a.Fragment, {
    children: [
      a.jsx("div", {
        className: `${Q ? "priceCardListWithResource-S4Q6i8" : "priceCardList-v70vZh"} ${isDomesticRedesign ? "domesticRedesign-X0WSBq" : ""}`,
        children: a.jsx(p.xA, {
          plans: G,
          layout: "horizontal",
          autoalign: {
            exclude: ["benefitGroupSeperator"],
          },
          showBenefitGroupDivider: true,
          showPriceSlider: false,
          bodyAlignBaseMargin: 24,
          texts: priceCardTexts,
          classes: Y,
        }),
      }),
      a.jsx(useE1, {
        visible: _,
        onClose,
        onDismiss,
        onSubmitAttempt,
      }),
    ],
  });
}
function tr(e) {
  return "".concat(te.X.teamSubscribeEntryNewBadgeDismissedPrefix).concat(e);
}
function tc(e, vipPriceList) {
  if (!e || e.tabName === "personal" || e.tabName === "team") {
    if (e == null) {
      return undefined;
    }
    return e.tabName;
  }
  let r;
  const i = ((r = e.productIds) != null ? r : [])
    .map((e) => vipPriceList.find((t) => t.productId === e))
    .map((e) => {
      if (e) {
        if (e.priceType === "un-auto") {
          if (e.cycleUnit === "MONTH" && e.subscribeCycle === 3) {
            return "single_quarter_purchase";
          }
          if (
            e.cycleUnit === "YEAR" ||
            (e.cycleUnit === "MONTH" && e.subscribeCycle === 12)
          ) {
            return "single_year_purchase";
          }
          return "single_purchase";
        }
        return ts.G(e.cycleUnit, e.subscribeCycle);
      }
    });
  const n = i[0];
  if (n && i.every((e) => e === n)) {
    return n;
  }
  return e.tabName;
}
function tl(vipPayManager, t, clickTabKey) {
  vipPayManager.reportPopup({
    action: "click_tab",
    currentTabKey: t,
    clickTabKey,
  });
}
const td = {
  dre_m10n_subscription_page_plans_yearly: "Yearly",
  dre_m10n_subscription_page_plans_monthly: "Monthly",
  dre_m10n_subscription_page_plans_oneoff: "1-month",
  dre_m10n_subscription_page_plans_teams_oneoff_yearly: "单年购买",
  dre_m10n_subscription_page_plans_teams_oneoff_quarterly: "单季购买",
  web_team_single_quarter_purchase: "单季购买",
  dre_m10n_subscription_page_plans_teams_oneoff_monthly: "单月购买",
};
const tu = {
  enabled: false,
  text: "",
};
function tp(e, t) {
  if (e) {
    if (t == null) {
      return undefined;
    }
    return t.find((t) => t.tabKey === e);
  }
}
function tm(e, t) {
  if (t === "dark") {
    let r;
    if ((r = e == null ? undefined : e.colorDark) != null) {
      return r;
    }
    if (e == null) {
      return undefined;
    }
    return e.color;
  }
  if (e == null) {
    return undefined;
  }
  return e.color;
}
export var VQ = (e) => {
  var t;
  var r;
  var c;
  var badge;
  var {
    vipPayManager,
    source,
    subscriptionPageHeaderTexts,
    pageKind,
    teamContext,
    showTeamSubscribeEntry,
    onOpenTeamSubscribe,
    defaultSubscriptionTab,
    showPageKindTabs,
    isPageKindSwitching,
    onPageKindChange,
    enableStandaloneCreditsPackPurchaseModal,
    forceTheme,
    onSkuGuideTooltipResolved,
    onCloseSubscribePage,
  } = e;
  var ee = h.h(R.$);
  var et = h.h(M.o);
  var { isNewSubscribePage, isPhase2SubscribePage } = vf();
  var ea = E.n();
  var eo = vipPayManager.hideCreditPurchaseEntry === true;
  var ec = h.h(y.aH);
  var ed = h.h(g._);
  var eu = h.h(_.k);
  var ep = h.h(F._);
  var flow = A.d({
    reportParam: {
      source: I.ok.MultiVipPopupSwitchFree,
    },
  });
  var { showBadge, dismissBadge } = (() => {
    let e;
    const { userProfile } = e9.o();
    const r =
      (e = userProfile == null ? undefined : userProfile.uid) != null ? e : "";
    const i = o.useMemo(
      () =>
        ((e) => {
          if (!e || typeof window === "undefined") {
            return false;
          }
          try {
            return tt.r.getItem(tr(e)) === "true";
          } catch (e) {
            return false;
          }
        })(r),
      [r],
    );
    const [n, setN] = o.useState(false);
    return {
      showBadge: !i && !n,
      dismissBadge: o.useCallback(() => {
        setN(true);
        if (r && typeof window !== "undefined") {
          try {
            tt.r.setItem(tr(r), "true");
          } catch (e) {}
        }
      }, [r]),
    };
  })();
  var [e_, setE_] = o.useState(tu);
  var eg = typeof e_.text === "string" ? e_.text.trim() : "";
  var eb = e_.enabled && !!eg;
  var ef = pageKind === x.Ac.Team;
  var { vipTabList, vipPriceList } = u.F(ee, (e) => {
    var t;
    var pageKind_1;
    var i;
    t = e;
    i = (pageKind_1 = pageKind) === x.Ac.Team;
    return {
      pageKind: pageKind_1,
      scene: pageKind_1 === x.Ac.Team ? x.fq.Teams : x.fq.Personal,
      vipPriceList: i ? t.teamWorkspaceVipPriceList : t.vipPriceList,
      vipTabList: i ? t.teamWorkspaceVipTabList : t.vipTabList,
    };
  });
  var eC = u.F(ee, (e) => e.vipTabList);
  var eT = h.h(j.Bo);
  var eS = h.h(w.o);
  var eA = ef ? eS : eT;
  o.useEffect(() => {
    if (onSkuGuideTooltipResolved != null) {
      onSkuGuideTooltipResolved(false);
    }
  }, [onSkuGuideTooltipResolved]);
  var ek = h.h(N.qH);
  var eI = u.F(ek, (e) => {
    var t;
    if ((t = e.material) == null) {
      return undefined;
    }
    return t.tabSubtitles;
  });
  var { material, activityId, activityName, planId, planName } = u.F(
    eA,
    (e) => ({
      material: e.material,
      activityId: e.activityId,
      activityName: e.activityName,
      planId: e.planId,
      planName: e.planName,
    }),
  );
  var { isVip, isVipExpired } =
    u.F(ep, (e) => ({
      isVip: e.isVip,
      isVipExpired: e.isVipExpired,
    })) || {};
  var eL = v_1();
  var [subscriptionExtraInfo, setEE] = o.useState();
  var eWRef = o.useRef();
  var eB = b.Zo(material == null ? undefined : material.defaultTab);
  var eD = ""
    .concat(defaultSubscriptionTab != null ? defaultSubscriptionTab : "", "|")
    .concat(eB != null ? eB : "");
  var eV = o.useMemo(
    () => j_1(vipTabList, vipPriceList, [defaultSubscriptionTab, eB]),
    [defaultSubscriptionTab, eB, vipTabList, vipPriceList],
  );
  var eH = o.useMemo(() => {
    var { defaultActiveTab = 0 } = eV;
    return defaultActiveTab;
  }, [eV]);
  var [ez, setEz] = o.useState(eH);
  var eqRef = o.useRef(pageKind);
  var eKRef = o.useRef(false);
  o.useEffect(() => {
    if (eWRef.current !== eD && eV.isDefaultSubscriptionTabMatched) {
      eWRef.current = eD;
      if (eH !== ez) {
        setEz(eH);
      }
    }
  }, [ez, eH, eD, eV.isDefaultSubscriptionTabMatched]);
  var activatedTab = Math.min(ez, Math.max(vipTabList.length - 1, 0));
  var currentPriceList = o.useMemo(() => {
    var e;
    var t = vipTabList[activatedTab];
    return er({
      tabName: t == null ? undefined : t.tabName,
      productIds: (e = t == null ? undefined : t.productIds) != null ? e : [],
      vipPriceList,
    });
  }, [activatedTab, vipPriceList, vipTabList]);
  var eG = currentPriceList.length === 3;
  var tabsVisible = o.useMemo(
    () =>
      ((e) => {
        const {
          vipTabList,
          vipPriceList,
          subscriptionStatus,
          currentTeamVipLevel,
        } = e;
        if (vipTabList.length <= 1) {
          return false;
        }
        const o = {
          subscriptionStatus,
          currentTeamVipLevel,
        };
        return vipTabList.some((e) => {
          var t;
          var n;
          var a;
          n = ((t = e == null ? undefined : e.productIds) != null ? t : [])
            .map((e) => vipPriceList.find((t) => t.productId === e))
            .filter((e) => !!e);
          a = C(
            i._(
              {
                prices: W5(n),
              },
              o,
            ),
          );
          return to_1(a).length > 1;
        });
      })({
        vipTabList,
        vipPriceList,
        subscriptionStatus:
          teamContext == null ? undefined : teamContext.subscriptionStatus,
        currentTeamVipLevel:
          teamContext == null ? undefined : teamContext.currentTeamVipLevel,
      }),
    [
      teamContext == null ? undefined : teamContext.currentTeamVipLevel,
      teamContext == null ? undefined : teamContext.subscriptionStatus,
      vipPriceList,
      vipTabList,
    ],
  );
  var vipPriceList_1 = o.useMemo(
    () =>
      ((e) => {
        let t;
        let r;
        const {
          vipTabList,
          activatedTab,
          vipPriceList,
          tabsVisible = true,
        } = e;
        const s = (
          tabsVisible &&
          vipTabList.length > 1 &&
          (t =
            (r = vipTabList[activatedTab]) == null
              ? undefined
              : r.productIds) != null
            ? t
            : []
        )
          .map((e) => vipPriceList.find((t) => t.productId === e))
          .filter((e) => !!e);
        if (s.length > 0 && W5(s).length > 0) {
          return s;
        }
        return vipPriceList;
      })({
        vipTabList,
        activatedTab,
        vipPriceList,
        tabsVisible,
      }),
    [activatedTab, tabsVisible, vipPriceList, vipTabList],
  );
  o.useEffect(() => {
    if (eqRef.current !== pageKind) {
      eqRef.current = pageKind;
      setEz(eH);
    }
  }, [pageKind, eH]);
  var eY = (t = vipTabList[activatedTab]) == null ? undefined : t.tabName;
  var e0 = o.useCallback(
    (e) => {
      if (onPageKindChange) {
        tl(vipPayManager, tc(vipTabList[activatedTab], vipPriceList), e);
        onPageKindChange(e);
      }
    },
    [activatedTab, vipTabList, vipPriceList, onPageKindChange, vipPayManager],
  );
  var e1 = (e) => {
    var t;
    var r;
    var i;
    var n = vipTabList.findIndex((t) => t.tabName === e);
    if (n >= 0) {
      t = tc(vipTabList[activatedTab], vipPriceList);
      r = tc(vipTabList[n], vipPriceList);
      tl(vipPayManager, (i = !et.isOversea && !ef) ? r : t, r);
      eKRef.current = !i && n !== activatedTab;
      setEz(n);
    }
  };
  var e2 = material == null ? undefined : material.tabSubtitles;
  var subtitles = o.useMemo(() => {
    var e = {};
    [x.Ac.Personal, x.Ac.Team].forEach((t) => {
      var r = tp(t, eI);
      if (r == null ? undefined : r.text) {
        e[t] = {
          text: k.Ay.t(r.text, {}, r.text),
          color: tm(r, eL),
        };
      }
    });
    return e;
  }, [eI, eL]);
  var e5 = o.useCallback(() => {
    Yl(
      i._(
        {
          containerService: ed,
          forceTheme,
        },
        onCloseSubscribePage && {
          onBeforeLocateNavigate: onCloseSubscribePage,
        },
      ),
    );
    vipPayManager.reportPopup({
      action: "credits_detail",
    });
  }, [ed, forceTheme, onCloseSubscribePage, vipPayManager]);
  var e6 = o.useCallback(() => {
    var e;
    f.x(
      n._(
        i._(
          {
            containerService: ed,
            reportParam: {
              source:
                (e = vipPayManager.commercialSource) != null
                  ? e
                  : "multi_vip_popup_get_credits",
              scene: vipPayManager.commercialScene,
              sceneOptions: vipPayManager.commercialSceneOptions,
            },
          },
          enableStandaloneCreditsPackPurchaseModal === undefined
            ? {}
            : {
                enableStandaloneCreditsPackPurchaseModal,
              },
        ),
        {
          forceTheme,
        },
      ),
    );
    vipPayManager.reportPopup({
      action: "click_get_credits",
    });
  }, [ed, enableStandaloneCreditsPackPurchaseModal, forceTheme, vipPayManager]);
  var onClick = o.useCallback(() => {
    dismissBadge();
    vipPayManager.reportPopup({
      action: "click_team_member",
    });
    if (onOpenTeamSubscribe != null) {
      onOpenTeamSubscribe();
    }
  }, [dismissBadge, onOpenTeamSubscribe, vipPayManager]);
  var e7 = !isPhase2SubscribePage && !ef && !isVip && !isVipExpired;
  var te = !isPhase2SubscribePage && !eo && ea && !ef;
  var ts = isNewSubscribePage && e7 && !te;
  var th = isPhase2SubscribePage && !ef && isVip && !eo;
  var tv = !ef && !!showTeamSubscribeEntry;
  var t_ = e7 || th || tv || te;
  var ty = ef ? tabsVisible : vipTabList.length > 1;
  o.useEffect(() => {
    if (!tv || showBadge) {
      return void setE_(tu);
    }
    var e = false;
    eu.getABTestVar("dreamina_team_entry_discount_badge", tu)
      .then((t) => {
        if (!e) {
          setE_(t);
        }
      })
      .catch(() => undefined);
    return () => {
      e = true;
    };
  }, [showBadge, tv, eu]);
  var tg = o.useMemo(
    () =>
      vipTabList.map((e) => {
        var t;
        var r;
        var i;
        var n = tp(e.tabName, e2);
        var a = (n == null ? undefined : n.text)
          ? k.Ay.t(n.text, {}, n.text)
          : undefined;
        var o = ((e) => {
          if (e) {
            let t;
            const number = parseInt(
              (t = v.j(e)) == null ? undefined : t.discount_tips,
              10,
            );
            if (Number.isFinite(number)) {
              return k.Ay.t(
                "web_dre_m10n_subscription_page_plans_discount",
                {
                  number,
                },
                "{number}% off",
              );
            }
          }
        })(e.extra);
        var s = ((e, t) => {
          let r;
          const i = (e != null ? e : []).reduce((acc, item) => {
            var i = t.find((e) => item === e.productId);
            if (
              !i ||
              (typeof i.totalAmount === "number" && i.totalAmount <= 100)
            ) {
              return acc;
            }
            var n = ((e) => {
              if (tn.q(e)) {
                return e.totalAmount / e.normalAmount;
              }
              if (ta.g(e)) {
                let t;
                return (
                  ((t = e.secondPromoteInfo) == null
                    ? undefined
                    : t.introPrice) / e.normalAmount
                );
              }
              if (e.priceType === "un-auto") {
                const { totalAmount, originPriceAmount } = e;
                if (
                  typeof originPriceAmount === "number" &&
                  originPriceAmount > 0 &&
                  totalAmount > 0 &&
                  originPriceAmount > totalAmount
                ) {
                  return totalAmount / originPriceAmount;
                }
                return undefined;
              }
            })(i);
            if (n && Number.isFinite(n)) {
              if (acc) {
                return Math.min(acc, n);
              }
              return n;
            }
            return acc;
          }, undefined);
          if (i) {
            if (
              (r = ((e) => {
                var num = to.f(e);
                if (num !== "10") {
                  return {
                    text: k.Ay.t(
                      "trial_half",
                      {
                        num,
                      },
                      "{num}折",
                    ),
                  };
                }
              })(i)) == null
            ) {
              return undefined;
            }
            return r.text;
          }
        })(e.productIds, vipPriceList);
        return {
          key: e.tabName,
          label: k.Ay.t(
            e.tabName,
            {},
            (t =
              td == null ? undefined : td[(r = e.tabName) != null ? r : ""]) !=
              null
              ? t
              : e.tabName,
          ),
          discount: (i = a != null ? a : o) != null ? i : s,
        };
      }),
    [vipTabList, vipPriceList, e2],
  );
  var tb = o.useMemo(
    () => ({
      creditRate: {
        monthlyUnit: a.jsxs(a.Fragment, {
          children: [
            k.Ay.t(
              "web_dre_m10n_subscription_page_plans_credits_benefit",
              {
                number0: "",
              },
              "{number0} credits",
            ),
            k.Ay.t(
              "web_dre_m10n_subscription_page_plans_permonth",
              {},
              "/month",
            ),
          ],
        }),
      },
    }),
    [],
  );
  var tf = o.useMemo(
    () => ({
      creditRate: {
        monthlyUnit: k.Ay.t(
          "web_team_membership_monthly_credits_perseat",
          {
            monthly_credits: "",
          },
          "{monthly_credits} 积分/席位/每月。",
        ),
      },
    }),
    [],
  );
  var tx = et.isOversea && !ef && eG;
  var tP =
    et.isOversea &&
    ((c = eC[0]) == null || (r = c.productIds) == null
      ? undefined
      : r.length) === 3;
  var tC = o.useMemo(() => tm(tp(eY, e2), eL), [eY, e2, eL]);
  var style = o.useMemo(() => {
    if (tC) {
      return {
        "--commerce-tabs-discount-color": tC,
      };
    }
  }, [tC]);
  o.useEffect(() => {
    ec.fetchUserSubscriptionExtraInfo(m.og()).then((e) => {
      if (e.ok) {
        setEE(e.value);
      }
    });
  }, [ec]);
  o.useEffect(() => {
    var e = tc(vipTabList[activatedTab], vipPriceList);
    vipPayManager.updateReportParam({
      source,
      currentTabKey: e,
      resourceKey: j.wl,
      activityId,
      activityName,
      planId,
      planName,
    });
  }, [
    ez,
    activityId,
    activityName,
    pageKind,
    ef,
    planId,
    planName,
    source,
    vipPayManager,
    vipTabList,
    vipPriceList,
  ]);
  o.useEffect(() => {
    if (tv) {
      vipPayManager.reportPopup({
        action: "show_team_member",
      });
    }
  }, [tv, vipPayManager]);
  o.useEffect(() => {
    vipPayManager.reportPopup({
      action: "show",
    });
  }, [vipPayManager]);
  o.useEffect(() => {
    if (eKRef.current) {
      var e;
      eKRef.current = false;
      e = tc(vipTabList[activatedTab], vipPriceList);
      vipPayManager.reportPopup({
        action: "show",
        currentTabKey: e,
      });
    }
  }, [activatedTab, vipPayManager, vipTabList, vipPriceList]);
  if (showBadge) {
    badge = {
      kind: "new",
    };
  } else if (eb) {
    badge = {
      kind: "text",
      text: eg,
    };
  }
  return a.jsxs(a.Fragment, {
    children: [
      a.jsxs("div", {
        className: "container-gUkl78",
        style,
        "data-theme": eL,
        "data-env": et.isOversea ? "overseas" : "domestic",
        children: [
          a.jsxs("div", {
            className: _l(
              "tabsHeader-Cmq4uG",
              isPhase2SubscribePage && "redesignedTabsHeader-aralJd",
              isPhase2SubscribePage && ef && "redesignedTeamHeader-TTil6j",
              tx && "tabsHeaderCompact-rgEE5E",
              ef && "tabsHeaderTeam-mHS9AT",
              showPageKindTabs && "tabsHeaderPageKindAnchor-p7pSvu",
              showPageKindTabs &&
                tP &&
                "tabsHeaderPageKindAnchorCompact-eRF6C9",
              ty && "tabsHeaderWithPlanTabs-QtXA5M",
              t_ && "tabsHeaderWithActions-nt1UxK",
            ),
            children: [
              showPageKindTabs &&
                a.jsx("div", {
                  className: "pageKindTabs-TEa38a",
                  children: a.jsx(useEl, {
                    activePageKind: pageKind,
                    disabled: isPageKindSwitching,
                    onChange: e0,
                    subtitles,
                    appearance: isPhase2SubscribePage ? "heading" : "segmented",
                  }),
                }),
              isPhase2SubscribePage &&
                ef &&
                a.jsx("div", {
                  className: "teamDescription-pRYYfy",
                  children: k.Ay.t(
                    "web_team_membership_buy_title",
                    {},
                    "订阅即梦团队会员，解锁团队空间，资产全员共享，协作更高效",
                  ),
                }),
              (!isPhase2SubscribePage || !ef || ty) &&
                a.jsx("div", {
                  className: "tabsStack-K7Meae",
                  children:
                    ty &&
                    a.jsx(p.wQ, {
                      tabs: tg,
                      activeTab: eY,
                      onChange: e1,
                    }),
                }),
              t_ &&
                a.jsxs("div", {
                  className: "headerActions-eQqpno",
                  children: [
                    (te || tv) &&
                      a.jsxs("div", {
                        className: "purchaseActions-_8FzMG",
                        children: [
                          te &&
                            a.jsx(s, {
                              text: k.Ay.t(
                                "web_dre_m10n_subscription_page_get_credits",
                                {},
                                "Get credits",
                              ),
                              onClick: e6,
                            }),
                          tv &&
                            a.jsx(s, {
                              text: k.Ay.t(
                                "web_team_membership",
                                {},
                                "团队会员",
                              ),
                              badge,
                              onClick,
                            }),
                        ],
                      }),
                    th
                      ? a.jsx("button", {
                          type: "button",
                          onClick: e6,
                          className: "buyCredits-ToRXx8",
                          children: k.Ay.t(
                            "web_dre_m10n_subscription_page_get_credits",
                            {},
                            "Get credits",
                          ),
                        })
                      : ts && !eo
                        ? a.jsx($.d, {
                            onBuyCredits: e6,
                            onOpenCreditHistory: e5,
                          })
                        : e7
                          ? a.jsx("div", {
                              onClick: e5,
                              className: "creditBtn-kAznZE",
                              children: k.Ay.t(
                                "dre_m10n_credits_balance",
                                {},
                                "Credit balance",
                              ),
                            })
                          : null,
                  ],
                }),
            ],
          }),
          pageKind === x.Ac.Team
            ? a.jsx(useE8, {
                isDomesticRedesign: isPhase2SubscribePage,
                vipPriceList: vipPriceList_1,
                vipPayManager,
                teamContext,
                priceCardTexts: tf,
                material,
              })
            : a.jsx(useEs, {
                currentPriceList,
                vipPriceList,
                vipTabList,
                activatedTab: ez,
                activeTabKey: eY,
                commerceTabs: tg,
                vipPayManager,
                subscriptionPageHeaderTexts,
                subscriptionExtraInfo,
                priceCardTexts: tb,
                extraDescriptionItems: eT.extraDescriptionItems,
                onTabChange: e1,
                onSwitchFree: flow.start,
                forceTheme,
                enableStandaloneCreditsPackPurchaseModal,
              }),
        ],
      }),
      a.jsx(A.S, {
        flow,
      }),
    ],
  });
};
c.PA((e) => {
  var { activatedTab, text, color, index } = e;
  var o = activatedTab === index;
  return a.jsx("div", {
    className: _l("tabTag-VaXPql", {
      "tabTagHighlight-BaCQSZ": o,
      "tabTagnoActivated-jslUbE": !o,
    }),
    style: {
      color: o ? color : undefined,
    },
    children: text,
  });
});
