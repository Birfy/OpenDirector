import r from "bT";
import { A as A_1 } from "./module-puV.js";
import i from "US";
import l from "JXb";
import { QO } from "./module-ce.js";
import { A as A_2 } from "./module-Bd_2.js";
import { t as t_1 } from "./module-Hv_4.js";
const a = r.forwardRef(function (e, t) {
  let status;
  const e_style = e.style;
  const e_className = e.className;
  const e_prefixCls = e.prefixCls;
  const e_index = e.index;
  const p = e_index === undefined ? 1 : e_index;
  const e_current = e.current;
  const m = e_current === undefined ? 1 : e_current;
  const e_status = e.status;
  const e_title = e.title;
  const e_description = e.description;
  const e_icon = e.icon;
  const e_nextStepError = e.nextStepError;
  const e_type = e.type;
  const e_customDot = e.customDot;
  const e_labelPlacement = e.labelPlacement;
  const e_disabled = e.disabled;
  const e_onClick = e.onClick;
  const e_onChange = e.onChange;
  const e_direction = e.direction;
  const A = e.id;
  const e_lineless = e.lineless;
  if (e_status) {
    status = e_status;
  } else {
    if (m < p) {
      status = "wait";
    }
    if (m === p) {
      status = "process";
    }
    if (m > p) {
      status = "finish";
    }
  }
  const k = A_1(
    e_prefixCls + "-item",
    e_prefixCls + "-item-" + status,
    {
      [e_prefixCls + "-item-custom"]: !!e_icon,
      [e_prefixCls + "-item-next-error"]: e_nextStepError,
      [e_prefixCls + "-item-disabled"]: e_disabled,
      [e_prefixCls + "-item-active"]: p === m,
    },
    e_className,
  );
  const T = ((e) => {
    if (e_type === "dot") {
      return null;
    }
    let t = p;
    if (e_icon) {
      t = e_icon;
    } else if (e === "finish") {
      t = r.createElement(i.A, null);
    } else if (e === "error") {
      t = r.createElement(l.A, null);
    }
    return r.createElement(
      "div",
      {
        className: e_prefixCls + "-icon",
      },
      t,
    );
  })(status);
  const j = r.createElement(
    "div",
    {
      className: e_prefixCls + "-item-icon",
    },
    T,
  );
  const R = e_customDot
    ? e_customDot(j, {
        index: p,
        status,
        title: e_title,
        description: e_description,
      })
    : j;
  return r.createElement(
    "div",
    {
      ref: t,
      className: k,
      style: e_style,
      onClick: function (e) {
        if (!e_disabled) {
          if (e_onChange && m !== p) {
            e_onChange(p, A);
          }
          if (e_onClick) {
            e_onClick(p, A, e);
          }
        }
      },
    },
    !e_lineless &&
      (e_labelPlacement === "vertical" || e_direction === "vertical") &&
      r.createElement("div", {
        className: e_prefixCls + "-item-tail",
      }),
    e_type !== "arrow" && R,
    r.createElement(
      "div",
      {
        className: e_prefixCls + "-item-content",
      },
      r.createElement(
        "div",
        {
          className: e_prefixCls + "-item-title",
        },
        e_title,
      ),
      e_description &&
        r.createElement(
          "div",
          {
            className: e_prefixCls + "-item-description",
          },
          e_description,
        ),
    ),
  );
});
a.displayName = "Step";
const p = {
  current: 1,
  type: "default",
  size: "default",
  direction: "horizontal",
  labelPlacement: "horizontal",
};
export const A = r.forwardRef(function (e, t) {
  const i = r.useContext(QO);
  const i_getPrefixCls = i.getPrefixCls;
  const i_componentConfig = i.componentConfig;
  const i_rtl = i.rtl;
  const m = A_2(
    e,
    p,
    i_componentConfig == null ? undefined : i_componentConfig.Steps,
  );
  const m_className = m.className;
  const m_style = m.style;
  const m_children = m.children;
  const m_current = m.current;
  const current = m_current === undefined ? 1 : m_current;
  const m_status = m.status;
  const m_onChange = m.onChange;
  const m_type = m.type;
  const m_size = m.size;
  const m_direction = m.direction;
  const m_labelPlacement = m.labelPlacement;
  const m_customDot = m.customDot;
  const m_lineless = m.lineless;
  const prefixCls = i_getPrefixCls("steps");
  let labelPlacement = m_labelPlacement;
  if (m_type === "dot") {
    labelPlacement = m_direction === "vertical" ? "horizontal" : "vertical";
  }
  if (m_type === "navigation") {
    labelPlacement = "horizontal";
  }
  let direction = m_direction;
  if (m_type === "navigation" || m_type === "arrow") {
    direction = "horizontal";
  }
  const j = A_1(
    prefixCls,
    prefixCls + "-" + direction,
    prefixCls + "-label-" + labelPlacement,
    prefixCls + "-size-" + m_size,
    {
      [prefixCls + "-change-onclick"]: typeof m_onChange === "function",
      [prefixCls + "-mode-" + m_type]: m_type !== "default",
      [prefixCls + "-lineless"]: m_lineless,
      [prefixCls + "-rtl"]: i_rtl,
    },
    m_className,
  );
  return r.createElement(
    "div",
    {
      ref: t,
      style: m_style,
      className: j,
      ...t_1(m),
    },
    r.Children.toArray(m_children)
      .filter((e) => e && e.type && e.type.displayName === "Step")
      .map((e, t) => {
        t += 1;
        if (e) {
          const n = {
            prefixCls,
            type: m_type,
            index: t,
            current,
            status: current === t ? m_status : undefined,
            customDot: m_customDot,
            labelPlacement,
            direction,
            onChange: m_onChange,
            lineless: m_lineless,
            ...e.props,
          };
          if (m_status === "error" && current === t + 1) {
            n.nextStepError = true;
          }
          return r.cloneElement(e, n);
        }
        return null;
      }),
  );
});
A.displayName = "Steps";
A.Step = a;
