import r from "oa";
import n from "bk";
import i from "z8";
import o from "cO";
import s from "bT";
import _c from "xb";
import d from "OQ";
import { a as a_1 } from "./module-ZkF_2.js";
import p from "./module-YM4.js";
import m from "./module-wk_2.js";
import { A } from "./module-Gvv.js";
export var W = s.forwardRef(function (e, ref) {
  const {
    baseUrl,
    baseUrlMap,
    coverUrl,
    coverUrlMap,
    enableStateOverlay = false,
    stateOverlayClassName,
    coverRotationState,
    variant = "default",
    lazy = false,
    className,
  } = e;
  const k = a_1();
  const _ = !!(baseUrlMap && Object.keys(baseUrlMap).length);
  const C = !!(coverUrlMap && Object.keys(coverUrlMap).length);
  const x = i.jsx("img", {
    className: A.vinylImage,
    src: o.m(m, null, {
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
        "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1ZW1*SFJub*FWM%-w$1c1$2$tRlhO$3hqTTAxMldWaFdhMkZ-T0hSWk1rWj$Xa001TW1*WE5%$mlRekZxWWpO-WJHTnBO$EJqTTJob1kyMWtN$04z%FQwPQ",
    }),
    alt: "",
    draggable: false,
    "aria-hidden": "true",
  });
  const S = i.jsx("div", {
    className: A.vinylLoadingPlaceholder,
    "aria-hidden": "true",
  });
  const R = i.jsx(
    "img",
    n._(r._({}, k), {
      className: A.coverImage,
      src: o.m(p, null, {
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
          "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1ZW1*SFJub*FWM%-w$1c1$2$tRlhO$3hqTTAxMldWaFdhMkZ-T0hSWk1rWj$Xa001TW1*WE5%$mlRekZxWWpO-WJHTnBO$EJqTTJob1kyMWtN$04z%FQwPQ",
      }),
      alt: "",
      draggable: false,
    }),
  );
  const N = i.jsx("div", {
    className: A.coverLoadingPlaceholder,
    "aria-hidden": "true",
  });
  return i.jsxs("div", {
    className: _c(A.vinylCover, className),
    children: [
      i.jsx(d.sg, {
        layoutClassName: A.vinylBase,
        imageClassName: A.vinylImage,
        src: o.m(baseUrl || m, null, {
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
            "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1ZW1*SFJub*FWM%-w$1c1$2$tRlhO$3hqTTAxMldWaFdhMkZ-T0hSWk1rWj$Xa001TW1*WE5%$mlRekZxWWpO-WJHTnBO$EJqTTJob1kyMWtN$04z%FQwPQ",
        }),
        crossOrigin: "anonymous",
        alt: "",
        draggable: false,
        "aria-hidden": "true",
        placeholder: S,
        errorPlaceHolder: x,
        resolutionUrlMap: _ ? baseUrlMap : undefined,
        sizePickMode: _ ? "legacy" : "none",
        lazy,
      }),
      variant === "loading"
        ? i.jsx("div", {
            className: A.loadingCoverPlaceholder,
          })
        : i.jsx(
            d.sg,
            n._(r._({}, k), {
              elementTiming: k.elementtiming,
              ref,
              layoutClassName: _c(A.cover, {
                [A.coverRotating]: coverRotationState,
                [A.coverRotationPaused]: coverRotationState === "paused",
              }),
              imageClassName: A.coverImage,
              src: o.m(coverUrl || p, null, {
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
                  "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1ZW1*SFJub*FWM%-w$1c1$2$tRlhO$3hqTTAxMldWaFdhMkZ-T0hSWk1rWj$Xa001TW1*WE5%$mlRekZxWWpO-WJHTnBO$EJqTTJob1kyMWtN$04z%FQwPQ",
              }),
              crossOrigin: "anonymous",
              draggable: false,
              alt: "",
              "data-apm-action": "audio-card-vinyl-cover",
              placeholder: N,
              errorPlaceHolder: R,
              resolutionUrlMap: C ? coverUrlMap : undefined,
              sizePickMode: C ? "legacy" : "none",
              lazy,
            }),
          ),
      coverRotationState === "running"
        ? i.jsx("img", {
            className: A.tonearm,
            src: o.m(
              "data:image/png;base64,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",
              null,
              {
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
                  "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1ZW1*SFJub*FWM%-w$1c1$2$tRlhO$3hqTTAxMldWaFdhMkZ-T0hSWk1rWj$Xa001TW1*WE5%$mlRekZxWWpO-WJHTnBO$EJqTTJob1kyMWtN$04z%FQwPQ",
              },
            ),
            alt: "",
            draggable: false,
            "aria-hidden": "true",
          })
        : null,
      enableStateOverlay
        ? i.jsx("div", {
            className: _c(A.stateOverlay, stateOverlayClassName),
          })
        : null,
    ],
  });
});
