import n from "oa";
import t from "bk";
import o from "z8";
import r from "Qey";
import s from "bT";
import _l from "xb";
export var Q = s.memo(function (e) {
  const {
    active,
    renderGenerator,
    recommendations,
    recommendationsVisible = true,
    className,
  } = e;
  return o.jsxs("div", {
    className: _l("area-k41Uc9", className),
    "data-create-chat-area": true,
    children: [
      o.jsx("div", {
        className: "transition-marker-yVT4wI",
        "data-create-mode-generator": active ? "active" : undefined,
        children: renderGenerator(
          _l("generator-qK5MP8", {
            "transition-target-s2WZRQ": active,
          }),
        ),
      }),
      recommendations
        ? o.jsx(
            "div",
            t._(
              n._(
                {
                  className: _l("recommendations-KwhpUY", {
                    "recommendations-hidden-FX84oV": !recommendationsVisible,
                  }),
                  "aria-label": [
                    r.Ay.t("web_canva_open_chat", {}, "打开对话"),
                    r.Ay.t(
                      "octo_director_stage_video_export_recommended",
                      {},
                      "推荐",
                    ),
                  ].join(" · "),
                  "aria-hidden": !recommendationsVisible,
                },
                recommendationsVisible
                  ? {}
                  : {
                      inert: "",
                    },
              ),
              {
                "data-create-mode-auxiliary": "recommendations",
                children: o.jsx("div", {
                  children: o.jsx("div", {
                    children: recommendations,
                  }),
                }),
              },
            ),
          )
        : null,
    ],
  });
});
