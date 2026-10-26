import a from "oa";
import r from "bk";
import o from "qa";
import l from "z8";
import i from "bT";
import { R } from "./module-fK.js";
import { E } from "./module-G4.js";
export function H(e) {
  let t;
  let n;
  let u;
  const { outlineEnabled } = e;
  const m = o._(e, ["outlineEnabled"]);
  const vRef = i.useRef(null);
  const outlineStyle = ((e) => {
    const {
      enabled,
      tabsRef,
      options,
      value,
      expanded,
      collapsed,
      collapsible,
    } = e;
    const [u, setU] = i.useState();
    E(() => {
      var tabsRef_current = tabsRef.current;
      if (enabled && tabsRef_current) {
        var a = () => {
          var t;
          var n;
          var a;
          var r;
          n = tabsRef_current.getBoundingClientRect();
          r =
            (a = tabsRef_current.querySelector(
              '[data-mode-tab-active="true"]',
            )) && getComputedStyle(a).visibility !== "hidden"
              ? a.getBoundingClientRect()
              : undefined;
          var o = ((e) => {
            var { width, height, fullHeight = height + 24, selected } = e;
            if (!(width <= 0) && !(height <= 0)) {
              const o =
                selected !== undefined &&
                selected.left + selected.width >= width - 1;
              const l = `M 0 ${height + 24} Q 0 `
                .concat(height, " ")
                .concat(24, " ")
                .concat(height);
              const i = o
                ? ""
                : `H ${width - 24} Q `
                    .concat(width, " ")
                    .concat(height, " ")
                    .concat(width, " ")
                    .concat(height + 24);
              let c = "".concat(l, " ").concat(i);
              let s = "";
              let u = "";
              const d = selected !== undefined && selected.left < 1;
              if (selected) {
                const { left } = selected;
                const v = o ? width : left + selected.width;
                const f = Math.max(0.75, selected.top);
                const b = Math.min(12, 0.5 * selected.height);
                const h = d ? 24 - f : b;
                const p = d && selected.leadingTab ? 16 : b;
                const g = o ? 24 - f : p;
                const x = height - 10;
                const y = Math.max(x, f + h);
                const k = d
                  ? "A "
                      .concat(h, " ")
                      .concat(h, " 0 0 1 ")
                      .concat(left + h, " ")
                      .concat(f)
                  : "Q "
                      .concat(left, " ")
                      .concat(f, " ")
                      .concat(left + h, " ")
                      .concat(f);
                const C = d ? 0.75 : left;
                const w = d
                  ? "A "
                      .concat(h, " ")
                      .concat(h, " 0 0 1 ")
                      .concat(C + h, " ")
                      .concat(f)
                  : k;
                const N = o
                  ? "A "
                      .concat(g, " ")
                      .concat(g, " 0 0 1 ")
                      .concat(v, " ")
                      .concat(f + g)
                  : "Q "
                      .concat(v, " ")
                      .concat(f, " ")
                      .concat(v, " ")
                      .concat(f + g);
                const _ = o ? v - 0.75 : v;
                const j = o
                  ? "A "
                      .concat(g, " ")
                      .concat(g, " 0 0 1 ")
                      .concat(_, " ")
                      .concat(f + g)
                  : N;
                const T = o ? height + 24 : x;
                const A = o
                  ? ""
                  : "Q "
                      .concat(v, " ")
                      .concat(height, " ")
                      .concat(v + 10, " ")
                      .concat(height);
                const E = `H ${v - g} `
                  .concat(N, " V ")
                  .concat(T, " ")
                  .concat(A);
                u =
                  `<path fill="none" stroke="white" stroke-width="${1.5}" d="M `
                    .concat(C, " ")
                    .concat(y, "\n      V ")
                    .concat(f + h, " ")
                    .concat(w, "\n      H ")
                    .concat(_ - g, " ")
                    .concat(j, " V ")
                    .concat(T, '"/>');
                const R = "Q "
                  .concat(left, " ")
                  .concat(height, " ")
                  .concat(left, " ")
                  .concat(y, "\n      V ")
                  .concat(f + h, " ")
                  .concat(k, "\n      ")
                  .concat(E);
                s = `M ${left - 10} `.concat(height, " ").concat(R, " Z");
                const M = d
                  ? `M ${0.75} ${height + 24} V ${f + h}\n        A `
                      .concat(h, " ")
                      .concat(h, " 0 0 1 ")
                      .concat(h + 0.75, " ")
                      .concat(f)
                  : ""
                      .concat(l, " H ")
                      .concat(left - 10, " ")
                      .concat(R);
                c = d
                  ? "".concat(M, " ").concat(E, " ").concat(i)
                  : "".concat(M, " ").concat(i);
              }
              const S = height + 24;
              const z = d
                ? ""
                : "M 0 "
                    .concat(height, " H ")
                    .concat(24, " Q 0 ")
                    .concat(height, " 0 ")
                    .concat(S, " Z");
              const L = o
                ? ""
                : `M ${width - 24} `
                    .concat(height, " H ")
                    .concat(width, " V ")
                    .concat(S, " Q ")
                    .concat(width, " ")
                    .concat(height, " ")
                    .concat(width - 24, " ")
                    .concat(height, " Z");
              const D = '<svg xmlns="http://www.w3.org/2000/svg" width="'
                .concat(width, '" height="')
                .concat(
                  S,
                  '"><defs><mask id="header" maskUnits="userSpaceOnUse" x="0" y="0" width="',
                )
                .concat(width, '" height="')
                .concat(
                  S,
                  '" style="mask-type:luminance"><rect width="100%" height="',
                )
                .concat(height, '" fill="white"/><path fill="black" d="')
                .concat(s, '"/><path fill="white" d="')
                .concat(z, " ")
                .concat(
                  L,
                  '"/></mask></defs><rect width="100%" height="100%" fill="white" mask="url(#header)"/></svg>',
                );
              const F = '<path fill="none" stroke="white" stroke-width="1" d="'
                .concat(c, '"/>')
                .concat(u);
              const P = '<svg xmlns="http://www.w3.org/2000/svg" width="'
                .concat(width, '" height="')
                .concat(fullHeight, '" viewBox="0 0 ')
                .concat(width, " ")
                .concat(fullHeight, '"><rect x="')
                .concat(0.5, '" y="')
                .concat(0.5, '" width="')
                .concat(Math.max(0, width - 1), '" height="')
                .concat(Math.max(0, fullHeight - 1), '" rx="')
                .concat(23.5, '" fill="none" stroke="white" stroke-width="')
                .concat(1, '"/>')
                .concat(F, "</svg>");
              return {
                "--content-generator-mode-tab-header-mask":
                  'url("data:image/svg+xml,'.concat(
                    encodeURIComponent(D),
                    '")',
                  ),
                "--content-generator-mode-tab-header-outline":
                  'url("data:image/svg+xml,'.concat(
                    encodeURIComponent(P),
                    '")',
                  ),
                "--content-generator-mode-tab-outline-height": "".concat(
                  fullHeight,
                  "px",
                ),
              };
            }
          })({
            width: n.width,
            height: n.height,
            fullHeight:
              (t = tabsRef_current.parentElement) == null
                ? undefined
                : t.getBoundingClientRect().height,
            selected: r
              ? {
                  left: r.left - n.left,
                  top: r.top - n.top,
                  width: r.width,
                  height: r.height,
                  leadingTab:
                    a ===
                    tabsRef_current.querySelector("[data-mode-tab-active]"),
                }
              : undefined,
          });
          setU((e) => {
            if (
              (e == null
                ? undefined
                : e["--content-generator-mode-tab-header-mask"]) ===
                (o == null
                  ? undefined
                  : o["--content-generator-mode-tab-header-mask"]) &&
              (e == null
                ? undefined
                : e["--content-generator-mode-tab-header-outline"]) ===
                (o == null
                  ? undefined
                  : o["--content-generator-mode-tab-header-outline"])
            ) {
              return e;
            }
            return o;
          });
        };
        a();
        var r =
          typeof ResizeObserver === "undefined"
            ? undefined
            : new ResizeObserver(a);
        if (r != null) {
          r.observe(tabsRef_current);
        }
        if (tabsRef_current.parentElement) {
          if (r != null) {
            r.observe(tabsRef_current.parentElement);
          }
        }
        for (var o of tabsRef_current.querySelectorAll(
          "[data-mode-tab-active], [data-mode-tabs-extra-clip]",
        )) {
          if (r != null) {
            r.observe(o);
          }
        }
        window.addEventListener("resize", a);
        return () => {
          if (r != null) {
            r.disconnect();
          }
          window.removeEventListener("resize", a);
        };
      }
    }, [enabled, tabsRef, options, value, expanded, collapsed, collapsible]);
    if (enabled) {
      return u;
    }
  })({
    enabled: outlineEnabled,
    tabsRef: vRef,
    options: m.options,
    value: m.value,
    expanded: (t = m.expanded) != null && t,
    collapsed: (n = m.collapsed) != null && n,
    collapsible: (u = m.showExpandToggle) != null && u,
  });
  return l.jsx(
    R,
    r._(a._({}, m), {
      tabsRef: vRef,
      outlineStyle,
    }),
  );
}
