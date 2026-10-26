import n from "z8";
import _t from "xb";
import r from "y3";
const s = "card-mlGZmB";
export var H = (e) => {
  var {
    className,
    count,
    isShowCarousel,
    isNarrowSpacing,
    cardClassName,
    variant = "default",
  } = e;
  if (variant === "inspiration") {
    return n.jsx("div", {
      className: _t("inspiration-waterfall-_wWPU9", className),
      "data-inspiration-waterfall-skeleton": true,
      "aria-hidden": "true",
      children: n.jsx("div", {
        className: "inspiration-columns-xGJeXv",
        children: Array(count)
          .fill(0)
          .map((e, i) =>
            n.jsx(
              r.Q,
              {
                className: _t("inspiration-card-r3TAUY", cardClassName),
              },
              i,
            ),
          ),
      }),
    });
  }
  return n.jsxs("div", {
    id: "ssr-waterfall-skeleton",
    className: _t(
      isNarrowSpacing
        ? "narrow-spacing-waterfall-gx0hNI"
        : "wide-spacing-waterfall-cm2rL4",
      className,
      cardClassName,
    ),
    children: [
      isShowCarousel
        ? n.jsxs("div", {
            className: "carousel-row-rRmQN6",
            children: [
              n.jsx(r.Q, {
                className: "carousel-card-_Ssicg",
                children: n.jsx("div", {
                  className: "inner-IgdTDW",
                }),
              }),
              [, , , ,].fill(0).map((e, i) =>
                n.jsx(
                  r.Q,
                  {
                    className: _t(s, cardClassName),
                  },
                  i,
                ),
              ),
            ],
          })
        : n.jsx(n.Fragment, {}),
      n.jsx("div", {
        className: "normal-row-LGNrBB",
        children: Array(count)
          .fill(0)
          .map((e, i) =>
            n.jsx(
              r.Q,
              {
                className: _t(s, cardClassName),
              },
              i,
            ),
          ),
      }),
    ],
  });
};
