import n from "z8";
import s from "bT";
import _a from "xb";
import * as r from "./module-CZm.js";
import l from "u1a";
import { A } from "./module-ZmS.js";
function d() {
  let e = null;
  const t = new Set();
  return {
    activateItem: (i) => {
      e = i;
      t.forEach((e) => e());
    },
    clearActiveItem: () => {
      if (e !== null) {
        e = null;
        t.forEach((e) => e());
      }
    },
    getSnapshot: () => e,
    subscribe: (e) => {
      t.add(e);
      return () => void t.delete(e);
    },
  };
}
export var ae = s.createContext(d());
export function R_() {
  const eRef = s.useRef();
  if (!eRef.current) {
    eRef.current = d();
  }
  return eRef.current;
}
function onMouseDown(e) {
  e.preventDefault();
  e.stopPropagation();
}
export function KE(e) {
  const {
    buttonRef,
    icon,
    label,
    onClick,
    onMouseEnter,
    suffix = null,
    children,
  } = e;
  const _ = s.useId();
  const v = s.useContext(ae);
  const value = R_();
  const { getSnapshot, subscribe } = v;
  const S = s.useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
  const C = children != null;
  const visible = C && S === _;
  return n.jsxs("div", {
    className: _a(A.settingsRowWrapper, {
      [A.subMenuActive]: visible,
    }),
    onMouseDown,
    onMouseEnter: () => {
      v.activateItem(_);
      if (onMouseEnter != null) {
        onMouseEnter();
      }
    },
    children: [
      n.jsx("button", {
        ref: buttonRef,
        type: "button",
        className: A.settingsRow,
        onFocus: (e) => {
          if (e.currentTarget.matches(":focus-visible")) {
            v.activateItem(_);
          }
        },
        onClick: (e) => {
          e.stopPropagation();
          if (C) {
            v.activateItem(_);
          }
          if (onClick != null) {
            onClick();
          }
        },
        children: n.jsx(l.r, {
          icon,
          label,
          suffix,
        }),
      }),
      C
        ? n.jsx(ae.Provider, {
            value,
            children: n.jsx(r.w, {
              visible,
              children,
            }),
          })
        : null,
    ],
  });
}
