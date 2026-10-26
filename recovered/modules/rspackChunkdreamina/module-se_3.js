import r from "oa";
import o from "bk";
import i from "qa";
import l from "z8";
import s from "bT";
import { A as A_1 } from "./module-fk_4.js";
import { A as A_2 } from "./module-d1.js";
import { QO } from "./module-tMn.js";
import { A as A_3 } from "./module-oO_3.js";
let d = s.forwardRef(function (e, ref) {
  let { className, style, children } = e;
  let p = i._(e, ["className", "style", "children"]);
  let { getPrefixCls } = s.useContext(QO);
  let h = getPrefixCls("btn-group");
  let m = A_2(h, className);
  return l.jsx(
    "div",
    o._(
      r._(
        {
          ref,
          className: m,
          style,
        },
        p,
      ),
      {
        children,
      },
    ),
  );
});
d.displayName = "ButtonGroup";
let f = /^[\u4e00-\u9fa5]{2}$/;
let h = {
  htmlType: "button",
  type: "default",
  shape: "square",
};
export let A = s.forwardRef(function (e, t) {
  let n;
  let d;
  let { getPrefixCls, size, autoInsertSpaceInButton, componentConfig, rtl } =
    s.useContext(QO);
  let x = A_3(
    e,
    h,
    componentConfig == null ? undefined : componentConfig.Button,
  );
  let {
    style,
    className,
    children,
    htmlType,
    type,
    status,
    size: size_1,
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
  } = x;
  let z = i._(x, [
    "style",
    "className",
    "children",
    "htmlType",
    "type",
    "status",
    "size",
    "shape",
    "href",
    "anchorProps",
    "disabled",
    "loading",
    "loadingFixedWidth",
    "icon",
    "iconOnly",
    "onClick",
    "long",
  ]);
  let V = loading ? l.jsx(A_1, {}) : icon;
  let [W, setW] = s.useState(false);
  let HRef = s.useRef();
  let L = t || HRef;
  s.useEffect(() => {
    if (autoInsertSpaceInButton && L && L.current) {
      let { textContent } = L.current;
      if (f.test(textContent)) {
        if (!W) {
          setW(true);
        }
      } else if (W) {
        setW(false);
      }
    }
  }, [L.current, autoInsertSpaceInButton]);
  let F = getPrefixCls("btn");
  let K = A_2(
    F,
    `${F}-${type === "default" ? "secondary" : type}`,
    `${F}-size-${size_1 || size}`,
    `${F}-shape-${shape}`,
    {
      [`${F}-long`]: long,
      [`${F}-status-${status}`]: status,
      [`${F}-loading-fixed-width`]: loadingFixedWidth,
      [`${F}-loading`]: loading,
      [`${F}-link`]: href,
      [`${F}-icon-only`]: iconOnly || (!children && children !== 0 && V),
      [`${F}-disabled`]: disabled,
      [`${F}-two-chinese-chars`]: W,
      [`${F}-rtl`]: rtl,
    },
    className,
  );
  let onClick_1 = (e) => {
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
  let children_1 = l.jsxs(l.Fragment, {
    children: [
      V,
      ((n = []),
      (d = false),
      s.Children.forEach(children, (e) => {
        let t = typeof e === "string" || typeof e === "number";
        if (t && d) {
          let t = n.length - 1;
          let r = n[t];
          n[t] = `${r}${e}`;
        } else {
          n.push(e);
        }
        d = t;
      }),
      s.Children.map(n, (e) => {
        if (typeof e === "string") {
          return l.jsx("span", {
            children: e,
          });
        }
        return e;
      })),
    ],
  });
  if (href) {
    let e = r._({}, anchorProps);
    if (disabled) {
      delete e.href;
    } else {
      e.href = href;
    }
    return l.jsx(
      "a",
      o._(
        r._(
          {
            ref: L,
          },
          z,
          e,
        ),
        {
          style,
          className: K,
          onClick: onClick_1,
          children: children_1,
        },
      ),
    );
  }
  return l.jsx(
    "button",
    o._(
      r._(
        {
          ref: L,
        },
        z,
      ),
      {
        style,
        className: K,
        type: htmlType,
        disabled,
        onClick: onClick_1,
        children: children_1,
      },
    ),
  );
});
A.__BYTE_BUTTON = true;
A.Group = d;
A.displayName = "Button";
