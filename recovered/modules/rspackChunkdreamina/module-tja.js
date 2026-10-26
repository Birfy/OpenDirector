import a from "oa";
import t from "bk";
import i from "z8";
import "Vx";
import "uw5";
import o from "Ix";
import r from "VAR";
import s from "bT";
import c from "yw";
import _d from "xb";
import m from "Qey";
export var k = s.memo(function (e) {
  const {
    actions,
    disabled = false,
    position = "br",
    triggerClassName,
    popupVisible,
    onVisibleChange,
    triggerIcon,
    triggerAriaLabel,
    triggerTooltipContent,
    triggerTooltipProps,
  } = e;
  const [x, setX] = s.useState(false);
  const j = popupVisible !== undefined;
  const popupVisible_1 = !disabled && (j ? popupVisible : x);
  const onVisibleChange_1 = s.useCallback(
    (e) => {
      var l = e && !disabled;
      if (!j) {
        setX(l);
      }
      if (onVisibleChange != null) {
        onVisibleChange(l);
      }
    },
    [disabled, j, onVisibleChange],
  );
  s.useEffect(() => {
    if (disabled) {
      onVisibleChange_1(false);
    }
  }, [disabled, onVisibleChange_1]);
  const onClick = s.useCallback((e) => {
    e.stopPropagation();
  }, []);
  const onMouseDown = s.useCallback((e) => {
    e.preventDefault();
  }, []);
  const onKeyDown = s.useCallback((e) => {
    if (e.currentTarget.getAttribute("aria-disabled") === "true") {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    if (e.code === "Enter" || e.code === "Space") {
      e.preventDefault();
      e.currentTarget.click();
    }
  }, []);
  const T = s.useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);
  const content = s.useMemo(
    () =>
      i.jsx("div", {
        className: "option-action-dropdown-TVq3RM",
        children: actions.map((e) =>
          i.jsxs(
            "div",
            {
              className: "option-action-rXpTh8",
              role: "button",
              tabIndex: e.disabled ? -1 : 0,
              "aria-disabled": e.disabled,
              onClick: e.disabled ? T : e.onClick,
              onMouseDown,
              onKeyDown,
              children: [
                i.jsx("span", {
                  className: "option-action-icon-zjfm0Y",
                  children: e.icon,
                }),
                i.jsx("span", {
                  className: "option-action-label-HMV_KG",
                  children: e.label,
                }),
              ],
            },
            e.key,
          ),
        ),
      }),
    [actions, onKeyDown, onMouseDown, T],
  );
  const children = i.jsx(r.A, {
    className: "option-action-dropdown-popover-wxyAJD",
    trigger: "click",
    content,
    popupVisible: popupVisible_1,
    onVisibleChange: onVisibleChange_1,
    position,
    showArrow: false,
    children: i.jsx("button", {
      type: "button",
      className: _d(triggerClassName, "trigger-_3c1vy"),
      disabled,
      "aria-disabled": disabled,
      onClick,
      "aria-label":
        triggerAriaLabel != null
          ? triggerAriaLabel
          : m.Ay.t("skill_publish_manage_more", {}, "More"),
      "aria-expanded": popupVisible_1,
      children:
        triggerIcon != null
          ? triggerIcon
          : i.jsx(c.xcf, {
              size: 16,
            }),
    }),
  });
  if (triggerTooltipContent === undefined) {
    return children;
  }
  return i.jsx(
    o.A,
    t._(a._({}, triggerTooltipProps), {
      content: triggerTooltipContent,
      disabled:
        popupVisible_1 ||
        (triggerTooltipProps == null
          ? undefined
          : triggerTooltipProps.disabled),
      children,
    }),
  );
});
