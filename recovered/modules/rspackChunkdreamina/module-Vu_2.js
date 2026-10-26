import r from "oa";
import n from "bk";
import a from "z8";
import "xj";
import o from "R8";
import s from "cO";
import l from "bN1";
import d from "yw";
import { A as A_1 } from "./module-z7V.js";
export function m(e) {
  var {
    actions,
    canSelect,
    coverAlt = "",
    coverUrl,
    description,
    dragging,
    dropLabel,
    mode = "modal",
    onAssetSelect,
    onCoverError,
    onLocalUpload,
    preparing,
    preparingIndicator,
    recoveryAction,
    showCover = !!coverUrl,
    statusMessage,
    title,
    uploadAreaProps,
    uploadHint,
  } = e;
  const x = l.k();
  return a.jsxs("div", {
    className: A_1.content,
    children: [
      a.jsx("div", {
        className: A_1.cover,
        "data-cover-state": showCover && coverUrl ? "ready" : "empty",
        "aria-hidden": !showCover || !coverUrl || undefined,
        children:
          showCover && coverUrl
            ? a.jsx(
                "img",
                n._(r._({}, x), {
                  className: A_1.coverImage,
                  src: s.m(coverUrl, null, {
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
                      "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%1-%mlNalIy$1RJNWRHTkhPWFZh$np$d1kzaz$NR0l5T1hOT$d*WjNZa2M1-%ZwRE1Xd*hWMFp6WWpKamRt%khPWFpp%XpFeFkwZDRkb*x-$$hS-$Iye*9Za2M1-mt4W*$Ha*xWemt4Wk$NM%1HTXphR2hq-ldReFkz-zlQ%T09",
                  }),
                  crossOrigin: "anonymous",
                  alt: coverAlt,
                  onError: onCoverError,
                }),
              )
            : null,
      }),
      a.jsxs("div", {
        className: A_1.introduction,
        children: [
          a.jsx("h1", {
            className: A_1.title,
            children: title,
          }),
          description
            ? a.jsx("p", {
                className: A_1.description,
                children: description,
              })
            : null,
        ],
      }),
      a.jsxs(
        "div",
        n._(r._({}, uploadAreaProps), {
          className: ""
            .concat(A_1.uploadArea, " ")
            .concat(dragging ? A_1.uploadAreaDragging : ""),
          children: [
            dragging
              ? a.jsxs("div", {
                  className: A_1.dragIndicator,
                  role: "status",
                  children: [
                    a.jsx(d.xZp, {
                      size: 24,
                    }),
                    a.jsx("span", {
                      className: A_1.assistiveText,
                      children: dropLabel,
                    }),
                  ],
                })
              : null,
            !dragging && preparing
              ? a.jsxs("div", {
                  className: A_1.preparingState,
                  role: "status",
                  children: [
                    preparingIndicator
                      ? a.jsx("span", {
                          className: A_1.preparingIcon,
                          children: preparingIndicator,
                        })
                      : null,
                    a.jsx("span", {
                      className: A_1.preparingLabel,
                      children: statusMessage,
                    }),
                  ],
                })
              : null,
            dragging || preparing
              ? null
              : a.jsxs(a.Fragment, {
                  children: [
                    a.jsxs("div", {
                      className: A_1.uploadText,
                      children: [
                        statusMessage
                          ? a.jsx("div", {
                              className: A_1.status,
                              role: "status",
                              children: a.jsx("span", {
                                children: statusMessage,
                              }),
                            })
                          : null,
                        a.jsx("p", {
                          className: A_1.uploadHint,
                          children: uploadHint,
                        }),
                      ],
                    }),
                    a.jsx("div", {
                      className: A_1.actions,
                      children: recoveryAction
                        ? a.jsx(o.A, {
                            className: A_1.actionButton,
                            type: "secondary",
                            onClick: recoveryAction.onClick,
                            children: recoveryAction.label,
                          })
                        : a.jsxs(a.Fragment, {
                            children: [
                              a.jsx(o.A, {
                                className: A_1.actionButton,
                                type: "secondary",
                                icon: a.jsx(d.nre, {
                                  size: mode === "page" ? 20 : 16,
                                }),
                                disabled: !canSelect,
                                onClick: onLocalUpload,
                                children: actions.localUpload,
                              }),
                              a.jsx(o.A, {
                                className: A_1.actionButton,
                                type: "secondary",
                                icon: a.jsx(d.AWy, {
                                  size: mode === "page" ? 20 : 16,
                                }),
                                disabled: !canSelect,
                                onClick: onAssetSelect,
                                children: actions.assetSelect,
                              }),
                            ],
                          }),
                    }),
                  ],
                }),
          ],
        }),
      ),
    ],
  });
}
