import _u from "fyk";
import s from "bT";
import d from "wnX";
import f from "rJ";
import m from "jW8";
import { A as A_1 } from "./module-Vb_3.js";
import { A as A_2 } from "./module-Ruc.js";
import _g from "i0l";
import N from "JO";
import { A as A_3 } from "./module-NFc.js";
Object.defineProperty(exports, "eq", {
  enumerable: true,
  get: () => em.A,
});
Object.defineProperty(exports, "L", {
  enumerable: true,
  get: () => ev.Ay,
});
Object.defineProperty(exports, "zD", {
  enumerable: true,
  get: () => ef.Ay,
});
let r;
let o;
let i;
let a;
let l;
const p = s.forwardRef(function (e, t) {
  const e_position = e.position;
  const r = e_position === undefined ? "top" : e_position;
  const e_topOffset = e.topOffset;
  const i = e_topOffset === undefined ? 0 : e_topOffset;
  const e_bottomOffset = e.bottomOffset;
  const l = e_bottomOffset === undefined ? 0 : e_bottomOffset;
  const e_followOffset = e.followOffset;
  const p = e_followOffset === undefined ? 0 : e_followOffset;
  const e_children = e.children;
  const e_className = e.className;
  const e_style = e.style;
  const e_zIndex = e.zIndex;
  const zIndex = e_zIndex === undefined ? 100 : e_zIndex;
  const e_portalWhenSticky = e.portalWhenSticky;
  const b = e_portalWhenSticky !== undefined && e_portalWhenSticky;
  const e_stickyStyle = e.stickyStyle;
  const k = e_stickyStyle === undefined ? "fixed" : e_stickyStyle;
  const e_stickyCssStyle = e.stickyCssStyle;
  const e_getPortalContainer = e.getPortalContainer;
  const e_getContainer = e.getContainer;
  const e_getScrollContainer = e.getScrollContainer;
  const e_onStickyStateChange = e.onStickyStateChange;
  const e_onTopChange = e.onTopChange;
  const M = m.oq(false);
  const A = M[0];
  const F = M[1];
  const B = M[2];
  const O = m.oq(false);
  const D = O[0];
  const W = O[1];
  const H = O[2];
  const V = s.useState({});
  const P = V[0];
  const z = V[1];
  const qRef = s.useRef(null);
  const YRef = s.useRef(null);
  const GRef = s.useRef(0);
  const JRef = s.useRef(null);
  const jRef = s.useRef(null);
  const URef = s.useRef(false);
  const X = s.useCallback(
    function (e) {
      const e_followTop = e.followTop;
      const e_followBottom = e.followBottom;
      if (qRef.current) {
        const o = r === "top" || r === "both";
        const a = r === "bottom" || r === "both";
        const u = YRef.current.getBoundingClientRect();
        const s = qRef.current.getBoundingClientRect();
        const f = s.height;
        GRef.current = s.height;
        const m = d.nS(jRef.current).containerRect;
        const v = m.top;
        const h = m.bottom;
        const g = m.height;
        const C = Math.round(u.top - v);
        const y = Math.round(u.top + f - h);
        const E = e_followBottom - p - f - i - v;
        const b = g - e_followTop - p - f - l;
        H(!!F.current);
        const isTopSticky = !!o && C <= i && e_followBottom > v + p;
        const isBottomSticky = !!a && y >= -l && e_followTop < h - p;
        const isSticky = isTopSticky || isBottomSticky;
        const S = (k === "absolute" ? 0 : v) + i;
        const M = (k === "absolute" ? 0 : window.innerHeight - h) + l;
        let A = {};
        if (isSticky) {
          A = _u(
            {
              transform: "translateZ(0)",
              WebkitTransform: "translateZ(0)",
              position: k === "absolute" ? "absolute" : "fixed",
              zIndex,
            },
            isTopSticky
              ? {
                  top: E > 0 ? S : S + E,
                }
              : {},
            isBottomSticky
              ? {
                  bottom: b > 0 ? M : M + b,
                }
              : {},
            {
              left: u.left,
              width: u.width,
            },
            e_stickyCssStyle || {},
          );
        }
        if (e_onTopChange != null) {
          e_onTopChange(Math.max(0, s.top - v - i));
        }
        B(isSticky);
        z(A);
        if (isSticky !== W.current && e_onStickyStateChange) {
          e_onStickyStateChange({
            isTopSticky,
            isBottomSticky,
            isSticky,
            wasSticky: W.current,
          });
        }
      }
    },
    [
      r,
      i,
      l,
      p,
      zIndex,
      k,
      e_onStickyStateChange,
      e_onTopChange,
      e_stickyCssStyle,
    ],
  );
  const recalculatePosition = s.useCallback(
    function () {
      if (!URef.current) {
        d.T7(function () {
          URef.current = false;
          if (JRef.current) {
            const e = JRef.current.getBoundingClientRect();
            X({
              followTop: e.top,
              followBottom: e.bottom,
            });
          }
        });
        URef.current = true;
      }
    },
    [X],
  );
  const _ = s.useCallback(function () {
    if (YRef.current) {
      const e = GRef.current;
      YRef.current.style.height = (F.current ? e : 0) + "px";
    }
  }, []);
  const updatePlaceholderLayout = s.useCallback(function () {
    if (qRef.current) {
      GRef.current = qRef.current.getBoundingClientRect().height;
    }
    _();
  }, []);
  s.useEffect(
    function () {
      JRef.current = d.Ks(e_getContainer) || document.body;
      const e = e_getScrollContainer ? d.Ks(e_getScrollContainer) : window;
      if (e) {
        jRef.current = e;
        const t = (e) => {
          e.removeEventListener("scroll", recalculatePosition);
        };
        e.addEventListener("scroll", recalculatePosition);
        recalculatePosition();
        return function () {
          t(e);
        };
      }
    },
    [e_getContainer, e_getScrollContainer, recalculatePosition],
  );
  s.useEffect(
    function () {
      _();
    },
    [A, D],
  );
  s.useImperativeHandle(
    t,
    function () {
      return {
        dom: qRef.current,
        recalculatePosition,
        updatePlaceholderLayout,
      };
    },
    [recalculatePosition, updatePlaceholderLayout],
  );
  const Q = s.useMemo(
    function () {
      return _u({}, e_style || {}, P);
    },
    [P, e_style],
  );
  function $(e) {
    return s.createElement(
      "div",
      {
        className: d.xF(e + "-sticky", e_className),
        ref: qRef,
        style: Q,
      },
      e_children,
    );
  }
  return s.createElement(f.Wb, null, function (e) {
    const e_prefixCls = e.prefixCls;
    return s.createElement(
      "div",
      null,
      s.createElement("div", {
        ref: YRef,
      }),
      b && A
        ? s.createElement(
            A_1,
            {
              getContainer: e_getPortalContainer,
            },
            $(e_prefixCls),
          )
        : $(e_prefixCls),
    );
  });
});
const y = ["className", "useCurrentColor", "style"];
function x(e) {
  const e_className = e.className;
  const n = e_className === undefined ? "" : e_className;
  const e_useCurrentColor = e.useCurrentColor;
  const o = e_useCurrentColor === undefined || e_useCurrentColor;
  const e_style = e.style;
  const a = _g(e, y);
  return s.createElement(f.Wb, null, function (e) {
    const e_prefixCls = e.prefixCls;
    return s.createElement(
      "svg",
      _u(
        {
          className:
            e_prefixCls + "-icon " + e_prefixCls + "-icon-error-circle " + n,
          width: "1em",
          height: "1em",
          style: e_style,
          fill: o ? "currentColor" : "#000",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
        },
        a,
      ),
      s.createElement("path", {
        d: "M12 24C5.4 24 0 18.6 0 12S5.4 0 12 0s12 5.4 12 12-5.4 12-12 12zm0-22.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5z",
      }),
      s.createElement("path", {
        d: "M13.1 12l3.7-3.7c.3-.3.3-.7 0-1l-.1-.1c-.3-.3-.7-.3-1 0L12 10.9 8.3 7.2c-.3-.3-.7-.3-1 0l-.1.1c-.3.3-.3.7 0 1l3.7 3.7-3.7 3.7c-.3.3-.3.7 0 1l.1.1c.2.1.3.2.5.2s.4-.1.5-.2l3.7-3.7 3.7 3.7c.3.3.7.3 1 0l.1-.1c.3-.3.3-.7 0-1L13.1 12z",
      }),
    );
  });
}
const E = ["className", "useCurrentColor", "style"];
function b(e) {
  const e_className = e.className;
  const n = e_className === undefined ? "" : e_className;
  const e_useCurrentColor = e.useCurrentColor;
  const o = e_useCurrentColor === undefined || e_useCurrentColor;
  const e_style = e.style;
  const a = _g(e, E);
  return s.createElement(f.Wb, null, function (e) {
    const e_prefixCls = e.prefixCls;
    return s.createElement(
      "svg",
      _u(
        {
          className:
            e_prefixCls + "-icon " + e_prefixCls + "-icon-warn-circle " + n,
          width: "1em",
          height: "1em",
          style: e_style,
          fill: o ? "currentColor" : "#000",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
        },
        a,
      ),
      s.createElement("path", {
        d: "M12 24C5.4 24 0 18.6 0 12S5.4 0 12 0s12 5.4 12 12-5.4 12-12 12zm0-22.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5z",
      }),
      s.createElement("path", {
        d: "M11.8 15.2h.3c.4 0 .7-.3.7-.7V7.2c0-.4-.3-.7-.7-.7h-.3c-.4 0-.7.3-.7.7v7.3c0 .4.3.7.7.7zM12.2 16.5h-.3c-.4 0-.7.3-.7.7v.3c0 .4.3.7.7.7h.3c.4 0 .7-.3.7-.7v-.3c0-.4-.3-.7-.7-.7z",
      }),
    );
  });
}
const w = ["className", "useCurrentColor", "style"];
function k(e) {
  const e_className = e.className;
  const n = e_className === undefined ? "" : e_className;
  const e_useCurrentColor = e.useCurrentColor;
  const o = e_useCurrentColor === undefined || e_useCurrentColor;
  const e_style = e.style;
  const a = _g(e, w);
  return s.createElement(f.Wb, null, function (e) {
    const e_prefixCls = e.prefixCls;
    return s.createElement(
      "svg",
      _u(
        {
          className:
            e_prefixCls + "-icon " + e_prefixCls + "-icon-success-circle " + n,
          width: "1em",
          height: "1em",
          style: e_style,
          fill: o ? "currentColor" : "#000",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
        },
        a,
      ),
      s.createElement("path", {
        d: "M12 24C5.4 24 0 18.6 0 12S5.4 0 12 0s12 5.4 12 12-5.4 12-12 12zm0-22.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5z",
      }),
      s.createElement("path", {
        d: "M17.5 8c-.3-.3-.7-.3-1 0l-6.3 6.3-3-3c-.3-.3-.7-.3-1 0-.3.3-.3.7 0 1l3.5 3.5c.1.1.3.2.4.2s.4-.1.5-.2L17.5 9c.2-.3.2-.7 0-1z",
      }),
    );
  });
}
function T(e, t) {
  return function (n, r) {
    const o =
      typeof n === "string"
        ? {
            content: n,
            type: "info",
          }
        : n;
    if (t !== undefined) {
      o.type = t;
      o.loading = t === "loading";
    }
    const i = document.createElement("div");
    document.body.appendChild(i);
    const a = new N.q(e, i, r);
    const a_render = a.render;
    const a_unmount = a.unmount;
    var s = _u({}, o, {
      close: m,
      getContainer: function () {
        return i;
      },
      onClose: function () {
        const o_onClose = o.onClose;
        if (o_onClose) {
          o_onClose();
        }
        a_unmount();
        if (i.parentNode) {
          i.parentNode.removeChild(i);
        }
      },
      visible: false,
    });
    var f = false;
    function m() {
      f = true;
      s.visible = false;
      a_render(s);
    }
    a_render(s);
    d.dY(function () {
      if (!f) {
        s.visible = true;
        a_render(s);
      }
    });
    return {
      update: function (e) {
        a_render((s = _u({}, s, e)));
      },
      close: m,
      hide: m,
    };
  };
}
const S = s.forwardRef(function (e, t) {
  const e_className = e.className;
  const e_getContainer = e.getContainer;
  const e_visible = e.visible;
  const i = e_visible !== undefined && e_visible;
  const e_onClose = e.onClose;
  const e_close = e.close;
  const e_type = e.type;
  const c = e_type === undefined ? "info" : e_type;
  const e_icon = e.icon;
  const e_layout = e.layout;
  const C = e_layout === undefined ? "vertical" : e_layout;
  const e_duration = e.duration;
  const E = e_duration === undefined ? 3000 : e_duration;
  const e_transitionDuration = e.transitionDuration;
  const N = e_transitionDuration === undefined ? 300 : e_transitionDuration;
  const e_content = e.content;
  const e_loading = e.loading;
  const I = e_loading !== undefined && e_loading;
  const e_loadingIcon = e.loadingIcon;
  const e_disableBodyTouch = e.disableBodyTouch;
  const A = e_disableBodyTouch !== undefined && e_disableBodyTouch;
  const e_loadingInner = e.loadingInner;
  const e_direction = e.direction;
  const O = e_direction === undefined ? "center" : e_direction;
  const e_typeIconMap = e.typeIconMap;
  const e_initialBodyOverflow = e.initialBodyOverflow;
  const HRef = s.useRef();
  const VRef = s.useRef(null);
  const PRef = s.useRef(null);
  const zRef = s.useRef(false);
  const q = c && c !== "info";
  function Y() {
    if (E) {
      clearTimeout(HRef.current);
      HRef.current = window.setTimeout(function () {
        if (e_close) {
          e_close();
        }
      }, E);
    }
  }
  function G(e) {
    if (A) {
      e.preventDefault();
    }
  }
  s.useImperativeHandle(t, function () {
    return {
      dom: VRef.current,
    };
  });
  m.db(i, A, e_initialBodyOverflow);
  s.useEffect(
    function () {
      const zRef_current = zRef.current;
      if (i) {
        Y();
      } else {
        clearTimeout(HRef.current);
        if (zRef_current) {
          setTimeout(() => {
            if (e_onClose) {
              e_onClose();
            }
          }, N);
        }
      }
      zRef.current = true;
    },
    [i],
  );
  s.useEffect(
    function () {
      Y();
    },
    [E],
  );
  return s.createElement(f.Wb, null, function (e) {
    let t;
    let a;
    const e_prefixCls = e.prefixCls;
    return s.createElement(
      A_1,
      {
        getContainer: e_getContainer,
      },
      s.createElement(
        "div",
        {
          className: d.xF(
            e_prefixCls + "-toast",
            "all-border-box",
            e_className,
          ),
          ref: VRef,
        },
        s.createElement(
          A_2,
          {
            in: i,
            timeout: N,
            type: "fade",
            nodeRef: PRef,
          },
          ((t = e_prefixCls + "-toast"),
          s.createElement(
            "div",
            {
              className: d.xF(t + "-wrapper", "from-" + O, {
                "no-event": !A,
              }),
              onClick: G,
              ref: PRef,
            },
            s.createElement(
              "div",
              {
                className: d.xF(t + "-inner", C, {
                  [t + "-inner-mixin"]: (I || q || e_icon) && C === "vertical",
                }),
              },
              I &&
                s.createElement(
                  "div",
                  {
                    className: t + "-loading-wrapper",
                  },
                  e_loadingIcon !== undefined
                    ? e_loadingIcon
                    : s.createElement(A_3, {
                        className: "loading-icon",
                        type: "arc",
                        stroke: 2,
                        radius: e_loadingInner ? 19 : 11,
                      }),
                  e_loadingInner
                    ? s.createElement(
                        "span",
                        {
                          className: t + "-loading-inner",
                        },
                        e_loadingInner,
                      )
                    : null,
                ),
              !I && q
                ? ((a = {
                    success: s.createElement(k, null),
                    error: s.createElement(x, null),
                    warn: s.createElement(b, null),
                  }),
                  (e_typeIconMap || {})[c] || a[c] || null)
                : null,
              I || q || !e_icon ? null : e_icon,
              e_content
                ? s.createElement(
                    "div",
                    {
                      className: t + "-content",
                    },
                    e_content,
                  )
                : null,
            ),
          )),
        ),
      ),
    );
  });
});
const I = f.qm(S);
d.DU(S, {
  toast: T(I),
  info: T(I, "info"),
  success: T(I, "success"),
  error: T(I, "error"),
  loading: T(I, "loading"),
  warn: T(I, "warn"),
});
require("XO");
require("cLF");
require("QlD");
require("CM");
const L = require("BZj");
require("hB");
const M = require("rAy");
require("Ta7");
require("tOF");
require("TQ");
require("jqJ");
require("Z5q");
require("c9q");
require("uRnb");
require("jo");
require("Yu");
require("SVq");
const A = require("Fu");
const F = require("./module-d8L.js");
const B = require("gx");
require("./module-loS.js");
require("./module-ijd.js");
require("./module-O7.js");
require("./module-pF.js");
require("./module-tli.js");
require("./module-cR.js");
const O = ["className", "useCurrentColor", "style"];
function D(e) {
  const e_className = e.className;
  const n = e_className === undefined ? "" : e_className;
  const e_useCurrentColor = e.useCurrentColor;
  const o = e_useCurrentColor === undefined || e_useCurrentColor;
  const e_style = e.style;
  const a = _g(e, O);
  return s.createElement(f.Wb, null, function (e) {
    const e_prefixCls = e.prefixCls;
    return s.createElement(
      "svg",
      _u(
        {
          className: e_prefixCls + "-icon " + e_prefixCls + "-icon-minus " + n,
          width: "1em",
          height: "1em",
          style: e_style,
          fill: o ? "currentColor" : "#000",
          viewBox: "0 0 1024 1024",
          xmlns: "http://www.w3.org/2000/svg",
        },
        a,
      ),
      s.createElement("defs", null),
      s.createElement("path", {
        d: "M115.2 467.2h819.2c6.4 0 6.4 6.4 6.4 6.4V544c0 6.4-6.4 6.4-6.4 6.4H96c-6.4 0-6.4-6.4-6.4-6.4v-64c0-6.4 6.4-6.4 6.4-6.4 6.4-6.4 6.4-6.4 19.2-6.4z",
      }),
    );
  });
}
const W = ["className", "useCurrentColor", "style"];
function H(e) {
  const e_className = e.className;
  const n = e_className === undefined ? "" : e_className;
  const e_useCurrentColor = e.useCurrentColor;
  const o = e_useCurrentColor === undefined || e_useCurrentColor;
  const e_style = e.style;
  const a = _g(e, W);
  return s.createElement(f.Wb, null, function (e) {
    const e_prefixCls = e.prefixCls;
    return s.createElement(
      "svg",
      _u(
        {
          className:
            e_prefixCls + "-icon " + e_prefixCls + "-icon-star-fill " + n,
          width: "1em",
          height: "1em",
          style: e_style,
          fill: o ? "currentColor" : "#000",
          viewBox: "0 0 1024 1024",
          xmlns: "http://www.w3.org/2000/svg",
        },
        a,
      ),
      s.createElement("defs", null),
      s.createElement("path", {
        d: "M497.371 826.514L270.63 936.23c-18.286 7.314-40.229 0-47.543-18.286-3.657-3.657-7.315-10.972-3.657-18.286l25.6-248.686c0-10.971-3.658-18.285-7.315-29.257L69.486 435.2c-14.629-14.629-10.972-36.571 3.657-51.2 3.657-3.657 10.971-7.314 14.628-7.314l245.029-51.2c10.971-3.657 18.286-7.315 21.943-18.286l128-219.429C490.057 73.143 512 65.83 530.286 76.8c3.657 3.657 10.971 7.314 14.628 14.629l128 219.428c3.657 7.314 14.629 14.629 21.943 18.286l245.029 51.2c18.285 3.657 32.914 21.943 25.6 43.886 0 7.314-3.657 10.971-7.315 14.628L789.943 621.714c-7.314 7.315-10.972 18.286-7.314 29.257l25.6 248.686c3.657 18.286-10.972 36.572-32.915 40.229-7.314 0-14.628 0-18.285-3.657L530.286 826.514c-10.972-7.314-25.6-7.314-32.915 0z",
      }),
    );
  });
}
require("./module-n94.js");
require("./module-VDW.js");
const V = ["className", "useCurrentColor", "style"];
function P(e) {
  const e_className = e.className;
  const n = e_className === undefined ? "" : e_className;
  const e_useCurrentColor = e.useCurrentColor;
  const o = e_useCurrentColor === undefined || e_useCurrentColor;
  const e_style = e.style;
  const a = _g(e, V);
  return s.createElement(f.Wb, null, function (e) {
    const e_prefixCls = e.prefixCls;
    return s.createElement(
      "svg",
      _u(
        {
          className: e_prefixCls + "-icon " + e_prefixCls + "-icon-close " + n,
          width: "1em",
          height: "1em",
          style: e_style,
          viewBox: "0 0 1024 1024",
          xmlns: "http://www.w3.org/2000/svg",
        },
        a,
      ),
      s.createElement("path", {
        fill: o ? "currentColor" : "#000",
        d: "M509.568 447.083L796.16 160.469a21.333 21.333 0 0130.165 0l30.166 30.166a21.333 21.333 0 010 30.186L569.899 507.435l286.613 286.592a21.333 21.333 0 010 30.165l-30.165 30.165a21.333 21.333 0 01-30.166 0L509.568 567.765 222.933 854.38a21.333 21.333 0 01-30.186 0l-30.166-30.166a21.333 21.333 0 010-30.165l286.614-286.613L162.603 220.8a21.333 21.333 0 010-30.187l30.165-30.165a21.333 21.333 0 0130.187 0l286.613 286.613z",
      }),
    );
  });
}
require("./module-qNJ.js");
const z = ["className", "useCurrentColor", "style"];
function q(e) {
  const e_className = e.className;
  const n = e_className === undefined ? "" : e_className;
  const e_useCurrentColor = e.useCurrentColor;
  const o = e_useCurrentColor === undefined || e_useCurrentColor;
  const e_style = e.style;
  const a = _g(e, z);
  return s.createElement(f.Wb, null, function (e) {
    const e_prefixCls = e.prefixCls;
    return s.createElement(
      "svg",
      _u(
        {
          className: e_prefixCls + "-icon " + e_prefixCls + "-icon-add " + n,
          width: "1em",
          height: "1em",
          style: e_style,
          viewBox: "0 0 1024 1024",
          xmlns: "http://www.w3.org/2000/svg",
        },
        a,
      ),
      s.createElement("path", {
        fill: o ? "currentColor" : "#000",
        d: "M527.317 85.333c9.515 0 12.95.982 16.427 2.859a19.337 19.337 0 018.064 8.064c1.877 3.477 2.859 6.912 2.859 16.427v356.65h356.65c9.515 0 12.95.982 16.427 2.859a19.337 19.337 0 018.064 8.064c1.877 3.477 2.859 6.912 2.859 16.427v30.634c0 9.515-.982 12.95-2.859 16.427a19.392 19.392 0 01-8.064 8.064c-3.477 1.877-6.912 2.859-16.427 2.859h-356.65v356.65c0 9.515-.982 12.95-2.859 16.427a19.392 19.392 0 01-8.064 8.064c-3.477 1.877-6.912 2.859-16.427 2.859h-30.634c-9.515 0-12.95-.982-16.427-2.859a19.392 19.392 0 01-8.064-8.064c-1.877-3.477-2.859-6.912-2.859-16.427l-.021-356.65h-356.63c-9.514 0-12.949-.982-16.426-2.859a19.392 19.392 0 01-8.064-8.064c-1.877-3.477-2.859-6.912-2.859-16.427v-30.634c0-9.515.982-12.95 2.859-16.427a19.392 19.392 0 018.064-8.064c3.477-1.877 6.912-2.859 16.427-2.859l356.65-.021v-356.63c0-9.514.982-12.949 2.859-16.426a19.392 19.392 0 018.064-8.064c3.477-1.877 6.912-2.859 16.427-2.859h30.634z",
      }),
    );
  });
}
require("./module-dMH.js");
const Y = ["className", "useCurrentColor", "style"];
function G(e) {
  const e_className = e.className;
  const n = e_className === undefined ? "" : e_className;
  const e_useCurrentColor = e.useCurrentColor;
  const o = e_useCurrentColor === undefined || e_useCurrentColor;
  const e_style = e.style;
  const a = _g(e, Y);
  return s.createElement(f.Wb, null, function (e) {
    const e_prefixCls = e.prefixCls;
    return s.createElement(
      "svg",
      _u(
        {
          className: e_prefixCls + "-icon " + e_prefixCls + "-icon-clear " + n,
          width: "1em",
          height: "1em",
          style: e_style,
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 18 18",
        },
        a,
      ),
      s.createElement("path", {
        d: "M9 1.1C4.7 1.1 1.1 4.7 1.1 9s3.5 7.9 7.9 7.9 7.9-3.5 7.9-7.9S13.3 1.1 9 1.1zm3.4 10.2c.2.2.2.5 0 .7l-.5.5c-.2.2-.5.2-.7 0L9 10.3l-2.2 2.2c-.2.2-.5.2-.7 0l-.6-.5c-.2-.2-.2-.5 0-.7l2.2-2.2-2.2-2.3c-.2-.2-.2-.5 0-.7l.5-.5c.2-.2.5-.2.7 0l2.2 2.2 2.2-2.2c.2-.2.5-.2.7 0l.5.5c.2.2.2.5 0 .7L10.1 9l2.3 2.3z",
        fill: o ? "currentColor" : "#000",
      }),
    );
  });
}
const J = ["className", "useCurrentColor", "style"];
function j(e) {
  const e_className = e.className;
  const n = e_className === undefined ? "" : e_className;
  const e_useCurrentColor = e.useCurrentColor;
  const o = e_useCurrentColor === undefined || e_useCurrentColor;
  const e_style = e.style;
  const a = _g(e, J);
  return s.createElement(f.Wb, null, function (e) {
    const e_prefixCls = e.prefixCls;
    return s.createElement(
      "svg",
      _u(
        {
          className:
            e_prefixCls + "-icon " + e_prefixCls + "-icon-check-bold " + n,
          width: "1em",
          height: "1em",
          style: e_style,
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -0.97 10.07 10.07",
        },
        a,
      ),
      s.createElement(
        "g",
        {
          "data-name": "图层 2",
        },
        s.createElement("path", {
          d: "M9.22.12a.49.49 0 00-.7.06L3.86 5.69 1.4 3.57a.51.51 0 00-.71.06l-.57.66A.49.49 0 00.17 5L3 7.38v.07l.69.55a.53.53 0 00.71 0l.6-.71a.22.22 0 000-.08l5-5.82a.51.51 0 00-.11-.71z",
          fill: o ? "currentColor" : "#000",
          fillRule: "evenodd",
          "data-name": "图层 1",
        }),
      ),
    );
  });
}
const U = ["className", "useCurrentColor", "style"];
function X(e) {
  const e_className = e.className;
  const n = e_className === undefined ? "" : e_className;
  const e_useCurrentColor = e.useCurrentColor;
  const o = e_useCurrentColor === undefined || e_useCurrentColor;
  const e_style = e.style;
  const a = _g(e, U);
  return s.createElement(f.Wb, null, function (e) {
    const e_prefixCls = e.prefixCls;
    return s.createElement(
      "svg",
      _u(
        {
          className:
            e_prefixCls + "-icon " + e_prefixCls + "-icon-close-bold " + n,
          width: "1em",
          height: "1em",
          style: e_style,
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 6.92 6.92",
        },
        a,
      ),
      s.createElement(
        "g",
        {
          "data-name": "图层 2",
        },
        s.createElement("path", {
          d: "M6.16.15l.62.62a.5.5 0 010 .7l-2 2 2 2a.51.51 0 010 .71l-.62.62a.51.51 0 01-.71 0l-2-2-2 2a.5.5 0 01-.7 0l-.6-.64a.5.5 0 010-.71l2-2-2-2a.48.48 0 010-.7l.62-.6a.48.48 0 01.7 0l2 2 2-2a.5.5 0 01.69 0z",
          fill: o ? "currentColor" : "#000",
          fillRule: "evenodd",
          "data-name": "图层 1",
        }),
      ),
    );
  });
}
const K = ["className", "useCurrentColor", "style"];
function _(e) {
  const e_className = e.className;
  const n = e_className === undefined ? "" : e_className;
  const e_useCurrentColor = e.useCurrentColor;
  const o = e_useCurrentColor === undefined || e_useCurrentColor;
  const e_style = e.style;
  const a = _g(e, K);
  return s.createElement(f.Wb, null, function (e) {
    const e_prefixCls = e.prefixCls;
    return s.createElement(
      "svg",
      _u(
        {
          className:
            e_prefixCls + "-icon " + e_prefixCls + "-icon-star-half " + n,
          width: "1em",
          height: "1em",
          style: e_style,
          fill: o ? "currentColor" : "#000",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 1024 1024",
        },
        a,
      ),
      s.createElement("path", {
        d: "M513.8 71.6c-13.4-.9-25.9 5.8-31 16.2l-128 219.4c-3.7 11-11 14.6-21.9 18.3l-245 51.2c-3.7 0-11 3.7-14.6 7.3-14.6 14.6-18.3 36.6-3.7 51.2l168.2 186.5c3.7 11 7.3 18.3 7.3 29.3l-25.6 248.7c-3.7 7.3 0 14.6 3.7 18.3 7.3 18.3 29.3 25.6 47.5 18.3l226.7-109.7c3.9-3.9 10-5.7 16.4-5.4V71.6z",
      }),
    );
  });
}
function Z() {
  return s.createElement(
    "svg",
    {
      width: "30",
      height: "30",
      viewBox: "0 0 30 30",
      fill: "none",
    },
    s.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14.5 0C14.2239 0 14 0.223857 14 0.5V14H0.5C0.223858 14 0 14.2239 0 14.5V15.5C0 15.7761 0.223857 16 0.5 16H14V29.5C14 29.7761 14.2239 30 14.5 30H15.5C15.7761 30 16 29.7761 16 29.5V16H29.5C29.7761 16 30 15.7761 30 15.5V14.5C30 14.2239 29.7761 14 29.5 14H16V0.5C16 0.223858 15.7761 0 15.5 0H14.5Z",
      fill: "#C9CDD4",
    }),
  );
}
const Q = s.forwardRef(function (e, t) {
  let n;
  const e_className = e.className;
  const o = e_className === undefined ? "" : e_className;
  const e_style = e.style;
  const e_accept = e.accept;
  const accept = e_accept === undefined ? "image/*" : e_accept;
  const e_multiple = e.multiple;
  const multiple = e_multiple !== undefined && e_multiple;
  const e_capture = e.capture;
  const e_columns = e.columns;
  const columns = e_columns === undefined ? 3 : e_columns;
  const e_gutter = e.gutter;
  const gutter = e_gutter === undefined ? 8 : e_gutter;
  const e_limit = e.limit;
  const E = e_limit === undefined ? 0 : e_limit;
  const e_images = e.images;
  const w = e_images === undefined ? [] : e_images;
  const e_maxSize = e.maxSize;
  const e_disabled = e.disabled;
  const e_deleteIcon = e.deleteIcon;
  const e_selectIcon = e.selectIcon;
  const e_hideDelete = e.hideDelete;
  const I = e_hideDelete !== undefined && e_hideDelete;
  const e_hideSelect = e.hideSelect;
  const M = e_hideSelect !== undefined && e_hideSelect;
  const e_alwaysShowSelect = e.alwaysShowSelect;
  const D = e_alwaysShowSelect !== undefined && e_alwaysShowSelect;
  const e_imageProps = e.imageProps;
  const e_renderLoading = e.renderLoading;
  const e_renderError = e.renderError;
  const e_onLongPress = e.onLongPress;
  const e_onClick = e.onClick;
  const e_onChange = e.onChange;
  const G = e_onChange === undefined ? () => null : e_onChange;
  const e_onMaxSizeExceed = e.onMaxSizeExceed;
  const e_onLimitExceed = e.onLimitExceed;
  const e_upload = e.upload;
  const e_selectAdapter = e.selectAdapter;
  const e_onSelectClick = e.onSelectClick;
  const e_onDeleteClick = e.onDeleteClick;
  const QRef = s.useRef(null);
  const $Ref = s.useRef(null);
  const ee = m.SE(w);
  s.useImperativeHandle(t, function () {
    return {
      dom: QRef.current,
    };
  });
  const et = (e, t) => {
    const n =
      Array.prototype.filter.call(e.target.files || [], function (e) {
        return (
          !e_maxSize ||
          !(e.size > 1024 * e_maxSize) ||
          (e_onMaxSizeExceed && e_onMaxSizeExceed(e), false)
        );
      }) || [];
    if (!t) {
      e.target.value = "";
    }
    if (E !== 0 && n.length + w.length > E) {
      if (e_onLimitExceed) {
        e_onLimitExceed(n);
      }
      n.length = E - w.length;
    }
    B.Promise.all(
      n.map(
        (e) =>
          new B.Promise(function (t, n) {
            if (e.url) {
              t(e.url);
            } else {
              const r = new FileReader();
              r.onload = function (e) {
                let r;
                const o = (r = e.target) == null ? undefined : r.result;
                if (!o) {
                  n(Error("file parse error"));
                }
                t(o);
              };
              r.onerror = function () {
                n(Error("file parse error"));
              };
              r.readAsDataURL(e);
            }
          }),
      ),
    ).then((e) => {
      const t = e.map((url, t) => ({
        url,
        status: typeof e_upload === "function" ? "loading" : "loaded",
        file: n[t],
      }));
      ee.current = [].concat(ee.current, t);
      G([].concat(ee.current));
      if (typeof e_upload === "function") {
        n.forEach((e) => {
          e_upload(ee.current.find((t) => t.file === e))
            .then((t) => {
              const n = ee.current.findIndex((t) => t.file === e);
              if (n !== -1) {
                ee.current[n] = _u({}, ee.current[n], t, {
                  status: undefined,
                });
              }
            })
            .catch(() => {
              const t = ee.current.findIndex((t) => t.file === e);
              if (t !== -1) {
                ee.current[t].status = "error";
              }
            })
            .finally(() => {
              G([].concat(ee.current));
            });
        });
      }
    });
  };
  const en = (e) => {
    if (e_onDeleteClick) {
      e_onDeleteClick(e);
    }
    G(w.filter((t, n) => n !== e));
  };
  const er = (e, t, r) => {
    n = setTimeout(() => {
      n = 0;
      if (e_onLongPress != null) {
        e_onLongPress(e, t, r);
      }
    }, 750);
  };
  const eo = (e, t, r) => {
    clearTimeout(n);
    if (n !== 0) {
      if (e_onClick != null) {
        e_onClick(e, t, r);
      }
    }
  };
  const ei = function (e) {
    if (e.target !== $Ref.current) {
      let t;
      if (e_onSelectClick) {
        e_onSelectClick();
      }
      if (e_selectAdapter) {
        e_selectAdapter().then((e) =>
          et(
            {
              target: {
                files: e.files,
              },
            },
            true,
          ),
        );
      } else if ((t = $Ref.current) != null) {
        t.click();
      }
    }
  };
  const ea = (e, t) => {
    const r = (E && E < w.length ? w.slice(0, E) : w).map((n, r) => {
      const n_url = n.url;
      const n_status = n.status;
      return {
        img: s.createElement(
          "div",
          {
            key: r + "-" + n_url,
            className: e + "-image-picker-image",
          },
          s.createElement(
            "div",
            {
              onTouchStart: function (e) {
                return er(e, n, r);
              },
              onClick: function (e) {
                return eo(e, n, r);
              },
              className: e + "-image-picker-image-container",
            },
            s.createElement(
              F.A,
              _u(
                {
                  showLoading: true,
                  showError: true,
                },
                e_imageProps || {},
                {
                  src: n_url,
                  errorArea: e_renderError
                    ? typeof e_renderError === "function"
                      ? e_renderError(r)
                      : e_renderError
                    : s.createElement(
                        "div",
                        {
                          className: e + "-image-picker-error",
                        },
                        s.createElement("p", null, t.ImagePicker.loadError),
                      ),
                  loadingArea: e_renderLoading
                    ? typeof e_renderLoading === "function"
                      ? e_renderLoading(r)
                      : e_renderLoading
                    : null,
                  status:
                    n_status ||
                    (e_imageProps == null ? undefined : e_imageProps.status),
                },
              ),
            ),
            s.createElement("div", {
              className: e + "-image-picker-image-mask",
            }),
          ),
          !I &&
            s.createElement(
              "div",
              {
                className: e + "-image-picker-close",
                onClick: function () {
                  return en(r);
                },
              },
              e_deleteIcon ||
                s.createElement(
                  "div",
                  {
                    className: e + "-image-picker-close-icon",
                  },
                  s.createElement(P, null),
                ),
            ),
        ),
        title: "",
      };
    });
    const o = !M && w.length < (E || Infinity);
    if (o || D) {
      r.push({
        img: s.createElement(
          "div",
          {
            className: d.xF(e + "-image-picker-add", {
              [e + "-image-picker-add-disabled"]: e_disabled || (D && !o),
            }),
            onClick: ei,
          },
          s.createElement(
            "div",
            {
              className: e + "-image-picker-add-container",
            },
            e_selectIcon ||
              s.createElement(
                "div",
                {
                  className: e + "-image-picker-add-icon",
                },
                s.createElement(Z, null),
              ),
            e_selectAdapter
              ? null
              : s.createElement("input", {
                  capture: e_capture,
                  accept,
                  multiple,
                  type: "file",
                  onChange: function (e) {
                    return et(e);
                  },
                  ref: $Ref,
                }),
          ),
        ),
        title: "",
      });
    }
    return r;
  };
  return s.createElement(f.Wb, null, function (e) {
    const e_prefixCls = e.prefixCls;
    const e_locale = e.locale;
    const a = e_locale === undefined ? d.q : e_locale;
    return s.createElement(
      "div",
      {
        className: d.xF(e_prefixCls + "-image-picker", o, {
          [e_prefixCls + "-image-picker-disabled"]: e_disabled,
        }),
        style: e_style,
        ref: QRef,
      },
      s.createElement(
        "div",
        {
          className: e_prefixCls + "-image-picker-container",
        },
        s.createElement(A.A, {
          data: ea(e_prefixCls, a),
          gutter,
          columns,
        }),
      ),
    );
  });
});
d.DU(Q, "ImagePicker");
const $ = require("MCD");
const ee = [
  "style",
  "className",
  "images",
  "loop",
  "openIndex",
  "fit",
  "noselect",
  "displayDuration",
  "spaceBetween",
  "showLoading",
  "loadingArea",
  "errorArea",
  "showError",
  "retryTime",
  "staticLabel",
  "replaceFallbackWhenLoaded",
  "scrollBezier",
  "lazyloadCount",
  "swipeToClose",
  "extra",
  "getMinScale",
  "getMaxScale",
  "getDoubleClickScale",
  "getContainer",
  "getThumbBounds",
  "renderIndicator",
  "onChange",
  "onAfterChange",
  "onImageClick",
  "onImageDoubleClick",
  "onImageLongTap",
  "close",
  "onClose",
  "onTouchStart",
  "onTouchMove",
  "onTouchEnd",
  "indicatorPos",
];
const et = s.forwardRef(function (e, t) {
  let n;
  let r;
  const e_style = e.style;
  const e_className = e.className;
  const e_images = e.images;
  const e_loop = e.loop;
  const loop = e_loop !== undefined && e_loop;
  const e_openIndex = e.openIndex;
  const e_fit = e.fit;
  const e_noselect = e.noselect;
  const noselect = e_noselect === undefined || e_noselect;
  const e_displayDuration = e.displayDuration;
  const b = e_displayDuration === undefined ? 350 : e_displayDuration;
  const e_spaceBetween = e.spaceBetween;
  const k = e_spaceBetween === undefined ? 0 : e_spaceBetween;
  const e_showLoading = e.showLoading;
  const showLoading = e_showLoading === undefined || e_showLoading;
  const e_loadingArea = e.loadingArea;
  const e_errorArea = e.errorArea;
  const e_showError = e.showError;
  const showError = e_showError === undefined || e_showError;
  const e_retryTime = e.retryTime;
  const e_staticLabel = e.staticLabel;
  const e_replaceFallbackWhenLoaded = e.replaceFallbackWhenLoaded;
  const e_scrollBezier = e.scrollBezier;
  const e_lazyloadCount = e.lazyloadCount;
  const lazyloadCount = e_lazyloadCount === undefined ? 1 : e_lazyloadCount;
  const e_swipeToClose = e.swipeToClose;
  const z = e_swipeToClose === undefined || e_swipeToClose;
  const e_extra = e.extra;
  const e_getMinScale = e.getMinScale;
  const e_getMaxScale = e.getMaxScale;
  const e_getDoubleClickScale = e.getDoubleClickScale;
  const e_getContainer = e.getContainer;
  const e_getThumbBounds = e.getThumbBounds;
  const e_renderIndicator = e.renderIndicator;
  const e_onChange = e.onChange;
  const e_onAfterChange = e.onAfterChange;
  const e_onImageClick = e.onImageClick;
  const e_onImageDoubleClick = e.onImageDoubleClick;
  const e_onImageLongTap = e.onImageLongTap;
  const e_close = e.close;
  const e_onClose = e.onClose;
  const e_onTouchStart = e.onTouchStart;
  const e_onTouchMove = e.onTouchMove;
  const e_onTouchEnd = e.onTouchEnd;
  const e_indicatorPos = e.indicatorPos;
  const indicatorPos = e_indicatorPos === undefined ? "start" : e_indicatorPos;
  const ec = _g(e, ee);
  const es = m.Jg();
  const edRef = s.useRef(null);
  const efRef = s.useRef([]);
  const emRef = s.useRef(null);
  const evRef = s.useRef([]);
  const epRef = s.useRef(null);
  const ehRef = s.useRef(null);
  const egRef = s.useRef([]);
  const eCRef = s.useRef(0);
  const eyRef = s.useRef(false);
  const exRef = s.useRef(false);
  const eERef = s.useRef(false);
  const ebRef = s.useRef(false);
  const ewRef = s.useRef(e_openIndex);
  const ekRef = s.useRef(0);
  const eNRef = s.useRef(0);
  const eTRef = s.useRef(false);
  const eRRef = s.useRef(false);
  const eS = s.useState({});
  const eI = eS[0];
  const eL = eS[1];
  const eM = m.oq([]);
  const eA = eM[0];
  const eF = eM[1];
  const eB = eM[2];
  const eO = s.useState(null);
  const eD = eO[0];
  const eW = eO[1];
  const eH = (n = eA[e_openIndex]) == null ? undefined : n.loaded;
  const eV = (r = eA[e_openIndex]) == null ? undefined : r.animated;
  const eP = e_openIndex >= 0 && e_openIndex < e_images.length;
  const ez = m.lW(true);
  const ez_windowWidth = ez.windowWidth;
  const ez_windowHeight = ez.windowHeight;
  function eG(e) {
    try {
      if (e) {
        document.body.removeChild(e);
      }
    } catch (e) {}
  }
  function eJ(e) {
    let t;
    const n = (t = efRef.current[e]) == null ? undefined : t.dom;
    const dom = n == null ? undefined : n.parentElement;
    if (n && dom) {
      if (evRef.current[e]) {
        evRef.current[e].setDom(dom);
      } else {
        evRef.current[e] = new $.A({
          dom,
          motionThreshold: 0,
          dragMode: "always",
          transformMode: "matrix",
          useDomBoundary: false,
          cubic: {
            scroll: e_scrollBezier,
          },
          onTransform: function () {
            let t;
            let n;
            let r;
            const o = egRef.current[e];
            const i =
              ((t = evRef.current[e]) == null || t.getTransform == null
                ? undefined
                : t.getTransform()) || {};
            const a = (n = eF.current[e]) == null ? undefined : n.originWidth;
            const l = (r = eF.current[e]) == null ? undefined : r.originHeight;
            const u = i.scale || 1;
            if (o && a && l && eNRef.current !== u) {
              eNRef.current = u;
              const c = ej(o) ? "" : " translateY(-50%)";
              o.style.width = `${a * u}px`;
              o.style.height = `${l * u}px`;
              const s = `scale(${1 / u}) translateZ(0)` + c;
              o.style.transform = s;
              o.style.webkitTransform = s;
              o.style.transformOrigin = "top left";
              o.style.webkitTransformOrigin = "top left";
            }
          },
          onRestore: function () {
            eNRef.current = 0;
          },
          onZoomEnd: function (t, n, r) {
            eL(function (t) {
              return _u({}, t, {
                [e]: false,
              });
            });
            const o = egRef.current[e];
            const i = evRef.current[e];
            if (o && i && !(i.getTransform().scale < 1)) {
              const a = o.getBoundingClientRect();
              if (a.width > ez_windowWidth && a.height > ez_windowHeight) {
                if (r && r.length) {
                  i.setCenter.apply(i, r);
                }
                i.setFixedX(false);
                i.setFixedY(false);
              } else if (a.height <= ez_windowHeight) {
                if (!i.fixedY) {
                  i.setFixedY(true);
                  i.bounce();
                }
              } else if (a.width <= ez_windowWidth && !i.fixedX) {
                i.setFixedX(true);
                i.bounce();
              }
            }
          },
          minScale: eU(e),
          maxScale: eX(e),
        });
      }
      ((e) => {
        const t = efRef.current[e];
        const n = t == null ? undefined : t.dom;
        if (n != null && n.parentElement && t != null && t.image) {
          const r = t.image.getBoundingClientRect();
          const o = n.parentElement.getBoundingClientRect();
          if (evRef.current[e]) {
            evRef.current[e].setBoundary(
              {
                left: Math.min(r.left, o.left),
                right: Math.max(r.right, o.right),
                top: Math.min(r.top, o.top),
                bottom: Math.max(r.bottom, o.bottom),
              },
              true,
            );
          }
        }
      })(e);
    }
  }
  function ej(e) {
    return !!(e && !e.classList.contains("preview-fit-contain-y"));
  }
  function eU(e) {
    const t = e === undefined ? ewRef.current : e;
    const n = egRef.current[t];
    if (n) {
      if (e_getMinScale) {
        return e_getMinScale(n, t);
      }
      return 0.7;
    }
    return 1;
  }
  function eX(e) {
    const t = e === undefined ? ewRef.current : e;
    const n = egRef.current[t];
    if (!n) {
      return 1;
    }
    if (e_getMaxScale) {
      return e_getMaxScale(n, t);
    }
    const n_naturalWidth = n.naturalWidth;
    const n_naturalHeight = n.naturalHeight;
    if (n_naturalWidth > n_naturalHeight) {
      return (n_naturalWidth / ez_windowWidth) * 5;
    }
    return Math.max(5, n_naturalWidth / ez_windowWidth);
  }
  function eK(e) {
    let t;
    const n = e === undefined ? ewRef.current : e;
    if ((t = evRef.current[n]) == null || t.busy == null) {
      return undefined;
    }
    return t.busy();
  }
  function e_() {
    const e = evRef.current[ewRef.current];
    const t = e == null || e.toLeft == null ? undefined : e.toLeft();
    const n = e == null || e.toRight == null ? undefined : e.toRight();
    return {
      side: !t || !n,
      left: !t,
      right: !n,
    };
  }
  function eZ(e) {
    if (e_onTouchStart && e_onTouchStart(e, ewRef.current)) {
      return true;
    }
    let t;
    const e_touches = e.touches;
    eCRef.current = e.touches && e.touches[0] ? e.touches[0].clientX : 0;
    exRef.current = false;
    eERef.current = false;
    if (e_touches.length === 1) {
      if (!eTRef.current) {
        ebRef.current = true;
      }
      epRef.current = window.setTimeout(function () {
        if (ebRef.current) {
          ebRef.current = false;
          exRef.current = true;
          if (e_onImageLongTap) {
            e_onImageLongTap(ewRef.current, egRef.current[ewRef.current], e);
          }
        }
      }, 300);
    } else {
      ebRef.current = false;
    }
    if (
      (t = evRef.current[ewRef.current]) == null || t.isTapStop == null
        ? undefined
        : t.isTapStop()
    ) {
      exRef.current = true;
    }
    if (eK()) {
      eyRef.current = e_().side;
      return !eyRef.current;
    }
  }
  function eQ(e) {
    exRef.current = true;
    ebRef.current = false;
    if (epRef.current) {
      clearTimeout(epRef.current);
    }
    if (e_onTouchMove && e_onTouchMove(e, ewRef.current)) {
      return true;
    }
    const t = (e.changedTouches[0].clientX || 0) - eCRef.current;
    if (eK()) {
      const n = e_();
      return !eyRef.current || !((n.left && t > 0) || (n.right && t < 0));
    }
  }
  function e$(e) {
    if (e_onTouchEnd && e_onTouchEnd(e, ewRef.current)) {
      return true;
    }
    let t;
    const n =
      z &&
      ekRef.current >=
        ((
          (t = evRef.current[ewRef.current]) == null || t.dirty == null
            ? undefined
            : t.dirty()
        )
          ? 6
          : 3);
    ekRef.current = 0;
    ebRef.current = false;
    if (epRef.current) {
      clearTimeout(epRef.current);
    }
    if (n) {
      e2(e);
      return true;
    }
    return (!!eK() && !e_().side) || undefined;
  }
  function onDoubleClick(e) {
    if (!eERef.current) {
      eERef.current = true;
      const t = ewRef.current;
      if (e_onImageDoubleClick) {
        e_onImageDoubleClick(t, e);
      }
      const n = evRef.current[t];
      if (n) {
        const r = ((e) => {
          const ewRef_current = ewRef.current;
          const n = egRef.current[ewRef_current];
          if (!n) {
            return 1;
          }
          const r = eX(ewRef_current);
          if (e_getDoubleClickScale) {
            return e_getDoubleClickScale(e, r, n, ewRef_current);
          }
          const n_naturalWidth = n.naturalWidth;
          const n_naturalHeight = n.naturalHeight;
          const a =
            n_naturalWidth > n_naturalHeight
              ? ((n_naturalWidth / ez_windowWidth) * ez_windowHeight) /
                n_naturalHeight
              : 1;
          let l = 2;
          if (a >= 2) {
            l = Math.min(r, a);
          }
          const u = Number(e.toFixed(3));
          const c = Number(l.toFixed(3));
          if (u >= 1 && u < c) {
            return c;
          }
          return 1;
        })(n.getTransform().scale || 1);
        if (r === 1) {
          if (ej(egRef.current[t])) {
            n.zoomToScreenCenter(1, [ez_windowWidth / 2, ez_windowHeight / 2], {
              duration: 200,
              callback: function () {
                return n.restore();
              },
            });
          } else {
            n.bounce();
            n.restore();
          }
        } else {
          n.zoomToScreenCenter(r, [ez_windowWidth / 2, ez_windowHeight / 2], {
            duration: 200,
            silent: false,
          });
        }
      }
    }
  }
  s.useImperativeHandle(t, function () {
    return {
      dom: edRef.current,
      imageDoms: egRef.current,
    };
  });
  m.Lu(
    eP,
    edRef.current,
    function () {
      return [];
    },
    "top",
    function (e, t) {
      if (!(eK() || t !== "y")) {
        ekRef.current += 1;
      }
    },
  );
  s.useEffect(
    function () {
      if (eP) {
        ewRef.current = e_openIndex;
        eTRef.current = false;
        if (emRef.current) {
          emRef.current.changeIndex(e_openIndex, true);
        }
        eB(
          e_images.map((e, t) => {
            let n;
            return {
              firstLoaded:
                ((n = eF.current[t]) == null ? undefined : n.firstLoaded) ||
                false,
              animated: t !== e_openIndex,
            };
          }),
        );
        ((e) => {
          let t;
          let n;
          let movingImage;
          let o;
          let i;
          const l = (i = eF.current[e]) == null ? undefined : i.firstLoaded;
          const u =
            e_replaceFallbackWhenLoaded && l
              ? e_images[e].src
              : e_images[e].fallbackSrc;
          if (!e_getThumbBounds || !e_images[e] || !u) {
            return e5(e);
          }
          const s = e_getThumbBounds(e);
          if (!s || !s.width || !s.height) {
            return e5(e);
          }
          const f = new Image();
          ehRef.current = f;
          f.classList.add("image-preview-fake-trans-image");
          e6(f, s, s);
          f.src = u;
          f.style.objectPosition = e_images[e].thumbPosition || "top center";
          f.style.opacity = "0";
          f.style.transitionDuration = b + "ms";
          f.style.webkitTransitionDuration = b + "ms";
          document.body.appendChild(f);
          t = e;
          n = u;
          movingImage = f;
          o = function (t) {
            if (!t || !t.width || !t.height) {
              eG(f);
              e5(e);
              return;
            }
            d.dY(function () {
              f.style.opacity = "1";
              e6(f, t, s);
              setTimeout(
                () => {
                  eL(function (t) {
                    return _u({}, t, {
                      [e]: true,
                    });
                  });
                },
                Math.max(0, b - 80),
              );
              setTimeout(() => {
                e5(e);
              }, b + 30);
            });
          };
          if (n) {
            eW({
              src: n,
              fit: e_images[t].fit,
              index: t,
              movingImage,
              onLoad: function (e, t) {
                setTimeout(() => {
                  o(t.getBoundingClientRect());
                }, 20);
              },
              onError: function () {
                return o(null);
              },
            });
          } else {
            o(null);
          }
        })(e_openIndex);
      } else {
        if (epRef.current) {
          clearTimeout(epRef.current);
        }
        ebRef.current = false;
        eB(
          eF.current.map((e) =>
            _u({}, e, {
              animated: false,
              loaded: false,
            }),
          ),
        );
        evRef.current = [];
        eG(document.querySelector(".image-preview-fake-trans-image"));
        eW(null);
        eL({});
        const e = eRRef.current;
        setTimeout(() => {
          if (e && e_onClose) {
            e_onClose();
          }
        }, b);
      }
      eRRef.current = true;
    },
    [eP],
  );
  s.useEffect(
    function () {
      if (eP && eH && eV) {
        setTimeout(() => {
          eG(ehRef.current);
          ehRef.current = null;
        }, 100);
      }
    },
    [eP, eH, eV],
  );
  s.useEffect(
    function () {
      if (eD) {
        d.gC();
      } else {
        d.dY(function () {
          d.ic();
        });
      }
    },
    [eD],
  );
  s.useEffect(
    function () {
      (evRef.current || []).forEach((e, t) => {
        if (e) {
          e.setMinScale(eU(t));
        }
      });
    },
    [e_getMinScale],
  );
  s.useEffect(
    function () {
      (evRef.current || []).forEach((e, t) => {
        if (e) {
          e.setMaxScale(eX(t));
        }
      });
    },
    [e_getMaxScale],
  );
  const e1 = m.MD(function (e) {
    if (!exRef.current) {
      if (
        !(eERef.current || (e_onImageClick && e_onImageClick(ewRef.current, e)))
      ) {
        e2(e);
      }
    }
  }, onDoubleClick);
  function e2(e) {
    if (!eTRef.current) {
      eTRef.current = true;
      e_close(e);
    }
  }
  function e3(e, t) {
    eB(function (n) {
      const r = n.slice();
      r[e] = _u({}, r[e] || {}, t);
      return r;
    });
  }
  function e5(e) {
    e3(e, {
      animated: true,
    });
    eW(null);
  }
  function e6(e, t, n) {
    e.style.width = n.width + "px";
    const r =
      "translate3d(" +
      t.left +
      "px, " +
      t.top +
      "px, 0) scale(" +
      t.width / n.width;
    e.style.transform = r;
    e.style.webkitTransform = r;
    e.style.transformOrigin = "left top";
    e.style.webkitTransformOrigin = "left top";
  }
  function e4(e, t, n) {
    return s.createElement(
      L.A,
      _u(
        {
          autoPlay: false,
          loop,
          lazyloadCount,
          stopPropagation: false,
        },
        e,
      ),
      (t || []).map((e, t) => {
        const r = s.createElement(
          "div",
          {
            key: t,
            className: "preview-image-wrap",
            style: {
              padding: "0 " + k + "px",
            },
          },
          s.createElement(
            F.A,
            _u(
              {
                className: "preview-image",
                fit: e.fit || e_fit || "preview-y",
                boxWidth: ez_windowWidth - 2 * k,
                boxHeight: ez_windowHeight,
                bottomOverlap: null,
              },
              n(e, t),
            ),
          ),
        );
        if (e.extraNode) {
          return s.createElement(
            "div",
            {
              className: "preview-image-wrap-container",
              key: "outer-" + t,
            },
            r,
            e.extraNode,
          );
        }
        return r;
      }),
    );
  }
  function renderIndicator(e, t, n) {
    if (e_renderIndicator) {
      return e_renderIndicator(e, t, n);
    }
    if (eH) {
      return s.createElement(
        A_1,
        {
          getContainer: e_getContainer,
        },
        s.createElement(
          "div",
          {
            className: "image-preview-indicator",
          },
          e + 1,
          "/",
          t,
        ),
      );
    }
    return null;
  }
  return s.createElement(f.Wb, null, function (e) {
    const e_prefixCls = e.prefixCls;
    return s.createElement(
      A_1,
      {
        getContainer: e_getContainer,
      },
      s.createElement(
        A_2,
        {
          in: eP,
          timeout: b,
          type: "fade",
          mountOnEnter: true,
          unmountOnExit: true,
          nodeRef: edRef,
        },
        s.createElement(
          "div",
          {
            className: d.xF(
              e_prefixCls + "-image-preview",
              "all-border-box",
              {
                noselect,
              },
              e_className,
            ),
            style: e_style,
            ref: edRef,
            onClick: e1,
            onDoubleClick,
          },
          e4(
            _u(
              {
                indicatorPos,
                initialIndex: e_openIndex,
                ref: emRef,
                renderIndicator,
                onChange: function (e) {
                  ewRef.current = e;
                  if (e_onChange) {
                    e_onChange(e);
                  }
                },
                onAfterChange: function (e, t) {
                  let n;
                  if (e_onAfterChange) {
                    e_onAfterChange(e);
                  }
                  if ((n = evRef.current[t])) {
                    n.restore();
                  }
                  d.dY(function () {
                    eJ(ewRef.current);
                  });
                },
                onTouchMove: eQ,
                onTouchStart: eZ,
                onTouchEnd: e$,
              },
              ec,
            ),
            e_images,
            (e, t) => {
              let n;
              let r;
              let o;
              let i;
              let objectFit;
              let l;
              let width;
              let height;
              let h;
              let C;
              let y;
              return {
                src: e.src,
                ref: function (e) {
                  efRef.current[t] = e;
                },
                showLoading,
                loadingArea:
                  t === e_openIndex
                    ? s.createElement(
                        A_1,
                        {
                          getContainer: e_getContainer,
                        },
                        s.createElement(
                          "div",
                          {
                            className: "image-preview-loading-area",
                          },
                          e_loadingArea ||
                            s.createElement(A_3, {
                              type: "circle",
                              className: "loading-icon",
                              radius: 7,
                            }),
                        ),
                      )
                    : e_loadingArea,
                errorArea: e_errorArea,
                showError,
                retryTime: e_retryTime,
                staticLabel: e_staticLabel,
                animateDuration: eD ? 0 : undefined,
                style: {
                  overflow: "visible",
                },
                className:
                  ((r = (n = eA[t] || {}).loaded),
                  (o = n.animated),
                  d.xF("preview-image", {
                    "preview-hidden": t === e_openIndex && (!r || !o),
                  })),
                bottomOverlap:
                  ((i = e.fallbackSrc || e.src),
                  (objectFit = e.fit || e_fit),
                  (width = (l = eA[t] || {}).originWidth),
                  (height = l.originHeight),
                  (h = l.originLeft),
                  (C = l.originTop),
                  (y = l.hasOverflow
                    ? {}
                    : m.yx({
                        transform: "translateY(-50%)",
                      })),
                  es === "ios" && eI[t] && width && height
                    ? s.createElement("img", {
                        src: i,
                        style: _u(
                          {
                            position: "absolute",
                            width,
                            height,
                            left: h,
                            top: C,
                          },
                          objectFit
                            ? {
                                objectFit,
                              }
                            : {},
                          y,
                        ),
                      })
                    : null),
                onLoad: function (e, n) {
                  egRef.current[t] = n;
                  e3(t, {
                    loaded: true,
                    firstLoaded: true,
                    originWidth: n.offsetWidth,
                    originHeight: n.offsetHeight,
                    originTop: n.offsetTop,
                    originLeft: n.offsetLeft,
                    hasOverflow: ej(n),
                  });
                  if (t === e_openIndex) {
                    eJ(t);
                  } else {
                    eL(function (e) {
                      return _u({}, e, {
                        [t]: true,
                      });
                    });
                  }
                },
                onError: function () {
                  egRef.current[t] = null;
                  if (t === e_openIndex) {
                    eG(eD == null ? undefined : eD.movingImage);
                    e3(t, {
                      animated: true,
                      loaded: true,
                    });
                    eW(null);
                  }
                },
              };
            },
          ),
          eD
            ? s.createElement(
                "div",
                {
                  className: "image-preview-fake-rect",
                },
                e4(
                  {
                    initialIndex: 0,
                  },
                  [
                    {
                      src: eD.src,
                      fit: eD.fit,
                    },
                  ],
                  () => ({
                    staticLabel: e_staticLabel,
                    src: eD.src,
                    animateDuration: 0,
                    onLoad: eD.onLoad,
                    onError: eD.onError,
                  }),
                ),
              )
            : null,
          e_extra,
        ),
      ),
      eD
        ? s.createElement("div", {
            className: "image-preview-lock-modal",
            onClick: e2,
          })
        : null,
    );
  });
});
const en = f.qm(et);
d.DU(et, {
  open: function (e, t) {
    const n = _u(
      {
        unmountOnExit: true,
      },
      e || {},
      {
        close: function () {},
      },
    );
    const r = "_ARCO_IMAGE_PREVIEW_DIV_" + (n.key || "") + "_";
    const child = d.NJ(r, n.getContainer).child;
    let i = false;
    const render = new N.q(en, child, t).render;
    let l = _u({}, n, {
      getContainer: function () {
        return child;
      },
    });
    function u() {
      i = true;
      l.openIndex = -1;
      render(l);
    }
    l.close = u;
    l.onClose = function () {
      if (n.onClose) {
        n.onClose();
      }
      if (n.unmountOnExit) {
        d.Nz(child);
      }
    };
    l.openIndex = -1;
    render(l);
    setTimeout(() => {
      if (!i) {
        l.openIndex = n.openIndex;
        render(l);
      }
    }, 20);
    return {
      close: u,
      update: function (e) {
        render((l = _u({}, l, e || {})));
      },
    };
  },
});
const er = require("c8J");
const EoContext = s.createContext({
  sticky: true,
  getScrollContainer: function () {
    return null;
  },
  updateRef: function () {},
});
const ei = s.forwardRef(function (e, t) {
  let n;
  const e_index = e.index;
  const e_list = e.list;
  const e_className = e.className;
  const e_style = e.style;
  const e_children = e.children;
  const e_listKey = e.listKey;
  const e_onGroupItemClick = e.onGroupItemClick;
  const e_renderGroupItem = e.renderGroupItem;
  const e_renderStickyItem = e.renderStickyItem;
  const prefixCls = s.useContext(f.FI).prefixCls;
  const g = s.useContext(EoContext);
  const g_sticky = g.sticky;
  const g_getScrollContainer = g.getScrollContainer;
  const g_activeIndex = g.activeIndex;
  const g_updateRef = g.updateRef;
  const bRef = s.useRef(null);
  s.useImperativeHandle(t, function () {
    return {
      dom: bRef.current,
    };
  });
  const w = (e, t) => {
    let n;
    if ((n = e_listKey == null ? undefined : e_listKey(e, t)) != null) {
      return n;
    }
    return t;
  };
  return s.createElement(
    "div",
    {
      className: d.xF(prefixCls + "-index-bar-group", e_className),
      style: e_style,
      "data-index": e_index,
      ref: bRef,
    },
    (() => {
      if (e_renderStickyItem) {
        return e_renderStickyItem(e_index);
      }
      const t = s.createElement(
        "div",
        {
          className: d.xF(prefixCls + "-index-bar-group-title", {
            [prefixCls + "-index-bar-group-active"]: g_activeIndex === e_index,
          }),
        },
        e_index,
      );
      const bRef_current = bRef.current;
      if (g_sticky) {
        return s.createElement(
          p,
          {
            getContainer: function () {
              return bRef_current;
            },
            stickyStyle: "absolute",
            getScrollContainer: g_getScrollContainer,
            ref: function (e) {
              return e && g_updateRef(e_index, e);
            },
          },
          t,
        );
      }
      return t;
    })(),
    (n =
      e_children != null
        ? e_children
        : e_list == null
          ? undefined
          : e_list.map((e, t) =>
              s.createElement(
                "div",
                {
                  className: prefixCls + "-index-bar-group-item",
                  key: w(e, t),
                  onClick: function () {
                    if (e_onGroupItemClick == null) {
                      return undefined;
                    }
                    return e_onGroupItemClick(e_index, e, t);
                  },
                },
                e_renderGroupItem
                  ? e_renderGroupItem(e_index, e, t)
                  : e.content,
              ),
            )) != null
      ? n
      : null,
  );
});
function EaComponent(e) {
  const e_indexes = e.indexes;
  const e_prefixCls = e.prefixCls;
  const e_onTouching = e.onTouching;
  const e_onClick = e.onClick;
  const e_activeIndex = e.activeIndex;
  const e_tipType = e.tipType;
  const e_renderSideBar = e.renderSideBar;
  const e_renderSideBarItem = e.renderSideBarItem;
  const f = e_renderSideBarItem === undefined ? (e) => e : e_renderSideBarItem;
  const e_renderTip = e.renderTip;
  const v = s.useState(false);
  const p = v[0];
  const h = v[1];
  const g = (e) => {
    h(e);
    e_onTouching(e);
  };
  const C = () => g(false);
  const y = (e, t) => {
    if (e_renderTip) {
      return e_renderTip(e);
    }
    return s.createElement(
      "div",
      {
        className: e_prefixCls + "-index-bar-sidebar-" + t,
      },
      e,
    );
  };
  const x = s.createElement(
    "div",
    {
      className: d.xF(e_prefixCls + "-index-bar-sidebar", {
        [e_prefixCls + "-index-bar-sidebar-touching"]: p,
      }),
      onTouchStart: function () {
        return g(true);
      },
      onTouchEnd: function () {
        return C();
      },
      onTouchCancel: function () {
        return C();
      },
      onTouchMove: function (e) {
        if (p && (t = e.touches) != null && t.length) {
          var t;
          let n;
          const r = e.touches[0];
          const o = r.clientX;
          const a = r.clientY;
          const l = document.elementFromPoint(o, a);
          if (l && (n = l.dataset) != null && n.index) {
            e_onClick(l.dataset.index);
          }
        }
      },
    },
    e_tipType === "toast" && p && e_activeIndex && y(e_activeIndex, "toast"),
    e_indexes.map((e) =>
      s.createElement(
        "div",
        {
          className: d.xF(e_prefixCls + "-index-bar-sidebar-item", {
            [e_prefixCls + "-index-bar-sidebar-active"]: e_activeIndex === e,
          }),
          key: e,
          onTouchStart: function () {
            return e_onClick(e);
          },
          "data-index": e,
        },
        e_tipType === "sweat" && p && e_activeIndex === e && y(e, "sweat"),
        s.createElement(
          "div",
          {
            className: e_prefixCls + "-index-bar-sidebar-item-wrapper",
          },
          f(e),
        ),
      ),
    ),
  );
  if (e_renderSideBar) {
    return e_renderSideBar(x);
  }
  return x;
}
function el(e, t) {
  const n = typeof t;
  if (typeof e === n) {
    return e;
  }
  if (n === "number") {
    return Number(e);
  }
  return e.toString();
}
function eu(e) {
  return typeof e === "number" || typeof e === "string";
}
const ec = s.forwardRef(function (e, t) {
  let n;
  const e_className = e.className;
  const o = e_className === undefined ? "" : e_className;
  const e_style = e.style;
  const e_children = e.children;
  const e_sticky = e.sticky;
  const sticky = e_sticky === undefined || e_sticky;
  const e_groups = e.groups;
  const m = e_groups === undefined ? [] : e_groups;
  const e_tipType = e.tipType;
  const tipType = e_tipType === undefined ? "toast" : e_tipType;
  const e_defaultIndex = e.defaultIndex;
  const e_scrollBezier = e.scrollBezier;
  const e_scrollDuration = e.scrollDuration;
  const y = e_scrollDuration === undefined ? 0 : e_scrollDuration;
  const e_disableSidebar = e.disableSidebar;
  const E = e_disableSidebar !== undefined && e_disableSidebar;
  const e_onChange = e.onChange;
  const e_onGroupItemClick = e.onGroupItemClick;
  const e_renderSideBar = e.renderSideBar;
  const e_renderSideBarItem = e.renderSideBarItem;
  const e_renderTip = e.renderTip;
  const e_renderStickyItem = e.renderStickyItem;
  const e_renderGroupItem = e.renderGroupItem;
  const IRef = s.useRef(null);
  const LRef = s.useRef(null);
  n = [];
  s.Children.forEach(e_children, function (e) {
    if (s.isValidElement(e)) {
      n.push(e);
    } else {
      console.warn(
        "<IndexBar /> only accept <IndexBar.Group /> as the children",
      );
    }
  });
  const M = n;
  const indexes = s.useMemo(
    function () {
      if (m.length) {
        return m.map((e) => e.index);
      }
      return M.map((e) => e.props.index);
    },
    [e_children, m],
  );
  const FRef = s.useRef({});
  const B = s.useState(function () {
    if (e_defaultIndex != null) {
      return e_defaultIndex;
    }
    if (indexes == null) {
      return undefined;
    }
    return indexes[0];
  });
  const O = B[0];
  const D = B[1];
  const W = s.useMemo(
    function () {
      return {
        sticky,
        getScrollContainer: function () {
          return LRef.current;
        },
        activeIndex: O,
        updateRef: function (e, t) {
          FRef.current[e] = t;
        },
      };
    },
    [sticky, O],
  );
  const HRef = s.useRef(false);
  const V = (e, t) => {
    D(function (n) {
      const r = el(e, n);
      if (r !== n) {
        if (e_onChange != null) {
          e_onChange(r, t);
        }
      }
      return r;
    });
  };
  const P = (e) => {
    const e_index = e.index;
    const e_type = e.type;
    const e_rightNow = e.rightNow;
    const o =
      e_index != null ? e_index : indexes == null ? undefined : indexes[0];
    const LRef_current = LRef.current;
    if (eu(e_index) && LRef_current) {
      const a = ((e, t) => {
        let n = null;
        for (let r = e.children, o = 0; o < r.length; o++) {
          const i = r[o];
          const a = i == null ? undefined : i.dataset;
          if (a && a.index && el(a.index, t) === t) {
            n = i;
            break;
          }
        }
        return n;
      })(LRef_current, o);
      if (a) {
        V(o, e_type);
        const l = e_rightNow !== undefined && e_rightNow ? 0 : y;
        const u = a.offsetTop;
        if (e_type === "manual") {
          HRef.current = true;
          setTimeout(() => {
            HRef.current = false;
          }, l);
        }
        if (l > 0) {
          d.YU(
            LRef_current.scrollTop,
            u,
            function (e) {
              return (LRef_current.scrollTop = e);
            },
            l,
            e_scrollBezier,
          );
        } else {
          LRef_current.scrollTop = u;
        }
      }
    }
  };
  s.useImperativeHandle(t, function () {
    return {
      dom: IRef.current,
      scrollToIndex: function (e, rightNow) {
        if (eu(e)) {
          P({
            index: e,
            rightNow,
            type: "manual",
          });
        }
      },
      recalculatePosition: function (e) {
        const t = e != null ? e : O;
        if (t) {
          const n = FRef.current[t];
          if (n && n.recalculatePosition) {
            n.recalculatePosition();
          }
        }
      },
    };
  });
  s.useEffect(function () {
    let e;
    const t = er.A(function () {
      if (LRef.current && !HRef.current) {
        const e = LRef.current.scrollTop;
        for (let t = 0; t < LRef.current.children.length; t++) {
          const child = LRef.current.children[t];
          if (
            child &&
            child.dataset &&
            child.dataset.index !== undefined &&
            child.offsetTop + child.clientHeight >= e
          ) {
            V(child.dataset.index, "swipe");
            break;
          }
        }
      }
    }, 100);
    if (O) {
      P({
        index: O,
        rightNow: true,
        type: "manual",
      });
    }
    if ((e = LRef.current) != null) {
      e.addEventListener("scroll", t);
    }
    return function () {
      let e;
      if ((e = LRef.current) != null) {
        e.removeEventListener("scroll", t);
      }
    };
  }, []);
  return s.createElement(f.Wb, null, function (e) {
    const e_prefixCls = e.prefixCls;
    return s.createElement(
      EoContext.Provider,
      {
        value: W,
      },
      s.createElement(
        "div",
        {
          className: d.xF(e_prefixCls + "-index-bar", o),
          style: e_style,
          ref: IRef,
        },
        s.createElement(
          "div",
          {
            className: e_prefixCls + "-index-bar-container",
            ref: LRef,
          },
          M.length
            ? M
            : m == null
              ? undefined
              : m.map((e) =>
                  s.createElement(ei, {
                    index: e.index,
                    key: e.index,
                    list: e.list,
                    onGroupItemClick: e_onGroupItemClick,
                    renderGroupItem: e_renderGroupItem,
                    renderStickyItem: e_renderStickyItem,
                  }),
                ),
        ),
        !E &&
          s.createElement(EaComponent, {
            tipType,
            activeIndex: O,
            prefixCls: e_prefixCls,
            indexes,
            onTouching: function (e) {
              return (HRef.current = e);
            },
            onClick: function (index) {
              return P({
                index,
                type: "sidebar",
              });
            },
            renderSideBar: e_renderSideBar,
            renderSideBarItem: e_renderSideBarItem,
            renderTip: e_renderTip,
          }),
      ),
    );
  });
});
function useEs(e, t) {
  const e_value = e.value;
  const e_defaultValue = e.defaultValue;
  const e_validator = e.validator;
  const e_onChange = e.onChange;
  const e_onInput = e.onInput;
  const e_className = e.className;
  const e_style = e.style;
  const e_label = e.label;
  const e_required = e.required;
  const e_prepend = e.prepend;
  const e_append = e.append;
  const e_blurBeforeFocus = e.blurBeforeFocus;
  const e_onKeyDown = e.onKeyDown;
  const e_onPressEnter = e.onPressEnter;
  const e_onFocus = e.onFocus;
  const e_onBlur = e.onBlur;
  const e_onClick = e.onClick;
  const e_disabled = e.disabled;
  const e_border = e.border;
  const N = e_border === undefined ? "half" : e_border;
  const e_prefix = e.prefix;
  const e_suffix = e.suffix;
  const e_clearable = e.clearable;
  const e_clearShowType = e.clearShowType;
  const L = e_clearShowType === undefined ? "focus" : e_clearShowType;
  const e_clearIcon = e.clearIcon;
  const A = e_clearIcon === undefined ? s.createElement(G, null) : e_clearIcon;
  const e_preventEventWhenClearing = e.preventEventWhenClearing;
  const B =
    e_preventEventWhenClearing === undefined || e_preventEventWhenClearing;
  const e_onClear = e.onClear;
  const e_autoFocus = e.autoFocus;
  const e_blockChangeWhenCompositing = e.blockChangeWhenCompositing;
  const H = s.useState(e_value || e_defaultValue || "");
  const V = H[0];
  const P = H[1];
  const z = s.useState(function () {
    return L === "always" || (L === "value" && !!(e_value || e_defaultValue));
  });
  const q = z[0];
  const Y = z[1];
  const JRef = s.useRef(false);
  const j = s.useState(false);
  const U = j[0];
  const X = j[1];
  const KRef = s.useRef(false);
  const inputValue = e_value !== undefined ? e_value : V;
  const Z = m.Jg();
  const QRef = s.useRef(null);
  const $ = Z === "ios" && e_blockChangeWhenCompositing;
  function ee(e, t = function () {}) {
    if (e && e_validator) {
      if (typeof e_validator === "function") {
        if (!e_validator(e)) {
          return;
        }
      } else if (!e_validator.test(e)) {
        return;
      }
    }
    if (L === "value" && e_value === undefined) {
      Y(!!e);
    }
    P(e);
    t();
  }
  function handleChange(e) {
    if (!$ || !JRef.current) {
      const t = e.target.value;
      ee(t, function () {
        if (e_onChange) {
          e_onChange(e, t);
        }
      });
    }
  }
  function en(e) {
    if (e_clearable && q) {
      ee("", function () {
        if (e_onClear) {
          e_onClear(e);
        }
        if (U) {
          if (B) {
            KRef.current = true;
            setTimeout(() => {
              KRef.current = false;
            }, 200);
          }
          d.dY(function () {
            if (t.current) {
              t.current.focus();
            }
          });
        }
      });
    }
  }
  function er(e) {
    if (typeof e === "function") {
      return e(U, inputValue);
    }
    return e;
  }
  s.useEffect(function () {
    if (e_autoFocus) {
      setTimeout(() => {
        if (t.current) {
          t.current.focus();
        }
      }, 200);
    }
  }, []);
  s.useEffect(
    function () {
      const e = function () {
        JRef.current = true;
      };
      const n = function (e) {
        JRef.current = false;
        handleChange(e);
      };
      if (t.current && $) {
        t.current.addEventListener("compositionstart", e);
        t.current.addEventListener("compositionend", n);
      }
      return function () {
        if (t.current && $) {
          t.current.removeEventListener("compositionstart", e);
          t.current.removeEventListener("compositionend", n);
        }
      };
    },
    [$],
  );
  s.useEffect(
    function () {
      if (L === "value" && e_value !== undefined) {
        Y(!!e_value);
      }
    },
    [e_value],
  );
  return {
    inputValue,
    handleChange,
    handleInput: function (e) {
      const value = e.target.value;
      ee(value, function () {
        if (e_onInput) {
          e_onInput(e, value);
        }
      });
    },
    handleKeyDown: function (e) {
      if (e.keyCode === 13 && e_onPressEnter) {
        e_onPressEnter(e);
      }
      if (e_onKeyDown) {
        e_onKeyDown(e);
      }
    },
    handleFocus: function (e) {
      if (B && KRef.current) {
        KRef.current = false;
        return;
      }
      X(true);
      if (L === "focus") {
        Y(true);
      }
      if (e_onFocus) {
        e_onFocus(e);
      }
    },
    handleBlur: function (e) {
      if (!(B && KRef.current)) {
        X(false);
        if (L === "focus") {
          Y(false);
        }
        if (e_onBlur) {
          e_onBlur(e);
        }
      }
    },
    handleClick: function (e) {
      if (e_blurBeforeFocus && Z === "android" && !U) {
        if (t.current) {
          t.current.blur();
        }
        d.dY(function () {
          if (t.current) {
            t.current.focus();
          }
        });
      } else if (t.current) {
        t.current.focus();
      }
      if (e_onClick) {
        e_onClick(e);
      }
    },
    renderWrapper: function (e, t, n) {
      const o = {
        [Z === "pc" ? "onMouseDown" : "onTouchEnd"]: en,
      };
      return s.createElement(
        "div",
        {
          role: "search",
          className: e + "-container all-border-box " + (e_className || ""),
          style: e_style,
          ref: QRef,
        },
        er(e_prepend),
        s.createElement(
          "div",
          {
            className: d.xF(
              e + "-wrap",
              t,
              "border-" + N,
              Z,
              {
                disabled: e_disabled,
              },
              {
                prefix: e_prefix,
              },
              {
                suffix: e_suffix,
              },
            ),
          },
          e_label || e_prefix
            ? s.createElement(
                "div",
                {
                  className: e + "-prefix",
                },
                e_label
                  ? s.createElement(
                      "div",
                      {
                        className: d.xF(e + "-label", {
                          required: e_required,
                        }),
                      },
                      e_label,
                    )
                  : e_prefix,
              )
            : null,
          n,
          e_clearable && q
            ? s.createElement(
                "div",
                _u(
                  {
                    className: e + "-clear",
                  },
                  o,
                ),
                A,
              )
            : null,
          e_suffix
            ? s.createElement(
                "div",
                {
                  className: e + "-suffix",
                },
                e_suffix,
              )
            : null,
        ),
        er(e_append),
      );
    },
    wrapRef: QRef,
  };
}
d.DU(ec, {
  Group: ei,
});
const ed = s.forwardRef(function (e, t) {
  const n = e.id;
  const e_name = e.name;
  const e_maxLength = e.maxLength;
  const e_placeholder = e.placeholder;
  const e_readOnly = e.readOnly;
  const e_onKeyUp = e.onKeyUp;
  const e_onKeyPress = e.onKeyPress;
  const e_type = e.type;
  const v = e_type === undefined ? "text" : e_type;
  const e_disabled = e.disabled;
  const e_pattern = e.pattern;
  const e_inputClass = e.inputClass;
  const e_inputStyle = e.inputStyle;
  const e_nativeProps = e.nativeProps;
  const x = e_nativeProps === undefined ? {} : e_nativeProps;
  const e_ariaLabel = e.ariaLabel;
  const b = e_ariaLabel === undefined ? "" : e_ariaLabel;
  const wRef = s.useRef(null);
  const k = useEs(e, wRef);
  const k_inputValue = k.inputValue;
  const k_handleChange = k.handleChange;
  const k_handleInput = k.handleInput;
  const k_handleKeyDown = k.handleKeyDown;
  const k_handleFocus = k.handleFocus;
  const k_handleBlur = k.handleBlur;
  const k_handleClick = k.handleClick;
  const k_renderWrapper = k.renderWrapper;
  const k_wrapRef = k.wrapRef;
  s.useImperativeHandle(t, function () {
    return {
      dom: k_wrapRef.current,
      input: wRef.current,
    };
  });
  return s.createElement(f.Wb, null, function (e) {
    const t = e.prefixCls + "-input";
    return k_renderWrapper(
      t,
      v,
      s.createElement(
        "input",
        _u({}, x, {
          id: n,
          name: e_name,
          maxLength: e_maxLength,
          placeholder: e_placeholder,
          readOnly: e_readOnly,
          onFocus: k_handleFocus,
          onBlur: k_handleBlur,
          onKeyUp: e_onKeyUp,
          onKeyPress: e_onKeyPress,
          ref: wRef,
          className: d.xF(t, e_inputClass),
          style: e_inputStyle,
          value: k_inputValue,
          type: v,
          disabled: e_disabled,
          pattern: e_pattern,
          onChange: k_handleChange,
          onInput: k_handleInput,
          onKeyDown: k_handleKeyDown,
          onClick: k_handleClick,
          "aria-disabled": e_disabled,
          "aria-label": b,
        }),
      ),
    );
  });
});
d.DU(ed, "Input");
var ef = require("./module-vYF.js");
var em = require("./module-zE.js");
var ev = require("./module-M8U.js");
const ep = require("PC");
function eh(e, t) {
  return function (n, r) {
    const o =
      typeof n === "string"
        ? {
            content: n,
            type: "info",
          }
        : n;
    if (t !== undefined) {
      o.type = t;
    }
    const i = document.createElement("div");
    const o_getContainer = o.getContainer;
    if (o_getContainer) {
      o_getContainer().appendChild(i);
    } else {
      document.body.appendChild(i);
    }
    const l = new N.q(e, i, r);
    const l_render = l.render;
    const l_unmount = l.unmount;
    var f = _u({}, o, {
      close,
      onClose: function () {
        const o_onClose = o.onClose;
        if (o_onClose) {
          o_onClose();
        }
        l_unmount();
        if (i.parentNode) {
          i.parentNode.removeChild(i);
        }
      },
      getContainer: function () {
        return i;
      },
      visible: false,
    });
    var m = false;
    function close() {
      m = true;
      f.visible = false;
      l_render(f);
    }
    l_render(f);
    d.dY(function () {
      if (!m) {
        f.visible = true;
        l_render(f);
      }
    });
    return {
      update: function (e) {
        l_render((f = _u({}, f, e)));
      },
      close,
    };
  };
}
const eg = s.forwardRef(function (e, t) {
  const e_className = e.className;
  const r = e_className === undefined ? "" : e_className;
  const e_style = e.style;
  const e_visible = e.visible;
  const a = e_visible !== undefined && e_visible;
  const e_transitionDuration = e.transitionDuration;
  const u = e_transitionDuration === undefined ? 300 : e_transitionDuration;
  const e_content = e.content;
  const e_duration = e.duration;
  const h = e_duration === undefined ? 3000 : e_duration;
  const e_onClose = e.onClose;
  const e_type = e.type;
  const y = e_type === undefined ? "info" : e_type;
  const e_close = e.close;
  const e_getContainer = e.getContainer;
  const bRef = s.useRef(null);
  const wRef = s.useRef(null);
  const kRef = s.useRef();
  const NRef = s.useRef();
  const T = s.useState(!a);
  const R = T[0];
  const S = T[1];
  const I = s.useState(0);
  const L = I[0];
  const M = I[1];
  function updateLayout() {
    if (wRef.current) {
      M(wRef.current.getBoundingClientRect().height);
    }
  }
  s.useImperativeHandle(t, function () {
    return {
      dom: bRef.current,
      updateLayout,
    };
  });
  s.useEffect(
    function () {
      if (a) {
        updateLayout();
      }
      if (a && h) {
        clearTimeout(kRef.current);
        kRef.current = window.setTimeout(function () {
          if (e_close != null) {
            e_close();
          }
        }, h);
      }
      return function () {
        if (a) {
          clearTimeout(kRef.current);
        }
      };
    },
    [a, h],
  );
  m.w5(
    function () {
      if (!a) {
        NRef.current = window.setTimeout(function () {
          if (e_onClose) {
            e_onClose();
          }
        }, u);
      }
    },
    [a],
  );
  s.useEffect(function () {
    d.dY(function () {
      S(true);
    });
    return function () {
      clearTimeout(NRef.current);
    };
  }, []);
  const F = (e) => {
    let t;
    return s.createElement(
      "div",
      {
        className: e + "-notify " + e + "-notify-" + y + " " + r,
        style: _u(
          {},
          e_style,
          R
            ? m.yx({
                transitionDuration: u + "ms",
              })
            : {},
          {
            height: a ? L : 0,
          },
        ),
        ref: bRef,
      },
      ((t = e + "-notify"),
      e_content
        ? s.createElement(
            "div",
            {
              className:
                t +
                "-content " +
                (a
                  ? t + "-content-transition-Y0"
                  : t + "-content-transition-Y100"),
              ref: wRef,
              style: _u(
                {},
                R
                  ? m.yx({
                      transitionDuration: u + "ms",
                    })
                  : {},
              ),
            },
            e_content,
          )
        : null),
    );
  };
  return s.createElement(f.Wb, null, function (e) {
    const e_prefixCls = e.prefixCls;
    if (e_getContainer) {
      return ep.createPortal(F(e_prefixCls), e_getContainer());
    }
    return F(e_prefixCls);
  });
});
const eC = f.qm(eg);
d.DU(eg, {
  info: eh(eC),
  success: eh(eC, "success"),
  error: eh(eC, "error"),
  warn: eh(eC, "warn"),
});
require("./module-ng_3.js");
require("./module-D7t.js");
const ey = [
  "menu",
  "menuLayout",
  "onSelect",
  "onClickMenuItem",
  "className",
  "useClickStatus",
  "clickStatusDuration",
  "clickSelfToClose",
  "touchSelfToClose",
  "defaultVisible",
  "visible",
  "onChange",
];
const ex = s.forwardRef(function (e, t) {
  let n;
  let r;
  let o;
  let i;
  const prefixCls = s.useContext(f.FI).prefixCls;
  const e_className = e.className;
  const e_needShadow = e.needShadow;
  const e_content = e.content;
  const e_direction = e.direction;
  const e_position = e.position;
  const e_minWidth = e.minWidth;
  const e_maxWidth = e.maxWidth;
  const e_arrowWidth = e.arrowWidth;
  const e_transformOrigin = e.transformOrigin;
  const e_mode = e.mode;
  const e_showCloseIcon = e.showCloseIcon;
  const b = e_showCloseIcon !== undefined && e_showCloseIcon;
  const e_textSuffix = e.textSuffix;
  const k = e_textSuffix === undefined ? null : e_textSuffix;
  const e_renderArrow = e.renderArrow;
  const e_onClickCloseIcon = e.onClickCloseIcon;
  const e_onClickTextSuffix = e.onClickTextSuffix;
  const SRef = s.useRef(null);
  const IRef = s.useRef(null);
  const L = m.pK(false);
  const show = L[0];
  const A = L[1];
  s.useImperativeHandle(t, function () {
    return {
      dom: SRef.current,
      content: IRef.current,
    };
  });
  s.useEffect(
    function () {
      const e_position_top = e_position.top;
      const e_position_bottom = e_position.bottom;
      const e_position_height = e_position.height;
      const e_position_left = e_position.left;
      const e_position_width = e_position.width;
      if (
        (e_position_left ||
          e_position_width ||
          e_position_top ||
          e_position_height ||
          e_position_bottom) &&
        !show
      ) {
        setTimeout(() => {
          A(true);
        }, 0);
      }
    },
    [e_position, show],
  );
  return s.createElement(
    "div",
    {
      ref: SRef,
      className: d.xF(
        prefixCls + "-popover-inner",
        "popover-inner",
        "all-border-box",
        e_mode + "-mode",
        e_className,
        {
          show,
          "with-shadow": e_needShadow,
          "with-suffix": b || k,
          "custom-content": typeof e_content !== "string",
        },
      ),
      style:
        ((n = e_position.top),
        (r = e_position.bottom),
        (o = {
          height: e_position.height + "px",
          left: e_position.left + "px",
          minWidth: e_minWidth,
          maxWidth: e_maxWidth,
        }),
        n ? (o.top = n + "px") : r && (o.bottom = r + "px"),
        (o.transformOrigin = e_transformOrigin.x + " " + e_transformOrigin.y),
        m.yx(o)),
    },
    s.createElement(
      "div",
      {
        className: "popover-bg",
      },
      e_renderArrow
        ? e_renderArrow({
            arrowWidth: e_arrowWidth,
            arrowLeft: e_position.arrowLeft,
            direction: e_direction,
          })
        : s.createElement(
            "div",
            {
              className: "popover-arrow " + e_direction,
              style: {
                width: e_arrowWidth,
                height: e_arrowWidth,
                marginLeft: (i = e_position.arrowLeft) ? i + "px" : null,
                marginRight: i ? i + "px" : null,
              },
            },
            s.createElement("div", {
              className: "popover-arrow-content",
            }),
          ),
    ),
    s.createElement(
      "div",
      {
        className: d.xF("popover-content", e_direction, {
          "show-close-icon": b,
        }),
        ref: IRef,
      },
      typeof e_content === "string"
        ? s.createElement(
            s.Fragment,
            null,
            s.createElement(
              "div",
              {
                className: "content-text",
              },
              e_content,
            ),
            b &&
              s.createElement(
                s.Fragment,
                null,
                s.createElement("div", {
                  className: "icon-divider",
                }),
                s.createElement(
                  "div",
                  {
                    className: "text-close-icon",
                    onClick: e_onClickCloseIcon,
                  },
                  s.createElement(P, null),
                ),
              ),
            k &&
              s.createElement(
                "div",
                {
                  className: "text-suffix",
                  onClick: e_onClickTextSuffix,
                },
                k,
              ),
          )
        : e_content,
    ),
  );
});
const eE = ["adjustOffset"];
const eb = {
  left: null,
  top: null,
  bottom: null,
  width: null,
  height: null,
  arrowLeft: 0,
};
const ew = {
  top: 14,
  right: 14,
  bottom: 14,
  left: 14,
};
const useEk = (e, eeRef, n, QRef) => {
  const e_direction = e.direction;
  const i = e_direction === undefined ? "topRight" : e_direction;
  const e_verticalOffset = e.verticalOffset;
  const l = e_verticalOffset === undefined ? 10 : e_verticalOffset;
  const e_horizontalOffset = e.horizontalOffset;
  const f = e_horizontalOffset === undefined ? 8 : e_horizontalOffset;
  const e_edgeOffset = e.edgeOffset;
  const p = e_edgeOffset === undefined ? 14 : e_edgeOffset;
  const e_arrowWidth = e.arrowWidth;
  const arrowWidth = e_arrowWidth === undefined ? 9 : e_arrowWidth;
  const e_mode = e.mode;
  const x = e_mode === undefined ? "follow" : e_mode;
  const e_useAutoDirection = e.useAutoDirection;
  const b = e_useAutoDirection === undefined || e_useAutoDirection;
  const w = s.useState(eb);
  const position = w[0];
  const N = w[1];
  const isCalcPosition = s.useMemo(
    function () {
      const k_top = position.top;
      const k_bottom = position.bottom;
      const k_height = position.height;
      const k_left = position.left;
      const k_width = position.width;
      return !k_left && !k_width && !k_top && !k_height && !k_bottom;
    },
    [position],
  );
  const R = s.useState({
    x: "0",
    y: "0",
  });
  const transformOrigin = R[0];
  const I = R[1];
  const L = m.oq(i);
  const M = L[0];
  const A = L[1];
  const F = L[2];
  const B = s.useCallback(
    function (e) {
      return m.Bu(d.Gv(p) ? p[e] : p, ew[e]);
    },
    [p],
  );
  const O = s.useCallback(
    function (e) {
      return m.Bu(d.Gv(b) ? b[e] : b, true);
    },
    [b],
  );
  function D(childRect, config) {
    let n;
    let o;
    let i;
    let a;
    let y_1;
    const s = ((e) => {
      let t;
      let n;
      let o;
      const e_childRect = e.childRect;
      const e_config = e.config;
      const u = _u({}, e_config, {
        adjustOffset: 0,
      });
      n = (t = {
        childRect: e_childRect,
        config: e_config,
      }).childRect;
      o = t.config;
      u.arrowLeft =
        M.indexOf("Left") !== -1 || M.indexOf("Right") !== -1
          ? (n.width - arrowWidth) / 2 + f
          : (o.width - arrowWidth) / 2;
      const screen_availWidth = screen.availWidth;
      const d = [B("top"), B("right"), B("bottom"), B("left")];
      const m = d[0];
      const v = d[1];
      const p = d[2];
      const h = d[3];
      const C = [O("vertical"), O("horizontal")];
      const y = C[0];
      if (C[1]) {
        if (M.indexOf("Right") !== -1) {
          let E = Number(e_config.width) - e_childRect.left - e_childRect.width;
          if (E > 0) {
            const b = E + h;
            u.left = Number(u.left) + b;
            u.arrowLeft += b;
            u.adjustOffset = b;
          }
          if (screen_availWidth - e_childRect.right < v) {
            const w = -((E = v) - (screen_availWidth - e_childRect.right));
            u.left = Number(u.left) + w;
            u.adjustOffset = w;
          }
        } else if (M.indexOf("Center") !== -1) {
          const k = (Number(e_config.width) - e_childRect.width) / 2;
          const N = k - (screen_availWidth - e_childRect.right);
          const T = k - e_childRect.left;
          if (N > 0) {
            const R = -(N + v);
            u.left = Number(u.left) + R;
            u.arrowLeft -= R;
            u.adjustOffset = R;
          }
          if (T > 0) {
            const S = T + h;
            u.left = Number(u.left) + S;
            u.arrowLeft -= S;
            u.adjustOffset = S;
          }
        } else if (M.indexOf("Left") !== -1) {
          let I =
            Number(e_config.width) -
            e_childRect.width -
            (screen_availWidth - e_childRect.right);
          if (I > 0) {
            const L = -(I + v);
            u.left = Number(u.left) + L;
            u.arrowLeft -= L;
            u.adjustOffset = L;
          }
          if (e_childRect.left < h) {
            I = h;
            u.left = Number(u.left) + I;
            u.adjustOffset = h;
          }
        }
      }
      if (y) {
        const A =
          e_childRect.bottom - (u.bottom && u.height ? u.bottom + u.height : 0);
        const F = e_childRect.top + (u.top && u.height ? u.top + u.height : 0);
        if (M.indexOf("top") !== -1 && A < m) {
          u.top = l + e_childRect.height;
          u.bottom = null;
          onAdjustDirection("bottom");
        } else if (M.indexOf("bottom") !== -1 && F + p > window.innerHeight) {
          u.top = null;
          u.bottom = l + e_childRect.height;
          onAdjustDirection("top");
        }
      }
      if (x === "global") {
        const D = QRef.current;
        if (!D) {
          return u;
        }
        const W = D.getBoundingClientRect();
        const H = W.top;
        const V = W.left;
        const P = W.bottom;
        if (u.left !== null) {
          u.left += V;
        }
        if (u.top !== null) {
          u.top += H;
        }
        if (u.bottom !== null) {
          u.bottom =
            (window.innerHeight || document.documentElement.clientHeight) -
            (P - u.bottom);
        }
      }
      return u;
    })({
      childRect,
      config,
    });
    const s_adjustOffset = s.adjustOffset;
    const m = _g(s, eE);
    I(
      ((n = m.arrowLeft),
      (o = m.width || 0),
      (i = m.height || 0),
      (a = arrowWidth / 2),
      o / 2,
      (y_1 = A.current.indexOf("top") > -1 ? `${a + i}px` : "-" + a + "px"),
      {
        x:
          A.current.indexOf("Left") > -1
            ? `${n + a}px`
            : A.current.indexOf("Right") > -1
              ? `${o - (n + a)}px`
              : `${o / 2 - s_adjustOffset}px`,
        y: y_1,
      }),
    );
    N(m);
  }
  s.useEffect(
    function () {
      F(i);
    },
    [i],
  );
  const W = function (e) {
    const e_popoverWidth = e.popoverWidth;
    const e_popoverHeight = e.popoverHeight;
    const e_childRect = e.childRect;
    const o = -(e_popoverWidth - e_childRect.width - f);
    const i = l + e_childRect.height;
    D(e_childRect, {
      left: o,
      width: e_popoverWidth,
      top: null,
      height: e_popoverHeight,
      bottom: i,
      arrowLeft: 0,
    });
  };
  const H = function (e) {
    const e_popoverWidth = e.popoverWidth;
    const e_popoverHeight = e.popoverHeight;
    const e_childRect = e.childRect;
    const o = -(e_popoverWidth - e_childRect.width) / 2;
    const i = l + e_childRect.height;
    D(e_childRect, {
      left: o,
      width: e_popoverWidth,
      top: null,
      height: e_popoverHeight,
      bottom: i,
      arrowLeft: 0,
    });
  };
  const V = function (e) {
    const e_popoverWidth = e.popoverWidth;
    const e_popoverHeight = e.popoverHeight;
    const e_childRect = e.childRect;
    const o = l + e_childRect.height;
    D(e_childRect, {
      left: -f,
      width: e_popoverWidth,
      top: null,
      height: e_popoverHeight,
      bottom: o,
      arrowLeft: 0,
    });
  };
  const P = function (e) {
    const e_popoverWidth = e.popoverWidth;
    const e_popoverHeight = e.popoverHeight;
    const e_childRect = e.childRect;
    const o = -(e_popoverWidth - e_childRect.width - f);
    const i = l + e_childRect.height;
    D(e_childRect, {
      left: o,
      width: e_popoverWidth,
      bottom: null,
      height: e_popoverHeight,
      top: i,
      arrowLeft: 0,
    });
  };
  const z = function (e) {
    const e_popoverWidth = e.popoverWidth;
    const e_popoverHeight = e.popoverHeight;
    const e_childRect = e.childRect;
    const o = -(e_popoverWidth - e_childRect.width) / 2;
    const i = l + e_childRect.height;
    D(e_childRect, {
      left: o,
      width: e_popoverWidth,
      bottom: null,
      height: e_popoverHeight,
      top: i,
      arrowLeft: 0,
    });
  };
  const q = function (e) {
    const e_popoverWidth = e.popoverWidth;
    const e_popoverHeight = e.popoverHeight;
    const e_childRect = e.childRect;
    const o = l + e_childRect.height;
    D(e_childRect, {
      left: -f,
      width: e_popoverWidth,
      bottom: null,
      height: e_popoverHeight,
      arrowLeft: 0,
      top: o,
    });
  };
  const computedChildAndPopoverOffset = s.useCallback(
    function () {
      let e;
      const r = (e = eeRef.current) == null ? undefined : e.content;
      if (r) {
        const popoverWidth = r.offsetWidth;
        const popoverHeight = r.offsetHeight;
        if (popoverWidth !== 0 && popoverHeight !== 0) {
          const a = n.current;
          if (a) {
            const l = {
              popoverWidth,
              popoverHeight,
              childRect: a.getBoundingClientRect(),
            };
            switch (M) {
              case "topRight":
                W(l);
                break;
              case "topCenter":
                H(l);
                break;
              case "topLeft":
                V(l);
                break;
              case "bottomRight":
                P(l);
                break;
              case "bottomCenter":
                z(l);
                break;
              case "bottomLeft":
                q(l);
            }
          }
        }
      }
    },
    [n, M, eeRef, W, H, V, P, z, q],
  );
  var onAdjustDirection = function (e) {
    if (M.indexOf(e) === -1) {
      const t = M.replace(/top|bottom/, e);
      F(t);
      A.current = t;
    }
  };
  const adjustVerticalDirection = s.useCallback(
    function () {
      const t_current = eeRef.current;
      if (t_current) {
        const n = t_current.content;
        if (n) {
          const r = n.getBoundingClientRect();
          const o = r.top;
          const i = r.bottom;
          if (
            (M.indexOf("top") !== -1 && o < B("top")) ||
            (M.indexOf("bottom") !== -1 && i + B("bottom") > window.innerHeight)
          ) {
            computedChildAndPopoverOffset();
          }
        }
      }
    },
    [M, eeRef, computedChildAndPopoverOffset, B],
  );
  return {
    direction: M,
    position,
    isCalcPosition,
    arrowWidth,
    transformOrigin,
    computedChildAndPopoverOffset,
    resetPosition: function () {
      N(eb);
      F(i);
    },
    onAdjustDirection,
    adjustVerticalDirection,
  };
};
let eN = 0;
const useET = (e, QRef, eeRef, ZRef, o, i) => {
  const e_clickOtherToClose = e.clickOtherToClose;
  const l = e_clickOtherToClose === undefined || e_clickOtherToClose;
  const e_touchOtherToClose = e.touchOtherToClose;
  const c =
    e_touchOtherToClose === undefined
      ? e.touchToClose !== undefined && e.touchToClose
      : e_touchOtherToClose;
  const e_duration = e.duration;
  const v = e_duration === undefined ? 0 : e_duration;
  const e_useAutoDirection = e.useAutoDirection;
  const h = e_useAutoDirection === undefined || e_useAutoDirection;
  const e_verticalScrollThrottle = e.verticalScrollThrottle;
  const C =
    e_verticalScrollThrottle === undefined ? 100 : e_verticalScrollThrottle;
  const e_preventBodyClick = e.preventBodyClick;
  const x = e_preventBodyClick !== undefined && e_preventBodyClick;
  const e_getVerticalScrollContainer = e.getVerticalScrollContainer;
  const b =
    e_getVerticalScrollContainer === undefined
      ? function () {
          return document;
        }
      : e_getVerticalScrollContainer;
  const wRef = s.useRef(0);
  const k = m.Bu(d.Gv(h) ? h.vertical : h, true);
  const popoverDisappear = function () {
    o(false);
    window.clearTimeout(wRef.current);
    wRef.current = 0;
    mayRemoveEventListenerOnBody();
  };
  const T = s.useMemo(
    function () {
      return er.A(i, C);
    },
    [i, C],
  );
  s.useEffect(
    function () {
      const e = b();
      if (ZRef.current && e && k) {
        e.addEventListener("scroll", T);
      }
      return function () {
        if (e) {
          e.removeEventListener("scroll", T);
        }
      };
    },
    [T, b, k, ZRef],
  );
  var mayRemoveEventListenerOnBody = s.useCallback(
    function () {
      document.body.removeEventListener("click", S, true);
      document.body.removeEventListener("touchstart", L);
      const e = b();
      if (e) {
        e.removeEventListener("scroll", T);
        e.removeEventListener("scroll", M);
      }
    },
    [T],
  );
  var S = s.useCallback(
    function (e) {
      let r;
      if (
        !(
          d.c5(QRef.current, e.target) ||
          d.c5(
            ((r = eeRef.current) == null ? undefined : r.dom) || null,
            e.target,
          )
        )
      ) {
        if (x) {
          e.stopPropagation();
          e.preventDefault();
        }
        popoverDisappear();
      }
    },
    [x],
  );
  const I = () => {
    clearTimeout(eN);
    const e = function e(t) {
      t.stopPropagation();
      t.preventDefault();
      document.body.removeEventListener("click", e, true);
      clearTimeout(eN);
    };
    document.body.addEventListener("click", e, true);
    eN = window.setTimeout(function () {
      document.body.removeEventListener("click", e, true);
    }, 500);
  };
  var L = s.useCallback(
    function (e) {
      let o;
      let i;
      let a;
      let l;
      if (
        (o = e.targetTouches[0]) != null &&
        o.target &&
        QRef.current &&
        (i = eeRef.current) != null &&
        i.dom &&
        ZRef.current
      ) {
        if (
          !(
            d.c5(
              QRef.current,
              (a = e.targetTouches[0]) == null ? undefined : a.target,
            ) ||
            d.c5(
              eeRef.current.dom,
              (l = e.targetTouches[0]) == null ? undefined : l.target,
            )
          )
        ) {
          if (x) {
            I();
          }
          popoverDisappear();
        }
      }
    },
    [x],
  );
  var M = s.useCallback(
    function () {
      if (ZRef.current && c) {
        popoverDisappear();
      }
    },
    [c],
  );
  s.useEffect(
    function () {
      const e = b();
      if (e && c && ZRef.current) {
        e.addEventListener("scroll", M);
      }
      return function () {
        if (e) {
          e.removeEventListener("scroll", M);
        }
      };
    },
    [M, c],
  );
  return {
    popoverDisappear,
    mayRemoveEventListenerOnBody,
    startCloseTimer: function () {
      if (v !== 0) {
        wRef.current = window.setTimeout(function () {
          o(false);
          mayRemoveEventListenerOnBody();
        }, v);
      }
    },
    mayAddEventOnBody: function () {
      if (c) {
        document.body.addEventListener("touchstart", L);
        const e = b();
        if (e) {
          e.addEventListener("scroll", M);
        }
      } else {
        if (l) {
          document.body.addEventListener("click", S, true);
        }
      }
    },
  };
};
const eR = s.forwardRef(function (e, t) {
  const e_className = e.className;
  const e_innerPopoverClassName = e.innerPopoverClassName;
  const o =
    e_innerPopoverClassName === undefined ? "" : e_innerPopoverClassName;
  const e_style = e.style;
  const e_theme = e.theme;
  const l = e_theme === undefined ? "black" : e_theme;
  const e_needShadow = e.needShadow;
  const needShadow = e_needShadow !== undefined && e_needShadow;
  const e_content = e.content;
  const p = e_content === undefined ? "" : e_content;
  const e_transitionTimeout = e.transitionTimeout;
  const C = e_transitionTimeout === undefined ? 300 : e_transitionTimeout;
  const e_minWidth = e.minWidth;
  const minWidth = e_minWidth === undefined ? "10px" : e_minWidth;
  const e_maxWidth = e.maxWidth;
  const maxWidth = e_maxWidth === undefined ? "90vw" : e_maxWidth;
  const e_transitionName = e.transitionName;
  const e_clickSelfToClose = e.clickSelfToClose;
  const N = e_clickSelfToClose === undefined || e_clickSelfToClose;
  const e_touchSelfToClose = e.touchSelfToClose;
  const R =
    e_touchSelfToClose === undefined
      ? e.touchToClose !== undefined && e.touchToClose
      : e_touchSelfToClose;
  const e_defaultVisible = e.defaultVisible;
  const I = e_defaultVisible !== undefined && e_defaultVisible;
  const e_visible = e.visible;
  const e_children = e.children;
  const e_bordered = e.bordered;
  const bordered = e_bordered === undefined ? e.theme === "white" : e_bordered;
  const e_showCloseIcon = e.showCloseIcon;
  const showCloseIcon = e_showCloseIcon !== undefined && e_showCloseIcon;
  const e_textSuffix = e.textSuffix;
  const textSuffix = e_textSuffix === undefined ? null : e_textSuffix;
  const e_mode = e.mode;
  const mode = e_mode === undefined ? "follow" : e_mode;
  const e_showMask = e.showMask;
  const e_maskTransitionTimeout = e.maskTransitionTimeout;
  const e_renderArrow = e.renderArrow;
  const e_onChange = e.onChange;
  const e_onClickCloseIcon = e.onClickCloseIcon;
  const e_onClickTextSuffix = e.onClickTextSuffix;
  const e_onClickMask = e.onClickMask;
  const prefixCls = s.useContext(f.FI).prefixCls;
  const X = s.useState(false);
  const K = X[0];
  const _ = X[1];
  const ZRef = s.useRef(K);
  const QRef = s.useRef(null);
  const $Ref = s.useRef(null);
  const eeRef = s.useRef(null);
  const etRef = s.useRef(null);
  const enRef = s.useRef(null);
  const er = useEk(e, eeRef, $Ref, QRef);
  const er_direction = er.direction;
  const er_position = er.position;
  const er_isCalcPosition = er.isCalcPosition;
  const er_transformOrigin = er.transformOrigin;
  const er_computedChildAndPopoverOffset = er.computedChildAndPopoverOffset;
  const er_arrowWidth = er.arrowWidth;
  const er_resetPosition = er.resetPosition;
  const er_adjustVerticalDirection = er.adjustVerticalDirection;
  const ef = function (e = true) {
    if (!e || er_isCalcPosition) {
      if (e_onChange != null) {
        e_onChange(e);
      }
      if (e_visible === undefined) {
        _(e);
      }
    }
  };
  const em = useET(e, QRef, eeRef, ZRef, ef, er_adjustVerticalDirection);
  const em_popoverDisappear = em.popoverDisappear;
  const em_mayAddEventOnBody = em.mayAddEventOnBody;
  const em_startCloseTimer = em.startCloseTimer;
  const em_mayRemoveEventListenerOnBody = em.mayRemoveEventListenerOnBody;
  function updatePosition() {
    if (K) {
      er_computedChildAndPopoverOffset();
    }
  }
  s.useImperativeHandle(t, function () {
    let e;
    return {
      dom: QRef.current,
      child: $Ref.current,
      innerPopover: eeRef.current,
      innerPopoverDom:
        ((e = eeRef.current) == null ? undefined : e.dom) || null,
      updatePosition,
    };
  });
  s.useEffect(function () {
    if (I || e_visible) {
      _(true);
    }
    return function () {
      em_mayRemoveEventListenerOnBody();
    };
  }, []);
  s.useEffect(
    function () {
      if (e_visible !== undefined) {
        _(!!e_visible);
      }
    },
    [e_visible],
  );
  s.useEffect(
    function () {
      if (ZRef.current) {
        er_computedChildAndPopoverOffset();
      }
    },
    [e_children, p, er_direction, mode],
  );
  s.useEffect(
    function () {
      if (K) {
        em_startCloseTimer();
        setTimeout(em_mayAddEventOnBody, 0);
        if (er_isCalcPosition) {
          setTimeout(() => {
            er_computedChildAndPopoverOffset();
          }, 0);
        }
      }
      ZRef.current = K;
      if (!K) {
        em_mayRemoveEventListenerOnBody();
        setTimeout(
          () => {
            if (!ZRef.current) {
              er_resetPosition();
            }
          },
          (typeof C === "object" ? C.exit : C) || 300,
        );
      }
    },
    [K],
  );
  const ey = () =>
    s.createElement(ex, {
      className: d.xF(l + "-theme", o, {
        bordered,
      }),
      ref: function (e) {
        eeRef.current = e;
        etRef.current = e == null ? undefined : e.dom;
      },
      direction: er_direction,
      minWidth,
      maxWidth,
      position: er_position,
      arrowWidth: er_arrowWidth,
      transformOrigin: er_transformOrigin,
      needShadow,
      content: p,
      mode,
      showCloseIcon,
      textSuffix,
      renderArrow: e_renderArrow,
      onClickCloseIcon: e_onClickCloseIcon,
      onClickTextSuffix: e_onClickTextSuffix,
    });
  return s.createElement(
    s.Fragment,
    null,
    e_showMask !== undefined &&
      e_showMask &&
      s.createElement(
        A_1,
        null,
        s.createElement(
          A_2,
          {
            in: K && !er_isCalcPosition,
            timeout:
              e_maskTransitionTimeout === undefined
                ? {
                    enter: 450,
                    exit: 240,
                  }
                : e_maskTransitionTimeout,
            nodeRef: enRef,
            type: "fade",
            mountOnEnter: true,
            unmountOnExit: true,
          },
          s.createElement("div", {
            className: prefixCls + "-popover-mask",
            onClick: e_onClickMask,
            ref: enRef,
          }),
        ),
      ),
    s.createElement(
      "div",
      {
        className: d.xF(
          prefixCls + "-popover",
          e_className === undefined ? "" : e_className,
          l + "-theme",
          mode + "-mode",
          {
            bordered,
            "custom-content": typeof p !== "string",
          },
        ),
        style: e_style === undefined ? {} : e_style,
        ref: QRef,
        onClick: function () {
          const ZRef_current = ZRef.current;
          if (ZRef_current) {
            if (ZRef_current && N && !R) {
              em_popoverDisappear();
            }
          } else {
            ef(true);
          }
        },
        onTouchStart: function () {
          if (R && ZRef.current) {
            em_popoverDisappear();
          }
        },
      },
      s.createElement(
        A_1,
        {
          getContainer: function () {
            if (mode === "global") {
              return document.body;
            }
            return QRef.current;
          },
        },
        K && er_isCalcPosition && ey(),
        s.createElement(
          A_2,
          {
            in: K && !er_isCalcPosition,
            timeout: C,
            type: e_transitionName === undefined ? "fade" : e_transitionName,
            nodeRef: etRef,
            mountOnEnter: true,
            unmountOnExit: true,
          },
          ey(),
        ),
      ),
      s.createElement(
        "div",
        {
          ref: $Ref,
          className: "popover-child-inner",
        },
        e_children,
      ),
    ),
  );
});
const Menu = s.forwardRef(function (e, t) {
  const e_menu = e.menu;
  const e_menuLayout = e.menuLayout;
  const o = e_menuLayout === undefined ? "vertical" : e_menuLayout;
  const e_onSelect = e.onSelect;
  const e_onClickMenuItem = e.onClickMenuItem;
  const e_className = e.className;
  const e_useClickStatus = e.useClickStatus;
  const v = e_useClickStatus !== undefined && e_useClickStatus;
  const e_clickStatusDuration = e.clickStatusDuration;
  const h = e_clickStatusDuration === undefined ? 300 : e_clickStatusDuration;
  const e_clickSelfToClose = e.clickSelfToClose;
  const e_touchSelfToClose = e.touchSelfToClose;
  const touchSelfToClose =
    e_touchSelfToClose === undefined
      ? e.touchToClose !== undefined && e.touchToClose
      : e_touchSelfToClose;
  const e_defaultVisible = e.defaultVisible;
  const e_visible = e.visible;
  const e_onChange = e.onChange;
  const k = _g(e, ey);
  const prefixCls = s.useContext(f.FI).prefixCls;
  const T = s.useState(-1);
  const R = T[0];
  const S = T[1];
  const IRef = s.useRef(0);
  const L = s.useMemo(
    function () {
      return e_menu.map((text) => {
        if (typeof text === "string") {
          return {
            text,
          };
        }
        return text;
      });
    },
    [e_menu],
  );
  const M = s.useState(
    e_visible === undefined
      ? e_defaultVisible !== undefined && e_defaultVisible
      : e_visible,
  );
  const A = M[0];
  const F = M[1];
  m.w5(
    function () {
      F(!!e_visible);
    },
    [e_visible],
  );
  const BRef = s.useRef(null);
  s.useImperativeHandle(t, function () {
    return BRef.current;
  });
  const O = s.useMemo(
    function () {
      return s.createElement(
        "div",
        {
          className: d.xF(prefixCls + "-popover-menu-content", o + "-menu"),
        },
        L.map((e, t) => {
          const r = typeof e.text === "string" ? e.text : "menu_item_" + t;
          const e_text = e.text;
          const e_value = e.value;
          const u = e_value === undefined ? r : e_value;
          const e_disabled = e.disabled;
          const f = e_disabled !== undefined && e_disabled;
          const e_icon = e.icon;
          return s.createElement(
            "div",
            {
              className: d.xF(prefixCls + "-popover-menu-item", {
                disabled: f,
                active: R === t,
              }),
              key: u,
              onTouchStart: function () {
                if (v && !f) {
                  clearTimeout(IRef.current);
                  S(t);
                  IRef.current = window.setTimeout(function () {
                    S(-1);
                    IRef.current = 0;
                  }, h);
                }
              },
              onClick: function () {
                if (e_onClickMenuItem) {
                  e_onClickMenuItem(u, e_menu[t]);
                }
                if (!f && e_onSelect) {
                  e_onSelect(u, e_menu[t]);
                }
              },
            },
            e_icon &&
              s.createElement(
                "div",
                {
                  className: d.xF(prefixCls + "-popover-menu-icon"),
                },
                e_icon,
              ),
            s.createElement(
              "div",
              {
                className: d.xF(prefixCls + "-popover-menu-text"),
              },
              e_text,
            ),
          );
        }),
      );
    },
    [prefixCls, o, L, R, v, h, e_onClickMenuItem, e_onSelect],
  );
  return s.createElement(
    eR,
    _u(
      {
        ref: BRef,
        visible: A,
        clickSelfToClose:
          e_clickSelfToClose === undefined || e_clickSelfToClose,
        touchSelfToClose,
        onChange: function (e) {
          const t = function () {
            if (e_onChange && typeof e_onChange === "function") {
              e_onChange(e);
            }
            if (e_visible === undefined) {
              F(e);
            }
          };
          if (!e && v) {
            window.setTimeout(t, Math.max(0, h - 300));
          } else {
            t();
          }
        },
      },
      k,
      {
        content: O,
        className: d.xF(
          e_className === undefined ? "" : e_className,
          prefixCls + "-popover-menu",
        ),
      },
    ),
  );
});
d.DU(eR, {
  Menu,
});
const eI = require("./module-sQ.js");
const eL = [
  "className",
  "visible",
  "children",
  "maskStyle",
  "contentStyle",
  "direction",
  "percentToClose",
  "distanceToClose",
  "speedToClose",
  "allowSwipeDirections",
  "exitDirection",
  "onTouchMove",
  "onTouchStart",
  "onTouchEnd",
  "onOpen",
  "onClose",
  "close",
];
const eM = s.forwardRef(function (e, t) {
  const e_className = e.className;
  const r = e_className === undefined ? "" : e_className;
  const e_visible = e.visible;
  const e_children = e.children;
  const e_maskStyle = e.maskStyle;
  const e_contentStyle = e.contentStyle;
  const e_direction = e.direction;
  const v = e_direction === undefined ? "bottom" : e_direction;
  const e_percentToClose = e.percentToClose;
  const h = e_percentToClose === undefined ? 0.3 : e_percentToClose;
  const e_distanceToClose = e.distanceToClose;
  const y = e_distanceToClose === undefined ? 10 : e_distanceToClose;
  const e_speedToClose = e.speedToClose;
  const E = e_speedToClose === undefined ? 200 : e_speedToClose;
  const e_allowSwipeDirections = e.allowSwipeDirections;
  const e_exitDirection = e.exitDirection;
  const e_onTouchMove = e.onTouchMove;
  const e_onTouchStart = e.onTouchStart;
  const e_onTouchEnd = e.onTouchEnd;
  const e_onOpen = e.onOpen;
  const e_onClose = e.onClose;
  const e_close = e.close;
  const L = _g(e, eL);
  const M = s.useState(e_visible);
  const A = M[0];
  const F = M[1];
  const B = m.oq({
    direction: "X",
    value: 0,
  });
  const O = B[0];
  const D = B[1];
  const W = B[2];
  const H = s.useState(false);
  const V = H[0];
  const P = H[1];
  const zRef = s.useRef(null);
  const qRef = s.useRef(0);
  const YRef = s.useRef(0);
  const GRef = s.useRef(0);
  const JRef = s.useRef(false);
  const j = s.useCallback(function (e) {
    let t;
    const n = (t = zRef.current) == null ? undefined : t.content;
    const r = (n == null ? undefined : n.offsetWidth) || 0;
    const o = (n == null ? undefined : n.offsetHeight) || 0;
    if (e === "X") {
      return r;
    }
    return o;
  }, []);
  const U = s.useCallback(function (e) {
    const e_direction = e.direction;
    const e_value = e.value;
    const r = j(e_direction);
    if (r) {
      return Math.max(0, Math.min(1, Math.abs(e_value) / r));
    }
    return 0;
  }, []);
  const X = s.useMemo(
    function () {
      return U(O);
    },
    [O],
  );
  const K = s.useMemo(
    function () {
      if (e_allowSwipeDirections !== undefined) {
        return e_allowSwipeDirections;
      }
      return [v];
    },
    [e_allowSwipeDirections, v],
  );
  const _ = s.useCallback(
    function (e) {
      let t;
      let n;
      let r;
      let o;
      if (!(e_onTouchStart && e_onTouchStart(e))) {
        P(false);
        JRef.current = true;
        qRef.current =
          ((t = e.touches) == null || (n = t[0]) == null
            ? undefined
            : n.clientX) || 0;
        YRef.current =
          ((r = e.touches) == null || (o = r[0]) == null
            ? undefined
            : o.clientY) || 0;
        GRef.current = new Date().getTime();
      }
    },
    [e_onTouchStart],
  );
  const Z = s.useCallback(function (e, t, n) {
    if (e === "X") {
      if (t > 0) {
        return "right";
      }
      return "left";
    }
    if (n > 0) {
      return "bottom";
    }
    return "top";
  }, []);
  const Q = s.useCallback(
    function (e, t, n) {
      if (
        !(e_onTouchMove && e_onTouchMove(e, t, n)) &&
        (t || (JRef.current = false),
        JRef.current &&
          e.target !== ((r = zRef.current) == null ? undefined : r.mask))
      ) {
        var r;
        let o;
        let i;
        let a;
        let l;
        const u =
          ((o = e.changedTouches) == null || (i = o[0]) == null
            ? undefined
            : i.clientX) || 0;
        const c =
          ((a = e.changedTouches) == null || (l = a[0]) == null
            ? undefined
            : l.clientY) || 0;
        const s = u < 0 ? 0 : u - qRef.current;
        const d = c - YRef.current;
        const f = Z(n === "x" ? "X" : "Y", s, d);
        const m = K.includes(f) ? f : "";
        const v = e_exitDirection || m;
        const direction = ["top", "bottom"].includes(v) ? "Y" : "X";
        const h = ["bottom", "right"].includes(v) ? 1 : -1;
        switch (m) {
          case "top":
          case "bottom":
            W({
              direction,
              value: Math.abs(d) * h,
            });
            break;
          case "left":
          case "right":
            W({
              direction,
              value: Math.abs(s) * h,
            });
        }
      }
    },
    [e_onTouchMove, K, e_exitDirection],
  );
  const $ = s.useCallback(function (e, t) {
    const n = Z(e, t, t);
    return (n === "left" || n === "top" ? -1 : 1) * j(e);
  }, []);
  const ee = s.useCallback(
    function (e) {
      if (!(e_onTouchEnd && e_onTouchEnd(e)) && JRef.current) {
        JRef.current = false;
        const t = new Date().getTime();
        const n = D.current;
        const r = n.direction;
        const o = n.value;
        const i = U(D.current);
        const a = (o / (t - GRef.current)) * 1000;
        if ((i > 0 && i >= h && Math.abs(o) > y) || Math.abs(a) > E) {
          P(false);
          e_close(e);
          d.dY(function () {
            W({
              direction: r,
              value: $(r, o),
            });
          });
        } else {
          P(true);
          W({
            direction: "X",
            value: 0,
          });
        }
        GRef.current = 0;
      }
    },
    [e_onTouchEnd, h, y, E, e_close],
  );
  s.useImperativeHandle(t, function () {
    return zRef.current;
  });
  s.useEffect(
    function () {
      let e;
      const t = (e = zRef.current) == null ? undefined : e.content;
      if (A && t) {
        t.addEventListener("touchstart", _);
        t.addEventListener("touchend", ee);
        t.addEventListener("touchcancel", ee);
      }
      return function () {
        let e;
        const t = (e = zRef.current) == null ? undefined : e.content;
        if (A && t) {
          t.removeEventListener("touchstart", _);
          t.removeEventListener("touchend", ee);
          t.removeEventListener("touchcancel", ee);
        }
      };
    },
    [A, _, ee],
  );
  return s.createElement(f.Wb, null, function (e) {
    let t;
    const e_prefixCls = e.prefixCls;
    return s.createElement(
      ef.Ay,
      _u(
        {
          ref: zRef,
          visible: e_visible,
          close: e_close,
          className: d.xF(e_prefixCls + "-popup-swiper", r, {
            "has-trans": V,
          }),
          direction: v,
          onTouchMove: Q,
          onOpen: function () {
            F(true);
            if (e_onOpen != null) {
              e_onOpen();
            }
          },
          onClose: function (e) {
            F(false);
            W({
              direction: "X",
              value: 0,
            });
            if (e_onClose != null) {
              e_onClose(e);
            }
          },
          maskStyle: _u({}, e_maskStyle || {}, {
            opacity: X ? 1 - X : undefined,
          }),
          contentStyle:
            ((t = m.yx({
              transform: O.value
                ? "translate" +
                  O.direction +
                  "(" +
                  O.value +
                  "px) translateZ(2px)"
                : undefined,
            })),
            _u({}, e_contentStyle || {}, t)),
        },
        L,
      ),
      e_children,
    );
  });
});
const eA = f.qm(eM);
d.DU(eM, {
  open: eI.h(eA, "ARCO_POPUP_SWIPER"),
});
r = a || (a = {});
r[(r.Static = 0)] = "Static";
r[(r.Pulling = 1)] = "Pulling";
r[(r.Loosing = 2)] = "Loosing";
r[(r.Loading = 3)] = "Loading";
r[(r.Finish = 4)] = "Finish";
const EFContext = s.createContext({
  isGroup: false,
  shape: "circle",
  layout: "inline",
  disabled: false,
  value: [],
  onChange: function () {},
});
const eB = require("g33");
o = M.A;
const eO = s.forwardRef(function (e, t) {
  const n = eB.q(e, EFContext);
  const rRef = s.useRef(null);
  s.useImperativeHandle(t, function () {
    return rRef.current;
  });
  return s.createElement(
    o,
    _u(
      {
        ref: rRef,
      },
      n,
      {
        isRadio: true,
      },
    ),
  );
});
const Group = d.DU(
  s.forwardRef(function (e, t) {
    const e_style = e.style;
    const r = e_style === undefined ? {} : e_style;
    const e_className = e.className;
    const i = e_className === undefined ? "" : e_className;
    const e_defaultValue = e.defaultValue;
    const e_disabled = e.disabled;
    const u = e_disabled !== undefined && e_disabled;
    const e_shape = e.shape;
    const shape = e_shape === undefined ? "circle" : e_shape;
    const e_options = e.options;
    const e_icons = e.icons;
    const e_onChange = e.onChange;
    const C = e_onChange === undefined ? () => {} : e_onChange;
    const e_value = e.value;
    const e_children = e.children;
    const E = e_children === undefined ? null : e_children;
    const e_layout = e.layout;
    const layout = e_layout === undefined ? "inline" : e_layout;
    const k = s.useState(e_value || e_defaultValue);
    const N = k[0];
    const T = k[1];
    const RRef = s.useRef(null);
    s.useImperativeHandle(t, function () {
      return {
        dom: RRef.current,
      };
    });
    s.useEffect(
      function () {
        if (e_value !== undefined) {
          T(e_value);
        }
      },
      [e_value],
    );
    const onChange = function (e, t) {
      if (e) {
        C(t);
        if (e_value === undefined) {
          T(t);
        }
      }
    };
    return s.createElement(f.Wb, null, function (e) {
      const e_prefixCls = e.prefixCls;
      return s.createElement(
        "div",
        {
          ref: RRef,
          style: r,
          className: d.xF(i, e_prefixCls + "-radio-group"),
        },
        s.createElement(
          EFContext.Provider,
          {
            value: {
              isGroup: true,
              shape,
              layout,
              disabled: u,
              icons: e_icons,
              value: N === undefined ? [] : [N],
              onChange,
            },
          },
          E,
          !E &&
            e_options &&
            e_options.map((e) =>
              s.createElement(
                eO,
                _u(
                  {
                    key: e.value,
                  },
                  e,
                  {
                    isRadio: true,
                  },
                ),
              ),
            ),
        ),
      );
    });
  }),
  "RadioGroup",
);
d.DU(eO, "Radio", {
  Group,
});
const eW = s.forwardRef(function (e, t) {
  const e_className = e.className;
  const e_style = e.style;
  const e_defaultValue = e.defaultValue;
  const e_value = e.value;
  const e_count = e.count;
  const l = e_count === undefined ? 5 : e_count;
  const e_step = e.step;
  const c = e_step === undefined ? 1 : e_step;
  const e_color = e.color;
  const e_normalColor = e.normalColor;
  const e_disabledColor = e.disabledColor;
  const e_allowHalf = e.allowHalf;
  const C = e_allowHalf !== undefined && e_allowHalf;
  const e_disabled = e.disabled;
  const x = e_disabled !== undefined && e_disabled;
  const e_size = e.size;
  const e_offset = e.offset;
  const e_icons = e.icons;
  const e_onChange = e.onChange;
  const N = s.useState(e_defaultValue === undefined ? 0 : e_defaultValue);
  const T = N[0];
  const R = N[1];
  const S = s.useMemo(
    function () {
      return (e_value !== undefined ? e_value : T) / c || 0;
    },
    [e_value, T, c],
  );
  const IRef = s.useRef(null);
  const L = s.useMemo(
    function () {
      return Array(l).fill("");
    },
    [l],
  );
  function M(e) {
    if (!x) {
      const t = e * c;
      R(t);
      if (e_onChange) {
        e_onChange(t);
      }
    }
  }
  function A(e, t, n) {
    if (n) {
      if (typeof n === "function") {
        return n(t - 1);
      }
      return n;
    }
    return e;
  }
  m.w5(
    function () {
      M(S);
    },
    [c],
  );
  s.useImperativeHandle(t, function () {
    return {
      dom: IRef.current,
    };
  });
  return s.createElement(f.Wb, null, function (e) {
    const e_prefixCls = e.prefixCls;
    const e_useRtl = e.useRtl;
    return s.createElement(
      "div",
      {
        role: "slider",
        "aria-valuemin": 0,
        "aria-valuemax": l,
        "aria-valuenow": T,
        "aria-disabled": x,
        className: d.xF(e_prefixCls + "-rate", e_className, {
          disabled: x,
        }),
        style: e_style,
        ref: IRef,
      },
      L.map((e, n) => {
        const r = n + 1;
        const i = C ? r - 0.5 : r;
        const a =
          S >= r ? "active" : S >= r - 0.5 && C ? "half-active" : "normal";
        return s.createElement(
          "div",
          {
            key: r,
            style: {
              padding: e_offset,
            },
            className: e_prefixCls + "-rate-icon-wrap " + a,
          },
          ((e, t, n) => {
            if (t === "active") {
              return A(
                s.createElement(H, {
                  className: d.xF(e + "-icon active", {
                    disabled: x,
                  }),
                  style: {
                    fontSize: e_size,
                    color: x ? e_disabledColor : e_color,
                  },
                }),
                n,
                e_icons == null ? undefined : e_icons.active,
              );
            }
            if (t === "half-active") {
              const r = e_icons || {};
              const o = r.active;
              const i = r.halfActive;
              return A(
                s.createElement(
                  s.Fragment,
                  null,
                  s.createElement(H, {
                    className: d.xF(e + "-icon normal", {
                      disabled: x,
                    }),
                    style: {
                      fontSize: e_size,
                      color: e_normalColor,
                    },
                  }),
                  s.createElement(_, {
                    className: d.xF(e + "-icon half-active", {
                      disabled: x,
                    }),
                    style: {
                      fontSize: e_size,
                      color: x ? e_disabledColor : e_color,
                    },
                  }),
                ),
                n,
                i || o,
              );
            }
            return A(
              s.createElement(H, {
                className: d.xF(e + "-icon normal", {
                  disabled: x,
                }),
                style: {
                  fontSize: e_size,
                  color: e_normalColor,
                },
              }),
              n,
              e_icons == null ? undefined : e_icons.normal,
            );
          })(e_prefixCls + "-rate", a, r),
          s.createElement("div", {
            className: e_prefixCls + "-rate-icon-click-half left",
            onClick: function () {
              return M(e_useRtl ? r : i);
            },
          }),
          s.createElement("div", {
            className: e_prefixCls + "-rate-icon-click-half right",
            onClick: function () {
              return M(e_useRtl ? i : r);
            },
          }),
        );
      }),
    );
  });
});
d.DU(eW, "Rate");
const EHContext = s.createContext({
  showAnimation: true,
  animation: "gradient",
});
const eV = (e, t) => {
  if (e) {
    if (t) {
      return e.offsetLeft - e.offsetTop;
    }
    return e.offsetLeft + e.offsetTop;
  }
  return 0;
};
function useEP(e, t) {
  const n = s.useState();
  const r = n[0];
  const o = n[1];
  const i = function () {
    const n = Array.isArray(e);
    if (n ? e.length > 0 : e == null ? undefined : e.current) {
      o(n ? e.map((e) => eV(e, t)) : eV(e.current, t));
    }
  };
  s.useEffect(
    function () {
      d.dY(function () {
        i();
      });
    },
    [e, t],
  );
  m.VP(i);
  return r;
}
const Node = s.forwardRef(function (e, t) {
  const e_className = e.className;
  const e_style = e.style;
  const e_children = e.children;
  const i = s.useContext(f.FI);
  const i_useRtl = i.useRtl;
  const i_prefixCls = i.prefixCls;
  const u = s.useContext(EHContext);
  const u_backgroundColor = u.backgroundColor;
  const u_showAnimation = u.showAnimation;
  const u_animation = u.animation;
  const hRef = s.useRef(null);
  const g = u_showAnimation && u_animation === "gradient";
  const C = useEP(g ? hRef : undefined, i_useRtl);
  s.useImperativeHandle(t, function () {
    return {
      dom: hRef.current,
    };
  });
  return s.createElement(
    "div",
    {
      className: d.xF(
        i_prefixCls + "-skeleton-item",
        i_prefixCls + "-skeleton-node",
        u_showAnimation && i_prefixCls + "-skeleton-animation-" + u_animation,
        e_className === undefined ? "" : e_className,
      ),
      style: _u(
        {
          backgroundColor: u_backgroundColor,
        },
        e_style,
      ),
      ref: hRef,
    },
    e_children,
    g &&
      C !== undefined &&
      s.createElement("div", {
        className: i_prefixCls + "-skeleton-animation-item",
        style: {
          left: 0 - C,
        },
      }),
  );
});
const Title = s.forwardRef(function (e, t) {
  const e_className = e.className;
  const e_style = e.style;
  const e_width = e.width;
  const i = s.useContext(f.FI);
  const i_useRtl = i.useRtl;
  const i_prefixCls = i.prefixCls;
  const u = s.useContext(EHContext);
  const u_backgroundColor = u.backgroundColor;
  const u_showAnimation = u.showAnimation;
  const u_animation = u.animation;
  const hRef = s.useRef(null);
  const g = u_showAnimation && u_animation === "gradient";
  const C = useEP(g ? hRef : undefined, i_useRtl);
  s.useImperativeHandle(t, function () {
    return {
      dom: hRef.current,
    };
  });
  return s.createElement(
    "div",
    {
      className: d.xF(
        i_prefixCls + "-skeleton-item",
        i_prefixCls + "-skeleton-title",
        u_showAnimation && i_prefixCls + "-skeleton-animation-" + u_animation,
        e_className === undefined ? "" : e_className,
      ),
      style: _u(
        {
          width: e_width === undefined ? "40%" : e_width,
          backgroundColor: u_backgroundColor,
        },
        e_style,
      ),
      ref: hRef,
    },
    g &&
      C !== undefined &&
      s.createElement("div", {
        className: i_prefixCls + "-skeleton-animation-item",
        style: {
          left: 0 - C,
        },
      }),
  );
});
const Paragraph = s.forwardRef(function (e, t) {
  const e_className = e.className;
  const e_style = e.style;
  const e_rows = e.rows;
  const i = e_rows === undefined ? 3 : e_rows;
  const e_width = e.width;
  const l = e_width === undefined ? "60%" : e_width;
  const u = s.useContext(f.FI);
  const u_useRtl = u.useRtl;
  const u_prefixCls = u.prefixCls;
  const v = s.useContext(EHContext);
  const v_backgroundColor = v.backgroundColor;
  const v_showAnimation = v.showAnimation;
  const v_animation = v.animation;
  const CRef = s.useRef(null);
  const yRef = s.useRef([]);
  const x = v_showAnimation && v_animation === "gradient";
  const E = useEP(x ? yRef.current : undefined, u_useRtl);
  s.useImperativeHandle(t, function () {
    return {
      dom: CRef.current,
    };
  });
  return s.createElement(
    "div",
    {
      className: d.xF(
        u_prefixCls + "-skeleton-paragraph",
        e_className === undefined ? "" : e_className,
      ),
      style: e_style,
      ref: CRef,
    },
    Array.from(Array(i)).map((e, t) =>
      s.createElement(
        "div",
        {
          key: t,
          className: d.xF(
            u_prefixCls + "-skeleton-item",
            u_prefixCls + "-skeleton-paragraph-line",
            v_showAnimation &&
              u_prefixCls + "-skeleton-animation-" + v_animation,
          ),
          style: {
            width: d.cy(l) ? l[t] : i - 1 === t ? l : undefined,
            backgroundColor: v_backgroundColor,
          },
          ref: function (e) {
            return e && (yRef.current[t] = e);
          },
        },
        x &&
          E !== undefined &&
          s.createElement("div", {
            className: u_prefixCls + "-skeleton-animation-item",
            style: {
              left: 0 - (E[t] || 0),
            },
          }),
      ),
    ),
  );
});
const Avatar = s.forwardRef(function (e, t) {
  const e_className = e.className;
  const e_style = e.style;
  const o = s.useContext(f.FI);
  const o_useRtl = o.useRtl;
  const o_prefixCls = o.prefixCls;
  const l = s.useContext(EHContext);
  const l_backgroundColor = l.backgroundColor;
  const l_showAnimation = l.showAnimation;
  const l_animation = l.animation;
  const pRef = s.useRef(null);
  const h = l_showAnimation && l_animation === "gradient";
  const g = useEP(h ? pRef : undefined, o_useRtl);
  s.useImperativeHandle(t, function () {
    return {
      dom: pRef.current,
    };
  });
  return s.createElement(
    "div",
    {
      className: d.xF(
        o_prefixCls + "-skeleton-item",
        o_prefixCls + "-skeleton-avatar",
        l_showAnimation && o_prefixCls + "-skeleton-animation-" + l_animation,
        e_className === undefined ? "" : e_className,
      ),
      style: _u(
        {
          backgroundColor: l_backgroundColor,
        },
        e_style,
      ),
      ref: pRef,
    },
    h &&
      g !== undefined &&
      s.createElement("div", {
        className: o_prefixCls + "-skeleton-animation-item",
        style: {
          left: 0 - g,
        },
      }),
  );
});
const Grid = s.forwardRef(function (e, t) {
  const e_className = e.className;
  const e_style = e.style;
  const e_columns = e.columns;
  const i = s.useContext(f.FI);
  const i_useRtl = i.useRtl;
  const i_prefixCls = i.prefixCls;
  const u = s.useContext(EHContext);
  const u_backgroundColor = u.backgroundColor;
  const u_showAnimation = u.showAnimation;
  const u_animation = u.animation;
  const pRef = s.useRef(null);
  const hRef = s.useRef([]);
  const gRef = s.useRef([]);
  const C = u_showAnimation && u_animation === "gradient";
  const y = useEP(C ? hRef.current : undefined, i_useRtl);
  const x = useEP(C ? gRef.current : undefined, i_useRtl);
  s.useImperativeHandle(t, function () {
    return {
      dom: pRef.current,
    };
  });
  return s.createElement(
    "div",
    {
      className: d.xF(
        i_prefixCls + "-skeleton-grid",
        e_className === undefined ? "" : e_className,
      ),
      style: e_style,
      ref: pRef,
    },
    Array.from(Array(e_columns === undefined ? 4 : e_columns)).map((e, t) =>
      s.createElement(
        "div",
        {
          key: t,
          className: d.xF(i_prefixCls + "-skeleton-grid-item"),
        },
        s.createElement(
          "div",
          {
            className: d.xF(
              i_prefixCls + "-skeleton-item",
              i_prefixCls + "-skeleton-grid-icon",
              u_showAnimation &&
                i_prefixCls + "-skeleton-animation-" + u_animation,
            ),
            style: {
              backgroundColor: u_backgroundColor,
            },
            ref: function (e) {
              return e && (hRef.current[t] = e);
            },
          },
          C &&
            y !== undefined &&
            s.createElement("div", {
              className: i_prefixCls + "-skeleton-animation-item",
              style: {
                left: 0 - ((y == null ? undefined : y[t]) || 0),
              },
            }),
        ),
        s.createElement(
          "div",
          {
            className: d.xF(
              i_prefixCls + "-skeleton-item",
              i_prefixCls + "-skeleton-grid-text",
              u_showAnimation &&
                i_prefixCls + "-skeleton-animation-" + u_animation,
            ),
            style: {
              backgroundColor: u_backgroundColor,
            },
            ref: function (e) {
              return e && (gRef.current[t] = e);
            },
          },
          C &&
            x !== undefined &&
            s.createElement("div", {
              className: i_prefixCls + "-skeleton-animation-item",
              style: {
                left: 0 - ((x == null ? undefined : x[t]) || 0),
              },
            }),
        ),
      ),
    ),
  );
});
function ej(e) {
  if (e && typeof e === "object") {
    return e;
  }
  return {};
}
const eU = s.forwardRef(function (e, t) {
  const e_className = e.className;
  const e_style = e.style;
  const e_children = e.children;
  const e_title = e.title;
  const l = e_title === undefined || e_title;
  const e_paragraph = e.paragraph;
  const m = e_paragraph === undefined || e_paragraph;
  const e_avatar = e.avatar;
  const p = e_avatar !== undefined && e_avatar;
  const e_grid = e.grid;
  const e_showAnimation = e.showAnimation;
  const e_animation = e.animation;
  const e_animationGradientColor = e.animationGradientColor;
  const e_backgroundColor = e.backgroundColor;
  const ERef = s.useRef(null);
  const prefixCls = s.useContext(f.FI).prefixCls;
  s.useImperativeHandle(t, function () {
    return {
      dom: ERef.current,
    };
  });
  const w = !!l;
  const k = !!m;
  const N = !!p;
  const T = e_grid
    ? s.createElement(Grid, ej(e_grid))
    : s.createElement(
        s.Fragment,
        null,
        N && s.createElement(Avatar, ej(p)),
        (w || k) &&
          s.createElement(
            "div",
            {
              className: prefixCls + "-skeleton-content",
            },
            w && s.createElement(Title, ej(l)),
            k && s.createElement(Paragraph, ej(m)),
          ),
      );
  return s.createElement(
    "div",
    {
      className: d.xF(
        prefixCls + "-skeleton",
        {
          [prefixCls + "-skeleton-with-avatar"]: N,
        },
        e_className === undefined ? "" : e_className,
      ),
      style: _u(
        {
          color: e_animationGradientColor,
        },
        e_style,
      ),
      ref: ERef,
    },
    s.createElement(
      EHContext.Provider,
      {
        value: {
          showAnimation: e_showAnimation === undefined || e_showAnimation,
          animation: e_animation === undefined ? "gradient" : e_animation,
          backgroundColor: e_backgroundColor,
        },
      },
      T,
      e_children,
    ),
  );
});
d.DU(eU, {
  Node,
  Title,
  Paragraph,
  Avatar,
  Grid,
});
const useEX = (e) => {
  const e_valueGroup = e.valueGroup;
  const prefixCls = s.useContext(f.FI).prefixCls;
  const r = prefixCls === undefined ? "" : prefixCls;
  const o = s.useContext(E$Context);
  const o_max = o.max;
  const o_suffixLabel = o.suffixLabel;
  const o_min = o.min;
  const o_prefixLabel = o.prefixLabel;
  return {
    renderPrefixLabel: s.useMemo(
      function () {
        let e;
        if (o_prefixLabel) {
          e =
            typeof o_prefixLabel === "boolean" && o_prefixLabel
              ? o_min
              : typeof o_prefixLabel === "function"
                ? o_prefixLabel(e_valueGroup)
                : o_prefixLabel;
          return s.createElement(
            "div",
            {
              className: r + "-slider-label is-prefix",
            },
            e,
          );
        }
        return null;
      },
      [o_min, o_prefixLabel, e_valueGroup],
    ),
    renderSuffixLabel: s.useMemo(
      function () {
        let e;
        if (o_suffixLabel) {
          e =
            typeof o_suffixLabel === "boolean" && o_suffixLabel
              ? o_max
              : typeof o_suffixLabel === "function"
                ? o_suffixLabel(e_valueGroup)
                : o_suffixLabel;
          return s.createElement(
            "div",
            {
              className: r + "-slider-label is-suffix",
            },
            e,
          );
        }
        return null;
      },
      [o_max, o_suffixLabel, e_valueGroup],
    ),
  };
};
const useEK = (e) => {
  let t;
  let n;
  const e_commonIsTouching = e.commonIsTouching;
  const o = s.useContext(E$Context);
  const o_value = o.value;
  const o_min = o.min;
  const o_max = o.max;
  const o_onAfterChange = o.onAfterChange;
  const o_onChange = o.onChange;
  const o_useMarkOnly = o.useMarkOnly;
  const o_marks = o.marks;
  const o_useRange = o.useRange;
  const v =
    (t =
      (n = o == null ? undefined : o.value) != null
        ? n
        : o == null
          ? undefined
          : o.defaultValue) != null
      ? t
      : o_min;
  const p = s.useState(v);
  const valueGroup = p[0];
  const setValueGroup = p[1];
  const C = s.useState(false);
  const firstRender = C[0];
  const x = C[1];
  const E = s.useState(false);
  const b = E[0];
  const w = E[1];
  const k = s.useMemo(
    function () {
      if (o_marks === undefined) {
        return [];
      }
      return []
        .concat(
          typeof o_marks === "number"
            ? Array((o_max - o_min) / o_marks + 1)
                .fill("")
                .map((e, t) => t * o_marks)
            : Array.isArray(o_marks)
              ? o_marks
              : Object.keys(o_marks).map((e) => parseInt(e)),
        )
        .filter((e) => e <= o_max && e >= o_min)
        .sort((e, t) => {
          if (e > t) {
            return 1;
          }
          return -1;
        });
    },
    [o_marks, o_max, o_min],
  );
  const N = s.useCallback(
    function (e) {
      if (typeof valueGroup === "number") {
        return e <= valueGroup;
      }
      const t = [].concat(valueGroup).sort((e, t) => {
        if (e > t) {
          return 1;
        }
        return -1;
      });
      const n = t[0];
      const r = t[1];
      return e >= n && e <= r;
    },
    [valueGroup],
  );
  const runTimeConfig = s.useMemo(
    function () {
      return k.map((e) => {
        const label =
          o_marks &&
          !Array.isArray(o_marks) &&
          o_marks[String(e)] &&
          typeof o_marks !== "number"
            ? o_marks[String(e)]
            : s.createElement("p", null, e);
        return {
          activated: N(e),
          value: e,
          label,
        };
      });
    },
    [k, valueGroup, N, o_marks],
  );
  const R = s.useCallback(
    function (e) {
      if (!o_useMarkOnly || o_marks === undefined) {
        return e;
      }
      const t = (e) => {
        let t;
        k.forEach((n, r) => {
          if (e >= n) {
            t = r;
          }
        });
        if (t !== undefined) {
          const n = t + 1;
          if (n < k.length && Math.abs(k[n] - e) < Math.abs(k[t] - e)) {
            return k[n];
          }
          return k[t];
        }
        return k[0];
      };
      if (typeof e === "number") {
        return t(e);
      }
      return e.map((e) => t(e));
    },
    [o_useMarkOnly, o_marks, k],
  );
  s.useEffect(
    function () {
      if (e_commonIsTouching) {
        w(true);
      }
    },
    [e_commonIsTouching],
  );
  const isMultiThumb = s.useMemo(
    function () {
      return o_useRange || Array.isArray(v);
    },
    [o_useRange, typeof v === "number"],
  );
  s.useEffect(
    function () {
      x(true);
      setValueGroup(
        isMultiThumb && typeof valueGroup === "number"
          ? R([valueGroup, valueGroup])
          : R(valueGroup),
      );
    },
    [isMultiThumb],
  );
  s.useEffect(
    function () {
      if (o_value !== undefined && firstRender && e_commonIsTouching === -1) {
        setValueGroup(
          isMultiThumb && typeof o_value === "number"
            ? R([o_value, o_value])
            : R(o_value),
        );
      }
    },
    [firstRender && o_value, e_commonIsTouching],
  );
  const I = s.useMemo(
    function () {
      if (typeof valueGroup === "number") {
        return valueGroup;
      }
      return [].concat(valueGroup).sort((e, t) => {
        if (e > t) {
          return 1;
        }
        return -1;
      });
    },
    [valueGroup],
  );
  s.useEffect(
    function () {
      if (b && e_commonIsTouching > -1) {
        o_onChange(I);
      }
    },
    [valueGroup],
  );
  s.useEffect(
    function () {
      if (b && e_commonIsTouching === -1) {
        o_onAfterChange(R(I));
        if (o_value === undefined) {
          setValueGroup(R(valueGroup));
        }
      }
    },
    [e_commonIsTouching, R],
  );
  return {
    valueGroup,
    setValueGroup,
    firstRender,
    runTimeConfig,
    isMultiThumb,
  };
};
const useE = (e) => {
  const e_getLinePosition = e.getLinePosition;
  const e_commonIsTouching = e.commonIsTouching;
  const e_valueGroup = e.valueGroup;
  const o = s.useContext(E$Context);
  const o_size = o.size;
  const o_useAnimation = o.useAnimation;
  const o_min = o.min;
  const o_max = o.max;
  const o_type = o.type;
  const d = /^horizontal/g.test(o_type);
  return {
    heightStyle: s.useMemo(
      function () {
        if (o_size === undefined) {
          return {};
        }
        const t = typeof o_size === "string" ? parseInt(o_size) : o_size;
        return {
          [d ? "height" : "width"]: t + "px",
        };
      },
      [o_size, d],
    ),
    transitionClass: s.useMemo(
      function () {
        if (o_useAnimation && e_commonIsTouching === -1) {
          return "is-transferable";
        }
        return "";
      },
      [e_commonIsTouching, o_useAnimation],
    ),
    activeLineStyle: s.useMemo(
      function () {
        let length = e_getLinePosition().length;
        let o = 0;
        if (typeof e_valueGroup === "number") {
          length *= (e_valueGroup - o_min) / (o_max - o_min);
        } else {
          const i = [].concat(e_valueGroup).sort((e, t) => {
            if (e > t) {
              return 1;
            }
            return -1;
          });
          const a = i[0];
          const c = i[1];
          o = ((a - o_min) / (o_max - o_min)) * length;
          length = ((c - o_min) / (o_max - o_min)) * length - o;
        }
        return {
          [d ? "left" : "bottom"]: o + "px",
          [d ? "width" : "height"]: Math.abs(length) + "px",
        };
      },
      [e_valueGroup, e_getLinePosition, o_min, o_max, d],
    ),
  };
};
i = l || (l = {});
i[(i.Idle = 0)] = "Idle";
i[(i.Start = 1)] = "Start";
i[(i.Moving = 2)] = "Moving";
const useEZ = (e) => {
  const e_getLinePosition = e.getLinePosition;
  const e_lineRef = e.lineRef;
  const e_valueGroup = e.valueGroup;
  const e_setValueGroup = e.setValueGroup;
  const e_setCommonIsTouching = e.setCommonIsTouching;
  const a = s.useContext(E$Context);
  const a_disabled = a.disabled;
  const a_step = a.step;
  const a_min = a.min;
  const a_max = a.max;
  const a_type = a.type;
  const a_draggableTrackOnly = a.draggableTrackOnly;
  const p = s.useState(l.Idle);
  const isTouching = p[0];
  const g = p[1];
  const C = s.useState(0);
  const y = C[0];
  const x = C[1];
  const ERef = s.useRef({
    length: 0,
    start: 0,
  });
  const b = /^horizontal/g.test(a_type);
  const w = s.useCallback(
    function (e) {
      if (e >= a_min && e <= a_max) {
        return e;
      }
      if (e <= (a_min + a_max) / 2) {
        return a_min;
      }
      return a_max;
    },
    [a_min, a_max],
  );
  const k = s.useCallback(
    function (e) {
      const ERef_current = ERef.current;
      const t_length = ERef_current.length;
      const t_start = ERef_current.start;
      if (t_length === 0) {
        return 0;
      }
      let o = b ? e - t_start : t_length - e + t_start;
      if (o < 0) {
        o = 0;
      } else if (o > t_length) {
        o = t_length;
      }
      return w(
        Math.round(((o / t_length) * (a_max - a_min)) / a_step) * a_step +
          a_min,
      );
    },
    [b, a_max, a_min, a_step],
  );
  const N = s.useMemo(
    function () {
      const e = k(y);
      if (!Array.isArray(e_valueGroup)) {
        if (isTouching) {
          e_setValueGroup(e);
          e_setCommonIsTouching(0);
          g(l.Moving);
        }
        return function (e) {
          e_setValueGroup(e);
        };
      }
      const t =
        Math.abs(e_valueGroup[0] - e) < Math.abs(e_valueGroup[1] - e) ? 0 : 1;
      const n = function (e) {
        e_setValueGroup(function (n) {
          if (typeof n === "number") {
            return [n, e];
          }
          const r = [].concat(n);
          r[t] = e;
          return r;
        });
      };
      if (isTouching) {
        e_setCommonIsTouching(t);
        n(e);
        g(l.Moving);
      }
      return n;
    },
    [y, k],
  );
  s.useEffect(
    function () {
      if (!a_disabled) {
        let e;
        const r = function (e) {
          if (!a_draggableTrackOnly || e.target !== e_lineRef.current) {
            ERef.current = e_getLinePosition();
            const r = e.touches[0];
            const o = r.clientX;
            const i = r.clientY;
            const a = b ? o : i;
            g(l.Start);
            x(a);
            e.stopPropagation();
            e.preventDefault();
          }
        };
        if ((e = e_lineRef.current) != null) {
          e.addEventListener("touchstart", r);
        }
        return function () {
          let e;
          if (!(a_disabled || (e = e_lineRef.current) == null)) {
            e.removeEventListener("touchstart", r);
          }
        };
      }
    },
    [a_disabled, b, a_draggableTrackOnly],
  );
  s.useEffect(
    function () {
      if (!a_disabled) {
        let e;
        const t = function (e) {
          if (isTouching === l.Moving) {
            const t = e.touches[0];
            const n = t.clientX;
            const r = t.clientY;
            N(k(b ? n : r));
          }
          e.stopPropagation();
          if (e.cancelable) {
            e.preventDefault();
          }
        };
        if ((e = e_lineRef.current) != null) {
          e.addEventListener("touchmove", t);
        }
        return function () {
          let e;
          if (!(a_disabled || (e = e_lineRef.current) == null)) {
            e.removeEventListener("touchmove", t);
          }
        };
      }
    },
    [a_disabled, b, isTouching],
  );
  s.useEffect(
    function () {
      if (!a_disabled) {
        let e;
        let t;
        const r = function (e) {
          g(l.Idle);
          e_setCommonIsTouching(-1);
          e.stopPropagation();
          e.preventDefault();
        };
        if ((e = e_lineRef.current) != null) {
          e.addEventListener("touchend", r);
        }
        if ((t = e_lineRef.current) != null) {
          t.addEventListener("touchcancel", r);
        }
        return function () {
          let e;
          let t;
          if (!(a_disabled || (e = e_lineRef.current) == null)) {
            e.removeEventListener("touchend", r);
          }
          if (!(a_disabled || (t = e_lineRef.current) == null)) {
            t.removeEventListener("touchcancel", r);
          }
        };
      }
    },
    [a_disabled],
  );
  return {
    isTouching,
  };
};
const eQ = (e) =>
  function () {
    return s.createElement("div", {
      className: e + "-slider-thumb",
    });
  };
var E$Context = s.createContext({
  className: "",
  style: {},
  disabled: false,
  useRange: false,
  useAnimation: true,
  size: 2,
  min: 0,
  max: 100,
  step: 1,
  type: "horizontal",
  showTooltip: "auto",
  useMarkOnly: false,
  showMarks: false,
  prefixLabel: false,
  suffixLabel: false,
  draggableTrackOnly: false,
  formatTooltip: function (e) {
    return String(e);
  },
  onChange: function () {},
  onAfterChange: function () {},
  renderThumb: eQ(""),
});
function E0Component(e) {
  const e_visible = e.visible;
  const e_content = e.content;
  const e_children = e.children;
  const prefixCls = s.useContext(f.FI).prefixCls;
  const i = prefixCls === undefined ? "" : prefixCls;
  const aRef = s.useRef(null);
  return s.createElement(
    "div",
    {
      className: i + "-slider-popover-wrapper",
    },
    s.createElement(
      A_2,
      {
        in: e_visible,
        timeout: 300,
        type: "fade",
        mountOnEnter: true,
        unmountOnExit: true,
        nodeRef: aRef,
      },
      s.createElement(
        "div",
        {
          className: i + "-slider-popover" + (e_content ? "" : " no-content"),
          ref: aRef,
        },
        s.createElement(
          "div",
          {
            className: i + "-slider-popover-content",
          },
          e_content,
        ),
        s.createElement("div", {
          className: i + "-slider-popover-arrow",
        }),
      ),
    ),
    e_children,
  );
}
const E1Component = function (e) {
  const e_className = e.className;
  const e_value = e.value;
  const e_style = e.style;
  const e_isTouching = e.isTouching;
  const prefixCls = s.useContext(f.FI).prefixCls;
  const a = prefixCls === undefined ? "" : prefixCls;
  const l = s.useContext(E$Context);
  const l_showTooltip = l.showTooltip;
  const l_renderThumb = l.renderThumb;
  const l_formatTooltip = l.formatTooltip;
  const v = l_showTooltip === "never";
  const p = s.useMemo(
    function () {
      return l_formatTooltip(e_value);
    },
    [l_formatTooltip, e_value],
  );
  const h = s.useMemo(
    function () {
      return !v && (l_showTooltip === "always" || e_isTouching);
    },
    [l_showTooltip, e_isTouching],
  );
  const g = (e) =>
    s.createElement(
      "div",
      {
        className: a + "-slider-thumb-wrapper " + e_className,
        style: _u({}, e_style),
      },
      e,
    );
  const C =
    typeof l_renderThumb === "function"
      ? l_renderThumb(e_value)
      : l_renderThumb;
  return g(
    v
      ? C
      : s.createElement(
          E0Component,
          {
            visible: h,
            content: p,
          },
          C,
        ),
  );
};
const E2Component = function (e) {
  const e_runTimeConfig = e.runTimeConfig;
  const e_className = e.className;
  const r = e_className === undefined ? "" : e_className;
  const e_style = e.style;
  const i = e_style === undefined ? {} : e_style;
  const prefixCls = s.useContext(f.FI).prefixCls;
  const l = prefixCls === undefined ? "" : prefixCls;
  const u = s.useContext(E$Context);
  const u_type = u.type;
  const u_showMarks = u.showMarks;
  const u_max = u.max;
  const u_min = u.min;
  const g = /^horizontal/g.test(u_type);
  const C = s.useCallback(
    function (e) {
      return {
        [g ? "left" : "bottom"]: `${((e - u_min) / (u_max - u_min)) * 100}%`,
      };
    },
    [g, u_min, u_max],
  );
  return s.createElement(
    "div",
    {
      className: l + "-slider-marks",
    },
    e_runTimeConfig.map((e) => {
      const e_value = e.value;
      const e_label = e.label;
      const e_activated = e.activated;
      return s.createElement(
        "div",
        {
          key: e_value,
          className: d.xF(
            l + "-slider-marks-item",
            {
              "is-activated": e_activated,
            },
            r,
          ),
          style: _u({}, C(e_value), i),
        },
        u_showMarks &&
          s.createElement(
            "div",
            {
              className: l + "-slider-marks-item-label",
            },
            e_label,
          ),
      );
    }),
  );
};
const e3 = s.forwardRef(function (e, t) {
  const prefixCls = s.useContext(f.FI).prefixCls;
  const r = prefixCls === undefined ? "" : prefixCls;
  const o = s.useContext(E$Context);
  const o_className = o.className;
  const o_style = o.style;
  const o_disabled = o.disabled;
  const o_min = o.min;
  const o_max = o.max;
  const o_type = o.type;
  const o_showTooltip = o.showTooltip;
  const o_showMarks = o.showMarks;
  const gRef = s.useRef(null);
  const CRef = s.useRef(null);
  const y = s.useState(-1);
  const commonIsTouching = y[0];
  const setCommonIsTouching = y[1];
  const b = /^horizontal/g.test(o_type);
  s.useImperativeHandle(t, function () {
    return {
      dom: gRef.current,
    };
  });
  const w = useEK({
    commonIsTouching,
  });
  const w_firstRender = w.firstRender;
  const w_valueGroup = w.valueGroup;
  const w_setValueGroup = w.setValueGroup;
  const w_runTimeConfig = w.runTimeConfig;
  const w_isMultiThumb = w.isMultiThumb;
  const getLinePosition = s.useCallback(
    function () {
      let e;
      let t;
      const n =
        (e =
          (t = CRef.current) == null ? undefined : t.getBoundingClientRect()) !=
        null
          ? e
          : {
              width: 0,
              left: 0,
              top: 0,
              height: 0,
            };
      const n_width = n.width;
      const n_left = n.left;
      const n_top = n.top;
      const n_height = n.height;
      return {
        length: b ? n_width : n_height,
        start: b ? n_left : n_top,
      };
    },
    [b, w_firstRender],
  );
  const L = useE({
    getLinePosition,
    commonIsTouching,
    valueGroup: w_valueGroup,
  });
  const L_heightStyle = L.heightStyle;
  const L_transitionClass = L.transitionClass;
  const L_activeLineStyle = L.activeLineStyle;
  useEZ({
    lineRef: CRef,
    valueGroup: w_valueGroup,
    setValueGroup: w_setValueGroup,
    getLinePosition,
    setCommonIsTouching,
  });
  const B = useEX({
    valueGroup: w_valueGroup,
  });
  const B_renderPrefixLabel = B.renderPrefixLabel;
  const B_renderSuffixLabel = B.renderSuffixLabel;
  const W = s.useMemo(
    function () {
      if (w_isMultiThumb) {
        const e = ["is-end", "is-start"];
        return [, ,].fill("").map((t, n) => {
          let className = e[n];
          if (w_valueGroup[n] > w_valueGroup[1 - n]) {
            className = e[0];
          } else if (w_valueGroup[n] < w_valueGroup[1 - n]) {
            className = e[1];
          }
          return {
            className,
          };
        });
      }
      return [
        {
          className: "is-end",
        },
      ];
    },
    [w_isMultiThumb && w_valueGroup],
  );
  return s.createElement(
    "div",
    {
      className: d.xF(r + "-slider " + o_className, "is-" + o_type, {
        "is-disabled": o_disabled,
        "show-tooltip": o_showTooltip !== "never" && !o_disabled,
        "show-marks": o_showMarks,
      }),
      style: o_style,
      ref: gRef,
      role: "slider",
      "aria-valuemin": o_min,
      "aria-valuemax": o_max,
      "aria-valuenow": Array.isArray(w_valueGroup)
        ? w_valueGroup[0]
        : w_valueGroup,
      "aria-disabled": o_disabled,
    },
    b ? B_renderPrefixLabel : B_renderSuffixLabel,
    s.createElement(
      "div",
      {
        className: r + "-slider-wrapper",
      },
      s.createElement(E2Component, {
        runTimeConfig: w_runTimeConfig,
        className: L_transitionClass,
      }),
      s.createElement(
        "div",
        {
          className: r + "-slider-line",
          style: L_heightStyle,
          ref: CRef,
        },
        s.createElement(
          "div",
          {
            className: r + "-slider-line is-activated " + L_transitionClass,
            style: _u({}, L_heightStyle, L_activeLineStyle),
          },
          W.map((e, t) =>
            s.createElement(
              E1Component,
              _u(
                {
                  key: t,
                },
                _u(
                  {
                    value: Array.isArray(w_valueGroup)
                      ? w_valueGroup[t]
                      : w_valueGroup,
                    min: o_min,
                    max: o_max,
                    isTouching: commonIsTouching === t,
                  },
                  e,
                ),
              ),
            ),
          ),
        ),
      ),
    ),
    b ? B_renderSuffixLabel : B_renderPrefixLabel,
  );
});
const e5 = s.forwardRef(function (e, ref) {
  const prefixCls = s.useContext(f.FI).prefixCls;
  const r = s.useContext(E$Context);
  const o = _u(
    {},
    r,
    {
      renderThumb: eQ(prefixCls === undefined ? "" : prefixCls),
    },
    e,
  );
  return s.createElement(
    E$Context.Provider,
    {
      value: o,
    },
    s.createElement(e3, {
      ref,
    }),
  );
});
function e6(e, t, n) {
  const r = 100000000000000000 * e;
  const o = 100000000000000000 * t;
  if (n === "-") {
    return (r - o) / 100000000000000000;
  }
  return (r + o) / 100000000000000000;
}
d.DU(e5, "Slider");
const e4 = s.forwardRef(function (e, t) {
  let n;
  let r;
  let o;
  let i;
  let a;
  let l;
  let u;
  let c;
  let v;
  let p;
  let actualInputValue;
  let showValue;
  let C;
  let y;
  let x;
  let E;
  let b;
  let w;
  let k;
  let N;
  let T;
  let R;
  let S;
  let I;
  let minusButtonDisable;
  let M;
  let A;
  let F;
  let addButtonDisable;
  let O;
  let W;
  let H;
  let V;
  let P;
  let z;
  let Y;
  let G;
  let J;
  let j;
  let U;
  let X;
  const e_className = e.className;
  const _ = e_className === undefined ? "" : e_className;
  const e_style = e.style;
  const e_inputStyle = e.inputStyle;
  const e_inputClass = e.inputClass;
  const ee = e_inputClass === undefined ? "" : e_inputClass;
  const e_value = e.value;
  const e_defaultValue = e.defaultValue;
  const defaultValue = e_defaultValue === undefined ? 1 : e_defaultValue;
  const e_allowEmpty = e.allowEmpty;
  const e_digits = e.digits;
  const digits = e_digits === undefined ? 0 : e_digits;
  const e_disabled = e.disabled;
  const eu = e_disabled !== undefined && e_disabled;
  const e_inputReadonly = e.inputReadonly;
  const readOnly = e_inputReadonly !== undefined && e_inputReadonly;
  const e_max = e.max;
  const max = e_max === undefined ? Infinity : e_max;
  const e_min = e.min;
  const min = e_min === undefined ? 1 : e_min;
  const e_equalLimitDisabled = e.equalLimitDisabled;
  const e_step = e.step;
  const e_theme = e.theme;
  const eC = e_theme === undefined ? "default" : e_theme;
  const e_formatter = e.formatter;
  const e_addButton = e.addButton;
  const e_minusButton = e.minusButton;
  const e_renderContent = e.renderContent;
  const e_onBlur = e.onBlur;
  const e_onChange = e.onChange;
  const e_onFocus = e.onFocus;
  const e_onAddButtonClick = e.onAddButtonClick;
  const e_onMinusButtonClick = e.onMinusButtonClick;
  const e_onClick = e.onClick;
  const e_onInput = e.onInput;
  r = (n = {
    defaultValue,
    formatter: e_formatter,
    min,
    max,
    value: e_value,
    digits,
  }).defaultValue;
  o = n.formatter;
  i = n.max;
  a = n.min;
  l = n.value;
  u = n.digits;
  v = (c = s.useState(r))[0];
  p = c[1];
  showValue =
    (actualInputValue = l !== undefined ? l : v) === 5e-324
      ? ""
      : u > 0
        ? parseFloat(String(actualInputValue)).toFixed(u)
        : actualInputValue;
  const eL = {
    updateValue: function (e) {
      const t = typeof e === "function" ? e(v) : e;
      if (o) {
        new Promise((resolve) => {
          resolve(o(Number(t)));
        }).then((e) => {
          p(Math.max(a, Math.min(i, e)));
        });
      } else {
        p(t);
      }
    },
    actualInputValue,
    showValue,
  };
  const eL_updateValue = eL.updateValue;
  const eL_actualInputValue = eL.actualInputValue;
  const eL_showValue = eL.showValue;
  y = (C = {
    actualInputValue: eL_actualInputValue,
    min,
    max,
    step: e_step === undefined ? 1 : e_step,
    disabled: eu,
    digits,
    equalLimitDisabled:
      e_equalLimitDisabled !== undefined && e_equalLimitDisabled,
    updateValue: eL_updateValue,
    onAddButtonClick: e_onAddButtonClick,
    onMinusButtonClick: e_onMinusButtonClick,
  }).actualInputValue;
  x = C.min;
  E = C.max;
  b = C.step;
  w = C.disabled;
  k = C.equalLimitDisabled;
  N = C.updateValue;
  T = C.onAddButtonClick;
  R = C.onMinusButtonClick;
  S = y <= x || w;
  minusButtonDisable = (I = s.useState(S))[0];
  M = I[1];
  A = y >= E || w;
  addButtonDisable = (F = s.useState(A))[0];
  O = F[1];
  s.useEffect(
    function () {
      M(S);
      O(A);
    },
    [S, A],
  );
  const eB = {
    minusButtonDisable,
    addButtonDisable,
    handleMinusButtonClick: function (e) {
      if (!minusButtonDisable) {
        N(function (e) {
          const t = e6(e, b, "-");
          if (t < x) {
            if (k) {
              return e;
            }
            return x;
          }
          return t;
        });
        if (R) {
          R(e);
        }
      }
    },
    handleAddButtonClick: function (e) {
      if (!addButtonDisable) {
        N(function (e) {
          const t = e6(Number(e), b, "+");
          if (t > E) {
            if (k) {
              return e;
            }
            return E;
          }
          return t;
        });
        if (T) {
          T(e);
        }
      }
    },
  };
  const eB_minusButtonDisable = eB.minusButtonDisable;
  const eB_addButtonDisable = eB.addButtonDisable;
  const eB_handleAddButtonClick = eB.handleAddButtonClick;
  const eB_handleMinusButtonClick = eB.handleMinusButtonClick;
  H = (W = {
    defaultValue,
    min,
    max,
    digits,
    actualInputValue: eL_actualInputValue,
    allowEmpty: e_allowEmpty !== undefined && e_allowEmpty,
    updateValue: eL_updateValue,
    onBlur: e_onBlur,
    onChange: e_onChange,
    onInput: e_onInput,
  }).defaultValue;
  V = W.min;
  P = W.max;
  z = W.digits;
  Y = W.actualInputValue;
  G = W.allowEmpty;
  J = W.updateValue;
  j = W.onBlur;
  U = W.onChange;
  X = W.onInput;
  m.w5(
    function () {
      if (U) {
        U(Y);
      }
    },
    [Y],
  );
  const eV = {
    handleInput: function (e) {
      const value = e.target.value;
      const n = Number(value);
      const r = value.indexOf(".");
      if (z > 0 && r !== -1) {
        J(value.slice(r + 1).length > z ? Y : n);
      } else if (G && value === "") {
        J(5e-324);
      } else {
        J(n);
      }
      if (X) {
        X(e);
      }
    },
    handleBlur: function (e) {
      const value = e.target.value;
      const n = Number(value);
      if (G && value === "") {
        J(5e-324);
      } else if (G || value !== "") {
        J(Math.max(V, Math.min(P, n)));
      } else {
        J(H);
      }
      if (j) {
        j(e);
      }
    },
  };
  const eV_handleInput = eV.handleInput;
  const eV_handleBlur = eV.handleBlur;
  const eqRef = s.useRef(null);
  const eYRef = s.useRef(null);
  s.useImperativeHandle(t, function () {
    return {
      dom: eqRef.current,
      input: eYRef.current,
      changeValue: function (e) {
        let t = e != null ? e : defaultValue;
        eL_updateValue((t = Math.min(max, Math.max(t, min))));
      },
    };
  });
  return s.createElement(f.Wb, null, function (e) {
    const e_prefixCls = e.prefixCls;
    return s.createElement(
      "div",
      {
        className: d.xF(e_prefixCls + "-stepper", e_prefixCls + "-" + eC, _),
        style: e_style,
        ref: eqRef,
        onClick: e_onClick,
      },
      s.createElement(
        "div",
        {
          "aria-label": "decrease",
          onClick: eB_handleMinusButtonClick,
        },
        e_minusButton ||
          s.createElement(
            "div",
            {
              className: d.xF(e_prefixCls + "-stepper-minus-button"),
            },
            s.createElement(D, {
              className: d.xF(e_prefixCls + "-stepper-minus-button-icon", {
                disabled: eB_minusButtonDisable,
              }),
            }),
          ),
      ),
      e_renderContent
        ? e_renderContent(eL_actualInputValue)
        : s.createElement("input", {
            style: e_inputStyle,
            className: d.xF(e_prefixCls + "-stepper-input", ee),
            onFocus: e_onFocus,
            onInput: eV_handleInput,
            onBlur: eV_handleBlur,
            disabled: eu,
            value: eL_showValue,
            readOnly,
            ref: eYRef,
            type: "number",
            role: "spinbutton",
            "aria-valuenow": Number(eL_showValue),
            "aria-valuemax": max,
            "aria-valuemin": min,
          }),
      s.createElement(
        "div",
        {
          "aria-label": "increase",
          onClick: eB_handleAddButtonClick,
        },
        e_addButton ||
          s.createElement(
            "div",
            {
              className: d.xF(e_prefixCls + "-stepper-add-button"),
            },
            s.createElement(q, {
              className: d.xF(e_prefixCls + "-stepper-add-button-icon", {
                disabled: eB_addButtonDisable,
              }),
            }),
          ),
      ),
    );
  });
});
d.DU(e4, "Stepper");
const Step = s.forwardRef(function (e, t) {
  const e_title = e.title;
  const e_description = e.description;
  const e_icon = e.icon;
  const i = s.useContext(E9Context);
  const i_iconType = i.iconType;
  const i_current = i.current;
  const i_direction = i.direction;
  const i_index = i.index;
  const m = i_index === undefined ? 0 : i_index;
  const i_status = i.status;
  const i_align = i.align;
  const i_changeIndex = i.changeIndex;
  const g = e.status || i_status;
  const C = e.align || i_align;
  const yRef = s.useRef(null);
  s.useImperativeHandle(t, function () {
    return {
      dom: yRef.current,
    };
  });
  const x = s.useMemo(
    function () {
      return (
        g || (i_current < m ? "wait" : i_current === m ? "process" : "finish")
      );
    },
    [g, m, i_current],
  );
  return s.createElement(f.Wb, null, function (e) {
    let t;
    const e_prefixCls = e.prefixCls;
    return s.createElement(
      "div",
      {
        ref: yRef,
        className: d.xF(
          e_prefixCls + "-steps-item",
          e_prefixCls + "-steps-item-align-" + C,
          x,
          i_direction,
          i_iconType,
        ),
        onClick: function () {
          return i_changeIndex(m);
        },
      },
      s.createElement("div", {
        className: d.xF(
          e_prefixCls + "-steps-item-tail",
          e_prefixCls + "-steps-item-tail-status-" + x,
          e_prefixCls + "-steps-item-tail-align-" + C,
          x + "-tail-color-with-config",
        ),
      }),
      e_icon
        ? s.createElement(
            "div",
            {
              className: d.xF(
                e_prefixCls + "-steps-item-custom-icon",
                x + "-custom-icon-bg-color-with-config",
              ),
            },
            e_icon,
          )
        : s.createElement(
            "div",
            {
              className: d.xF(
                e_prefixCls + "-steps-item-icon",
                x + "-bg-color-with-config",
              ),
            },
            i_iconType === "number"
              ? (x === "finish"
                  ? (t = s.createElement(j, null))
                  : x === "error" && (t = s.createElement(X, null)),
                t ||
                  s.createElement(
                    "span",
                    {
                      className: d.xF(e_prefixCls + "-steps-item-icon-num"),
                    },
                    m + 1,
                  ))
              : s.createElement("span", {
                  className: d.xF(e_prefixCls + "-steps-item-icon-dot"),
                }),
          ),
      e_title || e_description
        ? s.createElement(
            "div",
            {
              className: d.xF(
                e_prefixCls + "-steps-item-content",
                e_prefixCls + "-steps-item-content-align-" + C,
              ),
            },
            e_title
              ? s.createElement(
                  "div",
                  {
                    className: d.xF(
                      e_prefixCls + "-steps-item-title",
                      x + "-title-color-with-config",
                    ),
                  },
                  e_title,
                )
              : null,
            e_description
              ? s.createElement(
                  "div",
                  {
                    className: d.xF(e_prefixCls + "-steps-item-description"),
                  },
                  e_description,
                )
              : null,
          )
        : null,
    );
  });
});
var E9Context = s.createContext({
  changeIndex: function () {},
});
const e8 = s.forwardRef(function (e, t) {
  const e_className = e.className;
  const r = e_className === undefined ? "" : e_className;
  const e_style = e.style;
  const e_children = e.children;
  const e_direction = e.direction;
  const l = e_direction === undefined ? "horizontal" : e_direction;
  const e_align = e.align;
  const e_iconType = e.iconType;
  const iconType = e_iconType === undefined ? "number" : e_iconType;
  const e_current = e.current;
  const e_defaultIndex = e.defaultIndex;
  const e_status = e.status;
  const C = e_status === undefined ? "process" : e_status;
  const e_items = e.items;
  const e_onClick = e.onClick;
  const e_onChange = e.onChange;
  const b = l === "vertical" ? "start" : "center";
  const align = e_align !== undefined ? e_align : b;
  const k = s.useState(
    Number(e_defaultIndex === undefined ? 0 : e_defaultIndex),
  );
  const N = k[0];
  const T = k[1];
  const R = m.oq(e_current === undefined ? N : e_current);
  const current = R[0];
  const I = R[1];
  const L = R[2];
  const MRef = s.useRef(null);
  const A = m.Jg();
  function F(e) {
    if (e_onClick != null) {
      e_onClick(e);
    }
    T(e);
    if (e !== I.current) {
      if (e_onChange != null) {
        e_onChange(e);
      }
    }
  }
  s.useImperativeHandle(t, function () {
    return {
      dom: MRef.current,
    };
  });
  s.useEffect(
    function () {
      L(e_current === undefined ? N : e_current);
    },
    [e_current, N],
  );
  const B = s.useCallback(
    function (e, t) {
      return s.createElement(
        E9Context.Provider,
        {
          value: {
            iconType,
            current,
            direction: l,
            index: t,
            status: current === t ? C : undefined,
            align,
            changeIndex: F,
          },
          key: t,
        },
        e,
      );
    },
    [iconType, current, l, align],
  );
  return s.createElement(f.Wb, null, function (e) {
    const e_prefixCls = e.prefixCls;
    return s.createElement(
      "div",
      {
        className:
          e_prefixCls + "-steps all-border-box " + r + " " + l + " " + A,
        style: e_style,
        ref: MRef,
      },
      e_items
        ? e_items.map((e, t) =>
            B(
              s.createElement(
                Step,
                _u({}, e, {
                  key: t,
                }),
              ),
              t,
            ),
          )
        : s.Children.toArray(e_children).map((e, t) => B(e, t)),
    );
  });
});
d.DU(e8, {
  Step,
});
require("Osm");
const te = s.forwardRef(function (e, t) {
  const useRtl = s.useContext(f.FI).useRtl;
  const r = m.Jg();
  const e_className = e.className;
  const e_style = e.style;
  const e_platform = e.platform;
  const l = e_platform === undefined ? r : e_platform;
  const e_checked = e.checked;
  const e_disabled = e.disabled;
  const v = e_disabled !== undefined && e_disabled;
  const e_defaultChecked = e.defaultChecked;
  const e_text = e.text;
  const e_shape = e.shape;
  const C = e_shape === undefined ? "fully" : e_shape;
  const e_innerArea = e.innerArea;
  const e_onChange = e.onChange;
  const e_onTouchStart = e.onTouchStart;
  const e_onTouchEnd = e.onTouchEnd;
  const e_onClick = e.onClick;
  const k = s.useState(0);
  const N = k[0];
  const T = k[1];
  let R = false;
  R =
    "checked" in e
      ? !!e_checked
      : e_defaultChecked !== undefined && e_defaultChecked;
  const S = s.useState(R);
  const checked = S[0];
  const L = S[1];
  const MRef = s.useRef(null);
  function A(e) {
    if (e_onTouchStart) {
      e_onTouchStart(e);
    }
    if (!v) {
      T(e.touches && e.touches[0] ? e.touches[0].clientX : 0);
    }
  }
  function F(t) {
    if (e_onTouchEnd) {
      e_onTouchEnd(t);
    }
    if (!v) {
      const r =
        (t.changedTouches && t.changedTouches[0]
          ? t.changedTouches[0].clientX
          : 0) - N;
      let o = false;
      o =
        (useRtl ? r < 0 : r > 0) ||
        ((useRtl ? !(r > 0) : !(r < 0)) && !checked);
      if (!("checked" in e)) {
        L(o);
      }
      if (e_onChange) {
        e_onChange(o);
      }
    }
  }
  s.useImperativeHandle(t, function () {
    return {
      dom: MRef.current,
    };
  });
  s.useEffect(
    function () {
      if ("checked" in e) {
        L(!!e_checked);
      }
    },
    [e_checked],
  );
  return s.createElement(f.Wb, null, function (e) {
    const e_prefixCls = e.prefixCls;
    return s.createElement(
      "div",
      {
        role: "switch",
        "aria-checked": checked,
        "aria-disabled": v,
        tabIndex: 0,
        ref: MRef,
        className: d.xF(
          e_prefixCls + "-switch all-border-box",
          e_className,
          "type-" + l,
          "system-" + r,
          C,
          {
            checked,
            disabled: v,
          },
        ),
        style: e_style,
        onTouchStart: A,
        onTouchEnd: F,
        onClick: e_onClick,
      },
      e_text
        ? s.createElement(
            "span",
            {
              className: e_prefixCls + "-switch-text",
            },
            checked ? e_text.off || "" : e_text.on || "",
          )
        : null,
      s.createElement(
        "div",
        {
          className: e_prefixCls + "-switch-inner",
        },
        e_innerArea || null,
      ),
    );
  });
});
d.DU(te, "Switch");
const TtContext = s.createContext({
  changeIndex: function () {},
  active: false,
  index: 0,
  activeCustomStyle: {},
});
const Item = s.forwardRef(function (e, t) {
  const n = s.useContext(TtContext);
  const n_active = n.active;
  const n_changeIndex = n.changeIndex;
  const n_index = n.index;
  const n_activeCustomStyle = n.activeCustomStyle;
  const e_onClick = e.onClick;
  const e_className = e.className;
  const e_style = e.style;
  const vRef = s.useRef(null);
  s.useImperativeHandle(t, function () {
    return {
      dom: vRef.current,
    };
  });
  const p = (e) => {
    if (e_onClick != null) {
      e_onClick(e);
    }
    n_changeIndex(n_index);
  };
  return s.createElement(f.Wb, null, function (t) {
    let o;
    let i;
    let l;
    let f;
    let h;
    const t_prefixCls = t.prefixCls;
    return s.createElement(
      "div",
      {
        className: d.xF(
          t_prefixCls + "-tab-bar-item",
          {
            [t_prefixCls + "-tab-bar-item-active"]: n_active,
          },
          e_className,
        ),
        style: _u({}, e_style, n_active ? n_activeCustomStyle : {}),
        ref: vRef,
        onClick: function (e) {
          return p(e);
        },
      },
      ((o = e.icon
        ? s.createElement(
            "div",
            {
              className: d.xF(t_prefixCls + "-tab-bar-item-icon"),
            },
            typeof e.icon === "function" ? e.icon(n_active) : e.icon,
          )
        : null),
      (i = e.title
        ? s.createElement(
            "div",
            {
              className: d.xF(t_prefixCls + "-tab-bar-item-title", {
                [t_prefixCls + "-tab-bar-item-only-title"]: !o,
              }),
            },
            typeof e.title === "function" ? e.title(n_active) : e.title,
          )
        : null),
      (l =
        e.extra && typeof e.extra === "function" ? e.extra(n_active) : e.extra),
      (f =
        e.child &&
        s.createElement(
          "div",
          {
            className: d.xF(t_prefixCls + "-tab-bar-item-children"),
          },
          typeof e.child === "function" ? e.child(n_active) : e.child,
        )),
      (h =
        o || l
          ? s.createElement(
              "div",
              {
                className: d.xF(t_prefixCls + "-extra-wrap"),
              },
              o,
              l,
            )
          : null),
      f || s.createElement(s.Fragment, null, h, i)),
    );
  });
});
const tr = s.forwardRef(function (e, t) {
  const e_defaultActiveIndex = e.defaultActiveIndex;
  const e_activeIndex = e.activeIndex;
  const e_className = e.className;
  const e_fixed = e.fixed;
  const a = e_fixed === undefined || e_fixed;
  const e_style = e.style;
  const e_dataSource = e.dataSource;
  const e_children = e.children;
  const e_onChange = e.onChange;
  const e_activeCustomStyle = e.activeCustomStyle;
  const g = s.useState(
    e_defaultActiveIndex === undefined ? 0 : e_defaultActiveIndex,
  );
  const C = g[0];
  const y = g[1];
  const x = m.oq(e_activeIndex === undefined ? C : e_activeIndex);
  const E = x[0];
  const b = x[1];
  const w = x[2];
  s.useEffect(
    function () {
      w(e_activeIndex === undefined ? C : e_activeIndex);
    },
    [e_activeIndex, C],
  );
  const kRef = s.useRef(null);
  s.useImperativeHandle(t, function () {
    return {
      dom: kRef.current,
      changeIndex: T,
    };
  });
  const N = s.useCallback(
    function (e, t) {
      return s.createElement(
        TtContext.Provider,
        {
          value: {
            active: t === E,
            changeIndex: T,
            index: t,
            activeCustomStyle: e_activeCustomStyle,
          },
          key: t,
        },
        e,
      );
    },
    [E],
  );
  function T(e) {
    y(e);
    if (e !== b.current) {
      if (e_onChange != null) {
        e_onChange(e);
      }
    }
  }
  return s.createElement(f.Wb, null, function (e) {
    const e_prefixCls = e.prefixCls;
    return s.createElement(
      "div",
      {
        className: d.xF(e_prefixCls + "-tab-bar", e_className, {
          [e_prefixCls + "-tab-bar-fixed"]: a,
        }),
        style: e_style,
        ref: kRef,
      },
      e_dataSource
        ? e_dataSource.map((e, t) =>
            N(
              s.createElement(
                Item,
                _u(
                  {
                    key: t,
                  },
                  e,
                ),
              ),
              t,
            ),
          )
        : s.Children.toArray(e_children).map((e, t) => N(e, t)),
    );
  });
});
d.DU(tr, {
  Item,
});
const to = s.forwardRef(function (e, t) {
  const e_className = e.className;
  const e_style = e.style;
  const e_type = e.type;
  const i = e_type === undefined ? "primary" : e_type;
  const e_icon = e.icon;
  const e_children = e.children;
  const e_size = e.size;
  const v = e_size === undefined ? "medium" : e_size;
  const e_color = e.color;
  const e_bgColor = e.bgColor;
  const e_borderColor = e.borderColor;
  const e_borderStyle = e.borderStyle;
  const borderStyle = e_borderStyle === undefined ? "solid" : e_borderStyle;
  const e_halfBorder = e.halfBorder;
  const E = e_halfBorder === undefined || e_halfBorder;
  const e_closeable = e.closeable;
  const e_closeIcon = e.closeIcon;
  const e_closeColor = e.closeColor;
  const e_filleted = e.filleted;
  const e_onClose = e.onClose;
  const e_onClick = e.onClick;
  const SRef = s.useRef(null);
  const I = m.Jg();
  s.useImperativeHandle(t, function () {
    return {
      dom: SRef.current,
    };
  });
  return s.createElement(f.Wb, null, function (e) {
    const t = e.prefixCls + "-tag";
    return s.createElement(
      "div",
      {
        className: d.xF(
          t,
          "all-border-box",
          e_className,
          t + "-" + i,
          {
            "half-border": E,
          },
          I,
          "size-" + v,
          {
            filleted: e_filleted,
          },
        ),
        style: _u(
          {
            color: e_color,
            background: e_bgColor,
            borderColor: e_borderColor,
            borderStyle,
          },
          e_style || {},
        ),
        ref: SRef,
        onClick: e_onClick,
      },
      e_icon,
      s.createElement(
        "span",
        {
          className: "tag-text",
        },
        e_children,
      ),
      e_closeable
        ? s.createElement(
            "div",
            {
              onClick: function (e) {
                e.stopPropagation();
                if (e_onClose) {
                  e_onClose(e);
                }
              },
              className: "tag-close-wrap",
            },
            e_closeIcon ||
              s.createElement(P, {
                className: "tag-close-icon",
                color: e_closeColor,
              }),
          )
        : null,
    );
  });
});
const List = s.forwardRef(function (e, t) {
  const e_className = e.className;
  const e_style = e.style;
  const e_list = e.list;
  const e_type = e.type;
  const e_showAddButton = e.showAddButton;
  const l = e_showAddButton === undefined || e_showAddButton;
  const e_addArea = e.addArea;
  const e_horizontalPadding = e.horizontalPadding;
  const e_verticalPadding = e.verticalPadding;
  const e_onAdd = e.onAdd;
  const e_onClose = e.onClose;
  const gRef = s.useRef(null);
  s.useImperativeHandle(t, function () {
    return {
      dom: gRef.current,
    };
  });
  return s.createElement(f.Wb, null, function (e) {
    let t;
    const e_prefixCls = e.prefixCls;
    const e_locale = e.locale;
    return s.createElement(
      "div",
      {
        className: d.xF(e_prefixCls + "-tag-list", e_className),
        style:
          ((t = {}),
          e_verticalPadding && typeof e_verticalPadding === "string"
            ? (t = {
                marginBottom: "-" + e_verticalPadding,
              })
            : e_verticalPadding &&
              typeof e_verticalPadding === "number" &&
              (t = {
                marginBottom: -1 * e_verticalPadding,
              }),
          _u({}, e_style || {}, t)),
        ref: gRef,
      },
      e_list.map((e, t) => {
        let n;
        let r;
        return s.createElement(
          to,
          _u(
            {
              key: t,
            },
            e,
            {
              style:
                ((n = e.style || {}),
                (r =
                  t !== e_list.length - 1 || l
                    ? {
                        marginRight: e_horizontalPadding,
                      }
                    : {}),
                _u({}, n, r, {
                  marginBottom: e_verticalPadding,
                })),
              type: e_type,
              onClose: function (n) {
                if (e.onClose) {
                  e.onClose(n);
                }
                if (e_onClose) {
                  e_onClose(t, n);
                }
              },
            },
          ),
        );
      }),
      l
        ? s.createElement(
            "div",
            {
              className: "tag-list-add-wrap",
              onClick: e_onAdd,
            },
            e_addArea !== undefined
              ? e_addArea
              : s.createElement(
                  to,
                  {
                    type: e_type,
                    className: "tag-list-add",
                    borderStyle: "dashed",
                    icon: s.createElement(q, null),
                    style: {
                      marginBottom: e_verticalPadding,
                    },
                  },
                  e_locale == null ? undefined : e_locale.Tag.addTag,
                ),
          )
        : null,
    );
  });
});
d.DU(to, {
  List,
});
const ta = s.forwardRef(function (e, t) {
  const n = e.id;
  const e_name = e.name;
  const e_rows = e.rows;
  const e_placeholder = e.placeholder;
  const e_readOnly = e.readOnly;
  const e_onKeyUp = e.onKeyUp;
  const e_onKeyPress = e.onKeyPress;
  const e_disabled = e.disabled;
  const e_autosize = e.autosize;
  const e_cloneNodeWhenAutosize = e.cloneNodeWhenAutosize;
  const e_showStatistics = e.showStatistics;
  const g = e_showStatistics === undefined || e_showStatistics;
  const e_statisticsMaxlength = e.statisticsMaxlength;
  const e_statisticsLengthCaculator = e.statisticsLengthCaculator;
  const e_onErrStatusChange = e.onErrStatusChange;
  const e_onErrValueChange = e.onErrValueChange;
  const e_renderStatistics = e.renderStatistics;
  const e_maxLength = e.maxLength;
  const e_textareaClass = e.textareaClass;
  const e_textareaStyle = e.textareaStyle;
  const e_nativeProps = e.nativeProps;
  const R = e_nativeProps === undefined ? {} : e_nativeProps;
  const SRef = s.useRef(null);
  const IRef = s.useRef(null);
  const L = useEs(e, SRef);
  const L_inputValue = L.inputValue;
  const L_handleClick = L.handleClick;
  const L_handleChange = L.handleChange;
  const L_handleInput = L.handleInput;
  const L_handleKeyDown = L.handleKeyDown;
  const L_handleFocus = L.handleFocus;
  const L_handleBlur = L.handleBlur;
  const L_renderWrapper = L.renderWrapper;
  const L_wrapRef = L.wrapRef;
  const P = e_statisticsMaxlength || e_maxLength;
  const z = s.useMemo(
    function () {
      if (e_statisticsLengthCaculator) {
        return e_statisticsLengthCaculator(L_inputValue);
      }
      const e = (L_inputValue || "").replace(/\n/g, "");
      if (e) {
        return String(e).length;
      }
      return 0;
    },
    [L_inputValue, e_statisticsLengthCaculator],
  );
  const exceed = !!P && z > P;
  function resize() {
    if (e_autosize && SRef.current) {
      let e = SRef.current;
      if (e_cloneNodeWhenAutosize) {
        const t = SRef.current.cloneNode(true);
        if (IRef.current) {
          document.body.replaceChild(t, IRef.current);
        } else {
          document.body.appendChild(t);
        }
        const n = window.getComputedStyle(SRef.current);
        [
          "width",
          "fontSize",
          "lineHeight",
          "letterSpacing",
          "wordSpacing",
        ].forEach((e) => {
          t.style[e] = n[e];
        });
        t.classList.add("fake-textarea");
        IRef.current = t;
        e = t;
      }
      e.style.height = "auto";
      const r = Math.max(e.clientHeight, e.scrollHeight);
      SRef.current.style.height = r + "px";
    }
  }
  s.useImperativeHandle(
    t,
    function () {
      return {
        dom: L_wrapRef.current,
        textarea: SRef.current,
        resize,
      };
    },
    [resize],
  );
  s.useEffect(function () {
    return function () {
      if (IRef.current) {
        document.body.removeChild(IRef.current);
      }
    };
  }, []);
  s.useEffect(
    function () {
      resize();
    },
    [L_inputValue, e_placeholder],
  );
  s.useEffect(
    function () {
      if (e_onErrStatusChange) {
        e_onErrStatusChange(exceed);
      }
    },
    [exceed],
  );
  s.useEffect(
    function () {
      if (e_onErrValueChange) {
        e_onErrValueChange(exceed, z, P);
      }
    },
    [P, z],
  );
  return s.createElement(f.Wb, null, function (e) {
    const e_prefixCls = e.prefixCls;
    return L_renderWrapper(
      e_prefixCls + "-input",
      `textarea ${g ? "has-stat" : ""}`,
      s.createElement(
        s.Fragment,
        null,
        s.createElement(
          "textarea",
          _u({}, R, {
            id: n,
            name: e_name,
            rows: e_rows,
            placeholder: e_placeholder,
            readOnly: e_readOnly,
            onFocus: L_handleFocus,
            onBlur: L_handleBlur,
            onKeyUp: e_onKeyUp,
            onKeyPress: e_onKeyPress,
            ref: SRef,
            className: d.xF(e_prefixCls + "-textarea", e_textareaClass),
            style: e_textareaStyle,
            value: L_inputValue,
            maxLength: e_maxLength,
            disabled: e_disabled,
            onChange: L_handleChange,
            onInput: L_handleInput,
            onKeyDown: L_handleKeyDown,
            onClick: L_handleClick,
          }),
        ),
        g && P
          ? s.createElement(
              "span",
              {
                className: d.xF("statistic-text", {
                  exceed,
                }),
              },
              e_renderStatistics ? e_renderStatistics(z, P) : z + "/" + P,
            )
          : null,
      ),
    );
  });
});
d.DU(ta, "Textarea");
