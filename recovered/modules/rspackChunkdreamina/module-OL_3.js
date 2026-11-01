import a from "Kpt";
import n from "Egb";
import o from "V2H";
export var H = {
  [a.N.PageRoute]: o.cK.map((id) => ({
    id,
    path: n.ph[id],
    isNeedCache: false,
    layoutConfiguration: {
      hideSideMenu: true,
      hideTitleBar: true,
    },
    skeleton: () => null,
  })),
};
