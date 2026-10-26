import r from "oa";
import o from "bk";
import i from "qa";
import l from "z8";
import s from "bT";
import { A as A_1 } from "./module-Ww_2.js";
import { QO } from "./module-mY_2.js";
import { A as A_2 } from "./module-vC_2.js";
import { Gv, Tn, cy } from "./module-V9.js";
import { A as A_3 } from "./module-Sc_2.js";
import { A as A_4 } from "./module-aZD.js";
import { A as A_5 } from "./module-k6B.js";
let PContext = s.createContext({
  isCheckboxGroup: false,
  checkboxGroupValue: [],
  onGroupChange: () => {},
  registerValue: () => {},
  unRegisterValue: () => {},
});
function useF(e) {
  let [t, n] = A_2([], {
    defaultValue: "defaultValue" in e ? e.defaultValue || [] : undefined,
    value: "value" in e ? e.value || [] : undefined,
  });
  let [r, setR] = s.useState([]);
  let { getPrefixCls, rtl } = s.useContext(QO);
  let {
    disabled,
    options,
    style,
    className,
    error,
    light,
    children,
    direction = "horizontal",
  } = e;
  let O = getPrefixCls("checkbox");
  let C = A_1(
    `${O}-group`,
    {
      [`${O}-group-is-error`]: error,
      [`${O}-group-direction-${direction}`]: direction,
      [`${O}-group-rtl`]: rtl,
    },
    className,
  );
  let onGroupChange = s.useCallback(
    (o, i, l) => {
      let s = t.slice();
      if (i) {
        s.push(o);
      } else {
        s.splice(t.indexOf(o), 1);
      }
      n(s);
      if (e.onChange) {
        e.onChange(
          s.filter((e) => r.indexOf(e) > -1),
          l,
        );
      }
    },
    [t, e.onChange, r],
  );
  return l.jsx("span", {
    className: C,
    style,
    children: l.jsx(PContext.Provider, {
      value: {
        isCheckboxGroup: true,
        checkboxGroupValue: t,
        onGroupChange,
        disabled,
        registerValue: (e) => {
          setR((t) => Array.from(new Set([...t, e])));
        },
        unRegisterValue: (e) => {
          setR((t) => t.filter((t) => t !== e));
        },
      },
      children: cy(options)
        ? options.map((e) => {
            let children_1 = Gv(e) ? e.label : e;
            let n = Gv(e) ? e.value : e;
            return l.jsx(
              A,
              {
                disabled: disabled || (Gv(e) && e.disabled),
                value: n,
                light,
                children: children_1,
              },
              n,
            );
          })
        : children,
    }),
  });
}
useF.displayName = "CheckboxGroup";
function v({ className }) {
  return l.jsx("svg", {
    className,
    "aria-hidden": true,
    focusable: false,
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    fill: "currentColor",
    children: l.jsx("path", {
      d: "M18.8536 8.35355C19.0489 8.54882 19.0489 8.8654 18.8536 9.06066L10.8536 17.0607C10.6584 17.2559 10.3418 17.2559 10.1465 17.0607L5.14651 12.0607C4.95125 11.8654 4.95125 11.5488 5.14651 11.3536L5.85361 10.6464C6.04888 10.4512 6.36546 10.4512 6.56072 10.6464L10.5001 14.5858L17.4394 7.64645C17.6347 7.45118 17.9512 7.45118 18.1465 7.64645L18.8536 8.35355Z",
      "p-id": "840",
    }),
  });
}
export let A = s.forwardRef(function (e, ref) {
  let nRef = s.useRef(null);
  let { getPrefixCls, componentConfig, rtl } = s.useContext(QO);
  let x = A_5(
    e,
    {},
    componentConfig == null ? undefined : componentConfig.Checkbox,
  );
  let w = s.useContext(PContext);
  let prefix = getPrefixCls("checkbox");
  let { onGroupChange } = w;
  let C = r._({}, x);
  if (w.isCheckboxGroup) {
    C.checked = w.checkboxGroupValue.indexOf(x.value) !== -1;
    C.disabled = "disabled" in x ? x.disabled : w.disabled;
  }
  let {
    size = "default",
    disabled,
    children,
    className,
    value,
    style,
    indeterminate,
    error,
    light,
  } = C;
  let S = i._(C, [
    "size",
    "disabled",
    "children",
    "className",
    "value",
    "style",
    "indeterminate",
    "error",
    "light",
  ]);
  let [D, R] = A_2(false, {
    value: C.checked,
    defaultValue: C.defaultChecked,
  });
  let I = size === "default" ? "" : `-${size}`;
  let z = A_1(
    prefix,
    `${prefix}${I}`,
    {
      [`${prefix}-disabled`]: !!disabled,
      [`${prefix}-indeterminate`]: !!indeterminate,
      [`${prefix}-checked`]: D,
      [`${prefix}-rtl`]: rtl,
      [`${prefix}-light`]: light,
      error,
    },
    className,
  );
  s.useEffect(() => {
    w.registerValue(value);
    return () => {
      w.unRegisterValue(value);
    };
  }, [value]);
  let onChange = s.useCallback(
    (e) => {
      e.persist();
      e.stopPropagation();
      R(e.target.checked);
      if (w.isCheckboxGroup && onGroupChange) {
        onGroupChange(x.value, e.target.checked, e);
      }
      if (x.onChange) {
        x.onChange(e.target.checked, e);
      }
    },
    [onGroupChange, w.isCheckboxGroup, x.onChange, x.value],
  );
  let onClick = s.useCallback(
    (e) => {
      if (Tn(x.children)) {
        e.preventDefault();
        if (nRef.current) {
          nRef.current.click();
        }
      }
      if (S.onClick) {
        S.onClick(e);
      }
    },
    [x.children, S.onClick],
  );
  return l.jsxs(
    "label",
    o._(
      r._(
        {
          ref,
          "aria-disabled": disabled,
        },
        A_3(S, ["onChange"]),
      ),
      {
        onClick,
        className: z,
        style,
        children: [
          l.jsx("input", {
            value,
            disabled: !!disabled,
            ref: nRef,
            checked: !!D,
            onChange,
            onClick: (e) => e.stopPropagation(),
            type: "checkbox",
          }),
          Tn(children)
            ? children({
                checked: D,
                indeterminate,
              })
            : l.jsxs(l.Fragment, {
                children: [
                  l.jsx(A_4, {
                    prefix,
                    className: `${prefix}-mask-wrapper ${prefix}-mask-wrapper${I}`,
                    disabled: D || disabled || indeterminate,
                    children: l.jsx("div", {
                      className: `${prefix}-mask ${prefix}-mask${I}`,
                      children: l.jsx(v, {
                        className: `${prefix}-mask-icon ${prefix}-mask-icon${I}`,
                      }),
                    }),
                  }),
                  children &&
                    l.jsx("span", {
                      className: `${prefix}-text ${prefix}-text${I}`,
                      children,
                    }),
                ],
              }),
        ],
      },
    ),
  );
});
A.displayName = "Checkbox";
A.Group = useF;
A.useCheckbox = (e, t) => {
  let [n, setN] = s.useState([...(t || [])]);
  let { isSelected, setValueSelected } = s.useMemo(
    () => ({
      isSelected: (e) => n.indexOf(e) > -1,
      setValueSelected: (e, t) => {
        let o = cy(e) ? e : [e];
        setN(
          Array.from(
            new Set(t ? [...n, ...o] : n.filter((e) => o.indexOf(e) === -1)),
          ),
        );
      },
    }),
    [n],
  );
  let { selectAll, unSelectAll, toggle, isAllSelected, isPartialSelected } =
    s.useMemo(() => {
      let isAllSelected_1 = () => e.every((e) => isSelected(e));
      return {
        selectAll: () => {
          setN(e);
        },
        unSelectAll: () => {
          setN([]);
        },
        toggle: (t = e) => {
          let o = cy(t) ? t : [t];
          let i = [...n];
          o.forEach((e) => {
            let t = i.indexOf(e);
            if (t > -1) {
              i.splice(t, 1);
            } else {
              i.push(e);
            }
          });
          setN(i);
        },
        isAllSelected: isAllSelected_1,
        isPartialSelected: () =>
          e.some((e) => isSelected(e)) && !isAllSelected_1(),
      };
    }, [n, e, isSelected]);
  return {
    selected: n,
    setSelected: setN,
    setValueSelected,
    selectAll,
    unSelectAll,
    toggle,
    isSelected,
    isAllSelected,
    isPartialSelected,
  };
};
