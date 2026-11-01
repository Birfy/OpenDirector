import i from "oa";
import n from "bk";
import a from "z8";
import o from "bT";
import s from "yw";
import c from "p21";
import l from "wF";
import d from "SI";
import u from "OY4";
import p from "wb";
import m from "MK";
import h from "oh";
import v from "xMb";
import _ from "gLs";
import y from "EYk";
import g from "VN";
import { v as v_1 } from "./module-CQu.js";
import { vf } from "./module-M4z.js";
import { l as l_1 } from "./module-M8G.js";
import { RY, _6, b4, xX } from "./module-vxf.js";
import { A } from "./module-y6y.js";
import { CG, vj } from "./module-m5h.js";
import { c as c_1 } from "./module-TtZ.js";
import R from "auX";
import { k } from "./module-FL1.js";
function x(e) {
  return p
    .X(e.currencyCode, e.currencyTips, e.totalAmount)
    .replace(/(\.\d*[1-9])0+$/, "$1")
    .replace(/\.0+$/, "");
}
function P(e) {
  const { pricePair, checked, onCheckedChange, accentBackground } = e;
  const o = m.Ay.t("m10n_dm_90off_std_sku_paychannel", {})
    .replace(
      /[ \t]*\{\$dreamina_standard_first_month_price\$\}/g,
      " ".concat(x(pricePair.lowPrice)),
    )
    .replace(/[ \t]*\{\$first_price\$\}/g, " ".concat(x(pricePair.highPrice)));
  const c =
    accentBackground == null
      ? undefined
      : accentBackground.includes("gradient(");
  const l = c
    ? {
        backgroundImage: accentBackground,
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }
    : {
        color: accentBackground,
      };
  const borderColor = c
    ? "rgba(0, 158, 250, 0.5)"
    : "color-mix(in srgb, ".concat(
        accentBackground != null
          ? accentBackground
          : "var(--brand-bright-default, #009efa)",
        " 50%, transparent)",
      );
  return a.jsx("button", {
    "aria-checked": checked,
    className: "button-skEfHx",
    role: "checkbox",
    type: "button",
    onClick: () => onCheckedChange(!checked),
    children: a.jsxs("span", {
      className: "firstLine-D3g6pV",
      children: [
        checked
          ? a.jsx(s.nmw, {
              "aria-hidden": "true",
              className: "icon-pf477_",
              color: c ? "#009efa" : accentBackground,
              size: 16,
            })
          : a.jsx("span", {
              "aria-hidden": "true",
              className: "uncheckedIcon-s7P3bh",
              style: {
                borderColor,
              },
            }),
        a.jsx("span", {
          className: "label-PtLYvn",
          style: l,
          children: o,
        }),
      ],
    }),
  });
}
const C = [13, 12, 11];
function useS(e) {
  let t;
  let r;
  const {
    price,
    side,
    checked,
    theme = "light",
    accentBackground,
    disabled,
  } = e;
  t =
    side === "low" ? "m10n_dm_90off_base_upgrade" : "m10n_dm_90off_std_upgrade";
  r = p.X(price.currencyCode, price.currencyTips, price.totalAmount);
  const u = m.Ay.t(t, {
    string0: r,
    price: r,
  }).replaceAll(
    side === "low"
      ? "{$first_price$}"
      : "{$dreamina_standard_first_month_price$}",
    x(price),
  );
  const hRef = o.useRef(null);
  const [v, setV] = o.useState({
    fontSize: 13,
    wrap: false,
  });
  o.useEffect(() => {
    var e;
    var t = (e = hRef.current) == null ? undefined : e.closest("button");
    var hRef_current = hRef.current;
    if (t && hRef_current) {
      var i = false;
      var n = () => {
        if (!i) {
          var e = ((e, t) => {
            for (const fontSize of C) {
              if (t(fontSize) <= e) {
                return {
                  fontSize,
                  wrap: false,
                };
              }
            }
            return {
              fontSize: 11,
              wrap: true,
            };
          })(Math.max(0, t.clientWidth - 12), (e) => {
            hRef_current.style.fontSize = "".concat(e, "px");
            return hRef_current.getBoundingClientRect().width;
          });
          setV((t) => {
            if (t.fontSize === e.fontSize && t.wrap === e.wrap) {
              return t;
            }
            return e;
          });
        }
      };
      n();
      var a =
        typeof ResizeObserver === "undefined"
          ? undefined
          : new ResizeObserver(n);
      if (a != null) {
        a.observe(t);
      }
      document.fonts.ready.then(n);
      return () => {
        i = true;
        if (a != null) {
          a.disconnect();
        }
      };
    }
  }, [u]);
  const y =
    side !== "low" || checked
      ? undefined
      : (
            accentBackground == null
              ? undefined
              : accentBackground.includes("gradient(")
          )
        ? {
            backgroundImage: accentBackground,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }
        : {
            color: accentBackground,
          };
  return a.jsxs("span", {
    className: "modernLabel-jRZ5WY",
    "data-monthly-basic-button": side,
    "data-checked": checked,
    "data-monthly-basic-theme": theme,
    "data-wrap": v.wrap,
    "data-monthly-basic-disabled": disabled,
    style: {
      fontSize: v.fontSize,
    },
    children: [
      a.jsx("span", {
        className: "measure-Kxxzv0",
        ref: hRef,
        "aria-hidden": "true",
        children: u,
      }),
      a.jsx("span", {
        className: "copy-URXCFE",
        style: y,
        children: u,
      }),
    ],
  });
}
const w = new Set(["link", "type", "url"]);
const N = "GPT Image 2.5";
function F(e) {
  return (
    typeof e === "number" && Number.isFinite(e) && e > 0 && Number.isInteger(e)
  );
}
const L = "gpt-image-benefit-text-Lx7R0C";
const E = ["视频闲时生成积分消耗", "单次同时生成5个视频", "延长生成视频时长"];
const $ = {
  color: "var(--commerce-text-color-primary, #090c14)",
};
function W(e) {
  return !!e.isFakeUltraPlan;
}
export function mH(e) {
  if (e < 1000) {
    return "".concat(e);
  }
  return "".concat((e / 1000).toFixed(1).replace(/\.0$/, ""), "K");
}
function D(e) {
  return E.some((t) => e.indexOf(t) !== -1);
}
export function zf(e, t, r) {
  let i;
  let n;
  let s;
  let c;
  let l;
  let d;
  let u;
  const { benefitTexts = [], richBenefitTexts } =
    (d = e.vipBenefitPackage) != null ? d : {};
  if (
    richBenefitTexts == null || (u = richBenefitTexts.richBenefitText) == null
      ? undefined
      : u.length
  ) {
    i = e.productId;
    n = richBenefitTexts.richBenefitText;
    if (
      (c = [
        ...((s =
          n == null
            ? undefined
            : n
                .filter((e) => e.benefitText && !D(e.benefitText))
                .map((e, n) => {
                  var link = ((e, t) => {
                    let r = [];
                    if (Array.isArray(e)) {
                      r = e;
                    } else if (e) {
                      r = [e];
                    }
                    for (const i of r) {
                      if (w.has(i.type)) {
                        for (const n of (a = i.contents) != null ? a : []) {
                          var a;
                          let o;
                          const s = (o = n.text) == null ? undefined : o.trim();
                          const href = ((e, t) => {
                            const r = e == null ? undefined : e.trim();
                            if (r) {
                              try {
                                const i = t ? new URL(r, t) : new URL(r);
                                if (
                                  i.protocol !== "http:" &&
                                  i.protocol !== "https:"
                                ) {
                                  return;
                                }
                                return i.href;
                              } catch (e) {
                                return;
                              }
                            }
                          })(n.url, t);
                          if (s && href) {
                            return {
                              text: s,
                              href,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              showExternalIcon: true,
                            };
                          }
                        }
                      }
                    }
                  })(e.styleText, t);
                  return {
                    key: "".concat(i, "-benefit-").concat(n),
                    text: ((e, t) => {
                      const r = m.Ay.t(
                        e.benefitText,
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
                        e.benefitText,
                      );
                      if (!e.benefitText.includes(N) || !t) {
                        return r;
                      }
                      const i = !!(
                        t.highlightBlockTagBg || t.highlightBlockTagColor
                      );
                      return a.jsx("span", {
                        className: i
                          ? ""
                              .concat(L, " ")
                              .concat("gpt-image-benefit-tag-theme-barohy")
                          : L,
                        children: t.highlightBlockTitleColor
                          ? (function e(t, color) {
                              if (typeof t === "string") {
                                return t
                                  .split(/(GPT Image 2\.5)/g)
                                  .map((e, t) => {
                                    if (e === N) {
                                      return a.jsx(
                                        "span",
                                        {
                                          style: {
                                            color,
                                          },
                                          children: e,
                                        },
                                        t,
                                      );
                                    }
                                    return e;
                                  });
                              }
                              if (Array.isArray(t)) {
                                return t.map((t) => e(t, color));
                              }
                              if (
                                o.isValidElement(t) &&
                                t.props.children !== undefined
                              ) {
                                return o.cloneElement(
                                  t,
                                  undefined,
                                  e(t.props.children, color),
                                );
                              }
                              return t;
                            })(r, t.highlightBlockTitleColor)
                          : r,
                      });
                    })(e, r),
                    tooltip:
                      e.needHover && e.hoverText
                        ? m.Ay.t(e.hoverText, {}, e.hoverText)
                        : undefined,
                    tag: ((e) => {
                      let t;
                      const r = ((e) => {
                        const { styleText } = e;
                        if (styleText) {
                          if (Array.isArray(styleText)) {
                            return styleText;
                          }
                          return [styleText];
                        }
                        return [];
                      })(e).find((e) => e.type === "label");
                      if (r) {
                        const i =
                          (t = r.contents) == null
                            ? undefined
                            : t
                                .map((e) => e.text || e.title)
                                .filter((e) => !!e);
                        const n = (i == null ? undefined : i.length)
                          ? i.join(" ")
                          : r.title;
                        if (n) {
                          return {
                            text: n,
                            variant: "gray",
                          };
                        }
                        return undefined;
                      }
                    })(e),
                    link,
                  };
                })) != null
          ? s
          : []),
      ]).length
    ) {
      return c;
    }
    return undefined;
  }
  l = e.productId;
  return benefitTexts
    .filter((e) => !D(e))
    .map((e, t) => ({
      key: "".concat(l, "-benefit-").concat(t),
      text: m.Ay.t(e, {}, e),
    }));
}
export function PY(e) {
  const t = new Map();
  for (const r of e) {
    const i = String(r.level);
    const n = t.get(i);
    if (n) {
      n.push(r);
    } else {
      t.set(i, [r]);
    }
  }
  return t;
}
function z(e) {
  let t;
  if ((t = e[1]) != null) {
    return t;
  }
  return e[0];
}
export function K7(e) {
  let t;
  const { priceList, subscriptionExtraInfo, vipInfo } = e;
  const a =
    vipInfo == null || (t = vipInfo.currentAutoRenewPlan) == null
      ? undefined
      : t.level;
  const o = vipInfo == null ? undefined : vipInfo.currentAutoRenewPlan;
  if (a && (o == null ? undefined : o.cycle)) {
    return ((e, t) => {
      if (e.length) {
        if (!(t == null ? undefined : t.vipBenefitPriority)) {
          return z(e);
        }
        let r;
        const i = e.filter((e) => e.priority);
        if (!i.length) {
          return z(e);
        }
        const n = t.vipBenefitPriority;
        const a = [...i].sort((e, t) => {
          var r;
          var i;
          return (
            ((r = e.priority) != null ? r : 0) -
            ((i = t.priority) != null ? i : 0)
          );
        });
        switch (t.pidDirectionInfo) {
          case "==":
            if ((o = a.find((e) => e.priority === n)) != null) {
              return o;
            }
            return z(e);
          case "<=":
            var o;
            let s;
            const c = a.filter((e) => {
              var t;
              return ((t = e.priority) != null ? t : 0) <= n;
            });
            if ((s = c[c.length - 1]) != null) {
              return s;
            }
            return z(e);
          case ">=":
            if (
              (r = a.find((e) => {
                var t;
                return ((t = e.priority) != null ? t : 0) >= n;
              })) != null
            ) {
              return r;
            }
            return z(e);
          default:
            return z(e);
        }
      }
    })(
      priceList.filter(
        (e) =>
          e.priceType === "auto" &&
          e.level === a &&
          e.subscribeCycle === o.cycle &&
          (!o.cycleUnit || e.cycleUnit === o.cycleUnit),
      ),
      subscriptionExtraInfo,
    );
  }
}
export function Gy(e) {
  let t;
  let r;
  const { activeVariants, currentSubscribedVariantPrice, groupKey, prices } = e;
  const s = activeVariants[groupKey];
  if (s) {
    if ((t = prices.find((e) => e.productId === s)) != null) {
      return t;
    }
    return z(prices);
  }
  if (
    currentSubscribedVariantPrice &&
    (r = prices.find(
      (e) => e.productId === currentSubscribedVariantPrice.productId,
    )) != null
  ) {
    return r;
  }
  return z(prices);
}
export function QD(e) {
  const {
    priceList,
    allPriceList,
    vipPayManager,
    activatedTab,
    subscriptionPageHeaderTexts,
    subscriptionExtraInfo,
    forceTheme,
    enableStandaloneCreditsPackPurchaseModal,
    onSwitchFree,
  } = e;
  const z = l.h(g._);
  const K = l.h(h.$);
  const commercialStrategyService = l.h(y.a);
  const X = l.h(_.o);
  const G = l.h(v.Bo);
  const Q = c.F(G, (e) => {
    var t;
    if ((t = e.material) == null) {
      return undefined;
    }
    return t.sku;
  });
  const theme = v_1();
  const { isNewSubscribePage, isPhase2SubscribePage } = vf();
  const origin = window.location.origin;
  const { vipInfo, isVip, currentVipLevel } = c.F(z, (e) => ({
    vipInfo: e.vipInfo,
    isVip: e.isVip,
    currentVipLevel: e.currentVipLevel,
  }));
  const { vipTabList } = c.F(K, (e) => ({
    vipTabList: e.vipTabList,
  }));
  const { isHitCommercialAutoRefund, isUltraEnabled } =
    commercialStrategyService;
  const { isOversea } = X;
  const el = o.useMemo(() => PY(priceList), [priceList]);
  const [ed, setEd] = o.useState({});
  const ep = o.useCallback((e, t) => {
    setEd((r) =>
      n._(i._({}, r), {
        [e]: t,
      }),
    );
  }, []);
  const currentSubscribedVariantPrice = o.useMemo(
    () =>
      K7({
        priceList: allPriceList != null ? allPriceList : priceList,
        subscriptionExtraInfo,
        vipInfo,
      }),
    [allPriceList, priceList, subscriptionExtraInfo, vipInfo],
  );
  const { handlePurchase, loadingProductId } = k(
    vipPayManager,
    currentSubscribedVariantPrice == null
      ? undefined
      : currentSubscribedVariantPrice.productId,
    forceTheme,
    enableStandaloneCreditsPackPurchaseModal,
    onSwitchFree,
  );
  return {
    models: o.useMemo(
      () =>
        Array.from(el.entries()).map((e) => {
          var o;
          var c;
          var l;
          var h;
          var [v, _] = e;
          var pricePair = ((e, t) => {
            if (t) {
              const r = e.filter(
                (e) =>
                  e.level === "standard" &&
                  e.autoSubscribe !== false &&
                  e.priceType === "auto" &&
                  e.subscribeCycle === 1 &&
                  e.cycleUnit === "MONTH",
              );
              if (r.length === 2) {
                const [i, n] = [...r].sort(
                  (e, t) => e.totalAmount - t.totalAmount,
                );
                if (i.totalAmount !== n.totalAmount) {
                  return {
                    highPrice: n,
                    lowPrice: i,
                  };
                }
              }
            }
          })(_, isOversea);
          var g = pricePair
            ? ed[v] === pricePair.highPrice.productId
              ? pricePair.highPrice
              : pricePair.lowPrice
            : undefined;
          var b =
            g != null
              ? g
              : Gy({
                  activeVariants: ed,
                  currentSubscribedVariantPrice,
                  groupKey: v,
                  prices: _,
                });
          var {
            productId,
            level,
            vipBenefitPackage,
            disablePurchase,
            currencyTips,
          } = b;
          var { userCredit } =
            vipBenefitPackage != null ? vipBenefitPackage : {};
          var isFreeItem = level === "";
          var z = vj(Q, productId, theme);
          var U = CG(Q, productId, theme);
          var K = pricePair
            ? vj(Q, pricePair.lowPrice.productId, theme)
            : undefined;
          var X =
            (K == null ? undefined : K.bgType) === "bg_gradient_color"
              ? K.bgGradientColor
              : (K == null ? undefined : K.bgType) === "bg_color"
                ? K.bgColor
                : undefined;
          var G = z ? c_1(z, productId) : undefined;
          var ei = b4(b);
          var eo =
            isNewSubscribePage && !isOversea
              ? ((e, t) => {
                  const r = F(e.subscribeCycle) && e.subscribeCycle > 1;
                  if (
                    (e.cycleUnit === "MONTH" || e.cycleUnit === "YEAR") &&
                    F(e.subscribeCycle) &&
                    (r ||
                      (e.priceType === "auto" &&
                        e.cycleUnit === "MONTH" &&
                        e.subscribeCycle === 1)) &&
                    !e.canTrial &&
                    !e.canLowPriceTrial &&
                    F(e.totalAmount)
                  ) {
                    a = e.currencyCode;
                    const i = 10 ** R.P(a);
                    const equivalentMonthlyAmount =
                      Math.ceil(e.totalAmount / e.subscribeCycle / i) * i;
                    if (F(equivalentMonthlyAmount)) {
                      var a;
                      let o;
                      const s = ((e) => {
                        if (e) {
                          if (F(e.originPriceAmount)) {
                            return e.originPriceAmount;
                          }
                          if (F(e.normalAmount)) {
                            return e.normalAmount;
                          }
                          return undefined;
                        }
                      })(
                        (o = t.filter(
                          (t) =>
                            t.priceType === "un-auto" &&
                            t.cycleUnit === "MONTH" &&
                            t.subscribeCycle === 1 &&
                            ((e, t) => {
                              if (
                                t.level !== e.level ||
                                t.currencyCode !== e.currencyCode
                              ) {
                                return false;
                              }
                              let r;
                              let i;
                              const n =
                                (r = e.vipBenefitPackage) == null
                                  ? undefined
                                  : r.userCredit.amount;
                              const a =
                                (i = t.vipBenefitPackage) == null
                                  ? undefined
                                  : i.userCredit.amount;
                              return (
                                n === undefined || a === undefined || n === a
                              );
                            })(e, t),
                        )).length === 1
                          ? o[0]
                          : e.priority !== undefined
                            ? o.find((t) => t.priority === e.priority)
                            : undefined,
                      );
                      if (!s) {
                        if (r) {
                          return {
                            equivalentMonthlyAmount,
                          };
                        }
                        return undefined;
                      }
                      const savingPerMonth =
                        Math.floor((s - equivalentMonthlyAmount) / i) * i;
                      if (savingPerMonth <= 0) {
                        if (r) {
                          return {
                            equivalentMonthlyAmount,
                          };
                        }
                        return undefined;
                      }
                      return {
                        equivalentMonthlyAmount,
                        savingPerMonth,
                      };
                    }
                  }
                })(b, allPriceList != null ? allPriceList : priceList)
              : undefined;
          var el = _6({
            goodsInfo: b,
            userInfo: vipInfo,
            isFreeItem,
            currentSubscribedProductId:
              currentSubscribedVariantPrice == null
                ? undefined
                : currentSubscribedVariantPrice.productId,
          });
          var e_ = vipInfo == null ? undefined : vipInfo.currentAutoRenewPlan;
          var ey = b.priceType === "auto";
          var eg = !!(
            (!(
              (e_ == null ? undefined : e_.payChannel) === "APPLE_IAP_PAY" &&
              ey &&
              el !== "ManageSubscription"
            ) &&
              el !== "ManageSubscription" &&
              disablePurchase) ||
            RY({
              goodsInfo: b,
              userInfo: vipInfo,
              isFreeItem,
              currentSubscribedProductId:
                currentSubscribedVariantPrice == null
                  ? undefined
                  : currentSubscribedVariantPrice.productId,
            })
          );
          var eb = xX({
            goodsInfo: b,
            userInfo: vipInfo,
            isFreeItem,
            currentSubscribedProductId:
              currentSubscribedVariantPrice == null
                ? undefined
                : currentSubscribedVariantPrice.productId,
          });
          var ef = zf(b, origin, U);
          var metrics = userCredit
            ? {
                creditAmountMonthly: userCredit.amount,
                creditAmountRate: userCredit.amount,
                currency: currencyTips,
                icon: a.jsx(s.mC1, {}),
                mode: "compact",
                exchangeText: W(b)
                  ? " "
                  : m.Ay.t("dreamina_utra_equivalent", A(b, userCredit.amount)),
              }
            : undefined;
          var eP =
            b.originPriceAmount && b.originPriceAmount !== b.normalAmount
              ? m.Ay.t(
                  "dreamina_utra_save",
                  {
                    number: (
                      (1 - b.normalAmount / b.originPriceAmount) *
                      100
                    ).toFixed(),
                  },
                  "Instant {number}% Off",
                )
              : undefined;
          var eC =
            (G == null ? undefined : G.signText) ||
            (activatedTab !== 0
              ? subscriptionPageHeaderTexts == null
                ? undefined
                : subscriptionPageHeaderTexts.discountTag
              : undefined) ||
            eP;
          var tag = eC && !W(b) ? eC : undefined;
          var variants = pricePair
            ? undefined
            : ((e) => {
                if (!(e.length <= 1)) {
                  return e.map((e) => {
                    var t;
                    var r;
                    return {
                      key: e.productId,
                      label: mH(
                        ((r = e.vipBenefitPackage) == null ||
                        (t = r.userCredit) == null
                          ? undefined
                          : t.amount) || 0,
                      ),
                      value: e.productId,
                    };
                  });
                }
              })(_);
          var highlightBenefits = G == null ? undefined : G.highlightBenefits;
          var ek = priceList.some((e) => e.asDefault);
          var { level: level_1 } =
            (o =
              l_1[
                (c =
                  vipPayManager == null
                    ? undefined
                    : vipPayManager.commercialScene) != null
                  ? c
                  : ""
              ]) != null
              ? o
              : {};
          if (
            (l = (h = priceList.at(-1)) == null ? undefined : h.level) == null
          ) {
            d.PB(isUltraEnabled);
          }
          ek ? b.asDefault : b.level;
          (() => {
            if (
              (currentSubscribedVariantPrice == null
                ? undefined
                : currentSubscribedVariantPrice.productId) === b.productId
            ) {
              return;
            }
            var vipPayManager_commercialScene = vipPayManager.commercialScene;
            if (vipPayManager_commercialScene) {
              if (level_1) {
                return b.level;
              }
              var t = u.I({
                scene: vipPayManager_commercialScene,
                sceneOptions: vipPayManager.commercialSceneOptions,
                commercialStrategyService,
                extraBenefits: vipPayManager.extraBenefits,
              });
              if (!(d.MG[t] <= d.MG[currentVipLevel]) && t !== "") {
                return b.level;
              }
            }
          })();
          var ej = W(b) || eg || loadingProductId === b.productId;
          var checked =
            (pricePair == null ? undefined : pricePair.lowPrice.productId) ===
            b.productId;
          var eN = (e) => {
            var t;
            var r = _6({
              goodsInfo: e,
              userInfo: vipInfo,
              isFreeItem: false,
              currentSubscribedProductId:
                currentSubscribedVariantPrice == null
                  ? undefined
                  : currentSubscribedVariantPrice.productId,
            });
            var i =
              (vipInfo == null || (t = vipInfo.currentAutoRenewPlan) == null
                ? undefined
                : t.payChannel) === "APPLE_IAP_PAY" &&
              e.priceType === "auto" &&
              r !== "ManageSubscription";
            return !!(
              loadingProductId ||
              (!i && r !== "ManageSubscription" && e.disablePurchase) ||
              RY({
                goodsInfo: e,
                userInfo: vipInfo,
                isFreeItem: false,
                currentSubscribedProductId:
                  currentSubscribedVariantPrice == null
                    ? undefined
                    : currentSubscribedVariantPrice.productId,
              })
            );
          };
          var eM = !!pricePair && eN(pricePair.highPrice);
          var disabled = !!pricePair && eN(pricePair.lowPrice);
          return n._(
            i._(
              {
                id: productId,
                level: String(level),
                title: isFreeItem
                  ? "Free"
                  : d.JI({
                      level,
                    }),
                banner: G == null ? undefined : G.banner,
                cardStyle: U
                  ? i._(
                      {},
                      G == null ? undefined : G.cardStyle,
                      U.highlightBlockTitleColor
                        ? {
                            "--dreamina-gpt-image-benefit-title-color":
                              U.highlightBlockTitleColor,
                          }
                        : {},
                      U.highlightBlockTagBg
                        ? {
                            "--dreamina-gpt-image-benefit-tag-bg":
                              U.highlightBlockTagBg,
                          }
                        : {},
                      U.highlightBlockTagColor
                        ? {
                            "--dreamina-gpt-image-benefit-tag-color":
                              U.highlightBlockTagColor,
                          }
                        : {},
                    )
                  : G == null
                    ? undefined
                    : G.cardStyle,
                contentStyle: G == null ? undefined : G.contentStyle,
                bannerStyle: G == null ? undefined : G.bannerStyle,
                price: {
                  currency: currencyTips,
                  amount: ei == null ? undefined : ei.priceAmount,
                  cycle: ei == null ? undefined : ei.cycleTips,
                  cyclePrefix: "",
                  originalAmount:
                    ei.originPriceAmount !== "0"
                      ? ei.originPriceAmount
                      : undefined,
                },
                priceLayout: "horizontal",
                priceOriginalPlacement: "after-cycle",
                description: (() => {
                  var e;
                  var t;
                  var r;
                  var n = [];
                  if (
                    !eo &&
                    ((e = ei.priceDesc) == null ? undefined : e.firstPart)
                  ) {
                    n.push(
                      ei.priceDesc.firstPart,
                      a.jsx(
                        "span",
                        {
                          children: " · ",
                        },
                        "separator",
                      ),
                    );
                  }
                  if ((t = ei.priceDesc) == null ? undefined : t.secondPart) {
                    n.push(ei.priceDesc.secondPart);
                  }
                  if (
                    (r = ei.priceDesc) == null ? undefined : r.lineThroughPart
                  ) {
                    n.push(
                      a.jsx(
                        "span",
                        {
                          style: {
                            marginLeft: 4,
                            textDecoration: "line-through",
                          },
                          children: ei.priceDesc.lineThroughPart,
                        },
                        "line-through",
                      ),
                    );
                  }
                  if (isOversea && el !== "Purchase") {
                    n.push(
                      a.jsx(
                        "span",
                        {
                          style: {
                            display: "block",
                            marginTop: 4,
                            opacity: 0.65,
                            fontSize: 13,
                          },
                          children: m.Ay.t(
                            "web_dre_m10n_subscription_page_continuous_payment_hint",
                            {},
                            "The subscription will automatically renew.",
                          ),
                        },
                        "renew-desc",
                      ),
                    );
                  }
                  var o =
                    n.length > 0
                      ? a.jsx(a.Fragment, {
                          children: n,
                        })
                      : undefined;
                  var s =
                    !isPhase2SubscribePage && eo
                      ? a.jsxs(a.Fragment, {
                          children: [
                            a.jsx("span", {
                              style: i._(
                                {
                                  display: "block",
                                },
                                $,
                              ),
                              children: ((e, t) => {
                                if (t.savingPerMonth === undefined) {
                                  const r = a.jsx("span", {
                                    style: $,
                                    children: p.X(
                                      e.currencyCode,
                                      e.currencyTips,
                                      t.equivalentMonthlyAmount,
                                    ),
                                  });
                                  return m.Ay.t(
                                    "web_dre_subscription_equivalent_monthly",
                                    {
                                      string0: r,
                                    },
                                    "折算 {string0}/月",
                                  );
                                }
                                const i = a.jsx("span", {
                                  style: $,
                                  children: p.X(
                                    e.currencyCode,
                                    e.currencyTips,
                                    t.savingPerMonth,
                                  ),
                                });
                                if (e.subscribeCycle === 1) {
                                  return m.Ay.t(
                                    "web_dre_subscription_single_month_saving",
                                    {
                                      string0: i,
                                    },
                                    "较单月优惠 {string0}",
                                  );
                                }
                                const n = a.jsx("span", {
                                  style: $,
                                  children: p.X(
                                    e.currencyCode,
                                    e.currencyTips,
                                    t.equivalentMonthlyAmount,
                                  ),
                                });
                                return m.Ay.t(
                                  "web_dre_subscription_equivalent_and_single_month_saving",
                                  {
                                    string0: n,
                                    string1: i,
                                  },
                                  "折算 {string0}/月 · 较单月优惠 {string1}",
                                );
                              })(b, eo),
                            }),
                            o
                              ? a.jsx("span", {
                                  style: {
                                    display: "block",
                                    marginTop: 4,
                                  },
                                  children: o,
                                })
                              : null,
                          ],
                        })
                      : o;
                  var c = pricePair
                    ? a.jsx(P, {
                        pricePair,
                        checked: b.productId === pricePair.lowPrice.productId,
                        accentBackground: X,
                        onCheckedChange: (e) =>
                          ep(
                            v,
                            e
                              ? pricePair.lowPrice.productId
                              : pricePair.highPrice.productId,
                          ),
                      })
                    : null;
                  if (s || c) {
                    return a.jsxs(a.Fragment, {
                      children: [s, c],
                    });
                  }
                })(),
                benefits: (ef == null ? undefined : ef.length) ? ef : undefined,
                highlightBenefitTitle: G == null ? undefined : G.highlightTitle,
                highlightBenefits,
                metrics,
                tag,
              },
              (G == null ? undefined : G.prioritySignText)
                ? {
                    priorityTag: G.prioritySignText,
                  }
                : {},
              (G == null ? undefined : G.creditBadgeText)
                ? {
                    creditBadge: {
                      text: G.creditBadgeText,
                      amount: G.creditBadgeAmount,
                    },
                  }
                : {},
            ),
            {
              variants,
              activeVariantKey: b.productId,
              onVariantChange: variants
                ? (e) =>
                    setEd((t) =>
                      n._(i._({}, t), {
                        [v]: String(e),
                      }),
                    )
                : undefined,
              cta: pricePair
                ? {
                    text: a.jsx(useS, {
                      price: pricePair.lowPrice,
                      side: "low",
                      checked,
                      accentBackground: X,
                      disabled,
                    }),
                    disabled,
                    buttonClassName: "modernPrimaryButton-q6KTxx",
                    buttonStyle: checked
                      ? {
                          background: X,
                          color: K == null ? undefined : K.titleFontColor,
                        }
                      : {
                          background: "transparent",
                        },
                    onClick: () => handlePurchase(pricePair.lowPrice),
                  }
                : {
                    text: W(b) ? m.Ay.t("coming", {}, "敬请期待") : eb,
                    disabled: ej,
                    buttonStyle: ej || G == null ? undefined : G.buttonStyle,
                    onClick: () => handlePurchase(b),
                  },
              secondaryCta: pricePair
                ? {
                    text: a.jsx(useS, {
                      price: pricePair.highPrice,
                      side: "high",
                      checked,
                      theme,
                      disabled: eM,
                    }),
                    onClick: () => {
                      if (!eM) {
                        handlePurchase(pricePair.highPrice);
                      }
                    },
                  }
                : (() => {
                    if (isPhase2SubscribePage && !isOversea && !isFreeItem) {
                      var e;
                      var t;
                      var r =
                        b.subscribeCycle > 1 && eo
                          ? p.X(
                              b.currencyCode,
                              b.currencyTips,
                              eo.equivalentMonthlyAmount,
                            )
                          : undefined;
                      var i =
                        (eo == null ? undefined : eo.savingPerMonth) !==
                        undefined
                          ? p.X(
                              b.currencyCode,
                              b.currencyTips,
                              eo.savingPerMonth,
                            )
                          : undefined;
                      if (r && i) {
                        e = m.Ay.t(
                          "web_dre_subscription_equivalent_and_single_month_saving",
                          {
                            string0: r,
                            string1: i,
                          },
                          "折算 {string0}/月 · 较单月优惠 {string1}",
                        );
                      } else if (r) {
                        e = m.Ay.t(
                          "web_dre_subscription_equivalent_monthly",
                          {
                            string0: r,
                          },
                          "折算 {string0}/月",
                        );
                      } else if (i) {
                        e = m.Ay.t(
                          "web_dre_subscription_single_month_saving",
                          {
                            string0: i,
                          },
                          "较单月优惠 {string0}",
                        );
                      } else {
                        if (
                          ((t = vipTabList[activatedTab]) == null
                            ? undefined
                            : t.tabName) ===
                            "dre_m10n_subscription_page_plans_oneoff" ||
                          (b.priceType !== "auto" && !(b.subscribeCycle > 1))
                        ) {
                          return;
                        }
                        e = m.Ay.t(
                          "web_dre_subscription_single_month_comparison_fallback",
                          {},
                          "较单月购买更优惠更灵活",
                        );
                      }
                      return {
                        mode: "text",
                        text: e,
                      };
                    }
                  })(),
            },
          );
        }),
      [
        el,
        ed,
        currentSubscribedVariantPrice,
        vipInfo,
        isVip,
        activatedTab,
        vipTabList,
        subscriptionPageHeaderTexts,
        isHitCommercialAutoRefund,
        isOversea,
        isNewSubscribePage,
        isPhase2SubscribePage,
        handlePurchase,
        loadingProductId,
        Q,
        theme,
        priceList,
        vipPayManager,
        commercialStrategyService,
        currentVipLevel,
        isUltraEnabled,
        origin,
        allPriceList,
        ep,
      ],
    ),
    activeVariants: ed,
    currentSubscribedVariantPrice,
  };
}
