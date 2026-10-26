import r from "z8";
import n from "cC";
import a from "cO";
import o from "bT";
import _s from "xb";
import * as c from "./module-OQ.js";
import d from "yw";
import * as u from "./module-eR.js";
import * as m from "./module-IRw.js";
import * as p from "./module-SUg.js";
import { A } from "./module-HH.js";
function useV(e) {
  const { preview, moreAction } = e;
  const [s, setS] = o.useState();
  const [g, setG] = o.useState();
  const b = !!(preview.videoUrl && s === preview.videoUrl);
  const yRef = o.useRef(null);
  const [ref, x] = n.A(undefined, "width", [!!moreAction]);
  const { cover } = preview;
  const style = {
    "--more-action-width":
      x.width > 0 ? "".concat(x.width, "px") : "calc(100% - 8px)",
  };
  const k = preview.description
    ? r.jsx("div", {
        className: preview.kind === "showcase" ? A.introduction : A.description,
        children: preview.description,
      })
    : null;
  const fallbackContent = r.jsx(p.l, {
    title: preview.name,
  });
  o.useEffect(() => {
    var yRef_current = yRef.current;
    if (yRef_current && preview.videoUrl && !b) {
      var i = false;
      yRef_current.src = a.m(preview.videoUrl, null, {
        logType: "js.href/src",
        reportOnly: "false",
        blackConfig: "{}",
        configMode: "merge",
        isCloseSSRReport: true,
        bid: "cc_dreamina",
        region: "cn",
        urlLimit: "-1",
        htmlLimit: "-1",
        isSaveValidUrl: false,
        isRuntimeLog: false,
        isDOMParser: false,
        escapeRule: "escape-report",
        reportUrl:
          "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
        htmlparserOptions: "{}",
        scmBranch: "-",
        scmName: "-",
        scmVersion: "-",
        webpackPluginVersion: "3.6.0",
        filename:
          "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1ZW1*SFJub*FWM%-w$1c1$2$tRlhO$3hqTTAxMll6SjBjR0pIZDNaWk1qbDBZM*M1ZFZwWE5%Qmpl$*w2W$RKc2MySkRNW*Rq-lZZe$lWZFdNMHd6$*5KaF-zaHp%RmhDZ$ZwW$duQmFXR04w$1RKR2$WcERO$EJqTTJob1kyMWtN$04z%FQwPQ",
      });
      yRef_current.play().catch(() => {
        if (!i) {
          setS(preview.videoUrl);
        }
      });
      return () => {
        i = true;
        yRef_current.pause();
        yRef_current.removeAttribute("src");
        yRef_current.load();
      };
    }
  }, [preview.videoUrl, b]);
  return r.jsxs("section", {
    className: A.card,
    "aria-label": preview.name,
    children: [
      cover
        ? r.jsxs("div", {
            className: A.media,
            children: [
              cover.coverImageUrl || Object.keys(cover.coverUrlMap).length > 0
                ? r.jsx(c.sg, {
                    src: a.m(cover.coverImageUrl, null, {
                      logType: "js.href/src",
                      reportOnly: "false",
                      blackConfig: "{}",
                      configMode: "merge",
                      isCloseSSRReport: true,
                      bid: "cc_dreamina",
                      region: "cn",
                      urlLimit: "-1",
                      htmlLimit: "-1",
                      isSaveValidUrl: false,
                      isRuntimeLog: false,
                      isDOMParser: false,
                      escapeRule: "escape-report",
                      reportUrl:
                        "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
                      htmlparserOptions: "{}",
                      scmBranch: "-",
                      scmName: "-",
                      scmVersion: "-",
                      webpackPluginVersion: "3.6.0",
                      filename:
                        "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1ZW1*SFJub*FWM%-w$1c1$2$tRlhO$3hqTTAxMll6SjBjR0pIZDNaWk1qbDBZM*M1ZFZwWE5%Qmpl$*w2W$RKc2MySkRNW*Rq-lZZe$lWZFdNMHd6$*5KaF-zaHp%RmhDZ$ZwW$duQmFXR04w$1RKR2$WcERO$EJqTTJob1kyMWtN$04z%FQwPQ",
                    }),
                    resolutionUrlMap: cover.coverUrlMap,
                    sizePickMode: "legacy",
                    enableUseSize: false,
                    width: m.BY,
                    height: m.E9,
                    alt: "",
                    lazy: false,
                    draggable: false,
                    crossOrigin: "anonymous",
                    errorPlaceHolder: r.jsx(
                      u.q,
                      {
                        fallbackUrls: cover.imageErrorFallbackUrls,
                        fallbackContent,
                        alt: "",
                        draggable: false,
                        crossOrigin: "anonymous",
                      },
                      cover.coverImageUrl,
                    ),
                  })
                : fallbackContent,
              preview.videoUrl && !b
                ? r.jsx(
                    "video",
                    {
                      ref: yRef,
                      className: _s(A.video, {
                        [A.videoPlaying]: g === preview.videoUrl,
                      }),
                      muted: true,
                      loop: true,
                      playsInline: true,
                      preload: "none",
                      onPlaying: () => setG(preview.videoUrl),
                      onError: () => setS(preview.videoUrl),
                    },
                    preview.videoUrl,
                  )
                : null,
            ],
          })
        : null,
      r.jsxs("div", {
        className: _s(A.content, {
          [A.textContent]: preview.kind === "text",
          [A.contentWithAction]: !!moreAction,
        }),
        children: [
          r.jsx("div", {
            className: _s(A.title, {
              [A.titleWithAction]: !!moreAction,
            }),
            children: preview.name,
          }),
          moreAction
            ? r.jsxs("div", {
                className: _s(A.overview, {
                  [A.overviewWithIntroduction]:
                    preview.kind === "showcase" && !!k,
                  [A.textOverview]: preview.kind === "text",
                }),
                style,
                children: [
                  k,
                  r.jsx("span", {
                    ref,
                    className: A.moreAction,
                    children: r.jsxs("button", {
                      type: "button",
                      className: A.moreButton,
                      onPointerDown: (e) => e.stopPropagation(),
                      onMouseDown: (e) => e.stopPropagation(),
                      onKeyDown: (e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.stopPropagation();
                        }
                      },
                      onKeyUp: (e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.stopPropagation();
                        }
                      },
                      onClick: (e) => {
                        e.stopPropagation();
                        moreAction.onClick();
                      },
                      children: [
                        r.jsx("span", {
                          className: A.moreLabel,
                          children: moreAction.label,
                        }),
                        r.jsx(d.Vjx, {
                          size: 14,
                          "aria-hidden": "true",
                        }),
                      ],
                    }),
                  }),
                ],
              })
            : k,
        ],
      }),
    ],
  });
}
export { useV as a };
