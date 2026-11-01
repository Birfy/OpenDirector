import o from "bT";
import { A as A_1 } from "./module-puV.js";
import { A as A_2 } from "./module-RE.js";
import a from "sZS";
import { A as A_3 } from "./module-hn.js";
import { QO } from "./module-ce.js";
import { A as A_4 } from "./module-To_2.js";
import f from "olG";
import { Et, Gv, Kg, b0 } from "./module-Pl5.js";
import b from "JXb";
import { A as A_5 } from "./module-Cu.js";
import { A as A_6 } from "./module-gNs.js";
import { A as A_7 } from "./module-Wiq.js";
import A from "RPE";
import N from "ANL";
import { A as A_8 } from "./module-Hmv.js";
import { A as A_9 } from "./module-nA_3.js";
import { gR } from "./module-eYi.js";
import { A as A_10 } from "./module-Bd_2.js";
let r;
const m = (e, t) => {
  let n = typeof Symbol === "function" && e[Symbol.iterator];
  if (!n) {
    return e;
  }
  let r;
  let o;
  const i = n.call(e);
  const l = [];
  try {
    while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
      l.push(r.value);
    }
  } catch (error) {
    o = {
      error,
    };
  } finally {
    try {
      if (r && !r.done && (n = i.return)) {
        n.call(i);
      }
    } finally {
      if (o) {
        throw o.error;
      }
    }
  }
  return l;
};
const v = o.forwardRef(function (e, t) {
  const getPrefixCls = o.useContext(QO).getPrefixCls;
  const v = m(
    A_4("", {
      defaultValue:
        "defaultValue" in e ? K(e.defaultValue, e.maxLength) : undefined,
      value: "value" in e ? K(e.value, e.maxLength) : undefined,
    }),
    2,
  );
  const h = v[0];
  const y = v[1];
  const {
    className,
    style,
    placeholder,
    disabled,
    searchButton,
    loading,
    defaultValue,
    ...rest
  } = e;
  const P = getPrefixCls("input-search");
  const A = A_1(
    P,
    {
      [P + "-button"]: searchButton,
    },
    className,
  );
  const N = function (t) {
    if (!disabled && e.onSearch) {
      e.onSearch(h);
    }
    if (e.onPressEnter) {
      e.onPressEnter(t);
    }
  };
  return o.createElement(U, {
    ...A_3(rest, ["onSearch"]),
    disabled,
    className: A,
    style,
    ref: t,
    placeholder,
    addAfter: searchButton
      ? o.createElement(
          A_2,
          {
            disabled,
            size: rest.size,
            className: P + "-btn",
            type: "primary",
            onClick: N,
            loading,
            loadingFixedWidth: true,
            icon:
              searchButton === true && !loading && o.createElement(a.A, null),
          },
          searchButton !== true && searchButton,
        )
      : null,
    suffix:
      !searchButton &&
      (loading
        ? o.createElement(f.A, null)
        : o.createElement(a.A, {
            onClick: N,
          })),
    onChange: function (t, n) {
      y(t);
      if (e.onChange) {
        e.onChange(t, n);
      }
    },
    defaultValue,
    onPressEnter: N,
  });
});
v.displayName = "Search";
const y = [
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
const g = (autoSize, t) => {
  if (autoSize) {
    let minRows;
    let maxRows;
    let i;
    let l;
    if (Gv(autoSize)) {
      minRows = autoSize.minRows;
      maxRows = autoSize.maxRows;
    }
    const a = {
      minRows,
      maxRows,
    };
    const c = a.minRows;
    const u = a.maxRows;
    if (!r) {
      r = document.createElement("textarea");
      document.body.appendChild(r);
    }
    i = window.getComputedStyle(t);
    l =
      "\n    " +
      y.map((e) => e + ":" + i.getPropertyValue(e)).join(";") +
      "\n  ";
    r.setAttribute(
      "style",
      "\n  position: absolute;\n  min-height: 0 !important;\n  max-height: none;\n  height:0;\n  visibility: hidden;\n  z-index: -100;\n  top: 0;\n  right: 0;\n" +
        l,
    );
    const s = {
      paddingSize:
        parseFloat(i.getPropertyValue("padding-top")) +
        parseFloat(i.getPropertyValue("padding-bottom")),
      boxSizing: i.getPropertyValue("box-sizing"),
      borderSize:
        parseFloat(i.getPropertyValue("border-top-width")) +
        parseFloat(i.getPropertyValue("border-bottom-width")),
    };
    const f = s.paddingSize;
    const p = s.boxSizing;
    const d = s.borderSize;
    r.value = t.value || t.placeholder || "";
    let m = r.scrollHeight + d;
    let v;
    let g;
    let b;
    if (c || u) {
      r.value = "";
      const x = r.scrollHeight - f;
      if (Et(c)) {
        v = x * c;
        if (p === "border-box") {
          v += f;
          v += d;
        }
        m = Math.max(m, v);
      }
      if (Et(u)) {
        g = x * u;
        if (p === "border-box") {
          g += f;
          g += d;
        }
        b = m > g ? "auto" : "";
        g = Math.min(m, g);
      }
    }
    const E = {};
    E.height = m;
    if (v) {
      E.minHeight = v;
    }
    if (g) {
      E.maxHeight = g;
    }
    if (b) {
      E.overflowY = b;
    }
    return E;
  }
};
const S = (e, t) => {
  let n = typeof Symbol === "function" && e[Symbol.iterator];
  if (!n) {
    return e;
  }
  let r;
  let o;
  const i = n.call(e);
  const l = [];
  try {
    while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
      l.push(r.value);
    }
  } catch (error) {
    o = {
      error,
    };
  } finally {
    try {
      if (r && !r.done && (n = i.return)) {
        n.call(i);
      }
    } finally {
      if (o) {
        throw o.error;
      }
    }
  }
  return l;
};
const P = o.forwardRef(function (e, t) {
  const {
    className,
    style,
    wrapperStyle,
    placeholder,
    disabled,
    error,
    maxLength,
    showWordLimit,
    allowClear,
    onChange,
    onClear,
    onKeyDown,
    onPressEnter,
    status,
    ...rest
  } = e;
  const F = Gv(maxLength) ? maxLength.length : maxLength;
  const maxLength_1 = Gv(maxLength)
    ? maxLength.errorOnly
      ? undefined
      : maxLength.length
    : maxLength;
  const _Ref = o.useRef();
  const V = S(o.useState({}), 2);
  const D = V[0];
  const z = V[1];
  const L = S(
    A_4("", {
      defaultValue:
        "defaultValue" in e ? K(e.defaultValue, maxLength_1) : undefined,
      value: "value" in e ? K(e.value, maxLength_1) : undefined,
    }),
    2,
  );
  const H = L[0];
  const G = L[1];
  const W = A_7({
    value: H,
    maxLength: maxLength_1,
    onChange,
    onKeyDown,
    onPressEnter,
    beforeTriggerValueChangeCallback: function (t) {
      if (
        !(
          "value" in e ||
          (maxLength_1 !== undefined && !(t.length <= maxLength_1))
        )
      ) {
        G(t);
      }
    },
  });
  const W_compositionValue = W.compositionValue;
  const W_compositionHandler = W.compositionHandler;
  const W_valueChangeHandler = W.valueChangeHandler;
  const W_keyDownHandler = W.keyDownHandler;
  const W_triggerValueChangeCallback = W.triggerValueChangeCallback;
  const $ = o.useContext(QO);
  const $_getPrefixCls = $.getPrefixCls;
  const $_rtl = $.rtl;
  const Z = $_getPrefixCls("textarea");
  if (disabled) {
    D.resize = "none";
  }
  const ee = () => {
    if (_Ref.current && _Ref.current.focus) {
      if (_Ref.current.setSelectionRange) {
        const e = _Ref.current.textContent.length;
        _Ref.current.setSelectionRange(e, e);
      }
      _Ref.current.focus();
    }
  };
  const et = () => {
    const t = g(e.autoSize, _Ref.current);
    if (t) {
      z(t);
    }
  };
  A_6(
    function () {
      et();
    },
    [H],
  );
  o.useImperativeHandle(
    t,
    function () {
      return {
        dom: _Ref.current,
        focus: function () {
          ee();
        },
        blur: function () {
          if (_Ref.current && _Ref.current.blur) {
            _Ref.current.blur();
          }
        },
      };
    },
    [],
  );
  const en = H ? H.length : 0;
  const er = (F && showWordLimit) || allowClear;
  const eo = o.useMemo(
    function () {
      return !maxLength_1 && !!F && en > F;
    },
    [en, F, maxLength_1],
  );
  const ei = status || (error || eo ? "error" : undefined);
  const el = A_1(
    Z,
    {
      [Z + "-" + ei]: ei,
      [Z + "-disabled"]: disabled,
      [Z + "-rtl"]: $_rtl,
    },
    className,
  );
  const ea = o.createElement("textarea", {
    ...A_3(rest, ["autoSize", "defaultValue"]),
    maxLength: maxLength_1,
    ref: _Ref,
    style: {
      ...style,
      ...D,
    },
    className: el,
    placeholder,
    disabled,
    value: W_compositionValue || H || "",
    onChange: W_valueChangeHandler,
    onKeyDown: W_keyDownHandler,
    onCompositionStart: W_compositionHandler,
    onCompositionUpdate: W_compositionHandler,
    onCompositionEnd: W_compositionHandler,
  });
  if (er) {
    const ec = !disabled && allowClear && H;
    const eu = S($_rtl ? [F, en] : [en, F], 2);
    const es = eu[0];
    const ef = eu[1];
    return o.createElement(
      "div",
      {
        className: A_1(Z + "-wrapper", {
          [Z + "-clear-wrapper"]: allowClear,
          [Z + "-wrapper-rtl"]: $_rtl,
        }),
        style: wrapperStyle,
      },
      ea,
      ec
        ? o.createElement(
            A_5,
            {
              className: Z + "-clear-icon",
            },
            o.createElement(b.A, {
              onClick: function (e) {
                e.stopPropagation();
                ee();
                W_triggerValueChangeCallback("", e);
                if (onClear) {
                  onClear();
                }
              },
              onMouseDown: function (e) {
                e.preventDefault();
              },
            }),
          )
        : null,
      F &&
        showWordLimit &&
        o.createElement(
          "span",
          {
            className: A_1(Z + "-word-limit", {
              [Z + "-word-limit-error"]: eo,
            }),
          },
          es,
          "/",
          ef,
        ),
    );
  }
  return ea;
});
P.displayName = "TextArea";
const R = (e, t) => {
  let n = typeof Symbol === "function" && e[Symbol.iterator];
  if (!n) {
    return e;
  }
  let r;
  let o;
  const i = n.call(e);
  const l = [];
  try {
    while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
      l.push(r.value);
    }
  } catch (error) {
    o = {
      error,
    };
  } finally {
    try {
      if (r && !r.done && (n = i.return)) {
        n.call(i);
      }
    } finally {
      if (o) {
        throw o.error;
      }
    }
  }
  return l;
};
const I = o.forwardRef(function (e, t) {
  const r = R(
    A_4(false, {
      defaultValue: e.defaultVisibility,
      value: e.visibility,
    }),
    2,
  );
  const l = r[0];
  const a = r[1];
  const getPrefixCls = o.useContext(QO).getPrefixCls;
  const p = A_8();
  const { className, visibilityToggle = true, onVisibilityChange, ...rest } = e;
  const g = getPrefixCls("input-password");
  const b = A_1(
    g,
    {
      [g + "-visibility"]: visibilityToggle,
    },
    className,
  );
  const x = (t) => {
    if (!("visibility" in e)) {
      a(t);
    }
    if (onVisibilityChange) {
      onVisibilityChange(t);
    }
  };
  let e_suffix = e.suffix;
  const C = function () {
    x(!l);
  };
  if (visibilityToggle) {
    const w = {
      onClick: C,
      onMouseDown: function (e) {
        return e.preventDefault();
      },
      onMouseUp: function (e) {
        return e.preventDefault();
      },
      ...p({
        onPressEnter: C,
      }),
    };
    if (e.suffix) {
      e_suffix = o.createElement(
        "span",
        {
          ...w,
        },
        e.suffix,
      );
    } else {
      const O = l ? A.A : N.A;
      e_suffix = o.createElement(O, {
        ...w,
        focusable: undefined,
        "aria-hidden": undefined,
        tabIndex: 0,
        className: g + "-visibility-icon",
      });
    }
  }
  return o.createElement(U, {
    ...A_3(rest, ["visibility", "defaultVisibility"]),
    type: l ? "text" : "password",
    className: b,
    ref: t,
    suffix: e_suffix,
  });
});
I.displayName = "Password";
const V = o.forwardRef(function (e, t) {
  const getPrefixCls = o.useContext(QO).getPrefixCls;
  const { className, style, children, compact, ...rest } = e;
  const p = getPrefixCls("input-group");
  const d = A_1(
    p,
    {
      [p + "-compact"]: compact,
    },
    className,
  );
  return o.createElement(
    "div",
    {
      ref: t,
      className: d,
      style,
      ...rest,
    },
    children,
  );
});
V.displayName = "InputGroup";
const H = (e, t) => {
  let n = typeof Symbol === "function" && e[Symbol.iterator];
  if (!n) {
    return e;
  }
  let r;
  let o;
  const i = n.call(e);
  const l = [];
  try {
    while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
      l.push(r.value);
    }
  } catch (error) {
    o = {
      error,
    };
  } finally {
    try {
      if (r && !r.done && (n = i.return)) {
        n.call(i);
      }
    } finally {
      if (o) {
        throw o.error;
      }
    }
  }
  return l;
};
const onMouseDown = function (e) {
  if (e.target.tagName !== "INPUT") {
    e.preventDefault();
  }
};
const W = (e, t, style = {}, onClick) => {
  if (t) {
    return o.createElement(
      "span",
      {
        style,
        className: e,
        onClick,
      },
      t,
    );
  }
  return null;
};
function K(e, t) {
  const n = e === null || b0(e) || Kg(e) ? e || "" : String(e);
  if (t) {
    return n.slice(0, t);
  }
  return n;
}
const B = o.forwardRef(function (e, t) {
  const a = o.useContext(QO);
  const a_getPrefixCls = a.getPrefixCls;
  const a_size = a.size;
  const a_componentConfig = a.componentConfig;
  const a_rtl = a.rtl;
  const m = A_10(
    e,
    {},
    a_componentConfig == null ? undefined : a_componentConfig.Input,
  );
  const m_className = m.className;
  const m_style = m.style;
  const m_addBefore = m.addBefore;
  const m_addAfter = m.addAfter;
  const m_suffix = m.suffix;
  const m_prefix = m.prefix;
  const m_beforeStyle = m.beforeStyle;
  const m_afterStyle = m.afterStyle;
  const m_height = m.height;
  const m_disabled = m.disabled;
  const m_maxLength = m.maxLength;
  const m_showWordLimit = m.showWordLimit;
  const m_allowClear = m.allowClear;
  const k = Gv(m_maxLength) ? m_maxLength.length : m_maxLength;
  const T = Gv(m_maxLength) && m_maxLength.errorOnly ? undefined : k;
  const j = H(o.useState(false), 2);
  const R = j[0];
  const I = j[1];
  const MRef = o.useRef();
  const _Ref = o.useRef();
  const V = H(
    A_4("", {
      defaultValue: "defaultValue" in m ? K(m.defaultValue, T) : undefined,
      value: "value" in m ? K(m.value, T) : undefined,
    }),
    2,
  );
  const B = V[0];
  const U = V[1];
  o.useImperativeHandle(
    t,
    function () {
      return MRef.current;
    },
    [],
  );
  const prefixCls = a_getPrefixCls("input");
  const size = m.size || a_size;
  const Y = "height" in m;
  let $ = m_suffix;
  const X = B ? B.length : 0;
  const J = o.useMemo(
    function () {
      return !T && !!k && X > k;
    },
    [X, k, T],
  );
  if (k && m_showWordLimit) {
    const Z = H(a_rtl ? [k, X] : [X, k], 2);
    const ee = Z[0];
    const et = Z[1];
    $ = o.createElement(
      "span",
      {
        className: A_1(prefixCls + "-word-limit", {
          [prefixCls + "-word-limit-error"]: J,
        }),
      },
      ee,
      "/",
      et,
    );
  }
  const en = A_1(
    prefixCls + "-group-wrapper",
    prefixCls + "-group-wrapper-" + size,
    {
      [prefixCls + "-custom-height"]: Y,
      [prefixCls + "-has-suffix"]: $,
      [prefixCls + "-group-wrapper-disabled"]: m_disabled,
      [prefixCls + "-group-wrapper-rtl"]: a_rtl,
    },
    m_className,
  );
  const status = m.status || (m.error || J ? "error" : undefined);
  const eo = m_addBefore || m_addAfter || $ || m_prefix;
  const ei = o.createElement(A_9, {
    ref: MRef,
    ...m,
    status,
    onFocus: function (e) {
      I(true);
      if (m.onFocus) {
        m.onFocus(e);
      }
    },
    onBlur: function (e) {
      I(false);
      if (m.onBlur) {
        m.onBlur(e);
      }
    },
    onChange: function (e, t) {
      if (!("value" in m)) {
        U(e);
      }
      if (m.onChange) {
        m.onChange(e, t);
      }
    },
    prefixCls,
    value: B,
    hasParent: !!eo || m_allowClear,
    size,
  });
  const el = A_1(prefixCls + "-inner-wrapper", {
    [prefixCls + "-inner-wrapper-" + status]: status,
    [prefixCls + "-inner-wrapper-disabled"]: m_disabled,
    [prefixCls + "-inner-wrapper-focus"]: R,
    [prefixCls + "-inner-wrapper-has-prefix"]: m_prefix,
    [prefixCls + "-inner-wrapper-" + size]: size,
    [prefixCls + "-clear-wrapper"]: m_allowClear,
    [prefixCls + "-inner-wrapper-rtl"]: a_rtl,
  });
  if (eo) {
    return o.createElement(
      "div",
      {
        className: en,
        style: {
          ...m_style,
          ...(Y
            ? {
                height: m_height,
              }
            : {}),
        },
      },
      o.createElement(
        "span",
        {
          className: prefixCls + "-group",
        },
        W(prefixCls + "-group-addbefore", m_addBefore, m_beforeStyle),
        o.createElement(
          "span",
          {
            className: el,
            ref: _Ref,
            onMouseDown: function (e) {
              if (
                e.target.tagName !== "INPUT" &&
                _Ref.current &&
                gR(_Ref.current, e.target)
              ) {
                e.preventDefault();
              }
            },
            onClick: function (e) {
              if (_Ref.current && gR(_Ref.current, e.target) && MRef.current) {
                MRef.current.focus();
              }
            },
          },
          W(prefixCls + "-group-prefix", m_prefix),
          ei,
          W(prefixCls + "-group-suffix", $),
        ),
        W(prefixCls + "-group-addafter", m_addAfter, m_afterStyle),
      ),
    );
  }
  if (m_allowClear) {
    return o.createElement(
      "span",
      {
        className: A_1(m_className, el),
        style: {
          ...m_style,
          ...(Y
            ? {
                height: m_height,
              }
            : {}),
        },
        onMouseDown,
        onClick: function () {
          if (MRef.current) {
            MRef.current.focus();
          }
        },
      },
      ei,
    );
  }
  return ei;
});
B.displayName = "Input";
B.Search = v;
B.TextArea = P;
B.Password = I;
B.Group = V;
var U = B;
var Q = U;
export { Q as A };
