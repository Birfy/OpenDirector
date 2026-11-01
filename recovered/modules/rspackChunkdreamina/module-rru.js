import n from "z8";
import _t from "xb";
import r from "cO";
import s from "bT";
import l from "yw";
import "yuc";
import c from "tR";
import { A } from "./module-H5c.js";
import "Vx";
import "uw5";
import v from "Ix";
import x from "VAR";
import * as g from "./module-F5.js";
import { Tw } from "./module-WH1.js";
const m = {
  hot: {
    text: "Hot",
    className: A.tagHot,
  },
  new: {
    text: "New",
    className: A.tagNew,
  },
};
function p(e) {
  const { tag } = e;
  const a = tag ? m[tag] : undefined;
  if (a) {
    return n.jsx(c.A, {
      className: _t(A.tag, a.className),
      size: "small",
      bordered: false,
      "aria-hidden": "true",
      children: a.text,
    });
  }
  return null;
}
const u = {
  23610263042828: "short-drama",
  23596208694028: "canvas",
};
function useH(e) {
  let i;
  const { item, busy = false, onItemClick } = e;
  const c = (i = item.coverUrl) == null ? undefined : i.trim();
  const [m, setM] = s.useState();
  const v = !!(c && m !== c);
  const x = busy || !!item.disabled;
  return n.jsxs("button", {
    type: "button",
    className: A.card,
    "data-card-background": u[item.id],
    "aria-label": item.title,
    disabled: x,
    onClick: onItemClick && !x ? () => onItemClick(item.id) : undefined,
    children: [
      n.jsx("span", {
        className: A.cover,
        "data-cover-empty": v ? undefined : "true",
        children: v
          ? n.jsx("img", {
              src: r.m(c, null, {
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
                  "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTBKb1dqSldla3d5$*5s-$-wWXdXbE01-W1Je%1-Z*lNalZzWW01%2$rd3lhSFpp$jFWMFpF-z$kb%pJ$FhSak1sWnFaRWRzZ*1KcE9XOWlNakZz$EZo%2RtSXlkM1JaTWtaN$drTTFNR016-%doamJX%XhZM2M5%FE9PQ",
              }),
              crossOrigin: "anonymous",
              alt: "",
              width: 139,
              height: 78,
              draggable: false,
              loading: "lazy",
              decoding: "async",
              className: A.coverImage,
              onError: () => setM(c),
            })
          : null,
      }),
      n.jsxs("span", {
        className: A.copy,
        children: [
          n.jsxs("span", {
            className: A.titleRow,
            children: [
              n.jsx("span", {
                className: A.itemTitle,
                children: item.title,
              }),
              n.jsx(p, {
                tag: item.tag,
              }),
            ],
          }),
          item.description
            ? n.jsxs("span", {
                className: A.descriptionRow,
                children: [
                  n.jsx("span", {
                    className: A.description,
                    children: item.description,
                  }),
                  n.jsx(l.Vjx, {
                    size: 10,
                    className: A.descriptionIcon,
                    "aria-hidden": "true",
                  }),
                ],
              })
            : null,
        ],
      }),
    ],
  });
}
const b = {
  smart_edit: l.LhX,
  super_resolution: l.QBz,
  video_partial_reshoot: l.xHZ,
};
function f(e) {
  const { action, size = 24 } = e;
  if ((action == null ? undefined : action.type) === "tool") {
    const t = b[action.toolKey];
    if (t) {
      return n.jsx(t, {
        size,
      });
    }
  }
  if (
    (action == null ? undefined : action.type) === "generation" ||
    (action == null ? undefined : action.type) === "open_generator"
  ) {
    if (action.generateType === "video") {
      return n.jsx(l._MP, {
        size,
      });
    }
    return n.jsx(l.iHo, {
      size,
    });
  }
  if (
    (action == null ? undefined : action.type) === "canvas_tool" ||
    (action == null ? undefined : action.type) === "canvas_template"
  ) {
    return n.jsx(l.Ej4, {
      size,
    });
  }
  return n.jsx(l.aIh, {
    size,
  });
}
function useW(e) {
  const { item } = e;
  const [a, setA] = s.useState(false);
  const [o, setO] = s.useState();
  let c = n.jsx("div", {
    className: A.previewMedia,
    "aria-hidden": "true",
  });
  if (item.previewVideoUrl && !a) {
    c = n.jsx("video", {
      crossOrigin: "anonymous",
      src: r.m(item.previewVideoUrl, null, {
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
          "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTBKb1dqSldla3d5$*5s-$-wWXdXbE01-W1Je%1-Z*lNalZzWW01%2$rd3lhSFpp$jFWMFpF-z$kb%pJ$FhSak1sWnFaRWRzZ*1KcE9XOWlNakZz$EZo%2RtSXlkM1Jq%0$wc1pHMXNiR1I1TlRCak0ya*9ZMjFrT$dOM1B%MD0",
      }),
      poster: item.coverUrl,
      muted: true,
      autoPlay: true,
      loop: true,
      playsInline: true,
      className: A.previewMedia,
      onError: () => setA(true),
    });
  } else if (item.coverUrl && o !== item.coverUrl) {
    c = n.jsx("img", {
      crossOrigin: "anonymous",
      src: r.m(item.coverUrl, null, {
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
          "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTBKb1dqSldla3d5$*5s-$-wWXdXbE01-W1Je%1-Z*lNalZzWW01%2$rd3lhSFpp$jFWMFpF-z$kb%pJ$FhSak1sWnFaRWRzZ*1KcE9XOWlNakZz$EZo%2RtSXlkM1Jq%0$wc1pHMXNiR1I1TlRCak0ya*9ZMjFrT$dOM1B%MD0",
      }),
      alt: "",
      className: A.previewMedia,
      decoding: "async",
      onError: () => setO(item.coverUrl),
    });
  }
  return n.jsxs("div", {
    className: A.preview,
    children: [
      c,
      n.jsxs("div", {
        className: A.previewCopy,
        children: [
          n.jsx("strong", {
            children: item.title,
          }),
          item.previewDescription
            ? n.jsx("p", {
                children: item.previewDescription,
              })
            : null,
        ],
      }),
    ],
  });
}
function useK(e) {
  let i;
  const { item, layout, busy, onItemClick, onItemPreviewShow } = e;
  const [m, setM] = s.useState();
  const uRef = s.useRef(null);
  const [h, setH] = s.useState([]);
  const url = [item.tileCoverUrl, item.coverUrl].find(
    (e) => e && !h.includes(e),
  );
  const y =
    item.iconUrl && !h.includes(item.iconUrl) ? item.iconUrl : undefined;
  const N = layout === "icons" ? 20 : 18;
  const disabled = busy || !!item.disabled;
  const RRef = s.useRef(false);
  const jRef = s.useRef(false);
  const TRef = s.useRef(false);
  const C =
    layout === "icons" &&
    !!(item.coverUrl || item.previewDescription || item.previewVideoUrl);
  s.useEffect(() => {
    if (m !== "preview" || busy || !C) {
      TRef.current = false;
      return;
    }
    if (jRef.current && !TRef.current) {
      TRef.current = true;
      if (onItemPreviewShow != null) {
        onItemPreviewShow(item.id);
      }
    }
  }, [m, busy, C, item.id, onItemPreviewShow]);
  s.useEffect(() => {
    if (m && !busy) {
      var e = (e) => {
        if (e.key === "Escape") {
          setM(undefined);
        }
      };
      document.addEventListener("keydown", e);
      return () => document.removeEventListener("keydown", e);
    }
  }, [m, busy]);
  const children = n.jsxs("button", {
    type: "button",
    className: layout === "icons" ? A.iconCard : A.tileCard,
    disabled,
    "aria-label": item.title,
    onFocus: () => {
      jRef.current = false;
      var uRef_current = uRef.current;
      setM(
        uRef_current && uRef_current.scrollWidth > uRef_current.clientWidth
          ? "title"
          : "preview",
      );
    },
    onBlur: () => setM(undefined),
    onClick: () => {
      setM(undefined);
      if (onItemClick != null) {
        onItemClick(item.id);
      }
    },
    onKeyDown: (e) => {
      if (e.key === "Escape") {
        setM(undefined);
      }
    },
    children: [
      layout === "tiles" && url
        ? n.jsx("img", {
            crossOrigin: "anonymous",
            src: r.m(url, null, {
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
                "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTBKb1dqSldla3d5$*5s-$-wWXdXbE01-W1Je%1-Z*lNalZzWW01%2$rd3lhSFpp$jFWMFpF-z$kb%pJ$FhSak1sWnFaRWRzZ*1KcE9XOWlNakZz$EZo%2RtSXlkM1Jq%0$wc1l6Sldk$1JI%mpCaFZ6bDF%RmRP-%dOdF$-$mtTRTQw$1ZoS2Jt%ll%$DA9",
            }),
            alt: "",
            className: A.tileCover,
            loading: "lazy",
            decoding: "async",
            onError: () => setH((e) => [...e, url]),
          })
        : null,
      layout === "tiles"
        ? n.jsx(g.f, {
            className: A.tileCover,
            source: {
              type: "image",
              url,
            },
            height: "70%",
            blur: 12,
            opacity: 0.2,
          })
        : null,
      n.jsxs("span", {
        className: A.presentationCopy,
        children: [
          n.jsx("span", {
            className: A.toolIcon,
            "aria-hidden": "true",
            children: y
              ? n.jsx("img", {
                  crossOrigin: "anonymous",
                  src: r.m(y, null, {
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
                      "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTBKb1dqSldla3d5$*5s-$-wWXdXbE01-W1Je%1-Z*lNalZzWW01%2$rd3lhSFpp$jFWMFpF-z$kb%pJ$FhSak1sWnFaRWRzZ*1KcE9XOWlNakZz$EZo%2RtSXlkM1Jq%0$wc1l6Sldk$1JI%mpCaFZ6bDF%RmRP-%dOdF$-$mtTRTQw$1ZoS2Jt%ll%$DA9",
                  }),
                  alt: "",
                  width: N,
                  height: N,
                  style: {
                    objectFit: "contain",
                  },
                  loading: "lazy",
                  decoding: "async",
                  onError: () => setH((e) => [...e, y]),
                })
              : (i = item.icon) != null
                ? i
                : n.jsx(f, {
                    action: item.action,
                    size: N,
                  }),
          }),
          n.jsx(v.A, {
            content: item.title,
            checkOverflow: true,
            escToClose: true,
            popupVisible: m === "title" && !busy,
            onVisibleChange: (e) => {
              setM((i) => {
                if (e) {
                  return "title";
                }
                if (i === "title") {
                  return undefined;
                }
                return i;
              });
            },
            children: n.jsx("span", {
              ref: uRef,
              className: A.presentationTitle,
              children: item.title,
            }),
          }),
          layout === "tiles" && item.description
            ? n.jsx("span", {
                className: A.tileDescription,
                children: item.description,
              })
            : null,
        ],
      }),
    ],
  });
  if (
    layout !== "tiles" &&
    (item.coverUrl || item.previewDescription || item.previewVideoUrl)
  ) {
    return n.jsx(x.A, {
      className: A.previewPopup,
      style: {
        width: "auto",
        maxWidth: "none",
      },
      showArrow: false,
      content:
        m === "preview"
          ? n.jsx(useW, {
              item,
            })
          : null,
      trigger: "hover",
      position: "bottom",
      popupVisible: m === "preview" && !busy,
      popupHoverStay: true,
      onVisibleChange: (e) => {
        if (m !== "title") {
          if (e && m !== "preview") {
            jRef.current = RRef.current;
          }
          setM(e ? "preview" : undefined);
        }
      },
      triggerProps: {
        mouseEnterDelay: 200,
        mouseLeaveDelay: 100,
        escToClose: true,
        popupAlign: {
          bottom: 8,
        },
      },
      children: n.jsx("span", {
        className: A.previewTrigger,
        onMouseEnter: () => {
          RRef.current = true;
        },
        onMouseLeave: () => {
          RRef.current = false;
        },
        children,
      }),
    });
  }
  return children;
}
const N = ["one", "two", "three", "four"];
export function o(e) {
  const {
    items,
    layout = "legacy",
    ariaLabel = "创作工具",
    loading = false,
    busy = false,
    onItemClick,
    onItemPreviewShow,
    viewportRef,
    navigation,
  } = e;
  if (loading || Tw(items)) {
    return n.jsx("section", {
      className: _t(A.section, {
        [A.iconSection]: layout === "icons",
        [A.tileSection]: layout === "tiles",
      }),
      "aria-label": ariaLabel,
      children: n.jsxs("div", {
        className: A.scrollFrame,
        children: [
          n.jsx("div", {
            ref: viewportRef,
            className: A.viewport,
            children: n.jsx("div", {
              className: A.track,
              role: "list",
              children: loading
                ? N.map((e) =>
                    n.jsx(
                      "span",
                      {
                        className: A.skeletonCard,
                        "aria-hidden": "true",
                        children: n.jsx("span", {
                          className: A.skeletonCover,
                        }),
                      },
                      e,
                    ),
                  )
                : items.map((item) =>
                    n.jsx(
                      "div",
                      {
                        role: "listitem",
                        "data-home-tool-card": "",
                        children:
                          layout === "legacy"
                            ? n.jsx(useH, {
                                item,
                                busy,
                                onItemClick,
                              })
                            : n.jsx(useK, {
                                item,
                                layout,
                                busy,
                                onItemClick,
                                onItemPreviewShow,
                              }),
                      },
                      item.id,
                    ),
                  ),
            }),
          }),
          navigation,
        ],
      }),
    });
  }
  return null;
}
