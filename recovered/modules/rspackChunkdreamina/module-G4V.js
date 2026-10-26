import r from "oa";
import a from "bk";
import o from "qa";
import i from "z8";
import l from "cO";
import s from "bT";
import c from "OQ";
import u from "wF";
import d from "Kt";
import m from "Dla";
import { O } from "./module-h6l.js";
import { A } from "./module-pgX.js";
const g = s.memo(c.sg);
export var R = s.memo(function (e) {
  const { imageUrl, resolutionUrlMap, cacheKey, onLoad, onError, onClick } = e;
  const y = o._(e, [
    "imageUrl",
    "resolutionUrlMap",
    "cacheKey",
    "onLoad",
    "onError",
    "onClick",
  ]);
  const x = u.h(d._);
  const onClick_1 = s.useCallback(
    (e) => {
      if (onClick != null) {
        onClick(e);
      }
      if (!e.defaultPrevented && imageUrl) {
        m.H(x, {
          items: [
            {
              type: "image",
              url: imageUrl,
            },
          ],
        });
      }
    },
    [x, imageUrl, onClick],
  );
  const children = s.useMemo(() => {
    if (resolutionUrlMap) {
      return i.jsx(g, {
        alt: "",
        src: l.m(imageUrl, null, {
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
            "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%1-%mlNalIy$1RJNWRHTkhPWFZh$np$d1kzaz$l$nB-$214amJWWjFX$EpWZ*1OdFZtMWFXRXBzWW0xT2JFeFhiSFJa$jJSc1RHN$Nlb$ZI%m5s-%0xWj-",
        }),
        className: A.image,
        width: 48,
        height: 64,
        draggable: false,
        enableUseSize: false,
        resolutionUrlMap,
        useCache: true,
        cacheKey,
        sizePickMode: "legacy",
        crossOrigin: "anonymous",
        "data-apm-action": "content-generator-reference-image",
        onLoad,
        onError,
      });
    }
    return i.jsx("img", {
      alt: "",
      className: A.image,
      src: l.m(imageUrl, null, {
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
          "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%1-%mlNalIy$1RJNWRHTkhPWFZh$np$d1kzaz$l$nB-$214amJWWjFX$EpWZ*1OdFZtMWFXRXBzWW0xT2JFeFhiSFJa$jJSc1RHN$Nlb$ZI%m5s-%0xWj-",
      }),
      crossOrigin: "anonymous",
      draggable: false,
      onError,
      onLoad,
    });
  }, [imageUrl, resolutionUrlMap, cacheKey, onLoad, onError]);
  return i.jsx(
    O,
    a._(r._({}, y), {
      onClick: onClick_1,
      children,
    }),
  );
});
