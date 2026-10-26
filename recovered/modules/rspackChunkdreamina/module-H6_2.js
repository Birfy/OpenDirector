import i from "z8";
import a from "cC";
import o from "cO";
import n from "bT";
import _s from "xb";
import c from "OQ";
import d from "yw";
import u from "eR";
import v from "IRw";
import h from "SUg";
import { A } from "./module-HH_2.js";
function useM(e) {
  const { preview, moreAction } = e;
  const [s, setS] = n.useState();
  const [g, setG] = n.useState();
  const y = !!(preview.videoUrl && s === preview.videoUrl);
  const fRef = n.useRef(null);
  const [ref, k] = a.A(undefined, "width", [!!moreAction]);
  const { cover } = preview;
  const style = {
    "--more-action-width":
      k.width > 0 ? "".concat(k.width, "px") : "calc(100% - 8px)",
  };
  const I = preview.description
    ? i.jsx("div", {
        className: preview.kind === "showcase" ? A.introduction : A.description,
        children: preview.description,
      })
    : null;
  const fallbackContent = i.jsx(h.l, {
    title: preview.name,
  });
  n.useEffect(() => {
    var fRef_current = fRef.current;
    if (fRef_current && preview.videoUrl && !y) {
      var r = false;
      fRef_current.src = o.m(preview.videoUrl, null, {
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
        if (!r) {
          setS(preview.videoUrl);
        }
      });
      return () => {
        r = true;
        fRef_current.pause();
        fRef_current.removeAttribute("src");
        fRef_current.load();
      };
    }
  }, [preview.videoUrl, y]);
  return i.jsxs("section", {
    className: A.card,
    "aria-label": preview.name,
    children: [
      cover
        ? i.jsxs("div", {
            className: A.media,
            children: [
              cover.coverImageUrl || Object.keys(cover.coverUrlMap).length > 0
                ? i.jsx(c.sg, {
                    src: o.m(cover.coverImageUrl, null, {
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
                    width: v.BY,
                    height: v.E9,
                    alt: "",
                    lazy: false,
                    draggable: false,
                    crossOrigin: "anonymous",
                    errorPlaceHolder: i.jsx(
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
              preview.videoUrl && !y
                ? i.jsx(
                    "video",
                    {
                      ref: fRef,
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
      i.jsxs("div", {
        className: _s(A.content, {
          [A.textContent]: preview.kind === "text",
          [A.contentWithAction]: !!moreAction,
        }),
        children: [
          i.jsx("div", {
            className: _s(A.title, {
              [A.titleWithAction]: !!moreAction,
            }),
            children: preview.name,
          }),
          moreAction
            ? i.jsxs("div", {
                className: _s(A.overview, {
                  [A.overviewWithIntroduction]:
                    preview.kind === "showcase" && !!I,
                  [A.textOverview]: preview.kind === "text",
                }),
                style,
                children: [
                  I,
                  i.jsx("span", {
                    ref,
                    className: A.moreAction,
                    children: i.jsxs("button", {
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
                        i.jsx("span", {
                          className: A.moreLabel,
                          children: moreAction.label,
                        }),
                        i.jsx(d.Vjx, {
                          size: 14,
                          "aria-hidden": "true",
                        }),
                      ],
                    }),
                  }),
                ],
              })
            : I,
        ],
      }),
    ],
  });
}
export { useM as a };
