import i from "oa";
import n from "qa";
import a from "z8";
import "M2c";
import "siR";
import o from "k7J";
import s from "F6v";
import "bT";
import c from "MK";
import l from "yw";
import d from "xb";
import { MK, mW } from "./module-Zap.js";
export { Mg } from "./module-Zap.js";
const p = "detail-row-OMzmiq";
const className = "state-dvMSRd";
function v(e) {
  const { actual, original } = e;
  return a.jsxs("span", {
    className: "credit-amount-K7Ia4W",
    children: [
      a.jsx(l.mC1, {
        className: "credit-icon-y8SFwB",
        size: 12,
        "aria-hidden": "true",
      }),
      a.jsx("span", {
        children: actual,
      }),
      original !== undefined
        ? a.jsx("span", {
            className: "original-credits-_Vs6I9",
            children: original,
          })
        : null,
    ],
  });
}
export function xt(e) {
  let t;
  const { items, totalCredits, loading = false } = e;
  const s = MK(items);
  const original = mW(s, totalCredits);
  t = loading
    ? a.jsx("div", {
        className,
        children: a.jsx(o.A, {
          size: 16,
        }),
      })
    : s.length > 0
      ? a.jsx("div", {
          className: "detail-list-kf5pJ6",
          children: s.map((e) =>
            a.jsxs(
              "div",
              {
                className: p,
                children: [
                  a.jsx("span", {
                    className: "detail-name-MJry3G",
                    children: c.Ay.t(e.title, {}, e.title),
                  }),
                  a.jsx(v, {
                    actual: e.actualCredits,
                    original: e.originalCredits,
                  }),
                ],
              },
              e.id,
            ),
          ),
        })
      : a.jsx("div", {
          className,
          children: c.Ay.t(
            "web_m10n_smart_insights_credit_popover_empty",
            {},
            "暂无消耗明细",
          ),
        });
  return a.jsxs("div", {
    className: "content-K_h9Qf",
    children: [
      a.jsx("div", {
        className: "title-XBv1CS",
        children: c.Ay.t("web_m10n_credits_detail_hover_title", {}, "消耗明细"),
      }),
      t,
      !loading && s.length > 0
        ? a.jsxs(a.Fragment, {
            children: [
              a.jsx("div", {
                className: "divider-hOSmkS",
              }),
              a.jsxs("div", {
                className: d(p, "total-row-nz41qX"),
                children: [
                  a.jsx("span", {
                    children: c.Ay.t(
                      "web_m10n_credits_detail_hover_header",
                      {},
                      "合计",
                    ),
                  }),
                  a.jsx(v, {
                    actual: totalCredits,
                    original,
                  }),
                ],
              }),
            ],
          })
        : null,
    ],
  });
}
export function hp(e) {
  const {
    children,
    disabled = false,
    onVisibleChange,
    popupZIndex = 1001,
    position = "top",
  } = e;
  const d = n._(e, [
    "children",
    "disabled",
    "onVisibleChange",
    "popupZIndex",
    "position",
  ]);
  if (disabled) {
    return a.jsx(a.Fragment, {
      children,
    });
  }
  return a.jsx(s.A, {
    className: "popover-e6Al1L",
    content: a.jsx(xt, i._({}, d)),
    position,
    trigger: ["hover", "focus"],
    showArrow: false,
    onVisibleChange,
    triggerProps: {
      autoFitPosition: true,
      autoFixPosition: true,
      updateOnScroll: true,
      style: {
        zIndex: popupZIndex,
      },
    },
    unmountOnExit: true,
    children: a.jsx("span", {
      className: "trigger-A19RLU",
      tabIndex: 0,
      children,
    }),
  });
}
