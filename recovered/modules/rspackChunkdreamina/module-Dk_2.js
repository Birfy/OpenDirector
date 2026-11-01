import a from "Kpt";
import n from "HX";
import o from "Egb";
import l from "h5";
export var H = {
  [a.N.PageRoute]: [
    {
      id: n.Du.Home,
      path: o.ph[n.Du.Home],
      isNeedCache: !l.Pe,
      skeleton: () => null,
      layoutConfiguration: {
        mainFrameMinContentWidth: n.tB,
      },
      sideDrawerCollapseBehavior: "perf",
    },
  ],
  [a.N.SideMenu]: [
    {
      id: n.Du.Home,
      type: "icon",
      position: "center",
      order: 3090,
      shouldHidden: () => true,
    },
  ],
};
