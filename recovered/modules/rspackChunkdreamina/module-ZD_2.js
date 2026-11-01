import i from "z8";
import l from "bT";
import { A as A_1 } from "./module-d1.js";
import { QO } from "./module-tMn.js";
import u from "oa";
import d from "bk";
import p from "qa";
import { A as A_2 } from "./module-LFK.js";
import { A as A_3 } from "./module-OBF.js";
import { A as A_4 } from "./module-I7V.js";
import { Et, Gv, Kg, b0, cy } from "./module-NnE_2.js";
import g from "NY";
import b from "fyk";
import "U4";
import { V } from "./module-Mt_2.js";
import { A as A_5 } from "./module-AK3.js";
import { A as A_6 } from "./module-F6v.js";
import { A as A_7 } from "./module-MA.js";
import { A as A_8 } from "./module-j6G.js";
import { A as A_9 } from "./module-CVa.js";
import { A as A_10 } from "./module-Jq_2.js";
let r;
let o;
let c = l.forwardRef(function (e, t) {
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
c.displayName = "Typography";
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
const A = l.forwardRef(function (e, t) {
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
      .concat(r, "-icon-check-circle-fill"),
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
      fill: "currentColor",
      fillRule: "evenodd",
      stroke: "none",
      strokeWidth: "none",
      d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm10.207-24.379a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0L22 26.172l-4.878-4.88a1 1 0 0 0-1.415 0l-1.414 1.415a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414 0l11.5-11.5Z",
      clipRule: "evenodd",
    }),
  );
});
A.defaultProps = {
  isIcon: true,
};
A.displayName = "IconCheckCircleFill";
const M = l.forwardRef(function (e, t) {
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
M.defaultProps = {
  isIcon: true,
};
M.displayName = "IconEdit";
let T = (e) => Kg(e) || Et(e);
function S(e) {
  let t = [""];
  l.Children.forEach(e, (e) => {
    let n = t.length - 1;
    let r = t[n];
    if (T(e) && T(r)) {
      t[n] = `${r}${e}`;
    } else if (e && e.props && e.props.children) {
      t.push(S(e.props.children));
    }
  });
  return t.join("");
}
function useD(e) {
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
  let $ = Gv(copyable) ? copyable : {};
  let k = Gv(ellipsis) ? ellipsis : {};
  let E = Gv(editable) ? editable : {};
  let _ = cy(k.expandNodes)
    ? k.expandNodes
    : [locale.Typography.fold, locale.Typography.unfold];
  function T(e) {
    if (O) {
      return;
    }
    let n = $.text !== undefined ? $.text : S(children);
    (function (e) {
      y.apply(this, arguments);
    })(n);
    setO(true);
    if ($.onCopy) {
      $.onCopy(n, e);
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
    if (E.onStart) {
      E.onStart(S(children), e);
    }
    setEditing(true);
  };
  let R = $.tooltips || [locale.Typography.copy, locale.Typography.copied];
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
              onClick: T,
              role: "button",
              "aria-label": R[0],
              tabIndex: 0,
            },
            b({
              onPressEnter: T,
            }),
          ),
          {
            children: O ? i.jsx(A, {}) : $.icon || i.jsx(P, {}),
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
            children: i.jsx(M, {}),
          },
        ),
      ),
    });
  let V =
    forceShowExpand || (k.expandable && isEllipsis)
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
              children: expanding ? _[0] : _[1],
            },
          ),
        )
      : null;
  return i.jsxs(i.Fragment, {
    children: [V, z, I],
  });
}
function useI(e) {
  let { prefixCls, children, setEditing, editableConfig } = e;
  let a = A_1(`${prefixCls}-typography`, `${prefixCls}-edit-content`);
  let c = S(children);
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
    children: i.jsx(A_5.TextArea, {
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
function useW(e, t = []) {
  let nRef = l.useRef(false);
  l.useEffect(() => {
    if (nRef.current) {
      e();
    } else {
      nRef.current = true;
    }
  }, [...t]);
}
let F = {
  display: " -webkit-box",
  "-webkit-line-clamp": 2,
};
const useK = (e) => {
  let { cssEllipsis, ellipsisStr = "...", suffix, rows } = e;
  let simpleEllipsis = l.useMemo(
    () =>
      !!cssEllipsis &&
      (!(rows > 1) ||
        !!Object.entries(F).every(([e, t]) =>
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
const useY = (e) => {
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
  let { ellipsisStyle } = useK({
    rows,
    cssEllipsis: true,
  });
  useW(() => {
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
  let D = A_9((e) => setB(e));
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
  A_10(() => {
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
  A_10(() => {
    if (gRef.current && O === 0) {
      let { offsetHeight } = gRef.current;
      setW(offsetHeight);
    }
  }, [O]);
  A_10(() => {
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
  let z = u._(
    {
      whiteSpace: "nowrap",
    },
    I,
  );
  let V = simpleEllipsis
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
          style: z,
          children: O === 0 ? "hxj" : renderMeasureContent(children, false),
        }),
        i.jsx("div", {
          ref: yRef,
          style: u._(
            {
              width,
            },
            V,
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
            V,
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
const useG = function (e) {
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
  let M = "editing" in editableConfig ? editableConfig.editing : $;
  let T = ellipsis
    ? u._(
        {
          rows: 1,
          ellipsisStr: "...",
          cssEllipsis: false,
        },
        Gv(ellipsis) ? ellipsis : {},
      )
    : {};
  let R = T.wrapper || l.Fragment;
  let [H, L] = A_8(false, {
    defaultValue: T.defaultExpanded,
    value: T.expanded,
  });
  let { simpleEllipsis, ellipsisStyle } = useK(T);
  let renderMeasureContent = (t, n) => {
    var isEllipsis_1;
    let o = b0(T.ellipsisStr) ? "..." : T.ellipsisStr;
    let l = !b0(T.suffix) && T.suffix;
    return i.jsxs(R, {
      children: [
        t,
        !n || H || simpleEllipsis ? "" : o,
        l,
        ((isEllipsis_1 = n),
        i.jsx(i.Fragment, {
          children: i.jsx(
            useD,
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
  let { ellipsisNode, isEllipsis, measureStatus } = useY(
    d._(u._({}, T), {
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
        (simpleEllipsis && T.rows === 1
          ? [o.NO_NEED_ELLIPSIS]
          : [o.NO_NEED_ELLIPSIS, o.MEASURE_END]
        ).includes(measureStatus)
      ) {
        setWidth(e);
      }
    }
  };
  function onClickExpand(t) {
    L(!H);
    if (e.onClickExpand) {
      e.onClickExpand(t);
    }
    if (T.onExpand) {
      T.onExpand(!H, t);
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
  useW(() => {
    if (T.onEllipsis) {
      T.onEllipsis(isEllipsis);
    }
  }, [isEllipsis]);
  if (M) {
    return i.jsx(
      useI,
      d._(u._({}, e), {
        prefixCls,
        setEditing: set$,
        editableConfig,
      }),
    );
  }
  return (() => {
    let a;
    let p = S(l.Children.toArray(children));
    let { showTooltip } = T;
    let w =
      Gv(T.showTooltip) && T.showTooltip.type === "popover"
        ? "popover"
        : "tooltip";
    let j = (Gv(T.showTooltip) && T.showTooltip.props) || {};
    let $ = w === "popover" ? A_6 : A_4;
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
            A_7(x, [
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
function U(e) {
  let { heading = 1 } = e;
  let n = p._(e, ["heading"]);
  return i.jsx(
    useG,
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
function Z(e) {
  return i.jsx(
    useG,
    d._(u._({}, e), {
      componentType: "Text",
    }),
  );
}
function useQ(e) {
  let { spacing = "default", className } = e;
  let { getPrefixCls } = l.useContext(QO);
  let o = getPrefixCls("typography");
  let c =
    spacing === "close" ? A_1(`${o}-spacing-close`, className) : className;
  return i.jsx(
    useG,
    d._(u._({}, e), {
      componentType: "Paragraph",
      className: c,
    }),
  );
}
U.displayName = "Title";
Z.displayName = "Text";
useQ.displayName = "Paragraph";
c.Title = U;
c.Text = Z;
c.Paragraph = useQ;
var q = c;
export { q as A };
