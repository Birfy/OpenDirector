import r from "oa";
import o from "bk";
import i from "z8";
import l from "bT";
import { A as A_1 } from "./module-Ww_2.js";
import { A as A_2 } from "./module-ag_3.js";
import { A as A_3 } from "./module-mf_2.js";
import { QO } from "./module-mY_2.js";
import { A as A_4 } from "./module-k6B.js";
import { t as t_1 } from "./module-rT.js";
let u = l.forwardRef(function (e, t) {
  let status_1;
  let {
    style,
    className,
    prefixCls,
    index = 1,
    current = 1,
    status,
    title,
    description,
    icon,
    nextStepError,
    type,
    customDot,
    labelPlacement,
    disabled,
    onClick,
    onChange,
    direction,
    id,
    lineless,
  } = e;
  if (status) {
    status_1 = status;
  } else {
    if (current < index) {
      status_1 = "wait";
    }
    if (current === index) {
      status_1 = "process";
    }
    if (current > index) {
      status_1 = "finish";
    }
  }
  let P = A_1(
    `${prefixCls}-item`,
    `${prefixCls}-item-${status_1}`,
    {
      [`${prefixCls}-item-custom`]: !!icon,
      [`${prefixCls}-item-next-error`]: nextStepError,
      [`${prefixCls}-item-disabled`]: disabled,
      [`${prefixCls}-item-active`]: index === current,
    },
    className,
  );
  let children = ((e) => {
    if (type === "dot") {
      return null;
    }
    let t = index;
    if (icon) {
      t = icon;
    } else if (e === "finish") {
      t = i.jsx(A_2, {});
    } else if (e === "error") {
      t = i.jsx(A_3, {});
    }
    return i.jsx("div", {
      className: `${prefixCls}-icon`,
      children: t,
    });
  })(status_1);
  let k = i.jsx("div", {
    className: `${prefixCls}-item-icon`,
    children,
  });
  let A = customDot
    ? customDot(k, {
        index,
        status: status_1,
        title,
        description,
      })
    : k;
  return i.jsxs("div", {
    ref: t,
    className: P,
    style,
    onClick: function (e) {
      if (!disabled) {
        if (onChange && current !== index) {
          onChange(index, id);
        }
        if (onClick) {
          onClick(index, id, e);
        }
      }
    },
    children: [
      !lineless &&
        (labelPlacement === "vertical" || direction === "vertical") &&
        i.jsx("div", {
          className: `${prefixCls}-item-tail`,
        }),
      type !== "arrow" && A,
      i.jsxs("div", {
        className: `${prefixCls}-item-content`,
        children: [
          i.jsx("div", {
            className: `${prefixCls}-item-title`,
            children: title,
          }),
          description &&
            i.jsx("div", {
              className: `${prefixCls}-item-description`,
              children: description,
            }),
        ],
      }),
    ],
  });
});
u.displayName = "Step";
let h = {
  current: 1,
  type: "default",
  size: "default",
  direction: "horizontal",
  labelPlacement: "horizontal",
};
export let A = l.forwardRef(function (e, t) {
  let { getPrefixCls, componentConfig, rtl } = l.useContext(QO);
  let u = A_4(
    e,
    h,
    componentConfig == null ? undefined : componentConfig.Steps,
  );
  let {
    className,
    style,
    children,
    current = 1,
    status,
    onChange,
    type,
    size,
    direction,
    labelPlacement,
    customDot,
    lineless,
  } = u;
  let prefixCls = getPrefixCls("steps");
  let labelPlacement_1 = labelPlacement;
  if (type === "dot") {
    labelPlacement_1 = direction === "vertical" ? "horizontal" : "vertical";
  }
  if (type === "navigation") {
    labelPlacement_1 = "horizontal";
  }
  let direction_1 = direction;
  if (type === "navigation" || type === "arrow") {
    direction_1 = "horizontal";
  }
  let E = A_1(
    prefixCls,
    `${prefixCls}-${direction_1}`,
    `${prefixCls}-label-${labelPlacement_1}`,
    `${prefixCls}-size-${size}`,
    {
      [`${prefixCls}-change-onclick`]: typeof onChange === "function",
      [`${prefixCls}-mode-${type}`]: type !== "default",
      [`${prefixCls}-lineless`]: lineless,
      [`${prefixCls}-rtl`]: rtl,
    },
    className,
  );
  return i.jsx(
    "div",
    o._(
      r._(
        {
          ref: t,
          style,
          className: E,
        },
        t_1(u),
      ),
      {
        children: l.Children.toArray(children)
          .filter((e) => e && e.type && e.type.displayName === "Step")
          .map((e, index) => {
            index += 1;
            if (e) {
              let n = r._(
                {
                  prefixCls,
                  type,
                  index,
                  current,
                  status: current === index ? status : undefined,
                  customDot,
                  labelPlacement: labelPlacement_1,
                  direction: direction_1,
                  onChange,
                  lineless,
                },
                e.props,
              );
              if (status === "error" && current === index + 1) {
                n.nextStepError = true;
              }
              return l.cloneElement(e, n);
            }
            return null;
          }),
      },
    ),
  );
});
A.displayName = "Steps";
A.Step = u;
