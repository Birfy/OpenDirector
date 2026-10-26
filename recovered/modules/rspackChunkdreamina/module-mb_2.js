import o from "oa";
import i from "bk";
import l from "z8";
import s from "bT";
import { A as A_1 } from "./module-Ww_2.js";
import c from "qa";
import { A as A_2 } from "./module-R8.js";
import { A as A_3 } from "./module-igg.js";
import { A as A_4 } from "./module-Sc_2.js";
import { QO } from "./module-mY_2.js";
import { A as A_5 } from "./module-vC_2.js";
import { A as A_6 } from "./module-P7_2.js";
import { Et, Gv, Kg, b0 } from "./module-V9.js";
import { A as A_7 } from "./module-mf_2.js";
import { A as A_8 } from "./module-aZD.js";
import { A as A_9 } from "./module-ZF_2.js";
import { A as A_10 } from "./module-Ig_2.js";
import P from "fyk";
import "U4";
import { V } from "./module-Tb.js";
import { A as A_11 } from "./module-K7F.js";
import { A as A_12 } from "./module-CZ_2.js";
import { gR } from "./module-a3_2.js";
import { A as A_13 } from "./module-k6B.js";
let r;
let v = s.forwardRef((e, t) => {
  let { getPrefixCls } = s.useContext(QO);
  let [r, v] = A_5("", {
    defaultValue:
      "defaultValue" in e ? K(e.defaultValue, e.maxLength) : undefined,
    value: "value" in e ? K(e.value, e.maxLength) : undefined,
  });
  let {
    className,
    style,
    placeholder,
    disabled,
    searchButton,
    loading,
    defaultValue,
  } = e;
  let C = c._(e, [
    "className",
    "style",
    "placeholder",
    "disabled",
    "searchButton",
    "loading",
    "defaultValue",
  ]);
  let N = getPrefixCls("input-search");
  let P = A_1(
    N,
    {
      [`${N}-button`]: searchButton,
    },
    className,
  );
  let $ = (t) => {
    if (!disabled && e.onSearch) {
      e.onSearch(r);
    }
    if (e.onPressEnter) {
      e.onPressEnter(t);
    }
  };
  return l.jsx(
    A,
    i._(o._({}, A_4(C, ["onSearch"])), {
      disabled,
      className: P,
      style,
      ref: t,
      placeholder,
      addAfter: searchButton
        ? l.jsx(A_2, {
            disabled,
            size: C.size,
            className: `${N}-btn`,
            type: "primary",
            onClick: $,
            loading,
            loadingFixedWidth: true,
            icon: searchButton === true && !loading && l.jsx(A_3, {}),
            children: searchButton !== true && searchButton,
          })
        : null,
      suffix:
        !searchButton &&
        (loading
          ? l.jsx(A_6, {})
          : l.jsx(A_3, {
              onClick: $,
            })),
      onChange: (t, n) => {
        v(t);
        if (e.onChange) {
          e.onChange(t, n);
        }
      },
      defaultValue,
      onPressEnter: $,
    }),
  );
});
v.displayName = "Search";
let y = `
  position: absolute;
  min-height: 0 !important;
  max-height: none;
  height:0;
  visibility: hidden;
  z-index: -100;
  top: 0;
  right: 0;
`;
let b = [
  "border-width",
  "box-sizing",
  "font-family",
  "font-weight",
  "font-size",
  "font-variant",
  "letter-spacing",
  "line-height",
  "padding-top",
  "padding-bottom",
  "padding-left",
  "padding-right",
  "text-indent",
  "text-rendering",
  "text-transform",
  "width",
];
const x = (autoSize, t, n) => {
  if (autoSize) {
    let o;
    let i;
    let l;
    let minRows_1;
    let maxRows_1;
    let c;
    let u;
    let paddingSize_1;
    if (Gv(autoSize)) {
      minRows_1 = autoSize.minRows;
      maxRows_1 = autoSize.maxRows;
    }
    let { minRows, maxRows } = {
      minRows: minRows_1,
      maxRows: maxRows_1,
    };
    if (!r) {
      r = document.createElement("textarea");
      if (n) {
        r.classList.add(`${n}-autosize-mirror`);
      }
      document.body.appendChild(r);
    }
    c = window.getComputedStyle(t);
    u = `
    ${b.map((e) => `${e}:${c.getPropertyValue(e)}`).join(";")}
  `;
    r.setAttribute("style", `${y}${u}`);
    paddingSize_1 =
      parseFloat(c.getPropertyValue("padding-top")) +
      parseFloat(c.getPropertyValue("padding-bottom"));
    let { paddingSize, boxSizing, borderSize } = {
      paddingSize: paddingSize_1,
      boxSizing: c.getPropertyValue("box-sizing"),
      borderSize:
        parseFloat(c.getPropertyValue("border-top-width")) +
        parseFloat(c.getPropertyValue("border-bottom-width")),
    };
    r.value = t.value || t.placeholder || "";
    let x = r.scrollHeight + borderSize;
    if (minRows || maxRows) {
      r.value = "";
      let e = r.scrollHeight - paddingSize;
      if (Et(minRows)) {
        o = e * minRows;
        if (boxSizing === "border-box") {
          o += paddingSize;
          o += borderSize;
        }
        x = Math.max(x, o);
      }
      if (Et(maxRows)) {
        i = e * maxRows;
        if (boxSizing === "border-box") {
          i += paddingSize;
          i += borderSize;
        }
        l = x > i ? "auto" : "";
        i = Math.min(x, i);
      }
    }
    let w = {};
    w.height = x;
    if (o) {
      w.minHeight = o;
    }
    if (i) {
      w.maxHeight = i;
    }
    if (l) {
      w.overflowY = l;
    }
    return w;
  }
};
let N = s.forwardRef((e, t) => {
  let {
    className,
    style,
    wrapperStyle,
    placeholder,
    disabled,
    readOnly,
    error,
    maxLength,
    showWordLimit,
    allowClear,
    onChange,
    onClear,
    onKeyDown,
    onPressEnter,
  } = e;
  let _ = c._(e, [
    "className",
    "style",
    "wrapperStyle",
    "placeholder",
    "disabled",
    "readOnly",
    "error",
    "maxLength",
    "showWordLimit",
    "allowClear",
    "onChange",
    "onClear",
    "onKeyDown",
    "onPressEnter",
  ]);
  let M = Gv(maxLength) ? maxLength.length : maxLength;
  let maxLength_1 = Gv(maxLength)
    ? maxLength.errorOnly
      ? undefined
      : maxLength.length
    : maxLength;
  let SRef = s.useRef();
  let [D, setD] = s.useState({});
  let [I, z] = A_5("", {
    defaultValue:
      "defaultValue" in e ? K(e.defaultValue, maxLength_1) : undefined,
    value: "value" in e ? K(e.value, maxLength_1) : undefined,
  });
  let {
    compositionValue,
    compositionHandler,
    valueChangeHandler,
    keyDownHandler,
    triggerValueChangeCallback,
  } = A_10({
    value: I,
    maxLength: maxLength_1,
    onChange,
    onKeyDown,
    onPressEnter,
    beforeTriggerValueChangeCallback: (t) => {
      if (
        !(
          "value" in e ||
          (maxLength_1 !== undefined && !(t.length <= maxLength_1))
        )
      ) {
        z(t);
      }
    },
  });
  let { getPrefixCls, rtl } = s.useContext(QO);
  let G = getPrefixCls("textarea");
  if (disabled) {
    D.resize = "none";
  }
  let U = () => {
    if (SRef.current && SRef.current.focus) {
      if (SRef.current.setSelectionRange) {
        let e = SRef.current.textContent.length;
        SRef.current.setSelectionRange(e, e);
      }
      SRef.current.focus();
    }
  };
  let resizeTextAreaHeight = () => {
    let t = x(e.autoSize, SRef.current, G);
    if (t) {
      setD(t);
    }
  };
  A_9(() => {
    resizeTextAreaHeight();
  }, [I]);
  s.useImperativeHandle(
    t,
    () => ({
      dom: SRef.current,
      focus: () => {
        U();
      },
      blur: () => {
        if (SRef.current && SRef.current.blur) {
          SRef.current.blur();
        }
      },
      resizeTextAreaHeight,
    }),
    [],
  );
  let Q = I ? I.length : 0;
  let q = (M && showWordLimit) || allowClear;
  let X = s.useMemo(() => !maxLength_1 && !!M && Q > M, [Q, M, maxLength_1]);
  let J = A_1(
    G,
    {
      [`${G}-error`]: error || X,
      [`${G}-disabled`]: disabled,
      [`${G}-readonly`]: readOnly,
      [`${G}-rtl`]: rtl,
      [`${G}-wording-padding`]: showWordLimit,
    },
    className,
  );
  let ee = l.jsx(
    "textarea",
    i._(o._({}, A_4(_, ["autoSize", "defaultValue"])), {
      maxLength: maxLength_1,
      ref: SRef,
      style: o._({}, style, D),
      className: J,
      placeholder,
      disabled,
      value: compositionValue || I || "",
      onChange: valueChangeHandler,
      onKeyDown: keyDownHandler,
      onCompositionStart: compositionHandler,
      onCompositionUpdate: compositionHandler,
      onCompositionEnd: compositionHandler,
    }),
  );
  if (q) {
    let e = !disabled && allowClear && I;
    let [t, n] = rtl ? [M, Q] : [Q, M];
    return l.jsxs("div", {
      className: A_1(`${G}-wrapper`, {
        [`${G}-clear-wrapper`]: allowClear,
        [`${G}-wrapper-rtl`]: rtl,
      }),
      style: wrapperStyle,
      children: [
        ee,
        e
          ? l.jsx(A_8, {
              className: `${G}-clear-icon`,
              children: l.jsx(A_7, {
                onClick: (e) => {
                  e.stopPropagation();
                  U();
                  triggerValueChangeCallback("", e);
                  if (onClear) {
                    onClear();
                  }
                },
                onMouseDown: (e) => {
                  e.preventDefault();
                },
              }),
            })
          : null,
        M &&
          showWordLimit &&
          l.jsxs("span", {
            className: A_1(`${G}-word-limit`, {
              [`${G}-word-limit-error`]: X,
            }),
            children: [t, "/", n],
          }),
      ],
    });
  }
  return ee;
});
N.displayName = "TextArea";
const T = s.forwardRef(function (e, t) {
  const prefixCls = s.useContext(V).prefixCls;
  const r = prefixCls === undefined ? "lv" : prefixCls;
  const e_spin = e.spin;
  const e_className = e.className;
  const l = {
    "aria-hidden": true,
    focusable: false,
    ref: t,
    ...e,
    className: `${e_className ? e_className + " " : ""}`
      .concat(r, "-icon ")
      .concat(r, "-icon-eye"),
  };
  if (e_spin) {
    l.className = "".concat(l.className, " ").concat(r, "-icon-loading");
  }
  delete l.spin;
  delete l.isIcon;
  return s.createElement(
    "svg",
    P(
      {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "4",
        viewBox: "0 0 48 48",
      },
      l,
    ),
    s.createElement("path", {
      fillRule: "evenodd",
      d: "M24 37c6.627 0 12.627-4.333 18-13-5.373-8.667-11.373-13-18-13-6.627 0-12.627 4.333-18 13 5.373 8.667 11.373 13 18 13Z",
      clipRule: "evenodd",
    }),
    s.createElement("path", {
      d: "M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z",
    }),
  );
});
T.defaultProps = {
  isIcon: true,
};
T.displayName = "IconEye";
const R = s.forwardRef(function (e, t) {
  const prefixCls = s.useContext(V).prefixCls;
  const r = prefixCls === undefined ? "lv" : prefixCls;
  const e_spin = e.spin;
  const e_className = e.className;
  const l = {
    "aria-hidden": true,
    focusable: false,
    ref: t,
    ...e,
    className: `${e_className ? e_className + " " : ""}`
      .concat(r, "-icon ")
      .concat(r, "-icon-eye-invisible"),
  };
  if (e_spin) {
    l.className = "".concat(l.className, " ").concat(r, "-icon-loading");
  }
  delete l.spin;
  delete l.isIcon;
  return s.createElement(
    "svg",
    P(
      {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "4",
        viewBox: "0 0 48 48",
      },
      l,
    ),
    s.createElement("path", {
      d: "M14 14.5c-2.69 2-5.415 5.33-8 9.5 5.373 8.667 11.373 13 18 13 3.325 0 6.491-1.09 9.5-3.271M17.463 12.5C19 11 21.75 11 24 11c6.627 0 12.627 4.333 18 13-1.766 2.848-3.599 5.228-5.5 7.14",
    }),
    s.createElement("path", {
      d: "M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM6.852 7.103l34.294 34.294",
    }),
  );
});
R.defaultProps = {
  isIcon: true,
};
R.displayName = "IconEyeInvisible";
let z = s.forwardRef((e, t) => {
  let [n, r] = A_5(false, {
    defaultValue: e.defaultVisibility,
    value: e.visibility,
  });
  let { getPrefixCls } = s.useContext(QO);
  let d = A_11();
  let { className, visibilityToggle, onVisibilityChange } = e;
  let y = c._(e, ["className", "visibilityToggle", "onVisibilityChange"]);
  let b = getPrefixCls("input-password");
  let x = A_1(
    b,
    {
      [`${b}-visibility`]: visibilityToggle,
    },
    className,
  );
  let e_suffix = e.suffix;
  let j = () => {
    var t;
    t = !n;
    if (!("visibility" in e)) {
      r(t);
    }
    if (onVisibilityChange) {
      onVisibilityChange(t);
    }
  };
  if (visibilityToggle) {
    let t = o._(
      {
        onClick: j,
        onMouseDown: (e) => e.preventDefault(),
        onMouseUp: (e) => e.preventDefault(),
      },
      d({
        onPressEnter: j,
      }),
    );
    if (e.suffix) {
      e_suffix = l.jsx(
        "span",
        i._(o._({}, t), {
          children: e.suffix,
        }),
      );
    } else {
      let e = n ? T : R;
      e_suffix = l.jsx(
        e,
        i._(o._({}, t), {
          focusable: undefined,
          "aria-hidden": undefined,
          tabIndex: 0,
          className: `${b}-visibility-icon`,
        }),
      );
    }
  }
  return l.jsx(
    A,
    i._(o._({}, A_4(y, ["visibility", "defaultVisibility"])), {
      type: n ? "text" : "password",
      className: x,
      ref: t,
      suffix: e_suffix,
    }),
  );
});
z.displayName = "Password";
z.defaultProps = {
  visibilityToggle: true,
};
let W = s.forwardRef((e, t) => {
  let { getPrefixCls } = s.useContext(QO);
  let { className, style, children, compact } = e;
  let h = c._(e, ["className", "style", "children", "compact"]);
  let m = getPrefixCls("input-group");
  let v = A_1(
    m,
    {
      [`${m}-compact`]: compact,
    },
    className,
  );
  return l.jsx(
    "div",
    i._(
      o._(
        {
          ref: t,
          className: v,
          style,
        },
        h,
      ),
      {
        children,
      },
    ),
  );
});
W.displayName = "InputGroup";
let onMouseDown = (e) => {
  if (e.target.tagName !== "INPUT") {
    e.preventDefault();
  }
};
let F = (e, t, style = {}, onClick) => {
  if (t) {
    return l.jsx("span", {
      style,
      className: e,
      onClick,
      children: t,
    });
  }
  return null;
};
function K(e, t) {
  let n = e === null || b0(e) || Kg(e) ? e || "" : String(e);
  if (t) {
    return n.slice(0, t);
  }
  return n;
}
export let A = s.forwardRef(function (e, t) {
  let { getPrefixCls, size, componentConfig, rtl } = s.useContext(QO);
  let d = A_13(
    e,
    {},
    componentConfig == null ? undefined : componentConfig.Input,
  );
  let {
    className,
    style,
    addBefore,
    addAfter,
    suffix,
    prefix,
    beforeStyle,
    afterStyle,
    height,
    disabled,
    readOnly,
    maxLength,
    showWordLimit,
    allowClear,
  } = d;
  let A = Gv(maxLength) ? maxLength.length : maxLength;
  let E = Gv(maxLength) && maxLength.errorOnly ? undefined : A;
  let [_, set_] = s.useState(false);
  let TRef = s.useRef();
  let SRef = s.useRef();
  let [D, R] = A_5("", {
    defaultValue: "defaultValue" in d ? K(d.defaultValue, E) : undefined,
    value: "value" in d ? K(d.value, E) : undefined,
  });
  s.useImperativeHandle(t, () => TRef.current, []);
  let prefixCls = getPrefixCls("input");
  let size_1 = d.size || size;
  let W = "height" in d;
  let Y = suffix;
  let G = D ? D.length : 0;
  let U = s.useMemo(() => !E && !!A && G > A, [G, A, E]);
  if (A && showWordLimit) {
    let [e, t] = rtl ? [A, G] : [G, A];
    Y = l.jsxs("span", {
      className: A_1(`${prefixCls}-word-limit`, {
        [`${prefixCls}-word-limit-error`]: U,
      }),
      children: [e, "/", t],
    });
  }
  let Z = A_1(
    `${prefixCls}-group-wrapper`,
    `${prefixCls}-group-wrapper-${size_1}`,
    {
      [`${prefixCls}-custom-height`]: W,
      [`${prefixCls}-has-suffix`]: Y,
      [`${prefixCls}-group-wrapper-disabled`]: disabled,
      [`${prefixCls}-group-wrapper-readonly`]: readOnly,
      [`${prefixCls}-group-wrapper-rtl`]: rtl,
    },
    className,
  );
  let Q = addBefore || addAfter || Y || prefix;
  let q = l.jsx(
    A_12,
    i._(
      o._(
        {
          ref: TRef,
        },
        d,
      ),
      {
        onFocus: (e) => {
          set_(true);
          if (d.onFocus) {
            d.onFocus(e);
          }
        },
        onBlur: (e) => {
          set_(false);
          if (d.onBlur) {
            d.onBlur(e);
          }
        },
        onChange: (e, t) => {
          if (!("value" in d)) {
            R(e);
          }
          if (d.onChange) {
            d.onChange(e, t);
          }
        },
        prefixCls,
        value: D,
        hasParent: !!Q || allowClear,
        size: size_1,
      },
    ),
  );
  let X = A_1(`${prefixCls}-inner-wrapper`, {
    [`${prefixCls}-inner-wrapper-error`]: d.error || U,
    [`${prefixCls}-inner-wrapper-disabled`]: disabled,
    [`${prefixCls}-inner-wrapper-readonly`]: readOnly,
    [`${prefixCls}-inner-wrapper-focus`]: _,
    [`${prefixCls}-inner-wrapper-has-prefix`]: prefix,
    [`${prefixCls}-inner-wrapper-${size_1}`]: size_1,
    [`${prefixCls}-clear-wrapper`]: allowClear,
    [`${prefixCls}-inner-wrapper-rtl`]: rtl,
  });
  if (Q) {
    return l.jsx("div", {
      className: Z,
      style: o._(
        {},
        style,
        W
          ? {
              height,
            }
          : {},
      ),
      children: l.jsxs("span", {
        className: `${prefixCls}-group`,
        children: [
          F(`${prefixCls}-group-addbefore`, addBefore, beforeStyle),
          l.jsxs("span", {
            className: X,
            ref: SRef,
            onMouseDown: (e) => {
              if (
                e.target.tagName !== "INPUT" &&
                SRef.current &&
                gR(SRef.current, e.target)
              ) {
                e.preventDefault();
              }
            },
            onClick: (e) => {
              if (SRef.current && gR(SRef.current, e.target) && TRef.current) {
                TRef.current.focus();
              }
            },
            children: [
              F(`${prefixCls}-group-prefix`, prefix),
              q,
              F(`${prefixCls}-group-suffix`, Y),
            ],
          }),
          F(`${prefixCls}-group-addafter`, addAfter, afterStyle),
        ],
      }),
    });
  }
  if (allowClear) {
    return l.jsx("span", {
      className: A_1(className, X),
      style: o._(
        {},
        style,
        W
          ? {
              height,
            }
          : {},
      ),
      onMouseDown,
      onClick: () => {
        if (TRef.current) {
          TRef.current.focus();
        }
      },
      children: q,
    });
  }
  return q;
});
A.displayName = "Input";
A.Search = v;
A.TextArea = N;
A.Password = z;
A.Group = W;
