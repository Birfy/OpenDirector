import n from "NY";
import r from "oa";
import o from "bk";
import i from "qa";
import a from "z8";
import u from "bT";
import s from "rS";
import c from "zP7";
import d from "mY";
import p from "tR";
import f from "vC";
import h from "Ww";
import v from "CZ";
import m from "aZD";
import g from "mf";
import x from "V9";
import y from "wJI";
import _ from "K6G";
import A from "k6B";
import b from "gM";
import C from "Sc";
let k = `__input_${Math.random().toFixed(10).slice(2)}`;
let onMouseDown = (e) => {
  if (e.target.tagName !== "INPUT") {
    e.preventDefault();
  }
};
let $ = (e) => {
  if (x.cy(e)) {
    return e.map((e) => {
      if (x.Gv(e)) {
        return o._(r._({}, e), {
          label: "label" in e ? e.label : e.value,
          value: e.value,
          closable: e.closable,
        });
      }
      return {
        label: e,
        value: e,
      };
    });
  }
  return [];
};
let E = ({ prefixCls, children, animation }) => {
  if (animation) {
    return a.jsx(s.A, {
      component: "div",
      className: `${prefixCls}-inner`,
      children,
    });
  }
  return a.jsx("div", {
    className: `${prefixCls}-inner`,
    children,
  });
};
let N = {
  animation: true,
  validate: (e, t) => e && t.every((t) => t.value !== e),
};
let I = u.forwardRef(function (e, t) {
  let l;
  let s;
  let x;
  let I;
  let w;
  let { getPrefixCls, size, componentConfig, rtl } = u.useContext(d.QO);
  let R = A.A(
    e,
    N,
    componentConfig == null ? undefined : componentConfig.InputTag,
  );
  let {
    className,
    style,
    placeholder,
    error,
    disabled,
    readOnly,
    allowClear,
    autoFocus,
    labelInValue,
    disableInput,
    animation,
    saveOnBlur,
    dragToSort,
    icon,
    suffix,
    validate,
    renderTag,
    tagClassName,
    onInputChange,
    onKeyDown,
    onPaste,
    onChange,
    onFocus,
    onBlur,
    onPressEnter,
    onRemove,
    onClear,
    onClick,
  } = R;
  let ec = i._(R, [
    "className",
    "style",
    "placeholder",
    "error",
    "disabled",
    "readOnly",
    "allowClear",
    "autoFocus",
    "labelInValue",
    "disableInput",
    "animation",
    "saveOnBlur",
    "dragToSort",
    "icon",
    "suffix",
    "validate",
    "renderTag",
    "tagClassName",
    "onInputChange",
    "onKeyDown",
    "onPaste",
    "onChange",
    "onFocus",
    "onBlur",
    "onPressEnter",
    "onRemove",
    "onClear",
    "onClick",
  ]);
  let prefixCls = getPrefixCls("input-tag");
  let size_1 = "size" in R ? R.size : size;
  let efRef = u.useRef();
  let [eh, setEh] = u.useState(false);
  let [em, eg] = f.A([], {
    defaultValue: "defaultValue" in R ? $(R.defaultValue) : undefined,
    value: "value" in R ? $(R.value) : undefined,
  });
  let [ex, ey] = f.A("", {
    value: R.inputValue,
  });
  I = u.useRef(0);
  w = u.useRef(em.length);
  u.useEffect(() => {
    I.current = 300 * (em.length === 0 && w.current > 0);
    w.current = em.length;
  }, [em]);
  let e_ = I;
  let eA = !!(dragToSort && !readOnly && !disabled);
  u.useImperativeHandle(
    t,
    () => ({
      blur: efRef.current && efRef.current.blur,
      focus: efRef.current && efRef.current.focus,
    }),
    [],
  );
  let eb = (e, t) => {
    if (!(disabled || readOnly)) {
      if (!("value" in R)) {
        eg(e);
      }
      if (onChange) {
        onChange(labelInValue ? e : e.map((e) => e.value), t);
      }
    }
  };
  let eC = (e, t, l) => {
    if (onRemove) {
      onRemove(e, t, l);
    }
    eb([...em.slice(0, t), ...em.slice(t + 1)], "remove");
  };
  let ek = y.A(
    new Map([
      [
        _.Er.code,
        (e) => {
          if (!e.target.value && em.length) {
            for (let t = em.length - 1; t >= 0; t--) {
              let l = em[t];
              if (l.closable !== false) {
                return void eC(l, t, e);
              }
            }
          }
        },
      ],
    ]),
  );
  l = n._(function* () {
    try {
      let e = typeof validate !== "function" || (yield validate(ex, em));
      if (e) {
        eb(
          em.concat({
            value: e === true ? ex : e,
            label: ex,
          }),
          "add",
        );
        ey("");
      }
    } catch (err) {
      console.error(err);
    }
  });
  let ej = function () {
    return l.apply(this, arguments);
  };
  let e$ =
    allowClear && !disabled && !readOnly && em.length
      ? a.jsx(
          m.A,
          {
            size: size_1,
            className: `${prefixCls}-clear-icon`,
            onClick: (e) => {
              e.stopPropagation();
              eb([], "clear");
              if (!eh && efRef.current) {
                efRef.current.focus();
              }
              if (onClear) {
                onClear();
              }
            },
            onMouseDown,
            children: (icon && icon.clearIcon) || a.jsx(g.A, {}),
          },
          "clearIcon",
        )
      : null;
  let eE = !!(e$ || suffix);
  let disabled_1 = disabled || disableInput;
  let children = em
    .map((e, t) => {
      let l = em.findIndex((t) => t.value === e.value) !== t;
      let n = ((e, t) => {
        let { value, label } = e;
        let closable = !readOnly && !disabled && e.closable !== false;
        let onClose = (l) => {
          eC(e, t, l);
        };
        if (renderTag) {
          return renderTag(
            {
              value,
              label,
              closable,
              onClose,
            },
            t,
            em,
          );
        }
        return a.jsx(p.A, {
          visible: true,
          className: h.A(`${prefixCls}-tag`, {
            [tagClassName]: tagClassName,
          }),
          closable,
          closeIcon: icon && icon.removeIcon,
          title: typeof label === "string" ? label : undefined,
          onClose,
          children:
            typeof label === "string" ? label.replace(/\s/g, "\xa0") : label,
        });
      })(e, t);
      if (u.isValidElement(n)) {
        return a.jsx(
          c.A,
          {
            timeout: 300,
            classNames: "zoomIn",
            children: n,
          },
          typeof e.value === "object" ? t : l ? `${e.value}-${t}` : e.value,
        );
      }
      return n;
    })
    .concat(
      a.jsx(
        c.A,
        {
          timeout: 300,
          classNames: "zoomIn",
          children: a.jsx(v.A, {
            autoComplete: "off",
            size: size_1,
            disabled: disabled_1,
            readOnly,
            ref: efRef,
            autoFocus,
            placeholder: em.length ? "" : placeholder,
            prefixCls: `${prefixCls}-input`,
            autoFitWidth: {
              delay: () => e_.current,
            },
            onPressEnter:
              ((s = n._(function* (e) {
                if (ex) {
                  e.preventDefault();
                }
                if (onPressEnter) {
                  onPressEnter(e);
                }
                yield ej();
              })),
              function (e) {
                return s.apply(this, arguments);
              }),
            onFocus: (e) => {
              if (!(disabled_1 || readOnly)) {
                setEh(true);
                if (onFocus) {
                  onFocus(e);
                }
              }
            },
            onBlur:
              ((x = n._(function* (e) {
                setEh(false);
                if (onBlur) {
                  onBlur(e);
                }
                if (saveOnBlur) {
                  yield ej();
                }
                ey("");
              })),
              function (e) {
                return x.apply(this, arguments);
              }),
            value: ex,
            onChange: (e, t) => {
              ey(e);
              if (onInputChange) {
                onInputChange(e, t);
              }
            },
            onKeyDown: (e) => {
              ek(e);
              if (onKeyDown) {
                onKeyDown(e);
              }
            },
            onPaste,
          }),
        },
        k,
      ),
    );
  return a.jsx(
    "div",
    o._(r._({}, C.A(ec, ["size", "defaultValue", "value", "inputValue"])), {
      style,
      className: h.A(
        prefixCls,
        {
          [`${prefixCls}-size-${size_1}`]: size_1,
          [`${prefixCls}-disabled`]: disabled,
          [`${prefixCls}-error`]: error,
          [`${prefixCls}-focus`]: eh,
          [`${prefixCls}-readonly`]: readOnly,
          [`${prefixCls}-has-suffix`]: eE,
          [`${prefixCls}-has-placeholder`]: !em.length,
          [`${prefixCls}-rtl`]: rtl,
        },
        className,
      ),
      onMouseDown: (e) => {
        if (eh) {
          onMouseDown(e);
        }
      },
      onClick: (e) => {
        if (!eh && efRef.current) {
          efRef.current.focus();
        }
        if (onClick) {
          onClick(e);
        }
      },
      children: a.jsxs("div", {
        className: `${prefixCls}-view`,
        children: [
          eA
            ? a.jsx(
                E,
                {
                  prefixCls,
                  animation,
                  children: a.jsx(b.A, {
                    itemWrapperStyle: {
                      display: "inline-block",
                    },
                    direction: "horizontal",
                    onIndexChange: (e, t) => {
                      eb(
                        ((e, t, l) => {
                          e = e.slice();
                          let n = t > l;
                          let [r] = e.splice(t, 1);
                          e.splice(n ? l : l - 1, 0, r);
                          return e;
                        })(em, t, e),
                        "sort",
                      );
                    },
                    children,
                  }),
                },
                "transitionGroupWithDrag",
              )
            : a.jsx(E, {
                prefixCls,
                animation,
                children,
              }),
          eE &&
            a.jsxs("div", {
              className: `${prefixCls}-suffix`,
              onMouseDown,
              children: [e$, suffix],
            }),
        ],
      }),
    }),
  );
});
I.displayName = "InputTag";
var w = I;
export { w as A };
