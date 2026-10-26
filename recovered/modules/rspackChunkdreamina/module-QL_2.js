import n from "oa";
import o from "bk";
import r from "qa";
import a from "z8";
import "Vx";
import s from "Ix";
import l from "zS";
import d from "bT";
import _c from "xb";
import p from "Qey";
import S from "yw";
export var t = (e) => {
  var t;
  var i;
  var {
    iconStyle,
    className,
    onClick,
    showTooltip = true,
    triggerProps,
    tooltipDisabled,
  } = e;
  var A = r._(e, [
    "iconStyle",
    "className",
    "onClick",
    "showTooltip",
    "triggerProps",
    "tooltipDisabled",
  ]);
  var [popupVisible, setPopupVisible] = d.useState(false);
  var _ = l.A((e) => {
    setPopupVisible(false);
    if (onClick != null) {
      onClick(e);
    }
  });
  var children = a.jsx(
    "button",
    o._(
      n._(
        {
          type: "button",
          "aria-label":
            typeof (triggerProps == null ? undefined : triggerProps.content) ===
            "string"
              ? triggerProps.content
              : p.Ay.t("web_home_nav_bar_help_center", {}, "客服中心"),
          className: _c("help-center-eLH0y8", className),
          onClick: onClick ? _ : undefined,
        },
        A,
      ),
      {
        children: a.jsx("span", {
          className: "trigger-WE5yP8",
          children: a.jsx(S.OnV, {
            className: "icon-hhoOHc",
            style: iconStyle,
          }),
        }),
      },
    ),
  );
  if (showTooltip) {
    return a.jsx(s.A, {
      content:
        (t = triggerProps == null ? undefined : triggerProps.content) != null
          ? t
          : p.Ay.t("web_home_nav_bar_help_center", {}, "客服中心"),
      trigger: "hover",
      position:
        (i = triggerProps == null ? undefined : triggerProps.position) != null
          ? i
          : "tr",
      popupVisible,
      onVisibleChange: setPopupVisible,
      disabled: tooltipDisabled,
      children,
    });
  }
  return children;
};
