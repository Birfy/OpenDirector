import r from "z8";
import "Vx";
import l from "Ix";
import n from "pr";
import i from "bT";
import _s from "xb";
export var D = i.memo((e) => {
  var { disable, handler, onClick, text, icon, render, className, tooltip } = e;
  var onClick_1 = i.useCallback(
    (e) => {
      if (!disable) {
        if (onClick != null) {
          onClick(e);
        }
        if (handler != null) {
          handler();
        }
      }
    },
    [disable, handler, onClick],
  );
  var onContextMenu = i.useCallback((e) => {
    e.preventDefault();
  }, []);
  var children = r.jsx("div", {
    className: _s("context-menu-item-W7ekUR", className, {
      "disable-V9G2vf": disable,
    }),
    role: "button",
    "aria-label": text,
    "aria-disabled": disable,
    tabIndex: disable ? -1 : 0,
    onKeyDown: n.q,
    onClick: onClick_1,
    onContextMenu,
    children: render
      ? render()
      : r.jsxs(r.Fragment, {
          children: [
            icon
              ? r.jsx("div", {
                  className: "context-menu-icon-VEKN4P",
                  children: icon,
                })
              : null,
            r.jsx("div", {
              className: "context-menu-text-UzIrQH",
              children: text,
            }),
          ],
        }),
  });
  if (tooltip) {
    return r.jsx(l.A, {
      content: tooltip,
      position: "top",
      children,
    });
  }
  return children;
});
D.displayName = "MenuItem";
