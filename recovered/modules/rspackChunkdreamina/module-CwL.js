import n from "z8";
import o from "Qey";
import r from "Kpt";
import * as a from "./module-HX_3.js";
import s from "Egb";
import l from "h5";
import d from "Mr";
export var H = {
  [r.N.PageRoute]: [
    {
      id: a.Du.AIGeneratedRecord,
      path: s.ph[a.Du.AIGeneratedRecord],
      isNeedCache: !l.Pe,
      skeleton: () => null,
      layoutConfiguration: {
        mainFrameMinContentWidth: a.tB,
      },
    },
  ],
  [r.N.SideMenu]: [
    {
      id: a.Du.AIGeneratedRecord,
      type: "icon",
      text: () => o.Ay.t("web_home_nav_bar_generate", {}, "生成"),
      tooltipProps: {
        disabled: true,
      },
      icon: (e) => {
        var { selected, isHover } = e;
        return n.jsx(d.e, {
          active: selected || isHover,
        });
      },
      disableUseMemo: false,
      position: "center",
      order: 3089,
    },
  ],
};
