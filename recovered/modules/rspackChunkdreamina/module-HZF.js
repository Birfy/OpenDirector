import n from "z8";
import * as t from "./module-E01.js";
import * as o from "./module-PfW.js";
import { G } from "./module-W5Q.js";
import { A } from "./module-CN.js";
function l(e) {
  const {
    categories,
    activeCategoryId,
    searchControl,
    children,
    onSelectCategory,
  } = e;
  const { isStuck } = G();
  if (categories.length === 0) {
    return null;
  }
  return n.jsxs("div", {
    className: A.feed,
    children: [
      n.jsxs("div", {
        className: A.primaryNavigation,
        "data-recommendation-feed-primary-navigation": true,
        children: [
          n.jsx(t.z, {
            className: A.primaryNavigationRow,
            endSlot: n.jsx("div", {
              className: A.searchSlot,
              children: searchControl,
            }),
            endSlotGap: isStuck ? 8 : 24,
            reserveTopActionsSpace: isStuck,
            children: n.jsx(o.n, {
              className: A.primaryTabs,
              items: categories,
              value: activeCategoryId,
              onChange: onSelectCategory,
            }),
          }),
          n.jsx("span", {
            className: ""
              .concat(A.feedCornerMask, " ")
              .concat(A.feedCornerMaskStart),
            "data-recommendation-feed-corner-mask": "start",
            "aria-hidden": "true",
          }),
          n.jsx("span", {
            className: ""
              .concat(A.feedCornerMask, " ")
              .concat(A.feedCornerMaskEnd),
            "data-recommendation-feed-corner-mask": "end",
            "aria-hidden": "true",
          }),
        ],
      }),
      n.jsx("div", {
        className: A.sections,
        children,
      }),
    ],
  });
}
export { l as A };
