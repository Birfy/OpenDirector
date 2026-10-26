import n from "z8";
import t from "Qey";
import * as o from "./module-TX5.js";
import { A } from "./module-HZF.js";
import { B } from "./module-ZGI.js";
const l = "recommendation-feed-loading";
const onSelectCategory = () => undefined;
export function V(e) {
  const { onApproachingStickyChange } = e;
  const name = t.Ay.t("web_home_feed_tab_trends", {}, "灵感");
  return n.jsx(B, {
    onApproachingStickyChange,
    children: n.jsx(A, {
      categories: [
        {
          id: l,
          name,
        },
      ],
      activeCategoryId: l,
      searchControl: null,
      onSelectCategory,
      children: n.jsx(o.m, {
        name,
      }),
    }),
  });
}
