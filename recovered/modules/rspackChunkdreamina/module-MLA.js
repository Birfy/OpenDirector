import r from "oa";
import n from "bk";
import a from "z8";
import o from "bT";
import _s from "xb";
import c from "Ybg";
import d from "yzC";
import u from "kBm";
import "Vx";
import "xj";
import m from "Ix";
import p from "R8";
import h from "Qey";
import { Y3 } from "./module-sV_2.js";
import b from "aN";
import y from "Z1";
import _ from "BEW";
const g = {
  chat: {
    key: "web_mainframe_home_tab_chat",
    fallback: "AI Chat",
  },
  canvas: {
    key: "web_mainframe_home_tab_canvas",
    fallback: "Canvas",
  },
};
const f = o.memo(function (e) {
  const { value, canvasEnabled, onChange, interactionBoundaryRef, className } =
    e;
  const c = canvasEnabled
    ? ""
    : h.Ay.t(
        "web_mainframe_canvas_tab_no_teams_tip",
        {},
        "团队空间暂不支持使用画布",
      );
  const id = "create-mode-".concat(o.useId(), "-canvas-disabled-reason");
  return a.jsxs(a.Fragment, {
    children: [
      a.jsx("div", {
        ref: interactionBoundaryRef,
        className: _s("switch-nJ2v5z", className),
        role: "group",
        "data-main-frame-2026-onboarding-mode-switch": true,
        "aria-label": h.Ay.t("web_home_tool_dropdown_title", {}, "创作类型"),
        "aria-describedby": canvasEnabled ? undefined : id,
        children: Y3.map((e) => {
          var disabled = e === "canvas" && !canvasEnabled;
          var o = g[e];
          var children = a.jsx(p.A, {
            type: value === e ? "primary" : "secondary",
            shape: "round",
            "aria-pressed": value === e,
            "aria-describedby": disabled ? id : undefined,
            disabled,
            className: "option-NvCDWY",
            onClick: () => onChange(e),
            children: h.Ay.t(o.key, {}, o.fallback),
          });
          var l = a.jsx(
            "span",
            {
              className: "option-slot-S3fv34",
              role: "presentation",
              children,
            },
            e,
          );
          if (e === "chat") {
            return l;
          }
          return a.jsx(
            m.A,
            {
              content: c,
              disabled: canvasEnabled,
              position: "bottom",
              children: l,
            },
            e,
          );
        }),
      }),
      canvasEnabled
        ? null
        : a.jsx("span", {
            id,
            className: "screen-reader-only-i2BU8w",
            children: c,
          }),
    ],
  });
});
const x = {
  [u.D]: "true",
};
export var W = o.memo(function (e) {
  const {
    mode,
    canvasEnabled,
    onModeChange,
    modeSwitchInteractionBoundaryRef,
    chatContent,
    canvasContent,
    homeToolsHost,
    homeTools,
    whatsNew,
    recommendationFeed,
    title,
    titleAccentAnimationEnabled = true,
    csrReady = false,
    className,
  } = e;
  const [A, setA] = o.useState(mode === "canvas");
  const E = mode === "canvas" || A;
  const WRef = o.useRef(null);
  const { showBackToTop, handleScroll, scrollToTop } = c.$({
    scrollContainerRef: WRef,
  });
  o.useEffect(() => {
    if (mode === "canvas") {
      setA(true);
    }
  }, [mode]);
  return a.jsxs(d.P, {
    ref: WRef,
    threshold: 0,
    className: _s(y.A.page, className),
    onScroll: handleScroll,
    children: [
      a.jsxs(
        "div",
        n._(
          r._(
            {
              className: y.A.content,
            },
            csrReady ? x : {},
          ),
          {
            children: [
              a.jsx(_.r, {}),
              a.jsxs("header", {
                className: y.A.header,
                children: [
                  a.jsx(b.Y, {
                    mode,
                    title,
                    accentAnimationEnabled: titleAccentAnimationEnabled,
                  }),
                  a.jsx(f, {
                    value: mode,
                    canvasEnabled,
                    onChange: onModeChange,
                    interactionBoundaryRef: modeSwitchInteractionBoundaryRef,
                  }),
                ],
              }),
              a.jsxs("div", {
                className: y.A.modeStage,
                "data-create-mode-transition-host": true,
                children: [
                  a.jsx("section", {
                    className: y.A.modeContent,
                    hidden: mode !== "chat",
                    "aria-hidden": mode !== "chat",
                    "data-create-mode-panel": "chat",
                    children: chatContent,
                  }),
                  E
                    ? a.jsx("section", {
                        className: _s(y.A.modeContent, y.A.canvasModeContent),
                        hidden: mode !== "canvas",
                        "aria-hidden": mode !== "canvas",
                        "data-create-mode-panel": "canvas",
                        children: canvasContent,
                      })
                    : null,
                ],
              }),
              a.jsx("div", {
                className: y.A.homeToolsHost,
                children: homeToolsHost,
              }),
              homeTools
                ? a.jsx("div", {
                    className: y.A.homeHighlights,
                    children: a.jsxs("div", {
                      className: y.A.homeHighlightsLayout,
                      children: [
                        a.jsx("div", {
                          className: y.A.whatsNew,
                          children: whatsNew,
                        }),
                        a.jsx("div", {
                          className: y.A.homeTools,
                          children: homeTools,
                        }),
                      ],
                    }),
                  })
                : a.jsx("div", {
                    className: y.A.whatsNew,
                    children: whatsNew,
                  }),
              a.jsx("section", {
                className: y.A.recommendationFeed,
                children: recommendationFeed,
              }),
            ],
          },
        ),
      ),
      a.jsx(c.s, {
        visible: showBackToTop,
        onClick: scrollToTop,
      }),
    ],
  });
});
