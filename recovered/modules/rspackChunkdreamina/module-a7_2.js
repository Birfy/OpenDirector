import a from "Kpt";
import n from "HX";
import o from "Egb";
import l from "h5";
export var H = {
  [a.N.PageRoute]: [
    {
      id: n.Du.Explore,
      path: o.ph[n.Du.Explore],
      isNeedCache: !l.Pe,
      skeleton: () => null,
      layoutConfiguration: {
        mainFrameMinContentWidth: n.tB,
      },
    },
  ],
  [a.N.SideMenu]: [
    {
      id: n.Du.Explore,
      type: "icon",
      text: () => "Explore",
      icon: () => null,
      position: "center",
      order: 3085,
      shouldHidden: () => true,
    },
  ],
};
