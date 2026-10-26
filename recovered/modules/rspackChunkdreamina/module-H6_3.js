import a from "z8";
import t from "cC";
import i from "cO";
import o from "bT";
import _r from "xb";
import c from "OQ";
import d from "yw";
import * as u from "./module-eR_4.js";
import * as m from "./module-IRw_3.js";
import * as p from "./module-SUg_3.js";
import { A } from "./module-HH_4.js";
function useH(e) {
  const { preview, moreAction } = e;
  const [r, setR] = o.useState();
  const [b, setB] = o.useState();
  const g = !!(preview.videoUrl && r === preview.videoUrl);
  const fRef = o.useRef(null);
  const [ref, w] = t.A(undefined, "width", [!!moreAction]);
  const { cover } = preview;
  const style = {
    "--more-action-width":
      w.width > 0 ? "".concat(w.width, "px") : "calc(100% - 8px)",
  };
  const y = preview.description
    ? a.jsx("div", {
        className: preview.kind === "showcase" ? A.introduction : A.description,
        children: preview.description,
      })
    : null;
  const fallbackContent = a.jsx(p.l, {
    title: preview.name,
  });
  o.useEffect(() => {
    var fRef_current = fRef.current;
    if (fRef_current && preview.videoUrl && !g) {
      var n = false;
      fRef_current.src = i.m(preview.videoUrl, null, {
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
      fRef_current.play().catch(() => {
        if (!n) {
          setR(preview.videoUrl);
        }
      });
      return () => {
        n = true;
        fRef_current.pause();
        fRef_current.removeAttribute("src");
        fRef_current.load();
      };
    }
  }, [preview.videoUrl, g]);
  return a.jsxs("section", {
    className: A.card,
    "aria-label": preview.name,
    children: [
      cover
        ? a.jsxs("div", {
            className: A.media,
            children: [
              cover.coverImageUrl || Object.keys(cover.coverUrlMap).length > 0
                ? a.jsx(c.sg, {
                    src: i.m(cover.coverImageUrl, null, {
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
                    errorPlaceHolder: a.jsx(
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
              preview.videoUrl && !g
                ? a.jsx(
                    "video",
                    {
                      ref: fRef,
                      className: _r(A.video, {
                        [A.videoPlaying]: b === preview.videoUrl,
                      }),
                      muted: true,
                      loop: true,
                      playsInline: true,
                      preload: "none",
                      onPlaying: () => setB(preview.videoUrl),
                      onError: () => setR(preview.videoUrl),
                    },
                    preview.videoUrl,
                  )
                : null,
            ],
          })
        : null,
      a.jsxs("div", {
        className: _r(A.content, {
          [A.textContent]: preview.kind === "text",
          [A.contentWithAction]: !!moreAction,
        }),
        children: [
          a.jsx("div", {
            className: _r(A.title, {
              [A.titleWithAction]: !!moreAction,
            }),
            children: preview.name,
          }),
          moreAction
            ? a.jsxs("div", {
                className: _r(A.overview, {
                  [A.overviewWithIntroduction]:
                    preview.kind === "showcase" && !!y,
                  [A.textOverview]: preview.kind === "text",
                }),
                style,
                children: [
                  y,
                  a.jsx("span", {
                    ref,
                    className: A.moreAction,
                    children: a.jsxs("button", {
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
                        a.jsx("span", {
                          className: A.moreLabel,
                          children: moreAction.label,
                        }),
                        a.jsx(d.Vjx, {
                          size: 14,
                          "aria-hidden": "true",
                        }),
                      ],
                    }),
                  }),
                ],
              })
            : y,
        ],
      }),
    ],
  });
}
export { useH as a };
