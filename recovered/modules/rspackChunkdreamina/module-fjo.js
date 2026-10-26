import n from "z8";
import r from "cO";
import a from "bT";
import o from "OQ";
export var C = a.memo(function (e) {
  const { url, aspectRatio, label, resolutionUrlMap, cacheKey } = e;
  const style = a.useMemo(
    () => ({
      "--image-preview-card-aspect-ratio": "".concat(aspectRatio),
    }),
    [aspectRatio],
  );
  return n.jsxs("div", {
    className: "preview-QAvB_i",
    style,
    children: [
      n.jsx(o.sg, {
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
            "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%1-%mlNalIy$1RJNWRHTkhPWFZh$np$d1kzaz$kRnB-$W5CWl$6RjNZMjFXTW1*WFZqTk1WMD$vWTIx%mRtRlhN$2hhTWxWMFkwaEtiR1J0-kd4a2$%RnFX$mhL-TB4d$$uc*xSMFo1$2pO$2$nPT0",
        }),
        className: "image-lB_c26",
        draggable: false,
        enableUseSize: true,
        resolutionUrlMap,
        useCache: !!cacheKey,
        cacheKey,
        sizePickMode: "legacy",
        crossOrigin: "anonymous",
      }),
      n.jsx("div", {
        className: "mask-h29dzz",
      }),
      label
        ? n.jsx("div", {
            className: "label-LcAvx1",
            children: label,
          })
        : null,
    ],
  });
});
