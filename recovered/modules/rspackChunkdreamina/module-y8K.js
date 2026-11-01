import a from "z8";
import n from "Qey";
import o from "yw";
import l from "Kpt";
import u from "HX";
import d from "Egb";
import r from "h5";
import s from "QN";
export var H = {
  [l.N.SideMenu]: [
    {
      id: u.Du.ShortDrama,
      type: "icon",
      shouldHidden: () => true,
      text: () =>
        n.Ay.t(
          "web_mainframe_StoryStudio",
          {
            thirdParamFallback: true,
            fallbackText: "短剧工作室",
          },
          "短剧工作室",
        ),
      tooltipProps: {
        disabled: true,
      },
      icon: () => a.jsx(o.s9I, {}),
      position: "center",
      order: 3091,
    },
  ],
  [l.N.PageRoute]: [
    {
      id: u.Du.ShortDrama,
      path: d.ph[u.Du.ShortDrama],
      isNeedCache: !r.Pe,
      layoutConfiguration: {
        mainFrameMinContentWidth: u.tB,
      },
      skeleton: () => a.jsx(s.c, {}),
    },
  ],
};
