import r from "oa";
import o from "bk";
import i from "qa";
import l from "z8";
import s from "bT";
import a from "lk";
import c from "zP7";
import { A as A_1 } from "./module-Ww_2.js";
import { Gv, cy } from "./module-V9.js";
import { A as A_2 } from "./module-Sc_2.js";
import { QO } from "./module-mY_2.js";
import { A as A_3 } from "./module-P7_2.js";
import { A as A_4 } from "./module-k6B.js";
let v = {};
export let A = s.forwardRef(function (e, ref) {
  let { getPrefixCls, size, componentConfig, rtl } = s.useContext(QO);
  let x = A_4(
    e,
    v,
    componentConfig == null ? undefined : componentConfig.Switch,
  );
  let {
    className,
    children,
    style = {},
    disabled,
    size: size_1,
    loading,
    onChange,
    type = "circle",
    checkedText,
    uncheckedText,
    checkedIcon,
    uncheckedIcon,
  } = x;
  let T = i._(x, [
    "className",
    "children",
    "style",
    "disabled",
    "size",
    "loading",
    "onChange",
    "type",
    "checkedText",
    "uncheckedText",
    "checkedIcon",
    "uncheckedIcon",
  ]);
  let S = getPrefixCls("switch");
  let D = size_1 || size;
  let [R, setR] = s.useState(x.defaultChecked);
  let z = "checked" in x ? x.checked : R;
  let className_1 = A_1(
    S,
    D === "default" ? undefined : `${S}-${D}`,
    {
      [`${S}-type-${type}`]: type,
      [`${S}-checked`]: z,
      [`${S}-loading`]: loading,
      [`${S}-rtl`]: rtl,
    },
    className,
  );
  let W = checkedText;
  let B = uncheckedText;
  if (children && cy(children)) {
    W = children.find((e) => e.key === "open");
    B = children.find((e) => e.key === "close");
  } else {
    if (children && Gv(children)) {
      if (children.key === "open") {
        W = children;
      } else if (children.key === "close") {
        B = children;
      }
    }
  }
  let H = A_2(T, ["onChange", "checked", "error"]);
  return l.jsxs(
    "button",
    o._(
      r._(
        {
          ref,
          role: "switch",
          "aria-checked": !!z,
          tabIndex: loading ? -1 : undefined,
        },
        H,
      ),
      {
        style,
        className: className_1,
        disabled,
        onClick: (e) => {
          if (!loading) {
            if (x.onClick) {
              x.onClick(e);
            }
            if (!("checked" in x)) {
              setR(!z);
            }
            if (onChange) {
              onChange(!z, e);
            }
          }
        },
        type: "button",
        children: [
          l.jsxs("div", {
            className: `${S}-dot`,
            children: [
              !loading &&
                (checkedIcon || uncheckedIcon) &&
                l.jsx(a.A, {
                  children: l.jsx(
                    c.A,
                    {
                      classNames: "fadeIn",
                      timeout: 200,
                      children: l.jsx("span", {
                        className: `${S}-dot-icon`,
                        children: z ? checkedIcon : uncheckedIcon,
                      }),
                    },
                    z ? "checked" : "unchecked",
                  ),
                }),
              loading &&
                l.jsx("span", {
                  className: `${S}-dot-icon`,
                  children: l.jsx(A_3, {}),
                }),
            ],
          }),
          D === "default" &&
            (W || B) &&
            l.jsxs(l.Fragment, {
              children: [
                l.jsxs("div", {
                  className: `${S}-text-holder`,
                  children: [W && z && W, B && !z && B],
                }),
                l.jsx(c.A, {
                  in: z,
                  classNames: "switchSlideText",
                  timeout: 200,
                  children: l.jsxs("div", {
                    className: `${S}-text`,
                    children: [W && z && W, B && !z && B],
                  }),
                }),
              ],
            }),
        ],
      },
    ),
  );
});
A.__BYTE_SWITCH = true;
A.displayName = "Switch";
