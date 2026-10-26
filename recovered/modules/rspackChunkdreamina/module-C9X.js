import n from "z8";
import t from "bT";
import a from "yw";
var o = t.memo(function (e) {
  let r;
  let i;
  const { limitations } = e;
  const { creditDisplayInfo, needCredits } = limitations;
  const s =
    (r =
      creditDisplayInfo == null
        ? undefined
        : creditDisplayInfo.actualCredits) != null
      ? r
      : needCredits;
  const c =
    (i =
      creditDisplayInfo == null
        ? undefined
        : creditDisplayInfo.originalCredits) != null
      ? i
      : needCredits;
  const u =
    !!(creditDisplayInfo == null ? undefined : creditDisplayInfo.hasDiscount) &&
    c > s;
  return n.jsxs("span", {
    className: "credits-tooltip-value-hP8uSp",
    children: [
      n.jsx(a.mC1, {
        className: "credit-icon-iV_cuL",
        size: 12,
      }),
      n.jsxs("span", {
        className: "credit-text-c8ROww",
        children: [
          n.jsx("span", {
            className: "actual-credits-TzSdAs",
            children: s,
          }),
          u
            ? n.jsx("span", {
                className: "original-credits-lg86JA",
                children: c,
              })
            : null,
        ],
      }),
    ],
  });
});
export { o as n };
