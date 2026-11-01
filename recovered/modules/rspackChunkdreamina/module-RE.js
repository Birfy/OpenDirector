import r from "bT";
import o from "olG";
import { A as A_1 } from "./module-puV.js";
import { QO } from "./module-ce.js";
import { A as A_2 } from "./module-Bd_2.js";
const u = r.forwardRef(function (e, ref) {
  const { className, style, children, ...rest } = e;
  const f = r.useContext(QO).getPrefixCls("btn-group");
  const p = A_1(f, className);
  return r.createElement(
    "div",
    {
      ref,
      className: p,
      style,
      ...rest,
    },
    children,
  );
});
u.displayName = "ButtonGroup";
const d = (e, t) => {
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
const m = /^[\u4e00-\u9fa5]{2}$/;
const v = {
  htmlType: "button",
  type: "default",
  shape: "square",
};
export const A = r.forwardRef(function (e, t) {
  let n;
  let a;
  const u = r.useContext(QO);
  const u_getPrefixCls = u.getPrefixCls;
  const u_size = u.size;
  const u_autoInsertSpaceInButton = u.autoInsertSpaceInButton;
  const u_componentConfig = u.componentConfig;
  const u_rtl = u.rtl;
  const E = A_2(
    e,
    v,
    u_componentConfig == null ? undefined : u_componentConfig.Button,
  );
  const {
    style,
    className,
    children,
    htmlType,
    type,
    status,
    size,
    shape,
    href,
    anchorProps,
    disabled,
    loading,
    loadingFixedWidth,
    icon,
    iconOnly,
    onClick,
    long,
    ...rest
  } = E;
  const L = loading ? r.createElement(o.A, null) : icon;
  const H = d(r.useState(false), 2);
  const G = H[0];
  const W = H[1];
  const KRef = r.useRef();
  const B = t || KRef;
  r.useEffect(
    function () {
      if (u_autoInsertSpaceInButton && B && B.current) {
        const e = B.current.textContent;
        if (m.test(e)) {
          if (!G) {
            W(true);
          }
        } else if (G) {
          W(false);
        }
      }
    },
    [B.current, u_autoInsertSpaceInButton],
  );
  const U = u_getPrefixCls("btn");
  const Q = A_1(
    U,
    U + "-" + (type === "default" ? "secondary" : type),
    U + "-size-" + (size || u_size),
    U + "-shape-" + shape,
    {
      [U + "-long"]: long,
      [U + "-status-" + status]: status,
      [U + "-loading-fixed-width"]: loadingFixedWidth,
      [U + "-loading"]: loading,
      [U + "-link"]: href,
      [U + "-icon-only"]: iconOnly || (!children && children !== 0 && L),
      [U + "-disabled"]: disabled,
      [U + "-two-chinese-chars"]: G,
      [U + "-rtl"]: u_rtl,
    },
    className,
  );
  const onClick_1 = function (e) {
    if (loading) {
      if (typeof (e == null ? undefined : e.preventDefault) === "function") {
        e.preventDefault();
      }
      return;
    }
    if (onClick) {
      onClick(e);
    }
  };
  const Y = r.createElement(
    r.Fragment,
    null,
    L,
    ((n = []),
    (a = false),
    r.Children.forEach(children, function (e) {
      const t = typeof e === "string" || typeof e === "number";
      if (t && a) {
        const r = n.length - 1;
        const o = n[r];
        n[r] = "" + o + e;
      } else {
        n.push(e);
      }
      a = t;
    }),
    r.Children.map(n, function (e) {
      if (typeof e === "string") {
        return r.createElement("span", null, e);
      }
      return e;
    })),
  );
  if (href) {
    const $ = {
      ...anchorProps,
    };
    if (disabled) {
      delete $.href;
    } else {
      $.href = href;
    }
    return r.createElement(
      "a",
      {
        ref: B,
        ...rest,
        ...$,
        style,
        className: Q,
        onClick: onClick_1,
      },
      Y,
    );
  }
  return r.createElement(
    "button",
    {
      ref: B,
      ...rest,
      style,
      className: Q,
      type: htmlType,
      disabled,
      onClick: onClick_1,
    },
    Y,
  );
});
A.__BYTE_BUTTON = true;
A.Group = u;
A.displayName = "Button";
