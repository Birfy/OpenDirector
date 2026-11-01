import n from "oa";
import i from "bk";
import a from "qa";
import s from "z8";
import "HZH";
import o from "I7V";
import c from "bT";
import _l from "xb";
import p from "WJh";
import * as m from "./module-IY.js";
const u = {
  "mweb-button": "mweb-button-XlfSEF",
  mwebButton: "mweb-button-XlfSEF",
  "mweb-button-icon": "mweb-button-icon-nXkuDu",
  mwebButtonIcon: "mweb-button-icon-nXkuDu",
  "tooltip-container": "tooltip-container-nL4Jf5",
  tooltipContainer: "tooltip-container-nL4Jf5",
  "mweb-nail-tips": "mweb-nail-tips-rH0KHR",
  mwebNailTips: "mweb-nail-tips-rH0KHR",
};
export var I = c.forwardRef((e, r) => {
  var {
    text,
    toolTipsContent,
    className,
    style,
    toolTipsPosition,
    toolTipsClassName,
    onClick,
    loading,
    PrevIcon,
    PrevDiv,
    SuffixIcon,
    disabled,
    type = "default",
    iconStyle = {},
    overflowEllipsis,
    nailTips,
    stopPropagation,
    onMouseDown,
    onMouseUp,
    dataApmAction,
  } = e;
  var M = a._(e, [
    "text",
    "toolTipsContent",
    "className",
    "style",
    "toolTipsPosition",
    "toolTipsClassName",
    "onClick",
    "loading",
    "PrevIcon",
    "PrevDiv",
    "SuffixIcon",
    "disabled",
    "type",
    "iconStyle",
    "overflowEllipsis",
    "nailTips",
    "stopPropagation",
    "onMouseDown",
    "onMouseUp",
    "dataApmAction",
  ]);
  var content = toolTipsContent || text;
  var FRef = c.useRef(null);
  var { textComp, isTextOverflow } = p.T({
    text: (overflowEllipsis && text) || "",
  });
  var { prevIconStyle = {}, suffixIconStyle = {} } = iconStyle;
  c.useImperativeHandle(r, () => ({
    getClientWidth() {
      let e;
      let r;
      if (
        (e = (r = FRef.current) == null ? undefined : r.clientWidth) != null
      ) {
        return e;
      }
      return 0;
    },
  }));
  if (loading) {
    var J;
    var Z;
    var O =
      FRef == null ||
      (Z = FRef.current) == null ||
      (J = Z.getBoundingClientRect()) == null
        ? undefined
        : J.width;
    return s.jsx("div", {
      className: _l("mweb-button-".concat(type), u.mwebButton, className, {
        loading,
      }),
      style: i._(n._({}, style), {
        width: O ? "".concat(O, "px") : undefined,
      }),
      children: s.jsx("span", {
        className: u.text,
        children: s.jsx(m.a, {}),
      }),
    });
  }
  var children = overflowEllipsis ? textComp : text;
  return s.jsx(
    o.A,
    i._(
      n._(
        {
          className: _l(u.toolTipContainer, toolTipsClassName),
          content,
          checkOverflow: overflowEllipsis ? !isTextOverflow : !toolTipsContent,
          position: toolTipsPosition,
        },
        overflowEllipsis && !isTextOverflow
          ? {
              popupVisible: false,
            }
          : {},
        M,
      ),
      {
        children: s.jsxs("div", {
          className: _l("mweb-button-".concat(type), u.mwebButton, className, {
            disabled,
          }),
          ref: FRef,
          onClick: (e) => {
            if (stopPropagation) {
              e.stopPropagation();
            }
            if (!(disabled || onClick == null)) {
              onClick(e);
            }
          },
          style,
          onMouseDown,
          onMouseUp,
          "data-apm-action": dataApmAction,
          children: [
            PrevIcon &&
              s.jsx(PrevIcon, {
                className: u.mwebButtonIcon,
                style: prevIconStyle,
              }),
            PrevDiv,
            children &&
              s.jsx("span", {
                style: {
                  width: "inherit",
                },
                children,
              }),
            SuffixIcon &&
              s.jsx(SuffixIcon, {
                className: u.mwebButtonIcon,
                style: suffixIconStyle,
              }),
            nailTips
              ? s.jsx("div", {
                  className: u.mwebNailTips,
                  children: nailTips,
                })
              : null,
          ],
        }),
      },
    ),
  );
});
