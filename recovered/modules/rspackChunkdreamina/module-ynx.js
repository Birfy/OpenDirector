import r from "oa";
import o from "bk";
import i from "qa";
import l from "z8";
import s from "bT";
import { A as A_1, X } from "./module-OPT.js";
import { A as A_2 } from "./module-se_3.js";
import u from "fyk";
import "U4";
import { V } from "./module-Mt_2.js";
import { QO } from "./module-tMn.js";
import { A as A_3 } from "./module-oO_3.js";
import * as x from "./module-G1.js";
import { A as A_4 } from "./module-d1.js";
import { A as A_5 } from "./module-j6G.js";
import { A as A_6 } from "./module-MA.js";
import P from "u7";
import { Er, gw } from "./module-Kg.js";
const g = s.forwardRef(function (e, t) {
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
      .concat(r, "-icon-more"),
  };
  if (e_spin) {
    l.className = "".concat(l.className, " ").concat(r, "-icon-loading");
  }
  delete l.spin;
  delete l.isIcon;
  return s.createElement(
    "svg",
    u(
      {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "4",
        viewBox: "0 0 48 48",
      },
      l,
    ),
    s.createElement("path", {
      fill: "currentColor",
      stroke: "none",
      strokeWidth: "none",
      d: "M38 25v-2h2v2h-2ZM23 25v-2h2v2h-2ZM8 25v-2h2v2H8Z",
    }),
    s.createElement("path", {
      d: "M38 25v-2h2v2h-2ZM23 25v-2h2v2h-2ZM8 25v-2h2v2H8Z",
    }),
  );
});
g.defaultProps = {
  isIcon: true,
};
g.displayName = "IconMore";
let w = {
  position: "br",
  trigger: "hover",
  type: "default",
  icon: l.jsx(g, {}),
  unmountOnExit: true,
};
let j = s.forwardRef(function (e, t) {
  let { componentConfig } = s.useContext(QO);
  let i = A_3(
    e,
    w,
    componentConfig == null ? undefined : componentConfig["Dropdown.Button"],
  );
  let {
    className,
    style,
    children,
    disabled,
    droplist,
    position = "br",
    trigger = "hover",
    type = "default",
    size,
    icon = l.jsx(g, {}),
    unmountOnExit = true,
    onClick,
    onVisibleChange,
    buttonProps,
    buttonsRender,
  } = i;
  let A = l.jsx(
    A_2,
    o._(
      r._(
        {
          disabled,
          type,
          size,
          onClick,
        },
        buttonProps,
      ),
      {
        children,
      },
    ),
  );
  let children_1 = l.jsx(A_2, {
    disabled,
    type,
    size,
    icon,
  });
  if (buttonsRender) {
    [A, children_1] = buttonsRender([A, children_1]);
  }
  let disabled_1 =
    disabled || !children_1 || (children_1.props && children_1.props.loading);
  return l.jsxs(
    A_2.Group,
    o._(
      r._(
        {
          className,
          style,
          ref: t,
        },
        x.t(i),
      ),
      {
        children: [
          A,
          l.jsx(E, {
            disabled,
            droplist,
            position,
            trigger,
            unmountOnExit,
            onVisibleChange,
            triggerProps: {
              disabled: disabled_1,
            },
            children: children_1,
          }),
        ],
      },
    ),
  );
});
j.displayName = "DropdownButton";
let k = {
  position: "bl",
  trigger: "hover",
  unmountOnExit: true,
  mouseEnterDelay: 400,
  mouseLeaveDelay: 400,
  popupAlign: {
    left: 8,
    right: 8,
    top: 8,
    bottom: 8,
  },
};
let A = s.forwardRef(function (e, t) {
  let { getPrefixCls, componentConfig, rtl } = s.useContext(QO);
  let d = A_3(
    e,
    k,
    componentConfig == null ? undefined : componentConfig.Button,
  );
  let {
    trigger,
    droplist,
    children,
    position,
    disabled,
    unmountOnExit,
    triggerProps,
    selectable = false,
    focusLock,
    autoFocus = true,
    escToExit = true,
    getPopupContainer,
    onVisibleChange,
    mouseEnterDelay,
    mouseLeaveDelay,
    popupAlign,
    bottomOffset,
  } = d;
  let z = i._(d, [
    "trigger",
    "droplist",
    "children",
    "position",
    "disabled",
    "unmountOnExit",
    "triggerProps",
    "selectable",
    "focusLock",
    "autoFocus",
    "escToExit",
    "getPopupContainer",
    "onVisibleChange",
    "mouseEnterDelay",
    "mouseLeaveDelay",
    "popupAlign",
    "bottomOffset",
  ]);
  let childrenPrefix = getPrefixCls("dropdown");
  let WRef = s.useRef(null);
  let [B, H] = A_5(false, {
    defaultValue: d.defaultPopupVisible,
    value: d.popupVisible,
  });
  let L = () => s.Children.only(droplist || l.jsx("span", {}));
  let onActivationChange = (e) => {
    H(e);
    if (onVisibleChange) {
      onVisibleChange(e);
    }
    if (triggerProps && triggerProps.onVisibleChange) {
      triggerProps.onVisibleChange(e);
    }
  };
  let popup = ((e) => {
    let { autoFocus, disabed, actived, escToExit, render, onActivationChange } =
      e;
    if (disabed) {
      return render;
    }
    let onKeyDown = (e) => {
      if (escToExit && actived && [gw.key, Er.key].includes(e.key)) {
        onActivationChange(false);
      }
    };
    let onActivation = (e) => {
      if (autoFocus) {
        setTimeout(() => actived && e.focus(), 300);
      }
    };
    return () =>
      l.jsx(P.Ay, {
        disabled: !actived,
        autoFocus: false,
        crossFrame: false,
        lockProps: {
          tabIndex: -1,
          onKeyDown,
        },
        onActivation,
        children: render(),
      });
  })({
    disabed: !focusLock,
    actived: B,
    autoFocus,
    escToExit,
    render: () => {
      var e;
      let t = L();
      if (t == null || (e = t.props) == null ? undefined : e.isMenu) {
        let e = true;
        for (let n of s.Children.toArray(t.props.children)) {
          if (n != null) {
            e = false;
            break;
          }
        }
        return s.cloneElement(t, {
          prefixCls: A_4(`${childrenPrefix}-menu`, {
            [`${childrenPrefix}-menu-hidden`]: e,
          }),
          inDropdown: true,
          selectable,
          showSelectedIcon: true,
          onClickMenuItem: (...e) => {
            let t = null;
            let n = L();
            if (n.props.onClickMenuItem) {
              t = n.props.onClickMenuItem(...e);
            }
            let r = WRef.current && WRef.current.getRootElement();
            if (r && r.focus) {
              r.focus();
            }
            if (t instanceof Promise) {
              t.finally(() => onActivationChange(false));
            } else if (t !== false) {
              onActivationChange(false);
            }
          },
        });
      }
      return t;
    },
    onActivationChange,
  });
  return l.jsx(
    A_1,
    o._(
      r._(
        {
          ref: (e) => (WRef.current = e),
          classNames: "slideDynamicOrigin",
          childrenPrefix,
          trigger,
          popup,
          mouseEnterDelay,
          mouseLeaveDelay,
          disabled,
          unmountOnExit,
          position,
          popupVisible: B,
          popupAlign,
          getPopupContainer,
          alignPoint: trigger === "contextMenu",
        },
        x.A(z, X),
        x.t(z),
        A_6(triggerProps, ["onVisibleChange"]),
      ),
      {
        onVisibleChange: (e) => {
          if (e !== B) {
            onActivationChange(e);
          }
        },
        bottomOffset,
        children: s.isValidElement(children)
          ? s.cloneElement(
              children,
              o._(
                r._(
                  {},
                  typeof disabled === "boolean"
                    ? {
                        disabled,
                      }
                    : {},
                ),
                {
                  className: A_4(
                    {
                      [`${childrenPrefix}-popup-visible`]: B,
                      [`${[childrenPrefix]}-rtl`]: rtl,
                    },
                    children.props.className,
                  ),
                },
              ),
            )
          : children,
      },
    ),
  );
});
A.displayName = "Dropdown";
A.Button = j;
var E = A;
export { E as A };
