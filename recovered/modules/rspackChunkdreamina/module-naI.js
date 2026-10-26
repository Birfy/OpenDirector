import r from "oa";
import o from "bk";
import i from "qa";
import l from "z8";
import s from "bT";
import { A as A_1 } from "./module-d1.js";
import { A as A_2 } from "./module-MA.js";
import { A as A_3 } from "./module-LFK.js";
import { A as A_4 } from "./module-hl_2.js";
import { A as A_5 } from "./module-feV.js";
import { Gv } from "./module-NnE_2.js";
import { A as A_6 } from "./module-PSO.js";
import { A as A_7 } from "./module-OBF.js";
export let A = s.forwardRef((e, t) => {
  let {
    allowClear,
    error,
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
  } = e;
  let T = i._(e, [
    "allowClear",
    "error",
    "disabled",
    "placeholder",
    "className",
    "style",
    "height",
    "prefixCls",
    "hasParent",
    "size",
    "value",
    "autoFitWidth",
    "onClear",
    "readOnly",
    "onChange",
    "onKeyDown",
    "onPressEnter",
    "maxLength",
  ]);
  let S = A_2(T, [
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
  let D = A_7();
  let RRef = s.useRef();
  let IRef = s.useRef();
  let zRef = s.useRef(null);
  let [V, setV] = s.useState(null);
  let maxLength_1 = Gv(maxLength)
    ? maxLength.errorOnly
      ? undefined
      : maxLength.length
    : maxLength;
  let {
    compositionValue,
    valueChangeHandler,
    compositionHandler,
    keyDownHandler,
    triggerValueChangeCallback,
  } = A_6({
    value,
    maxLength: maxLength_1,
    onChange,
    onKeyDown,
    onPressEnter,
  });
  let className_1 = A_1(
    prefixCls,
    prefixCls && {
      [`${prefixCls}-size-${size}`]: size,
      [`${prefixCls}-error`]: error,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-readonly`]: readOnly,
    },
    hasParent ? undefined : className,
  );
  let U = o._(
    r._(
      {
        "aria-invalid": error,
      },
      S,
    ),
    {
      readOnly,
      maxLength: maxLength_1,
      disabled,
      placeholder,
      value: compositionValue || value || "",
      className: className_1,
      onKeyDown: keyDownHandler,
      onChange: valueChangeHandler,
      onCompositionStart: compositionHandler,
      onCompositionUpdate: compositionHandler,
      onCompositionEnd: compositionHandler,
    },
  );
  s.useImperativeHandle(
    t,
    () => ({
      dom: RRef.current,
      focus: () => {
        if (RRef.current && RRef.current.focus) {
          RRef.current.focus();
        }
      },
      blur: () => {
        if (RRef.current && RRef.current.blur) {
          RRef.current.blur();
        }
      },
    }),
    [],
  );
  let Z = () => {
    if (IRef.current && RRef.current) {
      if (!U.value && placeholder) {
        setV(null);
      } else {
        let e = IRef.current.offsetWidth;
        setV(e + (e ? 8 : 4));
      }
    }
  };
  s.useEffect(() => autoFitWidth && Z(), []);
  let Q = U.value || placeholder;
  let onPressEnter_1 = (e) => {
    if (RRef.current && RRef.current.focus) {
      RRef.current.focus();
    }
    triggerValueChangeCallback("", e);
    if (onClear) {
      onClear();
    }
  };
  return l.jsxs(l.Fragment, {
    children: [
      allowClear
        ? l.jsxs(l.Fragment, {
            children: [
              l.jsx(
                "input",
                r._(
                  {
                    ref: RRef,
                  },
                  U,
                ),
              ),
              !readOnly && !disabled && allowClear && value
                ? l.jsx(
                    A_5,
                    o._(
                      r._(
                        {
                          tabIndex: 0,
                          className: `${prefixCls}-clear-icon`,
                        },
                        D({
                          onPressEnter: onPressEnter_1,
                        }),
                      ),
                      {
                        onClick: (e) => {
                          e.stopPropagation();
                          onPressEnter_1(e);
                        },
                        children: l.jsx(A_4, {
                          onMouseDown: (e) => {
                            e.preventDefault();
                          },
                        }),
                      },
                    ),
                  )
                : null,
            ],
          })
        : l.jsx(
            "input",
            o._(
              r._(
                {
                  ref: RRef,
                },
                U,
              ),
              {
                style: hasParent
                  ? {}
                  : r._(
                      {},
                      style,
                      "height" in e
                        ? {
                            height,
                          }
                        : {},
                      typeof V === "number"
                        ? {
                            width: V,
                          }
                        : {},
                    ),
              },
            ),
          ),
      autoFitWidth &&
        l.jsx(A_3, {
          onResize: () => {
            let offsetWidth = IRef.current.offsetWidth;
            if (typeof autoFitWidth === "object") {
              let t =
                typeof autoFitWidth.delay === "function"
                  ? autoFitWidth.delay(offsetWidth, zRef.current)
                  : autoFitWidth.delay;
              if (t) {
                setTimeout(Z, t);
              } else {
                Z();
              }
            } else {
              Z();
            }
            zRef.current = offsetWidth;
          },
          children: l.jsx("span", {
            className: `${prefixCls}-mirror`,
            ref: IRef,
            children: Q && Q.replace(/\s/g, "\xa0"),
          }),
        }),
    ],
  });
});
A.displayName = "InputComponent";
