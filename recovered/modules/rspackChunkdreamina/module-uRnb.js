import r from "wnX";
import i from "bT";
import { FI, Wb } from "./module-rJ.js";
import o from "n94";
import _u from "fyk";
import s from "zP7";
import { Jg, Lu, db, lW, yx } from "./module-jW8.js";
import f from "Vb";
const Options = i.forwardRef(function (e, t) {
  const e_options = e.options;
  const e_useColumn = e.useColumn;
  const e_icon = e.icon;
  const e_selectedValue = e.selectedValue;
  const e_defaultSelectedValue = e.defaultSelectedValue;
  const e_multiple = e.multiple;
  const prefixCls = i.useContext(FI).prefixCls;
  const v = i.useState(function () {
    if (e_defaultSelectedValue !== undefined) {
      return e_defaultSelectedValue;
    }
    if (e_multiple) {
      return [];
    }
    return 0;
  });
  const m = v[0];
  const h = v[1];
  const p = i.useMemo(
    function () {
      if (e_selectedValue === undefined) {
        return m;
      }
      return e_selectedValue;
    },
    [e_selectedValue, m],
  );
  const g = e_useColumn === true ? 4 : Number(e_useColumn) || 0;
  const E = Array(
    g && e_options.length % g ? g - (e_options.length % g) : 0,
  ).fill("");
  const style = e_useColumn
    ? {
        minWidth: `${(1 / (g + 1)) * 100}%`,
      }
    : {};
  const yRef = i.useRef(null);
  i.useImperativeHandle(t, function () {
    return {
      dom: yRef.current,
    };
  });
  return i.createElement(
    "div",
    {
      ref: yRef,
      className: r.xF(prefixCls + "-dropdown-options-wrap", {
        "use-column": e_useColumn,
      }),
    },
    e_options.map((t) =>
      i.createElement(
        "div",
        {
          className: r.xF(
            prefixCls + "-dropdown-options-item" + (e_useColumn ? "-col" : ""),
            {
              disabled: t.disabled,
              selected:
                e_multiple && Array.isArray(p)
                  ? p.includes(t.value)
                  : t.value === p,
            },
          ),
          key: t.value,
          onClick: function (n) {
            if (!t.disabled) {
              if (e.multiple === true) {
                if (!Array.isArray(p)) {
                  return;
                }
                const r = p.indexOf(t.value);
                const i = r >= 0;
                if (e.onOptionClick != null) {
                  e.onOptionClick(i, t.value, t);
                }
                const a = [].concat(p);
                if (i) {
                  a.splice(r, 1);
                } else {
                  a.push(t.value);
                }
                h(a);
                if (e.onOptionChange != null) {
                  e.onOptionChange(a, t);
                }
              } else {
                const o = t.value;
                if (e.onOptionClick != null) {
                  e.onOptionClick(o, t);
                }
                h(o);
                if (o !== p) {
                  if (e.onOptionChange != null) {
                    e.onOptionChange(o, t);
                  }
                }
              }
              n.stopPropagation();
            }
          },
          style,
        },
        t.label,
        e_icon !== undefined
          ? e_icon
          : i.createElement(o.A, {
              className: prefixCls + "-dropdown-options-item-icon",
            }),
      ),
    ),
    E.map((e, key) =>
      i.createElement("div", {
        className: r.xF(prefixCls + "-dropdown-options-item-fake-col"),
        key,
        style,
      }),
    ),
  );
});
const v = i.forwardRef(function (e, t) {
  const nRef = i.useRef(null);
  const oRef = i.useRef(null);
  const e_className = e.className;
  const v = e_className === undefined ? "" : e_className;
  const e_style = e.style;
  const h = e_style === undefined ? {} : e_style;
  const e_options = e.options;
  const options = e_options === undefined ? [] : e_options;
  const e_showDropdown = e.showDropdown;
  const b = e_showDropdown !== undefined && e_showDropdown;
  const e_showMask = e.showMask;
  const x = e_showMask === undefined || e_showMask;
  const e_direction = e.direction;
  const k = e_direction === undefined ? "down" : e_direction;
  const e_height = e.height;
  const e_maxHeight = e.maxHeight;
  const T = e_maxHeight === undefined ? 500 : e_maxHeight;
  const e_touchToClose = e.touchToClose;
  const S = e_touchToClose === undefined || e_touchToClose;
  const e_useColumn = e.useColumn;
  const e_optionIcon = e.optionIcon;
  const e_multiple = e.multiple;
  const e_defaultSelectedValue = e.defaultSelectedValue;
  const e_onCancel = e.onCancel;
  const e_getAnchorElement = e.getAnchorElement;
  const e_isStopTouchEl = e.isStopTouchEl;
  const e_getStopTouchElements = e.getStopTouchElements;
  const e_getScrollContainer = e.getScrollContainer;
  const P =
    e_getScrollContainer === undefined
      ? function () {
          return nRef.current;
        }
      : e_getScrollContainer;
  const e_getPortalContainer = e.getPortalContainer;
  const e_clickOtherToClose = e.clickOtherToClose;
  const z = e_clickOtherToClose === undefined || e_clickOtherToClose;
  const e_dropdownAnimationTimeout = e.dropdownAnimationTimeout;
  const J =
    e_dropdownAnimationTimeout === undefined ? 300 : e_dropdownAnimationTimeout;
  const e_dropdownAnimationFunction = e.dropdownAnimationFunction;
  const j =
    e_dropdownAnimationFunction === undefined
      ? "cubic-bezier(0.32, 0.96, 0.6, 1)"
      : e_dropdownAnimationFunction;
  const e_maskAnimationTimeout = e.maskAnimationTimeout;
  const B = e_maskAnimationTimeout === undefined ? 500 : e_maskAnimationTimeout;
  const e_maskAnimationFunction = e.maskAnimationFunction;
  const U =
    e_maskAnimationFunction === undefined
      ? "cubic-bezier(0.32, 0.96, 0.6, 1)"
      : e_maskAnimationFunction;
  const e_mountOnEnter = e.mountOnEnter;
  const mountOnEnter = e_mountOnEnter === undefined || e_mountOnEnter;
  const e_unmountOnExit = e.unmountOnExit;
  const unmountOnExit = e_unmountOnExit === undefined || e_unmountOnExit;
  const e_preventBodyScroll = e.preventBodyScroll;
  const e_initialBodyOverflow = e.initialBodyOverflow;
  const en = Jg();
  const er = lW();
  const er_windowHeight = er.windowHeight;
  const er_windowWidth = er.windowWidth;
  const eo = i.useState({
    top: "",
    bottom: "",
  });
  const el = eo[0];
  const eu = eo[1];
  const ec = i.useState(function () {
    if (e_defaultSelectedValue !== undefined) {
      return e_defaultSelectedValue;
    }
    if (e_multiple) {
      return [];
    }
    return 0;
  });
  const es = ec[0];
  const ed = ec[1];
  const ef = i.useState(null);
  const ev = ef[0];
  const em = ef[1];
  const ehRef = i.useRef(0);
  const epRef = i.useRef(null);
  const egRef = i.useRef(null);
  const eE = i.useState(0);
  const eb = eE[0];
  const ey = eE[1];
  const ex = function (e) {
    if (e_isStopTouchEl) {
      return e_isStopTouchEl(e);
    }
    let t;
    let n = e;
    for (
      let r = e_getStopTouchElements
          ? e_getStopTouchElements()
          : [(t = egRef.current) == null ? undefined : t.parentElement],
        i = 0;
      i < r.length;
      i++
    ) {
      while (n && r[i]) {
        if (n === r[i]) {
          return true;
        }
        n = n.parentElement;
      }
    }
    return false;
  };
  Lu(b, oRef.current, P);
  db(
    b,
    e_preventBodyScroll === undefined || e_preventBodyScroll,
    e_initialBodyOverflow,
  );
  const eC = i.useCallback(
    function (t) {
      if (t !== 0) {
        let n;
        const r = e_getAnchorElement
          ? e_getAnchorElement()
          : (n = egRef.current) == null
            ? undefined
            : n.parentElement;
        const i = (r == null ? undefined : r.getBoundingClientRect()) || {
          bottom: 0,
          top: 0,
        };
        const a = i.bottom;
        const o = i.top;
        const l = e.top || a;
        const u = e.bottom || er_windowHeight - o;
        const c = er_windowHeight - l;
        const s = (k !== "up" && t < c) || t > l;
        if (s) {
          ehRef.current = c;
          eu({
            top: l + "px",
            bottom: "",
          });
        } else {
          ehRef.current = er_windowHeight - u;
          eu({
            top: "",
            bottom: u + "px",
          });
        }
        em(s);
      }
    },
    [e.top, e.bottom, !!e_getAnchorElement, k, er_windowHeight],
  );
  const ek = i.useCallback(
    function (e) {
      const nRef_current = nRef.current;
      if (e && nRef_current) {
        const r = e.target;
        if (!(nRef_current.contains(r) || ex(r))) {
          e_onCancel();
        }
        e.stopPropagation();
      }
    },
    [ex, e_onCancel],
  );
  i.useEffect(
    function () {
      const e = b && z;
      const t = S ? "touchstart" : "click";
      if (e) {
        document.addEventListener(t, ek);
      }
      return function () {
        if (e) {
          document.removeEventListener(t, ek);
        }
      };
    },
    [b, z, ek],
  );
  i.useEffect(
    function () {
      let e = 0;
      if (e_height !== undefined) {
        e = e_height;
      } else {
        if (!epRef.current) {
          return;
        }
        e = b ? epRef.current.getBoundingClientRect().height : 0;
      }
      eC(e);
      r.dY(function () {
        ey(e);
      });
    },
    [b, options.length, e_height, eC],
  );
  i.useImperativeHandle(t, function () {
    return {
      dom: oRef.current,
    };
  });
  return i.createElement(Wb, null, function (t) {
    let a;
    const t_prefixCls = t.prefixCls;
    return i.createElement(
      "div",
      {
        ref: egRef,
      },
      i.createElement(
        f.A,
        {
          getContainer: e_getPortalContainer,
        },
        i.createElement(
          s.A,
          {
            in: b,
            timeout: Math.max(J, B),
            onEnter: function (e) {
              e.style.visibility = "visible";
            },
            onExited: function (e) {
              e.style.visibility = "hidden";
              em(null);
            },
            mountOnEnter,
            unmountOnExit,
          },
          i.createElement(
            "div",
            {
              className: r.xF(t_prefixCls + "-dropdown all-border-box", en, v, {
                "drop-up": !ev,
              }),
              ref: oRef,
              style: _u(
                {
                  height: ehRef.current + "px",
                  maxWidth: er_windowWidth + "px",
                },
                h,
                el,
              ),
            },
            i.createElement(
              "div",
              {
                className: r.xF(t_prefixCls + "-dropdown-options"),
                ref: nRef,
                style: yx(
                  _u(
                    {},
                    ev === null
                      ? {
                          opacity: 0,
                        }
                      : {
                          opacity: 1,
                          transform: eb
                            ? "translateY(0)"
                            : ev
                              ? "translateY(-100%)"
                              : "translateY(100%)",
                          transition: "all " + J + "ms " + j,
                        },
                    {
                      overflow: eb > T || e_height ? "auto" : "hidden",
                      maxHeight: T + "px",
                    },
                  ),
                ),
              },
              i.createElement(
                "div",
                {
                  className: r.xF(t_prefixCls + "-dropdown-options-container"),
                  ref: epRef,
                },
                e.children ||
                  ((a = {
                    options,
                    useColumn: e_useColumn,
                    icon: e_optionIcon,
                    selectedValue:
                      e.selectedValue !== undefined ? e.selectedValue : es,
                    multiple: e.multiple,
                    onOptionClick: e.onOptionClick,
                    onOptionChange: function (t, n) {
                      ed(t);
                      if (e.onOptionChange != null) {
                        e.onOptionChange(t, n);
                      }
                    },
                  }),
                  i.createElement(Options, a)),
                e.extraNode,
              ),
            ),
            x &&
              i.createElement("div", {
                className: r.xF(t_prefixCls + "-dropdown-mask", {
                  "is-show": eb,
                }),
                style: {
                  transition: "opacity " + B + "ms " + U,
                },
              }),
          ),
        ),
      ),
    );
  });
});
r.DU(v, {
  Options,
});
