import r from "oa";
import o from "bk";
import i from "qa";
import l from "z8";
import s from "bT";
import { A as A_1 } from "./module-d1.js";
import { A as A_2 } from "./module-MA.js";
import { QO } from "./module-tMn.js";
import { Et, Gv, Tn } from "./module-NnE_2.js";
import { A as A_3 } from "./module-LFK.js";
import { A as A_4 } from "./module-zYa.js";
import { A as A_5 } from "./module-ynx.js";
import { A as A_6 } from "./module-CY_2.js";
import { A as A_7 } from "./module-feV.js";
import { A as A_8 } from "./module-ZC.js";
import { A as A_9 } from "./module-S0.js";
import { A as A_10 } from "./module-el_4.js";
import { A as A_11 } from "./module-hl_2.js";
import { xy } from "./module-Kg.js";
import { A as A_12 } from "./module-qiY.js";
import { sy } from "./module-vge.js";
import E from "M1s";
import { A as A_13 } from "./module-CVa.js";
import { AU, on } from "./module-qV.js";
import { A as A_14 } from "./module-j6G.js";
import { A as A_15 } from "./module-oO_3.js";
import { A as A_16 } from "./module-xiT.js";
let d = s.forwardRef(function (e, t) {
  let nRef = s.useRef(false);
  let { getPrefixCls } = s.useContext(QO);
  let { children, className, style, lazyload, isActive } = e;
  let g = i._(e, ["children", "className", "style", "lazyload", "isActive"]);
  let y = getPrefixCls("tabs");
  nRef.current = !lazyload || nRef.current || isActive;
  return (
    nRef.current &&
    l.jsx(
      "div",
      o._(
        r._(
          {
            ref: t,
          },
          A_2(g, ["destroyOnHide", "title", "closable"]),
        ),
        {
          className: A_1(`${y}-pane`, className),
          style,
          children,
        },
      ),
    )
  );
});
d.displayName = "TabPane";
d.isTabPane = true;
function useY(e) {
  let {
    prefixCls,
    currentOffset,
    headerSize,
    headerWrapperSize,
    getTitleRef,
    paneChildren,
    direction,
  } = e;
  let u = paneChildren.map((e) => e.key);
  let d = direction === "vertical" ? headerSize.height : headerSize.width;
  let p =
    direction === "vertical"
      ? headerWrapperSize.height
      : headerWrapperSize.width;
  let f = s.useMemo(() => {
    let e = {};
    let headerWrapperSize_domRect = headerWrapperSize.domRect;
    u.map((n) => {
      let r = getTitleRef(n);
      if (!r) {
        return;
      }
      let o = r.getBoundingClientRect();
      e[n] = {
        left: o.left - headerWrapperSize_domRect.left,
        right: o.left - headerWrapperSize_domRect.left + o.width,
        top: o.top - headerWrapperSize_domRect.top,
        bottom: o.top - headerWrapperSize_domRect.top + o.height,
      };
    });
    return e;
  }, [u.join(","), d, p]);
  let y = s.useMemo(() => {
    let e = -1;
    let t = -1;
    for (let r in f) {
      let { left, right } = f[r];
      if (left >= currentOffset && right - currentOffset <= p && e === -1) {
        t = e = u.indexOf(r);
      }
      if (left >= currentOffset && right - currentOffset > p) {
        t = u.indexOf(r);
        break;
      }
    }
    return [e, t];
  }, [f, u.join(","), currentOffset]);
  return l.jsx(A_5, {
    trigger: "click",
    droplist: l.jsx(A_6, {
      onClickMenuItem: e.onClickTab,
      children: paneChildren.map((e, t) => {
        if (t < y[0] || t >= y[1]) {
          return l.jsx(
            A_6.Item,
            {
              disabled: e.disabled,
              children: e.props.title,
            },
            e.key,
          );
        }
      }),
    }),
    children: l.jsx(A_7, {
      role: "button",
      "aria-label": "expand tabs",
      prefix: `${prefixCls}-dropdown`,
      className: `${prefixCls}-dropdown-icon`,
      children: l.jsx(A_4, {}),
    }),
  });
}
const j = (e) => {
  let {
    direction,
    headerSize,
    headerWrapperSize,
    prefixCls,
    iconPos,
    currentOffset,
    align,
    rtl,
  } = e;
  let { height, width } = headerWrapperSize;
  let { height: height_1, width: width_1 } = headerSize;
  let y = height_1 - height;
  let j = width_1 - width;
  let O = (t) => {
    if (t !== e.currentOffset && e.onChange) {
      e.onChange(t);
    }
  };
  let C = (e, t) => {
    e.preventDefault();
    O(
      align === "left"
        ? t === "left"
          ? currentOffset - width
          : currentOffset + width
        : t === "left"
          ? currentOffset + width
          : currentOffset - width,
    );
  };
  let N = (e, t) => {
    let n;
    e.preventDefault();
    if (t === "up") {
      n = currentOffset - height;
    } else if ((n = currentOffset + height) >= height_1) {
      return;
    }
    O(n);
  };
  let P = false;
  let $ = false;
  if (align === "left") {
    P = currentOffset <= 0;
    $ = direction === "vertical" ? currentOffset >= y : currentOffset >= j;
  } else {
    P = direction === "vertical" ? currentOffset >= y : currentOffset >= j;
    $ = currentOffset <= 0;
  }
  let k = (e) => {
    if (e.disabled) {
      return null;
    }
    return l.jsx(A_7, {
      className: A_1(`${prefixCls}-nav-icon`, e.cs),
      onClick: e.handleClick,
      children: e == null ? undefined : e.icon,
    });
  };
  if (direction === "vertical") {
    return k(
      iconPos === "prev"
        ? {
            disabled: P,
            icon: l.jsx(A_10, {}),
            handleClick: (e) => N(e, "up"),
            cs: `${prefixCls}-up-icon`,
          }
        : {
            disabled: $,
            icon: l.jsx(A_4, {}),
            handleClick: (e) => N(e, "down"),
            cs: `${prefixCls}-down-icon`,
          },
    );
  }
  let A = {
    strokeWidth: 6,
  };
  return k(
    iconPos === "prev"
      ? {
          disabled: P,
          icon: rtl ? l.jsx(A_9, r._({}, A)) : l.jsx(A_8, r._({}, A)),
          handleClick: (e) => C(e, "left"),
          cs: `${prefixCls}-left-icon`,
        }
      : {
          disabled: $,
          icon: rtl ? l.jsx(A_8, r._({}, A)) : l.jsx(A_9, r._({}, A)),
          handleClick: (e) => C(e, "right"),
          cs: `${prefixCls}-right-icon`,
        },
  );
};
let N = (e, t) => {
  let n = e.getBoundingClientRect();
  let r = t.getBoundingClientRect();
  let o = t.offsetWidth / r.width;
  let i = t.offsetHeight / r.height;
  return {
    left: (n.left - r.left) * o,
    top: (n.top - r.top) * i,
    right: (n.right - r.right) * o,
    bottom: (n.bottom - r.bottom) * i,
  };
};
let P = ({ onPressEnter }) => ({
  onKeyDown: (t) => {
    if ((t.keyCode || t.which) === xy.code) {
      onPressEnter(t);
    }
  },
});
const $ = s.forwardRef(
  (
    {
      prefixCls,
      onDeleteTab,
      tabKey,
      isActive,
      onClickTab,
      disabled = false,
      title,
      editable,
      renderTitle,
      deleteIcon,
      deleteButton,
      getIdPrefix,
      index,
    },
    b,
  ) => {
    let x = Tn(renderTitle) ? renderTitle : (e) => e;
    let w = (e) => {
      e.stopPropagation();
      if (!disabled) {
        onDeleteTab();
      }
    };
    let onClick = (e) => {
      if (!disabled) {
        onClickTab(e);
      }
    };
    return x(
      l.jsxs(
        "div",
        {
          ref: b,
          className: A_1(`${prefixCls}-header-title`, {
            [`${prefixCls}-header-title-active`]: isActive,
            [`${prefixCls}-header-title-editable`]: editable,
            [`${prefixCls}-header-title-disabled`]: disabled,
          }),
          role: "tab",
          "aria-selected": isActive,
          tabIndex: disabled ? -1 : 0,
          "aria-disabled": disabled || undefined,
          id: getIdPrefix(index).tab,
          "aria-controls": getIdPrefix(index).tabpane,
          onClick,
          onKeyDown: (e) => {
            if ((e.keyCode || e.which) === xy.code) {
              onClick(e);
            }
          },
          children: [
            l.jsx("span", {
              className: `${prefixCls}-header-title-text`,
              children: title,
            }),
            editable &&
              l.jsx(
                "span",
                o._(
                  r._(
                    {
                      role: "button",
                      "aria-label": "remove tab",
                      "aria-disabled": disabled || undefined,
                      tabIndex: disabled ? -1 : 0,
                      className: `${prefixCls}-close-icon`,
                    },
                    P({
                      onPressEnter: w,
                    }),
                  ),
                  {
                    onClick: w,
                    children:
                      deleteButton ||
                      l.jsx(A_7, {
                        prefix: prefixCls,
                        children: deleteIcon || l.jsx(A_11, {}),
                      }),
                  },
                ),
              ),
          ],
        },
        tabKey,
      ),
      {
        key: tabKey,
        isActive,
        disabled,
        editable,
      },
    );
  },
);
const useM = ({
  prefixCls,
  animation,
  disabled,
  direction,
  getTitleRef,
  activeTab,
  getHeaderRef,
}) => {
  let uRef = s.useRef();
  let dRef = s.useRef();
  s.useEffect(() => {
    let e = A_13(() => {
      let e = ((e, t, n) => {
        let r = {};
        if (t) {
          let o = N(t, n);
          r =
            e === "vertical"
              ? {
                  top: `${o.top}px`,
                  height: `${t.offsetHeight}px`,
                  left: "",
                  width: "",
                }
              : {
                  left: `${o.left}px`,
                  width: `${t.offsetWidth}px`,
                  top: "",
                  height: "",
                };
        }
        return r;
      })(direction, getTitleRef(activeTab), getHeaderRef("headerRef").current);
      if (e && !E.A(dRef.current, e)) {
        dRef.current = e;
        Object.keys(e).forEach((t) => {
          uRef.current.style[t] = e[t];
        });
      }
    });
    e();
    return () => {
      if (e.cancel) {
        e.cancel();
      }
    };
  });
  return l.jsx("div", {
    className: A_1(`${prefixCls}-header-ink`, {
      [`${prefixCls}-header-ink-no-animation`]: !animation,
      [`${prefixCls}-header-ink-disabled`]: disabled,
    }),
    ref: uRef,
  });
};
function useT() {
  let eRef = s.useRef();
  let [t, setT] = s.useState({
    height: 0,
    width: 0,
  });
  s.useEffect(() => {
    if (eRef.current) {
      setT({
        height: eRef.current.offsetHeight,
        width: eRef.current.offsetWidth,
        domRect: eRef.current.getBoundingClientRect(),
      });
    }
  }, []);
  return [eRef, t, setT];
}
let D = "vertical";
let R = "right";
let I = "left";
let z = {
  delete: true,
  add: true,
};
let V = s.forwardRef((e, t) => {
  let n = s.useContext(YContext);
  let { rtl } = s.useContext(QO);
  let c = r._({}, e, n);
  let [d, h, m] = useT();
  let [v, b, x] = useT();
  let [w, O, C] = useT();
  let [E, V, W] = useT();
  let BRef = s.useRef({});
  let [H, setH] = s.useState(0);
  let [F, setF] = s.useState(true);
  let {
    paneChildren,
    editable,
    prefixCls,
    onAddTab,
    direction,
    type = "line",
    overflow = "scroll",
    activeTab,
    showAddButton,
    size = "default",
    style,
    tabPosition,
    className,
    extra,
    animation,
    icons,
    deleteButton,
    addButton,
    renderTabTitle,
    scrollAfterEdit,
    scrollPosition = "auto",
  } = c;
  let eh = Gv(scrollAfterEdit) ? r._({}, z, scrollAfterEdit) : z;
  let [em, ev] = rtl ? [R, I] : [I, R];
  let align = type === "capsule" ? ev : em;
  let isScrollable = s.useMemo(() => {
    let e = O.height - V.height;
    let t = O.width - V.width;
    if (c.direction === "vertical") {
      return e < b.height;
    }
    return t < b.width;
  }, [c.direction, O, V, b]);
  let eb = A_13((e) => {
    if (w.current) {
      let e = w.current;
      C({
        height: e.offsetHeight,
        width: e.offsetWidth,
      });
    }
    let t = e[0] && e[0].target;
    if (t) {
      m({
        height: t.offsetHeight,
        width: t.offsetWidth,
        domRect: t.getBoundingClientRect(),
      });
    }
  });
  let ex = A_13((e) => {
    let t = e[0] && e[0].target;
    if (t) {
      x({
        height: t.offsetHeight,
        width: t.offsetWidth,
        domRect: t.getBoundingClientRect(),
      });
    }
  });
  let onResize = A_13((e) => {
    let t = e[0] && e[0].target;
    if (t) {
      W({
        height: t.offsetHeight,
        width: t.offsetWidth,
        domRect: t.getBoundingClientRect(),
      });
    }
  });
  let ej = s.useCallback(
    (e) => {
      let t = direction === D ? b.height - h.height : b.width - h.width;
      let n = e;
      return Math.max((n = Math.min(t, n)), 0);
    },
    [direction, b, h],
  );
  let onChange = (e) => {
    let t = ej(e);
    if (t !== H) {
      setH(t);
    }
  };
  s.useEffect(
    () => () => {
      if (ex.cancel) {
        ex.cancel();
      }
      if (eb.cancel) {
        eb.cancel();
      }
    },
    [],
  );
  s.useEffect(() => {
    if (!F) {
      return void setF(true);
    }
    ((e, t) => {
      let { scrollLeft } = e;
      let { scrollTop } = e;
      if (t === "horizontal" && scrollLeft) {
        e.scrollTo({
          left: -1 * scrollLeft,
        });
      }
      if (t === "vertical" && scrollTop) {
        e.scrollTo({
          top: -1 * scrollTop,
        });
      }
    })(d.current, direction);
    let e = (() => {
      let e = BRef.current[activeTab];
      if (!e || !isScrollable) {
        return 0;
      }
      let t = N(e, d.current);
      let n = (({ direction, align = I, headerDom, headerWrapperDom }) => {
        let o = N(headerDom, headerWrapperDom);
        if (direction === D) {
          return -o.top;
        }
        if (align === R) {
          return o.right;
        }
        return -o.left;
      })({
        direction,
        align,
        headerDom: v.current,
        headerWrapperDom: d.current,
      });
      if (direction === "vertical") {
        let e = n;
        let r = scrollPosition;
        let o = n + t.top;
        let i = n + t.bottom;
        if (r === "auto") {
          r = t.top < 0 ? "start" : t.bottom > 0 ? "end" : scrollPosition;
        }
        switch (r) {
          case "start":
            e = o;
            break;
          case "end":
            e = i;
            break;
          case "center":
            e = o - (t.top - t.bottom) / 2;
            break;
          default:
            if (Et(r)) {
              e = Math.max(o - r, i);
            }
        }
        return e;
      }
      if (align === "right") {
        let e = n - t.left;
        let r = n - t.right;
        let o = scrollPosition;
        let i = n;
        if (scrollPosition === "auto") {
          o = t.left < 0 ? "start" : t.right > 0 ? "end" : scrollPosition;
        }
        switch (o) {
          case "start":
            i = e;
            break;
          case "end":
            i = r;
            break;
          case "center":
            i = e + (t.left - t.right) / 2;
            break;
          default:
            if (Et(o)) {
              i = Math.min(e + o, r);
            }
        }
        return i;
      }
      let r = n;
      let o = scrollPosition;
      let i = n + t.left;
      let l = n + t.right;
      if (scrollPosition === "auto") {
        o = t.left < 0 ? "start" : t.right > 0 ? "end" : scrollPosition;
      }
      switch (o) {
        case "start":
          r = i;
          break;
        case "end":
          r = l;
          break;
        case "center":
          r = i - (t.left - t.right) / 2;
          break;
        default:
          if (Et(o)) {
            r = Math.max(i - o, l);
          }
      }
      return r;
    })();
    setH((e = ej(e)));
  }, [activeTab, direction, overflow, isScrollable, type, ej, scrollPosition]);
  let style_1 = (({ direction, align = I, headerOffset }) => {
    let r = `translateX(${-headerOffset}px)`;
    if (align === R) {
      r = `translateX(${headerOffset}px)`;
    }
    if (direction === D) {
      r = `translateY(${-headerOffset}px)`;
    }
    return sy(r);
  })({
    direction,
    align,
    headerOffset: H,
  });
  let eN = isScrollable && overflow === "dropdown" && direction !== "vertical";
  let eP = isScrollable && !eN;
  let e$ =
    editable && (type === "card" || type === "card-gutter" || type === "line");
  let ek = () => {
    if (onAddTab) {
      onAddTab();
    }
    setF(eh.add);
  };
  let eA = (e) =>
    e &&
    showAddButton &&
    l.jsx(
      "div",
      o._(
        r._(
          {
            className: `${prefixCls}-add-icon`,
            "aria-label": "add tab",
            tabIndex: 0,
            role: "button",
            onClick: ek,
          },
          P({
            onPressEnter: ek,
          }),
        ),
        {
          children:
            addButton ||
            l.jsx(A_7, {
              prefix: `${prefixCls}-add`,
              children: l.jsx("span", {
                className: `${prefixCls}-add`,
                children:
                  (icons == null ? undefined : icons.add) || l.jsx(A_12, {}),
              }),
            }),
        },
      ),
    );
  ((e) => {
    let {
      headerWrapperRef,
      headerOffset,
      align,
      isScrollable,
      direction,
      onScroll,
    } = e;
    function a(e, t) {
      let o = 0;
      o =
        direction === "vertical"
          ? headerOffset + t
          : align === "left"
            ? headerOffset + e
            : headerOffset - e;
      if (onScroll) {
        onScroll(o);
      }
    }
    let cRef = s.useRef("x");
    let uRef = s.useRef({
      clientX: 0,
      clientY: 0,
    });
    let d = (e) => e && e.touches && e.touches.length && e.touches[0];
    let p = (e) => {
      if (e.cancelable) {
        e.preventDefault();
      }
      let t = d(e);
      if (!t) {
        return;
      }
      let { clientX, clientY } = uRef.current;
      a(-(t.clientX - clientX), -(t.clientY - clientY));
    };
    let f = () => {
      AU(document.documentElement, "touchmove", p);
      AU(document.documentElement, "touchend", f);
    };
    let hRef = s.useRef(null);
    hRef.current = {
      onWheel: function (e) {
        if (!isScrollable) {
          return;
        }
        e.preventDefault();
        let { deltaX, deltaY } = e;
        let r = 0;
        let i = Math.abs(deltaX);
        let l = Math.abs(deltaY);
        if (i === l) {
          r = cRef.current === "x" ? deltaX : deltaY;
        } else if (i > l) {
          r = deltaX;
          cRef.current = "x";
        } else {
          r = deltaY;
          cRef.current = "y";
        }
        a(r, r);
      },
      onTouchStart: (e) => {
        if (!isScrollable) {
          return;
        }
        let t = d(e);
        if (t) {
          uRef.current = {
            clientX: t.clientX,
            clientY: t.clientY,
          };
          on(document.documentElement, "touchmove", p, {
            passive: false,
          });
          on(window, "touchend", f, {
            passive: false,
          });
        }
      },
    };
    s.useEffect(() => {
      on(
        headerWrapperRef.current,
        "wheel",
        (e) => {
          hRef.current.onWheel(e);
        },
        {
          passive: false,
        },
      );
      on(
        headerWrapperRef.current,
        "touchstart",
        (e) => {
          hRef.current.onTouchStart(e);
        },
        {
          passive: true,
        },
      );
    }, [headerWrapperRef.current]);
  })({
    headerWrapperRef: d,
    headerOffset: H,
    align,
    direction,
    isScrollable,
    onScroll(e) {
      onChange(e);
    },
  });
  return l.jsxs("div", {
    className: A_1(
      `${prefixCls}-header-nav`,
      `${prefixCls}-header-nav-${direction}`,
      `${prefixCls}-header-nav-${tabPosition}`,
      `${prefixCls}-header-size-${size}`,
      `${prefixCls}-header-nav-${type}`,
      className,
    ),
    style,
    ref: t,
    children: [
      eP &&
        l.jsx(j, {
          iconPos: "prev",
          rtl,
          prefixCls,
          currentOffset: H,
          headerSize: b,
          headerWrapperSize: h,
          direction,
          align,
          onChange,
        }),
      l.jsxs("div", {
        className: A_1(`${prefixCls}-header-scroll`, {
          [`${prefixCls}-header-overflow-scroll`]: eP,
          [`${prefixCls}-header-overflow-dropdown`]: eN,
        }),
        ref: w,
        children: [
          l.jsx(A_3, {
            onResize: eb,
            children: l.jsxs("div", {
              className: `${prefixCls}-header-wrapper`,
              ref: d,
              children: [
                l.jsx(A_3, {
                  onResize: ex,
                  children: l.jsxs("div", {
                    className: A_1(`${prefixCls}-header`, {
                      [`${prefixCls}-header-no-padding`]:
                        !e.headerPadding &&
                        direction === "horizontal" &&
                        ["line", "text"].indexOf(type) > -1,
                    }),
                    ref: v,
                    style: style_1,
                    children: [
                      paneChildren.map((t, index) =>
                        l.jsx(
                          $,
                          o._(
                            r._(
                              {
                                ref: (e) => {
                                  BRef.current[t.key] = e;
                                },
                                tabKey: t.key,
                              },
                              t.props,
                            ),
                            {
                              prefixCls,
                              onDeleteTab: () => {
                                if (c.onDeleteTab) {
                                  c.onDeleteTab(t.key);
                                }
                                setF(eh.delete);
                              },
                              renderTitle: e.children || renderTabTitle,
                              onClickTab: () => {
                                if (c.onClickTab) {
                                  c.onClickTab(t.key);
                                }
                              },
                              isActive: activeTab === t.key,
                              editable: e$ && t.props.closable !== false,
                              deleteIcon:
                                icons == null ? undefined : icons.delete,
                              deleteButton,
                              getIdPrefix: n.getIdPrefix,
                              index,
                            },
                          ),
                          index,
                        ),
                      ),
                      type === "line" &&
                        l.jsx(useM, {
                          disabled: !!paneChildren.find(
                            (e) =>
                              e &&
                              e.props &&
                              e.props.disabled &&
                              e.key === activeTab,
                          ),
                          prefixCls,
                          animation,
                          direction,
                          getTitleRef: (e) => BRef.current[e],
                          activeTab,
                          getHeaderRef: () => v,
                        }),
                    ],
                  }),
                }),
                !isScrollable && eA(e$),
              ],
            }),
          }),
          eN &&
            l.jsx(useY, {
              onClickTab: c.onClickTab,
              paneChildren,
              prefixCls,
              currentOffset: H,
              headerSize: b,
              headerWrapperSize: h,
              getTitleRef: (e) => BRef.current[e],
              direction,
            }),
          ((e$ && isScrollable) || extra) &&
            l.jsx(A_3, {
              onResize,
              children: l.jsxs("div", {
                className: `${prefixCls}-header-extra`,
                ref: E,
                children: [isScrollable && eA(e$), extra],
              }),
            }),
        ],
      }),
      eP &&
        l.jsx(j, {
          iconPos: "next",
          prefixCls,
          rtl,
          currentOffset: H,
          headerSize: b,
          headerWrapperSize: h,
          direction,
          align,
          onChange,
        }),
    ],
  });
});
function useW(e) {
  let {
    animation,
    activeTab,
    prefixCls,
    paneChildren,
    direction,
    lazyload,
    destroyOnHide,
  } = e;
  let p = paneChildren.findIndex((e) => e.key === activeTab);
  let f = s.useContext(YContext);
  let { rtl } = s.useContext(QO);
  if (
    paneChildren.every(
      (e) =>
        (e == null ? undefined : e.props) &&
        (!("children" in e.props) || e.props.children === null),
    )
  ) {
    return null;
  }
  let className = A_1(`${prefixCls}-content-inner`, {
    [`${prefixCls}-animation`]: animation,
  });
  return l.jsx("div", {
    className: `${prefixCls}-content ${prefixCls}-content-${direction}`,
    children: l.jsx("div", {
      className,
      style: rtl
        ? {
            marginRight: `-${100 * p}%`,
          }
        : {
            marginLeft: `-${100 * p}%`,
          },
      children: paneChildren.map((e, t) => {
        let { tabpane, tab } = f.getIdPrefix(t);
        let u =
          "destroyOnHide" in e.props ? e.props.destroyOnHide : destroyOnHide;
        let isActive = e.key === activeTab;
        return l.jsx(
          "div",
          {
            className: A_1(`${prefixCls}-content-item`, {
              [`${prefixCls}-content-item-active`]: isActive,
            }),
            role: "tabpanel",
            id: tabpane,
            "aria-hidden": !isActive || undefined,
            tabIndex: isActive ? 0 : -1,
            "aria-labelledby": tab,
            children:
              p !== t && u
                ? null
                : s.cloneElement(e, {
                    lazyload,
                    isActive,
                  }),
          },
          e.key,
        );
      }),
    }),
  });
}
V.displayName = "TabHeader";
let F = ["mini", "small", "default", "large"];
let K = {
  tabPosition: "top",
  type: "line",
  overflow: "scroll",
  showAddButton: true,
  lazyload: true,
  headerPadding: true,
  scrollPosition: "auto",
};
let YContext = s.createContext({});
export let A = s.forwardRef(function (e, t) {
  let { getPrefixCls, size, componentConfig, rtl } = s.useContext(QO);
  let m = A_15(
    e,
    K,
    componentConfig == null ? undefined : componentConfig.Tabs,
  );
  let paneChildren = ((e) => {
    let { children } = e;
    let n = [];
    s.Children.forEach(children, (e) => {
      if (e && e.type && e.type.isTabPane) {
        n.push(e);
      }
    });
    return n;
  })(m);
  let gRef = s.useRef();
  let [y, b] = A_14(paneChildren[0] && paneChildren[0].key, {
    defaultValue: "defaultActiveTab" in m ? m.defaultActiveTab : undefined,
    value: "activeTab" in m ? m.activeTab : undefined,
  });
  let prefixCls = getPrefixCls("tabs");
  let size_1 = m.size || (F.indexOf(size) > -1 ? size : "default");
  let {
    animation,
    className,
    direction,
    style,
    type,
    justify,
    destroyOnHide,
    lazyload,
    onChange,
    onClickTab,
    onDeleteTab,
    renderTabHeader,
  } = m;
  let S = i._(m, [
    "animation",
    "className",
    "direction",
    "style",
    "type",
    "justify",
    "destroyOnHide",
    "lazyload",
    "onChange",
    "onClickTab",
    "onDeleteTab",
    "renderTabHeader",
  ]);
  let D = A_16(`${prefixCls}-`);
  let tabPosition = direction === "vertical" ? "left" : m.tabPosition;
  let I = {
    animation: !Gv(animation) || !("inkBar" in animation) || animation.inkBar,
    activeTab: y,
    tabPosition,
    direction:
      ["left", "right"].indexOf(tabPosition) > -1 ? "vertical" : "horizontal",
    paneChildren,
    onClickTab: (e) => {
      if (Tn(onClickTab)) {
        onClickTab(e);
      }
      if (e !== y) {
        if (!("activeTab" in m)) {
          b(e);
        }
        if (Tn(onChange)) {
          onChange(e);
        }
      }
    },
    onDeleteTab,
    prefixCls,
  };
  s.useImperativeHandle(t, () => gRef, []);
  let z = l.jsx(useW, {
    direction:
      ["left", "right"].indexOf(tabPosition) > -1 ? "vertical" : "horizontal",
    animation: ((e) => {
      let { direction, tabPosition, animation } = e;
      return (
        direction !== "vertical" &&
        tabPosition !== "left" &&
        tabPosition !== "right" &&
        (Gv(animation)
          ? "tabPane" in animation && animation.tabPane
          : animation)
      );
    })(m),
    activeTab: y,
    paneChildren,
    prefixCls,
    destroyOnHide,
    lazyload,
  });
  return l.jsx(
    "div",
    o._(
      r._(
        {},
        A_2(S, [
          "headerPadding",
          "tabPosition",
          "defaultActiveTab",
          "showAddButton",
          "extra",
          "onAddTab",
          "activeTab",
          "overflow",
          "editable",
          "renderTabTitle",
          "addButton",
          "deleteButton",
          "icons",
          "children",
          "size",
          "type",
          "scrollPosition",
          "offsetAlign",
        ]),
      ),
      {
        style,
        className: A_1(
          prefixCls,
          `${prefixCls}-${
            ["left", "right"].indexOf(tabPosition) > -1
              ? "vertical"
              : "horizontal"
          }`,
          `${prefixCls}-${type}`,
          `${prefixCls}-${tabPosition}`,
          `${prefixCls}-size-${size_1}`,
          {
            [`${prefixCls}-justify`]: justify,
            [`${prefixCls}-rtl`]: rtl,
          },
          className,
        ),
        ref: gRef,
        children: l.jsxs(YContext.Provider, {
          value: o._(r._({}, I), {
            getIdPrefix: (e) => ({
              tab: D && `${D}-tab-${e}`,
              tabpane: D && `${D}-panel-${e}`,
            }),
          }),
          children: [
            tabPosition === "bottom" && z,
            Tn(renderTabHeader)
              ? renderTabHeader(
                  r._(
                    o._(r._({}, A_2(m, ["children", "style", "className"])), {
                      size: size_1,
                    }),
                    I,
                  ),
                  V,
                )
              : l.jsx(
                  V,
                  o._(r._({}, A_2(m, ["children", "style", "className"])), {
                    size: size_1,
                  }),
                ),
            tabPosition !== "bottom" && z,
          ],
        }),
      },
    ),
  );
});
A.displayName = "Tabs";
A.TabPane = d;
