import r from "z8";
import n from "bT";
import _i from "xb";
import { E } from "./module-G4_2.js";
import { MD } from "./module-n47.js";
import { A } from "./module-Y4F.js";
const d = new WeakMap();
function u(e, t) {
  if (e.style.getPropertyValue("min-width") === t.appliedMinWidth) {
    if (t.initialMinWidth) {
      e.style.setProperty(
        "min-width",
        t.initialMinWidth,
        t.initialMinWidthPriority,
      );
    } else {
      e.style.removeProperty("min-width");
    }
    t.appliedMinWidth = "";
  }
}
export function z(e) {
  const {
    appearance,
    children,
    className,
    contentClassName,
    contentLayout = "plain",
    hideHeader = false,
    headerContent,
  } = e;
  const gRef = n.useRef(null);
  E(() => {
    var gRef_current = gRef.current;
    if (
      appearance === "main-frame-2026" &&
      contentLayout === "card" &&
      gRef_current
    ) {
      return ((e) => {
        const t = e.closest("#dreamina-ui-configuration-content-wrapper");
        if (!t) {
          return () => undefined;
        }
        let a = d.get(t);
        if (!a) {
          a = {
            appliedMinWidth: "",
            initialMinWidth: t.style.getPropertyValue("min-width"),
            initialMinWidthPriority: t.style.getPropertyPriority("min-width"),
            surfaces: new Set(),
          };
          d.set(t, a);
        }
        a.surfaces.add(e);
        const r = () =>
          ((e, t) => {
            const a = Array.from(t.surfaces).find(
              (e) => e.getClientRects().length > 0,
            );
            if (!a) {
              return void u(e, t);
            }
            const r = getComputedStyle(a)
              .getPropertyValue("--detail-surface-card-min-width")
              .trim();
            if (r) {
              t.appliedMinWidth = r;
              if (e.style.getPropertyValue("min-width") !== r) {
                e.style.setProperty("min-width", r);
              }
            } else {
              u(e, t);
            }
          })(t, a);
        const n =
          typeof ResizeObserver === "undefined"
            ? undefined
            : new ResizeObserver(r);
        const i =
          typeof MutationObserver === "undefined"
            ? undefined
            : new MutationObserver(r);
        if (n != null) {
          n.observe(e);
        }
        if (i != null) {
          i.observe(e, {
            attributes: true,
            attributeFilter: ["class", "hidden", "style"],
          });
        }
        r();
        return () => {
          if (n != null) {
            n.disconnect();
          }
          if (i != null) {
            i.disconnect();
          }
          a.surfaces.delete(e);
          r();
          if (a.surfaces.size === 0) {
            d.delete(t);
          }
        };
      })(gRef_current);
    }
  }, [appearance, contentLayout]);
  if (appearance === "legacy") {
    return r.jsx(MD.Provider, {
      value: appearance,
      children,
    });
  }
  return r.jsx(MD.Provider, {
    value: appearance,
    children: r.jsxs("section", {
      ref: gRef,
      className: _i(
        A.surface,
        contentLayout === "card" && A.cardSurface,
        className,
      ),
      "data-detail-surface-appearance": appearance,
      "data-detail-surface-content-layout": contentLayout,
      children: [
        hideHeader
          ? null
          : r.jsx("header", {
              className: A.header,
              children: headerContent,
            }),
        r.jsx("div", {
          className: _i(
            A.content,
            contentLayout === "card" && A.cardContent,
            contentClassName,
          ),
          children:
            contentLayout === "card"
              ? r.jsx("div", {
                  className: A.card,
                  children,
                })
              : children,
        }),
      ],
    }),
  });
}
