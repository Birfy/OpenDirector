import r from "z8";
import a from "bT";
import o from "yw";
import s from "cO";
import c from "OQ";
import v from "SEl";
import * as b from "./module-Ak_2.js";
const i = a.memo(function () {
  return r.jsx("div", {
    className: "cover-h4_PGF",
    children: r.jsx(o.jQO, {}),
  });
});
const l = a.memo(function () {
  return r.jsx("div", {
    className: "cover-USN1sE",
  });
});
const u = a.memo(function (e) {
  const { resource } = e;
  const { url, remoteExtraInfo: { resolutionUrlMap, cacheKey } = {} } =
    resource;
  return r.jsx(c.sg, {
    src: s.m(url, null, {
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
        "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-lZwWFJqQmtXRXBzWTNrNWFtSXlO$EJh$np$d1R*Z*tiR0p0$m5sWld*SjJZMms1-0dKd$$te*pi$FZvWWtNNWQyTnRWbnBh$np$d1dWaFNjR0l5Tldoa$F6RnFZakl4ZDJJe%5Xe*libEo2$ERKT2RtSn$$bXhp-mx*MFdqSldk$nBZ%21oa1J6bD$%RmhL-kdNe%9%Rmpi$T$z$EZoT2JHSkhWbXBr%Xpsc$lqSTFNRnB-TlRCT$-y%nNZbTFXZ$ZsW$$uWmph$E-1$2xoT2Rt%llTbXBh$Xp*NldsZDRiRmt6$$hSa%0wSXdZ$mM1ZF$4W*JI%lpWMlJz$EZkT2Rt%nRWbmxN-mxKNlp$ZEdl$m96$m5vPQ",
    }),
    className: "cover-ZfF_Wm",
    width: 32,
    height: 32,
    draggable: false,
    enableUseSize: false,
    resolutionUrlMap,
    useCache: true,
    cacheKey,
    sizePickMode: "legacy",
    crossOrigin: "anonymous",
  });
});
const d = a.memo(function () {
  return r.jsx("div", {
    className: "cover-GBG5bU",
  });
});
const m = a.memo(function () {
  return r.jsx("div", {
    className: "cover-krsuUe",
  });
});
const p = a.memo(function (e) {
  const { resource } = e;
  const { coverUrl, duration } = resource;
  const children = a.useMemo(() => v.X(duration, "mm:ss"), [duration]);
  return r.jsxs("div", {
    className: "cover-_D1TDg",
    children: [
      r.jsx("img", {
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
            "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-lZwWFJqQmtXRXBzWTNrNWFtSXlO$EJh$np$d1R*Z*tiR0p0$m5sWld*SjJZMms1-0dKd$$te*pi$FZvWWtNNWQyTnRWbnBh$np$d1dWaFNjR0l5Tldoa$F6RnFZakl4ZDJJe%5Xe*libEo2$ERKT2RtSn$$bXhp-mx*MFdqSldk$nBZ%21oa1J6bD$%RmhL-kdNe%9%Rmpi$T$z$EZoT2JHSkhWbXBr%Xpsc$lqSTFNRnB-TlRCT$-y%nNZbTFXZ$ZsW$$uWmph$E-1$2xoT2Rt%llTbXBh$Xp*NldsZDRiRmt6$$hSa%0wSXdZ$mM1ZF$4W$duQmFSM$oy$EZkT2Rt%nRWbmxN-mxKNlp$ZEdl$m96$m5vPQ",
        }),
        width: 16,
        height: 16,
        className: "image-sGaWEA",
        draggable: false,
        crossOrigin: "anonymous",
        alt: "",
      }),
      r.jsx("span", {
        className: "duration-rKIj7s",
        children,
      }),
    ],
  });
});
const g = a.memo(function (e) {
  const { option } = e;
  const {
    extra: { resource },
  } = option;
  switch (resource.type) {
    case "image":
      return r.jsx(u, {
        resource,
      });
    case "video":
      return r.jsx(p, {
        resource,
      });
    case "audio":
      return r.jsx(i, {});
    case "markdown":
      return r.jsx(d, {});
    case "pdf":
      return r.jsx(m, {});
    case "docx":
      return r.jsx(l, {});
  }
});
export var n = a.memo(function (e) {
  const { option, checked } = e;
  return r.jsx(b.e, {
    label: option.label,
    cover: r.jsx(g, {
      option,
    }),
    checked,
  });
});
