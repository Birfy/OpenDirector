import n from "oa";
import s from "z8";
import a from "bT";
import r from "Qey";
import o from "yw";
import l from "bk";
import h from "zS";
import c from "pr";
import _d from "xb";
import * as _ from "./module-XLl.js";
import * as v from "./module-pE.js";
import "Vx";
import m from "Ix";
import g from "SfX";
import p from "hGN";
import b from "cS";
import C from "xx";
import w from "gY";
import { M as M_1 } from "./module-w4x.js";
const S = "active-fZM9Ed";
function useX(e) {
  let t;
  let i;
  const {
    "aria-label": aria_label,
    className,
    min,
    max,
    step = 1,
    marks,
    onlyMarkValue,
    value,
    style,
    cssConfigs,
    onChange,
    onAfterChange,
    formatTooltip,
    triggerBar = false,
    isDisable = false,
    showValueTooltip = true,
    disableTooltipContent,
  } = e;
  const z = C.A(marks)
    .map(Number)
    .sort((e, t) => e - t);
  const A = z.length > 0;
  const L = h.A((e) => (Math.min(Math.max(min, e), max) - min) / (max - min));
  const B = L(value);
  const VRef = a.useRef(null);
  const [j, setJ] = a.useState(B);
  const [R, T, O] = g.A(false);
  const [ref, W] = p.A();
  const Y = h.A((e) => {
    var t;
    var i = (t = VRef.current) == null ? undefined : t.getBoundingClientRect();
    if (i) {
      return Math.max(0, Math.min((e.x - i.x) / i.width, 1));
    }
    return 0;
  });
  const G = h.A((e) => {
    var t = (max - min) * e + min;
    if (onlyMarkValue && z.length) {
      var i = z[0];
      var n = Math.abs(z[0] - t);
      for (var s = 1; s < z.length; s++) {
        var a = Math.abs(z[s] - t);
        if (a < n) {
          n = a;
          i = z[s];
        }
      }
      return i;
    }
    var r = Math.floor((t - min) / step);
    var h = min + r * step;
    var d = h + step;
    if (t - h < d - t) {
      return h;
    }
    return Math.min(d, max);
  });
  const X = h.A((e) => {
    if (!isDisable) {
      T(true);
      var t = Y(e);
      setJ(t);
      if (onChange != null) {
        onChange(G(t));
      }
    }
  });
  const K = h.A((e) => {
    if (!isDisable && O()) {
      T(false);
      var t = Y(e);
      setJ(t);
      if (onAfterChange != null) {
        onAfterChange(G(t));
      }
    }
  });
  const F = h.A((e) => {
    if (!isDisable && O()) {
      var t = Y(e);
      setJ(t);
      if (onChange != null) {
        onChange(G(t));
      }
    }
  });
  a.useEffect(() => {
    var VRef_current = VRef.current;
    document.addEventListener("mouseup", K);
    document.addEventListener("mousemove", F);
    if (VRef_current != null) {
      VRef_current.addEventListener("mousedown", X);
    }
    return () => {
      document.removeEventListener("mouseup", K);
      document.removeEventListener("mousemove", F);
      if (VRef_current != null) {
        VRef_current.removeEventListener("mousedown", X);
      }
    };
  }, [X, F, K]);
  const q = G(R || w.A(B) ? j : B);
  const J = L(q);
  const content = formatTooltip ? formatTooltip(q) : "".concat(q);
  const Q = z.map((e) => L(e));
  return s.jsx(m.A, {
    content: disableTooltipContent,
    disabled: !isDisable,
    triggerProps: {
      popupAlign: {
        top: 8,
      },
    },
    children: s.jsx("div", {
      className: _d(className, "slider-eDMq22", {
        "with-marks-uPF2RI": A,
      }),
      style,
      children: s.jsxs("div", {
        className: _d(
          "slider-wrapper-fVk11b",
          cssConfigs == null || (t = cssConfigs.sliderWrapper) == null
            ? undefined
            : t.className,
        ),
        style:
          cssConfigs == null || (i = cssConfigs.sliderWrapper) == null
            ? undefined
            : i.style,
        ref: VRef,
        children: [
          s.jsxs("div", {
            className: _d("slider-road-jrNdeM", {
              [S]: R,
              "slider-road-disable-TvUDjS": isDisable,
            }),
            children: [
              s.jsx("div", {
                className: "slider-bar-uv6u4C",
                style: {
                  right: `${(1 - J) * 100}%`,
                },
              }),
              s.jsx(m.A, {
                content,
                popupVisible: !!showValueTooltip && (R || W),
                triggerProps: {
                  popupAlign: {
                    top: 8,
                  },
                },
                className: "slide-value-tooltip-JGrZwB",
                children: s.jsx("div", {
                  className: _d({
                    "slider-button-bar-mRttYi": triggerBar,
                    "slider-button-brick-sckPMP": !triggerBar,
                  }),
                  role: "slider",
                  tabIndex: isDisable ? -1 : 0,
                  "aria-label": aria_label,
                  "aria-valuemin": min,
                  "aria-valuemax": max,
                  "aria-valuenow": q,
                  "aria-valuetext": content,
                  "aria-disabled": isDisable,
                  onKeyDown: (e) => {
                    if (!isDisable) {
                      var t = b.W(
                        e.key,
                        q,
                        min,
                        max,
                        step,
                        onlyMarkValue ? z : undefined,
                      );
                      if (t !== undefined) {
                        e.preventDefault();
                        e.stopPropagation();
                        if (t !== q) {
                          if (onChange != null) {
                            onChange(t);
                          }
                          if (onAfterChange != null) {
                            onAfterChange(t);
                          }
                        }
                      }
                    }
                  },
                  ref,
                  style: {
                    right: `${(1 - J) * 100}%`,
                  },
                }),
              }),
            ],
          }),
          Q.map((e, t) =>
            s.jsx(
              "div",
              {
                className: _d("slider-dot-vFh3i6", {
                  [S]: e <= J,
                }),
                style: {
                  right: `${(1 - e) * 100}%`,
                },
              },
              t,
            ),
          ),
        ],
      }),
    }),
  });
}
const y = "slider-bar-ui88Gy";
const cssConfigs = {
  sliderWrapper: {
    style: {
      height: "12px",
      margin: "4px 0",
    },
  },
};
const M = a.memo(function (e) {
  const { className, brushSize, onChange, onAfterChange, startIcon, endIcon } =
    e;
  return s.jsx("div", {
    className: "slider-wrapper-H6dCDC",
    children: s.jsxs("div", {
      className: "slider-bar-container-eEiKmn",
      children: [
        startIcon
          ? s.jsx("div", {
              className: "start-icon-Snf0v2",
              children: startIcon,
            })
          : null,
        s.jsx(useX, {
          "aria-label": e.label || r.Ay.t("t2i_painter_size", {}, "笔刷大小"),
          className: className ? _d(y, className) : y,
          value: brushSize,
          onChange,
          max: v.Gy,
          min: v.AC,
          style: {
            width: 292,
          },
          triggerBar: true,
          onAfterChange,
          cssConfigs,
        }),
        endIcon
          ? s.jsx("div", {
              className: "end-icon-MM_ssw",
              children: endIcon,
            })
          : null,
      ],
    }),
  });
});
const k = a.memo(function (e) {
  const {
    contentStyle,
    sliderClassName,
    brushSize,
    tips,
    onChange,
    onClick,
    isActive,
    icon,
    buttonStyle,
    onVisibleChange,
    onAfterChange,
    isDefaultOpen = false,
    disabled = false,
    sliderStartIcon,
    sliderEndIcon,
  } = e;
  const [k, setK] = a.useState(!isDefaultOpen);
  const PRef = a.useRef(null);
  const onVisibleChange_1 = h.A((e) => {
    setK(!e);
    if (onVisibleChange != null) {
      onVisibleChange(e);
    }
  });
  a.useEffect(() => {
    var e;
    if (isDefaultOpen) {
      if ((e = PRef.current) != null) {
        e.open();
      }
    }
  }, [isDefaultOpen]);
  return s.jsx(_.h, {
    ref: PRef,
    contentStyle: l._(n._({}, contentStyle), {
      display: k ? "none" : "",
      backdropFilter: "none",
    }),
    content: s.jsx(M, {
      label: [tips, r.Ay.t("web_canva_custom_size_size", {}, "尺寸")].join(
        " · ",
      ),
      className: sliderClassName,
      brushSize,
      onChange,
      onAfterChange,
      startIcon: sliderStartIcon,
      endIcon: sliderEndIcon,
    }),
    onVisibleChange: onVisibleChange_1,
    children: s.jsx("div", {
      role: "button",
      tabIndex: disabled ? -1 : 0,
      "aria-label": tips,
      "aria-disabled": disabled,
      "aria-pressed": isActive,
      "aria-expanded": !k,
      onKeyDown: c.q,
      onClick: disabled ? undefined : onClick,
      style: buttonStyle,
      children: s.jsx(M_1, {
        disabled: isActive || disabled,
        tips,
        className: _d({
          "item-UeKSSr": true,
          "active-yt6zA_": isActive,
          "pressed-qtbHzu": !k,
          "disabled-i5FCQU": disabled,
        }),
        icon,
      }),
    }),
  });
});
const D = {
  "icon-item": "icon-item-mIZ0J_",
  iconItem: "icon-item-mIZ0J_",
  active: "active-VnlfpG",
  disabled: "disabled-_9VWfw",
  pressed: "pressed-fysct3",
};
const P = a.memo(function (e) {
  const { isActive, onClick, tips, onAfterChange } = e;
  const onClick_1 = a.useCallback(() => {
    if (onClick != null) {
      onClick();
    }
    if (onAfterChange != null) {
      onAfterChange();
    }
  }, [onClick, onAfterChange]);
  return s.jsx("div", {
    role: "button",
    tabIndex: 0,
    onKeyDown: c.q,
    "aria-label": tips,
    "aria-pressed": !!isActive,
    onClick: onClick_1,
    children: s.jsx(M_1, {
      tips,
      className: _d({
        [D.iconItem]: true,
        [D.active]: isActive,
      }),
      icon: s.jsx(o.UQv, {
        className: D.icon,
        size: 16,
      }),
    }),
  });
});
const I = {
  "brush-container": "brush-container-tH2AR3",
  brushContainer: "brush-container-tH2AR3",
  icon: "icon-w202jC",
  "slider-icon": "slider-icon-WKqhpO",
  sliderIcon: "slider-icon-WKqhpO",
};
export var G = a.memo(function (e) {
  const { brushConfig, eraserConfig, boxSelectionConfig } = e;
  return s.jsxs("div", {
    className: I.brushContainer,
    children: [
      s.jsx(k, {
        isDefaultOpen: brushConfig.defaultOpen,
        disabled: brushConfig.disabled,
        contentStyle: brushConfig.contentStyle,
        buttonStyle: brushConfig.buttonStyle,
        sliderClassName: I.sliderBarBrush,
        brushSize: brushConfig.size,
        tips: r.Ay.t("web_image_edit_tool_brush", {}, "画笔"),
        isActive: brushConfig.isActive,
        icon: s.jsx(o.W45, {
          className: I.icon,
        }),
        onChange: brushConfig.onChange,
        onClick: brushConfig.onClick,
        onAfterChange: brushConfig.onAfterChange,
        sliderStartIcon: s.jsx(o.NZJ, {
          className: I.sliderIcon,
        }),
        sliderEndIcon: s.jsx(o.INp, {
          className: I.sliderIcon,
        }),
      }),
      boxSelectionConfig ? s.jsx(P, n._({}, boxSelectionConfig)) : null,
      s.jsx(k, {
        isDefaultOpen: eraserConfig.defaultOpen,
        disabled: eraserConfig.disabled,
        contentStyle: eraserConfig.contentStyle,
        buttonStyle: eraserConfig.buttonStyle,
        sliderClassName: I.sliderBarEraser,
        brushSize: eraserConfig.size,
        tips: r.Ay.t("web_image_edit_tool_eraser", {}, "橡皮擦"),
        isActive: eraserConfig.isActive,
        icon: s.jsx(o.xBM, {
          className: I.icon,
        }),
        onChange: eraserConfig.onChange,
        onClick: eraserConfig.onClick,
        onAfterChange: eraserConfig.onAfterChange,
        sliderStartIcon: s.jsx(o.NZJ, {
          className: I.sliderIcon,
        }),
        sliderEndIcon: s.jsx(o.INp, {
          className: I.sliderIcon,
        }),
      }),
    ],
  });
});
