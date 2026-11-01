import i from "bT";
import { A as A_1 } from "./module-puV.js";
import { QO } from "./module-ce.js";
import { A as A_2 } from "./module-W3.js";
import { A as A_3 } from "./module-Hmv.js";
import { A as A_4 } from "./module-Z6Q.js";
import { Et, Gv, Kg, b0, cy } from "./module-Pl5.js";
import m from "eP0";
import v from "Uww";
import h from "hM";
import { A as A_5 } from "./module-LTg.js";
import { A as A_6 } from "./module-Bd_2.js";
import { A as A_7 } from "./module-hn.js";
import { A as A_8 } from "./module-Ku_2.js";
import { A as A_9 } from "./module-To_2.js";
import { A as A_10 } from "./module-Byn.js";
import { A as A_11 } from "./module-gNs.js";
let r;
let o;
const c = i.forwardRef(function (e, t) {
  const n = i.useContext(QO).getPrefixCls("typography");
  const e_className = e.className;
  const e_style = e.style;
  const e_children = e.children;
  const u = A_1(n, e_className);
  return i.createElement(
    "article",
    {
      ref: t,
      style: e_style,
      className: u,
    },
    e_children,
  );
});
c.displayName = "Typography";
const d = (e, t) => {
  let n;
  let r;
  let o;
  let i;
  let l = {
    label: 0,
    sent: function () {
      if (1 & o[0]) {
        throw o[1];
      }
      return o[1];
    },
    trys: [],
    ops: [],
  };
  i = {
    next: a(0),
    throw: a(1),
    return: a(2),
  };
  if (typeof Symbol === "function") {
    i[Symbol.iterator] = function () {
      return this;
    };
  }
  return i;
  function a(i) {
    return function (a) {
      let c = [i, a];
      if (n) {
        throw TypeError("Generator is already executing.");
      }
      while (l) {
        try {
          n = 1;
          if (
            r &&
            (o =
              2 & c[0]
                ? r.return
                : c[0]
                  ? r.throw || ((o = r.return) && o.call(r), 0)
                  : r.next) &&
            !(o = o.call(r, c[1])).done
          ) {
            return o;
          }
          r = 0;
          if (o) {
            c = [2 & c[0], o.value];
          }
          switch (c[0]) {
            case 0:
            case 1:
              o = c;
              break;
            case 4:
              l.label++;
              return {
                value: c[1],
                done: false,
              };
            case 5:
              l.label++;
              r = c[1];
              c = [0];
              continue;
            case 7:
              c = l.ops.pop();
              l.trys.pop();
              continue;
            default:
              if (
                !(o = (o = l.trys).length > 0 && o[o.length - 1]) &&
                (c[0] === 6 || c[0] === 2)
              ) {
                l = 0;
                continue;
              }
              if (c[0] === 3 && (!o || (c[1] > o[0] && c[1] < o[3]))) {
                l.label = c[1];
                break;
              }
              if (c[0] === 6 && l.label < o[1]) {
                l.label = o[1];
                o = c;
                break;
              }
              if (o && l.label < o[2]) {
                l.label = o[2];
                l.ops.push(c);
                break;
              }
              if (o[2]) {
                l.ops.pop();
              }
              l.trys.pop();
              continue;
          }
          c = t.call(e, l);
        } catch (error) {
          c = [6, error];
          r = 0;
        } finally {
          o = 0;
          n = 0;
        }
      }
      if (5 & c[0]) {
        throw c[1];
      }
      return {
        value: c[0] ? c[1] : undefined,
        done: true,
      };
    };
  }
};
const y = (e) => Kg(e) || Et(e);
function g(e) {
  const t = [""];
  i.Children.forEach(e, function (e) {
    const n = t.length - 1;
    const r = t[n];
    if (y(e) && y(r)) {
      t[n] = "" + r + e;
    } else if (e && e.props && e.props.children) {
      t.push(g(e.props.children));
    }
  });
  return t.join("");
}
const x = (e, t) => {
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
function EComponent(e) {
  const e_children = e.children;
  const e_copyable = e.copyable;
  const e_editable = e.editable;
  const e_ellipsis = e.ellipsis;
  const e_expanding = e.expanding;
  const e_setEditing = e.setEditing;
  const e_onClickExpand = e.onClickExpand;
  const e_forceShowExpand = e.forceShowExpand;
  const e_isEllipsis = e.isEllipsis;
  const e_currentContext = e.currentContext;
  const C = e_currentContext === undefined ? {} : e_currentContext;
  const w = A_3();
  const C_getPrefixCls = C.getPrefixCls;
  const C_locale = C.locale;
  const P = C_getPrefixCls("typography");
  const A = x(i.useState(false), 2);
  const N = A[0];
  const k = A[1];
  const TRef = i.useRef(null);
  const j = Gv(e_copyable) ? e_copyable : {};
  const R = Gv(e_ellipsis) ? e_ellipsis : {};
  const I = Gv(e_editable) ? e_editable : {};
  const F = cy(R.expandNodes)
    ? R.expandNodes
    : [C_locale.Typography.fold, C_locale.Typography.unfold];
  function M(e) {
    if (!N) {
      const n = j.text !== undefined ? j.text : g(e_children);
      (function (e) {
        let t;
        let n;
        let r;
        let o;
        t = this;
        n = undefined;
        r = undefined;
        o = function () {
          let t;
          let n;
          let r;
          let o;
          let i;
          return d(this, (l) => {
            switch (l.label) {
              case 0:
                if (!(navigator.clipboard && navigator.clipboard.writeText)) {
                  return [3, 4];
                }
                l.label = 1;
              case 1:
                l.trys.push([1, 3, , 4]);
                return [4, navigator.clipboard.writeText(e)];
              case 2:
                l.sent();
                return [2];
              case 3:
                console.error(
                  (t = l.sent()) != null
                    ? t
                    : new DOMException(
                        "The request is not allowed",
                        "NotAllowedError",
                      ),
                );
                return [3, 4];
              case 4:
                n = document.createElement("span");
                n.textContent = e;
                n.style.whiteSpace = "pre";
                document.body.appendChild(n);
                r = window.getSelection();
                o = window.document.createRange();
                r.removeAllRanges();
                o.selectNode(n);
                r.addRange(o);
                i = false;
                try {
                  i = window.document.execCommand("copy");
                } catch (error) {
                  console.log("error", error);
                }
                r.removeAllRanges();
                window.document.body.removeChild(n);
                return [
                  2,
                  i
                    ? Promise.resolve()
                    : Promise.reject(
                        new DOMException(
                          "The request is not allowed",
                          "NotAllowedError",
                        ),
                      ),
                ];
            }
          });
        };
        new (r || (r = Promise))(function (e, i) {
          function l(e) {
            try {
              c(o.next(e));
            } catch (error) {
              i(error);
            }
          }
          function a(e) {
            try {
              c(o.throw(e));
            } catch (error) {
              i(error);
            }
          }
          function c(t) {
            let n;
            if (t.done) {
              e(t.value);
            } else {
              ((n = t.value) instanceof r
                ? n
                : new r(function (e) {
                    e(n);
                  })
              ).then(l, a);
            }
          }
          c((o = o.apply(t, n || [])).next());
        });
      })(n);
      k(true);
      if (j.onCopy) {
        j.onCopy(n, e);
      }
      TRef.current = setTimeout(() => {
        k(false);
      }, 3000);
    }
  }
  i.useEffect(function () {
    return function () {
      clearTimeout(TRef.current);
      TRef.current = null;
    };
  }, []);
  const _ = function (e) {
    if (I.onStart) {
      I.onStart(g(e_children), e);
    }
    e_setEditing(true);
  };
  const V = j.tooltips || [
    C_locale.Typography.copy,
    C_locale.Typography.copied,
  ];
  const D =
    e_copyable &&
    i.createElement(
      A_4,
      {
        content: N ? V[1] : V[0],
      },
      i.createElement(
        "span",
        {
          className: N ? P + "-operation-copied" : P + "-operation-copy",
          onClick: M,
          role: "button",
          "aria-label": V[0],
          tabIndex: 0,
          ...w({
            onPressEnter: M,
          }),
        },
        N ? i.createElement(v.A, null) : j.icon || i.createElement(m.A, null),
      ),
    );
  const z =
    e_editable &&
    i.createElement(
      A_4,
      {
        content: C_locale.Typography.edit,
      },
      i.createElement(
        "span",
        {
          tabIndex: 0,
          "aria-label": C_locale.Typography.edit,
          role: "button",
          className: P + "-operation-edit",
          onClick: _,
          ...w({
            onPressEnter: _,
          }),
        },
        i.createElement(h.A, null),
      ),
    );
  const L =
    e_forceShowExpand || (R.expandable && e_isEllipsis)
      ? i.createElement(
          "a",
          {
            className: P + "-operation-expand",
            onClick: e_onClickExpand,
            role: "button",
            tabIndex: 0,
            "aria-label": C_locale.Typography.unfold,
            ...w({
              onPressEnter: e_onClickExpand,
            }),
          },
          e_expanding ? F[0] : F[1],
        )
      : null;
  return i.createElement(i.Fragment, null, L, z, D);
}
function WComponent(e) {
  const e_prefixCls = e.prefixCls;
  const e_children = e.children;
  const e_setEditing = e.setEditing;
  const e_editableConfig = e.editableConfig;
  const a = A_1(e_prefixCls + "-typography", e_prefixCls + "-edit-content");
  const c = g(e_children);
  const uRef = i.useRef(null);
  function onPressEnter() {
    e_setEditing(false);
    if (e_editableConfig.onEnd) {
      e_editableConfig.onEnd(c);
    }
  }
  i.useEffect(function () {
    if (uRef.current && uRef.current.focus) {
      uRef.current.focus();
    }
    if (uRef.current && uRef.current.dom) {
      const e = uRef.current.dom.value.length;
      uRef.current.dom.setSelectionRange(e, e);
    }
  }, []);
  return i.createElement(
    "div",
    {
      className: a,
    },
    i.createElement(A_5.TextArea, {
      onBlur: function () {
        onPressEnter();
      },
      ref: uRef,
      value: c,
      autoSize: true,
      onChange: function (e) {
        if (e_editableConfig.onChange) {
          e_editableConfig.onChange(e);
        }
      },
      onPressEnter,
    }),
  );
}
const A = {
  position: "top",
  trigger: "hover",
  unmountOnExit: true,
};
const N = i.forwardRef(function (e, t) {
  const r = i.useContext(QO);
  const r_getPrefixCls = r.getPrefixCls;
  const r_componentConfig = r.componentConfig;
  const r_rtl = r.rtl;
  const s = A_6(
    e,
    A,
    r_componentConfig == null ? undefined : r_componentConfig.Popover,
  );
  const {
    style,
    className,
    children,
    position,
    getPopupContainer,
    trigger,
    defaultPopupVisible,
    popupVisible,
    triggerProps,
    unmountOnExit,
    onVisibleChange,
    content,
    title,
    ...rest
  } = s;
  const T = r_getPrefixCls("popover");
  return i.createElement(
    A_4,
    {
      ...rest,
      ref: t,
      style: {
        maxWidth: 350,
        ...style,
      },
      className,
      prefixCls: T,
      getPopupContainer,
      position,
      trigger,
      content: i.createElement(
        "div",
        {
          className: A_1(T + "-inner", {
            [T + "-inner-rtl"]: r_rtl,
          }),
        },
        title
          ? i.createElement(
              "div",
              {
                className: T + "-title",
              },
              title,
            )
          : null,
        i.createElement(
          "div",
          {
            className: T + "-inner-content",
          },
          content,
        ),
      ),
      popupHoverStay: true,
      unmountOnExit,
      triggerProps,
      defaultPopupVisible,
      onVisibleChange:
        onVisibleChange ||
        (triggerProps ? triggerProps.onVisibleChange : undefined),
      childrenPrefix: T,
      ...("popupVisible" in s
        ? {
            popupVisible,
          }
        : {}),
    },
    typeof children === "string"
      ? i.createElement("span", null, children)
      : children,
  );
});
N.displayName = "Popover";
const M = (e, t) => {
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
r = o || (o = {});
r[(r.INIT = 0)] = "INIT";
r[(r.BEFORE_MEASURE = 1)] = "BEFORE_MEASURE";
r[(r.MEASURING = 2)] = "MEASURING";
r[(r.MEASURE_END = 3)] = "MEASURE_END";
r[(r.NO_NEED_ELLIPSIS = 4)] = "NO_NEED_ELLIPSIS";
const useComponent = (e) => {
  let ellipsisNode;
  const e_children = e.children;
  const e_rows = e.rows;
  const l = e_rows === undefined ? 1 : e_rows;
  const e_width = e.width;
  const e_expanding = e.expanding;
  const e_renderMeasureContent = e.renderMeasureContent;
  const e_simpleEllipsis = e.simpleEllipsis;
  const e_onEllipsis = e.onEllipsis;
  const e_suffix = e.suffix;
  const e_expandNodes = e.expandNodes;
  const e_expandable = e.expandable;
  const e_ellipsisStr = e.ellipsisStr;
  const yRef = i.useRef();
  const gRef = i.useRef();
  const b = M(i.useState([0, 0, 0]), 2);
  const x = b[0];
  const E = b[1];
  const C = M(i.useState(0), 2);
  const w = C[0];
  const O = C[1];
  const S = M(i.useState(o.NO_NEED_ELLIPSIS), 2);
  const measureStatus = S[0];
  const A = S[1];
  const N = M(x, 3);
  const k = N[0];
  const j = N[1];
  const _ = N[2];
  const V = M(i.useState(false), 2);
  const D = V[0];
  const z = V[1];
  const L = i.useMemo(
    function () {
      return i.Children.toArray(e_children);
    },
    [e_children],
  );
  const HRef = i.useRef(0);
  A_8(
    function () {
      if (e_onEllipsis) {
        e_onEllipsis(D);
      }
    },
    [D],
  );
  const G = function (e) {
    return Kg(e) || Et(e);
  };
  const W = (e) => {
    let t = 0;
    e.forEach((e) => {
      if (G) {
        t += String(e).length;
      } else {
        t += 1;
      }
    });
    return t;
  };
  const K = i.useMemo(
    function () {
      return W(L);
    },
    [L],
  );
  const B = A_10(function (e) {
    return E(e);
  });
  const U = (e) => {
    const t = [];
    let n = 0;
    if (e >= K) {
      return L;
    }
    for (const r in L) {
      const o = L[r];
      if (n >= e) {
        break;
      }
      const i = G(o) ? String(o).length : 1;
      if (i > e - n) {
        t.push(String(o).slice(0, e - n));
        n = e;
        break;
      }
      n += i;
      t.push(o);
    }
    return t;
  };
  const Q = () => {
    let e;
    let t;
    if (w) {
      if (measureStatus === o.INIT) {
        var n = l * w;
        var r = (e = gRef.current) == null ? undefined : e.offsetHeight;
        const i = r > n;
        if (!i || e_simpleEllipsis || e_expanding) {
          A(o.MEASURE_END);
          z(i);
          E([0, K, K]);
        } else {
          z(true);
          A(o.BEFORE_MEASURE);
        }
      } else if (measureStatus === o.BEFORE_MEASURE) {
        const u = yRef == null ? undefined : yRef.current.offsetWidth;
        const f = l * e_width;
        if (u > l * e_width) {
          HRef.current = Math.floor(
            (Math.floor(Math.max(f / u - 0.1, 0) * K) +
              Math.ceil(Math.min(f / u + 0.1, 1) * K)) /
              2,
          );
        }
        A(o.MEASURING);
      } else if (measureStatus === o.MEASURING) {
        if (k !== _ - 1) {
          var r = (t = gRef.current) == null ? undefined : t.offsetHeight;
          var n = l * w;
          let p = k;
          let d = _;
          if (r <= n) {
            p = j;
          } else {
            d = j;
          }
          const m = Math.floor((d + p) / 2);
          B([p, m, d]);
        } else {
          B([k, k, k]);
          A(o.MEASURE_END);
        }
      }
    }
  };
  A_11(
    function () {
      if (e.rows && e_width) {
        E([0, Math.floor(K / 2), K]);
        A(o.INIT);
      } else {
        A(o.NO_NEED_ELLIPSIS);
      }
    },
    [
      K,
      e_simpleEllipsis,
      e_expanding,
      e_width,
      e_suffix,
      e_expandNodes,
      e_expandable,
      e_ellipsisStr,
      e.rows,
    ],
  );
  A_11(
    function () {
      if (yRef.current && measureStatus === o.INIT) {
        O(yRef.current.offsetHeight);
      }
    },
    [measureStatus],
  );
  A_11(
    function () {
      Q();
    },
    [measureStatus, j, k, _, w],
  );
  const q = {
    zIndex: -999,
    position: "fixed",
    opacity: 0,
    padding: 0,
    margin: 0,
  };
  const style = {
    whiteSpace: "nowrap",
    ...q,
  };
  const $ = e_simpleEllipsis
    ? {
        textOverflow: "clip",
        ...q,
      }
    : q;
  if (measureStatus === o.INIT || measureStatus === o.BEFORE_MEASURE) {
    ellipsisNode = (ellipsisNode = i.createElement(
      "div",
      null,
      i.createElement(
        "div",
        {
          ref: yRef,
          style,
        },
        measureStatus === o.INIT
          ? "hxj"
          : e_renderMeasureContent(e_children, false),
      ),
      i.createElement(
        "div",
        {
          ref: gRef,
          style: {
            width: e_width,
            ...$,
          },
        },
        e_renderMeasureContent(e_children, D),
      ),
    )).props.children;
  } else if (measureStatus === o.MEASURING) {
    ellipsisNode = (ellipsisNode = i.createElement(
      "div",
      null,
      i.createElement(
        "div",
        {
          ref: gRef,
          style: {
            width: e_width,
            ...$,
          },
        },
        e_renderMeasureContent(U(j), D),
      ),
      i.createElement(
        "div",
        {
          style: {
            height: w * l,
            overflow: "hidden",
          },
        },
        U(HRef.current),
      ),
    )).props.children;
  } else if (measureStatus === o.MEASURE_END) {
    ellipsisNode = e_renderMeasureContent(U(j), D);
  } else if (measureStatus === o.NO_NEED_ELLIPSIS) {
    ellipsisNode = e_renderMeasureContent(e_children, false);
  }
  return {
    ellipsisNode,
    isEllipsis: D,
    measureStatus,
  };
};
const V = (e, t) => {
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
const D = (e, t) => {
  if (typeof window !== "undefined" && window.CSS && window.CSS.supports) {
    if (b0(t)) {
      return window.CSS.supports(e);
    }
    return window.CSS.supports(e, t);
  }
  if (typeof document !== "undefined" && document.createElement) {
    const n = document.createElement("div");
    n.setAttribute("style", e + ":" + t + ";");
    return n.style[e] !== undefined;
  }
  return false;
};
const z = {
  display: " -webkit-box",
  "-webkit-line-clamp": 2,
};
const useL = (e) => {
  const e_cssEllipsis = e.cssEllipsis;
  const e_ellipsisStr = e.ellipsisStr;
  const r = e_ellipsisStr === undefined ? "..." : e_ellipsisStr;
  const e_suffix = e.suffix;
  const e_rows = e.rows;
  const simpleEllipsis = i.useMemo(
    function () {
      return (
        !!e_cssEllipsis &&
        (!(e_rows > 1) ||
          !!Object.entries(z).every((e) => {
            const t = V(e, 2);
            return D(t[0], t[1]);
          })) &&
        r === "..." &&
        !e_suffix
      );
    },
    [r, e_cssEllipsis, e_rows, e_suffix],
  );
  const c = {
    textOverflow: "ellipsis",
    whiteSpace: "normal",
    overflow: "hidden",
    WebkitLineClamp: "" + e.rows,
    WebkitBoxOrient: "vertical",
    display: "-webkit-box",
  };
  return {
    simpleEllipsis,
    ellipsisStyle: simpleEllipsis
      ? e.rows > 1
        ? c
        : {
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }
      : {},
  };
};
const W = (e, t) => {
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
const KComponent = function (e) {
  let t;
  let n;
  let r;
  let c;
  let s;
  let d;
  let m;
  let component;
  let h;
  let b;
  let x;
  let C;
  let O;
  let S;
  let P;
  let A;
  let R;
  let I;
  const {
    componentType,
    style,
    className,
    children,
    editable,
    ellipsis,
    heading,
    blockquote,
    ...rest
  } = e;
  const currentContext = i.useContext(QO);
  const q_getPrefixCls = currentContext.getPrefixCls;
  const q_rtl = currentContext.rtl;
  const prefixCls = q_getPrefixCls("typography");
  t = e.type;
  n = e.bold;
  r = e.disabled;
  c = e.mark;
  s = e.underline;
  d = e.delete;
  m = e.code;
  component = [];
  h = [];
  if (t) {
    h.push(prefixCls + "-" + t);
  }
  if (r) {
    h.push(prefixCls + "-disabled");
  }
  if (n) {
    component.push("b");
  }
  if (s) {
    component.push("u");
  }
  if (d) {
    component.push("del");
  }
  if (m) {
    component.push("code");
  }
  if (c) {
    component.push("mark");
  }
  const J = {
    component,
    className: h,
  };
  const J_component = J.component;
  const J_className = J.className;
  const et = W(i.useState(false), 2);
  const en = et[0];
  const setEditing = et[1];
  const eo = W(i.useState(0), 2);
  const width = eo[0];
  const el = eo[1];
  const eaRef = i.useRef(0);
  const editableConfig = Gv(editable) ? editable : {};
  const eu = "editing" in editableConfig ? editableConfig.editing : en;
  const es = ellipsis
    ? {
        rows: 1,
        ellipsisStr: "...",
        cssEllipsis: false,
        ...(Gv(ellipsis) ? ellipsis : {}),
      }
    : {};
  const ef = es.wrapper || i.Fragment;
  const ep = W(
    A_9(false, {
      defaultValue: es.defaultExpanded,
      value: es.expanded,
    }),
    2,
  );
  const expanding = ep[0];
  const em = ep[1];
  const ev = useL(es);
  const ev_simpleEllipsis = ev.simpleEllipsis;
  const ev_ellipsisStyle = ev.ellipsisStyle;
  const renderMeasureContent = function (t, n) {
    let r;
    const o = b0(es.ellipsisStr) ? "..." : es.ellipsisStr;
    const l = !b0(es.suffix) && es.suffix;
    return i.createElement(
      ef,
      null,
      t,
      !n || expanding || ev_simpleEllipsis ? "" : o,
      l,
      ((r = n),
      i.createElement(
        i.Fragment,
        null,
        i.createElement(EComponent, {
          ...e,
          setEditing,
          onClickExpand,
          expanding,
          isEllipsis: r,
          currentContext,
        }),
      )),
    );
  };
  const eb = useComponent({
    ...es,
    children,
    expanding,
    width,
    renderMeasureContent,
    simpleEllipsis: ev_simpleEllipsis || expanding,
  });
  const eb_ellipsisNode = eb.ellipsisNode;
  const eb_isEllipsis = eb.isEllipsis;
  const eb_measureStatus = eb.measureStatus;
  function onClickExpand(t) {
    em(!expanding);
    if (e.onClickExpand) {
      e.onClickExpand(t);
    }
    if (es.onExpand) {
      es.onExpand(!expanding, t);
    }
  }
  function eO(e, t, n, r = {}) {
    let o = e;
    t.forEach((e, t) => {
      const l = t === 0 ? r : {};
      const a =
        Gv(n.mark) && n.mark.color
          ? {
              style: {
                backgroundColor: n.mark.color,
              },
              ...l,
            }
          : {
              ...l,
            };
      o = i.createElement(
        e,
        {
          ...a,
        },
        o,
      );
    });
    return o;
  }
  A_8(
    function () {
      if (es.onEllipsis) {
        es.onEllipsis(eb_isEllipsis);
      }
    },
    [eb_isEllipsis],
  );
  if (eu) {
    return i.createElement(WComponent, {
      ...e,
      prefixCls,
      setEditing,
      editableConfig,
    });
  }
  x = g(i.Children.toArray(children));
  C = es.showTooltip;
  O =
    Gv(es.showTooltip) && es.showTooltip.type === "popover"
      ? "popover"
      : "tooltip";
  S = (Gv(es.showTooltip) && es.showTooltip.props) || {};
  P = O === "popover" ? N : A_4;
  A = {
    style,
    ...(!(!eb_isEllipsis || C || expanding)
      ? {
          title: x,
        }
      : {}),
  };
  R = eb_isEllipsis && C && !expanding;
  switch (componentType) {
    case "Paragraph":
      b = blockquote ? "blockquote" : "div";
      break;
    case "Title":
      b = "h" + heading;
      break;
    default:
      if (componentType === "Text") {
        b = ellipsis ? "div" : "span";
      }
  }
  I = i.createElement(
    A_2,
    {
      onResize: function (e) {
        const contentRect = (e == null ? undefined : e[0]).contentRect;
        const n = +new Date();
        const r = n - eaRef.current;
        if (contentRect) {
          const i = J_component.includes("code")
            ? contentRect.width - 18
            : contentRect.width;
          if (
            [o.NO_NEED_ELLIPSIS, o.MEASURE_END].includes(eb_measureStatus) &&
            r > 100
          ) {
            eaRef.current = n;
            el(i);
          }
        }
      },
    },
    i.createElement(
      b,
      {
        className: A_1(
          prefixCls,
          J_className,
          {
            [prefixCls + "-rtl"]: q_rtl,
          },
          className,
        ),
        ...A,
        ...A_7(rest, [
          "spacing",
          "type",
          "close",
          "bold",
          "disabled",
          "mark",
          "underline",
          "delete",
          "code",
          "copyable",
          "isEllipsis",
          "expanding",
          "onClickExpand",
          "setEditing",
          "forceShowExpand",
        ]),
      },
      ev_simpleEllipsis &&
        eb_measureStatus !== o.INIT &&
        !expanding &&
        eb_isEllipsis
        ? eO(
            renderMeasureContent(
              i.createElement(
                "span",
                {
                  style: ev_ellipsisStyle,
                },
                children,
              ),
              eb_isEllipsis,
            ),
            J_component.length ? J_component : ["span"],
            e,
            {
              className: prefixCls + "-simple-ellipsis",
            },
          )
        : eO(eb_ellipsisNode, J_component, e),
    ),
  );
  if (R) {
    return i.createElement(
      P,
      {
        content: x,
        ...S,
      },
      i.createElement("span", null, I),
    );
  }
  return I;
};
function Q(e) {
  const { heading, ...rest } = e;
  return i.createElement(KComponent, {
    heading: heading === undefined ? 1 : heading,
    ...rest,
    componentType: "Title",
  });
}
Q.displayName = "Title";
function Y(e) {
  return i.createElement(KComponent, {
    ...e,
    componentType: "Text",
  });
}
Y.displayName = "Text";
function useX(e) {
  const e_spacing = e.spacing;
  const e_className = e.className;
  const r = i.useContext(QO).getPrefixCls("typography");
  const o =
    (e_spacing === undefined ? "default" : e_spacing) === "close"
      ? A_1(r + "-spacing-close", e_className)
      : e_className;
  return i.createElement(KComponent, {
    ...e,
    componentType: "Paragraph",
    className: o,
  });
}
useX.displayName = "Paragraph";
c.Title = Q;
c.Text = Y;
c.Paragraph = useX;
var J = c;
export { J as A };
