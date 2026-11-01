import n from "oa";
import r from "bk";
import o from "z8";
import i from "bT";
import a from "Ww";
import u from "K6G";
import s from "RwR";
import c from "qa";
import d from "Sc";
import f from "Vyy";
import h from "ag";
import m from "zrd";
import g from "V9";
import x from "wJI";
import y from "D7";
import _ from "KvS";
import { A } from "./module-ZB.js";
import b from "Kb";
import C from "IG2";
import I from "mY";
import w from "vC";
import O from "k6B";
import M from "HQZ";
import T from "Oj";
let p = i.forwardRef(function (e, t) {
  let { prefixCls, label } = e;
  let a = c._(e, ["prefixCls", "label"]);
  return o.jsx(
    "li",
    r._(
      n._(
        {
          ref: t,
          className: `${prefixCls}-group-title`,
        },
        d.A(a, ["_key", "children", "isSelectOptGroup"]),
      ),
      {
        children: label,
      },
    ),
  );
});
p.defaultProps = {
  isSelectOptGroup: true,
};
let v = i.forwardRef(function (e, t) {
  let {
    style,
    className,
    wrapperClassName,
    disabled,
    prefixCls,
    rtl,
    value,
    children,
    _isMultipleMode,
    _isUserCreatedOption,
    _isUserCreatingOption,
    _valueActive,
    _valueSelect,
    _onMouseEnter,
    _onMouseLeave,
    _onClick,
  } = e;
  let $ = c._(e, [
    "style",
    "className",
    "wrapperClassName",
    "disabled",
    "prefixCls",
    "rtl",
    "value",
    "children",
    "_isMultipleMode",
    "_isUserCreatedOption",
    "_isUserCreatingOption",
    "_valueActive",
    "_valueSelect",
    "_onMouseEnter",
    "_onMouseLeave",
    "_onClick",
  ]);
  let E = "value" in e ? value : `${children}`;
  let N = "children" in e ? children : `${value}`;
  let checked = _isMultipleMode
    ? _valueSelect.indexOf(E) !== -1
    : _valueSelect === E;
  let w = n._(
    {
      style,
      className: a.A(
        `${prefixCls}-option`,
        {
          [`${prefixCls}-option-wrapper-selected`]: checked,
          [`${prefixCls}-option-wrapper-disabled`]: disabled,
          [`${prefixCls}-option-wrapper-hover`]: E === _valueActive,
          [`${prefixCls}-option-empty`]: !N && N !== 0,
          [`${prefixCls}-option-rtl`]: rtl,
        },
        className,
      ),
      onMouseEnter: (e) => {
        if (_onMouseEnter) {
          _onMouseEnter(E);
        }
        if ($.onMouseEnter) {
          $.onMouseEnter(e);
        }
      },
      onMouseLeave: (e) => {
        if (_onMouseLeave) {
          _onMouseLeave();
        }
        if ($.onMouseLeave) {
          $.onMouseLeave(e);
        }
      },
      onClick: (e) => {
        if (_onClick) {
          _onClick(E, disabled);
        }
        if ($.onClick) {
          $.onClick(e);
        }
      },
    },
    d.A($, [
      "_key",
      "extra",
      "isSelectOption",
      "onClick",
      "onMouseEnter",
      "onMouseLeave",
    ]),
  );
  let O = {
    ref: t,
    role: "option",
    "aria-selected": checked,
  };
  if (_isUserCreatedOption) {
    Object.assign(O, {
      "data-user-created": true,
    });
  }
  if (_isUserCreatingOption) {
    Object.assign(O, {
      "data-user-creating": true,
    });
  }
  if (_isMultipleMode) {
    return o.jsxs(
      "li",
      r._(n._({}, O), {
        className: a.A(
          `${prefixCls}-option-wrapper`,
          {
            [`${prefixCls}-option-wrapper-selected`]: checked,
            [`${prefixCls}-option-wrapper-disabled`]: disabled,
            [`${prefixCls}-option-wrapper-hover`]: E === _valueActive,
          },
          wrapperClassName,
        ),
        children: [
          o.jsx(f.A, {
            "aria-hidden": "true",
            className: `${prefixCls}-checkbox`,
            checked,
            disabled,
            onChange: w.onClick,
          }),
          o.jsx(
            "span",
            r._(n._({}, w), {
              children: N,
            }),
          ),
        ],
      }),
    );
  }
  return o.jsxs(
    "li",
    r._(n._({}, O, w), {
      children: [
        N,
        checked &&
          o.jsx("span", {
            className: `${prefixCls}-check-icon`,
            children: o.jsx(h.A, {}),
          }),
      ],
    }),
  );
});
v.defaultProps = {
  isSelectOption: true,
};
function onMouseDown(e) {
  if (e) {
    e.preventDefault();
  }
}
function j(e, t) {
  if (t) {
    return !g.cy(e) || !e.length;
  }
  return e === undefined;
}
function $(e, t, labelInValue) {
  if (labelInValue) {
    e = t
      ? Array.isArray(e)
        ? e.map((e) => {
            if (g.Gv(e) && "label" in e) {
              return e.value;
            }
            return e;
          })
        : e
      : g.Gv(e) && "label" in e
        ? e.value
        : e;
  }
  if (j(e, t)) {
    if (t) {
      if (Array.isArray(e)) {
        return e;
      }
      return [];
    }
    return undefined;
  }
  return e;
}
function E(e) {
  return b.A(e, "props.isSelectOption");
}
function N(e) {
  return b.A(e, "props.isSelectOptGroup");
}
let S = {
  trigger: "click",
  bordered: true,
  filterOption: true,
  unmountOnExit: true,
  defaultActiveFirstOption: true,
};
let R = i.forwardRef(function (e, t) {
  let l;
  let { getPrefixCls, renderEmpty, componentConfig, rtl } = i.useContext(I.QO);
  let R = O.A(
    e,
    S,
    componentConfig == null ? undefined : componentConfig.Select,
  );
  let {
    children,
    renderFormat,
    defaultActiveFirstOption,
    disabled,
    unmountOnExit,
    notFoundContent,
    showSearch,
    tokenSeparators,
    options,
    filterOption,
    labelInValue,
    getPopupContainer,
    trigger,
    triggerElement,
    triggerProps,
    dropdownRender,
    dropdownMenuStyle,
    dropdownMenuClassName,
    virtualListProps,
    onChange,
    onDeselect,
    onClear,
    onSearch,
    onFocus,
    onBlur,
    onPopupScroll,
    onVisibleChange,
    onInputValueChange,
    onPaste,
    onKeyDown,
  } = R;
  let { mode, allowCreate } = R;
  if (mode === "tags") {
    mode = "multiple";
    allowCreate = true;
    y.A(
      true,
      "[Arco Select] The 'tags' mode will be removed in the next major version, please use {mode: \"multiple\", allowCreate: true} instead.",
    );
  }
  let prefixCls = getPrefixCls("select");
  let ev = mode === "multiple";
  let [em, setEm] = i.useState($(R.defaultValue, ev, labelInValue));
  let ex = "value" in R ? $(R.value, ev, labelInValue) : em;
  let [ey, e_, eA] = w.A("", {
    value: "inputValue" in R ? R.inputValue || "" : undefined,
  });
  let [eb, eC] = w.A(false, {
    defaultValue: R.defaultPopupVisible,
    value:
      (l = R == null ? undefined : R.popupVisible) != null
        ? l
        : triggerProps == null
          ? undefined
          : triggerProps.popupVisible,
  });
  let [ek, setEk] = i.useState(null);
  let [e$, setE$] = i.useState([]);
  let [eN, setEN] = i.useState(g.cy(ex) ? ex[0] : ex);
  let {
    childrenList,
    optionInfoMap,
    optionValueList,
    optionIndexListForArrowKey,
    hasOptGroup,
    hasComplexLabelInOptions,
  } = i.useMemo(
    () =>
      (function e(
        { children, options, filterOption },
        { inputValue = "", userCreatedOptions, userCreatingOption, prefixCls },
        {
          optionInfoMap = new Map(),
          optionValueList = [],
          customNodeCount = 0,
        } = {},
      ) {
        let hasOptGroup_1 = false;
        let hasComplexLabelInOptions_1 = false;
        let nodeList = [];
        let optionIndexListForArrowKey_1 = [];
        let A = ({ label, value }, l, n) => {
          if (label || value || l) {
            if (n) {
              return l || `group_${label}`;
            }
            return (
              l ||
              `${typeof value}_${value}` ||
              `${label}_${optionInfoMap.size}`
            );
          }
          customNodeCount++;
          return `custom_node_${customNodeCount}`;
        };
        let k = (child, _origin) => {
          var l;
          let o;
          let s;
          l = child;
          o = b.A(l, "props.value");
          s = b.A(l, "props.children");
          let c = o === undefined && s != null ? s.toString() : o;
          let _valid = true;
          if (filterOption === true) {
            _valid =
              c !== undefined &&
              String(c).toLowerCase().indexOf(inputValue.toLowerCase()) !== -1;
          } else if (typeof filterOption === "function") {
            _valid = !inputValue || filterOption(inputValue, child);
          }
          if (!optionInfoMap.get(c)) {
            if (!("_key" in child.props)) {
              child = i.cloneElement(child, {
                _key: A(child.props, child.key),
              });
            }
            let _index = optionInfoMap.size;
            let o = r._(
              n._(
                {
                  child,
                },
                child.props,
              ),
              {
                value: c,
                _index,
                _origin,
                _valid,
              },
            );
            optionInfoMap.set(c, o);
            optionValueList.push(c);
            if (_valid) {
              nodeList.push(child);
              if (!o.disabled) {
                optionIndexListForArrowKey_1.push(_index);
              }
            }
          }
          if (typeof child.props.children !== "string") {
            hasComplexLabelInOptions_1 = true;
          }
        };
        let j = (e, t) => {
          if (t && g.cy(e) && e.length) {
            e.forEach((e) => {
              e =
                g.Kg(e) || g.Et(e)
                  ? {
                      label: e,
                      value: e,
                    }
                  : e;
              k(
                o.jsx(v, {
                  _key: A(e),
                  value: e.value,
                  disabled: e.disabled === true,
                  extra: e.extra,
                  children: e.label,
                }),
                t,
              );
            });
          }
        };
        if (userCreatingOption) {
          j([userCreatingOption], "userCreatingOption");
        }
        if (children) {
          i.Children.map(children, (t) => {
            if (N(t)) {
              let { children, options } = t.props;
              let {
                childrenList,
                optionIndexListForArrowKey,
                hasComplexLabelInOptions,
              } = e(
                {
                  children,
                  options,
                  filterOption,
                },
                {
                  inputValue,
                  prefixCls,
                },
                {
                  optionInfoMap,
                  optionValueList,
                  customNodeCount,
                },
              );
              if (childrenList.length) {
                nodeList.push(
                  i.cloneElement(t, {
                    children: null,
                    _key: A(t.props, t.key, true),
                  }),
                );
                nodeList = nodeList.concat(childrenList);
                optionIndexListForArrowKey_1 =
                  optionIndexListForArrowKey_1.concat(
                    optionIndexListForArrowKey,
                  );
                hasOptGroup_1 = true;
                hasComplexLabelInOptions_1 =
                  hasComplexLabelInOptions_1 || hasComplexLabelInOptions;
              }
            } else {
              if (E(t)) {
                k(t, "children");
              } else if (g.Gv(t) && t.props) {
                nodeList.push(
                  i.cloneElement(t, {
                    _key: A(t.props, t.key),
                  }),
                );
              }
            }
          });
        }
        j(options, "options");
        j(userCreatedOptions, "userCreatedOptions");
        return {
          childrenList: C.A({
            nodeList,
            pattern: inputValue,
            highlightClassName: `${prefixCls}-highlight`,
          }),
          optionInfoMap,
          optionValueList,
          optionIndexListForArrowKey: optionIndexListForArrowKey_1,
          hasOptGroup: hasOptGroup_1,
          hasComplexLabelInOptions: hasComplexLabelInOptions_1,
        };
      })(
        {
          children,
          options,
          filterOption,
        },
        {
          prefixCls,
          inputValue: ey,
          userCreatedOptions: e$,
          userCreatingOption: ek,
        },
      ),
    [children, options, filterOption, ey, ek, e$],
  );
  let ePRef = i.useRef(null);
  let eVRef = i.useRef(null);
  let eDRef = i.useRef(null);
  let ezRef = i.useRef([]);
  let eLRef = i.useRef(null);
  let eHRef = i.useRef(ey);
  let eGRef = i.useRef(null);
  let eFRef = i.useRef(0);
  let eK = M.A();
  let eU = T.A(`${prefixCls}-popup-`);
  let isEmptyValue = j(ex, ev);
  let eW = defaultActiveFirstOption
    ? optionValueList[optionIndexListForArrowKey[0]]
    : undefined;
  let eY = (e) => {
    var t;
    let l = optionInfoMap.get(e);
    if (
      ePRef.current &&
      (l == null || (t = l.child) == null ? undefined : t.props)
    ) {
      ePRef.current.scrollTo({
        key: l.child.props._key,
      });
    }
  };
  let eQ = (e, t) => {
    if (e !== eHRef.current || t !== eGRef.current) {
      e_(e);
      eHRef.current = e;
      eGRef.current = t;
      if (onInputValueChange) {
        onInputValueChange(e, t);
      }
    }
  };
  let onVisibleChange_1 = (e) => {
    if (eb !== e) {
      eC(e);
      if (onVisibleChange) {
        onVisibleChange(e);
      }
      if (triggerProps && triggerProps.onVisibleChange) {
        triggerProps.onVisibleChange(e);
      }
    }
  };
  i.useEffect(() => {
    if (ev) {
      if (!Array.isArray(ex)) {
        setEm(ex === undefined ? [] : [ex]);
      }
    } else if (Array.isArray(ex)) {
      setEm(ex.length === 0 ? undefined : ex[0]);
    }
  }, [ev, ex]);
  i.useEffect(() => {
    if (eb) {
      let e = g.cy(ex) ? ex[0] : ex;
      let t = !isEmptyValue && optionInfoMap.has(e) ? e : eW;
      setEN(t);
      setTimeout(() => eY(t));
    } else {
      if (!eK) {
        eQ("", "optionListHide");
      }
    }
  }, [eb]);
  i.useEffect(() => {
    if (eLRef.current === "up" || eLRef.current === "down") {
      eY(eN);
      eLRef.current = "none";
    }
  }, [eN]);
  i.useEffect(() => {
    setEN(eW);
  }, [
    JSON.stringify(
      childrenList.map((e) => {
        var t;
        if (e == null || (t = e.props) == null) {
          return undefined;
        }
        return t.value;
      }),
    ),
  ]);
  i.useEffect(() => {
    ezRef.current = ezRef.current.filter((e) => {
      if (ev) {
        return g.cy(ex) && ex.indexOf(e.value) > -1;
      }
      return e.value === ex;
    });
  }, [ex, ev]);
  i.useEffect(() => {
    if (allowCreate && Array.isArray(ex)) {
      let e = ex.filter((e) => {
        var t;
        let l =
          optionInfoMap.get(e) ||
          ((t = ezRef.current.find((t) => t.value === e)) == null
            ? undefined
            : t.option);
        return !l || l._origin === "userCreatingOption";
      });
      let t = e$.filter((e) => ex.indexOf(e) !== -1).concat(e);
      if (t.toString() !== e$.toString()) {
        setE$(t);
      }
    }
  }, [ex]);
  i.useEffect(() => {
    if (allowCreate) {
      setEk(optionInfoMap.has(ey) ? null : ey);
    }
  }, [ey]);
  i.useEffect(() => {
    let { current } = eGRef;
    if (
      eA === ey &&
      (current === "manual" || current === "optionListHide") &&
      onSearch
    ) {
      onSearch(ey, current);
    }
  }, [ey]);
  let getOptionInfoByValue = (e) => {
    let t = optionInfoMap.get(e);
    if (t) {
      let l = ezRef.current.findIndex((t) => t.value === e);
      if (l > -1) {
        ezRef.current.splice(l, 1, {
          value: e,
          option: t,
        });
      } else {
        ezRef.current.push({
          value: e,
          option: t,
        });
      }
      return t;
    }
    let l = ezRef.current.find((t) => t.value === e);
    return l && l.option;
  };
  let eX = (e) => {
    if (!optionIndexListForArrowKey.length) {
      return;
    }
    if (eN === undefined || !optionInfoMap.has(eN)) {
      return optionValueList[optionIndexListForArrowKey[0]];
    }
    let _index = optionInfoMap.get(eN)._index;
    let l = optionIndexListForArrowKey.indexOf(_index);
    let optionIndexListForArrowKey_length = optionIndexListForArrowKey.length;
    return optionValueList[
      optionIndexListForArrowKey[
        ((e === "up" ? l - 1 : l + 1) + optionIndexListForArrowKey_length) %
          optionIndexListForArrowKey_length
      ]
    ];
  };
  let eJ = (e, t = j(e, ev)) => {
    let l;
    let n = e;
    l =
      e === undefined
        ? undefined
        : Array.isArray(e)
          ? e.map(getOptionInfoByValue)
          : getOptionInfoByValue(e);
    if (labelInValue && !t) {
      let t = (e, t) => {
        if (t) {
          return t.children;
        }
        let l =
          "value" in R ? R.value : "defaultValue" in R ? R.defaultValue : null;
        if (Array.isArray(l)) {
          for (let t of l) {
            if (g.Gv(t) && t.value === e) {
              return t.label;
            }
          }
        } else if (g.Gv(l) && l.value === e) {
          return l.label;
        }
      };
      n = Array.isArray(e)
        ? e.map((e, n) => ({
            value: e,
            label: t(e, l[n]),
          }))
        : {
            value: e,
            label: t(e, l),
          };
    }
    return {
      option: l,
      value: n,
    };
  };
  let onSort = (e) => {
    setEm(e);
    if (onChange) {
      let t = eJ(e);
      onChange(t.value, t.option);
    }
  };
  let e1 = (e) => {
    onSort(ex.filter((t) => t !== e));
    if (onDeselect) {
      let t = eJ(e, false);
      onDeselect(t.value, t.option);
    }
  };
  let _onClick = (e, t) => {
    if (!t) {
      if (ev) {
        if (ex.indexOf(e) === -1) {
          if (optionInfoMap.get(e)) {
            onSort(ex.concat(e));
          }
        } else {
          e1(e);
        }
        if (!(g.Gv(showSearch) && showSearch.retainInputValueWhileSelect)) {
          eQ("", "optionChecked");
        }
      } else {
        if (e !== ex) {
          onSort(e);
        }
        setTimeout(() => {
          onVisibleChange_1(false);
        });
      }
    }
  };
  let hotkeyHandler = x.A(
    new Map([
      [u.gw.code, () => onVisibleChange_1(false)],
      [
        u.xy.code,
        () => {
          if (eb) {
            let e = optionInfoMap.get(eN);
            if (e) {
              _onClick(eN, e.disabled);
            }
          } else {
            onVisibleChange_1(true);
          }
        },
      ],
      [u.oz.code, () => onVisibleChange_1(false)],
      [
        u.Do.code,
        () => {
          if (eb) {
            eLRef.current = "up";
            setEN(eX("up"));
            return false;
          }
        },
      ],
      [
        u.yd.code,
        () => {
          if (eb) {
            eLRef.current = "down";
            setEN(eX("down"));
            return false;
          }
        },
      ],
    ]),
  );
  let popup = () => {
    let measureLongestItem =
      (triggerProps == null ? undefined : triggerProps.autoAlignPopupWidth) ===
      false;
    let t = measureLongestItem && hasComplexLabelInOptions;
    let l = "notFoundContent" in R ? notFoundContent : renderEmpty("Select");
    let i = childrenList.length
      ? o.jsx(
          A,
          r._(
            n._(
              {
                id: eU,
                role: "listbox",
                style: dropdownMenuStyle,
                className: a.A(
                  `${prefixCls}-popup-inner`,
                  dropdownMenuClassName,
                ),
                ref: ePRef,
                data: childrenList,
                height: null,
                isStaticItemHeight: !hasOptGroup,
                measureLongestItem,
                itemKey: (e) => e.props._key,
                onMouseDown,
                onMouseMove: () => {
                  eLRef.current = null;
                },
                onScroll: (e) => onPopupScroll && onPopupScroll(e.target),
              },
              virtualListProps,
            ),
            {
              threshold: t
                ? null
                : virtualListProps == null
                  ? undefined
                  : virtualListProps.threshold,
              children: (e) => {
                if (N(e)) {
                  return o.jsx(
                    e.type,
                    r._(n._({}, e.props), {
                      prefixCls,
                    }),
                  );
                }
                if (E(e)) {
                  var t;
                  let l = (t = e.props) == null ? undefined : t.value;
                  let r = {
                    prefixCls,
                    rtl,
                    _valueActive: eN,
                    _valueSelect: ex,
                    _isMultipleMode: ev,
                    _isUserCreatingOption: allowCreate && ek === l,
                    _isUserCreatedOption: allowCreate && e$.indexOf(l) > -1,
                    _onClick,
                    _onMouseEnter: (e) => {
                      if (eLRef.current === null) {
                        setEN(e);
                      }
                    },
                    _onMouseLeave: () => {
                      if (eLRef.current === null) {
                        setEN(undefined);
                      }
                    },
                  };
                  return e && o.jsx(e.type, n._({}, e.props, r));
                }
                return e;
              },
            },
          ),
        )
      : null;
    let u =
      l && !allowCreate
        ? o.jsx("div", {
            style: dropdownMenuStyle,
            className: a.A(`${prefixCls}-popup-inner`, dropdownMenuClassName),
            children: l,
          })
        : null;
    return o.jsx("div", {
      className: a.A(`${prefixCls}-popup`, {
        [`${prefixCls}-popup-hidden`]: i === null && u === null,
        [`${prefixCls}-popup-multiple`]: ev,
      }),
      tabIndex: -1,
      onKeyDown: (e) => hotkeyHandler(e),
      children:
        typeof dropdownRender === "function" ? dropdownRender(i || u) : i || u,
    });
  };
  let e6 = (e) => {
    let t = false;
    if (ev && g.cy(tokenSeparators) && tokenSeparators.length) {
      let l = e.split(RegExp(`[${tokenSeparators.join("")}]`));
      if (l.length > 1) {
        let e = l.filter((e, t) => e && l.indexOf(e) === t);
        let n = ex.slice(0);
        let r = false;
        e.forEach((e) => {
          if (n.indexOf(e) === -1 && (allowCreate || optionInfoMap.get(e))) {
            n.push(e);
            r = true;
          }
        });
        if (r) {
          onSort(n);
        }
        t = true;
      }
    }
    return t;
  };
  i.useImperativeHandle(t, () => {
    var e;
    return {
      dom: (e = eDRef.current) == null ? undefined : e.dom,
      focus() {
        if (eDRef.current) {
          eDRef.current.focus();
        }
      },
      blur() {
        if (eDRef.current) {
          eDRef.current.blur();
        }
      },
      hotkeyHandler,
      activeOptionValue: eN,
      getOptionInfoByValue,
      getOptionInfoList: () =>
        [...optionInfoMap.values()].filter((e) => e._valid),
    };
  }, [hotkeyHandler, optionInfoMap, eN]);
  let renderView = (children_1) =>
    o.jsx(
      s.A,
      r._(
        n._(
          {
            ref: (e) => (eVRef.current = e),
            popup,
            trigger,
            disabled,
            getPopupContainer,
            classNames: "slideDynamicOrigin",
            autoAlignPopupWidth: true,
            popupAlign: {
              bottom: 4,
            },
            popupVisible: eb,
            unmountOnExit,
            onVisibleChange: onVisibleChange_1,
          },
          d.A(triggerProps, ["popupVisible", "onVisibleChange"]),
        ),
        {
          children: children_1,
        },
      ),
    );
  let e7 =
    typeof triggerElement === "function"
      ? triggerElement(eJ(ex))
      : triggerElement;
  return o.jsx(m.A, {
    onResize: () => eVRef.current.updatePopupPosition(),
    children:
      e7 != null
        ? renderView(e7)
        : o.jsx(
            _.A,
            r._(
              n._({}, R, {
                onFocus,
                onBlur: (e) => {
                  if (onBlur != null) {
                    onBlur(e);
                  }
                  if (!eb) {
                    eQ("", "optionListHide");
                  }
                },
                onKeyDown: (e) => {
                  if (e.target.tagName === "INPUT" && e.target.value) {
                    let t = e.key === u.oz.key;
                    let l = e.key === u.xy.key;
                    if (
                      (l || t) &&
                      e6(e.target.value + (l ? "\n" : t ? "	" : ""))
                    ) {
                      eFRef.current = Date.now();
                      eQ("", "tokenSeparator");
                    }
                  }
                  hotkeyHandler(e);
                  if (onKeyDown != null) {
                    onKeyDown(e);
                  }
                },
                onChangeInputValue: (e, { nativeEvent: { inputType } }) => {
                  if (
                    (inputType === "insertFromPaste" &&
                      Date.now() - eFRef.current < 100) ||
                    e6(e)
                  ) {
                    eQ("", "tokenSeparator");
                  } else {
                    eQ(e, "manual");
                  }
                  if (!eb && e) {
                    onVisibleChange_1(true);
                  }
                },
                onPaste: (e) => {
                  if (e6(e.clipboardData.getData("text"))) {
                    eFRef.current = Date.now();
                  }
                  if (onPaste != null) {
                    onPaste(e);
                  }
                },
                onRemoveCheckedItem: (e, t, l) => {
                  l.stopPropagation();
                  e1(ex[t]);
                },
                onClear: (e) => {
                  e.stopPropagation();
                  if (ev) {
                    onSort(
                      ex.filter((e) => {
                        let t = optionInfoMap.get(e);
                        return t && t.disabled;
                      }),
                    );
                  } else {
                    onSort(undefined);
                  }
                  eQ("", "manual");
                  if (onClear != null) {
                    onClear(eb);
                  }
                },
              }),
              {
                ref: eDRef,
                value: ex,
                inputValue: ey,
                popupVisible: eb,
                rtl,
                prefixCls,
                ariaControls: eU,
                isEmptyValue,
                isMultiple: ev,
                onSort,
                renderText: (e) => {
                  let t = getOptionInfoByValue(e);
                  let text = e;
                  if (g.Tn(renderFormat)) {
                    let t = eJ(e, false);
                    text = renderFormat(t.option || null, t.value);
                  } else {
                    let n = false;
                    if (labelInValue) {
                      let t = R.value || R.defaultValue;
                      if (Array.isArray(t)) {
                        let r = t.find((t) => g.Gv(t) && t.value === e);
                        if (r) {
                          text = r.label;
                          n = true;
                        }
                      } else {
                        if (g.Gv(t)) {
                          text = t.label;
                          n = true;
                        }
                      }
                    }
                    if (!n && t && "children" in t) {
                      text = t.children;
                    }
                  }
                  return {
                    text,
                    disabled: t && t.disabled,
                  };
                },
                renderView,
              },
            ),
          ),
  });
});
R.displayName = "Select";
R.Option = v;
R.OptGroup = p;
var P = R;
export { P as A };
