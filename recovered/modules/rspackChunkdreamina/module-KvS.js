import r from "oa";
import o from "bk";
import i from "qa";
import l from "z8";
import s from "bT";
import { t as t_1 } from "./module-rT.js";
import { Gv, Tn, b0 } from "./module-V9.js";
import { A as A_1 } from "./module-Ww_2.js";
import { QO } from "./module-mY_2.js";
import { A as A_2 } from "./module-to_4.js";
import { A as A_3 } from "./module-P7_2.js";
import { A as A_4 } from "./module-mf_2.js";
import { A as A_5 } from "./module-igg.js";
import v from "K6A";
import { A as A_6 } from "./module-CZ_2.js";
import { A as A_7 } from "./module-cl_2.js";
import { A as A_8 } from "./module-aZD.js";
import { Er, xy } from "./module-K6G.js";
export let A = s.forwardRef((e, t) => {
  var n;
  let w;
  let {
    style,
    className,
    size,
    bordered,
    allowClear,
    allowCreate,
    error,
    loading,
    disabled,
    animation,
    prefixCls,
    suffixIcon,
    arrowIcon,
    removeIcon,
    clearIcon,
    placeholder,
    renderView,
    renderText,
    value,
    inputValue,
    popupVisible,
    maxTagCount,
    isMultiple,
    isEmptyValue,
    prefix,
    ariaControls,
    renderTag,
    dragToSort,
    addBefore,
    onKeyDown,
    onChangeInputValue,
    onPaste,
    onClear,
    onFocus,
    onBlur,
    onRemoveCheckedItem,
    onSort,
    rtl,
  } = e;
  let el = i._(e, [
    "style",
    "className",
    "size",
    "bordered",
    "allowClear",
    "allowCreate",
    "error",
    "loading",
    "disabled",
    "animation",
    "prefixCls",
    "suffixIcon",
    "arrowIcon",
    "removeIcon",
    "clearIcon",
    "placeholder",
    "renderView",
    "renderText",
    "value",
    "inputValue",
    "popupVisible",
    "maxTagCount",
    "isMultiple",
    "isEmptyValue",
    "prefix",
    "ariaControls",
    "renderTag",
    "dragToSort",
    "addBefore",
    "onKeyDown",
    "onChangeInputValue",
    "onPaste",
    "onClear",
    "onFocus",
    "onBlur",
    "onRemoveCheckedItem",
    "onSort",
    "rtl",
  ]);
  let esRef = s.useRef(null);
  let eaRef = s.useRef(null);
  let { size: size_1, getPrefixCls } = s.useContext(QO);
  let [ed, setEd] = s.useState(2);
  let [ef, setEf] = s.useState(false);
  let em = A_7();
  let ev = "showSearch" in e ? e.showSearch : isMultiple;
  let eg = ev || allowCreate;
  let size_2 = size || size_1;
  let eb = ef || popupVisible;
  let ex = Gv(ev) && ev.retainInputValue;
  let ew = isMultiple || value === undefined ? "" : renderText(value).text;
  let onMouseDown = (e) => {
    if (e) {
      e.preventDefault();
    }
  };
  let eO = (e) => {
    let t = eg ? esRef.current : eaRef.current;
    if (t) {
      if (e === "focus") {
        t.focus();
      } else {
        t.blur();
      }
    }
  };
  let eC = (e, t) => {
    if (!eg || t.target !== eaRef.current) {
      if (e === "focus") {
        setEf(true);
        if (onFocus) {
          onFocus(t);
        }
      } else {
        setEf(false);
        if (onBlur) {
          onBlur(t);
        }
      }
    }
  };
  let onKeyDown_1 = (e) => {
    if (!(eg && e.currentTarget === eaRef.current)) {
      if ((e.keyCode || e.which) === xy.code) {
        e.preventDefault();
      }
      if (onKeyDown) {
        onKeyDown(e);
      }
    }
  };
  s.useEffect(() => {
    eO(popupVisible ? "focus" : "blur");
    if (eg) {
      setEd(2 * !popupVisible);
    }
  }, [popupVisible]);
  s.useImperativeHandle(t, () => ({
    dom: eaRef.current,
    focus: eO.bind(null, "focus"),
    blur: eO.bind(null, "blur"),
    getWidth: () => eaRef.current && eaRef.current.clientWidth,
  }));
  let eP =
    "arrowIcon" in e
      ? arrowIcon === null
        ? null
        : l.jsx("div", {
            className: `${prefixCls}-arrow-icon`,
            children: arrowIcon,
          })
      : l.jsx("div", {
          className: `${prefixCls}-arrow-icon`,
          children: l.jsx(A_2, {}),
        });
  let e$ = loading
    ? l.jsx("span", {
        className: `${prefixCls}-loading-icon`,
        children: l.jsx(A_3, {}),
      })
    : suffixIcon
      ? l.jsx("span", {
          className: `${prefixCls}-suffix-icon`,
          children: suffixIcon,
        })
      : e.showSearch && popupVisible
        ? l.jsx("div", {
            className: `${prefixCls}-search-icon`,
            children: l.jsx(A_5, {}),
          })
        : eP;
  let onFocus_1 = (e) => {
    e.stopPropagation();
    eC("focus", e);
  };
  let onBlur_1 = (e) => {
    e.stopPropagation();
    eC("blur", e);
  };
  let onInputChange = (e, t) => {
    setEd(1);
    if (onChangeInputValue) {
      onChangeInputValue(e, t);
    }
  };
  let e_ = addBefore != null;
  let eM = e_ || false;
  let eT = A_1(
    prefixCls,
    `${prefixCls}-${isMultiple ? "multiple" : "single"}`,
    {
      [`${prefixCls}-show-search`]: ev,
      [`${prefixCls}-open`]: popupVisible,
      [`${prefixCls}-size-${size_2}`]: size_2,
      [`${prefixCls}-focused`]: eb,
      [`${prefixCls}-error`]: error,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-no-border`]: !bordered,
      [`${prefixCls}-rtl`]: rtl,
    },
  );
  let eS = t_1(el);
  let eD = r._(
    {
      style,
      className,
    },
    eS,
  );
  let eR =
    disabled || isEmptyValue || !allowClear
      ? null
      : l.jsx(
          A_8,
          {
            size: size_2,
            className: `${prefixCls}-clear-icon`,
            onClick: onClear,
            onMouseDown,
            children: clearIcon != null ? clearIcon : l.jsx(A_4, {}),
          },
          "clearIcon",
        );
  let eI = l.jsx(
    "div",
    o._(
      r._(
        o._(
          r._(
            {
              role: "combobox",
              "aria-haspopup": "listbox",
              "aria-autocomplete": "list",
              "aria-expanded": popupVisible,
              "aria-disabled": disabled,
              "aria-controls": ariaControls,
            },
            ((n = ["onClick", "onMouseEnter", "onMouseLeave"]),
            (w = {}),
            Object.keys(el).forEach((e) => {
              if (n.indexOf(e) !== -1) {
                w[e] = el[e];
              }
            }),
            w),
          ),
          {
            ref: eaRef,
            tabIndex: disabled ? -1 : 0,
            style: eM ? undefined : style,
          },
        ),
        eM ? {} : eD,
      ),
      {
        className: eM ? eT : A_1(eT, eD.className),
        onKeyDown: onKeyDown_1,
        onFocus: (e) => {
          if (!(disabled || dragToSort)) {
            if (eg) {
              if (esRef.current) {
                esRef.current.focus();
              }
            } else {
              eC("focus", e);
            }
          }
        },
        onBlur: (e) => eC("blur", e),
        children: l.jsxs("div", {
          title: typeof ew === "string" ? ew : undefined,
          className: A_1(`${prefixCls}-view`, {
            [`${prefixCls}-view-with-prefix`]: prefix,
          }),
          onClick: (e) => popupVisible && eg && e.stopPropagation(),
          children: [
            prefix &&
              l.jsx("div", {
                "aria-hidden": "true",
                className: A_1(`${prefixCls}-prefix`),
                onMouseDown: (e) => ef && onMouseDown(e),
                children: prefix,
              }),
            isMultiple
              ? (() => {
                  let e = b0(value) ? [] : [].concat(value);
                  let t = Gv(maxTagCount) ? maxTagCount.count : maxTagCount;
                  let n =
                    Gv(maxTagCount) && Tn(maxTagCount.render)
                      ? maxTagCount.render
                      : (e) => `+${e}...`;
                  let o = typeof t === "number" ? Math.max(t, 0) : e.length;
                  let i = [];
                  let s = -1;
                  for (let t = e.length - 1; t >= 0; t--) {
                    let n = e[t];
                    let r = renderText(n);
                    if (t < o) {
                      i.unshift({
                        value: n,
                        label: r.text,
                        closable: !r.disabled,
                      });
                    }
                    if (!(r.disabled || s !== -1)) {
                      s = t;
                    }
                  }
                  let a = e.length - o;
                  if (a > 0) {
                    i.push({
                      label: n(a),
                      closable: false,
                      value: "__arco_value_tag_placeholder",
                    });
                  }
                  let u = {
                    onPaste,
                    onKeyDown: onKeyDown_1,
                    onFocus: onFocus_1,
                    onBlur: onBlur_1,
                    onInputChange,
                    onRemove: (e, t, n) => {
                      if ((n.keyCode || n.which) === Er.code && s > -1) {
                        t = s;
                      }
                      if (maxTagCount) {
                        em();
                      }
                      if (onRemoveCheckedItem) {
                        onRemoveCheckedItem(value, t, n);
                      }
                    },
                  };
                  return l.jsx(
                    v.A,
                    r._(
                      {
                        className: eb
                          ? `${getPrefixCls("input-tag")}-focus`
                          : "",
                        ref: esRef,
                        disabled,
                        dragToSort,
                        disableInput: !ev,
                        animation,
                        placeholder,
                        value: i,
                        inputValue,
                        size: size_2,
                        tagClassName: `${prefixCls}-tag`,
                        renderTag,
                        icon: {
                          removeIcon,
                        },
                        onChange: (e, t) => {
                          if (onSort && t === "sort") {
                            onSort(e);
                          }
                        },
                      },
                      u,
                    ),
                  );
                })()
              : (() => {
                  let e;
                  switch (ed) {
                    case 0:
                      e = inputValue || (ex ? ew : "");
                      break;
                    case 1:
                      e = inputValue || "";
                      break;
                    default:
                      e = ew;
                  }
                  let t = {
                    style: {
                      width: "100%",
                    },
                    value: typeof e !== "object" ? e : "",
                    placeholder:
                      eg && ew && typeof ew !== "object" ? ew : placeholder,
                  };
                  if (eg) {
                    t.onPaste = onPaste;
                    t.onKeyDown = onKeyDown_1;
                    t.onFocus = onFocus_1;
                    t.onBlur = onBlur_1;
                    t.onChange = onInputChange;
                  } else {
                    t.tabIndex = -1;
                    t.style.pointerEvents = "none";
                  }
                  let n = !!((eb && eg) || isEmptyValue);
                  return l.jsxs("span", {
                    className: `${prefixCls}-view-selector`,
                    children: [
                      l.jsx(
                        A_6,
                        r._(
                          {
                            "aria-hidden": !n || undefined,
                            ref: esRef,
                            disabled,
                            className: A_1(`${prefixCls}-view-input`, {
                              [`${prefixCls}-hidden`]: !n,
                            }),
                            autoComplete: "off",
                          },
                          t,
                        ),
                      ),
                      l.jsx("span", {
                        className: A_1(`${prefixCls}-view-value`, {
                          [`${prefixCls}-view-value-mirror`]: n,
                        }),
                        children: isEmptyValue ? t.placeholder : e,
                      }),
                    ],
                  });
                })(),
            l.jsxs("div", {
              "aria-hidden": "true",
              className: `${prefixCls}-suffix`,
              onMouseDown: (e) => ef && onMouseDown(e),
              children: [eR, e$],
            }),
          ],
        }),
      },
    ),
  );
  eI = typeof renderView === "function" ? renderView(eI) : eI;
  if (eM) {
    return l.jsxs(
      "div",
      o._(r._({}, eD), {
        className: A_1(
          `${prefixCls}-wrapper`,
          {
            [`${prefixCls}-wrapper-rtl`]: rtl,
          },
          eD.className,
        ),
        children: [
          e_ &&
            l.jsx("div", {
              className: `${prefixCls}-addbefore`,
              children: addBefore,
            }),
          eI,
        ],
      }),
    );
  }
  return eI;
});
A.displayName = "SelectView";
