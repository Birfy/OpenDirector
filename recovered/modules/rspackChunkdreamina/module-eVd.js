import i from "oa";
import r from "bk";
import a from "z8";
import "HZH";
import "siR";
import o from "I7V";
import l from "F6v";
import u from "bT";
import _s from "xb";
import c from "Qey";
import m from "yw";
import v from "wF";
import p from "Kt";
import { O as O_1 } from "./module-FS_2.js";
const f = "discount-detail-row-XIWIvV";
const h = "discount-tag-MLrdi7";
const _ = "discount-detail-value-uy55mx";
const y = "discount-detail-credit-text-wqHVIS";
export var V = u.memo(function (e) {
  const {
    limitations,
    creditDisplayInfo,
    fallbackCredits,
    className,
    iconClassName,
    iconSize = 16,
    showIcon = true,
    showOriginalCredits = true,
    formatCredits,
    discountItemName,
    discountDetailTips,
    fallbackTooltipContent,
    popupTriggerProps,
    disableDiscountPopover,
    discountReportPage,
  } = e;
  const M = v.h(p._);
  const {
    actualCredits,
    originalCredits,
    hasDiscount,
    discountLabel,
    freeTrialLabel,
    retainOriginalCredits,
  } = u.useMemo(() => {
    var e;
    var i;
    var r;
    var a;
    var o;
    var l =
      creditDisplayInfo != null
        ? creditDisplayInfo
        : limitations == null
          ? undefined
          : limitations.creditDisplayInfo;
    var u =
      (e =
        fallbackCredits != null
          ? fallbackCredits
          : limitations == null
            ? undefined
            : limitations.needCredits) != null
        ? e
        : 0;
    return {
      actualCredits:
        (i = l == null ? undefined : l.actualCredits) != null ? i : u,
      originalCredits:
        (r = l == null ? undefined : l.originalCredits) != null ? r : u,
      hasDiscount: (a = l == null ? undefined : l.hasDiscount) != null && a,
      discountLabel: l == null ? undefined : l.discountLabel,
      freeTrialLabel: l == null ? undefined : l.freeTrialLabel,
      retainOriginalCredits:
        (o = l == null ? undefined : l.showOriginalCredits) != null && o,
    };
  }, [creditDisplayInfo, fallbackCredits, limitations]);
  const O = u.useCallback(
    (e) => {
      if (limitations && formatCredits) {
        return formatCredits(e, limitations);
      }
      return e;
    },
    [formatCredits, limitations],
  );
  const U = u.useMemo(() => O(actualCredits), [actualCredits, O]);
  const K = u.useMemo(() => O(originalCredits), [originalCredits, O]);
  const Q = Math.max(originalCredits - actualCredits, 0);
  const G = u.useMemo(() => O(Q), [Q, O]);
  const L =
    discountItemName != null
      ? discountItemName
      : c.Ay.t("title_credits_consumption", {}, "积分消耗");
  const z = c.Ay.t("title_credits_offer", {}, "可享优惠");
  const q = (hasDiscount || retainOriginalCredits) && showOriginalCredits;
  const W = !q && !!fallbackTooltipContent;
  const X = u.useCallback((e) => {
    e.stopPropagation();
  }, []);
  const content = q
    ? a.jsxs("div", {
        className: "discount-detail-AZYPxP",
        onMouseDown: X,
        onClick: X,
        children: [
          a.jsx("div", {
            className: "discount-detail-title-fjcmMA",
            children: c.Ay.t("title_discount_detail", {}, "优惠明细"),
          }),
          a.jsxs("div", {
            className: f,
            children: [
              a.jsx("span", {
                children: L,
              }),
              a.jsxs("span", {
                className: _,
                children: [
                  a.jsx(m.mC1, {
                    size: 12,
                  }),
                  a.jsx("span", {
                    className: y,
                    children: K,
                  }),
                ],
              }),
            ],
          }),
          a.jsxs("div", {
            className: f,
            children: [
              a.jsxs("span", {
                className: "discount-detail-name-uQM402",
                children: [
                  z,
                  freeTrialLabel ? " " : null,
                  freeTrialLabel
                    ? a.jsx("span", {
                        className: h,
                        children: freeTrialLabel,
                      })
                    : null,
                  discountLabel ? " " : null,
                  discountLabel
                    ? a.jsx("span", {
                        className: h,
                        children: discountLabel,
                      })
                    : null,
                ],
              }),
              a.jsxs("span", {
                className: _,
                children: [
                  a.jsx(m.mC1, {
                    size: 12,
                  }),
                  a.jsxs("span", {
                    className: y,
                    children: [
                      a.jsx("span", {
                        children: "-",
                      }),
                      a.jsx("span", {
                        children: G,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          a.jsx("div", {
            className: "discount-detail-divider-qlsZ3n",
          }),
          a.jsxs("div", {
            className: _s(f, "discount-detail-total-row-_58EZl"),
            children: [
              a.jsx("span", {
                children: c.Ay.t("title_credits_total2", {}, "优惠后合计"),
              }),
              a.jsxs("span", {
                className: _,
                children: [
                  a.jsx(m.mC1, {
                    size: 12,
                  }),
                  a.jsxs("span", {
                    className: y,
                    children: [
                      a.jsx("span", {
                        children: U,
                      }),
                      a.jsx("span", {
                        className: "discount-detail-original-JLWr_P",
                        children: K,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          discountDetailTips
            ? a.jsx("div", {
                className: "discount-detail-tips-d8wiS9",
                children: discountDetailTips,
              })
            : null,
        ],
      })
    : null;
  const J = a.jsxs("span", {
    className: _s("credit-price-display-cAQlkg", className),
    children: [
      showIcon
        ? a.jsx(m.mC1, {
            className: iconClassName,
            size: iconSize,
          })
        : null,
      a.jsx("span", {
        className: "actual-credits-dVXVG2",
        children: U,
      }),
      q
        ? a.jsx("span", {
            className: "original-credits-dItdkH",
            children: K,
          })
        : null,
    ],
  });
  const onVisibleChange = u.useCallback(
    (e) => {
      if (e) {
        O_1(M, discountReportPage);
      }
    },
    [M, discountReportPage],
  );
  if (q && !disableDiscountPopover) {
    return a.jsx(l.A, {
      content,
      trigger: ["hover"],
      position: "top",
      showArrow: false,
      className: "discount-popover-aAhI3n",
      onVisibleChange,
      triggerProps: r._(i._({}, popupTriggerProps), {
        style: i._(
          {
            zIndex: 1001,
          },
          popupTriggerProps == null ? undefined : popupTriggerProps.style,
        ),
      }),
      unmountOnExit: true,
      children: J,
    });
  }
  if (W) {
    return a.jsx(o.A, {
      content: fallbackTooltipContent,
      triggerProps: popupTriggerProps,
      children: J,
    });
  }
  return J;
});
