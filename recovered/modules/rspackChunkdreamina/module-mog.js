import r from "oa";
import n from "bk";
import a from "z8";
import _o from "xb";
import l from "kBm";
import c from "wZB";
import d from "xz";
import u from "Z1";
function m(e) {
  const {
    variant,
    title,
    titleAccentAnimationEnabled = false,
    csrReady = false,
    className,
    topAction,
    background,
    generator,
    homeToolsHost,
    homeTools,
    whatsNew,
    recommendationFeed,
  } = e;
  const x = variant === "v3";
  return a.jsxs(a.Fragment, {
    children: [
      topAction,
      a.jsx(d.s, {
        className: _o(u.A.page, className),
        children: a.jsxs(
          "div",
          n._(
            r._(
              {
                className: _o(u.A.content, "content-vh4Vlk"),
                "data-create-content-version": variant,
              },
              csrReady
                ? {
                    [l.D]: "true",
                  }
                : {},
            ),
            {
              children: [
                a.jsxs("div", {
                  className: _o("hero-dT2q1M", {
                    "compact-wBETnL": x,
                  }),
                  children: [
                    background,
                    a.jsx("header", {
                      className: "header-zY7wb1",
                      children: a.jsx(c.v, {
                        scene: "home",
                        title,
                        accentAnimationEnabled: titleAccentAnimationEnabled,
                      }),
                    }),
                    a.jsx("div", {
                      className: u.A.modeStage,
                      "data-create-mode-transition-host": true,
                      children: a.jsx("section", {
                        className: "generator-wmWlqx",
                        "data-create-mode-panel": "chat",
                        children: generator,
                      }),
                    }),
                    !x && homeTools
                      ? a.jsx("div", {
                          className: u.A.homeToolsStrip,
                          children: homeTools,
                        })
                      : null,
                  ],
                }),
                a.jsx("div", {
                  className: u.A.homeToolsHost,
                  children: homeToolsHost,
                }),
                x
                  ? a.jsx("div", {
                      className: _o(
                        u.A.homeHighlights,
                        u.A.homeHighlightsTiles,
                        "highlights-_SHEIx",
                      ),
                      children: a.jsxs("div", {
                        className: _o(
                          u.A.homeHighlightsLayout,
                          "layout-PMZ5QQ",
                        ),
                        children: [
                          a.jsx("div", {
                            className: _o(u.A.whatsNew, "banner-TZAVRs"),
                            children: whatsNew,
                          }),
                          homeTools
                            ? a.jsx("div", {
                                className: u.A.homeTools,
                                children: homeTools,
                              })
                            : null,
                        ],
                      }),
                    })
                  : a.jsx("div", {
                      className: u.A.whatsNew,
                      children: whatsNew,
                    }),
                a.jsx("section", {
                  className: u.A.recommendationFeed,
                  children: recommendationFeed,
                }),
              ],
            },
          ),
        ),
      }),
    ],
  });
}
export { m as d };
