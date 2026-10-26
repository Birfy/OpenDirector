import a from "oa";
import r from "bk";
import o from "qa";
import l from "z8";
import i from "bT";
import _c from "xb";
import { R as R_1 } from "./module-Du8.js";
import { b as b_1 } from "./module-qO.js";
import m from "./module-Ps.js";
import { G, f } from "./module-Lt.js";
import { A as A_1 } from "./module-kD_2.js";
export var d = i.memo(
  i.forwardRef(function (e, t) {
    const {
      className,
      style,
      onClick,
      onMouseEnter,
      onMouseLeave,
      onFocusCapture,
      onBlurCapture,
    } = e;
    const y = o._(e, [
      "className",
      "style",
      "onClick",
      "onMouseEnter",
      "onMouseLeave",
      "onFocusCapture",
      "onBlurCapture",
    ]);
    const k = i.useContext(R_1);
    const { appearance, onInputInteractionChange, contentGeneratorRef } = k;
    const _Ref = i.useRef({
      hovered: false,
      focused: false,
    });
    i.useEffect(() => {
      if (onInputInteractionChange != null) {
        onInputInteractionChange(_Ref.current.hovered || _Ref.current.focused);
      }
      return () => {
        if (onInputInteractionChange == null) {
          return undefined;
        }
        return onInputInteractionChange(false);
      };
    }, [onInputInteractionChange]);
    const j = i.useCallback(
      (e, t) => {
        _Ref.current[e] = t;
        if (onInputInteractionChange != null) {
          onInputInteractionChange(
            _Ref.current.hovered || _Ref.current.focused,
          );
        }
      },
      [onInputInteractionChange],
    );
    const { contentGeneratorRef: contentGeneratorRef_1 } = i.useContext(b_1);
    const ref = i.useCallback(
      (e) => {
        if (typeof t === "function") {
          t(e);
        } else if (t) {
          t.current = e;
        }
        if (contentGeneratorRef_1) {
          contentGeneratorRef_1.current = e;
        }
        if (contentGeneratorRef != null) {
          contentGeneratorRef(e);
        }
      },
      [t, contentGeneratorRef_1, contentGeneratorRef],
    );
    const style_1 = i.useMemo(
      () =>
        r._(a._({}, style), {
          "--content-generator-collapse-transition-duration": "".concat(
            m.Pb,
            "ms",
          ),
          "--content-generator-collapse-transition-timing-function": m.Ir,
        }),
      [style],
    );
    const onClick_1 = i.useCallback(
      (e) => {
        e.stopPropagation();
        if (onClick != null) {
          onClick(e);
        }
      },
      [onClick],
    );
    return l.jsx(
      "div",
      r._(
        a._(
          {
            ref,
          },
          y,
        ),
        {
          className: _c("dimension-layout-HxNk4E", className, {
            "main-frame-2026-gQwf30": f(appearance),
            [A_1.mainFrame2026Oversea]: G(k),
          }),
          style: style_1,
          onClick: onClick_1,
          onMouseEnter: (e) => {
            j("hovered", true);
            if (onMouseEnter != null) {
              onMouseEnter(e);
            }
          },
          onMouseLeave: (e) => {
            j("hovered", false);
            if (onMouseLeave != null) {
              onMouseLeave(e);
            }
          },
          onFocusCapture: (e) => {
            if (e.currentTarget.contains(e.target)) {
              j("focused", true);
            }
            if (onFocusCapture != null) {
              onFocusCapture(e);
            }
          },
          onBlurCapture: (e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) {
              j("focused", false);
            }
            if (onBlurCapture != null) {
              onBlurCapture(e);
            }
          },
        },
      ),
    );
  }),
);
