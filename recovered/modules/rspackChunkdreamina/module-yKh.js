import n from "oa";
import t from "bk";
import o from "qa";
import r from "z8";
import "Vx";
import s from "Ix";
import l from "zS";
import c from "cO";
import d from "pr";
import m from "bT";
import _p from "xb";
import h from "Qey";
import v from "yw";
import x from "OQ";
import g from "hQb";
import b from "cn";
import * as f from "./module-Vv.js";
import { D as D_1 } from "./module-iZ.js";
import k from "TtV";
import { c as c_1 } from "./module-zip.js";
import N from "ZkF";
import W from "cH2";
import R from "LaG";
import j from "Gp8";
import * as T from "./module-ZcP.js";
import { A as A_1 } from "./module-xha.js";
var M = m.memo(function (e) {
  let i;
  let a;
  const {
    data,
    relatedAction,
    workflowAction,
    operationMenu,
    mediaMode = "interactive",
    appearance = "default",
    coverCompletedMark,
    hoverPlayDelay = 300,
    imageLazyTime,
    fetchPriority,
    onOpen,
    onAuthorClick,
    onAuthorHover,
    onExpose,
    onHoverEnd,
    onVideoPlayEnd,
    className,
  } = e;
  const I = o._(e, [
    "data",
    "relatedAction",
    "workflowAction",
    "operationMenu",
    "mediaMode",
    "appearance",
    "coverCompletedMark",
    "hoverPlayDelay",
    "imageLazyTime",
    "fetchPriority",
    "onOpen",
    "onAuthorClick",
    "onAuthorHover",
    "onExpose",
    "onHoverEnd",
    "onVideoPlayEnd",
    "className",
  ]);
  const { badge, coverUrl, coverUrlMap, previewUrl, title, author } = data;
  const q = mediaMode === "static";
  const Y = c_1(coverCompletedMark != null ? coverCompletedMark : {});
  const ee = N.a();
  const id = m.useId();
  const { start, stop } = k.U();
  const { start: start_1, stop: stop_1 } = k.U();
  const { start: start_2, stop: stop_2 } = k.U();
  const {
    coverRef,
    videoRef,
    handleVideoEnded,
    handleMouseEnter,
    handleMouseLeave,
  } = W.W({
    hideClassName: A_1.coverHidden,
    delay: hoverPlayDelay,
    onStartPlay: start_1,
  });
  const ref = l.A((e) => {
    coverRef.current = e;
    Y(e);
  });
  const onMouseEnter = l.A(() => {
    start();
    handleMouseEnter();
  });
  const onMouseLeave = l.A(() => {
    handleMouseLeave();
    stop((e) => {
      if (onHoverEnd == null) {
        return undefined;
      }
      return onHoverEnd(data, e);
    });
    stop_1((e) => {
      if (onVideoPlayEnd == null) {
        return undefined;
      }
      return onVideoPlayEnd(data, e);
    });
  });
  const ex = l.A(() => {
    if (onOpen == null) {
      return undefined;
    }
    return onOpen(data);
  });
  const eg = l.A((e) => {
    if (e) {
      start_2();
      if (onExpose != null) {
        onExpose(data, true, 0);
      }
      return;
    }
    stop_2((e) => {
      if (onExpose == null) {
        return undefined;
      }
      return onExpose(data, false, e);
    });
  });
  const eb = R.oJ(false, eg);
  const ef = l.A((e) => {
    e.stopPropagation();
    if (onAuthorClick != null) {
      onAuthorClick(data);
    }
  });
  const ew = l.A((e) => {
    e.stopPropagation();
    var i;
    var a = relatedAction != null ? relatedAction : workflowAction;
    if (
      !(
        (a == null ? undefined : a.disabled) ||
        a == null ||
        (i = a.onClick) == null
      )
    ) {
      i.call(a);
    }
  });
  const ek = l.A((e) => {
    e.stopPropagation();
  });
  const children = m.useMemo(() => j.r(data.durationMs), [data.durationMs]);
  const eN =
    relatedAction != null
      ? relatedAction
      : workflowAction
        ? {
            label:
              (i = workflowAction.label) != null
                ? i
                : h.Ay.t(
                    "web_mainframe_explore_view_workflow",
                    {},
                    "查看关联的画布",
                  ),
            ariaLabel: workflowAction.ariaLabel,
            disabled: workflowAction.disabled,
            onClick: workflowAction.onClick,
          }
        : undefined;
  const eW =
    (a = operationMenu == null ? undefined : operationMenu.ariaLabel) != null
      ? a
      : h.Ay.t("web_my_feed_more_options", {}, "更多");
  return r.jsxs(
    "div",
    t._(
      n._(
        {
          ref: onExpose ? eb : undefined,
        },
        I,
      ),
      {
        className: _p(
          A_1.card,
          {
            [A_1.interactive]: onOpen,
            [A_1.film]: appearance === "film",
            [A_1.hasRelatedAction]: eN,
          },
          className,
        ),
        onClick: onOpen ? ex : undefined,
        onMouseEnter,
        onMouseLeave,
        children: [
          r.jsxs("div", {
            className: A_1.media,
            children: [
              q
                ? null
                : r.jsx(f.k, {
                    className: A_1.videoWrapper,
                    children: r.jsx("video", {
                      ref: videoRef,
                      className: A_1.video,
                      crossOrigin: "anonymous",
                      src: c.m(previewUrl, null, {
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
                          "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1ZW1*SFJub*FWM%-w$1c1$2$tRlhO$3hqTTAxMll6Sm9kb%51$$hSa2JXeHJXb*M0Z*xre%9-%mpSemwx$2xjM%1HTj$PWHBo%npsN$pFTXhNb%Z-$W14aW$%RnFX$mhL-TB3elRtOWlNM*93$EZo-WN*cEhWblpN$jA1b1kyM$Jk$1JJ$*pSWldFcH$aRmhO%FE9PQ",
                      }),
                      preload: "none",
                      muted: true,
                      playsInline: true,
                      onEnded: handleVideoEnded,
                    }),
                  }),
              q
                ? r.jsx("div", {
                    className: A_1.coverLayout,
                    children: r.jsx(
                      "img",
                      t._(n._({}, ee), {
                        ref: Y,
                        src: c.m(coverUrl, null, {
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
                            "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1ZW1*SFJub*FWM%-w$1c1$2$tRlhO$3hqTTAxMll6Sm9kb%51$$hSa2JXeHJXb*M0Z*xre%9-%mpSemwx$2xjM%1HTj$PWHBo%npsN$pFTXhNb%Z-$W14aW$%RnFX$mhL-TB3elRtOWlNM*93$EZo-WN*cEhWblpN$jA1b1kyM$Jk$1JJ$*pSWldFcH$aRmhO%FE9PQ",
                        }),
                        className: A_1.cover,
                        width: 16,
                        height: 9,
                        loading: "lazy",
                        decoding: "async",
                        fetchpriority: fetchPriority,
                        crossOrigin: "anonymous",
                        draggable: false,
                        alt: "",
                      }),
                    ),
                  })
                : r.jsx(
                    x.sg,
                    t._(n._({}, ee), {
                      elementTiming: ee.elementtiming,
                      ref,
                      cacheKey: data.id,
                      src: c.m(coverUrl, null, {
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
                          "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1ZW1*SFJub*FWM%-w$1c1$2$tRlhO$3hqTTAxMll6Sm9kb%51$$hSa2JXeHJXb*M0Z*xre%9-%mpSemwx$2xjM%1HTj$PWHBo%npsN$pFTXhNb%Z-$W14aW$%RnFX$mhL-TB3elRtOWlNM*93$EZo-WN*cEhWblpN$jA1b1kyM$Jk$1JJ$*pSWldFcH$aRmhO%FE9PQ",
                      }),
                      resolutionUrlMap: coverUrlMap,
                      sizePickMode: "legacy",
                      crossOrigin: "anonymous",
                      lazy: true,
                      imageLazyTime,
                      fetchPriority,
                      layoutClassName: A_1.coverLayout,
                      className: A_1.cover,
                      placeholder: r.jsx(D_1, {}),
                      "data-apm-action": "short-video-card",
                      draggable: false,
                      alt: "",
                    }),
                  ),
              r.jsx("div", {
                className: A_1.hoverShade,
                "aria-hidden": "true",
                children: r.jsx("span", {
                  className: A_1.duration,
                  children,
                }),
              }),
              eN
                ? r.jsx("button", {
                    type: "button",
                    className: A_1.relatedButton,
                    "aria-label": eN.ariaLabel,
                    disabled: eN.disabled,
                    onClick: ew,
                    children: r.jsx("span", {
                      children: eN.label,
                    }),
                  })
                : null,
              badge
                ? r.jsxs("div", {
                    className: A_1.badge,
                    "data-tone": badge.tone,
                    children: [
                      badge.icon,
                      r.jsx("span", {
                        children: badge.label,
                      }),
                    ],
                  })
                : null,
            ],
          }),
          r.jsxs("div", {
            className: A_1.info,
            children: [
              r.jsxs("div", {
                className: A_1.infoMain,
                children: [
                  r.jsx(s.A, {
                    content: title,
                    checkOverflow: true,
                    position: "top",
                    children: r.jsx("div", {
                      role: onOpen ? "button" : undefined,
                      tabIndex: onOpen ? 0 : undefined,
                      onKeyDown: d.q,
                      id,
                      className: A_1.title,
                      children: title,
                    }),
                  }),
                  r.jsx("div", {
                    className: A_1.metaRow,
                    children: onAuthorClick
                      ? r.jsxs("button", {
                          type: "button",
                          className: A_1.author,
                          "aria-label": author.name,
                          onClick: ef,
                          onMouseEnter: () => {
                            if (onAuthorHover == null) {
                              return undefined;
                            }
                            return onAuthorHover(data);
                          },
                          children: [
                            r.jsx(b.e, {
                              src: c.m(author.avatarUrl || g, null, {
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
                                  "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1ZW1*SFJub*FWM%-w$1c1$2$tRlhO$3hqTTAxMll6Sm9kb%51$$hSa2JXeHJXb*M0Z*xre%9-%mpSemwx$2xjM%1HTj$PWHBo%npsN$pFTXhNb%Z-$W14aW$%RnFX$mhL-TB3elRtOWlNM*93$EZo-WN*cEhWblpN$jA1b1kyM$Jk$1JJ$*pSWldFcH$aRmhO%FE9PQ",
                              }),
                              className: A_1.authorAvatar,
                              skeleton: true,
                            }),
                            r.jsx("span", {
                              className: A_1.authorName,
                              children: author.name,
                            }),
                          ],
                        })
                      : r.jsxs("div", {
                          className: A_1.author,
                          onMouseEnter: () => {
                            if (onAuthorHover == null) {
                              return undefined;
                            }
                            return onAuthorHover(data);
                          },
                          children: [
                            r.jsx(b.e, {
                              src: c.m(author.avatarUrl || g, null, {
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
                                  "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1ZW1*SFJub*FWM%-w$1c1$2$tRlhO$3hqTTAxMll6Sm9kb%51$$hSa2JXeHJXb*M0Z*xre%9-%mpSemwx$2xjM%1HTj$PWHBo%npsN$pFTXhNb%Z-$W14aW$%RnFX$mhL-TB3elRtOWlNM*93$EZo-WN*cEhWblpN$jA1b1kyM$Jk$1JJ$*pSWldFcH$aRmhO%FE9PQ",
                              }),
                              className: A_1.authorAvatar,
                              skeleton: true,
                            }),
                            r.jsx("span", {
                              className: A_1.authorName,
                              children: author.name,
                            }),
                          ],
                        }),
                  }),
                ],
              }),
              operationMenu
                ? r.jsx("div", {
                    className: A_1.cardActions,
                    children: r.jsx(T.g, {
                      data: operationMenu,
                      position: "br",
                      children: r.jsx("button", {
                        type: "button",
                        className: A_1.moreButton,
                        "aria-label": eW,
                        onClick: ek,
                        children: r.jsx(v.xcf, {
                          size: 12,
                        }),
                      }),
                    }),
                  })
                : null,
            ],
          }),
        ],
      },
    ),
  );
});
export { M as m };
