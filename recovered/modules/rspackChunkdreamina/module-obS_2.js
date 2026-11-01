import a from "z8";
import n from "Qey";
import o from "yw";
import l from "Kpt";
import u from "HX";
import d from "Egb";
import r from "h5";
export var H = {
  [l.N.SideMenu]: [
    {
      id: u.Du.Elements,
      type: "icon",
      text: () => n.Ay.t("web_mainframe_asset_tab_subject", {}, "Elements"),
      tooltipProps: {
        disabled: true,
      },
      icon: () => a.jsx(o.Ki_, {}),
      position: "center",
      order: 2094,
      shouldHidden: () => true,
    },
  ],
  [l.N.PageRoute]: [
    {
      id: u.Du.Elements,
      path: d.ph[u.Du.Elements],
      isNeedCache: !r.Pe,
      layoutConfiguration: {
        mainFrameMinContentWidth: u.tB,
      },
      skeleton: () => null,
    },
  ],
};
