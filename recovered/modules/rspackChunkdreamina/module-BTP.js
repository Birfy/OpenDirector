import t from "oa";
import n from "bk";
import i from "z8";
import "Vx";
import "wy";
import "uw5";
import "xj";
import r from "Ix";
import o from "h7y";
import l from "VAR";
import s from "R8";
import d from "Qey";
import c from "bT";
import _m from "xb";
import v from "SNb";
import * as F from "./module-MMW.js";
import { M as M_1 } from "./module-wFV.js";
const h = {
  "duration-trigger": "duration-trigger-bMIxhC",
  durationTrigger: "duration-trigger-bMIxhC",
  "duration-panel": "duration-panel-ISkngh",
  durationPanel: "duration-panel-ISkngh",
  header: "header-y6lwJ7",
  title: "title-hcGbPy",
  "smart-duration-switch": "smart-duration-switch-ypZweL",
  smartDurationSwitch: "smart-duration-switch-ypZweL",
  "smart-duration-switch-label": "smart-duration-switch-label-iTvzNW",
  smartDurationSwitchLabel: "smart-duration-switch-label-iTvzNW",
  content: "content-DLL88_",
  "content-smart": "content-smart-R4vWpM",
  contentSmart: "content-smart-R4vWpM",
  "input-wrap": "input-wrap-kJ_uKj",
  inputWrap: "input-wrap-kJ_uKj",
  "duration-input": "duration-input-E3yTcC",
  durationInput: "duration-input-E3yTcC",
  "duration-input-focused": "duration-input-focused-cVTsD0",
  durationInputFocused: "duration-input-focused-cVTsD0",
  "slider-wrap": "slider-wrap-hSCfNo",
  sliderWrap: "slider-wrap-hSCfNo",
  "slider-hover-area": "slider-hover-area-DRvFND",
  sliderHoverArea: "slider-hover-area-DRvFND",
  "slider-visual-rail": "slider-visual-rail-Do_XWE",
  sliderVisualRail: "slider-visual-rail-Do_XWE",
  "slider-visual-fill": "slider-visual-fill-Sjmoez",
  sliderVisualFill: "slider-visual-fill-Sjmoez",
  "slider-visual-tick": "slider-visual-tick-hvFbZO",
  sliderVisualTick: "slider-visual-tick-hvFbZO",
  "slider-visual-tick-hovered": "slider-visual-tick-hovered-aV7JhH",
  sliderVisualTickHovered: "slider-visual-tick-hovered-aV7JhH",
  slider: "slider-a77QCM",
  "slider-wrap-slider-hovered": "slider-wrap-slider-hovered-o6E_Kj",
  sliderWrapSliderHovered: "slider-wrap-slider-hovered-o6E_Kj",
  "slider-disabled-range": "slider-disabled-range-eEPIKd",
  sliderDisabledRange: "slider-disabled-range-eEPIKd",
  ticks: "ticks-uFiIV6",
  "tick-button": "tick-button-Rq9Qch",
  tickButton: "tick-button-Rq9Qch",
  "tick-label": "tick-label-_cFprS",
  tickLabel: "tick-label-_cFprS",
  "tick-button-hovered": "tick-button-hovered-zbM8Sn",
  tickButtonHovered: "tick-button-hovered-zbM8Sn",
};
function E(e, u) {
  let a;
  return u.reduce(
    (acc, item) => {
      if (Math.abs(item - e) < Math.abs(acc - e)) {
        return item;
      }
      return acc;
    },
    (a = u[0]) != null ? a : e,
  );
}
export { E as D };
function f(e, min, max, t) {
  const n = Math.min(Math.max(Math.round(e), min), max);
  if (t.length) {
    return E(n, t);
  }
  return n;
}
function D(e) {
  const u = Number.parseFloat(e);
  if (Number.isFinite(u)) {
    return u;
  }
}
function b(e, scaleMin, max) {
  if (max <= scaleMin) {
    return 0;
  }
  return ((e - scaleMin) / (max - scaleMin)) * 100;
}
export function P(e) {
  var {
    value,
    min,
    max,
    step,
    values,
    title,
    children,
    placeholder = "".concat(min, "-").concat(max),
    scaleMin = 0,
    tickInterval = 30,
    tickTargetCount = 6,
    tickSnapThreshold = 10,
    popoverWidth = 400,
    popoverStyle,
    position = "bl",
    triggerProps,
    smartDuration,
    disabledRangeTooltipContent,
    onChange,
    onPreviewChange,
  } = e;
  const [popupVisible, setPopupVisible] = c.useState(false);
  const [J, setJ] = c.useState("".concat(value));
  const [V, setV] = c.useState(false);
  const [H, setH] = c.useState(null);
  const [X, setX] = c.useState(false);
  const U = c.useMemo(
    () =>
      ((e) => {
        if (!(e == null ? undefined : e.length)) {
          return [];
        }
        const u = new Set();
        e.forEach((e) => {
          var a = Math.round(e);
          if (Number.isFinite(a)) {
            u.add(a);
          }
        });
        return [...u].sort((e, u) => e - u);
      })(values).filter((e) => e >= min && e <= max),
    [max, min, values],
  );
  const max_1 = c.useMemo(
    () => Math.max(max, min, scaleMin),
    [max, min, scaleMin],
  );
  const q = c.useMemo(
    () =>
      ((e, u, a, t) => {
        const n = Math.max(u, Math.round(e));
        if (n === u) {
          return [u];
        }
        for (
          var i = Math.max(a, Math.ceil(n / t / a) * a) || a, r = [], o = u;
          o < n;
          o += i
        ) {
          r.push(o);
        }
        if (!r.includes(n)) {
          r.push(n);
        }
        return r;
      })(max_1, scaleMin, tickInterval, tickTargetCount),
    [max_1, scaleMin, tickInterval, tickTargetCount],
  );
  const width = c.useMemo(() => {
    if (min > scaleMin) {
      return "max(0px, calc("
        .concat(b(min, scaleMin, max_1), "% - ")
        .concat(2, "px))");
    }
  }, [max_1, min, scaleMin]);
  const Y = c.useMemo(() => {
    if (width) {
      return {
        width,
      };
    }
  }, [width]);
  const ee = c.useMemo(
    () => ({
      popupAlign: {
        top: 8,
      },
    }),
    [],
  );
  const style = c.useMemo(
    () =>
      t._(
        {
          width: popoverWidth,
          maxWidth: popoverWidth,
        },
        popoverStyle,
      ),
    [popoverStyle, popoverWidth],
  );
  const triggerProps_1 = c.useMemo(
    () =>
      n._(t._({}, triggerProps), {
        className: _m(
          h.durationTrigger,
          triggerProps == null ? undefined : triggerProps.className,
        ),
        popupAlign: t._(
          {
            top: v.fs,
            bottom: v.fs,
          },
          triggerProps == null ? undefined : triggerProps.popupAlign,
        ),
      }),
    [triggerProps],
  );
  const et = c.useCallback(
    (e) => {
      var u = f(e, min, max, U);
      onChange(u);
      setJ("".concat(u));
    },
    [U, max, min, onChange],
  );
  const en = c.useMemo(() => {
    var e = D(J);
    if (typeof e !== "number") {
      return value;
    }
    return f(e, min, max, U);
  }, [J, U, max, min, value]);
  const ei = c.useMemo(
    () => ({
      "--content-generator-duration-progress": "".concat(
        b(en, scaleMin, max_1),
        "%",
      ),
    }),
    [max_1, en, scaleMin],
  );
  const er = c.useCallback(
    (e) => {
      var u = E(e, q);
      if (Math.abs(u - e) <= tickSnapThreshold) {
        return u;
      }
      return e;
    },
    [q, tickSnapThreshold],
  );
  c.useEffect(() => {
    if (!V) {
      setJ("".concat(value));
    }
  }, [V, value]);
  const eo = c.useCallback(
    (e, a) => {
      if (a === "arrow") {
        var t;
        var n;
        var i;
        var r;
        var o;
        et(
          ((t =
            typeof e === "number" && Number.isFinite(e)
              ? Math.round(e)
              : value),
          U.length
            ? t > value
              ? (n =
                  (i = U.find((e) => e > value)) != null
                    ? i
                    : U[U.length - 1]) != null
                ? n
                : value
              : t < value
                ? (r =
                    (o = [...U].reverse().find((e) => e < value)) != null
                      ? o
                      : U[0]) != null
                  ? r
                  : value
                : E(value, U)
            : t),
        );
        return;
      }
      var l = typeof e === "number" && Number.isFinite(e) ? "".concat(e) : "";
      if (onPreviewChange != null) {
        onPreviewChange(value);
      }
      setJ(l);
    },
    [et, U, onPreviewChange, value],
  );
  const el = c.useCallback(
    (e) => {
      var u = f(er(Math.max(e, min)), min, max, U);
      if (onPreviewChange != null) {
        onPreviewChange(u);
      }
      setJ("".concat(u));
    },
    [U, max, min, onPreviewChange, er],
  );
  const onAfterChange = c.useCallback(
    (e) => {
      var u = f(er(Math.max(e, min)), min, max, U);
      onChange(u);
      setJ("".concat(u));
    },
    [U, max, min, onChange, er],
  );
  const formatter = c.useCallback((e, u) => {
    if (u.userTyping) {
      return u.input;
    }
    return "".concat(e);
  }, []);
  const parser = c.useCallback(
    (e) =>
      ((e) => {
        const [u = "", ...a] = e.replace(/[^\d.]/g, "").split(".");
        if (a.length) {
          return "".concat(u, ".").concat(a.join(""));
        }
        return u;
      })(e),
    [],
  );
  const onFocus = c.useCallback(() => {
    setV(true);
  }, []);
  const onBlur = c.useCallback(() => {
    setV(false);
    var e = D(J);
    if (typeof e !== "number") {
      onChange(value);
      setJ("".concat(value));
      return;
    }
    et(e);
  }, [et, J, onChange, value]);
  const onKeyDown = c.useCallback(
    (e) => {
      if (e.key === "Enter") {
        var u = D(J);
        if (typeof u === "number") {
          et(u);
        }
      }
    },
    [et, J],
  );
  const onVisibleChange = c.useCallback((e) => {
    if (e) {
      setPopupVisible(true);
    } else {
      setH(null);
      setPopupVisible(false);
    }
  }, []);
  const onMouseEnter = c.useCallback(() => {
    setX(true);
  }, []);
  const eh = c.useCallback(() => {
    setX(false);
  }, []);
  const eE = c.useCallback(() => {
    setH(null);
  }, []);
  const content = c.useMemo(
    () =>
      i.jsxs("div", {
        className: h.durationPanel,
        children: [
          i.jsxs("div", {
            className: h.header,
            children: [
              i.jsx("div", {
                className: h.title,
                children: title,
              }),
              smartDuration
                ? i.jsxs("label", {
                    className: h.smartDurationSwitch,
                    children: [
                      i.jsx("span", {
                        className: h.smartDurationSwitchLabel,
                        children: smartDuration.label,
                      }),
                      i.jsx(o.A, {
                        size: "small",
                        checked: smartDuration.checked,
                        onChange: smartDuration.onChange,
                      }),
                    ],
                  })
                : null,
            ],
          }),
          i.jsxs("div", {
            className: _m(h.content, {
              [h.contentSmart]:
                smartDuration == null ? undefined : smartDuration.checked,
            }),
            children: [
              i.jsxs("div", {
                className: _m(h.sliderWrap, {
                  [h.sliderWrapSliderHovered]: X,
                }),
                children: [
                  i.jsxs("div", {
                    className: h.sliderHoverArea,
                    onMouseEnter,
                    onMouseLeave: eh,
                    children: [
                      i.jsxs("div", {
                        className: h.sliderVisualRail,
                        style: ei,
                        "aria-hidden": "true",
                        children: [
                          i.jsx("div", {
                            className: h.sliderVisualFill,
                          }),
                          q.map((e) => {
                            if (e === scaleMin || e === max_1) {
                              return null;
                            }
                            return i.jsx(
                              "span",
                              {
                                className: _m(h.sliderVisualTick, {
                                  [h.sliderVisualTickHovered]: H === e,
                                }),
                                style: {
                                  left: "".concat(b(e, scaleMin, max_1), "%"),
                                },
                              },
                              e,
                            );
                          }),
                        ],
                      }),
                      i.jsx(M_1, {
                        "aria-label": d.Ay.t(
                          "web_canva_agent_param_duration",
                          {},
                          "时长",
                        ),
                        className: h.slider,
                        min: scaleMin,
                        max: max_1,
                        step,
                        tooltipVisible: false,
                        value: en,
                        onAfterChange,
                        onChange: el,
                      }),
                      width && disabledRangeTooltipContent
                        ? i.jsx(r.A, {
                            content: disabledRangeTooltipContent,
                            position: "top",
                            triggerProps: ee,
                            children: i.jsx("div", {
                              className: h.sliderDisabledRange,
                              style: Y,
                            }),
                          })
                        : null,
                    ],
                  }),
                  i.jsx("div", {
                    className: h.ticks,
                    onMouseLeave: eE,
                    children: q.map((children_1) =>
                      i.jsx(
                        s.A,
                        {
                          htmlType: "button",
                          type: "text",
                          className: _m(h.tickButton, {
                            [h.tickButtonHovered]: H === children_1,
                            [h.tickButtonSelected]: en === children_1,
                          }),
                          style: {
                            left: "".concat(
                              b(children_1, scaleMin, max_1),
                              "%",
                            ),
                          },
                          onClick: () => et(children_1),
                          onMouseEnter: () => setH(children_1),
                          children: i.jsx("span", {
                            className: h.tickLabel,
                            children: children_1,
                          }),
                        },
                        children_1,
                      ),
                    ),
                  }),
                ],
              }),
              i.jsx("div", {
                className: h.inputWrap,
                children: i.jsx(F.m, {
                  className: _m(h.durationInput, {
                    [h.durationInputFocused]: V,
                  }),
                  unit: "s",
                  mode: "embed",
                  min,
                  max,
                  step,
                  value: J,
                  placeholder,
                  parseString: false,
                  formatter,
                  parser,
                  onBlur,
                  onChange: eo,
                  onFocus,
                  onKeyDown,
                }),
              }),
            ],
          }),
        ],
      }),
    [
      et,
      Y,
      disabledRangeTooltipContent,
      ee,
      width,
      V,
      J,
      max_1,
      q,
      onBlur,
      eo,
      onFocus,
      onKeyDown,
      onAfterChange,
      el,
      onMouseEnter,
      eh,
      eE,
      H,
      formatter,
      parser,
      max,
      min,
      placeholder,
      en,
      scaleMin,
      ei,
      X,
      smartDuration,
      step,
      title,
    ],
  );
  return i.jsx(l.A, {
    popupVisible,
    trigger: "click",
    position,
    className: h.durationPopover,
    style,
    triggerProps: triggerProps_1,
    showArrow: false,
    onVisibleChange,
    content,
    children,
  });
}
