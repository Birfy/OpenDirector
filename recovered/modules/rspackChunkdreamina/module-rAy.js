import a from "wnX";
import _o from "fyk";
import u from "bT";
import { Wb } from "./module-rJ.js";
import d from "tli";
import f from "O7";
import v from "cR";
import m from "loS";
import h from "pF";
import p from "ijd";
import { q } from "./module-g33.js";
let r;
let i;
const SContext = u.createContext({
  isGroup: false,
  shape: "circle",
  layout: "inline",
  disabled: false,
  value: [],
  onChange: function () {},
});
r = i || (i = {});
r.NORMAL = "normal";
r.DISABLED = "disabled";
r.ACTIVE = "active";
r.ACTIVE_DISABLED = "activeDisabled";
const E = (e, t) =>
  ({
    circle: {
      normal: u.createElement(d.A, null),
      active: u.createElement(f.A, null),
      disabled: u.createElement(v.A, null),
      activeDisabled: u.createElement(f.A, null),
    },
    square: {
      normal: u.createElement(h.A, null),
      active: u.createElement(m.A, null),
      disabled: u.createElement(p.A, null),
      activeDisabled: u.createElement(m.A, null),
    },
    justify: {
      normal: u.createElement(d.A, null),
      active: u.createElement(f.A, null),
      disabled: u.createElement(v.A, null),
      activeDisabled: u.createElement(f.A, null),
    },
  })[e][t];
const b = u.forwardRef(function (e, t) {
  const n = q(e, SContext);
  const n_style = n.style;
  const o = n_style === undefined ? {} : n_style;
  const n_className = n.className;
  const d = n_className === undefined ? "" : n_className;
  const n_children = n.children;
  const v = n_children === undefined ? null : n_children;
  const n_label = n.label;
  const h = n_label === undefined ? "" : n_label;
  const n_layout = n.layout;
  const b = n_layout === undefined ? "inline" : n_layout;
  const n_value = n.value;
  const n_defaultCheck = n.defaultCheck;
  const n_disabled = n.disabled;
  const k = n_disabled !== undefined && n_disabled;
  const n_shape = n.shape;
  const F = n_shape === undefined ? "circle" : n_shape;
  const n_icons = n.icons;
  const n_isRadio = n.isRadio;
  const S = n_isRadio !== undefined && n_isRadio;
  const n_checked = n.checked;
  const n_onChange = n.onChange;
  const I = u.useState(
    n_checked === undefined
      ? n_defaultCheck !== undefined && n_defaultCheck
      : n_checked,
  );
  const checked = I[0];
  const V = I[1];
  const L = u.useState(S ? "radio" : "checkbox")[0];
  const ORef = u.useRef(null);
  u.useImperativeHandle(t, function () {
    return {
      dom: ORef.current,
    };
  });
  u.useEffect(
    function () {
      if (n_checked !== undefined) {
        V(!!n_checked);
      }
    },
    [n_checked],
  );
  const _ = () => {
    let e;
    const t = checked
      ? k
        ? i.ACTIVE_DISABLED
        : i.ACTIVE
      : k
        ? i.DISABLED
        : i.NORMAL;
    if (
      (e =
        n_icons && n_icons[t] !== undefined
          ? n_icons[t]
          : n_icons === null
            ? null
            : b === "justify"
              ? E("justify", t)
              : E(F, t))
    ) {
      return u.createElement(
        "div",
        {
          className: a.xF(L + "-icon", {
            disabled: k,
            checked,
          }),
        },
        e,
      );
    }
    return null;
  };
  const onClick = function (e) {
    if (!(k || (S && checked))) {
      if (n_onChange) {
        n_onChange(!checked, n_value, e);
      }
      if (n_checked === undefined) {
        V(!checked);
      }
    }
  };
  return u.createElement(Wb, null, function (e) {
    const e_prefixCls = e.prefixCls;
    return u.createElement(
      "div",
      {
        role: "checkbox",
        "aria-checked": checked,
        "aria-disabled": k,
        tabIndex: 0,
        ref: ORef,
        style: o,
        className: a.xF(
          d,
          e_prefixCls + "-" + L,
          "shape-" + F,
          {
            disabled: k,
          },
          b,
        ),
        onClick,
      },
      b !== "justify" && _(),
      u.createElement(
        "div",
        {
          className: L + "-text",
        },
        v || h || n_value,
      ),
      b === "justify" && _(),
    );
  });
});
const Group = a.DU(
  u.forwardRef(function (e, t) {
    const e_style = e.style;
    const r = e_style === undefined ? {} : e_style;
    const e_className = e.className;
    const o = e_className === undefined ? "" : e_className;
    const e_defaultValue = e.defaultValue;
    const e_disabled = e.disabled;
    const disabled = e_disabled !== undefined && e_disabled;
    const e_shape = e.shape;
    const shape = e_shape === undefined ? "circle" : e_shape;
    const e_options = e.options;
    const e_icons = e.icons;
    const e_onChange = e.onChange;
    const e_value = e.value;
    const e_children = e.children;
    const C = e_children === undefined ? null : e_children;
    const e_layout = e.layout;
    const layout = e_layout === undefined ? "inline" : e_layout;
    const e_min = e.min;
    const T = e_min === undefined ? 0 : e_min;
    const e_max = e.max;
    const S = e_max === undefined ? 0 : e_max;
    const R = u.useState(
      e_value || (e_defaultValue === undefined ? [] : e_defaultValue),
    );
    const D = R[0];
    const I = R[1];
    const ARef = u.useRef(null);
    u.useImperativeHandle(t, function () {
      return {
        dom: ARef.current,
      };
    });
    u.useEffect(
      function () {
        if (e_value !== undefined) {
          I(e_value);
        }
      },
      [e_value],
    );
    const onChange = function (e, t) {
      if ((e || !(D.length <= T)) && (!S || !e || !(D.length >= S))) {
        const n = e ? [].concat(D, [t]) : D.filter((e) => e !== t);
        if (e_onChange) {
          e_onChange(n);
        }
        if (e_value === undefined) {
          I(n);
        }
      }
    };
    return u.createElement(Wb, null, function (e) {
      const e_prefixCls = e.prefixCls;
      return u.createElement(
        "div",
        {
          ref: ARef,
          style: r,
          className: a.xF(o, e_prefixCls + "-checkbox-group"),
        },
        u.createElement(
          SContext.Provider,
          {
            value: {
              isGroup: true,
              shape,
              layout,
              disabled,
              icons: e_icons,
              value: D,
              onChange,
            },
          },
          C,
          !C &&
            e_options &&
            e_options.map((e) =>
              u.createElement(
                b,
                _o(
                  {
                    key: e.value,
                  },
                  e,
                ),
              ),
            ),
        ),
      );
    });
  }),
  "CheckboxGroup",
);
export var A = a.DU(b, "Checkbox", {
  Group,
});
