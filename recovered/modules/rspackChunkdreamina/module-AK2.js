import n from "z8";
import o from "Qey";
import * as r from "./module-HX_3.js";
import a from "Egb";
import s from "h5";
import l from "Kpt";
import d from "yw";
export var H = {
  [l.N.SideMenu]: [
    {
      id: r.Du.Asset,
      type: "icon",
      text: () => o.Ay.t("web_home_nav_bar_assets", {}, "资产"),
      tooltipProps: {
        disabled: true,
      },
      icon: (e) => {
        var { selected, isHover } = e;
        if (selected || isHover) {
          return n.jsx(d.Ulv, {});
        }
        return n.jsx(d.g6N, {});
      },
      position: "center",
      order: 2095,
    },
  ],
  [l.N.PageRoute]: [
    {
      id: r.Du.Asset,
      path: a.ph[r.Du.Asset],
      isNeedCache: !s.Pe,
      layoutConfiguration: {
        mainFrameMinContentWidth: r.tB,
      },
      skeleton: () => null,
    },
  ],
};
