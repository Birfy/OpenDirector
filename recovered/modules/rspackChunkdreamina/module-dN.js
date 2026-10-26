import n from "z8";
import a from "Qey";
import o from "bT";
import _i from "xb";
import { A } from "./module-FT8.js";
export var W = o.memo(function (e) {
  const {
    active,
    recentProjects,
    renderGenerator,
    recommendations,
    recommendationsInteractionBoundaryRef,
  } = e;
  return n.jsxs("div", {
    className: A.area,
    children: [
      n.jsx("div", {
        className: A.recentProjectsMotion,
        "data-create-mode-auxiliary": "canvas-projects",
        children: recentProjects,
      }),
      renderGenerator
        ? n.jsxs(n.Fragment, {
            children: [
              n.jsx("div", {
                className: A.transitionMarker,
                "data-create-mode-generator": active ? "active" : undefined,
                children: renderGenerator(
                  _i(A.generator, {
                    [A.transitionTarget]: active,
                  }),
                ),
              }),
              recommendations
                ? n.jsx("div", {
                    ref: recommendationsInteractionBoundaryRef,
                    className: A.recommendations,
                    "aria-label": [
                      a.Ay.t("web_home_nav_bar_canvas", {}, "画布"),
                      a.Ay.t(
                        "octo_director_stage_video_export_recommended",
                        {},
                        "推荐",
                      ),
                    ].join(" · "),
                    "data-create-mode-auxiliary": "recommendations",
                    children: recommendations,
                  })
                : null,
            ],
          })
        : null,
    ],
  });
});
