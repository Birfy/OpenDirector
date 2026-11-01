import n from "oa";
import t from "bk";
import o from "qa";
import r from "z8";
import s from "bT";
import _l from "xb";
import d from "X0";
import m from "G4";
import * as p from "./module-vy.js";
export function z(e) {
  const {
    children,
    className,
    endSlot,
    endSlotGap = 8,
    minimumEndInset = 0,
    minimumNavigationWidth = 120,
    navigationContentClassName,
    reserveTopActionsSpace = true,
    style,
    onNavigationContentElementChange,
    onRowElementChange,
  } = e;
  const k = o._(e, [
    "children",
    "className",
    "endSlot",
    "endSlotGap",
    "minimumEndInset",
    "minimumNavigationWidth",
    "navigationContentClassName",
    "reserveTopActionsSpace",
    "style",
    "onNavigationContentElementChange",
    "onRowElementChange",
  ]);
  const [y, setY] = s.useState(null);
  const [W, setW] = s.useState(null);
  const [j, setJ] = s.useState(null);
  const [C, setC] = s.useState(() => ({
    endInset: minimumEndInset,
    hasInlineEndSlot: false,
    navigationHidden: false,
  }));
  const A = s.useCallback(
    (e) => {
      setY(e);
      if (onRowElementChange != null) {
        onRowElementChange(e);
      }
    },
    [onRowElementChange],
  );
  const F = s.useCallback(
    (e) => {
      setW(e);
      if (onNavigationContentElementChange != null) {
        onNavigationContentElementChange(e);
      }
    },
    [onNavigationContentElementChange],
  );
  const $ = s.useCallback(() => {
    if (y) {
      var e;
      var i;
      var a;
      var n = y.getBoundingClientRect();
      var t = ((e) => {
        for (let i = e; i;) {
          if (i.style.getPropertyValue(p.CL)) {
            return i;
          }
          i = i.parentElement;
        }
      })(y);
      var o = t ? Math.max(0, t.getBoundingClientRect().right - n.right) : 0;
      var endInset = Math.max(
        minimumEndInset,
        Math.max(
          0,
          (reserveTopActionsSpace && t
            ? ((e = p.CL),
              Number.isFinite(
                (i = Number.parseFloat(
                  window.getComputedStyle(t).getPropertyValue(e),
                )),
              )
                ? i
                : 0)
            : 0) - o,
        ),
      );
      var s =
        (a = j == null ? undefined : j.getBoundingClientRect().width) != null
          ? a
          : 0;
      var hasInlineEndSlot = s > 1;
      var c = hasInlineEndSlot ? endSlotGap : 0;
      var d = Math.max(0, n.width - endInset - s - c);
      var m = {
        endInset,
        hasInlineEndSlot,
        navigationHidden: n.width > 1 && d < minimumNavigationWidth,
      };
      setC((e) => {
        if (
          e.endInset === m.endInset &&
          e.hasInlineEndSlot === m.hasInlineEndSlot &&
          e.navigationHidden === m.navigationHidden
        ) {
          return e;
        }
        return m;
      });
    }
  }, [
    j,
    endSlotGap,
    minimumEndInset,
    minimumNavigationWidth,
    reserveTopActionsSpace,
    y,
  ]);
  m.E(() => {
    if (y && W) {
      var e =
        typeof ResizeObserver === "function"
          ? new ResizeObserver($)
          : undefined;
      if (e != null) {
        e.observe(y);
      }
      if (e != null) {
        e.observe(W);
      }
      if (j) {
        if (e != null) {
          e.observe(j);
        }
      }
      var i =
        typeof MutationObserver === "function"
          ? new MutationObserver($)
          : undefined;
      if (i != null) {
        i.observe(W, {
          characterData: true,
          childList: true,
          subtree: true,
        });
      }
      if (j) {
        if (i != null) {
          i.observe(j, {
            characterData: true,
            childList: true,
            subtree: true,
          });
        }
      }
      for (var a = y.parentElement; a;) {
        if (i != null) {
          i.observe(a, {
            attributeFilter: ["style"],
            attributes: true,
          });
        }
        a = a.parentElement;
      }
      window.addEventListener("resize", $, {
        passive: true,
      });
      $();
      return () => {
        if (e != null) {
          e.disconnect();
        }
        if (i != null) {
          i.disconnect();
        }
        window.removeEventListener("resize", $);
      };
    }
  }, [j, W, y, $]);
  return r.jsxs(
    "div",
    t._(n._({}, k), {
      ref: A,
      className: _l("row-y2F6X0", className),
      style: t._(n._({}, style), {
        paddingInlineEnd: C.endInset,
      }),
      "data-top-actions-aware-navigation-row": true,
      "data-navigation-hidden": C.navigationHidden || undefined,
      children: [
        r.jsx("div", {
          className: "navigation-ZjVvPg",
          hidden: C.navigationHidden,
          children: r.jsx(d.Z, {
            className: "scroll-container-CaDQq4",
            contentClassName: "viewport-VKbMqn",
            children: r.jsx("div", {
              ref: F,
              className: _l(
                "navigation-content-NKzSHT",
                navigationContentClassName,
              ),
              "data-top-actions-aware-navigation-content": true,
              children,
            }),
          }),
        }),
        endSlot !== undefined
          ? r.jsx("div", {
              ref: setJ,
              className: "end-slot-rShf4f",
              style: {
                marginInlineStart: C.hasInlineEndSlot ? endSlotGap : 0,
              },
              "data-top-actions-aware-navigation-end-slot": true,
              children: endSlot,
            })
          : null,
      ],
    }),
  );
}
