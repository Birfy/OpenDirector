import r from "oa";
import n from "bk";
import a from "z8";
import o from "Qey";
import { A as A_1 } from "./module-M53.js";
export function D(e) {
  const {
    items,
    renderCard,
    viewportRef,
    overlay,
    layout = "rail",
    activeHeroIndex = 0,
    outgoingHeroIndex,
    animateHero = false,
    heroTransitionDirection = "next",
    onHeroSelect,
    heroGestureHandlers,
    onHeroMouseEnter,
    onHeroMouseLeave,
    onHeroFocus,
    onHeroBlur,
  } = e;
  const x = items.slice(0, 5);
  const w = x.length > 0 ? activeHeroIndex % x.length : 0;
  const T = x[w];
  const k =
    x.length > 0 && outgoingHeroIndex !== undefined
      ? ((outgoingHeroIndex % x.length) + x.length) % x.length
      : (w - 1 + x.length) % x.length;
  const R =
    layout === "hero"
      ? (heroTransitionDirection === "previous"
          ? [T, animateHero ? x[k] : undefined]
          : [animateHero ? x[k] : undefined, T]
        ).filter((e) => !!e)
      : items;
  const N = items.length < 4;
  const A = items.length > 4;
  return a.jsxs("div", {
    className: A_1.scrollFrame,
    "data-rail-navigation-frame": "",
    children: [
      a.jsx(
        "div",
        n._(
          r._(
            {
              ref: viewportRef,
              className: A_1.viewport,
              role: "group",
              "aria-label": o.Ay.t(
                "web_mainframe_section_whats_new",
                {},
                "最近上新",
              ),
            },
            layout === "hero" ? heroGestureHandlers : undefined,
          ),
          {
            onMouseEnter: layout === "hero" ? onHeroMouseEnter : undefined,
            onMouseLeave: layout === "hero" ? onHeroMouseLeave : undefined,
            onFocus: layout === "hero" ? onHeroFocus : undefined,
            onBlur: layout === "hero" ? onHeroBlur : undefined,
            children: a.jsx("div", {
              className: A_1.track,
              "data-whats-new-layout": layout,
              "data-hero-transition":
                layout === "hero" && animateHero ? "true" : undefined,
              "data-hero-transition-direction":
                layout === "hero" && animateHero
                  ? heroTransitionDirection
                  : undefined,
              "data-whats-new-short-list": N ? "true" : undefined,
              "data-whats-new-overflowing": A ? "true" : undefined,
              children: R.map((e, t) =>
                a.jsx(
                  "div",
                  {
                    className: A_1.cardSlot,
                    "data-whats-new-card": "",
                    "data-hero-outgoing":
                      layout === "hero" &&
                      animateHero &&
                      t === +(heroTransitionDirection === "previous")
                        ? "true"
                        : undefined,
                    "aria-hidden":
                      (layout === "hero" &&
                        !!animateHero &&
                        t === +(heroTransitionDirection === "previous")) ||
                      undefined,
                    children: renderCard(e),
                  },
                  e.key,
                ),
              ),
            }),
          },
        ),
      ),
      layout === "hero" && items.length > 1
        ? a.jsx("div", {
            className: A_1.heroIndicators,
            role: "group",
            "aria-label": "What’s new pages",
            children: x.map((e, t) =>
              a.jsx(
                "button",
                {
                  type: "button",
                  className: A_1.heroIndicator,
                  "data-active": t === w ? "true" : undefined,
                  "aria-current": t === w ? "true" : undefined,
                  "aria-label": `${t + 1} / `
                    .concat(x.length)
                    .concat(e.title ? ": ".concat(e.title) : ""),
                  onClick: onHeroSelect ? () => onHeroSelect(t) : undefined,
                },
                e.key,
              ),
            ),
          })
        : null,
      overlay,
    ],
  });
}
Object.defineProperty(exports, "Q", {
  enumerable: true,
  get: () => 5,
});
