import r from "bT";
import { A as A_1 } from "./module-puV.js";
import { A as A_2 } from "./module-hn.js";
import { A as A_3 } from "./module-W3.js";
import a from "JXb";
import { A as A_4 } from "./module-Cu.js";
import { Gv } from "./module-Pl5.js";
import { A as A_5 } from "./module-Wiq.js";
import { A as A_6 } from "./module-Hmv.js";
import { A as A_7 } from "./module-xn_2.js";
export var A = r.forwardRef(function (e, t) {
  const {
    allowClear,
    disabled,
    placeholder,
    className,
    style,
    height,
    prefixCls,
    hasParent,
    size,
    value,
    autoFitWidth,
    onClear,
    readOnly,
    onChange,
    onKeyDown,
    onPressEnter,
    maxLength,
    ...rest
  } = e;
  const I = A_2(rest, [
    "error",
    "status",
    "showWordLimit",
    "className",
    "defaultValue",
    "addBefore",
    "addAfter",
    "afterStyle",
    "beforeStyle",
    "prefix",
    "suffix",
  ]);
  const F = A_6();
  const MRef = r.useRef();
  const ref = r.useRef();
  const VRef = r.useRef(null);
  const maxLength_1 = Gv(maxLength)
    ? maxLength.errorOnly
      ? undefined
      : maxLength.length
    : maxLength;
  const z = A_5({
    value,
    maxLength: maxLength_1,
    onChange,
    onKeyDown,
    onPressEnter,
  });
  const z_compositionValue = z.compositionValue;
  const z_valueChangeHandler = z.valueChangeHandler;
  const z_compositionHandler = z.compositionHandler;
  const z_keyDownHandler = z.keyDownHandler;
  const z_triggerValueChangeCallback = z.triggerValueChangeCallback;
  const className_1 = A_1(
    prefixCls,
    prefixCls && {
      [prefixCls + "-size-" + size]: size,
      [prefixCls + "-" + e.status]: e.status,
      [prefixCls + "-disabled"]: disabled,
    },
    hasParent ? undefined : className,
  );
  const U = {
    "aria-invalid": e.status === "error" || undefined,
    ...I,
    readOnly,
    maxLength: maxLength_1,
    disabled,
    placeholder,
    value: z_compositionValue || value || "",
    className: className_1,
    onKeyDown: z_keyDownHandler,
    onChange: z_valueChangeHandler,
    onCompositionStart: z_compositionHandler,
    onCompositionUpdate: z_compositionHandler,
    onCompositionEnd: z_compositionHandler,
  };
  r.useImperativeHandle(
    t,
    function () {
      return {
        dom: MRef.current,
        focus: function () {
          if (MRef.current && MRef.current.focus) {
            MRef.current.focus();
          }
        },
        blur: function () {
          if (MRef.current && MRef.current.blur) {
            MRef.current.blur();
          }
        },
      };
    },
    [],
  );
  const Q = function () {
    if (ref.current && MRef.current) {
      if (!U.value && placeholder) {
        MRef.current.style.width = null;
      } else {
        const e = ref.current.offsetWidth;
        MRef.current.style.width = `${e + (e ? 8 : 4)}px`;
      }
    }
  };
  r.useEffect(function () {
    return autoFitWidth && Q();
  }, []);
  const q = U.value || placeholder;
  const onPressEnter_1 = function (e) {
    if (MRef.current && MRef.current.focus) {
      MRef.current.focus();
    }
    z_triggerValueChangeCallback("", e);
    if (onClear) {
      onClear();
    }
  };
  return r.createElement(
    r.Fragment,
    null,
    allowClear
      ? r.createElement(
          r.Fragment,
          null,
          r.createElement("input", {
            ref: MRef,
            ...U,
          }),
          !readOnly && !disabled && allowClear && value
            ? r.createElement(
                A_4,
                {
                  tabIndex: 0,
                  className: prefixCls + "-clear-icon",
                  ...F({
                    onPressEnter: onPressEnter_1,
                  }),
                  onClick: function (e) {
                    e.stopPropagation();
                    onPressEnter_1(e);
                  },
                },
                r.createElement(a.A, {
                  onMouseDown: function (e) {
                    e.preventDefault();
                  },
                }),
              )
            : null,
        )
      : r.createElement("input", {
          ref: MRef,
          ...U,
          style: hasParent
            ? {}
            : {
                ...style,
                ...("height" in e
                  ? {
                      height,
                    }
                  : {}),
              },
        }),
    autoFitWidth &&
      r.createElement(
        A_3,
        {
          onResize: function () {
            const offsetWidth = ref.current.offsetWidth;
            if (typeof autoFitWidth === "object") {
              const t =
                typeof autoFitWidth.delay === "function"
                  ? autoFitWidth.delay(offsetWidth, VRef.current)
                  : autoFitWidth.delay;
              if (t) {
                setTimeout(Q, t);
              } else {
                Q();
              }
            } else {
              Q();
            }
            VRef.current = offsetWidth;
          },
        },
        r.createElement(
          "span",
          {
            className: prefixCls + "-mirror",
            ref,
          },
          A_7(q),
        ),
      ),
  );
});
A.displayName = "InputComponent";
