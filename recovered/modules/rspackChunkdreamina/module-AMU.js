import i from "z8";
import l from "bT";
import { A as A_1 } from "./module-Ww_2.js";
import { QO } from "./module-mY_2.js";
import u from "oa";
import d from "bk";
import p from "qa";
import { A as A_2 } from "./module-zrd.js";
import { A as A_3 } from "./module-K7F.js";
import { A as A_4 } from "./module-Ix_2.js";
import { Et, Gv, Kg, b0, cy } from "./module-V9.js";
import g from "NY";
import b from "fyk";
import "U4";
import { V } from "./module-Tb.js";
import { A as A_5 } from "./module-TUl.js";
import { A as A_6 } from "./module-mb_2.js";
import { A as A_7 } from "./module-VAR.js";
import { A as A_8 } from "./module-Sc_2.js";
import { A as A_9 } from "./module-rfq.js";
import { A as A_10 } from "./module-vC_2.js";
import { A as A_11 } from "./module-mg_3.js";
import { A as A_12 } from "./module-ZF_2.js";
let r;
let o;
export let A = l.forwardRef(function (e, t) {
  let { getPrefixCls } = l.useContext(QO);
  let r = getPrefixCls("typography");
  let { className, style, children } = e;
  let d = A_1(r, className);
  return i.jsx("article", {
    ref: t,
    style,
    className: d,
    children,
  });
});
A.displayName = "Typography";
function y() {
  return (y = g._(function* (e) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        yield navigator.clipboard.writeText(e);
        return;
      } catch (error) {
        console.error(
          error != null
            ? error
            : new DOMException("The request is not allowed", "NotAllowedError"),
        );
      }
    }
    let t = document.createElement("span");
    t.textContent = e;
    t.style.whiteSpace = "pre";
    document.body.appendChild(t);
    let n = window.getSelection();
    let r = window.document.createRange();
    n.removeAllRanges();
    r.selectNode(t);
    n.addRange(r);
    let o = false;
    try {
      o = window.document.execCommand("copy");
    } catch (error) {
      console.log("error", error);
    }
    n.removeAllRanges();
    window.document.body.removeChild(t);
    if (o) {
      return Promise.resolve();
    }
    return Promise.reject(
      new DOMException("The request is not allowed", "NotAllowedError"),
    );
  })).apply(this, arguments);
}
const P = l.forwardRef(function (e, t) {
  const prefixCls = l.useContext(V).prefixCls;
  const r = prefixCls === undefined ? "lv" : prefixCls;
  const e_spin = e.spin;
  const e_className = e.className;
  const s = {
    "aria-hidden": true,
    focusable: false,
    ref: t,
    ...e,
    className: `${e_className ? e_className + " " : ""}`
      .concat(r, "-icon ")
      .concat(r, "-icon-copy"),
  };
  if (e_spin) {
    s.className = "".concat(s.className, " ").concat(r, "-icon-loading");
  }
  delete s.spin;
  delete s.isIcon;
  return l.createElement(
    "svg",
    b(
      {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "4",
        viewBox: "0 0 48 48",
      },
      s,
    ),
    l.createElement("path", {
      d: "M20 6h18a2 2 0 0 1 2 2v22M8 16v24c0 1.105.891 2 1.996 2h20.007A1.99 1.99 0 0 0 32 40.008V15.997A1.997 1.997 0 0 0 30 14H10a2 2 0 0 0-2 2Z",
    }),
  );
});
P.defaultProps = {
  isIcon: true,
};
P.displayName = "IconCopy";
const E = l.forwardRef(function (e, t) {
  const prefixCls = l.useContext(V).prefixCls;
  const r = prefixCls === undefined ? "lv" : prefixCls;
  const e_spin = e.spin;
  const e_className = e.className;
  const s = {
    "aria-hidden": true,
    focusable: false,
    ref: t,
    ...e,
    className: `${e_className ? e_className + " " : ""}`
      .concat(r, "-icon ")
      .concat(r, "-icon-edit"),
  };
  if (e_spin) {
    s.className = "".concat(s.className, " ").concat(r, "-icon-loading");
  }
  delete s.spin;
  delete s.isIcon;
  return l.createElement(
    "svg",
    b(
      {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "4",
        viewBox: "0 0 48 48",
      },
      s,
    ),
    l.createElement("path", {
      d: "m30.48 19.038 5.733-5.734a1 1 0 0 0 0-1.414l-5.586-5.586a1 1 0 0 0-1.414 0l-5.734 5.734m7 7L15.763 33.754a1 1 0 0 1-.59.286l-6.048.708a1 1 0 0 1-1.113-1.069l.477-6.31a1 1 0 0 1 .29-.631l14.7-14.7m7 7-7-7M6 42h36",
    }),
  );
});
E.defaultProps = {
  isIcon: true,
};
E.displayName = "IconEdit";
let _ = (e) => Kg(e) || Et(e);
function M(e) {
  let t = [""];
  l.Children.forEach(e, (e) => {
    let n = t.length - 1;
    let r = t[n];
    if (_(e) && _(r)) {
      t[n] = `${r}${e}`;
    } else if (e && e.props && e.props.children) {
      t.push(M(e.props.children));
    }
  });
  return t.join("");
}
function useT(e) {
  let {
    children,
    copyable,
    editable,
    ellipsis,
    expanding,
    setEditing,
    onClickExpand,
    forceShowExpand,
    isEllipsis,
    currentContext = {},
  } = e;
  let b = A_3();
  let { getPrefixCls, locale } = currentContext;
  let j = getPrefixCls("typography");
  let [O, setO] = l.useState(false);
  let NRef = l.useRef(null);
  let k = Gv(copyable) ? copyable : {};
  let A = Gv(ellipsis) ? ellipsis : {};
  let _ = Gv(editable) ? editable : {};
  let T = cy(A.expandNodes)
    ? A.expandNodes
    : [locale.Typography.fold, locale.Typography.unfold];
  function S(e) {
    if (O) {
      return;
    }
    let n = k.text !== undefined ? k.text : M(children);
    (function (e) {
      y.apply(this, arguments);
    })(n);
    setO(true);
    if (k.onCopy) {
      k.onCopy(n, e);
    }
    NRef.current = setTimeout(() => {
      setO(false);
    }, 3000);
  }
  l.useEffect(
    () => () => {
      clearTimeout(NRef.current);
      NRef.current = null;
    },
    [],
  );
  let D = (e) => {
    if (_.onStart) {
      _.onStart(M(children), e);
    }
    setEditing(true);
  };
  let R = k.tooltips || [locale.Typography.copy, locale.Typography.copied];
  let I =
    copyable &&
    i.jsx(A_4, {
      content: O ? R[1] : R[0],
      children: i.jsx(
        "span",
        d._(
          u._(
            {
              className: O ? `${j}-operation-copied` : `${j}-operation-copy`,
              onClick: S,
              role: "button",
              "aria-label": R[0],
              tabIndex: 0,
            },
            b({
              onPressEnter: S,
            }),
          ),
          {
            children: O ? i.jsx(A_5, {}) : k.icon || i.jsx(P, {}),
          },
        ),
      ),
    });
  let z =
    editable &&
    i.jsx(A_4, {
      content: locale.Typography.edit,
      children: i.jsx(
        "span",
        d._(
          u._(
            {
              tabIndex: 0,
              "aria-label": locale.Typography.edit,
              role: "button",
              className: `${j}-operation-edit`,
              onClick: D,
            },
            b({
              onPressEnter: D,
            }),
          ),
          {
            children: i.jsx(E, {}),
          },
        ),
      ),
    });
  let V =
    forceShowExpand || (A.expandable && isEllipsis)
      ? i.jsx(
          "a",
          d._(
            u._(
              {
                className: `${j}-operation-expand`,
                onClick: onClickExpand,
                role: "button",
                tabIndex: 0,
                "aria-label": locale.Typography.unfold,
              },
              b({
                onPressEnter: onClickExpand,
              }),
            ),
            {
              children: expanding ? T[0] : T[1],
            },
          ),
        )
      : null;
  return i.jsxs(i.Fragment, {
    children: [V, z, I],
  });
}
function useD(e) {
  let { prefixCls, children, setEditing, editableConfig } = e;
  let a = A_1(`${prefixCls}-typography`, `${prefixCls}-edit-content`);
  let c = M(children);
  let uRef = l.useRef(null);
  function onPressEnter() {
    setEditing(false);
    if (editableConfig.onEnd) {
      editableConfig.onEnd(c);
    }
  }
  l.useEffect(() => {
    if (uRef.current && uRef.current.focus) {
      uRef.current.focus();
    }
    if (uRef.current && uRef.current.dom) {
      let { length } = uRef.current.dom.value;
      uRef.current.dom.setSelectionRange(length, length);
    }
  }, []);
  return i.jsx("div", {
    className: a,
    children: i.jsx(A_6.TextArea, {
      onBlur: function () {
        onPressEnter();
      },
      ref: uRef,
      value: c,
      autoSize: true,
      onChange: function (e) {
        if (editableConfig.onChange) {
          editableConfig.onChange(e);
        }
      },
      onPressEnter,
    }),
  });
}
let H = {
  display: " -webkit-box",
  "-webkit-line-clamp": 2,
};
const useL = (e) => {
  let { cssEllipsis, ellipsisStr = "...", suffix, rows } = e;
  let simpleEllipsis = l.useMemo(
    () =>
      !!cssEllipsis &&
      (!(rows > 1) ||
        !!Object.entries(H).every(([e, t]) =>
          ((e, t) => {
            if (
              typeof window !== "undefined" &&
              window.CSS &&
              window.CSS.supports
            ) {
              if (b0(t)) {
                return window.CSS.supports(e);
              }
              return window.CSS.supports(e, t);
            }
            if (typeof document !== "undefined" && document.createElement) {
              let n = document.createElement("div");
              n.setAttribute("style", `${e}:${t};`);
              return n.style[e] !== undefined;
            }
            return false;
          })(e, t),
        )) &&
      ellipsisStr === "..." &&
      !suffix,
    [ellipsisStr, cssEllipsis, rows, suffix],
  );
  let s = {
    textOverflow: "ellipsis",
    whiteSpace: "normal",
    overflow: "hidden",
    WebkitLineClamp: `${e.rows}`,
    WebkitBoxOrient: "vertical",
    display: "-webkit-box",
  };
  return {
    simpleEllipsis,
    ellipsisStyle: simpleEllipsis
      ? e.rows > 1
        ? s
        : {
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }
      : {},
  };
};
r = o || (o = {});
r[(r.INIT = 0)] = "INIT";
r[(r.BEFORE_MEASURE = 1)] = "BEFORE_MEASURE";
r[(r.MEASURING = 2)] = "MEASURING";
r[(r.MEASURE_END = 3)] = "MEASURE_END";
r[(r.NO_NEED_ELLIPSIS = 4)] = "NO_NEED_ELLIPSIS";
const useF = (e) => {
  let ellipsisNode;
  let {
    children,
    rows = 1,
    width,
    expanding,
    renderMeasureContent,
    simpleEllipsis,
    onEllipsis,
    suffix,
    expandNodes,
    expandable,
    ellipsisStr,
  } = e;
  let gRef = l.useRef();
  let yRef = l.useRef();
  let [b, setB] = l.useState([0, 0, 0]);
  let [w, setW] = l.useState(0);
  let [O, setO] = l.useState(4);
  let [N, P, $] = b;
  let [k, setK] = l.useState(false);
  let E = l.useMemo(() => l.Children.toArray(children), [children]);
  let _Ref = l.useRef(0);
  let { ellipsisStyle } = useL({
    rows,
    cssEllipsis: true,
  });
  A_9(() => {
    if (onEllipsis) {
      onEllipsis(k);
    }
  }, [k]);
  let T = (e) => Kg(e) || Et(e);
  let S = l.useMemo(() => {
    let e;
    e = 0;
    E.forEach((t) => {
      if (T) {
        e += String(t).length;
      } else {
        e += 1;
      }
    });
    return e;
  }, [E]);
  let D = A_11((e) => setB(e));
  let R = (e) => {
    let t = [];
    let n = 0;
    if (e >= S) {
      return E;
    }
    for (let r in E) {
      let o = E[r];
      if (n >= e) {
        break;
      }
      let i = T(o) ? String(o).length : 1;
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
  A_12(() => {
    if (e.rows && width) {
      setB([0, Math.floor(S / 2), S]);
      setO(0);
    } else {
      setO(4);
    }
  }, [
    S,
    simpleEllipsis,
    expanding,
    width,
    suffix,
    expandNodes,
    expandable,
    ellipsisStr,
    e.rows,
  ]);
  A_12(() => {
    if (gRef.current && O === 0) {
      let { offsetHeight } = gRef.current;
      setW(offsetHeight);
    }
  }, [O]);
  A_12(() => {
    (() => {
      if (w) {
        var e;
        var t;
        if (O === 0) {
          let t = rows * w;
          let n = ((e = yRef.current) == null ? undefined : e.offsetHeight) > t;
          if (!n || simpleEllipsis || expanding) {
            setO(3);
            setK(n);
            setB([0, S, S]);
          } else {
            setK(true);
            setO(1);
          }
        } else if (O === 1) {
          let e = gRef == null ? undefined : gRef.current.offsetWidth;
          let t = rows * width;
          if (e > rows * width) {
            _Ref.current = Math.floor(
              (Math.floor(Math.max(t / e - 0.1, 0) * S) +
                Math.ceil(Math.min(t / e + 0.1, 1) * S)) /
                2,
            );
          }
          setO(2);
        } else if (O === 2) {
          if (N !== $ - 1) {
            let e = (t = yRef.current) == null ? undefined : t.offsetHeight;
            let n = N;
            let o = $;
            if (e <= rows * w) {
              n = P;
            } else {
              o = P;
            }
            let i = Math.floor((o + n) / 2);
            D([n, i, o]);
          } else {
            D([N, N, N]);
            setO(3);
          }
        }
      }
    })();
  }, [O, P, N, $, w]);
  let I = {
    zIndex: -999,
    position: "fixed",
    opacity: 0,
    padding: 0,
    margin: 0,
  };
  let V = u._(
    {
      whiteSpace: "nowrap",
    },
    I,
  );
  let H = simpleEllipsis
    ? u._(
        {
          textOverflow: "clip",
        },
        I,
      )
    : I;
  if (O === 0 || O === 1) {
    ellipsisNode = (ellipsisNode = i.jsxs("div", {
      children: [
        i.jsx("div", {
          ref: gRef,
          style: V,
          children: O === 0 ? "hxj" : renderMeasureContent(children, false),
        }),
        i.jsx("div", {
          ref: yRef,
          style: u._(
            {
              width,
            },
            H,
          ),
          children: renderMeasureContent(children, k),
        }),
      ],
    })).props.children;
  } else if (O === 2) {
    let e = u._(
      {
        height: w * rows,
        width,
      },
      ellipsisStyle,
    );
    ellipsisNode = (ellipsisNode = i.jsxs("div", {
      children: [
        i.jsx("div", {
          ref: yRef,
          style: u._(
            {
              width,
            },
            H,
          ),
          children: renderMeasureContent(R(P), k),
        }),
        i.jsx("div", {
          style: e,
          children: R(_Ref.current),
        }),
      ],
    })).props.children;
  } else {
    if (O === 3) {
      ellipsisNode = renderMeasureContent(R(P), k);
    } else if (O === 4) {
      ellipsisNode = renderMeasureContent(children, false);
    }
  }
  return {
    ellipsisNode,
    isEllipsis: k,
    measureStatus: O,
  };
};
const useK = function (e) {
  let {
    componentType,
    style,
    className,
    children,
    editable,
    ellipsis,
    heading,
    blockquote,
  } = e;
  let x = p._(e, [
    "componentType",
    "style",
    "className",
    "children",
    "editable",
    "ellipsis",
    "heading",
    "blockquote",
  ]);
  let currentContext = l.useContext(QO);
  let { getPrefixCls, rtl } = currentContext;
  let prefixCls = getPrefixCls("typography");
  let { component, className: className_1 } = ((e, t) => {
    let { type, bold, disabled, mark, underline, delete: _delete, code } = e;
    let component_1 = [];
    let u = [];
    if (type) {
      u.push(`${t}-${type}`);
    }
    if (disabled) {
      u.push(`${t}-disabled`);
    }
    if (bold) {
      component_1.push("b");
    }
    if (underline) {
      component_1.push("u");
    }
    if (_delete) {
      component_1.push("del");
    }
    if (code) {
      component_1.push("code");
    }
    if (mark) {
      component_1.push("mark");
    }
    return {
      component: component_1,
      className: u,
    };
  })(e, prefixCls);
  let [$, set$] = l.useState(false);
  let [width, setWidth] = l.useState(0);
  let editableConfig = Gv(editable) ? editable : {};
  let S = "editing" in editableConfig ? editableConfig.editing : $;
  let W = ellipsis
    ? u._(
        {
          rows: 1,
          ellipsisStr: "...",
          cssEllipsis: false,
        },
        Gv(ellipsis) ? ellipsis : {},
      )
    : {};
  let B = W.wrapper || l.Fragment;
  let [H, K] = A_10(false, {
    defaultValue: W.defaultExpanded,
    value: W.expanded,
  });
  let { simpleEllipsis, ellipsisStyle } = useL(W);
  let renderMeasureContent = (t, n) => {
    var isEllipsis_1;
    let o = b0(W.ellipsisStr) ? "..." : W.ellipsisStr;
    let l = !b0(W.suffix) && W.suffix;
    return i.jsxs(B, {
      children: [
        t,
        !n || H || simpleEllipsis ? "" : o,
        l,
        ((isEllipsis_1 = n),
        i.jsx(i.Fragment, {
          children: i.jsx(
            useT,
            d._(u._({}, e), {
              setEditing: set$,
              onClickExpand,
              expanding: H,
              isEllipsis: isEllipsis_1,
              currentContext,
            }),
          ),
        })),
      ],
    });
  };
  let { ellipsisNode, isEllipsis, measureStatus } = useF(
    d._(u._({}, W), {
      children,
      expanding: H,
      width,
      renderMeasureContent,
      simpleEllipsis: simpleEllipsis || H,
    }),
  );
  let onResize = (e) => {
    let { contentRect } = e == null ? undefined : e[0];
    if (contentRect) {
      let e = component.includes("code")
        ? contentRect.width - 18
        : contentRect.width;
      if (
        (simpleEllipsis && W.rows === 1
          ? [o.NO_NEED_ELLIPSIS]
          : [o.NO_NEED_ELLIPSIS, o.MEASURE_END]
        ).includes(measureStatus)
      ) {
        setWidth(e);
      }
    }
  };
  function onClickExpand(t) {
    K(!H);
    if (e.onClickExpand) {
      e.onClickExpand(t);
    }
    if (W.onExpand) {
      W.onExpand(!H, t);
    }
  }
  function ee(e, t, n, r = {}) {
    let o = e;
    t.forEach((e, t) => {
      let i = t === 0 ? r : {};
      let s =
        Gv(n.mark) && n.mark.color
          ? u._(
              {
                style: {
                  backgroundColor: n.mark.color,
                },
              },
              i,
            )
          : u._({}, i);
      o = l.createElement(e, u._({}, s), o);
    });
    return o;
  }
  A_9(() => {
    if (W.onEllipsis) {
      W.onEllipsis(isEllipsis);
    }
  }, [isEllipsis]);
  if (S) {
    return i.jsx(
      useD,
      d._(u._({}, e), {
        prefixCls,
        setEditing: set$,
        editableConfig,
      }),
    );
  }
  return (() => {
    let a;
    let p = M(l.Children.toArray(children));
    let { showTooltip } = W;
    let w =
      Gv(W.showTooltip) && W.showTooltip.type === "popover"
        ? "popover"
        : "tooltip";
    let j = (Gv(W.showTooltip) && W.showTooltip.props) || {};
    let $ = w === "popover" ? A_7 : A_4;
    let k =
      !isEllipsis || showTooltip || H
        ? {}
        : {
            title: p,
          };
    let A = u._(
      {
        style,
      },
      k,
    );
    let E = isEllipsis && showTooltip && !H;
    switch (componentType) {
      case "Paragraph":
        a = blockquote ? "blockquote" : "div";
        break;
      case "Title":
        a = `h${heading}`;
        break;
      default:
        if (componentType === "Text") {
          a = ellipsis ? "div" : "span";
        }
    }
    let children_1 = i.jsx(A_2, {
      onResize,
      children: i.jsx(
        a,
        d._(
          u._(
            {
              className: A_1(
                prefixCls,
                className_1,
                {
                  [`${prefixCls}-rtl`]: rtl,
                },
                className,
              ),
            },
            A,
            A_8(x, [
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
          ),
          {
            children:
              simpleEllipsis && measureStatus !== o.INIT && !H && isEllipsis
                ? ee(
                    renderMeasureContent(
                      i.jsx("span", {
                        style: ellipsisStyle,
                        children,
                      }),
                      isEllipsis,
                    ),
                    component.length ? component : ["span"],
                    e,
                    {
                      className: `${prefixCls}-simple-ellipsis`,
                    },
                  )
                : ee(ellipsisNode, component, e),
          },
        ),
      ),
    });
    if (E) {
      return i.jsx(
        $,
        d._(
          u._(
            {
              content: p,
            },
            j,
          ),
          {
            children: i.jsx("span", {
              children: children_1,
            }),
          },
        ),
      );
    }
    return children_1;
  })();
};
function Y(e) {
  let { heading = 1 } = e;
  let n = p._(e, ["heading"]);
  return i.jsx(
    useK,
    d._(
      u._(
        {
          heading,
        },
        n,
      ),
      {
        componentType: "Title",
      },
    ),
  );
}
function G(e) {
  return i.jsx(
    useK,
    d._(u._({}, e), {
      componentType: "Text",
    }),
  );
}
function useU(e) {
  let { spacing = "default", className } = e;
  let { getPrefixCls } = l.useContext(QO);
  let o = getPrefixCls("typography");
  let c =
    spacing === "close" ? A_1(`${o}-spacing-close`, className) : className;
  return i.jsx(
    useK,
    d._(u._({}, e), {
      componentType: "Paragraph",
      className: c,
    }),
  );
}
Y.displayName = "Title";
G.displayName = "Text";
useU.displayName = "Paragraph";
A.Title = Y;
A.Text = G;
A.Paragraph = useU;
