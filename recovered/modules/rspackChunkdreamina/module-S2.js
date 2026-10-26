import i from "z8";
import n from "yw";
import a from "MK";
const o = "creditItem-X9wWfa";
const s = "creditEntryButton-XRcyFL";
export function d(e) {
  const { onBuyCredits, onOpenCreditHistory } = e;
  return i.jsxs("div", {
    className: "creditEntryLinks-oJGdfC",
    children: [
      i.jsx("button", {
        type: "button",
        className: s,
        onClick: onBuyCredits,
        children: a.Ay.t(
          "web_dre_m10n_subscription_page_get_credits",
          {},
          "Get credits",
        ),
      }),
      i.jsx("span", {
        className: "creditEntryDivider-RDT_AF",
        "aria-hidden": "true",
      }),
      i.jsx("button", {
        type: "button",
        className: s,
        onClick: onOpenCreditHistory,
        children: a.Ay.t("dre_m10n_credits_balance", {}, "Credit balance"),
      }),
    ],
  });
}
export function T(e) {
  const { credit, onGetCredits, onBuyCredits } = e;
  if (onBuyCredits && onGetCredits) {
    return i.jsx("div", {
      className: o,
      children: i.jsx(d, {
        onBuyCredits,
        onOpenCreditHistory: onGetCredits,
      }),
    });
  }
  const l = onGetCredits ? "button" : "div";
  return i.jsxs(l, {
    className: o,
    type: onGetCredits ? "button" : undefined,
    onClick: onGetCredits,
    style: {
      cursor: onGetCredits ? "pointer" : "default",
    },
    children: [
      i.jsx("div", {
        className: "title-As4W6U",
        children: a.Ay.t("dre_m10n_credits_balance", {}, "Credit balance"),
      }),
      i.jsxs("div", {
        className: "action-YBX6yW",
        children: [
          i.jsx(n.mC1, {
            className: "creditIcon-wTnIbK",
            color: "var(--text-primary)",
          }),
          i.jsx("div", {
            className: "credits-WzcDzq",
            children: credit != null ? credit : "--",
          }),
          onGetCredits
            ? i.jsx(n.Vjx, {
                className: "chevronRight-N_71bN",
                color: "var(--text-secondary)",
              })
            : null,
        ],
      }),
    ],
  });
}
