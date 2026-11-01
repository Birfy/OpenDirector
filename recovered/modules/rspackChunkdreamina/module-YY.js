import n from "NY";
import i from "z8";
import "WJ";
import a from "gei";
import s from "A6R";
import _o from "xb";
import l from "bo";
import d from "M8X";
import u from "wF";
import p from "SI";
import m from "CFa";
import h from "MgG";
import g from "JZn";
import v from "fGo";
import b from "DT";
import _ from "NF";
import y from "gLs";
import f from "oh";
import A from "VN";
import x from "bT";
import w from "p21";
import R from "ar";
import k from "Kt";
import C from "s1";
import T from "Ux";
import N from "wb";
import { I as I_1 } from "./module-dI5.js";
import { w as w_1 } from "./module-w3w.js";
import { p as p_1 } from "./module-MWC.js";
import M from "MK";
import { p as p_2 } from "./module-fE6.js";
import F from "oa";
import I from "bk";
import B from "cO";
import _W from "bfR";
import _J from "vpF";
import O from "ofP";
import { x as x_1 } from "./module-sIr.js";
const className = "linkText-Y857EG";
const z = (e) => {
  var { onClick, enableStandaloneCreditsPackPurchaseModal } = e;
  var containerService = u.h(k._);
  return i.jsxs("div", {
    className: "getCredits-aTud6u",
    children: [
      M.Ay.t(
        "web_dre_m10n_subscription_page_change_plan_get_credits",
        {},
        "Do you want to get more credits only? ",
      ),
      i.jsxs("span", {
        style: {
          paddingLeft: "5px",
        },
        onClick: () => {
          x_1(
            I._(
              F._(
                {
                  containerService,
                },
                enableStandaloneCreditsPackPurchaseModal === undefined
                  ? {}
                  : {
                      enableStandaloneCreditsPackPurchaseModal,
                    },
              ),
              {
                reportParam: {
                  source: "subscribe_plan_change_popup",
                },
              },
            ),
          );
          if (onClick != null) {
            onClick();
          }
        },
        children: [
          M.Ay.t(
            "web_dre_m10n_subscription_page_change_plan_get_credits_button",
            {},
            "Buy credits now",
          ),
          " ",
        ],
      }),
    ],
  });
};
const V = (e) => {
  var { text } = e;
  return i.jsx("span", {
    style: {
      padding: "0px 2px",
      fontWeight: 550,
    },
    children: text,
  });
};
const H = [
  "NotSubscribedRenewUpgrade",
  "NotSubscribedRenewLateral",
  "NotSubscribedRenewDowngrade",
];
const Q = (e) => {
  var r;
  var { vipInfo, productList, toProductId } = e;
  var a = productList.find((e) => e.productId === toProductId);
  var { currentAutoRenewPlan } = vipInfo;
  var { cycleUnit, level = "" } =
    currentAutoRenewPlan != null ? currentAutoRenewPlan : {};
  if (!a) {
    return "CancelRenew";
  }
  if (a.priceType === "un-auto") {
    switch (a.changeType) {
      case "UPGRADE":
        break;
      case "DOWNGRADE":
        return "DownGradeOneOff";
      case "LATERAL":
      case "CROSSGRADE":
      case "SUBCHANGE":
        return "LateralOneOff";
    }
  } else {
    if (
      (currentAutoRenewPlan == null
        ? undefined
        : currentAutoRenewPlan.status) !== "SUBSCRIBED"
    ) {
      switch (a.changeType) {
        case "UPGRADE":
          return "NotSubscribedRenewUpgrade";
        case "DOWNGRADE":
          return "NotSubscribedRenewDowngrade";
        case "LATERAL":
        case "SUBCHANGE":
          return "NotSubscribedRenewLateral";
      }
    }
    if (
      level &&
      p.MG[level] < p.MG[a.level] &&
      !((r = vipInfo.autoRenewPlans) == null
        ? undefined
        : r.find((e) => e.level === vipInfo.curVipLevel))
    ) {
      if (cycleUnit === "YEAR") {
        return "RenewDiscountUpgrade";
      }
      return "RenewUpgrade";
    }
    switch (a.changeType) {
      case "UPGRADE":
        return "RenewUpgrade";
      case "DOWNGRADE":
        return "RenewDowngrade";
      case "LATERAL":
        return "RenewLateral";
      case "SUBCHANGE":
        return "RenewSubchange";
    }
  }
  return "UpgradeOneOff";
};
const K = (e) => {
  var {
    level,
    cycleUnit,
    isOneoff,
    subscribeCycle,
    levelTips,
    separator = "",
  } = e;
  var o = p.JI({
    level,
  });
  var c = p.xg(subscribeCycle, isOneoff);
  return [o + (levelTips ? "（".concat(levelTips, "）") : ""), c]
    .filter(Boolean)
    .join(separator);
};
const U = function (e) {
  let r;
  let t;
  let n;
  let a;
  let s;
  let o;
  let c;
  let l;
  let d;
  let u;
  let p;
  let m;
  let h;
  let g;
  let v;
  const b = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  const {
    preCreateRes,
    vipInfo,
    productList,
    toProductId,
    onGetCreditsClick,
    currentSubscribedProductId,
  } = e;
  const R = !!(vipInfo == null ? undefined : vipInfo.currentAutoRenewPlan);
  const k = Q(e);
  const C = (e) => _J(1000 * e).format("YYYY-MM-DD HH:mm");
  const T = productList.find((e) => e.productId === toProductId);
  const N = ""
    .concat(T == null ? undefined : T.currencyTips)
    .concat(
      b
        ? T == null
          ? undefined
          : T.priceTips
        : T == null
          ? undefined
          : T.renewPriceTips,
    );
  const { level, cycleUnit, subscribeCycle } = T != null ? T : {};
  if (b) {
    return ((e) => {
      var r;
      var t;
      var n;
      var a;
      var s;
      var o;
      var c;
      var l;
      var d;
      var u;
      var p;
      var m;
      var h;
      var g;
      var v;
      var {
        preCreateRes,
        vipInfo,
        productList,
        toProductId,
        onGetCreditsClick,
        currentSubscribedProductId,
      } = e;
      var w = !!(vipInfo == null ? undefined : vipInfo.currentAutoRenewPlan);
      var R = Q(
        I._(F._({}, e), {
          isOversea: true,
        }),
      );
      var k = (e) => _J(1000 * e).format("YYYY-MM-DD HH:mm");
      var C = productList.find((e) => e.productId === toProductId);
      var T = ""
        .concat(C == null ? undefined : C.currencyTips)
        .concat(C == null ? undefined : C.priceTips);
      var { level, cycleUnit, subscribeCycle } = C != null ? C : {};
      var j = productList.find((e) => {
        var r;
        var t;
        if (currentSubscribedProductId) {
          return e.productId === currentSubscribedProductId;
        }
        return (
          e.level ===
            ((r = vipInfo.currentAutoRenewPlan) == null
              ? undefined
              : r.level) &&
          e.subscribeCycle ===
            ((t = vipInfo.currentAutoRenewPlan) == null
              ? undefined
              : t.cycle) &&
          e.priceType === "auto"
        );
      });
      var E =
        ((r = vipInfo.currentAutoRenewPlan) == null
          ? undefined
          : r.nextRenewalFee) ||
        ""
          .concat(j == null ? undefined : j.currencyTips)
          .concat(j == null ? undefined : j.priceTips);
      switch (R) {
        case "RenewUpgrade":
        case "RenewDiscountUpgrade":
        case "NotSubscribedRenewUpgrade":
        case "NotSubscribedRenewLateral":
        case "NotSubscribedRenewDowngrade":
          if (subscribeCycle === 12) {
            return M.Ay.t(
              "web_dre_m10n_subscription_page_change_plan_popup_key9",
              {
                string0: i.jsx(V, {
                  text: K({
                    level,
                    cycleUnit,
                    subscribeCycle,
                    separator: "-",
                  }),
                }),
                string1: i.jsx(V, {
                  text: k(
                    (t =
                      preCreateRes == null ||
                      (n = preCreateRes.upcomingVipInfo) == null
                        ? undefined
                        : n.newOneoffEndTime) != null
                      ? t
                      : 0,
                  ),
                }),
                price: i.jsx(V, {
                  text: T,
                }),
              },
              "Your {string0} subscription will renew at {price} per year on {string1}. You can cancel the auto-renewal at any time.",
            );
          }
          if (subscribeCycle === 3) {
            return M.Ay.t(
              "web_dre_m10n_subscription_page_change_plan_popup_key17",
              {
                string0: i.jsx(V, {
                  text: K({
                    level,
                    cycleUnit,
                    subscribeCycle,
                    separator: "-",
                  }),
                }),
                string1: i.jsx(V, {
                  text: k(
                    (a =
                      preCreateRes == null ||
                      (s = preCreateRes.upcomingVipInfo) == null
                        ? undefined
                        : s.newOneoffEndTime) != null
                      ? a
                      : 0,
                  ),
                }),
                price: i.jsx(V, {
                  text: T,
                }),
              },
              "Your {string0} subscription will renew at {price} per quater on {string1}. You can cancel the auto-renewal at any time.",
            );
          }
          return M.Ay.t(
            "web_dre_m10n_subscription_page_change_plan_popup_key8",
            {
              string0: i.jsx(V, {
                text: K({
                  level,
                  cycleUnit,
                  subscribeCycle,
                  separator: "-",
                }),
              }),
              string1: i.jsx(V, {
                text: k(
                  (o =
                    preCreateRes == null ||
                    (c = preCreateRes.upcomingVipInfo) == null
                      ? undefined
                      : c.newOneoffEndTime) != null
                    ? o
                    : 0,
                ),
              }),
              price: i.jsx(V, {
                text: T,
              }),
            },
            "Your {string0} subscription will renew at {price} per month on {string1}. You can cancel the auto-renewal at any time.",
          );
        case "RenewDowngrade":
        case "RenewLateral":
          return;
        case "CancelRenew":
          return M.Ay.t(
            "web_dre_m10n_subscription_page_change_plan_popup_key16",
            {
              number0: i.jsx(V, {
                text: "".concat(
                  (l =
                    j == null || (d = j.vipBenefitPackage) == null
                      ? undefined
                      : d.userCredit.amount) != null
                    ? l
                    : 0,
                ),
              }),
            },
            "You won't get {number0} subscription credits every month and can't access subscriber-only features.",
          );
        case "UpgradeOneOff":
          if (w) {
            if (subscribeCycle === 12) {
              return M.Ay.t(
                "web_dre_m10n_subscription_page_change_plan_popup_key9",
                {
                  string0: i.jsx(V, {
                    text: K({
                      level: j == null ? undefined : j.level,
                      cycleUnit: j == null ? undefined : j.cycleUnit,
                      subscribeCycle: j == null ? undefined : j.subscribeCycle,
                      separator: "-",
                    }),
                  }),
                  string1: i.jsx(V, {
                    text: k(
                      (u =
                        (p = preCreateRes.upcomingVipInfo) == null
                          ? undefined
                          : p.curAutoRenewNextBillingTime) != null
                        ? u
                        : 0,
                    ),
                  }),
                  price: i.jsx(V, {
                    text: E,
                  }),
                },
                "Your {string0} subscription will renew at {price} per year on {string1}. You can cancel the auto-renewal at any time.",
              );
            }
            if (subscribeCycle === 3) {
              return M.Ay.t(
                "web_dre_m10n_subscription_page_change_plan_popup_key17",
                {
                  string0: i.jsx(V, {
                    text: K({
                      level: j == null ? undefined : j.level,
                      cycleUnit: j == null ? undefined : j.cycleUnit,
                      subscribeCycle: j == null ? undefined : j.subscribeCycle,
                      separator: "-",
                    }),
                  }),
                  string1: i.jsx(V, {
                    text: k(
                      (m =
                        (h = preCreateRes.upcomingVipInfo) == null
                          ? undefined
                          : h.curAutoRenewNextBillingTime) != null
                        ? m
                        : 0,
                    ),
                  }),
                  price: i.jsx(V, {
                    text: E,
                  }),
                },
                "Your {string0} subscription will renew at {price} per quater on {string1}. You can cancel the auto-renewal at any time.",
              );
            }
            return M.Ay.t(
              "web_dre_m10n_subscription_page_change_plan_popup_key8",
              {
                string0: i.jsx(V, {
                  text: K({
                    level: j == null ? undefined : j.level,
                    cycleUnit: j == null ? undefined : j.cycleUnit,
                    subscribeCycle: j == null ? undefined : j.subscribeCycle,
                    separator: "-",
                  }),
                }),
                string1: i.jsx(V, {
                  text: k(
                    (g =
                      (v = preCreateRes.upcomingVipInfo) == null
                        ? undefined
                        : v.curAutoRenewNextBillingTime) != null
                      ? g
                      : 0,
                  ),
                }),
                price: i.jsx(V, {
                  text: E,
                }),
              },
              "Your {string0} subscription will renew at {price} per month on {string1}. You can cancel the auto-renewal at any time.",
            );
          }
          return;
        case "LateralOneOff":
        case "DownGradeOneOff":
          return i.jsx(z, {
            onClick: onGetCreditsClick,
            enableStandaloneCreditsPackPurchaseModal:
              e.enableStandaloneCreditsPackPurchaseModal,
          });
      }
    })(e);
  }
  const E = K({
    level,
    cycleUnit,
    subscribeCycle,
    isOneoff: (T == null ? undefined : T.priceType) === "un-auto",
    levelTips: T == null ? undefined : T.levelTips,
  });
  const B = productList.find((e) => {
    var r;
    var t;
    if (currentSubscribedProductId) {
      return e.productId === currentSubscribedProductId;
    }
    return (
      e.level ===
        ((r = vipInfo.currentAutoRenewPlan) == null ? undefined : r.level) &&
      e.subscribeCycle ===
        ((t = vipInfo.currentAutoRenewPlan) == null ? undefined : t.cycle) &&
      e.priceType === "auto"
    );
  });
  const W =
    ((r = vipInfo.currentAutoRenewPlan) == null
      ? undefined
      : r.nextRenewalFee) ||
    ""
      .concat(B == null ? undefined : B.currencyTips)
      .concat(B == null ? undefined : B.priceTips);
  switch (k) {
    case "RenewUpgrade":
    case "RenewDiscountUpgrade":
    case "NotSubscribedRenewUpgrade":
    case "NotSubscribedRenewLateral":
    case "NotSubscribedRenewDowngrade":
      if (subscribeCycle === 12) {
        return M.Ay.t(
          "web_dre_m10n_subscription_page_change_plan_popup_key9",
          {
            string0: i.jsx(V, {
              text: E,
            }),
            string1: i.jsx(V, {
              text: C(
                (t =
                  preCreateRes == null ||
                  (n = preCreateRes.upcomingVipInfo) == null
                    ? undefined
                    : n.newOneoffEndTime) != null
                  ? t
                  : 0,
              ),
            }),
            price: i.jsx(V, {
              text: N,
            }),
          },
          "Your {string0} subscription will renew at {price} per year on {string1}. You can cancel the auto-renewal at any time.",
        );
      }
      if (subscribeCycle === 3) {
        return M.Ay.t(
          "dreamina_utra_page_change_plan_popup_key15",
          {
            string0: i.jsx(V, {
              text: E,
            }),
            string1: i.jsx(V, {
              text: C(
                (a =
                  preCreateRes == null ||
                  (s = preCreateRes.upcomingVipInfo) == null
                    ? undefined
                    : s.newOneoffEndTime) != null
                  ? a
                  : 0,
              ),
            }),
            price: i.jsx(V, {
              text: N,
            }),
          },
          "您的 {string0} 订阅将于 {string1} 自动续订，续费价格为每季 {price}，您可随时取消自动续费",
        );
      }
      return M.Ay.t(
        "web_dre_m10n_subscription_page_change_plan_popup_key8",
        {
          string0: i.jsx(V, {
            text: E,
          }),
          string1: i.jsx(V, {
            text: C(
              (o =
                preCreateRes == null ||
                (c = preCreateRes.upcomingVipInfo) == null
                  ? undefined
                  : c.newOneoffEndTime) != null
                ? o
                : 0,
            ),
          }),
          price: i.jsx(V, {
            text: N,
          }),
        },
        "Your {string0} subscription will renew at {price} per month on {string1}. You can cancel the auto-renewal at any time.",
      );
    case "RenewDowngrade":
    case "RenewLateral":
      return;
    case "CancelRenew":
      return M.Ay.t(
        "web_dre_m10n_subscription_page_change_plan_popup_key16",
        {
          number0: i.jsx(V, {
            text: "".concat(
              (l =
                B == null || (d = B.vipBenefitPackage) == null
                  ? undefined
                  : d.userCredit.amount) != null
                ? l
                : 0,
            ),
          }),
        },
        "You won't get {number0} subscription credits every month and can't access subscriber-only features.",
      );
    case "UpgradeOneOff":
      if (R) {
        if (subscribeCycle === 12) {
          return M.Ay.t(
            "web_dre_m10n_subscription_page_change_plan_popup_key9",
            {
              string0: i.jsx(V, {
                text: K({
                  level: B == null ? undefined : B.level,
                  cycleUnit: B == null ? undefined : B.cycleUnit,
                  subscribeCycle: B == null ? undefined : B.subscribeCycle,
                  levelTips: B == null ? undefined : B.levelTips,
                }),
              }),
              string1: i.jsx(V, {
                text: C(
                  (u =
                    (p = preCreateRes.upcomingVipInfo) == null
                      ? undefined
                      : p.curAutoRenewNextBillingTime) != null
                    ? u
                    : 0,
                ),
              }),
              price: i.jsx(V, {
                text: W,
              }),
            },
            "Your {string0} subscription will renew at {price} per year on {string1}. You can cancel the auto-renewal at any time.",
          );
        }
        if (subscribeCycle === 3) {
          return M.Ay.t(
            "dreamina_utra_page_change_plan_popup_key15",
            {
              string0: i.jsx(V, {
                text: K({
                  level: B == null ? undefined : B.level,
                  cycleUnit: B == null ? undefined : B.cycleUnit,
                  subscribeCycle: B == null ? undefined : B.subscribeCycle,
                  levelTips: B == null ? undefined : B.levelTips,
                }),
              }),
              string1: i.jsx(V, {
                text: C(
                  (m =
                    (h = preCreateRes.upcomingVipInfo) == null
                      ? undefined
                      : h.curAutoRenewNextBillingTime) != null
                    ? m
                    : 0,
                ),
              }),
              price: i.jsx(V, {
                text: W,
              }),
            },
            "您的 {string0} 订阅将于 {string1} 自动续订，续费价格为每季 {price}，您可随时取消自动续费",
          );
        }
        return M.Ay.t(
          "web_dre_m10n_subscription_page_change_plan_popup_key8",
          {
            string0: i.jsx(V, {
              text: K({
                level: B == null ? undefined : B.level,
                cycleUnit: B == null ? undefined : B.cycleUnit,
                subscribeCycle: B == null ? undefined : B.subscribeCycle,
                levelTips: B == null ? undefined : B.levelTips,
              }),
            }),
            string1: i.jsx(V, {
              text: C(
                (g =
                  (v = preCreateRes.upcomingVipInfo) == null
                    ? undefined
                    : v.curAutoRenewNextBillingTime) != null
                  ? g
                  : 0,
              ),
            }),
            price: i.jsx(V, {
              text: W,
            }),
          },
          "Your {string0} subscription will renew at {price} per month on {string1}. You can cancel the auto-renewal at any time.",
        );
      }
      return;
    case "LateralOneOff":
    case "DownGradeOneOff":
      return i.jsx(z, {
        onClick: onGetCreditsClick,
        enableStandaloneCreditsPackPurchaseModal:
          e.enableStandaloneCreditsPackPurchaseModal,
      });
  }
};
const X = (e, r) => {
  if (r && (e == null ? undefined : e.includes(r))) {
    return e;
  }
  return [r, e].filter(Boolean).join("");
};
const useG = (e) => {
  var {
    onClose,
    onProgrammaticClose,
    forceTheme,
    enablePaymentRetention,
    enableStandaloneCreditsPackPurchaseModal,
    payManager,
    toProductId,
    currentSubscribedProductId,
    preCreateRes,
    mode,
    reportParam,
  } = e;
  var J = u.h(A._);
  var D = u.h(f.$);
  var z = u.h(k._);
  var G = u.h(C._l);
  var Y = u.h(y.o);
  var q = u.h(R.k);
  var [loading, setLoading] = x.useState(false);
  var { vipInfo, currentAutoRenewPlan } = w.F(J, (e) => ({
    vipInfo: e.vipInfo,
    currentAutoRenewPlan: e.currentAutoRenewPlan,
  }));
  var productList = w.F(D, (e) => e.vipPriceList);
  var { isOversea } = Y;
  var { source } = reportParam || {};
  var eo = x.useMemo(
    () => productList.find((e) => e.productId === toProductId),
    [productList, toProductId],
  );
  var ec = x.useMemo(() => T.L(eo), [eo]);
  var el = ((e) => {
    var { vipInfo, productList, toProductId } = e;
    var i = [];
    var a = Q(e);
    var s = productList.find((e) => e.productId === toProductId);
    var {
      currencyTips = "",
      priceTips = "",
      subscribeCycle,
      vipPriceTips = "",
      level,
      cycleUnit,
    } = s != null ? s : {};
    var h = _W(vipPriceTips, {
      symbol: "",
      precision: 2 * (vipPriceTips != null && !!vipPriceTips.includes(".")),
    }).format();
    var { isOversea } = e;
    if (a.includes("OneOff") || H.includes(a)) {
      i.push({
        title: undefined,
        desc: isOversea
          ? p.JI({
              level,
            })
          : K({
              level,
              cycleUnit,
              subscribeCycle,
              isOneoff: (s == null ? undefined : s.priceType) === "un-auto",
              levelTips: s == null ? undefined : s.levelTips,
            }),
        price: M.Ay.t(
          "web_dre_m10n_subscription_page_change_plan_popup_key13",
          {
            price: currencyTips + h,
          },
          "{price}/1-month",
        ),
        priceDesc: undefined,
      });
    } else {
      var v;
      var b;
      var _;
      var y;
      var f;
      var A;
      var x;
      var cycle;
      var nextRenewalFee;
      var k;
      var C;
      var hasValidPrice;
      var N;
      var S;
      var P;
      var j;
      cycle =
        (v =
          (x = vipInfo.currentAutoRenewPlan) == null ? undefined : x.cycle) !=
        null
          ? v
          : 0;
      nextRenewalFee =
        (b = x == null ? undefined : x.nextRenewalFee) != null ? b : "";
      hasValidPrice = (C = (k = _W(nextRenewalFee).value) > 0) && cycle > 0;
      S =
        (_ =
          (f = (N = C ? nextRenewalFee : "").match(/^[^\d\s.,-]+/)) == null
            ? undefined
            : f[0]) != null
          ? _
          : "";
      P =
        (y = (A = N.match(/[^\d\s.,-]+$/)) == null ? undefined : A[0]) != null
          ? y
          : "";
      j = (e) => {
        if (P) {
          return "".concat(e).concat(P);
        }
        return "".concat(S).concat(e);
      };
      var E = {
        cycle,
        level: x == null ? undefined : x.level,
        nextRenewalFee,
        monthlyPrice: hasValidPrice
          ? j(
              _W(k / cycle, {
                symbol: "",
                precision: 2,
              }).format(),
            )
          : "-",
        freePrice: j("0"),
        hasValidPrice,
      };
      i.push({
        title: M.Ay.t(
          "web_dre_m10n_subscription_page_change_plan_popup_key10",
          {
            string0: ""
              .concat(
                p.JI({
                  level: E.level,
                }),
              )
              .concat(
                vipInfo.curVipLevelTips
                  ? "-".concat(vipInfo.curVipLevelTips)
                  : "",
              ),
          },
          "From {string0}",
        ),
        desc: p.xg(E.cycle),
        price: M.Ay.t(
          "web_dre_m10n_subscription_page_change_plan_popup_key12",
          {
            price: E.monthlyPrice,
          },
          "{price}/year",
        ),
        priceDesc:
          E.hasValidPrice && E.cycle === 12
            ? M.Ay.t(
                "web_dre_m10n_subscription_page_change_plan_popup_key14",
                {
                  price: E.nextRenewalFee,
                },
                "{price}/year",
              )
            : E.hasValidPrice && E.cycle === 3
              ? M.Ay.t(
                  "dreamina_utra_page_change_plan_popup_key16",
                  {
                    price: E.nextRenewalFee,
                  },
                  "{price}/quarter",
                )
              : "",
      });
      i.push({
        title: M.Ay.t(
          "web_dre_m10n_subscription_page_change_plan_popup_key11",
          {
            string0:
              a === "CancelRenew"
                ? M.Ay.t("web_dre_m10n_subscription_plans_free", {}, "Free")
                : isOversea
                  ? p.JI({
                      level,
                    })
                  : ""
                      .concat(
                        p.JI({
                          level,
                        }),
                      )
                      .concat(
                        (s == null ? undefined : s.levelTips)
                          ? "-".concat(s.levelTips)
                          : "",
                      ),
          },
          "To {string0}",
        ),
        desc:
          a === "CancelRenew"
            ? M.Ay.t(
                "web_dre_m10n_subscription_page_staus_forever",
                {},
                "Forever",
              )
            : p.xg(subscribeCycle),
        price: M.Ay.t(
          "web_dre_m10n_subscription_page_change_plan_popup_key12",
          {
            price: a === "CancelRenew" ? E.freePrice : currencyTips + h,
          },
          "{price}/month",
        ),
        priceDesc:
          cycleUnit === "YEAR" && a !== "CancelRenew"
            ? M.Ay.t(
                "web_dre_m10n_subscription_page_change_plan_popup_key14",
                {
                  price: "".concat(currencyTips).concat(priceTips),
                },
                "{price}/year",
              )
            : subscribeCycle === 3 && a !== "CancelRenew"
              ? M.Ay.t(
                  "dreamina_utra_page_change_plan_popup_key16",
                  {
                    price: "".concat(currencyTips).concat(priceTips),
                  },
                  "{price}/quarter",
                )
              : "",
      });
    }
    return i;
  })({
    vipInfo,
    productList,
    toProductId,
    currentSubscribedProductId,
    isOversea,
  });
  var ed = () =>
    n._(function* () {
      let e;
      let r;
      let t;
      let n;
      let i;
      let o;
      let l;
      let u;
      const p =
        (e =
          (r =
            preCreateRes == null ||
            (l = preCreateRes.subscriptionChangeInfo) == null ||
            (o = l.paymentAmount) == null
              ? undefined
              : o.amountTips) != null
            ? r
            : eo == null
              ? undefined
              : eo.priceTips) != null
          ? e
          : "0";
      const m = N.X(
        (t = eo == null ? undefined : eo.currencyCode) != null ? t : "",
        (n = eo == null ? undefined : eo.currencyTips) != null ? n : "",
        (i =
          eo == null || (u = eo.lowPriceTrialInfo) == null
            ? undefined
            : u.trialPrice) != null
          ? i
          : 0,
        true,
      );
      yield p_2({
        containerService: z,
        forceTheme,
        enablePaymentRetention,
        price: ec ? m : p,
        payManager,
        productId: toProductId,
      });
      b.iw(z, {
        action: "get_payment_qr_code",
        source,
        toProductId,
      });
    })();
  x.useEffect(() => {
    b.iw(z, {
      action: "show",
      source,
      toProductId,
    });
  }, []);
  return i.jsxs("div", {
    className: "container-ccIOp0",
    children: [
      i.jsx("div", {
        className: "desc-NHCsDk",
        children: ((e, r) => {
          var t;
          var n;
          var a;
          var s;
          var { preCreateRes, vipInfo, productList, toProductId } = e;
          var u = productList.find((e) => e.productId === toProductId);
          var { level, cycleUnit, subscribeCycle } = u != null ? u : {};
          var v = Q(e);
          var b = (e) => _J(1000 * e).format("YYYY-MM-DD HH:mm");
          if (r) {
            return ((e) => {
              var r;
              var t;
              var n;
              var a;
              var s;
              var o;
              var c;
              var l;
              var d;
              var u;
              var p;
              var m;
              var h;
              var g;
              var v;
              var b;
              var { preCreateRes, vipInfo, productList, toProductId } = e;
              var x =
                !!(vipInfo == null
                  ? undefined
                  : vipInfo.currentAutoRenewPlan) &&
                (vipInfo == null || (r = vipInfo.currentAutoRenewPlan) == null
                  ? undefined
                  : r.level) === vipInfo.curVipLevel;
              var w = productList.find((e) => e.productId === toProductId);
              var { level, cycleUnit, subscribeCycle } = w != null ? w : {};
              var T = Q(
                I._(F._({}, e), {
                  isOversea: true,
                }),
              );
              var N = (e) => _J(1000 * e).format("YYYY-MM-DD HH:mm");
              switch (T) {
                case "NotSubscribedRenewUpgrade":
                  return i.jsx("div", {
                    children: M.Ay.t(
                      "web_dre_m10n_subscription_page_change_plan_popup_key1",
                      {
                        string0: i.jsx(V, {
                          text: K({
                            level,
                            cycleUnit,
                            subscribeCycle,
                            separator: "-",
                          }),
                        }),
                        string1: i.jsx(V, {
                          text: N(
                            (t =
                              preCreateRes == null ||
                              (n = preCreateRes.obtainedVipInfo) == null
                                ? undefined
                                : n.curLevelEndTime) != null
                              ? t
                              : 0,
                          ),
                        }),
                      },
                      "Your new {string0} subscription will start now. Credits left from the previous subscription will stay valid until {string1}. You can use the remaining subscription days after the new subscription ends.",
                    ),
                  });
                case "RenewUpgrade":
                case "RenewDiscountUpgrade":
                  return i.jsx("div", {
                    children: M.Ay.t(
                      "change_plan_desc_upgrade",
                      {
                        string0: i.jsx(V, {
                          text: K({
                            level,
                            cycleUnit,
                            subscribeCycle,
                            separator: "-",
                          }),
                        }),
                        string1: i.jsx(V, {
                          text: K({
                            level:
                              vipInfo == null ||
                              (a = vipInfo.currentAutoRenewPlan) == null
                                ? undefined
                                : a.level,
                            cycleUnit:
                              vipInfo == null ||
                              (s = vipInfo.currentAutoRenewPlan) == null
                                ? undefined
                                : s.cycleUnit,
                            subscribeCycle:
                              vipInfo == null ||
                              (o = vipInfo.currentAutoRenewPlan) == null
                                ? undefined
                                : o.cycle,
                            separator: "-",
                          }),
                        }),
                      },
                      "Your new {string0} subscription will start now. The previous {string1} subscription will be canceled. You can use the remaining subscription days after the new subscription ends.",
                    ),
                  });
                case "RenewDowngrade":
                case "RenewLateral":
                case "RenewSubchange":
                case "NotSubscribedRenewLateral":
                case "NotSubscribedRenewDowngrade":
                  return M.Ay.t(
                    "change_plan_desc_downgrade",
                    {
                      string0: i.jsx(V, {
                        text: K({
                          level,
                          cycleUnit,
                          subscribeCycle,
                          separator: "-",
                        }),
                      }),
                      string1: i.jsx(V, {
                        text: N(
                          (c =
                            preCreateRes == null ||
                            (l = preCreateRes.upcomingVipInfo) == null
                              ? undefined
                              : l.newProductBeginTime) != null
                            ? c
                            : 0,
                        ),
                      }),
                    },
                    "Your new {string0} subscription will start on {string1}.",
                  );
                case "CancelRenew":
                  return M.Ay.t(
                    "web_dre_m10n_subscription_page_change_plan_popup_key3",
                    {
                      string0: i.jsx(V, {
                        text: N(
                          (d =
                            preCreateRes == null ||
                            (u = preCreateRes.obtainedVipInfo) == null
                              ? undefined
                              : u.autoRenewEndTime) != null
                            ? d
                            : 0,
                        ),
                      }),
                    },
                    "Your subscription will end on {string0}.",
                  );
                case "UpgradeOneOff":
                  return i.jsx("div", {
                    children: M.Ay.t(
                      "web_dre_m10n_subscription_page_change_plan_popup_key1",
                      {
                        string0: i.jsx(V, {
                          text: K({
                            level,
                            cycleUnit,
                            isOneoff: true,
                            separator: "-",
                          }),
                        }),
                        string1: i.jsx(V, {
                          text: N(
                            (p =
                              preCreateRes == null ||
                              (m = preCreateRes.obtainedVipInfo) == null
                                ? undefined
                                : m.curLevelEndTime) != null
                              ? p
                              : 0,
                          ),
                        }),
                      },
                      "Your new {string0} subscription will start now. Credits left from the previous subscription will stay valid until {string1}. You can use the remaining subscription days after the new subscription ends.",
                    ),
                  });
                case "LateralOneOff":
                  if (x) {
                    return M.Ay.t(
                      "web_dre_m10n_subscription_page_change_plan_popup_key5",
                      {},
                      "Your new subscription will take effect after your current subscription ends.",
                    );
                  }
                  return M.Ay.t(
                    "web_dre_m10n_subscription_page_change_plan_popup_key6",
                    {
                      string0: i.jsx(V, {
                        text: K({
                          level,
                          cycleUnit,
                          isOneoff: true,
                          separator: "-",
                        }),
                      }),
                      string1: i.jsx(V, {
                        text: N(
                          (h =
                            preCreateRes == null ||
                            (g = preCreateRes.upcomingVipInfo) == null
                              ? undefined
                              : g.newOneoffEndTime) != null
                            ? h
                            : 0,
                        ),
                      }),
                    },
                    "Your {string0} subscription will be extended to {string1}.",
                  );
                case "DownGradeOneOff":
                  if (x) {
                    return M.Ay.t(
                      "web_dre_m10n_subscription_page_change_plan_popup_key5",
                      {},
                      "Your new subscription will take effect after your current subscription ends.",
                    );
                  }
                  return M.Ay.t(
                    "web_dre_m10n_subscription_page_change_plan_popup_key7",
                    {
                      string0: i.jsx(V, {
                        text: K({
                          level,
                          cycleUnit,
                          isOneoff: true,
                          separator: "-",
                        }),
                      }),
                      string1: i.jsx(V, {
                        text: N(
                          (v =
                            preCreateRes == null ||
                            (b = preCreateRes.upcomingVipInfo) == null
                              ? undefined
                              : b.newProductBeginTime) != null
                            ? v
                            : 0,
                        ),
                      }),
                    },
                    "Your {string0} subscription will take effect on {string1}.",
                  );
              }
            })(e);
          }
          var _ = K({
            level,
            cycleUnit,
            subscribeCycle,
            isOneoff: (u == null ? undefined : u.priceType) === "un-auto",
            levelTips: u == null ? undefined : u.levelTips,
          });
          var y = ((e, r) => {
            if (e.currentAutoRenewPlan) {
              var t = r.find((r) => {
                var t;
                var n;
                return (
                  r.level ===
                    ((t = e.currentAutoRenewPlan) == null
                      ? undefined
                      : t.level) &&
                  r.subscribeCycle ===
                    ((n = e.currentAutoRenewPlan) == null
                      ? undefined
                      : n.cycle) &&
                  r.priceType === "auto"
                );
              });
              return K({
                level: e.currentAutoRenewPlan.level,
                cycleUnit: e.currentAutoRenewPlan.cycleUnit,
                subscribeCycle: e.currentAutoRenewPlan.cycle,
                levelTips:
                  e.curVipLevelTips || (t == null ? undefined : t.levelTips),
              });
            }
            return K({
              level: e.curVipLevel,
              cycleUnit: e.cycleUnit,
              subscribeCycle: e.subscribeCycle,
              levelTips: e.curVipLevelTips,
            });
          })(vipInfo, productList);
          switch (v) {
            case "NotSubscribedRenewUpgrade":
              var f = p.JI({
                level: vipInfo.curVipLevel,
              });
              var A = vipInfo.curVipLevelTips
                ? "（".concat(vipInfo.curVipLevelTips, "）")
                : "";
              var x = "".concat(f).concat(A);
              var w = p.JI({
                level,
              });
              var R = (u == null ? undefined : u.levelTips)
                ? "（".concat(u.levelTips, "）")
                : "";
              var k = "".concat(w).concat(R);
              return i.jsxs("div", {
                children: [
                  M.Ay.t(
                    "dreamina_changeplan_popup_desc_add_autorenew_upgrade_web",
                    {
                      string1: i.jsx(V, {
                        text: x,
                      }),
                      string2: i.jsx(V, {
                        text: k,
                      }),
                      string3: i.jsx(V, {
                        text: _,
                      }),
                    },
                    "您正在从{string1}升级至{string2}，{string3}支付后立即生效。已购买的其他会员的剩余会员时长和积分将为您保留",
                  ),
                  i.jsx("a", {
                    style: {
                      marginLeft: "4px",
                    },
                    href: B.m(O.y.COMMERCIAL_AGREEMENT(false), null, {
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
                        "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-W1Je%1-%mFXRXBx$2xNNW$tTnR%WFpaTWpsMFkw-z$k$nB-TlRCam$%bHBaRmhP-0dKdFZuc*pl$*xxWWpJe*R*cFlTbXBo$jBaelR*aENhR1Z%T1dwa%1qRjNZakkx-kdKd$$ucE1Naz$2$1ZjMWJscFRNW*Rp%jBaM$RETldNR0Z-Z%hwTWJsSjZa$WRHZ$ZvelZubz0",
                    }),
                    target: "_blank",
                    rel: "noreferrer",
                    className,
                    children: M.Ay.t(
                      "web_dre_m10n_subscription_page_view_sub_rules",
                      {},
                      "View subscription rules",
                    ),
                  }),
                ],
              });
            case "RenewUpgrade":
            case "RenewDiscountUpgrade":
              return i.jsxs("div", {
                children: [
                  M.Ay.t(
                    "dreamina_changeplan_popup_desc_autorenew_upgrade_web",
                    {
                      string1: i.jsx(V, {
                        text: y,
                      }),
                      string2: i.jsx(V, {
                        text: _,
                      }),
                      string3: i.jsx(V, {
                        text: _,
                      }),
                      string4: i.jsx(V, {
                        text: y,
                      }),
                    },
                    "您正在从{string1}升级至{string2}，{string3}支付后立即生效。{string4}的剩余会员时长和积分将为您保留",
                  ),
                  i.jsx("a", {
                    style: {
                      marginLeft: "4px",
                    },
                    href: B.m(O.y.COMMERCIAL_AGREEMENT(false), null, {
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
                        "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-W1Je%1-%mFXRXBx$2xNNW$tTnR%WFpaTWpsMFkw-z$k$nB-TlRCam$%bHBaRmhP-0dKdFZuc*pl$*xxWWpJe*R*cFlTbXBo$jBaelR*aENhR1Z%T1dwa%1qRjNZakkx-kdKd$$ucE1Naz$2$1ZjMWJscFRNW*Rp%jBaM$RETldNR0Z-Z%hwTWJsSjZa$WRHZ$ZvelZubz0",
                    }),
                    target: "_blank",
                    rel: "noreferrer",
                    className,
                    children: M.Ay.t(
                      "web_dre_m10n_subscription_page_view_sub_rules",
                      {},
                      "View subscription rules",
                    ),
                  }),
                ],
              });
            case "NotSubscribedRenewLateral":
            case "NotSubscribedRenewDowngrade":
              return M.Ay.t(
                "dreamina_changeplan_popup_desc_add_autorenew_later_active_web",
                {
                  string1: i.jsx(V, {
                    text: _,
                  }),
                  string2: i.jsx(V, {
                    text: _,
                  }),
                },
                "您正在切换至{string1}，切换后{string2}将于其他已购买的高档位会员和同档位会员的服务期结束后开始生效，新积分将在新的订阅生效同时到账。急需可购买积分",
              );
            case "RenewDowngrade":
            case "RenewLateral":
            case "RenewSubchange":
              return M.Ay.t(
                "dreamina_changeplan_popup_desc_autorenew_later_active_web",
                {
                  string1: i.jsx(V, {
                    text: _,
                  }),
                  string2: i.jsx(V, {
                    text: y,
                  }),
                  string3: i.jsx(V, {
                    text: _,
                  }),
                  string4: i.jsx(V, {
                    text: b(
                      (t =
                        preCreateRes == null ||
                        (n = preCreateRes.upcomingVipInfo) == null
                          ? undefined
                          : n.newProductBeginTime) != null
                        ? t
                        : 0,
                    ),
                  }),
                },
                "您正在切换至{string1}，切换后{string2}的剩余会员时长和积分将为您保留，{string3}将于{string4}开始生效，新积分将在新的订阅生效同时到账。急需可购买积分",
              );
            case "CancelRenew":
              return M.Ay.t(
                "web_dre_m10n_subscription_page_change_plan_popup_key3",
                {
                  string0: i.jsx(V, {
                    text: b(
                      (a =
                        preCreateRes == null ||
                        (s = preCreateRes.obtainedVipInfo) == null
                          ? undefined
                          : s.autoRenewEndTime) != null
                        ? a
                        : 0,
                    ),
                  }),
                },
                "Your subscription will end on {string0}.",
              );
            case "UpgradeOneOff":
              return i.jsxs("div", {
                children: [
                  M.Ay.t(
                    "dreamina_changeplan_popup_desc_oneoff_upgrade_web",
                    {
                      string1: i.jsx(V, {
                        text: _,
                      }),
                      string2: i.jsx(V, {
                        text: _,
                      }),
                    },
                    "您正在购买{string1}，{string2}支付后立即生效。已购买的其他会员的剩余会员时长和积分将为您保留",
                  ),
                  i.jsx("a", {
                    style: {
                      marginLeft: "4px",
                    },
                    href: B.m(O.y.COMMERCIAL_AGREEMENT(false), null, {
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
                        "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-W1Je%1-%mFXRXBx$2xNNW$tTnR%WFpaTWpsMFkw-z$k$nB-TlRCam$%bHBaRmhP-0dKdFZuc*pl$*xxWWpJe*R*cFlTbXBo$jBaelR*aENhR1Z%T1dwa%1qRjNZakkx-kdKd$$ucE1Naz$2$1ZjMWJscFRNW*Rp%jBaM$RETldNR0Z-Z%hwTWJsSjZa$WRHZ$ZvelZubz0",
                    }),
                    target: "_blank",
                    rel: "noreferrer",
                    className,
                    children: M.Ay.t(
                      "web_dre_m10n_subscription_page_view_sub_rules",
                      {},
                      "View subscription rules",
                    ),
                  }),
                ],
              });
            case "LateralOneOff":
            case "DownGradeOneOff":
              return M.Ay.t(
                "dreamina_changeplan_popup_desc_oneoff_later_active_web",
                {
                  string1: i.jsx(V, {
                    text: _,
                  }),
                  string2: i.jsx(V, {
                    text: _,
                  }),
                },
                "您正在购买{string1}，{string2}将于其他已购买的高档位会员和同档位会员的服务期结束后开始生效，新积分将在新的订阅生效同时到账。急需可购买积分",
              );
          }
        })(
          {
            vipInfo,
            productList,
            preCreateRes,
            toProductId,
          },
          isOversea,
        ),
      }),
      i.jsx("div", {
        className: "changeDetails-KRQabV",
        children: el.map((e, r) =>
          i.jsxs(i.Fragment, {
            children: [
              r !== 0 &&
                i.jsx("div", {
                  className: "splitLine-a6bTMD",
                }),
              i.jsxs("div", {
                className: "changeItem-IGKyvT",
                children: [
                  e.title &&
                    i.jsx("div", {
                      className: "changeTitle-i5Wk47",
                      children: e.title,
                    }),
                  i.jsxs("div", {
                    className: "changePlanContainer-tDpwc9",
                    children: [
                      i.jsx("div", {
                        className: "changePlanText-DTvgiu",
                        children: e.desc,
                      }),
                      i.jsxs("div", {
                        className: "changePlanPriceContainer-ge9fZE",
                        children: [
                          i.jsx("div", {
                            className: "changePlanPrice-BIlhHq",
                            children: e.price,
                          }),
                          e.priceDesc &&
                            i.jsx("div", {
                              className: "changePlanDesc-AB1IvL",
                              children: e.priceDesc,
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ),
      }),
      i.jsx(I_1, {
        PrevDiv: ((e, r) => {
          var t;
          var n;
          var a;
          var { productList, toProductId, preCreateRes } = e;
          var l = Q(e);
          if (r) {
            return ((e) => {
              var r;
              var t;
              var n;
              var { productList, toProductId, preCreateRes } = e;
              var c = Q(
                I._(F._({}, e), {
                  isOversea: true,
                }),
              );
              var l = productList.find((e) => e.productId === toProductId);
              var d = T.L(l);
              var u = l == null ? undefined : l.currencyTips;
              var p = l == null ? undefined : l.currencyCode;
              var m =
                preCreateRes == null
                  ? undefined
                  : preCreateRes.subscriptionChangeInfo;
              var h =
                m == null || (t = m.paymentAmount) == null
                  ? undefined
                  : t.amountTips;
              var g = l == null ? undefined : l.priceTips;
              var v = X(h || g, u);
              var b = N.X(
                p != null ? p : "",
                u != null ? u : "",
                (r =
                  l == null || (n = l.lowPriceTrialInfo) == null
                    ? undefined
                    : n.trialPrice) != null
                  ? r
                  : 0,
              );
              var _ = d ? b : v;
              var y = N.X(
                p != null ? p : "",
                u != null ? u : "",
                l == null ? undefined : l.normalAmount,
              );
              switch (c) {
                case "RenewLateral":
                case "RenewDowngrade":
                case "CancelRenew":
                case "RenewSubchange":
                  return i.jsxs("div", {
                    children: [
                      M.Ay.t(
                        "web_dre_m10n_subscription_page_change_plan_btn_key3",
                        {},
                        "Change Plan",
                      ),
                      " ",
                    ],
                  });
                case "LateralOneOff":
                case "UpgradeOneOff":
                case "DownGradeOneOff":
                case "RenewUpgrade":
                case "NotSubscribedRenewUpgrade":
                case "NotSubscribedRenewLateral":
                case "NotSubscribedRenewDowngrade":
                  return i.jsx("div", {
                    children: M.Ay.t(
                      "web_dre_m10n_subscription_page_change_plan_btn_key1",
                      {
                        price: _,
                      },
                      "Pay {price}",
                    ),
                  });
                case "RenewDiscountUpgrade":
                  return i.jsx("div", {
                    children: M.Ay.t(
                      "web_dre_m10n_subscription_page_change_plan_btn_key1",
                      {
                        price: i.jsxs(i.Fragment, {
                          children: [
                            _,
                            _.includes(y)
                              ? null
                              : i.jsx("span", {
                                  style: {
                                    textDecorationLine: "line-through",
                                    color: "rgba(59, 69, 89, 0.50)",
                                    marginLeft: "4px",
                                  },
                                  children: y,
                                }),
                          ],
                        }),
                      },
                      "Pay {price}",
                    ),
                  });
                default:
                  return;
              }
            })(e);
          }
          var d = productList.find((e) => e.productId === toProductId);
          var u = T.L(d);
          var p = d == null ? undefined : d.currencyTips;
          var m = d == null ? undefined : d.currencyCode;
          var h =
            preCreateRes == null
              ? undefined
              : preCreateRes.subscriptionChangeInfo;
          var g =
            h == null || (n = h.paymentAmount) == null
              ? undefined
              : n.amountTips;
          var v = d == null ? undefined : d.priceTips;
          var b = X(g || v, p);
          var _ = N.X(
            m != null ? m : "",
            p != null ? p : "",
            (t =
              d == null || (a = d.lowPriceTrialInfo) == null
                ? undefined
                : a.trialPrice) != null
              ? t
              : 0,
          );
          var y = u ? _ : b;
          var f = N.X(
            m != null ? m : "",
            p != null ? p : "",
            d == null ? undefined : d.normalAmount,
          );
          switch (l) {
            case "RenewLateral":
            case "RenewDowngrade":
            case "CancelRenew":
            case "RenewSubchange":
              return i.jsxs("div", {
                children: [
                  M.Ay.t(
                    "web_dre_m10n_subscription_page_change_plan_btn_key3",
                    {},
                    "Change Plan",
                  ),
                  " ",
                ],
              });
            case "RenewDiscountUpgrade":
              return i.jsx("div", {
                children: M.Ay.t(
                  "web_dre_m10n_subscription_page_change_plan_btn_key1",
                  {
                    price: i.jsxs(i.Fragment, {
                      children: [
                        y,
                        y.includes(f)
                          ? null
                          : i.jsx("span", {
                              style: {
                                textDecorationLine: "line-through",
                                color: "rgba(59, 69, 89, 0.50)",
                                marginLeft: "4px",
                              },
                              children: f,
                            }),
                      ],
                    }),
                  },
                  "Pay {price}",
                ),
              });
            case "RenewUpgrade":
            case "UpgradeOneOff":
            case "LateralOneOff":
            case "DownGradeOneOff":
            case "NotSubscribedRenewUpgrade":
            case "NotSubscribedRenewLateral":
            case "NotSubscribedRenewDowngrade":
              return i.jsx("div", {
                children: M.Ay.t(
                  "web_dre_m10n_subscription_page_change_plan_btn_key1",
                  {
                    price: y,
                  },
                  "Pay {price}",
                ),
              });
            default:
              return;
          }
        })(
          {
            vipInfo,
            productList,
            preCreateRes,
            toProductId,
          },
          isOversea,
        ),
        loading,
        onClick: () =>
          n._(function* () {
            _.ex(z, {
              action: _.zT(mode),
              changeType: _.HG(mode),
              currentPlan: _.P8(vipInfo),
              changePlan: _.ML(eo),
              userSubscribeType: _.st(vipInfo),
              currentPage: _.PC,
            });
            setLoading(true);
            let e = true;
            const n = l.p3();
            if (
              ["RenewLateral", "RenewDowngrade", "CancelRenew"].includes(mode)
            ) {
              if (mode === "CancelRenew") {
                b.iw(z, {
                  action: "cancel_subscribe",
                  source,
                  toProductId,
                });
                i = isOversea
                  ? yield G.cancelSubscriptionV3({
                      appId: q.appId,
                      subscribeId:
                        (a =
                          currentAutoRenewPlan == null
                            ? undefined
                            : currentAutoRenewPlan.subscribeId) != null
                          ? a
                          : "",
                    })
                  : yield G.cancelAutoVipOrder({
                      aid: q.appId,
                      subscribeId:
                        (s =
                          currentAutoRenewPlan == null
                            ? undefined
                            : currentAutoRenewPlan.subscribeId) != null
                          ? s
                          : "",
                    });
                yield h.ev(z, true);
                if (i.ok) {
                  p_1.success(
                    M.Ay.t(
                      "web_dre_m10n_management_page_auto_renew_cancel_success",
                      {},
                      "Cancel auto renew successfully!",
                    ),
                  );
                  b.iw(z, {
                    action: "success",
                    source,
                    toProductId,
                  });
                } else {
                  e = false;
                  if (Number(i.code) === 34010424) {
                    w_1.confirm({
                      icon: null,
                      title: M.Ay.t(
                        "web_dre_m10n_management_page_auto_renew_cancel_fail_title",
                        {},
                        "温馨提示",
                      ),
                      content:
                        (currentAutoRenewPlan == null
                          ? undefined
                          : currentAutoRenewPlan.payChannel) === "WX"
                          ? M.Ay.t(
                              "web_dre_m10n_management_page_auto_renew_cancel_fail_wechat",
                              {},
                              "本次自动续费取消失败，请打开微信App，点击我 - 服务 - 钱包 - 支付设置 - 自动续费 - 选择【即梦会员自动续费】进行解约操作",
                            )
                          : M.Ay.t(
                              "web_dre_m10n_management_page_auto_renew_cancel_fail_alipay",
                              {},
                              "本次自动续费取消失败，请打开支付宝App ，点击我的 - 设置 - 支付设置 - 免密支付/自动扣款 - 选择【即梦会员服务】进行解约操作",
                            ),
                      okText: M.Ay.t(
                        "web_dre_m10n_management_page_auto_renew_cancel_fail_button",
                        {},
                        "我知道了",
                      ),
                      footer: (e, r) => r,
                    });
                  } else if (Number(i.code) === 700206002) {
                    p_1.error(
                      M.Ay.t(
                        "dre_app_subtoast_appstore",
                        {},
                        "You already have an active subscription on your iOS device. Cancel the subscription in the App Store first to avoid being charged twice.",
                      ),
                    );
                  } else {
                    p_1.error(
                      M.Ay.t(
                        "web_dre_m10n_management_page_auto_renew_cancel_fail_toast",
                        {},
                        "Something went wrong. Try again later.",
                      ),
                    );
                  }
                  b.iw(z, {
                    action: "failed",
                    source,
                    toProductId,
                  });
                }
              } else {
                b.iw(z, {
                  action: "change_subscribe",
                  source,
                  toProductId,
                });
                var i;
                var a;
                var s;
                let o;
                let u;
                const p = yield payManager == null
                  ? undefined
                  : payManager.switchPlan(n);
                yield h.ev(z, true);
                if (p == null ? undefined : p.ok) {
                  if (
                    p != null &&
                    p.value &&
                    "pipoAggregatePayInfo" in p.value &&
                    (p == null ||
                    (u = p.value) == null ||
                    (o = u.pipoAggregatePayInfo) == null
                      ? undefined
                      : o.cashierUrl)
                  ) {
                    yield ed();
                  } else {
                    p_1.success(
                      M.Ay.t(
                        "web_dre_m10n_management_page_plan_change_success",
                        {},
                        "Subscription plan changed",
                      ),
                    );
                    b.iw(z, {
                      action: "success",
                      source,
                      toProductId,
                    });
                  }
                } else {
                  e = false;
                  p_1.error(
                    M.Ay.t(
                      "web_dre_m10n_management_page_auto_renew_cancel_fail_toast",
                      {},
                      "Something went wrong. Try again later.",
                    ),
                  );
                  b.iw(z, {
                    action: "failed",
                    source,
                    toProductId,
                  });
                }
              }
            } else {
              yield ed();
            }
            if (e) {
              onProgrammaticClose();
              onClose();
            }
            setLoading(false);
          })(),
        className: "changeBtn-BMxQij",
      }),
      i.jsx("div", {
        className: "autoRenewDesc-xOp_bt",
        children: U(
          {
            vipInfo,
            productList,
            preCreateRes,
            toProductId,
            onGetCreditsClick: () => {
              b.iw(z, {
                action: "click_getcredits",
                source,
                toProductId,
              });
            },
            enableStandaloneCreditsPackPurchaseModal,
            currentSubscribedProductId,
          },
          isOversea,
        ),
      }),
    ],
  });
};
var Y = (e) =>
  n._(function* () {
    const {
      containerService,
      forceTheme,
      enablePaymentRetention,
      isPresentationActive,
      enableStandaloneCreditsPackPurchaseModal,
      toProductId,
      payManager,
      preCreateRes,
      reportParam,
      currentSubscribedProductId,
    } = e;
    const { source } = reportParam || {};
    const S = l.p3();
    const P = d.cQ(containerService, A._);
    const j = d.cQ(containerService, f.$);
    const { isOversea } = d.cQ(containerService, y.o);
    const F = g.c(containerService, m.u.VIP_MODAL);
    yield h.ev(containerService, true);
    if (
      (isPresentationActive == null ? undefined : isPresentationActive()) !==
      false
    ) {
      const { vipInfo } = P;
      const { vipPriceList } = j;
      if (vipInfo) {
        let W;
        let level;
        let J;
        let Z;
        const O = vipPriceList.find((e) => e.productId === toProductId);
        if (payManager != null) {
          payManager.setCurrentProduct(
            S,
            toProductId != null ? toProductId : "",
            false,
          );
        }
        const mode = Q({
          vipInfo,
          productList: vipPriceList,
          toProductId,
          isOversea,
        });
        const L = isOversea
          ? undefined
          : (() => {
              if (!O) {
                return "";
              }
              var e = p.JI({
                level: O.level,
              });
              var r = p.xg(O.subscribeCycle, O.priceType === "un-auto");
              var t = O.levelTips ? "（".concat(O.levelTips, "）") : "";
              return "".concat(e).concat(t).concat(r);
            })();
        let z = false;
        let V = null;
        const H = () => {
          b.iw(containerService, {
            action: "close",
            source,
            toProductId,
          });
          if (!z) {
            _.ex(containerService, {
              action: "cancel",
              changeType: _.HG(mode),
              currentPlan: _.P8(vipInfo),
              changePlan: _.ML(O),
              userSubscribeType: _.st(vipInfo),
              currentPage: _.PC,
            });
          }
          if (V != null) {
            V.close();
          }
        };
        if (F != null) {
          F.onUnmount(() => {
            H();
          });
        }
        V = a.A.confirm({
          wrapClassName: _o(
            "changePlanModal-p8KYFK",
            "commerceModal-muhuQG",
            forceTheme === "light" && "lv-theme-force_light",
            forceTheme === "light" && "standaloneLightTheme-ewozRg",
            forceTheme === "dark" && "lv-theme-force_dark",
            forceTheme === "dark" && "standaloneDarkTheme-GEgtw1",
          ),
          title:
            ((W = mode),
            (level = O == null ? undefined : O.level),
            (J = L),
            (Z = isOversea),
            W === "CancelRenew"
              ? M.Ay.t(
                  "web_dre_m10n_subscription_page_change_plan_popup_title2",
                  {},
                  "Cancel renew",
                )
              : ["UpgradeOneOff", "LateralOneOff", "DownGradeOneOff"].includes(
                    W,
                  )
                ? Z
                  ? M.Ay.t(
                      "web_dre_m10n_subscription_page_change_plan_popup_title3",
                      {
                        string0: p.JI({
                          level,
                        }),
                      },
                      "Purchase {string0} for 1 month",
                    )
                  : M.Ay.t(
                      "dreamina_changeplan_popup_title_add_oneoff_web",
                      {
                        string1: J != null ? J : "",
                      },
                      "加购{string1}",
                    )
                : M.Ay.t(
                    "web_dre_m10n_subscription_page_change_plan_popup_title1",
                    {},
                    "Renew update",
                  )),
          footer: null,
          simple: false,
          escToExit: true,
          icon: null,
          closeIcon: i.jsx(s.CX2, {
            className: "closeBtn-nO5_eg",
          }),
          closable: true,
          maskClosable: true,
          onCancel: H,
          maskStyle: v.S(8),
          content: i.jsx(u.Z, {
            instantiationService: containerService,
            children: i.jsx(useG, {
              forceTheme,
              enablePaymentRetention,
              enableStandaloneCreditsPackPurchaseModal,
              payManager,
              toProductId,
              preCreateRes,
              mode,
              currentSubscribedProductId,
              onClose: H,
              onProgrammaticClose: () => {
                z = true;
              },
              reportParam,
            }),
          }),
        });
        _.ex(containerService, {
          action: "show",
          changeType: _.HG(mode),
          currentPlan: _.P8(vipInfo),
          changePlan: _.ML(O),
          userSubscribeType: _.st(vipInfo),
          currentPage: _.PC,
        });
      }
    }
  })();
export { Y as X };
