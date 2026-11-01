import a from "z8";
import n from "Kpt";
import o from "Qey";
import l from "Mer";
import u from "HX";
import d from "Egb";
import r from "HNM";
export var H = {
  [n.N.SideMenu]: [
    {
      id: u.Du.EnterpriseLanding,
      type: "icon",
      shouldHidden: () => true,
      text: () =>
        o.Ay.t(
          "web_enterprise_home_business_entry",
          {
            thirdParamFallback: true,
            fallbackText: "企业服务",
          },
          "企业服务",
        ),
      tooltipProps: {
        disabled: true,
      },
      icon: () =>
        a.jsx(l.p, {
          size: 20,
        }),
      onClick: () => {
        r.$i("".concat(d.Js).concat(d.ph[u.Du.EnterpriseLanding]));
      },
      position: "center",
      order: 3092,
    },
  ],
  [n.N.PageRoute]: [
    {
      id: u.Du.EnterpriseLanding,
      path: d.ph[u.Du.EnterpriseLanding],
      isNeedCache: false,
      layoutConfiguration: {
        hideSideMenu: true,
        hideTitleBar: true,
      },
      skeleton: () => null,
    },
  ],
};
