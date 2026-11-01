import r from "oa";
import n from "bk";
import i from "qa";
import o from "z8";
import s from "bT";
import _c from "xb";
import { Z } from "./module-X0_2.js";
import { E } from "./module-G4_2.js";
import * as p from "./module-vy_2.js";
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
  const w = i._(e, [
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
  const [k, setK] = s.useState(null);
  const [C, setC] = s.useState(null);
  const [S, setS] = s.useState(null);
  const [N, setN] = s.useState(() => ({
    endInset: minimumEndInset,
    hasInlineEndSlot: false,
    navigationHidden: false,
  }));
  const T = s.useCallback(
    (e) => {
      setK(e);
      if (onRowElementChange != null) {
        onRowElementChange(e);
      }
    },
    [onRowElementChange],
  );
  const M = s.useCallback(
    (e) => {
      setC(e);
      if (onNavigationContentElementChange != null) {
        onNavigationContentElementChange(e);
      }
    },
    [onNavigationContentElementChange],
  );
  const I = s.useCallback(() => {
    if (k) {
      var e;
      var t;
      var a;
      var r = k.getBoundingClientRect();
      var n = ((e) => {
        for (let t = e; t;) {
          if (t.style.getPropertyValue(p.CL)) {
            return t;
          }
          t = t.parentElement;
        }
      })(k);
      var i = n ? Math.max(0, n.getBoundingClientRect().right - r.right) : 0;
      var endInset = Math.max(
        minimumEndInset,
        Math.max(
          0,
          (reserveTopActionsSpace && n
            ? ((e = p.CL),
              Number.isFinite(
                (t = Number.parseFloat(
                  window.getComputedStyle(n).getPropertyValue(e),
                )),
              )
                ? t
                : 0)
            : 0) - i,
        ),
      );
      var s =
        (a = S == null ? undefined : S.getBoundingClientRect().width) != null
          ? a
          : 0;
      var hasInlineEndSlot = s > 1;
      var l = hasInlineEndSlot ? endSlotGap : 0;
      var d = Math.max(0, r.width - endInset - s - l);
      var u = {
        endInset,
        hasInlineEndSlot,
        navigationHidden: r.width > 1 && d < minimumNavigationWidth,
      };
      setN((e) => {
        if (
          e.endInset === u.endInset &&
          e.hasInlineEndSlot === u.hasInlineEndSlot &&
          e.navigationHidden === u.navigationHidden
        ) {
          return e;
        }
        return u;
      });
    }
  }, [
    S,
    endSlotGap,
    minimumEndInset,
    minimumNavigationWidth,
    reserveTopActionsSpace,
    k,
  ]);
  E(() => {
    if (k && C) {
      var e =
        typeof ResizeObserver === "function"
          ? new ResizeObserver(I)
          : undefined;
      if (e != null) {
        e.observe(k);
      }
      if (e != null) {
        e.observe(C);
      }
      if (S) {
        if (e != null) {
          e.observe(S);
        }
      }
      var t =
        typeof MutationObserver === "function"
          ? new MutationObserver(I)
          : undefined;
      if (t != null) {
        t.observe(C, {
          characterData: true,
          childList: true,
          subtree: true,
        });
      }
      if (S) {
        if (t != null) {
          t.observe(S, {
            characterData: true,
            childList: true,
            subtree: true,
          });
        }
      }
      for (var a = k.parentElement; a;) {
        if (t != null) {
          t.observe(a, {
            attributeFilter: ["style"],
            attributes: true,
          });
        }
        a = a.parentElement;
      }
      window.addEventListener("resize", I, {
        passive: true,
      });
      I();
      return () => {
        if (e != null) {
          e.disconnect();
        }
        if (t != null) {
          t.disconnect();
        }
        window.removeEventListener("resize", I);
      };
    }
  }, [S, C, k, I]);
  return o.jsxs(
    "div",
    n._(r._({}, w), {
      ref: T,
      className: _c("row-y2F6X0", className),
      style: n._(r._({}, style), {
        paddingInlineEnd: N.endInset,
      }),
      "data-top-actions-aware-navigation-row": true,
      "data-navigation-hidden": N.navigationHidden || undefined,
      children: [
        o.jsx("div", {
          className: "navigation-ZjVvPg",
          hidden: N.navigationHidden,
          children: o.jsx(Z, {
            className: "scroll-container-CaDQq4",
            contentClassName: "viewport-VKbMqn",
            children: o.jsx("div", {
              ref: M,
              className: _c(
                "navigation-content-NKzSHT",
                navigationContentClassName,
              ),
              "data-top-actions-aware-navigation-content": true,
              children,
            }),
          }),
        }),
        endSlot !== undefined
          ? o.jsx("div", {
              ref: setS,
              className: "end-slot-rShf4f",
              style: {
                marginInlineStart: N.hasInlineEndSlot ? endSlotGap : 0,
              },
              "data-top-actions-aware-navigation-end-slot": true,
              children: endSlot,
            })
          : null,
      ],
    }),
  );
}
