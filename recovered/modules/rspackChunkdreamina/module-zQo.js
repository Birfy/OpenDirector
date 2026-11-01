import a from "oa";
import n from "bk";
import o from "qa";
import l from "z8";
import "kMQ";
import i from "RbS";
import s from "bT";
import _c from "xb";
import "Vx";
import "tQ";
import u from "Ix";
import v from "Vyy";
import m from "yw";
const h = s.memo(function (e) {
  const { option, selected = false, mode } = e;
  const { label, icon, extra } = option;
  const h = s.useMemo(() => {
    if (mode) {
      return l.jsx(v.A, {
        checked: selected,
        className: "select-option-checkbox-Hs9UB7",
      });
    }
    if (selected) {
      return l.jsx("div", {
        className: "select-option-check-icon-DqaO0g",
        children: l.jsx(m.iWP, {}),
      });
    }
    return null;
  }, [mode, selected]);
  const p = s.useMemo(() => {
    var e =
      typeof label === "string"
        ? l.jsx("span", {
            className: "select-option-label-text-Szlkxp",
            children: label,
          })
        : label;
    return l.jsxs("span", {
      className: "select-option-label-XBROeD",
      children: [
        l.jsxs("span", {
          className: "select-option-label-content-oBUCbL",
          children: [
            icon
              ? l.jsx("span", {
                  className: "select-option-icon-RznUsk",
                  children: icon,
                })
              : null,
            e,
          ],
        }),
        h,
      ],
    });
  }, [label, icon, h]);
  const f = s.useMemo(() => {
    if (extra == null) {
      return undefined;
    }
    return extra.tooltipProps;
  }, [extra == null ? undefined : extra.tooltipProps]);
  return s.useMemo(() => {
    if ((f == null ? undefined : f.content) == null) {
      return p;
    }
    return l.jsx(
      u.A,
      n._(a._({}, f), {
        children: p,
      }),
    );
  }, [f, p]);
});
function p(options) {
  if (!Array.isArray(options) || options.length === 0) {
    return false;
  }
  const [t] = options;
  return "options" in t && "key" in t && Array.isArray(t.options);
}
const f = [];
export var U = s.memo(
  s.forwardRef(function (e, t) {
    var {
      branded = false,
      compact = false,
      arrowIcon = null,
      className,
      placeholder,
      triggerElement,
      triggerProps,
      options = [],
      mode,
      value = mode === "multiple" ? f : "",
      onChange,
      onClick,
      onKeyDown,
      onMouseEnter,
      onMouseLeave,
    } = e;
    const M = o._(e, [
      "branded",
      "compact",
      "arrowIcon",
      "className",
      "placeholder",
      "triggerElement",
      "triggerProps",
      "options",
      "mode",
      "value",
      "onChange",
      "onClick",
      "onKeyDown",
      "onMouseEnter",
      "onMouseLeave",
    ]);
    const N = s.useMemo(() => {
      if (p(options)) {
        return options.flatMap((e) => e.options);
      }
      return options;
    }, [options]);
    const S = s.useMemo(() => {
      if (Array.isArray(value)) {
        return undefined;
      }
      return N.find((e) => e.value === value);
    }, [N, value]);
    const { label, icon } = S != null ? S : {};
    const renderFormat = s.useCallback(() => {
      if (S) {
        return l.jsxs(l.Fragment, {
          children: [
            icon
              ? l.jsx("span", {
                  className: "select-option-icon-K1W0ww",
                  children: icon,
                })
              : null,
            compact ? null : label,
          ],
        });
      }
      return l.jsx("span", {
        className: "select-placeholder-JNuIR6",
        children: placeholder,
      });
    }, [S, label, icon, compact, placeholder]);
    const triggerProps_1 = s.useMemo(
      () =>
        n._(
          a._(
            {
              containerScrollToClose: true,
            },
            triggerProps,
          ),
          {
            className: _c(
              "trigger-LPRxSr",
              triggerProps == null ? undefined : triggerProps.className,
            ),
          },
        ),
      [triggerProps],
    );
    const P = s.useCallback(
      (e) =>
        e.map((option) =>
          l.jsx(
            i.A.Option,
            {
              value: option.value,
              disabled: option.disabled,
              children: l.jsx(h, {
                option,
                selected: Array.isArray(value)
                  ? value.includes(option.value)
                  : value === option.value,
                mode,
              }),
            },
            option.value,
          ),
        ),
      [value, mode],
    );
    const children = s.useMemo(() => {
      if (p(options)) {
        return options.map((e) =>
          l.jsx(
            i.A.OptGroup,
            {
              label: e.label,
              children: P(e.options),
            },
            e.key,
          ),
        );
      }
      return P(options);
    }, [options, P]);
    const FRef = s.useRef(null);
    s.useImperativeHandle(t, () => FRef.current);
    const triggerElement_1 = s.useMemo(() => {
      if (!triggerElement || !s.isValidElement(triggerElement)) {
        return triggerElement;
      }
      var {
        tabIndex,
        onKeyDown: onKeyDown_1,
        onMouseEnter: onMouseEnter_1,
        onMouseLeave: onMouseLeave_1,
      } = triggerElement.props;
      return s.cloneElement(triggerElement, {
        tabIndex: tabIndex != null ? tabIndex : 0,
        onKeyDown: (e) => {
          var r;
          if (onKeyDown_1 != null) {
            onKeyDown_1(e);
          }
          if (onKeyDown != null) {
            onKeyDown(e);
          }
          if ((r = FRef.current) != null) {
            r.hotkeyHandler(e.nativeEvent);
          }
        },
        onMouseEnter: (e) => {
          if (onMouseEnter_1 != null) {
            onMouseEnter_1(e);
          }
          if (onMouseEnter != null) {
            onMouseEnter(e);
          }
        },
        onMouseLeave: (e) => {
          if (onMouseLeave_1 != null) {
            onMouseLeave_1(e);
          }
          if (onMouseLeave != null) {
            onMouseLeave(e);
          }
        },
      });
    }, [triggerElement, onKeyDown, onMouseEnter, onMouseLeave]);
    const H = s.useCallback(
      (e) => {
        if (!p(options)) {
          return options.find((t) => t.value === e);
        }
        for (var t of options) {
          var r = t.options.find((t) => t.value === e);
          if (r) {
            return r;
          }
        }
      },
      [options],
    );
    const onChange_1 = s.useCallback(
      (e) => {
        if (e !== undefined && onChange) {
          if (mode === "multiple") {
            var t = Array.isArray(e) ? e : [e];
            var r = t.map((e) => H(e)).filter((e) => e !== undefined);
            onChange(t, r);
            return;
          }
          if (!Array.isArray(e)) {
            var a = H(e);
            if (a) {
              if (!p(options)) {
                return void onChange(e, a);
              }
              for (var n of options) {
                if (n.options.some((t) => t.value === e)) {
                  return void onChange(e, a, n);
                }
              }
            }
          }
        }
      },
      [H, mode, onChange, options],
    );
    const onClick_1 = s.useCallback(
      (e) => {
        requestAnimationFrame(() => {
          var e;
          if ((e = FRef.current) != null) {
            e.focus();
          }
        });
        if (onClick != null) {
          onClick(e);
        }
      },
      [onClick],
    );
    const onKeyDown_1 = s.useCallback(
      (e) => {
        if (e.code === "Space") {
          var t;
          e.preventDefault();
          if ((t = FRef.current) != null) {
            t.dom.click();
          }
        }
        if (onKeyDown != null) {
          onKeyDown(e);
        }
      },
      [onKeyDown],
    );
    return l.jsx(
      i.A,
      n._(
        a._(
          {
            ref: FRef,
            renderFormat,
          },
          M,
        ),
        {
          arrowIcon: compact ? null : arrowIcon,
          className: _c(className, "select-YIF4zj", {
            "branded-yBp34x": branded,
            "compact-zpSAgX": compact,
          }),
          triggerProps: triggerProps_1,
          triggerElement: triggerElement_1,
          mode,
          value,
          onChange: onChange_1,
          onClick: onClick_1,
          onKeyDown: onKeyDown_1,
          children,
        },
      ),
    );
  }),
);
