import i from "oa";
import l from "bk";
import s from "qa";
import n from "z8";
import a from "bT";
import o from "OBF";
import d from "d1";
import h from "hl";
import u from "fk";
import c from "MA";
import g from "tMn";
import p from "feV";
import m from "oO";
let f = [
  "red",
  "orangered",
  "orange",
  "gold",
  "lime",
  "green",
  "cyan",
  "blue",
  "arcoblue",
  "purple",
  "pinkpurple",
  "magenta",
  "gray",
];
let F = {
  size: "default",
};
export let A = a.forwardRef(function (e, ref) {
  let { getPrefixCls, componentConfig, rtl } = a.useContext(g.QO);
  let y = o.A();
  let x = m.A(e, F, componentConfig == null ? undefined : componentConfig.Tag);
  let {
    className,
    style,
    children,
    color,
    closable,
    checkable,
    defaultChecked,
    size,
    onClose,
    onCheck,
    icon,
    closeIcon,
    bordered,
  } = x;
  let R = s._(x, [
    "className",
    "style",
    "children",
    "color",
    "closable",
    "checkable",
    "defaultChecked",
    "size",
    "onClose",
    "onCheck",
    "icon",
    "closeIcon",
    "bordered",
  ]);
  let prefix = getPrefixCls("tag");
  let [P, setP] = a.useState(!("visible" in x) || x.visible);
  let [M, setM] = a.useState("checked" in x ? x.checked : defaultChecked);
  let [q, setQ] = a.useState();
  let G = "checked" in x ? x.checked : M;
  let K = "visible" in x ? x.visible : P;
  function B(e) {
    let t = onClose && onClose(e);
    if (t && t.then) {
      setQ(true);
      t.then(() => {
        setQ(false);
        setP(false);
      }).catch(() => {
        setQ(false);
      });
    } else {
      setP(false);
    }
  }
  let D = color && f.indexOf(color) !== -1 ? color : "";
  let U = !checkable || G;
  let className_1 = d.A(
    prefix,
    {
      [`${prefix}-loading`]: q,
      [`${prefix}-hide`]: !K,
      [`${prefix}-${D}`]: D,
      [`${prefix}-checkable`]: checkable,
      [`${prefix}-checked`]: U,
      [`${prefix}-size-${size}`]: size,
      [`${prefix}-bordered`]: bordered,
      [`${prefix}-custom-color`]: U && color && !D,
      [`${prefix}-rtl`]: rtl,
    },
    className,
  );
  let style_1 = i._({}, style);
  if (color && !D && U) {
    style_1.backgroundColor = color;
    style_1.borderColor = color;
  }
  let H = c.A(R, ["visible"]);
  if (checkable) {
    H.onClick = function () {
      let e = !G;
      if (!("checked" in x)) {
        setM(e);
      }
      if (onCheck) {
        onCheck(e);
      }
    };
  }
  return n.jsxs(
    "div",
    l._(
      i._(
        {
          ref,
          style: style_1,
          className: className_1,
        },
        H,
      ),
      {
        children: [
          icon &&
            n.jsx("span", {
              className: `${prefix}-icon`,
              children: icon,
            }),
          n.jsx("span", {
            className: `${prefix}-content`,
            children,
          }),
          closable &&
            !q &&
            closeIcon !== null &&
            n.jsx(
              p.A,
              l._(
                i._(
                  {
                    prefix,
                    className: `${prefix}-close-btn`,
                    onClick: B,
                    role: "button",
                    tabIndex: 0,
                  },
                  y({
                    onPressEnter: B,
                  }),
                ),
                {
                  "aria-label": "Close",
                  children:
                    closeIcon !== undefined ? closeIcon : n.jsx(h.A, {}),
                },
              ),
            ),
          q &&
            n.jsx("span", {
              className: `${prefix}-loading-icon`,
              children: n.jsx(u.A, {}),
            }),
        ],
      },
    ),
  );
});
A.displayName = "Tag";
