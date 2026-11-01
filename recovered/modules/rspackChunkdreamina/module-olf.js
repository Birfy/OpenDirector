import n from "oa";
import r from "bk";
import o from "z8";
import i from "bT";
import a from "d1";
import u from "Kg";
import s from "OPT";
import c from "qa";
import d from "MA";
import f from "L4p";
import h from "B1o";
import m from "LFK";
import g from "NnE";
import x from "hx";
import y from "H2";
import _ from "GP";
import A from "PC";
import b from "wkB";
import I from "Mi";
import w from "iM5";
import M from "QPj";
import T from "XI";
import S from "eoj";
import R from "Jq";
import D from "Kb";
import z from "F1";
import U from "tMn";
import B from "j6G";
import W from "oO";
import Y from "xiT";
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
function C(e, t) {
  let l = Math.floor(e * t);
  let n = (e - l / t) / (1 / t);
  return {
    index: l,
    offsetPtg: Number.isNaN(n) ? 0 : n,
  };
}
function k(e) {
  let t = A.findDOMNode(e);
  if (t) {
    return t.offsetHeight;
  }
  return 0;
}
function j(scrollTop, t) {
  if (scrollTop < 0) {
    return 0;
  }
  if (scrollTop > t) {
    return t;
  }
  return scrollTop;
}
function $({ scrollTop, scrollHeight, clientHeight }) {
  let n = scrollHeight - clientHeight;
  if (n <= 0) {
    return 0;
  }
  return j(scrollTop, n) / n;
}
function E(e, data_length, l) {
  let { index, offsetPtg } = C(e, data_length);
  return {
    itemIndex: index,
    itemOffsetPtg: offsetPtg,
    startIndex: Math.max(0, index - Math.ceil(e * l)),
    endIndex: Math.min(data_length - 1, index + Math.ceil((1 - e) * l)),
  };
}
function N({ itemHeight, itemOffsetPtg, scrollPtg, clientHeight }) {
  return Math.floor(clientHeight * scrollPtg - itemHeight * itemOffsetPtg);
}
const O = ({ height, offset, children, outerStyle }) => {
  let a = {};
  let u = {
    display: "flex",
    flexDirection: "column",
  };
  if (offset !== undefined) {
    a = n._(
      {
        height,
        position: "relative",
        overflow: "hidden",
        zIndex: 0,
      },
      outerStyle,
    );
    u = r._(n._({}, u), {
      transform: `translateY(${offset}px)`,
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
    });
  }
  return o.jsx("div", {
    style: a,
    children: o.jsx("div", {
      style: u,
      children,
    }),
  });
};
let P = `__virtual_item_height_${Math.random().toFixed(5).slice(2)}`;
let V = i.forwardRef((e, t) => {
  let l;
  let a;
  let {
    style,
    className,
    children,
    data = [],
    itemKey,
    threshold = 100,
    wrapper = "div",
    height = "100%",
    isStaticItemHeight = true,
    itemHeight,
    measureLongestItem,
    scrollOptions,
    onScroll,
    needFiller = true,
    outerStyle,
  } = e;
  let H = c._(e, [
    "style",
    "className",
    "children",
    "data",
    "itemKey",
    "threshold",
    "wrapper",
    "height",
    "isStaticItemHeight",
    "itemHeight",
    "measureLongestItem",
    "scrollOptions",
    "onScroll",
    "needFiller",
    "outerStyle",
  ]);
  let maxHeight = (style && style.maxHeight) || height;
  let FRef = i.useRef({});
  let [K, setK] = i.useState(200);
  l = i.useRef({});
  a = i.useRef(children);
  i.useEffect(() => {
    a.current = children;
  }, [children]);
  if (children !== a.current) {
    l.current = {};
  }
  let B = (e, t, n) => {
    if (!l.current.hasOwnProperty(t)) {
      l.current[t] = children(e, t, n);
    }
    return l.current[t];
  };
  ((e) => {
    let t = S.A();
    let { current } = e;
    i.useEffect(() => {
      if (Object.keys(current).length && !current[P]) {
        current[P] = Object.entries(current).reduce((acc, [, t], index, n) => {
          let r = acc + t;
          if (index === n.length - 1) {
            return Math.round(r / n.length);
          }
          return r;
        }, 0);
        t();
      }
    }, [Object.keys(current).length]);
  })(FRef);
  let data_length = data.length;
  let itemHeight_1 = itemHeight || FRef.current[P] || 32;
  let height_1 = g.Et(maxHeight) ? maxHeight : K;
  let Z = Math.ceil(height_1 / itemHeight_1);
  let q = itemHeight_1 * data_length;
  let X = threshold !== null && data_length >= threshold && q > height_1;
  let JRef = i.useRef(null);
  let eeRef = i.useRef(null);
  let etRef = i.useRef(false);
  let elRef = i.useRef(X);
  let en = i.useMemo(() => {
    if (JRef.current) {
      let e = (e) =>
        Number(window.getComputedStyle(JRef.current)[e].replace(/\D/g, ""));
      return {
        top: e("paddingTop"),
        bottom: e("paddingBottom"),
      };
    }
    return {
      top: 0,
      bottom: 0,
    };
  }, [JRef.current]);
  let [er, eo] = M.A({
    status: "NONE",
    startIndex: 0,
    endIndex: 0,
    itemIndex: 0,
    itemOffsetPtg: 0,
    startItemTop: 0,
    scrollTop: 0,
  });
  let ei = w.A(data) || [];
  let ea = T.A();
  let eu = (e, t) => {
    if (typeof itemKey === "function") {
      return itemKey(e, t);
    }
    if (typeof itemKey === "string") {
      return e[itemKey];
    }
    return e.key || t;
  };
  let getItemKey = (e, t = data) => {
    if (e === t.length) {
      return "__rc_ghost_item__";
    }
    let l = t[e];
    if (l !== undefined) {
      return eu(l, e);
    }
    return null;
  };
  let ec = (e) => FRef.current[e] || itemHeight_1;
  let ed = (e) => {
    let { itemIndex, relativeTop } = e;
    let { scrollHeight, clientHeight } = JRef.current;
    let er_scrollTop = er.scrollTop;
    let u = scrollHeight - clientHeight;
    let Number_MAX_VALUE = Number.MAX_VALUE;
    let c = null;
    let d = null;
    let itemOffsetPtg_1 = null;
    let startIndex_1 = null;
    let endIndex_1 = null;
    let v = 0;
    for (let e = 0; e < u; e++) {
      let n = ((e, t, l) => {
        let n = t - 0;
        let r = e - t;
        if (l <= 2 * Math.min(n, r)) {
          let e = Math.floor(l / 2);
          if (l % 2) {
            return t + e + 1;
          }
          return t - e;
        }
        if (n > r) {
          return t - (l - r);
        }
        return t + (l - n);
      })(u, er_scrollTop, e);
      let r = $({
        scrollTop: n,
        scrollHeight,
        clientHeight,
      });
      let {
        itemIndex: itemIndex_1,
        itemOffsetPtg,
        startIndex,
        endIndex,
      } = E(r, data_length, Z);
      if (startIndex <= itemIndex && itemIndex <= endIndex) {
        let e = Math.abs(
          (({
            locatedItemRelativeTop,
            locatedItemIndex,
            compareItemIndex,
            startIndex,
            endIndex,
            getItemKey,
            itemElementHeights,
            itemHeight,
          }) => {
            let u = locatedItemRelativeTop;
            let s = getItemKey(compareItemIndex);
            if (compareItemIndex <= locatedItemIndex) {
              for (
                let e = locatedItemIndex;
                e >= startIndex && getItemKey(e) !== s;
                e -= 1
              ) {
                u -= itemElementHeights[getItemKey(e - 1)] || itemHeight;
              }
            } else {
              for (let e = locatedItemIndex; e <= endIndex; e += 1) {
                let t = getItemKey(e);
                if (t === s) {
                  break;
                }
                u += itemElementHeights[t] || itemHeight;
              }
            }
            return u;
          })({
            locatedItemRelativeTop: N({
              itemHeight: ec(getItemKey(itemIndex_1)),
              itemOffsetPtg,
              clientHeight,
              scrollPtg: r,
            }),
            locatedItemIndex: itemIndex_1,
            compareItemIndex: itemIndex,
            startIndex,
            endIndex,
            itemHeight: itemHeight_1,
            getItemKey,
            itemElementHeights: FRef.current,
          }) - relativeTop,
        );
        if (e < Number_MAX_VALUE) {
          Number_MAX_VALUE = e;
          c = n;
          d = itemIndex_1;
          itemOffsetPtg_1 = itemOffsetPtg;
          startIndex_1 = startIndex;
          endIndex_1 = endIndex;
          v = 0;
        } else {
          v += 1;
        }
      }
      if (v > 10) {
        break;
      }
    }
    if (c !== null) {
      etRef.current = true;
      JRef.current.scrollTop = c;
      eo(
        r._(n._({}, er), {
          status: "MEASURE_START",
          scrollTop: c,
          itemIndex: d,
          itemOffsetPtg: itemOffsetPtg_1,
          startIndex: startIndex_1,
          endIndex: endIndex_1,
        }),
      );
    }
    eeRef.current = I.e(() => {
      etRef.current = false;
    });
  };
  let ep = (e, t = false) => {
    let { scrollTop, clientHeight } = JRef.current;
    let i = j(scrollTop, q - clientHeight);
    if (!t && (i === er.scrollTop || etRef.current)) {
      return;
    }
    let { itemIndex, itemOffsetPtg, startIndex, endIndex } = E(
      $({
        scrollTop: i,
        clientHeight,
        scrollHeight: q,
      }),
      data_length,
      Z,
    );
    eo(
      r._(n._({}, er), {
        scrollTop: i,
        itemIndex,
        itemOffsetPtg,
        startIndex,
        endIndex,
        status: "MEASURE_START",
      }),
    );
    if (e && onScroll) {
      onScroll(e);
    }
  };
  i.useEffect(
    () => () => {
      if (eeRef.current) {
        I.N(eeRef.current);
      }
    },
    [],
  );
  i.useEffect(() => {
    if (JRef.current) {
      if (ea) {
        JRef.current.scrollTop = 0;
      }
      ep(null, true);
    }
  }, [Z]);
  i.useEffect(() => {
    let e = null;
    let t = elRef.current !== X ? (X ? "virtual" : "raw") : "";
    elRef.current = X;
    if (height_1 && ei.length !== data.length) {
      let t = ((e, t, l) => {
        let n;
        let r;
        let e_length = e.length;
        let t_length = t.length;
        if (e_length === 0 && t_length === 0) {
          return null;
        }
        if (e_length < t_length) {
          n = e;
          r = t;
        } else {
          n = t;
          r = e;
        }
        let a = {
          __EMPTY_ITEM__: true,
        };
        function u(e, t) {
          if (e !== undefined) {
            return l(e, t);
          }
          return a;
        }
        let s = null;
        let multiple = Math.abs(e_length - t_length) !== 1;
        for (let e = 0; e < r.length; e += 1) {
          let t = u(n[e], e);
          if (t !== u(r[e], e)) {
            s = e;
            multiple = multiple || t !== u(r[e + 1], e + 1);
            break;
          }
        }
        if (s === null) {
          return null;
        }
        return {
          index: s,
          multiple,
        };
      })(ei, data, eu);
      e = t ? t.index : null;
    }
    if (t || (X && e)) {
      let { clientHeight } = JRef.current;
      let relativeTop = N({
        itemHeight: ec(getItemKey(er.itemIndex, ei)),
        itemOffsetPtg: er.itemOffsetPtg,
        scrollPtg: $({
          scrollTop: er.scrollTop,
          scrollHeight: ei.length * itemHeight_1,
          clientHeight,
        }),
        clientHeight,
      });
      if (t === "raw") {
        let e = relativeTop;
        for (let t = 0; t < er.itemIndex; t++) {
          e -= ec(getItemKey(t));
        }
        JRef.current.scrollTop = -e;
        etRef.current = true;
        eeRef.current = I.e(() => {
          etRef.current = false;
        });
      } else {
        ed({
          itemIndex: er.itemIndex,
          relativeTop,
        });
      }
    }
  }, [data, X]);
  R.A(() => {
    if (er.status === "MEASURE_START") {
      let { scrollTop, scrollHeight, clientHeight } = JRef.current;
      let o = $({
        scrollTop,
        scrollHeight,
        clientHeight,
      });
      let startItemTop = ((e) => {
        const { scrollTop } = e;
        return scrollTop + N(c._(e, ["scrollTop"]));
      })({
        scrollPtg: o,
        clientHeight,
        scrollTop: scrollTop - (en.top + en.bottom) * o,
        itemHeight: ec(getItemKey(er.itemIndex)),
        itemOffsetPtg: er.itemOffsetPtg,
      });
      for (let e = er.itemIndex - 1; e >= er.startIndex; e--) {
        startItemTop -= ec(getItemKey(e));
      }
      eo(
        r._(n._({}, er), {
          startItemTop,
          status: "MEASURE_DONE",
        }),
      );
    }
  }, [er]);
  i.useImperativeHandle(
    t,
    () => ({
      dom: JRef.current,
      scrollTo: (e) => {
        if (eeRef.current) {
          I.N(eeRef.current);
        }
        eeRef.current = I.e(() => {
          var t;
          var l;
          if (typeof e === "number") {
            JRef.current.scrollTop = e;
            return;
          }
          let o =
            (l = e == null ? undefined : e.index) != null
              ? l
              : "key" in e
                ? data.findIndex((t, l) => eu(t, l) === e.key)
                : 0;
          let i = data[o];
          if (!i) {
            return;
          }
          let a =
            typeof e === "object" &&
            ((t = e.options) == null ? undefined : t.block)
              ? e.options.block
              : (scrollOptions == null ? undefined : scrollOptions.block) ||
                "nearest";
          let { clientHeight, scrollTop } = JRef.current;
          if (X && !isStaticItemHeight) {
            if (a === "nearest") {
              let { itemIndex, itemOffsetPtg } = er;
              if (Math.abs(itemIndex - o) < Z) {
                let l = N({
                  itemHeight: ec(getItemKey(itemIndex)),
                  itemOffsetPtg,
                  clientHeight,
                  scrollPtg: $(JRef.current),
                });
                if (o < itemIndex) {
                  for (let t = o; t < itemIndex; t++) {
                    l -= ec(getItemKey(t));
                  }
                } else {
                  for (let t = itemIndex; t < o; t++) {
                    l += ec(getItemKey(t));
                  }
                }
                if (!(l < 0) && !(l > clientHeight)) {
                  return;
                }
                a = l < 0 ? "start" : "end";
              } else {
                a = o < itemIndex ? "start" : "end";
              }
            }
            eo(
              r._(n._({}, er), {
                startIndex: Math.max(0, o - Z),
                endIndex: Math.min(data_length - 1, o + Z),
              }),
            ).then(() => {
              let e = ec(eu(i, o));
              ed({
                itemIndex: o,
                relativeTop:
                  a === "start"
                    ? 0
                    : (clientHeight - e) / (a === "center" ? 2 : 1),
              });
            });
          } else {
            let e = ec(getItemKey(o));
            let t = 0;
            for (let e = 0; e < o; e++) {
              t += ec(getItemKey(e));
            }
            let l = t + e;
            let n = t + e / 2;
            if (n > scrollTop && n < clientHeight + scrollTop) {
              return;
            }
            if (a === "nearest") {
              if (t < scrollTop) {
                a = "start";
              } else if (l > scrollTop + clientHeight) {
                a = "end";
              }
            }
            let r = clientHeight - e;
            JRef.current.scrollTop =
              t - (a === "start" ? 0 : r / (a === "center" ? 2 : 1));
          }
        });
      },
    }),
    [data, itemHeight_1, er],
  );
  let ef = (e, t) =>
    e.map((e, l) => {
      let n = t + l;
      let r = B(e, n, {
        style: {},
      });
      let o = eu(e, n);
      return i.cloneElement(r, {
        key: o,
        ref: (e) => {
          let { current } = FRef;
          if (
            e &&
            er.status === "MEASURE_START" &&
            (!isStaticItemHeight || current[o] === undefined)
          ) {
            if (isStaticItemHeight) {
              if (!current[P]) {
                current[P] = k(e);
              }
              current[o] = current[P];
            } else {
              current[o] = k(e);
            }
          }
        },
      });
    });
  let ehRef = i.useRef(null);
  i.useEffect(() => {
    ehRef.current = null;
  }, [data]);
  return o.jsx(m.A, {
    onResize: () => {
      if (JRef.current && !g.Et(maxHeight)) {
        let { clientHeight } = JRef.current;
        setK(clientHeight);
      }
    },
    children: o.jsx(
      wrapper,
      r._(
        n._(
          {
            ref: JRef,
            style: r._(
              n._(
                {
                  overflowY: "auto",
                  overflowAnchor: "none",
                },
                style,
              ),
              {
                maxHeight,
              },
            ),
            className,
            onScroll: X
              ? ep
              : (e) => {
                  let { scrollTop, clientHeight, scrollHeight } = JRef.current;
                  let scrollTop_1 = j(scrollTop, scrollHeight - clientHeight);
                  let { index, offsetPtg } = C(
                    $({
                      scrollTop: scrollTop_1,
                      clientHeight,
                      scrollHeight,
                    }),
                    data_length,
                  );
                  eo(
                    r._(n._({}, er), {
                      scrollTop: scrollTop_1,
                      itemIndex: index,
                      itemOffsetPtg: offsetPtg,
                    }),
                  );
                  if (e && onScroll) {
                    onScroll(e);
                  }
                },
          },
          H,
        ),
        {
          children: X
            ? o.jsxs(o.Fragment, {
                children: [
                  o.jsx(O, {
                    height: q,
                    offset: er.status === "MEASURE_DONE" ? er.startItemTop : 0,
                    outerStyle,
                    children: ef(
                      data.slice(er.startIndex, er.endIndex + 1),
                      er.startIndex,
                    ),
                  }),
                  (() => {
                    if (measureLongestItem) {
                      let e;
                      let t;
                      let l =
                        ehRef.current === null
                          ? ((e = -1),
                            (t = 0),
                            data.forEach((l, n) => {
                              var r;
                              if (
                                typeof (l =
                                  typeof l === "string"
                                    ? l
                                    : (r = l.props) == null
                                      ? undefined
                                      : r.children) === "string"
                              ) {
                                let r = b.A(l);
                                if (r > t) {
                                  t = r;
                                  e = n;
                                }
                              }
                            }),
                            e)
                          : ehRef.current;
                      let n = data[l];
                      ehRef.current = l;
                      if (n) {
                        return o.jsx("div", {
                          style: {
                            height: 1,
                            overflow: "hidden",
                            opacity: 0,
                          },
                          children: B(n, l, {
                            style: {},
                          }),
                        });
                      }
                      return null;
                    }
                    return null;
                  })(),
                ],
              })
            : needFiller
              ? o.jsx(O, {
                  height: height_1,
                  children: ef(data, 0),
                })
              : ef(data, 0),
        },
      ),
    ),
  });
});
V.displayName = "VirtualList";
function onMouseDown(e) {
  if (e) {
    e.preventDefault();
  }
}
function H(e, t) {
  if (t) {
    return !g.cy(e) || !e.length;
  }
  return e === undefined;
}
function G(e, t, labelInValue) {
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
  if (H(e, t)) {
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
function F(e) {
  return D.A(e, "props.isSelectOption");
}
function K(e) {
  return D.A(e, "props.isSelectOptGroup");
}
let Q = {
  trigger: "click",
  bordered: true,
  filterOption: true,
  unmountOnExit: true,
  defaultActiveFirstOption: true,
};
let Z = i.forwardRef(function (e, t) {
  let l;
  let { getPrefixCls, renderEmpty, componentConfig, rtl } = i.useContext(U.QO);
  let A = W.A(
    e,
    Q,
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
  } = A;
  let { mode, allowCreate } = A;
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
  let [em, setEm] = i.useState(G(A.defaultValue, ev, labelInValue));
  let ex = "value" in A ? G(A.value, ev, labelInValue) : em;
  let [ey, e_, eA] = B.A("", {
    value: "inputValue" in A ? A.inputValue || "" : undefined,
  });
  let [eb, eC] = B.A(false, {
    defaultValue: A.defaultPopupVisible,
    value:
      (l = A == null ? undefined : A.popupVisible) != null
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
        let b = (child, _origin) => {
          var l;
          let o;
          let s;
          l = child;
          o = D.A(l, "props.value");
          s = D.A(l, "props.children");
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
        let C = (e, t) => {
          if (t && g.cy(e) && e.length) {
            e.forEach((e) => {
              e =
                g.Kg(e) || g.Et(e)
                  ? {
                      label: e,
                      value: e,
                    }
                  : e;
              b(
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
          C([userCreatingOption], "userCreatingOption");
        }
        if (children) {
          i.Children.map(children, (t) => {
            if (K(t)) {
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
              if (F(t)) {
                b(t, "children");
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
        C(options, "options");
        C(userCreatedOptions, "userCreatedOptions");
        return {
          childrenList: z.A({
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
  let eK = T.A();
  let eU = Y.A(`${prefixCls}-popup-`);
  let isEmptyValue = H(ex, ev);
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
  let eJ = (e, t = H(e, ev)) => {
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
          "value" in A ? A.value : "defaultValue" in A ? A.defaultValue : null;
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
    let l = "notFoundContent" in A ? notFoundContent : renderEmpty("Select");
    let i = childrenList.length
      ? o.jsx(
          V,
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
                if (K(e)) {
                  return o.jsx(
                    e.type,
                    r._(n._({}, e.props), {
                      prefixCls,
                    }),
                  );
                }
                if (F(e)) {
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
              n._({}, A, {
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
                      let t = A.value || A.defaultValue;
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
Z.displayName = "Select";
Z.Option = v;
Z.OptGroup = p;
var q = Z;
export { q as A };
