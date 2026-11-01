import i from "z8";
import "siR";
import n from "F6v";
import a from "bT";
import _o from "xb";
import c from "A6R";
import l from "SI";
import d from "hr";
import u from "MK";
import { A } from "./module-ATq.js";
function m(e) {
  return e.toLocaleString();
}
function h(e) {
  return [...(e != null ? e : [])].sort(
    (e, t) => e.creditsLifeEnd - t.creditsLifeEnd,
  );
}
const v = (e) => {
  var { children, forceTheme, info } = e;
  if (info.hasDetail) {
    return i.jsx(n.A, {
      className: _o(
        A.creditInfoDetailPopover,
        forceTheme === "light" && "lv-theme-force_light",
        forceTheme === "light" && A.standaloneLightTheme,
        forceTheme === "dark" && "lv-theme-force_dark",
        forceTheme === "dark" && A.standaloneDarkTheme,
      ),
      trigger: "hover",
      position: "bottom",
      content: i.jsxs("div", {
        className: A.detailPopoverContent,
        children: [
          i.jsx("div", {
            className: A.title,
            children: info.title,
          }),
          i.jsx("div", {
            className: A.scrollView,
            children: i.jsx("div", {
              className: A.detailList,
              children: (info.detailList || []).map((e, t) => {
                var r;
                return i.jsxs(
                  "div",
                  {
                    className: A.detailItem,
                    children: [
                      "vipLevel" in e &&
                        i.jsxs("div", {
                          className: A.detailItemInfo,
                          children: [
                            i.jsx("div", {
                              className: A.detailItemInfoTitle,
                              children: u.Ay.t(
                                "web_dre_m10n_credits_detail_info1",
                                {},
                                "Plan",
                              ),
                            }),
                            i.jsx("div", {
                              className: A.detailItemInfoValue,
                              children: l.JI({
                                level: (r = e.vipLevel) != null ? r : "",
                              }),
                            }),
                          ],
                        }),
                      i.jsxs("div", {
                        className: A.detailItemInfo,
                        children: [
                          i.jsx("div", {
                            className: A.detailItemInfoTitle,
                            children: u.Ay.t(
                              "web_dre_m10n_credits_detail_info2",
                              {},
                              "Residual credits",
                            ),
                          }),
                          i.jsx("div", {
                            className: A.detailItemInfoValue,
                            children: e.residualCredits,
                          }),
                        ],
                      }),
                      i.jsxs("div", {
                        className: A.detailItemInfo,
                        children: [
                          i.jsx("div", {
                            className: A.detailItemInfoTitle,
                            children: u.Ay.t(
                              "web_dre_m10n_credits_detail_info3",
                              {},
                              "Credits ends",
                            ),
                          }),
                          i.jsx("div", {
                            className: A.detailItemInfoValue,
                            children: d.i(
                              "yyyy-MM-dd hh:mm",
                              1000 * e.creditsLifeEnd,
                            ),
                          }),
                        ],
                      }),
                    ],
                  },
                  t,
                );
              }),
            }),
          }),
        ],
      }),
      triggerProps: {
        showArrow: false,
      },
      getPopupContainer: () => document.body,
      children,
    });
  }
  return children;
};
export var U = a.memo(
  a.forwardRef((e, t) => {
    var { creditInfo, creditsDetail, className, forceTheme } = e;
    var {
      vipCredit = 0,
      purchaseCredit = 0,
      giftCredit = 0,
    } = creditInfo != null ? creditInfo : {};
    var y = [
      {
        key: "vipCredits",
        title: u.Ay.t("dre_m10n_credits_sub", {}, "会员积分"),
        amount: Math.max(vipCredit, 0),
        colorClassName: A.vipCreditColor,
        hasDetail: !!(
          (creditsDetail == null ? undefined : creditsDetail.vipCredits) || []
        ).length,
        detailList: h(
          creditsDetail == null ? undefined : creditsDetail.vipCredits,
        ),
      },
      {
        key: "purchaseCredits",
        title: u.Ay.t("dre_m10n_credits_purchased", {}, "充值积分"),
        amount: Math.max(purchaseCredit, 0),
        colorClassName: A.purchaseCreditColor,
        hasDetail: !!(
          (creditsDetail == null ? undefined : creditsDetail.purchaseCredits) ||
          []
        ).length,
        detailList: h(
          creditsDetail == null ? undefined : creditsDetail.purchaseCredits,
        ),
      },
      {
        key: "giftCredits",
        title: u.Ay.t("dre_m10n_credits_bonus", {}, "赠送积分"),
        amount: Math.max(giftCredit, 0),
        colorClassName: A.giftCreditColor,
        hasDetail: !!(
          (creditsDetail == null ? undefined : creditsDetail.giftCredits) || []
        ).length,
        detailList: h(
          creditsDetail == null ? undefined : creditsDetail.giftCredits,
        ),
      },
    ];
    var g = y.reduce((acc, item) => acc + item.amount, 0);
    return i.jsxs("div", {
      className: _o(A.segmentedCreditSummary, className),
      ref: t,
      children: [
        i.jsx("div", {
          className: A.balanceLabel,
          children: u.Ay.t("dre_m10n_credits_balance", {}, "积分余额"),
        }),
        i.jsx("div", {
          className: A.balanceAmount,
          children: m(g),
        }),
        i.jsx("div", {
          className: A.creditSegments,
          children: y
            .filter((e) => e.amount > 0)
            .map((e) =>
              i.jsx(
                "div",
                {
                  className: _o(A.creditSegment, e.colorClassName),
                  style: {
                    flexGrow: e.amount,
                  },
                },
                e.key,
              ),
            ),
        }),
        i.jsx("div", {
          className: A.creditLegend,
          children: y.map((e) =>
            i.jsx(
              v,
              {
                forceTheme,
                info: e,
                children: i.jsxs("div", {
                  className: _o(A.creditLegendItem, {
                    [A.withCreditDetail]: e.hasDetail,
                  }),
                  children: [
                    i.jsx("span", {
                      className: _o(A.creditLegendMark, e.colorClassName),
                    }),
                    i.jsx("span", {
                      className: A.creditLegendTitle,
                      children: e.title,
                    }),
                    i.jsx("span", {
                      className: A.creditLegendAmount,
                      children: m(e.amount),
                    }),
                    e.hasDetail &&
                      i.jsx(c.HNP, {
                        className: A.creditLegendDetailIcon,
                      }),
                  ],
                }),
              },
              e.key,
            ),
          ),
        }),
      ],
    });
  }),
);
U.displayName = "SegmentedCreditHistorySummary";
export var g = a.memo(
  a.forwardRef((e, t) => {
    var {
      creditInfo,
      creditsDetail,
      className,
      forceTheme,
      title,
      purchaseCreditTitle,
    } = e;
    var { vipCredit, purchaseCredit, giftCredit } =
      creditInfo != null ? creditInfo : {};
    var b = a.useMemo(
      () => [
        {
          key: "vipCredits",
          creditAmount: vipCredit || "0",
          title: u.Ay.t("dre_m10n_credits_sub", {}, "Subscription credits"),
          hasDetail: !!(
            (creditsDetail == null ? undefined : creditsDetail.vipCredits) || []
          ).length,
          detailList: h(
            creditsDetail == null ? undefined : creditsDetail.vipCredits,
          ),
        },
        {
          key: "purchaseCredits",
          creditAmount: purchaseCredit || "0",
          title:
            purchaseCreditTitle != null
              ? purchaseCreditTitle
              : u.Ay.t("dre_m10n_credits_purchased", {}, "Purchased credits"),
          hasDetail: !!(
            (creditsDetail == null
              ? undefined
              : creditsDetail.purchaseCredits) || []
          ).length,
          detailList: h(
            creditsDetail == null ? undefined : creditsDetail.purchaseCredits,
          ),
        },
        {
          key: "giftCredits",
          creditAmount: giftCredit || "0",
          title: u.Ay.t("dre_m10n_credits_bonus", {}, "Bonus credits"),
          hasDetail: !!(
            (creditsDetail == null ? undefined : creditsDetail.giftCredits) ||
            []
          ).length,
          detailList: h(
            creditsDetail == null ? undefined : creditsDetail.giftCredits,
          ),
        },
      ],
      [
        creditsDetail,
        giftCredit,
        purchaseCredit,
        purchaseCreditTitle,
        vipCredit,
      ],
    );
    var f = a.useMemo(
      () => ({
        key: "allCredit",
        creditAmount:
          (vipCredit || 0) + (purchaseCredit || 0) + (giftCredit || 0) || "0",
        title:
          title != null
            ? title
            : u.Ay.t("web_dre_m10n_credits_detail", {}, "Residual credits"),
        hasDetail: false,
      }),
      [giftCredit, purchaseCredit, title, vipCredit],
    );
    var x = (e) =>
      i.jsxs(
        "div",
        {
          className: A.creditInfoItem,
          children: [
            i.jsx("div", {
              className: A.creditInfoItemTitle,
              children: e.title,
            }),
            i.jsxs("div", {
              className: A.creditInfoItemAmount,
              children: [
                i.jsx("div", {
                  className: A.creditInfoItemNum,
                  children: e.creditAmount,
                }),
                e.hasDetail &&
                  i.jsx(v, {
                    forceTheme,
                    info: e,
                    children: i.jsx(c.HNP, {
                      className: A.creditInfoItemDetailIcon,
                    }),
                  }),
              ],
            }),
          ],
        },
        e.key,
      );
    var P = (children) =>
      i.jsxs("div", {
        className: A.creditCalcSymbolWrapper,
        children: [
          i.jsx("div", {
            className: A.creditCalcSymbolLeft,
          }),
          i.jsx("div", {
            className: A.creditCalcSymbol,
            children,
          }),
          i.jsx("div", {
            className: A.creditCalcSymbolRight,
          }),
        ],
      });
    return i.jsxs("div", {
      className: _o(A.creditInfoWrapper, className),
      ref: t,
      children: [
        x(f),
        b.map((e, t) =>
          i.jsxs(
            a.Fragment,
            {
              children: [t === 0 ? P("=") : P("+"), x(e)],
            },
            e.key,
          ),
        ),
      ],
    });
  }),
);
g.displayName = "CreditHistorySummary";
