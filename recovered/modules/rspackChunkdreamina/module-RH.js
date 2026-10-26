import o from "oa";
import i from "bk";
import l from "qa";
import s from "z8";
import a from "bT";
import { A as A_1 } from "./module-Ww_2.js";
import u from "cA";
import d from "fyk";
import "U4";
import { V as V_1 } from "./module-Tb.js";
import { A as A_2 } from "./module-Ix_2.js";
import { A as A_3 } from "./module-HQZ.js";
import { A as A_4 } from "./module-Sc_2.js";
import { Qp, nk, xy } from "./module-K6G.js";
import _ from "NY";
import M from "zP7";
import { A as A_5 } from "./module-P2.js";
import { A as A_6 } from "./module-to_4.js";
import { A as A_7 } from "./module-rT.js";
import { A as A_8 } from "./module-Oj_2.js";
import { A as A_9 } from "./module-O5P.js";
import { A as A_10 } from "./module-TD_2.js";
import { A as A_11 } from "./module-MzS.js";
import { QO } from "./module-mY_2.js";
import { gd } from "./module-zv.js";
import { A as A_12 } from "./module-zrd.js";
import { AU, on } from "./module-a3_2.js";
import { A as A_13 } from "./module-c8.js";
import { A as A_14 } from "./module-P6g.js";
import { Et, Gv, Kg, Tn, b0, cy } from "./module-V9.js";
import { A as A_15 } from "./module-ZF_2.js";
import { A as A_16 } from "./module-vC_2.js";
import { A as A_17 } from "./module-k6B.js";
import { Ay, nM } from "./module-GZq_2.js";
import { A as A_18 } from "./module-cl_2.js";
import { A as A_19 } from "./module-K7F.js";
let r;
const y = a.forwardRef(function (e, t) {
  const prefixCls = a.useContext(V_1).prefixCls;
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
      .concat(r, "-icon-lv-correct"),
  };
  if (e_spin) {
    l.className = "".concat(l.className, " ").concat(r, "-icon-loading");
  }
  delete l.spin;
  delete l.isIcon;
  return a.createElement(
    "svg",
    d(
      {
        fill: "none",
        viewBox: "0 0 20 21",
        stroke: "currentColor",
      },
      l,
    ),
    a.createElement("path", {
      stroke: "#1FC4D9",
      strokeWidth: "2.667",
      d: "m4.667 9.167 4.666 4L16 6.5",
    }),
  );
});
y.defaultProps = {
  isIcon: true,
};
y.displayName = "IconLvCorrect";
let WContext = a.createContext({});
let O = ["popup", "triggerProps", "selectable"];
let C = (e) => {
  let t = [];
  a.Children.forEach(e, (e) => {
    var n;
    let r = e == null || (n = e.type) == null ? undefined : n.menuType;
    if (r === "MenuItem" || r === "SubMenu") {
      t.push(e);
    } else if (r === "MenuGroup") {
      t = t.concat(C(e.props.children));
    }
  });
  return t;
};
let N = (children, t = [], n = {}) => {
  let r = C(children);
  r.forEach((e, l) => {
    var s;
    var a;
    let { key } = e;
    let { menuType } = e.type;
    let d = [key, ...t];
    let p = {
      keyPath: [],
      prev: ((s = r[l - 1]) == null ? undefined : s.key) || null,
      next: ((a = r[l + 1]) == null ? undefined : a.key) || null,
    };
    if (l === 0 || l === r.length - 1) {
      let e = d[1];
      if (e) {
        n[e] = i._(o._({}, n[e]), {
          [l === 0 ? "firstChild" : "lastChild"]: key,
        });
      }
    }
    switch (menuType) {
      case "SubMenu":
        p.keyPath = d;
        N(e.props.children, d, n);
        break;
      case "MenuItem":
        p.keyPath = d;
        p.disabled = e.props.disabled;
    }
    n[key] = o._({}, n[key], p);
  });
  return n;
};
let P = (children, t) =>
  a.Children.map(children, (e, n) => {
    if (!e || !e.props) {
      return e;
    }
    let r = typeof e.type === "string";
    if (!(e.type && e.type.menuType) && e.props.children) {
      let n = r ? {} : t;
      return a.cloneElement(
        e,
        i._(o._({}, n), {
          _key: e.key,
          children: P(e.props.children, t),
        }),
      );
    }
    if (r) {
      return e;
    }
    return a.cloneElement(
      e,
      i._(o._({}, t, e.props), {
        _key: e.key || `$menu-${n}`,
      }),
    );
  });
function $(children, selectedKeys) {
  let n = false;
  (function e(r) {
    if (r && !n) {
      a.Children.forEach(r, (r) => {
        if (r && r.props && r.type && !n) {
          let { menuType } = r.type;
          let { selectable } = r.props;
          if (menuType === "MenuItem") {
            n = selectedKeys.indexOf(r.key) !== -1;
          } else if (menuType === "SubMenu" && selectable) {
            n = selectedKeys.indexOf(r.key) !== -1;
          }
          if (!n && r.props.children) {
            e(r.props.children);
          }
        }
      });
    }
  })(children);
  return n;
}
let A = a.forwardRef(function (e, t) {
  let {
    _key,
    children,
    level,
    disabled,
    className,
    style,
    wrapper = "div",
    selectable,
    showSelectedIcon,
    icon,
    onClick,
    onHover,
  } = e;
  let $ = l._(e, [
    "_key",
    "children",
    "level",
    "disabled",
    "className",
    "style",
    "wrapper",
    "selectable",
    "showSelectedIcon",
    "icon",
    "onClick",
    "onHover",
  ]);
  let {
    prefixCls,
    mode,
    collapse,
    inDropdown,
    selectedKeys,
    autoScrollIntoView,
    scrollConfig,
    tooltipProps,
    size,
    onClickMenuItem,
    onHoverMenuItem,
  } = a.useContext(WContext);
  let WRef = a.useRef(null);
  let B = A_3();
  let H = selectedKeys && ~selectedKeys.indexOf(_key);
  let L = selectable && showSelectedIcon;
  let F = !L && !!icon;
  a.useEffect(() => {
    let e = H && autoScrollIntoView;
    if (WRef.current && e) {
      setTimeout(() => {
        u.A(
          WRef.current,
          o._(
            {
              behavior: "smooth",
              block: "start",
              scrollMode: "if-needed",
              boundary: document.body,
            },
            scrollConfig,
          ),
        );
      }, 500 * !!B);
    }
  }, [H, autoScrollIntoView]);
  let K = (e) => {
    if (!disabled) {
      onClickMenuItem(_key, e);
      if (onClick) {
        onClick(e);
      }
    }
  };
  let Y = s.jsxs(
    wrapper,
    i._(
      o._(
        {
          tabIndex: disabled ? -1 : 0,
          role: "menuitem",
          ref: (e) => {
            WRef.current = e;
          },
          style,
          className: A_1(
            `${prefixCls}-item`,
            {
              [`${prefixCls}-disabled`]: disabled,
              [`${prefixCls}-selected`]: H,
              [`${prefixCls}-item-indented`]: L || F,
              [`${prefixCls}-item-size-${size}`]: typeof size === "string",
            },
            className,
          ),
          onClick: K,
          onMouseEnter: (e) => {
            if (!disabled) {
              if (onHoverMenuItem != null) {
                onHoverMenuItem(_key, e);
              }
              if (onHover) {
                onHover(e);
              }
            }
          },
          onKeyDown: (e) => {
            if ((e.keyCode || e.which) === xy.code) {
              K(e);
            }
          },
        },
        A_4($, ["key", "_key"].concat(O)),
      ),
      {
        children: [
          L &&
            s.jsx(y, {
              className: `${prefixCls}-item-selected-icon`,
              style: {
                opacity: +!!H,
              },
            }),
          F && icon,
          children,
          H && mode === "horizontal"
            ? s.jsx("div", {
                className: `${prefixCls}-selected-label`,
              })
            : null,
        ],
      },
    ),
  );
  if (collapse && !inDropdown && level === 1) {
    return s.jsx(
      A_2,
      i._(
        o._(
          {
            trigger: "hover",
            content: s.jsx("span", {
              children,
            }),
            position: "right",
            triggerProps: o._(
              {
                className: `${prefixCls}-item-tooltip`,
              },
              (tooltipProps == null ? undefined : tooltipProps.triggerProps) ||
                {},
            ),
          },
          A_4(tooltipProps, ["triggerProps"]),
        ),
        {
          children: Y,
        },
      ),
    );
  }
  return Y;
});
A.displayName = "MenuItem";
A.menuType = "MenuItem";
let E = a.forwardRef(function (e, t) {
  let {
    children,
    title,
    level,
    className,
    style,
    selectable,
    showSelectedIcon,
  } = e;
  let {
    prefixCls,
    selectable: selectable_1,
    showSelectedIcon: showSelectedIcon_1,
  } = a.useContext(WContext);
  let selectable_2 =
    typeof selectable === "boolean" ? selectable : selectable_1;
  let v = P(children, {
    level: level === 1 ? level + 1 : level,
    selectable: selectable_2,
    showSelectedIcon:
      typeof showSelectedIcon === "boolean"
        ? showSelectedIcon
        : showSelectedIcon_1,
  });
  return s.jsxs("div", {
    ref: t,
    className: A_1(`${prefixCls}-group`, className),
    style,
    children: [
      s.jsx("div", {
        className: A_1(`${prefixCls}-group-title`, {
          [`${prefixCls}-group-title-indent`]: selectable_2 && showSelectedIcon,
        }),
        children: s.jsx("span", {
          children: title,
        }),
      }),
      v,
    ],
  });
});
E.displayName = "MenuItemGroup";
E.menuType = "MenuGroup";
function useD(e) {
  let { prefixCls, levelIndent } = e;
  let { collapse } = a.useContext(WContext);
  let o = e.level - 1;
  if (!collapse && o > 0) {
    return s.jsx("span", {
      children: [...Array(o)].map((e, r) =>
        s.jsx(
          "span",
          {
            className: `${prefixCls}-indent`,
            style: {
              width: levelIndent,
            },
          },
          r,
        ),
      ),
    });
  }
  return null;
}
let z = {
  height: 0,
  visibility: "hidden",
};
const useV = (e) => {
  var t;
  var n;
  let {
    _key,
    children,
    style,
    className,
    title,
    level,
    forwardedRef,
    selectable,
  } = e;
  let g = l._(e, [
    "_key",
    "children",
    "style",
    "className",
    "title",
    "level",
    "forwardedRef",
    "selectable",
  ]);
  let {
    id,
    prefixCls,
    levelIndent,
    openKeys = [],
    selectedKeys = [],
    icons,
    onClickSubMenu,
    onClickMenuItem,
    onHoverSubMenu,
    onHoverMenuItem,
  } = a.useContext(WContext);
  let classNames = `${prefixCls}-inline`;
  let H = (openKeys == null ? undefined : openKeys.indexOf(_key)) > -1;
  let L =
    (selectable && selectedKeys.indexOf(e._key) > -1) ||
    $(children, selectedKeys);
  let [F, K] = A_5(
    H
      ? {
          height: "auto",
        }
      : z,
  );
  let Y = (e) => {
    onClickSubMenu(_key, level, "inline");
    if (selectable) {
      onClickMenuItem(_key, e);
    }
  };
  let G = A_8(`${id}-submenu-inline-`);
  let U = P(
    children,
    i._(o._({}, A_7(g, O)), {
      level: level + 1,
      selectable,
    }),
  );
  let Z = s.jsxs("div", {
    tabIndex: 0,
    "aria-expanded": H,
    "aria-controls": G,
    className: A_1(`${classNames}-header`, {
      [`${prefixCls}-selected`]: L,
    }),
    onClick: Y,
    onMouseEnter: (e) => {
      if (onHoverSubMenu != null) {
        onHoverSubMenu(_key, level, "inline");
      }
      if (selectable) {
        if (onHoverMenuItem != null) {
          onHoverMenuItem(_key, e);
        }
      }
    },
    onKeyDown: (e) => {
      if ((e.keyCode || e.which) === xy.code) {
        Y(e);
      }
    },
    children: [
      s.jsx(useD, {
        level,
        prefixCls,
        levelIndent,
      }),
      s.jsx("span", {
        children: title,
      }),
      s.jsx("span", {
        className: `${prefixCls}-icon-suffix ${H ? "is-open" : ""}`,
        children:
          icons && icons.horizontalArrowDown
            ? icons.horizontalArrowDown
            : s.jsx(A_6, {}),
      }),
    ],
  });
  let Q = s.jsx("div", {
    id: G,
    className: A_1(`${classNames}-content`),
    style: F,
    children: U,
  });
  return s.jsxs("div", {
    ref: forwardedRef,
    className: A_1(classNames, className),
    style,
    children: [
      Z,
      s.jsx(M.A, {
        in: H,
        timeout: 200,
        classNames,
        unmountOnExit: false,
        onEnter:
          ((t = _._(function* (e) {
            yield K(z);
            yield K({
              height: e.scrollHeight,
            });
          })),
          function (e) {
            return t.apply(this, arguments);
          }),
        onEntered: () => {
          K({
            height: "auto",
          });
        },
        onExit:
          ((n = _._(function* (e) {
            yield K({
              height: e.scrollHeight,
            });
            yield K(z);
          })),
          function (e) {
            return n.apply(this, arguments);
          }),
        children: Q,
      }),
    ],
  });
};
const useF = (e) => {
  let t;
  let n;
  let {
    _key,
    children,
    style,
    className,
    title,
    level,
    selectable,
    forwardedRef,
    triggerProps,
  } = e;
  let {
    id,
    prefixCls,
    mode,
    inDropdown,
    levelIndent,
    selectedKeys = [],
    icons,
    triggerProps: triggerProps_1,
    onClickSubMenu,
    onClickMenuItem,
    onHoverSubMenu,
    onHoverMenuItem,
  } = a.useContext(WContext);
  let { rtl } = a.useContext(QO);
  let T = o._({}, triggerProps_1, triggerProps);
  let [R, setR] = a.useState(false);
  let V = `${prefixCls}-pop`;
  let F = selectable && selectedKeys.indexOf(e._key) > -1;
  let K = mode === "horizontal" && !inDropdown;
  let Y = A_8(`${id}-submenu-pop-`);
  let G = $(children, selectedKeys) || F;
  let U = rtl ? ["br", "lt"] : ["bl", "rt"];
  let Z = (e) => {
    onClickSubMenu(_key, level, "pop");
    if (selectable) {
      onClickMenuItem(_key, e);
    }
  };
  return s.jsx(A_11, {
    trigger: "hover",
    popupVisible: R,
    onVisibleChange: setR,
    droplist: s.jsx(eL, {
      id: Y,
      selectedKeys,
      onClickMenuItem: (e, t) => {
        onClickMenuItem(e, t);
        setR(false);
      },
      onHoverMenuItem,
      children,
    }),
    triggerProps: o._(
      {
        position: K ? U[0] : U[1],
        showArrow: true,
        autoAlignPopupMinWidth: true,
        classNames: "fadeIn",
        duration: 100,
        mouseEnterDelay: 50,
        mouseLeaveDelay: 50,
        className: A_1(`${V}-trigger`, T && T.className),
      },
      A_4(T, ["className"]),
    ),
    children: s.jsxs("div", {
      tabIndex: 0,
      "aria-haspopup": true,
      "aria-expanded": R,
      "aria-controls": Y,
      ref: forwardedRef,
      style,
      className: A_1(
        V,
        `${V}-header`,
        {
          [`${prefixCls}-selected`]: G,
        },
        className,
      ),
      onClick: Z,
      onMouseEnter: (e) => {
        if (onHoverSubMenu != null) {
          onHoverSubMenu(_key, level, "pop");
        }
        if (selectable) {
          if (onHoverMenuItem != null) {
            onHoverMenuItem(_key, e);
          }
        }
      },
      onKeyDown: (e) => {
        let t = e.keyCode || e.which;
        if (t === xy.code) {
          Z(e);
        } else if (t === nk.code) {
          setR(false);
        } else if (t === Qp.code) {
          setR(true);
        }
      },
      children: [
        s.jsx(useD, {
          prefixCls,
          levelIndent,
          level,
        }),
        title,
        ((t =
          icons && icons.popArrowRight
            ? icons.popArrowRight
            : rtl
              ? s.jsx(A_10, {})
              : s.jsx(A_9, {})),
        (n =
          icons && icons.horizontalArrowDown
            ? icons.horizontalArrowDown
            : s.jsx(A_6, {})),
        s.jsx("span", {
          className: `${prefixCls}-icon-suffix`,
          children: K ? n : t,
        })),
        G && mode === "horizontal"
          ? s.jsx("div", {
              className: `${prefixCls}-selected-label`,
            })
          : null,
      ],
    }),
  });
};
let K = a.forwardRef(function (e, forwardedRef) {
  let { children, popup, level } = e;
  let { mode, collapse, inDropdown, collectInlineMenuKeys } =
    a.useContext(WContext);
  let f = !!(typeof popup === "function" ? popup(level) : popup);
  a.useEffect(() => {
    collectInlineMenuKeys(e._key);
    return () => {
      collectInlineMenuKeys(e._key, true);
    };
  }, []);
  return s.jsx(
    f || collapse || inDropdown || mode !== "vertical" ? useF : useV,
    i._(
      o._(
        {
          forwardedRef,
        },
        e,
      ),
      {
        children,
      },
    ),
  );
});
K.displayName = "SubMenu";
K.menuType = "SubMenu";
function U(e) {
  return e && Math.ceil(Number(e.getBoundingClientRect().width));
}
function Z(e) {
  let t = Number(e.replace("px", ""));
  if (isNaN(t)) {
    return 0;
  }
  return t;
}
const useQ = (e) => {
  let t;
  let { children } = e;
  let { prefixCls } = a.useContext(WContext);
  let lRef = a.useRef(null);
  let [c, setC] = a.useState(null);
  let d = `${prefixCls}-overflow-sub-menu`;
  let p = `${prefixCls}-overflow-hidden-menu-item`;
  let f = `${prefixCls}-overflow-sub-menu-mirror`;
  let h = (t, n = false) =>
    s.jsx(
      K,
      i._(
        o._(
          {
            title: s.jsx("span", {
              children: "···",
            }),
            className: n ? f : d,
          },
          e,
        ),
        {
          children: t,
        },
      ),
      `lv-menu-overflow-sub-menu${n ? "-mirror" : ""}`,
    );
  return s.jsx(A_12, {
    onResize: function () {
      if (!lRef.current) {
        return;
      }
      let lRef_current = lRef.current;
      let t = U(lRef_current) - 5;
      let n = [].slice.call(lRef_current.children);
      let r = 0;
      let o = 0;
      let i = 0;
      for (let e = 0; e < n.length; e++) {
        let l = n[e];
        let s = l.className.split(" ");
        let a = s.indexOf(d) > -1;
        let c = s.indexOf(f) > -1;
        if (a) {
          continue;
        }
        let p = U(l) + Z(gd(l, "marginLeft")) + Z(gd(l, "marginRight"));
        if (c) {
          i = p;
          continue;
        }
        if ((o += p) > t) {
          return void setC(r - (o - p + i <= t ? 1 : 2));
        }
        r++;
      }
      setC(null);
    },
    children: s.jsx("div", {
      className: `${prefixCls}-overflow-wrap`,
      ref: lRef,
      children:
        ((t = null),
        [
          h(null, true),
          ...a.Children.map(children, (e, r) => {
            let o = e;
            if (c !== null) {
              if (r > c) {
                o = a.cloneElement(e, {
                  className: p,
                });
              }
              if (r === c + 1) {
                t = h(
                  a.Children.toArray(children)
                    .slice(c + 1)
                    .map((e) =>
                      a.cloneElement(e, {
                        key: e.props._key,
                      }),
                    ),
                );
              }
            }
            return o;
          }),
          t,
        ]),
    }),
  });
};
const ee = a.forwardRef(function (e, t) {
  const prefixCls = a.useContext(V_1).prefixCls;
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
      .concat(r, "-icon-drag-dot-vertical"),
  };
  if (e_spin) {
    l.className = "".concat(l.className, " ").concat(r, "-icon-loading");
  }
  delete l.spin;
  delete l.isIcon;
  return a.createElement(
    "svg",
    d(
      {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "4",
        viewBox: "0 0 48 48",
      },
      l,
    ),
    a.createElement("path", {
      fill: "currentColor",
      stroke: "none",
      strokeWidth: "none",
      d: "M17 8h2v2h-2V8ZM17 23h2v2h-2v-2ZM17 38h2v2h-2v-2ZM29 8h2v2h-2V8ZM29 23h2v2h-2v-2ZM29 38h2v2h-2v-2Z",
    }),
    a.createElement("path", {
      d: "M17 8h2v2h-2V8ZM17 23h2v2h-2v-2ZM17 38h2v2h-2v-2ZM29 8h2v2h-2V8ZM29 23h2v2h-2v-2ZM29 38h2v2h-2v-2Z",
    }),
  );
});
ee.defaultProps = {
  isIcon: true,
};
ee.displayName = "IconDragDotVertical";
const er = a.forwardRef(function (e, t) {
  const prefixCls = a.useContext(V_1).prefixCls;
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
      .concat(r, "-icon-drag-dot"),
  };
  if (e_spin) {
    l.className = "".concat(l.className, " ").concat(r, "-icon-loading");
  }
  delete l.spin;
  delete l.isIcon;
  return a.createElement(
    "svg",
    d(
      {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "4",
        viewBox: "0 0 48 48",
      },
      l,
    ),
    a.createElement("path", {
      fill: "currentColor",
      stroke: "none",
      strokeWidth: "none",
      d: "M40 17v2h-2v-2h2ZM25 17v2h-2v-2h2ZM10 17v2H8v-2h2ZM40 29v2h-2v-2h2ZM25 29v2h-2v-2h2ZM10 29v2H8v-2h2Z",
    }),
    a.createElement("path", {
      d: "M40 17v2h-2v-2h2ZM25 17v2h-2v-2h2ZM10 17v2H8v-2h2ZM40 29v2h-2v-2h2ZM25 29v2h-2v-2h2ZM10 29v2H8v-2h2Z",
    }),
  );
});
er.defaultProps = {
  isIcon: true,
};
er.displayName = "IconDragDot";
const el = a.forwardRef(function (e, t) {
  const prefixCls = a.useContext(V_1).prefixCls;
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
      .concat(r, "-icon-caret-right"),
  };
  if (e_spin) {
    l.className = "".concat(l.className, " ").concat(r, "-icon-loading");
  }
  delete l.spin;
  delete l.isIcon;
  return a.createElement(
    "svg",
    d(
      {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "4",
        viewBox: "0 0 48 48",
      },
      l,
    ),
    a.createElement("path", {
      fill: "currentColor",
      stroke: "none",
      strokeWidth: "none",
      d: "M34.829 23.063c.6.48.6 1.394 0 1.874L17.949 38.44c-.785.629-1.949.07-1.949-.937V10.497c0-1.007 1.164-1.566 1.95-.937l16.879 13.503Z",
    }),
  );
});
el.defaultProps = {
  isIcon: true,
};
el.displayName = "IconCaretRight";
const ec = a.forwardRef(function (e, t) {
  const prefixCls = a.useContext(V_1).prefixCls;
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
      .concat(r, "-icon-caret-left"),
  };
  if (e_spin) {
    l.className = "".concat(l.className, " ").concat(r, "-icon-loading");
  }
  delete l.spin;
  delete l.isIcon;
  return a.createElement(
    "svg",
    d(
      {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "4",
        viewBox: "0 0 48 48",
      },
      l,
    ),
    a.createElement("path", {
      fill: "currentColor",
      stroke: "none",
      strokeWidth: "none",
      d: "M13.171 24.937a1.2 1.2 0 0 1 0-1.874L30.051 9.56c.785-.629 1.949-.07 1.949.937v27.006c0 1.006-1.164 1.566-1.95.937L13.171 24.937Z",
    }),
  );
});
ec.defaultProps = {
  isIcon: true,
};
ec.displayName = "IconCaretLeft";
function useEf(e) {
  let {
    className,
    direction,
    icon,
    onMouseDown,
    onResize,
    children,
    collapsible = {},
    resizable = true,
    renderChildren,
  } = e;
  let v = l._(e, [
    "className",
    "direction",
    "icon",
    "onMouseDown",
    "onResize",
    "children",
    "collapsible",
    "resizable",
    "renderChildren",
  ]);
  let { getPrefixCls, rtl } = a.useContext(QO);
  let b = getPrefixCls("resizebox-trigger");
  let x = direction === "horizontal";
  let w = rtl && !x;
  let O = A_1(
    b,
    `${b}-${x ? "horizontal" : "vertical"}`,
    {
      [`${b}-not-resizable`]: !resizable,
    },
    {
      [`${b}-rtl`]: rtl,
    },
    className,
  );
  let C = w
    ? [s.jsx(el, {}, "prev"), s.jsx(ec, {}, "next")]
    : [s.jsx(ec, {}, "prev"), s.jsx(el, {}, "next")];
  let N = Gv(collapsible.prev)
    ? i._(o._({}, collapsible.prev), {
        icon: collapsible.prev.icon || (x ? s.jsx(A_14, {}) : C[0]),
      })
    : {};
  let P = Gv(collapsible.next)
    ? i._(o._({}, collapsible.next), {
        icon: collapsible.next.icon || (x ? s.jsx(A_13, {}) : C[1]),
      })
    : {};
  let $ =
    (N.icon && !N.collapsed) || P.collapsed
      ? s.jsx("span", {
          className: A_1(`${b}-icon`, A_1(`${b}-prev`)),
          onClick: N.onClick,
          children: N.icon,
        })
      : s.jsx("span", {
          className: A_1(`${b}-icon-empty`),
        });
  let k = resizable
    ? s.jsx("span", {
        className: `${b}-icon`,
        children: icon || (x ? s.jsx(er, {}) : s.jsx(ee, {})),
      })
    : s.jsx("span", {
        className: A_1(`${b}-icon-empty`),
      });
  let A =
    (P.icon && !P.collapsed) || N.collapsed
      ? s.jsx("span", {
          className: A_1(`${b}-icon`, A_1(`${b}-next`)),
          onClick: P.onClick,
          children: P.icon,
        })
      : s.jsx("span", {
          className: A_1(`${b}-icon-empty`),
        });
  let E = () =>
    s.jsxs("div", {
      className: `${b}-icon-wrapper`,
      children: [$, k, A],
    });
  if (resizable) {
    return s.jsx(A_12, {
      onResize,
      children: s.jsx(
        "div",
        i._(o._({}, A_4(v, ["style"])), {
          className: O,
          onMouseDown,
          children: Tn(renderChildren)
            ? renderChildren($, k, A)
            : children || E(),
        }),
      ),
    });
  }
  return s.jsx("div", {
    className: O,
    children: Tn(renderChildren) ? renderChildren($, k, A) : children || E(),
  });
}
let em = "horizontal";
let ev = "vertical";
let eg = a.forwardRef(function (e, t) {
  let {
    style,
    className,
    component = "div",
    direction = "horizontal",
    icon,
    size = 0.5,
    min,
    max,
    panes,
    disabled,
    trigger,
  } = e;
  let { getPrefixCls, rtl } = a.useContext(QO);
  let y = getPrefixCls("resizebox-split");
  let b = direction.includes(em);
  let x = direction.includes("reverse");
  let w = b && rtl;
  let j = !b;
  let O = A_1(
    y,
    `${y}-${b ? em : ev}`,
    {
      [`${y}-rtl`]: rtl,
    },
    className,
  );
  let [C, N] = panes;
  let P = typeof size === "string";
  let [$, set$] = a.useState(parseFloat(size));
  let [A, setA] = a.useState(0);
  let _Ref = a.useRef({
    startX: 0,
    startY: 0,
    startWidth: 0,
    startHeight: 0,
    startOffset: 0,
    moving: false,
  });
  let MRef = a.useRef();
  let TRef = a.useRef([]);
  function S(e, startOffset, n, r) {
    let o;
    let i = min ? parseFloat(min) : 0;
    let l = max ? parseFloat(max) : P ? e : 1;
    let s = x ? -1 : 1;
    s *= w ? -1 : 1;
    let a = P
      ? startOffset + (r - n) * s
      : ((o = e * startOffset + (r - n) * s), parseFloat(o) / parseFloat(e));
    return Math.min((a = Math.max(a, i)), l);
  }
  function D(t) {
    if (_Ref.current.moving) {
      let n = b
        ? S(
            _Ref.current.startWidth,
            _Ref.current.startOffset,
            _Ref.current.startX,
            t.pageX,
          )
        : S(
            _Ref.current.startHeight,
            _Ref.current.startOffset,
            _Ref.current.startY,
            t.pageY,
          );
      set$(n);
      if (e.onMoving) {
        e.onMoving(t, P ? `${n}px` : n);
      }
    }
  }
  function R() {
    _Ref.current.moving = false;
    AU(window, "mousemove", D);
    AU(window, "touchmove", D);
    AU(window, "mouseup", R);
    AU(window, "touchend", R);
    AU(window, "contextmenu", R);
    document.body.style.cursor = "default";
    if (e.onMovingEnd) {
      e.onMovingEnd();
    }
  }
  a.useImperativeHandle(t, () => MRef.current, []);
  a.useEffect(() => {
    if (e.onPaneResize) {
      e.onPaneResize(TRef.current);
    }
  }, [$, A]);
  A_15(() => {
    let e = parseFloat(size);
    if ($ !== e) {
      set$(e);
    }
  }, [size]);
  let I = s.jsx("div", {
    className: A_1(`${y}-pane`, "first-pane"),
    style: {
      flexBasis: (() => {
        let e = P ? "px" : "%";
        if (!$) {
          return `0${e}`;
        }
        let t = P ? $ : 100 * $;
        return `calc(${t}${e} - ${A / 2}px)`;
      })(),
    },
    ref: (e) => {
      TRef.current[0] = e;
    },
    children: C,
  });
  let z = s.jsx("div", {
    className: A_1(`${y}-pane`, "second-pane"),
    ref: (e) => {
      TRef.current[1] = e;
    },
    children: N,
  });
  let V = x ? [z, I] : [I, z];
  return s.jsxs(component, {
    style,
    className: O,
    ref: MRef,
    children: [
      V[0],
      !disabled &&
        s.jsx(useEf, {
          className: `${y}-trigger`,
          direction: j ? em : ev,
          icon,
          onMouseDown: function (t) {
            let n;
            let r;
            if (e.onMovingStart) {
              e.onMovingStart();
            }
            _Ref.current.moving = true;
            _Ref.current.startX = t.pageX;
            _Ref.current.startY = t.pageY;
            _Ref.current.startWidth =
              (n = MRef.current) == null ? undefined : n.offsetWidth;
            _Ref.current.startHeight =
              (r = MRef.current) == null ? undefined : r.offsetHeight;
            _Ref.current.startOffset = $;
            on(window, "mousemove", D);
            on(window, "touchmove", D);
            on(window, "mouseup", R);
            on(window, "touchend", R);
            on(window, "contextmenu", R);
            document.body.style.cursor = j ? "row-resize" : "col-resize";
          },
          onResize: function (e) {
            let { contentRect } = e[0];
            setA(contentRect[j ? "height" : "width"]);
          },
          children: trigger,
        }),
      V[1],
    ],
  });
});
eg.displayName = "ResizeBoxSplit";
let ex = "horizontal";
let ew = "vertical";
let ej = a.forwardRef(function (e, t) {
  let {
    panes,
    style,
    className,
    component = "div",
    direction = "horizontal",
    icon,
  } = e;
  let h = l._(e, [
    "panes",
    "style",
    "className",
    "component",
    "direction",
    "icon",
  ]);
  let { getPrefixCls, rtl } = a.useContext(QO);
  let g = 1 / panes.length;
  let yRef = a.useRef();
  let bRef = a.useRef(
    Array(panes.length).fill({
      moving: false,
      startOffset: 0,
      startPosition: 0,
    }),
  );
  let xRef = a.useRef([]);
  let wRef = a.useRef(0);
  let ORef = a.useRef([]);
  let [C, setC] = a.useState(Array(panes.length).fill(g));
  let [P, setP] = a.useState(false);
  let [k, setK] = a.useState(Array(panes.length).fill(0));
  let [E, setE] = a.useState(
    Array(Math.max(panes.length - 1, 0)).fill({
      prev: false,
      next: false,
    }),
  );
  let M = getPrefixCls("resizebox-split-group");
  let T = direction === ex;
  let S = T && rtl;
  let D = !T;
  let R = A_1(
    M,
    `${M}-${T ? ex : ew}`,
    {
      [`${M}-moving`]: P,
    },
    {
      [`${M}-rtl`]: rtl,
    },
    className,
  );
  function I(e) {
    let t = T ? yRef.current.offsetWidth : yRef.current.offsetHeight;
    if (!e || (Et(e) && e < 0)) {
      return 0;
    }
    return Math.min(Kg(e) ? parseFloat(e) / t : e, 1);
  }
  let z = (e) => {
    let t = Math.min(e + 1, panes.length - 1);
    let r = C[e] + C[t];
    let currentMin = I(panes[e].min) || 0;
    let currentMax = I(panes[e].max) || r;
    let nextMin = I(panes[t].min) || 0;
    let nextMax = I(panes[t].max) || r;
    currentMax = Math.min(r - nextMin, currentMax);
    nextMax = Math.min(r - currentMin, nextMax);
    return {
      currentMin,
      currentMax,
      nextMin,
      nextMax,
    };
  };
  function V(t) {
    let wRef_current = wRef.current;
    let r = bRef.current[wRef_current];
    let o = T ? yRef.current.offsetWidth : yRef.current.offsetHeight;
    if (r.moving) {
      let i = ((e, t, n) => {
        let { current } = wRef;
        let o = current + 1;
        let i = [...C];
        let l = C[current];
        let s = C[o];
        let { currentMin, currentMax } = z(current);
        let u = e + I(`${(n - t) * (S ? -1 : 1)}px`);
        u = Math.min(currentMax, (u = Math.max(currentMin, u)));
        i[current] = u;
        i[o] = l + s - u;
        return i;
      })(r.startOffset, r.startPosition, T ? t.pageX : t.pageY);
      setC(i);
      ORef.current = i;
      if (e.onMoving) {
        e.onMoving(
          t,
          i.map((e) => `${e * o}px`),
          wRef_current,
        );
      }
    }
  }
  function W() {
    let wRef_current = wRef.current;
    bRef.current[wRef_current].moving = false;
    setP(false);
    AU(window, "mousemove", V);
    AU(window, "touchmove", V);
    AU(window, "mouseup", W);
    AU(window, "touchend", W);
    AU(window, "contextmenu", W);
    document.body.style.cursor = "default";
    if (e.onMovingEnd) {
      e.onMovingEnd(wRef_current);
    }
  }
  function B(t, n, r, onClick) {
    let i = n + 1;
    let l = [...C];
    let s = C[n];
    let a = C[i];
    let c = s + a;
    let u = T ? yRef.current.offsetWidth : yRef.current.offsetHeight;
    let { currentMin, nextMin } = z(n);
    let f = ORef.current[n];
    let h = ORef.current[i];
    let m = E[n][r];
    if (r === "prev") {
      if (a !== nextMin || h === nextMin) {
        f = currentMin;
        h = c - currentMin;
        m = true;
      }
    } else if (s !== currentMin || f === currentMin) {
      f = c - nextMin;
      h = nextMin;
      m = true;
    }
    l[n] = f;
    l[i] = h;
    if (e.onMoving) {
      e.onMoving(
        t,
        l.map((e) => `${e * u}px`),
        n,
      );
    }
    if (e.onMovingEnd) {
      e.onMovingEnd(n);
    }
    setC(l);
    if (Tn(onClick)) {
      onClick(t, n, r, m);
    }
  }
  a.useEffect(() => {
    let e;
    let t;
    let r;
    e = [];
    panes.forEach((t) => {
      let { size } = t;
      if (b0(size)) {
        e.push(undefined);
      } else {
        e.push(I(size));
      }
    });
    t = e.filter((e) => !e);
    r = (1 - e.reduce((acc, item) => (acc || 0) + (item || 0), 0)) / t.length;
    let o = (e = e.map((e) => {
      if (b0(e)) {
        return r;
      }
      return e;
    }));
    setC(o);
    ORef.current = o;
  }, [JSON.stringify(panes.map((e) => e.size))]);
  a.useImperativeHandle(t, () => yRef.current, []);
  a.useEffect(() => {
    let e = [];
    C.forEach((t, n) => {
      let r = {
        prev: false,
        next: false,
      };
      let o = n + 1;
      let { currentMin, nextMin } = z(n);
      if (t === currentMin) {
        r.prev = true;
      } else if (C[o] === nextMin) {
        r.next = true;
      }
      e.push(r);
    });
    setE(e);
  }, [C]);
  return s.jsx(
    component,
    i._(
      o._(
        {},
        A_4(h, ["onMovingStart", "onPaneResize", "onMoving", "onMovingEnd"]),
      ),
      {
        style,
        className: R,
        ref: yRef,
        children: panes.map((t, r) => {
          let o;
          let i;
          let l;
          let {
            content,
            disabled,
            trigger,
            resizable = true,
            collapsible = {},
          } = t;
          let { hasPrev, hasNext } = ((e) => {
            let { collapsible } = panes[e];
            if (!Gv(collapsible)) {
              collapsible = collapsible
                ? {
                    prev: true,
                    next: true,
                  }
                : {};
            }
            let { prev, next } = collapsible;
            if ((prev || next) && E[e]) {
              return {
                hasPrev: !!prev || (!prev && E[e].next),
                hasNext: !!next || (!next && E[e].prev),
              };
            }
            return {};
          })(r);
          let g =
            Gv(collapsible) && Gv(collapsible.prev) ? collapsible.prev : {};
          let y =
            Gv(collapsible) && Gv(collapsible.next) ? collapsible.next : {};
          return s.jsxs(
            a.Fragment,
            {
              children: [
                s.jsx("div", {
                  className: `${M}-pane`,
                  style: {
                    flexBasis:
                      ((o = k[r - 1] || 0),
                      (i = k[r]),
                      (l = 100 * C[r]),
                      `calc(${l}% - ${(o + i) / 2}px)`),
                  },
                  ref: (e) => (xRef.current[r] = e),
                  children: content,
                }),
                !disabled &&
                  r !== panes.length - 1 &&
                  s.jsx(useEf, {
                    className: `${M}-trigger`,
                    direction: D ? ex : ew,
                    icon,
                    onResize: (e) =>
                      ((e, t) => {
                        let { contentRect } = e[0];
                        let r = contentRect[D ? "height" : "width"];
                        let o = [...k];
                        o[t] = r;
                        setK(o);
                      })(e, r),
                    onMouseDown: (t) => {
                      let n;
                      if (e.onMovingStart) {
                        e.onMovingStart(r);
                      }
                      wRef.current = r;
                      n = bRef.current[r];
                      n.moving = true;
                      n.startOffset = C[r];
                      n.startPosition = T ? t.pageX : t.pageY;
                      setP(true);
                      on(window, "mousemove", V);
                      on(window, "touchmove", V);
                      on(window, "mouseup", W);
                      on(window, "touchend", W);
                      on(window, "contextmenu", W);
                      document.body.style.cursor = D
                        ? "row-resize"
                        : "col-resize";
                    },
                    collapsible: {
                      prev: hasPrev
                        ? {
                            onClick: (e) => B(e, r, "prev", g.onClick),
                            icon: g.icon,
                            collapsed: E[r].prev,
                          }
                        : undefined,
                      next: hasNext
                        ? {
                            onClick: (e) => B(e, r, "next", y.onClick),
                            icon: y.icon,
                            collapsed: E[r].next,
                          }
                        : undefined,
                    },
                    resizable,
                    renderChildren: trigger,
                  }),
              ],
            },
            r,
          );
        }),
      },
    ),
  );
});
ej.displayName = "ResizeBoxSplitGroup";
let eO = "left";
let direction = "right";
let eN = "bottom";
let eP = [eO, direction, "top", eN];
let e$ = {
  component: "div",
  directions: ["right"],
  resizeIcons: {},
  resizeTriggers: {},
};
let ek = a.forwardRef(function (e, t) {
  let { getPrefixCls, componentConfig, rtl } = a.useContext(QO);
  let d = A_17(
    e,
    e$,
    componentConfig == null ? undefined : componentConfig.ResizeBox,
  );
  let {
    style,
    className,
    component,
    directions,
    resizeIcons,
    children,
    resizeTriggers,
    width,
    height,
  } = d;
  let w = l._(d, [
    "style",
    "className",
    "component",
    "directions",
    "resizeIcons",
    "children",
    "resizeTriggers",
    "width",
    "height",
  ]);
  let O = rtl
    ? directions.map((e) =>
        ((e) => {
          switch (e) {
            case "left":
              return "right";
            case "right":
              return "left";
            default:
              return e;
          }
        })(e),
      )
    : directions;
  let C = getPrefixCls("resizebox");
  let N = A_1(
    C,
    {
      [`${C}-rtl`]: rtl,
    },
    className,
  );
  let [P, setP] = a.useState({});
  let [k, A] = A_16(undefined, {
    value: width,
  });
  let [E, _] = A_16(undefined, {
    value: height,
  });
  let MRef = a.useRef({
    startX: 0,
    startY: 0,
    startWidth: 0,
    startHeight: 0,
    direction,
    moving: false,
    padding: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
  });
  let TRef = a.useRef();
  function S(e) {
    return ["top", eN].indexOf(e) > -1;
  }
  function D(e, t) {
    if (e === 0) {
      return 0;
    }
    let n = e - t;
    if (n <= 0) {
      return 0;
    }
    return n;
  }
  function R(e) {
    if (!MRef.current.moving) {
      return false;
    }
    let { startX, startY, startWidth, startHeight } = MRef.current;
    let width_1 = startWidth;
    let height_1 = startHeight;
    let s = e.pageX - startX;
    let a = e.pageY - startY;
    switch (MRef.current.direction) {
      case eO:
        A((width_1 = startWidth - s));
        break;
      case direction:
        A((width_1 = startWidth + s));
        break;
      case "top":
        _((height_1 = startHeight - a));
        break;
      case eN:
        _((height_1 = startHeight + a));
    }
    if (d.onMoving) {
      d.onMoving(e, {
        width: width_1,
        height: height_1,
      });
    }
  }
  function I() {
    MRef.current.moving = false;
    AU(window, "mousemove", R);
    AU(window, "touchmove", R);
    AU(window, "mouseup", I);
    AU(window, "touchend", I);
    AU(window, "contextmenu", I);
    document.body.style.cursor = "default";
    if (d.onMovingEnd) {
      d.onMovingEnd();
    }
  }
  a.useImperativeHandle(t, () => TRef.current, []);
  let z = o._(
    {},
    P,
    style || {},
    Et(k)
      ? {
          width: k,
        }
      : {},
    Et(E)
      ? {
          height: E,
        }
      : {},
  );
  return s.jsxs(
    component,
    i._(o._({}, A_4(w, ["onMovingStart", "onMoving", "onMovingEnd"])), {
      style: z,
      className: N,
      ref: TRef,
      children: [
        children,
        O.map((e) => {
          if (eP.indexOf(e) !== -1) {
            return s.jsx(
              useEf,
              {
                className: `${C}-direction-${e}`,
                direction: S(e) ? "horizontal" : "vertical",
                icon: resizeIcons[e],
                onMouseDown: (t) => {
                  ((e, t) => {
                    let n;
                    let r;
                    if (d.onMovingStart) {
                      d.onMovingStart();
                    }
                    MRef.current.moving = true;
                    MRef.current.startX = t.pageX;
                    MRef.current.startY = t.pageY;
                    MRef.current.direction = e;
                    let { top, left, right, bottom } = MRef.current.padding;
                    MRef.current.startWidth = D(
                      (n = TRef.current) == null ? undefined : n.clientWidth,
                      left + right,
                    );
                    MRef.current.startHeight = D(
                      (r = TRef.current) == null ? undefined : r.clientHeight,
                      top + bottom,
                    );
                    on(window, "mousemove", R);
                    on(window, "touchmove", R);
                    on(window, "mouseup", I);
                    on(window, "touchend", I);
                    on(window, "contextmenu", I);
                    document.body.style.cursor = S(e)
                      ? "row-resize"
                      : "col-resize";
                  })(e, t);
                },
                onResize: (t) => {
                  ((e, t) => {
                    let n = S(e);
                    let { contentRect } = t[0];
                    let l = `${e.slice(0, 1).toUpperCase()}${e.slice(1)}`;
                    let s = contentRect[n ? "height" : "width"];
                    MRef.current.padding[e] = s;
                    setP((e) =>
                      i._(o._({}, e), {
                        [`padding${l}`]: s,
                      }),
                    );
                  })(e, t);
                },
                children: resizeTriggers[e],
              },
              e,
            );
          }
        }),
      ],
    }),
  );
});
ek.Split = eg;
ek.SplitGroup = ej;
ek.displayName = "ResizeBox";
let EEContext = a.createContext({
  siderCollapsed: false,
  collapsedWidth: 64,
});
r = 0;
let e_ = (e = "") => {
  r += 1;
  return `${e}${r}`;
};
let eM = a.forwardRef(function (e, t) {
  let n;
  let r;
  let {
    children,
    className,
    style,
    theme = "light",
    trigger,
    reverseArrow,
    collapsedWidth = 48,
    width = 200,
    collapsible,
    resizeDirections,
    onSiderMount,
    onSiderUnmount,
    breakpoint,
    onBreakpoint,
    onCollapse,
    resizeBoxProps = {},
  } = e;
  let N = e_("lv-sider-");
  let { getPrefixCls } = a.useContext(QO);
  let $ = getPrefixCls("layout-sider");
  let [k, A] = A_16(false, {
    value: "collapsed" in e ? e.collapsed : undefined,
    defaultValue: e.defaultCollapsed,
  });
  let E = Et(width) ? `${width}px` : String(width);
  let _ = Et(collapsedWidth) ? `${collapsedWidth}` : String(collapsedWidth);
  let [M, setM] = a.useState(k ? _ : E);
  let SRef = a.useRef(null);
  let DRef = a.useRef(null);
  DRef.current = {
    breakpoint,
    collapsed: k,
    onCollapse,
    onBreakpoint,
  };
  a.useEffect(() => {
    if (onSiderMount) {
      onSiderMount(N);
    }
    if (collapsible && breakpoint in nM) {
      SRef.current = Ay.subscribe((e, t) => {
        let { breakpoint, collapsed, onCollapse, onBreakpoint } = DRef.current;
        if (!t || t === breakpoint) {
          let t = !e[breakpoint];
          if (t !== collapsed) {
            A(t);
            if (onCollapse) {
              onCollapse(t, "responsive");
            }
          }
          if (onBreakpoint) {
            onBreakpoint(t);
          }
        }
      });
    }
    return () => {
      if (onSiderUnmount) {
        onSiderUnmount(N);
      }
      if (SRef.current) {
        Ay.unsubscribe(SRef.current);
      }
    };
  }, []);
  a.useEffect(() => {
    let e = Et(collapsedWidth) ? `${collapsedWidth}px` : String(collapsedWidth);
    setM(k ? e : E);
  }, [k, E, collapsedWidth]);
  let R =
    (resizeDirections && cy(resizeDirections)) ||
    ((n = resizeBoxProps.directions) == null ? undefined : n.length);
  let I = R ? ek : "aside";
  let z = a.useMemo(() => {
    if (R) {
      return i._(
        o._(
          {
            component: "aside",
            onMoving: (e, { width }) => {
              setM(width);
            },
          },
          resizeBoxProps,
        ),
        {
          width: M,
          directions: resizeDirections,
        },
      );
    }
    return {};
  }, [R, resizeDirections, M, resizeBoxProps]);
  return s.jsx(EEContext.Provider, {
    value: {
      siderCollapsed: k,
      collapsedWidth,
    },
    children: s.jsxs(
      I,
      i._(
        o._(
          {
            ref: t,
            style: o._(
              {
                width: M,
              },
              style,
            ),
            className: A_1(
              $,
              {
                [`${$}-light`]: theme === "light",
                [`${$}-has-trigger`]: trigger !== null && collapsible,
                [`${$}-collapsed`]: k,
              },
              className,
            ),
          },
          z,
        ),
        {
          children: [
            s.jsx("div", {
              className: `${$}-children`,
              children,
            }),
            ((r =
              trigger ||
              (k
                ? reverseArrow
                  ? s.jsx(A_10, {})
                  : s.jsx(A_9, {})
                : reverseArrow
                  ? s.jsx(A_9, {})
                  : s.jsx(A_10, {}))),
            collapsible && trigger !== null
              ? s.jsx("div", {
                  style: {
                    width: M,
                  },
                  className: A_1(`${$}-trigger`, {
                    [`${$}-trigger-light`]: theme === "light",
                  }),
                  onClick: () => {
                    A(!k);
                    if (onCollapse) {
                      onCollapse(!k, "clickTrigger");
                    }
                  },
                  children: r,
                })
              : null),
          ],
        },
      ),
    ),
  });
});
eM.defaultProps = {
  sign: "sider",
};
eM.displayName = "LayoutSider";
const eD = a.forwardRef(function (e, t) {
  const prefixCls = a.useContext(V_1).prefixCls;
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
      .concat(r, "-icon-menu-fold"),
  };
  if (e_spin) {
    l.className = "".concat(l.className, " ").concat(r, "-icon-loading");
  }
  delete l.spin;
  delete l.isIcon;
  return a.createElement(
    "svg",
    d(
      {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "4",
        viewBox: "0 0 48 48",
      },
      l,
    ),
    a.createElement("path", {
      d: "M42 11H6M42 24H22M42 37H6M13.66 26.912l-4.82-3.118 4.82-3.118v6.236Z",
    }),
  );
});
eD.defaultProps = {
  isIcon: true,
};
eD.displayName = "IconMenuFold";
const ez = a.forwardRef(function (e, t) {
  const prefixCls = a.useContext(V_1).prefixCls;
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
      .concat(r, "-icon-menu-unfold"),
  };
  if (e_spin) {
    l.className = "".concat(l.className, " ").concat(r, "-icon-loading");
  }
  delete l.spin;
  delete l.isIcon;
  return a.createElement(
    "svg",
    d(
      {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "4",
        viewBox: "0 0 48 48",
      },
      l,
    ),
    a.createElement("path", {
      d: "M6 11h36M22 24h20M6 37h36M8 20.882 12.819 24 8 27.118v-6.236Z",
    }),
  );
});
ez.defaultProps = {
  isIcon: true,
};
ez.displayName = "IconMenuUnfold";
let eB = {
  mode: "vertical",
  selectable: false,
  ellipsis: true,
};
let eH = a.forwardRef(function (e, t) {
  let n;
  let r;
  let u;
  let { getPrefixCls, componentConfig, rtl } = a.useContext(QO);
  let h = A_17(
    e,
    eB,
    componentConfig == null ? undefined : componentConfig.Menu,
  );
  let {
    style,
    children,
    className,
    prefixCls,
    mode,
    theme,
    icons,
    levelIndent,
    collapse,
    inDropdown,
    selectable,
    triggerProps,
    tooltipProps,
    ellipsis,
    accordion,
    autoOpen,
    autoScrollIntoView,
    scrollConfig,
    hasCollapseButton,
    defaultOpenKeys,
    defaultSelectedKeys,
    openKeys,
    selectedKeys,
    border,
    showSelectedIcon = false,
    size = "default",
    onClickSubMenu,
    onClickMenuItem,
    onHoverSubMenu,
    onHoverMenuItem,
    onCollapseChange,
  } = h;
  let J = l._(h, [
    "style",
    "children",
    "className",
    "prefixCls",
    "mode",
    "theme",
    "icons",
    "levelIndent",
    "collapse",
    "inDropdown",
    "selectable",
    "triggerProps",
    "tooltipProps",
    "ellipsis",
    "accordion",
    "autoOpen",
    "autoScrollIntoView",
    "scrollConfig",
    "hasCollapseButton",
    "defaultOpenKeys",
    "defaultSelectedKeys",
    "openKeys",
    "selectedKeys",
    "border",
    "showSelectedIcon",
    "size",
    "onClickSubMenu",
    "onClickMenuItem",
    "onHoverSubMenu",
    "onHoverMenuItem",
    "onCollapseChange",
  ]);
  let [ee, et] = A_16([], {
    defaultValue: defaultOpenKeys,
    value: openKeys,
  });
  let [selectedKeys_1, er] = A_16([], {
    defaultValue: defaultSelectedKeys,
    value: selectedKeys,
  });
  let [eo, ei] = A_16(false, {
    value: collapse,
  });
  let el = a.useContext(WContext);
  let { siderCollapsed } = a.useContext(EEContext);
  let prefixCls_1 = prefixCls || getPrefixCls("menu");
  let collapse_1 = siderCollapsed || eo || inDropdown || mode === "popButton";
  let theme_1 = theme || el.theme || "light";
  let edRef = a.useRef([]);
  let epRef = a.useRef([]);
  let ef = A_18();
  let eh = A_19();
  let em = a.useMemo(() => N(children), [children]);
  let ev = A_8(`${prefixCls_1}-`);
  let eg = J.id || ev;
  a.useEffect(() => {
    let e = ee.filter((e) => edRef.current.indexOf(e) !== -1);
    if (autoOpen) {
      let t = edRef.current.filter((e) => epRef.current.indexOf(e) === -1);
      e = ee.concat(t);
    }
    et(accordion ? e.slice(0, 1) : e);
    epRef.current = edRef.current.slice();
  }, [edRef.current.toString()]);
  let ex =
    mode !== "horizontal" &&
    mode !== "popButton" &&
    !inDropdown &&
    hasCollapseButton;
  let ew = o._({}, style);
  if (collapse_1 && !inDropdown) {
    delete ew.width;
  }
  return s.jsx(
    "div",
    i._(
      o._(
        {
          id: ex ? eg : undefined,
          role: "menu",
        },
        A_4(J, ["isMenu"]),
      ),
      {
        ref: t,
        style: ew,
        className: A_1(
          prefixCls_1,
          `${prefixCls_1}-${theme_1}`,
          `${prefixCls_1}-${mode === "horizontal" ? "horizontal" : "vertical"}`,
          {
            [`${prefixCls_1}-collapse`]: collapse_1,
            [`${prefixCls_1}-pop`]: mode === "pop" || collapse_1,
            [`${prefixCls_1}-pop-button`]: mode === "popButton",
            [`${prefixCls_1}-rtl`]: rtl,
            [`${prefixCls_1}-border`]: border,
          },
          className,
        ),
        children: s.jsx(WContext.Provider, {
          value: {
            mode,
            theme: theme_1,
            collapse: collapse_1,
            levelIndent,
            inDropdown,
            selectedKeys: selectedKeys_1,
            openKeys: ee,
            icons,
            triggerProps,
            tooltipProps,
            autoScrollIntoView,
            scrollConfig,
            id: eg,
            prefixCls: prefixCls_1,
            selectable,
            showSelectedIcon,
            size,
            collectInlineMenuKeys: (e, t) => {
              if (t) {
                edRef.current = edRef.current.filter((t) => t !== e);
              } else {
                edRef.current.push(e);
              }
              ef();
            },
            onClickMenuItem: (e, t) => {
              var n;
              if (selectable) {
                er([e]);
              }
              if (onClickMenuItem) {
                onClickMenuItem(
                  e,
                  t,
                  (n = em[e]) == null ? undefined : n.keyPath,
                );
              }
            },
            onHoverMenuItem: (e, t) => {
              var n;
              if (onHoverMenuItem) {
                onHoverMenuItem(
                  e,
                  t,
                  (n = em[e]) == null ? undefined : n.keyPath,
                );
              }
            },
            onClickSubMenu: (e, t, n) => {
              var r;
              let o = [...ee];
              if (n === "inline") {
                o =
                  (ee == null ? undefined : ee.indexOf(e)) > -1
                    ? accordion && t === 1
                      ? []
                      : ee.filter((t) => t !== e)
                    : accordion && t === 1
                      ? [e]
                      : ee.concat([e]);
              }
              et(o);
              if (onClickSubMenu) {
                onClickSubMenu(
                  e,
                  o,
                  (r = em[e]) == null ? undefined : r.keyPath,
                );
              }
            },
            onHoverSubMenu: (e, t, n) => {
              var r;
              if (!onHoverSubMenu) {
                return;
              }
              let o = [...ee];
              if (n === "inline") {
                o =
                  (ee == null ? undefined : ee.indexOf(e)) > -1
                    ? accordion && t === 1
                      ? []
                      : ee.filter((t) => t !== e)
                    : accordion && t === 1
                      ? [e]
                      : ee.concat([e]);
              }
              onHoverSubMenu(e, o, (r = em[e]) == null ? undefined : r.keyPath);
            },
          },
          children:
            ((n = P(children, {
              level: 1,
              selectable,
              showSelectedIcon,
            })),
            (r = eo
              ? (icons && icons.collapseActive) || s.jsx(ez, {})
              : (icons && icons.collapseDefault) || s.jsx(eD, {})),
            (u = () => {
              let e = !eo;
              ei(e);
              if (onCollapseChange) {
                onCollapseChange(e);
              }
            }),
            s.jsxs(s.Fragment, {
              children: [
                s.jsx("div", {
                  className: `${prefixCls_1}-inner`,
                  children:
                    mode === "horizontal" && ellipsis !== false
                      ? s.jsx(useQ, {
                          children: n,
                        })
                      : n,
                }),
                ex &&
                  s.jsx(
                    "div",
                    i._(
                      o._(
                        {
                          tabIndex: 0,
                          role: "button",
                          "aria-controls": eg,
                          "aria-expanded": !eo,
                          className: `${prefixCls_1}-collapse-button`,
                          onClick: u,
                        },
                        eh({
                          onPressEnter: u,
                        }),
                      ),
                      {
                        children: r,
                      },
                    ),
                  ),
              ],
            })),
        }),
      },
    ),
  );
});
eH.displayName = "Menu";
eH.Item = A;
eH.SubMenu = K;
eH.ItemGroup = E;
eH.defaultProps = {
  isMenu: true,
};
var eL = eH;
export { eL as A };
