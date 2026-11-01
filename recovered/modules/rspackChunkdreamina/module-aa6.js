import r from "bT";
import { A as A_1 } from "./module-puV.js";
import { QO } from "./module-ce.js";
import { A as A_2 } from "./module-To_2.js";
import { Gv, Tn, cy } from "./module-Pl5.js";
import { sB } from "./module-rd_2.js";
import { A as A_3 } from "./module-hn.js";
import { A as A_4 } from "./module-Cu.js";
import { A as A_5 } from "./module-Bd_2.js";
const s = (e, t) => {
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
const f = function (e, t, n) {
  if (n || arguments.length == 2) {
    var r;
    for (let o = 0, i = t.length; o < i; o++) {
      if (!(!r && o in t)) {
        if (!r) {
          r = Array.prototype.slice.call(t, 0, o);
        }
        r[o] = t[o];
      }
    }
  }
  return e.concat(r || Array.prototype.slice.call(t));
};
const PContext = r.createContext({
  isCheckboxGroup: false,
  checkboxGroupValue: [],
  onGroupChange: function () {},
  registerValue: function () {},
  unRegisterValue: function () {},
});
function useD(e) {
  const n = s(
    A_2([], {
      defaultValue: "defaultValue" in e ? e.defaultValue || [] : undefined,
      value: "value" in e ? e.value || [] : undefined,
    }),
    2,
  );
  const checkboxGroupValue = n[0];
  const m = n[1];
  const v = s(r.useState([]), 2);
  const h = v[0];
  const y = v[1];
  const g = r.useContext(QO);
  const g_getPrefixCls = g.getPrefixCls;
  const g_rtl = g.rtl;
  const e_disabled = e.disabled;
  const e_options = e.options;
  const e_style = e.style;
  const e_className = e.className;
  const e_error = e.error;
  const e_children = e.children;
  const e_direction = e.direction;
  const k = e_direction === undefined ? "horizontal" : e_direction;
  const T = g_getPrefixCls("checkbox");
  const j = A_1(
    T + "-group",
    {
      [T + "-group-is-error"]: e_error,
      [T + "-group-direction-" + k]: k,
      [T + "-group-rtl"]: g_rtl,
    },
    e_className,
  );
  const onGroupChange = r.useCallback(
    function (t, n, r) {
      const o = checkboxGroupValue.slice();
      if (n) {
        o.push(t);
      } else {
        o.splice(checkboxGroupValue.indexOf(t), 1);
      }
      m(o);
      if (e.onChange) {
        e.onChange(
          o.filter((e) => h.indexOf(e) > -1),
          r,
        );
      }
    },
    [checkboxGroupValue, e.onChange, h],
  );
  return r.createElement(
    "span",
    {
      className: j,
      style: e_style,
      ...sB(e),
    },
    r.createElement(
      PContext.Provider,
      {
        value: {
          isCheckboxGroup: true,
          checkboxGroupValue,
          onGroupChange,
          disabled: e_disabled,
          registerValue: function (e) {
            y(function (t) {
              return Array.from(new Set(f(f([], s(t), false), [e], false)));
            });
          },
          unRegisterValue: function (e) {
            y(function (t) {
              return t.filter((t) => t !== e);
            });
          },
        },
      },
      cy(e_options)
        ? e_options.map((e) => {
            const t = Gv(e) ? e.label : e;
            const n = Gv(e) ? e.value : e;
            const icon = Gv(e) ? e.icon : undefined;
            return r.createElement(
              A,
              {
                disabled: e_disabled || (Gv(e) && e.disabled),
                key: n,
                value: n,
                icon,
              },
              t,
            );
          })
        : e_children,
    ),
  );
}
useD.displayName = "CheckboxGroup";
const m = (e, t) => {
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
const v = function (e, t, n) {
  if (n || arguments.length == 2) {
    var r;
    for (let o = 0, i = t.length; o < i; o++) {
      if (!(!r && o in t)) {
        if (!r) {
          r = Array.prototype.slice.call(t, 0, o);
        }
        r[o] = t[o];
      }
    }
  }
  return e.concat(r || Array.prototype.slice.call(t));
};
function g(e) {
  const e_className = e.className;
  return r.createElement(
    "svg",
    {
      className: e_className,
      "aria-hidden": true,
      focusable: false,
      viewBox: "0 0 1024 1024",
      width: "200",
      height: "200",
      fill: "currentColor",
    },
    r.createElement("path", {
      d: "M877.44815445 206.10060629a64.72691371 64.72691371 0 0 0-95.14856334 4.01306852L380.73381888 685.46812814 235.22771741 533.48933518a64.72691371 64.72691371 0 0 0-92.43003222-1.03563036l-45.82665557 45.82665443a64.72691371 64.72691371 0 0 0-0.90617629 90.61767965l239.61903446 250.10479331a64.72691371 64.72691371 0 0 0 71.19960405 15.14609778 64.33855261 64.33855261 0 0 0 35.08198741-21.23042702l36.24707186-42.71976334 40.5190474-40.77795556-3.36579926-3.49525333 411.40426297-486.74638962a64.72691371 64.72691371 0 0 0-3.88361443-87.64024149l-45.3088404-45.43829334z",
      "p-id": "840",
    }),
  );
}
const C = (e, t) => {
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
export const A = r.forwardRef(function (e, ref) {
  const cRef = r.useRef(null);
  const u = r.useContext(QO);
  const u_getPrefixCls = u.getPrefixCls;
  const u_componentConfig = u.componentConfig;
  const u_rtl = u.rtl;
  const m = A_5(
    e,
    {},
    u_componentConfig == null ? undefined : u_componentConfig.Checkbox,
  );
  const v = r.useContext(PContext);
  const prefix = u_getPrefixCls("checkbox");
  const v_onGroupChange = v.onGroupChange;
  const S = {
    ...m,
  };
  if (v.isCheckboxGroup) {
    S.checked = v.checkboxGroupValue.indexOf(m.value) !== -1;
    S.disabled = "disabled" in m ? m.disabled : v.disabled;
  }
  const {
    disabled,
    children,
    className,
    value,
    style,
    indeterminate,
    error,
    ...rest
  } = S;
  const F = C(
    A_2(false, {
      value: S.checked,
      defaultValue: S.defaultChecked,
    }),
    2,
  );
  const checked = F[0];
  const _ = F[1];
  const V = A_1(
    prefix,
    {
      [prefix + "-disabled"]: !!disabled,
      [prefix + "-indeterminate"]: !!indeterminate,
      [prefix + "-checked"]: checked,
      [prefix + "-rtl"]: u_rtl,
      error,
    },
    className,
  );
  r.useEffect(
    function () {
      v.registerValue(value);
      return function () {
        v.unRegisterValue(value);
      };
    },
    [value],
  );
  const onChange = r.useCallback(
    function (e) {
      e.persist();
      e.stopPropagation();
      _(e.target.checked);
      if (v.isCheckboxGroup && v_onGroupChange) {
        v_onGroupChange(m.value, e.target.checked, e);
      }
      if (m.onChange) {
        m.onChange(e.target.checked, e);
      }
    },
    [v_onGroupChange, v.isCheckboxGroup, m.onChange, m.value],
  );
  const onClick = r.useCallback(
    function (e) {
      if (Tn(m.children)) {
        e.preventDefault();
        if (cRef.current) {
          cRef.current.click();
        }
      }
      if (rest.onClick) {
        rest.onClick(e);
      }
    },
    [m.children, rest.onClick],
  );
  let L = r.createElement(g, {
    className: prefix + "-mask-icon",
  });
  if (S.icon) {
    L = r.isValidElement(S.icon)
      ? r.cloneElement(S.icon, {
          className: prefix + "-mask-icon",
        })
      : S.icon;
  }
  return r.createElement(
    "label",
    {
      ref,
      "aria-disabled": disabled,
      ...A_3(rest, ["onChange"]),
      onClick,
      className: V,
      style,
    },
    r.createElement("input", {
      value,
      disabled: !!disabled,
      ref: cRef,
      checked: !!checked,
      onChange,
      onClick: function (e) {
        return e.stopPropagation();
      },
      type: "checkbox",
    }),
    Tn(children)
      ? children({
          checked,
          indeterminate,
        })
      : r.createElement(
          r.Fragment,
          null,
          r.createElement(
            A_4,
            {
              prefix,
              className: prefix + "-mask-wrapper",
              disabled: checked || disabled || indeterminate,
            },
            r.createElement(
              "div",
              {
                className: prefix + "-mask",
              },
              L,
            ),
          ),
          children &&
            r.createElement(
              "span",
              {
                className: prefix + "-text",
              },
              children,
            ),
        ),
  );
});
A.displayName = "Checkbox";
A.Group = useD;
A.useCheckbox = function (e, t) {
  const n = m(r.useState(v([], m(t || []), false)), 2);
  const selected = n[0];
  const setSelected = n[1];
  const l = r.useMemo(
    function () {
      return {
        isSelected: function (e) {
          return selected.indexOf(e) > -1;
        },
        setValueSelected: function (e, t) {
          const n = cy(e) ? e : [e];
          setSelected(
            Array.from(
              new Set(
                t
                  ? v(v([], m(selected), false), m(n), false)
                  : selected.filter((e) => n.indexOf(e) === -1),
              ),
            ),
          );
        },
      };
    },
    [selected],
  );
  const l_isSelected = l.isSelected;
  const l_setValueSelected = l.setValueSelected;
  const s = r.useMemo(
    function () {
      const isAllSelected = function () {
        return e.every((e) => l_isSelected(e));
      };
      return {
        selectAll: function () {
          setSelected(e);
        },
        unSelectAll: function () {
          setSelected([]);
        },
        toggle: function (t = e) {
          const n = cy(t) ? t : [t];
          const r = v([], m(selected), false);
          n.forEach((e) => {
            const t = r.indexOf(e);
            if (t > -1) {
              r.splice(t, 1);
            } else {
              r.push(e);
            }
          });
          setSelected(r);
        },
        isAllSelected,
        isPartialSelected: function () {
          return e.some((e) => l_isSelected(e)) && !isAllSelected();
        },
      };
    },
    [selected, e, l_isSelected],
  );
  return {
    selected,
    setSelected,
    setValueSelected: l_setValueSelected,
    selectAll: s.selectAll,
    unSelectAll: s.unSelectAll,
    toggle: s.toggle,
    isSelected: l_isSelected,
    isAllSelected: s.isAllSelected,
    isPartialSelected: s.isPartialSelected,
  };
};
