import r from "oa";
import o from "bk";
import i from "qa";
import l from "z8";
import s from "bT";
import a from "fyk";
import "U4";
import { V } from "./module-Tb.js";
import { A } from "./module-Ww_2.js";
import { QO } from "./module-mY_2.js";
import { A as A_1 } from "./module-k6B.js";
import { A as A_2 } from "./module-K7F.js";
const m = s.forwardRef(function (e, t) {
  const prefixCls = s.useContext(V).prefixCls;
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
      .concat(r, "-icon-link"),
  };
  if (e_spin) {
    l.className = "".concat(l.className, " ").concat(r, "-icon-loading");
  }
  delete l.spin;
  delete l.isIcon;
  return s.createElement(
    "svg",
    a(
      {
        fill: "none",
        strokeWidth: "0",
        viewBox: "0 0 16 16",
        stroke: "currentColor",
      },
      l,
    ),
    s.createElement("path", {
      fill: "#00CAE0",
      d: "M3.757 12.243a2.667 2.667 0 0 1 0-3.772l1.297-1.296a.5.5 0 0 0 0-.707l-.236-.236a.5.5 0 0 0-.707 0L2.815 7.53a4 4 0 1 0 5.656 5.656l1.297-1.296a.5.5 0 0 0 0-.707l-.236-.236a.5.5 0 0 0-.707 0l-1.296 1.297a2.667 2.667 0 0 1-3.772 0ZM6.468 5.054a.5.5 0 0 0 .707 0l1.296-1.297a2.667 2.667 0 1 1 3.772 3.772l-1.297 1.296a.5.5 0 0 0 0 .707l.236.236a.5.5 0 0 0 .707 0l1.296-1.297A4 4 0 1 0 7.53 2.815L6.232 4.11a.5.5 0 0 0 0 .707l.236.236Z",
    }),
    s.createElement("path", {
      fill: "#00CAE0",
      d: "M6.232 10.004a.5.5 0 0 0 .707 0l3.065-3.065a.5.5 0 0 0 0-.707l-.236-.235a.5.5 0 0 0-.707 0L5.997 9.06a.5.5 0 0 0 0 .707l.235.236Z",
    }),
  );
});
m.defaultProps = {
  isIcon: true,
};
m.displayName = "IconLink";
let x = {
  hoverable: false,
};
let w = s.forwardRef(function (e, t) {
  let { getPrefixCls, componentConfig, rtl } = s.useContext(QO);
  let u = A_1(e, x, componentConfig == null ? undefined : componentConfig.Link);
  let { className, style, children, icon, status, disabled, hoverable } = u;
  let C = i._(u, [
    "className",
    "style",
    "children",
    "icon",
    "status",
    "disabled",
    "hoverable",
  ]);
  let N = A_2({
    onKeyDown: u.onKeyDown,
  });
  let P = getPrefixCls("link");
  let $ = "href" in u ? "a" : "span";
  let k = (e) => {
    if (disabled) {
      e.preventDefault();
      e.stopPropagation();
    } else if (u.onClick) {
      u.onClick(e);
    }
  };
  return l.jsxs(
    $,
    o._(
      r._(
        o._(
          r._(
            {
              className: A(
                P,
                {
                  [`${P}-disabled`]: disabled,
                  [`${P}-is-${status}`]: status,
                  [`${P}-with-icon`]: icon,
                  [`${P}-hoverless`]: !hoverable,
                  [`${P}-rtl`]: rtl,
                },
                className,
              ),
              ref: t,
              tabIndex: disabled ? -1 : undefined,
            },
            C,
          ),
          {
            style,
            onClick: k,
          },
        ),
        N({
          onPressEnter: k,
        }),
      ),
      {
        children: [
          icon
            ? l.jsx("span", {
                className: `${P}-icon`,
                children: icon === true ? l.jsx(m, {}) : icon,
              })
            : null,
          children,
        ],
      },
    ),
  );
});
w.displayName = "Link";
var j = w;
export { j as A };
