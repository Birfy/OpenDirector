import r from "bT";
import { A as A_1 } from "./module-puV.js";
import { Gv, Tn, cy } from "./module-Pl5.js";
import { QO } from "./module-ce.js";
import { A as A_2 } from "./module-To_2.js";
import { A as A_3 } from "./module-Bd_2.js";
import { t } from "./module-Hv_4.js";
import { sB } from "./module-rd_2.js";
import { A as A_4 } from "./module-hn.js";
import { A as A_5 } from "./module-Cu.js";
const p = (e, t) => {
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
const d = {
  type: "radio",
  mode: "outline",
  direction: "horizontal",
};
const MContext = r.createContext({
  type: "radio",
});
function useV(e) {
  const n = r.useContext(QO);
  const n_getPrefixCls = n.getPrefixCls;
  const n_size = n.size;
  const n_componentConfig = n.componentConfig;
  const n_rtl = n.rtl;
  const b = A_3(
    e,
    d,
    n_componentConfig == null ? undefined : n_componentConfig["Radio.Group"],
  );
  const b_style = b.style;
  const b_className = b.className;
  const b_name = b.name;
  const b_children = b.children;
  const b_direction = b.direction;
  const b_type = b.type;
  const b_mode = b.mode;
  const b_options = b.options;
  const b_disabled = b.disabled;
  const T = p(
    A_2(undefined, {
      defaultValue: b.defaultValue,
      value: b.value,
    }),
    2,
  );
  const j = T[0];
  const R = T[1];
  const I = b.size || n_size;
  const F = n_getPrefixCls("radio");
  const M = A_1(
    F + "-group",
    {
      [F + "-group-type-button"]: b_type !== "radio",
      [F + "-size-" + I]: !!I,
      [F + "-mode-" + b_mode]: !!b_mode,
      [F + "-group-disabled"]: b_disabled,
      [F + "-group-direction-vertical"]: b_direction === "vertical",
      [F + "-group-rtl"]: n_rtl,
    },
    b_className,
  );
  return r.createElement(
    MContext.Provider,
    {
      value: {
        onChangeValue: function (e, t) {
          const b_onChange = b.onChange;
          if (e !== j) {
            if (!("value" in b)) {
              R(e);
            }
            if (b_onChange) {
              b_onChange(e, t);
            }
          }
        },
        type: b_type,
        value: j,
        disabled: b_disabled,
        group: true,
        name: b_name,
      },
    },
    r.createElement(
      "div",
      {
        className: M,
        role: "radiogroup",
        style: b_style,
        ...sB(b),
        ...t(b),
      },
      b_options && cy(b_options)
        ? b_options.map((e, key) => {
            if (Gv(e)) {
              return r.createElement(
                C,
                {
                  key: e.value,
                  disabled: b_disabled || e.disabled,
                  value: e.value,
                },
                e.label,
              );
            }
            return r.createElement(
              C,
              {
                key,
                value: e,
                disabled: b_disabled,
              },
              e,
            );
          })
        : b_children,
    ),
  );
}
useV.displayName = "RadioGroup";
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
function useE(e) {
  const nRef = r.useRef(null);
  const u = r.useContext(QO);
  const u_getPrefixCls = u.getPrefixCls;
  const u_componentConfig = u.componentConfig;
  const u_rtl = u.rtl;
  const d = A_3(
    e,
    {},
    u_componentConfig == null ? undefined : u_componentConfig.Radio,
  );
  const v = r.useContext(MContext);
  const prefix = u_getPrefixCls("radio");
  const C = {
    ...d,
  };
  if (v.group) {
    C.checked = v.value === d.value;
    C.disabled = !!(v.disabled || d.disabled);
  }
  const { disabled, children, value, style, className, ...rest } = C;
  const k = x(
    A_2(false, {
      value: C.checked,
      defaultValue: C.defaultChecked,
    }),
    2,
  );
  const checked = k[0];
  const j = k[1];
  const R = A_1(
    "" + prefix + (v.type === "button" ? "-button" : ""),
    {
      [prefix + "-checked"]: checked,
      [prefix + "-disabled"]: disabled,
      [prefix + "-rtl"]: u_rtl,
    },
    className,
  );
  const I = (e) => {
    const C_onChange = C.onChange;
    const C_value = C.value;
    if (!disabled) {
      if (v.group) {
        if (v.onChangeValue) {
          v.onChangeValue(C_value, e);
        }
      } else if (!("checked" in d || checked)) {
        j(true);
      }
      if (!checked && C_onChange) {
        C_onChange(true, e);
      }
    }
  };
  const onClick = r.useCallback(
    function (e) {
      if (Tn(d.children)) {
        e.preventDefault();
        if (nRef.current) {
          nRef.current.click();
        }
      }
      if (rest.onClick) {
        rest.onClick(e);
      }
    },
    [d.children, rest.onClick],
  );
  return r.createElement(
    "label",
    {
      ...A_4(rest, ["checked", "onChange"]),
      onClick,
      style,
      className: R,
    },
    r.createElement("input", {
      ref: nRef,
      disabled,
      value: value || "",
      type: "radio",
      ...(v.name
        ? {
            name: v.name,
          }
        : {}),
      checked,
      onChange: function (e) {
        e.persist();
        I(e);
      },
      onClick: function (e) {
        e.stopPropagation();
      },
    }),
    Tn(children)
      ? children({
          checked,
        })
      : v.type === "radio"
        ? r.createElement(
            r.Fragment,
            null,
            r.createElement(
              A_5,
              {
                prefix,
                className: prefix + "-mask-wrapper",
                disabled: checked || disabled,
              },
              r.createElement("div", {
                className: prefix + "-mask",
              }),
            ),
            children &&
              r.createElement(
                "span",
                {
                  className: prefix + "-text",
                },
                children,
              ),
          )
        : v.type === "button" &&
          r.createElement(
            "span",
            {
              className: prefix + "-button-inner",
            },
            children,
          ),
  );
}
useE.__BYTE_RADIO = true;
useE.displayName = "Radio";
useE.Group = useV;
useE.GroupContext = MContext;
var C = useE;
export { C as A };
