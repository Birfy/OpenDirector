import n from "oa";
import r from "bk";
import o from "qa";
import i from "z8";
import a from "bT";
import u from "Ww";
import s from "V9";
import c from "mY";
import d from "vC";
import p from "k6B";
import f from "rT";
import h from "uRn";
import x from "Sc";
import y from "aZD";
let v = {
  type: "radio",
  mode: "outline",
  direction: "horizontal",
};
let MContext = a.createContext({
  type: "radio",
});
function useG(e) {
  let { getPrefixCls, size, componentConfig, rtl } = a.useContext(c.QO);
  let x = p.A(
    e,
    v,
    componentConfig == null ? undefined : componentConfig["Radio.Group"],
  );
  let {
    style,
    className,
    name,
    children,
    direction,
    type,
    mode,
    options,
    disabled,
  } = x;
  let [I, w] = d.A(undefined, {
    defaultValue: x.defaultValue,
    value: x.value,
  });
  let size_1 = x.size || size;
  let M = getPrefixCls("radio");
  let T = u.A(
    `${M}-group`,
    {
      [`${M}-group-type-button`]: type !== "radio",
      [`${M}-size-${size_1}`]: !!size_1,
      [`${M}-mode-${mode}`]: !!mode,
      [`${M}-group-disabled`]: disabled,
      [`${M}-group-direction-vertical`]: direction === "vertical",
      [`${M}-group-rtl`]: rtl,
    },
    className,
  );
  return i.jsx(MContext.Provider, {
    value: {
      onChangeValue: (e, t) => {
        let { onChange } = x;
        if (e !== I) {
          if (!("value" in x)) {
            w(e);
          }
          if (onChange) {
            onChange(e, t);
          }
        }
      },
      type,
      value: I,
      disabled,
      group: true,
      name,
      size: size_1,
    },
    children: i.jsx(
      "div",
      r._(
        n._(
          {
            className: T,
            role: "radiogroup",
            style,
          },
          h.sB(x),
          f.t(x),
        ),
        {
          children:
            options && s.cy(options)
              ? options.map((e, t) => {
                  if (s.Gv(e)) {
                    return i.jsx(
                      A,
                      {
                        disabled: disabled || e.disabled,
                        value: e.value,
                        children: e.label,
                      },
                      e.value,
                    );
                  }
                  return i.jsx(
                    A,
                    {
                      value: e,
                      disabled,
                      children: e,
                    },
                    t,
                  );
                })
              : children,
        },
      ),
    ),
  });
}
useG.displayName = "RadioGroup";
function useComponent(e) {
  let tRef = a.useRef(null);
  let { getPrefixCls, size, componentConfig, rtl } = a.useContext(c.QO);
  let g = p.A(
    e,
    {},
    componentConfig == null ? undefined : componentConfig.Radio,
  );
  let _ = a.useContext(MContext);
  let prefix = getPrefixCls("radio");
  let b = n._({}, g);
  let C = g.size || size;
  if (_.group) {
    b.checked = _.value === g.value;
    b.disabled = !!(_.disabled || g.disabled);
    C = _.size || size;
  }
  let { disabled, children, value, style, className } = b;
  let I = o._(b, ["disabled", "children", "value", "style", "className"]);
  let [w, O] = d.A(false, {
    value: b.checked,
    defaultValue: b.defaultChecked,
  });
  let M = u.A(
    `${prefix}${_.type === "button" ? "-button" : ""}`,
    {
      [`${prefix}-checked`]: w,
      [`${prefix}-disabled`]: disabled,
      [`${prefix}-size-${C}`]: !!C && !_.group,
      [`${prefix}-rtl`]: rtl,
    },
    className,
  );
  let onClick = a.useCallback(
    (e) => {
      if (s.Tn(g.children)) {
        e.preventDefault();
        if (tRef.current) {
          tRef.current.click();
        }
      }
      if (I.onClick) {
        I.onClick(e);
      }
    },
    [g.children, I.onClick],
  );
  return i.jsxs(
    "label",
    r._(n._({}, x.A(I, ["checked", "onChange"])), {
      onClick,
      style,
      className: M,
      children: [
        i.jsx(
          "input",
          r._(
            n._(
              {
                ref: tRef,
                disabled,
                value: value || "",
                type: "radio",
              },
              _.name
                ? {
                    name: _.name,
                  }
                : {},
            ),
            {
              checked: w,
              onChange: (e) => {
                e.persist();
                ((e) => {
                  let { onChange, value } = b;
                  if (!disabled) {
                    if (_.group) {
                      if (_.onChangeValue) {
                        _.onChangeValue(value, e);
                      }
                    } else if (!("checked" in g || w)) {
                      O(true);
                    }
                    if (!w && onChange) {
                      onChange(true, e);
                    }
                  }
                })(e);
              },
              onClick: (e) => {
                e.stopPropagation();
              },
            },
          ),
        ),
        s.Tn(children)
          ? children({
              checked: w,
            })
          : _.type === "radio"
            ? i.jsxs(i.Fragment, {
                children: [
                  i.jsx(y.A, {
                    prefix,
                    className: `${prefix}-mask-wrapper`,
                    disabled: w || disabled,
                    children: i.jsx("div", {
                      className: `${prefix}-mask`,
                    }),
                  }),
                  children &&
                    i.jsx("span", {
                      className: `${prefix}-text`,
                      children,
                    }),
                ],
              })
            : _.type === "button" &&
              i.jsx("span", {
                className: `${prefix}-button-inner`,
                children,
              }),
      ],
    }),
  );
}
useComponent.__BYTE_RADIO = true;
useComponent.displayName = "Radio";
useComponent.Group = useG;
useComponent.GroupContext = MContext;
export var A = useComponent;
