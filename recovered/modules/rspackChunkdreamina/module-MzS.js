import r from "oa";
import o from "bk";
import i from "qa";
import l from "z8";
import s from "bT";
import { A as A_1, X } from "./module-RwR.js";
import { A as A_2 } from "./module-R8.js";
import { A as A_3 } from "./module-RZ.js";
import { QO } from "./module-mY_2.js";
import { A as A_4 } from "./module-k6B.js";
import * as f from "./module-rT.js";
import { A as A_5 } from "./module-Ww_2.js";
import { A as A_6 } from "./module-vC_2.js";
import { A as A_7 } from "./module-Sc_2.js";
import b from "u7";
import { Er, gw } from "./module-K6G.js";
let h = {
  position: "br",
  trigger: "hover",
  type: "default",
  icon: l.jsx(A_3, {}),
  unmountOnExit: true,
};
let m = s.forwardRef(function (e, ref) {
  let { componentConfig } = s.useContext(QO);
  let i = A_4(
    e,
    h,
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
    icon = l.jsx(A_3, {}),
    unmountOnExit = true,
    onClick,
    onVisibleChange,
    buttonProps,
    buttonsRender,
  } = i;
  let E = l.jsx(
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
    [E, children_1] = buttonsRender([E, children_1]);
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
          ref,
        },
        f.t(i),
      ),
      {
        children: [
          E,
          l.jsx(A, {
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
m.displayName = "DropdownButton";
let w = {
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
export let A = s.forwardRef(function (e, t) {
  let { getPrefixCls, componentConfig, rtl } = s.useContext(QO);
  let h = A_4(
    e,
    w,
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
  } = h;
  let z = i._(h, [
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
  let [B, H] = A_6(false, {
    defaultValue: h.defaultPopupVisible,
    value: h.popupVisible,
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
      l.jsx(b.Ay, {
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
          prefixCls: A_5(`${childrenPrefix}-menu`, {
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
        f.A(z, X),
        f.t(z),
        A_7(triggerProps, ["onVisibleChange"]),
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
                  className: A_5(
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
A.Button = m;
