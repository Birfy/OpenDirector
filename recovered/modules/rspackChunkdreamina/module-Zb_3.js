import r from "z8";
import n from "cO";
import i from "bT";
import s from "OQ";
import o from "iZ";
import * as l from "./module-O92.js";
const c = {
  default: 16,
  large: 24,
};
export var R = i.memo(function (e) {
  const {
    url,
    resolutionUrlMap,
    cacheKey,
    size = "default",
    onAspectRatioChange,
    loadingSkeleton = false,
  } = e;
  const [h, setH] = i.useState();
  const v = h === url;
  const b = loadingSkeleton && !v;
  const f = loadingSkeleton && !v;
  const _ = c[size];
  const onLoad = i.useCallback(
    (e) => {
      if (loadingSkeleton) {
        setH(url);
      }
      var { naturalWidth, naturalHeight } = e.currentTarget;
      if (naturalHeight > 0) {
        if (onAspectRatioChange != null) {
          onAspectRatioChange(naturalWidth / naturalHeight);
        }
      }
    },
    [onAspectRatioChange, loadingSkeleton, url],
  );
  return r.jsxs(l.u, {
    size,
    className: loadingSkeleton ? "skeleton-thumbnail-VJJ1dL" : undefined,
    children: [
      r.jsx(s.sg, {
        src: n.m(url, null, {
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
            "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%1-%mlNalIy$1RJNWRHTkhPWFZh$np$d1kzaz$l$nB-$214amJWWjFX$EpWZEdSSFJtN%1NMHBz$20x$2$WcFhO$3Bh$Xp*d1lsZEdibHB%T$RCWl-yTjJZMjFX-lZwW$Nte*li$T$z$EZkc2R*bFhaR3hN$0ZKb1dua3hNR0ZJ$m5SWmJ%$m9Z$mQzZFdSS$Rq%lpXRXB1WkZoTlBRPT0",
        }),
        imageStyle: f
          ? {
              visibility: "hidden",
            }
          : undefined,
        width: _,
        height: _,
        className: "image-z6diWu",
        draggable: false,
        enableUseSize: false,
        resolutionUrlMap,
        useCache: !!cacheKey,
        cacheKey,
        sizePickMode: "legacy",
        crossOrigin: "anonymous",
        onLoad,
      }),
      b
        ? r.jsx(o.D, {
            className: "loading-skeleton-jDakpu",
          })
        : null,
    ],
  });
});
